(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))T(x);new MutationObserver(x=>{for(const K of x)if(K.type==="childList")for(const _ of K.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&T(_)}).observe(document,{childList:!0,subtree:!0});function I(x){const K={};return x.integrity&&(K.integrity=x.integrity),x.referrerPolicy&&(K.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?K.credentials="include":x.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function T(x){if(x.ep)return;x.ep=!0;const K=I(x);fetch(x.href,K)}})();const WN="modulepreload",XN=function(j,S){return new URL(j,S).href},Og={},Bg=function(S,I,T){let x=Promise.resolve();if(I&&I.length>0){const _=document.getElementsByTagName("link"),z=document.querySelector("meta[property=csp-nonce]"),_e=z?.nonce||z?.getAttribute("nonce");x=Promise.allSettled(I.map($e=>{if($e=XN($e,T),$e in Og)return;Og[$e]=!0;const Lt=$e.endsWith(".css"),Js=Lt?'[rel="stylesheet"]':"";if(!!T)for(let sn=_.length-1;sn>=0;sn--){const rn=_[sn];if(rn.href===$e&&(!Lt||rn.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${$e}"]${Js}`))return;const xt=document.createElement("link");if(xt.rel=Lt?"stylesheet":WN,Lt||(xt.as="script"),xt.crossOrigin="",xt.href=$e,_e&&xt.setAttribute("nonce",_e),document.head.appendChild(xt),Lt)return new Promise((sn,rn)=>{xt.addEventListener("load",sn),xt.addEventListener("error",()=>rn(new Error(`Unable to preload CSS for ${$e}`)))})}))}function K(_){const z=new Event("vite:preloadError",{cancelable:!0});if(z.payload=_,window.dispatchEvent(z),!z.defaultPrevented)throw _}return x.then(_=>{for(const z of _||[])z.status==="rejected"&&K(z.reason);return S().catch(K)})},QN="ru",VN={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},zl={defaultLocale:QN,locales:VN},YN=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Jl="not-found",Gs=zl.defaultLocale,ZN=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),Wg=/^n[1-5]$/i,eL=/^[A-Za-z0-9_-]+$/,tL=/^[\p{Letter}\p{Number}_-]+$/u,nL=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,sL=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,rL=new Map(Object.entries(zl.locales).map(([j,S])=>[String(S.urlSegment).toLowerCase(),j]));function ye(j,S,I,T,x={},K=Gs,_={}){return{status:"valid",source:j,route:S,locale:K,params:x,raw:I,segments:T,..._}}function we(j,S,I,T=[],x=Gs,K){return{status:"not-found",source:j,route:Jl,locale:x,params:{},raw:I,segments:T,reason:S,canonicalPath:K}}function Xg(j){return!!(j&&YN.includes(j))}function Bl(j){const S=String(j||"").trim().toUpperCase();return Wg.test(S)?S:""}function Qg(j){try{return{ok:!0,value:decodeURIComponent(j)}}catch{return{ok:!1}}}function Hl(j){return j.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function Re(j,S,I=Hl(S)){return we("hash",j,S,I)}function Ul(j){return eL.test(j)}function aL(j){return tL.test(j)}function En(j){const S=String(j||"").replace(/^#/,"").trim(),I=Qg(S);if(!I.ok)return Re("invalid-parameter",S,[]);const T=I.value.replace(/^\/+|\/+$/g,""),x=Hl(T),K=(x[0]||"home").toLowerCase();if(!x.length)return ye("hash","home",T,x);if(K==="jlpt"){if(x.length<2||x.length>3)return Re("unknown-route",T,x);const _=Bl(x[1]);if(!_)return Re("invalid-parameter",T,x);const z=x[2]||"";return z&&!Ul(z)?Re("invalid-parameter",T,x):ye("hash","textbooks",T,x,{level:_,subroute:z,legacyRoute:"jlpt"})}if(K==="textbooks"){if(x.length>3)return Re("unknown-route",T,x);if(x.length===1)return ye("hash","textbooks",T,x);const _=Bl(x[1]);if(!_)return Re("invalid-parameter",T,x);const z=x[2]||"";return z&&!Ul(z)?Re("invalid-parameter",T,x):ye("hash","textbooks",T,x,{level:_,subroute:z})}if(K==="jlpt-lesson"){if(x.length!==2)return Re("unknown-route",T,x);const _=Bl(x[1]);return _?ye("hash","jlpt-lesson",T,x,{level:_}):Re("invalid-parameter",T,x)}if(K==="kanji"){if(x.length!==2)return Re("unknown-route",T,x);const _=x[1];return aL(_)?ye("hash","kanji",T,x,{cardId:_}):Re("invalid-parameter",T,x)}if(K==="learn"){if(x.length===1)return ye("hash","learn",T,x,{view:"map"});if(x.length!==3)return Re("unknown-route",T,x);const _=x[1].toLowerCase(),z=x[2];return!["lesson","legacy"].includes(_)||!Ul(z)?Re("invalid-parameter",T,x):ye("hash","learn",T,x,{view:_,targetId:z})}return ZN.has(K)?x.length!==1?Re("unknown-route",T,x):ye("hash",K,T,x):(Xg(K),Re("unknown-route",T,x))}function iL(j){return String(j||"/").split(/[?#]/,1)[0]||"/"}function oL(j){const S=iL(j),I=Qg(S);if(!I.ok)return{ok:!1,raw:S};const T=I.value.replace(/\/{2,}/g,"/"),x=T.startsWith("/")?T:`/${T}`,K=x===""?"/":x;return{ok:!0,path:K,segments:Hl(K)}}function lL(j){return rL.get(j.toLowerCase())||null}function Us(j,S="/"){return`/${zl.locales[j].urlSegment}${S.startsWith("/")?S:`/${S}`}`}function Vg(j){const S=oL(j);if(!S.ok)return we("pathname","invalid-parameter",S.raw,[],null);const{path:I,segments:T}=S,x=I;if(I==="/"||/^\/index\.html$/i.test(I))return ye("pathname","home",x,T,{},Gs,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(I))return ye("pathname","home",x,T,{},Gs,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(I))return ye("pathname","download",x,T,{},Gs,{kind:"download",canonicalPath:"/download/"});if(!T.length)return ye("pathname","home",x,T,{},Gs,{kind:"app-shell",canonicalPath:"/"});const K=lL(T[0]);if(!K){const z=sL.test(T[0])?"unknown-locale":"unknown-route";return we("pathname",z,x,T,null)}if(T.length===1)return ye("pathname","home",x,T,{},K,{kind:"localized-home",canonicalPath:Us(K,"/")});const _=T[1].toLowerCase();if(_==="download"&&T.length===2)return ye("pathname","download",x,T,{},K,{kind:"download",canonicalPath:Us(K,"/download/")});if(_==="textbooks"){if(T.length===2)return ye("pathname","textbooks",x,T,{},K,{kind:"textbooks",canonicalPath:Us(K,"/textbooks/")});if(T.length===3){const z=T[2].toLowerCase();return Wg.test(z)?ye("pathname","textbooks",x,T,{level:z.toUpperCase()},K,{kind:"textbook-level",canonicalPath:Us(K,`/textbooks/${z}/`)}):we("pathname","invalid-parameter",x,T,K)}return we("pathname","unknown-route",x,T,K)}if(_==="kanji"){if(T.length===2)return ye("pathname","dictionary",x,T,{},K,{kind:"kanji-hub",canonicalPath:Us(K,"/kanji/")});if(T.length===3){const z=T[2].toLowerCase();return nL.test(z)?ye("pathname","kanji",x,T,{slug:z},K,{kind:"kanji-page",canonicalPath:Us(K,`/kanji/${z}/`)}):we("pathname","invalid-parameter",x,T,K)}return we("pathname","unknown-route",x,T,K)}return we("pathname","unknown-route",x,T,K)}function Ug(j){const S=Vg(j);return S.status==="valid"&&(S.kind==="app-shell"||S.kind==="legacy-index")}function cL(j){const S=()=>j(En(window.location.hash));return window.addEventListener("hashchange",S),()=>window.removeEventListener("hashchange",S)}function dL(){let j=0,S=null;return{begin(I){S?.abort(),S=new AbortController;const T=++j,x=S;return{route:I,token:T,signal:x.signal,isCurrent:()=>j===T&&!x.signal.aborted}},abort(){S?.abort()}}}const Qr=[5,60,12*60,24*60,2*24*60,4*24*60],Gl={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function ji(j){const S=j&&typeof j=="object"?j:{},I=pL(S.state??S.stage),T=gL(S.dueAt??S.nextReview),x=Pn(S.reviewCount??S.reviews,0),K=Pn(S.correct,0),_=Pn(S.wrong,0),z={...S,state:I,dueAt:T,reviewCount:x,intervalDays:Pn(S.intervalDays,0),easeFactor:Pn(S.easeFactor,2.5),srsStep:Pn(S.srsStep,I==="New"?-1:0),lapses:Pn(S.lapses,0),correct:K,wrong:_,successRate:Pn(S.successRate,K+_?Math.round(K/(K+_)*100):0),history:Array.isArray(S.history)?S.history.slice(-120):[]};return delete z.nextReview,delete z.reviews,delete z.stage,delete z.lastReview,z}function pe(j,S,I=S,T=new Date){const x=ji(j),K=uL(x,S),_={...x,history:[...x.history]};let z=x.srsStep,_e=x.easeFactor;K==="again"?(z=0,_e=Math.max(1.3,_e-.2),_.state="Learning",_.wrong+=1,x.state!=="New"&&(_.lapses+=1)):K==="hard"?(z=Math.max(1,z),_e=Math.max(1.3,_e-.15),_.correct+=1):K==="easy"?(z=z<0?2:z+2,_e=Math.min(3.2,_e+.15),_.correct+=1):(z=z<0?0:z+1,_.correct+=1);const $e=mL(z)/1440;return K!=="again"&&(_.state=$e<1?"Learning":"Review"),_.correct>=8&&$e>=30&&(_.state="Mastered"),_.srsStep=z,_.easeFactor=Gg(_e,2),_.intervalDays=Gg($e,6),_.dueAt=new Date(T.getTime()+$e*864e5).toISOString(),_.reviewCount+=1,_.successRate=Math.round(_.correct/Math.max(_.correct+_.wrong,1)*100),_.lastReviewedAt=T.toISOString(),_.lastRating=Gl[I]||Gl[K],_.lastDecision=Gl[K],_.history=[..._.history,{at:T.toISOString(),rating:_.lastRating,decision:_.lastDecision,from:x.state,to:_.state,intervalDays:$e,srsStep:z}].slice(-120),_}function uL(j,S){return S==="again"||S==="forgot"?"again":S!=="remember"?S:j.state==="New"?"good":j.state==="Learning"?j.successRate>=70||j.correct>=2?"good":"hard":j.successRate>=88&&j.correct>=5&&j.lapses<=1?"easy":j.successRate<70||j.lapses>Math.max(1,Math.floor(j.correct/3))?"hard":"good"}function pL(j){const S=String(j||"new").toLowerCase();return S.includes("master")?"Mastered":S.includes("learn")?"Learning":S.includes("review")?"Review":"New"}function gL(j){return typeof j!="string"||!Number.isFinite(Date.parse(j))?null:new Date(j).toISOString()}function Pn(j,S){const I=Number(j);return Number.isFinite(I)&&I>=0?I:S}function Gg(j,S){const I=10**S;return Math.round(j*I)/I}function mL(j){return j<Qr.length?Qr[Math.max(0,j)]:Qr[Qr.length-1]*2**(j-(Qr.length-1))}const Yg="flashKanji.progress.v2",fL="flashKanji.progress.v1";function hL(j=localStorage){const S=j.getItem(Yg)||j.getItem(fL);if(!S)return null;try{const I=JSON.parse(S);if(!I||typeof I!="object")return null;const T=I;return T.progress&&typeof T.progress=="object"?T.progress:T}catch(I){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",I),null}}function vL(j){return!j||typeof j!="object"?{}:Object.fromEntries(Object.entries(j).map(([S,I])=>[S,ji(I)]))}function wL(j,S=localStorage){try{return S.setItem(Yg,JSON.stringify(j)),!0}catch(I){return console.warn("Flash Kanji could not save LocalStorage progress.",I),!1}}const bL=/[\/／,、;；\s]+/u,kL=/[\u30a1-\u30f6]/g,yL=/[()[\]{}.\-‐-―]/gu;function $L(j){return String(j||"").normalize("NFKC").replace(kL,S=>String.fromCharCode(S.charCodeAt(0)-96))}function Zg(j){return(Array.isArray(j)?j.join(" / "):String(j||"")).split(bL).map(I=>$L(I).replace(yL,"").trim()).filter(Boolean)}function jL(j){if(!j)return[];const S=[...Jg("onyomi","On",j.onyomi),...Jg("kunyomi","Kun",j.kunyomi)],I=new Set,T=S.filter(_=>{const z=_.kana;return!z||I.has(z)?!1:(I.add(z),!0)});if(T.length)return T;const x=Zg(j.hiragana)[0];if(x)return[{kind:"hiragana",kana:x,label:"Kana"}];const K=String(j.kanji||"").trim();return K?[{kind:"kanji",kana:K,label:"Kanji"}]:[]}function SL(j,S=-1,I=""){const T=I&&I!=="cycle"?j.filter(K=>K.kind===I):j;if(!T.length)return{item:null,cursor:-1};const x=(Number(S)+1)%T.length;return{item:T[x],cursor:x}}function NL(j,S={}){const I=String(j||"").trim(),T=typeof window<"u"?window:void 0,x=S.synth||T?.speechSynthesis,K=S.Utterance||T?.SpeechSynthesisUtterance;if(!I||!x||!K)return!1;x.cancel();const _=new K(I);_.lang="ja-JP",_.rate=S.rate??.92,_.voice=LL(x),_.onend=()=>S.onEnd?.(),_.onerror=z=>S.onError?.(z);try{return x.speak(_),!0}catch(z){return S.onError?.(z),!1}}function Jg(j,S,I){return Zg(I).map(T=>({kind:j,kana:T,label:S}))}function LL(j){const S=typeof j.getVoices=="function"?j.getVoices():[];return S.find(I=>/^ja[-_]?JP$/iu.test(I.lang))||S.find(I=>/^ja/iu.test(I.lang))||null}const Si="flashKanji.hasVisited",Ni="flashKanji.changelog.lastSeenVersion",em=new Set;function xL(j){if(!j||typeof j!="object")return null;const S=j,I=String(S.currentVersion||"").trim();if(!I)return null;const T=Array.isArray(S.entries)?S.entries.map(TL).filter(x=>!!x):[];return T.length?{currentVersion:I,entries:T}:null}function CL(j,S,I,T={}){const x=j?.currentVersion||"",K=j?.entries.find(_e=>_e.version===x)||j?.entries[0]||null;return!j||!x||!K||em.has(x)?{currentVersion:x,shouldShow:!1,shouldMarkHandled:!1,entry:null}:Hg(I,Ni)===x?{currentVersion:x,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(T.hadPriorVisit||Hg(I,Si)==="true"||T.useProgressSignals!==!1&&AL(S))?{currentVersion:x,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:x,shouldShow:!0,shouldMarkHandled:!1,entry:K}}function zg(j,S){const I=String(j||"").trim();I&&(em.add(I),qg(S,Si,"true"),qg(S,Ni,I))}function AL(j){if(!j||typeof j!="object")return!1;const S=j;return!!(Yr(S.appOpens)>0||Vr(S.lessonCompletions)>0||Vr(S.cards)>0||Vr(S.seenKanji)>0||Vr(S.daily)>0||Vr(S.favorites)>0||_L(S.transactions)>0||Yr(S.totalMoonFragmentsEarned)>0||Yr(S.secrets?.evaClicks)>0||S.secrets?.nightVisit||Yr(S.visits?.streak)>0||Yr(S.visits?.bestStreak)>0)}function TL(j){if(!j||typeof j!="object")return null;const S=j,I=String(S.version||"").trim();return I?{version:I,date:String(S.date||"").trim(),title:IL(S.title),items:RL(S.items)}:null}function IL(j){const S=j&&typeof j=="object"?j:{};return{ru:String(S.ru||S.en||"").trim(),en:String(S.en||S.ru||"").trim()}}function RL(j){const S=j&&typeof j=="object"?j:{},I=Array.isArray(S.ru)?S.ru.map(x=>String(x||"").trim()).filter(Boolean):[],T=Array.isArray(S.en)?S.en.map(x=>String(x||"").trim()).filter(Boolean):[];return{ru:I.length?I:T,en:T.length?T:I}}function Hg(j,S){try{return j?.getItem(S)||""}catch{return""}}function qg(j,S,I){try{j?.setItem(S,I)}catch{}}function Vr(j){return j&&typeof j=="object"&&!Array.isArray(j)?Object.keys(j).length:0}function _L(j){return Array.isArray(j)?j.length:0}function Yr(j){const S=Number(j||0);return Number.isFinite(S)?S:0}(()=>{const j="flashKanji.pwaInstallPrompt.v2",S="flashKanji.pwaInstallPrompt.v1",I="flashKanji.notificationPrompt.v1",T="flashkanji_customization",x="flashkanji_eva_state_v2",_="local-1785408440835",_e=`flashKanji.hiddenMascotSpeeches:${_}`,$e="moonfarm",Lt="flashKanji.appBuild.v1",Js="flashKanji.pwaCacheReset.v1",Zr="flashKanji.bootRecovery.v1",xt=109492033,sn={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},rn="aleksey.lebedev606@gmail.com",tm="Flash Kanji bug report",nm="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",sm="downloads/flash-kanji-android.apk",rm="assets/download/android-app-screenshot.png",ea="flashKanji.forcePwaCacheReset.v1",O={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},am={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},im={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},Ke=["N5","N4","N3","N2","N1"],ae=new Set,om={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},ql={xp:12,coins:2},Wl="flashKanjiOnboardingCompleted.v3",Xl="flashKanjiOnboardingCompleted",Ql="flashKanjiOnboardingAudience.v1",lm=850,Vl=450,cm=420,zs=72,dm=96,Yl=1,Zl="N5",Ut="map",Ct="lesson",Gt="legacy",je="intro-kanji",is="review-due",os="n5-checkpoint",um=[je,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",os],pm={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},gm=new Set(["lesson-1","lesson-2","bulk-n5-01"]),ec=7e3,tc=8e3,mm=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),ie=$i(),r={route:ie.route,routeMatch:ie,routeNotFound:ie.status==="not-found"?ie:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:ie.status==="valid"&&ie.params.level||null,activeTextbookLevel:ie.status==="valid"&&ie.route==="textbooks"&&ie.params.level||null,activeTextbookSubroute:ie.status==="valid"&&ie.route==="textbooks"&&ie.params.subroute||null,activeLearnView:ie.status==="valid"&&ie.route==="learn"&&ie.params.view||Ut,activeLearnNodeId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===Ct&&ie.params.targetId||null,activeLearnLegacyLessonId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===Gt&&ie.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:ie.status==="valid"&&ie.route==="kanji"&&ie.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:zs,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:vi(),notificationPrompt:Hr(),notificationPromptVisible:!1,changelog:null,changelogModal:null,deferredDataLoaded:!1,deferredDataLoading:!1};r.route==="textbooks"&&!r.routeNotFound&&tt(Dg(mN(),fN()));const fm=dL();let ta=null,At=null,nc="",sc=new Map,Hs=0,rc=0,ls=0,Kn=0,Li=!1,Dn=0,xi=!1,Fn=0,na=!1,ac=!1,sa=0,ra=!1,aa=null,an=null,ic=0,Ci=0,cs=0,qs=0,Ai=null,ue=null,Je=null,Le=null,Tt=-1,mt=!1,be="step",It=null,oc=null,hm=null,vm=null,Ws=null,Xs=0,lc=0,Qs=null,ia=null,Vs=null;const oa=new Map;let Ti=0,Ii=0,Ri=Math.floor(Date.now()/6e4),cc=0,la="",_i=[];const Mi=new Map,On=new Map,Pi=new Set,Ei=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Y={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},xe=(e,t=document)=>t.querySelector(e),Ki=(e,t=document)=>Array.from(t.querySelectorAll(e)),on=xe("#app"),wm=document.title||"Flash Kanji",dc=xe("#progressImport");document.addEventListener("click",nh),document.addEventListener("pointerdown",sh),document.addEventListener("input",sd),document.addEventListener("change",sd),document.addEventListener("keydown",oh),window.flashKanjiFarmMoon=(e=5e3)=>rd(e),window.startFlashKanjiOnboarding=go,dc.addEventListener("change",$0),window.addEventListener("beforeinstallprompt",X0),window.addEventListener("appinstalled",Pl),window.addEventListener("scroll",fo,{passive:!0}),window.addEventListener("resize",fo),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||Rd(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||bi("usage"),!document.hidden&&r.route==="eva-room"&&or("return")&&(N(),C()),document.hidden&&Zi()}),window.addEventListener("pagehide",Zi),window.addEventListener("beforeunload",Zi),cL(()=>{const e=Ol($i()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,a=t==="textbooks"&&n.level||null,o=t==="textbooks"&&n.subroute||null,c=t==="jlpt-lesson"&&n.level||null,l=t==="learn"&&n.view||Ut,d=t==="learn"&&l===Ct&&n.targetId||null,u=t==="learn"&&l===Gt&&n.targetId||null,m=Fg(r.routeNotFound),h=e.status==="not-found"?Fg(e):"";if(t!==r.route||t==="kanji"&&s!==r.kanjiPageId||t==="textbooks"&&a!==r.activeTextbookLevel||t==="textbooks"&&o!==r.activeTextbookSubroute||t==="jlpt-lesson"&&c!==r.activeJlptLesson||t==="learn"&&l!==r.activeLearnView||t==="learn"&&d!==r.activeLearnNodeId||t==="learn"&&u!==r.activeLearnLegacyLessonId||m!==h){const v=r.route;r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,v!==t&&(v==="review"||t==="review")&&(r.reviewSession=null),r.kanjiPageId=t==="kanji"?s:null,r.activeTextbookLevel=t==="textbooks"?a:null,r.activeTextbookSubroute=t==="textbooks"?o:null,r.activeJlptLesson=t==="jlpt-lesson"?c:r.activeJlptLesson,r.activeLearnView=t==="learn"?l:Ut,r.activeLearnNodeId=t==="learn"?d:null,r.activeLearnLegacyLessonId=t==="learn"?u:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,t!=="eva-room"&&(r.evaRoomShopOpen=!1),jt(),ja(),He(),Ys(t)&&ca({route:t,delay:0}),t==="eva-room"&&Ne("room_opened")}}),bm();async function bm(){if(!await Tm()&&!await Am()){uc(!0),on.innerHTML.trim()?on.setAttribute("aria-busy","true"):on.innerHTML=Ag(),r.progress=$f(),Ds(),xl(),O0(),Cl(),nn();try{const[e,t,n,s,a,o,c,l]=await Promise.all([pc({initialOnly:!0}),nt(O.i18n),nt(O.dialogues),nt(O.rewards,Sm),nt(O.achievements,()=>({achievements:[],categories:[]})),nt(O.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),nt(O.jlptLessons,()=>({items:[]})),nt(O.changelog,()=>null)]),d=xc(a,s.achievements||[]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.dialogues=n,r.rewards=s,r.achievements=d.items,r.achievementCategories=d.categories,r.jlptCatalog=Gm(o),r.jlptLessons=Um(c),r.rewards.achievements=r.achievements;const u=mh(r.progress);er(),hh(),da(),xf(),nn(),Z0(),Jj(),fh(u),qj(),X(),Xr(Ol($i()));const m=km(l,u);N(),C(),m&&ym(),Lm(),ca({route:r.route,delay:Ys(r.route)?0:ec}),q0(),po(),Lv(),fv(),_g(),Kl();try{sessionStorage.removeItem(Zr)}catch(h){console.warn("Could not clear boot recovery marker after successful startup.",h)}}catch(e){console.error(e),await H0(e)||(on.innerHTML=G0(e))}finally{uc(!1)}}}function uc(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),on&&on.setAttribute("aria-busy",e?"true":"false")}function km(e,t=!1){ac=!!t,r.changelogModal=null;const n=xL(e);if(!n)return!1;r.changelog=n;const s=CL(n,r.progress,Di(),{hadPriorVisit:ac,useProgressSignals:!1});return s.shouldMarkHandled?(zg(s.currentVersion,Di()),!1):!s.shouldShow||!s.entry?!1:(r.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function Di(){try{return window.localStorage}catch{return null}}function ym(){sa&&window.clearTimeout(sa),sa=window.setTimeout(()=>{sa=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function Fi(){const e=r.changelogModal?.version||r.changelog?.currentVersion||"";zg(e,Di()),r.changelogModal=null,C()}function $m(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");a.id=t,a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function jm(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function Sm(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function Nm(){return window.Chart?Promise.resolve():(oc||(oc=$m("vendor/chart.umd.min.js","flash-kanji-chartjs")),oc)}function Lm(){window.setTimeout(()=>{hm||(hm=Bg(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{Ds(),x0()}).catch(e=>console.warn("UX sound module failed to load.",e))),vm||(vm=Bg(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function Ys(e=r.route){return mm.has(e)}function ca({route:e=r.route,delay:t=ec,force:n=!1}={}){if(r.deferredDataLoaded||r.deferredDataLoading||Ws||!n&&!Ys(e))return;Xs&&(window.clearTimeout(Xs),Xs=0);const s=++lc,a=()=>{s===lc&&(!n&&!Ys(r.route)||xm().catch(o=>console.warn("Deferred app data failed to load.",o)))};Xs=window.setTimeout(()=>{Xs=0,jm(a,{timeout:1800})},Math.max(0,Number(t)||0))}async function xm({renderAfter:e=!0}={}){if(!r.deferredDataLoaded)return Ws||(r.deferredDataLoading=!0,Ws=(async()=>{const[t,n,s]=await Promise.all([pc(),gc([["kanjiMeta",O.kanjiMeta],["kanjiHints",O.kanjiHints],["kanjiTranslations",O.kanjiTranslations],["kanjiStrokes",O.kanjiStrokes],["kanjiPageSources",O.kanjiPageSources],["lessonTranslations",O.lessonTranslations],["vocabulary",O.vocabulary],["sentences",O.sentences],["jlptPracticeLessons",O.jlptPracticeLessons],["n5Meta",O.n5Meta],["n5Lessons",O.n5Lessons],["n5Kanji",O.n5Kanji],["n5Exercises",O.n5Exercises],["n5FinalTest",O.n5FinalTest],["n4Meta",O.n4Meta],["n4Lessons",O.n4Lessons],["n4Kanji",O.n4Kanji],["n4Grammar",O.n4Grammar],["n4Exercises",O.n4Exercises],["n4Reading",O.n4Reading],["n4Listening",O.n4Listening],["n4FinalTest",O.n4FinalTest],["n3Meta",O.n3Meta],["n3Lessons",O.n3Lessons],["n3Kanji",O.n3Kanji],["n3Grammar",O.n3Grammar],["n3Exercises",O.n3Exercises],["n3Reading",O.n3Reading],["n3Listening",O.n3Listening],["n3FinalTest",O.n3FinalTest],["n2Meta",O.n2Meta],["n2Lessons",O.n2Lessons],["n2Kanji",O.n2Kanji],["n2Grammar",O.n2Grammar],["n2Exercises",O.n2Exercises],["n2Reading",O.n2Reading],["n2Listening",O.n2Listening],["n2FinalTest",O.n2FinalTest],["n1Meta",O.n1Meta],["n1Lessons",O.n1Lessons],["n1Kanji",O.n1Kanji],["n1Grammar",O.n1Grammar],["n1Exercises",O.n1Exercises],["n1Reading",O.n1Reading],["n1Listening",O.n1Listening],["n1FinalTest",O.n1FinalTest],["jlptReadingTranslations",O.jlptReadingTranslations],["n5Reading",O.n5Reading],["monetization",O.monetization]]),Rm(O.jlptReadingMarkdown)]),{kanjiMeta:a,kanjiHints:o,kanjiTranslations:c,kanjiStrokes:l,kanjiPageSources:d,lessonTranslations:u,vocabulary:m,sentences:h,jlptPracticeLessons:v,n5Meta:w,n5Lessons:$,n5Kanji:y,n5Exercises:L,n5FinalTest:b,n4Meta:k,n4Lessons:B,n4Kanji:U,n4Grammar:as,n4Exercises:F,n4Reading:wN,n4Listening:bN,n4FinalTest:kN,n3Meta:yN,n3Lessons:$N,n3Kanji:jN,n3Grammar:SN,n3Exercises:NN,n3Reading:LN,n3Listening:xN,n3FinalTest:CN,n2Meta:AN,n2Lessons:TN,n2Kanji:IN,n2Grammar:RN,n2Exercises:_N,n2Reading:MN,n2Listening:PN,n2FinalTest:EN,n1Meta:KN,n1Lessons:DN,n1Kanji:FN,n1Grammar:ON,n1Exercises:BN,n1Reading:UN,n1Listening:GN,n1FinalTest:JN,jlptReadingTranslations:zN,n5Reading:HN,monetization:qN}=n;r.lessons=t.lessons,r.cards=t.cards,r.jlptPracticeLessons=Jm(v),r.jlptReadingMarkdown=s||"",r.jlptReadingByLevel=_m(s||""),r.n5Meta=zm(w),r.n5Textbook=hc($),r.n5KanjiCatalog=Hm(y),qm(),r.n5Exercises=Wm(L),r.n5FinalTest=Xm(b),r.n5Reading=yf(HN),r.n4Meta=Qm(k),r.n4Textbook=Vm(B),r.n4KanjiCatalog=Ym(U),r.n4Grammar=ef(as),r.n4Exercises=tf(F),r.n4Reading=vc(wN),r.n4Listening=vc(bN),r.n4FinalTest=nf(kN),Zm(),r.n3Meta=sf(yN),r.n3Textbook=rf($N),r.n3KanjiCatalog=af(jN),r.n3Grammar=lf(SN),r.n3Exercises=cf(NN),r.n3Reading=wc(LN),r.n3Listening=wc(xN),r.n3FinalTest=df(CN),of(),r.n2Meta=uf(AN),r.n2Textbook=pf(TN),r.n2KanjiCatalog=gf(IN),r.n2Grammar=ff(RN),r.n2Exercises=hf(_N),r.n2Reading=bc(MN),r.n2Listening=bc(PN),r.n2FinalTest=vf(EN),mf(),r.n1Meta=kc(KN),r.n1Textbook=yc(DN),r.n1KanjiCatalog=$c(FN),r.n1Grammar=Sc(ON),r.n1Exercises=Nc(BN),r.n1Reading=ha(UN),r.n1Listening=ha(GN),r.n1FinalTest=Lc(JN),jc(),r.kanjiMeta=a.items||{},r.kanjiHints=o.items||{},r.kanjiTranslations=c.items||{},r.kanjiStrokes=Dm(l),r.kanjiPageSources=d.items||{},r.lessonTranslations=u.items||{},r.vocabulary=m.items||[],r.sentenceExercises=h.items||[],r.jlptReadingTranslations=Em(zN),r.monetization=qN,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(er(),X(),N()),Xr(Ol($i())),e&&C()})().finally(()=>{r.deferredDataLoading=!1}),Ws)}async function Cm({renderAfter:e=!0}={}){return r.n1Textbook?.items?.length&&r.n1KanjiCatalog?.length?r.n1Textbook:Qs||(ia=null,Qs=gc([["n1Meta",O.n1Meta],["n1Lessons",O.n1Lessons],["n1Kanji",O.n1Kanji],["n1Grammar",O.n1Grammar],["n1Exercises",O.n1Exercises],["n1Reading",O.n1Reading],["n1Listening",O.n1Listening],["n1FinalTest",O.n1FinalTest]],4).then(t=>(r.n1Meta=kc(t.n1Meta),r.n1Textbook=yc(t.n1Lessons),r.n1KanjiCatalog=$c(t.n1Kanji),r.n1Grammar=Sc(t.n1Grammar),r.n1Exercises=Nc(t.n1Exercises),r.n1Reading=ha(t.n1Reading),r.n1Listening=ha(t.n1Listening),r.n1FinalTest=Lc(t.n1FinalTest),jc(),r.progress&&(er(),N()),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&C(),r.n1Textbook)).catch(t=>{throw ia=t,console.warn("N1 textbook data failed to load.",t),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&C(),t}).finally(()=>{Qs=null}),Qs)}async function Am(){try{const e=localStorage.getItem(Lt);if(localStorage.setItem(Lt,_),!e||e===_)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function Tm(){try{const e=localStorage.getItem(ea),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===_||(localStorage.setItem(ea,"done"),localStorage.setItem("flashKanji.lastForcedBuild",_)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function pc({initialOnly:e=!1}={}){const t=await nt(O.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Im(n):n,a=await mc(s,async d=>{try{return{manifestLesson:d,payload:await nt(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),c=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(h=>Km(h,m.lesson.id)):[]}}),l=c.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:c,cards:l}}function Im(e){return e.filter((t,n)=>gm.has(t.id)||n<2)}async function gc(e,t=3){const n=await mc(e,async([s,a])=>[s,await nt(a)],t);return Object.fromEntries(n)}async function mc(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const c=e.slice(o,o+a);s.push(...await Promise.all(c.map(t))),o+a<e.length&&await new Promise(l=>window.setTimeout(l,0))}return s}async function nt(e,t=null){const n=fc(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),tc):0;try{const l=await fetch(a,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${a}`);continue}const d=await l.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${a}. Trying fallback paths.`,u)}}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function Rm(e,t=""){const n=fc(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),tc):0;try{const l=await fetch(a,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${a}`);continue}return await l.text()}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function _m(e){const t=Object.fromEntries(Ke.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",c=[],l=[];const d=()=>{!a||!s||(a.text=Mm(c.join(`
`)),a.questions=l.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,c=[],l=[],o="idle")},u=m=>{const h=String(m||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const m of n){const h=String(m??""),v=h.trim(),w=v.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(w){d(),s=w[1].toUpperCase();continue}const $=v.match(/^##\s*(N[1-5])\s*(.+)$/i);if($){d(),s=$[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:Pm($[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(v)&&!w&&!$){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(v)){o="questions";continue}if(o==="code"){/^```/.test(v)?o="body":c.push(h);continue}if(/^```/.test(v)){o="code";continue}if(o==="questions"){const L=v.match(/^[-*]\s+(.*)$/),b=v.match(/^\d+\.\s+(.*)$/);if(L){l.push(L[1]);continue}if(b){l.push(b[1]);continue}if(!v||/^---+$/.test(v))continue;l.push(v);continue}const y=v.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(y){const L=u(y[1]);a[L]=y[2].trim()}}return d(),t}function Mm(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function Pm(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Em(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function fc(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Km(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Dm(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function Bn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function Fm(){try{const e=localStorage.getItem(T);if(!e)return Bn();const t=JSON.parse(e),n=Bn();return{owned:Array.isArray(t.owned)?t.owned.map(String):n.owned,selected:{...n.selected,...t&&t.selected||{}},seen:Array.isArray(t.seen)?t.seen.map(String):n.seen,updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),Bn()}}function ds(){if(!r.customization)return!1;if(na)return!0;na=!0;const e=()=>{Fn=0,na=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(T,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?Fn=window.requestIdleCallback(e,{timeout:1200}):Fn=window.setTimeout(e,160),!0}function Om(){if(!r.customization)return!1;na=!1,Fn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Fn):window.clearTimeout(Fn),Fn=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(T,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function da(){const e=Fm(),t=new Set;(e.owned||[]).forEach(s=>{const a=ge(s)||Un(s);a&&t.add(a.id)}),st().forEach(s=>{(s.defaultOwned||s.price===0)&&t.add(s.id)}),(r.progress.unlockedBackgrounds||[]).forEach(s=>{const a=ge(s)||Un(s);a&&t.add(a.id)}),(r.progress.unlockedEvaSprites||[]).forEach(s=>{const a=Gn(s);a&&t.add(a.id),r.progress.shop?.owned?.includes(`eva_sprite:${s}`)&&a&&t.add(a.id)}),(r.progress.shop?.owned||[]).forEach(s=>{const a=String(s),o=ge(a)||Un(a);if(o&&t.add(o.id),!o&&a.startsWith("eva_sprite:")){const c=Gn(a.replace("eva_sprite:",""));c&&t.add(c.id)}});const n=Bm({...Bn().selected,...e.selected||{}});r.progress.selectedEvaRoomBackground&&(n.background=Jt(r.progress.selectedEvaRoomBackground)),r.progress.selectedEvaSprite&&(n.outfit=Gn(r.progress.selectedEvaSprite)?.id||n.outfit),t.has(n.background)||(n.background="bg_study_hub"),t.has(n.outfit)||(n.outfit="outfit_default_assassin"),t.has(n.theme)||(n.theme="theme_default_dark"),n.decoration&&!t.has(n.decoration)&&(n.decoration=null),n.effect&&!t.has(n.effect)&&(n.effect=null),r.customization={owned:[...t],selected:n,seen:[...new Set([...e.seen||[],...t])],updatedAt:e.updatedAt||new Date().toISOString()},Zs(),ds()}function Zs(){var n;if(!r.customization||!r.progress)return;ce();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=ge(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...r.progress.unlockedBackgrounds||[],...r.customization.owned.filter(s=>ge(s)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...r.progress.unlockedEvaSprites||[],...r.customization.owned.map(s=>ge(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=r.progress).shop||(n.shop={owned:[],equipped:{}}),r.progress.shop.owned=[...new Set([...r.progress.shop.owned||[],...r.customization.owned,...r.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function st(){return r.customizationCatalog?.items||[]}function ge(e){return st().find(t=>t.id===e)||null}function Un(e){const t=String(e||"");return t&&st().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function Jt(e){return(ge(e)||Un(e))?.id||e||null}function Bm(e={}){return{background:Jt(e.background),outfit:Jt(e.outfit),theme:Jt(e.theme),decoration:Jt(e.decoration||e.frame),effect:Jt(e.effect)}}function Gn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return st().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Um(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function Gm(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>Ke.indexOf(n.jlpt)-Ke.indexOf(s.jlpt))}}function Jm(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function zm(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function hc(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Hm(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function qm(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),ua(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ua({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function ua(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:Q(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Q(s(n.onyomi)||e.onyomi||""),kunyomi:Q(s(n.kunyomi)||e.kunyomi||""),hiragana:Q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Wm(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Xm(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Qm(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Vm(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function Ym(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Zm(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),pa(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(pa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function pa(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:Q(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Q(s(n.onyomi)||e.onyomi||""),kunyomi:Q(s(n.kunyomi)||e.kunyomi||""),hiragana:Q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function ef(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function tf(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function vc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function nf(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function sf(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function rf(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function af(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function of(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ga(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ga({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function ga(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:Q(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Q(s(n.onyomi)||e.onyomi||""),kunyomi:Q(s(n.kunyomi)||e.kunyomi||""),hiragana:Q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function lf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function cf(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function wc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function df(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function uf(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function pf(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function gf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function mf(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ma(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ma({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function ma(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:Q(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Q(s(n.onyomi)||e.onyomi||""),kunyomi:Q(s(n.kunyomi)||e.kunyomi||""),hiragana:Q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function ff(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function hf(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function bc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function vf(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function kc(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function yc(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function $c(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function jc(){if(!Array.isArray(r.n1KanjiCatalog)||!r.n1KanjiCatalog.length)return;const e=new Map(r.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),fa(n,s))}),r.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(fa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))})}function fa(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:Q(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Q(s(n.onyomi)||e.onyomi||""),kunyomi:Q(s(n.kunyomi)||e.kunyomi||""),hiragana:Q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function Sc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Nc(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function ha(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Lc(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function wf(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function bf(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>Q(n)):[]})):[]}function kf(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(c=>c.kanji===s.kanji&&c.reading===s.reading)===a)}function yf(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:Q(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:bf(a.blanks),tiles:kf(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function xc(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(c=>({id:String(c.id),title:c.title||{ru:c.id,en:c.id},icon:c.icon||"moon"})):[],a=n.map(c=>Oi(c)),o=new Set(s.map(c=>c.id));return a.forEach(c=>{o.has(c.category)||(o.add(c.category),s.push({id:c.category,title:{ru:c.category,en:c.category},icon:c.icon||"moon"}))}),{categories:s,items:a}}function Oi(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function Cc(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function us(){const e=Cc();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:Ui(),jlptLessonStudy:Gi(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:zi(),n4Course:Hi(),n3Course:qi(),n2Course:Wi(),n1Course:Xi(),unlockedJlptLevels:Ke.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:Uc(),evaRelationship:Vi(),shop:{owned:[],equipped:{}}}}function $f(){const e=us();try{const t=hL();return t?Ac(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function Ac(e,t){return{...e,...t,version:3,settings:jf(e.settings,t.settings||{}),cards:vL({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:Nf(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:va(t.dailyBonusPending||null),lastOpenedJlptLesson:Ue(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:s0(t.lastOpenedJlptLessons||{}),viewedReadingLevels:rs(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:Pc(e.learningPath,t.learningPath||{}),jlptLessonStudy:Mc(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Qi(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:Bc(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:Ec(e.n5Course,t.n5Course||{}),n4Course:Kc(e.n4Course,t.n4Course||{}),n3Course:Dc(e.n3Course,t.n3Course||{}),n2Course:Fc(e.n2Course,t.n2Course||{}),n1Course:Oc(e.n1Course,t.n1Course||{}),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...Ke])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:Jc(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:Gc(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...e.shop.owned||[],...t.shop&&t.shop.owned||[]])],equipped:{...e.shop.equipped,...t.shop&&t.shop.equipped||{}}}}}function jf(e,t){const n={...e,...t||{}};return n.theme=Sf(n.theme,e.theme||"dark"),n.themeManuallySelected=ln(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=ln(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=ln(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=ln(n.languageManuallySelected,e.languageManuallySelected===!0),n}function Sf(e,t="dark"){return e==="light"||e==="dark"?e:t}function Nf(e,t){const n={...e,...t||{}};return n.current=Bi(n.current,e.current||0),n.best=Bi(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=Tc(n.pendingReward),n}function Tc(e){if(!e||typeof e!="object")return null;const t=Bi(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function va(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function ln(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Bi(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Ui(){return{version:Yl,currentLevel:Zl,currentNodeId:je,completedNodes:{},unlockedNodes:{[je]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function Gi(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function Ic(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function Rc(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function _c(e,t){const n=Ic(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:Rc(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function Mc(e,t){const n=Gi(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},c=s.sessions||{};return Object.keys(o).forEach(l=>{a[l]=_c(o[l],c[l])}),Object.keys(c).forEach(l=>{a[l]||(a[l]=_c(null,c[l]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function Pc(e,t){return{...e,...t||{},version:Yl,currentLevel:String(t?.currentLevel||e.currentLevel||Zl).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||je),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Ji(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Ji(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Ct),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function zi(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function Ec(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:rs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Cr(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Hi(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Kc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:rs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Cr(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function qi(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Dc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:rs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Cr(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Wi(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Fc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:rs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Cr(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Xi(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Oc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:rs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Cr(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Qi(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:Lf(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:wa(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function wa(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function Lf(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const c=Sn(o.jp||cp(o)),l=Ls(c);if(!l||s.has(l))return;s.add(l);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Te(l).toString(36)}`;n.push({id:d,jp:c,hiragana:Sn(o.hiragana||o.reading||""),ru:Sn(o.ru||o.translationRu||""),en:Sn(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function Bc(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Vi(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:re(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function Uc(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function Gc(e,t){return{...e,...t,warmth:de(Number(t.warmth??e.warmth),0,100),trust:de(Number(t.trust??e.trust),0,100),discipline:de(Number(t.discipline??e.discipline),0,100),curiosity:de(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function Jc(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function zt(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function Jn(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function Rt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:zt(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function xf(){const e=Rt();let t=null;try{const n=localStorage.getItem(x);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=Tf(e,t||Af()),Cf(),zn()}function Cf(){if(!r.evaRuntime)return;r.evaRuntime.memory=Jn(zt(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=re(),n=e.lastSeenDate||null,s=n?Math.max(0,Rn(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function Af(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function Tf(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:Jn(e.memory||zt(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function Yi(){if(!r.evaRuntime)return!1;zc(),r.evaRuntime.updatedAt=new Date().toISOString(),xi=!1,Dn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Dn):window.clearTimeout(Dn),Dn=0);try{return localStorage.setItem(x,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function zn(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return Yi();if(xi)return!0;xi=!0;const t=()=>{Dn=0,Yi()};return"requestIdleCallback"in window?Dn=window.requestIdleCallback(t,{timeout:1200}):Dn=window.setTimeout(t,160),!0}function Zi(){eo(),Yi(),Om()}function zc(){if(!r.evaRuntime||!r.progress)return;const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background||"bg_study_hub",t=st().filter(n=>Kt(n.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],r.evaRuntime.currentBackground=e,r.evaRuntime.activeSkin=r.evaRuntime.currentSkin||r.progress.selectedEvaSprite||"idle",r.evaRuntime.activeBackground=e}function eo(){return r.progress?(r.progress.level=di(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),Li=!1,Kn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Kn):window.clearTimeout(Kn),Kn=0),wL(r.progress)):!1}function N(e={}){if(!r.progress)return!1;if(e?.immediate)return eo();if(Li)return!0;Li=!0;const t=()=>{Kn=0,eo()};return"requestIdleCallback"in window?Kn=window.requestIdleCallback(t,{timeout:1200}):Kn=window.setTimeout(t,120),!0}function Hc(e,t,{timeout:n=0}={}){const s=()=>{try{const a=t?.();a&&typeof a.then=="function"&&a.catch(o=>console.warn(`[Flash Kanji] ${e} failed.`,o))}catch(a){console.warn(`[Flash Kanji] ${e} failed.`,a)}};requestAnimationFrame(()=>window.setTimeout(s,n))}function _t(e,t){Hc(e,()=>{const n=t?.();n&&typeof n.then=="function"&&n.catch(s=>console.warn(`[Flash Kanji] ${e} failed.`,s)),N(),Ht()})}function If(e){const t=e?.dataset?.action||"",n=Rf(t,e);return n?Pi.has(n)?!1:(Pi.add(n),requestAnimationFrame(()=>window.setTimeout(()=>Pi.delete(n),0)),!0):!0}function Rf(e,t){return e?e==="rate"?`rate:${r.activeCardId||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${r.activeExerciseReviewLevel||""}:${r.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function er(){r.cards.forEach(s=>D(s.id)),r.progress.level=di(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),NS()),ce(),ir(),ur(),To(),Mo(),Do(),typeof Fa=="function"&&Fa();const e=_s(),t=[Za(Z(),"N5"),Za(W(),"N4"),Za(H(),"N3"),Za(q(),"N2"),ei(Z(),"N5"),ei(W(),"N4"),ei(H(),"N3"),ei(q(),"N2")].some(Boolean);[Z(),W(),H(),q(),typeof ee=="function"?ee():null].filter(Boolean).forEach(s=>_f(s)),(t||e)&&N(),ba();const n=r.lessons.find(s=>Me(s));r.activeLessonId||(r.activeLessonId=n?.id||r.lessons[0]?.id||null)}function _f(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=rs(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function ps(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function ba(){r.progress.learningPath=Pc(Ui(),r.progress.learningPath||{});const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[je]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(Z().studiedKanji||{}).length>0||Object.keys(Z().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[je]&&(t[je]=r.progress.visits?.firstVisitDate||new Date().toISOString()),to().forEach((o,c)=>{Z().completedLessons?.[o]&&!t[o]&&(t[o]=Z().completedLessons[o]),n[o]=!0});const a=qc();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function to(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:um.filter(t=>/^n5-lesson-\d+$/i.test(t))}function qc(){const e=r.progress?.learningPath||Ui(),t=[je,...to(),os];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||je}function no(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):Vs||(Vs=nt(O.n5Lessons).then(e=>(r.n5Textbook=hc(e),ba(),(r.route==="learn"||r.route==="home")&&C(),r.n5Textbook)).catch(e=>{throw Vs=null,e}),Vs)}function Mf(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=pm[t];if(!n){const a=lr(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(oa.has(t))return oa.get(t);const s=nt(n).then(a=>(r.learningPathLessonPayloads[t]=a||lr(t),r.route==="learn"&&r.activeLearnNodeId===t&&C(),r.learningPathLessonPayloads[t])).catch(a=>{const o=lr(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&C(),o;throw a}).finally(()=>{oa.delete(t)});return oa.set(t,s),s}function cn(){return ba(),r.progress.learningPath}function so(){const e=cn().activeSession;return!e?.nodeId||cn().completedNodes?.[e.nodeId]?null:e}function gs(){const e=so();return e?.nodeId?e.nodeId:cn().currentNodeId||qc()||je}function Wc(e){const t=Hn(e);return t?f(t.title):Pf(e)}function Pf(e){const t=String(e||"");if(t===je)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===os)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=wt(t);if(n)return f(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Ef(e){const t=Hn(e);return t?f(t.summary):""}function le(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Kf(){const e=le();return{id:je,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Df(){const e=Be();return le(),{id:is,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function Ff(){return{id:os,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function Of(){return to().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function Xc(){const e=Kf(),t=Df(),n=Ff(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,c)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):Of(),a=[e];return Be()>0&&a.push(t),[...a,...s,n]}function Hn(e){const t=String(e||"");return t&&Xc().find(n=>n.id===t)||null}function Qc(e){if(!e)return"locked";if(e.id===is)return Be()>0?"review":"available";const t=cn();return t.completedNodes?.[e.id]?"completed":gs()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Bf(e){const t=le();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function Vc(){const e=cn(),t=Be(),n=so(),s=gs(),a=Hn(s),o=Number(Vt().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[je]&&!n?{kind:"node",label:le().start,nodeId:je}:n?.nodeId?{kind:"node",label:le().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${le().reviewAction}: ${t}`,nodeId:is}:o&&a?{kind:"node",label:le().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[je]?le().resume:le().start,nodeId:a.id}:{kind:"review",label:le().reviewOld,nodeId:is}}function Uf(){const e=le(),t=i0(),n=t?.level||tn(),s=t?.lessonId||Sl(n),a=ns(n),o=wg(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Gf(){const e=en(),t=Be(),n=le();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Jf(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function zf(){const e=p()==="ru",t=Lo();return Ke.map(n=>{const s=St(n),a=Or(n),o=ns(n),c=n==="N5"?Xn():Object.keys(o?.completedLessons||{}).length,l=Math.max(Number(s?.lessonCount||0),a.length||0),d=pt(n),u=fg(n),m=!u&&t===n,h=f(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),v=l>0?`${c}/${l} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",w=u?e?"Пройдено":"Completed":m?`${v} · ${e?"сейчас":"now"}`:d?v:Zt(n);return{level:n,title:h,note:w,status:u?"done":m?"current":d?"open":"locked"}})}function Hf(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function qf(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function Yc(){const e=gs();return{title:Wc(e),summary:Ef(e)}}function D(e){const t=String(e);r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=ji(r.progress.cards[t]);return n.successRate=Cg(n),Number.isFinite(Number(n.srsStep))?n.srsStep=de(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=ao(n),r.progress.cards[t]=n,n}function tr(e,t="seen"){if(!r.progress||!e?.id)return!1;ce();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function nr(e,t="seen"){tr(e,t)&&N()}const ft=[5/1440,1/24,12/24,1,2,4],ro=1;function ao(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<ft.length;s+=1)if(t<=ft[s]*1.08)return s;const n=ft[ft.length-1];return ft.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function Wf(e){const t=Math.trunc(e);return t<0?0:t<ft.length?ft[t]||ft[0]:ft[ft.length-1]*2**(t-(ft.length-1))}function Xf(e,t,n=ro){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],c=Math.max(1,Math.trunc(Number(n)||ro));let l=0,d=0,u=0;for(;l<s.length||d<a.length;){if(u>=c&&d<a.length){o.push(a[d++]),u=0;continue}if(l<s.length){o.push(s[l++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function Qf(e,t){const n=ao(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Vf(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function ka(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function Mt(e,t,n="jlpt_lesson"){if(!t)return!1;const a=Zc(e,t).reduce((o,c)=>tr(c,n)||o,!1);return a&&N(),a}function Zc(e,t){const n=String(e||"").toUpperCase();return n==="N5"?mn(t):n==="N4"?wr(t):n==="N3"?kr(t):n==="N2"?$r(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Yf(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function ed(){return ce(),r.progress.evaRoomQuiz}function td(){const e=[r.cards||[],typeof Dt=="function"?Dt():[],typeof qe=="function"?qe():[],typeof Xe=="function"?Xe():[],typeof Ve=="function"?Ve():[]];return nd(e.flat().filter(Boolean))}function Zf(){if(!r.progress)return[];ce();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=eh(),a=td().filter(o=>{if(!o?.id||!o.kanji||!Pe(o,"ru")||!Pe(o,"en"))return!1;const c=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Yf(o)||n.has(o.lessonId)||s.has(`${c}:${o.kanji}`)||s.has(o.kanji)});return nd(a)}function eh(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return io().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(c=>t(n.level,c))})}),e}function io(){return[{level:"N5",course:Z,lessonById:wt,markStudied:ys,markDifficult:hr},{level:"N4",course:W,lessonById:hn,markStudied:$s,markDifficult:br},{level:"N3",course:H,lessonById:wn,markStudied:js,markDifficult:yr},{level:"N2",course:q,lessonById:kn,markStudied:Ss,markDifficult:jr}]}function nd(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Pe(n,"ru")}:${Pe(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function th(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function nh(e){if(e.target.classList?.contains("detail-backdrop")){P("menu_close"),r.detailCardId=null,oe();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,oe();return}if(e.target.classList?.contains("changelog-backdrop")){Fi();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,oe();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,a=n.dataset.id;if(th(n),!!If(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-cc<280)){if(s&&s.endsWith("-complete-lesson")){const c=`${s.split("-")[0]}:${a||""}`;if(ae.has(c)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(oo(s),requestAnimationFrame(()=>window.setTimeout(()=>ah(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Sa(o)){Th(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),ze(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),ze(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&kg(n.dataset.shareSection||r.route,n0(n)).catch(()=>J(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&Ng(!Al()),s==="notification-center"){if(r.notificationPromptVisible){Ig();return}(r.notificationPrompt?.docked||wi("header"))&&bi("header");return}if(s==="repeat-onboarding"){go({force:!0});return}if(s==="onboarding-next"){vd();return}if(s==="onboarding-prev"){wd();return}if(s==="onboarding-continue"){xh();return}if(s==="onboarding-close"||s==="onboarding-skip"){ar({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){xp(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,oe()),s==="copy-contact-email"&&jg(rn).then(o=>{J(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,oe()),s==="close-changelog"){Fi();return}if(s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,oe()),s==="close-nav-menu"&&(r.navMenu=null,oe()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,oe()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,oe()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?yu(!0):o==="N3"?_u(!0):o==="N2"?zu(!0):o==="N1"?np(!0):cu(!0)}if(s==="final-test-next-level"){const o=V(n.dataset.nextLevel||""),c=String(n.dataset.nextLesson||"");if(!o||!c)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ci(o,c);return}if(s==="scroll-page-edge"&&((n.dataset.direction||mo())==="up"?ja():Ch()),s==="theme"&&S0(),s==="language"&&N0(),s==="sound"&&Sg(),s==="toggle-ux-sound"&&L0(),s==="export"&&t0(),s==="import"&&dc.click(),s==="reset"&&j0(),s==="share-achievement"&&h0().catch(()=>J(A("shareFallback"))),s==="pwa-install"&&Q0(),s==="pwa-later"&&El(),s==="notification-allow"&&tN(),s==="notification-later"&&ki(),s==="mascot-click"&&zj(n.dataset.character),s==="eva-click"&&Rp(),s==="eva-dialogue-skip"&&rh(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=zs,oe()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=No();zd(o),r.activeCardId=null,oe()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=dm,oe()),s==="toggle-favorite"&&AS(a),s==="eva-room-choice"&&Bv(n),s==="eva-question-answer"&&Rv(n),s==="eva-room-reset"&&Gv(),s==="toggle-eva-autonomy"&&Yv(),s==="cycle-eva-autonomy"&&Zv(),s==="eva-autonomy-room-mode"&&ew(),s==="eva-autonomy-outfit-mode"&&tw(),s==="eva-autonomy-next"&&Gd(),s==="eva-autonomy-clear"&&nw(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,Ne("shop_opened"),oe()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,oe()),s==="eva-bg-buy"&&Jv(a),s==="eva-bg-select"&&zv(a),s==="eva-sprite-buy"&&Hv(a),s==="eva-sprite-select"&&qv(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",oe()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",oe()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",oe()),s==="shop-buy"&&Ma(a),s==="shop-select"&&Pa(a),s==="shop-clear-effect"&&Ud(a),s==="shop-clear-item"&&Qv(a),s==="clear-writing"&&nS(),s==="undo-writing"&&sS(),s==="check-writing"&&rS(!0),s==="replay-writing"&&Kp(),s==="play-writing-step"&&Dp(),s==="writing-step-prev"&&Fp(-1),s==="writing-step-next"&&Fp(1),s==="select-writing-step"&&Op(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&x$(Number(n.dataset.index)),s==="undo-sentence-tile"&&C$(),s==="clear-sentence"&&A$(),s==="check-sentence"&&T$(),s==="next-sentence"&&R$(),s==="reading-review-tile"&&Xw(Number(n.dataset.index)),s==="reading-review-undo"&&Qw(),s==="reading-review-clear"&&Vw(),s==="reading-review-check"&&au(),s==="reading-review-answer"&&Ww(n),s==="toggle-reading-translation"&&Yw(),s==="add-custom-sentence"&&p$(),s==="edit-custom-sentence"&&m$(n.dataset.id),s==="delete-custom-sentence"&&f$(n.dataset.id),s==="cancel-custom-sentence-edit"&&h$(),s==="insert-jlpt-tile"&&QS(Number(n.dataset.index)),s==="undo-jlpt-tile"&&VS(),s==="clear-jlpt-practice"&&YS(),s==="check-jlpt-practice"&&ZS(),s==="next-jlpt-practice"&&e0(),s==="n5-open-lesson"&&rb(a),s==="n5-overview"&&ab(),s==="n5-review"&&ib(n.dataset.mode||null),s==="n5-answer"&&Zw(n),s==="n5-check-input"&&eb(a),s==="n5-srs"&&ou(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&nb(a),s==="n5-complete-lesson"&&sb(a),s==="jlpt-lesson-answer"&&tb(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&cb(n),s==="n5-final-submit"&&cu(),s==="n5-final-reset"&&db(),s==="n4-open-lesson"&&Pb(a),s==="n4-overview"&&Eb(),s==="n4-review"&&Kb(n.dataset.mode||null),s==="n4-kanji"&&Db(),s==="n4-grammar"&&Fb(),s==="n4-reading"&&Ob(),s==="n4-listening"&&Bb(),s==="n4-final"&&Ub(),s==="n4-answer"&&Cb(n),s==="n4-check-input"&&Ab(a),s==="n4-srs"&&wu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&Tb(a),s==="n4-complete-lesson"&&Ib(a),s==="n4-grammar-complete"&&Rb(a,n.dataset.value||""),s==="n4-reading-complete"&&_b(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&Mb(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&zb(n),s==="n4-final-submit"&&yu(),s==="n4-final-reset"&&Hb(),s==="n3-open-lesson"&&wk(a),s==="n3-overview"&&bk(),s==="n3-review"&&kk(n.dataset.mode||null),s==="n3-kanji"&&yk(),s==="n3-grammar"&&$k(),s==="n3-reading"&&jk(),s==="n3-listening"&&Sk(),s==="n3-final"&&Nk(),s==="n3-answer"&&uk(n),s==="n3-check-input"&&pk(a),s==="n3-srs"&&Tu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&gk(a),s==="n3-complete-lesson"&&mk(a),s==="n3-grammar-complete"&&fk(a,n.dataset.value||""),s==="n3-reading-complete"&&hk(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&vk(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&Ck(n),s==="n3-final-submit"&&_u(),s==="n3-final-reset"&&Ak(),s==="n2-open-lesson"&&ty(a),s==="n2-overview"&&ny(),s==="n2-review"&&sy(n.dataset.mode||null),s==="n2-kanji"&&ry(),s==="n2-grammar"&&ay(),s==="n2-reading"&&iy(),s==="n2-listening"&&oy(),s==="n2-final"&&ly(),s==="n2-answer"&&Wk(n),s==="n2-check-input"&&Xk(a),s==="n2-srs"&&Uu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&Qk(a),s==="n2-complete-lesson"&&Vk(a),s==="n2-grammar-complete"&&Yk(a,n.dataset.value||""),s==="n2-reading-complete"&&Zk(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&ey(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&uy(n),s==="n2-final-submit"&&zu(),s==="n2-final-reset"&&py(),s==="n1-open-lesson"&&Fy(a),s==="n1-overview"&&Oy(),s==="n1-review"&&By(n.dataset.mode||null),s==="n1-kanji"&&Uy(),s==="n1-grammar"&&Gy(),s==="n1-reading"&&Jy(),s==="n1-listening"&&zy(),s==="n1-final"&&Hy(),s==="n1-answer"&&Ry(n),s==="n1-check-input"&&_y(a),s==="n1-srs"&&Zu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&My(a),s==="n1-complete-lesson"&&Py(a),s==="n1-grammar-complete"&&Ey(a,n.dataset.value||""),s==="n1-reading-complete"&&Ky(a,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&Dy(a,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&Xy(n),s==="n1-final-submit"&&np(),s==="n1-final-reset"&&Qy(),s==="review-exercise-next"){Lr(),r.pendingFocus="__scroll-top__",C();return}if(s==="play-kanji-audio"){const o=ne(a)||ne(r.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?gg(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:()=>pg(o)}):ug(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(Yt(o)){if(!pt(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,ze("textbooks",null,o),J(Zt(o));return}r.activeJlptLesson=o,ze("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&ci(n.dataset.jlpt||tn()),s==="social-link"&&Tn(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{network:n.dataset.network||"",section:r.route}),s==="play-audio"&&GS(n.dataset.audio,n.dataset.label),s==="close-reward"&&(r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&Mp(r.rewardModal),Ht()),s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),N(),J(`${A("dailyGoal")}: ${r.progress.settings.dailyGoal}`),C()),s==="buy-shop"&&Ma(a),s==="start-due"&&(ze("textbooks"),Be()||J(Ee("eva","welcome"))),s==="home-lesson"){const o=V(n.dataset.level||"")||tn(),c=String(n.dataset.lessonId||"");ci(o,c)}if(s==="home-review"&&(Be()?ze("review"):J(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&dw(),s==="learning-path-node"&&Hd(n.dataset.node||a),s==="learning-path-back"&&qn(),s==="learning-path-choice"){const o=String(n.dataset.node||""),c=String(n.dataset.step||""),l=String(n.dataset.value||""),d=cr(o),u=d.steps.find(m=>m.id===c);if(!u||u.kind!=="quiz"||d.session.answers?.[c])return;d.session.answers[c]={selected:l,correct:l===u.answer,at:new Date().toISOString()},l===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],c])],d.session.updatedAt=new Date().toISOString(),N(),C()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=cr(o);if(!c.steps.length)return;const l=c.steps[c.session.stepIndex];if(l?.kind==="quiz"&&!c.session.answers?.[l.id])return;c.session.stepIndex=Math.min(c.session.stepIndex+1,c.steps.length),c.session.updatedAt=new Date().toISOString(),N(),C()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=(cr(o).session.mistakes||[]).slice();cn().activeSession=Ji({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:l,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),N(),C()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=cr(o);fw(o,c.session,c.steps),qn();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(c=>c.id===a);if(!o||!Me(o)){J(`${A("unlockedAt")} ${li(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,jt(),s==="start-lesson"){Ne("lesson_start",{lessonId:a,jlpt:o.jlpt});const c=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(c)?(ze("textbooks",null,c),r.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(c)}/${encodeURIComponent(o.id)}`),C()):qn(Gt,o.id)}else C()}if(s==="show-answer"&&(nr(ne(r.activeCardId),"show_answer"),r.revealed=!0,jt(),He()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),Zp()}if(s==="rate"&&Dj(n.dataset.rating),s==="open-card"&&(nr(ne(a),"card_details"),r.detailCardId=a,C()),s==="open-kanji-page"&&ch(a),s==="close-detail"&&(r.detailCardId=null,oe()),s==="study-card"){const o=ne(a);if(!o)return;nr(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,jt(o.id),r.detailCardId=null,qn(Gt,o.lessonId)}}}function sh(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;cc=Date.now(),e.preventDefault(),oo(n),n==="eva-click"&&Rp(),n==="eva-autonomy-next"&&Gd()}function oo(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=Jn(zt(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=re()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function rh(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||te().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,zn(),C())}function ah(e,t){if(!(!e||t?.disabled)&&!ih(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){P("menu_open");return}if(e==="eva-room-shop-close"){P("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Sa(t.dataset.route)){P(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}P("tab_switch");return}if(e==="nav-menu-route"){P("tab_switch");return}if(e==="close-nav-menu"){P("menu_close");return}if(e==="toggle-header-socials"){P(Al()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){P("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){P("menu_close");return}if(e==="notification-center"){P("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){P("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){P("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){P("notification_soft");return}t?.matches("button, .btn, [role='button']")&&P("button_click"),e!=="toggle-header-socials"&&Ng(!1)}}function ih(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function sd(e){oo("input");const t=e.target.closest("[data-ux-volume]");if(t){I0(Number(t.value)/100);const l=document.querySelector("[data-ux-volume-label]");l&&(l.textContent=`${Math.round(gi()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const l=Ae(),d=s.dataset.sentenceDraft;l.customDraft=wa(l.customDraft||{}),d&&Object.prototype.hasOwnProperty.call(l.customDraft,d)&&(l.customDraft[d]=s.value,l.customMessage="",l.customStatus="",N());return}const a=e.target.closest("[data-filter]");if(!a)return;const o=a.dataset.filter,c=a.selectionStart;r.filters[o]=a.value,r.dictionaryVisibleCount=zs,C(),requestAnimationFrame(()=>{const l=document.getElementById(a.id);l&&(l.focus(),typeof c=="number"&&"setSelectionRange"in l&&l.setSelectionRange(c,c))})}function oh(e){if(Nh(e)||lh(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,r.changelogModal?Fi():C();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,Zp())}function lh(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(la=`${la}${e.key.toLowerCase()}`.slice(-$e.length),la!==$e)?!1:(la="",rd(5e3),!0)}function rd(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(G(0,t,"cheat:moon_farm"),X(),N(),P("moon_fragment_gain"),J(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),C(),r.progress.moonFragments):0}function qn(e=Ut,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===Ct&&String(t||"")||null,r.activeLearnLegacyLessonId=e===Gt&&String(t||"")||null;const s=e===Ct&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===Gt&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,jt(),Pt(),oe()}function ze(e,t=null,n=null){if(e==="learn"){qn(Ut,null,t);return}if(!Xg(e)){const a=String(e||"");Xr(we("hash","unknown-route",a,a?[a]:[])),tt(a?`#${encodeURIComponent(a)}`:"#not-found"),r.pendingFocus=t,r.navMenu=null,jt(),Pt(),He();return}const s=r.route;if(r.route=e,r.routeMatch=null,r.routeNotFound=null,s!==r.route&&(s==="review"||r.route==="review")&&(r.reviewSession=null),r.route==="textbooks"){const a=n?String(n).toUpperCase():"";if(a&&!V(a)){Xr(we("hash","invalid-parameter",`textbooks/${a}`,["textbooks",a])),tt(`#textbooks/${encodeURIComponent(a)}`),r.pendingFocus=t,He();return}r.activeTextbookLevel=a||null,r.activeTextbookSubroute=null}else if(r.route==="jlpt-lesson"){const a=n?String(n).toUpperCase():r.activeJlptLesson||hN()||"";if(a&&!V(a)){Xr(we("hash","invalid-parameter",`jlpt-lesson/${a}`,["jlpt-lesson",a])),tt(`#jlpt-lesson/${encodeURIComponent(a)}`),r.pendingFocus=t,He();return}r.activeJlptLesson=a||null}else r.activeTextbookLevel=null,r.activeTextbookSubroute=null;if(r.route!=="review"&&Lr(),r.route==="textbooks")tt(Dg(r.activeTextbookLevel||"",r.activeTextbookSubroute||""));else{const a=r.route==="learn"?"#learn":r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;tt(a)}r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),jt(),Pt(),He(),Ys(r.route)&&ca({route:r.route,delay:0}),r.route==="eva-room"&&Ne("room_opened")}function ch(e){const t=ne(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,jt();const n=`#kanji/${encodeURIComponent(t.id)}`;tt(n),Pt(),He()}function ad(){const e=fm.begin(r.route);ra=!0,aa=null,fS();try{Uh(),uh();let t="";if(r.route===Jl&&(t=lo(r.routeNotFound)),r.route==="home"&&(t=Jh()),r.route==="download"&&(t=Kh()),r.route==="about"&&(t=Fh()),r.route==="learn"&&(t=cw(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(bl)),r.route==="review"&&(t=s$(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(bl)),r.route==="dictionary"&&(t=Q$()),r.route==="kanji"&&(t=tj()),r.route==="writing"&&(t=wj(),requestAnimationFrame(Yj)),r.route==="stats"&&(t=$j(),requestAnimationFrame(Pp)),r.route==="achievements"&&(t=Nj()),r.route==="eva-room"&&(t=Xh()),r.route==="jlpt-lesson"&&(t=ww()),r.route==="textbooks"&&(t=bw()),t||(t=lo(we("hash","unknown-route",String(r.route||""),r.route?[String(r.route)]:[]))),!e.isCurrent())return;on.innerHTML=`${t}${Mh()}${ph()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal)),Ej(),requestAnimationFrame(()=>{Bh(),fo(),$h()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${r.route} build=${_}`,t?.stack||t),on.innerHTML=id(t))}finally{ra=!1}}function oe(){ls||(ls=requestAnimationFrame(()=>{ls=0,ad()}))}function He(){ls&&(cancelAnimationFrame(ls),ls=0),ad()}function sr(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function Ht(){if(typeof window>"u"){He();return}const e=window.scrollX,t=window.scrollY;He(),sr(e,t),requestAnimationFrame(()=>{sr(e,t),requestAnimationFrame(()=>sr(e,t))}),window.setTimeout(()=>sr(e,t),120),window.setTimeout(()=>sr(e,t),320)}function C(){oe()}function id(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(r.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function lo(e=r.routeNotFound){dh();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},a=e?.raw||location.pathname||location.hash||"";return`
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
    `}function dh(){document.title=(p()==="ru","404 — Flash Kanji"),od("robots","noindex, follow"),ld("/404.html")}function uh(){r.route!==Jl&&(document.title=wm,od("robots","index, follow"),ld("/"))}function od(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function ld(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function ph(){const e=`${Oh()}${kj()}${Cj()}${E$()}${Aj()}${Tj()}${Ij()}${Rj()}${_j()}${Ah()}`;return e?`<div class="modal-layer">${e}</div>`:""}function cd(){return ue?.isConnected?ue:document.body?(ue||(ue=document.createElement("div"),ue.className="flash-kanji-onboarding-root",ue.setAttribute("role","presentation"),ue.setAttribute("aria-hidden","false")),ue.isConnected||document.body.appendChild(ue),ue):null}const co=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],ya={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function dd(){try{return localStorage.getItem(Wl)==="true"}catch{return!1}}function gh(){try{return localStorage.getItem(Ql)||""}catch{return""}}function $a(e){try{localStorage.setItem(Ql,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function mh(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function fh(e=!1){const t=gh();return t==="returning"||t==="completed"?t:dd()?($a("completed"),"completed"):e?($a("returning"),"returning"):($a("new"),"new")}function ud(){return!dd()}function hh(){try{localStorage.getItem(Xl)==="true"&&localStorage.removeItem(Xl)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function vh(){try{localStorage.setItem(Wl,"true"),$a("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function pd(){return mt}function rr(){return co.length}function uo(){return co[de(Tt,0,rr()-1)]||co[0]}function wh(e=uo()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function bh(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function gd(e=uo()){for(const t of wh(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>bh(a));if(s)return s}return null}function md(e,t=null){return typeof e=="function"?md(e(t),t):f(e||{ru:"",en:""})}function kh(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function yh(){return!(mt||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.navMenu)}function po(e=!1,t=lm){clearTimeout(cs),!(!e&&!ud())&&(cs=window.setTimeout(()=>{cs=0,go({force:e})},t))}function go(e={}){const t=!!e.force;let n=!1;if(mt){if(!t)return!0;ar({completed:!1,silent:!0})}if(!t&&!ud())return!1;if(!yh())return po(t,Vl),!1;clearTimeout(cs);try{Ai=document.activeElement instanceof HTMLElement?document.activeElement:null,mt=!0,be="step",Tt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(a){console.warn("Could not make the app shell inert.",a)}}return cd(),ms(),fd(),n=!0,window.addEventListener("scroll",dn,{passive:!0}),window.addEventListener("resize",dn),window.addEventListener("orientationchange",dn),dn(),hd(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),ar({completed:!1,silent:!0}),n||po(t,Vl),!1}}function ar(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(cs),cs=0,cancelAnimationFrame(qs),qs=0,window.removeEventListener("scroll",dn),window.removeEventListener("resize",dn),window.removeEventListener("orientationchange",dn),It&&It.classList.remove("is-onboarding-target"),It=null,mt=!1,be="step",Tt=0,ue&&(ue.remove(),ue=null,Je=null,Le=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&vh(),n||(s?ze(s):C()),Ai?.focus&&requestAnimationFrame(()=>{try{Ai.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function ms(){if(!cd())return;const e=be==="final"?null:uo(),t=be==="final"?null:gd(e),n=be==="final"?ya.title:e.title,s=be==="final"?ya.text:md(e.text,t),a=be==="final"?p()==="ru"?"Готово":"Done":`${Tt+1} ${p()==="ru"?"из":"of"} ${rr()}`,o=f(n),c=f(s),l=Va("eva","calm","welcome"),d=rr();ue.classList.toggle("is-final",be==="final"),ue.classList.toggle("has-target",!!t),ue.dataset.view=be;const u=be==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(f(ya.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(f(ya.close))}</button>
      `:Tt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;ue.innerHTML=`
      ${be==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${be==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${be==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
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
    `,Je=xe("[data-onboarding-spotlight]",ue),Le=xe(".flash-kanji-onboarding-dialog",ue),It&&It!==t&&It.classList.remove("is-onboarding-target"),It=t||null,It&&It.classList.add("is-onboarding-target"),Le&&(Le.dataset.totalSteps=String(d)),dn()}function dn(){mt&&(qs||(qs=requestAnimationFrame(()=>{qs=0,fd()})))}function fd(){if(!mt||!ue||!Le)return;const e=be==="final"?null:It||gd();kh();const t=window.innerWidth,n=window.innerHeight;if(Le.style.maxWidth=`${Math.min(cm,Math.max(280,t-16))}px`,Le.style.maxHeight=`${Math.max(180,n-24)}px`,Le.style.left="50%",Le.style.top="50%",Le.style.transform="translate(-50%, -50%)",Le.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&Je?(Je.hidden=!1,Je.style.left=`${Math.round(s.left-12)}px`,Je.style.top=`${Math.round(s.top-12)}px`,Je.style.width=`${Math.round(s.width+12*2)}px`,Je.style.height=`${Math.round(s.height+12*2)}px`,Je.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):Je&&(Je.hidden=!0)}else Je&&(Je.hidden=!0);ue.style.visibility="visible",hd()}function $h(){mt&&ms()}function hd(){if(!Le)return;const e=Le.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Le.querySelectorAll("button"),n=e||t[0]||Le;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function jh(){return Le?Array.from(Le.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function Sh(e=1){const t=jh();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function Nh(e){return mt?e.key==="Tab"?(e.preventDefault(),Sh(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),ar({completed:be==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),vd(),!0):e.key==="ArrowLeft"?(e.preventDefault(),wd(),!0):!1:!1}function vd(){if(!mt)return;const e=rr()-1;if(be!=="final"){if(Tt<e){Tt+=1,ms();return}be="final",ms()}}function wd(){if(mt){if(be==="final"){be="step",Tt=rr()-1,ms();return}Tt>0&&(Tt-=1,ms())}}function Lh(e=null){ar({completed:!0,routeTo:e})}function xh(){Lh("textbooks")}function ja(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Pt(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>ja()))}function Ch(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function bd(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function mo(){return bd()?window.scrollY>32?"up":"down":null}function Ah(){const e=mo()||"down",t=bd()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function fo(){const e=xe('[data-action="scroll-page-edge"]');if(!e)return;const t=mo();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function Sa(e){return e!=="review"&&kd(e).length>1}function Th(e){if(!Sa(e)){ze(e);return}r.navMenu=r.navMenu===e?null:e,oe()}function kd(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:Lo(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function ho(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":A(e)}function Ih(){return["home","textbooks","review","dictionary","download","stats","about"]}function Rh(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function _h(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(Rh(e))}</span>
          <span>${i(ho(e))}</span>
        </button>
      </li>
    `}function Mh(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
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
                ${Ih().map(o=>_h(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(sn.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${bg("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(sn.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${bg("instagram")}</span>
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
    `}function Ph(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function Eh(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function Kh(){const e=Ph();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(nm)}" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(rm)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(Eh).join("")}
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
              <a class="btn ghost" href="${g(sm)}" download="flash-kanji-android.apk">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function Dh(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function Fh(){const e=Dh();return`
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
    `}function Oh(){const e=kd(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?ho(t):"";return`
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
    `}function Bh(){if(!r.pendingFocus)return;const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Pt();return}const t={"lesson-card":".study-card, .daily-lesson-card","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function Uh(){Ki(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Sa(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=ho(n))});const e=xe('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),xl(),T0(),Cl(),Gh()}function Gh(){const e=xe("#sidebarProgressBar"),t=xe("#sidebarProgressLabel"),n=xe("#sidebarProgressPercent"),s=xe("#sidebarProgressNote"),a=xe("#sidebarUserAvatar"),o=xe("#sidebarUserTitle"),c=xe("#sidebarUserSubtitle"),l=en(),d=Yc(),u=Be(),m=Math.max(1,Number(r.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(l.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${le().reviewQueue} · ${d.title||le().mapHint}`:`${d.title||le().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`N${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),c&&(c.textContent=`${le().level} ${m} · ${r.progress?.streak?.current||0} ${le().streak}`)}function Jh(){r.n5Textbook?.items?.length||no();const e=zh(),t=Uf(),n=Be(),s=Yc(),a=Gf(),o=le(),c=en(),l=Math.max(0,Math.min(100,Math.round(c.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=Tg();return`
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
          ${a.map(Jf).join("")}
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
                ${zf().map(Hf).join("")}
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
                ${u.map(qf).join("")}
              </div>
            </article>
            ${zr()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${Os()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${qh(e)}
          </aside>
        </section>
      </section>
    `}function zh(){Hh();const e=te(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=_a(),s=f(Fs("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||Et().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",c=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),l=ws(t?.sprite||r.evaRuntime?.currentSkin||vo());return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:c,sprite:l}}function Hh(){ce();const e=te();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(Jd("manual"),te().currentLine||r.evaRuntime?.currentPhrase||null)}function qh(e){const t=pn(),n=un(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${jd(f(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
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
          <img class="${g($d({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function yd(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function $d(e){const t=["eva-vn-sprite"],n=yd(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function Wh(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function jd(e,t=""){const n=Wh(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((c,l)=>`<span class="eva-line-piece" style="--i:${l}">${i(c)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function Xh(){ce(),ir(),ur(),X();const e=Ov(),t=e.node,n=qt()||e.bg||hs(t.background),s=e.sprite||e.spriteSrc||ws(e.spriteId||gn(t.sprite)),a=pn(),o=un(),c=Array.isArray(t.choices)?t.choices:[],l=yd(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${dv()}
        ${ov(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(l)}" data-eva-state="${g(l)}" data-eva-mood="${g(e.mood||Et().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:url('${g(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(f(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g($d(e))}" src="${g(s)}" alt="${g(f(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${Vh(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(f(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(f(n.title||{}))}</span>
            </div>
            ${jd(f(t.text||{}),d)}
            ${e.isAutonomy?lv(a):`
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

        ${r.evaRoomShopOpen?Qh():""}
      </section>
    `}function Qh(){const e=pn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${Sd({closable:!0})}
      </aside>
    `}function Vh(e={}){const t=Yh(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(ht(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function Yh(e={}){const t=e.decoration||te().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=ge(t);return!n||n.type!=="decoration"||!Kt(n.id)?null:n}function Sd(e={}){const t=fs(),n=nv(),s=st().filter(a=>Kt(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${st().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(pn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${Zh().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(a.id)}">
              ${i(f({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${ev().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${tv().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(sv).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${Sp({limit:6})}
        </div>
      </div>
    `}function Zh(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function ev(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function tv(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function nv(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=st().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>Bd(a)==="available")),t==="owned"&&(s=s.filter(a=>Kt(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function sv(e){const t=Bd(e),n=fs(),s=n.status[t]||t,a=Vv(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}">
        <div class="custom-shop-preview">
          <img src="${g(e.preview||e.asset)}" alt="${g(ht(e))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(av(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(ht(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(rv(e))}</p>
          ${e.type==="outfit"&&Nd(e)?`<blockquote class="custom-shop-phrase">${i(Nd(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(iv(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function fs(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function ht(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function rv(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function Nd(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function av(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function iv(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function ov(e){pn();const t=un(),n=te(),s=e.bg||qt(),a=xd(e.spriteId||r.progress.selectedEvaSprite),o=ge(r.customization?.selected?.effect),c=ge(e.decoration||n.currentDecoration),l=cv(e.mood||n.mood),d=ed();return`
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
          ${c?`<span>${i(ht(c))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(ht(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function lv(e){const t=un(),n=_a();return n?.id?`
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
    `}function un(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function cv(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function dv(){const e=Et(),t=pn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${g(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([a,o,c])=>`
            <div class="eva-relationship-stat eva-stat-${a}">
              <div><span>${i(o)}</span><strong>${Math.round(c)}</strong></div>
              <i><b style="width:${de(c,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function pn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function ce(){var t,n,s,a,o,c,l,d,u,m,h,v,w;(t=r.progress).seenCards||(t.seenCards={}),(n=r.progress).seenKanji||(n.seenKanji={}),(s=r.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),(a=r.progress).selectedEvaRoomBackground||(a.selectedEvaRoomBackground="bg_study_hub"),(o=r.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach($=>{r.progress.unlockedEvaSprites.includes($)||r.progress.unlockedEvaSprites.push($)}),(c=r.progress).selectedEvaSprite||(c.selectedEvaSprite="idle");const e=Jc(Uc(),r.progress.evaAutonomy||{});if((l=r.progress).evaAutonomy||(l.evaAutonomy={}),Object.keys(r.progress.evaAutonomy).forEach($=>delete r.progress.evaAutonomy[$]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||(r.evaRuntime=Rt()),(d=r.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=r.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=r.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(h=r.progress.evaRoomDialogueProgress).visited||(h.visited={}),r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(v=r.progress).evaRoomQuiz||(v.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(w=r.progress.evaRoomQuiz).rewarded||(w.rewarded={}),r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=Vi();else{const $=Gc(Vi(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(y=>delete r.progress.evaRelationship[y]),Object.assign(r.progress.evaRelationship,$)}}function Et(){return ce(),r.progress.evaRelationship}function ir(){if(!r.progress||!r.cards.length)return!1;ce();const e=r.progress.evaRelationship;let t=!1;const n=re(),s=e.lastDecayDate||n,a=Math.max(0,Rn(s,n));if(a>0){const k=r.progress.streak?.lastStudyDate,B=k?Rn(k,n):a+1;!k||B>1?(Se({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(Se({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=gl(),c={learned:o.learned,mastered:o.mastered,reviews:ml(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},l=e.lastKnown||{},d=k=>Math.max(0,Number(c[k]||0)-Number(l[k]||0)),u={},m=d("reviews"),h=d("learned"),v=d("mastered"),w=d("lessons"),$=d("streak"),y=d("wrong"),L=d("writing"),b=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),v&&(u.trust=(u.trust||0)+Math.min(16,v*1.2),u.warmth=(u.warmth||0)+Math.min(8,v*.5)),w&&(u.warmth=(u.warmth||0)+Math.min(12,w*2),u.discipline=(u.discipline||0)+Math.min(10,w*1.5)),$&&(u.discipline=(u.discipline||0)+Math.min(15,$*3),u.warmth=(u.warmth||0)+Math.min(8,$)),L&&(u.curiosity=(u.curiosity||0)+Math.min(10,L*.8)),b&&(u.trust=(u.trust||0)+Math.min(10,b*.8)),y&&(u.discipline=(u.discipline||0)-Math.min(6,y*.12)),Object.keys(u).length&&(Se(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=c,Ld(),t}function Se(e={},t="relationship",n={}){ce();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=yi(de(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),Ld(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function Ld(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function vo(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=ge(e)?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&La(n)?n:"idle"}function uv(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function gn(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=vo(),a=uv(n),o=n&&!a?n:s,c=r.evaRuntime?.mood||Et().mood,l=t||(a?n:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[c]||"idle",d=hv(l),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(v=>pv(v,d)),...u,...d,"idle","default"].filter(Boolean).find(v=>r.evaSprites?.[v]&&(La(v)||!o||La(o)))||"idle"}function pv(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=Gn(n);return!a||a.defaultOwned||s.length<=1?s:gv(s)}function gv(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=Ri%t.length;return[...t.slice(n),...t.slice(0,n)]}function mv(){const e=vo(),t=Gn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function fv(){Ii&&window.clearInterval(Ii),Ii=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==Ri&&(Ri=e,!(document.hidden||!mv())&&(r.route==="home"||r.route==="eva-room")&&C())},3e4)}function hv(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=vv(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function vv(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function te(){return ce(),r.progress.evaAutonomy}function Na(){const e=te();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function wo(){const e=r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(s=>s.id)),n=st().filter(s=>s.type==="background"&&!t.has(s.id)).map(s=>({id:s.id,title:{ru:s.title_ru,en:s.title_en},file:s.asset||s.preview,price:s.price,defaultUnlocked:s.defaultOwned}));return[...e,...n]}function hs(e){return wo().find(t=>t.id===e)||wo()[0]}function qt(){ce();const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background;return hs(e)||hs("bg_study_hub")}function wv(e){const t=hs(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function bv(){const e=st().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function xd(e){return bv().find(t=>t.id===e)}function La(e){if(!e)return!1;const t=xd(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function xa(e){ce();const t=r.evaRuntime?.mood||Wt(Ce()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=wo().filter(c=>wv(c.id));return s.map(c=>a.find(l=>l.id===c)).find(Boolean)||Ge(a)||qt()}function Ca(e){ce();const t=r.evaRuntime?.mood||Wt(Ce()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(a=>La(a)&&r.evaSprites?.[a])||r.progress.selectedEvaSprite||"idle"}function kv(e){return e==="generated_line"?yv():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function yv(){ce();const e=pn(),t=r.progress.evaRoomDialogueProgress.generatedLine||Dd("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||qt().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function Aa(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function $v(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function Cd(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function jv(e,t=Ce()){const n=e?.conditions||{},s=(o,c)=>{const l=Cd(c);return!l.length||l.includes(String(o))},a=(o,c)=>{const l=Cd(c);return!l.length||l.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function Sv(e="auto",t=Ce()){return null}function Ta(e,t="auto",n=Ce()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=Jn(zt(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=re(),s.lastKnownMood=r.evaRuntime.mood||Et().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function Ad(e){if(!r.evaRuntime)return;r.evaRuntime.memory=Jn(zt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=re()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function Nv(){return{quiet:12e4,normal:Mn(45e3,12e4),active:45e3}}function Lv(){Ti&&window.clearInterval(Ti),Ti=window.setInterval(xv,5e3)}function vs(){const e=te(),t=Nv()[e.frequency]||Mn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function xv(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=Ce(),t=r.evaRuntime,n=te(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return Ne("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=Wt(e),c=Ia(e,o);(o!==t.mood||c!==t.emotion)&&(t.mood=o,t.emotion=c,n.mood=o,n.emotion=c,t.lastEmotionChangeAt=s,t.cooldowns.emotion=Mn(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",vs(),a=!0):or("timer",{context:e})&&(a=!0)),a&&(zn(),N(),r.route==="eva-room"&&C()),a}function Ce(e={}){const t=r.progress?Vt():{},n=r.evaRuntime||Rt(),s=Jn(zt(),n.memory||{}),a=new Date().getHours();return zc(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-Ei,lastEvent:n.lastEvent,dueReviews:r.progress?Be():0,shopOpen:!!r.evaRoomShopOpen,...e}}function Wt(e=Ce()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function Ia(e=Ce(),t=Wt(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return Ge(["approve","happy","soft_smile"]);if(n==="answer_wrong")return Ge(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return Ge(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return Ge(s[t]||s.neutral)}function or(e="auto",t={}){if(!r.progress||!Na()||!t.force&&r.route!=="eva-room")return!1;const n=te(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||Ce({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=Wt(a),c=Td(e)||bo(e);if(!c)return!1;r.evaRuntime||(r.evaRuntime=Rt()),r.evaRuntime.mood=o;const l=c.emotion||Ia(a,o,e),d=xa(c),u=gn(Ca(c),l),m=ko(c),h=yo(c),v=Pd(a,c);return n.currentLine={id:c.id,category:c.category||"mood",text:c.text,sprite:u,background:d.id,decoration:m,effect:h,emotion:l,state:c.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=v,n.currentDecoration=m,n.currentEffect=h,n.mood=o,n.emotion=l,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[c.id,...(n.recentLineIds||[]).filter(w=>w!==c.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=Rt()),Object.assign(r.evaRuntime,{mood:o,emotion:l,presenceState:c.state||"speak",currentPhrase:n.currentLine,pendingQuestion:v,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:v?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:Mn(15e3,3e4),phrase:Mn(45e3,12e4),question:Mn(3*6e4,7*6e4),visual:Mn(10*6e4,15*6e4)}}),Ta(c,e,a),$o(u,d.file),vs(),Se(c.relationshipDelta||{warmth:.1},`eva_autonomy:${c.id}`,{silent:!0}),zn(),nn(),!0}function Td(e){const t=Sv(e,Ce({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(te().recentLineIds||[]),o=s.filter(l=>!a.has(`${e}_${Te(`${l.ru||l.en}`)}`)),c=Ge(o.length?o:s);return c?{id:`${e}_${Te(`${c.ru||c.en}`)}`,category:e,text:c,relationshipDelta:{}}:null}function Id(){const e=te(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function Cv(e="auto"){const t=Et(),n=new Date().getHours(),s=Be(),a=Vt(),o=[];return o.push(...$v(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function bo(e="auto"){ce(),ir();const t=Et(),n=Ce({lastEvent:{type:e}}),s=te().currentLine?.id,a=new Set([s,...te().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],c=Cv(e),l=(u,m=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!m&&a.has(h.id)||!Fd(h,t)||!jv(h,n))return!1;const w=Array.isArray(h.moods)?h.moods:[];return!w.length||w.includes(t.mood)});for(const u of c){const m=l(u);if(m.length)return Ge(m)}for(const u of c){const m=l(u,!0);if(m.length)return Ge(m)}const d=o.filter(u=>!a.has(u.id));return Ge(d.length?d:o)}function Ne(e,t={}){if(!e)return;ur(),X();const n={type:_d(e),payload:t||{},at:Date.now()};Rd(n),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...n,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:Ne});function Rd(e={}){if(!e.type||!r.progress)return;ce(),r.evaRuntime||(r.evaRuntime=Rt());const t={type:_d(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),Ad(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=Av(t.type,t.payload);Object.keys(n).length&&Se(n,`eva_event:${t.type}`,{silent:!0});const s=te();Id(),s.nextSpeakAt=0;const a=or(t.type,{force:!0,eventPayload:t.payload});zn(),N(),a&&r.route==="eva-room"&&C()}function _d(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function Av(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function ko(e){const t=r.evaRuntime?.mood||Wt(Ce()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return Md("decoration",s)}function yo(e){const t=r.evaRuntime?.mood||Wt(Ce()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return Md("effect",s)||"none"}function Md(e,t=[]){const n=st().filter(a=>a.type===e&&Kt(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||Ge(n))?.id||null}function Pd(e=Ce(),t=null){const n=te();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),c=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),l=Number(r.evaRuntime?.cooldowns?.question||Mn(3*6e4,7*6e4));if(!a&&o-c<l||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=Ed(s).filter(h=>!d.has(h.id)),m=Ge(u.length?u:Ed(s));return m?{...m,at:new Date().toISOString()}:null}function Ed(e="auto"){const t=Zf();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${re()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,c)=>{const l=n.has(String(o.id))?1:0,d=n.has(String(c.id))?1:0;return l-d||Te(`${s}:${o.id}`)-Te(`${s}:${c.id}`)}).slice(0,18).map(o=>Tv(o,t,e)).filter(Boolean)}function Tv(e,t,n="auto"){const s=Pe(e,"ru"),a=Pe(e,"en");if(!s||!a)return null;const o=Iv(e,t);if(!o.length)return null;const c=String(e.jlpt||"").toUpperCase(),l=c||(p()==="ru"?"твоих карточек":"your cards"),d=Kd(e,e,!0),u=[d,...o.map(m=>Kd(m,e,!1))].sort((m,h)=>Te(`${n}:${e.id}:${m.id}`)-Te(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Te(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:c,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${l}?`,en:`What does the ${l} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function Iv(e,t){const n=Ra(Pe(e,"ru")),s=Ra(Pe(e,"en")),a=String(e.jlpt||"").toUpperCase(),c=[...t.filter(l=>{if(!l?.id||String(l.id)===String(e.id)||l.kanji===e.kanji)return!1;const d=Ra(Pe(l,"ru")),u=Ra(Pe(l,"en"));return!(!d||!u||d===n||u===s)})].sort((l,d)=>{const u=String(l.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||Te(`${e.id}:${l.id}`)-Te(`${e.id}:${d.id}`)});return c.slice(0,Math.min(3,c.length))}function Kd(e,t,n){const s=Pe(e,"ru"),a=Pe(e,"en"),o=Pe(t,"ru"),c=Pe(t,"en");return{id:`meaning_${Te(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${c}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${c}.`}}}function Ra(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function Rv(e){ce();const t=_a();t?.id&&_v(t.id,e.dataset.option)}function _v(e,t){ce();const n=te(),s=_a();if(!s?.id||s.id!==e)return;const a=s.options?.find(h=>h.id===t);if(!a)return;const c=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||(r.evaRuntime=Rt()),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,Se(a.delta||(c===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&Pv(s,a,c);const l={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:c,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...l,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[l,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=xa({}),u=c===!1?"thinking":"approve",m=gn(Ca({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||Mv(s,c),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,Ta(n.currentLine,"question_answer",Ce({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,vs(),Fv(s,a,c),zn(),N(),P(c===!1?"answer_wrong":c===!0?"answer_correct":"notification_soft"),C()}function _a(){const e=te(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||(r.evaRuntime=Rt()),r.evaRuntime.pendingQuestion=t,t):null}function Mv(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||f(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||f(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||f(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||f(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function Pv(e,t,n){const s=ed(),a=Ev(e);a&&tr(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:f(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=Vt();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&Kv(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),G(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&Dv(a)),o.minutes=yi(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[re()]=o,ve(),il(),X()}function Ev(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?ne(t):null)||td().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,c=n&&a.kanji===n,l=!s||String(a.jlpt||"").toUpperCase()===s;return o||c&&l})||(n?r.cards.find(a=>a.kanji===n):null)||null}function Kv(e){const t=String(e?.jlpt||"").toUpperCase(),n=io().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function Dv(e){const t=String(e?.jlpt||"").toUpperCase(),n=io().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function Fv(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),Ad(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Ov(){ce(),Na()&&or("render");const e=Od();let t=te().currentLine;if(Na()&&!t?.text&&r.evaAutonomyLines.length){const a=bo("render_fallback")||r.evaAutonomyLines[0],o=xa(a),c=Ce({lastEvent:{type:"render_fallback"}}),l=Wt(c),d=ko(a),u=yo(a),m=a.emotion||Ia(c,l,"render_fallback"),h=gn(Ca(a),m);t={id:a.id,category:a.category||"mood",text:a.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},te().currentLine=t,te().currentDecoration=d,te().currentEffect=u,te().mood=l,te().emotion=m,te().lastSpokeAt=t.at,te().lastRoomId=o.id,te().lastSprite=h,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,Ta(a,"render_fallback",c),$o(h,o.file),vs(),N()}if(Na()&&t?.text){const a=hs(t.background)||qt(),o=gn(t.sprite||"relationship",t.emotion||te().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:ws(o),decoration:t.decoration||te().currentDecoration,effect:t.effect||te().currentEffect,mood:te().mood||Et().mood,emotion:t.emotion||te().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=hs(e.background)||qt(),s=gn(e.sprite,te().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:ws(s),decoration:te().currentDecoration,effect:te().currentEffect,mood:Et().mood,emotion:te().emotion||"calm",node:e}}function Dd(e="adaptive"){ce(),ir();const t=Et(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=Aa().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!Fd(d,t)?!1:!n.has(d.id)}),a=Aa().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:Aa(),c=Ge(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:qt().id},l=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[c.id,...l.filter(d=>d!==c.id)].slice(0,24),{id:c.id,category:c.category||e,text:c.text||{ru:String(c.ru||""),en:String(c.en||c.ru||"")},sprite:c.sprite||"relationship",background:c.background||qt().id,relationshipDelta:c.relationshipDelta||{}}}function Fd(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function Od(){ce();const e=kv(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function ws(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function $o(e,t=""){[ws(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Bv(e){const n=Od().choices?.[Number(e.dataset.index||0)];if(!n)return;ce();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=re(),Uv(n),Se(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),G(0,a,`eva_room:${o}`),J(pn().reward)),n.randomLine){const c=Dd(n.randomLine);Se(c.relationshipDelta||{},`eva_line:${c.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=c,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),N(),n.route){ze(n.route);return}P(n.openShop?"menu_open":"page_turn"),C()}function Uv(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=Jn(zt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=re(),t.lastRoute=r.route}function Gv(){ce(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),N(),P("page_turn"),C()}function Jv(e){Ma(e)}function zv(e){Pa(e)}function Hv(e){const t=ge(e)||Un(e)||Gn(e);t&&Ma(t.id)}function qv(e){const t=ge(e)||Un(e)||Gn(e);t&&Pa(t.id)}function Kt(e){r.customization||da();const t=ge(e)||Un(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function jo(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Wv(e){const t=jo(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function Bd(e){return!e||!So(e)?"locked":Wv(e)?"selected":Kt(e.id)?"owned":"available"}function Xv(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,te().currentEffect];for(const n of t){const s=Jt(n);if(!s||s==="none")continue;const a=ge(s);if(a?.type==="effect"&&Kt(a.id))return a.id}return null}function Ud(e=null){const t=Jt(e||r.customization?.selected?.effect),n=ge(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),Zs(),ds(),N(),nn(),P("menu_close"),J(p()==="ru"?"Эффект убран.":"Effect removed."),C(),!0)}function Qv(e=null){const t=Jt(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=ge(t);if(!n)return!1;if(n.type==="effect")return Ud(n.id);r.customization||da();const s=jo(n);if(!s)return!1;const a=Bn().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),Zs(),ds(),N(),nn(),P("menu_close"),J(p()==="ru"?"Выбор сброшен.":"Selection cleared."),C(),!0}function Vv(e){if(!e?.unlockCondition||So(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=Zn().find(o=>o.id===t.id),a=s?nl(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function So(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function Ma(e){const t=ge(e);if(t){if(!So(t)){P("purchase_failed"),J(fs().locked);return}if(Kt(t.id)){Pa(t.id);return}if(r.progress.moonFragments<t.price){P("purchase_failed"),J(fs().notEnough);return}r.progress.moonFragments-=t.price,r.customization.owned=[...new Set([...r.customization.owned||[],t.id])],r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:ht(t),xp:0,coins:-t.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),Zs(),ds(),X(),N(),P("purchase_success"),P("item_unlock"),Ne("item_bought",{itemId:t.id,type:t.type,title:ht(t),price:t.price}),J(fs().bought.replace("{item}",ht(t))),C()}}function Pa(e){var s;const t=ge(e);if(!t||!Kt(t.id))return;const n=jo(t);n&&(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(r.progress.selectedEvaSprite=t.spriteId,r.progress.evaAutonomy.currentLine=null),t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,(s=r.evaRuntime).memory||(s.memory=zt()),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),Zs(),ds(),N(),nn(),P("notification_soft"),Ne("item_equipped",{itemId:t.id,type:t.type,title:ht(t)}),J(fs().selectedToast.replace("{item}",ht(t))),C())}function Yv(){const e=te();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,or("toggle",{force:!0}),N(),P("notification_soft"),J(un().status),C()}function Zv(){const e=te();e.frequency="normal",vs(),N(),P("notification_soft"),C()}function ew(){const e=te();e.roomMode="auto",e.currentLine=null,N(),P("notification_soft"),C()}function tw(){const e=te();e.outfitMode="auto",e.currentLine=null,N(),P("notification_soft"),C()}function Gd(){const e=te();e.enabled=!0,Id(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,Jd("manual"),N(),P("page_turn"),C()}function Jd(e="manual"){const t=Td(e)||bo(e);if(!t)return!1;const n=Ce({lastEvent:{type:e}}),s=Wt(n),a=t.emotion||Ia(n,s,e),o=xa(t),c=gn(Ca(t),a),l=ko(t),d=yo(t),u=te(),m=Date.now(),h=Pd(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:c,background:o.id,decoration:l,effect:d,emotion:a,state:t.state||"speak",at:new Date(m).toISOString(),reason:e},u.currentDecoration=l,u.currentEffect=d,u.mood=s,u.emotion=a,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=c,u.currentQuestion=h,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(v=>v!==t.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=Rt()),Object.assign(r.evaRuntime,{mood:s,emotion:a,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:h,currentSkin:c,currentBackground:o.id,currentDecoration:l,currentEffect:d,activeSkin:c,activeBackground:o.id,lastPhraseAt:m,lastEmotionChangeAt:m,lastQuestionAt:h?m:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:m,textRevealSkippedLineId:null}),Ta(t,e,n),$o(c,o.file),vs(),zn(),nn(),!0}function nw(){te().currentLine=null,N(),P("menu_close"),C()}function M(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${de(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function sw(e){const t=fl(e.id),n=t.filter(d=>D(d.id).state!=="New").length,s=t.filter(d=>D(d.id).state==="Mastered").length,a=!Me(e),o=mg(e),c=a?"鎖":t[0]?.kanji||"文",l=E(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${yl(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(c)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${zS(o)}
          <h3>${i(Gr(e))}</h3>
          <p>${i(M0(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(A("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(A("unlockedAt"))} ${li(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${l}%"></i></span>
        </span>
      </button>
    `}function rw(e){const t=mg(e),n=e.id===r.activeLessonId,s=!Me(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${yl(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g($l(t))}">
        <span>${i(e.jlpt)}</span>
        ${JS(t)}
      </button>
    `}function No(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function aw(){const e=No();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>Me(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>Me(t))||r.lessons[0]||null}function Lo(){return V(aw()?.jlpt)||tn()}function zd(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&Me(t))return t;const s=e.find(a=>Me(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function iw(e){const t=e.length,n=e.filter(a=>Me(a)).length,s=["all",...Ke];return`
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
    `}function ow(e){if(!e)return"";const t=e.textbook||e;return`
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
    `}function lw(e){const t=St(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Gr(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${li(e)}.`:`Unlocks at level ${li(e)}.`)}</p>
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
    `}function cw(){return r.activeLearnView===Gt?vw():r.activeLearnView===Ct?hw():Wd()}function dw(){const e=Vc();if(e.kind==="review"){ze("review");return}if(r.route==="home"){ci(Lo());return}Hd(e.nodeId)}function Hd(e){const t=Hn(e);if(!t){qn();return}if(Qc(t)==="locked"){J(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===is){ze("review");return}if(t.id===os){vr("final-test");return}if(t.type==="textbook"){vr(t.id);return}qn(Ct,t.id)}function qd(e){const t=String(e||"");return t&&(ne(t)||r.cards.find(n=>String(n.id)===t))||null}function uw(){const e=le();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function lr(e){const t=wt(e);if(!t)return null;const n=mn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,c)=>{const l=bt(o)[0]||null,d=s[c%Math.max(s.length,1)]||s[0]||null,u=l?{jp:l.word||o.kanji,hiragana:l.reading||o.hiragana||"",translation:l.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:Q(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:R(o),en:R(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:gr(t),source:"learning_path"}}function pw(e){if(e===je)return uw();const t=r.learningPathLessonPayloads[e]||lr(e);if(!t)return[];const n=le(),s=[],a=(t.objectives||[]).map(f).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:f(t.title),text:f(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,c)=>{const l=qd(o.cardId);if(!l)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${c+1}`,kind:"kanji",eyebrow:l.jlpt||"N5",title:`${l.kanji} · ${R(l)}`,text:Gw(l,{word:d?.jp||l.kanji,reading:d?.hiragana||l.hiragana||""}),note:d?.translation?f(d.translation):"",cardId:l.id,card:l,sentence:d})}),(t.exercises||[]).forEach(o=>{const c=(o.options||[]).map(l=>({value:String(l.value??l.id??l.label??l),label:f(l.label||l.text||l)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:f(o.prompt),text:f(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:c})}),s}function gw(e,t=null){const n=pw(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function mw(e,t=Ct,n=[]){const s=cn(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=Ji({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,N(),s.activeSession)}function cr(e){const t=so(),n=t?.nodeId===e?t:mw(e),s=gw(e,n),a=s.filter(l=>l.kind==="quiz"),o=Object.keys(n.answers||{}).length,c=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:c,currentStep:s[c]||null,isResult:c>=s.length&&s.length>0}}function fw(e,t,n){var l;const s=cn(),a=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),c=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((l=s.completedNodes)[e]||(l[e]=a),s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===je&&G(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=wt(e),u=r.learningPathLessonPayloads[e]||lr(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(v=>v.cardId),...mn(d).map(v=>v.id)].map(String).filter(Boolean))],h=Z();if(m.forEach(v=>{const w=qd(v);if(!w)return;tr(w,"learning_path"),ps(h,w.kanji);const $=se(D(w.id));$.state==="New"&&(r.progress.cards[w.id]=pe($,c?"hard":"good"))}),d){ae.add(`n5:${d.id}`),h.completedLessons[d.id]=a,h.currentLessonId=Fe().find($=>$.order===d.order+1)?.id||d.id,r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[d.id]=a,N({immediate:!0}),Xn()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const v=r.n5Meta?.rewards?.lessonCompleteXp||45,w=r.n5Meta?.rewards?.lessonCompleteMoon||6;G(v,w,`learning_path:${e}`),et({title:`${De().lessonComplete}: ${f(d.title)}`,message:De().lessonCompleteText,xp:v,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),P("lesson_complete"),Ne("lesson_complete",{lessonId:e,jlpt:"N5"})}}ba(),ve(),X(),N()}function Wd(){r.n5Textbook?.items?.length||no();const e=le(),t=Xc(),n=Vc(),s=Hn(gs()),a=en();return`
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
            <h2>${i(Wc(gs()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(le().reviewQueue)} · ${i(Be())}</span>
            <span class="pill">${i(le().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(le().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,c)=>{const l=Qc(o),d=l==="locked",u=f(o.summary)||"",m=o.id===is?e.reviewAction:o.id===os?e.openCheckpoint:o.type==="textbook"?e.openTextbook:l==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(l)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${c+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(Bf(l))}</span>
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
    `}function hw(){const e=r.activeLearnNodeId||gs(),t=Hn(e),n=le();if(!t)return Wd();if(t.id!==je&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return no(),`
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
      `;t.type==="lesson"&&Mf(e);const s=cr(e),{session:a,steps:o,quizSteps:c,currentStep:l,isResult:d}=s;if(!o.length)return`
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
      `;const u=o.length,m=u?E(Math.min(a.stepIndex,u),u):0,h=a.answers?.[l?.id||""]||null,v=h?.selected||"",w=!!h?.correct,$=c.length?Math.round(Number(a.score||0)/Math.max(c.length,1)*100):100;return d?`
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
                    <span class="pill">${i(R(l.card))}</span>
                    ${l.card.hiragana?`<span class="pill">${i(Q(l.card.hiragana))}</span>`:""}
                    ${l.card.onyomi?`<span class="pill">${i(Q(l.card.onyomi))}</span>`:""}
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
                ${(l.options||[]).map(y=>{const L=v===y.value,b=y.value===l.answer;return`<button class="btn ${L?w?"success":"danger":h&&b?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(l.id)}" data-value="${g(y.value)}">${i(y.label)}</button>`}).join("")}
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
    `}function vw(){const e=No(),t=zd(e),n=!!(t&&Me(t)),s=n?hS(t.id):[];(!r.activeCardId||!s.some(c=>c.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?ne(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?St(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("learn"))}</h1>
            <p>${i(t?Gr(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${iw(e)}
        ${o?ow(o):""}
        <div class="actions lesson-tabs">
          ${e.map(rw).join("")}
        </div>
        <div class="study-layout">
          ${n?a?hp(a):X$(t):lw(t)}
          ${n?Xo(a,s.length):Xo(null,0)}
        </div>
      </section>
    `}function ww(){const e=Yt(r.activeJlptLesson)||Yt(ne(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(A("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=St(e.jlpt);if(!pt(e.jlpt))return Xd(t||e);const n=vg(e.jlpt),s=n.filter(c=>D(c.id).state==="Mastered").length,a=n.filter(c=>D(c.id).state!=="New").length,o={...Ll(),...Nl()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(f(e.title))}</h1>
            <p>${i(f(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${Ks("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(c=>{const l=pt(c.jlpt),d=c.jlpt===e.jlpt,u=g(Zt(c.jlpt));return l?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(c.jlpt)}">${i(c.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(c.jlpt)}</button>`}).join("")}
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
            ${M(o.available,n.length,e.jlpt,E(n.length,Math.max(r.cards.length,1)))}
            ${M(o.learned,a,`${s} ${o.mastered}`,E(a,Math.max(n.length,1)))}
          </div>
        </article>
        ${rp(e)}
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
    `}function bw(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"").toUpperCase(),n=t?St(t):null;if(n)return r.activeTextbookLevel=n.jlpt,r.activeJlptLesson=n.jlpt,kw(n);const s=p()==="ru"?{title:"Учебники Flash Kanji",description:"Функциональные страницы учебников JLPT N5–N1 с переходом к урокам, повторению и материалам внутри уровня.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам"}:{title:"Flash Kanji Textbooks",description:"Functional JLPT N5-N1 textbook pages with lesson links, review entry points, and level materials.",open:"Open page",pdf:"Download PDF",study:"Go to lessons"};return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${i(s.title)}</h1>
            <p>${i(s.description)}</p>
          </div>
          <div class="actions">
            ${Ks("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(tn())}">${i(s.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${e.map(a=>`
            <article class="textbook-card ${pt(a.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(a.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(a.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(a.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(f(a.displayTitle||a.title||{}))}</h2>
                <p>${i(f(a.description||{}))}</p>
                ${pt(a.jlpt)?"":`<p class="textbook-lock-note">${i(Zt(a.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(a.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(a.kanjiCount||0)} ${i(A("cardsToday"))}</span>
                  <span class="pill">${i(f(a.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(a.jlpt)}">${i(s.open)}</a>
                  ${pt(a.jlpt)?`<a class="btn ghost" href="${g(a.pdfUrl||a.pdfFile||"")}" download="${g((a.pdfFile||a.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(s.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(Zt(a.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${pt(a.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(a.jlpt)}">${i(s.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(Zt(a.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Xd(e){const t=String(e?.jlpt||"").toUpperCase(),n=jl(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(f(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i(Zt(t))}</p>
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
    `}function kw(e){const t=String(e?.jlpt||"").toUpperCase();if(!pt(t))return Xd(e);if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return $w(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return ub(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return qb(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return Tk(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return r.n1Textbook?.items?.length?gy(e):(Cm().catch(()=>{}),ia?id(ia):yw(e,"N1"));r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(v=>r.lessons.find(w=>w.id===v)).filter(Boolean),s=r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(v)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(v=>v.id===r.activeTextbookSubroute)||Yt(e.jlpt)||r.jlptLessons[0]:Yt(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&gt(t,o.id,"textbook_page");const c=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},l=Sl(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=f(e.recommendedCycle||{}),u=f(e.goal||{}),m=(e.previousLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join(""),h=(e.nextLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join("");return`
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
            ${Ks("textbook",{level:e.jlpt})}
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
          ${M(e.jlpt,e.lessonCount||0,u,E(e.lessonCount||0,Math.max(1,r.jlptLessons.length)))}
          ${M(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",E(e.kanjiCount||0,Math.max(1,r.cards.length)))}
          ${M(p()==="ru"?"Уроки":"Lessons",a.length,c.practice,E(a.length,Math.max(1,r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${M(p()==="ru"?"Переход":"Jump",r.activeTextbookLevel===e.jlpt?1:0,c.lessonPage,r.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${ks(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(c.outline)}</h2>
              <p>${i(f(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,c.outline,E(o.sections?.length||0,4))}
              ${M(p()==="ru"?"Практика":"Practice",o.practice?.length||0,c.practice,E(o.practice?.length||0,4))}
            </div>
          </article>
          ${rp(o)}
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
          ${a.map(v=>sw(v)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function yw(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:`Готовлю интерактивный учебник ${t}`,text:"Подгружаю главы, карточки, грамматику и финальный тест. Сейчас откроется рабочая оболочка, не старый экран.",back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:`Preparing the interactive ${t} textbook`,text:"Loading lessons, cards, grammar, and the final test. The full app shell will open in a moment.",back:"All textbooks"};return`
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
          ${Nn("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function $w(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",ur();const t=String(r.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return Pw();if(t==="review")return _w();const n=wt(t);return n?(Z().currentLessonId=n.id,gt("N5",n.id,"n5_lesson_page"),Mt("N5",n,"n5_lesson_page"),Iw(e,n)):jw(e)}function jw(e){const t=Jw(),n=De(),s=Fe(),a=Bw(),o=r.n5Meta||{},c=f(o.principle||{});return`
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
          ${Nn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>Sw(l)).join("")}
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

        ${ks("N5")}
      </section>
    `}function Sw(e){const t=Co(e.id),n=De();let s=e.kanji.filter(a=>Z().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(zw(t))}</small>
      </a>
    `}function bs(){return r.progress.jlptLessonStudy=Mc(Gi(),r.progress.jlptLessonStudy||{}),r.progress.jlptLessonStudy}function Nw(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function vt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Wn(e,t,n){const s=bs(),a=Nw(e,t?.id),o=Ic();let c=s.sessions[a];c||(c={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=c),c.level=String(e||c.level||"").toUpperCase(),c.lessonId=String(t?.id||c.lessonId||""),c.answers||(c.answers={}),c.phase=Rc(c.phase),c.startedAt||(c.startedAt=new Date().toISOString()),c.updatedAt||(c.updatedAt=new Date().toISOString());const l=Array.isArray(n)?n.length:0,d=l?n.findIndex(m=>!c.answers[m.id]):-1,u=Object.keys(c.answers||{}).length;return c.completedAt?(c.phase="done",c.currentIndex=l):d<0?(c.currentIndex=l,c.phase="test",c.testOpenedAt||(c.testOpenedAt=c.updatedAt||new Date().toISOString())):(c.currentIndex=d,c.phase!=="test"&&(c.phase="study")),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:c,key:a,answeredCount:u,currentIndex:c.currentIndex,total:l}}function Lw(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function xw(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(Qa).join("")}
      </ul>
    `:""}function Cw(e){const t=Mr(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${el(e)}
          ${n?`
            <div>
              <h3>${i(A("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function Aw(e,t,n,s,a,o,c={}){if(!n)return"";const l=typeof c.examples=="function"?c.examples(n,t)||[]:[],d=typeof c.sentence=="function"?c.sentence(n,t):"",u=typeof c.extra=="function"?c.extra(n,t):"",m=c.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),v=Number(s||0),w=D(n.id),$=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(v+1)}</span>
              <span class="pill">${i(w.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(A("strokes"))}</span>`:""}
              ${pp(n)}
            </div>
            <h2>${i(R(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(v+1,a)} из ${a}`:`Kanji ${Math.min(v+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${mp(n,"onyomi",o.onyomi,n.onyomi)}
              ${mp(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${xw(l)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${Cw(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g($)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g($)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function Tw(e,t,n,s,a){return`
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
    `}function dr(e,t,n,s,a={}){const o=Wn(e,t,n),c=Lw(o,n),l=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||vt(e,t?.id,"player"),m=d?E(l,d):0,h=c?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(l+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":p()==="ru"?"Тест открыт":"Test open",v=c?R(c):s.lessonComplete;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(v)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${c?Aw(e,t,c,o.currentIndex,d,s,a):Tw(e,t,s,d,l)}
      </article>
    `}function Iw(e,t){const n=De(),s=mn(t),a=gr(t),o=Co(t.id),c=Wn("N5",t,s);let l=o==="completed";const d=`n5:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(U=>Ao(U.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(U=>Z().studiedKanji[U.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,L=t.kanji.filter(U=>Z().difficultKanji[U]).join(" · "),b=Fe().find(U=>U.order===t.order+1),k=vt("N5",t.id,"player"),B=vt("N5",t.id,"test");return`
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
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,w)}/${w}`,n.kanji,E(c.answeredCount,w))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${dr("N5",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:U=>bt(U),sentence:U=>Rw(U,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(Q(U.reading||""))}</span>
                <small>${i(f({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(B)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(U=>Qd(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>Z().studiedKanji[U.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
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
    `}function Rw(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Q(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Qd(e){const t=De(),n=Ao(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&fn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(du(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Vd(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Vd(e,n)}
      </article>
    `}function Vd(e,t){if(!t)return"";const n=De(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function _w(e){const t=De(),n=Z().activeReviewMode||"due",s=ob(n);return`
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
          ${s.map((a,o)=>Mw(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Mw(e,t){const n=De(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(_n(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(R(e))}</h3>
        <p>${i(bt(e)[0]?.word||e.hiragana||"")} · ${i(bt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Pw(e){const t=De(),n=r.n5FinalTest||{},s=lu(),a=Z().finalTest,o=Bt(a,s),c=o.answered,l=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const h=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==h)&&(a.percent=h),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
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
            ${Nt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,v)=>Ew(h,v)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Nt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Ew(e,t){const n=Z().finalTest.answers?.[e.id],s=!!Z().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${g(xs("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(c=>{const l=n===c.value;return`<button class="btn ${s&&c.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(c.value)}">${i(c.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(De().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function De(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Yd(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Zd(e){return V(e)||String(e||"").toUpperCase()}function eu(e){const t=Zd(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function xo(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function tu(e){return Q(Nr(String(e?.text||"")).replace(/\s+/g," ").trim())}function Kw(e){const t=V(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function Dw(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return Ke.forEach(n=>{eu(n).forEach((s,a)=>{const o=xo(s),c=tu(s),l=qo({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:c,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,Kw(n));l&&(l.kind="cloze",l.tiles=jn(l,e),l.source="markdown",l.sourceId=String(s.id||""),l.sourceKind="markdown",l.sourceTitle=o.title,l.title=o.title,l.genre=s.genre||"",l.goal=s.goal||"",l.passageSource=s.source||"",l.questions=Array.isArray(s.questions)?s.questions:[],l.level=n,l.order=a+1,t.push(l))})}),t}function Fw(e){const t=xo(e),n=tu(e),s=n?vp(n):"",a=f(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Yo())}</summary>
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
            <span>${i(Yo())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function ks(e){const t=eu(e);if(!t.length)return"";const n=Yd(),s=Zd(e),a=Fr(s,"textbook_reading_block"),o=_s(s);return(a||o)&&N(),`
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
          ${t.map((c,l)=>Ow(c,s,l)).join("")}
        </div>
      </section>
    `}function Ow(e,t,n){const s=Yd(),a=xo(e),o=Array.isArray(e?.questions)?e.questions:[];return`
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
        ${Fw(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(c=>`<li>${i(c)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function ur(){r.progress.n5Course=Ec(zi(),r.progress.n5Course||{});const e=Fe();!wt(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n5Course.completedLessons[s.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function Z(){return ur()}function Fe(){return r.n5Textbook?.items||[]}function wt(e){const t=String(e||"");return t&&Fe().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function Bw(){return wt(Z().currentLessonId)||Fe().find(e=>!Z().completedLessons[e.id])||Fe()[0]||null}function mn(e){return(e?.kanji||[]).map(t=>Uw(t,e)).filter(Boolean)}function Dt(){const e=new Set;return Fe().flatMap(t=>mn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Uw(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(c=>c.kanji===n)||null,a=r.cards.find(c=>c.kanji===n&&String(c.jlpt||"").toUpperCase()==="N5")||r.cards.find(c=>c.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?ua({...a,lessonId:a.lessonId||o},s):a||(s?ua({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function pr(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:Q(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:Q(e.hiragana||""),romaji:e.romaji||"",translation:R(e)}]}function bt(e){return pr(e,e.examples)}function Gw(e,t){const n=t?.word||e.kanji,s=Q(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${R(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${R(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function Jw(){const e=Dt(),t=Z(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{D(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:Xn(),reviews:e.reduce((s,a)=>s+Number(D(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Co(e){const t=Z(),n=`n5:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":wt(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function zw(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Xn(){return Fe().filter(t=>Co(t.id)==="completed").length}function gr(e){const t=mn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(y=>[y.type,y.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(y=>[y.type,y])),o=y=>a[y]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:R(l),kanji:l.kanji,cardId:l.id,options:Ft({value:l.id,label:R(l)},t.slice(1).map(y=>({value:y.id,label:R(y)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:R(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ft({value:d.kanji,label:d.kanji},t.filter(y=>y.id!==d.id).map(y=>({value:y.kanji,label:y.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=bt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:Ft({value:m.reading,label:m.reading},t.flatMap(y=>bt(y).map(L=>({value:L.reading,label:L.reading}))).filter(y=>y.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ft({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(y=>({value:f({ru:y.ru,en:y.en}),label:f({ru:y.ru,en:y.en})})),1),...o("sentence")});const v=t[3]||t[0],w=bt(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ie(w)}В»?`:`Which word matches "${Ie(w)}"?`,answer:w.word,answerLabel:w.word,kanji:v.kanji,cardId:v.id,options:Ft({value:w.word,label:w.word},t.flatMap(y=>bt(y).map(L=>({value:L.word,label:L.word}))).filter(y=>y.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];return c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${R($)}`:`Type the kanji for: ${R($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")}),c.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(y=>({...y,level:"N5",lessonId:e.id}))}function Ft(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(l=>{const d=String(l.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(l))}),Dt().forEach(l=>{if(a.length>=4)return;const d={value:l.id,label:l.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const c=n%a.length;return[...a.slice(c),...a.slice(0,c)]}function nu(e){for(const t of Fe()){const n=gr(t).find(s=>s.id===e);if(n)return n}return null}function fn(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function mr(e,t,n){return fn(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function Hw(e,t,n){const s=V(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const a=e.exerciseSrs[String(n.id)]||null;if(a)return es(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=Is(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function qw(e,t,n,s){if(!e||!n)return;const a=V(t);a&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=es(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function fr(e,t,n,s,a,o={}){const c=V(e);if(!c||!t||!n)return;const l=new Date().toISOString(),d=fn(c,n.id);if(d&&r.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:a,checkedAt:l};d?(r.reviewExerciseResults||(r.reviewExerciseResults={}),r.reviewExerciseResults[n.id]=u,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const m=se(Hw(t,c,n)||Is(c,n.lessonId||"",n.id,n)),h=pe(m,a?"good":"again");if(qw(t,c,n,h),Qt(m,h,a?"good":"again"),ve(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=l,o.markCompleted?.(l),(o.markStudied||(()=>{}))();const w=Number(o.rewardXp||0),$=Number(o.rewardMoon||0);(w||$)&&G(w,$,o.rewardKey||`exercise:${n.id}`)}}else if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const w=n.answerLabel||n.answer;w&&o.markWordMistake?.(w)}d&&(r.pendingFocus="__scroll-top__"),C(),N(),_t("textbook exercise post-render effects",()=>{P(a?"answer_correct":"answer_wrong"),X()})}function su(e){const t=V(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function ru(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=fn(e.level,e.id,"reading"),c=se(Cn(e)||xn(e));if(r.reviewExerciseResults||(r.reviewExerciseResults={}),e.kind==="cloze"){c.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():c.selectedIndices||[],c.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(L=>({kanji:String(L?.kanji||""),reading:String(L?.reading||"")})).filter(L=>L.kanji):c.selectedTiles||[],c.selectedText=String(t||""),c.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():c.wrongIndexes||[],c.completed=!0,c.completedAt=a,c.correct=!!n,c.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},ts(e,c),r.reviewExerciseResults[e.id]=se(c),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1;const w=se(c),$=pe(w,n?"good":"again");$.selectedIndices=c.selectedIndices,$.selectedTiles=c.selectedTiles,$.selectedText=c.selectedText,$.wrongIndexes=c.wrongIndexes,$.completed=!0,$.completedAt=a,$.correct=!!n,$.answers=c.answers,ts(e,$),r.reviewExerciseResults[e.id]=se($),Qt(w,$,n?"good":"again"),ve();const y=su(e);n?G(y.xp,y.moon,`reading:${e.id}`):G(Math.max(1,Math.round(y.xp*.35)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),C(),N(),_t("reading cloze post-render effects",()=>{P(n?"answer_correct":"answer_wrong"),X()});return}const l=e.question||e.questions?.[0]||null,d=String(s.questionKey||l?.id||e.id);if(c.answers||(c.answers={}),c.answers[d])return;if(c.answers[d]={selected:String(t||""),correct:!!n,checkedAt:a},c.completed=!!d&&Object.keys(c.answers).length>=ll(),c.completedAt=c.completed?a:c.completedAt||null,c.correct=c.completed?Object.values(c.answers).every(w=>!!w?.correct):!1,c.selectedText=String(t||""),ts(e,c),r.reviewExerciseResults[e.id]=se(c),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1,N(),!c.completed){C(),_t("reading question post-render sound",()=>{P(n?"answer_correct":"answer_wrong")});return}const u=se(c),m=Object.values(c.answers).every(w=>!!w?.correct),h=pe(u,m?"good":"again");h.answers=c.answers,h.completed=!0,h.completedAt=a,h.correct=m,h.selectedText=String(t||""),h.wrongQuestions=Object.entries(c.answers).filter(([,w])=>!w?.correct).map(([w])=>w),ts(e,h),r.reviewExerciseResults[e.id]=se(h),Qt(u,h,m?"good":"again"),ve();const v=su(e);m?G(v.xp,v.moon,`reading:${e.id}`):G(Math.max(1,Math.round(v.xp*.25)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),C(),N(),_t("reading exercise post-render effects",()=>{P(n?"answer_correct":"answer_wrong"),X()})}function Ww(e){const t=Cs();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");ru(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function Xw(e){const t=Cs();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=se(Cn(n)||xn(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,yt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){J(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),ts(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=se(s),N(),s.selectedIndices.length>=a){au();return}C()}function Qw(){const e=Cs();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=se(Cn(t)||xn(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=se(n),ts(t,n),N(),C())}function Vw(){const e=Cs();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=se(Cn(t)||xn(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=se(n),ts(t,n),N(),C())}function au(){const e=Cs();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=yt(t),s=se(Cn(t)||xn(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){J(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),c=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),l=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);ru(t,o.map(d=>d.kanji).join(""),c,{selectedIndices:a,selectedTiles:o,wrongIndexes:l})}function Yw(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,C()}function Ao(e){return mr("N5",Z(),e)}function Zw(e){const t=nu(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;iu(t,n,s)}function eb(e){const t=nu(e);if(!t)return;const n=document.getElementById(du(t.id)),s=n?String(n.value||"").trim():"";iu(t,s,s===t.answer)}function iu(e,t,n){const s=Z();fr("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>ys(e.kanji,e.cardId),markDifficult:()=>hr(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function tb(e,t,n,s){var h;const a=V(e)||String(e||"").toUpperCase(),o=a==="N5"?wt(t):a==="N4"?hn(t):a==="N3"?wn(t):a==="N2"?kn(t):a==="N1"?Qn(t):null;if(!o)return;const c=Zc(a,o),l=c.find(v=>String(v.id)===String(n))||ne(n);if(!l)return;const d=Wn(a,o,c);if(d.session.answers?.[l.id])return;const u=new Date().toISOString();d.session.answers[l.id]={remembered:!!s,rating:s?"good":"again",answeredAt:u};const m=c.findIndex(v=>String(v.id)===String(l.id));d.session.currentIndex=m>=0?m+1:Math.min(Number(d.session.currentIndex||0)+1,c.length),d.session.phase=d.session.currentIndex>=c.length?"test":"study",d.session.updatedAt=u,d.session.phase==="test"&&((h=d.session).testOpenedAt||(h.testOpenedAt=u)),r.pendingFocus=null,Ht(),N(),Hc(`${a} lesson SRS post-render commit`,()=>{const v=s?"good":"again";a==="N5"?ou(l.id,v,"review"):a==="N4"?wu(l.id,v,"review"):a==="N3"?Tu(l.id,v,"review"):a==="N2"?Uu(l.id,v,"review"):a==="N1"&&Zu(l.id,v,"review")})}function ou(e,t,n="review"){const s=ne(e);if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=pe(l,o,c);r.progress.cards[s.id]=d,Qt(l,d,c),ve(),ys(s.kanji,s.id),Z().srsKanji[s.kanji]=new Date().toISOString(),a?(hr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`)):Oe(t)?(hr(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`)),Ht(),N(),_t("N5 SRS post-render effects",()=>{P(Oe(t)?"answer_wrong":"answer_correct"),X()})}function nb(e){const t=ne(e);if(!t)return;const n=Z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},ys(t.kanji,t.id),G(8,1,`n5_writing:${t.id}`)),X(),N(),C()}function sb(e){const t=wt(e);if(!t)return;const n=Z(),s=`n5:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){C();return}const a=mn(t);if(a.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof J=="function"&&J(v);return}const c=gr(t);if(!(c.length>0&&c.every(v=>Ao(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(v);return}ae.add(s),mn(t).forEach(v=>{ys(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const w=D(v.id);w.state==="New"&&(r.progress.cards[v.id]=pe(se(w),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Fe().find(v=>v.order===t.order+1)?.id||t.id;const d=bs(),u=d.sessions[n5SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=a.length,d.activeSessionKey=n5SessKey,d.lastUpdatedAt=v}Z(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),N({immediate:!0}),Xn()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const m=r.n5Meta?.rewards?.lessonCompleteXp||45,h=r.n5Meta?.rewards?.lessonCompleteMoon||6;G(m,h,`n5_lesson:${t.id}`),et({title:`${De().lessonComplete}: ${f(t.title)}`,message:De().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),P("lesson_complete"),X(),N(),C()}function ys(e,t=null){if(!e)return;const n=Z();ps(n,e)}function hr(e,t=null,n=!0){if(e&&(Z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=pe(se(s),"again"))}}function rb(e){const t=wt(e);t&&(Z().currentLessonId=t.id,gt("N5",t.id,"n5_lesson_open"),Mt("N5",t,"n5_lesson_open"),vr(t.id))}function ab(){vr("")}function ib(e=null){e&&(Z().activeReviewMode=e),vr("review")}function vr(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";tt(t),N(),oe(),Pt()}function ob(e="due"){const t=Date.now(),n=Z(),s=Dt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function lu(){const e=Dt(),t=Fe(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const c=e[o*7%e.length]||e[o%e.length],l=n[o%n.length],d=t.find(u=>u.kanji.includes(c.kanji))||t[0];a.push(lb(l,c,d,o))}return a.filter(Boolean)}function lb(e,t,n,s){const o=bt(t)[0],c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:R(t),options:Ft({value:t.id,label:R(t)},Dt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:R(l)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:Ft({value:o.reading,label:o.reading},Dt().flatMap(l=>bt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Ft({value:l,label:l},Fe().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ie(o),answer:l,answerLabel:l,options:Ft({value:l,label:l},Dt().flatMap(d=>bt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==l),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${R(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${R(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:R(t),answer:t.kanji,answerLabel:t.kanji,options:Ft({value:t.kanji,label:t.kanji},Dt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function cb(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Z().finalTest.answers[t]=n,N(),C())}function cu(e=!1){if(r.finalTestBusy)return;const t=Z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){C();return}r.finalTestBusy=!0;try{const n=lu(),s=r.n5FinalTest||{},a=De(),o=Bt(t,n),c=P$(s),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${xs("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,N();return}let u=0;const m=[],h=[];n.forEach(k=>{const B=String(t.answers?.[k.id]||"").trim();B===k.answer?(u+=1,ys(k.kanji,k.cardId)):(B||h.push(k),m.push({id:k.id,kanji:k.kanji,answer:k.answerLabel,selected:B}),hr(k.kanji,k.cardId))});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let L=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||120),B=Number(s?.rewards?.completeMoon||20);L+=k,b+=B,G(k,B,"n5_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||80),B=Number(s?.rewards?.passMoon||12);L+=k,b+=B,G(k,B,"n5_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=b,Z(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),N({immediate:!0}),r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),N()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,C()}}function db(){Z().finalTest=zi().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),C()}function du(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function ub(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=To();t.opened||(t.opened=!0,X(),N());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return jb();if(n==="review")return vb();if(n==="kanji")return bb();if(n==="grammar")return kb();if(n==="reading")return yb();if(n==="listening")return $b();const s=hn(n);return s?(W().currentLessonId=s.id,gt("N4",s.id,"n4_lesson_page"),Mt("N4",s,"n4_lesson_page"),mb(e,s)):pb(e)}function pb(e){const t=Lb(),n=ke(),s=rt(),a=Nb(),o=r.n4Meta||{},c=f(o.principle||{});return`
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
          ${Nn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>gb(l)).join("")}
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

        ${ks("N4")}
      </section>
    `}function gb(e){const t=fu(e.id),n=ke();let s=e.kanji.filter(a=>W().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(xb(t))}</small>
      </a>
    `}function mb(e,t){const n=ke(),s=wr(t),a=Ea(t),o=fu(t.id),c=Wn("N4",t,s);let l=o==="completed";const d=`n4:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(U=>Ro(U.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(U=>W().studiedKanji[U.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,L=t.kanji.filter(U=>W().difficultKanji[U]).join(" · "),b=rt().find(U=>U.order===t.order+1),k=vt("N4",t.id,"player"),B=vt("N4",t.id,"test");return`
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
              ${t.grammarFocus.map(U=>`<span class="pill">${i(U)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${dr("N4",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:U=>at(U),sentence:U=>fb(U,t)})}

        ${hb(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(Q(U.reading||""))}</span>
                <small>${i(f({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(B)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(U=>uu(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>W().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
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
    `}function fb(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Q(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(ke().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function hb(e){const t=ke(),n=(e.grammarFocus||[]).map(s=>Io(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(W().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function uu(e){const t=ke(),n=Ro(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&fn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g($u(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${pu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${pu(e,n)}
      </article>
    `}function pu(e,t){if(!t)return"";const n=ke(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function vb(e){const t=ke(),n=W().activeReviewMode||"due",s=Gb(n);return`
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
          ${s.map((a,o)=>wb(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function wb(e,t){const n=ke(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(_n(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(R(e))}</h3>
        <p>${i(at(e)[0]?.word||e.hiragana||"")} · ${i(at(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function bb(e){const t=ke(),n=qe();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/170</span><span class="pill">${i(D(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(R(s))}</h3>
              <p>${i(at(s)[0]?.word||"")} · ${i(at(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function kb(e){const t=ke();return`
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
          ${M(t.completedGrammar,`${Object.keys(W().completedGrammar||{}).length}/${r.n4Grammar.length}`,t.grammar,E(Object.keys(W().completedGrammar||{}).length,r.n4Grammar.length))}
          ${M(t.questions,r.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${r.n4Grammar.map(n=>{const s=W().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(Q(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function yb(e){const t=ke(),n=Fr("N4","n4_reading_page"),s=_s("N4");return(n||s)&&N(),`
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
          ${r.n4Reading.map(a=>gu(a,"reading")).join("")}
        </div>
      </section>
    `}function $b(e){const t=ke();return`
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
          ${r.n4Listening.map(n=>gu(n,"listening")).join("")}
        </div>
      </section>
    `}function gu(e,t){const n=ke(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],a=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
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
    `}function jb(e){const t=ke(),n=r.n4FinalTest||{},s=ku(),a=W().finalTest,o=Bt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
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
            ${Nt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Sb(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Nt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Sb(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(ke().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function ke(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function To(){r.progress.n4Course=Kc(Hi(),r.progress.n4Course||{});const e=rt();!hn(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n4Course.completedLessons[s.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function W(){return To()}function rt(){return r.n4Textbook?.items||[]}function hn(e){const t=String(e||"");return t&&rt().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function Nb(){return hn(W().currentLessonId)||rt().find(e=>!W().completedLessons[e.id])||rt()[0]||null}function wr(e){return(e?.kanji||[]).map(t=>mu(t)).filter(Boolean)}function qe(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>mu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function mu(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?pa(s,n):s||(n?pa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Io(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function at(e){return pr(e,e.examples)}function Lb(){const e=qe(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n4:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function fu(e){const t=W(),n=`n4:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":hn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function xb(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Ea(e){const t=wr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:R(l),kanji:l.kanji,cardId:l.id,options:We({value:l.id,label:R(l)},t.slice(1).map(b=>({value:b.id,label:R(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:R(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:We({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=at(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:We({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>at(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:We({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=at(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ie(w)}В»?`:`Which word matches "${Ie(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:We({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>at(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${R($)}`:`Type the kanji for: ${R($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Io(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:We({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:f({ru:L.ru,en:L.en}),answerLabel:f({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:We({value:f({ru:L.ru,en:L.en}),label:f({ru:L.ru,en:L.en})},n.filter(b=>b.jp!==L.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N4",lessonId:e.id}))}function We(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),qe().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function hu(e){for(const t of rt()){const n=Ea(t).find(s=>s.id===e);if(n)return n}return null}function Ro(e){return mr("N4",W(),e)}function Cb(e){const t=hu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;vu(t,s,a)}function Ab(e){const t=hu(e);if(!t)return;const n=document.getElementById($u(t.id)),s=n?String(n.value||"").trim():"";vu(t,s,s===t.answer)}function vu(e,t,n){const s=W();fr("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>$s(e.kanji,e.cardId),markDifficult:()=>br(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function wu(e,t,n="review"){const s=ne(e)||qe().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=pe(l,o,c);r.progress.cards[s.id]=d,Qt(l,d,c),ve(),$s(s.kanji,s.id),W().srsKanji[s.kanji]=new Date().toISOString(),a?(br(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`)):Oe(t)?(br(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`)),Ht(),N(),_t("N4 SRS post-render effects",()=>{P(Oe(t)?"answer_wrong":"answer_correct"),X()})}function Tb(e){const t=ne(e)||qe().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},$s(t.kanji,t.id),G(9,1,`n4_writing:${t.id}`)),X(),N(),C()}function Ib(e){const t=hn(e);if(!t)return;const n=W(),s=`n4:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){C();return}const a=wr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(w);return}const c=Ea(t);if(!(c.length>0&&c.every(w=>Ro(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(w);return}ae.add(s),wr(t).forEach(w=>{$s(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=D(w.id);$.state==="New"&&(r.progress.cards[w.id]=pe(se($),"good"))}),(t.grammarFocus||[]).map(w=>Io(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=rt().find(w=>w.order===t.order+1)?.id||t.id;const d=bs(),u=d.sessions[n4SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n4SessKey,d.lastUpdatedAt=w}W(),Object.keys(n.completedLessons||{}).length>=9&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"),r.progress.unlockedJlptLevels.includes("N3")||r.progress.unlockedJlptLevels.push("N3"));const h=r.n4Meta?.rewards?.lessonCompleteXp||65,v=r.n4Meta?.rewards?.lessonCompleteMoon||8;G(h,v,`n4_lesson:${t.id}`),et({title:`${ke().lessonComplete}: ${f(t.title)}`,message:ke().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),P("lesson_complete"),X(),N(),C()}function $s(e,t=null){if(!e)return;const n=W();ps(n,e)}function br(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=pe(se(s),"again"))}}function Rb(e,t=""){const n=r.n4Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=W();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,P("answer_correct")):a||(r.progress.totalWrong+=1,P("answer_wrong")),ve(),X(),N(),C()}function _b(e,t="0",n=""){bu("reading",e,t,n)}function Mb(e,t="0",n=""){bu("listening",e,t,n)}function bu(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(w=>w.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=W(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!v[o.id]){v[o.id]=new Date().toISOString();const w=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,$=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;G(w,$,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,P("answer_correct")}else d||(r.progress.totalWrong+=1,P("answer_wrong"));ve(),X(),N(),C()}function Pb(e){const t=hn(e);t&&(W().currentLessonId=t.id,gt("N4",t.id,"n4_lesson_open"),Mt("N4",t,"n4_lesson_open"),vn(t.id))}function Eb(){vn("")}function Kb(e=null){e&&(W().activeReviewMode=e),vn("review")}function Db(){vn("kanji")}function Fb(){vn("grammar")}function Ob(){vn("reading")}function Bb(){vn("listening")}function Ub(){vn("final-test")}function vn(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";tt(t),X(),N(),oe(),Pt()}function Gb(e="due"){const t=Date.now(),n=W(),s=qe();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function ku(){const e=qe();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=rt().find(d=>d.kanji.includes(o.kanji))||rt()[0];s.push(Jb(c,o,l,a))}return s.filter(Boolean)}function Jb(e,t,n,s){const o=at(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:R(t),options:We({value:t.id,label:R(t)},qe().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:R(l)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:We({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},qe().flatMap(l=>at(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:We({value:l,label:l},rt().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ie(o),answer:l,answerLabel:l,options:We({value:l,label:l},qe().flatMap(d=>at(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(l)return{id:`n4-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:We({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n4-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${R(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${R(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:R(t),answer:t.kanji,answerLabel:t.kanji,options:We({value:t.kanji,label:t.kanji},qe().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function zb(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,N(),C())}function yu(e=!1){if(r.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){C();return}r.finalTestBusy=!0;try{const n=ku(),s=r.n4FinalTest||{},a=ke(),o=Bt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${xs("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,N();return}let u=0;const m=[],h=[];n.forEach(k=>{const B=String(t.answers?.[k.id]||"").trim();if(B===k.answer){if(u+=1,k.kanji&&$s(k.kanji,k.cardId),k.grammarId){const U=W();U.completedGrammar[k.grammarId]=U.completedGrammar[k.grammarId]||d}}else B||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:B}),k.kanji&&br(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let L=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||180),B=Number(s?.rewards?.completeMoon||35);L+=k,b+=B,G(k,B,"n4_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||90),B=Number(s?.rewards?.passMoon||15);L+=k,b+=B,G(k,B,"n4_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=b,W(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),N()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,C()}}function Hb(){W().finalTest=Hi().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),C()}function $u(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function qb(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=Mo();t.opened||(t.opened=!0,X(),N());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return ik();if(n==="review")return ek();if(n==="kanji")return nk();if(n==="grammar")return sk();if(n==="reading")return rk();if(n==="listening")return ak();const s=wn(n);return s?(H().currentLessonId=s.id,gt("N3",s.id,"n3_lesson_page"),Mt("N3",s,"n3_lesson_page"),Qb(e,s)):Wb(e)}function Wb(e){const t=ck(),n=me(),s=it(),a=lk(),o=r.n3Meta||{},c=f(o.principle||{});return`
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
          ${Nn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>Xb(l)).join("")}
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

        ${ks("N3")}
      </section>
    `}function Xb(e){const t=xu(e.id),n=me();let s=e.kanji.filter(a=>H().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(dk(t))}</small>
      </a>
    `}function Qb(e,t){const n=me(),s=kr(t),a=Ka(t),o=xu(t.id),c=Wn("N3",t,s);let l=o==="completed";const d=`n3:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(F=>Eo(F.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(F=>H().studiedKanji[F.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,L=t.kanji.filter(F=>H().difficultKanji[F]).join(" · "),b=it().find(F=>F.order===t.order+1),k=ju(t),B=k?!!H().completedReading[k.id]:!1,U=vt("N3",t.id,"player"),as=vt("N3",t.id,"test");return`
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
              ${t.grammarFocus.map(F=>`<span class="pill">${i(F)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${dr("N3",t,s,n,{playerId:U,answerAction:"jlpt-lesson-answer",examples:F=>ot(F),sentence:F=>Yb(F,t)})}

        ${Zb(t)}

        ${Vb(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(F=>`
              <article>
                <strong>${i(F.jp)}</strong>
                <span>${i(Q(F.reading||""))}</span>
                <small>${i(f({ru:F.ru,en:F.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(as)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(F=>Su(F)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(F=>H().studiedKanji[F.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(B?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
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
    `}function ju(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function Vb(e){const t=me(),n=ju(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${_o(n,"reading")}
      </section>
    `:""}function Yb(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Q(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(me().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Zb(e){const t=me(),n=(e.grammarFocus||[]).map(s=>Po(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(H().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Su(e){const t=me(),n=Eo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&fn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Mu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Nu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Nu(e,n)}
      </article>
    `}function Nu(e,t){if(!t)return"";const n=me(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function ek(e){const t=me(),n=H().activeReviewMode||"due",s=Lk(n);return`
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
          ${s.map((a,o)=>tk(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function tk(e,t){const n=me(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(_n(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(R(e))}</h3>
        <p>${i(ot(e)[0]?.word||e.hiragana||"")} · ${i(ot(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function nk(e){const t=me(),n=Xe();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/370</span><span class="pill">${i(D(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(R(s))}</h3>
              <p>${i(ot(s)[0]?.word||"")} · ${i(ot(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function sk(e){const t=me();return`
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
          ${M(t.completedGrammar,`${Object.keys(H().completedGrammar||{}).length}/${r.n3Grammar.length}`,t.grammar,E(Object.keys(H().completedGrammar||{}).length,r.n3Grammar.length))}
          ${M(t.questions,r.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${r.n3Grammar.map(n=>{const s=H().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(Q(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function rk(e){const t=me(),n=Fr("N3","n3_reading_page"),s=_s("N3");return(n||s)&&N(),`
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
          ${r.n3Reading.map(a=>_o(a,"reading")).join("")}
        </div>
      </section>
    `}function ak(e){const t=me();return`
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
          ${r.n3Listening.map(n=>_o(n,"listening")).join("")}
        </div>
      </section>
    `}function _o(e,t){const n=me(),s=t==="reading"?H().completedReading[e.id]:H().completedListening[e.id],a=t==="reading"?H().readingAnswers:H().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
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
    `}function ik(e){const t=me(),n=r.n3FinalTest||{},s=Ru(),a=H().finalTest,o=Bt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
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
            ${Nt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>ok(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Nt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function ok(e,t){const n=H().finalTest.answers?.[e.id],s=!!H().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(me().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function me(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Mo(){r.progress.n3Course=Dc(qi(),r.progress.n3Course||{});const e=it();!wn(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n3Course.completedLessons[s.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function H(){return Mo()}function it(){return r.n3Textbook?.items||[]}function wn(e){const t=String(e||"");return t&&it().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function lk(){return wn(H().currentLessonId)||it().find(e=>!H().completedLessons[e.id])||it()[0]||null}function kr(e){return(e?.kanji||[]).map(t=>Lu(t)).filter(Boolean)}function Xe(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>Lu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Lu(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ga(s,n):s||(n?ga({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function Po(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function ot(e){return pr(e,e.examples)}function ck(){const e=Xe(),t=H(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n3:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function xu(e){const t=H(),n=`n3:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":wn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function dk(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Ka(e){const t=kr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:R(l),kanji:l.kanji,cardId:l.id,options:Qe({value:l.id,label:R(l)},t.slice(1).map(b=>({value:b.id,label:R(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:R(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Qe({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=ot(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Qe({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>ot(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Qe({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=ot(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ie(w)}В»?`:`Which word matches "${Ie(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Qe({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>ot(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${R($)}`:`Type the kanji for: ${R($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Po(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:Qe({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:f({ru:L.ru,en:L.en}),answerLabel:f({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Qe({value:f({ru:L.ru,en:L.en}),label:f({ru:L.ru,en:L.en})},n.filter(b=>b.jp!==L.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N3",lessonId:e.id}))}function Qe(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),Xe().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Cu(e){for(const t of it()){const n=Ka(t).find(s=>s.id===e);if(n)return n}return null}function Eo(e){return mr("N3",H(),e)}function uk(e){const t=Cu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Au(t,s,a)}function pk(e){const t=Cu(e);if(!t)return;const n=document.getElementById(Mu(t.id)),s=n?String(n.value||"").trim():"";Au(t,s,s===t.answer)}function Au(e,t,n){const s=H();fr("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>js(e.kanji,e.cardId),markDifficult:()=>yr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Tu(e,t,n="review"){const s=ne(e)||Xe().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=pe(l,o,c);r.progress.cards[s.id]=d,Qt(l,d,c),ve(),js(s.kanji,s.id),H().srsKanji[s.kanji]=new Date().toISOString(),a?(yr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`)):Oe(t)?(yr(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`)),Ht(),N(),_t("N3 SRS post-render effects",()=>{P(Oe(t)?"answer_wrong":"answer_correct"),X()})}function gk(e){const t=ne(e)||Xe().find(s=>String(s.id)===String(e));if(!t)return;const n=H();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},js(t.kanji,t.id),G(9,1,`n3_writing:${t.id}`)),X(),N(),C()}function mk(e){const t=wn(e);if(!t)return;const n=H(),s=`n3:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){C();return}const a=kr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(w);return}const c=Ka(t);if(!(c.length>0&&c.every(w=>Eo(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(w);return}ae.add(s),kr(t).forEach(w=>{js(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=D(w.id);$.state==="New"&&(r.progress.cards[w.id]=pe(se($),"good"))}),(t.grammarFocus||[]).map(w=>Po(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=it().find(w=>w.order===t.order+1)?.id||t.id;const d=bs(),u=d.sessions[n3SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n3SessKey,d.lastUpdatedAt=w}H(),Object.keys(n.completedLessons||{}).length>=37&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N3","N2"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n3Meta?.rewards?.lessonCompleteXp||75,v=r.n3Meta?.rewards?.lessonCompleteMoon||9;G(h,v,`n3_lesson:${t.id}`),et({title:`${me().lessonComplete}: ${f(t.title)}`,message:me().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),P("lesson_complete"),X(),N(),C()}function js(e,t=null){if(!e)return;const n=H();ps(n,e)}function yr(e,t=null,n=!0){if(e&&(H().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=pe(se(s),"again"))}}function fk(e,t=""){const n=r.n3Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=H();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,P("answer_correct")):a||(r.progress.totalWrong+=1,P("answer_wrong")),ve(),X(),N(),C()}function hk(e,t="0",n=""){Iu("reading",e,t,n)}function vk(e,t="0",n=""){Iu("listening",e,t,n)}function Iu(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(y=>y.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=H(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,P("answer_correct")):(r.progress.totalWrong+=1,P("answer_wrong")),$&&!w){v[o.id]=new Date().toISOString();const y=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,L=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;G(y,L,`n3_${e}:${o.id}`)}ve(),X(),N(),C()}function wk(e){const t=wn(e);t&&(H().currentLessonId=t.id,gt("N3",t.id,"n3_lesson_open"),Mt("N3",t,"n3_lesson_open"),bn(t.id))}function bk(){bn("")}function kk(e=null){e&&(H().activeReviewMode=e),bn("review")}function yk(){bn("kanji")}function $k(){bn("grammar")}function jk(){bn("reading")}function Sk(){bn("listening")}function Nk(){bn("final-test")}function bn(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,H().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";tt(t),X(),N(),oe(),Pt()}function Lk(e="due"){const t=Date.now(),n=H(),s=Xe();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Ru(){const e=Xe();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=it().find(d=>d.kanji.includes(o.kanji))||it()[0];s.push(xk(c,o,l,a))}return s.filter(Boolean)}function xk(e,t,n,s){const o=ot(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:R(t),options:Qe({value:t.id,label:R(t)},Xe().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:R(l)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Qe({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Xe().flatMap(l=>ot(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Qe({value:l,label:l},it().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ie(o),answer:l,answerLabel:l,options:Qe({value:l,label:l},Xe().flatMap(d=>ot(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(l)return{id:`n3-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:Qe({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n3-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${R(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${R(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:R(t),answer:t.kanji,answerLabel:t.kanji,options:Qe({value:t.kanji,label:t.kanji},Xe().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Ck(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(H().finalTest.answers[t]=n,N(),C())}function _u(e=!1){if(r.finalTestBusy)return;const t=H().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){C();return}r.finalTestBusy=!0;try{const n=Ru(),s=r.n3FinalTest||{},a=me(),o=Bt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${xs("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,N();return}let u=0;const m=[],h=[];n.forEach(k=>{const B=String(t.answers?.[k.id]||"").trim();if(B===k.answer){if(u+=1,k.kanji&&js(k.kanji,k.cardId),k.grammarId){const U=H();U.completedGrammar[k.grammarId]=U.completedGrammar[k.grammarId]||d}}else B||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:B}),k.kanji&&yr(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let L=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||220),B=Number(s?.rewards?.completeMoon||40);L+=k,b+=B,G(k,B,"n3_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),B=Number(s?.rewards?.passMoon||18);L+=k,b+=B,G(k,B,"n3_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=b,H(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),N()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,C()}}function Ak(){H().finalTest=qi().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),C()}function Mu(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Tk(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=Do();t.opened||(t.opened=!0,X(),N());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Gk();if(n==="review")return Kk();if(n==="kanji")return Fk();if(n==="grammar")return Ok();if(n==="reading")return Bk();if(n==="listening")return Uk();const s=kn(n);return s?(q().currentLessonId=s.id,gt("N2",s.id,"n2_lesson_page"),Mt("N2",s,"n2_lesson_page"),_k(e,s)):Ik(e)}function Ik(e){const t=Hk(),n=fe(),s=lt(),a=zk(),o=r.n2Meta||{},c=f(o.principle||{});return`
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
          ${Nn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>Rk(l)).join("")}
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

        ${ks("N2")}
      </section>
    `}function Rk(e){const t=Fu(e.id),n=fe();let s=e.kanji.filter(a=>q().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(qk(t))}</small>
      </a>
    `}function _k(e,t){const n=fe(),s=$r(t),a=Da(t),o=Fu(t.id),c=Wn("N2",t,s);let l=o==="completed";const d=`n2:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(F=>Oo(F.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(F=>q().studiedKanji[F.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,L=t.kanji.filter(F=>q().difficultKanji[F]).join(" · "),b=lt().find(F=>F.order===t.order+1),k=Pu(t),B=k?!!q().completedReading[k.id]:!1,U=vt("N2",t.id,"player"),as=vt("N2",t.id,"test");return`
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
              ${t.grammarFocus.map(F=>`<span class="pill">${i(F)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${dr("N2",t,s,n,{playerId:U,answerAction:"jlpt-lesson-answer",examples:F=>ct(F),sentence:F=>Pk(F,t)})}

        ${Ek(t)}

        ${Mk(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(F=>`
              <article>
                <strong>${i(F.jp)}</strong>
                <span>${i(Q(F.reading||""))}</span>
                <small>${i(f({ru:F.ru,en:F.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(as)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(F=>Eu(F)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(F=>q().studiedKanji[F.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(B?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
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
    `}function Pu(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function Mk(e){const t=fe(),n=Pu(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Ko(n,"reading")}
      </section>
    `:""}function Pk(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Q(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(fe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Ek(e){const t=fe(),n=(e.grammarFocus||[]).map(s=>Fo(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(q().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Eu(e){const t=fe(),n=Oo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&fn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Hu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Ku(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Ku(e,n)}
      </article>
    `}function Ku(e,t){if(!t)return"";const n=fe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Kk(e){const t=fe(),n=q().activeReviewMode||"due",s=cy(n);return`
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
          ${s.map((a,o)=>Dk(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Dk(e,t){const n=fe(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(_n(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(R(e))}</h3>
        <p>${i(ct(e)[0]?.word||e.hiragana||"")} · ${i(ct(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Fk(e){const t=fe(),n=Ve();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/380</span><span class="pill">${i(D(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(R(s))}</h3>
              <p>${i(ct(s)[0]?.word||"")} · ${i(ct(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Ok(e){const t=fe();return`
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
          ${M(t.completedGrammar,`${Object.keys(q().completedGrammar||{}).length}/${r.n2Grammar.length}`,t.grammar,E(Object.keys(q().completedGrammar||{}).length,r.n2Grammar.length))}
          ${M(t.questions,r.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${r.n2Grammar.map(n=>{const s=q().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(Q(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function Bk(e){const t=fe(),n=Fr("N2","n2_reading_page"),s=_s("N2");return(n||s)&&N(),`
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
          ${r.n2Reading.map(a=>Ko(a,"reading")).join("")}
        </div>
      </section>
    `}function Uk(e){const t=fe();return`
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
          ${r.n2Listening.map(n=>Ko(n,"listening")).join("")}
        </div>
      </section>
    `}function Ko(e,t){const n=fe(),s=t==="reading"?q().completedReading[e.id]:q().completedListening[e.id],a=t==="reading"?q().readingAnswers:q().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
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
    `}function Gk(e){const t=fe(),n=r.n2FinalTest||{},s=Ju(),a=q().finalTest,o=Bt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
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
            ${Nt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Jk(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Nt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Jk(e,t){const n=q().finalTest.answers?.[e.id],s=!!q().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(fe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function fe(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Do(){r.progress.n2Course=Fc(Wi(),r.progress.n2Course||{});const e=lt();!kn(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n2Course.completedLessons[s.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function q(){return Do()}function lt(){return r.n2Textbook?.items||[]}function kn(e){const t=String(e||"");return t&&lt().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function zk(){return kn(q().currentLessonId)||lt().find(e=>!q().completedLessons[e.id])||lt()[0]||null}function $r(e){return(e?.kanji||[]).map(t=>Du(t)).filter(Boolean)}function Ve(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>Du(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Du(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ma(s,n):s||(n?ma({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Fo(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function ct(e){return pr(e,e.examples)}function Hk(){const e=Ve(),t=q(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n2:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Fu(e){const t=q(),n=`n2:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":kn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function qk(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Da(e){const t=$r(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:R(l),kanji:l.kanji,cardId:l.id,options:Ye({value:l.id,label:R(l)},t.slice(1).map(b=>({value:b.id,label:R(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:R(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ye({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=ct(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Ye({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>ct(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ye({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=ct(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ie(w)}В»?`:`Which word matches "${Ie(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Ye({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>ct(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${R($)}`:`Type the kanji for: ${R($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Fo(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:Ye({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:f({ru:L.ru,en:L.en}),answerLabel:f({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Ye({value:f({ru:L.ru,en:L.en}),label:f({ru:L.ru,en:L.en})},n.filter(b=>b.jp!==L.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N2",lessonId:e.id}))}function Ye(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),Ve().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Ou(e){for(const t of lt()){const n=Da(t).find(s=>s.id===e);if(n)return n}return null}function Oo(e){return mr("N2",q(),e)}function Wk(e){const t=Ou(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Bu(t,s,a)}function Xk(e){const t=Ou(e);if(!t)return;const n=document.getElementById(Hu(t.id)),s=n?String(n.value||"").trim():"";Bu(t,s,s===t.answer)}function Bu(e,t,n){const s=q();fr("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>Ss(e.kanji,e.cardId),markDifficult:()=>jr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Uu(e,t,n="review"){const s=ne(e)||Ve().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=pe(l,o,c);r.progress.cards[s.id]=d,Qt(l,d,c),ve(),Ss(s.kanji,s.id),q().srsKanji[s.kanji]=new Date().toISOString(),a?(jr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`)):Oe(t)?(jr(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`)),Ht(),N(),_t("N2 SRS post-render effects",()=>{P(Oe(t)?"answer_wrong":"answer_correct"),X()})}function Qk(e){const t=ne(e)||Ve().find(s=>String(s.id)===String(e));if(!t)return;const n=q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ss(t.kanji,t.id),G(9,1,`n2_writing:${t.id}`)),X(),N(),C()}function Vk(e){const t=kn(e);if(!t)return;const n=q(),s=`n2:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){C();return}const a=$r(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(w);return}const c=Da(t);if(!(c.length>0&&c.every(w=>Oo(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(w);return}ae.add(s),$r(t).forEach(w=>{Ss(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=D(w.id);$.state==="New"&&(r.progress.cards[w.id]=pe(se($),"good"))}),(t.grammarFocus||[]).map(w=>Fo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=lt().find(w=>w.order===t.order+1)?.id||t.id;const d=bs(),u=d.sessions[n2SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n2SessKey,d.lastUpdatedAt=w}q(),Object.keys(n.completedLessons||{}).length>=38&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N2","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n2Meta?.rewards?.lessonCompleteXp||85,v=r.n2Meta?.rewards?.lessonCompleteMoon||10;G(h,v,`n2_lesson:${t.id}`),et({title:`${fe().lessonComplete}: ${f(t.title)}`,message:fe().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),P("lesson_complete"),X(),N(),C()}function Ss(e,t=null){if(!e)return;const n=q();ps(n,e)}function jr(e,t=null,n=!0){if(e&&(q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=pe(se(s),"again"))}}function Yk(e,t=""){const n=r.n2Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=q();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,P("answer_correct")):a||(r.progress.totalWrong+=1,P("answer_wrong")),ve(),X(),N(),C()}function Zk(e,t="0",n=""){Gu("reading",e,t,n)}function ey(e,t="0",n=""){Gu("listening",e,t,n)}function Gu(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(y=>y.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=q(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,P("answer_correct")):(r.progress.totalWrong+=1,P("answer_wrong")),$&&!w){v[o.id]=new Date().toISOString();const y=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,L=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;G(y,L,`n2_${e}:${o.id}`)}ve(),X(),N(),C()}function ty(e){const t=kn(e);t&&(q().currentLessonId=t.id,gt("N2",t.id,"n2_lesson_open"),Mt("N2",t,"n2_lesson_open"),yn(t.id))}function ny(){yn("")}function sy(e=null){e&&(q().activeReviewMode=e),yn("review")}function ry(){yn("kanji")}function ay(){yn("grammar")}function iy(){yn("reading")}function oy(){yn("listening")}function ly(){yn("final-test")}function yn(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,q().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";tt(t),X(),N(),oe(),Pt()}function cy(e="due"){const t=Date.now(),n=q(),s=Ve();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Ju(){const e=Ve();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=lt().find(d=>d.kanji.includes(o.kanji))||lt()[0];s.push(dy(c,o,l,a))}return s.filter(Boolean)}function dy(e,t,n,s){const o=ct(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:R(t),options:Ye({value:t.id,label:R(t)},Ve().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:R(l)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Ye({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ve().flatMap(l=>ct(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Ye({value:l,label:l},lt().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ie(o),answer:l,answerLabel:l,options:Ye({value:l,label:l},Ve().flatMap(d=>ct(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(l)return{id:`n2-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:Ye({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n2-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${R(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${R(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:R(t),answer:t.kanji,answerLabel:t.kanji,options:Ye({value:t.kanji,label:t.kanji},Ve().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function uy(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(q().finalTest.answers[t]=n,N(),C())}function zu(e=!1){if(r.finalTestBusy)return;const t=q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){C();return}r.finalTestBusy=!0;try{const n=Ju(),s=r.n2FinalTest||{},a=fe(),o=Bt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${xs("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,N();return}let u=0;const m=[],h=[];n.forEach(k=>{const B=String(t.answers?.[k.id]||"").trim();if(B===k.answer){if(u+=1,k.kanji&&Ss(k.kanji,k.cardId),k.grammarId){const U=q();U.completedGrammar[k.grammarId]=U.completedGrammar[k.grammarId]||d}}else B||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:B}),k.kanji&&jr(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let L=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||220),B=Number(s?.rewards?.completeMoon||40);L+=k,b+=B,G(k,B,"n2_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),B=Number(s?.rewards?.passMoon||18);L+=k,b+=B,G(k,B,"n2_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=b,q(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),N()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,C()}}function py(){q().finalTest=Wi().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),C()}function Hu(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function gy(e){r.activeTextbookLevel="N1",r.activeJlptLesson="N1";const t=Fa();t.opened||(t.opened=!0,X(),N());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return xy();if(n==="review")return yy();if(n==="kanji")return jy();if(n==="grammar")return Sy();if(n==="reading")return Ny();if(n==="listening")return Ly();const s=Qn(n);return s?(ee().currentLessonId=s.id,gt("N1",s.id,"n1_lesson_page"),Mt("N1",s,"n1_lesson_page"),hy(e,s)):my(e)}function my(e){const t=Ty(),n=he(),s=dt(),a=Ay(),o=r.n1Meta||{},c=f(o.principle||{});return`
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
          ${Nn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>fy(l)).join("")}
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

        ${ks("N1")}
      </section>
    `}function fy(e){const t=Qu(e.id),n=he();let s=e.kanji.filter(a=>ee().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Iy(t))}</small>
      </a>
    `}function hy(e,t){const n=he(),s=Oa(t),a=Ba(t),o=Qu(t.id),c=Wn("N1",t,s);let l=o==="completed";const d=`n1:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(F=>Go(F.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(F=>ee().studiedKanji[F.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,L=t.kanji.filter(F=>ee().difficultKanji[F]).join(" · "),b=dt().find(F=>F.order===t.order+1),k=qu(t),B=k?!!ee().completedReading[k.id]:!1,U=vt("N1",t.id,"player"),as=vt("N1",t.id,"test");return`
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
              ${t.grammarFocus.map(F=>`<span class="pill">${i(F)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${dr("N1",t,s,n,{playerId:U,answerAction:"jlpt-lesson-answer",examples:F=>ut(F),sentence:F=>wy(F,t)})}

        ${by(t)}

        ${vy(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(F=>`
              <article>
                <strong>${i(F.jp)}</strong>
                <span>${i(Q(F.reading||""))}</span>
                <small>${i(f({ru:F.ru,en:F.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(as)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(F=>ky(F)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(F=>ee().studiedKanji[F.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(B?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
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
    `}function qu(e){return e?.miniReadingId&&r.n1Reading.find(t=>t.id===e.miniReadingId)||null}function vy(e){const t=he(),n=qu(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Bo(n,"reading")}
      </section>
    `:""}function wy(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Q(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(he().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function by(e){const t=he(),n=(e.grammarFocus||[]).map(s=>Uo(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(ee().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function ky(e){const t=he(),n=Go(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&fn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(sp(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Wu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Wu(e,n)}
      </article>
    `}function Wu(e,t){if(!t)return"";const n=he(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function yy(e){const t=he(),n=ee().activeReviewMode||"due",s=qy(n);return`
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
          ${s.map((a,o)=>$y(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function $y(e,t){const n=he(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(_n(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(R(e))}</h3>
        <p>${i(ut(e)[0]?.word||e.hiragana||"")} · ${i(ut(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function jy(e){const t=he(),n=kt(),s=n.slice(0,160);return`
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
              <div class="n5-kanji-topline"><span class="pill">${o+1}/${n.length}</span><span class="pill">${i(D(a.id).state)}</span></div>
              <div class="n5-big-kanji">${i(a.kanji)}</div>
              <h3>${i(R(a))}</h3>
              <p>${i(ut(a)[0]?.word||"")} · ${i(ut(a)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${g(a.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Sy(e){const t=he();return`
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
          ${M(t.completedGrammar,`${Object.keys(ee().completedGrammar||{}).length}/${r.n1Grammar.length}`,t.grammar,E(Object.keys(ee().completedGrammar||{}).length,r.n1Grammar.length))}
          ${M(t.questions,r.n1Grammar.length,t.grammar,100)}
        </div>
        <div class="n1-section-grid">
          ${r.n1Grammar.map(n=>{const s=ee().grammarResults?.[n.id];return`
              <article class="n1-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(Q(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function Ny(e){const t=he(),n=Fr("N1","n1_reading_page"),s=_s("N1");return(n||s)&&N(),`
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
          ${r.n1Reading.map(a=>Bo(a,"reading")).join("")}
        </div>
      </section>
    `}function Ly(e){const t=he();return`
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
          ${r.n1Listening.map(n=>Bo(n,"listening")).join("")}
        </div>
      </section>
    `}function Bo(e,t){const n=he(),s=t==="reading"?ee().completedReading[e.id]:ee().completedListening[e.id],a=t==="reading"?ee().readingAnswers:ee().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
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
    `}function xy(e){const t=he(),n=r.n1FinalTest||{},s=tp(),a=ee().finalTest,o=Bt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
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
            ${Nt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Cy(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Nt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Cy(e,t){const n=ee().finalTest.answers?.[e.id],s=!!ee().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(he().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function he(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function Fa(){r.progress.n1Course=Oc(Xi(),r.progress.n1Course||{});const e=dt();!Qn(r.progress.n1Course.currentLessonId)&&e[0]&&(r.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n1Course.completedLessons[s.id]);return!r.progress.n1Course.currentLessonId&&n&&(r.progress.n1Course.currentLessonId=n.id),r.progress.n1Course}function ee(){return Fa()}function dt(){return r.n1Textbook?.items||[]}function Qn(e){const t=String(e||"");return t&&dt().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function Ay(){return Qn(ee().currentLessonId)||dt().find(e=>!ee().completedLessons[e.id])||dt()[0]||null}function Oa(e){return(e?.kanji||[]).map(t=>Xu(t)).filter(Boolean)}function kt(){const e=new Set;return(r.n1KanjiCatalog||[]).map(t=>Xu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Xu(e){const t=String(e||""),n=r.n1KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N1")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?fa(s,n):s||(n?fa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[]},n):null)}function Uo(e){const t=String(e||"");return r.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function ut(e){return pr(e,e.examples)}function Ty(){const e=kt(),t=ee(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n1:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Qu(e){const t=ee(),n=`n1:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":Qn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Iy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Ba(e){const t=Oa(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n1Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n1Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n1Meta?.rewards?.exerciseXp||11,rewardMoon:r.n1Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:R(l),kanji:l.kanji,cardId:l.id,options:Ze({value:l.id,label:R(l)},t.slice(1).map(b=>({value:b.id,label:R(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:R(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ze({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=ut(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Ze({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>ut(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ze({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=ut(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ie(w)}В»?`:`Which word matches "${Ie(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Ze({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>ut(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${R($)}`:`Type the kanji for: ${R($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Uo(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:Ze({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:f({ru:L.ru,en:L.en}),answerLabel:f({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Ze({value:f({ru:L.ru,en:L.en}),label:f({ru:L.ru,en:L.en})},n.filter(b=>b.jp!==L.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n1Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N1",lessonId:e.id}))}function Ze(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),kt().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Vu(e){for(const t of dt()){const n=Ba(t).find(s=>s.id===e);if(n)return n}return null}function Go(e){return mr("N1",ee(),e)}function Ry(e){const t=Vu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Yu(t,s,a)}function _y(e){const t=Vu(e);if(!t)return;const n=document.getElementById(sp(t.id)),s=n?String(n.value||"").trim():"";Yu(t,s,s===t.answer)}function Yu(e,t,n){const s=ee();fr("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,markStudied:()=>Sr(e.kanji,e.cardId),markDifficult:()=>Ua(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Zu(e,t,n="review"){const s=ne(e)||kt().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=pe(l,o,c);r.progress.cards[s.id]=d,Qt(l,d,c),ve(),Sr(s.kanji,s.id),ee().srsKanji[s.kanji]=new Date().toISOString(),a?(Ua(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${s.id}`)):Oe(t)?(Ua(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n1Meta?.rewards?.knowXp||9:r.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${s.id}`)),Ht(),N(),_t("N1 SRS post-render effects",()=>{P(Oe(t)?"answer_wrong":"answer_correct"),X()})}function My(e){const t=ne(e)||kt().find(s=>String(s.id)===String(e));if(!t)return;const n=ee();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Sr(t.kanji,t.id),G(9,1,`n1_writing:${t.id}`)),X(),N(),C()}function Py(e){const t=Qn(e);if(!t)return;const n=ee(),s=`n1:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){C();return}const a=Oa(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(w);return}const c=Ba(t);if(!(c.length>0&&c.every(w=>Go(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(w);return}ae.add(s),Oa(t).forEach(w=>{Sr(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=D(w.id);$.state==="New"&&(r.progress.cards[w.id]=pe(se($),"good"))}),(t.grammarFocus||[]).map(w=>Uo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=dt().find(w=>w.order===t.order+1)?.id||t.id;const d=bs(),u=d.sessions[n1SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n1SessKey,d.lastUpdatedAt=w}ee(),Object.keys(n.completedLessons||{}).length>=53&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N1","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n1Meta?.rewards?.lessonCompleteXp||85,v=r.n1Meta?.rewards?.lessonCompleteMoon||10;G(h,v,`n1_lesson:${t.id}`),et({title:`${he().lessonComplete}: ${f(t.title)}`,message:he().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),P("lesson_complete"),X(),N(),C()}function Sr(e,t=null){if(!e)return;const n=ee();ps(n,e)}function Ua(e,t=null,n=!0){if(e&&(ee().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=pe(se(s),"again"))}}function Ey(e,t=""){const n=r.n1Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=ee();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n1Meta?.rewards?.grammarXp||12,r.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),r.progress.totalCorrect+=1,P("answer_correct")):a||(r.progress.totalWrong+=1,P("answer_wrong")),ve(),X(),N(),C()}function Ky(e,t="0",n=""){ep("reading",e,t,n)}function Dy(e,t="0",n=""){ep("listening",e,t,n)}function ep(e,t,n="0",s=""){const o=(e==="reading"?r.n1Reading:r.n1Listening).find(y=>y.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=ee(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,P("answer_correct")):(r.progress.totalWrong+=1,P("answer_wrong")),$&&!w){v[o.id]=new Date().toISOString();const y=e==="reading"?r.n1Meta?.rewards?.readingXp||55:r.n1Meta?.rewards?.listeningXp||50,L=e==="reading"?r.n1Meta?.rewards?.readingMoon||4:r.n1Meta?.rewards?.listeningMoon||4;G(y,L,`n1_${e}:${o.id}`)}ve(),X(),N(),C()}function Fy(e){const t=Qn(e);t&&(ee().currentLessonId=t.id,gt("N1",t.id,"n1_lesson_open"),Mt("N1",t,"n1_lesson_open"),$n(t.id))}function Oy(){$n("")}function By(e=null){e&&(ee().activeReviewMode=e),$n("review")}function Uy(){$n("kanji")}function Gy(){$n("grammar")}function Jy(){$n("reading")}function zy(){$n("listening")}function Hy(){$n("final-test")}function $n(e){r.route="textbooks",r.activeTextbookLevel="N1",r.activeTextbookSubroute=e||null,ee().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";tt(t),X(),N(),oe(),Pt()}function qy(e="due"){const t=Date.now(),n=ee(),s=kt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function tp(){const e=kt();if(!e.length)return[];const t=r.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=dt().find(d=>d.kanji.includes(o.kanji))||dt()[0];s.push(Wy(c,o,l,a))}return s.filter(Boolean)}function Wy(e,t,n,s){const o=ut(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:R(t),options:Ze({value:t.id,label:R(t)},kt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:R(l)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Ze({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},kt().flatMap(l=>ut(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Ze({value:l,label:l},dt().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ie(o),answer:l,answerLabel:l,options:Ze({value:l,label:l},kt().flatMap(d=>ut(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n1Grammar[s%Math.max(r.n1Grammar.length,1)];if(l)return{id:`n1-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:Ze({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n1Reading[s%Math.max(r.n1Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n1-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${R(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${R(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:R(t),answer:t.kanji,answerLabel:t.kanji,options:Ze({value:t.kanji,label:t.kanji},kt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Xy(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ee().finalTest.answers[t]=n,N(),C())}function np(e=!1){if(r.finalTestBusy)return;const t=ee().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){C();return}r.finalTestBusy=!0;try{const n=tp(),s=r.n1FinalTest||{},a=he(),o=Bt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${xs("n1",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,N();return}let u=0;const m=[],h=[];n.forEach(k=>{const B=String(t.answers?.[k.id]||"").trim();if(B===k.answer){if(u+=1,k.kanji&&Sr(k.kanji,k.cardId),k.grammarId){const U=ee();U.completedGrammar[k.grammarId]=U.completedGrammar[k.grammarId]||d}}else B||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:B}),k.kanji&&Ua(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let L=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||220),B=Number(s?.rewards?.completeMoon||40);L+=k,b+=B,G(k,B,"n1_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),B=Number(s?.rewards?.passMoon||18);L+=k,b+=B,G(k,B,"n1_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=b,ee(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N1",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),N()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,C()}}function Qy(){ee().finalTest=Xi().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),C()}function sp(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function rp(e){const t=Ps(e.jlpt);if(!t)return"";const n={...Ll(),...Nl()};return`
      <div class="jlpt-practice-grid">
        ${Vy(t,n)}
        ${Yy(t,n)}
        ${Zy(t,n)}
        ${t$(t,n)}
      </div>
    `}function Vy(e,t){return e.apps.length?`
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
    `:""}function Yy(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${ap(t.hiragana,n)}
          ${ap(t.katakana,s)}
        </div>
      </article>
    `}function ap(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(f(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function Zy(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${e$(n)}</strong>
                <small>${i(n.romaji)} · ${i(f(n.meaning))}</small>
                <p>${i(f(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function e$(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function t$(e,t){const n=Es(e);if(!n)return"";const s=ss(),a=s.selected[n.id]||[],o=!!s.checked[n.id],c=s.results[n.id]||null,l=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&c?.correct,u=o&&c?c.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(f(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${n$(n,l,u)}</div>
        <p class="label">${i(Q(n.reading))}</p>
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
    `}function n$(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,c)=>{if(o===c.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((v,w)=>n.includes(s+w));s+=d;const h=u.length?u.map(v=>`<span>${i(v.kanji)}</span>`).join(""):`<span>${i("в–Ў".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${h}</span>`}).join("")}function s$(){const e=xr(kS()),t=B$(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?ne(t.card?.id||t.cardId||t.progress?.cardId||""):null;F$(t);const a=t?t.kind==="card"?s?hp(s):As():W$(t):As();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Сейчас":"Due now",Be(),"due")}
              ${M(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${M(p()==="ru"?"Позже":"Learning later",yS(),"learning")}
              ${M(p()==="ru"?"Всего SRS":"Total SRS",$S(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${Ks("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${Xo(s,n)}
        </div>
        ${r$()}
      </section>
    `}function r$(){try{return a$()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),r.progress&&(r.progress.sentencePractice=Qi(us().sentencePractice,{})),""}}function a$(){const e=Ot(),t=Ja(e),n={...Ns(),...Jo()},s=i$(e,n);if(!e.length)return`
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
      `;const a=Ho(t,e);if(!a)return"";const{exercise:o,tiles:c,selectedTiles:l,answerFlat:d,wrongIndexes:u,complete:m,awarded:h}=a,v=new Set(r.progress.sentencePractice.selected),w=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(l$(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${op(o,l,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(c$(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${c.map((y,L)=>{const b=v.has(L),k=u.includes(r.progress.sentencePractice.selected.indexOf(L));return`
              <button class="sentence-tile ${b?"is-used":""} ${k?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${L}" ${b||m?"disabled":""}>
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
    `}function i$(e,t){const n=Ae(),s=wa(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,c=!!n.customEditingId,l=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${o$(a,e,t)}
      </details>
    `}function o$(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=zo(s,t),o=!!(a&&jn(a,t).length>=Math.max(4,yt(a).length)),c=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function l$(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function Ns(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Jo(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function c$(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function ip(e=Ot()){const t=d$(e),n=u$(e),s=Array.isArray(r.sentenceExercises)?r.sentenceExercises:[],a=new Set;return[...t,...n,...s].filter(o=>!o?.id||a.has(o.id)?!1:(a.add(o.id),!0))}function d$(e=Ot()){const t=Ae();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>zo(s,e)).filter(Boolean)}function zo(e,t=Ot()){return e?.jp?qo({id:e.id,jlpt:S$(e.jp,t),sentence:e.jp,reading:e.hiragana||Nr(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function op(e,t,n){const s=e?.blanks||[],a=String(e?.sentence||"").split("___");let o=0;return a.map((c,l)=>{const d=s[l];if(!d)return i(c);const u=d.answer||[],m=u.map((h,v)=>{const w=o+v,$=t[w],y=n.includes(w);return`<span class="sentence-slot ${$?"is-filled":""} ${y?"is-wrong":""}">${$?i($.kanji):""}</span>`}).join("");return o+=u.length,`${i(c)}<span class="sentence-blank">${m}</span>`}).join("")}function Ho(e=Ja(),t=Ot()){const n=Vn(t),s=(Array.isArray(e)?e:[]).filter($=>$?.id),a=Ae();new Set(s.map($=>$.id)).has(a.activeId)||Ga(Wo(s)?.id||null);const c=s.find($=>$.id===r.progress.sentencePractice.activeId)||s[0];if(!c)return null;const l=yt(c);(!Array.isArray(r.progress.sentencePractice.tileKeys)||!r.progress.sentencePractice.tileKeys.length)&&(r.progress.sentencePractice.tileKeys=jn(c,n).map(qa));let d=(Array.isArray(r.progress.sentencePractice.tileKeys)?r.progress.sentencePractice.tileKeys:[]).map(L$).filter(Boolean);const u=()=>l.every($=>d.some(y=>y.kanji===$.kanji));(d.length<Math.max(4,l.length)||!u())&&(d=jn(c,n),r.progress.sentencePractice.tileKeys=d.map(qa),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null);const m=Array.isArray(r.progress.sentencePractice.selected)?r.progress.sentencePractice.selected:[];r.progress.sentencePractice.selected=m.filter(($,y,L)=>Number.isInteger($)&&$>=0&&$<d.length&&L.indexOf($)===y).slice(0,l.length);const h=r.progress.sentencePractice.selected.map($=>d[$]).filter(Boolean),v=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes:[],w=Array.isArray(v)?v.filter($=>Number.isInteger($)&&$>=0&&$<l.length):[];return{exercise:c,tiles:d,selectedTiles:h,answerFlat:l,wrongIndexes:w,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[c.id]}}function Ae(){return r.progress.sentencePractice=Qi(us().sentencePractice,r.progress.sentencePractice||{}),r.progress.sentencePractice}function Ga(e){r.progress.sentencePractice={...Ae(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=ip(Ot()).find(n=>n?.id===e);t&&up(t)}function Vn(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function Ot(){return Vn(r.cards).filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!Me(t))return!1;const n=D(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||r.progress.lessonCompletions[e.lessonId]})}function Ja(e=Ot()){const t=Vn(e),n=new Set(t.map(s=>s.kanji));return ip(t).filter(s=>{if(!s?.id)return!1;const a=yt(s);return!a.length||a.some(o=>!n.has(o.kanji))?!1:jn(s,t).length>=Math.max(4,a.length)})}function yt(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function lp(e){return yt(e).map(t=>t.kanji).join("")}function jn(e,t){if(!e?.id)return[];const n=Vn(t),s=yt(e),a=new Set(s.map(v=>v.kanji)),o=new Set(n.map(v=>v.kanji)),c=new Map;[...e.tiles||[],...s].forEach(v=>{v?.kanji&&v?.reading&&c.set(v.kanji,v.reading)});const l=s.map(v=>({kanji:v.kanji,reading:v.reading||c.get(v.kanji)||Xt(v.kanji)})),d=(e.tiles||[]).filter(v=>v?.kanji&&!a.has(v.kanji)&&o.has(v.kanji)).map(v=>({kanji:v.kanji,reading:v.reading||Xt(v.kanji)})).filter((v,w,$)=>$.findIndex(y=>y.kanji===v.kanji)===w),u=n.filter(v=>v.kanji&&!a.has(v.kanji)).map(v=>({kanji:v.kanji,reading:c.get(v.kanji)||Xt(v.kanji,v)})).filter((v,w,$)=>$.findIndex(y=>y.kanji===v.kanji)===w).sort((v,w)=>Te(`${e.id}:${v.kanji}`)-Te(`${e.id}:${w.kanji}`)),m=[...d,...u].filter(v=>!a.has(v.kanji)).filter((v,w,$)=>$.findIndex(y=>y.kanji===v.kanji)===w),h=Math.min(Math.max(6,l.length+2),l.length+m.length);return M$([...l,...m.slice(0,h-l.length)],e.id)}function u$(e){const t=Vn(e);if(!t.length)return[];const n=new Set(t.map(c=>c.kanji)),s=new Set,a=[];return t.flatMap(c=>(c.examples||[]).map(l=>({...l,card:c}))).forEach((c,l)=>{const d=Ls(c.word||"");if(!d||s.has(d)||!N$(d)||dp(d).some($=>!n.has($)))return;s.add(d);const u=Yn(c.reading||Nr(d)),m=c.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],v=h[l%h.length],w=qo({id:`sentence-json-${Te(`${d}:${v.sentence}`).toString(36)}`,jlpt:c.card?.jlpt||"N5",sentence:v.sentence,reading:v.reading,translationRu:v.translationRu,translationEn:v.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});w&&a.push(w)}),a.slice(0,160)}function p$(){const e=Ae(),t={...Ns(),...Jo()},n=wa(g$()||e.customDraft||{}),s=Ot(),a=Sn(n.jp);if(!a){za(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(v$(a,o)){za(t.customDuplicate,"error");return}const l=Ae(),d={id:o||`custom_${Date.now().toString(36)}_${Te(a).toString(36)}`,jp:a,hiragana:Yn(Sn(n.hiragana)||Nr(a)),ru:Sn(n.ru),en:Sn(n.en),source:"user"},u=(l.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?l.customSentences[u]=d:l.customSentences=[d,...l.customSentences||[]].slice(0,160),l.customDraft={jp:"",hiragana:"",ru:"",en:""},l.customEditingId=null,za(o?t.customUpdated:t.customAdded,"success",!1);const m=zo(d,s);m&&jn(m,s).length>=Math.max(4,yt(m).length)&&(Ga(m.id),r.progress.sentencePractice.tileKeys=jn(m,s).map(qa)),N(),C()}function g$(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function m$(e){const t=Ae(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",N(),C())}function f$(e){const t=Ae(),n={...Ns(),...Jo()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=Ot(),o=Wo(Ja(a));Ga(o?.id||null)}za(n.customDeleted,"success",!1),N(),C()}}function h$(){const e=Ae();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",N(),C()}function v$(e,t=null){const n=Ls(e);return(Ae().customSentences||[]).some(a=>a.id!==t&&Ls(a.jp)===n)?!0:r.sentenceExercises.some(a=>Ls(cp(a))===n)}function za(e,t,n=!0){const s=Ae();s.customMessage=e,s.customStatus=t,N(),n&&C()}function qo(e,t,n={}){if(!e||typeof e!="object")return null;const s=Vn(t),a=Ls(e.sentence||"");if(!a||!e.id||!s.length)return null;const o=w$(a,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const c=b$(o,a,n);if(!c.length)return null;let l="",d=0;const u=c.map(m=>(l+=a.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:k$(m.text)}));return l+=a.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:l,originalSentence:a,reading:Yn(e.reading||Nr(a)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((h,v)=>({kanji:h,reading:m.reading[v]||Xt(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function w$(e,t){const n=new Map(Vn(t).map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,c)=>{if(Ha(o)&&n.has(o)){a||(a={start:c,end:c,text:"",answer:[]}),a.end=c+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function b$(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),c=e.filter(m=>m.start>0),l=(o.length?o:c.length?c:e).slice().sort((m,h)=>{const v=h.answer.length-m.answer.length;return v||Math.abs(m.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return l.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,h)=>m.start-h.start)}function k$(e){const t=Array.from(e),n=y$(e);return n?$$(t,Yn(n)):t.map(s=>Xt(s))}function y$(e){for(const t of r.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function $$(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const c=j$(e[a]).sort((l,d)=>d.length-l.length).find(l=>l&&s.endsWith(l));c&&(n[a]=c,s=s.slice(0,-c.length))}return n[0]=s||Xt(e[0]),n.map((a,o)=>a||Xt(e[o]))}function j$(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>Yn(s.trim())).filter(Boolean);return[...new Set(n)]}function Nr(e){return Yn(Array.from(e).map(t=>Ha(t)?Xt(t):t).join(""))}function S$(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return dp(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,c)=>n.indexOf(c)-n.indexOf(o))[0]||"N5"}function Ls(e){return String(e||"").replace(/\s+/g,"").trim()}function Sn(e){return String(e||"").replace(/\s+/g," ").trim()}function cp(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function N$(e){return Array.from(String(e||"")).some(Ha)}function dp(e){return Array.from(String(e||"")).filter(Ha)}function Ha(e){return/[㐀-鿿]/u.test(e)}function Yn(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function Q(e){return Yn(String(e||""))}function Xt(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function qa(e){return`${e.kanji}	${e.reading||""}`}function L$(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||Xt(t)}:null}function x$(e){const t=Ho();if(!t||!Number.isInteger(e))return;const n=Ns(),s=r.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){J(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},N(),C()}}function C$(){const e=Ae();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:Ns().removed,wrongIndexes:[]},N(),C())}function A$(){const e=Ae();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,N(),C())}function T$(){const e=Ho();if(!e)return;const t=Ns(),n=r.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},N(),C();return}const s=e.answerFlat.map((o,c)=>e.selectedTiles[c]?.kanji===o.kanji?-1:c).filter(o=>o>=0),a=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:a,wrongIndexes:s,message:a?t.correct:t.wrong},a)I$(e.exercise),Se({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),Ne("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),hi("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,Se({discipline:-.6,curiosity:.2},"sentence_wrong"),Ne("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=Vt();o.mistakes+=1,r.progress.daily[re()]=o,hi("again")}N(),C()}function I$(e){const t=Ae();if(t.completed[e.id])return;const n=r.rewards?.rewards||{},s=n.sentencePracticeXp||ql.xp,a=n.sentencePracticeCoins||ql.coins;t.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const o=Vt();o.reviews+=1,o.minutes=yi((o.minutes||0)+.8,1),r.progress.daily[re()]=o,G(s,a,`sentence:${e.id}`),Se({trust:.8,curiosity:.7},"sentence_complete"),ve(),il(),X()}function R$(){const e=Ot(),t=Ja(e);if(!t.length)return;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&up(s);const a=Wo(t,{excludeCurrent:!0,preferUncompleted:!0});a?.id&&(Ga(a.id),r.progress.sentencePractice.tileKeys=jn(a,e).map(qa),N(),C())}function Wo(e,t={}){const n=(Array.isArray(e)?e:[]).filter(y=>y?.id);if(!n.length)return null;const s=Ae(),a=s.activeId,o=new Set(s.recentIds||[]),c=new Set(s.recentAnswers||[]),l=y=>!t.excludeCurrent||n.length===1||y.id!==a,d=y=>!t.preferUncompleted||!s.completed?.[y.id],u=y=>!c.has(lp(y)),m=y=>!o.has(y.id),v=[n.filter(l).filter(d).filter(u).filter(m),n.filter(l).filter(d).filter(u),n.filter(l).filter(u).filter(m),n.filter(l).filter(m),n.filter(l),n].find(y=>y.length)||n,w=v.filter(_$),$=w.length?w:v;return $[Math.floor(Math.random()*$.length)]}function _$(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function up(e){if(!e?.id)return;const t=Ae(),n=lp(e),s=Array.isArray(t.recentIds)?t.recentIds:[],a=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...a.filter(o=>o!==n)].slice(0,8)}function Te(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function M$(e,t){return[...e].sort((n,s)=>Te(`${t}:${n.kanji}:${n.reading}`)-Te(`${t}:${s.kanji}:${s.reading}`))}function Bt(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function xs(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function P$(e){return Number(e?.passingPercent??e?.passThreshold??70)}function E$(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Nt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(A("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${Nn("eva",n,t?"review":"achievement","reward-mascot")}
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
    `}function pp(e){const t=BS(e);if(!t&&!FS(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function Wa(e){const t=Dr(e);return`
      <div class="reading-row reading-split">
        ${gp(e,"onyomi",og("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${gp(e,"kunyomi",og("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function gp(e,t,n,s,a){const o=fp(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(Q(s)||"—")}</strong>
        <small>${i(a||"—")}</small>
      </div>
    `}function mp(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${fp(e,t,n)}
            </dt>
            <dd>${i(Q(s||"—"))}</dd>
          </div>
        `}function fp(e,t,n){return Ms(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function Xa(e,t="btn ghost"){const n=XS(e);if(!n)return"";const s=pt(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(Zt(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function hp(e){if(!e?.id)return As();nr(e,"study_card");const t=D(e.id),n=r.revealed;TS(e.id);const s=e.lessonTitle||Tl(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${mi(t.state)}
          </div>
          ${pp(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?R(e):A("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(A("strokes"))} · ${i(_n(t.dueAt))}</p>
        ${n?D$(e):`
          ${K$(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(A("showAnswer"))}</button>
            ${Xa(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(A("details"))}</button>
          </div>
        `}
      </article>
    `}function K$(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function Qa(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(Q(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(Ie(e))}</small>
      </li>
    `}function D$(e){return`
      <div class="answer-section">
        ${Wa(e)}
        <strong>${i(A("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(Qa).join("")}
        </ul>
        <strong>${i(A("apps"))}</strong>
        <p>${i(Jr(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${Xa(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(Ya().forgot)} <small>${i(Ya().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(Ya().remember)} <small>${i(Fj(e))}</small></button>
        </div>
      </div>
    `}function Xo(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(r.reviewSession?.initialSize||t,1):Math.max(r.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${Mj(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${M(A("review"),t,"queue",E(t,a))}
          ${M("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,E(r.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(A("hint"))} · Leya</h3>
          <p>${i(ai(e.id).hint)}</p>
          <h3>${i(A("mnemonic"))}</h3>
          <p>${i(ai(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function Lr(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function F$(e){if(!e){r.activeCardId=null,Lr();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){const t=ne(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){r.activeCardId=null,Lr();return}r.activeCardId!==t.id&&(r.activeCardId=t.id,Lr());return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function Qo(e,t,n="",s=null,a=null,o="textbook"){const c=V(e);if(!c||!t)return null;if(String(o||"textbook")==="reading"){const v=a||Hp(t,c);if(!v)return null;const w=Er(s||{},v);return{kind:"exercise",source:"reading",key:`reading:${String(c)}:${t}`,level:c,exerciseId:t,lessonId:String(v.sourceId||n||w.lessonId||""),cardId:"",dueAt:w.dueAt?new Date(w.dueAt).getTime():0,progress:w,exercise:v,card:null}}const d=es(s||{},{level:c,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||al(c,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${c}:${t}`,level:c,exerciseId:t,lessonId:m,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:ne(h)||ne(d.cardId||"")}}function Cs(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=Hp(t,e),c=o?Cn(o):r.progress.readingExercises?.[t]||null;return Qo(e,t,c?.lessonId||o?.sourceId||"",c,o,"reading")}const a=Bj(e)?.exerciseSrs?.[t]||null;return Qo(e,t,a?.lessonId||"",a,null,"textbook")}function Vo(e){return!e||e.kind!=="exercise"?null:Qo(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function O$(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=ne(t);if(!n?.id)return null;const s=e.progress||D(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="exercise"?Vo(e):null}function xr(e){return(Array.isArray(e)?e:[]).map(O$).filter(Boolean)}function B$(e){const t=xr(e),n=Cs();if(n&&r.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(o=>o.kind==="exercise"&&o.exerciseId===n.exerciseId&&o.level===n.level))return n;const s=r.activeCardId?t.find(o=>o.kind==="card"&&o.card?.id===r.activeCardId):null;if(s)return s;const a=r.reviewQueueLastKind==="card"?"exercise":r.reviewQueueLastKind==="exercise"?"card":"";if(a){const o=t.find(c=>c.kind===a);if(o)return o}return t[0]||n||null}function U$(e,t){const n=V(e);return n==="N5"?Qd(t):n==="N4"?uu(t):n==="N3"?Su(t):n==="N2"?Eu(t):""}function G$(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Yo(){return p()==="ru"?"Перевод":"Translation"}function vp(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=ag(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function J$(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?Q(e.reading):"",s=e?.reading?vp(e.reading):"",a=f({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Yo())}</button>
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
    `}function z$(e){return r.reviewExerciseResults?.[e.exerciseId]||Cn(e.exercise)||null}function H$(e,t,n,s){const a=String(t?.id||n),o=s?.answers?.[a]||null,c=Array.isArray(t?.options)?t.options:[],l=c.find(u=>String(u.value||"")===String(t?.answer||"")),d=l?f(l.label||l):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(f(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${c.map(u=>{const m=o?.selected===u.value,h=o?.correct&&u.value===t.answer,v=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||v?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(a)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(f(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function q$(e){const t=Vo(e);if(!t||!t.exercise)return As();const n=z$(t),s=!!n?.completed,a=t.progress||Cn(t.exercise),o=G$(t.exercise),c=f(t.exercise.sourceTitle||t.exercise.title||{}),l=yt(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(L=>L?.id),u=t.exercise.kind==="cloze"||!d.length&&l.length>0;if(!u&&!d.length)return As();const m=u?s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,l.length):Math.max(1,d.length),v=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],w=v.map(L=>t.exercise.tiles?.[L]).filter(Boolean),$=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],y=J$(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(c||o)}</span>
          <span class="pill">${i(a.state)} · ${i(_n(a.dueAt))}</span>
          <span class="pill">${i(m)}/${i(h)}</span>
        </div>
        ${y}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${op(t.exercise,w,$)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(f({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((L,b)=>{const k=v.includes(b),B=$.includes(b);return`
                <button class="sentence-tile ${k?"is-used":""} ${B?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${b}" ${k||s?"disabled":""}>
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
            <button class="btn" type="button" data-action="reading-review-undo" ${!v.length||s?"disabled":""}>${i(p()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!v.length||s?"disabled":""}>${i(p()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:d.map((L,b)=>H$(t,L,b,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function W$(e){const t=Vo(e);if(!t||!t.exercise)return As();if(t.source==="reading")return q$(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(_n(t.progress.dueAt))}</span>
        </div>
        ${U$(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function X$(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Ee("eva","lessonComplete"))}</h2>
        <p>${i(e?Gr(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(A("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(A("dictionary"))}</button>
        </div>
      </article>
    `}function As(){return`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Ee("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(A("learn"))}</button>
      </article>
    `}function Q$(){const e=jS(),t=Math.max(zs,Number(r.dictionaryVisibleCount||zs)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],c=["all",...new Set(r.cards.map(u=>Kr(u.id).radical).filter(Boolean))],l=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("dictionary"))}</h1>
            <p>${i(l)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${V$(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(A("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${Wr(u,r.filters.jlpt)}>${i(u==="all"?A("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(A("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",A("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${Wr(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(A("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${c.map(u=>`<option value="${g(u)}" ${Wr(u,r.filters.radical)}>${i(u==="all"?A("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(A("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${Wr("all",r.filters.favorites)}>${i(A("all"))}</option>
              <option value="yes" ${Wr("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(Y$).join("")||ej()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(l)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function V$(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
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
    `}function Y$(e){const t=D(e.id),n=Kr(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${Z$(e)}
        <div class="tag-row">
          ${mi(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(A("strokes"))}</span>
          <span class="pill">${i(A("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(A("learnedStatus"))}: ${i(xg(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function Z$(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(R(e))}</h3>
          <p>${i(hl(e))}</p>
          <span class="label">${i(Tl(e.lessonId))}</span>
        </span>
      </span>
    `}function ej(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function tj(){const e=r.kanjiPageId||gN(),t=ne(e);if(!t)return r.deferredDataLoaded?lo(we("hash","entity-not-found",pN(),En(location.hash).segments)):(ca({route:"kanji",delay:0,force:!0}),Ag());const n=D(t.id),s=Kr(t.id),a=!!r.progress.favorites[t.id],o=vj(t,p()),c=nj(t),l=ol(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(A("dictionary"))}</button>
            <h1>${i(c?`${t.kanji} — ${sj(c)}`:t.kanji)}</h1>
            <p>${i(c?rj(c):R(t))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(t.id)}">▶ ${i(A("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(t.id)}">${a?"★":"☆"} ${i(A("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${g(t.kanji)}">${i(t.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${mi(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(A("strokes"))}</span>
                <span class="pill">${i(A("radical"))}: ${i(s.radical||"-")} ${i(f(s.radicalMeaning||{}))}</span>
                ${c?`<span class="pill">Grade ${i(c.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(c.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(R(t))}</h2>
              <p>${i(Jr(t))}</p>
              ${Wa(t)}
              ${el(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${c?aj(c):""}
          ${c?ij(c):""}
          <article class="kanji-profile-card">
            <h2>${i(A("examples"))}</h2>
            <ul class="example-list">${t.examples.map(Qa).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${c?oj(c):pj(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(A("strokeOrder"))}</h2>
            <p class="label">${i(l?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Mr(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${Xa(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(A("apps"))}</h2>
            <p>${i(Jr(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${c?cj(c):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${c?dj(c):""}
        </div>
      </section>
    `}function nj(e){return r.kanjiPageSources?.[e?.kanji]||null}function sj(e){return wp(e.meanings)[0]||e.literal}function wp(e){return e?e[p()]||e.ru||e.en||[]:[]}function Ts(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function rj(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function aj(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(wp(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Ts(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(A("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(A("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Ts(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function ij(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(uj(t))}">
                <b>${Zo(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Ts(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function oj(e){return`
      <ul class="kanji-sentence-list">
        ${lj(e).map(n=>`
          <li>
            <strong>${Zo(n.japanese,e.literal)}</strong>
            <small>${i(Ts(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function lj(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(o<3||o>44)}).sort((s,a)=>Number(bp(a.japanese,n))-Number(bp(s.japanese,n))).slice(0,8)}function bp(e,t){return[...t].some(n=>e.includes(n))}function cj(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(Ts(t.title||{}))}</span>
            <strong>${Zo(t.japanese,e.literal)}</strong>
            <small>${i(Ts(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function dj(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function uj(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Zo(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function pj(e){const t=gj(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${hj(n)}</strong>
            <span>${i(mj(n))}</span>
            <small>${i(fj(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function gj(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=kp(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function kp(e){return e?.sentence||e?.jp||""}function mj(e){return e?.reading||e?.hiragana||""}function fj(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function hj(e){let t=i(kp(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function vj(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${yp(e)}/`}function yp(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function wj(){const e=ne(r.activeCardId)||pl()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,$t(e)-1)));const t=ol(e),n=$t(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",c=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("writingPractice"))}</h1>
            <p>${i(e?`${e.kanji} · ${R(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${i(e?.kanji||"文")}</div>
            ${e?Wa(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(A("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(Mr(e)[r.writingStep]||"")}</span>
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
            ${e?bj(e):""}
            <h3>${i(A("hint"))}</h3>
            <p>${i(ai(e?.id).hint)}</p>
            <h3>${i(A("mnemonic"))}</h3>
            <p>${i(ai(e?.id).mnemonic)}</p>
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
    `}function bj(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Mr(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function kj(){if(!r.detailCardId)return"";const e=ne(r.detailCardId);if(!e)return"";const t=D(e.id),n=Kr(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${mi(t.state)}
              <h2>${i(R(e))}</h2>
              <p>${i(hl(e))} · ${e.strokes} ${i(A("strokes"))}</p>
              <p><span class="pill">${i(A("radical"))}: ${i(n.radical||"-")} ${i(f(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${Wa(e)}
          ${el(e)}
          <h3>${i(A("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(A("examples"))}</h3>
          <ul class="example-list">${e.examples.map(Qa).join("")}</ul>
          <h3>${i(A("apps"))}</h3>
          <p>${i(Jr(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(A("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(A("favorites"))}</button>
            ${Xa(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function el(e){const t=vl(e),n=Ms(e);return`
      <section class="audio-panel">
        <h3>${i(A("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${yj(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function yj(e,t=Ms(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(tl(n))}">
                <span>${i(tl(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function tl(e){return e.kind==="onyomi"?oi("onyomi"):e.kind==="kunyomi"?oi("kunyomi"):e.label||"TTS"}function $j(){const e=gl(),t=Vt(),n=en();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("stats"))}</h1>
            <p>${i(A("xp"))} · ${i(A("level"))} · ${i(A("coins"))}</p>
          </div>
          <div class="actions">
            ${Ks("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${i(A("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(A("xp"),`${n.current}/${n.next}`,`${A("level")} ${r.progress.level}`,n.percent)}
          ${M(A("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,E(r.progress.streak.current,30))}
          ${M(A("mastered"),e.mastered,`${e.total}`,E(e.mastered,e.total))}
          ${M(A("successRate"),`${Qp()}%`,`${ml()} reviews`,Qp())}
          ${M(A("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,E(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(A("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(A("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(A("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(A("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${Sj()}</article>
          <article class="tool-panel" data-section="shop-panel">${Lj()}</article>
          <article class="tool-panel">${Sp()}</article>
          <article class="tool-panel">
            <h3>${i(A("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(un().badge)}</strong>
                  <small>${i(un().hint)}</small>
                </span>
                <span class="pill">${i(un().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${pi()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${pi()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(gi()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(gi()*100)}%</strong>
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
    `}function Zn(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function jj(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(Zn().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function nl(e){return f(e.title||e.name||{ru:e.id,en:e.id})}function $p(e){return f(e.description||{})}function sl(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function Sj(){return`<h3>${i(A("achievements"))}</h3><div class="achievement-grid compact">${Zn().slice(0,8).map(jp).join("")}</div>`}function Nj(){const e=Zn(),t=vN(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(A("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${Ks("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${i(A("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(A("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",E(t,e.length))}
          ${M("XP",n.xp,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(A("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Bs(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",E(e.filter(s=>s.secret&&Bs(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${jj().map(s=>{const a=e.filter(c=>c.category===s.id);if(!a.length)return"";const o=a.filter(c=>Bs(c.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${sl(s.icon)} ${i(f(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${E(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(c=>jp(c,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function jp(e,t=!1){const n=Bs(e.id),s=_p(e),a=Math.max(1,Number(e.target||1)),o=E(s,a),c=Math.min(s,a),l=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":nl(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":$p(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${sl(e.icon)}</span>
        <strong>${i(l)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${c}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(A("coins"))}</small>
      </div>
    `}function Lj(){return Sd({closable:!1})}function Sp(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(A("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(xj(s))}</strong>
              <small>${i(_0(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function xj(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=ge(n[1]);if(s)return ht(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function Cj(){if(!r.rewardModal)return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=en(),a=t?`${A("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${A("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${sl(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(A("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${Nn(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
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
    `}function Aj(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(tm),c=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),l=`mailto:${rn}?subject=${o}&body=${c}`;return`
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
            <strong>${i(rn)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(l)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(a)}</button>
          </div>
        </article>
      </div>
    `}function Tj(){const e=r.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=f(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),a=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",c=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${a.map(l=>`<li>${i(l)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${Si}, ${Ni}.`:`Saved locally: ${Si}, ${Ni}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(c)}</button>
          </div>
        </article>
      </div>
    `}function Ij(){if(!r.pwaInstallHelpVisible)return"";const e=Os(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function Rj(){if(pd()||r.pwaInstallHelpVisible||!Ml()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal)return"";const e=Tg(),t=!an&&Os();return`
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
    `}function _j(){if(pd()||!r.notificationPromptVisible||!wi("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.pwaInstallHelpVisible||Ml())return"";const e=Eg();return`
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
    `}function Mj(e,t,n){const s=Fs(e),a=Va(e,t,n),o=Cp(Ee(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(a)}" alt="${g(f(s.name))}" />
        <div><strong>${i(f(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function Nn(e,t,n,s){const a=Fs(e),o=Va(e,t,n),c=Cp(Ee(e,n)),l=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return Lp(l)?`
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
    `}function Np(){try{const e=sessionStorage.getItem(_e);return e?JSON.parse(e)||{}:{}}catch{return{}}}function Pj(e){try{sessionStorage.setItem(_e,JSON.stringify(e||{}))}catch{}}function Lp(e){return e?!!Np()[e]:!1}function xp(e){if(!e)return;const t=Np();t[e]=Date.now(),Pj(t);const n=On.get(e);n&&(clearTimeout(n),On.delete(e)),C()}function Ej(){const e=new Set;Ki("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||Lp(n)||(e.add(n),On.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{On.delete(n),xp(n)},s);On.set(n,a)});for(const[t,n]of On)e.has(t)||(clearTimeout(n),On.delete(t))}function Va(e,t="normal",n="welcome"){if(e==="eva")return ws(gn(null,Kj(t,n)));const s=Fs(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function Kj(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},c=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return c&&(!n||n==="welcome")?c:a[n]||o[s]||s||"neutral"}function Cp(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function Dj(e){const t=ne(r.activeCardId);if(!t||!am[e])return;tr(t,"srs_rating");const n=se(D(t.id)),s=pe(n,e);r.progress.cards[t.id]=s,Qt(n,s,e),ve();const a=Number(r.progress.correctCombo||0),o=Oe(e)?"again":"ok";Oe(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,Se({discipline:-.8,trust:-.2},"answer_again"),Ne("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:a>0}),J(Ee("eva","wrong"))):(G(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),Se({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),Ne("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),J(Ee("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(G(r.rewards.rewards.comboXp,0,"combo_bonus"),et({title:"Combo",message:Ee("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),r.reviewQueueLastKind="card",r.revealed=!1,r.activeCardId=null,jt(),r.pendingFocus=null,Ht(),N(),_t("review card post-render effects",()=>{dg(),hi(o),ir(),Gj(t.lessonId),il(),X()})}function Ya(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function Fj(e){const t=Ya(),n=D(e.id),s=Oj(n,"remember"),a=Qf(n,s);return`${t.rememberHint}: ${Vf(Wf(a))}`}function Oj(e,t){if(Oe(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),c=Number(e.lapses||0),l=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?l>=70||a>=2?"good":"hard":l>=88&&a>=5&&c<=1?"easy":l<70||c>Math.max(1,Math.floor(a/3))?"hard":"good"}function Oe(e){return e==="forgot"||e==="again"}function Is(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function es(e,t={}){const s={...Is(t.level||"",t.lessonId||"",t.exerciseId||"",t),...ji(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=Cg(s),Number.isFinite(Number(s.srsStep))?s.srsStep=de(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=ao(s),Ap(s)?s:Is(s.level,s.lessonId,s.exerciseId,s)}function Ap(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function Cr(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=es(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function Bj(e){const t=V(e);return t==="N5"?Z():t==="N4"?W():t==="N3"?H():t==="N2"?q():t==="N1"?ee():null}function rl(e){const t=V(e);return t==="N5"?Fe():t==="N4"?rt():t==="N3"?it():t==="N2"?lt():t==="N1"?dt():[]}function Uj(e,t){const n=V(e),s=String(t||"");return!n||!s?null:rl(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function Tp(e){const t=V(e);return t==="N5"?gr:t==="N4"?Ea:t==="N3"?Ka:t==="N2"?Da:t==="N1"?Ba:null}function al(e,t,n=""){const s=Tp(e),a=V(e),o=String(t||"");if(!s||!a||!o)return null;const c=Uj(a,n);if(c){const l=s(c).find(d=>String(d.id)===o);if(l)return l}for(const l of rl(a)){const d=s(l).find(u=>String(u.id)===o);if(d)return d}return null}function Za(e,t){const n=V(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(c=>{if(e.exerciseSrs[c])return;const l=al(n,c);if(!l||!s.has(String(l.lessonId||"")))return;const d=Is(n,l.lessonId||"",l.id,l),u=e.exerciseResults?.[c]||null,m=!!e.completedExercises?.[c],h=pe(se(d),m||u?.correct?"good":"again");h.level=n,h.lessonId=String(l.lessonId||h.lessonId||""),h.exerciseId=String(l.id||c||""),h.cardId=String(l.cardId||h.cardId||""),h.kanji=String(l.kanji||h.kanji||""),h.type=String(l.type||h.type||""),h.title=l.title||h.title||null,h.prompt=String(l.prompt||h.prompt||""),h.answer=String(l.answer||h.answer||""),h.answerLabel=String(l.answerLabel||h.answerLabel||""),e.exerciseSrs[c]=h,o=!0}),o}function ei(e,t){const n=V(t);if(!e||!n)return!1;const s=rl(n),a=Tp(n);if(!a?.length&&!a)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=new Map;s.forEach(l=>{(a(l)||[]).forEach(d=>{d?.id&&o.set(String(d.id),{exercise:d,lesson:l})})});let c=!1;return Object.entries(e.exerciseSrs).forEach(([l,d])=>{const u=o.get(String(l));if(!u)return;const{exercise:m,lesson:h}=u,v=es(d,{level:n,lessonId:h.id,exerciseId:m.id,cardId:m.cardId||"",kanji:m.kanji||"",type:m.type||"",title:m.title||null,prompt:m.prompt||"",answer:m.answer||"",answerLabel:m.answerLabel||""});JSON.stringify(d)!==JSON.stringify(v)&&(e.exerciseSrs[l]=v,c=!0)}),c}function Gj(e){if(r.progress.lessonCompletions[e])return;const t=fl(e);if(!(t.length>0&&t.every(o=>D(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),P("lesson_complete"),G(s,a,"lesson_completion"),Se({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),Ne("lesson_complete",{lessonId:e,xp:s,coins:a}),et({title:f({ru:"Урок завершён",en:"Lesson complete"}),message:Ee("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),bi("lesson_complete")}function il(){const e=re(),t=Vt();if(t.goalClaimed||t.reviews<r.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=r.rewards.rewards.comboXp,s=r.rewards.rewards.streakCoins;G(n,s,"daily_goal"),et({title:A("dailyGoal"),message:Ee("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[e]=t}function Jj(){const e=ti(),t=re();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),Ip()}function Ip(){const e=r.progress.streak,t=Tc(e.pendingReward);if(!t||re()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return P("streak_reward"),G(0,n,`streak:${t.milestone}:claim`),et({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),X(),N(),!0}function zj(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,Se({warmth:.2,curiosity:.1},"eva_click"),J(Ee("eva","welcome")),X(),N(),C();return}e==="leya"&&J(Ee("leya","combo"))}function Rp(){ce(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||(r.evaRuntime=Rt()),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,Ne("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),X(),P("notification_soft"),N(),C()}function Hj(){if(Y.completed)return;Y.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,Y.cardId&&(r.progress.writingPractice.cards[Y.cardId]=(r.progress.writingPractice.cards[Y.cardId]||0)+1),Se({curiosity:1,discipline:.8,trust:.4},"writing_complete"),Ne("writing_complete",{cardId:Y.cardId});const e=X();N(),e&&C()}function qj(){const e=re();ti();const t=Wj(),n=va(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:Kg(e,1)},N())}function Wj(){const e=re(),t=ti(),n=va(r.progress.dailyBonusPending);if(!n||re()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return Xj(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),P("daily_bonus"),G(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),Se({warmth:1,discipline:.8},"daily_bonus"),et({title:A("dailyBonus"),message:Ee("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),X(),Kl(),!0}function ti(){var t;(t=r.progress).visits||(t.visits={});const e=r.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function Xj(e,t){const n=ti();n.streak=e&&Rn(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&Rn(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function X(){if(!Zn().length)return 0;let e=0;return Zn().forEach(t=>{if(Bs(t.id)||!Qj(t))return;e+=1;const n=t.rewardXp||0,s=t.rewardFragments||0;r.progress.achievements[t.id]={unlockedAt:new Date().toISOString(),rewardXp:n,rewardFragments:s},et({type:"achievement",title:nl(t),message:$p(t),xp:n,coins:s,icon:t.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),G(n,s,`achievement:${t.id}`)}),e}function Qj(e){return _p(e)>=Number(e.target||1)}function _p(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return gl().learned;if(e.kind==="reviews")return ml();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(Z().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return Xn();if(e.kind==="n5Writing")return Object.keys(Z().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(Z().srsKanji||{}).length;if(e.kind==="n5FinalPass")return Z().finalTest?.passed?1:0;if(e.kind==="n4Opened")return W().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n4FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="n3Opened")return H().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(H().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(H().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(H().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(H().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(H().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(H().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return H().finalTest?.passed?1:0;if(e.kind==="n2Opened")return q().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(q().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(q().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(q().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(q().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(q().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(q().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return q().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=st().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Kt(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>D(n.id).state==="Mastered")?1:0}return 0}function et(e){if(!r.rewardModal){r.rewardModal=e,Mp(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}function Mp(e){if(U0(),e?.type==="achievement"){Ur()?P("achievement_unlock"):pi()&&B0();return}if(e?.type==="level"){P("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&P("notification_reward")}function G(e,t,n="reward"){const s=r.progress.level||di(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const a=Vj(n);if(!a&&e>0&&P("xp_gain"),!a&&t>0&&P("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=di(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>s){P("level_up"),Ne("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const o=en();et({type:"level",title:A("levelUp"),message:`${A("level")} ${r.progress.level} - ${o.current}/${o.next} XP - ${r.progress.moonFragments} ${A("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function Vj(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function Qt(e,t,n){const s=Vt();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Oe(n)&&(s.mistakes+=1),s.minutes=yi(s.reviews*.75+s.learned*1.25,1),r.progress.daily[re()]=s}function ve(){Ip();const e=re(),t=r.progress.streak.lastStudyDate;if(t===e)return;const n=!!(t&&Rn(t,e)>1&&r.progress.streak.current>0);r.progress.streak.current=t&&Rn(t,e)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=e,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:e,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),Se(n?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},n?"streak_lost":"study_streak"),n&&J(Ee("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:Kg(e,1)}),Ne("streak_up",{streak:r.progress.streak.current,lost:n}),N()}function Pp(){if(r.route!=="stats")return;if(!window.Chart){Nm().then(()=>{r.route==="stats"&&Pp()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=dN(10),t=e.map(a=>a.slice(5)),n=K0(),s=D0(n);Ar("activityChart",{type:"bar",data:{labels:t,datasets:[{label:A("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:A("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),Ar("jlptChart",{type:"bar",data:{labels:Object.keys(Yp()),datasets:[{label:A("mastered"),data:Object.values(Yp()),backgroundColor:n.yellow}]},options:s}),Ar("streakChart",{type:"line",data:{labels:t,datasets:[{label:A("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),Ar("stateChart",{type:"doughnut",data:{labels:Object.keys(Vp()),datasets:[{data:Object.values(Vp()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),Ar("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:A("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function Ar(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function Yj(){const e=Ln();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,$t(e)-1)),Y.cardId!==String(e.id)&&Zj(e)),eS(),Ir(),ni(),Pr(Tr(!1)),window.setTimeout(Kp,120)}function Ln(){return ne(r.activeCardId)||pl()[0]||r.cards[0]||null}function Zj(e){Y.cardId=String(e?.id||""),Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Y.completed=!1}function eS(){const e=document.getElementById("practiceCanvas");if(!e)return;Rs();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),Y.drawing=!0,Y.activePointerId=a.pointerId,Y.currentStroke=[Ep(e,a)],Y.completed=!1,Rs())},n=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=Ep(e,a),c=Y.currentStroke[Y.currentStroke.length-1];(!c||zp(c,o)>1.4)&&(Y.currentStroke.push(o),Rs())},s=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=tS(Y.currentStroke);o.length&&Y.strokes.push(o),Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Rs(),Pr(Tr(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function Ep(e,t){const n=e.getBoundingClientRect();return{x:de((t.clientX-n.left)*(e.width/n.width),0,e.width),y:de((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function tS(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{zp(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function Rs(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=Ln();Jp(t,e),n&&aS(t,e,n),Y.strokes.forEach((s,a)=>Gp(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===Y.strokes.length-1})),Y.currentStroke.length&&Gp(t,Y.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function nS(){Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.completed=!1,Rs(),Pr(Tr(!1))}function sS(){Y.strokes.pop(),Y.currentStroke=[],Y.completed=!1,Rs(),Pr(Tr(!1))}function rS(e=!1){const t=Tr(!0);Pr(t),e&&(hi(t.success?"good":"again"),J(t.message),t.success&&Hj())}function Tr(e){const t=document.getElementById("practiceCanvas"),n=Ln(),s=$t(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=Y.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=de(Math.round(Math.min(a.length,s)/s*100),0,100),c=e?100:o,l=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=ol(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:c,success:l,expectedCount:s,message:d}}function Kp(){const e=document.getElementById("strokeCanvas"),t=Ln();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=$t(t),s=460,a=performance.now(),o=c=>{const l=c-a,d=de(Math.floor(l/s),0,n-1),u=de((l-d*s)/s,0,1);r.writingStep=d,Ir(d,u),ni(),l<n*s?Y.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,Ir(r.writingStep,1),ni())};Y.demoAnimationId=requestAnimationFrame(o)}function Dp(){const e=document.getElementById("strokeCanvas"),t=Ln();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=performance.now(),s=520,a=de(r.writingStep,0,Math.max(0,$t(t)-1)),o=c=>{const l=de((c-n)/s,0,1);Ir(a,l),l<1&&(Y.demoAnimationId=requestAnimationFrame(o))};Y.demoAnimationId=requestAnimationFrame(o)}function Fp(e){Op(r.writingStep+e,!1)}function Op(e,t){const n=Ln();n&&(r.writingStep=de(e,0,Math.max(0,$t(n)-1)),ni(),t?Dp():Ir(r.writingStep,1))}function ni(){const e=Ln();if(!e)return;const t=Mr(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${$t(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),Ki(".writing-guide-list li").forEach((o,c)=>o.classList.toggle("is-active",c===r.writingStep))}function Ir(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=Ln();if(!n||!s)return;const a=n.getContext("2d");Jp(a,n);const o=Rr(s);if(!o){Up(a,n,s,e);return}Bp(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function aS(e,t,n){const s=Rr(n);if(!s){Up(e,t,n,r.writingStep);return}Bp(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Rr(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function ol(e){return!!Rr(e)}function $t(e){const t=Rr(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function _r(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function Bp(e,t,n,s={}){const a=de(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=iS(n,t,s.padding||22),c=_r(),l=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=c.guide;n.strokeOrder.forEach((m,h)=>{const v=h<a,w=h===a;h>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=w?d:v?l:u,e.lineWidth=(w?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(w?1:v?.86:.24),w&&s.progress<1&&(e.globalAlpha*=.45+de(s.progress,0,1)*.55),w&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&lS(e,m,o,h+1,w))})}function iS(e,t,n=22){const s=oS(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,c=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:c}}function oS(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function lS(e,t,n,s,a){const o=cS(t.path);if(!o)return;const c=n.x+o.x*n.scale,l=n.y+o.y*n.scale;dS(e,c,l,s,a)}function cS(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function dS(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Up(e,t,n,s=0){const a=_r(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const c=p()==="ru"?`Шаг ${s+1}/${$t(n)} · точной схемы пока нет`:`Step ${s+1}/${$t(n)} · exact paths not available yet`;e.fillText(c,18,16),e.restore()}function Gp(e,t,n={}){const s=t.map(gS).filter(Boolean);if(!e||!s.length)return;const a=_r();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let c=1;c<s.length-1;c+=1){const l=mS(s[c],s[c+1]);e.quadraticCurveTo(s[c].x,s[c].y,l.x,l.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Jp(e,t){if(!e||!t)return;const n=_r();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),uS(e,t)}function uS(e,t){const n=_r();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Mr(e){const t=Rr(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:$t(e)},(s,a)=>n[a]||pS(e,a))}function pS(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Pr(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Y.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function gS(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function mS(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function zp(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function fS(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function hS(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(c=>c.id===s.lessonId);if(a&&!Me(a))return!1;const o=D(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(ri)}function vS(){const e=new Date;return ul().filter(t=>{const n=D(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(ri)}function wS(){const e=Date.now(),t=[];return[["N5",Z()],["N4",W()],["N3",H()],["N2",q()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const c=es(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!c.dueAt||!Ap(c))return;const l=al(n,a,c.lessonId||"");if(!l)return;const d=String(l?.lessonId||c.lessonId||"");if(!qS(n,d))return;const u=new Date(c.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(c.cardId||""),dueAt:u,progress:c})})}),t.sort(dl)}function si(){const e=[];return r.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((a,o)=>{const c={id:String(a.id||`${s.id}:${o}`),prompt:a.prompt||{ru:"",en:""},answer:String(a.answer||""),options:wf(a.options)};e.push({id:String(a.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:c,questions:[c]})})})}),[...e,...Dw()]}function Hp(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return si().find(a=>String(a.id||"")===n&&(!s||String(a.level||"").toUpperCase()===s))||si().find(a=>String(a.id||"")===n)||null}function qp(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?f(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":yt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":yt(e).map(n=>n.kanji).join(""))}}function ll(e){return 1}function xn(e){const t=qp(e);return{...Is(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:ll(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function Er(e,t){const n=xn(t),s=es({...n,...e||{}},qp(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=ll(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function Cn(e){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const t=r.progress.readingExercises[String(e.id)]||null;if(t){const a=Er(t,e);return r.progress.readingExercises[String(e.id)]=a,a}const n=xn(e);return r.progress.readingExercises[String(e.id)]=n,n}function ts(e,t){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const n=Er(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function Wp(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function _s(e=""){var a;if(!r.progress)return!1;const t=V(e);(a=r.progress).readingExercises||(a.readingExercises={});const n=new Map(si().filter(o=>!t||V(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(r.progress.readingExercises).forEach(([o,c])=>{const l=n.get(String(o));if(!l)return;const d=Er(c,l),u=Wp(d)?d:xn(l);JSON.stringify(c)!==JSON.stringify(u)&&(r.progress.readingExercises[String(o)]=u,s=!0)}),s}function bS(){const e=Date.now();return si().map(t=>{if(!WS(t.level))return null;const n=r.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=Er(n,t);if(r.progress.readingExercises[String(t.id)]=s,!Wp(s))return null;const a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort(dl)}function cl(){const e=vS().map(n=>{if(!n?.id)return null;const s=D(n.id);return{kind:"card",key:`card:${n.id}`,card:n,cardId:String(n.id),dueAt:s.dueAt?new Date(s.dueAt).getTime():0,progress:s}}).filter(Boolean),t=[...wS(),...bS()].sort(dl);return xr(Xf(e,t,ro))}function Xp(e=cl()){const t=Object.freeze(xr(e).map(n=>n.key).filter(Boolean));r.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString()}}function kS(){const e=cl();if(r.route!=="review")return e;r.reviewSession||Xp(e);const t=new Map(e.map(a=>[a.key,a])),n=Array.isArray(r.reviewSession?.keys)?r.reviewSession.keys:[],s=n.map(a=>t.get(a)).filter(Boolean);return s.length!==n.length||!s.length&&e.length?(Xp(e),e):xr(s)}function yS(){const e=Date.now();return ul().filter(t=>{const n=D(t.id),s=n.dueAt?new Date(n.dueAt).getTime():0;return n.state==="Learning"&&s>e}).length}function $S(){return ul().filter(e=>D(e.id).state!=="New").length}function Be(){if(ra&&aa!==null)return aa;const e=cl().length;return ra&&(aa=e),e}function dl(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?D(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?D(t.card.id):t.progress,a=ka(n),o=ka(s);return a!==o?o-a:e.kind!==t.kind?e.kind==="card"?-1:1:e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function ul(){const e=new Set,t=[];return Ke.forEach(n=>{vg(n).forEach(s=>{const a=String(s?.id||"");!a||e.has(a)||(e.add(a),t.push(s))})}),t.sort(ri)}function pl(){const e=cN();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!Me(n))return!1;const s=D(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(ri)}function ri(e,t){const n=D(e.id),s=D(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const c=ka(n),l=ka(s);if(c!==l)return l-c}return Number(e.id)-Number(t.id)}function jS(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=Kr(t.id),s=[t.kanji,R(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,hl(t),t.jlpt,Tl(t.lessonId),Jr(t),n.radical,f(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,Ie(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&SS(t.strokes,r.filters.strokes)})}function SS(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function gl(){const e=r.cards.length,t=r.cards.filter(s=>D(s.id).state!=="New").length,n=r.cards.filter(s=>D(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:pl().length,completion:E(n,e)}}function ml(){return Object.values(r.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function NS(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Qp(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function Vp(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[D(t.id).state]+=1}),e}function Yp(){const e={};return r.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),D(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function Vt(){const e=re();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function fl(e){return r.cards.filter(t=>t.lessonId===e)}function LS(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||Me(t))&&D(e.id).state==="New"})}function ne(e){const t=String(e||"");return t&&r.cards.find(n=>String(n.id)===t||String(n.kanji||"")===t||yp(n)===t)||null}function xS(e){return ne(e)}function CS(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function Kr(e){return r.kanjiMeta[String(e)]||{}}function ai(e){const t=r.kanjiHints[String(e)]||{};return{hint:f(t.hint||{})||Ee("leya","hint"),mnemonic:f(t.mnemonic||{})||""}}function AS(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),N(),C())}function jt(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function TS(e){const t=String(e||"");r.readingCheck.cardId!==t&&jt(t)}function Zp(){const e=ne(r.readingCheck.cardId||r.activeCardId);if(!e)return;nr(e,"reading_check"),dg();const t=RS(r.readingCheck.value),n=IS(e),s=t.some(l=>n.normalized.has(l)),a=t.length>0,o=a&&s?"correct":"wrong",c=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:c},P(o==="correct"?"answer_correct":"answer_wrong"),He(),requestAnimationFrame(()=>{const l=document.getElementById(`readingCheck-${e.id}`);l&&(l.focus(),"setSelectionRange"in l&&l.setSelectionRange(l.value.length,l.value.length))})}function IS(e){const t=Dr(e),n=[...An(t.onyomi.kana),...An(t.kunyomi.kana),...An(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(eg).filter(Boolean))}}function RS(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(eg).filter(Boolean)}function eg(e){const t=tg(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return _S(t).trim()}function tg(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function _S(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=MS(t.slice(-1));continue}t+=n}return t}function MS(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function ng(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const sg={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},rg={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Dr(e){const t=ng(e);if(t&&t.readings){const a=t.readings,o=ii(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),c=ii(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||c.kana)return{onyomi:o,kunyomi:c}}const n=ii(e?.onyomi,e?.onyomi_romaji),s=ii(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function An(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function ii(e,t="",n=""){const s=An(e).length?An(e):An(n),a=An(t),o=s.map((c,l)=>({kana:Q(c),romaji:PS(c,a[l])})).filter(c=>c.kana||c.romaji);return{kana:o.map(c=>c.kana).filter(Boolean).join(" / "),romaji:o.map(c=>c.romaji).filter(Boolean).join(" / ")}}function PS(e,t){const n=ag(e);return n?t&&ig(t)===ig(n)?t:n:t||""}function ag(e){const t=[...ES(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],c=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=KS(n);u&&(n+=u);continue}let l="";const d=o+c;if(rg[d])l=rg[d],a+=1;else if(sg[o])l=sg[o];else if(/[a-zA-Z0-9]/u.test(o))l=o.toLowerCase();else{s=!1;continue}if(s){const u=l.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=l}return n}function ES(e){return tg(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function KS(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function ig(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function og(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function oi(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function hl(e){const t=Dr(e);return[`${oi("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${oi("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function vl(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return cg(t)||lg(e)}function lg(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=DS(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function cg(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function DS(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function FS(e){return!!(vl(e)||wl(e))}function wl(e){if(!e)return"";const t=Dr(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function OS(e){const t=Dr(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Ms(e,t=""){const n=jL(OS(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function BS(e){return Ms(e).length>0}function US(e){return An(e)[0]||String(e||"").trim()}function bl(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-Hs);if(e>0){window.setTimeout(bl,e);return}const t=ne(r.activeCardId);if(!t)return;const n=Ms(t).map(o=>`${o.kind}:${o.kana}`).join("|")||wl(t),s=cg(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const a=`${r.route}:${t.id}:${n||s}`;a!==nc&&(nc=a,ug(t,{silent:!0}))}function dg(){kl(),"speechSynthesis"in window&&window.speechSynthesis.cancel()}function kl(){At&&(At.pause(),At.currentTime=0,At=null)}function ug(e,t={}){let n=null;const s=()=>(n||(n=pg(e,t)),n);return gg(e,{kind:"cycle",silent:t.silent,fallback:s})?Promise.resolve(!0):s()}function pg(e,t={}){const n=vl(e);return n?(kl(),At=new Audio(n),At.preload="auto",At.onended=()=>{At=null},At.onerror=()=>{t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:n})},At.play().then(()=>!0).catch(s=>(t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:n,error:s}),!1))):Promise.resolve(!1)}function gg(e,t={}){kl();let n=null;const s=typeof t.fallback=="function"?()=>(n||(n=t.fallback()),n):null,a=Q(t.text||""),o=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${o}`,l=Ms(e);let d=null;if(!a){const v=SL(l,sc.get(c)??-1,o);d=v.item,sc.set(c,v.cursor)}const u=a||d?.kana||US(wl(e));if(!NL(u,{onError:v=>{t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:v}),s?.()}}))return s?.(),!s&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:lg(e)}),!1;const h=t.label||(d?tl(d):"TTS");return t.silent||J(`${e?.kanji||""} ${h}: ${u}`.trim()),!0}function GS(e,t){J(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Me(e){return!!e}function li(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function mg(e){if(!e||!Me(e))return"locked";const t=fl(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=D(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(a=>{const o=D(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function yl(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function $l(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function JS(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g($l(e))}"></span>`}function zS(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${yl(e)}">${i($l(e))}</span>`}function Yt(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function St(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function ns(e){const t=String(e||"").toUpperCase();return t==="N5"?Z():t==="N4"?W():t==="N3"?H():t==="N2"?q():t==="N1"?ee():null}function HS(e,t,n="open"){const s=V(e),a=String(t||"");if(!s||!a)return!1;const o=ns(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function qS(e,t){const n=V(e),s=String(t||"");if(!n||!s)return!1;const a=ns(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function Fr(e,t="open"){var s;const n=V(e);return!n||((s=r.progress).viewedReadingLevels||(s.viewedReadingLevels={}),r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function WS(e){const t=V(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function jl(e){const t=St(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function fg(e){const t=String(e||"").toUpperCase(),n=ns(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const a=St(t)?.lessonCount||(t==="N5"?10:0);let o=0;if(t==="N5"){o=Xn();const c=Object.keys(n.studiedKanji||{}).length;if(o>=10&&c>=80||o>=a)return!0}else if(o=Object.keys(n.completedLessons||{}).length,o>=a)return!0;return!1}function pt(e){const t=String(e||"").toUpperCase();if(Ke.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!St(t))return t==="N5";const s=jl(t);return s.length?s.every(a=>fg(a)):!0}function hg(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function Zt(e){const t=jl(e);return t.length?p()==="ru"?`Откроется после завершения ${hg(t)}.`:`Unlocks after completing ${hg(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function Or(e){const t=V(e);if(!t)return[];const n=St(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),c=s.filter(d=>!o.has(d.id)),l=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...c].slice(0,l||s.length)}function Sl(e){const t=V(e);if(!t)return"";const n=Or(t);if(!n.length)return"";const s=a0(t);if(s?.lessonId&&ui(t,s.lessonId))return s.lessonId;const a=ns(t)?.currentLessonId||"";if(a&&ui(t,a))return a;const o=t==="N5"?Z().completedLessons||{}:t==="N4"?W().completedLessons||{}:t==="N3"?H().completedLessons||{}:t==="N2"?q().completedLessons||{}:r.progress.lessonCompletions||{},c=n.filter(l=>o[l.id]);return c.length?(c.sort((l,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[l.id]||"")||0;return u!==m?u-m:(d.order||0)-(l.order||0)}),c[0]?.id||n[0]?.id||""):n[0]?.id||""}function ci(e,t=""){const n=V(e);if(!n||!Yt(n))return;if(!pt(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,ze("textbooks",null,n),J(Zt(n));return}const s=r.route,a=String(t||"")||Sl(n),o=["N5","N4","N3","N2"].includes(n),c=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&gt(n,a,"open_jlpt"),jt(),tt(c),ja(),C()}function XS(e){return e?Yt(e.jlpt):null}function Ps(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function ss(){return r.progress.jlptLessonPractice=Bc(us().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function Es(e){if(!e?.drills?.length)return null;const t=ss(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function QS(e){const t=Ps(r.activeJlptLesson),n=Es(t);if(!n||!n.tiles[e])return;const s=ss(),a=s.selected[n.id]||[],o=n.blanks.flatMap(c=>c.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,N(),C())}function VS(){const e=Es(Ps(r.activeJlptLesson));if(!e)return;const t=ss();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,N(),C()}function YS(){const e=Es(Ps(r.activeJlptLesson));if(!e)return;const t=ss();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,N(),C()}function ZS(){const e=Es(Ps(r.activeJlptLesson));if(!e)return;const t={...Ll(),...Nl()},n=ss(),s=n.selected[e.id]||[],a=e.blanks.flatMap(l=>l.answer||[]),o=a.reduce((l,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&l.push(u),l},[]),c=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:c,wrongIndexes:o,message:c?t.correct:t.wrong},c&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),G(8,1,`jlpt_practice:${e.id}`),P("answer_correct")):c||P("answer_wrong"),N(),C()}function e0(){var o,c,l,d,u,m;const e=Ps(r.activeJlptLesson),t=Es(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],a=ss();a.activeIds[e.jlpt]=s.id,(o=a.selected)[c=s.id]||(o[c]=[]),(l=a.checked)[d=s.id]||(l[d]=!1),(u=a.results)[m=s.id]||(u[m]=null),N(),C()}function vg(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function Nl(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function Ll(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function di(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=Br(n,t)&&n<100;)s-=Br(n,t),n+=1;return n}function en(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=Br(t,e)&&t<100;)n-=Br(t,e),t+=1;const s=Br(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:E(n,s)}}function Br(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function t0(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${re()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),J(A("export"))}function Tn(e,t={}){try{return typeof window.ym!="function"?!1:(window.ym(xt,"reachGoal",e,t),!0)}catch(n){return console.warn("Metric goal failed.",n),!1}}function n0(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function V(e){const t=String(e||"").toUpperCase();return Ke.includes(t)?t:""}function Ue(e){if(!e||typeof e!="object")return null;const t=V(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function s0(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=V(n),o=Ue({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function rs(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function ui(e,t){const n=V(e),s=String(t||"");return!n||!s?!1:Or(n).some(a=>a.id===s)}function r0(e,t){const n=V(e),s=String(t||"");if(!n||!s)return!!n;const a=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return a.has(s)||n!=="N5"&&o.has(s)?!0:Or(n).some(c=>c.id===s)}function wg(e){return Or(e)[0]?.id||""}function a0(e=""){const t=V(e);if(t){const a=Ue(r.progress.lastOpenedJlptLessons?.[t]||null)||(Ue(r.progress.lastOpenedJlptLesson||null)?.level===t?Ue(r.progress.lastOpenedJlptLesson||null):null);return a&&ui(t,a.lessonId)?a:null}const n=[Ue(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>Ue(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>ui(a.level,a.lessonId))||null}function i0(e=""){const t=V(e);if(t)return Ue(r.progress.lastOpenedJlptLessons?.[t]||null)||(Ue(r.progress.lastOpenedJlptLesson||null)?.level===t?Ue(r.progress.lastOpenedJlptLesson||null):null);const n=[Ue(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>Ue(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function o0(e){const t=V(e);if(!t)return"";const n=Ke.indexOf(t);return n>=0&&n<Ke.length-1?Ke[n+1]:""}function gt(e,t,n="open"){var h;const s=V(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},c=Ue(r.progress.lastOpenedJlptLessons?.[s]||null),l=Ue(r.progress.lastOpenedJlptLesson||null);(h=r.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=HS(s,a,n),u=ns(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!c||c.lessonId!==a||c.level!==s||l?.lessonId!==a||l?.level!==s||d)&&N(),o}function Nt(e,t="btn ghost"){const n=V(e),s=o0(n);if(!n||!s)return"";const a=wg(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(a)}">${i(o)}</button>`}function tn(){return V(r.activeJlptLesson)||V(r.activeTextbookLevel)||V(r.jlptLessons.find(e=>pt(e.jlpt))?.jlpt)||V(r.jlptLessons[0]?.jlpt)||"N5"}function l0(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(V(t.level||r.activeTextbookLevel||tn())||tn())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(V(t.level||r.activeJlptLesson||tn())||tn())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function c0(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=l0(e,t),n.href}function d0(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=V(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},c=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${c} ${s}`:c}function u0(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=V(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?St(s):null,o=t.lesson||(s?Yt(s):null),c=p()==="ru";if(n==="textbooks")return c?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const l=f(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return c?`${l||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${l||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const l=f(o?.title||{}),d=f(o?.summary||{});return c?`${s?`${s} · `:""}${l||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${l||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?c?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?c?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?c?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?v0(t.reward||r.rewardModal||{}):"Flash Kanji."}function p0(){return p()==="ru"?"Поделиться":"Share"}function Ks(e=r.route,t={}){const n=V(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||p0();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${g0()}</span>
        <span>${i(a)}</span>
      </button>
    `}function g0(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function bg(e){return e==="youtube"?`
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
    `}async function m0(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await y0(e.text,e.url,n)?"copy":"failed"}async function f0(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:d0(n,t),text:u0(n,t),url:c0(n,t),files:[]};if(n==="achievement"||s){const o=await w0(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function kg(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),Tn("share_opened",{section:n,level:V(s.level)||""});const a=await f0(n,s),o=await m0(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(Tn("share_completed",{section:n,method:a.files?.length?"file":"web_share"}),!0):o==="copy"?(Tn("share_link_copied",{section:n}),Tn("share_completed",{section:n,method:"copy"}),!0):(o==="abort"||J(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function h0(){await kg("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function v0(e={}){const t=A("shareFallback"),n=e.level||r.progress.level,s=en(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${A("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function w0(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;b0(a,1200,630);const o=e.level||r.progress.level,c=en(),l=e.type==="level"?`${c.current}/${c.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=Va(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,v]=await Promise.all([yg("assets/logo.webp"),m?yg(m):Promise.resolve(null)]);return h&&$g(a,h,58,48,330,116),v&&$g(a,v,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(A("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${A("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${l} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),k0(s)}function b0(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function yg(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function $g(e,t,n,s,a,o){const c=Math.min(a/t.naturalWidth,o/t.naturalHeight),l=t.naturalWidth*c,d=t.naturalHeight*c;e.drawImage(t,n+(a-l)/2,s+(o-d)/2,l,d)}function k0(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function y0(e,t,n="shareLinkCopied"){const s=await jg(`${e}
${t}`);return J(s?A(n):e),s}async function jg(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function $0(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=Ac(us(),n.progress||n),er(),n.customization&&(r.customization={...Bn(),...n.customization,selected:{...Bn().selected,...n.customization.selected||{}}},ds()),da(),Ds(),N(),nn(),J(A("import")),C()}catch(n){console.error(n),J("Invalid JSON")}finally{e.target.value=""}}function j0(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=us(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,er(),Ds(),N(),C()}function S0(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,nn(),N(),C()}function N0(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,N(),C()}function Sg(){r.progress.settings.sound=!ln(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,Ds(),xl(),N(),J(r.progress.settings.sound?"в™Є":"Г—")}function L0(){Sg()}function Ur(){return window.FlashKanjiSound||null}function x0(){try{Ur()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function Ds(){const e=Ur();!e||!r.progress?.settings||(e.setSoundEnabled?.(ln(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(gi()))}function pi(){return ln(r.progress?.settings?.sound,!0)}function xl(){const e=xe('[data-action="sound"]');if(!e)return;const t=ln(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=C0(t)}function C0(e){return e?`
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
      `}function A0(e){return e?`
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
      `}function T0(){const e=xe('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||Hr(),n=!!(t.docked||r.notificationPromptVisible||wi("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=A0(s)}function Cl(){const e=xe('[data-action="toggle-header-socials"]');if(!e)return;const t=Al(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function Ng(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),Cl())}function Al(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function gi(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?de(e,0,1):.75}function I0(e){const t=de(Number(e),0,1);r.progress.settings.uxVolume=t,Ds(),N()}function P(e){if(!pi())return!1;const t=()=>{try{if(!!Ur()?.playSound?.(e)){Hs=Date.now();return}Rl(String(e))}catch(n){console.warn("UX sound failed.",n),Rl(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function nn(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=qt();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",R0(e?.file||"assets/bg/bg_study_hub.webp"));const t=Xv();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function R0(e){const t=String(e).replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function A(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function f(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function _0(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Gr(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function M0(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function Tl(e){const t=r.lessons.find(n=>n.id===e);return t?Gr(t):""}function R(e){return Pe(e,p())}function Pe(e,t=p()){if(!e)return"";const n=ng(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Jr(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Ie(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||Il(n.romaji)===Il(e.romaji));return t?.translation_en?t.translation_en:om[Il(e.romaji)]||e.translation||""}function Il(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Fs(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Ee(e,t){const n=e==="eva"?P0(t):"";if(n)return n;const s=Fs(e).dialogs?.[t]||Fs(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return Ge(a)}function P0(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=E0(t),s=[...r.evaAutonomyLines||[],...Aa()].filter(c=>{const l=f(c?.text||{});if(!l)return!1;const d=Array.isArray(c.tags)?c.tags:[];if(!(n.includes(c.category)||d.some(h=>n.includes(h))))return!1;const m=Lg(l);return m.length>=12&&m.length<=132}),a=s.filter(c=>!_i.includes(c.id)),o=Ge(a.length?a:s);return o?(o.id&&(_i=[o.id,..._i.filter(c=>c!==o.id)].slice(0,18)),Lg(f(o.text||{}))):""}function E0(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function Lg(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function mi(e){const t=xg(e);return`<span class="pill ${t}">${i(im[t]||"New")}</span>`}function xg(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function Cg(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function K0(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function D0(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function fi(){try{return ta||(ta=new(window.AudioContext||window.webkitAudioContext)),ta.state==="suspended"&&ta.resume().catch(()=>null),ta}catch(e){return console.warn("Audio context unavailable.",e),null}}function F0(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function Rl(e){const t=fi();if(!t)return!1;try{const n=F0(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const c=t.createOscillator(),l=t.createGain();c.type=n.type,c.frequency.value=a;const d=s+n.interval*o;l.gain.setValueAtTime(1e-4,d),l.gain.exponentialRampToValueAtTime(n.peak,d+.02),l.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),c.connect(l).connect(t.destination),c.start(d),c.stop(d+n.duration+.02)}),Hs=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=Rl;function O0(){const e=()=>{const t=fi();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function hi(e){if(r.progress.settings.sound){if(Ur()){P(e==="again"?"answer_wrong":"answer_correct");return}try{const t=fi();if(!t)return;Hs=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function B0(){if(r.progress.settings.sound)try{const e=fi();if(!e)return;Hs=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const c=t+s*.08;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(.12,c+.02),o.gain.exponentialRampToValueAtTime(1e-4,c+.24),a.connect(o).connect(e.destination),a.start(c),a.stop(c+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function U0(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function J(e){const t=xe("#toast");t.textContent=e,t.hidden=!1,clearTimeout(rc),rc=window.setTimeout(()=>{t.hidden=!0},2400)}function Ag(){return`
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
      </section>`}function G0(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function J0(){try{[Lt,Js,ea,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function z0(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function H0(e){try{const t=Number(sessionStorage.getItem(Zr)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Zr,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&J0(),await z0();try{localStorage.removeItem(Lt),localStorage.removeItem(Js),localStorage.removeItem(ea),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function q0(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(Js,`${_}:done`)}catch(a){console.warn("Cannot save PWA cache reset marker.",a)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),a=await navigator.serviceWorker.register(s.href);if(!a||typeof a.update!="function")return;W0(a),await a.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function W0(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function vi(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(j)||localStorage.getItem(S);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(j)||localStorage.setItem(j,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function _l(){try{localStorage.setItem(j,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function X0(e){e.preventDefault(),an=e,r.progress&&r.i18n&&V0()}async function Q0(){if(Tn("pwa_install_clicked",{available:!!an,ios:Os()}),zr()){Pl();return}if(!an){r.pwaInstallHelpVisible=!0,He();return}const e=an;an=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Pl();return}El()}catch(t){console.warn("PWA install prompt failed.",t),El()}}function zr(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function Ml(){const e=r.pwaInstallPrompt||vi();if(zr()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||Rn(t,re())<1?!1:!!an||Os()}function V0(){Ml()&&(Tn("pwa_prompt_shown",{source:an?"browser":"ios"}),P("notification_soft"),C())}function Pl(){r.pwaInstallPrompt={...vi(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,_l(),Tn("pwa_installed",{platform:Os()?"ios":"browser"}),_g(),r.progress&&r.i18n&&C()}function El(){const e=r.pwaInstallPrompt||vi(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:Y0(t),neverShow:t>=5,installed:!1},_l(),C()}function Y0(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function Z0(){!zr()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},_l())}function Os(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function Tg(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function Hr(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(I);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function In(){try{localStorage.setItem(I,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function qr(){clearTimeout(Ci),Ci=0}function eN(){qr(),r.notificationPromptVisible&&(Ci=window.setTimeout(()=>{r.notificationPromptVisible&&Ig()},5e3))}function Ig(){qr(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},In(),C())}function Rg(){return zr()||!!r.pwaInstallPrompt?.installed}function wi(e="usage"){const t=r.notificationPrompt||Hr();return!(!("Notification"in window)||t.neverShow||t.enabled||!Rg()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-Ei<2*60*1e3)}function bi(e="usage"){return wi(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},In(),P("notification_soft"),eN(),C(),!0):("Notification"in window&&Notification.permission==="granted"&&Mg(),!1)}function _g(){if(clearTimeout(ic),!Rg())return;const e=Math.max(0,2*60*1e3-(Date.now()-Ei));ic=window.setTimeout(()=>bi("usage"),e)}async function tN(){if(r.notificationPromptVisible=!1,qr(),!("Notification"in window)){ki();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Mg(),J(Eg().enabled),He();return}ki()}catch(e){console.warn("Notification permission failed.",e),ki()}}function Mg(){!("Notification"in window)||Notification.permission!=="granted"||(qr(),r.notificationPrompt={...Hr(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},In(),Kl())}function ki(){const e=r.notificationPrompt||Hr(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,qr(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:nN(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},In(),He()}function nN(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function Kl(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,In(),Mi.forEach(e=>clearTimeout(e)),Mi.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>Pg(e.type,sN(e.hour,e.minute))),oN())}function Pg(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await rN(e),Pg(e,lN(t,1))},n);Mi.set(e,s)}function sN(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function rN(e){if(!aN(e))return!1;const t=iN(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),P(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=re(),In(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function aN(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===re())return!1;if(e==="review")return Be()>0;if(e==="daily_bonus"){const t=va(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=re()&&!r.progress.dailyBonuses[re()]}return e==="lesson"?LS().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function iN(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function oN(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,In()}catch{r.notificationPrompt.periodicSync=!1,In()}}function Eg(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function se(e){return{...e,history:[...e.history||[]]}}function lN(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function cN(){const e=new Date;return e.setHours(23,59,59,999),e}function re(){return Dl(new Date)}function Dl(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Fl(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function Rn(e,t){return Math.round((Fl(t)-Fl(e))/864e5)}function Kg(e,t){const n=Fl(e);return n.setDate(n.getDate()+t),Dl(n)}function dN(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Dl(s)})}function _n(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function E(e,t){return t?de(Math.round(e/t*100),0,100):0}function de(e,t,n){return Math.max(t,Math.min(n,e))}function yi(e,t){const n=10**t;return Math.round(e*n)/n}function Ge(e){return e[Math.floor(Math.random()*e.length)]}function Mn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function Wr(e,t){return String(e)===String(t)?"selected":""}function uN(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Ug(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Dg(e="",t=""){const n=String(e||"").trim().toUpperCase(),s=String(t||"").trim(),a=n?`#textbooks/${encodeURIComponent(n)}`:"#textbooks/";return s?`${a}/${encodeURIComponent(s)}`:a}function tt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${uN()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function $i(){const e=Vg(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash?e:Ug(location.pathname||"/")?En(location.hash):e.status==="not-found"?e:we("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function Fg(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function Xr(e){const t=e.route,n=e.status==="valid"?e.params:{};r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,r.kanjiPageId=t==="kanji"&&n.cardId||null,r.activeTextbookLevel=t==="textbooks"&&n.level||null,r.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,r.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"&&n.view||Ut,r.activeLearnNodeId=t==="learn"&&r.activeLearnView===Ct&&n.targetId||null,r.activeLearnLegacyLessonId=t==="learn"&&r.activeLearnView===Gt&&n.targetId||null}function Ol(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!xS(t.cardId))return!r.deferredDataLoaded&&CS(t.cardId)?e:we("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||"",s=t.subroute||"";if(n&&!St(n)||n&&s&&!r0(n,s))return we("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!Yt(t.level)||e.route==="learn"&&(t.view===Ct&&!Hn(t.targetId)||t.view===Gt&&!r.lessons.some(n=>n.id===t.targetId))?we("hash","entity-not-found",e.raw,e.segments,e.locale):e}function pN(){return En(location.hash).raw}function gN(){const e=En(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function mN(){const e=En(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.level||""}function fN(){const e=En(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function hN(){const e=En(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function vN(){return Zn().filter(e=>Bs(e.id)).length}function Bs(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
