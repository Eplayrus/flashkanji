(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))C(y);new MutationObserver(y=>{for(const I of y)if(I.type==="childList")for(const T of I.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&C(T)}).observe(document,{childList:!0,subtree:!0});function j(y){const I={};return y.integrity&&(I.integrity=y.integrity),y.referrerPolicy&&(I.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?I.credentials="include":y.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function C(y){if(y.ep)return;y.ep=!0;const I=j(y);fetch(y.href,I)}})();const XL="modulepreload",QL=function(w,b){return new URL(w,b).href},Uf={},Jf=function(b,j,C){let y=Promise.resolve();if(j&&j.length>0){const T=document.getElementsByTagName("link"),P=document.querySelector("meta[property=csp-nonce]"),te=P?.nonce||P?.getAttribute("nonce");y=Promise.allSettled(j.map(ce=>{if(ce=QL(ce,C),ce in Uf)return;Uf[ce]=!0;const Be=ce.endsWith(".css"),as=Be?'[rel="stylesheet"]':"";if(!!C)for(let dn=T.length-1;dn>=0;dn--){const Ks=T[dn];if(Ks.href===ce&&(!Be||Ks.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${ce}"]${as}`))return;const Ct=document.createElement("link");if(Ct.rel=Be?"stylesheet":XL,Be||(Ct.as="script"),Ct.crossOrigin="",Ct.href=ce,te&&Ct.setAttribute("nonce",te),document.head.appendChild(Ct),Be)return new Promise((dn,Ks)=>{Ct.addEventListener("load",dn),Ct.addEventListener("error",()=>Ks(new Error(`Unable to preload CSS for ${ce}`)))})}))}function I(T){const P=new Event("vite:preloadError",{cancelable:!0});if(P.payload=T,window.dispatchEvent(P),!P.defaultPrevented)throw T}return y.then(T=>{for(const P of T||[])P.status==="rejected"&&I(P.reason);return b().catch(I)})},VL="ru",YL={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},ud={defaultLocale:VL,locales:YL},ZL=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],cd="not-found",Ar=ud.defaultLocale,eA=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),nh=/^n[1-5]$/i,tA=/^(?:hiragana|katakana)$/i,nA=/^[A-Za-z0-9_-]+$/,sA=/^[\p{Letter}\p{Number}_-]+$/u,rA=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,aA=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,iA=new Map(Object.entries(ud.locales).map(([w,b])=>[String(b.urlSegment).toLowerCase(),w]));function Ne(w,b,j,C,y={},I=Ar,T={}){return{status:"valid",source:w,route:b,locale:I,params:y,raw:j,segments:C,...T}}function me(w,b,j,C=[],y=Ar,I){return{status:"not-found",source:w,route:cd,locale:y,params:{},raw:j,segments:C,reason:b,canonicalPath:I}}function sh(w){return!!(w&&ZL.includes(w))}function td(w){const b=String(w||"").trim().toUpperCase();return nh.test(b)?b:""}function rh(w){const b=String(w||"").trim().toLowerCase();return tA.test(b)?b:""}function ah(w){try{return{ok:!0,value:decodeURIComponent(w)}}catch{return{ok:!1}}}function pd(w){return w.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function Ue(w,b,j=pd(b)){return me("hash",w,b,j)}function nd(w){return nA.test(w)}function oA(w){return sA.test(w)}function rs(w){const b=String(w||"").replace(/^#/,"").trim(),j=ah(b);if(!j.ok)return Ue("invalid-parameter",b,[]);const C=j.value.replace(/^\/+|\/+$/g,""),y=pd(C),I=(y[0]||"home").toLowerCase();if(!y.length)return Ne("hash","home",C,y);if(I==="jlpt"){if(y.length<2||y.length>3)return Ue("unknown-route",C,y);const T=td(y[1]);if(!T)return Ue("invalid-parameter",C,y);const P=y[2]||"";return P&&!nd(P)?Ue("invalid-parameter",C,y):Ne("hash","textbooks",C,y,{level:T,subroute:P,legacyRoute:"jlpt"})}if(I==="textbooks"){if(y.length>3)return Ue("unknown-route",C,y);if(y.length===1)return Ne("hash","textbooks",C,y);const T=td(y[1]),P=rh(y[1]);if(!T&&!P)return Ue("invalid-parameter",C,y);const te=y[2]||"";return te&&!nd(te)?Ue("invalid-parameter",C,y):Ne("hash","textbooks",C,y,P?{course:P,subroute:te}:{level:T,subroute:te})}if(I==="jlpt-lesson"){if(y.length!==2)return Ue("unknown-route",C,y);const T=td(y[1]);return T?Ne("hash","jlpt-lesson",C,y,{level:T}):Ue("invalid-parameter",C,y)}if(I==="kanji"){if(y.length!==2)return Ue("unknown-route",C,y);const T=y[1];return oA(T)?Ne("hash","kanji",C,y,{cardId:T}):Ue("invalid-parameter",C,y)}if(I==="learn"){if(y.length===1)return Ne("hash","learn",C,y,{view:"map"});if(y.length!==3)return Ue("unknown-route",C,y);const T=y[1].toLowerCase(),P=y[2];return!["lesson","legacy"].includes(T)||!nd(P)?Ue("invalid-parameter",C,y):Ne("hash","learn",C,y,{view:T,targetId:P})}return eA.has(I)?y.length!==1?Ue("unknown-route",C,y):Ne("hash",I,C,y):(sh(I),Ue("unknown-route",C,y))}function lA(w){return String(w||"/").split(/[?#]/,1)[0]||"/"}function cA(w){const b=lA(w),j=ah(b);if(!j.ok)return{ok:!1,raw:b};const C=j.value.replace(/\/{2,}/g,"/"),y=C.startsWith("/")?C:`/${C}`,I=y===""?"/":y;return{ok:!0,path:I,segments:pd(I)}}function dA(w){return iA.get(w.toLowerCase())||null}function Es(w,b="/"){return`/${ud.locales[w].urlSegment}${b.startsWith("/")?b:`/${b}`}`}function ih(w){const b=cA(w);if(!b.ok)return me("pathname","invalid-parameter",b.raw,[],null);const{path:j,segments:C}=b,y=j;if(j==="/"||/^\/index\.html$/i.test(j))return Ne("pathname","home",y,C,{},Ar,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(j))return Ne("pathname","home",y,C,{},Ar,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(j))return Ne("pathname","download",y,C,{},Ar,{kind:"download",canonicalPath:"/download/"});if(!C.length)return Ne("pathname","home",y,C,{},Ar,{kind:"app-shell",canonicalPath:"/"});const I=dA(C[0]);if(!I){const P=aA.test(C[0])?"unknown-locale":"unknown-route";return me("pathname",P,y,C,null)}if(C.length===1)return Ne("pathname","home",y,C,{},I,{kind:"localized-home",canonicalPath:Es(I,"/")});const T=C[1].toLowerCase();if(T==="download"&&C.length===2)return Ne("pathname","download",y,C,{},I,{kind:"download",canonicalPath:Es(I,"/download/")});if(T==="textbooks"){if(C.length===2)return Ne("pathname","textbooks",y,C,{},I,{kind:"textbooks",canonicalPath:Es(I,"/textbooks/")});if(C.length===3){const P=C[2].toLowerCase(),te=rh(P);return te?Ne("pathname","textbooks",y,C,{course:te},I,{kind:"kana-course",canonicalPath:Es(I,`/textbooks/${te}/`)}):nh.test(P)?Ne("pathname","textbooks",y,C,{level:P.toUpperCase()},I,{kind:"textbook-level",canonicalPath:Es(I,`/textbooks/${P}/`)}):me("pathname","invalid-parameter",y,C,I)}return me("pathname","unknown-route",y,C,I)}if(T==="kanji"){if(C.length===2)return Ne("pathname","dictionary",y,C,{},I,{kind:"kanji-hub",canonicalPath:Es(I,"/kanji/")});if(C.length===3){const P=C[2].toLowerCase();return rA.test(P)?Ne("pathname","kanji",y,C,{slug:P},I,{kind:"kanji-page",canonicalPath:Es(I,`/kanji/${P}/`)}):me("pathname","invalid-parameter",y,C,I)}return me("pathname","unknown-route",y,C,I)}return me("pathname","unknown-route",y,C,I)}function Gf(w){const b=ih(w);return b.status==="valid"&&(b.kind==="app-shell"||b.kind==="legacy-index")}function uA(w){const b=()=>w(rs(window.location.hash));return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)}function pA(){let w=0,b=null;return{begin(j){b?.abort(),b=new AbortController;const C=++w,y=b;return{route:j,token:C,signal:y.signal,isCurrent:()=>w===C&&!y.signal.aborted}},abort(){b?.abort()}}}const Ba=[5,60,12*60,24*60,2*24*60,4*24*60],sd={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function De(w){const b=w&&typeof w=="object"?w:{},j=mA(b.state??b.stage),C=fA(b.dueAt??b.nextReview),y=ss(b.reviewCount??b.reviews,0),I=ss(b.correct,0),T=ss(b.wrong,0),P={...b,state:j,dueAt:C,reviewCount:y,intervalDays:ss(b.intervalDays,0),easeFactor:ss(b.easeFactor,2.5),srsStep:ss(b.srsStep,j==="New"?-1:0),lapses:ss(b.lapses,0),correct:I,wrong:T,successRate:ss(b.successRate,I+T?Math.round(I/(I+T)*100):0),history:Array.isArray(b.history)?b.history.slice(-120):[]};return delete P.nextReview,delete P.reviews,delete P.stage,delete P.lastReview,P}function be(w,b,j=b,C=new Date){const y=De(w),I=gA(y,b),T={...y,history:[...y.history]};let P=y.srsStep,te=y.easeFactor;I==="again"?(P=0,te=Math.max(1.3,te-.2),T.state="Learning",T.wrong+=1,y.state!=="New"&&(T.lapses+=1)):I==="hard"?(P=Math.max(1,P),te=Math.max(1.3,te-.15),T.correct+=1):I==="easy"?(P=P<0?2:P+2,te=Math.min(3.2,te+.15),T.correct+=1):(P=P<0?0:P+1,T.correct+=1);const ce=hA(P)/1440;return I!=="again"&&(T.state=ce<1?"Learning":"Review"),T.correct>=8&&ce>=30&&(T.state="Mastered"),T.srsStep=P,T.easeFactor=Hf(te,2),T.intervalDays=Hf(ce,6),T.dueAt=new Date(C.getTime()+ce*864e5).toISOString(),T.reviewCount+=1,T.successRate=Math.round(T.correct/Math.max(T.correct+T.wrong,1)*100),T.lastReviewedAt=C.toISOString(),T.lastRating=sd[j]||sd[I],T.lastDecision=sd[I],T.history=[...T.history,{at:C.toISOString(),rating:T.lastRating,decision:T.lastDecision,from:y.state,to:T.state,intervalDays:ce,srsStep:P}].slice(-120),T}function rd(w,b=Date.now()){const j=new Map;for(const I of w){if(!I.cardId||I.state==="New")continue;const T=I.dueAt?Date.parse(I.dueAt):Number.NaN;Number.isFinite(T)&&T<=b&&!j.has(I.cardId)&&j.set(I.cardId,{...I})}const C=Object.freeze([...j.values()].sort((I,T)=>Date.parse(I.dueAt||"")-Date.parse(T.dueAt||""))),y=new Set;return{initial:C,complete(I){y.add(I)},get remaining(){return C.filter(I=>!y.has(I.cardId))},get remainingCount(){return C.length-y.size}}}function gA(w,b){return b==="again"||b==="forgot"?"again":b!=="remember"?b:w.state==="New"?"good":w.state==="Learning"?w.successRate>=70||w.correct>=2?"good":"hard":w.successRate>=88&&w.correct>=5&&w.lapses<=1?"easy":w.successRate<70||w.lapses>Math.max(1,Math.floor(w.correct/3))?"hard":"good"}function mA(w){const b=String(w||"new").toLowerCase();return b.includes("master")?"Mastered":b.includes("learn")?"Learning":b.includes("review")?"Review":"New"}function fA(w){return typeof w!="string"||!Number.isFinite(Date.parse(w))?null:new Date(w).toISOString()}function ss(w,b){const j=Number(w);return Number.isFinite(j)&&j>=0?j:b}function Hf(w,b){const j=10**b;return Math.round(w*j)/j}function hA(w){return w<Ba.length?Ba[Math.max(0,w)]:Ba[Ba.length-1]*2**(w-(Ba.length-1))}const oh="flashKanji.progress.v2",vA="flashKanji.progress.v1";function bA(w=localStorage){const b=w.getItem(oh)||w.getItem(vA);if(!b)return null;try{const j=JSON.parse(b);if(!j||typeof j!="object")return null;const C=j;return C.progress&&typeof C.progress=="object"?C.progress:C}catch(j){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",j),null}}function wA(w){return!w||typeof w!="object"?{}:Object.fromEntries(Object.entries(w).map(([b,j])=>[b,De(j)]))}function kA(w,b=localStorage){try{return b.setItem(oh,JSON.stringify(w)),!0}catch(j){return console.warn("Flash Kanji could not save LocalStorage progress.",j),!1}}const yA=/[\/／,、;；\s]+/u,$A=/[\u30a1-\u30f6]/g,jA=/[()[\]{}.\-‐-―]/gu;function SA(w){return String(w||"").normalize("NFKC").replace($A,b=>String.fromCharCode(b.charCodeAt(0)-96))}function lh(w){return(Array.isArray(w)?w.join(" / "):String(w||"")).split(yA).map(j=>SA(j).replace(jA,"").trim()).filter(Boolean)}function CA(w){if(!w)return[];const b=[...Wf("onyomi","On",w.onyomi),...Wf("kunyomi","Kun",w.kunyomi)],j=new Set,C=b.filter(T=>{const P=T.kana;return!P||j.has(P)?!1:(j.add(P),!0)});if(C.length)return C;const y=lh(w.hiragana)[0];if(y)return[{kind:"hiragana",kana:y,label:"Kana"}];const I=String(w.kanji||"").trim();return I?[{kind:"kanji",kana:I,label:"Kanji"}]:[]}function NA(w,b=-1,j=""){const C=j&&j!=="cycle"?w.filter(I=>I.kind===j):w;if(!C.length)return{item:null,cursor:-1};const y=(Number(b)+1)%C.length;return{item:C[y],cursor:y}}function qf(w,b={}){const j=String(w||"").trim(),C=typeof window<"u"?window:void 0,y=b.synth||C?.speechSynthesis,I=b.Utterance||C?.SpeechSynthesisUtterance;if(!j||!y||!I)return!1;y.cancel();const T=new I(j);T.lang="ja-JP",T.rate=b.rate??.92,T.voice=xA(y),T.onstart=()=>b.onStart?.(),T.onend=()=>b.onEnd?.(),T.onerror=P=>b.onError?.(P);try{return y.speak(T),!0}catch(P){return b.onError?.(P),!1}}function Wf(w,b,j){return lh(j).map(C=>({kind:w,kana:C,label:b}))}function xA(w){const b=typeof w.getVoices=="function"?w.getVoices():[];return b.find(j=>/^ja[-_]?JP$/iu.test(j.lang))||b.find(j=>/^ja/iu.test(j.lang))||null}const ch=["hiragana","katakana"];function fe(w){return ch.includes(String(w||"").toLowerCase())}function dd(w){return String(w??"").normalize("NFKC").trim().replace(/\s+/gu," ").toLowerCase()}function LA(w,b){const j=dd(w);return j?(Array.isArray(b)?b:[]).some(y=>dd(y)===j):!1}function AA(){return{schema_version:1,content_version:"2026-08-kana-v1",settings:{showRomaji:!0},courses:{}}}function ad(w){const b=AA();if(!w||typeof w!="object")return b;const j=w,C=j.settings&&typeof j.settings=="object"?j.settings:{},y=j.courses&&typeof j.courses=="object"?j.courses:{},I={};for(const T of ch){const P=y[T]&&typeof y[T]=="object"?y[T]:{},te=P.review&&typeof P.review=="object"?P.review:{};I[T]={currentRoute:typeof P.currentRoute=="string"?P.currentRoute:"",lessons:Ga(P.lessons,_A),practices:Ga(P.practices,PA),finalTest:RA(P.finalTest),review:Object.fromEntries(Object.entries(te).map(([ce,Be])=>[ce,De(Be)])),writing:P.writing&&typeof P.writing=="object"?{...P.writing}:{},updatedAt:typeof P.updatedAt=="string"?P.updatedAt:null}}return{...b,...j,schema_version:1,content_version:"2026-08-kana-v1",settings:{...b.settings,showRomaji:typeof C.showRomaji=="boolean"?C.showRomaji:b.settings.showRomaji},courses:I}}function IA(w,b){var j;return(j=w.courses)[b]||(j[b]={currentRoute:"",lessons:{},practices:{},finalTest:dh(),review:{},writing:{},updatedAt:null}),w.courses[b]}function dh(){return{sections:{},completed:!1,passed:!1,latestScore:0,bestScore:0,score:0,total:0,updatedAt:null}}function TA(w,b,j=new Date){const C={},y={};let I=0;const T=w.items.length;for(const P of w.items){const te=String(b[P.number]??"");C[P.number]=te;const ce=LA(te,P.accepted_answers);y[P.number]=ce,ce&&(I+=1)}return{answers:C,correct:y,score:I,total:T,completed:T>0,passed:T>0&&I/T>=.8,updatedAt:j.toISOString()}}function id(w,b){const j=w.map(P=>b[P.id]).filter(Boolean),C=w.reduce((P,te)=>P+te.items.length,0),y=j.reduce((P,te)=>P+Number(te.score||0),0),I=j.reduce((P,te)=>P+Number(te.total||0),0),T=j.reduce((P,te)=>P+Math.max(Number(te.score||0),0),0);return{latestScore:y,bestScore:T,completed:C>0&&I>=C,passed:C>0&&y/C>=.8}}function od(w,b,j=new Date){return be(w,b,b,j)}function RA(w){const b=w&&typeof w=="object"?w:{},j=jo(b),C=Ga(b.sections,jo);return{...dh(),sections:C,completed:!!(b.completed||j.completed),passed:!!(b.passed||j.passed),latestScore:Number(b.latestScore||j.score||0),bestScore:Number(b.bestScore||j.score||0),score:Number(b.score||b.latestScore||j.score||0),total:Number(b.total||j.total||0),updatedAt:typeof b.updatedAt=="string"?b.updatedAt:j.updatedAt}}function jo(w){const b=w&&typeof w=="object"?w:{};return{answers:b.answers&&typeof b.answers=="object"?{...b.answers}:{},correct:b.correct&&typeof b.correct=="object"?{...b.correct}:{},score:Number(b.score||0),total:Number(b.total||0),completed:!!b.completed,passed:!!b.passed,updatedAt:typeof b.updatedAt=="string"?b.updatedAt:null}}function _A(w){const b=w&&typeof w=="object"?w:{};return{exercises:Ga(b.exercises,jo),completed:!!b.completed,passed:!!b.passed,latestScore:Number(b.latestScore||0),bestScore:Number(b.bestScore||0),updatedAt:typeof b.updatedAt=="string"?b.updatedAt:null}}function PA(w){const b=w&&typeof w=="object"?w:{};return{exercises:Ga(b.exercises,jo),completed:!!b.completed,passed:!!b.passed,latestScore:Number(b.latestScore||0),bestScore:Number(b.bestScore||0),updatedAt:typeof b.updatedAt=="string"?b.updatedAt:null}}function Ga(w,b){return!w||typeof w!="object"?{}:Object.fromEntries(Object.entries(w).map(([j,C])=>[j,b(C)]))}const uh=109492033,MA=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],EA={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},KA={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},FA=/^[\p{Letter}\p{Number}_-]{1,96}$/u,DA=/^[a-z][a-z0-9_]{1,64}$/,BA=/^[a-z][a-z0-9_-]{0,48}$/i,OA=/^N[1-5]$/i,Xf=new Set;let Ua="";function ph(w,b={}){if(!w||w.status==="not-found")return"/app/not-found";const j=w.params||{},C=String(w.route||b.route||"home");if(C==="learn"){const y=Gt(j.view||b.activeLearnView||"map").toLowerCase(),I=Gt(j.targetId||b.activeLearnNodeId||b.activeLearnLegacyLessonId);return y==="lesson"&&I?`/app/learn/lesson/${I}`:y==="legacy"&&I?`/app/learn/legacy/${I}`:"/app/learn"}if(C==="textbooks"){const y=Ha(j.level||b.activeTextbookLevel),I=Gt(j.subroute||b.activeTextbookSubroute);return y?I?`/app/textbooks/${y}/${I}`:`/app/textbooks/${y}`:"/app/textbooks"}if(C==="kanji"){const y=Gt(j.cardId||b.kanjiPageId||j.slug);return y?`/app/kanji/${y}`:"/app/kanji"}if(C==="jlpt-lesson"){const y=Ha(j.level||b.activeJlptLesson);return y?`/app/jlpt-lesson/${y}`:"/app/jlpt-lesson"}return EA[C]||"/app/not-found"}function gh(w,b={}){const j=HA(b),C=KA[j];if(!w||w.status==="not-found")return C["not-found"];const y=w.params||{},I=String(w.route||b.route||"home");if(I==="learn"){const T=Gt(y.view||b.activeLearnView||"map").toLowerCase(),P=Gt(y.targetId||b.activeLearnNodeId||b.activeLearnLegacyLessonId);return T==="lesson"&&P?j==="ru"?`Flash Kanji — Урок маршрута ${P}`:`Flash Kanji — Path lesson ${P}`:T==="legacy"&&P?j==="ru"?`Flash Kanji — Урок ${P}`:`Flash Kanji — Lesson ${P}`:C.learn}if(I==="textbooks"){const T=Ha(y.level||b.activeTextbookLevel).toUpperCase(),P=Gt(y.subroute||b.activeTextbookSubroute);return T?P?["final","final-test"].includes(P)?j==="ru"?`Flash Kanji — JLPT ${T} · Финальный тест`:`Flash Kanji — JLPT ${T} · Final test`:j==="ru"?`Flash Kanji — JLPT ${T} · Урок ${Qf(P)}`:`Flash Kanji — JLPT ${T} · Lesson ${Qf(P)}`:j==="ru"?`Flash Kanji — Учебник JLPT ${T}`:`Flash Kanji — JLPT ${T} textbook`:j==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(I==="kanji"){const T=Gt(y.cardId||b.kanjiPageId||y.slug),P=WA(b,T)||T;return j==="ru"?`Flash Kanji — Кандзи ${P}`:`Flash Kanji — Kanji ${P}`}if(I==="jlpt-lesson"){const T=Ha(y.level||b.activeJlptLesson).toUpperCase();return T?j==="ru"?`Flash Kanji — JLPT ${T}`:`Flash Kanji — JLPT ${T}`:C.learn}return C[I]||C["not-found"]}function zA(w,b={}){const j=ph(w,b),C=gh(w,b);return Ua=j,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=j),cn("prime",{virtualPath:j,title:C}),{sent:!1,virtualPath:j,title:C,reason:"duplicate"}}function UA(w,b={}){const j=ph(w,b),C=gh(w,b);if(j===Ua)return cn("skip-pageview-duplicate",{virtualPath:j,title:C,previousVirtualPath:Ua}),{sent:!1,virtualPath:j,title:C,reason:"duplicate"};const y=Ua||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:j,title:C,referer:y,reason:"no-window"}:typeof window.ym!="function"?(cn("skip-pageview-missing-ym",{virtualPath:j,title:C,previousVirtualPath:y}),{sent:!1,virtualPath:j,title:C,referer:y,reason:"missing-ym"}):(window.ym(uh,"hit",j,{title:C,...y?{referer:y}:{}}),Ua=j,cn("pageview",{virtualPath:j,title:C,previousVirtualPath:y}),{sent:!0,virtualPath:j,title:C,referer:y})}catch(I){return cn("pageview-error",{virtualPath:j,title:C,previousVirtualPath:y,error:I instanceof Error?I.message:String(I)}),{sent:!1,virtualPath:j,title:C,referer:y,reason:"error"}}}function JA(w,b={},j={}){const C=GA(w);if(!C)return cn("skip-goal-invalid",{goal:w}),!1;const y=j.dedupeKey?`${C}:${j.dedupeKey}`:"";if(y&&Xf.has(y))return cn("skip-goal-duplicate",{goal:C,params:yo(b),dedupeKey:y}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return cn("skip-goal-missing-ym",{goal:C,params:yo(b)}),!1;const I=yo(b);return window.ym(uh,"reachGoal",C,I),y&&Xf.add(y),cn("goal",{goal:C,params:I}),!0}catch(I){return cn("goal-error",{goal:C,params:yo(b),error:I instanceof Error?I.message:String(I)}),!1}}function GA(w){const b=String(w||"").trim().toLowerCase();return DA.test(b)&&(MA.includes(b)||/^social_[a-z0-9_]+_opened$/.test(b))?b:""}function yo(w){const b={},j=Gt(w.route).toLowerCase(),C=Ha(w.level).toUpperCase(),y=Gt(w.lessonId),I=Gt(w.cardId),T=qA(w.source);return j&&(b.route=j),C&&(b.level=C),y&&(b.lessonId=y),I&&(b.cardId=I),T&&(b.source=T),b}function HA(w){return String(w.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function Ha(w){const b=String(w||"").trim().toUpperCase();return OA.test(b)?b.toLowerCase():""}function Gt(w){const b=String(w||"").trim();return FA.test(b)?encodeURIComponent(b):""}function qA(w){const b=String(w||"").trim();return BA.test(b)?b.toLowerCase():""}function Qf(w){const b=w.match(/-(\d+)$/);return b?.[1]?String(Number(b[1])):w}function WA(w,b){if(!b||!Array.isArray(w.cards))return"";const j=XA(b),C=w.cards.find(y=>String(y.id||"")===j||String(y.slug||"")===j);return String(C?.kanji||"").trim()}function XA(w){try{return decodeURIComponent(w)}catch{return w}}function cn(w,b){QA()&&console.debug(`[Flash Kanji Metrika] ${w}`,b)}function QA(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const b=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(b).get("debugMetrika")==="1"}catch{return!1}}const So="flashKanji.hasVisited",Co="flashKanji.changelog.lastSeenVersion",mh=new Set;function VA(w){if(!w||typeof w!="object")return null;const b=w,j=String(b.currentVersion||"").trim();if(!j)return null;const C=Array.isArray(b.entries)?b.entries.map(e1).filter(y=>!!y):[];return C.length?{currentVersion:j,entries:C}:null}function YA(w,b,j,C={}){const y=w?.currentVersion||"",I=w?.entries.find(te=>te.version===y)||w?.entries[0]||null;return!w||!y||!I||mh.has(y)?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:Yf(j,Co)===y?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(C.hadPriorVisit||Yf(j,So)==="true"||C.useProgressSignals!==!1&&ZA(b))?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:y,shouldShow:!0,shouldMarkHandled:!1,entry:I}}function Vf(w,b){const j=String(w||"").trim();j&&(mh.add(j),Zf(b,So,"true"),Zf(b,Co,j))}function ZA(w){if(!w||typeof w!="object")return!1;const b=w;return!!(za(b.appOpens)>0||Oa(b.lessonCompletions)>0||Oa(b.cards)>0||Oa(b.seenKanji)>0||Oa(b.daily)>0||Oa(b.favorites)>0||s1(b.transactions)>0||za(b.totalMoonFragmentsEarned)>0||za(b.secrets?.evaClicks)>0||b.secrets?.nightVisit||za(b.visits?.streak)>0||za(b.visits?.bestStreak)>0)}function e1(w){if(!w||typeof w!="object")return null;const b=w,j=String(b.version||"").trim();return j?{version:j,date:String(b.date||"").trim(),title:t1(b.title),items:n1(b.items)}:null}function t1(w){const b=w&&typeof w=="object"?w:{};return{ru:String(b.ru||b.en||"").trim(),en:String(b.en||b.ru||"").trim()}}function n1(w){const b=w&&typeof w=="object"?w:{},j=Array.isArray(b.ru)?b.ru.map(y=>String(y||"").trim()).filter(Boolean):[],C=Array.isArray(b.en)?b.en.map(y=>String(y||"").trim()).filter(Boolean):[];return{ru:j.length?j:C,en:C.length?C:j}}function Yf(w,b){try{return w?.getItem(b)||""}catch{return""}}function Zf(w,b,j){try{w?.setItem(b,j)}catch{}}function Oa(w){return w&&typeof w=="object"&&!Array.isArray(w)?Object.keys(w).length:0}function s1(w){return Array.isArray(w)?w.length:0}function za(w){const b=Number(w||0);return Number.isFinite(b)?b:0}const r1="bg_study_hub";function qa(w,b=0){const j=Number(w),C=Number(b),y=Number.isFinite(j)?j:Number.isFinite(C)?C:0;return Math.max(0,Math.floor(y))}function st(w){const b=[],j=C=>{const y=String(C??"").trim();y&&b.push(y)};return Array.isArray(w)||w instanceof Set?w.forEach(j):typeof w=="string"?w.split(",").forEach(j):w&&typeof w=="object"&&Object.entries(w).forEach(([C,y])=>{y!==!1&&y!==null&&y!==void 0&&j(C)}),[...new Set(b)]}function Ja(w){return String(w??"").trim()}function a1(w){return(Array.isArray(w)?w:[]).filter(b=>String(b?.type||"")==="background"&&Ja(b?.id))}function eh(w){return!!w?.defaultOwned||qa(w?.price)===0}function th(w){const b=Ja(w.fallbackId)||r1,j=a1(w.catalogItems),C=new Map(j.map(T=>[Ja(T.id),T])),y=new Set(st(w.owned));j.forEach(T=>{const P=Ja(T.id);eh(T)&&y.add(P)});const I=T=>{const P=Ja(T);if(!P)return null;const te=C.get(P);return te&&(y.has(P)||eh(te))?P:null};return I(w.customizationSelected)||I(w.progressEquipped)||I(w.progressSelected)||I(b)||b}function ld(w){const b=["background","outfit","theme","decoration","frame","effect"],j=w&&typeof w=="object"?w:{};return Object.fromEntries(b.map(C=>{const y=j[C],I=y==null?null:String(y).trim();return[C,I||null]}))}function i1(w){const b=String(w.itemId??"").trim(),j=qa(w.price),C=qa(w.balance),y=st(w.owned);return b?y.includes(b)?{status:"already-owned",balance:C,owned:y,itemId:b,price:j}:C<j?{status:"insufficient-funds",balance:C,owned:y,itemId:b,price:j}:{status:"purchased",balance:C-j,owned:[...y,b],itemId:b,price:j}:{status:"invalid-item",balance:C,owned:y,itemId:b,price:j}}function o1(w){const b=String(w||"").toLowerCase();return b==="test"||b==="done"?b:"study"}function l1(w){const b=new Set,j=[];for(const C of Array.isArray(w)?w:[]){const y=String(C?.id??"").trim();!y||b.has(y)||(b.add(y),j.push(y))}return j}function $o(w){const b=l1(w.cards),j=w.session?.answers&&typeof w.session.answers=="object"?w.session.answers:{},C=b.filter(te=>!!j[te]),y=b.length,I=C.length;if(!y)return{status:"incomplete",phase:"study",total:0,expectedCardIds:b,answeredExpectedCardIds:C,answeredCount:0,currentIndex:0,currentCardId:null};if(w.confirmedCompleted&&w.session?.completedAt)return{status:"done",phase:"done",total:y,expectedCardIds:b,answeredExpectedCardIds:b,answeredCount:y,currentIndex:y,currentCardId:null};const T=b.findIndex(te=>!j[te]);if(T<0&&I===y)return{status:"test-ready",phase:"test",total:y,expectedCardIds:b,answeredExpectedCardIds:C,answeredCount:I,currentIndex:y,currentCardId:null};const P=T>=0?T:Math.min(Math.max(Number(w.session?.currentIndex??0)||0,0),y-1);return{status:"study",phase:(o1(w.session?.phase)==="done","study"),total:y,expectedCardIds:b,answeredExpectedCardIds:C,answeredCount:I,currentIndex:P,currentCardId:b[P]||null}}function c1(w){const b=new Set,j=[];for(const C of Array.isArray(w)?w:[]){const y=String(C?.id??"").trim();!y||b.has(y)||(b.add(y),j.push(y))}return j}function d1(w,b,j){const C=b[w];return C&&typeof C=="object"&&C.correct?!0:!!j[w]}function u1(w){const b=$o({cards:w.cards,session:w.session,confirmedCompleted:w.confirmedCompleted}),j=Array.isArray(w.cards)?w.cards:[],C=b.status==="done"||b.status==="test-ready",y=b.total>0&&j.length>=b.total&&j.every(Cn=>!!w.isCardStudied?.(Cn)),I=C||y,T=c1(w.exercises),P=w.exerciseResults&&typeof w.exerciseResults=="object"?w.exerciseResults:{},te=w.completedExercises&&typeof w.completedExercises=="object"?w.completedExercises:{},ce=T.filter(Cn=>d1(Cn,P,te)).length,Be=T.length>0&&ce===T.length,as=!!w.confirmedCompleted||I&&Be;return{study:b,cardStudyComplete:I,exerciseComplete:Be,correctExerciseCount:ce,totalExercises:T.length,complete:as,canMigrateCompletion:!w.confirmedCompleted&&I&&Be}}(()=>{const w="flashKanji.pwaInstallPrompt.v2",b="flashKanji.pwaInstallPrompt.v1",j="flashKanji.notificationPrompt.v1",C="flashkanji_customization",y="flashkanji_eva_state_v2",T="local-1787912464542",te=`flashKanji.hiddenMascotSpeeches:${T}`,ce="moonfarm",Be="flashKanji.appBuild.v1",as="flashKanji.pwaCacheReset.v1",Cn="flashKanji.bootRecovery.v1",Ct={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},dn="aleksey.lebedev606@gmail.com",Ks="Flash Kanji bug report",fh="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",hh="downloads/flash-kanji-android.apk",vh="assets/download/android-app-screenshot.png",Wa="flashKanji.forcePwaCacheReset.v1",O={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",kanaCatalog:"data/kana/index.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},bh={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},wh={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},Te=["N5","N4","N3","N2","N1"],we=new Set,kh={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},gd={xp:12,coins:2},md="flashKanjiOnboardingCompleted.v3",fd="flashKanjiOnboardingCompleted",hd="flashKanjiOnboardingAudience.v1",yh=850,vd=450,$h=420,Ir=72,jh=96,bd=1,wd="N5",un="map",Ht="lesson",pn="legacy",Ae="intro-kanji",Fs="review-due",Ds="n5-checkpoint",Sh=[Ae,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",Ds],Ch={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},Nh=new Set(["lesson-1","lesson-2","bulk-n5-01"]),kd=7e3,No=8e3,xh=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),ie=Nr(),a={route:ie.route,routeMatch:ie,routeNotFound:ie.status==="not-found"?ie:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptCourseDataStatus:{N5:"idle",N4:"idle",N3:"idle",N2:"idle",N1:"idle"},jlptCourseDataErrors:{N5:null,N4:null,N3:null,N2:null,N1:null},jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},kanaCatalog:{schema_version:1,content_version:"",courses:[]},kanaCourses:{},kanaCourseLoading:{},kanaCourseErrors:{},kanaExerciseDrafts:{},kanaLessonCharacterIndex:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:ie.status==="valid"&&ie.params.level||null,activeTextbookLevel:ie.status==="valid"&&ie.route==="textbooks"&&(ie.params.level||ie.params.course)||null,activeTextbookSubroute:ie.status==="valid"&&ie.route==="textbooks"&&ie.params.subroute||null,activeLearnView:ie.status==="valid"&&ie.route==="learn"&&ie.params.view||un,activeLearnNodeId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===Ht&&ie.params.targetId||null,activeLearnLegacyLessonId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===pn&&ie.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:ie.status==="valid"&&ie.route==="kanji"&&ie.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:Ir,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:ho(),notificationPrompt:Ea(),notificationPromptVisible:!1,changelog:null,changelogModal:null,deferredDataLoaded:!1,deferredDataLoading:!1};a.route==="textbooks"&&!a.routeNotFound&&vt(Of(fL(),hL()));const Lh=pA();let Xa=null,qt=null,Qa=0,Nt="idle",yd="",$d=new Map,Tr=0,jd=0,Bs=0,is=0,xo=!1,os=0,Lo=!1,ls=0,Va=!1,Sd=!1,Ya=0,Cd=!1,Za=!1,ei=null,cs=null,Nd=0,Ao=0;const Io=new Set;let Os=0,Rr=0,To=null,ke=null,rt=null,Re=null,Wt=-1,xt=!1,xe="step",Xt=null,xd=null,Ah=null,Ih=null,_r=null,Pr=0,Ld=0,Ro=null,_o=null,ds=null;const ti=new Map;let Mr=null;const ni=new Map;let Po=0,Mo=0,Eo=Math.floor(Date.now()/6e4),Ad=0,si="",Ko=[];const Fo=new Map,us=new Map,Do=new Set,Bo=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Z={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},_e=(e,t=document)=>t.querySelector(e),Oo=(e,t=document)=>Array.from(t.querySelectorAll(e)),Nn=_e("#app"),Th=document.title||"Flash Kanji",Id=_e("#progressImport");document.addEventListener("click",cb),document.addEventListener("pointerdown",db),document.addEventListener("input",Gu),document.addEventListener("change",Gu),document.addEventListener("keydown",mb),window.flashKanjiFarmMoon=(e=5e3)=>Hu(e),window.startFlashKanjiOnboarding=yl,Id.addEventListener("change",$x),window.addEventListener("beforeinstallprompt",Qx),window.addEventListener("appinstalled",Qc),window.addEventListener("scroll",jl,{passive:!0}),window.addEventListener("resize",jl),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||kp(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||bo("usage"),!document.hidden&&a.route==="eva-room"&&Jr("return")&&(A(),R()),document.hidden&&ll()}),window.addEventListener("pagehide",ll),window.addEventListener("beforeunload",ll),uA(()=>{const e=Da(Nr()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,r=t==="textbooks"&&(n.level||n.course)||null,o=t==="textbooks"&&n.subroute||null,l=t==="jlpt-lesson"&&n.level||null,c=t==="learn"&&n.view||un,d=t==="learn"&&c===Ht&&n.targetId||null,u=t==="learn"&&c===pn&&n.targetId||null,f=zf(a.routeNotFound),h=e.status==="not-found"?zf(e):"";if(t!==a.route||t==="kanji"&&s!==a.kanjiPageId||t==="textbooks"&&r!==a.activeTextbookLevel||t==="textbooks"&&o!==a.activeTextbookSubroute||t==="jlpt-lesson"&&l!==a.activeJlptLesson||t==="learn"&&c!==a.activeLearnView||t==="learn"&&d!==a.activeLearnNodeId||t==="learn"&&u!==a.activeLearnLegacyLessonId||f!==h){const m=a.route;a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,m!==t&&(m==="review"||t==="review")&&(a.reviewSession=null),a.kanjiPageId=t==="kanji"?s:null,a.activeTextbookLevel=t==="textbooks"?r:null,a.activeTextbookSubroute=t==="textbooks"?o:null,a.activeJlptLesson=t==="jlpt-lesson"?l:n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"?c:un,a.activeLearnNodeId=t==="learn"?d:null,a.activeLearnLegacyLessonId=t==="learn"?u:null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,t!=="eva-room"&&(a.evaRoomShopOpen=!1),ft(),bs(),Ie(),Er(t)&&ri({route:t,delay:0}),t==="eva-room"&&he("room_opened")}}),Rh();async function Rh(){if(!await Qh()&&!await Xh()){Td(!0),Nn.innerHTML.trim()?Nn.setAttribute("aria-busy","true"):Nn.innerHTML=Rf(),a.progress=yv(),$r(),Oc(),Ox(),zc(),Sn();try{const[e,t,n,s,r,o,l,c,d,u]=await Promise.all([Pd({initialOnly:!0}),Je(O.i18n),Je(O.dialogues),Je(O.rewards,Kh),Je(O.achievements,()=>({achievements:[],categories:[]})),Je(O.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Je(O.jlptLessons,()=>({items:[]})),Je(O.kanaCatalog,()=>({schema_version:1,content_version:"",courses:[]})),Je(O.customizationShop,()=>({version:1,currency:"Moon Fragments",categories:[],items:[]})),Je(O.changelog,()=>null)]),f=mu(r,s.achievements||[]);a.lessons=e.lessons,a.cards=e.cards,a.i18n=t,a.dialogues=n,a.rewards=s,a.achievements=f.items,a.achievementCategories=f.categories,a.jlptCatalog=mv(o),a.jlptLessons=gv(l),a.kanaCatalog=fv(c),a.customizationCatalog=ov(d),a.rewards.achievements=a.achievements;const h=Sb(a.progress);Fr(),Nb(),Us(),Nv(),Sn(),eL(),BC(),Cb(h),UC(),V({silent:!0}),xr(Da(Nr()));const m=_h(u,h);A(),R(),m&&Ph(),Dh(),ri({route:a.route,delay:Er(a.route)?0:kd}),Wx(),kl(),Fw(),xw(),Ef(),Yc();try{sessionStorage.removeItem(Cn)}catch(S){console.warn("Could not clear boot recovery marker after successful startup.",S)}}catch(e){console.error(e),await qx(e)||(Nn.innerHTML=Jx(e))}finally{Td(!1)}}}function Td(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),Nn&&Nn.setAttribute("aria-busy",e?"true":"false")}function _h(e,t=!1){Sd=!!t,a.changelogModal=null;const n=VA(e);if(!n)return!1;a.changelog=n;const s=YA(n,a.progress,zo(),{hadPriorVisit:Sd,useProgressSignals:!1});return s.shouldMarkHandled?(Vf(s.currentVersion,zo()),!1):!s.shouldShow||!s.entry?!1:(a.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function zo(){try{return window.localStorage}catch{return null}}function Ph(){Ya&&window.clearTimeout(Ya),Ya=window.setTimeout(()=>{Ya=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function Uo(){const e=a.changelogModal?.version||a.changelog?.currentVersion||"";Vf(e,zo()),a.changelogModal=null,R()}function Mh(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const r=document.createElement("script");r.id=t,r.src=e,r.defer=!0,r.onload=()=>n(),r.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(r)})}function Eh(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function Kh(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function Fh(){return window.Chart?Promise.resolve():(xd||(xd=Mh("vendor/chart.umd.min.js","flash-kanji-chartjs")),xd)}function Dh(){window.setTimeout(()=>{Ah||(Ah=Jf(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{$r(),xx()}).catch(e=>console.warn("UX sound module failed to load.",e))),Ih||(Ih=Jf(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function Er(e=a.route){return xh.has(e)}function ri({route:e=a.route,delay:t=kd,force:n=!1}={}){if(a.deferredDataLoaded||a.deferredDataLoading||_r||!n&&!Er(e))return;Pr&&(window.clearTimeout(Pr),Pr=0);const s=++Ld,r=()=>{s===Ld&&(!n&&!Er(a.route)||Bh().catch(o=>console.warn("Deferred app data failed to load.",o)))};Pr=window.setTimeout(()=>{Pr=0,Eh(r,{timeout:1800})},Math.max(0,Number(t)||0))}async function Bh({renderAfter:e=!0}={}){if(!a.deferredDataLoaded)return _r||(a.deferredDataLoading=!0,_r=(async()=>{const[t,n,s]=await Promise.all([Pd(),Yh([["kanjiMeta",O.kanjiMeta],["kanjiHints",O.kanjiHints],["kanjiTranslations",O.kanjiTranslations],["kanjiStrokes",O.kanjiStrokes],["kanjiPageSources",O.kanjiPageSources],["lessonTranslations",O.lessonTranslations],["vocabulary",O.vocabulary],["sentences",O.sentences],["jlptPracticeLessons",O.jlptPracticeLessons],["n5Meta",O.n5Meta],["n5Lessons",O.n5Lessons],["n5Kanji",O.n5Kanji],["n5Exercises",O.n5Exercises],["n5FinalTest",O.n5FinalTest],["n4Meta",O.n4Meta],["n4Lessons",O.n4Lessons],["n4Kanji",O.n4Kanji],["n4Grammar",O.n4Grammar],["n4Exercises",O.n4Exercises],["n4Reading",O.n4Reading],["n4Listening",O.n4Listening],["n4FinalTest",O.n4FinalTest],["n3Meta",O.n3Meta],["n3Lessons",O.n3Lessons],["n3Kanji",O.n3Kanji],["n3Grammar",O.n3Grammar],["n3Exercises",O.n3Exercises],["n3Reading",O.n3Reading],["n3Listening",O.n3Listening],["n3FinalTest",O.n3FinalTest],["n2Meta",O.n2Meta],["n2Lessons",O.n2Lessons],["n2Kanji",O.n2Kanji],["n2Grammar",O.n2Grammar],["n2Exercises",O.n2Exercises],["n2Reading",O.n2Reading],["n2Listening",O.n2Listening],["n2FinalTest",O.n2FinalTest],["n1Meta",O.n1Meta],["n1Lessons",O.n1Lessons],["n1Kanji",O.n1Kanji],["n1Grammar",O.n1Grammar],["n1Exercises",O.n1Exercises],["n1Reading",O.n1Reading],["n1Listening",O.n1Listening],["n1FinalTest",O.n1FinalTest],["jlptReadingTranslations",O.jlptReadingTranslations],["n5Reading",O.n5Reading],["monetization",O.monetization]]),ev(O.jlptReadingMarkdown)]),{kanjiMeta:r,kanjiHints:o,kanjiTranslations:l,kanjiStrokes:c,kanjiPageSources:d,lessonTranslations:u,vocabulary:f,sentences:h,jlptPracticeLessons:m,n5Meta:S,n5Lessons:x,n5Kanji:$,n5Exercises:L,n5FinalTest:k,n4Meta:N,n4Lessons:J,n4Kanji:G,n4Grammar:Ms,n4Exercises:z,n4Reading:wL,n4Listening:kL,n4FinalTest:yL,n3Meta:$L,n3Lessons:jL,n3Kanji:SL,n3Grammar:CL,n3Exercises:NL,n3Reading:xL,n3Listening:LL,n3FinalTest:AL,n2Meta:IL,n2Lessons:TL,n2Kanji:RL,n2Grammar:_L,n2Exercises:PL,n2Reading:ML,n2Listening:EL,n2FinalTest:KL,n1Meta:FL,n1Lessons:DL,n1Kanji:BL,n1Grammar:OL,n1Exercises:zL,n1Reading:UL,n1Listening:JL,n1FinalTest:GL,jlptReadingTranslations:HL,n5Reading:qL,monetization:WL}=n;a.lessons=t.lessons,a.cards=t.cards,a.jlptPracticeLessons=hv(m),a.jlptReadingMarkdown=s||"",a.jlptReadingByLevel=tv(s||""),a.n5Meta=Md(S),a.n5Textbook=Wo(x),a.n5KanjiCatalog=Ed($),Kd(),a.n5Exercises=Fd(L),a.n5FinalTest=Dd(k),a.n5Reading=kv(qL),a.n4Meta=Bd(N),a.n4Textbook=Od(J),a.n4KanjiCatalog=zd(G),a.n4Grammar=Jd(Ms),a.n4Exercises=Gd(z),a.n4Reading=di(wL),a.n4Listening=di(kL),a.n4FinalTest=Hd(yL),Ud(),a.n3Meta=qd($L),a.n3Textbook=Wd(jL),a.n3KanjiCatalog=Xd(SL),a.n3Grammar=Vd(CL),a.n3Exercises=Yd(NL),a.n3Reading=pi(xL),a.n3Listening=pi(LL),a.n3FinalTest=Zd(AL),Qd(),a.n2Meta=eu(IL),a.n2Textbook=tu(TL),a.n2KanjiCatalog=nu(RL),a.n2Grammar=ru(_L),a.n2Exercises=au(PL),a.n2Reading=mi(ML),a.n2Listening=mi(EL),a.n2FinalTest=iu(KL),su(),a.n1Meta=ou(FL),a.n1Textbook=lu(DL),a.n1KanjiCatalog=cu(BL),a.n1Grammar=uu(OL),a.n1Exercises=pu(zL),a.n1Reading=hi(UL),a.n1Listening=hi(JL),a.n1FinalTest=gu(GL),du(),Uh(),a.kanjiMeta=r.items||{},a.kanjiHints=o.items||{},a.kanjiTranslations=l.items||{},a.kanjiStrokes=iv(c),a.kanjiPageSources=d.items||{},a.lessonTranslations=u.items||{},a.vocabulary=f.items||[],a.sentenceExercises=h.items||[],a.jlptReadingTranslations=rv(HL),a.monetization=WL,a.deferredDataLoaded=!0,a.deferredDataLoading=!1,a.progress&&(Fr(),V({silent:!0}),A()),xr(Da(Nr())),e&&R()})().finally(()=>{a.deferredDataLoading=!1}),_r)}function Oh(e){const t=D(e),n=t.toLowerCase();if(!t)return[];const s=[["meta",O[`${n}Meta`]],["lessons",O[`${n}Lessons`]],["kanji",O[`${n}Kanji`]],["exercises",O[`${n}Exercises`]]];return t!=="N5"?s.push(["grammar",O[`${n}Grammar`]],["reading",O[`${n}Reading`]],["listening",O[`${n}Listening`]],["finalTest",O[`${n}FinalTest`]]):s.push(["finalTest",O.n5FinalTest]),s.filter(([,r])=>!!r)}function gn(e,t,n=null){const s=D(e);s&&(a.jlptCourseDataStatus[s]=t,a.jlptCourseDataErrors[s]=n||null,s==="N1"&&(_o=n||null))}function ai(e){const t=D(e);if(!t)return"error";if(a.jlptCourseDataStatus[t]!=="ready"&&ii(t))try{Jo(t),gn(t,"ready")}catch(n){gn(t,"incomplete",n)}return a.jlptCourseDataStatus[t]==="ready"&&!ii(t)&&gn(t,"incomplete",new Error(oi())),a.jlptCourseDataStatus[t]||"idle"}function ii(e){const t=D(e);if(!t)return!1;const n=zt(t),s=Rd(t),r=_d(t);return n.length>0&&s.length>0&&!!r}function Rd(e){const t=D(e);return t==="N5"?Et():t==="N4"?Ve():t==="N3"?Ye():t==="N2"?Ze():t==="N1"?yt():[]}function _d(e){const t=D(e);return t==="N5"?a.n5Exercises:t==="N4"?a.n4Exercises:t==="N3"?a.n3Exercises:t==="N2"?a.n2Exercises:t==="N1"?a.n1Exercises:null}function zh(e,t={}){const n=D(e);n==="N5"&&(a.n5Meta=Md(t.meta),a.n5Textbook=Wo(t.lessons),a.n5KanjiCatalog=Ed(t.kanji),Kd(),a.n5Exercises=Fd(t.exercises),t.finalTest&&(a.n5FinalTest=Dd(t.finalTest))),n==="N4"&&(a.n4Meta=Bd(t.meta),a.n4Textbook=Od(t.lessons),a.n4KanjiCatalog=zd(t.kanji),a.n4Grammar=Jd(t.grammar),a.n4Exercises=Gd(t.exercises),a.n4Reading=di(t.reading),a.n4Listening=di(t.listening),a.n4FinalTest=Hd(t.finalTest),Ud()),n==="N3"&&(a.n3Meta=qd(t.meta),a.n3Textbook=Wd(t.lessons),a.n3KanjiCatalog=Xd(t.kanji),a.n3Grammar=Vd(t.grammar),a.n3Exercises=Yd(t.exercises),a.n3Reading=pi(t.reading),a.n3Listening=pi(t.listening),a.n3FinalTest=Zd(t.finalTest),Qd()),n==="N2"&&(a.n2Meta=eu(t.meta),a.n2Textbook=tu(t.lessons),a.n2KanjiCatalog=nu(t.kanji),a.n2Grammar=ru(t.grammar),a.n2Exercises=au(t.exercises),a.n2Reading=mi(t.reading),a.n2Listening=mi(t.listening),a.n2FinalTest=iu(t.finalTest),su()),n==="N1"&&(a.n1Meta=ou(t.meta),a.n1Textbook=lu(t.lessons),a.n1KanjiCatalog=cu(t.kanji),a.n1Grammar=uu(t.grammar),a.n1Exercises=pu(t.exercises),a.n1Reading=hi(t.reading),a.n1Listening=hi(t.listening),a.n1FinalTest=gu(t.finalTest),du())}function oi(){return p()==="ru"?"Не удалось загрузить карточки урока. Проверьте подключение и попробуйте ещё раз.":"Could not load lesson cards. Check your connection and try again."}function Jo(e){const t=D(e),n=zt(t),s=Rd(t),r=_d(t);if(!t||!n.length||!s.length||!r)throw new Error(oi());if(t!=="N5")return!0;const o=[],l=new Map(a.n5KanjiCatalog.map(u=>[u.kanji,u])),c=new Set;a.n5KanjiCatalog.forEach(u=>{u.id&&c.add(u.id)}),n.length!==10&&o.push(`N5 lessons expected 10, got ${n.length}`),a.n5KanjiCatalog.length!==80&&o.push(`N5 kanji expected 80, got ${a.n5KanjiCatalog.length}`),c.size!==a.n5KanjiCatalog.length&&o.push("N5 card identifiers are not unique.");const d=new Set;if(n.forEach(u=>{d.has(u.id)&&o.push(`Duplicate N5 lesson id: ${u.id}`),d.add(u.id),(u.kanji||[]).length!==8&&o.push(`${u.id} expected 8 kanji, got ${(u.kanji||[]).length}`),(u.kanji||[]).map(m=>l.get(m)).filter(Boolean).length!==(u.kanji||[]).length&&o.push(`${u.id} has unresolved kanji references.`);const h=nn(u);h.length!==(u.kanji||[]).length&&o.push(`${u.id} cards expected ${u.kanji.length}, got ${h.length}`),js(u).length||o.push(`${u.id} has no exercises.`)}),o.length)throw new Error(`${oi()} ${o[0]}`);return!0}function Uh(){Te.forEach(e=>{try{ii(e)&&(Jo(e),gn(e,"ready"))}catch(t){gn(e,"incomplete",t)}})}function Jh(e){const t=D(e);if(!t||!a.progress)return!1;const n=Mn(),s=yn(t);let r=!1;return zt(t).forEach(o=>{const l=We(t,o.id),c=n.sessions[l];if(!c)return;const d=$o({cards:fl(t,o),session:c,confirmedCompleted:!!(s?.completedLessons?.[o.id]||we.has(`${t.toLowerCase()}:${o.id}`))});(c.phase==="test"||c.phase==="done")&&d.status==="incomplete"&&(c.phase="study",c.currentIndex=0,c.completedAt=null,r=!0),d.status==="study"&&c.currentIndex!==d.currentIndex&&(c.currentIndex=d.currentIndex,r=!0),d.status==="study"&&c.phase!=="study"&&(c.phase="study",r=!0)}),r&&(n.lastUpdatedAt=new Date().toISOString()),r}function Gh(e){const t=D(e);if(!t||!a.progress)return!1;const n=Ys(t);if(!n)return!1;const s=n.course();if(!hy(t,s))return!1;let r=!1;n.lessons().forEach(l=>{qp(t,l)&&(r=!0)});const o=n.lessonById(s.currentLessonId);if(o&&hn(t,s,o)){const c=n.lessons().find(d=>!hn(t,s,d))?.id||o.id;s.currentLessonId!==c&&(s.currentLessonId=c,r=!0)}return r}function Hh(){if(!a.progress)return!1;let e=!1;return Te.forEach(t=>{const n=Ys(t);if(!n||!n.lessons().length)return;const s=n.course();if(!$s(n.level,s.currentLessonId).some(d=>!!s.completedLessons?.[d]))return;const c=n.lessons().find(d=>!hn(n.level,s,d))?.id||Dl(n,{id:s.currentLessonId},s.currentLessonId)||s.currentLessonId;c&&s.currentLessonId!==c&&(s.currentLessonId=c,e=!0)}),e}async function Go(e,{renderAfter:t=!0,force:n=!1}={}){const s=D(e);if(!s)return null;if(!n&&ai(s)==="ready")return zt(s);if(!n&&ti.has(s))return ti.get(s);gn(s,"loading");const r=Zh(Oh(s),s==="N5"?4:3).then(o=>{if(zh(s,o),Jo(s),gn(s,"ready"),a.progress){Fr();const l=Jh(s),c=Gh(s);(l||c)&&A()}return xr(Da(Nr())),t&&R(),zt(s)}).catch(o=>{throw gn(s,"error",o),console.warn(`${s} textbook data failed to load.`,o),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&R(),o}).finally(()=>{ti.delete(s)});return ti.set(s,r),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&R(),r}function qh(e){const t=D(e);t&&(gn(t,"loading"),R(),Go(t,{renderAfter:!0,force:!0}).catch(()=>{}))}async function Wh({renderAfter:e=!0}={}){return Ro=Go("N1",{renderAfter:e}).finally(()=>{Ro=null}),Ro}async function Xh(){try{const e=localStorage.getItem(Be);if(localStorage.setItem(Be,T),!e||e===T)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function Qh(){try{const e=localStorage.getItem(Wa),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===T||(localStorage.setItem(Wa,"done"),localStorage.setItem("flashKanji.lastForcedBuild",T)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function Pd({initialOnly:e=!1}={}){const t=await Je(O.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Vh(n):n,r=await Ho(s,async d=>{try{return{manifestLesson:d,payload:await Je(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(r.filter(Boolean).map(d=>[d.manifestLesson.id,d])),l=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:f}=u;return{...d,...f.lesson,file:d.file,items:Array.isArray(f.items)?f.items.map(h=>av(h,f.lesson.id)):[]}}),c=l.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:l,cards:c}}function Vh(e){return e.filter((t,n)=>Nh.has(t.id)||n<2)}async function Yh(e,t=3){const n=await Ho(e,async([s,r])=>[s,await Je(r)],t);return Object.fromEntries(n)}async function Zh(e,t=3){const n=await Ho(e,async([s,r])=>[s,await lv(r)],t);return Object.fromEntries(n)}async function Ho(e,t,n=6){const s=[],r=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=r){const l=e.slice(o,o+r);s.push(...await Promise.all(l.map(t))),o+r<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function Je(e,t=null){const n=qo(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),No):0;try{const c=await fetch(r,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${r}`);continue}const d=await c.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${r}. Trying fallback paths.`,u)}}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function ev(e,t=""){const n=qo(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),No):0;try{const c=await fetch(r,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${r}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function tv(e){const t=Object.fromEntries(Te.map(f=>[f,[]])),n=String(e||"").split(/\r?\n/);let s=null,r=null,o="idle",l=[],c=[];const d=()=>{!r||!s||(r.text=nv(l.join(`
`)),r.questions=c.map(f=>f.trim()).filter(Boolean),t[s].push(r),r=null,l=[],c=[],o="idle")},u=f=>{const h=String(f||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const f of n){const h=String(f??""),m=h.trim(),S=m.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(S){d(),s=S[1].toUpperCase();continue}const x=m.match(/^##\s*(N[1-5])\s*(.+)$/i);if(x){d(),s=x[1].toUpperCase(),r={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:sv(x[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(m)&&!S&&!x){d(),s=null;continue}if(!r)continue;if(/^###\s*Проверочные вопросы/i.test(m)){o="questions";continue}if(o==="code"){/^```/.test(m)?o="body":l.push(h);continue}if(/^```/.test(m)){o="code";continue}if(o==="questions"){const L=m.match(/^[-*]\s+(.*)$/),k=m.match(/^\d+\.\s+(.*)$/);if(L){c.push(L[1]);continue}if(k){c.push(k[1]);continue}if(!m||/^---+$/.test(m))continue;c.push(m);continue}const $=m.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if($){const L=u($[1]);r[L]=$[2].trim()}}return d(),t}function nv(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function sv(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function rv(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,r])=>{!s||!r||typeof r!="object"||(n[String(s)]={titleRu:String(r.titleRu||r.ruTitle||r.title_ru||"").trim(),titleEn:String(r.titleEn||r.enTitle||r.title_en||"").trim(),ru:String(r.ru||r.translationRu||r.translation_ru||"").trim(),en:String(r.en||r.translationEn||r.translation_en||"").trim()})}),n}function qo(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function av(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function iv(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const r=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return r.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||r.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:r}]:null}).filter(Boolean))}function ov(e){const t=Array.isArray(e?.categories)?e.categories:[],n=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),currency:e?.currency||"Moon Fragments",categories:t.length?t:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}],items:n.map(s=>{const r=qa(s.price);return{...s,id:String(s.id||""),type:String(s.type||"effect"),price:r,asset:String(s.asset||""),preview:String(s.preview||s.asset||""),rarity:String(s.rarity||"common").toLowerCase(),defaultOwned:!!(s.defaultOwned||r===0),unlockCondition:s.unlockCondition||null}}).filter(s=>s.id)}}async function lv(e){const t=qo(e);let n=null;for(const s of t)try{const r=typeof AbortController<"u"?new AbortController:null,o=r?window.setTimeout(()=>r.abort(),No):0;try{const l=await fetch(s,{signal:r?.signal});if(!l.ok){n=new Error(`Cannot load ${s}: HTTP ${l.status}`);continue}const c=await l.text();try{return JSON.parse(c)}catch(d){n=d}}finally{o&&window.clearTimeout(o)}}catch(r){n=r}throw n||new Error(`Cannot load ${e}`)}function xn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function cv(){try{const e=localStorage.getItem(C);if(!e)return xn();const t=JSON.parse(e);if(!t||typeof t!="object")return xn();const n=xn(),s=t.selected||t.equipped||{},r=Object.entries(ld(s)).filter(([,o])=>!!o);return{owned:st(t.owned||t.ownedItems||t.inventory||n.owned),selected:{...n.selected,...Object.fromEntries(r)},seen:st(t.seen||n.seen),updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),xn()}}function dv(){try{const e=localStorage.getItem(C);if(!e)return null;const t=JSON.parse(e);return!t||typeof t!="object"?null:t.selected?.background||t.equipped?.background||null}catch{return null}}function zs(){if(!a.customization)return!1;if(Va)return!0;Va=!0;const e=()=>{ls=0,Va=!1,a.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(C,JSON.stringify(a.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?ls=window.requestIdleCallback(e,{timeout:1200}):ls=window.setTimeout(e,160),!0}function uv(){if(!a.customization)return!1;Va=!1,ls&&("cancelIdleCallback"in window?window.cancelIdleCallback(ls):window.clearTimeout(ls),ls=0),a.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(C,JSON.stringify(a.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function Us(){const e=dv(),t=cv(),n=new Set,s=st(a.progress.shop?.owned||[]);st(t.owned).forEach(o=>{const l=ye(o)||ps(o);l&&n.add(l.id)}),qe().forEach(o=>{(o.defaultOwned||o.price===0)&&n.add(o.id)}),st(a.progress.unlockedBackgrounds||[]).forEach(o=>{const l=ye(o)||ps(o);l&&n.add(l.id)}),st(a.progress.unlockedEvaSprites||[]).forEach(o=>{const l=gs(o);l&&n.add(l.id),s.includes(`eva_sprite:${o}`)&&l&&n.add(l.id)}),s.forEach(o=>{const l=String(o),c=ye(l)||ps(l);if(c&&n.add(c.id),!c&&l.startsWith("eva_sprite:")){const d=gs(l.replace("eva_sprite:",""));d&&n.add(d.id)}});const r=pv({...xn().selected,...ld(a.progress.shop?.equipped||{}),...t.selected||{}});r.background=th({catalogItems:qe(),owned:[...n],customizationSelected:e,progressEquipped:a.progress.shop?.equipped?.background,progressSelected:a.progress.selectedEvaRoomBackground}),a.progress.selectedEvaSprite&&(r.outfit=gs(a.progress.selectedEvaSprite)?.id||r.outfit),n.has(r.background)||(r.background="bg_study_hub"),n.has(r.outfit)||(r.outfit="outfit_default_assassin"),n.has(r.theme)||(r.theme="theme_default_dark"),r.decoration&&!n.has(r.decoration)&&(r.decoration=null),r.effect&&!n.has(r.effect)&&(r.effect=null),a.customization={owned:[...n],selected:r,seen:[...new Set([...st(t.seen||[]),...n])],updatedAt:t.updatedAt||new Date().toISOString()},Kr(),zs()}function Kr(){var n;if(!a.customization||!a.progress)return;pe();const e=a.customization.selected||{};e.background&&(a.progress.selectedEvaRoomBackground=e.background);const t=ye(e.outfit);t?.spriteId&&(a.progress.selectedEvaSprite=t.spriteId),a.progress.unlockedBackgrounds=[...new Set([...st(a.progress.unlockedBackgrounds||[]),...a.customization.owned.filter(s=>ye(s)?.type==="background")])],a.progress.unlockedEvaSprites=[...new Set([...st(a.progress.unlockedEvaSprites||[]),...a.customization.owned.map(s=>ye(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=a.progress).shop||(n.shop={owned:[],equipped:{}}),a.progress.shop.owned=[...new Set([...st(a.progress.shop.owned||[]),...a.customization.owned,...a.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],a.progress.shop.equipped={...a.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function qe(){return a.customizationCatalog?.items||[]}function ye(e){return qe().find(t=>t.id===e)||null}function ps(e){const t=String(e||"");return t&&qe().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function Ln(e){return(ye(e)||ps(e))?.id||e||null}function pv(e={}){return{background:Ln(e.background),outfit:Ln(e.outfit),theme:Ln(e.theme),decoration:Ln(e.decoration||e.frame),effect:Ln(e.effect)}}function gs(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return qe().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function gv(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function mv(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>Te.indexOf(n.jlpt)-Te.indexOf(s.jlpt))}}function fv(e){const t=Array.isArray(e?.courses)?e.courses:[];return{schema_version:Number(e?.schema_version||1),content_version:String(e?.content_version||""),courses:t.map(n=>({...n,slug:String(n.slug||"").toLowerCase(),title:String(n.title||""),native_title:String(n.native_title||""),description:String(n.description||""),course_file:String(n.course_file||""),pdf_url:String(n.pdf_url||""),lesson_count:Number(n.lesson_count||0),base_character_count:Number(n.base_character_count||0),task_count:Number(n.task_count||0)})).filter(n=>fe(n.slug))}}function hv(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function Md(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function Wo(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Ed(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function Kd(){if(!Array.isArray(a.n5KanjiCatalog)||!a.n5KanjiCatalog.length)return;const e=new Map(a.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const r=String(n.jlpt||s.jlpt||"").toUpperCase();return r&&r!=="N5"?n:(t.add(s.kanji),li(n,s))}),a.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(li({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function li(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:Y(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Fd(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Dd(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Bd(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Od(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function zd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Ud(){if(!Array.isArray(a.n4KanjiCatalog)||!a.n4KanjiCatalog.length)return;const e=new Map(a.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ci(n,s))}),a.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(ci({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function ci(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:Y(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function Jd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Gd(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function di(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Hd(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function qd(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function Wd(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function Xd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Qd(){if(!Array.isArray(a.n3KanjiCatalog)||!a.n3KanjiCatalog.length)return;const e=new Map(a.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ui(n,s))}),a.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(ui({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function ui(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:Y(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Vd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Yd(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function pi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Zd(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function eu(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function tu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function nu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function su(){if(!Array.isArray(a.n2KanjiCatalog)||!a.n2KanjiCatalog.length)return;const e=new Map(a.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),gi(n,s))}),a.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(gi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function gi(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:Y(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function ru(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function au(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function mi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function iu(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function ou(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function lu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function cu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function du(){if(!Array.isArray(a.n1KanjiCatalog)||!a.n1KanjiCatalog.length)return;ds=null;const e=new Map(a.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),fi(n,s))}),a.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(fi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))}),ds=null}function fi(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:Y(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function uu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function pu(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function hi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function gu(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function vv(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function bv(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>Y(n)):[]})):[]}function wv(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((r,o)=>({kanji:String(r||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,r,o)=>o.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===r)}function kv(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(r=>String(r?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((r,o)=>({id:String(r.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(r.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(r.sentence||""),reading:Y(r.reading||""),translationRu:String(r.translationRu||r.translation_ru||r.ru||""),translationEn:String(r.translationEn||r.translation_en||r.en||""),blanks:bv(r.blanks),tiles:wv(r.tiles,r.blanks),source:"reading"})).filter(r=>r.id)}function mu(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],r=n.map(l=>Xo(l)),o=new Set(s.map(l=>l.id));return r.forEach(l=>{o.has(l.category)||(o.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:r}}function Xo(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function fu(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function Js(){const e=fu();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:Vo(),jlptLessonStudy:Yo(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:el(),n4Course:tl(),n3Course:nl(),n2Course:sl(),n1Course:rl(),kanaCourses:ad(null),unlockedJlptLevels:Te.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:Au(),evaRelationship:il(),shop:{owned:[],equipped:{}}}}function yv(){const e=Js();try{const t=bA();return t?hu(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function hu(e,t){return{...e,...t,version:3,settings:$v(e.settings,t.settings||{}),cards:wA({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:Sv(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:vi(t.dailyBonusPending||null),lastOpenedJlptLesson:tt(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:tx(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Ps(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),moonFragments:qa(t.moonFragments,e.moonFragments),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:$u(e.learningPath,t.learningPath||{}),jlptLessonStudy:yu(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:al(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:Lu(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:ju(e.n5Course,t.n5Course||{}),n4Course:Su(e.n4Course,t.n4Course||{}),n3Course:Cu(e.n3Course,t.n3Course||{}),n2Course:Nu(e.n2Course,t.n2Course||{}),n1Course:xu(e.n1Course,t.n1Course||{}),kanaCourses:ad(t.kanaCourses||e.kanaCourses),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...Te])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:Tu(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:Iu(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...st(e.shop.owned||[]),...st(t.shop?.owned||t.ownedItems||[])])],equipped:{...e.shop.equipped,...ld(t.shop?.equipped||t.equippedItems||{})}}}}function $v(e,t){const n={...e,...t||{}};return n.theme=jv(n.theme,e.theme||"dark"),n.themeManuallySelected=An(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=An(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=An(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=An(n.languageManuallySelected,e.languageManuallySelected===!0),n}function jv(e,t="dark"){return e==="light"||e==="dark"?e:t}function Sv(e,t){const n={...e,...t||{}};return n.current=Qo(n.current,e.current||0),n.best=Qo(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=vu(n.pendingReward),n}function vu(e){if(!e||typeof e!="object")return null;const t=Qo(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function vi(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function An(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Qo(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Vo(){return{version:bd,currentLevel:wd,currentNodeId:Ae,completedNodes:{},unlockedNodes:{[Ae]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function Yo(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function bu(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function wu(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function ku(e,t){const n=bu(),s=t&&typeof t=="object"?t:{},r={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:r,phase:wu(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function yu(e,t){const n=Yo(),s=t&&typeof t=="object"?t:{},r={},o=e?.sessions||{},l=s.sessions||{};return Object.keys(o).forEach(c=>{r[c]=ku(o[c],l[c])}),Object.keys(l).forEach(c=>{r[c]||(r[c]=ku(null,l[c]))}),{...n,...e||{},...s||{},sessions:r,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function $u(e,t){return{...e,...t||{},version:bd,currentLevel:String(t?.currentLevel||e.currentLevel||wd).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||Ae),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Zo(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Zo(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Ht),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function el(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function ju(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ps(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:pa(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function tl(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Su(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ps(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:pa(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function nl(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Cu(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ps(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:pa(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function sl(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Nu(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ps(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:pa(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function rl(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function xu(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ps(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:pa(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function al(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:Cv(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:bi(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function bi(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function Cv(e,t){const n=[],s=new Set,r=o=>{if(!o)return;const l=Hn(o.jp||lm(o)),c=dr(l);if(!c||s.has(c))return;s.add(c);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Ee(c).toString(36)}`;n.push({id:d,jp:l,hiragana:Hn(o.hiragana||o.reading||""),ru:Hn(o.ru||o.translationRu||""),en:Hn(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(r),(Array.isArray(t)?t:[]).forEach(r),n.slice(0,160)}function Lu(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function il(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:oe(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function Au(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function Iu(e,t){return{...e,...t,warmth:le(Number(t.warmth??e.warmth),0,100),trust:le(Number(t.trust??e.trust),0,100),discipline:le(Number(t.discipline??e.discipline),0,100),curiosity:le(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function Tu(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function mn(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function ms(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function Qt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:mn(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function Nv(){const e=Qt();let t=null;try{const n=localStorage.getItem(y);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}a.evaRuntime=Av(e,t||Lv()),xv(),fs()}function xv(){if(!a.evaRuntime)return;a.evaRuntime.memory=ms(mn(),a.evaRuntime.memory||{});const e=a.evaRuntime.memory,t=oe(),n=e.lastSeenDate||null,s=n?Math.max(0,ts(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=a.route,e.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=a.evaRuntime.mood||e.lastKnownMood||"neutral"}function Lv(){const e=a.progress?.evaAutonomy||{};return{currentSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:a.customization?.selected?.decoration||a.customization?.selected?.frame||null,currentEffect:a.customization?.selected?.effect||"none",activeSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function Av(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:ms(e.memory||mn(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function ol(){if(!a.evaRuntime)return!1;Ru(),a.evaRuntime.updatedAt=new Date().toISOString(),Lo=!1,os&&("cancelIdleCallback"in window?window.cancelIdleCallback(os):window.clearTimeout(os),os=0);try{return localStorage.setItem(y,JSON.stringify(a.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function fs(e={}){if(!a.evaRuntime)return!1;if(e?.immediate)return ol();if(Lo)return!0;Lo=!0;const t=()=>{os=0,ol()};return"requestIdleCallback"in window?os=window.requestIdleCallback(t,{timeout:1200}):os=window.setTimeout(t,160),!0}function ll(){cl(),ol(),uv()}function Ru(){if(!a.evaRuntime||!a.progress)return;const e=a.progress.selectedEvaRoomBackground||a.customization?.selected?.background||"bg_study_hub",t=qe().filter(n=>tn(n.id));a.evaRuntime.ownedSkins=[...new Set(["idle","default",...a.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],a.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...a.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],a.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],a.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],a.evaRuntime.currentBackground=e,a.evaRuntime.activeSkin=a.evaRuntime.currentSkin||a.progress.selectedEvaSprite||"idle",a.evaRuntime.activeBackground=e}function cl(){return a.progress?(Hh(),a.progress.level=co(a.progress.xp),a.progress.updatedAt=new Date().toISOString(),xo=!1,is&&("cancelIdleCallback"in window?window.cancelIdleCallback(is):window.clearTimeout(is),is=0),kA(a.progress)):!1}function A(e={}){if(!a.progress)return!1;if(e?.immediate)return cl();if(xo)return!0;xo=!0;const t=()=>{is=0,cl()};return"requestIdleCallback"in window?is=window.requestIdleCallback(t,{timeout:1200}):is=window.setTimeout(t,120),!0}function _u(e,t,{timeout:n=0}={}){const s=()=>{try{const r=t?.();r&&typeof r.then=="function"&&r.catch(o=>console.warn(`[Flash Kanji] ${e} failed.`,o))}catch(r){console.warn(`[Flash Kanji] ${e} failed.`,r)}};requestAnimationFrame(()=>window.setTimeout(s,n))}function Iv(){Ie(),bs(),Tt(),window.setTimeout(bs,120),window.setTimeout(bs,320)}function Lt(e,t,n={}){_u(e,()=>{const s=t?.();s&&typeof s.then=="function"&&s.catch(r=>console.warn(`[Flash Kanji] ${e} failed.`,r)),A(),n.scrollTop?Iv():It()})}function Tv(e){const t=e?.dataset?.action||"",n=Rv(t,e);return n?Do.has(n)?!1:(Do.add(n),requestAnimationFrame(()=>window.setTimeout(()=>Do.delete(n),0)),!0):!0}function Rv(e,t){return e?e==="rate"?`rate:${a.activeCardId||""}:${t?.dataset?.rating||""}`:e==="rate-kana-review"?`rate-kana:${t?.dataset?.course||""}:${t?.dataset?.card||""}:${t?.dataset?.rating||""}`:e==="kana-lesson-card"?`kana-lesson-card:${t?.dataset?.course||""}:${t?.dataset?.lesson||""}:${t?.dataset?.kana||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${a.activeExerciseReviewLevel||""}:${a.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function Fr(){Object.keys(a.progress.cards||{}).forEach(s=>B(s)),a.progress.level=co(a.progress.xp),a.progress.totalMoonFragmentsEarned=Math.max(Number(a.progress.totalMoonFragmentsEarned||0),Number(a.progress.moonFragments||0),$N()),pe(),Ws(),Xr(),zl(),Hl(),Ql(),typeof Bi=="function"&&Bi();const e=vr(),t=[ga(ne(),"N5"),ga(X(),"N4"),ga(q(),"N3"),ga(W(),"N2"),ga(ee(),"N1"),ma(ne(),"N5"),ma(X(),"N4"),ma(q(),"N3"),ma(W(),"N2"),ma(ee(),"N1")].some(Boolean);[ne(),X(),q(),W(),typeof ee=="function"?ee():null].filter(Boolean).forEach(s=>_v(s)),(t||e)&&A(),wi();const n=a.lessons.find(s=>Ge(s));a.activeLessonId||(a.activeLessonId=n?.id||a.lessons[0]?.id||null)}function _v(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Ps(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function Gs(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],r=e.srsKanji[t],o=s||r||n;return e.studiedKanji[t]=o,e.srsKanji[t]=r||o,o}function wi(){a.progress.learningPath=$u(Vo(),a.progress.learningPath||{});const e=a.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[Ae]=!0,(Object.keys(a.progress.seenKanji||{}).length>0||Object.keys(ne().studiedKanji||{}).length>0||Object.keys(ne().completedLessons||{}).length>0||Object.keys(a.progress.lessonCompletions||{}).length>0)&&!t[Ae]&&(t[Ae]=a.progress.visits?.firstVisitDate||new Date().toISOString()),dl().forEach((o,l)=>{ne().completedLessons?.[o]&&!t[o]&&(t[o]=ne().completedLessons[o]),n[o]=!0});const r=Pu();e.currentNodeId=r,n[r]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function dl(){const e=(a.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:Sh.filter(t=>/^n5-lesson-\d+$/i.test(t))}function Pu(){const e=a.progress?.learningPath||Vo(),t=[Ae,...dl(),Ds];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||Ae}function ul(){return a.n5Textbook?.items?.length?Promise.resolve(a.n5Textbook):Mr||(Mr=Je(O.n5Lessons).then(e=>(a.n5Textbook=Wo(e),wi(),(a.route==="learn"||a.route==="home")&&R(),a.n5Textbook)).catch(e=>{throw Mr=null,e}),Mr)}function Pv(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(a.learningPathLessonPayloads[t])return Promise.resolve(a.learningPathLessonPayloads[t]);const n=Ch[t];if(!n){const r=Gr(t);return r&&(a.learningPathLessonPayloads[t]=r),Promise.resolve(r)}if(ni.has(t))return ni.get(t);const s=Je(n).then(r=>(a.learningPathLessonPayloads[t]=r||Gr(t),a.route==="learn"&&a.activeLearnNodeId===t&&R(),a.learningPathLessonPayloads[t])).catch(r=>{const o=Gr(t);if(o)return a.learningPathLessonPayloads[t]=o,a.route==="learn"&&a.activeLearnNodeId===t&&R(),o;throw r}).finally(()=>{ni.delete(t)});return ni.set(t,s),s}function In(){return wi(),a.progress.learningPath}function pl(){const e=In().activeSession;return!e?.nodeId||In().completedNodes?.[e.nodeId]?null:e}function Hs(){const e=pl();return e?.nodeId?e.nodeId:In().currentNodeId||Pu()||Ae}function Mu(e){const t=hs(e);return t?v(t.title):Mv(e)}function Mv(e){const t=String(e||"");if(t===Ae)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===Ds)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=Mt(t);if(n)return v(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Ev(e){const t=hs(e);return t?v(t.summary):""}function ue(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Mistakes",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Step",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Kv(){const e=ue();return{id:Ae,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Fv(){const e=Oe();return ue(),{id:Fs,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function Dv(){return{id:Ds,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function Bv(){const e=Number(a.n5Meta?.kanjiPerLesson||a.n5Meta?.cardsPerLesson||8);return dl().map((t,n)=>({id:t,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${n+1}`,en:`N5 · Lesson ${n+1}`},summary:n===0?{ru:`Первый интерактивный урок: ${e} знаков, чтения, примеры и мини-практика.`,en:`First interactive lesson: ${e} signs, readings, examples, and mini practice.`}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:n===0?12:10}))}function Eu(){const e=Kv(),t=Fv(),n=Dv(),s=a.n5Textbook?.items?.length?a.n5Textbook.items.map((o,l)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):Bv(),r=[e];return Oe()>0&&r.push(t),[...r,...s,n]}function hs(e){const t=String(e||"");return t&&Eu().find(n=>n.id===t)||null}function Ku(e){if(!e)return"locked";if(e.id===Fs)return Oe()>0?"review":"available";const t=In();return t.completedNodes?.[e.id]?"completed":Hs()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Ov(e){const t=ue();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function Fu(){const e=In(),t=Oe(),n=pl(),s=Hs(),r=hs(s),o=Number(wn().reviews||0)>=Number(a.progress.settings.dailyGoal||0);return!e.completedNodes?.[Ae]&&!n?{kind:"node",label:ue().start,nodeId:Ae}:n?.nodeId?{kind:"node",label:ue().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${ue().reviewAction}: ${t}`,nodeId:Fs}:o&&r?{kind:"node",label:ue().next,nodeId:r.id}:r?{kind:"node",label:e.completedNodes?.[Ae]?ue().resume:ue().start,nodeId:r.id}:{kind:"review",label:ue().reviewOld,nodeId:Fs}}function zv(){const e=ue(),t=ix(),n=t?.level||ln(),s=t?.lessonId||Fc(n),r=yn(n),o=yf(n);return{label:!!(t?.lessonId||r&&(Object.keys(r.completedLessons||{}).length>0||r.currentLessonId&&r.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Du(){return p()==="ru"?{sectionEyebrow:"Японские азбуки",sectionTitle:"Начни с каны",sectionHint:"Хирагана и катакана идут рядом с JLPT, но прогресс и статистика хранятся отдельно.",start:"Начать",continue:"Продолжить",review:"Повторить",lessons:"уроков",passed:"пройдено",due:"к повторению",mastered:"освоено",characters:"знаков",active:"выбранный курс",hiragana:"Хирагана",katakana:"Катакана"}:{sectionEyebrow:"Japanese syllabaries",sectionTitle:"Start with kana",sectionHint:"Hiragana and katakana live next to JLPT, while progress and stats stay separate.",start:"Start",continue:"Continue",review:"Review",lessons:"lessons",passed:"passed",due:"due",mastered:"mastered",characters:"characters",active:"selected course",hiragana:"Hiragana",katakana:"Katakana"}}function Uv(e){return e?!!(e.currentRoute||Object.keys(e.lessons||{}).length||Object.keys(e.practices||{}).length||Object.keys(e.review||{}).length||Object.keys(e.writing||{}).length||e.finalTest?.completed):!1}function Jv(e){if(!fe(e))return 0;const t=Date.now(),n=_t(e),s=Object.entries(n).map(([r,o])=>({cardId:r,...De(o)}));return rd(s,t).initial.length}function Gv(e){return fe(e)?Object.values(_t(e)).map(t=>De(t)).filter(t=>t.state==="Mastered").length:0}function Hv(e){return fe(e)?Object.values(_t(e)).map(t=>De(t)).filter(t=>t.state!=="New"||Number(t.reviewCount||0)>0).length:0}function qv(){const e=Du();return(a.kanaCatalog?.courses||[]).map(t=>{const n=String(t.slug||"").toLowerCase(),s=Rs(n),r=ht(n),o=s?.lessons?.[0]?.id||"lesson-1",l=r.currentRoute||o,c=Math.max(Number(s?.lessons?.length||0),Number(t.lesson_count||0)),d=s?.lessons?.length?s.lessons.filter(L=>Ki(n,L).passed).length:Object.values(r.lessons||{}).filter(L=>L?.passed).length,u=Math.max(Number(s?.base_characters?.length||0),Number(t.base_character_count||0)),f=Hv(n),h=Jv(n),m=M(d,Math.max(1,c)),S=M(f,Math.max(1,u)),x=Uv(r),$=n==="katakana"?e.katakana:e.hiragana;return{slug:n,title:$,subtitle:t.title||$,nativeTitle:t.native_title||(n==="katakana"?"カタカナ":"ひらがな"),description:t.description||"",currentRoute:l,started:x,dueCount:h,completedLessons:d,totalLessons:c,totalCharacters:u,masteredCount:Gv(n),progressPercent:Math.max(m,S),updatedAt:r.updatedAt||null}}).filter(t=>fe(t.slug))}function Wv(e){const t=e.filter(n=>n.started||n.updatedAt);return t.length&&t.sort((n,s)=>(Date.parse(s.updatedAt||"")||0)-(Date.parse(n.updatedAt||"")||0))[0]?.slug||""}function Xv(e,t,n){const s=e.slug===t,r=e.started?n.continue:n.start,o=`#textbooks/${g(e.slug)}/${g(e.currentRoute||"lesson-1")}`,l=e.totalLessons>0?`${e.completedLessons}/${e.totalLessons} ${n.lessons}`:`0 ${n.lessons}`,c=e.totalCharacters>0?`${e.masteredCount}/${e.totalCharacters} ${n.mastered}`:`${e.masteredCount} ${n.mastered}`;return`
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
          ${e.dueCount>0?`<button class="btn primary" type="button" data-action="home-review">${i(n.review)} · ${i(e.dueCount)}</button><a class="btn ghost" href="${o}">${i(r)}</a>`:`<a class="btn primary" href="${o}">${i(r)}</a><button class="btn ghost" type="button" disabled aria-disabled="true">${i(n.review)} · 0</button>`}
        </div>
      </article>
    `}function Qv(){const e=qv();if(!e.length)return"";const t=Du(),n=Wv(e);return`
      <article class="study-card home-kana-section" data-section="home-kana-courses">
        <div class="section-head">
          <div>
            <span class="eyebrow accent">${i(t.sectionEyebrow)}</span>
            <h2>${i(t.sectionTitle)}</h2>
            <p>${i(t.sectionHint)}</p>
          </div>
        </div>
        <div class="home-kana-grid">
          ${e.map(s=>Xv(s,n,t)).join("")}
        </div>
      </article>
    `}function Vv(){const e=jn(),t=Oe(),n=ue();return[{label:n.streak,value:a.progress.streak.current},{label:n.level,value:a.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Yv(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function Zv(){const e=p()==="ru",t=_l();return Te.map(n=>{const s=Ot(n),r=zt(n);yn(n);const o=En(n),l=Math.max(Number(s?.lessonCount||0),r.length||0),c=jt(n),d=bf(n),u=!d&&t===n,f=v(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),h=l>0?`${o}/${l} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",m=d?e?"Пройдено":"Completed":u?`${h} · ${e?"сейчас":"now"}`:c?h:$n(n);return{level:n,title:f,note:m,status:d?"done":u?"current":c?"open":"locked"}})}function eb(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function tb(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function Bu(){const e=Hs();return{title:Mu(e),summary:Ev(e)}}function B(e){const t=String(e);a.progress.cards[t]||(a.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=De(a.progress.cards[t]);return n.successRate=Tf(n),Number.isFinite(Number(n.srsStep))?n.srsStep=le(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=ml(n),a.progress.cards[t]=n,n}function Dr(e,t="seen"){if(!a.progress||!e?.id)return!1;pe();const n=new Date().toISOString();let s=!1;const r=String(e.id);return a.progress.seenCards[r]||(a.progress.seenCards[r]=n,s=!0),e.kanji&&!a.progress.seenKanji[e.kanji]&&(a.progress.seenKanji[e.kanji]={at:n,cardId:r,source:t,jlpt:e.jlpt||""},s=!0),s}function Br(e,t="seen"){Dr(e,t)&&A()}const At=[5/1440,1/24,12/24,1,2,4],gl=1;function ml(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<At.length;s+=1)if(t<=At[s]*1.08)return s;const n=At[At.length-1];return At.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function nb(e){const t=Math.trunc(e);return t<0?0:t<At.length?At[t]||At[0]:At[At.length-1]*2**(t-(At.length-1))}function sb(e,t,n=gl){const s=Array.isArray(e)?e.slice():[],r=Array.isArray(t)?t.slice():[],o=[],l=Math.max(1,Math.trunc(Number(n)||gl));let c=0,d=0,u=0;for(;c<s.length||d<r.length;){if(u>=l&&d<r.length){o.push(r[d++]),u=0;continue}if(c<s.length){o.push(s[c++]),u+=1;continue}if(d<r.length){o.push(r[d++]),u=0;continue}break}return o}function rb(e,t){const n=ml(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function ab(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function ki(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),r=Number(e.correct||0);return t+n*4+s*2-r*.05}function Vt(e,t,n="jlpt_lesson"){if(!t)return!1;const r=fl(e,t).reduce((o,l)=>Dr(l,n)||o,!1);return r&&A(),r}function fl(e,t){const n=String(e||"").toUpperCase();return n==="N5"?nn(t):n==="N4"?sr(t):n==="N3"?ar(t):n==="N2"?or(t):(t?.kanji||[]).map(s=>a.cards.find(r=>r.kanji===s&&String(r.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Ou(e){const t=a.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function zu(){return pe(),a.progress.evaRoomQuiz}function Uu(){const e=[a.cards||[],typeof Et=="function"?Et():[],typeof Ve=="function"?Ve():[],typeof Ye=="function"?Ye():[],typeof Ze=="function"?Ze():[]];return Ju(e.flat().filter(Boolean))}function ib(){if(!a.progress)return[];pe();const e=new Set(Object.keys(a.progress.seenCards||{})),t=new Set(Object.keys(a.progress.seenKanji||{})),n=new Set(Object.keys(a.progress.lessonCompletions||{})),s=ob(),r=Uu().filter(o=>{if(!o?.id||!o.kanji||!He(o,"ru")||!He(o,"en"))return!1;const l=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Ou(o)||n.has(o.lessonId)||s.has(`${l}:${o.kanji}`)||s.has(o.kanji)});return Ju(r)}function ob(){const e=new Set,t=(n,s)=>{if(!s)return;const r=String(n||"").toUpperCase();e.add(String(s)),r&&e.add(`${r}:${s}`)};return hl().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(r=>t(n.level,r)),Object.keys(s.completedLessons||{}).forEach(r=>{(n.lessonById(r)?.kanji||[]).forEach(l=>t(n.level,l))})}),e}function hl(){return[{level:"N5",course:ne,lessonById:Mt,markStudied:nr,markDifficult:Zr},{level:"N4",course:X,lessonById:Fn,markStudied:rr,markDifficult:na},{level:"N3",course:q,lessonById:Bn,markStudied:ir,markDifficult:ra},{level:"N2",course:W,lessonById:zn,markStudied:lr,markDifficult:ia}]}function Ju(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${He(n,"ru")}:${He(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function lb(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function cb(e){if(e.target.classList?.contains("detail-backdrop")){F("menu_close"),a.detailCardId=null,de();return}if(e.target.classList?.contains("final-test-backdrop")){a.finalTestModal=null,a.finalTestBusy=!1,de();return}if(e.target.classList?.contains("changelog-backdrop")){Uo();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(a.navMenu&&!t&&!e.target.closest("[data-action]")){a.navMenu=null,de();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,r=n.dataset.id;if(lb(n),!!Tv(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-Ad<280)){if(s&&s.endsWith("-complete-lesson")){const l=`${s.split("-")[0]}:${r||""}`;if(we.has(l)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(vl(s),requestAnimationFrame(()=>window.setTimeout(()=>pb(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Si(o)){Bb(o);return}a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),at(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),at(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&jf(n.dataset.shareSection||a.route,ex(n)).catch(()=>U(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&Lf(!Uc()),s==="notification-center"){if(a.notificationPromptVisible){Pf();return}(a.notificationPrompt?.docked||vo("header"))&&bo("header");return}if(s==="repeat-onboarding"){yl({force:!0});return}if(s==="onboarding-next"){ap();return}if(s==="onboarding-prev"){ip();return}if(s==="onboarding-continue"){Kb();return}if(s==="onboarding-close"||s==="onboarding-skip"){Ur({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){Nm(n.dataset.speechKey||"");return}if(s==="contact-email"&&(a.navMenu=null,a.contactModal=!0,de()),s==="copy-contact-email"&&Nf(dn).then(o=>{U(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(a.contactModal=!1,de()),s==="close-changelog"){Uo();return}if(s==="close-pwa-install-help"&&(a.pwaInstallHelpVisible=!1,de()),s==="close-nav-menu"&&(a.navMenu=null,de()),s==="close-final-test-modal"&&(a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,de()),s==="final-test-focus-missing"){const o=n.dataset.focus||a.finalTestModal?.focusSelector||null;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=o,de()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||a.finalTestModal?.level||"N5").toUpperCase();o==="N4"?kg(!0):o==="N3"?Rg(!0):o==="N2"?Jg(!0):o==="N1"?tm(!0):lg(!0)}if(s==="final-test-next-level"){const o=D(n.dataset.nextLevel||""),l=String(n.dataset.nextLesson||"");if(!o||!l)return;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,lo(o,l);return}if(s==="scroll-page-edge"&&((n.dataset.direction||$l())==="up"?bs():Fb()),s==="theme"&&Sx(),s==="language"&&Cx(),s==="sound"&&xf(),s==="toggle-ux-sound"&&Nx(),s==="export"&&ZN(),s==="apk-download"&&ge("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&Id.click(),s==="reset"&&jx(),s==="share-achievement"&&hx().catch(()=>U(_("shareFallback"))),s==="pwa-install"&&Vx(),s==="pwa-later"&&Vc(),s==="notification-allow"&&nL(),s==="notification-later"&&wo(),s==="mascot-click"&&OC(n.dataset.character),s==="eva-click"&&_m(),s==="eva-dialogue-skip"&&ub(n),s==="dictionary-favorites-tab"&&(a.filters.favorites=n.dataset.favorites||"all",a.dictionaryVisibleCount=Ir,de()),s==="set-learn-jlpt"){a.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=Rl();_p(o),a.activeCardId=null,de()}if(s==="dictionary-load-more"&&(a.dictionaryVisibleCount+=jh,de()),s==="toggle-favorite"&&NN(r),s==="eva-room-choice"&&Zw(n),s==="eva-question-answer"&&Jw(n),s==="eva-room-reset"&&tk(),s==="toggle-eva-autonomy"&&dk(),s==="cycle-eva-autonomy"&&uk(),s==="eva-autonomy-room-mode"&&pk(),s==="eva-autonomy-outfit-mode"&&gk(),s==="eva-autonomy-next"&&Tp(),s==="eva-autonomy-clear"&&mk(),s==="eva-room-shop-open"&&(a.evaRoomShopOpen=!0,he("shop_opened"),de()),s==="eva-room-shop-close"&&(a.evaRoomShopOpen=!1,de()),s==="eva-bg-buy"&&nk(r),s==="eva-bg-select"&&sk(r),s==="eva-sprite-buy"&&rk(r),s==="eva-sprite-select"&&ak(r),s==="shop-category"&&(a.shopFilters.category=n.dataset.category||"all",de()),s==="shop-filter"&&(a.shopFilters.view=n.dataset.filter||"all",de()),s==="shop-sort"&&(a.shopFilters.sort=n.dataset.sort||"featured",de()),s==="shop-buy"&&Mi(r),s==="shop-select"&&Ei(r),s==="shop-clear-effect"&&Ip(r),s==="shop-clear-item"&&lk(r),s==="clear-writing"&&YC(),s==="undo-writing"&&ZC(),s==="check-writing"&&eN(!0),s==="replay-writing"&&Fm(),s==="play-writing-step"&&Dm(),s==="writing-step-prev"&&Bm(-1),s==="writing-step-next"&&Bm(1),s==="select-writing-step"&&Om(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&k0(Number(n.dataset.index)),s==="undo-sentence-tile"&&y0(),s==="clear-sentence"&&$0(),s==="check-sentence"&&j0(),s==="next-sentence"&&C0(),s==="reading-review-tile"&&zy(Number(n.dataset.index)),s==="reading-review-undo"&&Uy(),s==="reading-review-clear"&&Jy(),s==="reading-review-check"&&rg(),s==="reading-review-answer"&&Oy(n),s==="toggle-reading-translation"&&Gy(),s==="add-custom-sentence"&&a0(),s==="edit-custom-sentence"&&o0(n.dataset.id),s==="delete-custom-sentence"&&l0(n.dataset.id),s==="cancel-custom-sentence-edit"&&c0(),s==="insert-jlpt-tile"&&WN(Number(n.dataset.index)),s==="undo-jlpt-tile"&&XN(),s==="clear-jlpt-practice"&&QN(),s==="check-jlpt-practice"&&VN(),s==="next-jlpt-practice"&&YN(),s==="kana-submit-exercise"&&ty(n),s==="kana-writing-done"&&ny(n.dataset.course||"",n.dataset.lesson||""),s==="kana-srs"&&ay(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="kana-lesson-card"&&ry(n.dataset.course||"",n.dataset.lesson||"",n.dataset.kana||"",n.dataset.rating||"remember"),s==="kana-lesson-card-reset"&&sy(n.dataset.course||"",n.dataset.lesson||""),s==="kana-toggle-romaji"&&oy(),s==="play-kana-tts"&&ly(n.dataset.text||""),s==="kana-download-pdf"&&ge("kana_pdf_download",{course:n.dataset.course||""}),s==="retry-jlpt-course-data"&&qh(n.dataset.level||a.activeTextbookLevel||""),s==="n5-open-lesson"&&Vy(r),s==="n5-overview"&&Yy(),s==="n5-review"&&Zy(n.dataset.mode||null),s==="n5-answer"&&Hy(n),s==="n5-check-input"&&qy(r),s==="n5-srs"&&ig(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&Xy(r),s==="n5-complete-lesson"&&Qy(r),s==="jlpt-lesson-answer"&&Wy(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||r,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&n$(n),s==="n5-final-submit"&&lg(),s==="n5-final-reset"&&s$(),s==="n4-open-lesson"&&L$(r),s==="n4-overview"&&A$(),s==="n4-review"&&I$(n.dataset.mode||null),s==="n4-kanji"&&T$(),s==="n4-grammar"&&R$(),s==="n4-reading"&&_$(),s==="n4-listening"&&P$(),s==="n4-final"&&M$(),s==="n4-answer"&&y$(n),s==="n4-check-input"&&$$(r),s==="n4-srs"&&vg(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&j$(r),s==="n4-complete-lesson"&&S$(r),s==="n4-grammar-complete"&&C$(r,n.dataset.value||""),s==="n4-reading-complete"&&N$(r,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&x$(r,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&F$(n),s==="n4-final-submit"&&kg(),s==="n4-final-reset"&&D$(),s==="n3-open-lesson"&&uj(r),s==="n3-overview"&&pj(),s==="n3-review"&&gj(n.dataset.mode||null),s==="n3-kanji"&&mj(),s==="n3-grammar"&&fj(),s==="n3-reading"&&hj(),s==="n3-listening"&&vj(),s==="n3-final"&&bj(),s==="n3-answer"&&rj(n),s==="n3-check-input"&&aj(r),s==="n3-srs"&&Ag(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&ij(r),s==="n3-complete-lesson"&&oj(r),s==="n3-grammar-complete"&&lj(r,n.dataset.value||""),s==="n3-reading-complete"&&cj(r,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&dj(r,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&yj(n),s==="n3-final-submit"&&Rg(),s==="n3-final-reset"&&$j(),s==="n2-open-lesson"&&Wj(r),s==="n2-overview"&&Xj(),s==="n2-review"&&Qj(n.dataset.mode||null),s==="n2-kanji"&&Vj(),s==="n2-grammar"&&Yj(),s==="n2-reading"&&Zj(),s==="n2-listening"&&eS(),s==="n2-final"&&tS(),s==="n2-answer"&&Oj(n),s==="n2-check-input"&&zj(r),s==="n2-srs"&&Og(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&Uj(r),s==="n2-complete-lesson"&&Jj(r),s==="n2-grammar-complete"&&Gj(r,n.dataset.value||""),s==="n2-reading-complete"&&Hj(r,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&qj(r,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&rS(n),s==="n2-final-submit"&&Jg(),s==="n2-final-reset"&&aS(),s==="n1-open-lesson"&&RS(r),s==="n1-overview"&&_S(),s==="n1-review"&&PS(n.dataset.mode||null),s==="n1-kanji"&&MS(),s==="n1-grammar"&&ES(),s==="n1-reading"&&KS(),s==="n1-listening"&&FS(),s==="n1-final"&&DS(),s==="n1-answer"&&CS(n),s==="n1-check-input"&&NS(r),s==="n1-srs"&&Yg(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&xS(r),s==="n1-complete-lesson"&&LS(r),s==="n1-grammar-complete"&&AS(r,n.dataset.value||""),s==="n1-reading-complete"&&IS(r,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&TS(r,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&zS(n),s==="n1-final-submit"&&tm(),s==="n1-final-reset"&&US(),s==="review-exercise-next"){xs(),a.pendingFocus="__scroll-top__",R();return}if(s==="play-kanji-audio"){const o=ae(r)||ae(a.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?hf(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:(l={})=>ff(o,l)}):mf(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(kn(o)){if(on("jlpt-level",{level:o}),!jt(o)){a.activeTextbookLevel=o,a.activeJlptLesson=o,at("textbooks",null,o),U($n(o));return}a.activeJlptLesson=o,at("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(on("jlpt-start",{level:n.dataset.jlpt||ln()}),lo(n.dataset.jlpt||ln())),s==="social-link"&&ge(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:a.route,source:n.dataset.network||"social"}),s==="play-audio"&&BN(n.dataset.audio,n.dataset.label),s==="close-reward"&&(a.rewardModal=a.rewardQueue.shift()||null,a.rewardModal&&Mm(a.rewardModal),It()),s==="set-goal"&&(a.progress.settings.dailyGoal=Number(n.dataset.goal),A(),U(`${_("dailyGoal")}: ${a.progress.settings.dailyGoal}`),R()),s==="buy-shop"&&Mi(r),s==="start-due"&&(at("textbooks"),Oe()||U(Fe("eva","welcome"))),s==="home-lesson"){const o=D(n.dataset.level||"")||ln(),l=String(n.dataset.lessonId||"");lo(o,l)}if(s==="home-review"&&(Oe()?at("review"):U(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&(on("home-primary"),$k()),s==="learning-path-node"&&(on("learning-path",{lessonId:n.dataset.node||r}),Pp(n.dataset.node||r)),s==="learning-path-back"&&vs(),s==="learning-path-choice"){const o=String(n.dataset.node||""),l=String(n.dataset.step||""),c=String(n.dataset.value||""),d=Hr(o),u=d.steps.find(f=>f.id===l);if(!u||u.kind!=="quiz"||d.session.answers?.[l])return;d.session.answers[l]={selected:c,correct:c===u.answer,at:new Date().toISOString()},c===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],l])],d.session.updatedAt=new Date().toISOString(),A(),R()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||a.activeLearnNodeId||""),l=Hr(o);if(!l.steps.length)return;const c=l.steps[l.session.stepIndex];if(c?.kind==="quiz"&&!l.session.answers?.[c.id])return;l.session.stepIndex=Math.min(l.session.stepIndex+1,l.steps.length),l.session.updatedAt=new Date().toISOString(),A(),R()}if(s==="learning-path-retry"){const o=String(n.dataset.node||a.activeLearnNodeId||""),c=(Hr(o).session.mistakes||[]).slice();In().activeSession=Zo({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:c,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),A(),R()}if(s==="learning-path-continue"){const o=String(n.dataset.node||a.activeLearnNodeId||""),l=Hr(o);xk(o,l.session,l.steps),vs();return}if(s==="start-lesson"||s==="select-lesson"){const o=a.lessons.find(l=>l.id===r);if(!o||!Ge(o)){U(`${_("unlockedAt")} ${io(o)}`);return}if(a.activeLessonId=r,a.activeCardId=null,a.revealed=!1,ft(),s==="start-lesson"){on("legacy-lesson",{level:o.jlpt||"",lessonId:r}),he("lesson_start",{lessonId:r,jlpt:o.jlpt});const l=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(l)?(at("textbooks",null,l),a.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(l)}/${encodeURIComponent(o.id)}`),R()):vs(pn,o.id)}else R()}if(s==="show-answer"&&(Br(ae(a.activeCardId),"show_answer"),a.revealed=!0,ft(),Ie()),s==="check-reading"){const o=document.getElementById(`readingCheck-${r||a.activeCardId}`);o&&(a.readingCheck.value=o.value,a.readingCheck.cardId=r||a.activeCardId),nf()}if(s==="rate"&&PC(n.dataset.rating),s==="rate-kana-review"&&Am(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="open-card"&&(Br(ae(r),"card_details"),a.detailCardId=r,R()),s==="open-kanji-page"&&hb(r),s==="close-detail"&&(a.detailCardId=null,de()),s==="study-card"){const o=ae(r);if(!o)return;Br(o,"study_card"),a.activeLessonId=o.lessonId,a.activeCardId=o.id,a.revealed=!1,ft(o.id),a.detailCardId=null,vs(pn,o.lessonId)}}}function db(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;Ad=Date.now(),e.preventDefault(),vl(n),n==="eva-click"&&_m(),n==="eva-autonomy-next"&&Tp()}function vl(e="activity"){a.evaRuntime&&(a.evaRuntime.lastPlayerActionAt=Date.now(),a.evaRuntime.memory=ms(mn(),a.evaRuntime.memory||{}),a.evaRuntime.memory.lastRoute=a.route,e.startsWith("eva")&&(a.evaRuntime.memory.lastInteractionDate=oe()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(a.evaRuntime.lastPlayerActionAt=Date.now()))}function ub(e){if(!a.evaRuntime)return;const t=e?.dataset?.lineId||se().currentLine?.id||"";!t||a.evaRuntime.textRevealSkippedLineId===t||(a.evaRuntime.textRevealSkippedLineId=t,fs(),R())}function pb(e,t){if(!(!e||t?.disabled)&&!gb(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){F("menu_open");return}if(e==="eva-room-shop-close"){F("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Si(t.dataset.route)){F(a.navMenu===t.dataset.route?"menu_close":"menu_open");return}F("tab_switch");return}if(e==="nav-menu-route"){F("tab_switch");return}if(e==="close-nav-menu"){F("menu_close");return}if(e==="toggle-header-socials"){F(Uc()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){F("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){F("menu_close");return}if(e==="notification-center"){F("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){F("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){F("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){F("notification_soft");return}t?.matches("button, .btn, [role='button']")&&F("button_click"),e!=="toggle-header-socials"&&Lf(!1)}}function gb(e,t){return["learn","review"].includes(a.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function Gu(e){var d;vl("input");const t=e.target.closest("[data-ux-volume]");if(t){Tx(Number(t.value)/100);const u=document.querySelector("[data-ux-volume-label]");u&&(u.textContent=`${Math.round(mo()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){a.readingCheck={cardId:n.dataset.id||a.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const u=Me(),f=s.dataset.sentenceDraft;u.customDraft=bi(u.customDraft||{}),f&&Object.prototype.hasOwnProperty.call(u.customDraft,f)&&(u.customDraft[f]=s.value,u.customMessage="",u.customStatus="",A());return}const r=e.target.closest("[data-kana-exercise-form] input");if(r){const u=r.closest("[data-kana-exercise-form]"),f=Kl(u?.dataset.course||"",u?.dataset.owner||"",u?.dataset.ownerType||"",u?.dataset.exercise||""),h=String(r.name||"").replace(/^kana-/,"");f&&h&&((d=a.kanaExerciseDrafts)[f]||(d[f]={}),a.kanaExerciseDrafts[f][h]=r.value);return}const o=e.target.closest("[data-filter]");if(!o)return;const l=o.dataset.filter,c=o.selectionStart;a.filters[l]=o.value,a.dictionaryVisibleCount=Ir,R(),requestAnimationFrame(()=>{const u=document.getElementById(o.id);u&&(u.focus(),typeof c=="number"&&"setSelectionRange"in u&&u.setSelectionRange(c,c))})}function mb(e){if(Mb(e)||fb(e))return;if(e.key==="Escape"&&(a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal||a.navMenu)){a.detailCardId=null,a.rewardModal=null,a.finalTestModal=null,a.contactModal=!1,a.pwaInstallHelpVisible=!1,a.navMenu=null,a.changelogModal?Uo():R();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),a.readingCheck.value=t.value,a.readingCheck.cardId=t.dataset.id||a.activeCardId,nf())}function fb(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(si=`${si}${e.key.toLowerCase()}`.slice(-ce.length),si!==ce)?!1:(si="",Hu(5e3),!0)}function Hu(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return a.progress?(H(0,t,"cheat:moon_farm"),V(),A(),F("moon_fragment_gain"),U(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),R(),a.progress.moonFragments):0}function vs(e=un,t=null,n=null){a.route="learn",a.activeLearnView=e,a.activeLearnNodeId=e===Ht&&String(t||"")||null,a.activeLearnLegacyLessonId=e===pn&&String(t||"")||null;const s=e===Ht&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===pn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),a.activeTextbookLevel=null,a.activeTextbookSubroute=null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=n,a.evaRoomShopOpen=!1,ft(),Tt(),de()}function at(e,t=null,n=null){if(e==="learn"){vs(un,null,t);return}if(!sh(e)){const r=String(e||"");xr(me("hash","unknown-route",r,r?[r]:[])),vt(r?`#${encodeURIComponent(r)}`:"#not-found"),a.pendingFocus=t,a.navMenu=null,ft(),Tt(),Ie();return}const s=a.route;if(a.route=e,a.routeMatch=null,a.routeNotFound=null,s!==a.route&&(s==="review"||a.route==="review")&&(a.reviewSession=null),a.route==="textbooks"){const r=n?String(n):"",o=D(r),l=fe(r)?r.toLowerCase():"",c=o||l;if(r&&!c){xr(me("hash","invalid-parameter",`textbooks/${r}`,["textbooks",r])),vt(`#textbooks/${encodeURIComponent(r)}`),a.pendingFocus=t,Ie();return}a.activeTextbookLevel=c||null,a.activeTextbookSubroute=null}else if(a.route==="jlpt-lesson"){const r=n?String(n).toUpperCase():a.activeJlptLesson||vL()||"";if(r&&!D(r)){xr(me("hash","invalid-parameter",`jlpt-lesson/${r}`,["jlpt-lesson",r])),vt(`#jlpt-lesson/${encodeURIComponent(r)}`),a.pendingFocus=t,Ie();return}a.activeJlptLesson=r||null}else a.activeTextbookLevel=null,a.activeTextbookSubroute=null;if(a.route!=="review"&&xs(),a.route==="textbooks")vt(Of(a.activeTextbookLevel||"",a.activeTextbookSubroute||""));else{const r=a.route==="learn"?"#learn":a.route==="jlpt-lesson"&&a.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(a.activeJlptLesson)}`:`#${a.route}`;vt(r)}a.route!=="kanji"&&(a.kanjiPageId=null),a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=t,a.route!=="eva-room"&&(a.evaRoomShopOpen=!1),ft(),Tt(),Ie(),Er(a.route)&&ri({route:a.route,delay:0}),a.route==="eva-room"&&he("room_opened")}function hb(e){const t=ae(e);if(!t)return;a.route="kanji",a.kanjiPageId=t.id,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.evaRoomShopOpen=!1,ft();const n=`#kanji/${encodeURIComponent(t.id)}`;vt(n),Tt(),Ie()}function vb(){return a.routeMatch||Da(Nr())}function bb(){const e=vb();if(!Cd){zA(e,a),Cd=!0,qu(e);return}UA(e,a).sent&&qu(e)}function qu(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){ge("review_open",{route:"review"});return}if(e.route==="kanji"){ge("kanji_open",{route:"kanji",cardId:t.cardId||a.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){ge("lesson_open",{route:"jlpt-lesson",level:t.level||a.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){ge("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){ge("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}wb(n)&&ge("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}if(e.route==="textbooks"&&t.course){const n=String(t.subroute||"");n?n==="final"||n==="final-test"?ge("kana_final_test_start",{route:"textbooks",course:t.course}):/^lesson-\d+$/i.test(n)&&ge("kana_lesson_open",{route:"textbooks",course:t.course,lessonId:n}):ge("kana_course_open",{route:"textbooks",course:t.course})}}function wb(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function Wu(){const e=Lh.begin(a.route);Za=!0,ei=null,uN();try{Yb(),yb(),bb();let t="";if(a.route===cd&&(t=Or(a.routeNotFound)),a.route==="home"&&(t=tw()),a.route==="download"&&(t=qb()),a.route==="about"&&(t=Xb()),a.route==="learn"&&(t=yk(),a.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(Rc)),a.route==="review"&&(t=QS(),a.pendingFocus!=="sentence-practice"&&requestAnimationFrame(Rc)),a.route==="dictionary"&&(t=H0()),a.route==="kanji"&&(t=V0()),a.route==="writing"&&(t=mC(),requestAnimationFrame(WC)),a.route==="stats"&&(t=bC(),requestAnimationFrame(Em)),a.route==="achievements"&&(t=yC()),a.route==="eva-room"&&(t=iw()),a.route==="jlpt-lesson"&&(t=Ik()),a.route==="textbooks"&&(t=Tk()),t||(t=Or(me("hash","unknown-route",String(a.route||""),a.route?[String(a.route)]:[]))),!e.isCurrent())return;Nn.innerHTML=`${t}${Jb()}${$b()}`,document.body.classList.toggle("modal-open",!!(a.detailCardId||Lm()||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal)),RC(),requestAnimationFrame(()=>{Vb(),jl(),Rb()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${a.route} build=${T}`,t?.stack||t),Nn.innerHTML=yi(t))}finally{Za=!1}}function de(){Bs||(Bs=requestAnimationFrame(()=>{Bs=0,Wu()}))}function Ie(){Bs&&(cancelAnimationFrame(Bs),Bs=0),Wu()}function Yt(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function It(){if(typeof window>"u"){Ie();return}const e=window.scrollX,t=window.scrollY;Ie(),Yt(e,t),requestAnimationFrame(()=>{Yt(e,t),requestAnimationFrame(()=>Yt(e,t))}),window.setTimeout(()=>Yt(e,t),120),window.setTimeout(()=>Yt(e,t),320)}function R(){de()}function yi(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(a.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function Or(e=a.routeNotFound){kb();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},r=e?.raw||location.pathname||location.hash||"";return`
      <section class="page empty-state not-found-page" data-route-error="not-found" data-route-not-found="${g(n)}">
        <span class="kanji-char" aria-hidden="true">無</span>
        <p class="eyebrow">404 · Flash Kanji</p>
        <h1>${i(t?"Страница не найдена":"Page not found")}</h1>
        <p>${i(s[n]||s["unknown-route"])}</p>
        <p class="label"><code>${i(r)}</code></p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="route" data-route="home">${i(t?"На главную":"Home")}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(t?"К учебникам":"Textbooks")}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">${i(t?"В словарь":"Dictionary")}</button>
        </div>
      </section>
    `}function kb(){document.title=(p()==="ru","404 — Flash Kanji"),Xu("robots","noindex, follow"),Qu("/404.html")}function yb(){a.route!==cd&&(document.title=Th,Xu("robots","index, follow"),Qu("/"))}function Xu(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function Qu(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function $b(){const e=`${Qb()}${hC()}${SC()}${A0()}${CC()}${NC()}${xC()}${LC()}${AC()}${Db()}`;return e?`<div class="modal-layer">${e}</div>`:""}function Vu(){return ke?.isConnected?ke:document.body?(ke||(ke=document.createElement("div"),ke.className="flash-kanji-onboarding-root",ke.setAttribute("role","presentation"),ke.setAttribute("aria-hidden","false")),ke.isConnected||document.body.appendChild(ke),ke):null}const bl=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],$i={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Yu(){try{return localStorage.getItem(md)==="true"}catch{return!1}}function jb(){try{return localStorage.getItem(hd)||""}catch{return""}}function ji(e){try{localStorage.setItem(hd,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function Sb(e=a.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function Cb(e=!1){const t=jb();return t==="returning"||t==="completed"?t:Yu()?(ji("completed"),"completed"):e?(ji("returning"),"returning"):(ji("new"),"new")}function Zu(){return!Yu()}function Nb(){try{localStorage.getItem(fd)==="true"&&localStorage.removeItem(fd)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function xb(){try{localStorage.setItem(md,"true"),ji("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function ep(){return xt}function zr(){return bl.length}function wl(){return bl[le(Wt,0,zr()-1)]||bl[0]}function Lb(e=wl()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function Ab(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function tp(e=wl()){for(const t of Lb(e)){const s=Array.from(document.querySelectorAll(t)).find(r=>Ab(r));if(s)return s}return null}function np(e,t=null){return typeof e=="function"?np(e(t),t):v(e||{ru:"",en:""})}function Ib(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tb(){return!(xt||!a.progress||!a.i18n||!a.lessons.length||!document.body||document.visibilityState!=="visible"||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.navMenu)}function kl(e=!1,t=yh){clearTimeout(Os),!(!e&&!Zu())&&(Os=window.setTimeout(()=>{Os=0,yl({force:e})},t))}function yl(e={}){const t=!!e.force;let n=!1;if(xt){if(!t)return!0;Ur({completed:!1,silent:!0})}if(!t&&!Zu())return!1;if(!Tb())return kl(t,vd),!1;clearTimeout(Os);try{To=document.activeElement instanceof HTMLElement?document.activeElement:null,xt=!0,xe="step",Wt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(r){console.warn("Could not make the app shell inert.",r)}}return Vu(),qs(),sp(),n=!0,window.addEventListener("scroll",Tn,{passive:!0}),window.addEventListener("resize",Tn),window.addEventListener("orientationchange",Tn),Tn(),rp(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),Ur({completed:!1,silent:!0}),n||kl(t,vd),!1}}function Ur(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(Os),Os=0,cancelAnimationFrame(Rr),Rr=0,window.removeEventListener("scroll",Tn),window.removeEventListener("resize",Tn),window.removeEventListener("orientationchange",Tn),Xt&&Xt.classList.remove("is-onboarding-target"),Xt=null,xt=!1,xe="step",Wt=0,ke&&(ke.remove(),ke=null,rt=null,Re=null),document.body.classList.remove("onboarding-open");const r=document.querySelector(".app-shell");if(r){r.removeAttribute("aria-hidden");try{r.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&xb(),n||(s?at(s):R()),To?.focus&&requestAnimationFrame(()=>{try{To.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function qs(){if(!Vu())return;const e=xe==="final"?null:wl(),t=xe==="final"?null:tp(e),n=xe==="final"?$i.title:e.title,s=xe==="final"?$i.text:np(e.text,t),r=xe==="final"?p()==="ru"?"Готово":"Done":`${Wt+1} ${p()==="ru"?"из":"of"} ${zr()}`,o=v(n),l=v(s),c=Qi("eva","calm","welcome"),d=zr();ke.classList.toggle("is-final",xe==="final"),ke.classList.toggle("has-target",!!t),ke.dataset.view=xe;const u=xe==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(v($i.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(v($i.close))}</button>
      `:Wt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;ke.innerHTML=`
      ${xe==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${xe==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${xe==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
        <div class="flash-kanji-onboarding-head">
          <span class="pill">${i(r)}</span>
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
    `,rt=_e("[data-onboarding-spotlight]",ke),Re=_e(".flash-kanji-onboarding-dialog",ke),Xt&&Xt!==t&&Xt.classList.remove("is-onboarding-target"),Xt=t||null,Xt&&Xt.classList.add("is-onboarding-target"),Re&&(Re.dataset.totalSteps=String(d)),Tn()}function Tn(){xt&&(Rr||(Rr=requestAnimationFrame(()=>{Rr=0,sp()})))}function sp(){if(!xt||!ke||!Re)return;const e=xe==="final"?null:Xt||tp();Ib();const t=window.innerWidth,n=window.innerHeight;if(Re.style.maxWidth=`${Math.min($h,Math.max(280,t-16))}px`,Re.style.maxHeight=`${Math.max(180,n-24)}px`,Re.style.left="50%",Re.style.top="50%",Re.style.transform="translate(-50%, -50%)",Re.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&rt?(rt.hidden=!1,rt.style.left=`${Math.round(s.left-12)}px`,rt.style.top=`${Math.round(s.top-12)}px`,rt.style.width=`${Math.round(s.width+12*2)}px`,rt.style.height=`${Math.round(s.height+12*2)}px`,rt.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):rt&&(rt.hidden=!0)}else rt&&(rt.hidden=!0);ke.style.visibility="visible",rp()}function Rb(){xt&&qs()}function rp(){if(!Re)return;const e=Re.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Re.querySelectorAll("button"),n=e||t[0]||Re;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function _b(){return Re?Array.from(Re.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function Pb(e=1){const t=_b();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),r=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[r]?.focus?.()}function Mb(e){return xt?e.key==="Tab"?(e.preventDefault(),Pb(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),Ur({completed:xe==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),ap(),!0):e.key==="ArrowLeft"?(e.preventDefault(),ip(),!0):!1:!1}function ap(){if(!xt)return;const e=zr()-1;if(xe!=="final"){if(Wt<e){Wt+=1,qs();return}xe="final",qs()}}function ip(){if(xt){if(xe==="final"){xe="step",Wt=zr()-1,qs();return}Wt>0&&(Wt-=1,qs())}}function Eb(e=null){Ur({completed:!0,routeTo:e})}function Kb(){Eb("textbooks")}function bs(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Tt(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>bs()))}function Fb(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function op(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function $l(){return op()?window.scrollY>32?"up":"down":null}function Db(){const e=$l()||"down",t=op()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",r=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(r)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function jl(){const e=_e('[data-action="scroll-page-edge"]');if(!e)return;const t=$l();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const r=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",r),e.setAttribute("title",r)}function Si(e){return e!=="review"&&lp(e).length>1}function Bb(e){if(!Si(e)){at(e);return}a.navMenu=a.navMenu===e?null:e,de()}function lp(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:_l(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"▥",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"◈",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"▥",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function Sl(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":_(e)}function Ob(){return["home","textbooks","review","dictionary","download","stats","about"]}function zb(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function Ub(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(zb(e))}</span>
          <span>${i(Sl(e))}</span>
        </button>
      </li>
    `}function Jb(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",r=e?"Соцсети":"Social";return`
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
                ${Ob().map(o=>Ub(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(r)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(Ct.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${$f("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(Ct.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${$f("instagram")}</span>
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
    `}function Gb(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function Hb(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function qb(){const e=Gb();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(fh)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(vh)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(Hb).join("")}
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
              <a class="btn ghost" href="${g(hh)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function Wb(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function Xb(){const e=Wb();return`
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
    `}function Qb(){const e=lp(a.navMenu);if(!e.length)return"";const t=a.navMenu,n=t?Sl(t):"";return`
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
    `}function Vb(){if(!a.pendingFocus)return;const e=a.pendingFocus;if(a.pendingFocus=null,e==="__scroll-top__"){Tt();return}const t={"lesson-card":".study-card, .daily-lesson-card","kana-character-card":"[data-section='kana-character-study-card']","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function Yb(){Oo(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===a.route||n==="learn"&&a.route==="textbooks"||n==="stats"&&a.route==="achievements"||n==="dictionary"&&a.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Si(n)),t.setAttribute("aria-expanded",a.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const r=t.querySelector("small");r&&n&&(r.textContent=Sl(n))});const e=_e('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),Zb(),Oc(),Ix(),zc(),ew()}function Zb(){const e=p()==="ru",t={sidebar:e?"Основная навигация Flash Kanji":"Flash Kanji main navigation",sidebarNav:e?"Разделы Flash Kanji":"Flash Kanji sections",learning:e?"Обучение":"Learning",project:e?"Проект":"Project",progress:e?"Прогресс Flash Kanji":"Flash Kanji progress",profile:e?"Профиль Flash Kanji":"Flash Kanji profile",home:e?"На главную":"Go home",socialLinks:e?"Социальные ссылки":"Social links",reportBug:e?"Сообщить об ошибке":"Report a bug",theme:e?"Сменить тему":"Toggle theme",themeTitle:e?"Тема":"Theme",language:e?"Сменить язык":"Change language",languageTitle:e?"Язык":"Language",exportProgress:e?"Экспорт прогресса":"Export progress",exportTitle:e?"Экспорт":"Export",importProgress:e?"Импорт прогресса":"Import progress",importTitle:e?"Импорт":"Import",openProfile:e?"Открыть профиль":"Open profile",profileTitle:e?"Профиль":"Profile"},n=(s,r,o=r)=>{document.querySelectorAll(s).forEach(l=>{l.setAttribute("aria-label",r),l.setAttribute("title",o)})};document.querySelector(".app-sidebar")?.setAttribute("aria-label",t.sidebar),document.querySelector(".sidebar-nav")?.setAttribute("aria-label",t.sidebarNav),document.querySelector(".sidebar-progress")?.setAttribute("aria-label",t.progress),document.querySelector(".sidebar-user")?.setAttribute("aria-label",t.profile),document.querySelector("#headerSocialActions")?.setAttribute("aria-label",t.socialLinks),document.querySelectorAll("[data-nav-caption]").forEach(s=>{s.textContent=s.getAttribute("data-nav-caption")==="project"?t.project:t.learning}),n('.brand-mark[data-action="route"][data-route="home"]',t.home),n('[data-action="contact-email"]',t.reportBug),n('[data-action="theme"]',t.theme,t.themeTitle),n('[data-action="language"]',t.language,t.languageTitle),n('.icon-btn[data-action="export"]',t.exportProgress,t.exportTitle),n('.icon-btn[data-action="import"]',t.importProgress,t.importTitle),n('.sidebar-user-open[data-action="route"][data-route="stats"]',t.openProfile,t.profileTitle)}function ew(){const e=_e("#sidebarProgressBar"),t=_e("#sidebarProgressLabel"),n=_e("#sidebarProgressPercent"),s=_e("#sidebarProgressNote"),r=_e("#sidebarUserAvatar"),o=_e("#sidebarUserTitle"),l=_e("#sidebarUserSubtitle"),c=jn(),d=Bu(),u=Oe(),f=Math.max(1,Number(a.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${f}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${ue().reviewQueue} · ${d.title||ue().mapHint}`:`${d.title||ue().mapHint}${d.summary?` · ${d.summary}`:""}`),r&&(r.textContent=`Lv ${f}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),l&&(l.textContent=`${ue().level} ${f} · ${a.progress?.streak?.current||0} ${ue().streak}`)}function tw(){a.n5Textbook?.items?.length||ul();const e=nw(),t=zv(),n=Oe(),s=Bu(),r=Vv(),o=ue(),l=jn(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:a.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:a.progress.moonFragments}],f=_f();return`
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
          ${r.map(Yv).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            ${Qv()}
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"Маршрут N5":"N5 route")}</span>
                  <h2>${i(d?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${i(d?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${Zv().map(eb).join("")}
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
                ${u.map(tb).join("")}
              </div>
            </article>
            ${Ma()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(f.install)}</button>
                <p class="home-install-hint">${i(f.description)}${Cr()?` ${i(f.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${rw(e)}
          </aside>
        </section>
      </section>
    `}function nw(){sw();const e=se(),t=e.currentLine||a.evaRuntime?.currentPhrase||null,n=Pi(),s=v(jr("eva").name||{ru:"Ева",en:"Eva"}),r=a.evaRuntime?.mood||e.mood||Zt().mood,o=a.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",l=t?.state||a.evaRuntime?.presenceState||(n?"wait_choice":"speak"),c=Vs(t?.sprite||a.evaRuntime?.currentSkin||Cl());return{line:t,question:n,speaker:s,mood:r,emotion:o,presenceState:l,sprite:c}}function sw(){pe();const e=se();return e.currentLine?.text||a.evaRuntime?.currentPhrase?.text?e.currentLine||a.evaRuntime.currentPhrase:(Rp("manual"),se().currentLine||a.evaRuntime?.currentPhrase||null)}function rw(e){const t=_n(),n=Rn(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",r=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=r.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${up(v(r.text||{ru:"Я здесь.",en:"I'm here."}),o)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${i(n.question)}</span>
              <strong>${i(v(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(l=>`
                  <button class="btn ${l.id===e.question.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(l.id)}">
                    ${i(v(l.text))}
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
          <img class="${g(dp({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function cp(e){return e.line?.state||a.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function dp(e){const t=["eva-vn-sprite"],n=cp(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(a.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function aw(e){const t=String(e||"").trim();return t?(t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function up(e,t=""){const n=aw(e),r=`eva-dialogue-text ${a.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((l,c)=>`<span class="eva-line-piece" style="--i:${c}">${i(l)}</span>`).join(" "):i(e);return`<p class="${r}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function iw(){pe(),Ws(),Xr(),V();const e=Yw(),t=e.node,n=en()||e.bg||Xs(t.background),s=e.sprite||e.spriteSrc||Vs(e.spriteId||Pn(t.sprite)),r=_n(),o=Rn(),l=Array.isArray(t.choices)?t.choices:[],c=cp(e),d=e.line?.id||t.id||"eva_dialogue";return`
      <section class="page eva-room-page">
        <div class="eva-room-toolbar">
          <button class="btn ghost" type="button" data-action="route" data-route="home">← ${i(r.back)}</button>
          <div class="eva-room-currency">
            <span>Moon</span>
            <strong>${a.progress.moonFragments}</strong>
            <small>Moon Fragments</small>
          </div>
          <span class="eva-room-live-pill">${i(o.badge)}</span>
          <button class="btn primary" type="button" data-action="eva-room-shop-open">Shop · ${i(r.shop)}</button>
        </div>

        ${$w()}
        ${ww(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(c)}" data-eva-state="${g(c)}" data-eva-mood="${g(e.mood||Zt().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:${g(Jc(n.file))}; --eva-bg-fallback:${g(Jc("assets/bg/bg_study_hub.webp"))}">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(v(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(dp(e))}" src="${g(s)}" alt="${g(v(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${lw(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(v(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(v(n.title||{}))}</span>
            </div>
            ${up(v(t.text||{}),d)}
            ${e.isAutonomy?kw(r):`
              <div class="eva-choice-grid">
                ${l.map((u,f)=>`
                  <button class="btn ${f===0?"primary":"ghost"}" type="button" data-action="eva-room-choice" data-index="${f}">
                    ${i(v(u.text||{}))}
                    ${u.rewardMoonFragments?`<small>+${u.rewardMoonFragments} Moon</small>`:""}
                  </button>
                `).join("")}
              </div>
            `}
          </div>
        </article>

        <div class="eva-room-footer-actions">
          <button class="btn" type="button" data-action="eva-room-reset">${i(r.restart)}</button>
          <button class="btn" type="button" data-action="route" data-route="textbooks">${i(r.study)}</button>
          <button class="btn" type="button" data-action="route" data-route="review">${i(r.review)}</button>
        </div>

        ${a.evaRoomShopOpen?ow():""}
      </section>
    `}function ow(){const e=_n();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${pp({closable:!0})}
      </aside>
    `}function lw(e={}){const t=cw(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(Rt(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function cw(e={}){const t=e.decoration||se().currentDecoration||a.customization?.selected?.decoration||a.customization?.selected?.frame,n=ye(t);return!n||n.type!=="decoration"||!tn(n.id)?null:n}function pp(e={}){const t=ws(),n=gw(),s=qe().filter(r=>tn(r.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${a.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${qe().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(_n().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${dw().map(r=>`
            <button class="${a.shopFilters.category===r.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(r.id)}">
              ${i(v({ru:r.title_ru,en:r.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${uw().map(r=>`
            <button class="${a.shopFilters.view===r.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${pw().map(r=>`
            <button class="${a.shopFilters.sort===r.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(mw).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${jm({limit:6})}
        </div>
      </div>
    `}function dw(){return a.customizationCatalog?.categories?.length?a.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function uw(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function pw(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function gw(){const e=a.shopFilters.category||"all",t=a.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=qe().filter(r=>e==="all"||r.type===e);return t==="available"&&(s=s.filter(r=>Ap(r)==="available")),t==="owned"&&(s=s.filter(r=>tn(r.id))),t==="new"&&(s=s.filter(r=>!a.customization?.seen?.includes(r.id))),a.shopFilters.sort==="price"&&(s=[...s].sort((r,o)=>r.price-o.price)),a.shopFilters.sort==="rarity"&&(s=[...s].sort((r,o)=>(n[o.rarity]||0)-(n[r.rarity]||0)||r.price-o.price)),s}function mw(e){const t=Ap(e),n=ws(),s=n.status[t]||t,r=ck(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}" data-item-id="${g(e.id)}" data-shop-status="${g(t)}">
        <div class="custom-shop-preview">
          <img src="${g(hw(e))}" alt="${g(Rt(e))}" loading="lazy" onerror="this.onerror=null;this.src='assets/logo.webp';this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(vw(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(Rt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(fw(e))}</p>
          ${e.type==="outfit"&&gp(e)?`<blockquote class="custom-shop-phrase">${i(gp(e))}</blockquote>`:""}
          ${r?`<small class="custom-shop-unlock">${i(r)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(bw(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function ws(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function Rt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function fw(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function hw(e){return e?.preview||e?.asset||"assets/logo.webp"}function gp(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function vw(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function bw(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function ww(e){_n();const t=Rn(),n=se(),s=e.bg||en(),r=fp(e.spriteId||a.progress.selectedEvaSprite),o=ye(a.customization?.selected?.effect),l=ye(e.decoration||n.currentDecoration),c=yw(e.mood||n.mood),d=zu();return`
      <aside class="eva-autonomy-panel eva-live-status" data-eva-lines="${a.evaAutonomyLines.length}" data-eva-current="${g(n.currentLine?.id||"")}">
        <div>
          <span class="pill">${i(t.badge)}</span>
          <strong>${i(t.status)}</strong>
          <small>${i(t.hint)}</small>
        </div>
        <div class="eva-autonomy-meta">
          <span>${i(t.mood)}: ${i(c)}</span>
          <span>${i(t.quiz)}: ${i(d.correct||0)}/${i(d.answered||0)}</span>
          ${d.streak?`<span>${i(t.quizStreak)}: ${i(d.streak)}</span>`:""}
          <span>${i(v(s.title||{}))}</span>
          <span>${i(v(r?.title||{ru:"Ева",en:"Eva"}))}</span>
          ${l?`<span>${i(Rt(l))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(Rt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function kw(e){const t=Rn(),n=Pi();return n?.id?`
        <div class="eva-question-box">
          <span class="pill">${i(t.question)}</span>
          <strong>${i(v(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>`
              <button class="btn ${s.id===n.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(s.id)}">
                ${i(v(s.text))}
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
    `}function Rn(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function yw(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function $w(){const e=Zt(),t=_n(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${g(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([r,o,l])=>`
            <div class="eva-relationship-stat eva-stat-${r}">
              <div><span>${i(o)}</span><strong>${Math.round(l)}</strong></div>
              <i><b style="width:${le(l,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function _n(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function pe(){var t,n,s,r,o,l,c,d,u,f,h,m,S;(t=a.progress).seenCards||(t.seenCards={}),(n=a.progress).seenKanji||(n.seenKanji={}),(s=a.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),a.progress.unlockedBackgrounds.includes("bg_study_hub")||a.progress.unlockedBackgrounds.unshift("bg_study_hub"),(r=a.progress).selectedEvaRoomBackground||(r.selectedEvaRoomBackground="bg_study_hub"),(o=a.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(x=>{a.progress.unlockedEvaSprites.includes(x)||a.progress.unlockedEvaSprites.push(x)}),(l=a.progress).selectedEvaSprite||(l.selectedEvaSprite="idle");const e=Tu(Au(),a.progress.evaAutonomy||{});if((c=a.progress).evaAutonomy||(c.evaAutonomy={}),Object.keys(a.progress.evaAutonomy).forEach(x=>delete a.progress.evaAutonomy[x]),Object.assign(a.progress.evaAutonomy,e),a.evaRuntime||(a.evaRuntime=Qt()),(d=a.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=a.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(f=a.progress.evaRoomDialogueProgress).rewardsClaimed||(f.rewardsClaimed={}),(h=a.progress.evaRoomDialogueProgress).visited||(h.visited={}),a.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(a.progress.evaRoomDialogueProgress.lineHistory)?a.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(m=a.progress).evaRoomQuiz||(m.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(S=a.progress.evaRoomQuiz).rewarded||(S.rewarded={}),a.progress.evaRoomQuiz.history=Array.isArray(a.progress.evaRoomQuiz.history)?a.progress.evaRoomQuiz.history.slice(0,40):[],!a.progress.evaRelationship)a.progress.evaRelationship=il();else{const x=Iu(il(),a.progress.evaRelationship);Object.keys(a.progress.evaRelationship).forEach($=>delete a.progress.evaRelationship[$]),Object.assign(a.progress.evaRelationship,x)}}function Zt(){return pe(),a.progress.evaRelationship}function Ws(){if(!a.progress||!a.cards.length)return!1;pe();const e=a.progress.evaRelationship;let t=!1;const n=oe(),s=e.lastDecayDate||n,r=Math.max(0,ts(s,n));if(r>0){const N=a.progress.streak?.lastStudyDate,J=N?ts(N,n):r+1;!N||J>1?($e({warmth:-Math.min(10,r*1.2),trust:-Math.min(14,r*1.6),discipline:-Math.min(22,r*3.4)},"study_gap",{silent:!0}),t=!0):(a.progress.streak?.current||0)>0&&($e({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=Nc(),l={learned:o.learned,mastered:o.mastered,reviews:xc(),lessons:Object.keys(a.progress.lessonCompletions||{}).length,streak:Math.max(a.progress.streak?.current||0,a.progress.streak?.best||0),wrong:a.progress.totalWrong||0,writing:a.progress.writingPractice?.completed||0,sentence:Object.keys(a.progress.sentencePractice?.completed||{}).length},c=e.lastKnown||{},d=N=>Math.max(0,Number(l[N]||0)-Number(c[N]||0)),u={},f=d("reviews"),h=d("learned"),m=d("mastered"),S=d("lessons"),x=d("streak"),$=d("wrong"),L=d("writing"),k=d("sentence");return f&&(u.discipline=(u.discipline||0)+Math.min(18,f*.08),u.trust=(u.trust||0)+Math.min(10,f*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),m&&(u.trust=(u.trust||0)+Math.min(16,m*1.2),u.warmth=(u.warmth||0)+Math.min(8,m*.5)),S&&(u.warmth=(u.warmth||0)+Math.min(12,S*2),u.discipline=(u.discipline||0)+Math.min(10,S*1.5)),x&&(u.discipline=(u.discipline||0)+Math.min(15,x*3),u.warmth=(u.warmth||0)+Math.min(8,x)),L&&(u.curiosity=(u.curiosity||0)+Math.min(10,L*.8)),k&&(u.trust=(u.trust||0)+Math.min(10,k*.8)),$&&(u.discipline=(u.discipline||0)-Math.min(6,$*.12)),Object.keys(u).length&&($e(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,mp(),t}function $e(e={},t="relationship",n={}){pe();const s=a.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(r=>{typeof e[r]>"u"||(s[r]=ko(le(Number(s[r]||0)+Number(e[r]||0),0,100),1))}),mp(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function mp(){const e=a.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(a.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function Cl(){const e=a.customization?.selected?.outfit||a.progress?.shop?.equipped?.outfit||null,n=ye(e)?.spriteId||a.progress?.selectedEvaSprite||"idle";return a.evaSprites?.[n]&&xi(n)?n:"idle"}function jw(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Pn(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=Cl(),r=jw(n),o=n&&!r?n:s,l=a.evaRuntime?.mood||Zt().mood,c=t||(r?n:null)||a.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[l]||"idle",d=Lw(c),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(m=>Sw(m,d)),...u,...d,"idle","default"].filter(Boolean).find(m=>a.evaSprites?.[m]&&(xi(m)||!o||xi(o)))||"idle"}function Sw(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>a.evaSprites?.[o]),r=gs(n);return!r||r.defaultOwned||s.length<=1?s:Cw(s)}function Cw(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=Eo%t.length;return[...t.slice(n),...t.slice(0,n)]}function Nw(){const e=Cl(),t=gs(e);return!t||t.defaultOwned?!1:Object.keys(a.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function xw(){Mo&&window.clearInterval(Mo),Mo=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==Eo&&(Eo=e,!(document.hidden||!Nw())&&(a.route==="home"||a.route==="eva-room")&&R())},3e4)}function Lw(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=Aw(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function Aw(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function se(){return pe(),a.progress.evaAutonomy}function Ci(){const e=se();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function Ni(){const e=qe().filter(t=>t.type==="background").map(t=>({id:t.id,title:{ru:t.title_ru,en:t.title_en},file:t.asset||t.preview,price:t.price,defaultUnlocked:t.defaultOwned}));return e.length?e:a.evaBackgrounds?.length?a.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}]}function Xs(e){return Ni().find(t=>t.id===e)||Ni()[0]}function en(){pe();const e=th({catalogItems:qe(),owned:a.customization?.owned||a.progress.unlockedBackgrounds||[],customizationSelected:a.customization?.selected?.background,progressEquipped:a.progress?.shop?.equipped?.background,progressSelected:a.progress.selectedEvaRoomBackground});return a.progress.selectedEvaRoomBackground!==e&&(a.progress.selectedEvaRoomBackground=e),Xs(e)||Xs("bg_study_hub")}function Iw(e){const t=Xs(e);return t?t.defaultUnlocked||t.price===0||a.progress.unlockedBackgrounds.includes(t.id):!1}function Tw(){const e=qe().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>a.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function fp(e){return Tw().find(t=>t.id===e)}function xi(e){if(!e)return!1;const t=fp(e);return!!(t?.defaultUnlocked||t?.price===0||a.progress.unlockedEvaSprites?.includes(e)||a.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function Li(e){pe();const t=a.evaRuntime?.mood||fn(Pe()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],r=Ni().filter(l=>Iw(l.id));return s.map(l=>r.find(c=>c.id===l)).find(Boolean)||nt(r)||en()}function Ai(e){pe();const t=a.evaRuntime?.mood||fn(Pe()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(r=>xi(r)&&a.evaSprites?.[r])||a.progress.selectedEvaSprite||"idle"}function Rw(e){return e==="generated_line"?_w():a.evaRoomDialogues.find(t=>t.id===e)||a.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function _w(){pe();const e=_n(),t=a.progress.evaRoomDialogueProgress.generatedLine||Np("adaptive");return a.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||en().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function Ii(){return Array.isArray(a.evaRoomLines)?a.evaRoomLines:[]}function Pw(e="auto"){const t=a.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function hp(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function Mw(e,t=Pe()){const n=e?.conditions||{},s=(o,l)=>{const c=hp(l);return!c.length||c.includes(String(o))},r=(o,l)=>{const c=hp(l);return!c.length||c.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!r(t.activeSkin,n.activeSkin)||!r(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function Ew(e="auto",t=Pe()){return null}function Ti(e,t="auto",n=Pe()){if(!a.evaRuntime||!e?.id)return;a.evaRuntime.memory=ms(mn(),a.evaRuntime.memory||{});const s=a.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const r=e.category||t;s.recentTopics=[r,...(s.recentTopics||[]).filter(o=>o!==r)].slice(0,20),s.lastRoute=n.route||a.route,s.lastInteractionDate=oe(),s.lastKnownMood=a.evaRuntime.mood||Zt().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function vp(e){if(!a.evaRuntime)return;a.evaRuntime.memory=ms(mn(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory;t.lastRoute=a.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=oe()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function Kw(){return{quiet:12e4,normal:ns(45e3,12e4),active:45e3}}function Fw(){Po&&window.clearInterval(Po),Po=window.setInterval(Dw,5e3)}function Qs(){const e=se(),t=Kw()[e.frequency]||ns(45e3,12e4);e.nextSpeakAt=Date.now()+t}function Dw(){if(document.hidden||!a.progress||!a.evaRuntime)return!1;const e=Pe(),t=a.evaRuntime,n=se(),s=Date.now();let r=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return he("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=fn(e),l=Ri(e,o);(o!==t.mood||l!==t.emotion)&&(t.mood=o,t.emotion=l,n.mood=o,n.emotion=l,t.lastEmotionChangeAt=s,t.cooldowns.emotion=ns(15e3,3e4),r=!0)}return a.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",Qs(),r=!0):Jr("timer",{context:e})&&(r=!0)),r&&(fs(),A(),a.route==="eva-room"&&R()),r}function Pe(e={}){const t=a.progress?wn():{},n=a.evaRuntime||Qt(),s=ms(mn(),n.memory||{}),r=new Date().getHours();return Ru(),{route:a.route,hour:r,timeOfDay:r<5?"late_night":r<11?"morning":r<18?"day":r<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(a.progress?.streak?.current||0),level:Number(a.progress?.level||1),moonFragments:Number(a.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||a.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||a.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-Bo,lastEvent:n.lastEvent,dueReviews:a.progress?Oe():0,shopOpen:!!a.evaRoomShopOpen,...e}}function fn(e=Pe()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function Ri(e=Pe(),t=fn(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return nt(["approve","happy","soft_smile"]);if(n==="answer_wrong")return nt(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return nt(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return nt(s[t]||s.neutral)}function Jr(e="auto",t={}){if(!a.progress||!Ci()||!t.force&&a.route!=="eva-room")return!1;const n=se(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const r=t.context||Pe({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=fn(r),l=bp(e)||Nl(e);if(!l)return!1;a.evaRuntime||(a.evaRuntime=Qt()),a.evaRuntime.mood=o;const c=l.emotion||Ri(r,o,e),d=Li(l),u=Pn(Ai(l),c),f=xl(l),h=Ll(l),m=jp(r,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:u,background:d.id,decoration:f,effect:h,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=m,n.currentDecoration=f,n.currentEffect=h,n.mood=o,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(S=>S!==l.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=Qt()),Object.assign(a.evaRuntime,{mood:o,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:m,currentSkin:u,currentBackground:d.id,currentDecoration:f,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:m?s:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...a.evaRuntime.cooldowns,emotion:ns(15e3,3e4),phrase:ns(45e3,12e4),question:ns(3*6e4,7*6e4),visual:ns(10*6e4,15*6e4)}}),Ti(l,e,r),Al(u,d.file),Qs(),$e(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),fs(),Sn(),!0}function bp(e){const t=Ew(e,Pe({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],r=new Set(se().recentLineIds||[]),o=s.filter(c=>!r.has(`${e}_${Ee(`${c.ru||c.en}`)}`)),l=nt(o.length?o:s);return l?{id:`${e}_${Ee(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function wp(){const e=se(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function Bw(e="auto"){const t=Zt(),n=new Date().getHours(),s=Oe(),r=wn(),o=[];return o.push(...Pw(e)),(e==="return"||!t.lastInteractionDate&&a.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(r.reviews||0)===0&&o.push("fis_study","study"),(a.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(a.progress.rewardHistory?.length||a.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function Nl(e="auto"){pe(),Ws();const t=Zt(),n=Pe({lastEvent:{type:e}}),s=se().currentLine?.id,r=new Set([s,...se().recentLineIds||[],...a.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(a.evaAutonomyLines)?a.evaAutonomyLines:[],l=Bw(e),c=(u,f=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!f&&r.has(h.id)||!xp(h,t)||!Mw(h,n))return!1;const S=Array.isArray(h.moods)?h.moods:[];return!S.length||S.includes(t.mood)});for(const u of l){const f=c(u);if(f.length)return nt(f)}for(const u of l){const f=c(u,!0);if(f.length)return nt(f)}const d=o.filter(u=>!r.has(u.id));return nt(d.length?d:o)}function he(e,t={},n={}){if(!e)return;Xr(),n.skipAchievements||V({silent:!0});const s={type:yp(e),payload:t||{},at:Date.now()};kp(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:he});function kp(e={}){if(!e.type||!a.progress)return;pe(),a.evaRuntime||(a.evaRuntime=Qt());const t={type:yp(e.type),payload:e.payload||{},at:e.at||Date.now()};a.evaRuntime.lastEvent=t,a.evaRuntime.eventHistory=[t,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[t,...a.evaRuntime.recentEvents||[]].slice(0,80),vp(t),["timer","idle_timeout"].includes(t.type)||(a.evaRuntime.lastPlayerActionAt=Date.now());const n=Ow(t.type,t.payload);Object.keys(n).length&&$e(n,`eva_event:${t.type}`,{silent:!0});const s=se();wp(),s.nextSpeakAt=0;const r=Jr(t.type,{force:!0,eventPayload:t.payload});fs(),A(),r&&a.route==="eva-room"&&R()}function yp(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function Ow(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function xl(e){const t=a.evaRuntime?.mood||fn(Pe()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return $p("decoration",s)}function Ll(e){const t=a.evaRuntime?.mood||fn(Pe()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return $p("effect",s)||"none"}function $p(e,t=[]){const n=qe().filter(r=>r.type===e&&tn(r.id));return(t.map(r=>n.find(o=>o.id===r)).find(Boolean)||nt(n))?.id||null}function jp(e=Pe(),t=null){const n=se();if(n.currentQuestion?.id)return n.currentQuestion;if(a.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=a.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",r=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),l=Number(a.evaRuntime?.lastQuestionAt||a.evaRuntime?.lastQuestion?.at||0),c=Number(a.evaRuntime?.cooldowns?.question||ns(3*6e4,7*6e4));if(!r&&o-l<c||!r&&Math.random()>.34)return null;const d=new Set(a.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=Sp(s).filter(h=>!d.has(h.id)),f=nt(u.length?u:Sp(s));return f?{...f,at:new Date().toISOString()}:null}function Sp(e="auto"){const t=ib();if(t.length<2)return[];const n=new Set((a.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${oe()}:${e}:${a.progress?.totalCorrect||0}:${a.progress?.totalWrong||0}`;return[...t].sort((o,l)=>{const c=n.has(String(o.id))?1:0,d=n.has(String(l.id))?1:0;return c-d||Ee(`${s}:${o.id}`)-Ee(`${s}:${l.id}`)}).slice(0,18).map(o=>zw(o,t,e)).filter(Boolean)}function zw(e,t,n="auto"){const s=He(e,"ru"),r=He(e,"en");if(!s||!r)return null;const o=Uw(e,t);if(!o.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(p()==="ru"?"твоих карточек":"your cards"),d=Cp(e,e,!0),u=[d,...o.map(f=>Cp(f,e,!1))].sort((f,h)=>Ee(`${n}:${e.id}:${f.id}`)-Ee(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Ee(`${s}:${r}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:d.id,answerText:{ru:s,en:r},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function Uw(e,t){const n=_i(He(e,"ru")),s=_i(He(e,"en")),r=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!c?.id||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const d=_i(He(c,"ru")),u=_i(He(c,"en"));return!(!d||!u||d===n||u===s)})].sort((c,d)=>{const u=String(c.jlpt||"").toUpperCase()===r?0:1,f=String(d.jlpt||"").toUpperCase()===r?0:1;return u-f||Ee(`${e.id}:${c.id}`)-Ee(`${e.id}:${d.id}`)});return l.slice(0,Math.min(3,l.length))}function Cp(e,t,n){const s=He(e,"ru"),r=He(e,"en"),o=He(t,"ru"),l=He(t,"en");return{id:`meaning_${Ee(`${t.id}:${e.id}:${s}:${r}`)}`,cardId:String(e.id),text:{ru:s,en:r},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function _i(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function Jw(e){pe();const t=Pi();t?.id&&Gw(t.id,e.dataset.option)}function Gw(e,t){pe();const n=se(),s=Pi();if(!s?.id||s.id!==e)return;const r=s.options?.find(h=>h.id===t);if(!r)return;const l=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(r.correct||r.id===s.answerId):null;a.evaRuntime||(a.evaRuntime=Qt()),a.evaRuntime.pendingQuestion=null,n.currentQuestion=null,$e(r.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&qw(s,r,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:r.id,correct:l,at:new Date().toISOString()};a.evaRuntime.lastQuestion={...c,at:Date.now()},a.evaRuntime.lastQuestionAt=Date.now(),a.evaRuntime.pendingQuestion=null,a.evaRuntime.questionHistory=[c,...a.evaRuntime.questionHistory||[]].slice(0,40);const d=Li({}),u=l===!1?"thinking":"approve",f=Pn(Ai({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${r.id}`,category:"question_reply",text:r.reply||Hw(s,l),sprite:f,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},a.evaRuntime.presenceState="react",a.evaRuntime.textRevealSkippedLineId=null,Ti(n.currentLine,"question_answer",Pe({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=f,Qs(),Vw(s,r,l),fs(),A(),F(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),R()}function Pi(){const e=se(),t=e.currentQuestion?.id?e.currentQuestion:a.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,a.evaRuntime||(a.evaRuntime=Qt()),a.evaRuntime.pendingQuestion=t,t):null}function Hw(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||v(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||v(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||v(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||v(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function qw(e,t,n){const s=zu(),r=Ww(e);r&&Dr(r,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:v(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=wn();o.reviews=Number(o.reviews||0)+1,n?(a.progress.totalCorrect=Number(a.progress.totalCorrect||0)+1,r&&Xw(r),r&&!s.rewarded[String(r.id)]&&(s.rewarded[String(r.id)]=new Date().toISOString(),H(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${r.id}`))):(a.progress.totalWrong=Number(a.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,r&&Qw(r)),o.minutes=ko(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),a.progress.daily[oe()]=o,ve(),kc(),V()}function Ww(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?ae(t):null)||Uu().find(r=>{if(!r)return!1;const o=t&&String(r.id)===t,l=n&&r.kanji===n,c=!s||String(r.jlpt||"").toUpperCase()===s;return o||l&&c})||(n?a.cards.find(r=>r.kanji===n):null)||null}function Xw(e){const t=String(e?.jlpt||"").toUpperCase(),n=hl().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function Qw(e){const t=String(e?.jlpt||"").toUpperCase(),n=hl().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function Vw(e,t,n){if(!a.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};a.evaRuntime.lastEvent=s,a.evaRuntime.eventHistory=[s,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[s,...a.evaRuntime.recentEvents||[]].slice(0,80),vp(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Yw(){pe(),Ci()&&Jr("render");const e=Lp();let t=se().currentLine;if(Ci()&&!t?.text&&a.evaAutonomyLines.length){const r=Nl("render_fallback")||a.evaAutonomyLines[0],o=Li(r),l=Pe({lastEvent:{type:"render_fallback"}}),c=fn(l),d=xl(r),u=Ll(r),f=r.emotion||Ri(l,c,"render_fallback"),h=Pn(Ai(r),f);t={id:r.id,category:r.category||"mood",text:r.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:f,state:r.state||"observe",at:new Date().toISOString()},se().currentLine=t,se().currentDecoration=d,se().currentEffect=u,se().mood=c,se().emotion=f,se().lastSpokeAt=t.at,se().lastRoomId=o.id,se().lastSprite=h,a.evaRuntime.presenceState=t.state,a.evaRuntime.textRevealSkippedLineId=null,Ti(r,"render_fallback",l),Al(h,o.file),Qs(),A()}if(Ci()&&t?.text){const r=Xs(t.background)||en(),o=Pn(t.sprite||"relationship",t.emotion||se().emotion);return{isAutonomy:!0,line:t,bg:r,spriteId:o,sprite:Vs(o),decoration:t.decoration||se().currentDecoration,effect:t.effect||se().currentEffect,mood:se().mood||Zt().mood,emotion:t.emotion||se().emotion||"calm",node:{id:"eva_autonomy_line",background:r.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=Xs(e.background)||en(),s=Pn(e.sprite,se().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:Vs(s),decoration:se().currentDecoration,effect:se().currentEffect,mood:Zt().mood,emotion:se().emotion||"calm",node:e}}function Np(e="adaptive"){pe(),Ws();const t=Zt(),n=new Set(a.progress.evaRoomDialogueProgress.lineHistory||[]),s=Ii().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!xp(d,t)?!1:!n.has(d.id)}),r=Ii().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:r.length?r:Ii(),l=nt(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:en().id},c=a.progress.evaRoomDialogueProgress.lineHistory||[];return a.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(d=>d!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||en().id,relationshipDelta:l.relationshipDelta||{}}}function xp(e,t){return[["minWarmth",t.warmth,(s,r)=>s>=r],["maxWarmth",t.warmth,(s,r)=>s<=r],["minTrust",t.trust,(s,r)=>s>=r],["maxTrust",t.trust,(s,r)=>s<=r],["minDiscipline",t.discipline,(s,r)=>s>=r],["maxDiscipline",t.discipline,(s,r)=>s<=r],["minCuriosity",t.curiosity,(s,r)=>s>=r],["maxCuriosity",t.curiosity,(s,r)=>s<=r]].every(([s,r,o])=>typeof e[s]>"u"||o(r,Number(e[s])))}function Lp(){pe();const e=Rw(a.progress.evaRoomDialogueProgress.currentNode);return a.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function Vs(e){return a.evaSprites?.[e]||a.evaSprites?.default||"assets/mascots/eva_normal.webp"}function Al(e,t=""){[Vs(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Zw(e){const n=Lp().choices?.[Number(e.dataset.index||0)];if(!n)return;pe();const s=a.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=oe(),ek(n),$e(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const r=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(r>0&&o&&!a.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(a.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),H(0,r,`eva_room:${o}`),U(_n().reward)),n.randomLine){const l=Np(n.randomLine);$e(l.relationshipDelta||{},`eva_line:${l.id}`,{silent:!0}),a.progress.evaRoomDialogueProgress.generatedLine=l,a.progress.evaRoomDialogueProgress.currentNode="generated_line"}else a.progress.evaRoomDialogueProgress.generatedLine=null,a.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(a.evaRoomShopOpen=!0),A(),n.route){at(n.route);return}F(n.openShop?"menu_open":"page_turn"),R()}function ek(e={}){if(!a.evaRuntime)return;a.evaRuntime.memory=ms(mn(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=oe(),t.lastRoute=a.route}function tk(){pe(),a.progress.evaRoomDialogueProgress.currentNode="intro",a.progress.evaRoomDialogueProgress.generatedLine=null,a.evaRuntime&&(a.evaRuntime.presenceState="wait_choice",a.evaRuntime.textRevealSkippedLineId=null),A(),F("page_turn"),R()}function nk(e){Mi(e)}function sk(e){Ei(e)}function rk(e){const t=ye(e)||ps(e)||gs(e);t&&Mi(t.id)}function ak(e){const t=ye(e)||ps(e)||gs(e);t&&Ei(t.id)}function tn(e){a.customization||Us();const t=ye(e)||ps(e);return!!(t?.defaultOwned||t?.price===0||a.customization?.owned?.includes(t?.id||e))}function Il(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function ik(e){const t=Il(e);return!!(t&&a.customization?.selected?.[t]===e.id)}function Ap(e){return!e||!Tl(e)?"locked":ik(e)?"selected":tn(e.id)?"owned":"available"}function ok(e={}){const t=[a.customization?.selected?.effect,e.effect,a.evaRuntime?.currentEffect,a.evaRuntime?.currentLine?.effect,a.progress?.evaAutonomy?.currentEffect,se().currentEffect];for(const n of t){const s=Ln(n);if(!s||s==="none")continue;const r=ye(s);if(r?.type==="effect"&&tn(r.id))return r.id}return null}function Ip(e=null){const t=Ln(e||a.customization?.selected?.effect),n=ye(t);return!n||n.type!=="effect"||a.customization?.selected?.effect!==n.id?!1:(a.customization.selected.effect=null,a.progress?.evaAutonomy&&(a.progress.evaAutonomy.currentEffect=null),a.evaRuntime?.currentEffect===n.id&&(a.evaRuntime.currentEffect="none"),Kr(),zs(),A(),Sn(),F("menu_close"),U(p()==="ru"?"Эффект убран.":"Effect removed."),R(),!0)}function lk(e=null){const t=Ln(e||a.customization?.selected?.effect||a.customization?.selected?.decoration||a.customization?.selected?.frame||a.customization?.selected?.outfit||a.customization?.selected?.background||a.customization?.selected?.theme),n=ye(t);if(!n)return!1;if(n.type==="effect")return Ip(n.id);a.customization||Us();const s=Il(n);if(!s)return!1;const r=xn().selected;return s==="background"?a.customization.selected.background=r.background:s==="outfit"?a.customization.selected.outfit=r.outfit:s==="theme"?a.customization.selected.theme=r.theme:s==="decoration"&&(a.customization.selected.decoration=r.decoration,a.customization.selected.frame=r.frame),Kr(),zs(),A(),Sn(),F("menu_close"),U(p()==="ru"?"Выбор сброшен.":"Selection cleared."),R(),!0}function ck(e){if(!e?.unlockCondition||Tl(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=As().find(o=>o.id===t.id),r=s?hc(s):t.id;return n?`Открывается за достижение: ${r}`:`Unlocks after achievement: ${r}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function Tl(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?a.progress.level>=Number(t.value||0):t.type==="streak"?a.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!a.progress.achievements?.[t.id]?.unlockedAt:!0}function Mi(e){const t=ye(e);if(!t||(a.customization||Us(),Io.has(t.id)))return;if(!Tl(t)){F("purchase_failed"),U(ws().locked);return}if(Io.add(t.id),window.setTimeout(()=>Io.delete(t.id),0),tn(t.id)){Ei(t.id);return}const n=i1({balance:a.progress.moonFragments,owned:a.customization?.owned||[],itemId:t.id,price:t.price});if(a.progress.moonFragments=n.balance,n.status==="insufficient-funds"){F("purchase_failed"),U(ws().notEnough),A(),R();return}if(n.status!=="purchased"){F("purchase_failed"),U(ws().unavailable),A(),R();return}a.customization.owned=n.owned,a.customization.seen=[...new Set([...a.customization.seen||[],t.id])],a.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:Rt(t),xp:0,coins:-n.price,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80),Kr(),zs(),V(),A(),F("purchase_success"),F("item_unlock"),he("item_bought",{itemId:t.id,type:t.type,title:Rt(t),price:t.price}),U(ws().bought.replace("{item}",Rt(t))),R()}function Ei(e){var s;const t=ye(e);if(a.customization||Us(),!t||!tn(t.id))return;const n=Il(t);n&&(a.customization.selected[n]=t.id,n==="decoration"&&(a.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(a.progress.selectedEvaSprite=t.spriteId,a.progress.evaAutonomy.currentLine=null),t.type==="background"&&(a.progress.selectedEvaRoomBackground=t.id,a.evaRuntime&&(a.evaRuntime.currentBackground=t.id,a.evaRuntime.activeBackground=t.id,(s=a.evaRuntime).memory||(s.memory=mn()),a.evaRuntime.memory.preferredEvaRoomBackground=t.id),a.progress.evaAutonomy.currentLine=null),Kr(),zs(),A(),Sn(),F("notification_soft"),he("item_equipped",{itemId:t.id,type:t.type,title:Rt(t)}),U(ws().selectedToast.replace("{item}",Rt(t))),R())}function dk(){const e=se();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,Jr("toggle",{force:!0}),A(),F("notification_soft"),U(Rn().status),R()}function uk(){const e=se();e.frequency="normal",Qs(),A(),F("notification_soft"),R()}function pk(){const e=se();e.roomMode="auto",e.currentLine=null,A(),F("notification_soft"),R()}function gk(){const e=se();e.outfitMode="auto",e.currentLine=null,A(),F("notification_soft"),R()}function Tp(){const e=se();e.enabled=!0,wp(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,Rp("manual"),A(),F("page_turn"),R()}function Rp(e="manual"){const t=bp(e)||Nl(e);if(!t)return!1;const n=Pe({lastEvent:{type:e}}),s=fn(n),r=t.emotion||Ri(n,s,e),o=Li(t),l=Pn(Ai(t),r),c=xl(t),d=Ll(t),u=se(),f=Date.now(),h=jp(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:l,background:o.id,decoration:c,effect:d,emotion:r,state:t.state||"speak",at:new Date(f).toISOString(),reason:e},u.currentDecoration=c,u.currentEffect=d,u.mood=s,u.emotion=r,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=l,u.currentQuestion=h,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(m=>m!==t.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=Qt()),Object.assign(a.evaRuntime,{mood:s,emotion:r,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:h,currentSkin:l,currentBackground:o.id,currentDecoration:c,currentEffect:d,activeSkin:l,activeBackground:o.id,lastPhraseAt:f,lastEmotionChangeAt:f,lastQuestionAt:h?f:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:f,textRevealSkippedLineId:null}),Ti(t,e,n),Al(l,o.file),Qs(),fs(),Sn(),!0}function mk(){se().currentLine=null,A(),F("menu_close"),R()}function E(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${le(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function fk(e){const t=Lc(e.id),n=t.filter(d=>B(d.id).state!=="New").length,s=t.filter(d=>B(d.id).state==="Mastered").length,r=!Ge(e),o=vf(e),l=r?"鎖":t[0]?.kanji||"文",c=M(s,t.length);return`
      <button class="lesson-tile ${r?"is-locked":""} ${Mc(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(l)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${zN(o)}
          <h3>${i(Ta(e))}</h3>
          <p>${i(Mx(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(_("mastered"))}</span>
            ${r?`<span class="pill danger-pill">${i(_("unlockedAt"))} ${io(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function hk(e){const t=vf(e),n=e.id===a.activeLessonId,s=!Ge(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${Mc(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g(Ec(t))}">
        <span>${i(e.jlpt)}</span>
        ${ON(t)}
      </button>
    `}function Rl(){const e=String(a.activeLearnJlpt||"all").toUpperCase();return a.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function vk(){const e=Rl();return e.find(t=>t.id===a.activeLessonId)||e.find(t=>Ge(t))||e[0]||a.lessons.find(t=>t.id===a.activeLessonId)||a.lessons.find(t=>Ge(t))||a.lessons[0]||null}function _l(){return D(vk()?.jlpt)||ln()}function _p(e){if(!e.length)return a.activeLessonId=null,null;const t=e.find(r=>r.id===a.activeLessonId);if(t&&Ge(t))return t;const s=e.find(r=>Ge(r))||e[0];return a.activeLessonId=s?.id||null,s||null}function bk(e){const t=e.length,n=e.filter(r=>Ge(r)).length,s=["all",...Te];return`
      <div class="jlpt-filter-bar" role="tablist" aria-label="${g(p()==="ru"?"Фильтр уровней JLPT":"JLPT level filter")}">
        ${s.map(r=>{const o=String(a.activeLearnJlpt||"all").toLowerCase()===String(r).toLowerCase(),l=r==="all"?p()==="ru"?"Все":"All":r,c=r==="all"?t:a.lessons.filter(d=>d.jlpt===r).length;return`
            <button class="btn jlpt-filter-chip ${o?"primary":"ghost"}" type="button" role="tab" aria-selected="${o?"true":"false"}" data-action="set-learn-jlpt" data-jlpt="${g(r)}">
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
    `}function wk(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <span class="pill">${i(t.jlpt||"")}</span>
        </div>
        <div class="learn-level-copy">
          <h3>${i(v(t.displayTitle||t.title||{}))}</h3>
          <p>${i(v(t.description||{}))}</p>
          <div class="tag-row">
            <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
            <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
            <span class="pill">${i(v(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${g(t.pdfUrl||t.pdfFile||"")}" download="${g((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function kk(e){const t=Ot(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Ta(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${io(e)}.`:`Unlocks at level ${io(e)}.`)}</p>
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
    `}function yk(){return a.activeLearnView===pn?Ak():a.activeLearnView===Ht?Lk():Ep()}function $k(){const e=Fu();if(e.kind==="review"){at("review");return}if(a.route==="home"){lo(_l());return}Pp(e.nodeId)}function Pp(e){const t=hs(e);if(!t){vs();return}if(Ku(t)==="locked"){U(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===Fs){at("review");return}if(t.id===Ds){ea("final-test");return}if(t.type==="textbook"){ea(t.id);return}vs(Ht,t.id)}function Mp(e){const t=String(e||"");return t&&(ae(t)||a.cards.find(n=>String(n.id)===t))||null}function jk(){const e=ue();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function Gr(e){const t=Mt(e);if(!t)return null;const n=nn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],r=n.map((o,l)=>{const c=Kt(o)[0]||null,d=s[l%Math.max(s.length,1)]||s[0]||null,u=c?{jp:c.word||o.kanji,hiragana:c.reading||o.hiragana||"",translation:c.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:Y(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:K(o),en:K(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:r,exercises:js(t),source:"learning_path"}}function Sk(e){if(e===Ae)return jk();const t=a.learningPathLessonPayloads[e]||Gr(e);if(!t)return[];const n=ue(),s=[],r=(t.objectives||[]).map(v).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:v(t.title),text:v(t.summary),note:r||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,l)=>{const c=Mp(o.cardId);if(!c)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${K(c)}`,text:Ey(c,{word:d?.jp||c.kanji,reading:d?.hiragana||c.hiragana||""}),note:d?.translation?v(d.translation):"",cardId:c.id,card:c,sentence:d})}),(t.exercises||[]).forEach(o=>{const l=(o.options||[]).map(c=>({value:String(c.value??c.id??c.label??c),label:v(c.label||c.text||c)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:v(o.prompt),text:v(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:l})}),s}function Ck(e,t=null){const n=Sk(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),r=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return r.length?r:n.filter(o=>o.kind==="quiz")}function Nk(e,t=Ht,n=[]){const s=In(),r=s.activeSession,o=n.map(String).filter(Boolean);return r?.nodeId===e&&r.mode===t&&JSON.stringify(r.reviewStepIds||[])===JSON.stringify(o)?r:(s.activeSession=Zo({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,A(),s.activeSession)}function Hr(e){const t=pl(),n=t?.nodeId===e?t:Nk(e),s=Ck(e,n),r=s.filter(c=>c.kind==="quiz"),o=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:r,answeredCount:o,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function xk(e,t,n){var c;const s=In(),r=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((c=s.completedNodes)[e]||(c[e]=r),s.resultHistory[e]={completedAt:r,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===Ae&&H(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=Mt(e),u=a.learningPathLessonPayloads[e]||Gr(e),f=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(m=>m.cardId),...nn(d).map(m=>m.id)].map(String).filter(Boolean))],h=ne();if(f.forEach(m=>{const S=Mp(m);if(!S)return;Dr(S,"learning_path"),Gs(h,S.kanji);const x=re(B(S.id));x.state==="New"&&(a.progress.cards[S.id]=be(x,l?"hard":"good"))}),d){we.add(`n5:${d.id}`),h.completedLessons[d.id]=r,h.currentLessonId=Qe().find(x=>x.order===d.order+1)?.id||d.id,a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[d.id]=r,A({immediate:!0}),Di()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],a.progress.unlockedJlptLevels.includes("N5")||a.progress.unlockedJlptLevels.push("N5"),a.progress.unlockedJlptLevels.includes("N4")||a.progress.unlockedJlptLevels.push("N4"));const m=a.n5Meta?.rewards?.lessonCompleteXp||45,S=a.n5Meta?.rewards?.lessonCompleteMoon||6;H(m,S,`learning_path:${e}`),mt({title:`${Xe().lessonComplete}: ${v(d.title)}`,message:Xe().lessonCompleteText,xp:m,coins:S,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),he("lesson_complete",{lessonId:e,jlpt:"N5"})}}wi(),ve(),V(),A()}function Ep(){a.n5Textbook?.items?.length||ul();const e=ue(),t=Eu(),n=Fu(),s=hs(Hs()),r=jn();return`
      <section class="page learning-path-page">
        <div class="section-head">
          <div>
            <h1>${i(e.route)}</h1>
            <p>${i(s?v(s.summary)||e.mapHint:e.loading)}</p>
          </div>
          <button class="btn primary" type="button" data-action="home-primary">${i(n.label)}</button>
        </div>

        <article class="learning-path-hero">
          <div>
            <span class="pill">${i(e.lessonTrack)}</span>
            <h2>${i(Mu(Hs()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(ue().reviewQueue)} · ${i(Oe())}</span>
            <span class="pill">${i(ue().streak)} · ${i(a.progress.streak.current)}</span>
            <span class="pill">${i(ue().xp)} · ${i(r.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,l)=>{const c=Ku(o),d=c==="locked",u=v(o.summary)||"",f=o.id===Fs?e.reviewAction:o.id===Ds?e.openCheckpoint:o.type==="textbook"?e.openTextbook:c==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(c)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${l+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(Ov(c))}</span>
                  </div>
                  <h2>${i(v(o.title))}</h2>
                  <p>${i(u)}</p>
                  <div class="learning-path-node-foot">
                    <small>${i(o.durationMinutes||0)} ${i(e.minutes)}</small>
                    <strong>${i(f)}</strong>
                  </div>
                </div>
              </button>
            `}).join(""):`<article class="empty-state"><h2>${i(e.empty)}</h2></article>`}
        </div>
      </section>
    `}function Lk(){const e=a.activeLearnNodeId||Hs(),t=hs(e),n=ue();if(!t)return Ep();if(t.id!==Ae&&t.type==="lesson"&&!a.n5Textbook?.items?.length)return ul(),`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(v(t.title))}</h1>
                <p>${i(n.loading)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;t.type==="lesson"&&Pv(e);const s=Hr(e),{session:r,steps:o,quizSteps:l,currentStep:c,isResult:d}=s;if(!o.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(v(t.title))}</h1>
                <p>${i(v(t.summary)||n.mapHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-node" data-node="${g(t.id)}">${i(t.type==="textbook"?n.openTextbook:n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;const u=o.length,f=u?M(Math.min(r.stepIndex,u),u):0,h=r.answers?.[c?.id||""]||null,m=h?.selected||"",S=!!h?.correct,x=l.length?Math.round(Number(r.score||0)/Math.max(l.length,1)*100):100;return d?`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(v(t.title))}</h1>
                <p>${i(n.scoreHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
            <div class="lesson-player-progress">
              <span>${i(n.score)}</span>
              <strong>${i(x)}%</strong>
              <div class="meter"><i style="width:${x}%"></i></div>
            </div>
            <div class="lesson-result-panel">
              <article class="home-summary-card">
                <span>${i(n.score)}</span>
                <strong>${i(`${r.score}/${Math.max(l.length,1)}`)}</strong>
              </article>
              <article class="home-summary-card">
                <span>${i(n.mistakes)}</span>
                <strong>${i(r.mistakes.length)}</strong>
              </article>
            </div>
            <div class="lesson-player-actions">
              ${r.mistakes.length?`<button class="btn ghost" type="button" data-action="learning-path-retry" data-node="${g(e)}">${i(n.retryMistakes)}</button>`:""}
              <button class="btn primary" type="button" data-action="learning-path-continue" data-node="${g(e)}">${i(n.continuePath)}</button>
            </div>
          </article>
        </section>
      `:`
      <section class="page learning-path-page">
        <article class="study-card lesson-player">
          <div class="section-head">
            <div>
              <h1>${i(v(t.title))}</h1>
              <p>${i(v(t.summary)||n.mapHint)}</p>
            </div>
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
          </div>
          <div class="lesson-player-progress">
            <span>${i(n.step)} ${i(Math.min(r.stepIndex+1,u))}/${i(u)}</span>
            <strong>${i(c.eyebrow||t.level||"N5")}</strong>
            <div class="meter"><i style="width:${f}%"></i></div>
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
                    ${c.card.hiragana?`<span class="pill">${i(Y(c.card.hiragana))}</span>`:""}
                    ${c.card.onyomi?`<span class="pill">${i(Y(c.card.onyomi))}</span>`:""}
                  </div>
                  ${c.sentence?`
                    <div class="lesson-player-sentence">
                      <strong>${i(c.sentence.jp||"")}</strong>
                      <p>${i(c.sentence.hiragana||"")}</p>
                      <small>${i(v(c.sentence.translation||{}))}</small>
                    </div>
                  `:""}
                </div>
              </div>
            `:c.kind==="quiz"?`
              <p>${i(c.text||"")}</p>
              <div class="lesson-choice-grid">
                ${(c.options||[]).map($=>{const L=m===$.value,k=$.value===c.answer;return`<button class="btn ${L?S?"success":"danger":h&&k?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(c.id)}" data-value="${g($.value)}">${i($.label)}</button>`}).join("")}
              </div>
              ${h?`<p class="lesson-player-feedback ${S?"is-good":"is-warning"}">${i(S?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(c.options||[]).find($=>$.value===c.answer)?.label||c.answer}`)}</p>`:""}
            `:`
              <p>${i(c.text||"")}</p>
              ${c.note?`<small>${i(c.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${g(e)}" ${c.kind==="quiz"&&!h?'disabled aria-disabled="true"':""}>${i(r.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function Ak(){const e=Rl(),t=_p(e),n=!!(t&&Ge(t)),s=n?pN(t.id):[];(!a.activeCardId||!s.some(l=>l.id===a.activeCardId))&&(a.activeCardId=s[0]?.id||null);const r=n&&a.activeCardId?ae(a.activeCardId):null,o=a.activeLearnJlpt!=="all"?Ot(a.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("learn"))}</h1>
            <p>${i(t?Ta(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${bk(e)}
        ${o?wk(o):""}
        <div class="actions lesson-tabs">
          ${e.map(hk).join("")}
        </div>
        <div class="study-layout">
          ${n?r?fm(r):J0(t):kk(t)}
          ${n?lc(r,s.length):lc(null,0)}
        </div>
      </section>
    `}function Ik(){const e=kn(a.activeJlptLesson)||kn(ae(a.activeCardId)?.jlpt)||a.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(_("learn"))}</button>
          </article>
        </section>
      `;a.activeJlptLesson=e.jlpt;const t=Ot(e.jlpt);if(!jt(e.jlpt))return Kp(t||e);const n=kf(e.jlpt),s=n.filter(l=>B(l.id).state==="Mastered").length,r=n.filter(l=>B(l.id).state!=="New").length,o={...Bc(),...Dc()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(v(e.title))}</h1>
            <p>${i(v(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${Yn("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${a.jlptLessons.map(l=>{const c=jt(l.jlpt),d=l.jlpt===e.jlpt,u=g($n(l.jlpt));return c?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(l.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(l.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
            <div class="jlpt-textbook-body">
              <span class="pill">${i(t.jlpt)}</span>
              <h2>${i(v(t.displayTitle||t.title||{}))}</h2>
              <p>${i(v(t.description||{}))}</p>
              <div class="tag-row">
                <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                <span class="pill">${i(v(t.goal||{}))}</span>
                <span class="pill">${i(v(t.recommendedCycle||{}))}</span>
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
            ${E(o.available,n.length,e.jlpt,M(n.length,Math.max(a.cards.length,1)))}
            ${E(o.learned,r,`${s} ${o.mastered}`,M(r,Math.max(n.length,1)))}
          </div>
        </article>
        ${sm(e)}
        <div class="jlpt-section-grid">
          ${e.goals.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.goals)}</h3>
              <ul>${e.goals.map(l=>`<li>${i(v(l))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.sections.map(l=>`
            <article class="jlpt-section-card">
              <h3>${i(v(l.title))}</h3>
              <p>${i(v(l.body))}</p>
              ${Array.isArray(l.points)&&l.points.length?`<ul>${l.points.map(c=>`<li>${i(v(c))}</li>`).join("")}</ul>`:""}
            </article>
          `).join("")}
          ${e.practice.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.practice)}</h3>
              <ul>${e.practice.map(l=>`<li>${i(v(l))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.checkpoint.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.checkpoint)}</h3>
              <ul>${e.checkpoint.map(l=>`<li>${i(v(l))}</li>`).join("")}</ul>
            </article>
          `:""}
        </div>
      </section>
    `}function Tk(){const e=a.jlptCatalog?.items||[],t=String(a.activeTextbookLevel||"");if(fe(t))return Pk(t);const n=t.toUpperCase(),s=n?Ot(n):null;if(s)return a.activeTextbookLevel=s.jlpt,a.activeJlptLesson=s.jlpt,Rk(s);const r=p()==="ru"?{title:"Учебники Flash Kanji",description:"Выберите азбуку для старта с нуля или продолжайте учебники JLPT N5–N1.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам",kanaBadge:"Курс на русском",kanaMeta:"знаков",kanaTasks:"заданий"}:{title:"Flash Kanji Textbooks",description:"Choose a kana course from zero or continue JLPT N5-N1 textbooks.",open:"Open page",pdf:"Download PDF",study:"Go to lessons",kanaBadge:"Russian course",kanaMeta:"characters",kanaTasks:"tasks"},o=(a.kanaCatalog?.courses||[]).map(l=>`
            <article class="textbook-card kana-textbook-card is-unlocked" id="textbook-${g(l.slug)}">
              <div class="textbook-cover-wrap kana-cover-wrap">
                <div class="kana-cover-symbol" aria-hidden="true">${i(l.native_title)}</div>
                <span class="pill textbook-level">${i(r.kanaBadge)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(l.title)}</h2>
                <p>${i(l.description)}</p>
                <div class="textbook-meta">
                  <span class="pill">${i(l.lesson_count)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(l.base_character_count)} ${i(r.kanaMeta)}</span>
                  <span class="pill">${i(l.task_count)} ${i(r.kanaTasks)}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(l.slug)}">${i(r.open)}</a>
                  <a class="btn ghost" href="${g(l.pdf_url)}" download="${g((l.pdf_url||"").split("/").pop()||`${l.slug}.pdf`)}" target="_blank" rel="noopener" data-action="kana-download-pdf" data-course="${g(l.slug)}">${i(r.pdf)}</a>
                </div>
              </div>
            </article>
          `).join("");return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${i(r.title)}</h1>
            <p>${i(r.description)}</p>
          </div>
          <div class="actions">
            ${Yn("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(ln())}">${i(r.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${o}
          ${e.map(l=>`
            <article class="textbook-card ${jt(l.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(l.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(l.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(l.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(v(l.displayTitle||l.title||{}))}</h2>
                <p>${i(v(l.description||{}))}</p>
                ${jt(l.jlpt)?"":`<p class="textbook-lock-note">${i($n(l.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(l.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(l.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                  <span class="pill">${i(v(l.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(l.jlpt)}">${i(r.open)}</a>
                  ${jt(l.jlpt)?`<a class="btn ghost" href="${g(l.pdfUrl||l.pdfFile||"")}" download="${g((l.pdfFile||l.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(r.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g($n(l.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${jt(l.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(r.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g($n(l.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Kp(e){const t=String(e?.jlpt||"").toUpperCase(),n=Kc(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),r=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(v(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h1>
            <p>${i($n(t))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(r.back)}</button>
            <button class="btn ghost" type="button" data-action="route" data-route="home">${i(r.home)}</button>
          </div>
        </div>
        <article class="lesson-locked-panel textbook-locked-panel">
          <img class="jlpt-textbook-cover" src="${g(e?.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill danger-pill">${i(t||"JLPT")}</span>
            <h2>${i(v(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h2>
            <p>${i(r.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(r.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${g(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function Rk(e){const t=String(e?.jlpt||"").toUpperCase();if(!jt(t))return Kp(e);if(Te.includes(t)&&!ii(t))return ai(t)==="error"||ai(t)==="incomplete"?_k(e,t,a.jlptCourseDataErrors[t]):(Go(t).catch(()=>{}),Fp(e,t));if(String(e?.jlpt||"").toUpperCase()==="N5"&&a.n5Textbook?.items?.length)return cy(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&a.n4Textbook?.items?.length)return r$(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&a.n3Textbook?.items?.length)return B$(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&a.n2Textbook?.items?.length)return jj(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return a.n1Textbook?.items?.length?iS(e):(Wh().catch(()=>{}),_o?yi(_o):Fp(e,"N1"));a.activeTextbookLevel=e.jlpt,a.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(m=>a.lessons.find(S=>S.id===m)).filter(Boolean),s=a.lessons.filter(m=>String(m.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(m)),r=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=a.activeTextbookSubroute?r.find(m=>m.id===a.activeTextbookSubroute)||kn(e.jlpt)||a.jlptLessons[0]:kn(e.jlpt)||a.jlptLessons[0];a.activeTextbookSubroute&&o?.id&&St(t,o.id,"textbook_page");const l=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=Fc(e.jlpt)||e.lessonIds?.[0]||r[0]?.id||"",d=v(e.recommendedCycle||{}),u=v(e.goal||{}),f=(e.previousLevels||[]).map(m=>`<a class="pill" href="#textbooks/${g(m)}">${i(m)}</a>`).join(""),h=(e.nextLevels||[]).map(m=>`<a class="pill" href="#textbooks/${g(m)}">${i(m)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(e.jlpt)} · ${i(l.title)}</p>
            <h1>${i(v(e.displayTitle||e.title||{}))}</h1>
            <p>${i(v(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(l.back)}</button>
            <a class="btn primary" href="${g(e.pdfUrl||e.pdfFile||"")}" download="${g((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(l.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(e.jlpt)}">${i(l.lessonPage)}</button>
            ${Yn("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${g(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill">${i(e.jlpt)}</span>
            <h2>${i(v(e.displayTitle||e.title||{}))}</h2>
            <p>${i(v(e.description||{}))}</p>
            <div class="tag-row">
              <span class="pill">${i(e.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
              <span class="pill">${i(e.kanjiCount||0)} ${i(_("cardsToday"))}</span>
              <span class="pill">${i(u)}</span>
              <span class="pill">${i(d)}</span>
            </div>
            <div class="textbook-route-links">
              ${f?`<div><strong>${i(l.previous)}</strong><div class="tag-row">${f}</div></div>`:""}
              ${h?`<div><strong>${i(l.next)}</strong><div class="tag-row">${h}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${E(e.jlpt,e.lessonCount||0,u,M(e.lessonCount||0,Math.max(1,a.jlptLessons.length)))}
          ${E(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",M(e.kanjiCount||0,Math.max(1,a.cards.length)))}
          ${E(p()==="ru"?"Уроки":"Lessons",r.length,l.practice,M(r.length,Math.max(1,a.lessons.filter(m=>String(m.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${E(p()==="ru"?"Переход":"Jump",a.activeTextbookLevel===e.jlpt?1:0,l.lessonPage,a.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${tr(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(l.outline)}</h2>
              <p>${i(v(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${E(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,l.outline,M(o.sections?.length||0,4))}
              ${E(p()==="ru"?"Практика":"Practice",o.practice?.length||0,l.practice,M(o.practice?.length||0,4))}
            </div>
          </article>
          ${sm(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(m=>`<li>${i(v(m))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(m=>`
              <article class="jlpt-section-card">
                <h3>${i(v(m.title))}</h3>
                <p>${i(v(m.body))}</p>
                ${Array.isArray(m.points)&&m.points.length?`<ul>${m.points.map(S=>`<li>${i(v(S))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(l.practice)}</h3>
                <ul>${o.practice.map(m=>`<li>${i(v(m))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(m=>`<li>${i(v(m))}</li>`).join("")}</ul>
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
          ${r.map(m=>fk(m)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function Fp(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Загружаем урок…",text:`Подгружаю карточки и упражнения ${t}. Адрес сохранён — после загрузки откроется нужный урок.`,back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:"Loading lesson…",text:`Loading ${t} cards and exercises. The URL is preserved and the requested lesson will open next.`,back:"All textbooks"};return`
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
            <h2>${i(v(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(v(e?.description||{}))}</p>
            <div class="achievement-progress" aria-hidden="true"><i style="width:60%"></i></div>
          </div>
          ${bn("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function _k(e,t,n=null){const s=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Не удалось загрузить карточки урока",text:"Проверьте подключение и попробуйте ещё раз. Прогресс, XP и Moon Fragments не изменились.",retry:"Повторить",back:"К списку уроков"}:{eyebrow:`${t} · Flash Kanji`,title:"Could not load lesson cards",text:"Check your connection and try again. Progress, XP, and Moon Fragments were not changed.",retry:"Retry",back:"Lesson list"},r=n instanceof Error?n.message:String(n||"");return`
      <section class="page textbooks-page n5-course-page textbook-data-error-page" data-course-data-error="${g(t)}">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">${i(s.eyebrow)}</p>
            <h1>${i(s.title)}</h1>
            <p>${i(s.text)}</p>
            ${r?`<p class="label">${i(r)}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${g(t)}">${i(s.retry)}</button>
            <a class="btn ghost" href="#textbooks/${g(t)}">${i(s.back)}</a>
          </div>
        </div>
        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill danger-pill">${i(t)} · ${i(p()==="ru"?"данные недоступны":"data unavailable")}</span>
            <h2>${i(v(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(v(e?.description||{}))}</p>
          </div>
          ${bn("eva","concerned","error","n5-hero-mascot")}
        </article>
      </section>
    `}function Dp(){return p()==="ru"?{allTextbooks:"Все учебники",start:"Начать курс",continue:"Продолжить",downloadPdf:"Скачать PDF",reference:"Справочник",lessons:"Уроки",practice:"Практикум чтения",final:"Итоговая контрольная",review:"Повторение",sources:"Источники",russianCourse:"Курс на русском",showRomaji:"Показывать ромадзи",hideRomaji:"Скрыть ромадзи",check:"Проверить",score:"Результат",passed:"зачёт",notPassed:"повторить",correct:"верно",wrong:"ошибка",writeDone:"Пропись выполнена",markWriting:"Я написал(а) от руки",manualWriting:"Ручная пропись",noAutoWriting:"Почерк не оценивается автоматически: отметьте шаг, когда написали знаки от руки.",noCourse:"Курс не найден",loading:"Загружаю курс",offlineHint:"Если вы уже открывали этот урок, service worker отдаст его из кэша. Иначе появится понятный offline fallback.",remember:"Помню",forgot:"Не помню",noReview:"Повторений пока нет. Пройдите урок или откройте знаки курса.",sourcePdf:"Оригинальный PDF",taskCount:"заданий",characters:"знаков",lessonsCount:"уроков",lesson:"урок",lessonProgress:"Прогресс урока",newSigns:"Новые знаки",newSignsHint:"Сначала узнаём форму и чтение каждого нового знака.",characterCard:"Карточка знака",characterCardHint:"Идём как в кандзи-уроке: один знак, быстрое решение, следующая карточка.",cardComplete:"Все знаки урока открыты",cardCompleteHint:"Теперь можно закрепить их в упражнениях, прописи и общем повторении.",backToFirstCard:"Повторить карточки",cardProgress:"Карточка",exampleWord:"Пример слова",readWrite:"Как читать и писать",readWriteHint:"Произнесите знак, посмотрите количество штрихов и переходите к ручной прописи.",reading:"Чтение",strokes:"Штрихи",tts:"Звук",strokeOrder:"Stroke-order",explanation:"Объяснение",explanationHint:"Ключевые правила урока вынесены в отдельные карточки.",examples:"Примеры",examplesHint:"Короткие слова и записи для чтения.",example:"Пример",meaning:"Значение",practiceBlock:"Практика",practiceHint:"Выполняйте задания небольшими блоками и проверяйте ответы сразу.",selfCheck:"Проверь себя",selfCheckHint:"Завершите ручную часть и отметьте пропись после тренировки."}:{allTextbooks:"All textbooks",start:"Start course",continue:"Continue",downloadPdf:"Download PDF",reference:"Reference",lessons:"Lessons",practice:"Reading practice",final:"Final test",review:"Review",sources:"Sources",russianCourse:"Russian course",showRomaji:"Show romaji",hideRomaji:"Hide romaji",check:"Check",score:"Score",passed:"passed",notPassed:"retry",correct:"correct",wrong:"wrong",writeDone:"Writing done",markWriting:"I wrote it by hand",manualWriting:"Manual writing",noAutoWriting:"Handwriting is not graded automatically: mark this step after writing the signs by hand.",noCourse:"Course not found",loading:"Loading course",offlineHint:"If you opened this lesson before, the service worker can serve it from cache. Otherwise a clear offline fallback appears.",remember:"Remember",forgot:"Forgot",noReview:"No kana reviews yet. Finish a lesson or open course signs first.",sourcePdf:"Original PDF",taskCount:"tasks",characters:"characters",lessonsCount:"lessons",lesson:"lesson",lessonProgress:"Lesson progress",newSigns:"New signs",newSignsHint:"Start by recognizing the shape and reading of each new sign.",characterCard:"Character card",characterCardHint:"Use the kanji lesson rhythm: one sign, one decision, then the next card.",cardComplete:"All lesson signs are introduced",cardCompleteHint:"Now reinforce them with exercises, handwriting, and shared review.",backToFirstCard:"Repeat cards",cardProgress:"Card",exampleWord:"Example word",readWrite:"How to read and write",readWriteHint:"Play the sound, check the stroke count, then move to handwriting practice.",reading:"Reading",strokes:"Strokes",tts:"Sound",strokeOrder:"Stroke order",explanation:"Explanation",explanationHint:"The key lesson notes are separated into contrast cards.",examples:"Examples",examplesHint:"Short words and spellings for reading practice.",example:"Example",meaning:"Meaning",practiceBlock:"Practice",practiceHint:"Complete the exercises in compact blocks and check immediately.",selfCheck:"Check yourself",selfCheckHint:"Finish the handwriting step after practicing by hand."}}function Pk(e){const t=String(e||"").toLowerCase(),n=Na(t),s=Dp();if(!n)return yi(new Error(s.noCourse));const r=Rs(t);if(!r)return UN(t).then(()=>R()).catch(()=>R()),a.kanaCourseErrors[t]?yi(a.kanaCourseErrors[t]):Mk(n,s);const o=String(a.activeTextbookSubroute||"").toLowerCase();if(o==="reference")return Wk(r,s);if(o==="sources")return Xk(r,s);if(o==="review")return Qk(r,s);if(o==="final"||o==="final-test")return qk(r,s);if(/^practice-\d+$/i.test(o)){const l=r.reading_practice?.find(c=>c.id===o);return l?Hk(r,l,s):Or(me("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}if(/^lesson-\d+$/i.test(o)){const l=r.lessons?.find(c=>c.id===o);return l?Dk(r,l,s):Or(me("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}return Ek(r,s)}function Mk(e,t){return`
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
    `}function Ek(e,t){const n=ht(e.slug),s=e.lessons?.[0]?.id||"",r=n.currentRoute||s;oo(e.slug,r);const o=e.lessons.filter(l=>Ki(e.slug,l).passed).length;return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(t.russianCourse)}</p>
            <h1>${i(e.title)} <span lang="ja">${i(e.native_title)}</span></h1>
            <p>${i(e.description)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(t.allTextbooks)}</button>
            <a class="btn primary" href="#textbooks/${g(e.slug)}/${g(r)}">${i(n.currentRoute?t.continue:t.start)}</a>
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
          ${E(t.lessons,o,`${e.lessons.length}`,M(o,Math.max(1,e.lessons.length)))}
          ${E(t.practice,e.reading_practice.length,t.russianCourse,100)}
          ${E(t.final,n.finalTest?.score||0,`${n.finalTest?.total||0}`,M(n.finalTest?.score||0,Math.max(1,n.finalTest?.total||1)))}
          ${E(t.review,Jp(e,"due").length,t.characters,M(Jp(e,"due").length,Math.max(1,e.base_characters.length)))}
        </div>
        <div class="actions kana-course-tabs">
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/reference">${i(t.reference)}</a>
          <button class="btn ghost" type="button" data-action="route" data-route="review">${i(t.review)}</button>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/final">${i(t.final)}</a>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/sources">${i(t.sources)}</a>
          <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Vn().settings.showRomaji?t.hideRomaji:t.showRomaji)}</button>
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.lessons)}</h2>
            <p>${i(p()==="ru"?"Курсы азбук независимы: хирагана не блокирует катакану и наоборот.":"Kana courses are independent: hiragana does not lock katakana and vice versa.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-lesson-grid">
          ${e.lessons.map(l=>Kk(e,l,t)).join("")}
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.practice)}</h2>
            <p>${i(p()==="ru"?"Пять блоков чтения из PDF без обязательного ромадзи.":"Five PDF reading practice blocks without mandatory romaji.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-practice-grid">
          ${e.reading_practice.map(l=>Fk(e,l,t)).join("")}
        </div>
      </section>
    `}function Kk(e,t,n){const s=Ki(e.slug,t),r=s.passed?n.passed:s.completed?n.notPassed:n.start,o=s.completed?Math.round(s.latestScore/Math.max(1,El(t.exercises))*100):0;return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">#${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p class="kana-character-row" lang="ja">${t.focus_characters.slice(0,16).map(l=>`<span>${i(l.kana)}</span>`).join("")}</p>
            <div class="progress mini"><span style="width:${M(o,100)}%"></span></div>
            <p>${i(r)} · ${i(o)}%</p>
          </div>
          <a class="btn primary" href="#textbooks/${g(e.slug)}/${g(t.id)}">${i(s.completed?n.continue:n.start)}</a>
        </article>
      `}function Fk(e,t,n){const s=ht(e.slug).practices[t.id],r=El(t.exercises),o=Number(s?.latestScore||0);return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p>${i((t.body||[]).slice(0,2).join(" "))}</p>
            <div class="progress mini"><span style="width:${M(o,Math.max(1,r))}%"></span></div>
          </div>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/${g(t.id)}">${i(n.practice)}</a>
        </article>
      `}function Dk(e,t,n){const s=ht(e.slug);oo(e.slug,t.id);const r=Ki(e.slug,t),o=El(t.exercises),l=Bk(t),c=!!s.writing?.[t.id];return`
      <section class="page textbooks-page n5-course-page n5-lesson-page kana-course-page kana-lesson-page">
        <div class="kana-lesson-shell">
          ${Ok(e,t,n,l,r,o)}
          ${Uk(e,t,n,l)}
          ${Jk(l.explanations,n)}
          ${Gk(l.examples,n)}
          <section class="kana-lesson-step kana-practice-step" aria-labelledby="kanaPracticeTitle">
            <div class="kana-step-heading">
              <span class="pill">05</span>
              <h2 id="kanaPracticeTitle">${i(n.practiceBlock)}</h2>
              <p>${i(n.practiceHint)}</p>
            </div>
            <div class="kana-practice-stack">
              ${t.exercises.map(d=>Ml(e.slug,t.id,"lesson",d,n)).join("")}
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
    `}function Bk(e){const t=(e.body||[]).map(d=>String(d||"").trim()).filter(Boolean),n=[],s=[],r={title:"",headers:[],rows:[]};let o=0;const l=d=>/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(d),c=d=>/^(Слова для чтения|Пример и узнавание)$/i.test(d);for(;o<t.length;){const d=t[o];if(/^\d+$/.test(d)){o+=1;continue}if(/^Цель раздела$/i.test(d)){for(o+=1;o<t.length&&!/^Знаки урока$/i.test(t[o]);)/^\d+$/.test(t[o])||n.push(t[o]),o+=1;continue}if(/^Знаки урока$/i.test(d)){for(o+=1;o<t.length&&!/^(Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(t[o]);)o+=1;continue}if(c(d)){r.title=d;const u=t.slice(o+1).filter(h=>!/^\d+$/.test(h));r.headers=u.slice(0,3);const f=u.slice(3);for(let h=0;h+2<f.length;h+=3)r.rows.push(f.slice(h,h+3));break}if(l(d)){const u=d,f=[];for(o+=1;o<t.length&&!l(t[o]);)/^\d+$/.test(t[o])||f.push(t[o]),o+=1;f.length&&s.push({title:u,body:f});continue}o+=1}return{goal:n,explanations:s,examples:r}}function Ok(e,t,n,s,r,o){const l=Number(r?.latestScore||0),c=M(l,Math.max(1,o)),d=s.goal.length?s.goal.join(" "):(t.body||[]).slice(0,2).join(" ");return`
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
              <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Vn().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
              ${Yn("textbook",{level:e.slug,subroute:t.id})}
            </div>
          </div>
        </article>
      `}function Pl(e,t){return`${String(e||"").toLowerCase()}:${String(t||"")}`}function Bp(e,t){const n=Pl(e,t?.id||""),s=t?.focus_characters?.length||0,r=Number(a.kanaLessonCharacterIndex[n]||0);return le(Number.isFinite(r)?r:0,0,s)}function zk(e,t){const n=Array.isArray(e?.rows)?e.rows:[],s=String(t||""),r=n.find(o=>String(o?.[0]||"").includes(s))||n[0]||null;return r?{word:String(r[0]||""),reading:String(r[1]||""),meaning:String(r[2]||"")}:null}function Uk(e,t,n,s){const r=t.focus_characters||[];if(!r.length)return"";const o=Bp(e.slug,t),l=o>=r.length,c=r[Math.min(o,r.length-1)],d=`${Math.min(o+1,r.length)} / ${r.length}`,u=M(Math.min(o,r.length),Math.max(1,r.length));if(l)return`
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
                <span class="pill">${i(n.cardProgress)} ${i(`${r.length} / ${r.length}`)}</span>
              </div>
            </div>
            <h3>${i(n.cardComplete)}</h3>
            <p>${i(n.cardCompleteHint)}</p>
            <div class="kana-card-strip" lang="ja" aria-label="${g(n.newSigns)}">
              ${r.map(L=>`<span class="is-done">${i(L.kana)}</span>`).join("")}
            </div>
            <div class="actions">
              <button class="btn ghost" type="button" data-action="kana-lesson-card-reset" data-course="${g(e.slug)}" data-lesson="${g(t.id)}">${i(n.backToFirstCard)}</button>
              <a class="btn primary" href="#kanaPracticeTitle">${i(n.practiceBlock)}</a>
            </div>
          </article>
        </section>
      `;const f=_t(e.slug),h=ks(e.slug,c.kana),m=De(f[h]||null),S=zk(s.examples,c.kana),x=Vn().settings.showRomaji,$=mr();return`
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
                ${Sr(m.state)}
                <span class="pill">${i(n.cardProgress)} ${i(d)}</span>
              </div>
              <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(c.kana)}" aria-label="${g(n.tts)}">🔊</button>
            </div>
            <div class="kanji-focus kana-lesson-focus" lang="ja" aria-label="${g(c.kana)}">${i(c.kana)}</div>
            <h3>${i(n.reading)}: ${i(x&&c.romaji?c.romaji:c.kana)}</h3>
            <p class="label">${i(e.title)} · ${i(c.strokes?`${c.strokes} ${n.strokes.toLowerCase()}`:n.characters)} · ${i(Jt(m.dueAt))}</p>
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
              ${r.map((L,k)=>`<span class="${k<o?"is-done":k===o?"is-current":""}">${i(L.kana)}</span>`).join("")}
            </div>
            <div class="progress mini" aria-hidden="true"><span style="width:${u}%"></span></div>
            <div class="rating-grid srs-binary-grid">
              <button class="btn danger" type="button" data-action="kana-lesson-card" data-course="${g(e.slug)}" data-lesson="${g(t.id)}" data-kana="${g(c.kana)}" data-rating="forgot">${i($.forgot)} <small>${i($.forgotHint)}</small></button>
              <button class="btn success" type="button" data-action="kana-lesson-card" data-course="${g(e.slug)}" data-lesson="${g(t.id)}" data-kana="${g(c.kana)}" data-rating="remember">${i($.remember)} <small>${i($.rememberHint)}</small></button>
            </div>
          </article>
        </section>
      `}function Jk(e,t){return e.length?`
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
      `:""}function Gk(e,t){if(!e?.rows?.length)return"";const n=e.headers.length===3?e.headers:[t.example,t.reading,t.meaning];return`
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
                    ${s.map((r,o)=>`<td data-label="${g(n[o]||"")}"${o===0?' lang="ja"':""}>${i(r)}</td>`).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>
      `}function Hk(e,t,n){return oo(e.slug,t.id),`
      <section class="page textbooks-page n5-course-page kana-course-page kana-practice-page">
        ${qr(e,t.title,n,t.id)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h2>${i(t.title)}</h2>
            ${Op(t.body)}
          </div>
        </article>
        ${t.exercises.map(s=>Ml(e.slug,t.id,"practice",s,n)).join("")}
      </section>
    `}function qk(e,t){return oo(e.slug,"final"),`
      <section class="page textbooks-page n5-course-page n5-final-page kana-course-page kana-final-page">
        ${qr(e,t.final,t)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(t.final)}</span>
            <h2>${i(e.final_test.title)}</h2>
            <p>${i((e.final_test.body||[]).slice(0,4).join(" "))}</p>
          </div>
        </article>
        ${(e.final_test.sections||[]).map(n=>Ml(e.slug,"final","final",n,t)).join("")}
      </section>
    `}function Wk(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${qr(e,t.reference,t)}
        <article class="jlpt-section-card">
          <h2>${i(e.reference.title)}</h2>
          ${Op(e.reference.body)}
        </article>
        <div class="kana-table-grid">
          ${e.base_characters.map(n=>Vk(n)).join("")}
        </div>
      </section>
    `}function Xk(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${qr(e,t.sources,t)}
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
    `}function Qk(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page kana-review-page">
        ${qr(e,t.review,t)}
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
    `}function qr(e,t,n,s){return`
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(e.title)}</p>
            <h1>${i(t)} <span lang="ja">${i(e.native_title)}</span></h1>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.slug)}">${i(e.title)}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Vn().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
            ${Yn("textbook",{level:e.slug})}
          </div>
        </div>
      `}function Op(e=[]){const t=[];for(const n of e.slice(0,40))/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова|Пример|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(n)?t.push(`<h3>${i(n)}</h3>`):t.push(`<p>${i(n)}</p>`);return t.join("")}function Vk(e){return`
        <button class="kana-char-chip" type="button" data-action="play-kana-tts" data-text="${g(e.kana)}">
          <span lang="ja">${i(e.kana)}</span>
          ${Vn().settings.showRomaji&&e.romaji?`<small>${i(e.romaji)}</small>`:""}
        </button>
      `}function Ml(e,t,n,s,r){const o=Zk(e,t,n,s.id),l=a.kanaExerciseDrafts[Kl(e,t,n,s.id)]||{};return`
        <form class="jlpt-section-card kana-exercise-card" data-kana-exercise-form data-course="${g(e)}" data-owner="${g(t)}" data-owner-type="${g(n)}" data-exercise="${g(s.id)}">
          <h3>${i(s.label)}</h3>
          <p>${i(s.instruction||"")}</p>
          <div class="kana-exercise-items">
            ${s.items.map(c=>Yk(c,o,r,l)).join("")}
          </div>
          ${o?.completed?`<p class="exercise-feedback ${o.passed?"is-correct":"is-wrong"}" aria-live="polite">${i(r.score)}: ${i(o.score)}/${i(o.total)} · ${i(o.passed?r.passed:r.notPassed)}</p>`:""}
          <button class="btn primary" type="button" data-action="kana-submit-exercise">${i(r.check)}</button>
        </form>
      `}function Yk(e,t,n,s={}){const r=Object.prototype.hasOwnProperty.call(s,e.number)?s[e.number]:t?.answers?.[e.number]||"",o=t?.completed?t.correct?.[e.number]:null;return`
        <label class="kana-answer-row ${o===!0?"is-correct":o===!1?"is-wrong":""}">
          <span>${i(e.number)}. ${i(e.prompt)}</span>
          <input type="text" name="kana-${g(e.number)}" value="${g(r)}" autocomplete="off" inputmode="text" />
          ${o===null?"":`<small>${i(o?n.correct:`${n.wrong}: ${e.solution||e.accepted_answers?.[0]||""}`)}</small>`}
        </label>
      `}function El(e=[]){return(e||[]).reduce((t,n)=>t+(n.items||[]).length,0)}function Ki(e,t){const n=ht(e).lessons[t.id];return n||{completed:!1,passed:!1,latestScore:0,bestScore:0,exercises:{},updatedAt:null}}function Zk(e,t,n,s){const r=ht(e);return n==="lesson"?r.lessons?.[t]?.exercises?.[s]||null:n==="practice"?r.practices?.[t]?.exercises?.[s]||null:n==="final"&&(r.finalTest?.[s]||r.finalTest?.sections?.[s])||null}function ks(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim(),r=Array.from(s)[0]?.codePointAt(0);return!fe(n)||!Number.isInteger(r)?"":`kana:${n}:${r.toString(16).toUpperCase()}`}function Fi(e,t=""){const n=String(e||"").trim(),s=n.match(/^kana:(hiragana|katakana):([0-9a-f]+)$/i);if(s){const l=Number.parseInt(s[2],16);return!Number.isInteger(l)||l<=0?null:{slug:s[1].toLowerCase(),kana:String.fromCodePoint(l),id:ks(s[1],String.fromCodePoint(l))}}const r=n.match(/^(hiragana|katakana):(.+)$/i);if(r){const l=r[1].toLowerCase(),c=r[2].trim();return{slug:l,kana:c,id:ks(l,c)}}const o=String(t||"").toLowerCase();return fe(o)&&n?{slug:o,kana:n,id:ks(o,n)}:null}function _t(e){const t=String(e||"").toLowerCase();if(!fe(t))return{};const n=ht(t),s=n.review&&typeof n.review=="object"?n.review:{},r={};let o=!1;Object.entries(s).forEach(([d,u])=>{const f=Fi(d,t),h=f?.slug===t?f.id:"",m=De(u);if(!h){r[d]=m;return}const S=r[h];(!S||Number(m.reviewCount||0)>Number(S.reviewCount||0)||(Date.parse(String(m.lastReviewedAt||""))||0)>(Date.parse(String(S.lastReviewedAt||""))||0))&&(r[h]=m),h!==d&&(o=!0)});const l=Object.keys(s).sort().join("|"),c=Object.keys(r).sort().join("|");return(o||l!==c)&&(n.review=r),n.review}function zp(e,t){const n=Rs(e),s=String(t||"");return n?.base_characters?.find(r=>r.kana===s)||null}function Up(e){const t=Rs(e)||Na(e);return t?.title?t.title:String(e||"").toLowerCase()==="katakana"?p()==="ru"?"Катакана":"Katakana":p()==="ru"?"Хирагана":"Hiragana"}function Jp(e,t="due"){const n=_t(e.slug),s=Date.now();return(e.base_characters||[]).map(r=>{const o=ks(e.slug,r.kana),l=n[o]||null;return{...r,id:o,progress:l}}).filter(r=>t==="all"?!0:rd(r.progress?[{cardId:r.id,...r.progress}]:[],s).initial.length>0)}function ey(e,t,n,s){return e?n==="lesson"?e.lessons?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="practice"?e.reading_practice?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="final"&&e.final_test?.sections?.find(r=>r.id===s)||null:null}function Kl(e,t,n,s){const r=[e,n,t,s].map(o=>String(o||"").trim());return r.every(Boolean)?r.join(":"):""}function ty(e){var S;const t=e.closest?.("[data-kana-exercise-form]");if(!t)return;const n=String(t.dataset.course||"").toLowerCase(),s=String(t.dataset.owner||""),r=String(t.dataset.ownerType||""),o=String(t.dataset.exercise||"");if(!fe(n))return;const l=Rs(n),c=ey(l,s,r,o);if(!l||!c)return;const d={},u=Kl(n,s,r,o),f=new FormData(t);c.items.forEach(x=>{const $=f.get(`kana-${x.number}`);d[x.number]=dd(typeof $=="string"?$:"")});const h=TA(c,d),m=ht(n);if(m.currentRoute=s,m.updatedAt=h.updatedAt,r==="lesson"){const x=l.lessons.find(k=>k.id===s),$=m.lessons[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};$.exercises[o]=h;const L=id(x?.exercises||[],$.exercises);Object.assign($,L,{bestScore:Math.max(Number($.bestScore||0),L.latestScore),updatedAt:h.updatedAt}),m.lessons[s]=$,$.passed&&iy(l,x?.focus_characters||[])}if(r==="practice"){const x=l.reading_practice.find(k=>k.id===s),$=m.practices[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};$.exercises[o]=h;const L=id(x?.exercises||[],$.exercises);Object.assign($,L,{bestScore:Math.max(Number($.bestScore||0),L.latestScore),updatedAt:h.updatedAt}),m.practices[s]=$}if(r==="final"){m.finalTest||(m.finalTest={}),(S=m.finalTest).sections||(S.sections={}),m.finalTest.sections[o]=h;const x=id(l.final_test?.sections||[],m.finalTest.sections);Object.assign(m.finalTest,x,{bestScore:Math.max(Number(m.finalTest.bestScore||0),x.latestScore),updatedAt:h.updatedAt})}u&&delete a.kanaExerciseDrafts[u],F(h.passed?"answer_correct":"answer_wrong"),A(),It()}function ny(e,t){const n=String(e||"").toLowerCase();if(!fe(n)||!t)return;const s=ht(n);s.writing[t]=new Date().toISOString(),s.currentRoute=t,s.updatedAt=s.writing[t],A(),U(Dp().writeDone),It()}function sy(e,t){const n=String(e||"").toLowerCase(),s=Pl(n,t);!fe(n)||!t||(a.kanaLessonCharacterIndex[s]=0,a.pendingFocus="kana-character-card",Ie())}function ry(e,t,n,s){const r=String(e||"").toLowerCase();if(!fe(r)||!t||!n)return;const o=Rs(r),l=o?.lessons?.find(L=>L.id===t)||null;if(!o||!l)return;const c=ks(r,n);if(!c)return;const d=ht(r),u=_t(r),f=re(De(u[c]||null)),h=Ke(s)?"forgot":"remember",m=od(f,h);u[c]=m,d.review=u,d.currentRoute=t,d.updatedAt=new Date().toISOString(),Dt(f,m,h),ve({skipAchievements:!0}),h==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,he("answer_wrong",{cardId:c,kana:n,rating:h},{skipAchievements:!0})):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),he("answer_correct",{cardId:c,kana:n,rating:h,combo:a.progress.correctCombo},{skipAchievements:!0}));const S=Pl(r,t),x=l.focus_characters.findIndex(L=>L.kana===n),$=Bp(r,l);a.kanaLessonCharacterIndex[S]=Math.min((x>=0?x:$)+1,l.focus_characters.length),a.pendingFocus="kana-character-card",F(h==="forgot"?"answer_wrong":"answer_correct"),A(),Ie()}function ay(e,t,n){Am(e,t,n)}function iy(e,t=[]){const n=ht(e.slug),s=_t(e.slug);t.forEach(r=>{const o=ks(e.slug,r.kana);o&&(s[o]||(s[o]=od(null,"remember")))}),n.review=s}function oy(){const e=Vn();e.settings.showRomaji=!e.settings.showRomaji,A(),It()}function ly(e){const t=String(e||"").trim();t&&(ro(),qf(t)||U(p()==="ru"?"Системная озвучка недоступна.":"System speech is not available."))}function cy(e){a.activeTextbookLevel="N5",a.activeJlptLesson="N5",Xr();const t=String(a.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return Ly();if(t==="review")return Ny();const n=Mt(t);return n?(ne().currentLessonId=n.id,St("N5",n.id,"n5_lesson_page"),Vt("N5",n,"n5_lesson_page"),Sy(e,n)):dy(e)}function dy(e){const t=Ky(),n=Xe(),s=Qe(),r=Py(),o=a.n5Meta||{},l=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
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
              <a class="btn primary" href="#textbooks/N5/${g(r?.id||"n5-lesson-1")}" data-action="n5-open-lesson" data-id="${g(r?.id||"n5-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n5-review" data-mode="due">${i(n.review)}</button>
              <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
            </div>
          </div>
          ${bn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,M(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,M(t.completedLessons,s.length))}
          ${E(n.reviews,t.reviews,n.srs,M(t.reviews,Math.max(t.total,1)))}
          ${E(n.difficult,t.difficult,n.filterDifficult,M(t.difficult,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(c=>uy(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n5Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(v(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${tr("N5")}
      </section>
    `}function uy(e){const t=eg(e.id),n=Xe();let s=e.kanji.filter(r=>ne().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Fy(t))}</small>
      </a>
    `}function Mn(){return a.progress.jlptLessonStudy=yu(Yo(),a.progress.jlptLessonStudy||{}),a.progress.jlptLessonStudy}function We(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function Pt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Fl(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!1;const r=yn(n),o=hn(n,r,s),l=$s(n,s).some(c=>we.has(`${n.toLowerCase()}:${c}`));return!!(o||l)}function ys(e,t,n){const s=Mn(),r=We(e,t?.id),o=bu();let l=s.sessions[r];l||(l={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[r]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String(t?.id||l.lessonId||""),l.answers||(l.answers={}),l.phase=wu(l.phase),l.startedAt||(l.startedAt=new Date().toISOString()),l.updatedAt||(l.updatedAt=new Date().toISOString());let c=Fl(e,t?.id);!c&&qp(e,t)&&(c=!0,A());const d=$o({cards:n,session:l,confirmedCompleted:c});return l.currentIndex=d.currentIndex,l.phase=d.phase,d.status!=="done"&&!c&&(l.completedAt=null),d.status==="test-ready"&&(l.testOpenedAt||(l.testOpenedAt=l.updatedAt||new Date().toISOString())),d.status==="incomplete"&&(l.testOpenedAt=null),s.activeSessionKey=r,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:r,status:d.status,expectedCardIds:d.expectedCardIds,answeredExpectedCardIds:d.answeredExpectedCardIds,answeredCount:d.answeredCount,currentIndex:d.currentIndex,total:d.total}}function py(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function Ys(e){const t=D(e);return t==="N5"?{level:t,course:ne,lessons:Qe,lessonById:Mt,cardsForLesson:nn,buildExercises:js}:t==="N4"?{level:t,course:X,lessons:it,lessonById:Fn,cardsForLesson:sr,buildExercises:ta}:t==="N3"?{level:t,course:q,lessons:lt,lessonById:Bn,cardsForLesson:ar,buildExercises:sa}:t==="N2"?{level:t,course:W,lessons:dt,lessonById:zn,cardsForLesson:or,buildExercises:aa}:t==="N1"?{level:t,course:ee,lessons:pt,lessonById:Ss,cardsForLesson:oa,buildExercises:la}:null}function gy(e){const t=D(e);return t?`${t.toLowerCase()}Course`:""}function $s(e,t){const n=D(e),s=String(typeof t=="object"&&t?t.id:t||"").trim(),r=new Set(s?[s]:[]),o=String(n||"").toLowerCase();if(o){const l=s.match(/^lesson-(\d+)$/i);l&&r.add(`${o}-lesson-${l[1]}`);const c=s.match(new RegExp(`^${o}-lesson-(\\d+)$`,"i"));c&&r.add(`lesson-${c[1]}`)}return[...r].filter(Boolean)}function hn(e,t,n){const s=t?.completedLessons||{};return $s(e,n).some(r=>!!s[r])}function my(e,t){if(!e||!t)return null;const n=e.lessons(),s=n.find(o=>Number(o.order||0)===Number(t.order||0)+1);if(s)return s;const r=n.findIndex(o=>o.id===t.id);return r>=0&&n[r+1]||null}function Dl(e,t,n=""){if(!e||!t)return"";const s=e.lessons(),r=[...new Set([n,...$s(e.level,t)].map(String).filter(Boolean))];for(const o of r){const l=o.match(/^(.*?)(\d+)$/);if(!l)continue;const c=Number(l[2])+1;if(s.length&&c>s.length)continue;const d=`${l[1]}${c}`,u=e.lessonById(d);return u&&u.id!==t.id?u.id:d}return""}function fy(e,t,n){if(!e||!t||!n)return;const s=e.lessons(),r=e.lessonById(t.currentLessonId);if(!(r?hn(e.level,t,r)||hn(e.level,t,t.currentLessonId):!t.currentLessonId||t.currentLessonId===n.id||hn(e.level,t,t.currentLessonId)))return;const l=s.find(c=>!hn(e.level,t,c));t.currentLessonId=l?.id||Dl(e,n,t.currentLessonId)||r?.id||n.id}function hy(e,t){const n=D(e);if(!n||!t)return!1;if([t.completedLessons,t.studiedKanji,t.srsKanji,t.difficultKanji,t.exerciseResults,t.completedExercises].some(o=>o&&typeof o=="object"&&Object.keys(o).length>0))return!0;const r=`${n}:`;return Object.keys(a.progress?.jlptLessonStudy?.sessions||{}).some(o=>o.startsWith(r))}function Gp(e,t){const n=D(e);return`${String(n||e||"").toLowerCase()}:${String(t||"")}`}function Hp(e,t){const n=Ys(e);if(!n)return null;const s=typeof t=="object"&&t?t:n.lessonById(t);if(!s)return null;const r=n.course(),o=n.cardsForLesson(s),l=n.buildExercises(s),c=a.progress?.jlptLessonStudy?.sessions?.[We(n.level,s.id)]||null,d=Fl(n.level,s.id);return{...u1({cards:o,session:c,confirmedCompleted:d,exercises:l,exerciseResults:r.exerciseResults||{},completedExercises:r.completedExercises||{},isCardStudied:u=>!!(r.studiedKanji?.[u.kanji]||r.difficultKanji?.[u.kanji]||Ou(u))}),level:n.level,lesson:s,course:r,cards:o,exercises:l}}function vy(e,t,n,s){const r=D(e);if(!r||!t)return!1;const o=Mn(),l=We(r,t),c=o.sessions[l];return c?(c.phase="done",c.completedAt=s,c.updatedAt=s,c.currentIndex=Math.max(0,Number(n||0)),o.activeSessionKey=l,o.lastUpdatedAt=s,!0):!1}function by(e,t,n,s,r=new Date().toISOString()){const o=Ys(e);if(!o||!t||!n)return!1;const l=gy(o.level),c=l&&a.progress?.[l]||n;l&&a.progress&&!a.progress[l]&&(a.progress[l]=c),c.completedLessons||(c.completedLessons={});const d=$s(o.level,t),u=d.some(k=>!!c.completedLessons[k]),f=d.map(k=>c.completedLessons[k]).find(Boolean)||r;d.forEach(k=>{c.completedLessons[k]=f}),n!==c&&(n.completedLessons||(n.completedLessons={}),d.forEach(k=>{n.completedLessons[k]=f})),d.forEach(k=>we.add(Gp(o.level,k))),vy(o.level,t.id,s?.length||0,f);const h=my(o,t),m=o.lessonById(c.currentLessonId),S=h?.id||Dl(o,t,c.currentLessonId)||t.id,x=$s(o.level,c.currentLessonId),$=x.some(k=>d.includes(k)),L=x.some(k=>!!c.completedLessons[k]);return(!c.currentLessonId||c.currentLessonId===t.id||m?.id===t.id||$||L)&&(c.currentLessonId=S),fy(o,c,t),n!==c&&(n.currentLessonId=c.currentLessonId),er(o.level),!u}function qp(e,t){const n=Hp(e,t);if(!n)return!1;const s=hn(n.level,n.course,n.lesson),r=$s(n.level,n.lesson).some(l=>we.has(Gp(n.level,l))),o=!!(n.cardStudyComplete&&n.exerciseComplete);return s||!(n.canMigrateCompletion||o||r)?!1:by(n.level,n.lesson,n.course,n.cards)}function Zs(e,t){const n=Hp(e,t);return n?n.complete?"completed":n.study.answeredCount>0||n.cardStudyComplete||n.correctExerciseCount>0||(n.lesson.kanji||[]).some(r=>n.course.studiedKanji?.[r]||n.course.difficultKanji?.[r])?"started":"new":"new"}function En(e){const t=Ys(e);return t?t.lessons().filter(n=>Zs(t.level,n.id)==="completed").length:0}function er(e){var o;const t=D(e),n={N5:"N4",N4:"N3",N3:"N2",N2:"N1"}[t],r=Ys(t)?.lessons()||[];return!t||!n||!r.length||En(t)<r.length?!1:((o=a.progress).unlockedJlptLevels||(o.unlockedJlptLevels=[]),[t,n].forEach(l=>{a.progress.unlockedJlptLevels.includes(l)||a.progress.unlockedJlptLevels.push(l)}),!0)}function wy(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(Xi).join("")}
      </ul>
    `:""}function ky(e){const t=ka(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${mc(e)}
          ${n?`
            <div>
              <h3>${i(_("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function yy(e,t,n,s,r,o,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],d=typeof l.sentence=="function"?l.sentence(n,t):"",u=typeof l.extra=="function"?l.extra(n,t):"",f=l.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),m=Number(s||0),S=B(n.id),x=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(m+1)}</span>
              <span class="pill">${i(S.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(_("strokes"))}</span>`:""}
              ${um(n)}
            </div>
            <h2>${i(K(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(m+1,r)} из ${r}`:`Kanji ${Math.min(m+1,r)} of ${r}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${gm(n,"onyomi",o.onyomi,n.onyomi)}
              ${gm(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${wy(c)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${ky(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(f)}" data-level="${g(h)}" data-lesson="${g(x)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(f)}" data-level="${g(h)}" data-lesson="${g(x)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function $y(e,t,n,s,r,o="test-ready"){const l=o==="done";return`
      <article class="lesson-player-card lesson-study-complete">
        <div class="lesson-study-complete-copy">
          <span class="pill">${i(l?n.completed:p()==="ru"?"Карточки изучены":"Cards studied")}</span>
          <h2>${i(l?n.lessonComplete:p()==="ru"?"Карточки изучены. Перейдите к упражнениям":"Cards studied. Continue to the exercises")}</h2>
          <p>${i(l?p()==="ru"?"Урок завершён штатно, прогресс сохранён.":"The lesson is completed and progress is saved.":p()==="ru"?"Все карточки урока отвечены. Выполните упражнения ниже, чтобы завершить урок.":"All lesson cards are answered. Complete the exercises below to finish the lesson.")}</p>
          <div class="tag-row">
            <span class="pill">${i(p()==="ru"?`Кандзи ${r}/${s}`:`Kanji ${r}/${s}`)}</span>
            <span class="pill">${i(l?n.completed:p()==="ru"?"упражнения ниже":"exercises below")}</span>
          </div>
        </div>
      </article>
    `}function jy(e,t,n){return`
      <article class="lesson-player-card lesson-study-complete lesson-study-unavailable">
        <div class="lesson-study-complete-copy">
          <span class="pill danger-pill">${i(e||"")} · ${i(p()==="ru"?"карточки недоступны":"cards unavailable")}</span>
          <h2>${i(p()==="ru"?"Не удалось загрузить карточки урока":"Could not load lesson cards")}</h2>
          <p>${i(oi())}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${g(e)}">${i(p()==="ru"?"Повторить":"Retry")}</button>
            <a class="btn ghost" href="#textbooks/${g(e)}">${i(p()==="ru"?"К списку уроков":"Lesson list")}</a>
          </div>
        </div>
      </article>
    `}function Wr(e,t,n,s,r={}){const o=ys(e,t,n),l=py(o,n),c=Number(o.answeredCount||0),d=Number(o.total||0),u=r.playerId||Pt(e,t?.id,"player"),f=d?M(c,d):0,h=l?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":o.status==="incomplete"?p()==="ru"?"Карточки не загружены":"Cards not loaded":p()==="ru"?"Карточки изучены":"Cards studied",m=l?K(l):o.status==="done"?s.lessonComplete:h;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(m)}</strong>
          <div class="meter"><i style="width:${f}%"></i></div>
        </div>
        ${l?yy(e,t,l,o.currentIndex,d,s,r):o.status==="incomplete"?jy(e):$y(e,t,s,d,c,o.status)}
      </article>
    `}function Sy(e,t){const n=Xe(),s=nn(t),r=js(t),o=eg(t.id),l=ys("N5",t,s);let c=o==="completed";const d=`n5:${t.id}`;we.has(d)&&(c=!0);const u=c,f=r.filter(G=>Ol(G.id)?.correct).length,h=r.length>0&&f===r.length,m=s.filter(G=>ne().studiedKanji[G.kanji]).length,S=t.kanji.length,x=m>=S,$=!c&&h&&x,L=t.kanji.filter(G=>ne().difficultKanji[G]).join(" · "),k=Qe().find(G=>G.order===t.order+1),N=Pt("N5",t.id,"player"),J=Pt("N5",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · ${i(n.lesson)} ${t.order}/10</p>
            <h1>${i(v(t.title))}</h1>
            <p>${i(v(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(n.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.difficult)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(v(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,S)}/${S}`,n.kanji,M(l.answeredCount,S))}
            ${E(n.exercises,`${f}/${r.length}`,n.correct,M(f,r.length))}
          </div>
        </article>

        ${Wr("N5",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:G=>Kt(G),sentence:G=>Cy(G,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(Y(G.reading||""))}</span>
                <small>${i(v({ru:G.ru,en:G.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(J)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(G=>Wp(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>ne().studiedKanji[G.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${g(t.id)}" ${u||!$?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#textbooks/N5/${g(k.id)}" data-action="n5-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function Cy(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Wp(e){const t=Xe(),n=Ol(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Kn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(cg(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Xp(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Xp(e,n)}
      </article>
    `}function Xp(e,t){if(!t)return"";const n=Xe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Ny(e){const t=Xe(),n=ne().activeReviewMode||"due",s=e$(n);return`
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
          ${(a.n5Exercises?.reviewModes||[]).map(r=>`
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${g(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>xy(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function xy(e,t){const n=Xe(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Jt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Kt(e)[0]?.word||e.hiragana||"")} · ${i(Kt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Ly(e){const t=Xe(),n=a.n5FinalTest||{},s=og(),r=ne().finalTest,o=an(r,s),l=o.answered,c=o.ready,d=a.finalTestBusy;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const h=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==h)&&(r.percent=h),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const u=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,f=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Final</p>
            <h1>${i(v(n.title||{}))}</h1>
            <p>${i(v(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(t.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,M(l,s.length))}
          ${E(t.score,u||f>0?`${f}%`:"—",`${n.passingPercent||80}%`,u||f>0?f:0)}
          ${E(t.mistakes,u?(r.mistakes||[]).length:0,t.difficult,u?M((r.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Ut("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,m)=>Ay(h,m)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Ut("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Ay(e,t){const n=ne().finalTest.answers?.[e.id],s=!!ne().finalTest.completedAt,r=a.finalTestModal&&a.finalTestModal.level==="N5"&&a.finalTestModal.kind==="warning"?a.finalTestModal:null,o=!!(r&&Array.isArray(r.missingIds)&&r.missingIds.includes(e.id));return`
      <article id="${g(ur("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(l=>{const c=n===l.value;return`<button class="btn ${s&&l.value===e.answer?"success":c?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(l.value)}">${i(l.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Xe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Xe(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"К N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Qp(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Vp(e){return D(e)||String(e||"").toUpperCase()}function Yp(e){const t=Vp(e);return Array.isArray(a.jlptReadingByLevel?.[t])?a.jlptReadingByLevel[t]:[]}function Bl(e){const t=a.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function Zp(e){return Y(da(String(e?.text||"")).replace(/\s+/g," ").trim())}function Iy(e){const t=D(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function Ty(){const e=Array.isArray(a.cards)?a.cards:[];if(!e.length)return[];const t=[];return Te.forEach(n=>{Yp(n).forEach((s,r)=>{const o=Bl(s),l=Zp(s),c=ic({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,Iy(n));c&&(c.kind="cloze",c.tiles=Gn(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=o.title,c.title=o.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=r+1,t.push(c))})}),t}function Ry(e){const t=Bl(e),n=Zp(e),s=n?hm(n):"",r=v(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(pc())}</summary>
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
            <span>${i(pc())}</span>
            <strong>${i(r||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function tr(e){const t=Yp(e);if(!t.length)return"";const n=Qp(),s=Vp(e),r=xa(s,"textbook_reading_block"),o=vr(s);return(r||o)&&A(),`
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
          ${t.map((l,c)=>_y(l,s,c)).join("")}
        </div>
      </section>
    `}function _y(e,t,n){const s=Qp(),r=Bl(e),o=Array.isArray(e?.questions)?e.questions:[];return`
      <article class="jlpt-reading-card">
        <div class="jlpt-reading-card-head">
          <div class="tag-row compact-tags">
            <span class="pill">${i(t)}</span>
            <span class="pill">${i(n+1)}</span>
            ${e.genre?`<span class="pill">${i(e.genre)}</span>`:""}
          </div>
          <h3>${i(e.title||`${t}-${n+1}`)}</h3>
          ${r.title.ru||r.title.en?`<p class="jlpt-reading-meta">${i(v(r.title))}</p>`:""}
          ${e.goal?`<p class="jlpt-reading-meta">${i(s.goal)}: ${i(e.goal)}</p>`:""}
          ${e.source?`<p class="jlpt-reading-meta">${i(s.source)}: ${i(e.source)}</p>`:""}
        </div>
        <div class="jlpt-reading-text">${i(e.text||"")}</div>
        ${Ry(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(l=>`<li>${i(l)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function Xr(){a.progress.n5Course=ju(el(),a.progress.n5Course||{});const e=Qe();!Mt(a.progress.n5Course.currentLessonId)&&e[0]&&(a.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n5Course.completedLessons[s.id]);return!a.progress.n5Course.currentLessonId&&n&&(a.progress.n5Course.currentLessonId=n.id),a.progress.n5Course}function ne(){return Xr()}function Qe(){return a.n5Textbook?.items||[]}function Mt(e){const t=String(e||"");return t&&Qe().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function Py(){return Mt(ne().currentLessonId)||Qe().find(e=>!ne().completedLessons[e.id])||Qe()[0]||null}function nn(e){return(e?.kanji||[]).map(t=>My(t,e)).filter(Boolean)}function Et(){const e=new Set;return Qe().flatMap(t=>nn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function My(e,t=null){const n=String(e||""),s=a.n5KanjiCatalog?.find(l=>l.kanji===n)||null,r=a.cards.find(l=>l.kanji===n&&String(l.jlpt||"").toUpperCase()==="N5")||a.cards.find(l=>l.kanji===n)||null,o=t?.id||s?.lessonId||null;return r&&s?li({...r,lessonId:r.lessonId||o},s):r||(s?li({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function Qr(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:Y(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:Y(e.hiragana||""),romaji:e.romaji||"",translation:K(e)}]}function Kt(e){return Qr(e,e.examples)}function Ey(e,t){const n=t?.word||e.kanji,s=Y(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${K(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${K(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function Ky(){const e=Et(),t=ne(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:Di(),reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function eg(e){return Zs("N5",e)}function Fy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Di(){return En("N5")}function js(e){const t=nn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n5Exercises?.types||[]).map($=>[$.type,$.title])),r=Object.fromEntries((a.n5Exercises?.types||[]).map($=>[$.type,$])),o=$=>r[$]||{rewardXp:a.n5Meta?.rewards?.exerciseXp||7,rewardMoon:a.n5Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:sn({value:c.id,label:K(c)},t.slice(1).map($=>({value:$.id,label:K($)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:sn({value:d.kanji,label:d.kanji},t.filter($=>$.id!==d.id).map($=>({value:$.kanji,label:$.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=Kt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word,answer:f.reading,answerLabel:f.reading,kanji:u.kanji,cardId:u.id,options:sn({value:f.reading,label:f.reading},t.flatMap($=>Kt($).map(L=>({value:L.reading,label:L.reading}))).filter($=>$.value!==f.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:sn({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map($=>({value:v({ru:$.ru,en:$.en}),label:v({ru:$.ru,en:$.en})})),1),...o("sentence")});const m=t[3]||t[0],S=Kt(m)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:_a(S),answer:S.word,answerLabel:S.word,kanji:m.kanji,cardId:m.id,options:sn({value:S.word,label:S.word},t.flatMap($=>Kt($).map(L=>({value:L.word,label:L.word}))).filter($=>$.value!==S.word),2),...o("missing-word")});const x=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(x)}`:`Type the kanji for: ${K(x)}`,answer:x.kanji,answerLabel:x.kanji,kanji:x.kanji,cardId:x.id,options:[],...o("active-recall")}),l.slice(0,a.n5Exercises?.lessonQuestionCount||6).map($=>({...$,level:"N5",lessonId:e.id}))}function sn(e,t,n=0){const s=new Set([String(e.value)]),r=[e];if(t.forEach(c=>{const d=String(c.value||"");!d||s.has(d)||r.length>=4||(s.add(d),r.push(c))}),Et().forEach(c=>{if(r.length>=4)return;const d={value:c.id,label:c.kanji};s.has(String(d.value))||(s.add(String(d.value)),r.push(d))}),r.length<=1)return r;const l=n%r.length;return[...r.slice(l),...r.slice(0,l)]}function tg(e){for(const t of Qe()){const n=js(t).find(s=>s.id===e);if(n)return n}return null}function Kn(e,t,n=""){return a.route==="review"&&a.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(a.activeExerciseReviewId||"")===String(t||"")&&(!n||String(a.activeExerciseReviewSource||"")===String(n||""))}function Vr(e,t,n){return Kn(e,n)?a.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function Dy(e,t,n){const s=D(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const r=e.exerciseSrs[String(n.id)]||null;if(r)return Is(r,{level:s,lessonId:n.lessonId||r.lessonId||"",exerciseId:n.id,cardId:n.cardId||r.cardId||"",kanji:n.kanji||r.kanji||"",type:n.type||r.type||"",title:n.title||r.title||null,prompt:n.prompt||r.prompt||"",answer:n.answer||r.answer||"",answerLabel:n.answerLabel||r.answerLabel||""});const o=fr(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function By(e,t,n,s){if(!e||!n)return;const r=D(t);r&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=Is(s,{level:r,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function Yr(e,t,n,s,r,o={}){const l=D(e);if(!l||!t||!n)return;const c=new Date().toISOString(),d=Kn(l,n.id);if(d&&a.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:r,checkedAt:c};d?(a.reviewExerciseResults||(a.reviewExerciseResults={}),a.reviewExerciseResults[n.id]=u,a.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const f=re(Dy(t,l,n)||fr(l,n.lessonId||"",n.id,n)),h=be(f,r?"good":"again");if(By(t,l,n,h),Dt(f,h,r?"good":"again"),ve(),r){if(a.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,o.markCompleted?.(c),(o.markStudied||(()=>{}))();const S=Number(o.rewardXp||0),x=Number(o.rewardMoon||0);(S||x)&&H(S,x,o.rewardKey||`exercise:${n.id}`)}}else if(a.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const S=n.answerLabel||n.answer;S&&o.markWordMistake?.(S)}d&&(a.pendingFocus="__scroll-top__"),R(),A(),Lt("textbook exercise post-render effects",()=>{F(r?"answer_correct":"answer_wrong"),V()})}function ng(e){const t=D(e?.level||"");return t==="N5"?{xp:Number(a.n5Meta?.rewards?.exerciseXp||7),moon:Number(a.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(a.n4Meta?.rewards?.readingXp||a.n4Meta?.rewards?.exerciseXp||10),moon:Number(a.n4Meta?.rewards?.readingMoon||a.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(a.n3Meta?.rewards?.readingXp||a.n3Meta?.rewards?.exerciseXp||10),moon:Number(a.n3Meta?.rewards?.readingMoon||a.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(a.n2Meta?.rewards?.readingXp||a.n2Meta?.rewards?.exerciseXp||10),moon:Number(a.n2Meta?.rewards?.readingMoon||a.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(a.n1Meta?.rewards?.readingXp||a.n1Meta?.rewards?.exerciseXp||10),moon:Number(a.n1Meta?.rewards?.readingMoon||a.n1Meta?.rewards?.exerciseMoon||1)}}function sg(e,t,n,s={}){if(!e?.id)return;const r=new Date().toISOString(),o=Kn(e.level,e.id,"reading"),l=re(Xn(e)||Wn(e));if(a.reviewExerciseResults||(a.reviewExerciseResults={}),e.kind==="cloze"){l.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():l.selectedIndices||[],l.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(L=>({kanji:String(L?.kanji||""),reading:String(L?.reading||"")})).filter(L=>L.kanji):l.selectedTiles||[],l.selectedText=String(t||""),l.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():l.wrongIndexes||[],l.completed=!0,l.completedAt=r,l.correct=!!n,l.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:r}},Ts(e,l),a.reviewExerciseResults[e.id]=re(l),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1;const S=re(l),x=be(S,n?"good":"again");x.selectedIndices=l.selectedIndices,x.selectedTiles=l.selectedTiles,x.selectedText=l.selectedText,x.wrongIndexes=l.wrongIndexes,x.completed=!0,x.completedAt=r,x.correct=!!n,x.answers=l.answers,Ts(e,x),a.reviewExerciseResults[e.id]=re(x),Dt(S,x,n?"good":"again"),ve();const $=ng(e);n?H($.xp,$.moon,`reading:${e.id}`):H(Math.max(1,Math.round($.xp*.35)),0,`reading:${e.id}:again`),o&&(a.pendingFocus="__scroll-top__"),o&&uo("reading-cloze"),R(),A(),Lt("reading cloze post-render effects",()=>{F(n?"answer_correct":"answer_wrong"),V()});return}const c=e.question||e.questions?.[0]||null,d=String(s.questionKey||c?.id||e.id);if(l.answers||(l.answers={}),l.answers[d])return;if(l.answers[d]={selected:String(t||""),correct:!!n,checkedAt:r},l.completed=!!d&&Object.keys(l.answers).length>=$c(),l.completedAt=l.completed?r:l.completedAt||null,l.correct=l.completed?Object.values(l.answers).every(S=>!!S?.correct):!1,l.selectedText=String(t||""),Ts(e,l),a.reviewExerciseResults[e.id]=re(l),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1,A(),!l.completed){R(),Lt("reading question post-render sound",()=>{F(n?"answer_correct":"answer_wrong")});return}const u=re(l),f=Object.values(l.answers).every(S=>!!S?.correct),h=be(u,f?"good":"again");h.answers=l.answers,h.completed=!0,h.completedAt=r,h.correct=f,h.selectedText=String(t||""),h.wrongQuestions=Object.entries(l.answers).filter(([,S])=>!S?.correct).map(([S])=>S),Ts(e,h),a.reviewExerciseResults[e.id]=re(h),Dt(u,h,f?"good":"again"),ve();const m=ng(e);f?H(m.xp,m.moon,`reading:${e.id}`):H(Math.max(1,Math.round(m.xp*.25)),0,`reading:${e.id}:again`),o&&(a.pendingFocus="__scroll-top__"),o&&uo("reading-exercise"),R(),A(),Lt("reading exercise post-render effects",()=>{F(n?"answer_correct":"answer_wrong"),V()})}function Oy(e){const t=pr();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),r=s===String(n.answer||"");sg(t.exercise,s,r,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function zy(e){const t=pr();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=re(Xn(n)||Wn(n));if(s.completed||s.selectedIndices?.includes(e))return;const r=Math.max(1,Ft(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=r){U(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),Ts(n,s),a.activeExerciseReviewSelection=s.selectedIndices.slice(),a.reviewExerciseResults[n.id]=re(s),A(),s.selectedIndices.length>=r){rg();return}R()}function Uy(){const e=pr();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=re(Xn(t)||Wn(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),a.activeExerciseReviewSelection=n.selectedIndices.slice(),a.reviewExerciseResults[t.id]=re(n),Ts(t,n),A(),R())}function Jy(){const e=pr();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=re(Xn(t)||Wn(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],a.activeExerciseReviewSelection=[],a.reviewExerciseResults[t.id]=re(n),Ts(t,n),A(),R())}function rg(){const e=pr();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=Ft(t),s=re(Xn(t)||Wn(t)),r=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(r.length<n.length){U(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=r.map(d=>t.tiles?.[d]).filter(Boolean),l=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),c=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);sg(t,o.map(d=>d.kanji).join(""),l,{selectedIndices:r,selectedTiles:o,wrongIndexes:c})}function Gy(){a.activeExerciseReviewTranslationOpen=!a.activeExerciseReviewTranslationOpen,R()}function Ol(e){return Vr("N5",ne(),e)}function Hy(e){const t=tg(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;ag(t,n,s)}function qy(e){const t=tg(e);if(!t)return;const n=document.getElementById(cg(t.id)),s=n?String(n.value||"").trim():"";ag(t,s,s===t.answer)}function ag(e,t,n){const s=ne();Yr("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||a.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>nr(e.kanji,e.cardId),markDifficult:()=>Zr(e.kanji,e.cardId),markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Wy(e,t,n,s){var x;const r=typeof window<"u"?window.scrollX:0,o=typeof window<"u"?window.scrollY:0,l=()=>{Yt(r,o),requestAnimationFrame(()=>{Yt(r,o),requestAnimationFrame(()=>Yt(r,o))}),window.setTimeout(()=>Yt(r,o),120),window.setTimeout(()=>Yt(r,o),320)},c=D(e)||String(e||"").toUpperCase(),d=c==="N5"?Mt(t):c==="N4"?Fn(t):c==="N3"?Bn(t):c==="N2"?zn(t):c==="N1"?Ss(t):null;if(!d)return;const u=fl(c,d),f=u.find($=>String($.id)===String(n))||ae(n);if(!f)return;const h=ys(c,d,u);if(h.session.answers?.[f.id])return;const m=new Date().toISOString();h.session.answers[f.id]={remembered:!!s,rating:s?"good":"again",answeredAt:m};const S=$o({cards:u,session:h.session,confirmedCompleted:Fl(c,d.id)});h.session.currentIndex=S.currentIndex,h.session.phase=S.phase,h.session.updatedAt=m,S.status==="test-ready"&&((x=h.session).testOpenedAt||(x.testOpenedAt=m)),a.pendingFocus=null,It(),l(),A(),_u(`${c} lesson SRS post-render commit`,()=>{const $=s?"good":"again";c==="N5"?ig(f.id,$,"review"):c==="N4"?vg(f.id,$,"review"):c==="N3"?Ag(f.id,$,"review"):c==="N2"?Og(f.id,$,"review"):c==="N1"&&Yg(f.id,$,"review"),l()})}function ig(e,t,n="review"){const s=ae(e);if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=re(B(s.id)),d=be(c,o,l);a.progress.cards[s.id]=d,Dt(c,d,l),ve(),nr(s.kanji,s.id),ne().srsKanji[s.kanji]=new Date().toISOString(),r?(Zr(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`)):Ke(t)?(Zr(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n5Meta?.rewards?.knowXp||6:a.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`)),It(),A(),Lt("N5 SRS post-render effects",()=>{F(Ke(t)?"answer_wrong":"answer_correct"),V()})}function Xy(e){const t=ae(e);if(!t)return;const n=ne();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},nr(t.kanji,t.id),H(8,1,`n5_writing:${t.id}`)),V(),A(),R()}function Qy(e){const t=Mt(e);if(!t)return;const n=ne(),s=`n5:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){R();return}const r=nn(t);if(r.filter(m=>n.studiedKanji[m.kanji]).length<t.kanji.length){const m=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof U=="function"&&U(m);return}const l=js(t);if(!(l.length>0&&l.every(m=>Ol(m.id)?.correct))){const m=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(m);return}we.add(s),nn(t).forEach(m=>{nr(m.kanji,m.id),n.srsKanji[m.kanji]=n.srsKanji[m.kanji]||new Date().toISOString();const S=B(m.id);S.state==="New"&&(a.progress.cards[m.id]=be(re(S),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Qe().find(m=>m.order===t.order+1)?.id||t.id;const d=Mn(),u=d.sessions[We("N5",t.id)];if(u){const m=new Date().toISOString();u.phase="done",u.completedAt=m,u.updatedAt=m,u.currentIndex=r.length,d.activeSessionKey=We("N5",t.id),d.lastUpdatedAt=m}ne(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),A({immediate:!0}),er("N5");const f=a.n5Meta?.rewards?.lessonCompleteXp||45,h=a.n5Meta?.rewards?.lessonCompleteMoon||6;H(f,h,`n5_lesson:${t.id}`),yr("N5",t.id),mt({title:`${Xe().lessonComplete}: ${v(t.title)}`,message:Xe().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),V(),A(),R()}function nr(e,t=null){if(!e)return;const n=ne();Gs(n,e)}function Zr(e,t=null,n=!0){if(e&&(ne().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=be(re(s),"again"))}}function Vy(e){const t=Mt(e);t&&(on("textbook-lesson",{level:"N5",lessonId:t.id}),ne().currentLessonId=t.id,St("N5",t.id,"n5_lesson_open"),Vt("N5",t,"n5_lesson_open"),ea(t.id))}function Yy(){ea("")}function Zy(e=null){e&&(ne().activeReviewMode=e),ea("review")}function ea(e){a.route="textbooks",a.activeTextbookLevel="N5",a.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";vt(t),A(),de(),Tt()}function e$(e="due"){const t=Date.now(),n=ne(),s=Et();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function og(){const e=Et(),t=Qe(),n=a.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(a.n5FinalTest?.questionCount||24,Math.max(e.length,1)),r=[];for(let o=0;o<s;o+=1){const l=e[o*7%e.length]||e[o%e.length],c=n[o%n.length],d=t.find(u=>u.kanji.includes(l.kanji))||t[0];r.push(t$(c,l,d,o))}return r.filter(Boolean)}function t$(e,t,n,s){const o=Kt(t)[0],l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:sn({value:t.id,label:K(t)},Et().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:sn({value:o.reading,label:o.reading},Et().flatMap(c=>Kt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value!==o.reading),s)};if(e==="sentence"&&l){const c=v({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:sn({value:c,label:c},Qe().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Zn(o),answer:c,answerLabel:c,options:sn({value:c,label:c},Et().flatMap(d=>Kt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==c),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:sn({value:t.kanji,label:t.kanji},Et().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function n$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ne().finalTest.answers[t]=n,A(),R())}function lg(e=!1){if(a.finalTestBusy)return;const t=ne().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){R();return}a.finalTestBusy=!0;try{const n=og(),s=a.n5FinalTest||{},r=Xe(),o=an(t,n),l=L0(s),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${ur("n5",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=N,A();return}let u=0;const f=[],h=[];n.forEach(N=>{const J=String(t.answers?.[N.id]||"").trim();J===N.answer?(u+=1,nr(N.kanji,N.cardId)):(J||h.push(N),f.push({id:N.id,kanji:N.kanji,answer:N.answerLabel,selected:J}),Zr(N.kanji,N.cardId))});const m=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,x=!!t.passed,$=Math.max(0,f.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=m,t.passed=m>=l,t.correctAnswers=u,t.incorrectAnswers=$,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=m,t.bestScore=Math.max(Number(t.bestScore||0),m),t.passedAt=t.passed?x&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||120),J=Number(s?.rewards?.completeMoon||20);L+=N,k+=J,H(N,J,"n5_final_complete")}if(t.passed&&!x){const N=Number(s?.rewards?.passXp||80),J=Number(s?.rewards?.passMoon||12);L+=N,k+=J,H(N,J,"n5_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Aa("N5",t),ne(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.finalTest=a.progress.n5Course.finalTest||{},Object.assign(a.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),A({immediate:!0}),a.finalTestModal={kind:"result",level:"N5",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:m,correct:u,incorrect:$,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},V(),A()}catch(n){console.error(n),U(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,R()}}function s$(){ne().finalTest=el().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),R()}function cg(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function r$(e){a.activeTextbookLevel="N4",a.activeJlptLesson="N4";const t=zl();t.opened||(t.opened=!0,V({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return h$();if(n==="review")return d$();if(n==="kanji")return p$();if(n==="grammar")return g$();if(n==="reading")return m$();if(n==="listening")return f$();const s=Fn(n);return s?(X().currentLessonId=s.id,St("N4",s.id,"n4_lesson_page"),Vt("N4",s,"n4_lesson_page"),o$(e,s)):a$(e)}function a$(e){const t=w$(),n=Le(),s=it(),r=b$(),o=a.n4Meta||{},l=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
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
              <a class="btn primary" href="#jlpt/n4/${g(r?.id||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${g(r?.id||"n4-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${i(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${i(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${bn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,M(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,M(t.completedLessons,s.length))}
          ${E(n.completedGrammar,`${t.completedGrammar}/${a.n4Meta?.grammarCount||a.n4Grammar.length}`,n.grammar,M(t.completedGrammar,a.n4Meta?.grammarCount||a.n4Grammar.length))}
          ${E(n.reviews,t.reviews,n.srs,M(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>i$(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n4Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(v(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${tr("N4")}
      </section>
    `}function i$(e){const t=mg(e.id),n=Le();let s=e.kanji.filter(r=>X().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(k$(t))}</small>
      </a>
    `}function o$(e,t){const n=Le(),s=sr(t),r=ta(t),o=mg(t.id),l=ys("N4",t,s);let c=o==="completed";const d=`n4:${t.id}`;we.has(d)&&(c=!0);const u=c,f=r.filter(G=>Jl(G.id)?.correct).length,h=r.length>0&&f===r.length,m=s.filter(G=>X().studiedKanji[G.kanji]).length,S=t.kanji.length,x=m>=S,$=!c&&h&&x,L=t.kanji.filter(G=>X().difficultKanji[G]).join(" · "),k=it().find(G=>G.order===t.order+1),N=Pt("N4",t.id,"player"),J=Pt("N4",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · ${i(n.lesson)} ${t.order}/17</p>
            <h1>${i(v(t.title))}</h1>
            <p>${i(v(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(n.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(v(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(G=>`<span class="pill">${i(G)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${f}/${r.length}`,n.correct,M(f,r.length))}
          </div>
        </article>

        ${Wr("N4",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:G=>bt(G),sentence:G=>l$(G,t)})}

        ${c$(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(Y(G.reading||""))}</span>
                <small>${i(v({ru:G.ru,en:G.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(J)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(G=>dg(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>X().studiedKanji[G.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${g(t.id)}" ${u||!$?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n4/${g(k.id)}" data-action="n4-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function l$(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Le().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function c$(e){const t=Le(),n=(e.grammarFocus||[]).map(s=>Ul(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n4-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n4-section-grid">
          ${n.map(s=>`
            <article class="n4-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(v(s.title))}</h3>
              <p>${i(v(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(v({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(Q(s))}">${i(X().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function dg(e){const t=Le(),n=Jl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Kn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(yg(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${ug(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${ug(e,n)}
      </article>
    `}function ug(e,t){if(!t)return"";const n=Le(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function d$(e){const t=Le(),n=X().activeReviewMode||"due",s=E$(n);return`
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
          ${(a.n4Exercises?.reviewModes||[]).map(r=>`
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${g(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>u$(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function u$(e,t){const n=Le(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Jt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(bt(e)[0]?.word||e.hiragana||"")} · ${i(bt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function p$(e){const t=Le(),n=Ve();return`
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
          ${n.map((s,r)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${r+1}/170</span><span class="pill">${i(B(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(bt(s)[0]?.word||"")} · ${i(bt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function g$(e){const t=Le();return`
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
          ${E(t.completedGrammar,`${Object.keys(X().completedGrammar||{}).length}/${a.n4Grammar.length}`,t.grammar,M(Object.keys(X().completedGrammar||{}).length,a.n4Grammar.length))}
          ${E(t.questions,a.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${a.n4Grammar.map(n=>{const s=X().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(v(n.title))}</h3>
                <p>${i(v(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Y(r.reading||""))}</span><small>${i(v({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(v(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(ze(n).length?ze(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function m$(e){const t=Le(),n=xa("N4","n4_reading_page"),s=vr("N4");return(n||s)&&A(),`
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
          ${a.n4Reading.map(r=>pg(r,"reading")).join("")}
        </div>
      </section>
    `}function f$(e){const t=Le();return`
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
          ${a.n4Listening.map(n=>pg(n,"listening")).join("")}
        </div>
      </section>
    `}function pg(e,t){const n=Le(),s=t==="reading"?X().completedReading[e.id]:X().completedListening[e.id],r=t==="reading"?X().readingAnswers:X().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],f=Array.isArray(l.options)?l.options:[];return`
            <div class="n4-question-block">
              <h3>${i(v(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function h$(e){const t=Le(),n=a.n4FinalTest||{},s=wg(),r=X().finalTest,o=an(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Final</p>
            <h1>${i(v(n.title||{}))}</h1>
            <p>${i(v(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,M(l,s.length))}
          ${E(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${E(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?M((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n4-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Ut("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>v$(f,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${a.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Ut("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function v$(e,t){const n=X().finalTest.answers?.[e.id],s=!!X().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Le().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Le(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function zl(){a.progress.n4Course=Su(tl(),a.progress.n4Course||{});const e=it();!Fn(a.progress.n4Course.currentLessonId)&&e[0]&&(a.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n4Course.completedLessons[s.id]);return!a.progress.n4Course.currentLessonId&&n&&(a.progress.n4Course.currentLessonId=n.id),a.progress.n4Course}function X(){return zl()}function it(){return a.n4Textbook?.items||[]}function Fn(e){const t=String(e||"");return t&&it().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function b$(){return Fn(X().currentLessonId)||it().find(e=>!X().completedLessons[e.id])||it()[0]||null}function sr(e){return(e?.kanji||[]).map(t=>gg(t)).filter(Boolean)}function Ve(){const e=new Set;return(a.n4KanjiCatalog||[]).map(t=>gg(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function gg(e){const t=String(e||""),n=a.n4KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N4")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ci(s,n):s||(n?ci({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Ul(e){const t=String(e||"");return a.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function bt(e){return Qr(e,e.examples)}function w$(){const e=Ve(),t=X(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:En("N4"),completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function mg(e){return Zs("N4",e)}function k$(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ta(e){const t=sr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n4Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n4Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n4Meta?.rewards?.exerciseXp||9,rewardMoon:a.n4Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:ot({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ot({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=bt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ot({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>bt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ot({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const m=t[3]||t[0],S=bt(m)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:_a(S),answer:S.word||m.kanji,answerLabel:S.word||m.kanji,kanji:m.kanji,cardId:m.id,options:ot({value:S.word||m.kanji,label:S.word||m.kanji},t.flatMap(k=>bt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const x=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(x)}`:`Type the kanji for: ${K(x)}`,answer:x.kanji,answerLabel:x.kanji,kanji:x.kanji,cardId:x.id,options:[],...o("active-recall")});const $=Ul(e.grammarFocus?.[0]);$&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v($.question||$.explanation),answer:Q($),answerLabel:Q($),kanji:t[0].kanji,cardId:t[0].id,grammarId:$.id,options:ot({value:Q($),label:Q($)},ze($).filter(k=>k!==Q($)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:v({ru:L.ru,en:L.en}),answerLabel:v({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ot({value:v({ru:L.ru,en:L.en}),label:v({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,a.n4Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N4",lessonId:e.id}))}function ot(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),Ve().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function fg(e){for(const t of it()){const n=ta(t).find(s=>s.id===e);if(n)return n}return null}function Jl(e){return Vr("N4",X(),e)}function y$(e){const t=fg(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;hg(t,s,r)}function $$(e){const t=fg(e);if(!t)return;const n=document.getElementById(yg(t.id)),s=n?String(n.value||"").trim():"";hg(t,s,s===t.answer)}function hg(e,t,n){const s=X();Yr("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||a.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>rr(e.kanji,e.cardId),markDifficult:()=>na(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function vg(e,t,n="review"){const s=ae(e)||Ve().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=re(B(s.id)),d=be(c,o,l);a.progress.cards[s.id]=d,Dt(c,d,l),ve(),rr(s.kanji,s.id),X().srsKanji[s.kanji]=new Date().toISOString(),r?(na(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`)):Ke(t)?(na(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n4Meta?.rewards?.knowXp||7:a.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`)),It(),A(),Lt("N4 SRS post-render effects",()=>{F(Ke(t)?"answer_wrong":"answer_correct"),V()})}function j$(e){const t=ae(e)||Ve().find(s=>String(s.id)===String(e));if(!t)return;const n=X();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},rr(t.kanji,t.id),H(9,1,`n4_writing:${t.id}`)),V(),A(),R()}function S$(e){const t=Fn(e);if(!t)return;const n=X(),s=`n4:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){R();return}const r=sr(t);if(r.filter(m=>n.studiedKanji[m.kanji]).length<t.kanji.length){const m=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof U=="function"&&U(m);return}const l=ta(t);if(!(l.length>0&&l.every(m=>Jl(m.id)?.correct))){const m=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(m);return}we.add(s),sr(t).forEach(m=>{rr(m.kanji,m.id),n.srsKanji[m.kanji]=n.srsKanji[m.kanji]||new Date().toISOString();const S=B(m.id);S.state==="New"&&(a.progress.cards[m.id]=be(re(S),"good"))}),(t.grammarFocus||[]).map(m=>Ul(m)).filter(Boolean).forEach(m=>{n.completedGrammar[m.id]=n.completedGrammar[m.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=it().find(m=>m.order===t.order+1)?.id||t.id;const d=Mn(),u=d.sessions[We("N4",t.id)];if(u){const m=new Date().toISOString();u.phase="done",u.completedAt=m,u.updatedAt=m,u.currentIndex=r.length,d.activeSessionKey=We("N4",t.id),d.lastUpdatedAt=m}X(),er("N4");const f=a.n4Meta?.rewards?.lessonCompleteXp||65,h=a.n4Meta?.rewards?.lessonCompleteMoon||8;H(f,h,`n4_lesson:${t.id}`),yr("N4",t.id),mt({title:`${Le().lessonComplete}: ${v(t.title)}`,message:Le().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),V(),A(),R()}function rr(e,t=null){if(!e)return;const n=X();Gs(n,e)}function na(e,t=null,n=!0){if(e&&(X().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=be(re(s),"again"))}}function C$(e,t=""){const n=a.n4Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,l=X();l.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(a.n4Meta?.rewards?.grammarXp||10,a.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ve(),V(),A(),R()}function N$(e,t="0",n=""){bg("reading",e,t,n)}function x$(e,t="0",n=""){bg("listening",e,t,n)}function bg(e,t,n="0",s=""){const o=(e==="reading"?a.n4Reading:a.n4Listening).find(S=>S.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,f=X(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,m=e==="reading"?f.completedReading:f.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!m[o.id]){m[o.id]=new Date().toISOString();const S=e==="reading"?a.n4Meta?.rewards?.readingXp||35:a.n4Meta?.rewards?.listeningXp||30,x=e==="reading"?a.n4Meta?.rewards?.readingMoon||4:a.n4Meta?.rewards?.listeningMoon||3;H(S,x,`n4_${e}:${o.id}`),a.progress.totalCorrect+=1,F("answer_correct")}else d||(a.progress.totalWrong+=1,F("answer_wrong"));ve(),V(),A(),R()}function L$(e){const t=Fn(e);t&&(on("textbook-lesson",{level:"N4",lessonId:t.id}),X().currentLessonId=t.id,St("N4",t.id,"n4_lesson_open"),Vt("N4",t,"n4_lesson_open"),Dn(t.id))}function A$(){Dn("")}function I$(e=null){e&&(X().activeReviewMode=e),Dn("review")}function T$(){Dn("kanji")}function R$(){Dn("grammar")}function _$(){Dn("reading")}function P$(){Dn("listening")}function M$(){Dn("final-test")}function Dn(e){a.route="textbooks",a.activeTextbookLevel="N4",a.activeTextbookSubroute=e||null,X().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";vt(t),V(),A(),de(),Tt()}function E$(e="due"){const t=Date.now(),n=X(),s=Ve();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function wg(){const e=Ve();if(!e.length)return[];const t=a.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=it().find(d=>d.kanji.includes(o.kanji))||it()[0];s.push(K$(l,o,c,r))}return s.filter(Boolean)}function K$(e,t,n,s){const o=bt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ot({value:t.id,label:K(t)},Ve().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ot({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ve().flatMap(c=>bt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=v({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:ot({value:c,label:c},it().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Zn(o),answer:c,answerLabel:c,options:ot({value:c,label:c},Ve().flatMap(d=>bt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n4Grammar[s%Math.max(a.n4Grammar.length,1)];if(c)return{id:`n4-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${v(c.question||c.explanation)}`,answer:Q(c),answerLabel:Q(c),options:ot({value:Q(c),label:Q(c)},ze(c).filter(d=>d!==Q(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n4Reading[s%Math.max(a.n4Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n4-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||v(c.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ot({value:t.kanji,label:t.kanji},Ve().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function F$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(X().finalTest.answers[t]=n,A(),R())}function kg(e=!1){if(a.finalTestBusy)return;const t=X().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){R();return}a.finalTestBusy=!0;try{const n=wg(),s=a.n4FinalTest||{},r=Le(),o=an(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${ur("n4",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=N,A();return}let u=0;const f=[],h=[];n.forEach(N=>{const J=String(t.answers?.[N.id]||"").trim();if(J===N.answer){if(u+=1,N.kanji&&rr(N.kanji,N.cardId),N.grammarId){const G=X();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else J||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:J}),N.kanji&&na(N.kanji,N.cardId)});const m=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,x=!!t.passed,$=Math.max(0,f.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=m,t.passed=m>=l,t.correctAnswers=u,t.incorrectAnswers=$,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=m,t.bestScore=Math.max(Number(t.bestScore||0),m),t.passedAt=t.passed?x&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||180),J=Number(s?.rewards?.completeMoon||35);L+=N,k+=J,H(N,J,"n4_final_complete")}if(t.passed&&!x){const N=Number(s?.rewards?.passXp||90),J=Number(s?.rewards?.passMoon||15);L+=N,k+=J,H(N,J,"n4_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Aa("N4",t),X(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N4",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:m,correct:u,incorrect:$,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},V(),A()}catch(n){console.error(n),U(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,R()}}function D$(){X().finalTest=tl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),R()}function yg(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function B$(e){a.activeTextbookLevel="N3",a.activeJlptLesson="N3";const t=Hl();t.opened||(t.opened=!0,V({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Z$();if(n==="review")return q$();if(n==="kanji")return X$();if(n==="grammar")return Q$();if(n==="reading")return V$();if(n==="listening")return Y$();const s=Bn(n);return s?(q().currentLessonId=s.id,St("N3",s.id,"n3_lesson_page"),Vt("N3",s,"n3_lesson_page"),U$(e,s)):O$(e)}function O$(e){const t=nj(),n=je(),s=lt(),r=tj(),o=a.n3Meta||{},l=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
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
              <a class="btn primary" href="#jlpt/n3/${g(r?.id||"n3-lesson-1")}" data-action="n3-open-lesson" data-id="${g(r?.id||"n3-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n3-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n3-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n3-grammar">${i(n.grammarN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-reading">${i(n.readingN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-listening">${i(n.listeningN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${bn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,M(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,M(t.completedLessons,s.length))}
          ${E(n.completedGrammar,`${t.completedGrammar}/${a.n3Meta?.grammarCount||a.n3Grammar.length}`,n.grammar,M(t.completedGrammar,a.n3Meta?.grammarCount||a.n3Grammar.length))}
          ${E(n.completedReading,`${t.completedReading}/${a.n3Meta?.readingCount||a.n3Reading.length}`,n.readingN3,M(t.completedReading,a.n3Meta?.readingCount||a.n3Reading.length))}
          ${E(n.completedListening,`${t.completedListening}/${a.n3Meta?.listeningCount||a.n3Listening.length}`,n.listeningN3,M(t.completedListening,a.n3Meta?.listeningCount||a.n3Listening.length))}
          ${E(n.reviews,t.reviews,n.srs,M(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>z$(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n3Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(v(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${tr("N3")}
      </section>
    `}function z$(e){const t=Ng(e.id),n=je();let s=e.kanji.filter(r=>q().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(sj(t))}</small>
      </a>
    `}function U$(e,t){const n=je(),s=ar(t),r=sa(t),o=Ng(t.id),l=ys("N3",t,s);let c=o==="completed";const d=`n3:${t.id}`;we.has(d)&&(c=!0);const u=c,f=r.filter(z=>Wl(z.id)?.correct).length,h=r.length>0&&f===r.length,m=s.filter(z=>q().studiedKanji[z.kanji]).length,S=t.kanji.length,x=m>=S,$=!c&&h&&x,L=t.kanji.filter(z=>q().difficultKanji[z]).join(" · "),k=lt().find(z=>z.order===t.order+1),N=$g(t),J=N?!!q().completedReading[N.id]:!1,G=Pt("N3",t.id,"player"),Ms=Pt("N3",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · ${i(n.lesson)} ${t.order}/37</p>
            <h1>${i(v(t.title))}</h1>
            <p>${i(v(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(n.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(v(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(z=>`<span class="pill">${i(z)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${f}/${r.length}`,n.correct,M(f,r.length))}
          </div>
        </article>

        ${Wr("N3",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:z=>wt(z),sentence:z=>G$(z,t)})}

        ${H$(t)}

        ${J$(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(z=>`
              <article>
                <strong>${i(z.jp)}</strong>
                <span>${i(Y(z.reading||""))}</span>
                <small>${i(v({ru:z.ru,en:z.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Ms)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(z=>jg(z)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(z=>q().studiedKanji[z.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(J?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${g(t.id)}" ${u||!$?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n3/${g(k.id)}" data-action="n3-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function $g(e){return e?.miniReadingId&&a.n3Reading.find(t=>t.id===e.miniReadingId)||null}function J$(e){const t=je(),n=$g(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Gl(n,"reading")}
      </section>
    `:""}function G$(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(je().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function H$(e){const t=je(),n=(e.grammarFocus||[]).map(s=>ql(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n3-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n3-section-grid">
          ${n.map(s=>`
            <article class="n3-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(v(s.title))}</h3>
              <p>${i(v(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(v({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(Q(s))}">${i(q().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function jg(e){const t=je(),n=Wl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Kn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(_g(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Sg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Sg(e,n)}
      </article>
    `}function Sg(e,t){if(!t)return"";const n=je(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function q$(e){const t=je(),n=q().activeReviewMode||"due",s=wj(n);return`
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
          ${(a.n3Exercises?.reviewModes||[]).map(r=>`
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${g(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>W$(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function W$(e,t){const n=je(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Jt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(wt(e)[0]?.word||e.hiragana||"")} · ${i(wt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function X$(e){const t=je(),n=Ye();return`
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
          ${n.map((s,r)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${r+1}/370</span><span class="pill">${i(B(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(wt(s)[0]?.word||"")} · ${i(wt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Q$(e){const t=je();return`
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
          ${E(t.completedGrammar,`${Object.keys(q().completedGrammar||{}).length}/${a.n3Grammar.length}`,t.grammar,M(Object.keys(q().completedGrammar||{}).length,a.n3Grammar.length))}
          ${E(t.questions,a.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${a.n3Grammar.map(n=>{const s=q().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(v(n.title))}</h3>
                <p>${i(v(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Y(r.reading||""))}</span><small>${i(v({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(v(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(ze(n).length?ze(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function V$(e){const t=je(),n=xa("N3","n3_reading_page"),s=vr("N3");return(n||s)&&A(),`
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
          ${a.n3Reading.map(r=>Gl(r,"reading")).join("")}
        </div>
      </section>
    `}function Y$(e){const t=je();return`
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
          ${a.n3Listening.map(n=>Gl(n,"listening")).join("")}
        </div>
      </section>
    `}function Gl(e,t){const n=je(),s=t==="reading"?q().completedReading[e.id]:q().completedListening[e.id],r=t==="reading"?q().readingAnswers:q().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],f=Array.isArray(l.options)?l.options:[];return`
            <div class="n3-question-block">
              <h3>${i(v(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Z$(e){const t=je(),n=a.n3FinalTest||{},s=Tg(),r=q().finalTest,o=an(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Final</p>
            <h1>${i(v(n.title||{}))}</h1>
            <p>${i(v(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,M(l,s.length))}
          ${E(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${E(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?M((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n3-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Ut("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>ej(f,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Ut("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function ej(e,t){const n=q().finalTest.answers?.[e.id],s=!!q().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(je().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function je(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Hl(){a.progress.n3Course=Cu(nl(),a.progress.n3Course||{});const e=lt();!Bn(a.progress.n3Course.currentLessonId)&&e[0]&&(a.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n3Course.completedLessons[s.id]);return!a.progress.n3Course.currentLessonId&&n&&(a.progress.n3Course.currentLessonId=n.id),a.progress.n3Course}function q(){return Hl()}function lt(){return a.n3Textbook?.items||[]}function Bn(e){const t=String(e||"");return t&&lt().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function tj(){return Bn(q().currentLessonId)||lt().find(e=>!q().completedLessons[e.id])||lt()[0]||null}function ar(e){return(e?.kanji||[]).map(t=>Cg(t)).filter(Boolean)}function Ye(){const e=new Set;return(a.n3KanjiCatalog||[]).map(t=>Cg(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Cg(e){const t=String(e||""),n=a.n3KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N3")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ui(s,n):s||(n?ui({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function ql(e){const t=String(e||"");return a.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function wt(e){return Qr(e,e.examples)}function nj(){const e=Ye(),t=q(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:En("N3"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Ng(e){return Zs("N3",e)}function sj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function sa(e){const t=ar(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n3Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n3Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n3Meta?.rewards?.exerciseXp||10,rewardMoon:a.n3Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:ct({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ct({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=wt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ct({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>wt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ct({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const m=t[3]||t[0],S=wt(m)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:_a(S),answer:S.word||m.kanji,answerLabel:S.word||m.kanji,kanji:m.kanji,cardId:m.id,options:ct({value:S.word||m.kanji,label:S.word||m.kanji},t.flatMap(k=>wt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const x=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(x)}`:`Type the kanji for: ${K(x)}`,answer:x.kanji,answerLabel:x.kanji,kanji:x.kanji,cardId:x.id,options:[],...o("active-recall")});const $=ql(e.grammarFocus?.[0]);$&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v($.question||$.explanation),answer:Q($),answerLabel:Q($),kanji:t[0].kanji,cardId:t[0].id,grammarId:$.id,options:ct({value:Q($),label:Q($)},ze($).filter(k=>k!==Q($)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:v({ru:L.ru,en:L.en}),answerLabel:v({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ct({value:v({ru:L.ru,en:L.en}),label:v({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,a.n3Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N3",lessonId:e.id}))}function ct(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),Ye().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function xg(e){for(const t of lt()){const n=sa(t).find(s=>s.id===e);if(n)return n}return null}function Wl(e){return Vr("N3",q(),e)}function rj(e){const t=xg(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Lg(t,s,r)}function aj(e){const t=xg(e);if(!t)return;const n=document.getElementById(_g(t.id)),s=n?String(n.value||"").trim():"";Lg(t,s,s===t.answer)}function Lg(e,t,n){const s=q();Yr("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||a.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>ir(e.kanji,e.cardId),markDifficult:()=>ra(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Ag(e,t,n="review"){const s=ae(e)||Ye().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=re(B(s.id)),d=be(c,o,l);a.progress.cards[s.id]=d,Dt(c,d,l),ve(),ir(s.kanji,s.id),q().srsKanji[s.kanji]=new Date().toISOString(),r?(ra(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`)):Ke(t)?(ra(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n3Meta?.rewards?.knowXp||8:a.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`)),It(),A(),Lt("N3 SRS post-render effects",()=>{F(Ke(t)?"answer_wrong":"answer_correct"),V()})}function ij(e){const t=ae(e)||Ye().find(s=>String(s.id)===String(e));if(!t)return;const n=q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},ir(t.kanji,t.id),H(9,1,`n3_writing:${t.id}`)),V(),A(),R()}function oj(e){const t=Bn(e);if(!t)return;const n=q(),s=`n3:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){R();return}const r=ar(t);if(r.filter(m=>n.studiedKanji[m.kanji]).length<t.kanji.length){const m=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof U=="function"&&U(m);return}const l=sa(t);if(!(l.length>0&&l.every(m=>Wl(m.id)?.correct))){const m=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(m);return}we.add(s),ar(t).forEach(m=>{ir(m.kanji,m.id),n.srsKanji[m.kanji]=n.srsKanji[m.kanji]||new Date().toISOString();const S=B(m.id);S.state==="New"&&(a.progress.cards[m.id]=be(re(S),"good"))}),(t.grammarFocus||[]).map(m=>ql(m)).filter(Boolean).forEach(m=>{n.completedGrammar[m.id]=n.completedGrammar[m.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=lt().find(m=>m.order===t.order+1)?.id||t.id;const d=Mn(),u=d.sessions[We("N3",t.id)];if(u){const m=new Date().toISOString();u.phase="done",u.completedAt=m,u.updatedAt=m,u.currentIndex=r.length,d.activeSessionKey=We("N3",t.id),d.lastUpdatedAt=m}q(),er("N3");const f=a.n3Meta?.rewards?.lessonCompleteXp||75,h=a.n3Meta?.rewards?.lessonCompleteMoon||9;H(f,h,`n3_lesson:${t.id}`),yr("N3",t.id),mt({title:`${je().lessonComplete}: ${v(t.title)}`,message:je().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),V(),A(),R()}function ir(e,t=null){if(!e)return;const n=q();Gs(n,e)}function ra(e,t=null,n=!0){if(e&&(q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=be(re(s),"again"))}}function lj(e,t=""){const n=a.n3Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,l=q();l.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(a.n3Meta?.rewards?.grammarXp||11,a.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ve(),V(),A(),R()}function cj(e,t="0",n=""){Ig("reading",e,t,n)}function dj(e,t="0",n=""){Ig("listening",e,t,n)}function Ig(e,t,n="0",s=""){const o=(e==="reading"?a.n3Reading:a.n3Listening).find($=>$.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,f=q(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,m=e==="reading"?f.completedReading:f.completedListening,S=!!m[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const x=(o.questions||[]).every(($,L)=>h[`${o.id}:${L}`]?.correct);if(d?(a.progress.totalCorrect+=1,F("answer_correct")):(a.progress.totalWrong+=1,F("answer_wrong")),x&&!S){m[o.id]=new Date().toISOString();const $=e==="reading"?a.n3Meta?.rewards?.readingXp||38:a.n3Meta?.rewards?.listeningXp||34,L=e==="reading"?a.n3Meta?.rewards?.readingMoon||4:a.n3Meta?.rewards?.listeningMoon||4;H($,L,`n3_${e}:${o.id}`)}ve(),V(),A(),R()}function uj(e){const t=Bn(e);t&&(on("textbook-lesson",{level:"N3",lessonId:t.id}),q().currentLessonId=t.id,St("N3",t.id,"n3_lesson_open"),Vt("N3",t,"n3_lesson_open"),On(t.id))}function pj(){On("")}function gj(e=null){e&&(q().activeReviewMode=e),On("review")}function mj(){On("kanji")}function fj(){On("grammar")}function hj(){On("reading")}function vj(){On("listening")}function bj(){On("final-test")}function On(e){a.route="textbooks",a.activeTextbookLevel="N3",a.activeTextbookSubroute=e||null,q().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";vt(t),V(),A(),de(),Tt()}function wj(e="due"){const t=Date.now(),n=q(),s=Ye();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Tg(){const e=Ye();if(!e.length)return[];const t=a.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=lt().find(d=>d.kanji.includes(o.kanji))||lt()[0];s.push(kj(l,o,c,r))}return s.filter(Boolean)}function kj(e,t,n,s){const o=wt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ct({value:t.id,label:K(t)},Ye().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ct({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ye().flatMap(c=>wt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=v({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:ct({value:c,label:c},lt().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Zn(o),answer:c,answerLabel:c,options:ct({value:c,label:c},Ye().flatMap(d=>wt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n3Grammar[s%Math.max(a.n3Grammar.length,1)];if(c)return{id:`n3-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${v(c.question||c.explanation)}`,answer:Q(c),answerLabel:Q(c),options:ct({value:Q(c),label:Q(c)},ze(c).filter(d=>d!==Q(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n3Reading[s%Math.max(a.n3Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n3-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||v(c.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ct({value:t.kanji,label:t.kanji},Ye().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function yj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(q().finalTest.answers[t]=n,A(),R())}function Rg(e=!1){if(a.finalTestBusy)return;const t=q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){R();return}a.finalTestBusy=!0;try{const n=Tg(),s=a.n3FinalTest||{},r=je(),o=an(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${ur("n3",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=N,A();return}let u=0;const f=[],h=[];n.forEach(N=>{const J=String(t.answers?.[N.id]||"").trim();if(J===N.answer){if(u+=1,N.kanji&&ir(N.kanji,N.cardId),N.grammarId){const G=q();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else J||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:J}),N.kanji&&ra(N.kanji,N.cardId)});const m=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,x=!!t.passed,$=Math.max(0,f.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=m,t.passed=m>=l,t.correctAnswers=u,t.incorrectAnswers=$,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=m,t.bestScore=Math.max(Number(t.bestScore||0),m),t.passedAt=t.passed?x&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),J=Number(s?.rewards?.completeMoon||40);L+=N,k+=J,H(N,J,"n3_final_complete")}if(t.passed&&!x){const N=Number(s?.rewards?.passXp||110),J=Number(s?.rewards?.passMoon||18);L+=N,k+=J,H(N,J,"n3_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Aa("N3",t),q(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N3",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:m,correct:u,incorrect:$,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},V(),A()}catch(n){console.error(n),U(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,R()}}function $j(){q().finalTest=nl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),R()}function _g(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function jj(e){a.activeTextbookLevel="N2",a.activeJlptLesson="N2";const t=Ql();t.opened||(t.opened=!0,V({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Ej();if(n==="review")return Ij();if(n==="kanji")return Rj();if(n==="grammar")return _j();if(n==="reading")return Pj();if(n==="listening")return Mj();const s=zn(n);return s?(W().currentLessonId=s.id,St("N2",s.id,"n2_lesson_page"),Vt("N2",s,"n2_lesson_page"),Nj(e,s)):Sj(e)}function Sj(e){const t=Dj(),n=Se(),s=dt(),r=Fj(),o=a.n2Meta||{},l=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${g(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N2_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n2-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(o.kanjiCount||380)} ${i(n.kanji)} · ${i(o.grammarCount||a.n2Grammar.length||120)} ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n2/${g(r?.id||"n2-lesson-1")}" data-action="n2-open-lesson" data-id="${g(r?.id||"n2-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n2-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n2-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n2-grammar">${i(n.grammarN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-reading">${i(n.readingN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-listening">${i(n.listeningN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${bn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,M(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,M(t.completedLessons,s.length))}
          ${E(n.completedGrammar,`${t.completedGrammar}/${a.n2Meta?.grammarCount||a.n2Grammar.length}`,n.grammar,M(t.completedGrammar,a.n2Meta?.grammarCount||a.n2Grammar.length))}
          ${E(n.completedReading,`${t.completedReading}/${a.n2Meta?.readingCount||a.n2Reading.length}`,n.readingN2,M(t.completedReading,a.n2Meta?.readingCount||a.n2Reading.length))}
          ${E(n.completedListening,`${t.completedListening}/${a.n2Meta?.listeningCount||a.n2Listening.length}`,n.listeningN2,M(t.completedListening,a.n2Meta?.listeningCount||a.n2Listening.length))}
          ${E(n.reviews,t.reviews,n.srs,M(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>Cj(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n2Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(v(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${tr("N2")}
      </section>
    `}function Cj(e){const t=Fg(e.id),n=Se();let s=e.kanji.filter(r=>W().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Bj(t))}</small>
      </a>
    `}function Nj(e,t){const n=Se(),s=or(t),r=aa(t),o=Fg(t.id),l=ys("N2",t,s);let c=o==="completed";const d=`n2:${t.id}`;we.has(d)&&(c=!0);const u=c,f=r.filter(z=>Yl(z.id)?.correct).length,h=r.length>0&&f===r.length,m=s.filter(z=>W().studiedKanji[z.kanji]).length,S=t.kanji.length,x=m>=S,$=!c&&h&&x,L=t.kanji.filter(z=>W().difficultKanji[z]).join(" · "),k=dt().find(z=>z.order===t.order+1),N=Pg(t),J=N?!!W().completedReading[N.id]:!1,G=Pt("N2",t.id,"player"),Ms=Pt("N2",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · ${i(n.lesson)} ${t.order}/38</p>
            <h1>${i(v(t.title))}</h1>
            <p>${i(v(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(n.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(v(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(z=>`<span class="pill">${i(z)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${f}/${r.length}`,n.correct,M(f,r.length))}
          </div>
        </article>

        ${Wr("N2",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:z=>kt(z),sentence:z=>Lj(z,t)})}

        ${Aj(t)}

        ${xj(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(z=>`
              <article>
                <strong>${i(z.jp)}</strong>
                <span>${i(Y(z.reading||""))}</span>
                <small>${i(v({ru:z.ru,en:z.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Ms)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(z=>Mg(z)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(z=>W().studiedKanji[z.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(J?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${g(t.id)}" ${u||!$?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n2/${g(k.id)}" data-action="n2-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Pg(e){return e?.miniReadingId&&a.n2Reading.find(t=>t.id===e.miniReadingId)||null}function xj(e){const t=Se(),n=Pg(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Xl(n,"reading")}
      </section>
    `:""}function Lj(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Se().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Aj(e){const t=Se(),n=(e.grammarFocus||[]).map(s=>Vl(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n2-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n2-section-grid">
          ${n.map(s=>`
            <article class="n2-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(v(s.title))}</h3>
              <p>${i(v(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(v({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(Q(s))}">${i(W().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Mg(e){const t=Se(),n=Yl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Kn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Gg(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Eg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Eg(e,n)}
      </article>
    `}function Eg(e,t){if(!t)return"";const n=Se(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Ij(e){const t=Se(),n=W().activeReviewMode||"due",s=nS(n);return`
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
          ${(a.n2Exercises?.reviewModes||[]).map(r=>`
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${g(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>Tj(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Tj(e,t){const n=Se(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Jt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(kt(e)[0]?.word||e.hiragana||"")} · ${i(kt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Rj(e){const t=Se(),n=Ze();return`
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
          ${n.map((s,r)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${r+1}/380</span><span class="pill">${i(B(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(kt(s)[0]?.word||"")} · ${i(kt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function _j(e){const t=Se();return`
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
          ${E(t.completedGrammar,`${Object.keys(W().completedGrammar||{}).length}/${a.n2Grammar.length}`,t.grammar,M(Object.keys(W().completedGrammar||{}).length,a.n2Grammar.length))}
          ${E(t.questions,a.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${a.n2Grammar.map(n=>{const s=W().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(v(n.title))}</h3>
                <p>${i(v(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Y(r.reading||""))}</span><small>${i(v({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(v(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(ze(n).length?ze(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Pj(e){const t=Se(),n=xa("N2","n2_reading_page"),s=vr("N2");return(n||s)&&A(),`
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
          ${a.n2Reading.map(r=>Xl(r,"reading")).join("")}
        </div>
      </section>
    `}function Mj(e){const t=Se();return`
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
          ${a.n2Listening.map(n=>Xl(n,"listening")).join("")}
        </div>
      </section>
    `}function Xl(e,t){const n=Se(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],r=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],f=Array.isArray(l.options)?l.options:[];return`
            <div class="n2-question-block">
              <h3>${i(v(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Ej(e){const t=Se(),n=a.n2FinalTest||{},s=Ug(),r=W().finalTest,o=an(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Final</p>
            <h1>${i(v(n.title||{}))}</h1>
            <p>${i(v(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,M(l,s.length))}
          ${E(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${E(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?M((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n2-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Ut("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>Kj(f,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Ut("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Kj(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Se().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Se(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Ql(){a.progress.n2Course=Nu(sl(),a.progress.n2Course||{});const e=dt();!zn(a.progress.n2Course.currentLessonId)&&e[0]&&(a.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n2Course.completedLessons[s.id]);return!a.progress.n2Course.currentLessonId&&n&&(a.progress.n2Course.currentLessonId=n.id),a.progress.n2Course}function W(){return Ql()}function dt(){return a.n2Textbook?.items||[]}function zn(e){const t=String(e||"");return t&&dt().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function Fj(){return zn(W().currentLessonId)||dt().find(e=>!W().completedLessons[e.id])||dt()[0]||null}function or(e){return(e?.kanji||[]).map(t=>Kg(t)).filter(Boolean)}function Ze(){const e=new Set;return(a.n2KanjiCatalog||[]).map(t=>Kg(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Kg(e){const t=String(e||""),n=a.n2KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N2")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?gi(s,n):s||(n?gi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Vl(e){const t=String(e||"");return a.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function kt(e){return Qr(e,e.examples)}function Dj(){const e=Ze(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:En("N2"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Fg(e){return Zs("N2",e)}function Bj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function aa(e){const t=or(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n2Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n2Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n2Meta?.rewards?.exerciseXp||11,rewardMoon:a.n2Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:ut({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ut({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=kt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ut({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>kt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ut({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const m=t[3]||t[0],S=kt(m)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:_a(S),answer:S.word||m.kanji,answerLabel:S.word||m.kanji,kanji:m.kanji,cardId:m.id,options:ut({value:S.word||m.kanji,label:S.word||m.kanji},t.flatMap(k=>kt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const x=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(x)}`:`Type the kanji for: ${K(x)}`,answer:x.kanji,answerLabel:x.kanji,kanji:x.kanji,cardId:x.id,options:[],...o("active-recall")});const $=Vl(e.grammarFocus?.[0]);$&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v($.question||$.explanation),answer:Q($),answerLabel:Q($),kanji:t[0].kanji,cardId:t[0].id,grammarId:$.id,options:ut({value:Q($),label:Q($)},ze($).filter(k=>k!==Q($)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:v({ru:L.ru,en:L.en}),answerLabel:v({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ut({value:v({ru:L.ru,en:L.en}),label:v({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,a.n2Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N2",lessonId:e.id}))}function ut(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),Ze().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function Dg(e){for(const t of dt()){const n=aa(t).find(s=>s.id===e);if(n)return n}return null}function Yl(e){return Vr("N2",W(),e)}function Oj(e){const t=Dg(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Bg(t,s,r)}function zj(e){const t=Dg(e);if(!t)return;const n=document.getElementById(Gg(t.id)),s=n?String(n.value||"").trim():"";Bg(t,s,s===t.answer)}function Bg(e,t,n){const s=W();Yr("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>lr(e.kanji,e.cardId),markDifficult:()=>ia(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Og(e,t,n="review"){const s=ae(e)||Ze().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=re(B(s.id)),d=be(c,o,l);a.progress.cards[s.id]=d,Dt(c,d,l),ve(),lr(s.kanji,s.id),W().srsKanji[s.kanji]=new Date().toISOString(),r?(ia(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`)):Ke(t)?(ia(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n2Meta?.rewards?.knowXp||9:a.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`)),It(),A(),Lt("N2 SRS post-render effects",()=>{F(Ke(t)?"answer_wrong":"answer_correct"),V()})}function Uj(e){const t=ae(e)||Ze().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},lr(t.kanji,t.id),H(9,1,`n2_writing:${t.id}`)),V(),A(),R()}function Jj(e){const t=zn(e);if(!t)return;const n=W(),s=`n2:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){R();return}const r=or(t);if(r.filter(m=>n.studiedKanji[m.kanji]).length<t.kanji.length){const m=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof U=="function"&&U(m);return}const l=aa(t);if(!(l.length>0&&l.every(m=>Yl(m.id)?.correct))){const m=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(m);return}we.add(s),or(t).forEach(m=>{lr(m.kanji,m.id),n.srsKanji[m.kanji]=n.srsKanji[m.kanji]||new Date().toISOString();const S=B(m.id);S.state==="New"&&(a.progress.cards[m.id]=be(re(S),"good"))}),(t.grammarFocus||[]).map(m=>Vl(m)).filter(Boolean).forEach(m=>{n.completedGrammar[m.id]=n.completedGrammar[m.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=dt().find(m=>m.order===t.order+1)?.id||t.id;const d=Mn(),u=d.sessions[We("N2",t.id)];if(u){const m=new Date().toISOString();u.phase="done",u.completedAt=m,u.updatedAt=m,u.currentIndex=r.length,d.activeSessionKey=We("N2",t.id),d.lastUpdatedAt=m}W(),er("N2");const f=a.n2Meta?.rewards?.lessonCompleteXp||85,h=a.n2Meta?.rewards?.lessonCompleteMoon||10;H(f,h,`n2_lesson:${t.id}`),yr("N2",t.id),mt({title:`${Se().lessonComplete}: ${v(t.title)}`,message:Se().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),V(),A(),R()}function lr(e,t=null){if(!e)return;const n=W();Gs(n,e)}function ia(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=be(re(s),"again"))}}function Gj(e,t=""){const n=a.n2Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,l=W();l.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(a.n2Meta?.rewards?.grammarXp||12,a.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ve(),V(),A(),R()}function Hj(e,t="0",n=""){zg("reading",e,t,n)}function qj(e,t="0",n=""){zg("listening",e,t,n)}function zg(e,t,n="0",s=""){const o=(e==="reading"?a.n2Reading:a.n2Listening).find($=>$.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,f=W(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,m=e==="reading"?f.completedReading:f.completedListening,S=!!m[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const x=(o.questions||[]).every(($,L)=>h[`${o.id}:${L}`]?.correct);if(d?(a.progress.totalCorrect+=1,F("answer_correct")):(a.progress.totalWrong+=1,F("answer_wrong")),x&&!S){m[o.id]=new Date().toISOString();const $=e==="reading"?a.n2Meta?.rewards?.readingXp||42:a.n2Meta?.rewards?.listeningXp||38,L=e==="reading"?a.n2Meta?.rewards?.readingMoon||4:a.n2Meta?.rewards?.listeningMoon||4;H($,L,`n2_${e}:${o.id}`)}ve(),V(),A(),R()}function Wj(e){const t=zn(e);t&&(on("textbook-lesson",{level:"N2",lessonId:t.id}),W().currentLessonId=t.id,St("N2",t.id,"n2_lesson_open"),Vt("N2",t,"n2_lesson_open"),Un(t.id))}function Xj(){Un("")}function Qj(e=null){e&&(W().activeReviewMode=e),Un("review")}function Vj(){Un("kanji")}function Yj(){Un("grammar")}function Zj(){Un("reading")}function eS(){Un("listening")}function tS(){Un("final-test")}function Un(e){a.route="textbooks",a.activeTextbookLevel="N2",a.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";vt(t),V(),A(),de(),Tt()}function nS(e="due"){const t=Date.now(),n=W(),s=Ze();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Ug(){const e=Ze();if(!e.length)return[];const t=a.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=dt().find(d=>d.kanji.includes(o.kanji))||dt()[0];s.push(sS(l,o,c,r))}return s.filter(Boolean)}function sS(e,t,n,s){const o=kt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ut({value:t.id,label:K(t)},Ze().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ut({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ze().flatMap(c=>kt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=v({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:ut({value:c,label:c},dt().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Zn(o),answer:c,answerLabel:c,options:ut({value:c,label:c},Ze().flatMap(d=>kt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n2Grammar[s%Math.max(a.n2Grammar.length,1)];if(c)return{id:`n2-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${v(c.question||c.explanation)}`,answer:Q(c),answerLabel:Q(c),options:ut({value:Q(c),label:Q(c)},ze(c).filter(d=>d!==Q(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n2Reading[s%Math.max(a.n2Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n2-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||v(c.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ut({value:t.kanji,label:t.kanji},Ze().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function rS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,A(),R())}function Jg(e=!1){if(a.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){R();return}a.finalTestBusy=!0;try{const n=Ug(),s=a.n2FinalTest||{},r=Se(),o=an(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${ur("n2",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=N,A();return}let u=0;const f=[],h=[];n.forEach(N=>{const J=String(t.answers?.[N.id]||"").trim();if(J===N.answer){if(u+=1,N.kanji&&lr(N.kanji,N.cardId),N.grammarId){const G=W();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else J||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:J}),N.kanji&&ia(N.kanji,N.cardId)});const m=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,x=!!t.passed,$=Math.max(0,f.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=m,t.passed=m>=l,t.correctAnswers=u,t.incorrectAnswers=$,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=m,t.bestScore=Math.max(Number(t.bestScore||0),m),t.passedAt=t.passed?x&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),J=Number(s?.rewards?.completeMoon||40);L+=N,k+=J,H(N,J,"n2_final_complete")}if(t.passed&&!x){const N=Number(s?.rewards?.passXp||110),J=Number(s?.rewards?.passMoon||18);L+=N,k+=J,H(N,J,"n2_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Aa("N2",t),W(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N2",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:m,correct:u,incorrect:$,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},V(),A()}catch(n){console.error(n),U(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,R()}}function aS(){W().finalTest=sl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),R()}function Gg(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function iS(e){a.activeTextbookLevel="N1",a.activeJlptLesson="N1";const t=Bi();t.opened||(t.opened=!0,V({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return kS();if(n==="review")return mS();if(n==="kanji")return hS();if(n==="grammar")return vS();if(n==="reading")return bS();if(n==="listening")return wS();const s=Ss(n);return s?(ee().currentLessonId=s.id,St("N1",s.id,"n1_lesson_page"),Vt("N1",s,"n1_lesson_page"),cS(e,s)):oS(e)}function oS(e){const t=jS(),n=Ce(),s=pt(),r=$S(),o=a.n1Meta||{},l=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N1 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${g(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N1_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(o.kanjiCount||1047)} ${i(n.kanji)} · ${i(o.grammarCount||a.n1Grammar.length||142)} ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n1/${g(r?.id||"bulk-n1-01")}" data-action="n1-open-lesson" data-id="${g(r?.id||"bulk-n1-01")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n1-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n1-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n1-grammar">${i(n.grammarN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-reading">${i(n.readingN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-listening">${i(n.listeningN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${bn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,M(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,M(t.completedLessons,s.length))}
          ${E(n.completedGrammar,`${t.completedGrammar}/${a.n1Meta?.grammarCount||a.n1Grammar.length}`,n.grammar,M(t.completedGrammar,a.n1Meta?.grammarCount||a.n1Grammar.length))}
          ${E(n.completedReading,`${t.completedReading}/${a.n1Meta?.readingCount||a.n1Reading.length}`,n.readingN1,M(t.completedReading,a.n1Meta?.readingCount||a.n1Reading.length))}
          ${E(n.completedListening,`${t.completedListening}/${a.n1Meta?.listeningCount||a.n1Listening.length}`,n.listeningN1,M(t.completedListening,a.n1Meta?.listeningCount||a.n1Listening.length))}
          ${E(n.reviews,t.reviews,n.srs,M(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>lS(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n1Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(v(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${tr("N1")}
      </section>
    `}function lS(e){const t=Xg(e.id),n=Ce();let s=e.kanji.filter(r=>ee().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(SS(t))}</small>
      </a>
    `}function cS(e,t){const n=Ce(),s=oa(t),r=la(t),o=Xg(t.id),l=ys("N1",t,s);let c=o==="completed";const d=`n1:${t.id}`;we.has(d)&&(c=!0);const u=c,f=r.filter(z=>nc(z.id)?.correct).length,h=r.length>0&&f===r.length,m=s.filter(z=>ee().studiedKanji[z.kanji]).length,S=t.kanji.length,x=m>=S,$=!c&&h&&x,L=t.kanji.filter(z=>ee().difficultKanji[z]).join(" · "),k=pt().find(z=>z.order===t.order+1),N=Hg(t),J=N?!!ee().completedReading[N.id]:!1,G=Pt("N1",t.id,"player"),Ms=Pt("N1",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · ${i(n.lesson)} ${t.order}/53</p>
            <h1>${i(v(t.title))}</h1>
            <p>${i(v(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(n.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(v(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(z=>`<span class="pill">${i(z)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${f}/${r.length}`,n.correct,M(f,r.length))}
          </div>
        </article>

        ${Wr("N1",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:z=>$t(z),sentence:z=>uS(z,t)})}

        ${pS(t)}

        ${dS(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(z=>`
              <article>
                <strong>${i(z.jp)}</strong>
                <span>${i(Y(z.reading||""))}</span>
                <small>${i(v({ru:z.ru,en:z.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Ms)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(z=>gS(z)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(z=>ee().studiedKanji[z.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(J?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n1-complete-lesson" data-id="${g(t.id)}" ${u||!$?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n1/${g(k.id)}" data-action="n1-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Hg(e){return e?.miniReadingId&&a.n1Reading.find(t=>t.id===e.miniReadingId)||null}function dS(e){const t=Ce(),n=Hg(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Zl(n,"reading")}
      </section>
    `:""}function uS(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Ce().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function pS(e){const t=Ce(),n=(e.grammarFocus||[]).map(s=>tc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n1-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n1-section-grid">
          ${n.map(s=>`
            <article class="n1-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(v(s.title))}</h3>
              <p>${i(v(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(v({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${g(s.id)}" data-value="${g(Q(s))}">${i(ee().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function gS(e){const t=Ce(),n=nc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Kn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(nm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${qg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${qg(e,n)}
      </article>
    `}function qg(e,t){if(!t)return"";const n=Ce(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function mS(e){const t=Ce(),n=ee().activeReviewMode||"due",s=BS(n);return`
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
          ${(a.n1Exercises?.reviewModes||[]).map(r=>`
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n1-review" data-mode="${g(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>fS(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function fS(e,t){const n=Ce(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Jt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i($t(e)[0]?.word||e.hiragana||"")} · ${i($t(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function hS(e){const t=Ce(),n=yt(),s=n.slice(0,160);return`
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
          ${s.map((r,o)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${o+1}/${n.length}</span><span class="pill">${i(B(r.id).state)}</span></div>
              <div class="n5-big-kanji">${i(r.kanji)}</div>
              <h3>${i(K(r))}</h3>
              <p>${i($t(r)[0]?.word||"")} · ${i($t(r)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${g(r.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function vS(e){const t=Ce();return`
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
          ${E(t.completedGrammar,`${Object.keys(ee().completedGrammar||{}).length}/${a.n1Grammar.length}`,t.grammar,M(Object.keys(ee().completedGrammar||{}).length,a.n1Grammar.length))}
          ${E(t.questions,a.n1Grammar.length,t.grammar,100)}
        </div>
        <div class="n1-section-grid">
          ${a.n1Grammar.map(n=>{const s=ee().grammarResults?.[n.id];return`
              <article class="n1-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(v(n.title))}</h3>
                <p>${i(v(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Y(r.reading||""))}</span><small>${i(v({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(v(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(ze(n).length?ze(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n1-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function bS(e){const t=Ce(),n=xa("N1","n1_reading_page"),s=vr("N1");return(n||s)&&A(),`
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
          ${a.n1Reading.map(r=>Zl(r,"reading")).join("")}
        </div>
      </section>
    `}function wS(e){const t=Ce();return`
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
          ${a.n1Listening.map(n=>Zl(n,"listening")).join("")}
        </div>
      </section>
    `}function Zl(e,t){const n=Ce(),s=t==="reading"?ee().completedReading[e.id]:ee().completedListening[e.id],r=t==="reading"?ee().readingAnswers:ee().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
      <article class="n1-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n1-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],f=Array.isArray(l.options)?l.options:[];return`
            <div class="n1-question-block">
              <h3>${i(v(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function kS(e){const t=Ce(),n=a.n1FinalTest||{},s=em(),r=ee().finalTest,o=an(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Final</p>
            <h1>${i(v(n.title||{}))}</h1>
            <p>${i(v(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,M(l,s.length))}
          ${E(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${E(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?M((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n1-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Ut("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>yS(f,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Ut("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function yS(e,t){const n=ee().finalTest.answers?.[e.id],s=!!ee().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ce().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ce(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function Bi(){a.progress.n1Course=xu(rl(),a.progress.n1Course||{});const e=pt();!Ss(a.progress.n1Course.currentLessonId)&&e[0]&&(a.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n1Course.completedLessons[s.id]);return!a.progress.n1Course.currentLessonId&&n&&(a.progress.n1Course.currentLessonId=n.id),a.progress.n1Course}function ee(){return Bi()}function pt(){return a.n1Textbook?.items||[]}function Ss(e){const t=String(e||"");return t&&pt().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function $S(){return Ss(ee().currentLessonId)||pt().find(e=>!ee().completedLessons[e.id])||pt()[0]||null}function oa(e){const t=ec();return(e?.kanji||[]).map(n=>Wg(n,t)).filter(Boolean)}function yt(){const e=ec(),t=new Set;return(a.n1KanjiCatalog||[]).map(n=>Wg(n.kanji,e)).filter(Boolean).filter(n=>t.has(n.kanji)?!1:(t.add(n.kanji),!0))}function ec(){if(ds?.catalog===a.n1KanjiCatalog&&ds?.cards===a.cards)return ds;const e=new Map;(a.n1KanjiCatalog||[]).forEach(s=>{s?.kanji&&e.set(s.kanji,s)});const t=new Map,n=new Map;return a.cards.forEach(s=>{if(s?.id&&n.set(String(s.id),s),!s?.kanji)return;const r=String(s.jlpt||"").toUpperCase();(r==="N1"||e.has(s.kanji))&&(!t.has(s.kanji)||r==="N1")&&t.set(s.kanji,s)}),ds={catalog:a.n1KanjiCatalog,cards:a.cards,detailsByKanji:e,cardsByKanji:t,cardsById:n},ds}function Wg(e,t=ec()){const n=String(e||""),s=t.detailsByKanji.get(n)||null,r=t.cardsByKanji.get(n)||(s?t.cardsById.get(String(s.courseCardId||s.id)):null)||null;return r&&s?fi(r,s):r||(s?fi({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:s.lessonId,jlpt:"N1",examples:[]},s):null)}function tc(e){const t=String(e||"");return a.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function $t(e){return Qr(e,e.examples)}function jS(){const e=yt(),t=ee(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{const r=a.progress.cards?.[String(s.id)];r&&De(r).state!=="New"&&n.add(s.kanji)}),{total:a.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:En("N1"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(a.progress.cards?.[String(r.id)]?.reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Xg(e){return Zs("N1",e)}function SS(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function la(e){const t=oa(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n1Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n1Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n1Meta?.rewards?.exerciseXp||11,rewardMoon:a.n1Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:gt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:gt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=$t(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:gt({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>$t(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:gt({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const m=t[3]||t[0],S=$t(m)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:_a(S),answer:S.word||m.kanji,answerLabel:S.word||m.kanji,kanji:m.kanji,cardId:m.id,options:gt({value:S.word||m.kanji,label:S.word||m.kanji},t.flatMap(k=>$t(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const x=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(x)}`:`Type the kanji for: ${K(x)}`,answer:x.kanji,answerLabel:x.kanji,kanji:x.kanji,cardId:x.id,options:[],...o("active-recall")});const $=tc(e.grammarFocus?.[0]);$&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v($.question||$.explanation),answer:Q($),answerLabel:Q($),kanji:t[0].kanji,cardId:t[0].id,grammarId:$.id,options:gt({value:Q($),label:Q($)},ze($).filter(k=>k!==Q($)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:v({ru:L.ru,en:L.en}),answerLabel:v({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:gt({value:v({ru:L.ru,en:L.en}),label:v({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,a.n1Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N1",lessonId:e.id}))}function gt(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),yt().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function Qg(e){for(const t of pt()){const n=la(t).find(s=>s.id===e);if(n)return n}return null}function nc(e){return Vr("N1",ee(),e)}function CS(e){const t=Qg(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Vg(t,s,r)}function NS(e){const t=Qg(e);if(!t)return;const n=document.getElementById(nm(t.id)),s=n?String(n.value||"").trim():"";Vg(t,s,s===t.answer)}function Vg(e,t,n){const s=ee();Yr("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,markStudied:()=>ca(e.kanji,e.cardId),markDifficult:()=>Oi(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Yg(e,t,n="review"){const s=ae(e)||yt().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=re(B(s.id)),d=be(c,o,l);a.progress.cards[s.id]=d,Dt(c,d,l),ve(),ca(s.kanji,s.id),ee().srsKanji[s.kanji]=new Date().toISOString(),r?(Oi(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${s.id}`)):Ke(t)?(Oi(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n1Meta?.rewards?.knowXp||9:a.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${s.id}`)),It(),A(),Lt("N1 SRS post-render effects",()=>{F(Ke(t)?"answer_wrong":"answer_correct"),V()})}function xS(e){const t=ae(e)||yt().find(s=>String(s.id)===String(e));if(!t)return;const n=ee();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},ca(t.kanji,t.id),H(9,1,`n1_writing:${t.id}`)),V(),A(),R()}function LS(e){const t=Ss(e);if(!t)return;const n=ee(),s=`n1:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){R();return}const r=oa(t);if(r.filter(m=>n.studiedKanji[m.kanji]).length<t.kanji.length){const m=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof U=="function"&&U(m);return}const l=la(t);if(!(l.length>0&&l.every(m=>nc(m.id)?.correct))){const m=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(m);return}we.add(s),oa(t).forEach(m=>{ca(m.kanji,m.id),n.srsKanji[m.kanji]=n.srsKanji[m.kanji]||new Date().toISOString();const S=B(m.id);S.state==="New"&&(a.progress.cards[m.id]=be(re(S),"good"))}),(t.grammarFocus||[]).map(m=>tc(m)).filter(Boolean).forEach(m=>{n.completedGrammar[m.id]=n.completedGrammar[m.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=pt().find(m=>m.order===t.order+1)?.id||t.id;const d=Mn(),u=d.sessions[We("N1",t.id)];if(u){const m=new Date().toISOString();u.phase="done",u.completedAt=m,u.updatedAt=m,u.currentIndex=r.length,d.activeSessionKey=We("N1",t.id),d.lastUpdatedAt=m}ee(),er("N1");const f=a.n1Meta?.rewards?.lessonCompleteXp||85,h=a.n1Meta?.rewards?.lessonCompleteMoon||10;H(f,h,`n1_lesson:${t.id}`),yr("N1",t.id),mt({title:`${Ce().lessonComplete}: ${v(t.title)}`,message:Ce().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),V(),A(),R()}function ca(e,t=null){if(!e)return;const n=ee();Gs(n,e)}function Oi(e,t=null,n=!0){if(e&&(ee().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=be(re(s),"again"))}}function AS(e,t=""){const n=a.n1Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,l=ee();l.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(a.n1Meta?.rewards?.grammarXp||12,a.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ve(),V(),A(),R()}function IS(e,t="0",n=""){Zg("reading",e,t,n)}function TS(e,t="0",n=""){Zg("listening",e,t,n)}function Zg(e,t,n="0",s=""){const o=(e==="reading"?a.n1Reading:a.n1Listening).find($=>$.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,f=ee(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,m=e==="reading"?f.completedReading:f.completedListening,S=!!m[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const x=(o.questions||[]).every(($,L)=>h[`${o.id}:${L}`]?.correct);if(d?(a.progress.totalCorrect+=1,F("answer_correct")):(a.progress.totalWrong+=1,F("answer_wrong")),x&&!S){m[o.id]=new Date().toISOString();const $=e==="reading"?a.n1Meta?.rewards?.readingXp||55:a.n1Meta?.rewards?.listeningXp||50,L=e==="reading"?a.n1Meta?.rewards?.readingMoon||4:a.n1Meta?.rewards?.listeningMoon||4;H($,L,`n1_${e}:${o.id}`)}ve(),V(),A(),R()}function RS(e){const t=Ss(e);t&&(on("textbook-lesson",{level:"N1",lessonId:t.id}),ee().currentLessonId=t.id,St("N1",t.id,"n1_lesson_open"),Vt("N1",t,"n1_lesson_open"),Jn(t.id))}function _S(){Jn("")}function PS(e=null){e&&(ee().activeReviewMode=e),Jn("review")}function MS(){Jn("kanji")}function ES(){Jn("grammar")}function KS(){Jn("reading")}function FS(){Jn("listening")}function DS(){Jn("final-test")}function Jn(e){a.route="textbooks",a.activeTextbookLevel="N1",a.activeTextbookSubroute=e||null,ee().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";vt(t),V(),A(),de(),Tt()}function BS(e="due"){const t=Date.now(),n=ee(),s=yt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function em(){const e=yt();if(!e.length)return[];const t=a.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=pt().find(d=>d.kanji.includes(o.kanji))||pt()[0];s.push(OS(l,o,c,r))}return s.filter(Boolean)}function OS(e,t,n,s){const o=$t(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:gt({value:t.id,label:K(t)},yt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:gt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},yt().flatMap(c=>$t(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=v({ru:l.ru,en:l.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:gt({value:c,label:c},pt().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Zn(o),answer:c,answerLabel:c,options:gt({value:c,label:c},yt().flatMap(d=>$t(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n1Grammar[s%Math.max(a.n1Grammar.length,1)];if(c)return{id:`n1-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${v(c.question||c.explanation)}`,answer:Q(c),answerLabel:Q(c),options:gt({value:Q(c),label:Q(c)},ze(c).filter(d=>d!==Q(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n1Reading[s%Math.max(a.n1Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n1-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||v(c.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:gt({value:t.kanji,label:t.kanji},yt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function zS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ee().finalTest.answers[t]=n,A(),R())}function tm(e=!1){if(a.finalTestBusy)return;const t=ee().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){R();return}a.finalTestBusy=!0;try{const n=em(),s=a.n1FinalTest||{},r=Ce(),o=an(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${ur("n1",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=N,A();return}let u=0;const f=[],h=[];n.forEach(N=>{const J=String(t.answers?.[N.id]||"").trim();if(J===N.answer){if(u+=1,N.kanji&&ca(N.kanji,N.cardId),N.grammarId){const G=ee();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else J||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:J}),N.kanji&&Oi(N.kanji,N.cardId)});const m=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,x=!!t.passed,$=Math.max(0,f.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=m,t.passed=m>=l,t.correctAnswers=u,t.incorrectAnswers=$,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=m,t.bestScore=Math.max(Number(t.bestScore||0),m),t.passedAt=t.passed?x&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),J=Number(s?.rewards?.completeMoon||40);L+=N,k+=J,H(N,J,"n1_final_complete")}if(t.passed&&!x){const N=Number(s?.rewards?.passXp||110),J=Number(s?.rewards?.passMoon||18);L+=N,k+=J,H(N,J,"n1_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Aa("N1",t),ee(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N1",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:m,correct:u,incorrect:$,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},V(),A()}catch(n){console.error(n),U(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,R()}}function US(){ee().finalTest=rl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),R()}function nm(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function sm(e){const t=wr(e.jlpt);if(!t)return"";const n={...Bc(),...Dc()};return`
      <div class="jlpt-practice-grid">
        ${JS(t,n)}
        ${GS(t,n)}
        ${HS(t,n)}
        ${WS(t,n)}
      </div>
    `}function JS(e,t){return e.apps.length?`
      <article class="jlpt-practice-card">
        <h3>${i(t.apps)}</h3>
        <div class="jlpt-app-grid">
          ${e.apps.map(n=>`
            <div class="jlpt-app-chip">
              <strong>${i(n.name)}</strong>
              <span>${i(v(n.context))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function GS(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${rm(t.hiragana,n)}
          ${rm(t.katakana,s)}
        </div>
      </article>
    `}function rm(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(v(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function HS(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${qS(n)}</strong>
                <small>${i(n.romaji)} · ${i(v(n.meaning))}</small>
                <p>${i(v(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function qS(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function WS(e,t){const n=kr(e);if(!n)return"";const s=_s(),r=s.selected[n.id]||[],o=!!s.checked[n.id],l=s.results[n.id]||null,c=r.map(f=>n.tiles[f]).filter(Boolean),d=o&&l?.correct,u=o&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(v(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${XS(n,c,u)}</div>
        <p class="label">${i(Y(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((f,h)=>{const m=r.includes(h);return`
              <button class="sentence-tile ${m?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${h}" ${m||d?"disabled":""}>
                <small>${i(f.reading)}</small>
                <strong>${i(f.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <p class="sentence-result ${o?d?"is-success":"is-error":""}">
          ${i(l?.message||t.fillBlanks)}
        </p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="check-jlpt-practice" ${d?"disabled":""}>${i(t.check)}</button>
          <button class="btn" type="button" data-action="undo-jlpt-tile" ${!r.length||d?"disabled":""}>${i(t.undo)}</button>
          <button class="btn" type="button" data-action="clear-jlpt-practice" ${!r.length||d?"disabled":""}>${i(t.clear)}</button>
          <button class="btn" type="button" data-action="next-jlpt-practice">${i(t.next)}</button>
        </div>
      </article>
    `}function XS(e,t,n){let s=0;return String(e.sentence||"").split("___").map((r,o,l)=>{if(o===l.length-1)return i(r);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),f=u.some((m,S)=>n.includes(s+S));s+=d;const h=u.length?u.map(m=>`<span>${i(m.kanji)}</span>`).join(""):`<span>${i("□".repeat(d))}</span>`;return`${i(r)}<span class="sentence-blank ${f?"is-wrong":""}">${h}</span>`}).join("")}function QS(){const e=ua(vN()),t=E0(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?ae(t.card?.id||t.cardId||t.progress?.cardId||""):null;P0(t);const r=t?t.kind==="card"?s?fm(s):Ls():t.kind==="kana"?T0(t,n):U0(t):Ls();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${E(p()==="ru"?"Сейчас":"Due now",Oe(),"due")}
              ${E(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${E(p()==="ru"?"Позже":"Learning later",bN(),"learning")}
              ${E(p()==="ru"?"Всего SRS":"Total SRS",wN(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${Yn("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${r}
          ${lc(s,n)}
        </div>
        ${VS()}
      </section>
    `}function VS(){try{return YS()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),a.progress&&(a.progress.sentencePractice=al(Js().sentencePractice,{})),""}}function YS(){const e=rn(),t=Ui(e),n={...cr(),...sc()},s=ZS(e,n);if(!e.length)return`
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
      `;const r=ac(t,e);if(!r)return"";const{exercise:o,tiles:l,selectedTiles:c,answerFlat:d,wrongIndexes:u,complete:f,awarded:h}=r,m=new Set(a.progress.sentencePractice.selected),S=a.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${a.progress.sentencePractice.checked?f?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",a.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(t0(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(a.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${im(o,c,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(n0(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map(($,L)=>{const k=m.has(L),N=u.includes(a.progress.sentencePractice.selected.indexOf(L));return`
              <button class="sentence-tile ${k?"is-used":""} ${N?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${L}" ${k||f?"disabled":""}>
                <span>${i($.reading)}</span>
                <strong>${i($.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i(S.message||n.tip.replace("{count}",d.length))}
          ${f&&!h?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!a.progress.sentencePractice.selected.length||f?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!a.progress.sentencePractice.selected.length||f?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function ZS(e,t){const n=Me(),s=bi(n.customDraft||{}),r=Array.isArray(n.customSentences)?n.customSentences:[],o=r.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${e0(r,e,t)}
      </details>
    `}function e0(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const r=rc(s,t),o=!!(r&&Gn(r,t).length>=Math.max(4,Ft(r).length)),l=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function t0(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function cr(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function sc(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function n0(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function am(e=rn()){const t=s0(e),n=r0(e),s=Array.isArray(a.sentenceExercises)?a.sentenceExercises:[],r=new Set;return[...t,...n,...s].filter(o=>!o?.id||r.has(o.id)?!1:(r.add(o.id),!0))}function s0(e=rn()){const t=Me();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>rc(s,e)).filter(Boolean)}function rc(e,t=rn()){return e?.jp?ic({id:e.id,jlpt:v0(e.jp,t),sentence:e.jp,reading:e.hiragana||da(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function im(e,t,n){const s=e?.blanks||[],r=String(e?.sentence||"").split("___");let o=0;return r.map((l,c)=>{const d=s[c];if(!d)return i(l);const u=d.answer||[],f=u.map((h,m)=>{const S=o+m,x=t[S],$=n.includes(S);return`<span class="sentence-slot ${x?"is-filled":""} ${$?"is-wrong":""}">${x?i(x.kanji):""}</span>`}).join("");return o+=u.length,`${i(l)}<span class="sentence-blank">${f}</span>`}).join("")}function ac(e=Ui(),t=rn()){const n=Cs(t),s=(Array.isArray(e)?e:[]).filter(x=>x?.id),r=Me();new Set(s.map(x=>x.id)).has(r.activeId)||zi(oc(s)?.id||null);const l=s.find(x=>x.id===a.progress.sentencePractice.activeId)||s[0];if(!l)return null;const c=Ft(l);(!Array.isArray(a.progress.sentencePractice.tileKeys)||!a.progress.sentencePractice.tileKeys.length)&&(a.progress.sentencePractice.tileKeys=Gn(l,n).map(Hi));let d=(Array.isArray(a.progress.sentencePractice.tileKeys)?a.progress.sentencePractice.tileKeys:[]).map(w0).filter(Boolean);const u=()=>c.every(x=>d.some($=>$.kanji===x.kanji));(d.length<Math.max(4,c.length)||!u())&&(d=Gn(l,n),a.progress.sentencePractice.tileKeys=d.map(Hi),a.progress.sentencePractice.selected=[],a.progress.sentencePractice.checked=!1,a.progress.sentencePractice.result=null);const f=Array.isArray(a.progress.sentencePractice.selected)?a.progress.sentencePractice.selected:[];a.progress.sentencePractice.selected=f.filter((x,$,L)=>Number.isInteger(x)&&x>=0&&x<d.length&&L.indexOf(x)===$).slice(0,c.length);const h=a.progress.sentencePractice.selected.map(x=>d[x]).filter(Boolean),m=a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?a.progress.sentencePractice.result.wrongIndexes:[],S=Array.isArray(m)?m.filter(x=>Number.isInteger(x)&&x>=0&&x<c.length):[];return{exercise:l,tiles:d,selectedTiles:h,answerFlat:c,wrongIndexes:S,complete:!!(a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?.correct),awarded:!!a.progress.sentencePractice.completed?.[l.id]}}function Me(){return a.progress.sentencePractice=al(Js().sentencePractice,a.progress.sentencePractice||{}),a.progress.sentencePractice}function zi(e){a.progress.sentencePractice={...Me(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=am(rn()).find(n=>n?.id===e);t&&dm(t)}function Cs(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function rn(){return Cs(a.cards).filter(e=>{const t=a.lessons.find(s=>s.id===e.lessonId);if(t&&!Ge(t))return!1;const n=B(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||a.progress.lessonCompletions[e.lessonId]})}function Ui(e=rn()){const t=Cs(e),n=new Set(t.map(s=>s.kanji));return am(t).filter(s=>{if(!s?.id)return!1;const r=Ft(s);return!r.length||r.some(o=>!n.has(o.kanji))?!1:Gn(s,t).length>=Math.max(4,r.length)})}function Ft(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function om(e){return Ft(e).map(t=>t.kanji).join("")}function Gn(e,t){if(!e?.id)return[];const n=Cs(t),s=Ft(e),r=new Set(s.map(m=>m.kanji)),o=new Set(n.map(m=>m.kanji)),l=new Map;[...e.tiles||[],...s].forEach(m=>{m?.kanji&&m?.reading&&l.set(m.kanji,m.reading)});const c=s.map(m=>({kanji:m.kanji,reading:m.reading||l.get(m.kanji)||vn(m.kanji)})),d=(e.tiles||[]).filter(m=>m?.kanji&&!r.has(m.kanji)&&o.has(m.kanji)).map(m=>({kanji:m.kanji,reading:m.reading||vn(m.kanji)})).filter((m,S,x)=>x.findIndex($=>$.kanji===m.kanji)===S),u=n.filter(m=>m.kanji&&!r.has(m.kanji)).map(m=>({kanji:m.kanji,reading:l.get(m.kanji)||vn(m.kanji,m)})).filter((m,S,x)=>x.findIndex($=>$.kanji===m.kanji)===S).sort((m,S)=>Ee(`${e.id}:${m.kanji}`)-Ee(`${e.id}:${S.kanji}`)),f=[...d,...u].filter(m=>!r.has(m.kanji)).filter((m,S,x)=>x.findIndex($=>$.kanji===m.kanji)===S),h=Math.min(Math.max(6,c.length+2),c.length+f.length);return x0([...c,...f.slice(0,h-c.length)],e.id)}function r0(e){const t=Cs(e);if(!t.length)return[];const n=new Set(t.map(l=>l.kanji)),s=new Set,r=[];return t.flatMap(l=>(l.examples||[]).map(c=>({...c,card:l}))).forEach((l,c)=>{const d=dr(l.word||"");if(!d||s.has(d)||!b0(d)||cm(d).some(x=>!n.has(x)))return;s.add(d);const u=Ns(l.reading||da(d)),f=l.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${f}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${f}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${f}.`,translationEn:`I write ${d} in a memo.`}],m=h[c%h.length],S=ic({id:`sentence-json-${Ee(`${d}:${m.sentence}`).toString(36)}`,jlpt:l.card?.jlpt||"N5",sentence:m.sentence,reading:m.reading,translationRu:m.translationRu,translationEn:m.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});S&&r.push(S)}),r.slice(0,160)}function a0(){const e=Me(),t={...cr(),...sc()},n=bi(i0()||e.customDraft||{}),s=rn(),r=Hn(n.jp);if(!r){Ji(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(d0(r,o)){Ji(t.customDuplicate,"error");return}const c=Me(),d={id:o||`custom_${Date.now().toString(36)}_${Ee(r).toString(36)}`,jp:r,hiragana:Ns(Hn(n.hiragana)||da(r)),ru:Hn(n.ru),en:Hn(n.en),source:"user"},u=(c.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?c.customSentences[u]=d:c.customSentences=[d,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,Ji(o?t.customUpdated:t.customAdded,"success",!1);const f=rc(d,s);f&&Gn(f,s).length>=Math.max(4,Ft(f).length)&&(zi(f.id),a.progress.sentencePractice.tileKeys=Gn(f,s).map(Hi)),A(),R()}function i0(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function o0(e){const t=Me(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",A(),R())}function l0(e){const t=Me(),n={...cr(),...sc()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(r=>r.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(r=>r!==e),t.activeId===e){const r=rn(),o=oc(Ui(r));zi(o?.id||null)}Ji(n.customDeleted,"success",!1),A(),R()}}function c0(){const e=Me();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",A(),R()}function d0(e,t=null){const n=dr(e);return(Me().customSentences||[]).some(r=>r.id!==t&&dr(r.jp)===n)?!0:a.sentenceExercises.some(r=>dr(lm(r))===n)}function Ji(e,t,n=!0){const s=Me();s.customMessage=e,s.customStatus=t,A(),n&&R()}function ic(e,t,n={}){if(!e||typeof e!="object")return null;const s=Cs(t),r=dr(e.sentence||"");if(!r||!e.id||!s.length)return null;const o=u0(r,s).filter(f=>f.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const l=p0(o,r,n);if(!l.length)return null;let c="",d=0;const u=l.map(f=>(c+=r.slice(d,f.start)+"___",d=f.end,{answer:f.answer,reading:g0(f.text)}));return c+=r.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:c,originalSentence:r,reading:Ns(e.reading||da(r)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(f=>f.answer.map((h,m)=>({kanji:h,reading:f.reading[m]||vn(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function u0(e,t){const n=new Map(Cs(t).map(o=>[o.kanji,o])),s=[];let r=null;return Array.from(e).forEach((o,l)=>{if(Gi(o)&&n.has(o)){r||(r={start:l,end:l,text:"",answer:[]}),r.end=l+1,r.text+=o,r.answer.push(o);return}r&&s.push(r),r=null}),r&&s.push(r),s}function p0(e,t,n={}){const s=Number(n.maxBlanks||2),r=Number(n.maxBlankChars||5),o=e.filter(f=>f.start>0&&f.end<t.length),l=e.filter(f=>f.start>0),c=(o.length?o:l.length?l:e).slice().sort((f,h)=>{const m=h.answer.length-f.answer.length;return m||Math.abs(f.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return c.forEach(f=>{d.length>=s||u+f.answer.length>r||(d.push(f),u+=f.answer.length)}),d.sort((f,h)=>f.start-h.start)}function g0(e){const t=Array.from(e),n=m0(e);return n?f0(t,Ns(n)):t.map(s=>vn(s))}function m0(e){for(const t of a.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function f0(e,t){const n=Array(e.length).fill("");let s=t;for(let r=e.length-1;r>0;r-=1){const l=h0(e[r]).sort((c,d)=>d.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[r]=l,s=s.slice(0,-l.length))}return n[0]=s||vn(e[0]),n.map((r,o)=>r||vn(e[o]))}function h0(e){const t=a.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;・、\s]+/u)).map(s=>Ns(s.trim())).filter(Boolean);return[...new Set(n)]}function da(e){return Ns(Array.from(e).map(t=>Gi(t)?vn(t):t).join(""))}function v0(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return cm(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,l)=>n.indexOf(l)-n.indexOf(o))[0]||"N5"}function dr(e){return String(e||"").replace(/\s+/g,"").trim()}function Hn(e){return String(e||"").replace(/\s+/g," ").trim()}function lm(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function b0(e){return Array.from(String(e||"")).some(Gi)}function cm(e){return Array.from(String(e||"")).filter(Gi)}function Gi(e){return/[㐀-鿿]/u.test(e)}function Ns(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function Y(e){return Ns(String(e||""))}function vn(e,t=a.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function Hi(e){return`${e.kanji}	${e.reading||""}`}function w0(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||vn(t)}:null}function k0(e){const t=ac();if(!t||!Number.isInteger(e))return;const n=cr(),s=a.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){U(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},A(),R()}}function y0(){const e=Me();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:cr().removed,wrongIndexes:[]},A(),R())}function $0(){const e=Me();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,A(),R())}function j0(){const e=ac();if(!e)return;const t=cr(),n=a.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},A(),R();return}const s=e.answerFlat.map((o,l)=>e.selectedTiles[l]?.kanji===o.kanji?-1:l).filter(o=>o>=0),r=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:r,wrongIndexes:s,message:r?t.correct:t.wrong},r)S0(e.exercise),$e({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),he("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),Pa("ok");else{a.progress.totalWrong+=1,a.progress.correctCombo=0,$e({discipline:-.6,curiosity:.2},"sentence_wrong"),he("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=wn();o.mistakes+=1,a.progress.daily[oe()]=o,Pa("again")}A(),R()}function S0(e){const t=Me();if(t.completed[e.id])return;const n=a.rewards?.rewards||{},s=n.sentencePracticeXp||gd.xp,r=n.sentencePracticeCoins||gd.coins;t.completed[e.id]=new Date().toISOString(),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo);const o=wn();o.reviews+=1,o.minutes=ko((o.minutes||0)+.8,1),a.progress.daily[oe()]=o,H(s,r,`sentence:${e.id}`),$e({trust:.8,curiosity:.7},"sentence_complete"),ve(),kc(),V()}function C0(){const e=rn(),t=Ui(e);if(!t.length)return;const n=a.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&dm(s);const r=oc(t,{excludeCurrent:!0,preferUncompleted:!0});r?.id&&(zi(r.id),a.progress.sentencePractice.tileKeys=Gn(r,e).map(Hi),A(),R())}function oc(e,t={}){const n=(Array.isArray(e)?e:[]).filter($=>$?.id);if(!n.length)return null;const s=Me(),r=s.activeId,o=new Set(s.recentIds||[]),l=new Set(s.recentAnswers||[]),c=$=>!t.excludeCurrent||n.length===1||$.id!==r,d=$=>!t.preferUncompleted||!s.completed?.[$.id],u=$=>!l.has(om($)),f=$=>!o.has($.id),m=[n.filter(c).filter(d).filter(u).filter(f),n.filter(c).filter(d).filter(u),n.filter(c).filter(u).filter(f),n.filter(c).filter(f),n.filter(c),n].find($=>$.length)||n,S=m.filter(N0),x=S.length?S:m;return x[Math.floor(Math.random()*x.length)]}function N0(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function dm(e){if(!e?.id)return;const t=Me(),n=om(e),s=Array.isArray(t.recentIds)?t.recentIds:[],r=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...r.filter(o=>o!==n)].slice(0,8)}function Ee(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function x0(e,t){return[...e].sort((n,s)=>Ee(`${t}:${n.kanji}:${n.reading}`)-Ee(`${t}:${s.kanji}:${s.reading}`))}function an(e,t=[]){const n=t.filter(r=>String(e?.answers?.[r.id]||"").trim()).length,s=t.filter(r=>!String(e?.answers?.[r.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(r=>r.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function ur(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function L0(e){return Number(e?.passingPercent??e?.passThreshold??70)}function A0(){const e=a.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Ut(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const r=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(_("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${bn("eva",n,t?"review":"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(e.message)}</p>
          <div class="reward-values">
            ${r.join("")}
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
    `}function um(e){const t=FN(e);if(!t&&!EN(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function qi(e){const t=Ca(e);return`
      <div class="reading-row reading-split">
        ${pm(e,"onyomi",uf("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${pm(e,"kunyomi",uf("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function pm(e,t,n,s,r){const o=mm(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(Y(s)||"—")}</strong>
        <small>${i(r||"—")}</small>
      </div>
    `}function gm(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${mm(e,t,n)}
            </dt>
            <dd>${i(Y(s||"—"))}</dd>
          </div>
        `}function mm(e,t,n){return br(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function Wi(e,t="btn ghost"){const n=qN(e);if(!n)return"";const s=jt(n.jlpt),r=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(r)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g($n(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function fm(e){if(!e?.id)return Ls();Br(e,"study_card");const t=B(e.id),n=a.revealed;xN(e.id);const s=e.lessonTitle||Gc(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${Sr(t.state)}
          </div>
          ${um(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?K(e):_("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(_("strokes"))} · ${i(Jt(t.dueAt))}</p>
        ${n?_0(e):`
          ${R0(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(_("showAnswer"))}</button>
            ${Wi(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(_("details"))}</button>
          </div>
        `}
      </article>
    `}function I0(e){const t=Math.max(Number(a.reviewSession?.initialSize||e||0),e||0,1),n=le(t-Math.max(Number(e||0),0),0,t),s=Math.min(n+1,t);return p()==="ru"?`Осталось: ${e} · ${s} / ${t}`:`Remaining: ${e} · ${s} / ${t}`}function T0(e,t){const n=dc(e);if(!n)return Ls();const s=n.progress||De(null),r=mr(),o=Up(n.courseSlug),l=Vn().settings.showRomaji;return`
      <article class="study-card kana-srs-card" data-review-card-id="${g(n.cardId)}" data-review-kind="kana">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(o)}</span>
            ${Sr(s.state)}
            <span class="pill">${i(I0(t))}</span>
          </div>
          <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(n.kana)}" aria-label="${g(p()==="ru"?"Озвучить знак":"Speak kana")}">🔊</button>
        </div>
        <div class="kanji-focus kana-srs-focus" lang="ja" aria-label="${g(n.kana)}">${i(n.kana)}</div>
        <h2>${i(l&&n.romaji?n.romaji:p()==="ru"?"Вспомни чтение":"Recall the reading")}</h2>
        <p class="label">${i(o)} · ${i(n.strokes?`${n.strokes} ${_("strokes")}`:p()==="ru"?"знак каны":"kana card")} · ${i(Jt(s.dueAt))}</p>
        ${l&&n.romaji?`<p class="kana-srs-reading"><span lang="ja">${i(n.kana)}</span> · ${i(n.romaji)}</p>`:""}
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="forgot">${i(r.forgot)} <small>${i(r.forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="remember">${i(r.remember)} <small>${i(r.rememberHint)}</small></button>
        </div>
      </article>
    `}function R0(e){const t=a.readingCheck.cardId===e.id?a.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function Xi(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(Y(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(Zn(e))}</small>
      </li>
    `}function _0(e){return`
      <div class="answer-section">
        ${qi(e)}
        <strong>${i(_("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(Xi).join("")}
        </ul>
        <strong>${i(_("apps"))}</strong>
        <p>${i(Ra(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${Wi(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(mr().forgot)} <small>${i(mr().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(mr().remember)} <small>${i(MC(e))}</small></button>
        </div>
      </div>
    `}function lc(e,t){const n=a.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",r=a.route==="review"?Math.max(a.reviewSession?.initialSize||t,1):Math.max(a.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${IC(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${E(_("review"),t,"queue",M(t,r))}
          ${E("Combo",a.progress.correctCombo,`${a.progress.bestCorrectCombo} best`,M(a.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(_("hint"))} · Leya</h3>
          <p>${i(to(e.id).hint)}</p>
          <h3>${i(_("mnemonic"))}</h3>
          <p>${i(to(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function xs(){a.reviewExerciseResults={},a.activeExerciseReviewId=null,a.activeExerciseReviewLevel="",a.activeExerciseReviewSource="",a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1}function P0(e){if(!e){a.activeCardId=null,xs();return}if(a.reviewQueueLastKind=e.kind,e.kind==="card"){const t=ae(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){a.activeCardId=null,xs();return}a.activeCardId!==t.id&&(a.activeCardId=t.id,xs());return}if(e.kind==="kana"){a.activeCardId=null,xs(),a.revealed=!1,ft();return}if(e.kind==="exercise"){const t=a.activeExerciseReviewId===e.exerciseId&&a.activeExerciseReviewLevel===e.level&&a.activeExerciseReviewSource===String(e.source||"textbook");a.activeCardId=null,a.activeExerciseReviewId=e.exerciseId,a.activeExerciseReviewLevel=e.level,a.activeExerciseReviewSource=String(e.source||"textbook"),t||(a.reviewExerciseResults={}),t||(a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1)}}function cc(e,t,n="",s=null,r=null,o="textbook"){const l=D(e);if(!l||!t)return null;if(String(o||"textbook")==="reading"){const m=r||qm(t,l);if(!m)return null;const S=$a(s||{},m);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(m.sourceId||n||S.lessonId||""),cardId:"",dueAt:S.dueAt?new Date(S.dueAt).getTime():0,progress:S,exercise:m,card:null}}const d=Is(s||{},{level:l,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=r||wc(l,t,n||d.lessonId||"");if(!u)return null;const f=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:f,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:ae(h)||ae(d.cardId||"")}}function pr(){if(!a.activeExerciseReviewId||!a.activeExerciseReviewLevel)return null;const e=a.activeExerciseReviewLevel,t=a.activeExerciseReviewId;if(String(a.activeExerciseReviewSource||"textbook")==="reading"){const o=qm(t,e),l=o?Xn(o):a.progress.readingExercises?.[t]||null;return cc(e,t,l?.lessonId||o?.sourceId||"",l,o,"reading")}const r=KC(e)?.exerciseSrs?.[t]||null;return cc(e,t,r?.lessonId||"",r,null,"textbook")}function dc(e){if(!e||e.kind!=="kana")return null;const t=Fi(e.cardId||e.key||"",e.courseSlug||"");if(!t?.id||!fe(t.slug))return null;const n=_t(t.slug),s=De(e.progress||n[t.id]||null),r=e.character||zp(t.slug,t.kana)||{};return{...e,kind:"kana",key:t.id,courseSlug:t.slug,cardId:t.id,kana:t.kana,romaji:String(r.romaji||e.romaji||""),strokes:Number(r.strokes||e.strokes||0),progress:s,character:r,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}function uc(e){return!e||e.kind!=="exercise"?null:cc(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function M0(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=ae(t);if(!n?.id)return null;const s=e.progress||B(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="kana"?dc(e):e.kind==="exercise"?uc(e):null}function ua(e){return(Array.isArray(e)?e:[]).map(M0).filter(Boolean)}function E0(e){const t=ua(e),n=pr();if(n&&a.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(l=>l.kind==="exercise"&&l.exerciseId===n.exerciseId&&l.level===n.level))return n;const s=a.activeCardId?t.find(l=>l.kind==="card"&&l.card?.id===a.activeCardId):null;if(s)return s;const r=["card","kana"],o=r.includes(a.reviewQueueLastKind)?["exercise"]:a.reviewQueueLastKind==="exercise"?r:[];if(o.length){const l=t.find(c=>o.includes(c.kind));if(l)return l}return t[0]||n||null}function K0(e,t){const n=D(e);return n==="N5"?Wp(t):n==="N4"?dg(t):n==="N3"?jg(t):n==="N2"?Mg(t):""}function F0(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function pc(){return p()==="ru"?"Перевод":"Translation"}function hm(e){const t=String(e||"").trim();return t?t.split(/([。！？、\n]+)/u).map(n=>{if(!n)return"";if(/^[。！？、\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=cf(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([。！？、])/gu,"$1 ").replace(/([。！？、])\s*$/gu,"$1").trim():""}function D0(e){const t=!!a.activeExerciseReviewTranslationOpen,n=e?.reading?Y(e.reading):"",s=e?.reading?hm(e.reading):"",r=v({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(pc())}</button>
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
              <strong>${i(r||(p()==="ru"?"Нет данных":"No data"))}</strong>
            </div>
          </div>
        `:""}
      </div>
    `}function B0(e){return a.reviewExerciseResults?.[e.exerciseId]||Xn(e.exercise)||null}function O0(e,t,n,s){const r=String(t?.id||n),o=s?.answers?.[r]||null,l=Array.isArray(t?.options)?t.options:[],c=l.find(u=>String(u.value||"")===String(t?.answer||"")),d=c?v(c.label||c):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(v(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${l.map(u=>{const f=o?.selected===u.value,h=o?.correct&&u.value===t.answer,m=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||m?"success":f?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(r)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(v(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function z0(e){const t=uc(e);if(!t||!t.exercise)return Ls();const n=B0(t),s=!!n?.completed,r=t.progress||Xn(t.exercise),o=F0(t.exercise),l=v(t.exercise.sourceTitle||t.exercise.title||{}),c=Ft(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(L=>L?.id),u=t.exercise.kind==="cloze"||!d.length&&c.length>0;if(!u&&!d.length)return Ls();const f=u?s?1:Array.isArray(r?.selectedIndices)?r.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,c.length):Math.max(1,d.length),m=Array.isArray(r?.selectedIndices)?r.selectedIndices:Array.isArray(a.activeExerciseReviewSelection)?a.activeExerciseReviewSelection:[],S=m.map(L=>t.exercise.tiles?.[L]).filter(Boolean),x=Array.isArray(r?.wrongIndexes)?r.wrongIndexes:[],$=D0(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(l||o)}</span>
          <span class="pill">${i(r.state)} · ${i(Jt(r.dueAt))}</span>
          <span class="pill">${i(f)}/${i(h)}</span>
        </div>
        ${$}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${im(t.exercise,S,x)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(v({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((L,k)=>{const N=m.includes(k),J=x.includes(k);return`
                <button class="sentence-tile ${N?"is-used":""} ${J?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${k}" ${N||s?"disabled":""}>
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
            <button class="btn" type="button" data-action="reading-review-undo" ${!m.length||s?"disabled":""}>${i(p()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!m.length||s?"disabled":""}>${i(p()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:d.map((L,k)=>O0(t,L,k,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function U0(e){const t=uc(e);if(!t||!t.exercise)return Ls();if(t.source==="reading")return z0(t);const n=!!a.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Jt(t.progress.dueAt))}</span>
        </div>
        ${K0(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function J0(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Fe("eva","lessonComplete"))}</h2>
        <p>${i(e?Ta(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(_("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function G0(){const e=a.reviewSession?.results||{},t=Number(e.remember||0),n=Number(e.forgot||0),s=t+n,r=(Array.isArray(e.items)?e.items:[]).filter(o=>o?.dueAt).sort((o,l)=>(Date.parse(o.dueAt)||0)-(Date.parse(l.dueAt)||0)).slice(0,4);return`
      <article class="empty-state review-complete-card">
        <span class="kanji-char">済</span>
        <h2>${i(p()==="ru"?"Повторение завершено":"Review complete")}</h2>
        <p>${i(p()==="ru"?"Карточки закрыты. Вот короткий итог с ближайшими возвращениями.":"Cards are done. Here is a short summary and the nearest returns.")}</p>
        <div class="mini-stat-row">
          ${E(p()==="ru"?"Помню":"Remember",t,`${s}`,M(t,Math.max(1,s)))}
          ${E(p()==="ru"?"Не помню":"Forgot",n,`${s}`,M(n,Math.max(1,s)))}
        </div>
        ${r.length?`<ul class="review-upcoming-list">
          ${r.map(o=>`<li><strong>${i(o.label||o.kind||"")}</strong><span>${i(o.course||"")}</span><small>${i(Jt(o.dueAt))}</small></li>`).join("")}
        </ul>`:""}
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">典 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function Ls(){const e=a.reviewSession?.results||{},t=Number(e.remember||0)+Number(e.forgot||0);return a.route==="review"&&Number(a.reviewSession?.initialSize||0)>0&&t>0?G0():`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Fe("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
      </article>
    `}function H0(){const e=kN(),t=Math.max(Ir,Number(a.dictionaryVisibleCount||Ir)),n=e.slice(0,t),s=n.length<e.length,r=a.cards.filter(u=>!!a.progress.favorites[u.id]).length,o=["all",...new Set(a.cards.map(u=>u.jlpt))],l=["all",...new Set(a.cards.map(u=>Sa(u.id).radical).filter(Boolean))],c=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("dictionary"))}</h1>
            <p>${i(c)} · ${e.length}/${a.cards.length}</p>
          </div>
        </div>
        ${q0(r)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(_("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(a.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${Fa(u,a.filters.jlpt)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(_("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",_("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,f])=>`<option value="${u}" ${Fa(u,a.filters.strokes)}>${i(f)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(_("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(u=>`<option value="${g(u)}" ${Fa(u,a.filters.radical)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(_("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${Fa("all",a.filters.favorites)}>${i(_("all"))}</option>
              <option value="yes" ${Fa("yes",a.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(W0).join("")||Q0()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function q0(e){const t=a.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${g(_("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${a.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function W0(e){const t=B(e.id),n=Sa(e.id),s=!!a.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${X0(e)}
        <div class="tag-row">
          ${Sr(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(_("strokes"))}</span>
          <span class="pill">${i(_("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(_("learnedStatus"))}: ${i(If(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function X0(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(K(e))}</h3>
          <p>${i(Ac(e))}</p>
          <span class="label">${i(Gc(e.lessonId))}</span>
        </span>
      </span>
    `}function Q0(){const e=a.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function V0(){const e=a.kanjiPageId||mL(),t=ae(e);if(!t)return a.deferredDataLoaded?Or(me("hash","entity-not-found",gL(),rs(location.hash).segments)):(ri({route:"kanji",delay:0,force:!0}),Rf());const n=B(t.id),s=Sa(t.id),r=!!a.progress.favorites[t.id],o=gC(t,p()),l=Y0(t),c=yc(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(_("dictionary"))}</button>
            <h1>${i(l?`${t.kanji} — ${Z0(l)}`:t.kanji)}</h1>
            <p>${i(l?eC(l):K(t))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(t.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(t.id)}">${r?"★":"☆"} ${i(_("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${g(t.kanji)}">${i(t.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${Sr(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(_("strokes"))}</span>
                <span class="pill">${i(_("radical"))}: ${i(s.radical||"-")} ${i(v(s.radicalMeaning||{}))}</span>
                ${l?`<span class="pill">Grade ${i(l.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(l.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(K(t))}</h2>
              <p>${i(Ra(t))}</p>
              ${qi(t)}
              ${mc(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${l?tC(l):""}
          ${l?nC(l):""}
          <article class="kanji-profile-card">
            <h2>${i(_("examples"))}</h2>
            <ul class="example-list">${t.examples.map(Xi).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${l?sC(l):lC(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("strokeOrder"))}</h2>
            <p class="label">${i(c?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${ka(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${Wi(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("apps"))}</h2>
            <p>${i(Ra(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${l?aC(l):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${l?iC(l):""}
        </div>
      </section>
    `}function Y0(e){return a.kanjiPageSources?.[e?.kanji]||null}function Z0(e){return vm(e.meanings)[0]||e.literal}function vm(e){return e?e[p()]||e.ru||e.en||[]:[]}function gr(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function eC(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function tC(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(vm(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(gr(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(_("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(_("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${gr(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function nC(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(oC(t))}">
                <b>${gc(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(gr(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function sC(e){return`
      <ul class="kanji-sentence-list">
        ${rC(e).map(n=>`
          <li>
            <strong>${gc(n.japanese,e.literal)}</strong>
            <small>${i(gr(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function rC(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const r=s.japanese||"";if(!r.includes(e.literal)||t.has(r))return!1;t.add(r);const o=r.replace(/[\s。、！？!?「」『』（）()・ー]/gu,"").length;return!(o<3||o>44)}).sort((s,r)=>Number(bm(r.japanese,n))-Number(bm(s.japanese,n))).slice(0,8)}function bm(e,t){return[...t].some(n=>e.includes(n))}function aC(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(gr(t.title||{}))}</span>
            <strong>${gc(t.japanese,e.literal)}</strong>
            <small>${i(gr(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function iC(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((r,o)=>r?`<section><h3>${i(n[o])}</h3><p>${i(r)}</p></section>`:"").join("")}
      </article>
    `}function oC(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function gc(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function lC(e){const t=cC(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${pC(n)}</strong>
            <span>${i(dC(n))}</span>
            <small>${i(uC(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function cC(e){const t=e?.kanji||"";return t?(a.sentenceExercises||[]).filter(n=>{const s=wm(n),r=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||r.includes(t)}).slice(0,6):[]}function wm(e){return e?.sentence||e?.jp||""}function dC(e){return e?.reading||e?.hiragana||""}function uC(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function pC(e){let t=i(wm(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function gC(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${km(e)}/`}function km(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),r=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${r}`}function mC(){const e=ae(a.activeCardId)||Cc()[0]||a.cards[0];e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=le(a.writingStep,0,Math.max(0,Bt(e)-1)));const t=yc(e),n=Bt(e),s=p()==="ru"?"Шаг":"Step",r=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",l=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
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
            ${e?qi(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(_("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${a.writingStep+1}/${n}</span>
                <span class="label">${i(ka(e)[a.writingStep]||"")}</span>
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
            ${e?fC(e):""}
            <h3>${i(_("hint"))}</h3>
            <p>${i(to(e?.id).hint)}</p>
            <h3>${i(_("mnemonic"))}</h3>
            <p>${i(to(e?.id).mnemonic)}</p>
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
              <button class="btn primary" type="button" data-action="check-writing">${i(r)}</button>
              <button class="btn" type="button" data-action="undo-writing">${i(p()==="ru"?"Отменить черту":"Undo stroke")}</button>
              <button class="btn" type="button" data-action="clear-writing">${i(_("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${i(_("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${i(p()==="ru"?"Напиши кандзи поверх образца и нажми «Получилось» для самопроверки.":"Write over the guide and tap 'Got it' for self-check.")}</div>
          </article>
        </div>
      </section>
    `}function fC(e){return`
      <ol class="stroke-list writing-guide-list">
        ${ka(e).map((n,s)=>`
          <li class="${s===a.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function hC(){if(!a.detailCardId)return"";const e=ae(a.detailCardId);if(!e)return"";const t=B(e.id),n=Sa(e.id),s=!!a.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${Sr(t.state)}
              <h2>${i(K(e))}</h2>
              <p>${i(Ac(e))} · ${e.strokes} ${i(_("strokes"))}</p>
              <p><span class="pill">${i(_("radical"))}: ${i(n.radical||"-")} ${i(v(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${qi(e)}
          ${mc(e)}
          <h3>${i(_("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(r=>`<li>${i(r)}</li>`).join("")}</ol>
          <h3>${i(_("examples"))}</h3>
          <ul class="example-list">${e.examples.map(Xi).join("")}</ul>
          <h3>${i(_("apps"))}</h3>
          <p>${i(Ra(e))}</p>
          <ul class="app-list">${e.apps.map(r=>`<li>${i(r)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(_("favorites"))}</button>
            ${Wi(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function mc(e){const t=Ic(e),n=br(e);return`
      <section class="audio-panel">
        <h3>${i(_("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${vC(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function vC(e,t=br(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(fc(n))}">
                <span>${i(fc(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function fc(e){return e.kind==="onyomi"?so("onyomi"):e.kind==="kunyomi"?so("kunyomi"):e.label||"TTS"}function bC(){const e=Nc(),t=wn(),n=jn();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("stats"))}</h1>
            <p>${i(_("xp"))} · ${i(_("level"))} · ${i(_("coins"))}</p>
          </div>
          <div class="actions">
            ${Yn("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">✦ ${i(_("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(_("xp"),`${n.current}/${n.next}`,`${_("level")} ${a.progress.level}`,n.percent)}
          ${E(_("streak"),a.progress.streak.current,`${a.progress.streak.best} best`,M(a.progress.streak.current,30))}
          ${E(_("mastered"),e.mastered,`${e.total}`,M(e.mastered,e.total))}
          ${E(_("successRate"),`${Zm()}%`,`${xc()} reviews`,Zm())}
          ${E(_("errors"),t.mistakes||0,`${a.progress.totalWrong} total`,M(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(_("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${kC()}</article>
          <article class="tool-panel" data-section="shop-panel">${$C()}</article>
          <article class="tool-panel">${jm()}</article>
          <article class="tool-panel">
            <h3>${i(_("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(Rn().badge)}</strong>
                  <small>${i(Rn().hint)}</small>
                </span>
                <span class="pill">${i(Rn().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${go()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${go()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(mo()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(mo()*100)}%</strong>
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
    `}function As(){return a.achievements?.length?a.achievements:a.rewards?.achievements||[]}function wC(){return a.achievementCategories?.length?a.achievementCategories:[...new Set(As().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function hc(e){return v(e.title||e.name||{ru:e.id,en:e.id})}function ym(e){return v(e.description||{})}function vc(e){return{moon:"月",book:"文",memory:"記",flame:"火",star:"星",brush:"筆",text:"文",lock:"鍵",eye:"眼"}[e]||"✦"}function kC(){return`<h3>${i(_("achievements"))}</h3><div class="achievement-grid compact">${As().slice(0,8).map($m).join("")}</div>`}function yC(){const e=As(),t=bL(),n=e.reduce((s,r)=>({xp:s.xp+(r.rewardXp||0),coins:s.coins+(r.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(_("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${Yn("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">▥ ${i(_("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(_("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",M(t,e.length))}
          ${E("XP",n.xp,p()==="ru"?"в наградах":"in rewards",M(t,e.length))}
          ${E(_("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",M(t,e.length))}
          ${E(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Lr(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",M(e.filter(s=>s.secret&&Lr(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${wC().map(s=>{const r=e.filter(l=>l.category===s.id);if(!r.length)return"";const o=r.filter(l=>Lr(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${vc(s.icon)} ${i(v(s.title))}</h2>
                    <p>${o}/${r.length}</p>
                  </div>
                  <span class="pill">${M(o,r.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${r.map(l=>$m(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function $m(e,t=!1){const n=Lr(e.id),s=Pm(e),r=Math.max(1,Number(e.target||1)),o=M(s,r),l=Math.min(s,r),c=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":hc(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":ym(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${vc(e.icon)}</span>
        <strong>${i(c)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${l}/${r}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(_("coins"))}</small>
      </div>
    `}function $C(){return pp({closable:!1})}function jm(e={}){const t=e.limit||10,n=(a.progress.transactions||[]).slice(0,t);return`
      <h3>${i(_("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(jC(s))}</strong>
              <small>${i(Px(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function jC(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=ye(n[1]);if(s)return Rt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function SC(){if(!Lm())return"";const e=a.rewardModal,t=e.type==="level",n=e.type==="achievement",s=jn(),r=t?`${_("level")} ${a.progress.level} - ${s.current}/${s.next} XP - ${a.progress.moonFragments} ${_("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${vc(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(_("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${bn(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(r)}</p>
          <div class="reward-values">
            ${t?`<span>${i(_("level"))} ${a.progress.level}</span>`:""}
            ${e.xp?`<span>+${e.xp} XP</span>`:""}
            ${t?`<span>${s.current}/${s.next} XP</span>`:""}
            ${e.coins?`<span>+${e.coins} ${i(_("coins"))}</span>`:""}
            ${t?`<span>${a.progress.moonFragments} ${i(_("coins"))}</span>`:""}
          </div>
        </article>
      </div>
    `}function CC(){if(!a.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",r=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(Ks),l=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),c=`mailto:${dn}?subject=${o}&body=${l}`;return`
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
            <strong>${i(dn)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(c)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(r)}</button>
          </div>
        </article>
      </div>
    `}function NC(){const e=a.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=v(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),r=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",l=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${r.map(c=>`<li>${i(c)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${So}, ${Co}.`:`Saved locally: ${So}, ${Co}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(l)}</button>
          </div>
        </article>
      </div>
    `}function xC(){if(!a.pwaInstallHelpVisible)return"";const e=Cr(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",r=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
            ${r.map(o=>`<li>${i(o)}</li>`).join("")}
          </ul>
          <div class="actions contact-modal-actions">
            <button class="btn primary" type="button" data-action="close-pwa-install-help">${i(s)}</button>
          </div>
        </article>
      </div>
    `}function LC(){if(ep()||a.pwaInstallHelpVisible||!Xc()||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal)return"";const e=_f(),t=!cs&&Cr();return`
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
    `}function AC(){if(ep()||!a.notificationPromptVisible||!vo("visible")||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.pwaInstallHelpVisible||Xc())return"";const e=Df();return`
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
    `}function IC(e,t,n){const s=jr(e),r=Qi(e,t,n),o=xm(Fe(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(r)}" alt="${g(v(s.name))}" />
        <div><strong>${i(v(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function bn(e,t,n,s){const r=jr(e),o=Qi(e,t,n),l=xm(Fe(e,n)),c=`${s||"mascot"}:${e}:${n}:${a.route}:${a.activeTextbookLevel||a.activeJlptLesson||""}`.toLowerCase();return Cm(c)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(v(r.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(v(r.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${g(c)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${g(c)}" aria-label="${g(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(l)}</span>
        </div>
      </div>
    `}function Sm(){try{const e=sessionStorage.getItem(te);return e?JSON.parse(e)||{}:{}}catch{return{}}}function TC(e){try{sessionStorage.setItem(te,JSON.stringify(e||{}))}catch{}}function Cm(e){return e?!!Sm()[e]:!1}function Nm(e){if(!e)return;const t=Sm();t[e]=Date.now(),TC(t);const n=us.get(e);n&&(clearTimeout(n),us.delete(e)),R()}function RC(){const e=new Set;Oo("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||Cm(n)||(e.add(n),us.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const r=window.setTimeout(()=>{us.delete(n),Nm(n)},s);us.set(n,r)});for(const[t,n]of us)e.has(t)||(clearTimeout(n),us.delete(t))}function Qi(e,t="normal",n="welcome"){if(e==="eva")return Vs(Pn(null,_C(t,n)));const s=jr(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function _C(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),r={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return l&&(!n||n==="welcome")?l:r[n]||o[s]||s||"neutral"}function xm(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function PC(e){const t=ae(a.activeCardId);if(!t||!bh[e])return;Dr(t,"srs_rating");const n=re(B(t.id)),s=be(n,e);a.progress.cards[t.id]=s,Dt(n,s,e),ve();const r=Number(a.progress.correctCombo||0),o=Ke(e)?"again":"ok";Ke(e)?(a.progress.totalWrong+=1,a.progress.correctCombo=0,$e({discipline:-.8,trust:-.2},"answer_again"),he("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:r>0}),U(Fe("eva","wrong"))):(H(a.rewards.rewards.correctXp,a.rewards.rewards.correctCoins,"review_success"),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),$e({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),he("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:a.progress.correctCombo}),U(Fe("eva","correct")),a.progress.correctCombo>0&&a.progress.correctCombo%5===0&&(H(a.rewards.rewards.comboXp,0,"combo_bonus"),mt({title:"Combo",message:Fe("leya","combo"),xp:a.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),a.reviewQueueLastKind="card",Vm("kanji",e,{label:t.kanji,level:t.jlpt,dueAt:s.dueAt,cardId:t.id}),a.revealed=!1,a.activeCardId=null,ft(),a.pendingFocus="__scroll-top__",uo("card"),Ie(),A(),Lt("review card post-render effects",()=>{ro(),Pa(o),Ws(),DC(t.lessonId),kc(),V()},{scrollTop:!0})}function Lm(){return!!(a.rewardModal&&a.route!=="review")}function Am(e,t,n){const s=Fi(t,e);if(!s?.id||!fe(s.slug))return;const r=ht(s.slug),o=_t(s.slug),l=re(De(o[s.id]||null)),c=Ke(n)?"forgot":"remember",d=od(l,c);o[s.id]=d,r.review=o,r.currentRoute="review",r.updatedAt=new Date().toISOString(),Dt(l,d,c),ve({skipAchievements:!0});const u=Number(a.progress.correctCombo||0),f=c==="forgot"?"again":"ok";c==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,$e({discipline:-.5,trust:-.1},"kana_answer_again"),he("answer_wrong",{cardId:s.id,kana:s.kana,rating:c,comboLost:u>0},{skipAchievements:!0}),U(Fe("eva","wrong"))):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),$e({trust:.25,discipline:.2,curiosity:.1},"kana_answer_remember"),he("answer_correct",{cardId:s.id,kana:s.kana,rating:c,combo:a.progress.correctCombo},{skipAchievements:!0}),U(Fe("eva","correct"))),a.reviewQueueLastKind="kana",Vm("kana",c,{label:s.kana,course:Up(s.slug),dueAt:d.dueAt,cardId:s.id}),a.revealed=!1,a.activeCardId=null,xs(),ft(),a.pendingFocus="__scroll-top__",uo("kana"),Ie(),A(),Lt("kana review post-render effects",()=>{ro(),Pa(f),Ws()},{scrollTop:a.route==="review"})}function mr(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function MC(e){const t=mr(),n=B(e.id),s=EC(n,"remember"),r=rb(n,s);return`${t.rememberHint}: ${ab(nb(r))}`}function EC(e,t){if(Ke(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),r=Number(e.correct||0),o=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?r/Math.max(r+o,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||r>=2?"good":"hard":c>=88&&r>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(r/3))?"hard":"good"}function Ke(e){return e==="forgot"||e==="again"}function fr(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function Is(e,t={}){const s={...fr(t.level||"",t.lessonId||"",t.exerciseId||"",t),...De(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=Tf(s),Number.isFinite(Number(s.srsStep))?s.srsStep=le(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=ml(s),Im(s)?s:fr(s.level,s.lessonId,s.exerciseId,s)}function Im(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function pa(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([r,o])=>{s[r]=Is(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function KC(e){const t=D(e);return t==="N5"?ne():t==="N4"?X():t==="N3"?q():t==="N2"?W():t==="N1"?ee():null}function bc(e){const t=D(e);return t==="N5"?Qe():t==="N4"?it():t==="N3"?lt():t==="N2"?dt():t==="N1"?pt():[]}function FC(e,t){const n=D(e),s=String(t||"");return!n||!s?null:bc(n).find(r=>r.id===s||r.id===`${n.toLowerCase()}-${s}`||r.id.endsWith(`-${s}`))||null}function Tm(e){const t=D(e);return t==="N5"?js:t==="N4"?ta:t==="N3"?sa:t==="N2"?aa:t==="N1"?la:null}function wc(e,t,n=""){const s=Tm(e),r=D(e),o=String(t||"");if(!s||!r||!o)return null;const l=FC(r,n);if(l){const c=s(l).find(d=>String(d.id)===o);if(c)return c}for(const c of bc(r)){const d=s(c).find(u=>String(u.id)===o);if(d)return d}return null}function ga(e,t){const n=D(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),r=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return r.forEach(l=>{if(e.exerciseSrs[l])return;const c=wc(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const d=fr(n,c.lessonId||"",c.id,c),u=e.exerciseResults?.[l]||null,f=!!e.completedExercises?.[l],h=be(re(d),f||u?.correct?"good":"again");h.level=n,h.lessonId=String(c.lessonId||h.lessonId||""),h.exerciseId=String(c.id||l||""),h.cardId=String(c.cardId||h.cardId||""),h.kanji=String(c.kanji||h.kanji||""),h.type=String(c.type||h.type||""),h.title=c.title||h.title||null,h.prompt=String(c.prompt||h.prompt||""),h.answer=String(c.answer||h.answer||""),h.answerLabel=String(c.answerLabel||h.answerLabel||""),e.exerciseSrs[l]=h,o=!0}),o}function ma(e,t){const n=D(t);if(!e||!n)return!1;const s=bc(n),r=Tm(n);if(!r?.length&&!r)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=Object.entries(e.exerciseSrs);if(!o.length)return!1;const l=new Map;s.forEach(d=>{(r(d)||[]).forEach(u=>{u?.id&&l.set(String(u.id),{exercise:u,lesson:d})})});let c=!1;return o.forEach(([d,u])=>{const f=l.get(String(d));if(!f)return;const{exercise:h,lesson:m}=f,S=Is(u,{level:n,lessonId:m.id,exerciseId:h.id,cardId:h.cardId||"",kanji:h.kanji||"",type:h.type||"",title:h.title||null,prompt:h.prompt||"",answer:h.answer||"",answerLabel:h.answerLabel||""});JSON.stringify(u)!==JSON.stringify(S)&&(e.exerciseSrs[d]=S,c=!0)}),c}function DC(e){if(a.progress.lessonCompletions[e])return;const t=Lc(e);if(!(t.length>0&&t.every(o=>B(o.id).state!=="New")))return;const s=a.rewards.rewards.lessonCompleteXp,r=a.rewards.rewards.lessonCompleteCoins;a.progress.lessonCompletions[e]=new Date().toISOString(),yr("",e,"legacy-srs"),F("lesson_complete"),H(s,r,"lesson_completion"),$e({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),he("lesson_complete",{lessonId:e,xp:s,coins:r}),mt({title:v({ru:"Урок завершён",en:"Lesson complete"}),message:Fe("eva","lessonComplete"),xp:s,coins:r,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),bo("lesson_complete")}function kc(){const e=oe(),t=wn();if(t.goalClaimed||t.reviews<a.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=a.rewards.rewards.comboXp,s=a.rewards.rewards.streakCoins;H(n,s,"daily_goal"),mt({title:_("dailyGoal"),message:Fe("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),a.progress.daily[e]=t}function BC(){const e=Vi(),t=oe();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,a.progress.appOpens=Number(a.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(a.progress.secrets.nightVisit=!0),Rm()}function Rm(){const e=a.progress.streak,t=vu(e.pendingReward);if(!t||oe()<t.availableOn)return!1;e.pendingReward=null;const n=a.rewards.rewards.streakCoins;return F("streak_reward"),H(0,n,`streak:${t.milestone}:claim`),mt({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),V(),A(),!0}function OC(e){if(e==="eva"){a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,$e({warmth:.2,curiosity:.1},"eva_click"),U(Fe("eva","welcome")),V(),A(),R();return}e==="leya"&&U(Fe("leya","combo"))}function _m(){pe(),a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,a.evaRuntime||(a.evaRuntime=Qt()),a.evaRuntime.clickCount=Number(a.evaRuntime.clickCount||0)+1,he("user_clicked_eva",{clickCount:a.evaRuntime.clickCount}),V(),F("notification_soft"),A(),R()}function zC(){if(Z.completed)return;Z.completed=!0,a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,Z.cardId&&(a.progress.writingPractice.cards[Z.cardId]=(a.progress.writingPractice.cards[Z.cardId]||0)+1),$e({curiosity:1,discipline:.8,trust:.4},"writing_complete"),he("writing_complete",{cardId:Z.cardId}),ge("writing_complete",{route:"writing",cardId:Z.cardId||"",source:"practice"});const e=V();A(),e&&R()}function UC(){const e=oe();Vi();const t=JC(),n=vi(a.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(a.progress.dailyBonusPending=null),a.progress.dailyBonusPending={availableOn:Bf(e,1)},A())}function JC(){const e=oe(),t=Vi(),n=vi(a.progress.dailyBonusPending);if(!n||oe()<n.availableOn||a.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;a.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return GC(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,a.progress.dailyBonuses[e]=new Date().toISOString(),F("daily_bonus"),H(a.rewards.rewards.dailyBonusXp,a.rewards.rewards.dailyBonusCoins,"daily_bonus"),$e({warmth:1,discipline:.8},"daily_bonus"),mt({title:_("dailyBonus"),message:Fe("leya","welcome"),xp:a.rewards.rewards.dailyBonusXp,coins:a.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),V(),Yc(),!0}function Vi(){var t;(t=a.progress).visits||(t.visits={});const e=a.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function GC(e,t){const n=Vi();n.streak=e&&ts(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=a.progress.streak.lastStudyDate;s!==t&&(a.progress.streak.current=s&&ts(s,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best||0,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120))}function V(e={}){if(!As().length)return 0;const t=!!e.silent;let n=0;return As().forEach(s=>{if(Lr(s.id)||!HC(s))return;n+=1;const r=s.rewardXp||0,o=s.rewardFragments||0;a.progress.achievements[s.id]={unlockedAt:new Date().toISOString(),rewardXp:r,rewardFragments:o},t||mt({type:"achievement",title:hc(s),message:ym(s),xp:r,coins:o,icon:s.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),H(r,o,`achievement:${s.id}`,{silent:t})}),n}function HC(e){return Pm(e)>=Number(e.target||1)}function Pm(e){if(e.kind==="lessonComplete")return Object.keys(a.progress.lessonCompletions).length;if(e.kind==="correct")return a.progress.totalCorrect;if(e.kind==="learned")return Nc().learned;if(e.kind==="reviews")return xc();if(e.kind==="streak")return Math.max(a.progress.streak.current||0,a.progress.streak.best||0);if(e.kind==="level")return a.progress.level||1;if(e.kind==="moonFragments")return a.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return a.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(a.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return a.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return a.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return a.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(ne().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return Di();if(e.kind==="n5Writing")return Object.keys(ne().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(ne().srsKanji||{}).length;if(e.kind==="n5FinalPass")return ne().finalTest?.passed?1:0;if(e.kind==="n4Opened")return X().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(X().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(X().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(X().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(X().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(X().writingPractice||{}).length;if(e.kind==="n4FinalPass")return X().finalTest?.passed?1:0;if(e.kind==="n3Opened")return q().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(q().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(q().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(q().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(q().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(q().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(q().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return q().finalTest?.passed?1:0;if(e.kind==="n2Opened")return W().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(W().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=qe().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>tn(n.id))?1:0}if(e.kind==="jlpt"){const t=a.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>B(n.id).state==="Mastered")?1:0}return 0}function mt(e){if(!(e?.type==="achievement"&&a.route==="review"&&Oe()>0)){if(!a.rewardModal){a.rewardModal=e,Mm(e);return}if(e.type==="level"){a.rewardQueue.unshift(e);return}a.rewardQueue.push(e)}}function Mm(e){if(Ux(),e?.type==="achievement"){Ia()?F("achievement_unlock"):go()&&zx();return}if(e?.type==="level"){F("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&F("notification_reward")}function H(e,t,n="reward",s={}){const r=!!s.silent,o=a.progress.level||co(a.progress.xp);a.progress.xp+=e,a.progress.moonFragments+=t;const l=qC(n);if(!r&&!l&&e>0&&F("xp_gain"),!r&&!l&&t>0&&F("moon_fragment_gain"),t>0&&(a.progress.totalMoonFragmentsEarned=Number(a.progress.totalMoonFragmentsEarned||0)+t),a.progress.level=co(a.progress.xp),(e||t)&&(a.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80)),a.progress.level>o){if(r)return;F("level_up"),he("level_up",{level:a.progress.level,xp:a.progress.xp,moonFragments:a.progress.moonFragments});const c=jn();mt({type:"level",title:_("levelUp"),message:`${_("level")} ${a.progress.level} - ${c.current}/${c.next} XP - ${a.progress.moonFragments} ${_("coins")}`,xp:0,coins:0,mascot:a.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:a.progress.level,totalXp:a.progress.xp,moonFragments:a.progress.moonFragments})}}function qC(e){return["learn","review"].includes(a.route)&&["review_success","combo_bonus"].includes(e)}function Dt(e,t,n){const s=wn();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Ke(n)&&(s.mistakes+=1),s.minutes=ko(s.reviews*.75+s.learned*1.25,1),a.progress.daily[oe()]=s}function ve(e={}){Rm();const t=oe(),n=a.progress.streak.lastStudyDate;if(n===t)return;const s=!!(n&&ts(n,t)>1&&a.progress.streak.current>0);a.progress.streak.current=n&&ts(n,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120),$e(s?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},s?"streak_lost":"study_streak"),s&&U(Fe("eva","streakLoss")),[1,7,30,100].includes(a.progress.streak.current)&&(a.progress.streak.pendingReward={milestone:a.progress.streak.current,availableOn:Bf(t,1)}),he("streak_up",{streak:a.progress.streak.current,lost:s},{skipAchievements:!!e.skipAchievements}),A()}function Em(){if(a.route!=="stats")return;if(!window.Chart){Fh().then(()=>{a.route==="stats"&&Em()}).catch(r=>console.warn("Chart.js failed to load.",r));return}const e=uL(10),t=e.map(r=>r.slice(5)),n=Fx(),s=Dx(n);fa("activityChart",{type:"bar",data:{labels:t,datasets:[{label:_("learned"),data:e.map(r=>a.progress.daily[r]?.learned||0),backgroundColor:n.green},{label:_("review"),data:e.map(r=>a.progress.daily[r]?.reviews||0),backgroundColor:n.red}]},options:s}),fa("jlptChart",{type:"bar",data:{labels:Object.keys(tf()),datasets:[{label:_("mastered"),data:Object.values(tf()),backgroundColor:n.yellow}]},options:s}),fa("streakChart",{type:"line",data:{labels:t,datasets:[{label:_("streak"),data:e.map(r=>a.progress.streakHistory.find(o=>o.date===r)?.value||(a.progress.daily[r]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),fa("stateChart",{type:"doughnut",data:{labels:Object.keys(ef()),datasets:[{data:Object.values(ef()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),fa("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:_("errors"),data:e.map(r=>a.progress.daily[r]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function fa(e,t){const n=document.getElementById(e);n&&a.charts.push(new Chart(n,t))}function WC(){const e=qn();e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=le(a.writingStep,0,Math.max(0,Bt(e)-1)),Z.cardId!==String(e.id)&&XC(e)),QC(),va(),Yi(),ya(ha(!1)),window.setTimeout(Fm,120)}function qn(){return ae(a.activeCardId)||Cc()[0]||a.cards[0]||null}function XC(e){Z.cardId=String(e?.id||""),Z.strokes=[],Z.currentStroke=[],Z.drawing=!1,Z.activePointerId=null,Z.completed=!1}function QC(){const e=document.getElementById("practiceCanvas");if(!e)return;hr();const t=r=>{r.pointerType==="mouse"&&r.button!==0||(r.preventDefault(),e.setPointerCapture?.(r.pointerId),Z.drawing=!0,Z.activePointerId=r.pointerId,Z.currentStroke=[Km(e,r)],Z.completed=!1,hr())},n=r=>{if(!Z.drawing||r.pointerId!==Z.activePointerId)return;r.preventDefault();const o=Km(e,r),l=Z.currentStroke[Z.currentStroke.length-1];(!l||Hm(l,o)>1.4)&&(Z.currentStroke.push(o),hr())},s=r=>{if(!Z.drawing||r.pointerId!==Z.activePointerId)return;r.preventDefault();const o=VC(Z.currentStroke);o.length&&Z.strokes.push(o),Z.currentStroke=[],Z.drawing=!1,Z.activePointerId=null,hr(),ya(ha(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=r=>r.preventDefault()}function Km(e,t){const n=e.getBoundingClientRect();return{x:le((t.clientX-n.left)*(e.width/n.width),0,e.width),y:le((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function VC(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{Hm(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function hr(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=qn();Gm(t,e),n&&tN(t,e,n),Z.strokes.forEach((s,r)=>Jm(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:r===Z.strokes.length-1})),Z.currentStroke.length&&Jm(t,Z.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function YC(){Z.strokes=[],Z.currentStroke=[],Z.drawing=!1,Z.completed=!1,hr(),ya(ha(!1))}function ZC(){Z.strokes.pop(),Z.currentStroke=[],Z.completed=!1,hr(),ya(ha(!1))}function eN(e=!1){const t=ha(!0);ya(t),e&&(Pa(t.success?"good":"again"),U(t.message),t.success&&zC())}function ha(e){const t=document.getElementById("practiceCanvas"),n=qn(),s=Bt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const r=Z.strokes;if(!r.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=le(Math.round(Math.min(r.length,s)/s*100),0,100),l=e?100:o,c=!!(e&&r.length);let d=p()==="ru"?`Черты: ${r.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${r.length}/${s}. Self-check without recognition.`;return!e&&r.length<s?d=p()==="ru"?`Черта ${r.length+1}/${s}: продолжай по образцу.`:`Stroke ${r.length+1}/${s}: keep following the guide.`:!e&&r.length>s?d=p()==="ru"?`Черты: ${r.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${r.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=yc(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:d}}function Fm(){const e=document.getElementById("strokeCanvas"),t=qn();if(!e||!t)return;cancelAnimationFrame(Z.demoAnimationId);const n=Bt(t),s=460,r=performance.now(),o=l=>{const c=l-r,d=le(Math.floor(c/s),0,n-1),u=le((c-d*s)/s,0,1);a.writingStep=d,va(d,u),Yi(),c<n*s?Z.demoAnimationId=requestAnimationFrame(o):(a.writingStep=n-1,va(a.writingStep,1),Yi())};Z.demoAnimationId=requestAnimationFrame(o)}function Dm(){const e=document.getElementById("strokeCanvas"),t=qn();if(!e||!t)return;cancelAnimationFrame(Z.demoAnimationId);const n=performance.now(),s=520,r=le(a.writingStep,0,Math.max(0,Bt(t)-1)),o=l=>{const c=le((l-n)/s,0,1);va(r,c),c<1&&(Z.demoAnimationId=requestAnimationFrame(o))};Z.demoAnimationId=requestAnimationFrame(o)}function Bm(e){Om(a.writingStep+e,!1)}function Om(e,t){const n=qn();n&&(a.writingStep=le(e,0,Math.max(0,Bt(n)-1)),Yi(),t?Dm():va(a.writingStep,1))}function Yi(){const e=qn();if(!e)return;const t=ka(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${a.writingStep+1}/${Bt(e)}`);const r=document.querySelector(".writing-step-head .label");r&&(r.textContent=t[a.writingStep]||""),Oo(".writing-guide-list li").forEach((o,l)=>o.classList.toggle("is-active",l===a.writingStep))}function va(e=a.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=qn();if(!n||!s)return;const r=n.getContext("2d");Gm(r,n);const o=ba(s);if(!o){Um(r,n,s,e);return}zm(r,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function tN(e,t,n){const s=ba(n);if(!s){Um(e,t,n,a.writingStep);return}zm(e,t,s,{activeIndex:a.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function ba(e){if(!e?.kanji)return null;const t=a.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function yc(e){return!!ba(e)}function Bt(e){const t=ba(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function wa(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function zm(e,t,n,s={}){const r=le(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=nN(n,t,s.padding||22),l=wa(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=l.guide;n.strokeOrder.forEach((f,h)=>{const m=h<r,S=h===r;h>r&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=S?d:m?c:u,e.lineWidth=(S?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(S?1:m?.86:.24),S&&s.progress<1&&(e.globalAlpha*=.45+le(s.progress,0,1)*.55),S&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(f.path)),e.restore(),s.showNumbers&&rN(e,f,o,h+1,S))})}function nN(e,t,n=22){const s=sN(e.viewBox),r=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*r)/2-s.x*r,l=(t.height-s.height*r)/2-s.y*r;return{...s,scale:r,x:o,y:l}}function sN(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,r=109,o=109]=t;return{x:n,y:s,width:Math.max(1,r),height:Math.max(1,o)}}function rN(e,t,n,s,r){const o=aN(t.path);if(!o)return;const l=n.x+o.x*n.scale,c=n.y+o.y*n.scale;iN(e,l,c,s,r)}function aN(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function iN(e,t,n,s,r){e.save(),e.fillStyle=r?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,r?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=r?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Um(e,t,n,s=0){const r=wa(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=r.templateOpacity,e.fillStyle=r.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=p()==="ru"?`Шаг ${s+1}/${Bt(n)} · точной схемы пока нет`:`Step ${s+1}/${Bt(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function Jm(e,t,n={}){const s=t.map(cN).filter(Boolean);if(!e||!s.length)return;const r=wa();if(e.save(),e.strokeStyle=n.color||r.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=dN(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Gm(e,t){if(!e||!t)return;const n=wa();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),oN(e,t)}function oN(e,t){const n=wa();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function ka(e){const t=ba(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,r)=>p()==="ru"?s.description_ru||`Штрих ${r+1} по данным KanjiVG`:s.description_en||`Stroke ${r+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:Bt(e)},(s,r)=>n[r]||lN(e,r))}function lN(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function ya(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Z.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function cN(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function dN(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function Hm(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function uN(){a.charts.forEach(e=>e.destroy()),a.charts=[]}function pN(e,t){const n=new Date;return a.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const r=a.lessons.find(l=>l.id===s.lessonId);if(r&&!Ge(r))return!1;const o=B(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(eo)}function gN(){const e=new Date;return Sc().filter(t=>{const n=B(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(eo)}function mN(){const e=Date.now(),t=[];return[["N5",ne()],["N4",X()],["N3",q()],["N2",W()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([r,o])=>{const l=Is(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!l.dueAt||!Im(l))return;const c=wc(n,r,l.lessonId||"");if(!c)return;const d=String(c?.lessonId||l.lessonId||"");if(!GN(n,d))return;const u=new Date(l.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${r}`,level:String(n||"").toUpperCase(),exerciseId:r,lessonId:d,cardId:String(l.cardId||""),dueAt:u,progress:l})})}),t.sort(ja)}function Zi(){const e=[];return a.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",a.n4Reading],["N3",a.n3Reading],["N2",a.n2Reading],["N1",a.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((r,o)=>{const l={id:String(r.id||`${s.id}:${o}`),prompt:r.prompt||{ru:"",en:""},answer:String(r.answer||""),options:vv(r.options)};e.push({id:String(r.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:l,questions:[l]})})})}),[...e,...Ty()]}function qm(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return Zi().find(r=>String(r.id||"")===n&&(!s||String(r.level||"").toUpperCase()===s))||Zi().find(r=>String(r.id||"")===n)||null}function Wm(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?v(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":Ft(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":Ft(e).map(n=>n.kanji).join(""))}}function $c(e){return 1}function Wn(e){const t=Wm(e);return{...fr(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:$c(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function $a(e,t){const n=Wn(t),s=Is({...n,...e||{}},Wm(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=$c(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(r=>({kanji:String(r?.kanji||""),reading:String(r?.reading||"")})).filter(r=>r.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(r=>String(r)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function Xn(e){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const t=a.progress.readingExercises[String(e.id)]||null;if(t){const r=$a(t,e);return a.progress.readingExercises[String(e.id)]=r,r}const n=Wn(e);return a.progress.readingExercises[String(e.id)]=n,n}function Ts(e,t){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const n=$a(t||{},e);return a.progress.readingExercises[String(e.id)]=n,n}function Xm(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function vr(e=""){var r;if(!a.progress)return!1;const t=D(e);(r=a.progress).readingExercises||(r.readingExercises={});const n=new Map(Zi().filter(o=>!t||D(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(a.progress.readingExercises).forEach(([o,l])=>{const c=n.get(String(o));if(!c)return;const d=$a(l,c),u=Xm(d)?d:Wn(c);JSON.stringify(l)!==JSON.stringify(u)&&(a.progress.readingExercises[String(o)]=u,s=!0)}),s}function fN(){const e=Date.now();return Zi().map(t=>{if(!HN(t.level))return null;const n=a.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=$a(n,t);if(a.progress.readingExercises[String(t.id)]=s,!Xm(s))return null;const r=s.dueAt?new Date(s.dueAt).getTime():0;return!r||r>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:r,progress:s,exercise:t,card:null}}).filter(Boolean).sort(ja)}function hN(){const e=Date.now();return["hiragana","katakana"].flatMap(t=>{if(!fe(t))return[];const n=_t(t),s=Object.entries(n).map(([r,o])=>({cardId:r,...De(o)}));return rd(s,e).initial.map(r=>{const o=Fi(r.cardId,t);if(!o?.id||o.slug!==t)return null;const l=zp(t,o.kana);return dc({kind:"kana",key:o.id,courseSlug:t,cardId:o.id,kana:o.kana,romaji:l?.romaji||"",strokes:l?.strokes||0,character:l,progress:r,dueAt:r.dueAt?Date.parse(r.dueAt):0})}).filter(Boolean)}).sort(ja)}function jc(){const t=[...gN().map(s=>{if(!s?.id)return null;const r=B(s.id);return{kind:"card",key:`card:${s.id}`,card:s,cardId:String(s.id),dueAt:r.dueAt?new Date(r.dueAt).getTime():0,progress:r}}).filter(Boolean),...hN()].sort(ja),n=[...mN(),...fN()].sort(ja);return ua(sb(t,n,gl))}function Qm(e=jc()){const t=Object.freeze(ua(e).map(n=>n.key).filter(Boolean));a.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString(),results:{remember:0,forgot:0,items:[]}}}function vN(){const e=jc();if(a.route!=="review")return e;a.reviewSession||Qm(e);const t=new Map(e.map(r=>[r.key,r])),n=Array.isArray(a.reviewSession?.keys)?a.reviewSession.keys:[],s=n.map(r=>t.get(r)).filter(Boolean);return!n.length&&e.length?(Qm(e),e):ua(s)}function Vm(e,t,n={}){if(a.route!=="review"||!a.reviewSession)return;const s=Ke(t)?"forgot":"remember",r=a.reviewSession.results||{remember:0,forgot:0,items:[]};r.remember=Number(r.remember||0),r.forgot=Number(r.forgot||0),r[s]+=1,r.items=Array.isArray(r.items)?r.items:[],r.items.push({kind:e,rating:s,label:String(n.label||n.kana||n.kanji||n.cardId||""),course:String(n.course||n.level||""),dueAt:n.dueAt||null}),a.reviewSession.results=r}function bN(){const e=Date.now(),t=Sc().filter(s=>{const r=B(s.id),o=r.dueAt?new Date(r.dueAt).getTime():0;return r.state==="Learning"&&o>e}).length,n=Ym().filter(s=>{const r=s.dueAt?new Date(s.dueAt).getTime():0;return s.state==="Learning"&&r>e}).length;return t+n}function Ym(){return["hiragana","katakana"].flatMap(e=>fe(e)?Object.values(_t(e)).map(t=>De(t)):[])}function wN(){return Sc().filter(e=>B(e.id).state!=="New").length+Ym().filter(e=>e.state!=="New").length}function Oe(){if(Za&&ei!==null)return ei;const e=jc().length;return Za&&(ei=e),e}function ja(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?B(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?B(t.card.id):t.progress,r=ki(n),o=ki(s);if(r!==o)return o-r;if(e.kind!==t.kind){const l=e.kind==="card"||e.kind==="kana",c=t.kind==="card"||t.kind==="kana";return l!==c?l?-1:1:String(e.kind||"").localeCompare(String(t.kind||""))}return e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function Sc(){const e=new Set,t=[];return Te.forEach(n=>{kf(n).forEach(s=>{const r=String(s?.id||"");!r||e.has(r)||(e.add(r),t.push(s))})}),t.sort(eo)}function Cc(){const e=dL();return a.cards.filter(t=>{const n=a.lessons.find(r=>r.id===t.lessonId);if(n&&!Ge(n))return!1;const s=B(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(eo)}function eo(e,t){const n=B(e.id),s=B(t.id),r=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(r!==o)return r-o;if(r>0){const l=ki(n),c=ki(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function kN(){const e=a.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return a.cards.filter(t=>{const n=Sa(t.id),s=[t.kanji,K(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,Ac(t),t.jlpt,Gc(t.lessonId),Ra(t),n.radical,v(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(r=>[r.word,r.reading,r.romaji,r.translation,Zn(r)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(a.filters.jlpt==="all"||t.jlpt===a.filters.jlpt)&&(a.filters.radical==="all"||n.radical===a.filters.radical)&&(a.filters.favorites==="all"||!!a.progress.favorites[t.id])&&yN(t.strokes,a.filters.strokes)})}function yN(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function Nc(){const e=a.cards.length,t=a.cards.filter(s=>B(s.id).state!=="New").length,n=a.cards.filter(s=>B(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:Cc().length,completion:M(n,e)}}function xc(){return Object.values(a.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function $N(){return(a.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Zm(){const e=a.progress.totalCorrect+a.progress.totalWrong;return e?Math.round(a.progress.totalCorrect/e*100):0}function ef(){const e={New:0,Learning:0,Review:0,Mastered:0};return a.cards.forEach(t=>{e[B(t.id).state]+=1}),e}function tf(){const e={};return a.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),B(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function wn(){const e=oe();return a.progress.daily[e]||(a.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),a.progress.daily[e]}function Lc(e){return a.cards.filter(t=>t.lessonId===e)}function jN(){return a.cards.filter(e=>{const t=a.lessons.find(n=>n.id===e.lessonId);return(!t||Ge(t))&&B(e.id).state==="New"})}function ae(e){const t=String(e||"");return t&&a.cards.find(n=>String(n.id)===t||String(n.kanji||"")===t||km(n)===t)||null}function SN(e){return ae(e)}function CN(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function Sa(e){return a.kanjiMeta[String(e)]||{}}function to(e){const t=a.kanjiHints[String(e)]||{};return{hint:v(t.hint||{})||Fe("leya","hint"),mnemonic:v(t.mnemonic||{})||""}}function NN(e){e&&(a.progress.favorites[e]?delete a.progress.favorites[e]:a.progress.favorites[e]=new Date().toISOString(),A(),R())}function ft(e=null){a.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function xN(e){const t=String(e||"");a.readingCheck.cardId!==t&&ft(t)}function nf(){const e=ae(a.readingCheck.cardId||a.activeCardId);if(!e)return;Br(e,"reading_check"),ro();const t=AN(a.readingCheck.value),n=LN(e),s=t.some(c=>n.normalized.has(c)),r=t.length>0,o=r&&s?"correct":"wrong",l=r?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";a.readingCheck={cardId:e.id,value:a.readingCheck.value,status:o,message:l},F(o==="correct"?"answer_correct":"answer_wrong"),Ie(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function LN(e){const t=Ca(e),n=[...Qn(t.onyomi.kana),...Qn(t.kunyomi.kana),...Qn(e.hiragana)].filter(Boolean),s=n.filter((r,o)=>n.indexOf(r)===o);return{normalized:new Set(s.map(sf).filter(Boolean))}}function AN(e){return String(e||"").split(/[\/,、，\s]+/u).map(sf).filter(Boolean)}function sf(e){const t=rf(String(e||"").normalize("NFKC")).replace(/[・･.\-]/gu,"").replace(/\s+/gu,"");return IN(t).trim()}function rf(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function IN(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=TN(t.slice(-1));continue}t+=n}return t}function TN(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎじぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function af(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=a.n5KanjiCatalog:t==="N4"?n=a.n4KanjiCatalog:t==="N3"?n=a.n3KanjiCatalog:t==="N2"&&(n=a.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const of={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},lf={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Ca(e){const t=af(e);if(t&&t.readings){const r=t.readings,o=no(r.onyomi,r.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),l=no(r.kunyomi,r.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||l.kana)return{onyomi:o,kunyomi:l}}const n=no(e?.onyomi,e?.onyomi_romaji),s=no(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function Qn(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/／,，、・･;；]+/u).map(n=>n.trim()).filter(Boolean)}function no(e,t="",n=""){const s=Qn(e).length?Qn(e):Qn(n),r=Qn(t),o=s.map((l,c)=>({kana:Y(l),romaji:RN(l,r[c])})).filter(l=>l.kana||l.romaji);return{kana:o.map(l=>l.kana).filter(Boolean).join(" / "),romaji:o.map(l=>l.romaji).filter(Boolean).join(" / ")}}function RN(e,t){const n=cf(e);return n?t&&df(t)===df(n)?t:n:t||""}function cf(e){const t=[..._N(e)];let n="",s=!1;for(let r=0;r<t.length;r+=1){const o=t[r],l=t[r+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=PN(n);u&&(n+=u);continue}let c="";const d=o+l;if(lf[d])c=lf[d],r+=1;else if(of[o])c=of[o];else if(/[a-zA-Z0-9]/u.test(o))c=o.toLowerCase();else{s=!1;continue}if(s){const u=c.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=c}return n}function _N(e){return rf(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function PN(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function df(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/gu,"").replace(/[^a-z0-9]+/gu,"")}function uf(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function so(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function Ac(e){const t=Ca(e);return[`${so("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${so("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" · ")}function Ic(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return gf(t)||pf(e)}function pf(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=MN(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function gf(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function MN(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function EN(e){return!!(Ic(e)||Tc(e))}function Tc(e){if(!e)return"";const t=Ca(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function KN(e){const t=Ca(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function br(e,t=""){const n=CA(KN(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function FN(e){return br(e).length>0}function DN(e){return Qn(e)[0]||String(e||"").trim()}function Rc(){if(a.route!=="learn"&&a.route!=="review")return;const e=560-(Date.now()-Tr);if(e>0){window.setTimeout(Rc,e);return}const t=ae(a.activeCardId);if(!t)return;const n=br(t).map(o=>`${o.kind}:${o.kana}`).join("|")||Tc(t),s=gf(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const r=`${a.route}:${t.id}:${n||s}`;r!==yd&&(yd=r,mf(t,{silent:!0}))}function ro(){Qa+=1,Nt="idle",ao(),Pc()}function _c(){return Qa+=1,Qa}function et(e){return e===Qa}function Pc(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function ao(){qt&&(qt.pause(),qt.currentTime=0,qt=null)}function mf(e,t={}){const n=_c();let s=null;const r=()=>et(n)?(s||(s=ff(e,{...t,requestId:n})),s):Promise.resolve(!1);return hf(e,{kind:"cycle",silent:t.silent,fallback:r,requestId:n})?Promise.resolve(!0):r()}function ff(e,t={}){const n=t.requestId||_c();if(!et(n))return Promise.resolve(!1);const s=Ic(e);if(!s||(Pc(),ao(),!et(n)))return Promise.resolve(!1);Nt="audio";const r=new Audio(s);return qt=r,r.preload="auto",r.onended=()=>{qt===r&&(qt=null,et(n)&&(Nt="idle"))},r.onerror=()=>{et(n)&&(t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:s}))},r.play().then(()=>et(n)&&qt===r).catch(o=>(et(n)&&(qt===r&&(qt=null,Nt="idle"),t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:s,error:o})),!1))}function hf(e,t={}){const n=t.requestId||_c();ao(),Nt="tts-pending";let s=null;const r=typeof t.fallback=="function"?()=>et(n)?(s||(s=t.fallback({...t,requestId:n})),s):Promise.resolve(!1):null,o=Y(t.text||""),l=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${l}`,d=br(e);let u=null;if(!o){const x=NA(d,$d.get(c)??-1,l);u=x.item,$d.set(c,x.cursor)}const f=o||u?.kana||DN(Tc(e));let h=!1;if(!qf(f,{onStart:()=>{if(!et(n)||Nt==="audio"){Pc();return}h=!0,Nt="tts",ao()},onEnd:()=>{et(n)&&Nt==="tts"&&(Nt="idle")},onError:x=>{!et(n)||h||Nt==="audio"||(t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:x}),r?.())}}))return et(n)&&r?.(),!r&&et(n)&&(Nt="idle"),!r&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:pf(e)}),!1;if(!et(n))return!1;const S=t.label||(u?fc(u):"TTS");return t.silent||U(`${e?.kanji||""} ${S}: ${f}`.trim()),!0}function BN(e,t){U(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Ge(e){return!!e}function io(e){return a.rewards?.lessonUnlocks?.[e?.id]||1}function vf(e){if(!e||!Ge(e))return"locked";const t=Lc(e.id);return t.length?!!a.progress.lessonCompletions?.[e.id]||t.every(r=>{const o=B(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(r=>{const o=B(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function Mc(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function Ec(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function ON(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g(Ec(e))}"></span>`}function zN(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${Mc(e)}">${i(Ec(e))}</span>`}function kn(e){const t=String(e||"").toUpperCase();return a.jlptLessons.find(n=>n.jlpt===t)||null}function Ot(e){const t=String(e||"").toUpperCase();return a.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function Na(e){const t=String(e||"").toLowerCase();return a.kanaCatalog?.courses?.find(n=>n.slug===t)||null}function Rs(e){const t=String(e||"").toLowerCase();return a.kanaCourses?.[t]||null}function Vn(){return a.progress.kanaCourses=ad(a.progress.kanaCourses||null),a.progress.kanaCourses}function ht(e){return IA(Vn(),e)}function oo(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim();if(!fe(n)||!s)return;const r=ht(n),o=new Date().toISOString();let l=!1;r.currentRoute!==s&&(r.currentRoute=s,l=!0),r.updatedAt||(r.updatedAt=o,l=!0),l&&A()}function UN(e){const t=String(e||"").toLowerCase(),n=Na(t);if(!n||!fe(t))return Promise.resolve(null);if(a.kanaCourses[t])return Promise.resolve(a.kanaCourses[t]);if(a.kanaCourseLoading[t])return a.kanaCourseLoading[t];a.kanaCourseErrors[t]=null;const s=Je(n.course_file).then(r=>(a.kanaCourses[t]=r,a.kanaCourseLoading[t]=null,r)).catch(r=>{throw a.kanaCourseLoading[t]=null,a.kanaCourseErrors[t]=r,r});return a.kanaCourseLoading[t]=s,s}function yn(e){const t=String(e||"").toUpperCase();return t==="N5"?ne():t==="N4"?X():t==="N3"?q():t==="N2"?W():t==="N1"?ee():null}function JN(e,t,n="open"){const s=D(e),r=String(t||"");if(!s||!r)return!1;const o=yn(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[r])?!1:(o.viewedLessons[r]=new Date().toISOString(),!0)}function GN(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!1;const r=yn(n);return r?!!(r.viewedLessons?.[s]||r.completedLessons?.[s]):!1}function xa(e,t="open"){var s;const n=D(e);return!n||((s=a.progress).viewedReadingLevels||(s.viewedReadingLevels={}),a.progress.viewedReadingLevels[n])?!1:(a.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function HN(e){const t=D(e);return t?!!a.progress.viewedReadingLevels?.[t]:!1}function Kc(e){const t=Ot(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function bf(e){const t=String(e||"").toUpperCase(),n=yn(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const s=Ot(t),r=zt(t),o=Math.max(Number(s?.lessonCount||0),r.length||0),l=En(t);return o>0&&l>=o}function jt(e){const t=String(e||"").toUpperCase();if(Te.includes(t)||a.progress.unlockedJlptLevels&&a.progress.unlockedJlptLevels.includes(t))return!0;if(!Ot(t))return t==="N5";const s=Kc(t);return s.length?s.every(r=>bf(r)):!0}function wf(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function $n(e){const t=Kc(e);return t.length?p()==="ru"?`Откроется после завершения ${wf(t)}.`:`Unlocks after completing ${wf(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function zt(e){const t=D(e);if(!t)return[];if(t==="N5"&&a.n5Textbook?.items?.length)return a.n5Textbook.items;if(t==="N4"&&a.n4Textbook?.items?.length)return a.n4Textbook.items;if(t==="N3"&&a.n3Textbook?.items?.length)return a.n3Textbook.items;if(t==="N2"&&a.n2Textbook?.items?.length)return a.n2Textbook.items;if(t==="N1"&&a.n1Textbook?.items?.length)return a.n1Textbook.items;const n=Ot(t),s=a.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),r=n?(n.lessonIds||[]).map(d=>a.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(r.map(d=>d.id)),l=s.filter(d=>!o.has(d.id)),c=Math.max(n?n.lessonCount||r.length:s.length,r.length);return[...r,...l].slice(0,c||s.length)}function Fc(e){const t=D(e);if(!t)return"";const n=zt(t);if(!n.length)return"";const s=ax(t);if(s?.lessonId&&po(t,s.lessonId))return s.lessonId;const r=yn(t)?.currentLessonId||"";if(r&&po(t,r))return r;const o=t==="N5"?ne().completedLessons||{}:t==="N4"?X().completedLessons||{}:t==="N3"?q().completedLessons||{}:t==="N2"?W().completedLessons||{}:a.progress.lessonCompletions||{},l=n.filter(c=>o[c.id]);return l.length?(l.sort((c,d)=>{const u=Date.parse(o[d.id]||"")||0,f=Date.parse(o[c.id]||"")||0;return u!==f?u-f:(d.order||0)-(c.order||0)}),l[0]?.id||n[0]?.id||""):n[0]?.id||""}function lo(e,t=""){const n=D(e);if(!n||!kn(n))return;if(!jt(n)){a.activeTextbookLevel=n,a.activeJlptLesson=n,at("textbooks",null,n),U($n(n));return}const s=a.route,r=String(t||"")||Fc(n),o=["N5","N4","N3","N2"].includes(n),l=r?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(r)}`:`#textbooks/${encodeURIComponent(n)}`;a.route="textbooks",a.activeTextbookLevel=n,a.activeJlptLesson=n,a.activeTextbookSubroute=r||null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=!o&&r?`#textbook-lesson-${r}`:null,s!=="eva-room"&&(a.evaRoomShopOpen=!1),r&&St(n,r,"open_jlpt"),ft(),vt(l),bs(),R()}function qN(e){return e?kn(e.jlpt):null}function wr(e){const t=String(e||"").toUpperCase();return a.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function _s(){return a.progress.jlptLessonPractice=Lu(Js().jlptLessonPractice,a.progress.jlptLessonPractice||{}),a.progress.jlptLessonPractice}function kr(e){if(!e?.drills?.length)return null;const t=_s(),n=t.activeIds[e.jlpt],s=e.drills.find(r=>r.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function WN(e){const t=wr(a.activeJlptLesson),n=kr(t);if(!n||!n.tiles[e])return;const s=_s(),r=s.selected[n.id]||[],o=n.blanks.flatMap(l=>l.answer||[]).length;r.includes(e)||r.length>=o||(s.selected[n.id]=[...r,e],s.checked[n.id]=!1,s.results[n.id]=null,A(),R())}function XN(){const e=kr(wr(a.activeJlptLesson));if(!e)return;const t=_s();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,A(),R()}function QN(){const e=kr(wr(a.activeJlptLesson));if(!e)return;const t=_s();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,A(),R()}function VN(){const e=kr(wr(a.activeJlptLesson));if(!e)return;const t={...Bc(),...Dc()},n=_s(),s=n.selected[e.id]||[],r=e.blanks.flatMap(c=>c.answer||[]),o=r.reduce((c,d,u)=>{const f=e.tiles[s[u]];return(!f||f.kanji!==d)&&c.push(u),c},[]),l=s.length===r.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:o,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),H(8,1,`jlpt_practice:${e.id}`),F("answer_correct")):l||F("answer_wrong"),A(),R()}function YN(){var o,l,c,d,u,f;const e=wr(a.activeJlptLesson),t=kr(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],r=_s();r.activeIds[e.jlpt]=s.id,(o=r.selected)[l=s.id]||(o[l]=[]),(c=r.checked)[d=s.id]||(c[d]=!1),(u=r.results)[f=s.id]||(u[f]=null),A(),R()}function kf(e){const t=String(e||"").toUpperCase();return t?a.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function Dc(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function Bc(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function co(e){const t=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=La(n,t)&&n<100;)s-=La(n,t),n+=1;return n}function jn(){const e=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=a.progress.xp;for(;n>=La(t,e)&&t<100;)n-=La(t,e),t+=1;const s=La(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:M(n,s)}}function La(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function ZN(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:a.progress,customization:a.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${oe()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),ge("progress_export",{route:a.route,source:"manual"}),U(_("export"))}function ge(e,t={},n={}){return JA(e,t,n)}function on(e="learn",t={}){ge("learning_start",{route:a.route,source:e,...t},{dedupeKey:"learning_start"})}function yr(e,t,n="textbook"){const s=D(e),r=String(t||"");ge("lesson_complete",{route:a.route,level:s,lessonId:r,source:n},{dedupeKey:`${s||"legacy"}:${r}`})}function uo(e="review"){if(a.route!=="review"||Oe()>0)return;const t=a.reviewSession?.startedAt||"current";ge("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function Aa(e,t,n="final-test"){const s=D(e);ge("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&ge("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function ex(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&a.rewardModal||null}}function D(e){const t=String(e||"").toUpperCase();return Te.includes(t)?t:""}function tt(e){if(!e||typeof e!="object")return null;const t=D(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function tx(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=D(n),o=tt({...typeof s=="object"&&s?s:{},level:r||n});r&&o&&(t[r]=o)}),t}function Ps(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=String(n||"").trim();if(r){if(typeof s=="string"&&s.trim()){t[r]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[r]=o;return}s&&(t[r]=new Date().toISOString())}}),t}function po(e,t){const n=D(e),s=String(t||"");return!n||!s?!1:zt(n).some(r=>r.id===s)}function nx(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!!n;const r=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return r.has(s)||n!=="N5"&&o.has(s)?!0:zt(n).some(l=>l.id===s)}function sx(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!1;const r=ai(n);return r==="ready"||r==="error"||r==="incomplete"?!1:/^[A-Za-z0-9_-]+$/.test(s)}function rx(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim().toLowerCase();if(!fe(n))return!1;if(!s)return!0;const r=Rs(n);if(r)return["review","final","final-test","reference","sources"].includes(s)||r.lessons?.some(c=>c.id===s)||r.reading_practice?.some(c=>c.id===s);const o=Na(n),l=Number(o?.lesson_count||(n==="hiragana"?10:11));if(/^lesson-\d+$/i.test(s)){const c=Number(s.replace(/\D+/g,""));return c>=1&&c<=l}return/^practice-[1-5]$/i.test(s)?!0:["review","final","final-test","reference","sources"].includes(s)}function yf(e){return zt(e)[0]?.id||""}function ax(e=""){const t=D(e);if(t){const r=tt(a.progress.lastOpenedJlptLessons?.[t]||null)||(tt(a.progress.lastOpenedJlptLesson||null)?.level===t?tt(a.progress.lastOpenedJlptLesson||null):null);return r&&po(t,r.lessonId)?r:null}const n=[tt(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(r=>tt(r)).filter(Boolean)].filter(Boolean);return n.sort((r,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(r.updatedAt||"")||0)),n.find(r=>po(r.level,r.lessonId))||null}function ix(e=""){const t=D(e);if(t)return tt(a.progress.lastOpenedJlptLessons?.[t]||null)||(tt(a.progress.lastOpenedJlptLesson||null)?.level===t?tt(a.progress.lastOpenedJlptLesson||null):null);const n=[tt(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(s=>tt(s)).filter(Boolean)].filter(Boolean);return n.sort((s,r)=>(Date.parse(r.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function ox(e){const t=D(e);if(!t)return"";const n=Te.indexOf(t);return n>=0&&n<Te.length-1?Te[n+1]:""}function St(e,t,n="open"){var h;const s=D(e),r=String(t||"");if(!s||!r)return null;const o={level:s,lessonId:r,updatedAt:new Date().toISOString(),source:n},l=tt(a.progress.lastOpenedJlptLessons?.[s]||null),c=tt(a.progress.lastOpenedJlptLesson||null);(h=a.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),a.progress.lastOpenedJlptLessons[s]=o,a.progress.lastOpenedJlptLesson=o;const d=JN(s,r,n),u=yn(s);return u&&u.currentLessonId!==r&&(u.currentLessonId=r),(!l||l.lessonId!==r||l.level!==s||c?.lessonId!==r||c?.level!==s||d)&&A(),o}function Ut(e,t="btn ghost"){const n=D(e),s=ox(n);if(!n||!s)return"";const r=yf(s);if(!r)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(r)}">${i(o)}</button>`}function ln(){return D(a.activeJlptLesson)||D(a.activeTextbookLevel)||D(a.jlptLessons.find(e=>jt(e.jlpt))?.jlpt)||D(a.jlptLessons[0]?.jlpt)||"N5"}function lx(e,t={}){const n=String(e||a.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(D(t.level||a.activeTextbookLevel||ln())||ln())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(D(t.level||a.activeJlptLesson||ln())||ln())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?a.route||"home":n||"home"}function cx(e=a.route,t={}){const n=new URL(location.href);return n.search="",n.hash=lx(e,t),n.href}function dx(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=D(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=p()==="ru",o={textbooks:r?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:r?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:r?"Урок Flash Kanji":"Flash Kanji lesson",srs:r?"Повторение Flash Kanji":"Flash Kanji review",stats:r?"Статистика Flash Kanji":"Flash Kanji stats",achievements:r?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function ux(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=D(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=s?Ot(s):null,o=t.lesson||(s?kn(s):null),l=p()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=v(r?.displayTitle||r?.title||{}),d=Number(r?.lessonCount||0),u=Number(r?.kanjiCount||0);return l?`${c||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${c||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const c=v(o?.title||{}),d=v(o?.summary||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?vx(t.reward||a.rewardModal||{}):"Flash Kanji."}function px(){return p()==="ru"?"Поделиться":"Share"}function Yn(e=a.route,t={}){const n=D(t.level||""),s=String(t.lessonId||t.lesson?.id||""),r=t.label||px();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${gx()}</span>
        <span>${i(r)}</span>
      </button>
    `}function gx(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function $f(e){return e==="youtube"?`
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
    `}async function mx(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await yx(e.text,e.url,n)?"copy":"failed"}async function fx(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=t.reward||a.rewardModal||null,r={section:n,title:dx(n,t),text:ux(n,t),url:cx(n,t),files:[]};if(n==="achievement"||s){const o=await bx(s||{});o&&typeof File<"u"&&(r.files=[new File([o],`flash-kanji-achievement-${a.progress.level}.png`,{type:"image/png"})])}return r}async function jf(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||a.activeJlptLesson||a.activeTextbookLevel||""),ge("share_opened",{route:n,level:D(s.level)||"",source:"share"});const r=await fx(n,s),o=await mx(r,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(ge("share_completed",{route:n,source:r.files?.length?"file":"web-share"}),!0):o==="copy"?(ge("share_link_copied",{route:n,source:"copy"}),ge("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||U(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function hx(){await jf("achievement",{reward:a.rewardModal||{},toastKey:"shareCopied"})}function vx(e={}){const t=_("shareFallback"),n=e.level||a.progress.level,s=jn(),r=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||a.progress.xp,o=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments;return`${t}: ${_("level")} ${n}, ${r} XP, ${o} Moon Fragments.`}async function bx(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const r=s.getContext("2d");if(!r)return null;wx(r,1200,630);const o=e.level||a.progress.level,l=jn(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||a.progress.xp,d=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments,u=e.mascot||(a.progress.level%2===0?"leya":"eva"),f=Qi(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,m]=await Promise.all([Sf("assets/logo.webp"),f?Sf(f):Promise.resolve(null)]);return h&&Cf(r,h,58,48,330,116),m&&Cf(r,m,780,95,330,450),r.fillStyle="#f7f4ee",r.font="900 58px system-ui, sans-serif",r.fillText(_("levelUp"),64,230),r.font="900 110px 'Yu Mincho', serif",r.fillStyle="#ffe15a",r.fillText(`${_("level")} ${o}`,64,340),r.font="800 38px system-ui, sans-serif",r.fillStyle="#f7f4ee",r.fillText(`${c} XP`,70,425),r.fillText(`${d} Moon Fragments`,70,482),r.fillStyle="rgba(255,255,255,0.74)",r.font="700 28px system-ui, sans-serif",r.fillText("Flash Kanji | JLPT Japanese learning",70,558),r.strokeStyle="rgba(255, 225, 90, 0.7)",r.lineWidth=3,r.strokeRect(34,30,1132,570),kx(s)}function wx(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let r=-t;r<t*2;r+=38)e.beginPath(),e.moveTo(r,0),e.lineTo(r+t,n),e.stroke()}function Sf(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function Cf(e,t,n,s,r,o){const l=Math.min(r/t.naturalWidth,o/t.naturalHeight),c=t.naturalWidth*l,d=t.naturalHeight*l;e.drawImage(t,n+(r-c)/2,s+(o-d)/2,c,d)}function kx(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function yx(e,t,n="shareLinkCopied"){const s=await Nf(`${e}
${t}`);return U(s?_(n):e),s}async function Nf(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function $x(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());a.progress=hu(Js(),n.progress||n),Fr(),n.customization&&(a.customization={...xn(),...n.customization,selected:{...xn().selected,...n.customization.selected||{}}},zs()),Us(),$r(),A(),Sn(),U(_("import")),R()}catch(n){console.error(n),U("Invalid JSON")}finally{e.target.value=""}}function jx(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=a.progress.settings;a.progress=Js(),a.progress.settings=e,a.finalTestModal=null,a.finalTestBusy=!1,Fr(),$r(),A(),R()}function Sx(){a.progress.settings.theme=a.progress.settings.theme==="dark"?"light":"dark",a.progress.settings.themeManuallySelected=!0,Sn(),A(),R()}function Cx(){a.progress.settings.language=p()==="ru"?"en":"ru",a.progress.settings.languageAutoDetected=!1,a.progress.settings.languageManuallySelected=!0,A(),R()}function xf(){a.progress.settings.sound=!An(a.progress.settings.sound,!0),a.progress.settings.uxSound=a.progress.settings.sound,$r(),Oc(),A(),U(a.progress.settings.sound?"♪":"×")}function Nx(){xf()}function Ia(){return window.FlashKanjiSound||null}function xx(){try{Ia()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function $r(){const e=Ia();!e||!a.progress?.settings||(e.setSoundEnabled?.(An(a.progress?.settings?.sound,!0)),e.setSoundVolume?.(mo()))}function go(){return An(a.progress?.settings?.sound,!0)}function Oc(){const e=_e('[data-action="sound"]');if(!e)return;const t=An(a.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=Lx(t)}function Lx(e){return e?`
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
      `}function Ax(e){return e?`
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
      `}function Ix(){const e=_e('[data-action="notification-center"]');if(!e)return;const t=a.notificationPrompt||Ea(),n=!!(t.docked||a.notificationPromptVisible||vo("header")),s=!!a.notificationPromptVisible,r=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",r),e.title=r,e.innerHTML=Ax(s)}function zc(){const e=_e('[data-action="toggle-header-socials"]');if(!e)return;const t=Uc(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function Lf(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),zc())}function Uc(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function mo(){const e=Number(a.progress?.settings?.uxVolume);return Number.isFinite(e)?le(e,0,1):.75}function Tx(e){const t=le(Number(e),0,1);a.progress.settings.uxVolume=t,$r(),A()}function F(e){if(!go())return!1;const t=()=>{try{if(!!Ia()?.playSound?.(e)){Tr=Date.now();return}qc(String(e))}catch(n){console.warn("UX sound failed.",n),qc(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function Sn(){document.documentElement.dataset.theme=a.progress.settings.theme,document.documentElement.dataset.customTheme=a.customization?.selected?.theme||"theme_default_dark";const e=en();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",Jc(e?.file||"assets/bg/bg_study_hub.webp"));const t=ok();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a.progress.settings.theme==="light"?"#f8f7f2":"#08080c"),_x()}function Rx(){return["localhost","127.0.0.1","::1",""].includes(window.location.hostname)}function _x(){Rx()&&(window.FLASH_KANJI_EVA_ROOM_DEBUG={getBackground:()=>{const e=en();return{selectedCustomization:a.customization?.selected?.background||null,selectedProgress:a.progress?.selectedEvaRoomBackground||null,equippedProgress:a.progress?.shop?.equipped?.background||null,currentId:e?.id||null,currentFile:e?.file||null,appRoomCss:document.documentElement.style.getPropertyValue("--app-room-bg"),sceneCss:document.querySelector(".eva-vn-scene")?.style.getPropertyValue("--eva-bg")||"",customRoomDataset:document.documentElement.dataset.customRoom||"",backgrounds:Ni().map(t=>({id:t.id,file:t.file,defaultUnlocked:!!t.defaultUnlocked}))}}})}function Jc(e){const t=String(e||"assets/bg/bg_study_hub.webp").replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function _(e){return a.i18n?.ui?.[e]?.[p()]||a.i18n?.ui?.[e]?.ru||e}function p(){return a.progress?.settings?.language||"ru"}function v(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function Px(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Ta(e){return p()==="en"&&a.lessonTranslations[e.id]?.title_en||e.title}function Mx(e){return p()==="en"&&a.lessonTranslations[e.id]?.summary_en||e.summary}function Gc(e){const t=a.lessons.find(n=>n.id===e);return t?Ta(t):""}function K(e){return He(e,p())}function He(e,t=p()){if(!e)return"";const n=af(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||a.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Ra(e){return p()==="en"?a.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Zn(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=a.vocabulary.find(n=>n.word===e.word||Hc(n.romaji)===Hc(e.romaji));return t?.translation_en?t.translation_en:kh[Hc(e.romaji)]||e.translation||""}function _a(e){const t=Zn(e);return p()==="ru"?`Какое слово подходит к значению «${t}»?`:`Which word matches "${t}"?`}function Q(e){return e?p()==="en"?String(e.answerEn||e.answer_en||e.answer||""):String(e.answer||e.answerRu||""):""}function ze(e){if(!e)return[];const t=p()==="en"&&Array.isArray(e.optionsEn)&&e.optionsEn.length?e.optionsEn:e.options;return Array.isArray(t)?t.map(String).filter(Boolean):[]}function Hc(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function jr(e){return a.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Fe(e,t){const n=e==="eva"?Ex(t):"";if(n)return n;const s=jr(e).dialogs?.[t]||jr(e).dialogs?.welcome||{},r=s[p()]||s.ru||[""];return nt(r)}function Ex(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=Kx(t),s=[...a.evaAutonomyLines||[],...Ii()].filter(l=>{const c=v(l?.text||{});if(!c)return!1;const d=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||d.some(h=>n.includes(h))))return!1;const f=Af(c);return f.length>=12&&f.length<=132}),r=s.filter(l=>!Ko.includes(l.id)),o=nt(r.length?r:s);return o?(o.id&&(Ko=[o.id,...Ko.filter(l=>l!==o.id)].slice(0,18)),Af(v(o.text||{}))):""}function Kx(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function Af(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t];let s="";for(const r of n){const o=`${s} ${r.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Sr(e){const t=If(e);return`<span class="pill ${t}">${i(wh[t]||"New")}</span>`}function If(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function Tf(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function Fx(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function Dx(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function fo(){try{return Xa||(Xa=new(window.AudioContext||window.webkitAudioContext)),Xa.state==="suspended"&&Xa.resume().catch(()=>null),Xa}catch(e){return console.warn("Audio context unavailable.",e),null}}function Bx(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function qc(e){const t=fo();if(!t)return!1;try{const n=Bx(e),s=t.currentTime+.01;return n.frequencies.forEach((r,o)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=r;const d=s+n.interval*o;c.gain.setValueAtTime(1e-4,d),c.gain.exponentialRampToValueAtTime(n.peak,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),l.connect(c).connect(t.destination),l.start(d),l.stop(d+n.duration+.02)}),Tr=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=qc;function Ox(){const e=()=>{const t=fo();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function Pa(e){if(a.progress.settings.sound){if(Ia()){F(e==="again"?"answer_wrong":"answer_correct");return}try{const t=fo();if(!t)return;Tr=Date.now();const n=t.createOscillator(),s=t.createGain(),r=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.13,r+.015),s.gain.exponentialRampToValueAtTime(1e-4,r+.18),n.connect(s).connect(t.destination),n.start(r),n.stop(r+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function zx(){if(a.progress.settings.sound)try{const e=fo();if(!e)return;Tr=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.value=n;const l=t+s*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.12,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.24),r.connect(o).connect(e.destination),r.start(l),r.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function Ux(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function U(e){const t=_e("#toast");t.textContent=e,t.hidden=!1,clearTimeout(jd),jd=window.setTimeout(()=>{t.hidden=!0},2400)}function Rf(){return`
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
      </section>`}function Jx(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function Gx(){try{[Be,as,Wa,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function Hx(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function qx(e){try{const t=Number(sessionStorage.getItem(Cn)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Cn,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&Gx(),await Hx();try{localStorage.removeItem(Be),localStorage.removeItem(as),localStorage.removeItem(Wa),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(r){console.warn("Boot recovery marker cleanup failed.",r)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function Wx(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(as,`${T}:done`)}catch(r){console.warn("Cannot save PWA cache reset marker.",r)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),r=await navigator.serviceWorker.register(s.href);if(!r||typeof r.update!="function")return;Xx(r),await r.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function Xx(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function ho(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(w)||localStorage.getItem(b);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(w)||localStorage.setItem(w,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function Wc(){try{localStorage.setItem(w,JSON.stringify(a.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function Qx(e){e.preventDefault(),cs=e,a.progress&&a.i18n&&Yx()}async function Vx(){if(ge("pwa_install_click",{route:a.route,source:cs?"browser":Cr()?"ios":"help"}),Ma()){Qc();return}if(!cs){a.pwaInstallHelpVisible=!0,Ie();return}const e=cs;cs=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Qc();return}Vc()}catch(t){console.warn("PWA install prompt failed.",t),Vc()}}function Ma(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function Xc(){const e=a.pwaInstallPrompt||ho();if(Ma()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=a.progress?.visits?.firstVisitDate;return!t||ts(t,oe())<1?!1:!!cs||Cr()}function Yx(){Xc()&&(F("notification_soft"),R())}function Qc(){a.pwaInstallPrompt={...ho(),...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},a.pwaInstallHelpVisible=!1,Wc(),ge("pwa_installed",{route:a.route,source:Cr()?"ios":"browser"},{dedupeKey:"appinstalled"}),Ef(),a.progress&&a.i18n&&R()}function Vc(){const e=a.pwaInstallPrompt||ho(),t=Math.min(Number(e.declineCount||0)+1,5);a.pwaInstallPrompt={...e,declineCount:t,nextShowAt:Zx(t),neverShow:t>=5,installed:!1},Wc(),R()}function Zx(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function eL(){!Ma()||a.pwaInstallPrompt.installed||(a.pwaInstallPrompt={...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},Wc())}function Cr(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function _f(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function Ea(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(j);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function es(){try{localStorage.setItem(j,JSON.stringify(a.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function Ka(){clearTimeout(Ao),Ao=0}function tL(){Ka(),a.notificationPromptVisible&&(Ao=window.setTimeout(()=>{a.notificationPromptVisible&&Pf()},5e3))}function Pf(){Ka(),!(!a.notificationPromptVisible&&a.notificationPrompt?.docked)&&(a.notificationPromptVisible=!1,a.notificationPrompt={...a.notificationPrompt,docked:!0},es(),R())}function Mf(){return Ma()||!!a.pwaInstallPrompt?.installed}function vo(e="usage"){const t=a.notificationPrompt||Ea();return!(!("Notification"in window)||t.neverShow||t.enabled||!Mf()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-Bo<2*60*1e3)}function bo(e="usage"){return vo(e)?(a.notificationPromptVisible=!0,a.notificationPrompt={...a.notificationPrompt,docked:!1},es(),F("notification_soft"),tL(),R(),!0):("Notification"in window&&Notification.permission==="granted"&&Kf(),!1)}function Ef(){if(clearTimeout(Nd),!Mf())return;const e=Math.max(0,2*60*1e3-(Date.now()-Bo));Nd=window.setTimeout(()=>bo("usage"),e)}async function nL(){if(a.notificationPromptVisible=!1,Ka(),!("Notification"in window)){wo();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(a.notificationPrompt.permission=e,a.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Kf(),U(Df().enabled),Ie();return}wo()}catch(e){console.warn("Notification permission failed.",e),wo()}}function Kf(){!("Notification"in window)||Notification.permission!=="granted"||(Ka(),a.notificationPrompt={...Ea(),...a.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:a.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},es(),Yc())}function wo(){const e=a.notificationPrompt||Ea(),t=Math.min(Number(e.declineCount||0)+1,5);a.notificationPromptVisible=!1,Ka(),a.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:sL(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},es(),Ie()}function sL(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function Yc(){!("Notification"in window)||Notification.permission!=="granted"||(a.notificationPrompt.permission="granted",a.notificationPrompt.enabled=!0,es(),Fo.forEach(e=>clearTimeout(e)),Fo.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>Ff(e.type,rL(e.hour,e.minute))),lL())}function Ff(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await aL(e),Ff(e,cL(t,1))},n);Fo.set(e,s)}function rL(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function aL(e){if(!iL(e))return!1;const t=oL(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),F(e==="daily_bonus"?"notification_reward":"notification_reminder"),a.notificationPrompt.lastShown[e]=oe(),es(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function iL(e){if(!("Notification"in window)||Notification.permission!=="granted"||a.notificationPrompt.lastShown?.[e]===oe())return!1;if(e==="review")return Oe()>0;if(e==="daily_bonus"){const t=vi(a.progress.dailyBonusPending);return!!a.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=oe()&&!a.progress.dailyBonuses[oe()]}return e==="lesson"?jN().length>0:e==="streak"?(a.progress.streak.current||a.progress.visits?.streak||0)>0:!0}function oL(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function lL(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),a.notificationPrompt.periodicSync=!0,es()}catch{a.notificationPrompt.periodicSync=!1,es()}}function Df(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function re(e){return{...e,history:[...e.history||[]]}}function cL(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function dL(){const e=new Date;return e.setHours(23,59,59,999),e}function oe(){return Zc(new Date)}function Zc(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ed(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function ts(e,t){return Math.round((ed(t)-ed(e))/864e5)}function Bf(e,t){const n=ed(e);return n.setDate(n.getDate()+t),Zc(n)}function uL(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Zc(s)})}function Jt(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const r=Math.ceil(s/24);return p()==="ru"?`через ${r} дн.`:`in ${r} d`}function M(e,t){return t?le(Math.round(e/t*100),0,100):0}function le(e,t,n){return Math.max(t,Math.min(n,e))}function ko(e,t){const n=10**t;return Math.round(e*n)/n}function nt(e){return e[Math.floor(Math.random()*e.length)]}function ns(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function Fa(e,t){return String(e)===String(t)?"selected":""}function pL(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Gf(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Of(e="",t=""){const n=String(e||"").trim(),s=fe(n)?n.toLowerCase():n.toUpperCase(),r=String(t||"").trim(),o=s?`#textbooks/${encodeURIComponent(s)}`:"#textbooks/";return r?`${o}/${encodeURIComponent(r)}`:o}function vt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${pL()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function Nr(){const e=ih(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash||e.status==="valid"&&["textbooks","textbook-level","kana-course"].includes(e.kind||"")&&!location.hash?e:Gf(location.pathname||"/")?rs(location.hash):e.status==="not-found"?e:me("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function zf(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function xr(e){const t=e.route,n=e.status==="valid"?e.params:{};a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,a.kanjiPageId=t==="kanji"&&n.cardId||null,a.activeTextbookLevel=t==="textbooks"&&(n.level||n.course)||null,a.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,a.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"&&n.view||un,a.activeLearnNodeId=t==="learn"&&a.activeLearnView===Ht&&n.targetId||null,a.activeLearnLegacyLessonId=t==="learn"&&a.activeLearnView===pn&&n.targetId||null}function Da(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!SN(t.cardId))return!a.deferredDataLoaded&&CN(t.cardId)?e:me("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||t.course||"",s=t.subroute||"";if(n&&fe(n))return!Na(n)||s&&!rx(n,s)?me("hash","entity-not-found",e.raw,e.segments,e.locale):e;if(n&&!Ot(n))return me("hash","entity-not-found",e.raw,e.segments,e.locale);if(n&&s&&!nx(n,s))return sx(n,s)?e:me("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!kn(t.level)||e.route==="learn"&&(t.view===Ht&&!hs(t.targetId)||t.view===pn&&!a.lessons.some(n=>n.id===t.targetId))?me("hash","entity-not-found",e.raw,e.segments,e.locale):e}function gL(){return rs(location.hash).raw}function mL(){const e=rs(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function fL(){const e=rs(location.hash);return e.status==="valid"&&e.route==="textbooks"&&(e.params.level||e.params.course)||""}function hL(){const e=rs(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function vL(){const e=rs(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function bL(){return As().filter(e=>Lr(e.id)).length}function Lr(e){const t=a.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
