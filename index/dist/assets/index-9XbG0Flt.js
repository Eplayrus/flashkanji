(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const $ of document.querySelectorAll('link[rel="modulepreload"]'))x($);new MutationObserver($=>{for(const T of $)if(T.type==="childList")for(const R of T.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&x(R)}).observe(document,{childList:!0,subtree:!0});function L($){const T={};return $.integrity&&(T.integrity=$.integrity),$.referrerPolicy&&(T.referrerPolicy=$.referrerPolicy),$.crossOrigin==="use-credentials"?T.credentials="include":$.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function x($){if($.ep)return;$.ep=!0;const T=L($);fetch($.href,T)}})();const Rx="modulepreload",_x=function(y,b){return new URL(y,b).href},Tm={},Im=function(b,L,x){let $=Promise.resolve();if(L&&L.length>0){const R=document.getElementsByTagName("link"),P=document.querySelector("meta[property=csp-nonce]"),ne=P?.nonce||P?.getAttribute("nonce");$=Promise.allSettled(L.map(me=>{if(me=_x(me,x),me in Tm)return;Tm[me]=!0;const ot=me.endsWith(".css"),rr=ot?'[rel="stylesheet"]':"";if(!!x)for(let tn=R.length-1;tn>=0;tn--){const bs=R[tn];if(bs.href===me&&(!ot||bs.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${me}"]${rr}`))return;const kt=document.createElement("link");if(kt.rel=ot?"stylesheet":Rx,ot||(kt.as="script"),kt.crossOrigin="",kt.href=me,ne&&kt.setAttribute("nonce",ne),document.head.appendChild(kt),ot)return new Promise((tn,bs)=>{kt.addEventListener("load",tn),kt.addEventListener("error",()=>bs(new Error(`Unable to preload CSS for ${me}`)))})}))}function T(R){const P=new Event("vite:preloadError",{cancelable:!0});if(P.payload=R,window.dispatchEvent(P),!P.defaultPrevented)throw R}return $.then(R=>{for(const P of R||[])P.status==="rejected"&&T(P.reason);return b().catch(T)})},Px="ru",Mx={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},Lc={defaultLocale:Px,locales:Mx},Ex=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Sc="not-found",sr=Lc.defaultLocale,Kx=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),Um=/^n[1-5]$/i,Dx=/^(?:hiragana|katakana)$/i,Fx=/^[A-Za-z0-9_-]+$/,Ox=/^[\p{Letter}\p{Number}_-]+$/u,Bx=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,zx=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,Ux=new Map(Object.entries(Lc.locales).map(([y,b])=>[String(b.urlSegment).toLowerCase(),y]));function Se(y,b,L,x,$={},T=sr,R={}){return{status:"valid",source:y,route:b,locale:T,params:$,raw:L,segments:x,...R}}function ge(y,b,L,x=[],$=sr,T){return{status:"not-found",source:y,route:Sc,locale:$,params:{},raw:L,segments:x,reason:b,canonicalPath:T}}function Jm(y){return!!(y&&Ex.includes(y))}function bc(y){const b=String(y||"").trim().toUpperCase();return Um.test(b)?b:""}function Gm(y){const b=String(y||"").trim().toLowerCase();return Dx.test(b)?b:""}function Hm(y){try{return{ok:!0,value:decodeURIComponent(y)}}catch{return{ok:!1}}}function xc(y){return y.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function De(y,b,L=xc(b)){return ge("hash",y,b,L)}function kc(y){return Fx.test(y)}function Jx(y){return Ox.test(y)}function Jn(y){const b=String(y||"").replace(/^#/,"").trim(),L=Hm(b);if(!L.ok)return De("invalid-parameter",b,[]);const x=L.value.replace(/^\/+|\/+$/g,""),$=xc(x),T=($[0]||"home").toLowerCase();if(!$.length)return Se("hash","home",x,$);if(T==="jlpt"){if($.length<2||$.length>3)return De("unknown-route",x,$);const R=bc($[1]);if(!R)return De("invalid-parameter",x,$);const P=$[2]||"";return P&&!kc(P)?De("invalid-parameter",x,$):Se("hash","textbooks",x,$,{level:R,subroute:P,legacyRoute:"jlpt"})}if(T==="textbooks"){if($.length>3)return De("unknown-route",x,$);if($.length===1)return Se("hash","textbooks",x,$);const R=bc($[1]),P=Gm($[1]);if(!R&&!P)return De("invalid-parameter",x,$);const ne=$[2]||"";return ne&&!kc(ne)?De("invalid-parameter",x,$):Se("hash","textbooks",x,$,P?{course:P,subroute:ne}:{level:R,subroute:ne})}if(T==="jlpt-lesson"){if($.length!==2)return De("unknown-route",x,$);const R=bc($[1]);return R?Se("hash","jlpt-lesson",x,$,{level:R}):De("invalid-parameter",x,$)}if(T==="kanji"){if($.length!==2)return De("unknown-route",x,$);const R=$[1];return Jx(R)?Se("hash","kanji",x,$,{cardId:R}):De("invalid-parameter",x,$)}if(T==="learn"){if($.length===1)return Se("hash","learn",x,$,{view:"map"});if($.length!==3)return De("unknown-route",x,$);const R=$[1].toLowerCase(),P=$[2];return!["lesson","legacy"].includes(R)||!kc(P)?De("invalid-parameter",x,$):Se("hash","learn",x,$,{view:R,targetId:P})}return Kx.has(T)?$.length!==1?De("unknown-route",x,$):Se("hash",T,x,$):(Jm(T),De("unknown-route",x,$))}function Gx(y){return String(y||"/").split(/[?#]/,1)[0]||"/"}function Hx(y){const b=Gx(y),L=Hm(b);if(!L.ok)return{ok:!1,raw:b};const x=L.value.replace(/\/{2,}/g,"/"),$=x.startsWith("/")?x:`/${x}`,T=$===""?"/":$;return{ok:!0,path:T,segments:xc(T)}}function qx(y){return Ux.get(y.toLowerCase())||null}function ws(y,b="/"){return`/${Lc.locales[y].urlSegment}${b.startsWith("/")?b:`/${b}`}`}function qm(y){const b=Hx(y);if(!b.ok)return ge("pathname","invalid-parameter",b.raw,[],null);const{path:L,segments:x}=b,$=L;if(L==="/"||/^\/index\.html$/i.test(L))return Se("pathname","home",$,x,{},sr,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(L))return Se("pathname","home",$,x,{},sr,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(L))return Se("pathname","download",$,x,{},sr,{kind:"download",canonicalPath:"/download/"});if(!x.length)return Se("pathname","home",$,x,{},sr,{kind:"app-shell",canonicalPath:"/"});const T=qx(x[0]);if(!T){const P=zx.test(x[0])?"unknown-locale":"unknown-route";return ge("pathname",P,$,x,null)}if(x.length===1)return Se("pathname","home",$,x,{},T,{kind:"localized-home",canonicalPath:ws(T,"/")});const R=x[1].toLowerCase();if(R==="download"&&x.length===2)return Se("pathname","download",$,x,{},T,{kind:"download",canonicalPath:ws(T,"/download/")});if(R==="textbooks"){if(x.length===2)return Se("pathname","textbooks",$,x,{},T,{kind:"textbooks",canonicalPath:ws(T,"/textbooks/")});if(x.length===3){const P=x[2].toLowerCase(),ne=Gm(P);return ne?Se("pathname","textbooks",$,x,{course:ne},T,{kind:"kana-course",canonicalPath:ws(T,`/textbooks/${ne}/`)}):Um.test(P)?Se("pathname","textbooks",$,x,{level:P.toUpperCase()},T,{kind:"textbook-level",canonicalPath:ws(T,`/textbooks/${P}/`)}):ge("pathname","invalid-parameter",$,x,T)}return ge("pathname","unknown-route",$,x,T)}if(R==="kanji"){if(x.length===2)return Se("pathname","dictionary",$,x,{},T,{kind:"kanji-hub",canonicalPath:ws(T,"/kanji/")});if(x.length===3){const P=x[2].toLowerCase();return Bx.test(P)?Se("pathname","kanji",$,x,{slug:P},T,{kind:"kanji-page",canonicalPath:ws(T,`/kanji/${P}/`)}):ge("pathname","invalid-parameter",$,x,T)}return ge("pathname","unknown-route",$,x,T)}return ge("pathname","unknown-route",$,x,T)}function Rm(y){const b=qm(y);return b.status==="valid"&&(b.kind==="app-shell"||b.kind==="legacy-index")}function Wx(y){const b=()=>y(Jn(window.location.hash));return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)}function Xx(){let y=0,b=null;return{begin(L){b?.abort(),b=new AbortController;const x=++y,$=b;return{route:L,token:x,signal:$.signal,isCurrent:()=>y===x&&!$.signal.aborted}},abort(){b?.abort()}}}const ba=[5,60,12*60,24*60,2*24*60,4*24*60],yc={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function Et(y){const b=y&&typeof y=="object"?y:{},L=Vx(b.state??b.stage),x=Yx(b.dueAt??b.nextReview),$=Un(b.reviewCount??b.reviews,0),T=Un(b.correct,0),R=Un(b.wrong,0),P={...b,state:L,dueAt:x,reviewCount:$,intervalDays:Un(b.intervalDays,0),easeFactor:Un(b.easeFactor,2.5),srsStep:Un(b.srsStep,L==="New"?-1:0),lapses:Un(b.lapses,0),correct:T,wrong:R,successRate:Un(b.successRate,T+R?Math.round(T/(T+R)*100):0),history:Array.isArray(b.history)?b.history.slice(-120):[]};return delete P.nextReview,delete P.reviews,delete P.stage,delete P.lastReview,P}function fe(y,b,L=b,x=new Date){const $=Et(y),T=Qx($,b),R={...$,history:[...$.history]};let P=$.srsStep,ne=$.easeFactor;T==="again"?(P=0,ne=Math.max(1.3,ne-.2),R.state="Learning",R.wrong+=1,$.state!=="New"&&(R.lapses+=1)):T==="hard"?(P=Math.max(1,P),ne=Math.max(1.3,ne-.15),R.correct+=1):T==="easy"?(P=P<0?2:P+2,ne=Math.min(3.2,ne+.15),R.correct+=1):(P=P<0?0:P+1,R.correct+=1);const me=Zx(P)/1440;return T!=="again"&&(R.state=me<1?"Learning":"Review"),R.correct>=8&&me>=30&&(R.state="Mastered"),R.srsStep=P,R.easeFactor=Pm(ne,2),R.intervalDays=Pm(me,6),R.dueAt=new Date(x.getTime()+me*864e5).toISOString(),R.reviewCount+=1,R.successRate=Math.round(R.correct/Math.max(R.correct+R.wrong,1)*100),R.lastReviewedAt=x.toISOString(),R.lastRating=yc[L]||yc[T],R.lastDecision=yc[T],R.history=[...R.history,{at:x.toISOString(),rating:R.lastRating,decision:R.lastDecision,from:$.state,to:R.state,intervalDays:me,srsStep:P}].slice(-120),R}function _m(y,b=Date.now()){const L=new Map;for(const T of y){if(!T.cardId||T.state==="New")continue;const R=T.dueAt?Date.parse(T.dueAt):Number.NaN;Number.isFinite(R)&&R<=b&&!L.has(T.cardId)&&L.set(T.cardId,{...T})}const x=Object.freeze([...L.values()].sort((T,R)=>Date.parse(T.dueAt||"")-Date.parse(R.dueAt||""))),$=new Set;return{initial:x,complete(T){$.add(T)},get remaining(){return x.filter(T=>!$.has(T.cardId))},get remainingCount(){return x.length-$.size}}}function Qx(y,b){return b==="again"||b==="forgot"?"again":b!=="remember"?b:y.state==="New"?"good":y.state==="Learning"?y.successRate>=70||y.correct>=2?"good":"hard":y.successRate>=88&&y.correct>=5&&y.lapses<=1?"easy":y.successRate<70||y.lapses>Math.max(1,Math.floor(y.correct/3))?"hard":"good"}function Vx(y){const b=String(y||"new").toLowerCase();return b.includes("master")?"Mastered":b.includes("learn")?"Learning":b.includes("review")?"Review":"New"}function Yx(y){return typeof y!="string"||!Number.isFinite(Date.parse(y))?null:new Date(y).toISOString()}function Un(y,b){const L=Number(y);return Number.isFinite(L)&&L>=0?L:b}function Pm(y,b){const L=10**b;return Math.round(y*L)/L}function Zx(y){return y<ba.length?ba[Math.max(0,y)]:ba[ba.length-1]*2**(y-(ba.length-1))}const Wm="flashKanji.progress.v2",eC="flashKanji.progress.v1";function tC(y=localStorage){const b=y.getItem(Wm)||y.getItem(eC);if(!b)return null;try{const L=JSON.parse(b);if(!L||typeof L!="object")return null;const x=L;return x.progress&&typeof x.progress=="object"?x.progress:x}catch(L){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",L),null}}function nC(y){return!y||typeof y!="object"?{}:Object.fromEntries(Object.entries(y).map(([b,L])=>[b,Et(L)]))}function sC(y,b=localStorage){try{return b.setItem(Wm,JSON.stringify(y)),!0}catch(L){return console.warn("Flash Kanji could not save LocalStorage progress.",L),!1}}const rC=/[\/／,、;；\s]+/u,aC=/[\u30a1-\u30f6]/g,iC=/[()[\]{}.\-‐-―]/gu;function oC(y){return String(y||"").normalize("NFKC").replace(aC,b=>String.fromCharCode(b.charCodeAt(0)-96))}function Xm(y){return(Array.isArray(y)?y.join(" / "):String(y||"")).split(rC).map(L=>oC(L).replace(iC,"").trim()).filter(Boolean)}function lC(y){if(!y)return[];const b=[...Em("onyomi","On",y.onyomi),...Em("kunyomi","Kun",y.kunyomi)],L=new Set,x=b.filter(R=>{const P=R.kana;return!P||L.has(P)?!1:(L.add(P),!0)});if(x.length)return x;const $=Xm(y.hiragana)[0];if($)return[{kind:"hiragana",kana:$,label:"Kana"}];const T=String(y.kanji||"").trim();return T?[{kind:"kanji",kana:T,label:"Kanji"}]:[]}function cC(y,b=-1,L=""){const x=L&&L!=="cycle"?y.filter(T=>T.kind===L):y;if(!x.length)return{item:null,cursor:-1};const $=(Number(b)+1)%x.length;return{item:x[$],cursor:$}}function Mm(y,b={}){const L=String(y||"").trim(),x=typeof window<"u"?window:void 0,$=b.synth||x?.speechSynthesis,T=b.Utterance||x?.SpeechSynthesisUtterance;if(!L||!$||!T)return!1;$.cancel();const R=new T(L);R.lang="ja-JP",R.rate=b.rate??.92,R.voice=dC($),R.onstart=()=>b.onStart?.(),R.onend=()=>b.onEnd?.(),R.onerror=P=>b.onError?.(P);try{return $.speak(R),!0}catch(P){return b.onError?.(P),!1}}function Em(y,b,L){return Xm(L).map(x=>({kind:y,kana:x,label:b}))}function dC(y){const b=typeof y.getVoices=="function"?y.getVoices():[];return b.find(L=>/^ja[-_]?JP$/iu.test(L.lang))||b.find(L=>/^ja/iu.test(L.lang))||null}const Qm=["hiragana","katakana"];function Fe(y){return Qm.includes(String(y||"").toLowerCase())}function Nc(y){return String(y??"").normalize("NFKC").trim().replace(/\s+/gu," ").toLowerCase()}function uC(y,b){const L=Nc(y);return L?(Array.isArray(b)?b:[]).some($=>Nc($)===L):!1}function pC(){return{schema_version:1,content_version:"2026-08-kana-v1",settings:{showRomaji:!0},courses:{}}}function $c(y){const b=pC();if(!y||typeof y!="object")return b;const L=y,x=L.settings&&typeof L.settings=="object"?L.settings:{},$=L.courses&&typeof L.courses=="object"?L.courses:{},T={};for(const R of Qm){const P=$[R]&&typeof $[R]=="object"?$[R]:{},ne=P.review&&typeof P.review=="object"?P.review:{};T[R]={currentRoute:typeof P.currentRoute=="string"?P.currentRoute:"",lessons:ja(P.lessons,hC),practices:ja(P.practices,vC),finalTest:fC(P.finalTest),review:Object.fromEntries(Object.entries(ne).map(([me,ot])=>[me,Et(ot)])),writing:P.writing&&typeof P.writing=="object"?{...P.writing}:{},updatedAt:typeof P.updatedAt=="string"?P.updatedAt:null}}return{...b,...L,schema_version:1,content_version:"2026-08-kana-v1",settings:{...b.settings,showRomaji:typeof x.showRomaji=="boolean"?x.showRomaji:b.settings.showRomaji},courses:T}}function gC(y,b){var L;return(L=y.courses)[b]||(L[b]={currentRoute:"",lessons:{},practices:{},finalTest:Vm(),review:{},writing:{},updatedAt:null}),y.courses[b]}function Vm(){return{sections:{},completed:!1,passed:!1,latestScore:0,bestScore:0,score:0,total:0,updatedAt:null}}function mC(y,b,L=new Date){const x={},$={};let T=0;const R=y.items.length;for(const P of y.items){const ne=String(b[P.number]??"");x[P.number]=ne;const me=uC(ne,P.accepted_answers);$[P.number]=me,me&&(T+=1)}return{answers:x,correct:$,score:T,total:R,completed:R>0,passed:R>0&&T/R>=.8,updatedAt:L.toISOString()}}function jc(y,b){const L=y.map(P=>b[P.id]).filter(Boolean),x=y.reduce((P,ne)=>P+ne.items.length,0),$=L.reduce((P,ne)=>P+Number(ne.score||0),0),T=L.reduce((P,ne)=>P+Number(ne.total||0),0),R=L.reduce((P,ne)=>P+Math.max(Number(ne.score||0),0),0);return{latestScore:$,bestScore:R,completed:x>0&&T>=x,passed:x>0&&$/x>=.8}}function Km(y,b,L=new Date){return fe(y,b,b,L)}function fC(y){const b=y&&typeof y=="object"?y:{},L=Yi(b),x=ja(b.sections,Yi);return{...Vm(),sections:x,completed:!!(b.completed||L.completed),passed:!!(b.passed||L.passed),latestScore:Number(b.latestScore||L.score||0),bestScore:Number(b.bestScore||L.score||0),score:Number(b.score||b.latestScore||L.score||0),total:Number(b.total||L.total||0),updatedAt:typeof b.updatedAt=="string"?b.updatedAt:L.updatedAt}}function Yi(y){const b=y&&typeof y=="object"?y:{};return{answers:b.answers&&typeof b.answers=="object"?{...b.answers}:{},correct:b.correct&&typeof b.correct=="object"?{...b.correct}:{},score:Number(b.score||0),total:Number(b.total||0),completed:!!b.completed,passed:!!b.passed,updatedAt:typeof b.updatedAt=="string"?b.updatedAt:null}}function hC(y){const b=y&&typeof y=="object"?y:{};return{exercises:ja(b.exercises,Yi),completed:!!b.completed,passed:!!b.passed,latestScore:Number(b.latestScore||0),bestScore:Number(b.bestScore||0),updatedAt:typeof b.updatedAt=="string"?b.updatedAt:null}}function vC(y){const b=y&&typeof y=="object"?y:{};return{exercises:ja(b.exercises,Yi),completed:!!b.completed,passed:!!b.passed,latestScore:Number(b.latestScore||0),bestScore:Number(b.bestScore||0),updatedAt:typeof b.updatedAt=="string"?b.updatedAt:null}}function ja(y,b){return!y||typeof y!="object"?{}:Object.fromEntries(Object.entries(y).map(([L,x])=>[L,b(x)]))}const Ym=109492033,wC=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],bC={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},kC={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},yC=/^[\p{Letter}\p{Number}_-]{1,96}$/u,$C=/^[a-z][a-z0-9_]{1,64}$/,jC=/^[a-z][a-z0-9_-]{0,48}$/i,SC=/^N[1-5]$/i,Dm=new Set;let $a="";function Zm(y,b={}){if(!y||y.status==="not-found")return"/app/not-found";const L=y.params||{},x=String(y.route||b.route||"home");if(x==="learn"){const $=Kt(L.view||b.activeLearnView||"map").toLowerCase(),T=Kt(L.targetId||b.activeLearnNodeId||b.activeLearnLegacyLessonId);return $==="lesson"&&T?`/app/learn/lesson/${T}`:$==="legacy"&&T?`/app/learn/legacy/${T}`:"/app/learn"}if(x==="textbooks"){const $=Sa(L.level||b.activeTextbookLevel),T=Kt(L.subroute||b.activeTextbookSubroute);return $?T?`/app/textbooks/${$}/${T}`:`/app/textbooks/${$}`:"/app/textbooks"}if(x==="kanji"){const $=Kt(L.cardId||b.kanjiPageId||L.slug);return $?`/app/kanji/${$}`:"/app/kanji"}if(x==="jlpt-lesson"){const $=Sa(L.level||b.activeJlptLesson);return $?`/app/jlpt-lesson/${$}`:"/app/jlpt-lesson"}return bC[x]||"/app/not-found"}function ef(y,b={}){const L=AC(b),x=kC[L];if(!y||y.status==="not-found")return x["not-found"];const $=y.params||{},T=String(y.route||b.route||"home");if(T==="learn"){const R=Kt($.view||b.activeLearnView||"map").toLowerCase(),P=Kt($.targetId||b.activeLearnNodeId||b.activeLearnLegacyLessonId);return R==="lesson"&&P?L==="ru"?`Flash Kanji — Урок маршрута ${P}`:`Flash Kanji — Path lesson ${P}`:R==="legacy"&&P?L==="ru"?`Flash Kanji — Урок ${P}`:`Flash Kanji — Lesson ${P}`:x.learn}if(T==="textbooks"){const R=Sa($.level||b.activeTextbookLevel).toUpperCase(),P=Kt($.subroute||b.activeTextbookSubroute);return R?P?["final","final-test"].includes(P)?L==="ru"?`Flash Kanji — JLPT ${R} · Финальный тест`:`Flash Kanji — JLPT ${R} · Final test`:L==="ru"?`Flash Kanji — JLPT ${R} · Урок ${Fm(P)}`:`Flash Kanji — JLPT ${R} · Lesson ${Fm(P)}`:L==="ru"?`Flash Kanji — Учебник JLPT ${R}`:`Flash Kanji — JLPT ${R} textbook`:L==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(T==="kanji"){const R=Kt($.cardId||b.kanjiPageId||$.slug),P=IC(b,R)||R;return L==="ru"?`Flash Kanji — Кандзи ${P}`:`Flash Kanji — Kanji ${P}`}if(T==="jlpt-lesson"){const R=Sa($.level||b.activeJlptLesson).toUpperCase();return R?L==="ru"?`Flash Kanji — JLPT ${R}`:`Flash Kanji — JLPT ${R}`:x.learn}return x[T]||x["not-found"]}function NC(y,b={}){const L=Zm(y,b),x=ef(y,b);return $a=L,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=L),en("prime",{virtualPath:L,title:x}),{sent:!1,virtualPath:L,title:x,reason:"duplicate"}}function LC(y,b={}){const L=Zm(y,b),x=ef(y,b);if(L===$a)return en("skip-pageview-duplicate",{virtualPath:L,title:x,previousVirtualPath:$a}),{sent:!1,virtualPath:L,title:x,reason:"duplicate"};const $=$a||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:L,title:x,referer:$,reason:"no-window"}:typeof window.ym!="function"?(en("skip-pageview-missing-ym",{virtualPath:L,title:x,previousVirtualPath:$}),{sent:!1,virtualPath:L,title:x,referer:$,reason:"missing-ym"}):(window.ym(Ym,"hit",L,{title:x,...$?{referer:$}:{}}),$a=L,en("pageview",{virtualPath:L,title:x,previousVirtualPath:$}),{sent:!0,virtualPath:L,title:x,referer:$})}catch(T){return en("pageview-error",{virtualPath:L,title:x,previousVirtualPath:$,error:T instanceof Error?T.message:String(T)}),{sent:!1,virtualPath:L,title:x,referer:$,reason:"error"}}}function xC(y,b={},L={}){const x=CC(y);if(!x)return en("skip-goal-invalid",{goal:y}),!1;const $=L.dedupeKey?`${x}:${L.dedupeKey}`:"";if($&&Dm.has($))return en("skip-goal-duplicate",{goal:x,params:Vi(b),dedupeKey:$}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return en("skip-goal-missing-ym",{goal:x,params:Vi(b)}),!1;const T=Vi(b);return window.ym(Ym,"reachGoal",x,T),$&&Dm.add($),en("goal",{goal:x,params:T}),!0}catch(T){return en("goal-error",{goal:x,params:Vi(b),error:T instanceof Error?T.message:String(T)}),!1}}function CC(y){const b=String(y||"").trim().toLowerCase();return $C.test(b)&&(wC.includes(b)||/^social_[a-z0-9_]+_opened$/.test(b))?b:""}function Vi(y){const b={},L=Kt(y.route).toLowerCase(),x=Sa(y.level).toUpperCase(),$=Kt(y.lessonId),T=Kt(y.cardId),R=TC(y.source);return L&&(b.route=L),x&&(b.level=x),$&&(b.lessonId=$),T&&(b.cardId=T),R&&(b.source=R),b}function AC(y){return String(y.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function Sa(y){const b=String(y||"").trim().toUpperCase();return SC.test(b)?b.toLowerCase():""}function Kt(y){const b=String(y||"").trim();return yC.test(b)?encodeURIComponent(b):""}function TC(y){const b=String(y||"").trim();return jC.test(b)?b.toLowerCase():""}function Fm(y){const b=y.match(/-(\d+)$/);return b?.[1]?String(Number(b[1])):y}function IC(y,b){if(!b||!Array.isArray(y.cards))return"";const L=RC(b),x=y.cards.find($=>String($.id||"")===L||String($.slug||"")===L);return String(x?.kanji||"").trim()}function RC(y){try{return decodeURIComponent(y)}catch{return y}}function en(y,b){_C()&&console.debug(`[Flash Kanji Metrika] ${y}`,b)}function _C(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const b=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(b).get("debugMetrika")==="1"}catch{return!1}}const Zi="flashKanji.hasVisited",eo="flashKanji.changelog.lastSeenVersion",tf=new Set;function PC(y){if(!y||typeof y!="object")return null;const b=y,L=String(b.currentVersion||"").trim();if(!L)return null;const x=Array.isArray(b.entries)?b.entries.map(KC).filter($=>!!$):[];return x.length?{currentVersion:L,entries:x}:null}function MC(y,b,L,x={}){const $=y?.currentVersion||"",T=y?.entries.find(ne=>ne.version===$)||y?.entries[0]||null;return!y||!$||!T||tf.has($)?{currentVersion:$,shouldShow:!1,shouldMarkHandled:!1,entry:null}:Bm(L,eo)===$?{currentVersion:$,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(x.hadPriorVisit||Bm(L,Zi)==="true"||x.useProgressSignals!==!1&&EC(b))?{currentVersion:$,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:$,shouldShow:!0,shouldMarkHandled:!1,entry:T}}function Om(y,b){const L=String(y||"").trim();L&&(tf.add(L),zm(b,Zi,"true"),zm(b,eo,L))}function EC(y){if(!y||typeof y!="object")return!1;const b=y;return!!(ya(b.appOpens)>0||ka(b.lessonCompletions)>0||ka(b.cards)>0||ka(b.seenKanji)>0||ka(b.daily)>0||ka(b.favorites)>0||OC(b.transactions)>0||ya(b.totalMoonFragmentsEarned)>0||ya(b.secrets?.evaClicks)>0||b.secrets?.nightVisit||ya(b.visits?.streak)>0||ya(b.visits?.bestStreak)>0)}function KC(y){if(!y||typeof y!="object")return null;const b=y,L=String(b.version||"").trim();return L?{version:L,date:String(b.date||"").trim(),title:DC(b.title),items:FC(b.items)}:null}function DC(y){const b=y&&typeof y=="object"?y:{};return{ru:String(b.ru||b.en||"").trim(),en:String(b.en||b.ru||"").trim()}}function FC(y){const b=y&&typeof y=="object"?y:{},L=Array.isArray(b.ru)?b.ru.map($=>String($||"").trim()).filter(Boolean):[],x=Array.isArray(b.en)?b.en.map($=>String($||"").trim()).filter(Boolean):[];return{ru:L.length?L:x,en:x.length?x:L}}function Bm(y,b){try{return y?.getItem(b)||""}catch{return""}}function zm(y,b,L){try{y?.setItem(b,L)}catch{}}function ka(y){return y&&typeof y=="object"&&!Array.isArray(y)?Object.keys(y).length:0}function OC(y){return Array.isArray(y)?y.length:0}function ya(y){const b=Number(y||0);return Number.isFinite(b)?b:0}(()=>{const y="flashKanji.pwaInstallPrompt.v2",b="flashKanji.pwaInstallPrompt.v1",L="flashKanji.notificationPrompt.v1",x="flashkanji_customization",$="flashkanji_eva_state_v2",R="local-1786818010319",ne=`flashKanji.hiddenMascotSpeeches:${R}`,me="moonfarm",ot="flashKanji.appBuild.v1",rr="flashKanji.pwaCacheReset.v1",Na="flashKanji.bootRecovery.v1",kt={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},tn="aleksey.lebedev606@gmail.com",bs="Flash Kanji bug report",nf="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",sf="downloads/flash-kanji-android.apk",rf="assets/download/android-app-screenshot.png",La="flashKanji.forcePwaCacheReset.v1",B={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",kanaCatalog:"data/kana/index.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},af={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},of={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},ze=["N5","N4","N3","N2","N1"],oe=new Set,lf={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},Cc={xp:12,coins:2},Ac="flashKanjiOnboardingCompleted.v3",Tc="flashKanjiOnboardingCompleted",Ic="flashKanjiOnboardingAudience.v1",cf=850,Rc=450,df=420,ar=72,uf=96,_c=1,Pc="N5",nn="map",Dt="lesson",sn="legacy",xe="intro-kanji",ks="review-due",ys="n5-checkpoint",pf=[xe,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",ys],gf={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},mf=new Set(["lesson-1","lesson-2","bulk-n5-01"]),Mc=7e3,Ec=8e3,ff=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),ae=va(),r={route:ae.route,routeMatch:ae,routeNotFound:ae.status==="not-found"?ae:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},kanaCatalog:{schema_version:1,content_version:"",courses:[]},kanaCourses:{},kanaCourseLoading:{},kanaCourseErrors:{},kanaExerciseDrafts:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:ae.status==="valid"&&ae.params.level||null,activeTextbookLevel:ae.status==="valid"&&ae.route==="textbooks"&&(ae.params.level||ae.params.course)||null,activeTextbookSubroute:ae.status==="valid"&&ae.route==="textbooks"&&ae.params.subroute||null,activeLearnView:ae.status==="valid"&&ae.route==="learn"&&ae.params.view||nn,activeLearnNodeId:ae.status==="valid"&&ae.route==="learn"&&ae.params.view===Dt&&ae.params.targetId||null,activeLearnLegacyLessonId:ae.status==="valid"&&ae.route==="learn"&&ae.params.view===sn&&ae.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:ae.status==="valid"&&ae.route==="kanji"&&ae.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:ar,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Gi(),notificationPrompt:ma(),notificationPromptVisible:!1,changelog:null,changelogModal:null,deferredDataLoaded:!1,deferredDataLoading:!1};r.route==="textbooks"&&!r.routeNotFound&&it(Cm(YL(),ZL()));const hf=Xx();let xa=null,Ft=null,Ca=0,yt="idle",Kc="",Dc=new Map,ir=0,Fc=0,$s=0,Gn=0,to=!1,Hn=0,no=!1,qn=0,Aa=!1,Oc=!1,Ta=0,Bc=!1,Ia=!1,Ra=null,Wn=null,zc=0,so=0,js=0,or=0,ro=null,he=null,Xe=null,Ce=null,Ot=-1,$t=!1,Ne="step",Bt=null,Uc=null,vf=null,wf=null,lr=null,cr=0,Jc=0,dr=null,_a=null,ur=null;const Pa=new Map;let ao=0,io=0,oo=Math.floor(Date.now()/6e4),Gc=0,Ma="",lo=[];const co=new Map,Xn=new Map,uo=new Set,po=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Y={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Ae=(e,t=document)=>t.querySelector(e),go=(e,t=document)=>Array.from(t.querySelectorAll(e)),fn=Ae("#app"),bf=document.title||"Flash Kanji",Hc=Ae("#progressImport");document.addEventListener("click",rv),document.addEventListener("pointerdown",av),document.addEventListener("input",Fd),document.addEventListener("change",Fd),document.addEventListener("keydown",cv),window.flashKanjiFarmMoon=(e=5e3)=>Od(e),window.startFlashKanjiOnboarding=Bo,Hc.addEventListener("change",iL),window.addEventListener("beforeinstallprompt",_L),window.addEventListener("appinstalled",mc),window.addEventListener("scroll",Uo,{passive:!0}),window.addEventListener("resize",Uo),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||mu(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||qi("usage"),!document.hidden&&r.route==="eva-room"&&yr("return")&&(C(),I()),document.hidden&&Ao()}),window.addEventListener("pagehide",Ao),window.addEventListener("beforeunload",Ao),Wx(()=>{const e=Qi(va()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,a=t==="textbooks"&&(n.level||n.course)||null,o=t==="textbooks"&&n.subroute||null,l=t==="jlpt-lesson"&&n.level||null,c=t==="learn"&&n.view||nn,d=t==="learn"&&c===Dt&&n.targetId||null,u=t==="learn"&&c===sn&&n.targetId||null,m=Am(r.routeNotFound),f=e.status==="not-found"?Am(e):"";if(t!==r.route||t==="kanji"&&s!==r.kanjiPageId||t==="textbooks"&&a!==r.activeTextbookLevel||t==="textbooks"&&o!==r.activeTextbookSubroute||t==="jlpt-lesson"&&l!==r.activeJlptLesson||t==="learn"&&c!==r.activeLearnView||t==="learn"&&d!==r.activeLearnNodeId||t==="learn"&&u!==r.activeLearnLegacyLessonId||m!==f){const v=r.route;r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,v!==t&&(v==="review"||t==="review")&&(r.reviewSession=null),r.kanjiPageId=t==="kanji"?s:null,r.activeTextbookLevel=t==="textbooks"?a:null,r.activeTextbookSubroute=t==="textbooks"?o:null,r.activeJlptLesson=t==="jlpt-lesson"?l:n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"?c:nn,r.activeLearnNodeId=t==="learn"?d:null,r.activeLearnLegacyLessonId=t==="learn"?u:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,t!=="eva-room"&&(r.evaRoomShopOpen=!1),at(),ss(),Me(),pr(t)&&Ea({route:t,delay:0}),t==="eva-room"&&ke("room_opened")}}),kf();async function kf(){if(!await If()&&!await Tf()){qc(!0),fn.innerHTML.trim()?fn.setAttribute("aria-busy","true"):fn.innerHTML=bm(),r.progress=jh(),Zs(),ic(),SL(),oc(),mn();try{const[e,t,n,s,a,o,l,c,d]=await Promise.all([Wc({initialOnly:!0}),Ue(B.i18n),Ue(B.dialogues),Ue(B.rewards,Nf),Ue(B.achievements,()=>({achievements:[],categories:[]})),Ue(B.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Ue(B.jlptLessons,()=>({items:[]})),Ue(B.kanaCatalog,()=>({schema_version:1,content_version:"",courses:[]})),Ue(B.changelog,()=>null)]),u=cd(a,s.achievements||[]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.dialogues=n,r.rewards=s,r.achievements=u.items,r.achievementCategories=u.categories,r.jlptCatalog=Jf(o),r.jlptLessons=Uf(l),r.kanaCatalog=Gf(c),r.rewards.achievements=r.achievements;const m=bv(r.progress);mr(),yv(),Ka(),Ch(),mn(),KL(),N0(),kv(m),C0(),X(),wa(Qi(va()));const f=yf(d,m);C(),I(),f&&$f(),xf(),Ea({route:r.route,delay:pr(r.route)?0:Mc}),IL(),Oo(),Iw(),kw(),jm(),hc();try{sessionStorage.removeItem(Na)}catch(v){console.warn("Could not clear boot recovery marker after successful startup.",v)}}catch(e){console.error(e),await TL(e)||(fn.innerHTML=xL(e))}finally{qc(!1)}}}function qc(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),fn&&fn.setAttribute("aria-busy",e?"true":"false")}function yf(e,t=!1){Oc=!!t,r.changelogModal=null;const n=PC(e);if(!n)return!1;r.changelog=n;const s=MC(n,r.progress,mo(),{hadPriorVisit:Oc,useProgressSignals:!1});return s.shouldMarkHandled?(Om(s.currentVersion,mo()),!1):!s.shouldShow||!s.entry?!1:(r.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function mo(){try{return window.localStorage}catch{return null}}function $f(){Ta&&window.clearTimeout(Ta),Ta=window.setTimeout(()=>{Ta=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function fo(){const e=r.changelogModal?.version||r.changelog?.currentVersion||"";Om(e,mo()),r.changelogModal=null,I()}function jf(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");a.id=t,a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function Sf(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function Nf(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function Lf(){return window.Chart?Promise.resolve():(Uc||(Uc=jf("vendor/chart.umd.min.js","flash-kanji-chartjs")),Uc)}function xf(){window.setTimeout(()=>{vf||(vf=Im(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{Zs(),uL()}).catch(e=>console.warn("UX sound module failed to load.",e))),wf||(wf=Im(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function pr(e=r.route){return ff.has(e)}function Ea({route:e=r.route,delay:t=Mc,force:n=!1}={}){if(r.deferredDataLoaded||r.deferredDataLoading||lr||!n&&!pr(e))return;cr&&(window.clearTimeout(cr),cr=0);const s=++Jc,a=()=>{s===Jc&&(!n&&!pr(r.route)||Cf().catch(o=>console.warn("Deferred app data failed to load.",o)))};cr=window.setTimeout(()=>{cr=0,Sf(a,{timeout:1800})},Math.max(0,Number(t)||0))}async function Cf({renderAfter:e=!0}={}){if(!r.deferredDataLoaded)return lr||(r.deferredDataLoading=!0,lr=(async()=>{const[t,n,s]=await Promise.all([Wc(),Xc([["kanjiMeta",B.kanjiMeta],["kanjiHints",B.kanjiHints],["kanjiTranslations",B.kanjiTranslations],["kanjiStrokes",B.kanjiStrokes],["kanjiPageSources",B.kanjiPageSources],["lessonTranslations",B.lessonTranslations],["vocabulary",B.vocabulary],["sentences",B.sentences],["jlptPracticeLessons",B.jlptPracticeLessons],["n5Meta",B.n5Meta],["n5Lessons",B.n5Lessons],["n5Kanji",B.n5Kanji],["n5Exercises",B.n5Exercises],["n5FinalTest",B.n5FinalTest],["n4Meta",B.n4Meta],["n4Lessons",B.n4Lessons],["n4Kanji",B.n4Kanji],["n4Grammar",B.n4Grammar],["n4Exercises",B.n4Exercises],["n4Reading",B.n4Reading],["n4Listening",B.n4Listening],["n4FinalTest",B.n4FinalTest],["n3Meta",B.n3Meta],["n3Lessons",B.n3Lessons],["n3Kanji",B.n3Kanji],["n3Grammar",B.n3Grammar],["n3Exercises",B.n3Exercises],["n3Reading",B.n3Reading],["n3Listening",B.n3Listening],["n3FinalTest",B.n3FinalTest],["n2Meta",B.n2Meta],["n2Lessons",B.n2Lessons],["n2Kanji",B.n2Kanji],["n2Grammar",B.n2Grammar],["n2Exercises",B.n2Exercises],["n2Reading",B.n2Reading],["n2Listening",B.n2Listening],["n2FinalTest",B.n2FinalTest],["n1Meta",B.n1Meta],["n1Lessons",B.n1Lessons],["n1Kanji",B.n1Kanji],["n1Grammar",B.n1Grammar],["n1Exercises",B.n1Exercises],["n1Reading",B.n1Reading],["n1Listening",B.n1Listening],["n1FinalTest",B.n1FinalTest],["jlptReadingTranslations",B.jlptReadingTranslations],["n5Reading",B.n5Reading],["monetization",B.monetization]]),_f(B.jlptReadingMarkdown)]),{kanjiMeta:a,kanjiHints:o,kanjiTranslations:l,kanjiStrokes:c,kanjiPageSources:d,lessonTranslations:u,vocabulary:m,sentences:f,jlptPracticeLessons:v,n5Meta:w,n5Lessons:N,n5Kanji:j,n5Exercises:A,n5FinalTest:k,n4Meta:S,n4Lessons:U,n4Kanji:J,n4Grammar:vs,n4Exercises:O,n4Reading:nx,n4Listening:sx,n4FinalTest:rx,n3Meta:ax,n3Lessons:ix,n3Kanji:ox,n3Grammar:lx,n3Exercises:cx,n3Reading:dx,n3Listening:ux,n3FinalTest:px,n2Meta:gx,n2Lessons:mx,n2Kanji:fx,n2Grammar:hx,n2Exercises:vx,n2Reading:wx,n2Listening:bx,n2FinalTest:kx,n1Meta:yx,n1Lessons:$x,n1Kanji:jx,n1Grammar:Sx,n1Exercises:Nx,n1Reading:Lx,n1Listening:xx,n1FinalTest:Cx,jlptReadingTranslations:Ax,n5Reading:Tx,monetization:Ix}=n;r.lessons=t.lessons,r.cards=t.cards,r.jlptPracticeLessons=Hf(v),r.jlptReadingMarkdown=s||"",r.jlptReadingByLevel=Pf(s||""),r.n5Meta=qf(w),r.n5Textbook=Yc(N),r.n5KanjiCatalog=Wf(j),Xf(),r.n5Exercises=Qf(A),r.n5FinalTest=Vf(k),r.n5Reading=$h(Tx),r.n4Meta=Yf(S),r.n4Textbook=Zf(U),r.n4KanjiCatalog=eh(J),r.n4Grammar=nh(vs),r.n4Exercises=sh(O),r.n4Reading=Zc(nx),r.n4Listening=Zc(sx),r.n4FinalTest=rh(rx),th(),r.n3Meta=ah(ax),r.n3Textbook=ih(ix),r.n3KanjiCatalog=oh(ox),r.n3Grammar=ch(lx),r.n3Exercises=dh(cx),r.n3Reading=ed(dx),r.n3Listening=ed(ux),r.n3FinalTest=uh(px),lh(),r.n2Meta=ph(gx),r.n2Textbook=gh(mx),r.n2KanjiCatalog=mh(fx),r.n2Grammar=hh(hx),r.n2Exercises=vh(vx),r.n2Reading=td(wx),r.n2Listening=td(bx),r.n2FinalTest=wh(kx),fh(),r.n1Meta=nd(yx),r.n1Textbook=sd($x),r.n1KanjiCatalog=rd(jx),r.n1Grammar=id(Sx),r.n1Exercises=od(Nx),r.n1Reading=Ua(Lx),r.n1Listening=Ua(xx),r.n1FinalTest=ld(Cx),ad(),r.kanjiMeta=a.items||{},r.kanjiHints=o.items||{},r.kanjiTranslations=l.items||{},r.kanjiStrokes=Ff(c),r.kanjiPageSources=d.items||{},r.lessonTranslations=u.items||{},r.vocabulary=m.items||[],r.sentenceExercises=f.items||[],r.jlptReadingTranslations=Kf(Ax),r.monetization=Ix,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(mr(),X(),C()),wa(Qi(va())),e&&I()})().finally(()=>{r.deferredDataLoading=!1}),lr)}async function Af({renderAfter:e=!0}={}){return r.n1Textbook?.items?.length&&r.n1KanjiCatalog?.length?r.n1Textbook:dr||(_a=null,dr=Xc([["n1Meta",B.n1Meta],["n1Lessons",B.n1Lessons],["n1Kanji",B.n1Kanji],["n1Grammar",B.n1Grammar],["n1Exercises",B.n1Exercises],["n1Reading",B.n1Reading],["n1Listening",B.n1Listening],["n1FinalTest",B.n1FinalTest]],4).then(t=>(r.n1Meta=nd(t.n1Meta),r.n1Textbook=sd(t.n1Lessons),r.n1KanjiCatalog=rd(t.n1Kanji),r.n1Grammar=id(t.n1Grammar),r.n1Exercises=od(t.n1Exercises),r.n1Reading=Ua(t.n1Reading),r.n1Listening=Ua(t.n1Listening),r.n1FinalTest=ld(t.n1FinalTest),ad(),r.progress&&(mr(),C()),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&I(),r.n1Textbook)).catch(t=>{throw _a=t,console.warn("N1 textbook data failed to load.",t),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&I(),t}).finally(()=>{dr=null}),dr)}async function Tf(){try{const e=localStorage.getItem(ot);if(localStorage.setItem(ot,R),!e||e===R)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function If(){try{const e=localStorage.getItem(La),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===R||(localStorage.setItem(La,"done"),localStorage.setItem("flashKanji.lastForcedBuild",R)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function Wc({initialOnly:e=!1}={}){const t=await Ue(B.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Rf(n):n,a=await Qc(s,async d=>{try{return{manifestLesson:d,payload:await Ue(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),l=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(f=>Df(f,m.lesson.id)):[]}}),c=l.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:l,cards:c}}function Rf(e){return e.filter((t,n)=>mf.has(t.id)||n<2)}async function Xc(e,t=3){const n=await Qc(e,async([s,a])=>[s,await Ue(a)],t);return Object.fromEntries(n)}async function Qc(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const l=e.slice(o,o+a);s.push(...await Promise.all(l.map(t))),o+a<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function Ue(e,t=null){const n=Vc(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),Ec):0;try{const c=await fetch(a,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}const d=await c.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${a}. Trying fallback paths.`,u)}}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function _f(e,t=""){const n=Vc(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),Ec):0;try{const c=await fetch(a,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function Pf(e){const t=Object.fromEntries(ze.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",l=[],c=[];const d=()=>{!a||!s||(a.text=Mf(l.join(`
`)),a.questions=c.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,l=[],c=[],o="idle")},u=m=>{const f=String(m||"").trim().toLowerCase();return f==="жанр"||f==="genre"?"genre":f==="опора"||f==="source"||f==="basis"?"source":f==="цель"||f==="goal"?"goal":f};for(const m of n){const f=String(m??""),v=f.trim(),w=v.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(w){d(),s=w[1].toUpperCase();continue}const N=v.match(/^##\s*(N[1-5])\s*(.+)$/i);if(N){d(),s=N[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:Ef(N[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(v)&&!w&&!N){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(v)){o="questions";continue}if(o==="code"){/^```/.test(v)?o="body":l.push(f);continue}if(/^```/.test(v)){o="code";continue}if(o==="questions"){const A=v.match(/^[-*]\s+(.*)$/),k=v.match(/^\d+\.\s+(.*)$/);if(A){c.push(A[1]);continue}if(k){c.push(k[1]);continue}if(!v||/^---+$/.test(v))continue;c.push(v);continue}const j=v.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(j){const A=u(j[1]);a[A]=j[2].trim()}}return d(),t}function Mf(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function Ef(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Kf(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function Vc(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Df(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Ff(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function Qn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function Of(){try{const e=localStorage.getItem(x);if(!e)return Qn();const t=JSON.parse(e),n=Qn();return{owned:Array.isArray(t.owned)?t.owned.map(String):n.owned,selected:{...n.selected,...t&&t.selected||{}},seen:Array.isArray(t.seen)?t.seen.map(String):n.seen,updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),Qn()}}function Ss(){if(!r.customization)return!1;if(Aa)return!0;Aa=!0;const e=()=>{qn=0,Aa=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(x,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?qn=window.requestIdleCallback(e,{timeout:1200}):qn=window.setTimeout(e,160),!0}function Bf(){if(!r.customization)return!1;Aa=!1,qn&&("cancelIdleCallback"in window?window.cancelIdleCallback(qn):window.clearTimeout(qn),qn=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(x,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function Ka(){const e=Of(),t=new Set;(e.owned||[]).forEach(s=>{const a=we(s)||Vn(s);a&&t.add(a.id)}),lt().forEach(s=>{(s.defaultOwned||s.price===0)&&t.add(s.id)}),(r.progress.unlockedBackgrounds||[]).forEach(s=>{const a=we(s)||Vn(s);a&&t.add(a.id)}),(r.progress.unlockedEvaSprites||[]).forEach(s=>{const a=Yn(s);a&&t.add(a.id),r.progress.shop?.owned?.includes(`eva_sprite:${s}`)&&a&&t.add(a.id)}),(r.progress.shop?.owned||[]).forEach(s=>{const a=String(s),o=we(a)||Vn(a);if(o&&t.add(o.id),!o&&a.startsWith("eva_sprite:")){const l=Yn(a.replace("eva_sprite:",""));l&&t.add(l.id)}});const n=zf({...Qn().selected,...e.selected||{}});r.progress.selectedEvaRoomBackground&&(n.background=rn(r.progress.selectedEvaRoomBackground)),r.progress.selectedEvaSprite&&(n.outfit=Yn(r.progress.selectedEvaSprite)?.id||n.outfit),t.has(n.background)||(n.background="bg_study_hub"),t.has(n.outfit)||(n.outfit="outfit_default_assassin"),t.has(n.theme)||(n.theme="theme_default_dark"),n.decoration&&!t.has(n.decoration)&&(n.decoration=null),n.effect&&!t.has(n.effect)&&(n.effect=null),r.customization={owned:[...t],selected:n,seen:[...new Set([...e.seen||[],...t])],updatedAt:e.updatedAt||new Date().toISOString()},gr(),Ss()}function gr(){var n;if(!r.customization||!r.progress)return;ue();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=we(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...r.progress.unlockedBackgrounds||[],...r.customization.owned.filter(s=>we(s)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...r.progress.unlockedEvaSprites||[],...r.customization.owned.map(s=>we(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=r.progress).shop||(n.shop={owned:[],equipped:{}}),r.progress.shop.owned=[...new Set([...r.progress.shop.owned||[],...r.customization.owned,...r.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function lt(){return r.customizationCatalog?.items||[]}function we(e){return lt().find(t=>t.id===e)||null}function Vn(e){const t=String(e||"");return t&&lt().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function rn(e){return(we(e)||Vn(e))?.id||e||null}function zf(e={}){return{background:rn(e.background),outfit:rn(e.outfit),theme:rn(e.theme),decoration:rn(e.decoration||e.frame),effect:rn(e.effect)}}function Yn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return lt().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Uf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function Jf(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>ze.indexOf(n.jlpt)-ze.indexOf(s.jlpt))}}function Gf(e){const t=Array.isArray(e?.courses)?e.courses:[];return{schema_version:Number(e?.schema_version||1),content_version:String(e?.content_version||""),courses:t.map(n=>({...n,slug:String(n.slug||"").toLowerCase(),title:String(n.title||""),native_title:String(n.native_title||""),description:String(n.description||""),course_file:String(n.course_file||""),pdf_url:String(n.pdf_url||""),lesson_count:Number(n.lesson_count||0),base_character_count:Number(n.base_character_count||0),task_count:Number(n.task_count||0)})).filter(n=>Fe(n.slug))}}function Hf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function qf(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function Yc(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Wf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function Xf(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),Da(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Da({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Da(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Qf(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Vf(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Yf(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Zf(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function eh(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function th(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Fa(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Fa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function Fa(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function nh(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function sh(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Zc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function rh(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function ah(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function ih(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function oh(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function lh(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Oa(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Oa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function Oa(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function ch(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function dh(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function ed(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function uh(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function ph(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function gh(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function mh(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function fh(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ba(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Ba({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function Ba(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function hh(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function vh(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function td(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function wh(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function nd(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function sd(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function rd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function ad(){if(!Array.isArray(r.n1KanjiCatalog)||!r.n1KanjiCatalog.length)return;const e=new Map(r.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),za(n,s))}),r.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(za({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))})}function za(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function id(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function od(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ua(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function ld(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function bh(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function kh(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>V(n)):[]})):[]}function yh(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===a)}function $h(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:V(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:kh(a.blanks),tiles:yh(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function cd(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],a=n.map(l=>ho(l)),o=new Set(s.map(l=>l.id));return a.forEach(l=>{o.has(l.category)||(o.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:a}}function ho(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function dd(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function Ns(){const e=dd();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:wo(),jlptLessonStudy:bo(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:yo(),n4Course:$o(),n3Course:jo(),n2Course:So(),n1Course:No(),kanaCourses:$c(null),unlockedJlptLevels:ze.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:Sd(),evaRelationship:xo(),shop:{owned:[],equipped:{}}}}function jh(){const e=Ns();try{const t=tC();return t?ud(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function ud(e,t){return{...e,...t,version:3,settings:Sh(e.settings,t.settings||{}),cards:nC({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:Lh(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Ja(t.dailyBonusPending||null),lastOpenedJlptLesson:qe(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:ON(t.lastOpenedJlptLessons||{}),viewedReadingLevels:hs(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:vd(e.learningPath,t.learningPath||{}),jlptLessonStudy:hd(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Lo(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:jd(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:wd(e.n5Course,t.n5Course||{}),n4Course:bd(e.n4Course,t.n4Course||{}),n3Course:kd(e.n3Course,t.n3Course||{}),n2Course:yd(e.n2Course,t.n2Course||{}),n1Course:$d(e.n1Course,t.n1Course||{}),kanaCourses:$c(t.kanaCourses||e.kanaCourses),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...ze])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:Ld(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:Nd(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...e.shop.owned||[],...t.shop&&t.shop.owned||[]])],equipped:{...e.shop.equipped,...t.shop&&t.shop.equipped||{}}}}}function Sh(e,t){const n={...e,...t||{}};return n.theme=Nh(n.theme,e.theme||"dark"),n.themeManuallySelected=hn(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=hn(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=hn(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=hn(n.languageManuallySelected,e.languageManuallySelected===!0),n}function Nh(e,t="dark"){return e==="light"||e==="dark"?e:t}function Lh(e,t){const n={...e,...t||{}};return n.current=vo(n.current,e.current||0),n.best=vo(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=pd(n.pendingReward),n}function pd(e){if(!e||typeof e!="object")return null;const t=vo(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Ja(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function hn(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function vo(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function wo(){return{version:_c,currentLevel:Pc,currentNodeId:xe,completedNodes:{},unlockedNodes:{[xe]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function bo(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function gd(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function md(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function fd(e,t){const n=gd(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:md(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function hd(e,t){const n=bo(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},l=s.sessions||{};return Object.keys(o).forEach(c=>{a[c]=fd(o[c],l[c])}),Object.keys(l).forEach(c=>{a[c]||(a[c]=fd(null,l[c]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function vd(e,t){return{...e,...t||{},version:_c,currentLevel:String(t?.currentLevel||e.currentLevel||Pc).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||xe),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:ko(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function ko(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Dt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function yo(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function wd(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:hs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Jr(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function $o(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function bd(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:hs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Jr(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function jo(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function kd(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:hs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Jr(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function So(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function yd(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:hs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Jr(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function No(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function $d(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:hs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Jr(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Lo(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:xh(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Ga(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Ga(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function xh(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const l=Rn(o.jp||Qp(o)),c=zs(l);if(!c||s.has(c))return;s.add(c);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Re(c).toString(36)}`;n.push({id:d,jp:l,hiragana:Rn(o.hiragana||o.reading||""),ru:Rn(o.ru||o.translationRu||""),en:Rn(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function jd(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function xo(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:ie(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function Sd(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function Nd(e,t){return{...e,...t,warmth:ce(Number(t.warmth??e.warmth),0,100),trust:ce(Number(t.trust??e.trust),0,100),discipline:ce(Number(t.discipline??e.discipline),0,100),curiosity:ce(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function Ld(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function an(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function Zn(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function zt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:an(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function Ch(){const e=zt();let t=null;try{const n=localStorage.getItem($);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=Ih(e,t||Th()),Ah(),es()}function Ah(){if(!r.evaRuntime)return;r.evaRuntime.memory=Zn(an(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=ie(),n=e.lastSeenDate||null,s=n?Math.max(0,Bn(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function Th(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function Ih(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:Zn(e.memory||an(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function Co(){if(!r.evaRuntime)return!1;xd(),r.evaRuntime.updatedAt=new Date().toISOString(),no=!1,Hn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Hn):window.clearTimeout(Hn),Hn=0);try{return localStorage.setItem($,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function es(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return Co();if(no)return!0;no=!0;const t=()=>{Hn=0,Co()};return"requestIdleCallback"in window?Hn=window.requestIdleCallback(t,{timeout:1200}):Hn=window.setTimeout(t,160),!0}function Ao(){To(),Co(),Bf()}function xd(){if(!r.evaRuntime||!r.progress)return;const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background||"bg_study_hub",t=lt().filter(n=>Gt(n.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],r.evaRuntime.currentBackground=e,r.evaRuntime.activeSkin=r.evaRuntime.currentSkin||r.progress.selectedEvaSprite||"idle",r.evaRuntime.activeBackground=e}function To(){return r.progress?(r.progress.level=Fi(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),to=!1,Gn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Gn):window.clearTimeout(Gn),Gn=0),sC(r.progress)):!1}function C(e={}){if(!r.progress)return!1;if(e?.immediate)return To();if(to)return!0;to=!0;const t=()=>{Gn=0,To()};return"requestIdleCallback"in window?Gn=window.requestIdleCallback(t,{timeout:1200}):Gn=window.setTimeout(t,120),!0}function Cd(e,t,{timeout:n=0}={}){const s=()=>{try{const a=t?.();a&&typeof a.then=="function"&&a.catch(o=>console.warn(`[Flash Kanji] ${e} failed.`,o))}catch(a){console.warn(`[Flash Kanji] ${e} failed.`,a)}};requestAnimationFrame(()=>window.setTimeout(s,n))}function Rh(){Me(),ss(),Lt(),window.setTimeout(ss,120),window.setTimeout(ss,320)}function jt(e,t,n={}){Cd(e,()=>{const s=t?.();s&&typeof s.then=="function"&&s.catch(a=>console.warn(`[Flash Kanji] ${e} failed.`,a)),C(),n.scrollTop?Rh():Nt()})}function _h(e){const t=e?.dataset?.action||"",n=Ph(t,e);return n?uo.has(n)?!1:(uo.add(n),requestAnimationFrame(()=>window.setTimeout(()=>uo.delete(n),0)),!0):!0}function Ph(e,t){return e?e==="rate"?`rate:${r.activeCardId||""}:${t?.dataset?.rating||""}`:e==="rate-kana-review"?`rate-kana:${t?.dataset?.course||""}:${t?.dataset?.card||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${r.activeExerciseReviewLevel||""}:${r.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function mr(){r.cards.forEach(s=>F(s.id)),r.progress.level=Fi(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),oN()),ue(),Ts(),xr(),ll(),pl(),hl(),typeof gi=="function"&&gi();const e=Ws(),t=[Li(Z(),"N5"),Li(W(),"N4"),Li(H(),"N3"),Li(q(),"N2"),xi(Z(),"N5"),xi(W(),"N4"),xi(H(),"N3"),xi(q(),"N2")].some(Boolean);[Z(),W(),H(),q(),typeof ee=="function"?ee():null].filter(Boolean).forEach(s=>Mh(s)),(t||e)&&C(),Ha();const n=r.lessons.find(s=>Oe(s));r.activeLessonId||(r.activeLessonId=n?.id||r.lessons[0]?.id||null)}function Mh(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=hs(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function Ls(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function Ha(){r.progress.learningPath=vd(wo(),r.progress.learningPath||{});const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[xe]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(Z().studiedKanji||{}).length>0||Object.keys(Z().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[xe]&&(t[xe]=r.progress.visits?.firstVisitDate||new Date().toISOString()),Io().forEach((o,l)=>{Z().completedLessons?.[o]&&!t[o]&&(t[o]=Z().completedLessons[o]),n[o]=!0});const a=Ad();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function Io(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:pf.filter(t=>/^n5-lesson-\d+$/i.test(t))}function Ad(){const e=r.progress?.learningPath||wo(),t=[xe,...Io(),ys];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||xe}function Ro(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):ur||(ur=Ue(B.n5Lessons).then(e=>(r.n5Textbook=Yc(e),Ha(),(r.route==="learn"||r.route==="home")&&I(),r.n5Textbook)).catch(e=>{throw ur=null,e}),ur)}function Eh(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=gf[t];if(!n){const a=$r(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(Pa.has(t))return Pa.get(t);const s=Ue(n).then(a=>(r.learningPathLessonPayloads[t]=a||$r(t),r.route==="learn"&&r.activeLearnNodeId===t&&I(),r.learningPathLessonPayloads[t])).catch(a=>{const o=$r(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&I(),o;throw a}).finally(()=>{Pa.delete(t)});return Pa.set(t,s),s}function vn(){return Ha(),r.progress.learningPath}function _o(){const e=vn().activeSession;return!e?.nodeId||vn().completedNodes?.[e.nodeId]?null:e}function xs(){const e=_o();return e?.nodeId?e.nodeId:vn().currentNodeId||Ad()||xe}function Td(e){const t=ts(e);return t?h(t.title):Kh(e)}function Kh(e){const t=String(e||"");if(t===xe)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===ys)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=At(t);if(n)return h(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Dh(e){const t=ts(e);return t?h(t.summary):""}function de(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Fh(){const e=de();return{id:xe,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Oh(){const e=Ke();return de(),{id:ks,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function Bh(){return{id:ys,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function zh(){return Io().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function Id(){const e=Fh(),t=Oh(),n=Bh(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,l)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):zh(),a=[e];return Ke()>0&&a.push(t),[...a,...s,n]}function ts(e){const t=String(e||"");return t&&Id().find(n=>n.id===t)||null}function Rd(e){if(!e)return"locked";if(e.id===ks)return Ke()>0?"review":"available";const t=vn();return t.completedNodes?.[e.id]?"completed":xs()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Uh(e){const t=de();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function _d(){const e=vn(),t=Ke(),n=_o(),s=xs(),a=ts(s),o=Number(dn().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[xe]&&!n?{kind:"node",label:de().start,nodeId:xe}:n?.nodeId?{kind:"node",label:de().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${de().reviewAction}: ${t}`,nodeId:ks}:o&&a?{kind:"node",label:de().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[xe]?de().resume:de().start,nodeId:a.id}:{kind:"review",label:de().reviewOld,nodeId:ks}}function Jh(){const e=de(),t=JN(),n=t?.level||Yt(),s=t?.lessonId||sc(n),a=ms(n),o=lm(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Gh(){const e=gn(),t=Ke(),n=de();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Hh(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function qh(){const e=p()==="ru",t=el();return ze.map(n=>{const s=Pt(n),a=aa(n),o=ms(n),l=n==="N5"?as():Object.keys(o?.completedLessons||{}).length,c=Math.max(Number(s?.lessonCount||0),a.length||0),d=wt(n),u=am(n),m=!u&&t===n,f=h(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),v=c>0?`${l}/${c} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",w=u?e?"Пройдено":"Completed":m?`${v} · ${e?"сейчас":"now"}`:d?v:pn(n);return{level:n,title:f,note:w,status:u?"done":m?"current":d?"open":"locked"}})}function Wh(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function Xh(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function Pd(){const e=xs();return{title:Td(e),summary:Dh(e)}}function F(e){const t=String(e);r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=Et(r.progress.cards[t]);return n.successRate=wm(n),Number.isFinite(Number(n.srsStep))?n.srsStep=ce(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=Mo(n),r.progress.cards[t]=n,n}function fr(e,t="seen"){if(!r.progress||!e?.id)return!1;ue();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function hr(e,t="seen"){fr(e,t)&&C()}const St=[5/1440,1/24,12/24,1,2,4],Po=1;function Mo(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<St.length;s+=1)if(t<=St[s]*1.08)return s;const n=St[St.length-1];return St.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function Qh(e){const t=Math.trunc(e);return t<0?0:t<St.length?St[t]||St[0]:St[St.length-1]*2**(t-(St.length-1))}function Vh(e,t,n=Po){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],l=Math.max(1,Math.trunc(Number(n)||Po));let c=0,d=0,u=0;for(;c<s.length||d<a.length;){if(u>=l&&d<a.length){o.push(a[d++]),u=0;continue}if(c<s.length){o.push(s[c++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function Yh(e,t){const n=Mo(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Zh(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function qa(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function Ut(e,t,n="jlpt_lesson"){if(!t)return!1;const a=Md(e,t).reduce((o,l)=>fr(l,n)||o,!1);return a&&C(),a}function Md(e,t){const n=String(e||"").toUpperCase();return n==="N5"?$n(t):n==="N4"?Pr(t):n==="N3"?Er(t):n==="N2"?Dr(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function ev(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function Ed(){return ue(),r.progress.evaRoomQuiz}function Kd(){const e=[r.cards||[],typeof Ht=="function"?Ht():[],typeof Ve=="function"?Ve():[],typeof Ze=="function"?Ze():[],typeof tt=="function"?tt():[]];return Dd(e.flat().filter(Boolean))}function tv(){if(!r.progress)return[];ue();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=nv(),a=Kd().filter(o=>{if(!o?.id||!o.kanji||!Be(o,"ru")||!Be(o,"en"))return!1;const l=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||ev(o)||n.has(o.lessonId)||s.has(`${l}:${o.kanji}`)||s.has(o.kanji)});return Dd(a)}function nv(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return Eo().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(l=>t(n.level,l))})}),e}function Eo(){return[{level:"N5",course:Z,lessonById:At,markStudied:Ks,markDifficult:Rr},{level:"N4",course:W,lessonById:Sn,markStudied:Ds,markDifficult:Mr},{level:"N3",course:H,lessonById:Ln,markStudied:Fs,markDifficult:Kr},{level:"N2",course:q,lessonById:Cn,markStudied:Os,markDifficult:Fr}]}function Dd(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Be(n,"ru")}:${Be(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function sv(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function rv(e){if(e.target.classList?.contains("detail-backdrop")){D("menu_close"),r.detailCardId=null,le();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,le();return}if(e.target.classList?.contains("changelog-backdrop")){fo();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,le();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,a=n.dataset.id;if(sv(n),!!_h(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-Gc<280)){if(s&&s.endsWith("-complete-lesson")){const l=`${s.split("-")[0]}:${a||""}`;if(oe.has(l)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(Ko(s),requestAnimationFrame(()=>window.setTimeout(()=>ov(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Va(o)){Mv(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Qe(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Qe(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&dm(n.dataset.shareSection||r.route,FN(n)).catch(()=>z(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&fm(!lc()),s==="notification-center"){if(r.notificationPromptVisible){ym();return}(r.notificationPrompt?.docked||Hi("header"))&&qi("header");return}if(s==="repeat-onboarding"){Bo({force:!0});return}if(s==="onboarding-next"){Zd();return}if(s==="onboarding-prev"){eu();return}if(s==="onboarding-continue"){Rv();return}if(s==="onboarding-close"||s==="onboarding-skip"){kr({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){mg(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,le()),s==="copy-contact-email"&&gm(tn).then(o=>{z(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,le()),s==="close-changelog"){fo();return}if(s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,le()),s==="close-nav-menu"&&(r.navMenu=null,le()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,le()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,le()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?lp(!0):o==="N3"?kp(!0):o==="N2"?Rp(!0):o==="N1"?Up(!0):Qu(!0)}if(s==="final-test-next-level"){const o=Q(n.dataset.nextLevel||""),l=String(n.dataset.nextLesson||"");if(!o||!l)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,Di(o,l);return}if(s==="scroll-page-edge"&&((n.dataset.direction||zo())==="up"?ss():_v()),s==="theme"&&lL(),s==="language"&&cL(),s==="sound"&&mm(),s==="toggle-ux-sound"&&dL(),s==="export"&&DN(),s==="apk-download"&&pe("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&Hc.click(),s==="reset"&&oL(),s==="share-achievement"&&eL().catch(()=>z(_("shareFallback"))),s==="pwa-install"&&PL(),s==="pwa-later"&&fc(),s==="notification-allow"&&FL(),s==="notification-later"&&Wi(),s==="mascot-click"&&L0(n.dataset.character),s==="eva-click"&&yg(),s==="eva-dialogue-skip"&&iv(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=ar,le()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=Zo();xu(o),r.activeCardId=null,le()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=uf,le()),s==="toggle-favorite"&&uN(a),s==="eva-room-choice"&&Hw(n),s==="eva-question-answer"&&Kw(n),s==="eva-room-reset"&&Ww(),s==="toggle-eva-autonomy"&&sb(),s==="cycle-eva-autonomy"&&rb(),s==="eva-autonomy-room-mode"&&ab(),s==="eva-autonomy-outfit-mode"&&ib(),s==="eva-autonomy-next"&&Nu(),s==="eva-autonomy-clear"&&ob(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,ke("shop_opened"),le()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,le()),s==="eva-bg-buy"&&Xw(a),s==="eva-bg-select"&&Qw(a),s==="eva-sprite-buy"&&Vw(a),s==="eva-sprite-select"&&Yw(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",le()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",le()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",le()),s==="shop-buy"&&oi(a),s==="shop-select"&&li(a),s==="shop-clear-effect"&&Su(a),s==="shop-clear-item"&&tb(a),s==="clear-writing"&&K0(),s==="undo-writing"&&D0(),s==="check-writing"&&F0(!0),s==="replay-writing"&&Lg(),s==="play-writing-step"&&xg(),s==="writing-step-prev"&&Cg(-1),s==="writing-step-next"&&Cg(1),s==="select-writing-step"&&Ag(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&aS(Number(n.dataset.index)),s==="undo-sentence-tile"&&iS(),s==="clear-sentence"&&oS(),s==="check-sentence"&&lS(),s==="next-sentence"&&dS(),s==="reading-review-tile"&&xk(Number(n.dataset.index)),s==="reading-review-undo"&&Ck(),s==="reading-review-clear"&&Ak(),s==="reading-review-check"&&Hu(),s==="reading-review-answer"&&Lk(n),s==="toggle-reading-translation"&&Tk(),s==="add-custom-sentence"&&Jj(),s==="edit-custom-sentence"&&Hj(n.dataset.id),s==="delete-custom-sentence"&&qj(n.dataset.id),s==="cancel-custom-sentence-edit"&&Wj(),s==="insert-jlpt-tile"&&_N(Number(n.dataset.index)),s==="undo-jlpt-tile"&&PN(),s==="clear-jlpt-practice"&&MN(),s==="check-jlpt-practice"&&EN(),s==="next-jlpt-practice"&&KN(),s==="kana-submit-exercise"&&Wb(n),s==="kana-writing-done"&&Xb(n.dataset.course||"",n.dataset.lesson||""),s==="kana-srs"&&Qb(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="kana-toggle-romaji"&&Yb(),s==="play-kana-tts"&&Zb(n.dataset.text||""),s==="kana-download-pdf"&&pe("kana_pdf_download",{course:n.dataset.course||""}),s==="n5-open-lesson"&&Ek(a),s==="n5-overview"&&Kk(),s==="n5-review"&&Dk(n.dataset.mode||null),s==="n5-answer"&&Ik(n),s==="n5-check-input"&&Rk(a),s==="n5-srs"&&Wu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&Pk(a),s==="n5-complete-lesson"&&Mk(a),s==="jlpt-lesson-answer"&&_k(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&Bk(n),s==="n5-final-submit"&&Qu(),s==="n5-final-reset"&&zk(),s==="n4-open-lesson"&&gy(a),s==="n4-overview"&&my(),s==="n4-review"&&fy(n.dataset.mode||null),s==="n4-kanji"&&hy(),s==="n4-grammar"&&vy(),s==="n4-reading"&&wy(),s==="n4-listening"&&by(),s==="n4-final"&&ky(),s==="n4-answer"&&iy(n),s==="n4-check-input"&&oy(a),s==="n4-srs"&&ap(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&ly(a),s==="n4-complete-lesson"&&cy(a),s==="n4-grammar-complete"&&dy(a,n.dataset.value||""),s==="n4-reading-complete"&&uy(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&py(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&jy(n),s==="n4-final-submit"&&lp(),s==="n4-final-reset"&&Sy(),s==="n3-open-lesson"&&Qy(a),s==="n3-overview"&&Vy(),s==="n3-review"&&Yy(n.dataset.mode||null),s==="n3-kanji"&&Zy(),s==="n3-grammar"&&e$(),s==="n3-reading"&&t$(),s==="n3-listening"&&n$(),s==="n3-final"&&s$(),s==="n3-answer"&&Uy(n),s==="n3-check-input"&&Jy(a),s==="n3-srs"&&vp(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&Gy(a),s==="n3-complete-lesson"&&Hy(a),s==="n3-grammar-complete"&&qy(a,n.dataset.value||""),s==="n3-reading-complete"&&Wy(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&Xy(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&i$(n),s==="n3-final-submit"&&kp(),s==="n3-final-reset"&&o$(),s==="n2-open-lesson"&&_$(a),s==="n2-overview"&&P$(),s==="n2-review"&&M$(n.dataset.mode||null),s==="n2-kanji"&&E$(),s==="n2-grammar"&&K$(),s==="n2-reading"&&D$(),s==="n2-listening"&&F$(),s==="n2-final"&&O$(),s==="n2-answer"&&L$(n),s==="n2-check-input"&&x$(a),s==="n2-srs"&&Ap(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&C$(a),s==="n2-complete-lesson"&&A$(a),s==="n2-grammar-complete"&&T$(a,n.dataset.value||""),s==="n2-reading-complete"&&I$(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&R$(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&U$(n),s==="n2-final-submit"&&Rp(),s==="n2-final-reset"&&J$(),s==="n1-open-lesson"&&vj(a),s==="n1-overview"&&wj(),s==="n1-review"&&bj(n.dataset.mode||null),s==="n1-kanji"&&kj(),s==="n1-grammar"&&yj(),s==="n1-reading"&&$j(),s==="n1-listening"&&jj(),s==="n1-final"&&Sj(),s==="n1-answer"&&dj(n),s==="n1-check-input"&&uj(a),s==="n1-srs"&&Op(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&pj(a),s==="n1-complete-lesson"&&gj(a),s==="n1-grammar-complete"&&mj(a,n.dataset.value||""),s==="n1-reading-complete"&&fj(a,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&hj(a,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&xj(n),s==="n1-final-submit"&&Up(),s==="n1-final-reset"&&Cj(),s==="review-exercise-next"){cs(),r.pendingFocus="__scroll-top__",I();return}if(s==="play-kanji-audio"){const o=se(a)||se(r.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?sm(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:(l={})=>nm(o,l)}):tm(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(un(o)){if(Vt("jlpt-level",{level:o}),!wt(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,Qe("textbooks",null,o),z(pn(o));return}r.activeJlptLesson=o,Qe("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(Vt("jlpt-start",{level:n.dataset.jlpt||Yt()}),Di(n.dataset.jlpt||Yt())),s==="social-link"&&pe(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:r.route,source:n.dataset.network||"social"}),s==="play-audio"&&NN(n.dataset.audio,n.dataset.label),s==="close-reward"&&(r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&jg(r.rewardModal),Nt()),s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),C(),z(`${_("dailyGoal")}: ${r.progress.settings.dailyGoal}`),I()),s==="buy-shop"&&oi(a),s==="start-due"&&(Qe("textbooks"),Ke()||z(Pe("eva","welcome"))),s==="home-lesson"){const o=Q(n.dataset.level||"")||Yt(),l=String(n.dataset.lessonId||"");Di(o,l)}if(s==="home-review"&&(Ke()?Qe("review"):z(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&(Vt("home-primary"),fb()),s==="learning-path-node"&&(Vt("learning-path",{lessonId:n.dataset.node||a}),Cu(n.dataset.node||a)),s==="learning-path-back"&&ns(),s==="learning-path-choice"){const o=String(n.dataset.node||""),l=String(n.dataset.step||""),c=String(n.dataset.value||""),d=jr(o),u=d.steps.find(m=>m.id===l);if(!u||u.kind!=="quiz"||d.session.answers?.[l])return;d.session.answers[l]={selected:c,correct:c===u.answer,at:new Date().toISOString()},c===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],l])],d.session.updatedAt=new Date().toISOString(),C(),I()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=jr(o);if(!l.steps.length)return;const c=l.steps[l.session.stepIndex];if(c?.kind==="quiz"&&!l.session.answers?.[c.id])return;l.session.stepIndex=Math.min(l.session.stepIndex+1,l.steps.length),l.session.updatedAt=new Date().toISOString(),C(),I()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=(jr(o).session.mistakes||[]).slice();vn().activeSession=ko({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:c,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),C(),I()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=jr(o);kb(o,l.session,l.steps),ns();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(l=>l.id===a);if(!o||!Oe(o)){z(`${_("unlockedAt")} ${Ki(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,at(),s==="start-lesson"){Vt("legacy-lesson",{level:o.jlpt||"",lessonId:a}),ke("lesson_start",{lessonId:a,jlpt:o.jlpt});const l=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(l)?(Qe("textbooks",null,l),r.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(l)}/${encodeURIComponent(o.id)}`),I()):ns(sn,o.id)}else I()}if(s==="show-answer"&&(hr(se(r.activeCardId),"show_answer"),r.revealed=!0,at(),Me()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),Jg()}if(s==="rate"&&b0(n.dataset.rating),s==="rate-kana-review"&&vg(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="open-card"&&(hr(se(a),"card_details"),r.detailCardId=a,I()),s==="open-kanji-page"&&uv(a),s==="close-detail"&&(r.detailCardId=null,le()),s==="study-card"){const o=se(a);if(!o)return;hr(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,at(o.id),r.detailCardId=null,ns(sn,o.lessonId)}}}function av(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;Gc=Date.now(),e.preventDefault(),Ko(n),n==="eva-click"&&yg(),n==="eva-autonomy-next"&&Nu()}function Ko(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=Zn(an(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=ie()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function iv(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||te().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,es(),I())}function ov(e,t){if(!(!e||t?.disabled)&&!lv(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){D("menu_open");return}if(e==="eva-room-shop-close"){D("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Va(t.dataset.route)){D(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}D("tab_switch");return}if(e==="nav-menu-route"){D("tab_switch");return}if(e==="close-nav-menu"){D("menu_close");return}if(e==="toggle-header-socials"){D(lc()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){D("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){D("menu_close");return}if(e==="notification-center"){D("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){D("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){D("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){D("notification_soft");return}t?.matches("button, .btn, [role='button']")&&D("button_click"),e!=="toggle-header-socials"&&fm(!1)}}function lv(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function Fd(e){var d;Ko("input");const t=e.target.closest("[data-ux-volume]");if(t){fL(Number(t.value)/100);const u=document.querySelector("[data-ux-volume-label]");u&&(u.textContent=`${Math.round(Ui()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const u=Ie(),m=s.dataset.sentenceDraft;u.customDraft=Ga(u.customDraft||{}),m&&Object.prototype.hasOwnProperty.call(u.customDraft,m)&&(u.customDraft[m]=s.value,u.customMessage="",u.customStatus="",C());return}const a=e.target.closest("[data-kana-exercise-form] input");if(a){const u=a.closest("[data-kana-exercise-form]"),m=rl(u?.dataset.course||"",u?.dataset.owner||"",u?.dataset.ownerType||"",u?.dataset.exercise||""),f=String(a.name||"").replace(/^kana-/,"");m&&f&&((d=r.kanaExerciseDrafts)[m]||(d[m]={}),r.kanaExerciseDrafts[m][f]=a.value);return}const o=e.target.closest("[data-filter]");if(!o)return;const l=o.dataset.filter,c=o.selectionStart;r.filters[l]=o.value,r.dictionaryVisibleCount=ar,I(),requestAnimationFrame(()=>{const u=document.getElementById(o.id);u&&(u.focus(),typeof c=="number"&&"setSelectionRange"in u&&u.setSelectionRange(c,c))})}function cv(e){if(Tv(e)||dv(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,r.changelogModal?fo():I();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,Jg())}function dv(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(Ma=`${Ma}${e.key.toLowerCase()}`.slice(-me.length),Ma!==me)?!1:(Ma="",Od(5e3),!0)}function Od(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(G(0,t,"cheat:moon_farm"),X(),C(),D("moon_fragment_gain"),z(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),I(),r.progress.moonFragments):0}function ns(e=nn,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===Dt&&String(t||"")||null,r.activeLearnLegacyLessonId=e===sn&&String(t||"")||null;const s=e===Dt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===sn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,at(),Lt(),le()}function Qe(e,t=null,n=null){if(e==="learn"){ns(nn,null,t);return}if(!Jm(e)){const a=String(e||"");wa(ge("hash","unknown-route",a,a?[a]:[])),it(a?`#${encodeURIComponent(a)}`:"#not-found"),r.pendingFocus=t,r.navMenu=null,at(),Lt(),Me();return}const s=r.route;if(r.route=e,r.routeMatch=null,r.routeNotFound=null,s!==r.route&&(s==="review"||r.route==="review")&&(r.reviewSession=null),r.route==="textbooks"){const a=n?String(n):"",o=Q(a),l=Fe(a)?a.toLowerCase():"",c=o||l;if(a&&!c){wa(ge("hash","invalid-parameter",`textbooks/${a}`,["textbooks",a])),it(`#textbooks/${encodeURIComponent(a)}`),r.pendingFocus=t,Me();return}r.activeTextbookLevel=c||null,r.activeTextbookSubroute=null}else if(r.route==="jlpt-lesson"){const a=n?String(n).toUpperCase():r.activeJlptLesson||ex()||"";if(a&&!Q(a)){wa(ge("hash","invalid-parameter",`jlpt-lesson/${a}`,["jlpt-lesson",a])),it(`#jlpt-lesson/${encodeURIComponent(a)}`),r.pendingFocus=t,Me();return}r.activeJlptLesson=a||null}else r.activeTextbookLevel=null,r.activeTextbookSubroute=null;if(r.route!=="review"&&cs(),r.route==="textbooks")it(Cm(r.activeTextbookLevel||"",r.activeTextbookSubroute||""));else{const a=r.route==="learn"?"#learn":r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;it(a)}r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),at(),Lt(),Me(),pr(r.route)&&Ea({route:r.route,delay:0}),r.route==="eva-room"&&ke("room_opened")}function uv(e){const t=se(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,at();const n=`#kanji/${encodeURIComponent(t.id)}`;it(n),Lt(),Me()}function pv(){return r.routeMatch||Qi(va())}function gv(){const e=pv();if(!Bc){NC(e,r),Bc=!0,Bd(e);return}LC(e,r).sent&&Bd(e)}function Bd(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){pe("review_open",{route:"review"});return}if(e.route==="kanji"){pe("kanji_open",{route:"kanji",cardId:t.cardId||r.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){pe("lesson_open",{route:"jlpt-lesson",level:t.level||r.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){pe("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){pe("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}mv(n)&&pe("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}if(e.route==="textbooks"&&t.course){const n=String(t.subroute||"");n?n==="final"||n==="final-test"?pe("kana_final_test_start",{route:"textbooks",course:t.course}):/^lesson-\d+$/i.test(n)&&pe("kana_lesson_open",{route:"textbooks",course:t.course,lessonId:n}):pe("kana_course_open",{route:"textbooks",course:t.course})}}function mv(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function zd(){const e=hf.begin(r.route);Ia=!0,Ra=null,Q0();try{qv(),hv(),gv();let t="";if(r.route===Sc&&(t=wr(r.routeNotFound)),r.route==="home"&&(t=Xv()),r.route==="download"&&(t=zv()),r.route==="about"&&(t=Jv()),r.route==="learn"&&(t=mb(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(Vl)),r.route==="review"&&(t=Mj(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(Vl)),r.route==="dictionary"&&(t=IS()),r.route==="kanji"&&(t=ES()),r.route==="writing"&&(t=ZS(),requestAnimationFrame(_0)),r.route==="stats"&&(t=s0(),requestAnimationFrame(Sg)),r.route==="achievements"&&(t=i0()),r.route==="eva-room"&&(t=ew()),r.route==="jlpt-lesson"&&(t=jb()),r.route==="textbooks"&&(t=Sb()),t||(t=wr(ge("hash","unknown-route",String(r.route||""),r.route?[String(r.route)]:[]))),!e.isCurrent())return;fn.innerHTML=`${t}${Fv()}${vv()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||hg()||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal)),v0(),requestAnimationFrame(()=>{Hv(),Uo(),xv()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${r.route} build=${R}`,t?.stack||t),fn.innerHTML=Wa(t))}finally{Ia=!1}}function le(){$s||($s=requestAnimationFrame(()=>{$s=0,zd()}))}function Me(){$s&&(cancelAnimationFrame($s),$s=0),zd()}function vr(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function Nt(){if(typeof window>"u"){Me();return}const e=window.scrollX,t=window.scrollY;Me(),vr(e,t),requestAnimationFrame(()=>{vr(e,t),requestAnimationFrame(()=>vr(e,t))}),window.setTimeout(()=>vr(e,t),120),window.setTimeout(()=>vr(e,t),320)}function I(){le()}function Wa(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(r.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function wr(e=r.routeNotFound){fv();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},a=e?.raw||location.pathname||location.hash||"";return`
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
    `}function fv(){document.title=(p()==="ru","404 — Flash Kanji"),Ud("robots","noindex, follow"),Jd("/404.html")}function hv(){r.route!==Sc&&(document.title=bf,Ud("robots","index, follow"),Jd("/"))}function Ud(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function Jd(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function vv(){const e=`${Gv()}${t0()}${c0()}${mS()}${d0()}${u0()}${p0()}${g0()}${m0()}${Pv()}`;return e?`<div class="modal-layer">${e}</div>`:""}function Gd(){return he?.isConnected?he:document.body?(he||(he=document.createElement("div"),he.className="flash-kanji-onboarding-root",he.setAttribute("role","presentation"),he.setAttribute("aria-hidden","false")),he.isConnected||document.body.appendChild(he),he):null}const Do=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Xa={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Hd(){try{return localStorage.getItem(Ac)==="true"}catch{return!1}}function wv(){try{return localStorage.getItem(Ic)||""}catch{return""}}function Qa(e){try{localStorage.setItem(Ic,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function bv(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function kv(e=!1){const t=wv();return t==="returning"||t==="completed"?t:Hd()?(Qa("completed"),"completed"):e?(Qa("returning"),"returning"):(Qa("new"),"new")}function qd(){return!Hd()}function yv(){try{localStorage.getItem(Tc)==="true"&&localStorage.removeItem(Tc)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function $v(){try{localStorage.setItem(Ac,"true"),Qa("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function Wd(){return $t}function br(){return Do.length}function Fo(){return Do[ce(Ot,0,br()-1)]||Do[0]}function jv(e=Fo()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function Sv(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Xd(e=Fo()){for(const t of jv(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>Sv(a));if(s)return s}return null}function Qd(e,t=null){return typeof e=="function"?Qd(e(t),t):h(e||{ru:"",en:""})}function Nv(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Lv(){return!($t||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.navMenu)}function Oo(e=!1,t=cf){clearTimeout(js),!(!e&&!qd())&&(js=window.setTimeout(()=>{js=0,Bo({force:e})},t))}function Bo(e={}){const t=!!e.force;let n=!1;if($t){if(!t)return!0;kr({completed:!1,silent:!0})}if(!t&&!qd())return!1;if(!Lv())return Oo(t,Rc),!1;clearTimeout(js);try{ro=document.activeElement instanceof HTMLElement?document.activeElement:null,$t=!0,Ne="step",Ot=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(a){console.warn("Could not make the app shell inert.",a)}}return Gd(),Cs(),Vd(),n=!0,window.addEventListener("scroll",wn,{passive:!0}),window.addEventListener("resize",wn),window.addEventListener("orientationchange",wn),wn(),Yd(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),kr({completed:!1,silent:!0}),n||Oo(t,Rc),!1}}function kr(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(js),js=0,cancelAnimationFrame(or),or=0,window.removeEventListener("scroll",wn),window.removeEventListener("resize",wn),window.removeEventListener("orientationchange",wn),Bt&&Bt.classList.remove("is-onboarding-target"),Bt=null,$t=!1,Ne="step",Ot=0,he&&(he.remove(),he=null,Xe=null,Ce=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&$v(),n||(s?Qe(s):I()),ro?.focus&&requestAnimationFrame(()=>{try{ro.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function Cs(){if(!Gd())return;const e=Ne==="final"?null:Fo(),t=Ne==="final"?null:Xd(e),n=Ne==="final"?Xa.title:e.title,s=Ne==="final"?Xa.text:Qd(e.text,t),a=Ne==="final"?p()==="ru"?"Готово":"Done":`${Ot+1} ${p()==="ru"?"из":"of"} ${br()}`,o=h(n),l=h(s),c=Ni("eva","calm","welcome"),d=br();he.classList.toggle("is-final",Ne==="final"),he.classList.toggle("has-target",!!t),he.dataset.view=Ne;const u=Ne==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(h(Xa.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(h(Xa.close))}</button>
      `:Ot===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;he.innerHTML=`
      ${Ne==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${Ne==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${Ne==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
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
    `,Xe=Ae("[data-onboarding-spotlight]",he),Ce=Ae(".flash-kanji-onboarding-dialog",he),Bt&&Bt!==t&&Bt.classList.remove("is-onboarding-target"),Bt=t||null,Bt&&Bt.classList.add("is-onboarding-target"),Ce&&(Ce.dataset.totalSteps=String(d)),wn()}function wn(){$t&&(or||(or=requestAnimationFrame(()=>{or=0,Vd()})))}function Vd(){if(!$t||!he||!Ce)return;const e=Ne==="final"?null:Bt||Xd();Nv();const t=window.innerWidth,n=window.innerHeight;if(Ce.style.maxWidth=`${Math.min(df,Math.max(280,t-16))}px`,Ce.style.maxHeight=`${Math.max(180,n-24)}px`,Ce.style.left="50%",Ce.style.top="50%",Ce.style.transform="translate(-50%, -50%)",Ce.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&Xe?(Xe.hidden=!1,Xe.style.left=`${Math.round(s.left-12)}px`,Xe.style.top=`${Math.round(s.top-12)}px`,Xe.style.width=`${Math.round(s.width+12*2)}px`,Xe.style.height=`${Math.round(s.height+12*2)}px`,Xe.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):Xe&&(Xe.hidden=!0)}else Xe&&(Xe.hidden=!0);he.style.visibility="visible",Yd()}function xv(){$t&&Cs()}function Yd(){if(!Ce)return;const e=Ce.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Ce.querySelectorAll("button"),n=e||t[0]||Ce;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function Cv(){return Ce?Array.from(Ce.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function Av(e=1){const t=Cv();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function Tv(e){return $t?e.key==="Tab"?(e.preventDefault(),Av(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),kr({completed:Ne==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),Zd(),!0):e.key==="ArrowLeft"?(e.preventDefault(),eu(),!0):!1:!1}function Zd(){if(!$t)return;const e=br()-1;if(Ne!=="final"){if(Ot<e){Ot+=1,Cs();return}Ne="final",Cs()}}function eu(){if($t){if(Ne==="final"){Ne="step",Ot=br()-1,Cs();return}Ot>0&&(Ot-=1,Cs())}}function Iv(e=null){kr({completed:!0,routeTo:e})}function Rv(){Iv("textbooks")}function ss(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Lt(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>ss()))}function _v(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function tu(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function zo(){return tu()?window.scrollY>32?"up":"down":null}function Pv(){const e=zo()||"down",t=tu()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function Uo(){const e=Ae('[data-action="scroll-page-edge"]');if(!e)return;const t=zo();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function Va(e){return e!=="review"&&nu(e).length>1}function Mv(e){if(!Va(e)){Qe(e);return}r.navMenu=r.navMenu===e?null:e,le()}function nu(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:el(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function Jo(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":_(e)}function Ev(){return["home","textbooks","review","dictionary","download","stats","about"]}function Kv(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function Dv(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(Kv(e))}</span>
          <span>${i(Jo(e))}</span>
        </button>
      </li>
    `}function Fv(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
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
                ${Ev().map(o=>Dv(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(kt.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${cm("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(kt.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${cm("instagram")}</span>
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
    `}function Ov(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function Bv(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function zv(){const e=Ov();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(nf)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(rf)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(Bv).join("")}
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
              <a class="btn ghost" href="${g(sf)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function Uv(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function Jv(){const e=Uv();return`
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
    `}function Gv(){const e=nu(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?Jo(t):"";return`
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
    `}function Hv(){if(!r.pendingFocus)return;const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Lt();return}const t={"lesson-card":".study-card, .daily-lesson-card","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function qv(){go(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Va(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=Jo(n))});const e=Ae('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),ic(),mL(),oc(),Wv()}function Wv(){const e=Ae("#sidebarProgressBar"),t=Ae("#sidebarProgressLabel"),n=Ae("#sidebarProgressPercent"),s=Ae("#sidebarProgressNote"),a=Ae("#sidebarUserAvatar"),o=Ae("#sidebarUserTitle"),l=Ae("#sidebarUserSubtitle"),c=gn(),d=Pd(),u=Ke(),m=Math.max(1,Number(r.progress?.level||1)),f=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=f),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${f}%`),s&&(s.textContent=u>0?`${u} ${de().reviewQueue} · ${d.title||de().mapHint}`:`${d.title||de().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`N${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),l&&(l.textContent=`${de().level} ${m} · ${r.progress?.streak?.current||0} ${de().streak}`)}function Xv(){r.n5Textbook?.items?.length||Ro();const e=Qv(),t=Jh(),n=Ke(),s=Pd(),a=Gh(),o=de(),l=gn(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=km();return`
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
          ${a.map(Hh).join("")}
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
                ${qh().map(Wh).join("")}
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
                ${u.map(Xh).join("")}
              </div>
            </article>
            ${ga()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${tr()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Yv(e)}
          </aside>
        </section>
      </section>
    `}function Qv(){Vv();const e=te(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=ii(),s=h(er("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||Jt().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",l=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),c=_s(t?.sprite||r.evaRuntime?.currentSkin||Go());return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:l,sprite:c}}function Vv(){ue();const e=te();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(Lu("manual"),te().currentLine||r.evaRuntime?.currentPhrase||null)}function Yv(e){const t=kn(),n=bn(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${au(h(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
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
          <img class="${g(ru({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function su(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function ru(e){const t=["eva-vn-sprite"],n=su(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function Zv(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function au(e,t=""){const n=Zv(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((l,c)=>`<span class="eva-line-piece" style="--i:${c}">${i(l)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function ew(){ue(),Ts(),xr(),X();const e=Gw(),t=e.node,n=on()||e.bg||Is(t.background),s=e.sprite||e.spriteSrc||_s(e.spriteId||yn(t.sprite)),a=kn(),o=bn(),l=Array.isArray(t.choices)?t.choices:[],c=su(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${fw()}
        ${pw(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(c)}" data-eva-state="${g(c)}" data-eva-mood="${g(e.mood||Jt().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:url('${g(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(h(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(ru(e))}" src="${g(s)}" alt="${g(h(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${nw(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(h(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(h(n.title||{}))}</span>
            </div>
            ${au(h(t.text||{}),d)}
            ${e.isAutonomy?gw(a):`
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

        ${r.evaRoomShopOpen?tw():""}
      </section>
    `}function tw(){const e=kn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${iu({closable:!0})}
      </aside>
    `}function nw(e={}){const t=sw(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(xt(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function sw(e={}){const t=e.decoration||te().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=we(t);return!n||n.type!=="decoration"||!Gt(n.id)?null:n}function iu(e={}){const t=As(),n=ow(),s=lt().filter(a=>Gt(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${lt().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(kn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${rw().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(a.id)}">
              ${i(h({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${aw().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${iw().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(lw).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${ug({limit:6})}
        </div>
      </div>
    `}function rw(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function aw(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function iw(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function ow(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=lt().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>ju(a)==="available")),t==="owned"&&(s=s.filter(a=>Gt(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function lw(e){const t=ju(e),n=As(),s=n.status[t]||t,a=nb(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}">
        <div class="custom-shop-preview">
          <img src="${g(e.preview||e.asset)}" alt="${g(xt(e))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(dw(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(xt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(cw(e))}</p>
          ${e.type==="outfit"&&ou(e)?`<blockquote class="custom-shop-phrase">${i(ou(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(uw(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function As(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function xt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function cw(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function ou(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function dw(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function uw(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function pw(e){kn();const t=bn(),n=te(),s=e.bg||on(),a=cu(e.spriteId||r.progress.selectedEvaSprite),o=we(r.customization?.selected?.effect),l=we(e.decoration||n.currentDecoration),c=mw(e.mood||n.mood),d=Ed();return`
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
          ${l?`<span>${i(xt(l))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(xt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function gw(e){const t=bn(),n=ii();return n?.id?`
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
    `}function bn(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function mw(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function fw(){const e=Jt(),t=kn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${g(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([a,o,l])=>`
            <div class="eva-relationship-stat eva-stat-${a}">
              <div><span>${i(o)}</span><strong>${Math.round(l)}</strong></div>
              <i><b style="width:${ce(l,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function kn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function ue(){var t,n,s,a,o,l,c,d,u,m,f,v,w;(t=r.progress).seenCards||(t.seenCards={}),(n=r.progress).seenKanji||(n.seenKanji={}),(s=r.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),(a=r.progress).selectedEvaRoomBackground||(a.selectedEvaRoomBackground="bg_study_hub"),(o=r.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(N=>{r.progress.unlockedEvaSprites.includes(N)||r.progress.unlockedEvaSprites.push(N)}),(l=r.progress).selectedEvaSprite||(l.selectedEvaSprite="idle");const e=Ld(Sd(),r.progress.evaAutonomy||{});if((c=r.progress).evaAutonomy||(c.evaAutonomy={}),Object.keys(r.progress.evaAutonomy).forEach(N=>delete r.progress.evaAutonomy[N]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||(r.evaRuntime=zt()),(d=r.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=r.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=r.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(f=r.progress.evaRoomDialogueProgress).visited||(f.visited={}),r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(v=r.progress).evaRoomQuiz||(v.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(w=r.progress.evaRoomQuiz).rewarded||(w.rewarded={}),r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=xo();else{const N=Nd(xo(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(j=>delete r.progress.evaRelationship[j]),Object.assign(r.progress.evaRelationship,N)}}function Jt(){return ue(),r.progress.evaRelationship}function Ts(){if(!r.progress||!r.cards.length)return!1;ue();const e=r.progress.evaRelationship;let t=!1;const n=ie(),s=e.lastDecayDate||n,a=Math.max(0,Bn(s,n));if(a>0){const S=r.progress.streak?.lastStudyDate,U=S?Bn(S,n):a+1;!S||U>1?(be({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(be({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=Gl(),l={learned:o.learned,mastered:o.mastered,reviews:Hl(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},c=e.lastKnown||{},d=S=>Math.max(0,Number(l[S]||0)-Number(c[S]||0)),u={},m=d("reviews"),f=d("learned"),v=d("mastered"),w=d("lessons"),N=d("streak"),j=d("wrong"),A=d("writing"),k=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),f&&(u.trust=(u.trust||0)+Math.min(20,f*.5),u.curiosity=(u.curiosity||0)+Math.min(16,f*.35)),v&&(u.trust=(u.trust||0)+Math.min(16,v*1.2),u.warmth=(u.warmth||0)+Math.min(8,v*.5)),w&&(u.warmth=(u.warmth||0)+Math.min(12,w*2),u.discipline=(u.discipline||0)+Math.min(10,w*1.5)),N&&(u.discipline=(u.discipline||0)+Math.min(15,N*3),u.warmth=(u.warmth||0)+Math.min(8,N)),A&&(u.curiosity=(u.curiosity||0)+Math.min(10,A*.8)),k&&(u.trust=(u.trust||0)+Math.min(10,k*.8)),j&&(u.discipline=(u.discipline||0)-Math.min(6,j*.12)),Object.keys(u).length&&(be(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,lu(),t}function be(e={},t="relationship",n={}){ue();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=Xi(ce(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),lu(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function lu(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function Go(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=we(e)?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&Za(n)?n:"idle"}function hw(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function yn(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=Go(),a=hw(n),o=n&&!a?n:s,l=r.evaRuntime?.mood||Jt().mood,c=t||(a?n:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[l]||"idle",d=yw(c),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(v=>vw(v,d)),...u,...d,"idle","default"].filter(Boolean).find(v=>r.evaSprites?.[v]&&(Za(v)||!o||Za(o)))||"idle"}function vw(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=Yn(n);return!a||a.defaultOwned||s.length<=1?s:ww(s)}function ww(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=oo%t.length;return[...t.slice(n),...t.slice(0,n)]}function bw(){const e=Go(),t=Yn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function kw(){io&&window.clearInterval(io),io=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==oo&&(oo=e,!(document.hidden||!bw())&&(r.route==="home"||r.route==="eva-room")&&I())},3e4)}function yw(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=$w(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function $w(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function te(){return ue(),r.progress.evaAutonomy}function Ya(){const e=te();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function Ho(){const e=r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(s=>s.id)),n=lt().filter(s=>s.type==="background"&&!t.has(s.id)).map(s=>({id:s.id,title:{ru:s.title_ru,en:s.title_en},file:s.asset||s.preview,price:s.price,defaultUnlocked:s.defaultOwned}));return[...e,...n]}function Is(e){return Ho().find(t=>t.id===e)||Ho()[0]}function on(){ue();const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background;return Is(e)||Is("bg_study_hub")}function jw(e){const t=Is(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function Sw(){const e=lt().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function cu(e){return Sw().find(t=>t.id===e)}function Za(e){if(!e)return!1;const t=cu(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function ei(e){ue();const t=r.evaRuntime?.mood||ln(Te()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=Ho().filter(l=>jw(l.id));return s.map(l=>a.find(c=>c.id===l)).find(Boolean)||We(a)||on()}function ti(e){ue();const t=r.evaRuntime?.mood||ln(Te()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(a=>Za(a)&&r.evaSprites?.[a])||r.progress.selectedEvaSprite||"idle"}function Nw(e){return e==="generated_line"?Lw():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function Lw(){ue();const e=kn(),t=r.progress.evaRoomDialogueProgress.generatedLine||ku("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||on().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function ni(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function xw(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function du(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function Cw(e,t=Te()){const n=e?.conditions||{},s=(o,l)=>{const c=du(l);return!c.length||c.includes(String(o))},a=(o,l)=>{const c=du(l);return!c.length||c.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function Aw(e="auto",t=Te()){return null}function si(e,t="auto",n=Te()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=Zn(an(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=ie(),s.lastKnownMood=r.evaRuntime.mood||Jt().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function uu(e){if(!r.evaRuntime)return;r.evaRuntime.memory=Zn(an(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=ie()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function Tw(){return{quiet:12e4,normal:zn(45e3,12e4),active:45e3}}function Iw(){ao&&window.clearInterval(ao),ao=window.setInterval(Rw,5e3)}function Rs(){const e=te(),t=Tw()[e.frequency]||zn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function Rw(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=Te(),t=r.evaRuntime,n=te(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return ke("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=ln(e),l=ri(e,o);(o!==t.mood||l!==t.emotion)&&(t.mood=o,t.emotion=l,n.mood=o,n.emotion=l,t.lastEmotionChangeAt=s,t.cooldowns.emotion=zn(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",Rs(),a=!0):yr("timer",{context:e})&&(a=!0)),a&&(es(),C(),r.route==="eva-room"&&I()),a}function Te(e={}){const t=r.progress?dn():{},n=r.evaRuntime||zt(),s=Zn(an(),n.memory||{}),a=new Date().getHours();return xd(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-po,lastEvent:n.lastEvent,dueReviews:r.progress?Ke():0,shopOpen:!!r.evaRoomShopOpen,...e}}function ln(e=Te()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function ri(e=Te(),t=ln(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return We(["approve","happy","soft_smile"]);if(n==="answer_wrong")return We(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return We(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return We(s[t]||s.neutral)}function yr(e="auto",t={}){if(!r.progress||!Ya()||!t.force&&r.route!=="eva-room")return!1;const n=te(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||Te({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=ln(a),l=pu(e)||qo(e);if(!l)return!1;r.evaRuntime||(r.evaRuntime=zt()),r.evaRuntime.mood=o;const c=l.emotion||ri(a,o,e),d=ei(l),u=yn(ti(l),c),m=Wo(l),f=Xo(l),v=vu(a,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:u,background:d.id,decoration:m,effect:f,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=v,n.currentDecoration=m,n.currentEffect=f,n.mood=o,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(w=>w!==l.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=zt()),Object.assign(r.evaRuntime,{mood:o,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:v,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:f,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:v?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:zn(15e3,3e4),phrase:zn(45e3,12e4),question:zn(3*6e4,7*6e4),visual:zn(10*6e4,15*6e4)}}),si(l,e,a),Qo(u,d.file),Rs(),be(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),es(),mn(),!0}function pu(e){const t=Aw(e,Te({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(te().recentLineIds||[]),o=s.filter(c=>!a.has(`${e}_${Re(`${c.ru||c.en}`)}`)),l=We(o.length?o:s);return l?{id:`${e}_${Re(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function gu(){const e=te(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function _w(e="auto"){const t=Jt(),n=new Date().getHours(),s=Ke(),a=dn(),o=[];return o.push(...xw(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function qo(e="auto"){ue(),Ts();const t=Jt(),n=Te({lastEvent:{type:e}}),s=te().currentLine?.id,a=new Set([s,...te().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],l=_w(e),c=(u,m=!1)=>o.filter(f=>{if(!(f.category===u||(f.tags||[]).includes(u))||!m&&a.has(f.id)||!yu(f,t)||!Cw(f,n))return!1;const w=Array.isArray(f.moods)?f.moods:[];return!w.length||w.includes(t.mood)});for(const u of l){const m=c(u);if(m.length)return We(m)}for(const u of l){const m=c(u,!0);if(m.length)return We(m)}const d=o.filter(u=>!a.has(u.id));return We(d.length?d:o)}function ke(e,t={},n={}){if(!e)return;xr(),n.skipAchievements||X();const s={type:fu(e),payload:t||{},at:Date.now()};mu(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:ke});function mu(e={}){if(!e.type||!r.progress)return;ue(),r.evaRuntime||(r.evaRuntime=zt());const t={type:fu(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),uu(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=Pw(t.type,t.payload);Object.keys(n).length&&be(n,`eva_event:${t.type}`,{silent:!0});const s=te();gu(),s.nextSpeakAt=0;const a=yr(t.type,{force:!0,eventPayload:t.payload});es(),C(),a&&r.route==="eva-room"&&I()}function fu(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function Pw(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function Wo(e){const t=r.evaRuntime?.mood||ln(Te()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return hu("decoration",s)}function Xo(e){const t=r.evaRuntime?.mood||ln(Te()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return hu("effect",s)||"none"}function hu(e,t=[]){const n=lt().filter(a=>a.type===e&&Gt(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||We(n))?.id||null}function vu(e=Te(),t=null){const n=te();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),l=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),c=Number(r.evaRuntime?.cooldowns?.question||zn(3*6e4,7*6e4));if(!a&&o-l<c||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(f=>f.id)),u=wu(s).filter(f=>!d.has(f.id)),m=We(u.length?u:wu(s));return m?{...m,at:new Date().toISOString()}:null}function wu(e="auto"){const t=tv();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${ie()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,l)=>{const c=n.has(String(o.id))?1:0,d=n.has(String(l.id))?1:0;return c-d||Re(`${s}:${o.id}`)-Re(`${s}:${l.id}`)}).slice(0,18).map(o=>Mw(o,t,e)).filter(Boolean)}function Mw(e,t,n="auto"){const s=Be(e,"ru"),a=Be(e,"en");if(!s||!a)return null;const o=Ew(e,t);if(!o.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(p()==="ru"?"твоих карточек":"your cards"),d=bu(e,e,!0),u=[d,...o.map(m=>bu(m,e,!1))].sort((m,f)=>Re(`${n}:${e.id}:${m.id}`)-Re(`${n}:${e.id}:${f.id}`));return{id:`kanji_meaning_${e.id}_${Re(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function Ew(e,t){const n=ai(Be(e,"ru")),s=ai(Be(e,"en")),a=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!c?.id||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const d=ai(Be(c,"ru")),u=ai(Be(c,"en"));return!(!d||!u||d===n||u===s)})].sort((c,d)=>{const u=String(c.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||Re(`${e.id}:${c.id}`)-Re(`${e.id}:${d.id}`)});return l.slice(0,Math.min(3,l.length))}function bu(e,t,n){const s=Be(e,"ru"),a=Be(e,"en"),o=Be(t,"ru"),l=Be(t,"en");return{id:`meaning_${Re(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function ai(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function Kw(e){ue();const t=ii();t?.id&&Dw(t.id,e.dataset.option)}function Dw(e,t){ue();const n=te(),s=ii();if(!s?.id||s.id!==e)return;const a=s.options?.find(f=>f.id===t);if(!a)return;const l=s.options?.some(f=>f.correct||f.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||(r.evaRuntime=zt()),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,be(a.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&Ow(s,a,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:l,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...c,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[c,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=ei({}),u=l===!1?"thinking":"approve",m=yn(ti({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||Fw(s,l),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,si(n.currentLine,"question_answer",Te({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,Rs(),Jw(s,a,l),es(),C(),D(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),I()}function ii(){const e=te(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||(r.evaRuntime=zt()),r.evaRuntime.pendingQuestion=t,t):null}function Fw(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function Ow(e,t,n){const s=Ed(),a=Bw(e);a&&fr(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:h(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=dn();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&zw(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),G(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&Uw(a)),o.minutes=Xi(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[ie()]=o,ve(),Fl(),X()}function Bw(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?se(t):null)||Kd().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,l=n&&a.kanji===n,c=!s||String(a.jlpt||"").toUpperCase()===s;return o||l&&c})||(n?r.cards.find(a=>a.kanji===n):null)||null}function zw(e){const t=String(e?.jlpt||"").toUpperCase(),n=Eo().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function Uw(e){const t=String(e?.jlpt||"").toUpperCase(),n=Eo().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function Jw(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),uu(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Gw(){ue(),Ya()&&yr("render");const e=$u();let t=te().currentLine;if(Ya()&&!t?.text&&r.evaAutonomyLines.length){const a=qo("render_fallback")||r.evaAutonomyLines[0],o=ei(a),l=Te({lastEvent:{type:"render_fallback"}}),c=ln(l),d=Wo(a),u=Xo(a),m=a.emotion||ri(l,c,"render_fallback"),f=yn(ti(a),m);t={id:a.id,category:a.category||"mood",text:a.text,sprite:f,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},te().currentLine=t,te().currentDecoration=d,te().currentEffect=u,te().mood=c,te().emotion=m,te().lastSpokeAt=t.at,te().lastRoomId=o.id,te().lastSprite=f,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,si(a,"render_fallback",l),Qo(f,o.file),Rs(),C()}if(Ya()&&t?.text){const a=Is(t.background)||on(),o=yn(t.sprite||"relationship",t.emotion||te().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:_s(o),decoration:t.decoration||te().currentDecoration,effect:t.effect||te().currentEffect,mood:te().mood||Jt().mood,emotion:t.emotion||te().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=Is(e.background)||on(),s=yn(e.sprite,te().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:_s(s),decoration:te().currentDecoration,effect:te().currentEffect,mood:Jt().mood,emotion:te().emotion||"calm",node:e}}function ku(e="adaptive"){ue(),Ts();const t=Jt(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=ni().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!yu(d,t)?!1:!n.has(d.id)}),a=ni().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:ni(),l=We(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:on().id},c=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(d=>d!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||on().id,relationshipDelta:l.relationshipDelta||{}}}function yu(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function $u(){ue();const e=Nw(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function _s(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function Qo(e,t=""){[_s(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Hw(e){const n=$u().choices?.[Number(e.dataset.index||0)];if(!n)return;ue();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=ie(),qw(n),be(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),G(0,a,`eva_room:${o}`),z(kn().reward)),n.randomLine){const l=ku(n.randomLine);be(l.relationshipDelta||{},`eva_line:${l.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=l,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),C(),n.route){Qe(n.route);return}D(n.openShop?"menu_open":"page_turn"),I()}function qw(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=Zn(an(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=ie(),t.lastRoute=r.route}function Ww(){ue(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),C(),D("page_turn"),I()}function Xw(e){oi(e)}function Qw(e){li(e)}function Vw(e){const t=we(e)||Vn(e)||Yn(e);t&&oi(t.id)}function Yw(e){const t=we(e)||Vn(e)||Yn(e);t&&li(t.id)}function Gt(e){r.customization||Ka();const t=we(e)||Vn(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function Vo(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Zw(e){const t=Vo(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function ju(e){return!e||!Yo(e)?"locked":Zw(e)?"selected":Gt(e.id)?"owned":"available"}function eb(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,te().currentEffect];for(const n of t){const s=rn(n);if(!s||s==="none")continue;const a=we(s);if(a?.type==="effect"&&Gt(a.id))return a.id}return null}function Su(e=null){const t=rn(e||r.customization?.selected?.effect),n=we(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),gr(),Ss(),C(),mn(),D("menu_close"),z(p()==="ru"?"Эффект убран.":"Effect removed."),I(),!0)}function tb(e=null){const t=rn(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=we(t);if(!n)return!1;if(n.type==="effect")return Su(n.id);r.customization||Ka();const s=Vo(n);if(!s)return!1;const a=Qn().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),gr(),Ss(),C(),mn(),D("menu_close"),z(p()==="ru"?"Выбор сброшен.":"Selection cleared."),I(),!0}function nb(e){if(!e?.unlockCondition||Yo(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=us().find(o=>o.id===t.id),a=s?Ml(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function Yo(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function oi(e){const t=we(e);if(t){if(!Yo(t)){D("purchase_failed"),z(As().locked);return}if(Gt(t.id)){li(t.id);return}if(r.progress.moonFragments<t.price){D("purchase_failed"),z(As().notEnough);return}r.progress.moonFragments-=t.price,r.customization.owned=[...new Set([...r.customization.owned||[],t.id])],r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:xt(t),xp:0,coins:-t.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),gr(),Ss(),X(),C(),D("purchase_success"),D("item_unlock"),ke("item_bought",{itemId:t.id,type:t.type,title:xt(t),price:t.price}),z(As().bought.replace("{item}",xt(t))),I()}}function li(e){var s;const t=we(e);if(!t||!Gt(t.id))return;const n=Vo(t);n&&(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(r.progress.selectedEvaSprite=t.spriteId,r.progress.evaAutonomy.currentLine=null),t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,(s=r.evaRuntime).memory||(s.memory=an()),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),gr(),Ss(),C(),mn(),D("notification_soft"),ke("item_equipped",{itemId:t.id,type:t.type,title:xt(t)}),z(As().selectedToast.replace("{item}",xt(t))),I())}function sb(){const e=te();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,yr("toggle",{force:!0}),C(),D("notification_soft"),z(bn().status),I()}function rb(){const e=te();e.frequency="normal",Rs(),C(),D("notification_soft"),I()}function ab(){const e=te();e.roomMode="auto",e.currentLine=null,C(),D("notification_soft"),I()}function ib(){const e=te();e.outfitMode="auto",e.currentLine=null,C(),D("notification_soft"),I()}function Nu(){const e=te();e.enabled=!0,gu(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,Lu("manual"),C(),D("page_turn"),I()}function Lu(e="manual"){const t=pu(e)||qo(e);if(!t)return!1;const n=Te({lastEvent:{type:e}}),s=ln(n),a=t.emotion||ri(n,s,e),o=ei(t),l=yn(ti(t),a),c=Wo(t),d=Xo(t),u=te(),m=Date.now(),f=vu(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:l,background:o.id,decoration:c,effect:d,emotion:a,state:t.state||"speak",at:new Date(m).toISOString(),reason:e},u.currentDecoration=c,u.currentEffect=d,u.mood=s,u.emotion=a,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=l,u.currentQuestion=f,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(v=>v!==t.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=zt()),Object.assign(r.evaRuntime,{mood:s,emotion:a,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:f,currentSkin:l,currentBackground:o.id,currentDecoration:c,currentEffect:d,activeSkin:l,activeBackground:o.id,lastPhraseAt:m,lastEmotionChangeAt:m,lastQuestionAt:f?m:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:m,textRevealSkippedLineId:null}),si(t,e,n),Qo(l,o.file),Rs(),es(),mn(),!0}function ob(){te().currentLine=null,C(),D("menu_close"),I()}function M(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${ce(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function lb(e){const t=ql(e.id),n=t.filter(d=>F(d.id).state!=="New").length,s=t.filter(d=>F(d.id).state==="Mastered").length,a=!Oe(e),o=rm(e),l=a?"鎖":t[0]?.kanji||"文",c=E(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${ec(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(l)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${xN(o)}
          <h3>${i(ca(e))}</h3>
          <p>${i(wL(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(_("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(_("unlockedAt"))} ${Ki(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function cb(e){const t=rm(e),n=e.id===r.activeLessonId,s=!Oe(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${ec(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g(tc(t))}">
        <span>${i(e.jlpt)}</span>
        ${LN(t)}
      </button>
    `}function Zo(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function db(){const e=Zo();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>Oe(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>Oe(t))||r.lessons[0]||null}function el(){return Q(db()?.jlpt)||Yt()}function xu(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&Oe(t))return t;const s=e.find(a=>Oe(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function ub(e){const t=e.length,n=e.filter(a=>Oe(a)).length,s=["all",...ze];return`
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
    `}function pb(e){if(!e)return"";const t=e.textbook||e;return`
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
            <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
            <span class="pill">${i(h(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${g(t.pdfUrl||t.pdfFile||"")}" download="${g((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function gb(e){const t=Pt(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?ca(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${Ki(e)}.`:`Unlocks at level ${Ki(e)}.`)}</p>
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
    `}function mb(){return r.activeLearnView===sn?$b():r.activeLearnView===Dt?yb():Tu()}function fb(){const e=_d();if(e.kind==="review"){Qe("review");return}if(r.route==="home"){Di(el());return}Cu(e.nodeId)}function Cu(e){const t=ts(e);if(!t){ns();return}if(Rd(t)==="locked"){z(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===ks){Qe("review");return}if(t.id===ys){_r("final-test");return}if(t.type==="textbook"){_r(t.id);return}ns(Dt,t.id)}function Au(e){const t=String(e||"");return t&&(se(t)||r.cards.find(n=>String(n.id)===t))||null}function hb(){const e=de();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function $r(e){const t=At(e);if(!t)return null;const n=$n(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,l)=>{const c=Tt(o)[0]||null,d=s[l%Math.max(s.length,1)]||s[0]||null,u=c?{jp:c.word||o.kanji,hiragana:c.reading||o.hiragana||"",translation:c.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:V(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:K(o),en:K(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:Ar(t),source:"learning_path"}}function vb(e){if(e===xe)return hb();const t=r.learningPathLessonPayloads[e]||$r(e);if(!t)return[];const n=de(),s=[],a=(t.objectives||[]).map(h).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:h(t.title),text:h(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,l)=>{const c=Au(o.cardId);if(!c)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${K(c)}`,text:yk(c,{word:d?.jp||c.kanji,reading:d?.hiragana||c.hiragana||""}),note:d?.translation?h(d.translation):"",cardId:c.id,card:c,sentence:d})}),(t.exercises||[]).forEach(o=>{const l=(o.options||[]).map(c=>({value:String(c.value??c.id??c.label??c),label:h(c.label||c.text||c)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:h(o.prompt),text:h(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:l})}),s}function wb(e,t=null){const n=vb(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function bb(e,t=Dt,n=[]){const s=vn(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=ko({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,C(),s.activeSession)}function jr(e){const t=_o(),n=t?.nodeId===e?t:bb(e),s=wb(e,n),a=s.filter(c=>c.kind==="quiz"),o=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function kb(e,t,n){var c;const s=vn(),a=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((c=s.completedNodes)[e]||(c[e]=a),s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===xe&&G(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=At(e),u=r.learningPathLessonPayloads[e]||$r(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(v=>v.cardId),...$n(d).map(v=>v.id)].map(String).filter(Boolean))],f=Z();if(m.forEach(v=>{const w=Au(v);if(!w)return;fr(w,"learning_path"),Ls(f,w.kanji);const N=re(F(w.id));N.state==="New"&&(r.progress.cards[w.id]=fe(N,l?"hard":"good"))}),d){oe.add(`n5:${d.id}`),f.completedLessons[d.id]=a,f.currentLessonId=Ge().find(N=>N.order===d.order+1)?.id||d.id,r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[d.id]=a,C({immediate:!0}),as()>=10&&Object.keys(f.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const v=r.n5Meta?.rewards?.lessonCompleteXp||45,w=r.n5Meta?.rewards?.lessonCompleteMoon||6;G(v,w,`learning_path:${e}`),rt({title:`${Je().lessonComplete}: ${h(d.title)}`,message:Je().lessonCompleteText,xp:v,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),ke("lesson_complete",{lessonId:e,jlpt:"N5"})}}Ha(),ve(),X(),C()}function Tu(){r.n5Textbook?.items?.length||Ro();const e=de(),t=Id(),n=_d(),s=ts(xs()),a=gn();return`
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
            <h2>${i(Td(xs()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(de().reviewQueue)} · ${i(Ke())}</span>
            <span class="pill">${i(de().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(de().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,l)=>{const c=Rd(o),d=c==="locked",u=h(o.summary)||"",m=o.id===ks?e.reviewAction:o.id===ys?e.openCheckpoint:o.type==="textbook"?e.openTextbook:c==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(c)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${l+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(Uh(c))}</span>
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
    `}function yb(){const e=r.activeLearnNodeId||xs(),t=ts(e),n=de();if(!t)return Tu();if(t.id!==xe&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return Ro(),`
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
      `;t.type==="lesson"&&Eh(e);const s=jr(e),{session:a,steps:o,quizSteps:l,currentStep:c,isResult:d}=s;if(!o.length)return`
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
      `;const u=o.length,m=u?E(Math.min(a.stepIndex,u),u):0,f=a.answers?.[c?.id||""]||null,v=f?.selected||"",w=!!f?.correct,N=l.length?Math.round(Number(a.score||0)/Math.max(l.length,1)*100):100;return d?`
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
              <strong>${i(N)}%</strong>
              <div class="meter"><i style="width:${N}%"></i></div>
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
                    <span class="pill">${i(K(c.card))}</span>
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
                ${(c.options||[]).map(j=>{const A=v===j.value,k=j.value===c.answer;return`<button class="btn ${A?w?"success":"danger":f&&k?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(c.id)}" data-value="${g(j.value)}">${i(j.label)}</button>`}).join("")}
              </div>
              ${f?`<p class="lesson-player-feedback ${w?"is-good":"is-warning"}">${i(w?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(c.options||[]).find(j=>j.value===c.answer)?.label||c.answer}`)}</p>`:""}
            `:`
              <p>${i(c.text||"")}</p>
              ${c.note?`<small>${i(c.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${g(e)}" ${c.kind==="quiz"&&!f?'disabled aria-disabled="true"':""}>${i(a.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function $b(){const e=Zo(),t=xu(e),n=!!(t&&Oe(t)),s=n?V0(t.id):[];(!r.activeCardId||!s.some(l=>l.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?se(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?Pt(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("learn"))}</h1>
            <p>${i(t?ca(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${ub(e)}
        ${o?pb(o):""}
        <div class="actions lesson-tabs">
          ${e.map(cb).join("")}
        </div>
        <div class="study-layout">
          ${n?a?sg(a):AS(t):gb(t)}
          ${n?xl(a,s.length):xl(null,0)}
        </div>
      </section>
    `}function jb(){const e=un(r.activeJlptLesson)||un(se(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(_("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=Pt(e.jlpt);if(!wt(e.jlpt))return Iu(t||e);const n=om(e.jlpt),s=n.filter(l=>F(l.id).state==="Mastered").length,a=n.filter(l=>F(l.id).state!=="New").length,o={...ac(),...rc()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(h(e.title))}</h1>
            <p>${i(h(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${Fn("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(l=>{const c=wt(l.jlpt),d=l.jlpt===e.jlpt,u=g(pn(l.jlpt));return c?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(l.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(l.jlpt)}</button>`}).join("")}
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
                <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
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
            ${M(o.available,n.length,e.jlpt,E(n.length,Math.max(r.cards.length,1)))}
            ${M(o.learned,a,`${s} ${o.mastered}`,E(a,Math.max(n.length,1)))}
          </div>
        </article>
        ${Gp(e)}
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
    `}function Sb(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"");if(Fe(t))return xb(t);const n=t.toUpperCase(),s=n?Pt(n):null;if(s)return r.activeTextbookLevel=s.jlpt,r.activeJlptLesson=s.jlpt,Nb(s);const a=p()==="ru"?{title:"Учебники Flash Kanji",description:"Выберите азбуку для старта с нуля или продолжайте учебники JLPT N5–N1.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам",kanaBadge:"Курс на русском",kanaMeta:"знаков",kanaTasks:"заданий"}:{title:"Flash Kanji Textbooks",description:"Choose a kana course from zero or continue JLPT N5-N1 textbooks.",open:"Open page",pdf:"Download PDF",study:"Go to lessons",kanaBadge:"Russian course",kanaMeta:"characters",kanaTasks:"tasks"},o=(r.kanaCatalog?.courses||[]).map(l=>`
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
            ${Fn("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(Yt())}">${i(a.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${o}
          ${e.map(l=>`
            <article class="textbook-card ${wt(l.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(l.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(l.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(l.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(h(l.displayTitle||l.title||{}))}</h2>
                <p>${i(h(l.description||{}))}</p>
                ${wt(l.jlpt)?"":`<p class="textbook-lock-note">${i(pn(l.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(l.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(l.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                  <span class="pill">${i(h(l.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(l.jlpt)}">${i(a.open)}</a>
                  ${wt(l.jlpt)?`<a class="btn ghost" href="${g(l.pdfUrl||l.pdfFile||"")}" download="${g((l.pdfFile||l.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(a.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(pn(l.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${wt(l.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(a.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(pn(l.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Iu(e){const t=String(e?.jlpt||"").toUpperCase(),n=nc(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(h(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i(pn(t))}</p>
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
    `}function Nb(e){const t=String(e?.jlpt||"").toUpperCase();if(!wt(t))return Iu(e);if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return ek(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return Uk(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return Ny(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return l$(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return r.n1Textbook?.items?.length?G$(e):(Af().catch(()=>{}),_a?Wa(_a):Lb(e,"N1"));r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(v=>r.lessons.find(w=>w.id===v)).filter(Boolean),s=r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(v)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(v=>v.id===r.activeTextbookSubroute)||un(e.jlpt)||r.jlptLessons[0]:un(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&bt(t,o.id,"textbook_page");const l=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=sc(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=h(e.recommendedCycle||{}),u=h(e.goal||{}),m=(e.previousLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join(""),f=(e.nextLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join("");return`
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
            ${Fn("textbook",{level:e.jlpt})}
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
              <span class="pill">${i(e.kanjiCount||0)} ${i(_("cardsToday"))}</span>
              <span class="pill">${i(u)}</span>
              <span class="pill">${i(d)}</span>
            </div>
            <div class="textbook-route-links">
              ${m?`<div><strong>${i(l.previous)}</strong><div class="tag-row">${m}</div></div>`:""}
              ${f?`<div><strong>${i(l.next)}</strong><div class="tag-row">${f}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${M(e.jlpt,e.lessonCount||0,u,E(e.lessonCount||0,Math.max(1,r.jlptLessons.length)))}
          ${M(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",E(e.kanjiCount||0,Math.max(1,r.cards.length)))}
          ${M(p()==="ru"?"Уроки":"Lessons",a.length,l.practice,E(a.length,Math.max(1,r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${M(p()==="ru"?"Переход":"Jump",r.activeTextbookLevel===e.jlpt?1:0,l.lessonPage,r.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${Es(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(l.outline)}</h2>
              <p>${i(h(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,l.outline,E(o.sections?.length||0,4))}
              ${M(p()==="ru"?"Практика":"Practice",o.practice?.length||0,l.practice,E(o.practice?.length||0,4))}
            </div>
          </article>
          ${Gp(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(v=>`<li>${i(h(v))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(v=>`
              <article class="jlpt-section-card">
                <h3>${i(h(v.title))}</h3>
                <p>${i(h(v.body))}</p>
                ${Array.isArray(v.points)&&v.points.length?`<ul>${v.points.map(w=>`<li>${i(h(w))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(l.practice)}</h3>
                <ul>${o.practice.map(v=>`<li>${i(h(v))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(v=>`<li>${i(h(v))}</li>`).join("")}</ul>
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
          ${a.map(v=>lb(v)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function Lb(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:`Готовлю интерактивный учебник ${t}`,text:"Подгружаю главы, карточки, грамматику и финальный тест. Сейчас откроется рабочая оболочка, не старый экран.",back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:`Preparing the interactive ${t} textbook`,text:"Loading lessons, cards, grammar, and the final test. The full app shell will open in a moment.",back:"All textbooks"};return`
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
            <h2>${i(h(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(h(e?.description||{}))}</p>
            <div class="achievement-progress" aria-hidden="true"><i style="width:60%"></i></div>
          </div>
          ${_n("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function Ru(){return p()==="ru"?{allTextbooks:"Все учебники",start:"Начать курс",continue:"Продолжить",downloadPdf:"Скачать PDF",reference:"Справочник",lessons:"Уроки",practice:"Практикум чтения",final:"Итоговая контрольная",review:"Повторение",sources:"Источники",russianCourse:"Курс на русском",showRomaji:"Показывать ромадзи",hideRomaji:"Скрыть ромадзи",check:"Проверить",score:"Результат",passed:"зачёт",notPassed:"повторить",correct:"верно",wrong:"ошибка",writeDone:"Пропись выполнена",markWriting:"Я написал(а) от руки",manualWriting:"Ручная пропись",noAutoWriting:"Почерк не оценивается автоматически: отметьте шаг, когда написали знаки от руки.",noCourse:"Курс не найден",loading:"Загружаю курс",offlineHint:"Если вы уже открывали этот урок, service worker отдаст его из кэша. Иначе появится понятный offline fallback.",remember:"Помню",forgot:"Не помню",noReview:"Повторений пока нет. Пройдите урок или откройте знаки курса.",sourcePdf:"Оригинальный PDF",taskCount:"заданий",characters:"знаков",lessonsCount:"уроков",lesson:"урок",lessonProgress:"Прогресс урока",newSigns:"Новые знаки",newSignsHint:"Сначала узнаём форму и чтение каждого нового знака.",readWrite:"Как читать и писать",readWriteHint:"Произнесите знак, посмотрите количество штрихов и переходите к ручной прописи.",reading:"Чтение",strokes:"Штрихи",tts:"Звук",strokeOrder:"Stroke-order",explanation:"Объяснение",explanationHint:"Ключевые правила урока вынесены в отдельные карточки.",examples:"Примеры",examplesHint:"Короткие слова и записи для чтения.",example:"Пример",meaning:"Значение",practiceBlock:"Практика",practiceHint:"Выполняйте задания небольшими блоками и проверяйте ответы сразу.",selfCheck:"Проверь себя",selfCheckHint:"Завершите ручную часть и отметьте пропись после тренировки."}:{allTextbooks:"All textbooks",start:"Start course",continue:"Continue",downloadPdf:"Download PDF",reference:"Reference",lessons:"Lessons",practice:"Reading practice",final:"Final test",review:"Review",sources:"Sources",russianCourse:"Russian course",showRomaji:"Show romaji",hideRomaji:"Hide romaji",check:"Check",score:"Score",passed:"passed",notPassed:"retry",correct:"correct",wrong:"wrong",writeDone:"Writing done",markWriting:"I wrote it by hand",manualWriting:"Manual writing",noAutoWriting:"Handwriting is not graded automatically: mark this step after writing the signs by hand.",noCourse:"Course not found",loading:"Loading course",offlineHint:"If you opened this lesson before, the service worker can serve it from cache. Otherwise a clear offline fallback appears.",remember:"Remember",forgot:"Forgot",noReview:"No kana reviews yet. Finish a lesson or open course signs first.",sourcePdf:"Original PDF",taskCount:"tasks",characters:"characters",lessonsCount:"lessons",lesson:"lesson",lessonProgress:"Lesson progress",newSigns:"New signs",newSignsHint:"Start by recognizing the shape and reading of each new sign.",readWrite:"How to read and write",readWriteHint:"Play the sound, check the stroke count, then move to handwriting practice.",reading:"Reading",strokes:"Strokes",tts:"Sound",strokeOrder:"Stroke order",explanation:"Explanation",explanationHint:"The key lesson notes are separated into contrast cards.",examples:"Examples",examplesHint:"Short words and spellings for reading practice.",example:"Example",meaning:"Meaning",practiceBlock:"Practice",practiceHint:"Complete the exercises in compact blocks and check immediately.",selfCheck:"Check yourself",selfCheckHint:"Finish the handwriting step after practicing by hand."}}function xb(e){const t=String(e||"").toLowerCase(),n=na(t),s=Ru();if(!n)return Wa(new Error(s.noCourse));const a=sa(t);if(!a)return CN(t).then(()=>I()).catch(()=>I()),r.kanaCourseErrors[t]?Wa(r.kanaCourseErrors[t]):Cb(n,s);const o=String(r.activeTextbookSubroute||"").toLowerCase();if(o==="reference")return Bb(a,s);if(o==="sources")return zb(a,s);if(o==="review")return Ub(a,s);if(o==="final"||o==="final-test")return Ob(a,s);if(/^practice-\d+$/i.test(o)){const l=a.reading_practice?.find(c=>c.id===o);return l?Fb(a,l,s):wr(ge("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}if(/^lesson-\d+$/i.test(o)){const l=a.lessons?.find(c=>c.id===o);return l?Rb(a,l,s):wr(ge("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}return Ab(a,s)}function Cb(e,t){return`
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
    `}function Ab(e,t){const n=vt(e.slug),s=e.lessons?.[0]?.id||"",a=n.currentRoute||s,o=e.lessons.filter(l=>sl(e.slug,l).passed).length;return`
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
          ${M(t.review,Eu(e,"due").length,t.characters,E(Eu(e,"due").length,Math.max(1,e.base_characters.length)))}
        </div>
        <div class="actions kana-course-tabs">
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/reference">${i(t.reference)}</a>
          <button class="btn ghost" type="button" data-action="route" data-route="review">${i(t.review)}</button>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/final">${i(t.final)}</a>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/sources">${i(t.sources)}</a>
          <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Dn().settings.showRomaji?t.hideRomaji:t.showRomaji)}</button>
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.lessons)}</h2>
            <p>${i(p()==="ru"?"Курсы азбук независимы: хирагана не блокирует катакану и наоборот.":"Kana courses are independent: hiragana does not lock katakana and vice versa.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-lesson-grid">
          ${e.lessons.map(l=>Tb(e,l,t)).join("")}
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.practice)}</h2>
            <p>${i(p()==="ru"?"Пять блоков чтения из PDF без обязательного ромадзи.":"Five PDF reading practice blocks without mandatory romaji.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-practice-grid">
          ${e.reading_practice.map(l=>Ib(e,l,t)).join("")}
        </div>
      </section>
    `}function Tb(e,t,n){const s=sl(e.slug,t),a=s.passed?n.passed:s.completed?n.notPassed:n.start,o=s.completed?Math.round(s.latestScore/Math.max(1,nl(t.exercises))*100):0;return`
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
      `}function Ib(e,t,n){const s=vt(e.slug).practices[t.id],a=nl(t.exercises),o=Number(s?.latestScore||0);return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p>${i((t.body||[]).slice(0,2).join(" "))}</p>
            <div class="progress mini"><span style="width:${E(o,Math.max(1,a))}%"></span></div>
          </div>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/${g(t.id)}">${i(n.practice)}</a>
        </article>
      `}function Rb(e,t,n){const s=vt(e.slug);s.currentRoute=t.id;const a=sl(e.slug,t),o=nl(t.exercises),l=_b(t),c=!!s.writing?.[t.id];return`
      <section class="page textbooks-page n5-course-page n5-lesson-page kana-course-page kana-lesson-page">
        <div class="kana-lesson-shell">
          ${Pb(e,t,n,l,a,o)}
          ${Mb(t,n)}
          ${Eb(t,n)}
          ${Kb(l.explanations,n)}
          ${Db(l.examples,n)}
          <section class="kana-lesson-step kana-practice-step" aria-labelledby="kanaPracticeTitle">
            <div class="kana-step-heading">
              <span class="pill">05</span>
              <h2 id="kanaPracticeTitle">${i(n.practiceBlock)}</h2>
              <p>${i(n.practiceHint)}</p>
            </div>
            <div class="kana-practice-stack">
              ${t.exercises.map(d=>tl(e.slug,t.id,"lesson",d,n)).join("")}
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
    `}function _b(e){const t=(e.body||[]).map(d=>String(d||"").trim()).filter(Boolean),n=[],s=[],a={title:"",headers:[],rows:[]};let o=0;const l=d=>/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(d),c=d=>/^(Слова для чтения|Пример и узнавание)$/i.test(d);for(;o<t.length;){const d=t[o];if(/^\d+$/.test(d)){o+=1;continue}if(/^Цель раздела$/i.test(d)){for(o+=1;o<t.length&&!/^Знаки урока$/i.test(t[o]);)/^\d+$/.test(t[o])||n.push(t[o]),o+=1;continue}if(/^Знаки урока$/i.test(d)){for(o+=1;o<t.length&&!/^(Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(t[o]);)o+=1;continue}if(c(d)){a.title=d;const u=t.slice(o+1).filter(f=>!/^\d+$/.test(f));a.headers=u.slice(0,3);const m=u.slice(3);for(let f=0;f+2<m.length;f+=3)a.rows.push(m.slice(f,f+3));break}if(l(d)){const u=d,m=[];for(o+=1;o<t.length&&!l(t[o]);)/^\d+$/.test(t[o])||m.push(t[o]),o+=1;m.length&&s.push({title:u,body:m});continue}o+=1}return{goal:n,explanations:s,examples:a}}function Pb(e,t,n,s,a,o){const l=Number(a?.latestScore||0),c=E(l,Math.max(1,o)),d=s.goal.length?s.goal.join(" "):(t.body||[]).slice(0,2).join(" ");return`
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
              <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Dn().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
              ${Fn("textbook",{level:e.slug,subroute:t.id})}
            </div>
          </div>
        </article>
      `}function Mb(e,t){return`
        <section class="kana-lesson-step" aria-labelledby="kanaNewSignsTitle">
          <div class="kana-step-heading">
            <span class="pill">01</span>
            <h2 id="kanaNewSignsTitle">${i(t.newSigns)}</h2>
            <p>${i(t.newSignsHint)}</p>
          </div>
          <div class="kana-new-sign-grid">
            ${e.focus_characters.map(n=>`
              <article class="kana-new-sign-card">
                <span lang="ja">${i(n.kana)}</span>
                ${Dn().settings.showRomaji&&n.romaji?`<small>${i(n.romaji)}</small>`:""}
              </article>
            `).join("")}
          </div>
        </section>
      `}function Eb(e,t){return`
        <section class="kana-lesson-step" aria-labelledby="kanaReadWriteTitle">
          <div class="kana-step-heading">
            <span class="pill">02</span>
            <h2 id="kanaReadWriteTitle">${i(t.readWrite)}</h2>
            <p>${i(t.readWriteHint)}</p>
          </div>
          <div class="kana-readwrite-grid">
            ${e.focus_characters.map(n=>`
              <article class="kana-readwrite-card">
                <div>
                  <span class="kana-readwrite-symbol" lang="ja">${i(n.kana)}</span>
                  <p>${i(t.reading)}: <strong>${i(n.romaji||"—")}</strong></p>
                  <p>${i(t.strokes)}: <strong>${i(n.strokes||"—")}</strong></p>
                </div>
                <div class="actions">
                  <button class="btn ghost" type="button" data-action="play-kana-tts" data-text="${g(n.kana)}">🔊 ${i(t.tts)}</button>
                  <a class="btn ghost" href="#kana-writing-practice">${i(t.strokeOrder)}</a>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      `}function Kb(e,t){return e.length?`
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
      `:""}function Db(e,t){if(!e?.rows?.length)return"";const n=e.headers.length===3?e.headers:[t.example,t.reading,t.meaning];return`
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
      `}function Fb(e,t,n){const s=vt(e.slug);return s.currentRoute=t.id,`
      <section class="page textbooks-page n5-course-page kana-course-page kana-practice-page">
        ${Sr(e,t.title,n,t.id)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h2>${i(t.title)}</h2>
            ${_u(t.body)}
          </div>
        </article>
        ${t.exercises.map(a=>tl(e.slug,t.id,"practice",a,n)).join("")}
      </section>
    `}function Ob(e,t){const n=vt(e.slug);return n.currentRoute="final",`
      <section class="page textbooks-page n5-course-page n5-final-page kana-course-page kana-final-page">
        ${Sr(e,t.final,t)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(t.final)}</span>
            <h2>${i(e.final_test.title)}</h2>
            <p>${i((e.final_test.body||[]).slice(0,4).join(" "))}</p>
          </div>
        </article>
        ${(e.final_test.sections||[]).map(s=>tl(e.slug,"final","final",s,t)).join("")}
      </section>
    `}function Bb(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${Sr(e,t.reference,t)}
        <article class="jlpt-section-card">
          <h2>${i(e.reference.title)}</h2>
          ${_u(e.reference.body)}
        </article>
        <div class="kana-table-grid">
          ${e.base_characters.map(n=>Jb(n)).join("")}
        </div>
      </section>
    `}function zb(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${Sr(e,t.sources,t)}
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
    `}function Ub(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page kana-review-page">
        ${Sr(e,t.review,t)}
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
    `}function Sr(e,t,n,s){return`
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(e.title)}</p>
            <h1>${i(t)} <span lang="ja">${i(e.native_title)}</span></h1>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.slug)}">${i(e.title)}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Dn().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
            ${Fn("textbook",{level:e.slug})}
          </div>
        </div>
      `}function _u(e=[]){const t=[];for(const n of e.slice(0,40))/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова|Пример|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(n)?t.push(`<h3>${i(n)}</h3>`):t.push(`<p>${i(n)}</p>`);return t.join("")}function Jb(e){return`
        <button class="kana-char-chip" type="button" data-action="play-kana-tts" data-text="${g(e.kana)}">
          <span lang="ja">${i(e.kana)}</span>
          ${Dn().settings.showRomaji&&e.romaji?`<small>${i(e.romaji)}</small>`:""}
        </button>
      `}function tl(e,t,n,s,a){const o=Hb(e,t,n,s.id),l=r.kanaExerciseDrafts[rl(e,t,n,s.id)]||{};return`
        <form class="jlpt-section-card kana-exercise-card" data-kana-exercise-form data-course="${g(e)}" data-owner="${g(t)}" data-owner-type="${g(n)}" data-exercise="${g(s.id)}">
          <h3>${i(s.label)}</h3>
          <p>${i(s.instruction||"")}</p>
          <div class="kana-exercise-items">
            ${s.items.map(c=>Gb(c,o,a,l)).join("")}
          </div>
          ${o?.completed?`<p class="exercise-feedback ${o.passed?"is-correct":"is-wrong"}" aria-live="polite">${i(a.score)}: ${i(o.score)}/${i(o.total)} · ${i(o.passed?a.passed:a.notPassed)}</p>`:""}
          <button class="btn primary" type="button" data-action="kana-submit-exercise">${i(a.check)}</button>
        </form>
      `}function Gb(e,t,n,s={}){const a=Object.prototype.hasOwnProperty.call(s,e.number)?s[e.number]:t?.answers?.[e.number]||"",o=t?.completed?t.correct?.[e.number]:null;return`
        <label class="kana-answer-row ${o===!0?"is-correct":o===!1?"is-wrong":""}">
          <span>${i(e.number)}. ${i(e.prompt)}</span>
          <input type="text" name="kana-${g(e.number)}" value="${g(a)}" autocomplete="off" inputmode="text" />
          ${o===null?"":`<small>${i(o?n.correct:`${n.wrong}: ${e.solution||e.accepted_answers?.[0]||""}`)}</small>`}
        </label>
      `}function nl(e=[]){return(e||[]).reduce((t,n)=>t+(n.items||[]).length,0)}function sl(e,t){const n=vt(e).lessons[t.id];return n||{completed:!1,passed:!1,latestScore:0,bestScore:0,exercises:{},updatedAt:null}}function Hb(e,t,n,s){const a=vt(e);return n==="lesson"?a.lessons?.[t]?.exercises?.[s]||null:n==="practice"?a.practices?.[t]?.exercises?.[s]||null:n==="final"&&(a.finalTest?.[s]||a.finalTest?.sections?.[s])||null}function Nr(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim(),a=Array.from(s)[0]?.codePointAt(0);return!Fe(n)||!Number.isInteger(a)?"":`kana:${n}:${a.toString(16).toUpperCase()}`}function ci(e,t=""){const n=String(e||"").trim(),s=n.match(/^kana:(hiragana|katakana):([0-9a-f]+)$/i);if(s){const l=Number.parseInt(s[2],16);return!Number.isInteger(l)||l<=0?null:{slug:s[1].toLowerCase(),kana:String.fromCodePoint(l),id:Nr(s[1],String.fromCodePoint(l))}}const a=n.match(/^(hiragana|katakana):(.+)$/i);if(a){const l=a[1].toLowerCase(),c=a[2].trim();return{slug:l,kana:c,id:Nr(l,c)}}const o=String(t||"").toLowerCase();return Fe(o)&&n?{slug:o,kana:n,id:Nr(o,n)}:null}function Ps(e){const t=String(e||"").toLowerCase();if(!Fe(t))return{};const n=vt(t),s=n.review&&typeof n.review=="object"?n.review:{},a={};let o=!1;Object.entries(s).forEach(([d,u])=>{const m=ci(d,t),f=m?.slug===t?m.id:"",v=Et(u);if(!f){a[d]=v;return}const w=a[f];(!w||Number(v.reviewCount||0)>Number(w.reviewCount||0)||(Date.parse(String(v.lastReviewedAt||""))||0)>(Date.parse(String(w.lastReviewedAt||""))||0))&&(a[f]=v),f!==d&&(o=!0)});const l=Object.keys(s).sort().join("|"),c=Object.keys(a).sort().join("|");return(o||l!==c)&&(n.review=a),n.review}function Pu(e,t){const n=sa(e),s=String(t||"");return n?.base_characters?.find(a=>a.kana===s)||null}function Mu(e){const t=sa(e)||na(e);return t?.title?t.title:String(e||"").toLowerCase()==="katakana"?p()==="ru"?"Катакана":"Katakana":p()==="ru"?"Хирагана":"Hiragana"}function Eu(e,t="due"){const n=Ps(e.slug),s=Date.now();return(e.base_characters||[]).map(a=>{const o=Nr(e.slug,a.kana),l=n[o]||null;return{...a,id:o,progress:l}}).filter(a=>t==="all"?!0:_m(a.progress?[{cardId:a.id,...a.progress}]:[],s).initial.length>0)}function qb(e,t,n,s){return e?n==="lesson"?e.lessons?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="practice"?e.reading_practice?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="final"&&e.final_test?.sections?.find(a=>a.id===s)||null:null}function rl(e,t,n,s){const a=[e,n,t,s].map(o=>String(o||"").trim());return a.every(Boolean)?a.join(":"):""}function Wb(e){var w;const t=e.closest?.("[data-kana-exercise-form]");if(!t)return;const n=String(t.dataset.course||"").toLowerCase(),s=String(t.dataset.owner||""),a=String(t.dataset.ownerType||""),o=String(t.dataset.exercise||"");if(!Fe(n))return;const l=sa(n),c=qb(l,s,a,o);if(!l||!c)return;const d={},u=rl(n,s,a,o),m=new FormData(t);c.items.forEach(N=>{const j=m.get(`kana-${N.number}`);d[N.number]=Nc(typeof j=="string"?j:"")});const f=mC(c,d),v=vt(n);if(v.currentRoute=s,v.updatedAt=f.updatedAt,a==="lesson"){const N=l.lessons.find(k=>k.id===s),j=v.lessons[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};j.exercises[o]=f;const A=jc(N?.exercises||[],j.exercises);Object.assign(j,A,{bestScore:Math.max(Number(j.bestScore||0),A.latestScore),updatedAt:f.updatedAt}),v.lessons[s]=j,j.passed&&Vb(l,N?.focus_characters||[])}if(a==="practice"){const N=l.reading_practice.find(k=>k.id===s),j=v.practices[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};j.exercises[o]=f;const A=jc(N?.exercises||[],j.exercises);Object.assign(j,A,{bestScore:Math.max(Number(j.bestScore||0),A.latestScore),updatedAt:f.updatedAt}),v.practices[s]=j}if(a==="final"){v.finalTest||(v.finalTest={}),(w=v.finalTest).sections||(w.sections={}),v.finalTest.sections[o]=f;const N=jc(l.final_test?.sections||[],v.finalTest.sections);Object.assign(v.finalTest,N,{bestScore:Math.max(Number(v.finalTest.bestScore||0),N.latestScore),updatedAt:f.updatedAt})}u&&delete r.kanaExerciseDrafts[u],D(f.passed?"answer_correct":"answer_wrong"),C(),Nt()}function Xb(e,t){const n=String(e||"").toLowerCase();if(!Fe(n)||!t)return;const s=vt(n);s.writing[t]=new Date().toISOString(),s.currentRoute=t,s.updatedAt=s.writing[t],C(),z(Ru().writeDone),Nt()}function Qb(e,t,n){vg(e,t,n)}function Vb(e,t=[]){const n=vt(e.slug),s=Ps(e.slug);t.forEach(a=>{const o=Nr(e.slug,a.kana);o&&(s[o]||(s[o]=Km(null,"remember")))}),n.review=s}function Yb(){const e=Dn();e.settings.showRomaji=!e.settings.showRomaji,C(),Nt()}function Zb(e){const t=String(e||"").trim();t&&(Mi(),Mm(t)||z(p()==="ru"?"Системная озвучка недоступна.":"System speech is not available."))}function ek(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",xr();const t=String(r.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return gk();if(t==="review")return uk();const n=At(t);return n?(Z().currentLessonId=n.id,bt("N5",n.id,"n5_lesson_page"),Ut("N5",n,"n5_lesson_page"),ck(e,n)):tk(e)}function tk(e){const t=$k(),n=Je(),s=Ge(),a=bk(),o=r.n5Meta||{},l=h(o.principle||{});return`
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
          ${_n("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>nk(c)).join("")}
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

        ${Es("N5")}
      </section>
    `}function nk(e){const t=il(e.id),n=Je();let s=e.kanji.filter(a=>Z().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(jk(t))}</small>
      </a>
    `}function Ms(){return r.progress.jlptLessonStudy=hd(bo(),r.progress.jlptLessonStudy||{}),r.progress.jlptLessonStudy}function sk(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function Ct(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function rs(e,t,n){const s=Ms(),a=sk(e,t?.id),o=gd();let l=s.sessions[a];l||(l={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String(t?.id||l.lessonId||""),l.answers||(l.answers={}),l.phase=md(l.phase),l.startedAt||(l.startedAt=new Date().toISOString()),l.updatedAt||(l.updatedAt=new Date().toISOString());const c=Array.isArray(n)?n.length:0,d=c?n.findIndex(m=>!l.answers[m.id]):-1,u=Object.keys(l.answers||{}).length;return l.completedAt?(l.phase="done",l.currentIndex=c):d<0?(l.currentIndex=c,l.phase="test",l.testOpenedAt||(l.testOpenedAt=l.updatedAt||new Date().toISOString())):(l.currentIndex=d,l.phase!=="test"&&(l.phase="study")),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:a,answeredCount:u,currentIndex:l.currentIndex,total:c}}function rk(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function ak(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(Si).join("")}
      </ul>
    `:""}function ik(e){const t=Qr(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${_l(e)}
          ${n?`
            <div>
              <h3>${i(_("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function ok(e,t,n,s,a,o,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],d=typeof l.sentence=="function"?l.sentence(n,t):"",u=typeof l.extra=="function"?l.extra(n,t):"",m=l.answerAction||"jlpt-lesson-answer",f=String(e||n.jlpt||"").toUpperCase(),v=Number(s||0),w=F(n.id),N=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(v+1)}</span>
              <span class="pill">${i(w.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(_("strokes"))}</span>`:""}
              ${Zp(n)}
            </div>
            <h2>${i(K(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(v+1,a)} из ${a}`:`Kanji ${Math.min(v+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${tg(n,"onyomi",o.onyomi,n.onyomi)}
              ${tg(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${ak(c)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${ik(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(f)}" data-lesson="${g(N)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(f)}" data-lesson="${g(N)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function lk(e,t,n,s,a){return`
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
    `}function Lr(e,t,n,s,a={}){const o=rs(e,t,n),l=rk(o,n),c=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||Ct(e,t?.id,"player"),m=d?E(c,d):0,f=l?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":p()==="ru"?"Тест открыт":"Test open",v=l?K(l):s.lessonComplete;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(f)}</span>
          <strong>${i(v)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${l?ok(e,t,l,o.currentIndex,d,s,a):lk(e,t,s,d,c)}
      </article>
    `}function ck(e,t){const n=Je(),s=$n(t),a=Ar(t),o=il(t.id),l=rs("N5",t,s);let c=o==="completed";const d=`n5:${t.id}`;oe.has(d)&&(c=!0);const u=c,m=a.filter(J=>ol(J.id)?.correct).length,f=a.length>0&&m===a.length,v=s.filter(J=>Z().studiedKanji[J.kanji]).length,w=t.kanji.length,N=v>=w,j=!c&&f&&N,A=t.kanji.filter(J=>Z().difficultKanji[J]).join(" · "),k=Ge().find(J=>J.order===t.order+1),S=Ct("N5",t.id,"player"),U=Ct("N5",t.id,"test");return`
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
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,w)}/${w}`,n.kanji,E(l.answeredCount,w))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${Lr("N5",t,s,n,{playerId:S,answerAction:"jlpt-lesson-answer",examples:J=>Tt(J),sentence:J=>dk(J,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(J=>`
              <article>
                <strong>${i(J.jp)}</strong>
                <span>${i(V(J.reading||""))}</span>
                <small>${i(h({ru:J.ru,en:J.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(U)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(J=>Ku(J)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(J=>Z().studiedKanji[J.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#textbooks/N5/${g(k.id)}" data-action="n5-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function dk(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Ku(e){const t=Je(),n=ol(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&jn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Vu(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Du(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Du(e,n)}
      </article>
    `}function Du(e,t){if(!t)return"";const n=Je(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function uk(e){const t=Je(),n=Z().activeReviewMode||"due",s=Fk(n);return`
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
          ${s.map((a,o)=>pk(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function pk(e,t){const n=Je(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Zt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Tt(e)[0]?.word||e.hiragana||"")} · ${i(Tt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function gk(e){const t=Je(),n=r.n5FinalTest||{},s=Xu(),a=Z().finalTest,o=Xt(a,s),l=o.answered,c=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const f=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==f)&&(a.percent=f),a.completedAt||(a.completedAt=new Date().toISOString()),C()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Mt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,v)=>mk(f,v)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Mt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function mk(e,t){const n=Z().finalTest.answers?.[e.id],s=!!Z().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${g(Us("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(l=>{const c=n===l.value;return`<button class="btn ${s&&l.value===e.answer?"success":c?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(l.value)}">${i(l.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Je().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Je(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Fu(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Ou(e){return Q(e)||String(e||"").toUpperCase()}function Bu(e){const t=Ou(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function al(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function zu(e){return V(Br(String(e?.text||"")).replace(/\s+/g," ").trim())}function fk(e){const t=Q(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function hk(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return ze.forEach(n=>{Bu(n).forEach((s,a)=>{const o=al(s),l=zu(s),c=Nl({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,fk(n));c&&(c.kind="cloze",c.tiles=In(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=o.title,c.title=o.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=a+1,t.push(c))})}),t}function vk(e){const t=al(e),n=zu(e),s=n?rg(n):"",a=h(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Il())}</summary>
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
            <span>${i(Il())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function Es(e){const t=Bu(e);if(!t.length)return"";const n=Fu(),s=Ou(e),a=ra(s,"textbook_reading_block"),o=Ws(s);return(a||o)&&C(),`
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
          ${t.map((l,c)=>wk(l,s,c)).join("")}
        </div>
      </section>
    `}function wk(e,t,n){const s=Fu(),a=al(e),o=Array.isArray(e?.questions)?e.questions:[];return`
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
        ${vk(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(l=>`<li>${i(l)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function xr(){r.progress.n5Course=wd(yo(),r.progress.n5Course||{});const e=Ge();!At(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n5Course.completedLessons[s.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function Z(){return xr()}function Ge(){return r.n5Textbook?.items||[]}function At(e){const t=String(e||"");return t&&Ge().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function bk(){return At(Z().currentLessonId)||Ge().find(e=>!Z().completedLessons[e.id])||Ge()[0]||null}function $n(e){return(e?.kanji||[]).map(t=>kk(t,e)).filter(Boolean)}function Ht(){const e=new Set;return Ge().flatMap(t=>$n(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function kk(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(l=>l.kanji===n)||null,a=r.cards.find(l=>l.kanji===n&&String(l.jlpt||"").toUpperCase()==="N5")||r.cards.find(l=>l.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?Da({...a,lessonId:a.lessonId||o},s):a||(s?Da({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function Cr(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:V(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:V(e.hiragana||""),romaji:e.romaji||"",translation:K(e)}]}function Tt(e){return Cr(e,e.examples)}function yk(e,t){const n=t?.word||e.kanji,s=V(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${K(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${K(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function $k(){const e=Ht(),t=Z(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{F(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:as(),reviews:e.reduce((s,a)=>s+Number(F(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function il(e){const t=Z(),n=`n5:${e}`;return oe.has(n)||t.completedLessons[e]?"completed":At(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function jk(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function as(){return Ge().filter(t=>il(t.id)==="completed").length}function Ar(e){const t=$n(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(j=>[j.type,j.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(j=>[j.type,j])),o=j=>a[j]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:qt({value:c.id,label:K(c)},t.slice(1).map(j=>({value:j.id,label:K(j)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:qt({value:d.kanji,label:d.kanji},t.filter(j=>j.id!==d.id).map(j=>({value:j.kanji,label:j.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Tt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:qt({value:m.reading,label:m.reading},t.flatMap(j=>Tt(j).map(A=>({value:A.reading,label:A.reading}))).filter(j=>j.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:qt({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(j=>({value:h({ru:j.ru,en:j.en}),label:h({ru:j.ru,en:j.en})})),1),...o("sentence")});const v=t[3]||t[0],w=Tt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:p()==="ru"?`Какое слово подходит к значению «${_e(w)}В»?`:`Which word matches "${_e(w)}"?`,answer:w.word,answerLabel:w.word,kanji:v.kanji,cardId:v.id,options:qt({value:w.word,label:w.word},t.flatMap(j=>Tt(j).map(A=>({value:A.word,label:A.word}))).filter(j=>j.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(N)}`:`Type the kanji for: ${K(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")}),l.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(j=>({...j,level:"N5",lessonId:e.id}))}function qt(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(c=>{const d=String(c.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(c))}),Ht().forEach(c=>{if(a.length>=4)return;const d={value:c.id,label:c.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const l=n%a.length;return[...a.slice(l),...a.slice(0,l)]}function Uu(e){for(const t of Ge()){const n=Ar(t).find(s=>s.id===e);if(n)return n}return null}function jn(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function Tr(e,t,n){return jn(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function Sk(e,t,n){const s=Q(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const a=e.exerciseSrs[String(n.id)]||null;if(a)return ps(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=Hs(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function Nk(e,t,n,s){if(!e||!n)return;const a=Q(t);a&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=ps(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function Ir(e,t,n,s,a,o={}){const l=Q(e);if(!l||!t||!n)return;const c=new Date().toISOString(),d=jn(l,n.id);if(d&&r.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:a,checkedAt:c};d?(r.reviewExerciseResults||(r.reviewExerciseResults={}),r.reviewExerciseResults[n.id]=u,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const m=re(Sk(t,l,n)||Hs(l,n.lessonId||"",n.id,n)),f=fe(m,a?"good":"again");if(Nk(t,l,n,f),Qt(m,f,a?"good":"again"),ve(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,o.markCompleted?.(c),(o.markStudied||(()=>{}))();const w=Number(o.rewardXp||0),N=Number(o.rewardMoon||0);(w||N)&&G(w,N,o.rewardKey||`exercise:${n.id}`)}}else if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const w=n.answerLabel||n.answer;w&&o.markWordMistake?.(w)}d&&(r.pendingFocus="__scroll-top__"),I(),C(),jt("textbook exercise post-render effects",()=>{D(a?"answer_correct":"answer_wrong"),X()})}function Ju(e){const t=Q(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function Gu(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=jn(e.level,e.id,"reading"),l=re(En(e)||Mn(e));if(r.reviewExerciseResults||(r.reviewExerciseResults={}),e.kind==="cloze"){l.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():l.selectedIndices||[],l.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(A=>({kanji:String(A?.kanji||""),reading:String(A?.reading||"")})).filter(A=>A.kanji):l.selectedTiles||[],l.selectedText=String(t||""),l.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():l.wrongIndexes||[],l.completed=!0,l.completedAt=a,l.correct=!!n,l.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},gs(e,l),r.reviewExerciseResults[e.id]=re(l),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1;const w=re(l),N=fe(w,n?"good":"again");N.selectedIndices=l.selectedIndices,N.selectedTiles=l.selectedTiles,N.selectedText=l.selectedText,N.wrongIndexes=l.wrongIndexes,N.completed=!0,N.completedAt=a,N.correct=!!n,N.answers=l.answers,gs(e,N),r.reviewExerciseResults[e.id]=re(N),Qt(w,N,n?"good":"again"),ve();const j=Ju(e);n?G(j.xp,j.moon,`reading:${e.id}`):G(Math.max(1,Math.round(j.xp*.35)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),o&&Oi("reading-cloze"),I(),C(),jt("reading cloze post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),X()});return}const c=e.question||e.questions?.[0]||null,d=String(s.questionKey||c?.id||e.id);if(l.answers||(l.answers={}),l.answers[d])return;if(l.answers[d]={selected:String(t||""),correct:!!n,checkedAt:a},l.completed=!!d&&Object.keys(l.answers).length>=Bl(),l.completedAt=l.completed?a:l.completedAt||null,l.correct=l.completed?Object.values(l.answers).every(w=>!!w?.correct):!1,l.selectedText=String(t||""),gs(e,l),r.reviewExerciseResults[e.id]=re(l),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1,C(),!l.completed){I(),jt("reading question post-render sound",()=>{D(n?"answer_correct":"answer_wrong")});return}const u=re(l),m=Object.values(l.answers).every(w=>!!w?.correct),f=fe(u,m?"good":"again");f.answers=l.answers,f.completed=!0,f.completedAt=a,f.correct=m,f.selectedText=String(t||""),f.wrongQuestions=Object.entries(l.answers).filter(([,w])=>!w?.correct).map(([w])=>w),gs(e,f),r.reviewExerciseResults[e.id]=re(f),Qt(u,f,m?"good":"again"),ve();const v=Ju(e);m?G(v.xp,v.moon,`reading:${e.id}`):G(Math.max(1,Math.round(v.xp*.25)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),o&&Oi("reading-exercise"),I(),C(),jt("reading exercise post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),X()})}function Lk(e){const t=Js();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");Gu(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function xk(e){const t=Js();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=re(En(n)||Mn(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,Rt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){z(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),gs(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=re(s),C(),s.selectedIndices.length>=a){Hu();return}I()}function Ck(){const e=Js();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=re(En(t)||Mn(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=re(n),gs(t,n),C(),I())}function Ak(){const e=Js();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=re(En(t)||Mn(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=re(n),gs(t,n),C(),I())}function Hu(){const e=Js();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=Rt(t),s=re(En(t)||Mn(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){z(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),l=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),c=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);Gu(t,o.map(d=>d.kanji).join(""),l,{selectedIndices:a,selectedTiles:o,wrongIndexes:c})}function Tk(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,I()}function ol(e){return Tr("N5",Z(),e)}function Ik(e){const t=Uu(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;qu(t,n,s)}function Rk(e){const t=Uu(e);if(!t)return;const n=document.getElementById(Vu(t.id)),s=n?String(n.value||"").trim():"";qu(t,s,s===t.answer)}function qu(e,t,n){const s=Z();Ir("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>Ks(e.kanji,e.cardId),markDifficult:()=>Rr(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function _k(e,t,n,s){var f;const a=Q(e)||String(e||"").toUpperCase(),o=a==="N5"?At(t):a==="N4"?Sn(t):a==="N3"?Ln(t):a==="N2"?Cn(t):a==="N1"?is(t):null;if(!o)return;const l=Md(a,o),c=l.find(v=>String(v.id)===String(n))||se(n);if(!c)return;const d=rs(a,o,l);if(d.session.answers?.[c.id])return;const u=new Date().toISOString();d.session.answers[c.id]={remembered:!!s,rating:s?"good":"again",answeredAt:u};const m=l.findIndex(v=>String(v.id)===String(c.id));d.session.currentIndex=m>=0?m+1:Math.min(Number(d.session.currentIndex||0)+1,l.length),d.session.phase=d.session.currentIndex>=l.length?"test":"study",d.session.updatedAt=u,d.session.phase==="test"&&((f=d.session).testOpenedAt||(f.testOpenedAt=u)),r.pendingFocus=null,Nt(),C(),Cd(`${a} lesson SRS post-render commit`,()=>{const v=s?"good":"again";a==="N5"?Wu(c.id,v,"review"):a==="N4"?ap(c.id,v,"review"):a==="N3"?vp(c.id,v,"review"):a==="N2"?Ap(c.id,v,"review"):a==="N1"&&Op(c.id,v,"review")})}function Wu(e,t,n="review"){const s=se(e);if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=re(F(s.id)),d=fe(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Ks(s.kanji,s.id),Z().srsKanji[s.kanji]=new Date().toISOString(),a?(Rr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`)):Ee(t)?(Rr(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`)),Nt(),C(),jt("N5 SRS post-render effects",()=>{D(Ee(t)?"answer_wrong":"answer_correct"),X()})}function Pk(e){const t=se(e);if(!t)return;const n=Z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ks(t.kanji,t.id),G(8,1,`n5_writing:${t.id}`)),X(),C(),I()}function Mk(e){const t=At(e);if(!t)return;const n=Z(),s=`n5:${t.id}`;if(oe.has(s)||n.completedLessons[t.id]){I();return}const a=$n(t);if(a.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof z=="function"&&z(v);return}const l=Ar(t);if(!(l.length>0&&l.every(v=>ol(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(v);return}oe.add(s),$n(t).forEach(v=>{Ks(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const w=F(v.id);w.state==="New"&&(r.progress.cards[v.id]=fe(re(w),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Ge().find(v=>v.order===t.order+1)?.id||t.id;const d=Ms(),u=d.sessions[n5SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=a.length,d.activeSessionKey=n5SessKey,d.lastUpdatedAt=v}Z(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),C({immediate:!0}),as()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const m=r.n5Meta?.rewards?.lessonCompleteXp||45,f=r.n5Meta?.rewards?.lessonCompleteMoon||6;G(m,f,`n5_lesson:${t.id}`),Ys("N5",t.id),rt({title:`${Je().lessonComplete}: ${h(t.title)}`,message:Je().lessonCompleteText,xp:m,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),X(),C(),I()}function Ks(e,t=null){if(!e)return;const n=Z();Ls(n,e)}function Rr(e,t=null,n=!0){if(e&&(Z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(r.progress.cards[t]=fe(re(s),"again"))}}function Ek(e){const t=At(e);t&&(Vt("textbook-lesson",{level:"N5",lessonId:t.id}),Z().currentLessonId=t.id,bt("N5",t.id,"n5_lesson_open"),Ut("N5",t,"n5_lesson_open"),_r(t.id))}function Kk(){_r("")}function Dk(e=null){e&&(Z().activeReviewMode=e),_r("review")}function _r(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";it(t),C(),le(),Lt()}function Fk(e="due"){const t=Date.now(),n=Z(),s=Ht();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=F(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Xu(){const e=Ht(),t=Ge(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const l=e[o*7%e.length]||e[o%e.length],c=n[o%n.length],d=t.find(u=>u.kanji.includes(l.kanji))||t[0];a.push(Ok(c,l,d,o))}return a.filter(Boolean)}function Ok(e,t,n,s){const o=Tt(t)[0],l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:qt({value:t.id,label:K(t)},Ht().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:qt({value:o.reading,label:o.reading},Ht().flatMap(c=>Tt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:qt({value:c,label:c},Ge().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:_e(o),answer:c,answerLabel:c,options:qt({value:c,label:c},Ht().flatMap(d=>Tt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==c),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:qt({value:t.kanji,label:t.kanji},Ht().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function Bk(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Z().finalTest.answers[t]=n,C(),I())}function Qu(e=!1){if(r.finalTestBusy)return;const t=Z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}r.finalTestBusy=!0;try{const n=Xu(),s=r.n5FinalTest||{},a=Je(),o=Xt(t,n),l=gS(s),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const S=o.firstMissingId?`#${Us("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:S,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=S,C();return}let u=0;const m=[],f=[];n.forEach(S=>{const U=String(t.answers?.[S.id]||"").trim();U===S.answer?(u+=1,Ks(S.kanji,S.cardId)):(U||f.push(S),m.push({id:S.id,kanji:S.kanji,answer:S.answerLabel,selected:U}),Rr(S.kanji,S.cardId))});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,j=Math.max(0,m.length-f.length);let A=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(S=>S.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const S=Number(s?.rewards?.completeXp||120),U=Number(s?.rewards?.completeMoon||20);A+=S,k+=U,G(S,U,"n5_final_complete")}if(t.passed&&!N){const S=Number(s?.rewards?.passXp||80),U=Number(s?.rewards?.passMoon||12);A+=S,k+=U,G(S,U,"n5_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=k,oa("N5",t),Z(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),C({immediate:!0}),r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:A,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),C()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,I()}}function zk(){Z().finalTest=yo().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,C(),I()}function Vu(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Uk(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=ll();t.opened||(t.opened=!0,X(),C());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return ty();if(n==="review")return Xk();if(n==="kanji")return Vk();if(n==="grammar")return Yk();if(n==="reading")return Zk();if(n==="listening")return ey();const s=Sn(n);return s?(W().currentLessonId=s.id,bt("N4",s.id,"n4_lesson_page"),Ut("N4",s,"n4_lesson_page"),Hk(e,s)):Jk(e)}function Jk(e){const t=ry(),n=Le(),s=ct(),a=sy(),o=r.n4Meta||{},l=h(o.principle||{});return`
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
          ${_n("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>Gk(c)).join("")}
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

        ${Es("N4")}
      </section>
    `}function Gk(e){const t=np(e.id),n=Le();let s=e.kanji.filter(a=>W().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(ay(t))}</small>
      </a>
    `}function Hk(e,t){const n=Le(),s=Pr(t),a=di(t),o=np(t.id),l=rs("N4",t,s);let c=o==="completed";const d=`n4:${t.id}`;oe.has(d)&&(c=!0);const u=c,m=a.filter(J=>dl(J.id)?.correct).length,f=a.length>0&&m===a.length,v=s.filter(J=>W().studiedKanji[J.kanji]).length,w=t.kanji.length,N=v>=w,j=!c&&f&&N,A=t.kanji.filter(J=>W().difficultKanji[J]).join(" · "),k=ct().find(J=>J.order===t.order+1),S=Ct("N4",t.id,"player"),U=Ct("N4",t.id,"test");return`
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
              ${t.grammarFocus.map(J=>`<span class="pill">${i(J)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${Lr("N4",t,s,n,{playerId:S,answerAction:"jlpt-lesson-answer",examples:J=>dt(J),sentence:J=>qk(J,t)})}

        ${Wk(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(J=>`
              <article>
                <strong>${i(J.jp)}</strong>
                <span>${i(V(J.reading||""))}</span>
                <small>${i(h({ru:J.ru,en:J.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(U)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(J=>Yu(J)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(J=>W().studiedKanji[J.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n4/${g(k.id)}" data-action="n4-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function qk(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Le().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Wk(e){const t=Le(),n=(e.grammarFocus||[]).map(s=>cl(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(W().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Yu(e){const t=Le(),n=dl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&jn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(cp(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Zu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Zu(e,n)}
      </article>
    `}function Zu(e,t){if(!t)return"";const n=Le(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Xk(e){const t=Le(),n=W().activeReviewMode||"due",s=yy(n);return`
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
          ${s.map((a,o)=>Qk(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Qk(e,t){const n=Le(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Zt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(dt(e)[0]?.word||e.hiragana||"")} · ${i(dt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Vk(e){const t=Le(),n=Ve();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/170</span><span class="pill">${i(F(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(dt(s)[0]?.word||"")} · ${i(dt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Yk(e){const t=Le();return`
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
    `}function Zk(e){const t=Le(),n=ra("N4","n4_reading_page"),s=Ws("N4");return(n||s)&&C(),`
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
          ${r.n4Reading.map(a=>ep(a,"reading")).join("")}
        </div>
      </section>
    `}function ey(e){const t=Le();return`
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
          ${r.n4Listening.map(n=>ep(n,"listening")).join("")}
        </div>
      </section>
    `}function ep(e,t){const n=Le(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],a=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n4-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function ty(e){const t=Le(),n=r.n4FinalTest||{},s=op(),a=W().finalTest,o=Xt(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),C()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Mt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>ny(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Mt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function ny(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Le().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Le(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function ll(){r.progress.n4Course=bd($o(),r.progress.n4Course||{});const e=ct();!Sn(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n4Course.completedLessons[s.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function W(){return ll()}function ct(){return r.n4Textbook?.items||[]}function Sn(e){const t=String(e||"");return t&&ct().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function sy(){return Sn(W().currentLessonId)||ct().find(e=>!W().completedLessons[e.id])||ct()[0]||null}function Pr(e){return(e?.kanji||[]).map(t=>tp(t)).filter(Boolean)}function Ve(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>tp(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function tp(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Fa(s,n):s||(n?Fa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function cl(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function dt(e){return Cr(e,e.examples)}function ry(){const e=Ve(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{F(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of oe)if(a.startsWith("n4:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((a,o)=>a+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function np(e){const t=W(),n=`n4:${e}`;return oe.has(n)||t.completedLessons[e]?"completed":Sn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function ay(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function di(e){const t=Pr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:Ye({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ye({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=dt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Ye({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>dt(k).map(S=>({value:S.reading,label:S.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ye({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),1),...o("sentence")});const v=t[3]||t[0],w=dt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${_e(w)}В»?`:`Which word matches "${_e(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Ye({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(k=>dt(k).map(S=>({value:S.word,label:S.word}))).filter(k=>k.value&&k.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(N)}`:`Type the kanji for: ${K(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const j=cl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:Ye({value:j.answer,label:j.answer},j.options.filter(k=>k!==j.answer).map(k=>({value:k,label:k})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:h({ru:A.ru,en:A.en}),answerLabel:h({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Ye({value:h({ru:A.ru,en:A.en}),label:h({ru:A.ru,en:A.en})},n.filter(k=>k.jp!==A.jp).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N4",lessonId:e.id}))}function Ye(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Ve().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function sp(e){for(const t of ct()){const n=di(t).find(s=>s.id===e);if(n)return n}return null}function dl(e){return Tr("N4",W(),e)}function iy(e){const t=sp(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;rp(t,s,a)}function oy(e){const t=sp(e);if(!t)return;const n=document.getElementById(cp(t.id)),s=n?String(n.value||"").trim():"";rp(t,s,s===t.answer)}function rp(e,t,n){const s=W();Ir("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>Ds(e.kanji,e.cardId),markDifficult:()=>Mr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function ap(e,t,n="review"){const s=se(e)||Ve().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=re(F(s.id)),d=fe(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Ds(s.kanji,s.id),W().srsKanji[s.kanji]=new Date().toISOString(),a?(Mr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`)):Ee(t)?(Mr(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`)),Nt(),C(),jt("N4 SRS post-render effects",()=>{D(Ee(t)?"answer_wrong":"answer_correct"),X()})}function ly(e){const t=se(e)||Ve().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ds(t.kanji,t.id),G(9,1,`n4_writing:${t.id}`)),X(),C(),I()}function cy(e){const t=Sn(e);if(!t)return;const n=W(),s=`n4:${t.id}`;if(oe.has(s)||n.completedLessons[t.id]){I();return}const a=Pr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(w);return}const l=di(t);if(!(l.length>0&&l.every(w=>dl(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(w);return}oe.add(s),Pr(t).forEach(w=>{Ds(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=F(w.id);N.state==="New"&&(r.progress.cards[w.id]=fe(re(N),"good"))}),(t.grammarFocus||[]).map(w=>cl(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ct().find(w=>w.order===t.order+1)?.id||t.id;const d=Ms(),u=d.sessions[n4SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n4SessKey,d.lastUpdatedAt=w}W(),Object.keys(n.completedLessons||{}).length>=9&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"),r.progress.unlockedJlptLevels.includes("N3")||r.progress.unlockedJlptLevels.push("N3"));const f=r.n4Meta?.rewards?.lessonCompleteXp||65,v=r.n4Meta?.rewards?.lessonCompleteMoon||8;G(f,v,`n4_lesson:${t.id}`),Ys("N4",t.id),rt({title:`${Le().lessonComplete}: ${h(t.title)}`,message:Le().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),X(),C(),I()}function Ds(e,t=null){if(!e)return;const n=W();Ls(n,e)}function Mr(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(r.progress.cards[t]=fe(re(s),"again"))}}function dy(e,t=""){const n=r.n4Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=W();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):a||(r.progress.totalWrong+=1,D("answer_wrong")),ve(),X(),C(),I()}function uy(e,t="0",n=""){ip("reading",e,t,n)}function py(e,t="0",n=""){ip("listening",e,t,n)}function ip(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(w=>w.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=W(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening;if(f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!v[o.id]){v[o.id]=new Date().toISOString();const w=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,N=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;G(w,N,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,D("answer_correct")}else d||(r.progress.totalWrong+=1,D("answer_wrong"));ve(),X(),C(),I()}function gy(e){const t=Sn(e);t&&(Vt("textbook-lesson",{level:"N4",lessonId:t.id}),W().currentLessonId=t.id,bt("N4",t.id,"n4_lesson_open"),Ut("N4",t,"n4_lesson_open"),Nn(t.id))}function my(){Nn("")}function fy(e=null){e&&(W().activeReviewMode=e),Nn("review")}function hy(){Nn("kanji")}function vy(){Nn("grammar")}function wy(){Nn("reading")}function by(){Nn("listening")}function ky(){Nn("final-test")}function Nn(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";it(t),X(),C(),le(),Lt()}function yy(e="due"){const t=Date.now(),n=W(),s=Ve();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=F(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function op(){const e=Ve();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ct().find(d=>d.kanji.includes(o.kanji))||ct()[0];s.push($y(l,o,c,a))}return s.filter(Boolean)}function $y(e,t,n,s){const o=dt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:Ye({value:t.id,label:K(t)},Ve().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Ye({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ve().flatMap(c=>dt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:Ye({value:c,label:c},ct().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:_e(o),answer:c,answerLabel:c,options:Ye({value:c,label:c},Ve().flatMap(d=>dt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(c)return{id:`n4-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:Ye({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n4-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:Ye({value:t.kanji,label:t.kanji},Ve().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function jy(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,C(),I())}function lp(e=!1){if(r.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}r.finalTestBusy=!0;try{const n=op(),s=r.n4FinalTest||{},a=Le(),o=Xt(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const S=o.firstMissingId?`#${Us("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:S,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=S,C();return}let u=0;const m=[],f=[];n.forEach(S=>{const U=String(t.answers?.[S.id]||"").trim();if(U===S.answer){if(u+=1,S.kanji&&Ds(S.kanji,S.cardId),S.grammarId){const J=W();J.completedGrammar[S.grammarId]=J.completedGrammar[S.grammarId]||d}}else U||f.push(S),m.push({id:S.id,kanji:S.kanji||"",answer:S.answerLabel,selected:U}),S.kanji&&Mr(S.kanji,S.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,j=Math.max(0,m.length-f.length);let A=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(S=>S.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const S=Number(s?.rewards?.completeXp||180),U=Number(s?.rewards?.completeMoon||35);A+=S,k+=U,G(S,U,"n4_final_complete")}if(t.passed&&!N){const S=Number(s?.rewards?.passXp||90),U=Number(s?.rewards?.passMoon||15);A+=S,k+=U,G(S,U,"n4_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=k,oa("N4",t),W(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:A,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),C()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,I()}}function Sy(){W().finalTest=$o().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,C(),I()}function cp(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Ny(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=pl();t.opened||(t.opened=!0,X(),C());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Dy();if(n==="review")return Ry();if(n==="kanji")return Py();if(n==="grammar")return My();if(n==="reading")return Ey();if(n==="listening")return Ky();const s=Ln(n);return s?(H().currentLessonId=s.id,bt("N3",s.id,"n3_lesson_page"),Ut("N3",s,"n3_lesson_page"),Cy(e,s)):Ly(e)}function Ly(e){const t=By(),n=ye(),s=ut(),a=Oy(),o=r.n3Meta||{},l=h(o.principle||{});return`
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
          ${_n("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>xy(c)).join("")}
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

        ${Es("N3")}
      </section>
    `}function xy(e){const t=mp(e.id),n=ye();let s=e.kanji.filter(a=>H().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(zy(t))}</small>
      </a>
    `}function Cy(e,t){const n=ye(),s=Er(t),a=ui(t),o=mp(t.id),l=rs("N3",t,s);let c=o==="completed";const d=`n3:${t.id}`;oe.has(d)&&(c=!0);const u=c,m=a.filter(O=>ml(O.id)?.correct).length,f=a.length>0&&m===a.length,v=s.filter(O=>H().studiedKanji[O.kanji]).length,w=t.kanji.length,N=v>=w,j=!c&&f&&N,A=t.kanji.filter(O=>H().difficultKanji[O]).join(" · "),k=ut().find(O=>O.order===t.order+1),S=dp(t),U=S?!!H().completedReading[S.id]:!1,J=Ct("N3",t.id,"player"),vs=Ct("N3",t.id,"test");return`
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
              ${t.grammarFocus.map(O=>`<span class="pill">${i(O)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${Lr("N3",t,s,n,{playerId:J,answerAction:"jlpt-lesson-answer",examples:O=>pt(O),sentence:O=>Ty(O,t)})}

        ${Iy(t)}

        ${Ay(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(O=>`
              <article>
                <strong>${i(O.jp)}</strong>
                <span>${i(V(O.reading||""))}</span>
                <small>${i(h({ru:O.ru,en:O.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(vs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(O=>up(O)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(O=>H().studiedKanji[O.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${S?`<span class="pill">${i(n.miniReadingTitle)}: ${i(U?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n3/${g(k.id)}" data-action="n3-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function dp(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function Ay(e){const t=ye(),n=dp(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${ul(n,"reading")}
      </section>
    `:""}function Ty(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(ye().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Iy(e){const t=ye(),n=(e.grammarFocus||[]).map(s=>gl(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(H().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function up(e){const t=ye(),n=ml(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&jn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(yp(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${pp(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${pp(e,n)}
      </article>
    `}function pp(e,t){if(!t)return"";const n=ye(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Ry(e){const t=ye(),n=H().activeReviewMode||"due",s=r$(n);return`
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
          ${s.map((a,o)=>_y(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function _y(e,t){const n=ye(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Zt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(pt(e)[0]?.word||e.hiragana||"")} · ${i(pt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Py(e){const t=ye(),n=Ze();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/370</span><span class="pill">${i(F(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(pt(s)[0]?.word||"")} · ${i(pt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function My(e){const t=ye();return`
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
    `}function Ey(e){const t=ye(),n=ra("N3","n3_reading_page"),s=Ws("N3");return(n||s)&&C(),`
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
          ${r.n3Reading.map(a=>ul(a,"reading")).join("")}
        </div>
      </section>
    `}function Ky(e){const t=ye();return`
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
          ${r.n3Listening.map(n=>ul(n,"listening")).join("")}
        </div>
      </section>
    `}function ul(e,t){const n=ye(),s=t==="reading"?H().completedReading[e.id]:H().completedListening[e.id],a=t==="reading"?H().readingAnswers:H().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n3-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Dy(e){const t=ye(),n=r.n3FinalTest||{},s=bp(),a=H().finalTest,o=Xt(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),C()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Mt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>Fy(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Mt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Fy(e,t){const n=H().finalTest.answers?.[e.id],s=!!H().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(ye().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function ye(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function pl(){r.progress.n3Course=kd(jo(),r.progress.n3Course||{});const e=ut();!Ln(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n3Course.completedLessons[s.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function H(){return pl()}function ut(){return r.n3Textbook?.items||[]}function Ln(e){const t=String(e||"");return t&&ut().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function Oy(){return Ln(H().currentLessonId)||ut().find(e=>!H().completedLessons[e.id])||ut()[0]||null}function Er(e){return(e?.kanji||[]).map(t=>gp(t)).filter(Boolean)}function Ze(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>gp(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function gp(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Oa(s,n):s||(n?Oa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function gl(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function pt(e){return Cr(e,e.examples)}function By(){const e=Ze(),t=H(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{F(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of oe)if(a.startsWith("n3:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function mp(e){const t=H(),n=`n3:${e}`;return oe.has(n)||t.completedLessons[e]?"completed":Ln(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function zy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ui(e){const t=Er(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:et({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:et({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=pt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:et({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>pt(k).map(S=>({value:S.reading,label:S.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:et({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),1),...o("sentence")});const v=t[3]||t[0],w=pt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${_e(w)}В»?`:`Which word matches "${_e(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:et({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(k=>pt(k).map(S=>({value:S.word,label:S.word}))).filter(k=>k.value&&k.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(N)}`:`Type the kanji for: ${K(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const j=gl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:et({value:j.answer,label:j.answer},j.options.filter(k=>k!==j.answer).map(k=>({value:k,label:k})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:h({ru:A.ru,en:A.en}),answerLabel:h({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:et({value:h({ru:A.ru,en:A.en}),label:h({ru:A.ru,en:A.en})},n.filter(k=>k.jp!==A.jp).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N3",lessonId:e.id}))}function et(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Ze().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function fp(e){for(const t of ut()){const n=ui(t).find(s=>s.id===e);if(n)return n}return null}function ml(e){return Tr("N3",H(),e)}function Uy(e){const t=fp(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;hp(t,s,a)}function Jy(e){const t=fp(e);if(!t)return;const n=document.getElementById(yp(t.id)),s=n?String(n.value||"").trim():"";hp(t,s,s===t.answer)}function hp(e,t,n){const s=H();Ir("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>Fs(e.kanji,e.cardId),markDifficult:()=>Kr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function vp(e,t,n="review"){const s=se(e)||Ze().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=re(F(s.id)),d=fe(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Fs(s.kanji,s.id),H().srsKanji[s.kanji]=new Date().toISOString(),a?(Kr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`)):Ee(t)?(Kr(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`)),Nt(),C(),jt("N3 SRS post-render effects",()=>{D(Ee(t)?"answer_wrong":"answer_correct"),X()})}function Gy(e){const t=se(e)||Ze().find(s=>String(s.id)===String(e));if(!t)return;const n=H();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Fs(t.kanji,t.id),G(9,1,`n3_writing:${t.id}`)),X(),C(),I()}function Hy(e){const t=Ln(e);if(!t)return;const n=H(),s=`n3:${t.id}`;if(oe.has(s)||n.completedLessons[t.id]){I();return}const a=Er(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(w);return}const l=ui(t);if(!(l.length>0&&l.every(w=>ml(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(w);return}oe.add(s),Er(t).forEach(w=>{Fs(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=F(w.id);N.state==="New"&&(r.progress.cards[w.id]=fe(re(N),"good"))}),(t.grammarFocus||[]).map(w=>gl(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ut().find(w=>w.order===t.order+1)?.id||t.id;const d=Ms(),u=d.sessions[n3SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n3SessKey,d.lastUpdatedAt=w}H(),Object.keys(n.completedLessons||{}).length>=37&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N3","N2"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const f=r.n3Meta?.rewards?.lessonCompleteXp||75,v=r.n3Meta?.rewards?.lessonCompleteMoon||9;G(f,v,`n3_lesson:${t.id}`),Ys("N3",t.id),rt({title:`${ye().lessonComplete}: ${h(t.title)}`,message:ye().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),X(),C(),I()}function Fs(e,t=null){if(!e)return;const n=H();Ls(n,e)}function Kr(e,t=null,n=!0){if(e&&(H().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(r.progress.cards[t]=fe(re(s),"again"))}}function qy(e,t=""){const n=r.n3Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=H();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):a||(r.progress.totalWrong+=1,D("answer_wrong")),ve(),X(),C(),I()}function Wy(e,t="0",n=""){wp("reading",e,t,n)}function Xy(e,t="0",n=""){wp("listening",e,t,n)}function wp(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(j=>j.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=H(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const N=(o.questions||[]).every((j,A)=>f[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),N&&!w){v[o.id]=new Date().toISOString();const j=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,A=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;G(j,A,`n3_${e}:${o.id}`)}ve(),X(),C(),I()}function Qy(e){const t=Ln(e);t&&(Vt("textbook-lesson",{level:"N3",lessonId:t.id}),H().currentLessonId=t.id,bt("N3",t.id,"n3_lesson_open"),Ut("N3",t,"n3_lesson_open"),xn(t.id))}function Vy(){xn("")}function Yy(e=null){e&&(H().activeReviewMode=e),xn("review")}function Zy(){xn("kanji")}function e$(){xn("grammar")}function t$(){xn("reading")}function n$(){xn("listening")}function s$(){xn("final-test")}function xn(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,H().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";it(t),X(),C(),le(),Lt()}function r$(e="due"){const t=Date.now(),n=H(),s=Ze();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=F(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function bp(){const e=Ze();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ut().find(d=>d.kanji.includes(o.kanji))||ut()[0];s.push(a$(l,o,c,a))}return s.filter(Boolean)}function a$(e,t,n,s){const o=pt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:et({value:t.id,label:K(t)},Ze().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:et({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ze().flatMap(c=>pt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:et({value:c,label:c},ut().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:_e(o),answer:c,answerLabel:c,options:et({value:c,label:c},Ze().flatMap(d=>pt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(c)return{id:`n3-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:et({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n3-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:et({value:t.kanji,label:t.kanji},Ze().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function i$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(H().finalTest.answers[t]=n,C(),I())}function kp(e=!1){if(r.finalTestBusy)return;const t=H().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}r.finalTestBusy=!0;try{const n=bp(),s=r.n3FinalTest||{},a=ye(),o=Xt(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const S=o.firstMissingId?`#${Us("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:S,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=S,C();return}let u=0;const m=[],f=[];n.forEach(S=>{const U=String(t.answers?.[S.id]||"").trim();if(U===S.answer){if(u+=1,S.kanji&&Fs(S.kanji,S.cardId),S.grammarId){const J=H();J.completedGrammar[S.grammarId]=J.completedGrammar[S.grammarId]||d}}else U||f.push(S),m.push({id:S.id,kanji:S.kanji||"",answer:S.answerLabel,selected:U}),S.kanji&&Kr(S.kanji,S.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,j=Math.max(0,m.length-f.length);let A=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(S=>S.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const S=Number(s?.rewards?.completeXp||220),U=Number(s?.rewards?.completeMoon||40);A+=S,k+=U,G(S,U,"n3_final_complete")}if(t.passed&&!N){const S=Number(s?.rewards?.passXp||110),U=Number(s?.rewards?.passMoon||18);A+=S,k+=U,G(S,U,"n3_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=k,oa("N3",t),H(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:A,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),C()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,I()}}function o$(){H().finalTest=jo().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,C(),I()}function yp(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function l$(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=hl();t.opened||(t.opened=!0,X(),C());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return y$();if(n==="review")return f$();if(n==="kanji")return v$();if(n==="grammar")return w$();if(n==="reading")return b$();if(n==="listening")return k$();const s=Cn(n);return s?(q().currentLessonId=s.id,bt("N2",s.id,"n2_lesson_page"),Ut("N2",s,"n2_lesson_page"),u$(e,s)):c$(e)}function c$(e){const t=S$(),n=$e(),s=gt(),a=j$(),o=r.n2Meta||{},l=h(o.principle||{});return`
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
          ${_n("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>d$(c)).join("")}
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

        ${Es("N2")}
      </section>
    `}function d$(e){const t=Lp(e.id),n=$e();let s=e.kanji.filter(a=>q().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(N$(t))}</small>
      </a>
    `}function u$(e,t){const n=$e(),s=Dr(t),a=pi(t),o=Lp(t.id),l=rs("N2",t,s);let c=o==="completed";const d=`n2:${t.id}`;oe.has(d)&&(c=!0);const u=c,m=a.filter(O=>wl(O.id)?.correct).length,f=a.length>0&&m===a.length,v=s.filter(O=>q().studiedKanji[O.kanji]).length,w=t.kanji.length,N=v>=w,j=!c&&f&&N,A=t.kanji.filter(O=>q().difficultKanji[O]).join(" · "),k=gt().find(O=>O.order===t.order+1),S=$p(t),U=S?!!q().completedReading[S.id]:!1,J=Ct("N2",t.id,"player"),vs=Ct("N2",t.id,"test");return`
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
              ${t.grammarFocus.map(O=>`<span class="pill">${i(O)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${Lr("N2",t,s,n,{playerId:J,answerAction:"jlpt-lesson-answer",examples:O=>mt(O),sentence:O=>g$(O,t)})}

        ${m$(t)}

        ${p$(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(O=>`
              <article>
                <strong>${i(O.jp)}</strong>
                <span>${i(V(O.reading||""))}</span>
                <small>${i(h({ru:O.ru,en:O.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(vs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(O=>jp(O)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(O=>q().studiedKanji[O.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${S?`<span class="pill">${i(n.miniReadingTitle)}: ${i(U?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n2/${g(k.id)}" data-action="n2-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function $p(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function p$(e){const t=$e(),n=$p(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${fl(n,"reading")}
      </section>
    `:""}function g$(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i($e().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function m$(e){const t=$e(),n=(e.grammarFocus||[]).map(s=>vl(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(q().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function jp(e){const t=$e(),n=wl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&jn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(_p(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Sp(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Sp(e,n)}
      </article>
    `}function Sp(e,t){if(!t)return"";const n=$e(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function f$(e){const t=$e(),n=q().activeReviewMode||"due",s=B$(n);return`
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
          ${s.map((a,o)=>h$(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function h$(e,t){const n=$e(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Zt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(mt(e)[0]?.word||e.hiragana||"")} · ${i(mt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function v$(e){const t=$e(),n=tt();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/380</span><span class="pill">${i(F(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(mt(s)[0]?.word||"")} · ${i(mt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function w$(e){const t=$e();return`
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
    `}function b$(e){const t=$e(),n=ra("N2","n2_reading_page"),s=Ws("N2");return(n||s)&&C(),`
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
          ${r.n2Reading.map(a=>fl(a,"reading")).join("")}
        </div>
      </section>
    `}function k$(e){const t=$e();return`
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
          ${r.n2Listening.map(n=>fl(n,"listening")).join("")}
        </div>
      </section>
    `}function fl(e,t){const n=$e(),s=t==="reading"?q().completedReading[e.id]:q().completedListening[e.id],a=t==="reading"?q().readingAnswers:q().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n2-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function y$(e){const t=$e(),n=r.n2FinalTest||{},s=Ip(),a=q().finalTest,o=Xt(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),C()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Mt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>$$(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Mt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function $$(e,t){const n=q().finalTest.answers?.[e.id],s=!!q().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i($e().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function $e(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function hl(){r.progress.n2Course=yd(So(),r.progress.n2Course||{});const e=gt();!Cn(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n2Course.completedLessons[s.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function q(){return hl()}function gt(){return r.n2Textbook?.items||[]}function Cn(e){const t=String(e||"");return t&&gt().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function j$(){return Cn(q().currentLessonId)||gt().find(e=>!q().completedLessons[e.id])||gt()[0]||null}function Dr(e){return(e?.kanji||[]).map(t=>Np(t)).filter(Boolean)}function tt(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>Np(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Np(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ba(s,n):s||(n?Ba({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function vl(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function mt(e){return Cr(e,e.examples)}function S$(){const e=tt(),t=q(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{F(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of oe)if(a.startsWith("n2:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Lp(e){const t=q(),n=`n2:${e}`;return oe.has(n)||t.completedLessons[e]?"completed":Cn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function N$(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function pi(e){const t=Dr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:nt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:nt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=mt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:nt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>mt(k).map(S=>({value:S.reading,label:S.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:nt({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),1),...o("sentence")});const v=t[3]||t[0],w=mt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${_e(w)}В»?`:`Which word matches "${_e(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:nt({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(k=>mt(k).map(S=>({value:S.word,label:S.word}))).filter(k=>k.value&&k.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(N)}`:`Type the kanji for: ${K(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const j=vl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:nt({value:j.answer,label:j.answer},j.options.filter(k=>k!==j.answer).map(k=>({value:k,label:k})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:h({ru:A.ru,en:A.en}),answerLabel:h({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:nt({value:h({ru:A.ru,en:A.en}),label:h({ru:A.ru,en:A.en})},n.filter(k=>k.jp!==A.jp).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N2",lessonId:e.id}))}function nt(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),tt().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function xp(e){for(const t of gt()){const n=pi(t).find(s=>s.id===e);if(n)return n}return null}function wl(e){return Tr("N2",q(),e)}function L$(e){const t=xp(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Cp(t,s,a)}function x$(e){const t=xp(e);if(!t)return;const n=document.getElementById(_p(t.id)),s=n?String(n.value||"").trim():"";Cp(t,s,s===t.answer)}function Cp(e,t,n){const s=q();Ir("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>Os(e.kanji,e.cardId),markDifficult:()=>Fr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Ap(e,t,n="review"){const s=se(e)||tt().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=re(F(s.id)),d=fe(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Os(s.kanji,s.id),q().srsKanji[s.kanji]=new Date().toISOString(),a?(Fr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`)):Ee(t)?(Fr(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`)),Nt(),C(),jt("N2 SRS post-render effects",()=>{D(Ee(t)?"answer_wrong":"answer_correct"),X()})}function C$(e){const t=se(e)||tt().find(s=>String(s.id)===String(e));if(!t)return;const n=q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Os(t.kanji,t.id),G(9,1,`n2_writing:${t.id}`)),X(),C(),I()}function A$(e){const t=Cn(e);if(!t)return;const n=q(),s=`n2:${t.id}`;if(oe.has(s)||n.completedLessons[t.id]){I();return}const a=Dr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(w);return}const l=pi(t);if(!(l.length>0&&l.every(w=>wl(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(w);return}oe.add(s),Dr(t).forEach(w=>{Os(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=F(w.id);N.state==="New"&&(r.progress.cards[w.id]=fe(re(N),"good"))}),(t.grammarFocus||[]).map(w=>vl(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=gt().find(w=>w.order===t.order+1)?.id||t.id;const d=Ms(),u=d.sessions[n2SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n2SessKey,d.lastUpdatedAt=w}q(),Object.keys(n.completedLessons||{}).length>=38&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N2","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const f=r.n2Meta?.rewards?.lessonCompleteXp||85,v=r.n2Meta?.rewards?.lessonCompleteMoon||10;G(f,v,`n2_lesson:${t.id}`),Ys("N2",t.id),rt({title:`${$e().lessonComplete}: ${h(t.title)}`,message:$e().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),X(),C(),I()}function Os(e,t=null){if(!e)return;const n=q();Ls(n,e)}function Fr(e,t=null,n=!0){if(e&&(q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(r.progress.cards[t]=fe(re(s),"again"))}}function T$(e,t=""){const n=r.n2Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=q();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):a||(r.progress.totalWrong+=1,D("answer_wrong")),ve(),X(),C(),I()}function I$(e,t="0",n=""){Tp("reading",e,t,n)}function R$(e,t="0",n=""){Tp("listening",e,t,n)}function Tp(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(j=>j.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=q(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const N=(o.questions||[]).every((j,A)=>f[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),N&&!w){v[o.id]=new Date().toISOString();const j=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,A=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;G(j,A,`n2_${e}:${o.id}`)}ve(),X(),C(),I()}function _$(e){const t=Cn(e);t&&(Vt("textbook-lesson",{level:"N2",lessonId:t.id}),q().currentLessonId=t.id,bt("N2",t.id,"n2_lesson_open"),Ut("N2",t,"n2_lesson_open"),An(t.id))}function P$(){An("")}function M$(e=null){e&&(q().activeReviewMode=e),An("review")}function E$(){An("kanji")}function K$(){An("grammar")}function D$(){An("reading")}function F$(){An("listening")}function O$(){An("final-test")}function An(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,q().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";it(t),X(),C(),le(),Lt()}function B$(e="due"){const t=Date.now(),n=q(),s=tt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=F(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Ip(){const e=tt();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=gt().find(d=>d.kanji.includes(o.kanji))||gt()[0];s.push(z$(l,o,c,a))}return s.filter(Boolean)}function z$(e,t,n,s){const o=mt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:nt({value:t.id,label:K(t)},tt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:nt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},tt().flatMap(c=>mt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:nt({value:c,label:c},gt().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:_e(o),answer:c,answerLabel:c,options:nt({value:c,label:c},tt().flatMap(d=>mt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(c)return{id:`n2-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:nt({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n2-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:nt({value:t.kanji,label:t.kanji},tt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function U$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(q().finalTest.answers[t]=n,C(),I())}function Rp(e=!1){if(r.finalTestBusy)return;const t=q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}r.finalTestBusy=!0;try{const n=Ip(),s=r.n2FinalTest||{},a=$e(),o=Xt(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const S=o.firstMissingId?`#${Us("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:S,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=S,C();return}let u=0;const m=[],f=[];n.forEach(S=>{const U=String(t.answers?.[S.id]||"").trim();if(U===S.answer){if(u+=1,S.kanji&&Os(S.kanji,S.cardId),S.grammarId){const J=q();J.completedGrammar[S.grammarId]=J.completedGrammar[S.grammarId]||d}}else U||f.push(S),m.push({id:S.id,kanji:S.kanji||"",answer:S.answerLabel,selected:U}),S.kanji&&Fr(S.kanji,S.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,j=Math.max(0,m.length-f.length);let A=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(S=>S.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const S=Number(s?.rewards?.completeXp||220),U=Number(s?.rewards?.completeMoon||40);A+=S,k+=U,G(S,U,"n2_final_complete")}if(t.passed&&!N){const S=Number(s?.rewards?.passXp||110),U=Number(s?.rewards?.passMoon||18);A+=S,k+=U,G(S,U,"n2_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=k,oa("N2",t),q(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:A,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),C()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,I()}}function J$(){q().finalTest=So().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,C(),I()}function _p(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function G$(e){r.activeTextbookLevel="N1",r.activeJlptLesson="N1";const t=gi();t.opened||(t.opened=!0,X(),C());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return aj();if(n==="review")return Z$();if(n==="kanji")return tj();if(n==="grammar")return nj();if(n==="reading")return sj();if(n==="listening")return rj();const s=is(n);return s?(ee().currentLessonId=s.id,bt("N1",s.id,"n1_lesson_page"),Ut("N1",s,"n1_lesson_page"),W$(e,s)):H$(e)}function H$(e){const t=lj(),n=je(),s=ft(),a=oj(),o=r.n1Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N1 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
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
          ${_n("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>q$(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((r.n1Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Es("N1")}
      </section>
    `}function q$(e){const t=Kp(e.id),n=je();let s=e.kanji.filter(a=>ee().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(cj(t))}</small>
      </a>
    `}function W$(e,t){const n=je(),s=mi(t),a=fi(t),o=Kp(t.id),l=rs("N1",t,s);let c=o==="completed";const d=`n1:${t.id}`;oe.has(d)&&(c=!0);const u=c,m=a.filter(O=>yl(O.id)?.correct).length,f=a.length>0&&m===a.length,v=s.filter(O=>ee().studiedKanji[O.kanji]).length,w=t.kanji.length,N=v>=w,j=!c&&f&&N,A=t.kanji.filter(O=>ee().difficultKanji[O]).join(" · "),k=ft().find(O=>O.order===t.order+1),S=Pp(t),U=S?!!ee().completedReading[S.id]:!1,J=Ct("N1",t.id,"player"),vs=Ct("N1",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · ${i(n.lesson)} ${t.order}/53</p>
            <h1>${i(h(t.title))}</h1>
            <p>${i(h(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(n.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(h(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(O=>`<span class="pill">${i(O)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${Lr("N1",t,s,n,{playerId:J,answerAction:"jlpt-lesson-answer",examples:O=>ht(O),sentence:O=>Q$(O,t)})}

        ${V$(t)}

        ${X$(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(O=>`
              <article>
                <strong>${i(O.jp)}</strong>
                <span>${i(V(O.reading||""))}</span>
                <small>${i(h({ru:O.ru,en:O.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(vs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(O=>Y$(O)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(O=>ee().studiedKanji[O.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${S?`<span class="pill">${i(n.miniReadingTitle)}: ${i(U?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n1-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n1/${g(k.id)}" data-action="n1-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Pp(e){return e?.miniReadingId&&r.n1Reading.find(t=>t.id===e.miniReadingId)||null}function X$(e){const t=je(),n=Pp(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${bl(n,"reading")}
      </section>
    `:""}function Q$(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(je().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function V$(e){const t=je(),n=(e.grammarFocus||[]).map(s=>kl(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n1-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n1-section-grid">
          ${n.map(s=>`
            <article class="n1-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(h(s.title))}</h3>
              <p>${i(h(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(h({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(ee().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Y$(e){const t=je(),n=yl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&jn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Jp(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Mp(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Mp(e,n)}
      </article>
    `}function Mp(e,t){if(!t)return"";const n=je(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Z$(e){const t=je(),n=ee().activeReviewMode||"due",s=Nj(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n1-review" data-mode="${g(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>ej(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function ej(e,t){const n=je(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Zt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(ht(e)[0]?.word||e.hiragana||"")} · ${i(ht(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function tj(e){const t=je(),n=It(),s=n.slice(0,160);return`
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
              <div class="n5-kanji-topline"><span class="pill">${o+1}/${n.length}</span><span class="pill">${i(F(a.id).state)}</span></div>
              <div class="n5-big-kanji">${i(a.kanji)}</div>
              <h3>${i(K(a))}</h3>
              <p>${i(ht(a)[0]?.word||"")} · ${i(ht(a)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${g(a.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function nj(e){const t=je();return`
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
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(h({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
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
    `}function sj(e){const t=je(),n=ra("N1","n1_reading_page"),s=Ws("N1");return(n||s)&&C(),`
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
          ${r.n1Reading.map(a=>bl(a,"reading")).join("")}
        </div>
      </section>
    `}function rj(e){const t=je();return`
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
          ${r.n1Listening.map(n=>bl(n,"listening")).join("")}
        </div>
      </section>
    `}function bl(e,t){const n=je(),s=t==="reading"?ee().completedReading[e.id]:ee().completedListening[e.id],a=t==="reading"?ee().readingAnswers:ee().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
      <article class="n1-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n1-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n1-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function aj(e){const t=je(),n=r.n1FinalTest||{},s=zp(),a=ee().finalTest,o=Xt(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),C()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Final</p>
            <h1>${i(h(n.title||{}))}</h1>
            <p>${i(h(n.description||{}))}</p>
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
            ${Mt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>ij(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Mt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function ij(e,t){const n=ee().finalTest.answers?.[e.id],s=!!ee().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(je().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function je(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function gi(){r.progress.n1Course=$d(No(),r.progress.n1Course||{});const e=ft();!is(r.progress.n1Course.currentLessonId)&&e[0]&&(r.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n1Course.completedLessons[s.id]);return!r.progress.n1Course.currentLessonId&&n&&(r.progress.n1Course.currentLessonId=n.id),r.progress.n1Course}function ee(){return gi()}function ft(){return r.n1Textbook?.items||[]}function is(e){const t=String(e||"");return t&&ft().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function oj(){return is(ee().currentLessonId)||ft().find(e=>!ee().completedLessons[e.id])||ft()[0]||null}function mi(e){return(e?.kanji||[]).map(t=>Ep(t)).filter(Boolean)}function It(){const e=new Set;return(r.n1KanjiCatalog||[]).map(t=>Ep(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Ep(e){const t=String(e||""),n=r.n1KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N1")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?za(s,n):s||(n?za({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[]},n):null)}function kl(e){const t=String(e||"");return r.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function ht(e){return Cr(e,e.examples)}function lj(){const e=It(),t=ee(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{F(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of oe)if(a.startsWith("n1:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Kp(e){const t=ee(),n=`n1:${e}`;return oe.has(n)||t.completedLessons[e]?"completed":is(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function cj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function fi(e){const t=mi(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n1Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n1Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n1Meta?.rewards?.exerciseXp||11,rewardMoon:r.n1Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:st({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:st({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=ht(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:st({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>ht(k).map(S=>({value:S.reading,label:S.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:st({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),1),...o("sentence")});const v=t[3]||t[0],w=ht(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${_e(w)}В»?`:`Which word matches "${_e(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:st({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(k=>ht(k).map(S=>({value:S.word,label:S.word}))).filter(k=>k.value&&k.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(N)}`:`Type the kanji for: ${K(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const j=kl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:st({value:j.answer,label:j.answer},j.options.filter(k=>k!==j.answer).map(k=>({value:k,label:k})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:h({ru:A.ru,en:A.en}),answerLabel:h({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:st({value:h({ru:A.ru,en:A.en}),label:h({ru:A.ru,en:A.en})},n.filter(k=>k.jp!==A.jp).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n1Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N1",lessonId:e.id}))}function st(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),It().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Dp(e){for(const t of ft()){const n=fi(t).find(s=>s.id===e);if(n)return n}return null}function yl(e){return Tr("N1",ee(),e)}function dj(e){const t=Dp(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Fp(t,s,a)}function uj(e){const t=Dp(e);if(!t)return;const n=document.getElementById(Jp(t.id)),s=n?String(n.value||"").trim():"";Fp(t,s,s===t.answer)}function Fp(e,t,n){const s=ee();Ir("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,markStudied:()=>Or(e.kanji,e.cardId),markDifficult:()=>hi(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Op(e,t,n="review"){const s=se(e)||It().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=re(F(s.id)),d=fe(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Or(s.kanji,s.id),ee().srsKanji[s.kanji]=new Date().toISOString(),a?(hi(s.kanji,s.id,!1),r.progress.totalCorrect+=1,G(r.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${s.id}`)):Ee(t)?(hi(s.kanji,s.id),r.progress.totalWrong+=1,G(r.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,G(t==="easy"?r.n1Meta?.rewards?.knowXp||9:r.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${s.id}`)),Nt(),C(),jt("N1 SRS post-render effects",()=>{D(Ee(t)?"answer_wrong":"answer_correct"),X()})}function pj(e){const t=se(e)||It().find(s=>String(s.id)===String(e));if(!t)return;const n=ee();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Or(t.kanji,t.id),G(9,1,`n1_writing:${t.id}`)),X(),C(),I()}function gj(e){const t=is(e);if(!t)return;const n=ee(),s=`n1:${t.id}`;if(oe.has(s)||n.completedLessons[t.id]){I();return}const a=mi(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(w);return}const l=fi(t);if(!(l.length>0&&l.every(w=>yl(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(w);return}oe.add(s),mi(t).forEach(w=>{Or(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=F(w.id);N.state==="New"&&(r.progress.cards[w.id]=fe(re(N),"good"))}),(t.grammarFocus||[]).map(w=>kl(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ft().find(w=>w.order===t.order+1)?.id||t.id;const d=Ms(),u=d.sessions[n1SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n1SessKey,d.lastUpdatedAt=w}ee(),Object.keys(n.completedLessons||{}).length>=53&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N1","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const f=r.n1Meta?.rewards?.lessonCompleteXp||85,v=r.n1Meta?.rewards?.lessonCompleteMoon||10;G(f,v,`n1_lesson:${t.id}`),Ys("N1",t.id),rt({title:`${je().lessonComplete}: ${h(t.title)}`,message:je().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),X(),C(),I()}function Or(e,t=null){if(!e)return;const n=ee();Ls(n,e)}function hi(e,t=null,n=!0){if(e&&(ee().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(r.progress.cards[t]=fe(re(s),"again"))}}function mj(e,t=""){const n=r.n1Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=ee();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),G(r.n1Meta?.rewards?.grammarXp||12,r.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):a||(r.progress.totalWrong+=1,D("answer_wrong")),ve(),X(),C(),I()}function fj(e,t="0",n=""){Bp("reading",e,t,n)}function hj(e,t="0",n=""){Bp("listening",e,t,n)}function Bp(e,t,n="0",s=""){const o=(e==="reading"?r.n1Reading:r.n1Listening).find(j=>j.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=ee(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const N=(o.questions||[]).every((j,A)=>f[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),N&&!w){v[o.id]=new Date().toISOString();const j=e==="reading"?r.n1Meta?.rewards?.readingXp||55:r.n1Meta?.rewards?.listeningXp||50,A=e==="reading"?r.n1Meta?.rewards?.readingMoon||4:r.n1Meta?.rewards?.listeningMoon||4;G(j,A,`n1_${e}:${o.id}`)}ve(),X(),C(),I()}function vj(e){const t=is(e);t&&(Vt("textbook-lesson",{level:"N1",lessonId:t.id}),ee().currentLessonId=t.id,bt("N1",t.id,"n1_lesson_open"),Ut("N1",t,"n1_lesson_open"),Tn(t.id))}function wj(){Tn("")}function bj(e=null){e&&(ee().activeReviewMode=e),Tn("review")}function kj(){Tn("kanji")}function yj(){Tn("grammar")}function $j(){Tn("reading")}function jj(){Tn("listening")}function Sj(){Tn("final-test")}function Tn(e){r.route="textbooks",r.activeTextbookLevel="N1",r.activeTextbookSubroute=e||null,ee().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";it(t),X(),C(),le(),Lt()}function Nj(e="due"){const t=Date.now(),n=ee(),s=It();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=F(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function zp(){const e=It();if(!e.length)return[];const t=r.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ft().find(d=>d.kanji.includes(o.kanji))||ft()[0];s.push(Lj(l,o,c,a))}return s.filter(Boolean)}function Lj(e,t,n,s){const o=ht(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:st({value:t.id,label:K(t)},It().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:st({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},It().flatMap(c=>ht(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:st({value:c,label:c},ft().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:_e(o),answer:c,answerLabel:c,options:st({value:c,label:c},It().flatMap(d=>ht(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n1Grammar[s%Math.max(r.n1Grammar.length,1)];if(c)return{id:`n1-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:st({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n1Reading[s%Math.max(r.n1Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n1-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:st({value:t.kanji,label:t.kanji},It().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function xj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ee().finalTest.answers[t]=n,C(),I())}function Up(e=!1){if(r.finalTestBusy)return;const t=ee().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}r.finalTestBusy=!0;try{const n=zp(),s=r.n1FinalTest||{},a=je(),o=Xt(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const S=o.firstMissingId?`#${Us("n1",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:S,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=S,C();return}let u=0;const m=[],f=[];n.forEach(S=>{const U=String(t.answers?.[S.id]||"").trim();if(U===S.answer){if(u+=1,S.kanji&&Or(S.kanji,S.cardId),S.grammarId){const J=ee();J.completedGrammar[S.grammarId]=J.completedGrammar[S.grammarId]||d}}else U||f.push(S),m.push({id:S.id,kanji:S.kanji||"",answer:S.answerLabel,selected:U}),S.kanji&&hi(S.kanji,S.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,j=Math.max(0,m.length-f.length);let A=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(S=>S.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const S=Number(s?.rewards?.completeXp||220),U=Number(s?.rewards?.completeMoon||40);A+=S,k+=U,G(S,U,"n1_final_complete")}if(t.passed&&!N){const S=Number(s?.rewards?.passXp||110),U=Number(s?.rewards?.passMoon||18);A+=S,k+=U,G(S,U,"n1_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=k,oa("N1",t),ee(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N1",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:A,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),C()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,I()}}function Cj(){ee().finalTest=No().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,C(),I()}function Jp(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Gp(e){const t=Qs(e.jlpt);if(!t)return"";const n={...ac(),...rc()};return`
      <div class="jlpt-practice-grid">
        ${Aj(t,n)}
        ${Tj(t,n)}
        ${Ij(t,n)}
        ${_j(t,n)}
      </div>
    `}function Aj(e,t){return e.apps.length?`
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
    `:""}function Tj(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${Hp(t.hiragana,n)}
          ${Hp(t.katakana,s)}
        </div>
      </article>
    `}function Hp(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(h(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function Ij(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${Rj(n)}</strong>
                <small>${i(n.romaji)} · ${i(h(n.meaning))}</small>
                <p>${i(h(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function Rj(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function _j(e,t){const n=Vs(e);if(!n)return"";const s=fs(),a=s.selected[n.id]||[],o=!!s.checked[n.id],l=s.results[n.id]||null,c=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&l?.correct,u=o&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(h(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${Pj(n,c,u)}</div>
        <p class="label">${i(V(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((m,f)=>{const v=a.includes(f);return`
              <button class="sentence-tile ${v?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${f}" ${v||d?"disabled":""}>
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
    `}function Pj(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,l)=>{if(o===l.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((v,w)=>n.includes(s+w));s+=d;const f=u.length?u.map(v=>`<span>${i(v.kanji)}</span>`).join(""):`<span>${i("в–Ў".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${f}</span>`}).join("")}function Mj(){const e=zr(nN()),t=yS(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?se(t.card?.id||t.cardId||t.progress?.cardId||""):null;bS(t);const a=t?t.kind==="card"?s?sg(s):ds():t.kind==="kana"?hS(t,n):CS(t):ds();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Сейчас":"Due now",Ke(),"due")}
              ${M(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${M(p()==="ru"?"Позже":"Learning later",sN(),"learning")}
              ${M(p()==="ru"?"Всего SRS":"Total SRS",rN(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${Fn("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${xl(s,n)}
        </div>
        ${Ej()}
      </section>
    `}function Ej(){try{return Kj()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),r.progress&&(r.progress.sentencePractice=Lo(Ns().sentencePractice,{})),""}}function Kj(){const e=Wt(),t=wi(e),n={...Bs(),...$l()},s=Dj(e,n);if(!e.length)return`
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
      `;const a=Sl(t,e);if(!a)return"";const{exercise:o,tiles:l,selectedTiles:c,answerFlat:d,wrongIndexes:u,complete:m,awarded:f}=a,v=new Set(r.progress.sentencePractice.selected),w=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(Oj(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${Wp(o,c,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(Bj(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map((j,A)=>{const k=v.has(A),S=u.includes(r.progress.sentencePractice.selected.indexOf(A));return`
              <button class="sentence-tile ${k?"is-used":""} ${S?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${A}" ${k||m?"disabled":""}>
                <span>${i(j.reading)}</span>
                <strong>${i(j.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i(w.message||n.tip.replace("{count}",d.length))}
          ${m&&!f?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function Dj(e,t){const n=Ie(),s=Ga(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${Fj(a,e,t)}
      </details>
    `}function Fj(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=jl(s,t),o=!!(a&&In(a,t).length>=Math.max(4,Rt(a).length)),l=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function Oj(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function Bs(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function $l(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function Bj(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function qp(e=Wt()){const t=zj(e),n=Uj(e),s=Array.isArray(r.sentenceExercises)?r.sentenceExercises:[],a=new Set;return[...t,...n,...s].filter(o=>!o?.id||a.has(o.id)?!1:(a.add(o.id),!0))}function zj(e=Wt()){const t=Ie();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>jl(s,e)).filter(Boolean)}function jl(e,t=Wt()){return e?.jp?Nl({id:e.id,jlpt:nS(e.jp,t),sentence:e.jp,reading:e.hiragana||Br(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function Wp(e,t,n){const s=e?.blanks||[],a=String(e?.sentence||"").split("___");let o=0;return a.map((l,c)=>{const d=s[c];if(!d)return i(l);const u=d.answer||[],m=u.map((f,v)=>{const w=o+v,N=t[w],j=n.includes(w);return`<span class="sentence-slot ${N?"is-filled":""} ${j?"is-wrong":""}">${N?i(N.kanji):""}</span>`}).join("");return o+=u.length,`${i(l)}<span class="sentence-blank">${m}</span>`}).join("")}function Sl(e=wi(),t=Wt()){const n=os(t),s=(Array.isArray(e)?e:[]).filter(N=>N?.id),a=Ie();new Set(s.map(N=>N.id)).has(a.activeId)||vi(Ll(s)?.id||null);const l=s.find(N=>N.id===r.progress.sentencePractice.activeId)||s[0];if(!l)return null;const c=Rt(l);(!Array.isArray(r.progress.sentencePractice.tileKeys)||!r.progress.sentencePractice.tileKeys.length)&&(r.progress.sentencePractice.tileKeys=In(l,n).map(yi));let d=(Array.isArray(r.progress.sentencePractice.tileKeys)?r.progress.sentencePractice.tileKeys:[]).map(rS).filter(Boolean);const u=()=>c.every(N=>d.some(j=>j.kanji===N.kanji));(d.length<Math.max(4,c.length)||!u())&&(d=In(l,n),r.progress.sentencePractice.tileKeys=d.map(yi),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null);const m=Array.isArray(r.progress.sentencePractice.selected)?r.progress.sentencePractice.selected:[];r.progress.sentencePractice.selected=m.filter((N,j,A)=>Number.isInteger(N)&&N>=0&&N<d.length&&A.indexOf(N)===j).slice(0,c.length);const f=r.progress.sentencePractice.selected.map(N=>d[N]).filter(Boolean),v=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes:[],w=Array.isArray(v)?v.filter(N=>Number.isInteger(N)&&N>=0&&N<c.length):[];return{exercise:l,tiles:d,selectedTiles:f,answerFlat:c,wrongIndexes:w,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[l.id]}}function Ie(){return r.progress.sentencePractice=Lo(Ns().sentencePractice,r.progress.sentencePractice||{}),r.progress.sentencePractice}function vi(e){r.progress.sentencePractice={...Ie(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=qp(Wt()).find(n=>n?.id===e);t&&Yp(t)}function os(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function Wt(){return os(r.cards).filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!Oe(t))return!1;const n=F(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||r.progress.lessonCompletions[e.lessonId]})}function wi(e=Wt()){const t=os(e),n=new Set(t.map(s=>s.kanji));return qp(t).filter(s=>{if(!s?.id)return!1;const a=Rt(s);return!a.length||a.some(o=>!n.has(o.kanji))?!1:In(s,t).length>=Math.max(4,a.length)})}function Rt(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function Xp(e){return Rt(e).map(t=>t.kanji).join("")}function In(e,t){if(!e?.id)return[];const n=os(t),s=Rt(e),a=new Set(s.map(v=>v.kanji)),o=new Set(n.map(v=>v.kanji)),l=new Map;[...e.tiles||[],...s].forEach(v=>{v?.kanji&&v?.reading&&l.set(v.kanji,v.reading)});const c=s.map(v=>({kanji:v.kanji,reading:v.reading||l.get(v.kanji)||cn(v.kanji)})),d=(e.tiles||[]).filter(v=>v?.kanji&&!a.has(v.kanji)&&o.has(v.kanji)).map(v=>({kanji:v.kanji,reading:v.reading||cn(v.kanji)})).filter((v,w,N)=>N.findIndex(j=>j.kanji===v.kanji)===w),u=n.filter(v=>v.kanji&&!a.has(v.kanji)).map(v=>({kanji:v.kanji,reading:l.get(v.kanji)||cn(v.kanji,v)})).filter((v,w,N)=>N.findIndex(j=>j.kanji===v.kanji)===w).sort((v,w)=>Re(`${e.id}:${v.kanji}`)-Re(`${e.id}:${w.kanji}`)),m=[...d,...u].filter(v=>!a.has(v.kanji)).filter((v,w,N)=>N.findIndex(j=>j.kanji===v.kanji)===w),f=Math.min(Math.max(6,c.length+2),c.length+m.length);return pS([...c,...m.slice(0,f-c.length)],e.id)}function Uj(e){const t=os(e);if(!t.length)return[];const n=new Set(t.map(l=>l.kanji)),s=new Set,a=[];return t.flatMap(l=>(l.examples||[]).map(c=>({...c,card:l}))).forEach((l,c)=>{const d=zs(l.word||"");if(!d||s.has(d)||!sS(d)||Vp(d).some(N=>!n.has(N)))return;s.add(d);const u=ls(l.reading||Br(d)),m=l.translation||d,f=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],v=f[c%f.length],w=Nl({id:`sentence-json-${Re(`${d}:${v.sentence}`).toString(36)}`,jlpt:l.card?.jlpt||"N5",sentence:v.sentence,reading:v.reading,translationRu:v.translationRu,translationEn:v.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});w&&a.push(w)}),a.slice(0,160)}function Jj(){const e=Ie(),t={...Bs(),...$l()},n=Ga(Gj()||e.customDraft||{}),s=Wt(),a=Rn(n.jp);if(!a){bi(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(Xj(a,o)){bi(t.customDuplicate,"error");return}const c=Ie(),d={id:o||`custom_${Date.now().toString(36)}_${Re(a).toString(36)}`,jp:a,hiragana:ls(Rn(n.hiragana)||Br(a)),ru:Rn(n.ru),en:Rn(n.en),source:"user"},u=(c.customSentences||[]).findIndex(f=>f.id===d.id);u>=0?c.customSentences[u]=d:c.customSentences=[d,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,bi(o?t.customUpdated:t.customAdded,"success",!1);const m=jl(d,s);m&&In(m,s).length>=Math.max(4,Rt(m).length)&&(vi(m.id),r.progress.sentencePractice.tileKeys=In(m,s).map(yi)),C(),I()}function Gj(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function Hj(e){const t=Ie(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",C(),I())}function qj(e){const t=Ie(),n={...Bs(),...$l()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=Wt(),o=Ll(wi(a));vi(o?.id||null)}bi(n.customDeleted,"success",!1),C(),I()}}function Wj(){const e=Ie();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",C(),I()}function Xj(e,t=null){const n=zs(e);return(Ie().customSentences||[]).some(a=>a.id!==t&&zs(a.jp)===n)?!0:r.sentenceExercises.some(a=>zs(Qp(a))===n)}function bi(e,t,n=!0){const s=Ie();s.customMessage=e,s.customStatus=t,C(),n&&I()}function Nl(e,t,n={}){if(!e||typeof e!="object")return null;const s=os(t),a=zs(e.sentence||"");if(!a||!e.id||!s.length)return null;const o=Qj(a,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const l=Vj(o,a,n);if(!l.length)return null;let c="",d=0;const u=l.map(m=>(c+=a.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:Yj(m.text)}));return c+=a.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:c,originalSentence:a,reading:ls(e.reading||Br(a)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((f,v)=>({kanji:f,reading:m.reading[v]||cn(f)}))),source:e.source||"custom",createdAt:e.createdAt}}function Qj(e,t){const n=new Map(os(t).map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,l)=>{if(ki(o)&&n.has(o)){a||(a={start:l,end:l,text:"",answer:[]}),a.end=l+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function Vj(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),l=e.filter(m=>m.start>0),c=(o.length?o:l.length?l:e).slice().sort((m,f)=>{const v=f.answer.length-m.answer.length;return v||Math.abs(m.start-t.length/2)-Math.abs(f.start-t.length/2)}),d=[];let u=0;return c.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,f)=>m.start-f.start)}function Yj(e){const t=Array.from(e),n=Zj(e);return n?eS(t,ls(n)):t.map(s=>cn(s))}function Zj(e){for(const t of r.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function eS(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const l=tS(e[a]).sort((c,d)=>d.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[a]=l,s=s.slice(0,-l.length))}return n[0]=s||cn(e[0]),n.map((a,o)=>a||cn(e[o]))}function tS(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>ls(s.trim())).filter(Boolean);return[...new Set(n)]}function Br(e){return ls(Array.from(e).map(t=>ki(t)?cn(t):t).join(""))}function nS(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return Vp(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,l)=>n.indexOf(l)-n.indexOf(o))[0]||"N5"}function zs(e){return String(e||"").replace(/\s+/g,"").trim()}function Rn(e){return String(e||"").replace(/\s+/g," ").trim()}function Qp(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function sS(e){return Array.from(String(e||"")).some(ki)}function Vp(e){return Array.from(String(e||"")).filter(ki)}function ki(e){return/[㐀-鿿]/u.test(e)}function ls(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function V(e){return ls(String(e||""))}function cn(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function yi(e){return`${e.kanji}	${e.reading||""}`}function rS(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||cn(t)}:null}function aS(e){const t=Sl();if(!t||!Number.isInteger(e))return;const n=Bs(),s=r.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){z(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},C(),I()}}function iS(){const e=Ie();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:Bs().removed,wrongIndexes:[]},C(),I())}function oS(){const e=Ie();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,C(),I())}function lS(){const e=Sl();if(!e)return;const t=Bs(),n=r.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},C(),I();return}const s=e.answerFlat.map((o,l)=>e.selectedTiles[l]?.kanji===o.kanji?-1:l).filter(o=>o>=0),a=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:a,wrongIndexes:s,message:a?t.correct:t.wrong},a)cS(e.exercise),be({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),ke("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),pa("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,be({discipline:-.6,curiosity:.2},"sentence_wrong"),ke("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=dn();o.mistakes+=1,r.progress.daily[ie()]=o,pa("again")}C(),I()}function cS(e){const t=Ie();if(t.completed[e.id])return;const n=r.rewards?.rewards||{},s=n.sentencePracticeXp||Cc.xp,a=n.sentencePracticeCoins||Cc.coins;t.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const o=dn();o.reviews+=1,o.minutes=Xi((o.minutes||0)+.8,1),r.progress.daily[ie()]=o,G(s,a,`sentence:${e.id}`),be({trust:.8,curiosity:.7},"sentence_complete"),ve(),Fl(),X()}function dS(){const e=Wt(),t=wi(e);if(!t.length)return;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&Yp(s);const a=Ll(t,{excludeCurrent:!0,preferUncompleted:!0});a?.id&&(vi(a.id),r.progress.sentencePractice.tileKeys=In(a,e).map(yi),C(),I())}function Ll(e,t={}){const n=(Array.isArray(e)?e:[]).filter(j=>j?.id);if(!n.length)return null;const s=Ie(),a=s.activeId,o=new Set(s.recentIds||[]),l=new Set(s.recentAnswers||[]),c=j=>!t.excludeCurrent||n.length===1||j.id!==a,d=j=>!t.preferUncompleted||!s.completed?.[j.id],u=j=>!l.has(Xp(j)),m=j=>!o.has(j.id),v=[n.filter(c).filter(d).filter(u).filter(m),n.filter(c).filter(d).filter(u),n.filter(c).filter(u).filter(m),n.filter(c).filter(m),n.filter(c),n].find(j=>j.length)||n,w=v.filter(uS),N=w.length?w:v;return N[Math.floor(Math.random()*N.length)]}function uS(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function Yp(e){if(!e?.id)return;const t=Ie(),n=Xp(e),s=Array.isArray(t.recentIds)?t.recentIds:[],a=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...a.filter(o=>o!==n)].slice(0,8)}function Re(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function pS(e,t){return[...e].sort((n,s)=>Re(`${t}:${n.kanji}:${n.reading}`)-Re(`${t}:${s.kanji}:${s.reading}`))}function Xt(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function Us(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function gS(e){return Number(e?.passingPercent??e?.passThreshold??70)}function mS(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Mt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(_("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${_n("eva",n,t?"review":"achievement","reward-mascot")}
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
    `}function Zp(e){const t=jN(e);if(!t&&!yN(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function $i(e){const t=ta(e);return`
      <div class="reading-row reading-split">
        ${eg(e,"onyomi",Yg("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${eg(e,"kunyomi",Yg("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function eg(e,t,n,s,a){const o=ng(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(V(s)||"—")}</strong>
        <small>${i(a||"—")}</small>
      </div>
    `}function tg(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${ng(e,t,n)}
            </dt>
            <dd>${i(V(s||"—"))}</dd>
          </div>
        `}function ng(e,t,n){return Xs(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function ji(e,t="btn ghost"){const n=RN(e);if(!n)return"";const s=wt(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(pn(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function sg(e){if(!e?.id)return ds();hr(e,"study_card");const t=F(e.id),n=r.revealed;pN(e.id);const s=e.lessonTitle||cc(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${ua(t.state)}
          </div>
          ${Zp(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?K(e):_("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(_("strokes"))} · ${i(Zt(t.dueAt))}</p>
        ${n?wS(e):`
          ${vS(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(_("showAnswer"))}</button>
            ${ji(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(_("details"))}</button>
          </div>
        `}
      </article>
    `}function fS(e){const t=Math.max(Number(r.reviewSession?.initialSize||e||0),e||0,1),n=ce(t-Math.max(Number(e||0),0),0,t),s=Math.min(n+1,t);return p()==="ru"?`Осталось: ${e} · ${s} / ${t}`:`Remaining: ${e} · ${s} / ${t}`}function hS(e,t){const n=Al(e);if(!n)return ds();const s=n.progress||Et(null),a=Ur(),o=Mu(n.courseSlug),l=Dn().settings.showRomaji;return`
      <article class="study-card kana-srs-card" data-review-card-id="${g(n.cardId)}" data-review-kind="kana">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(o)}</span>
            ${ua(s.state)}
            <span class="pill">${i(fS(t))}</span>
          </div>
          <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(n.kana)}" aria-label="${g(p()==="ru"?"Озвучить знак":"Speak kana")}">🔊</button>
        </div>
        <div class="kanji-focus kana-srs-focus" lang="ja" aria-label="${g(n.kana)}">${i(n.kana)}</div>
        <h2>${i(l&&n.romaji?n.romaji:p()==="ru"?"Вспомни чтение":"Recall the reading")}</h2>
        <p class="label">${i(o)} · ${i(n.strokes?`${n.strokes} ${_("strokes")}`:p()==="ru"?"знак каны":"kana card")} · ${i(Zt(s.dueAt))}</p>
        ${l&&n.romaji?`<p class="kana-srs-reading"><span lang="ja">${i(n.kana)}</span> · ${i(n.romaji)}</p>`:""}
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="forgot">${i(a.forgot)} <small>${i(a.forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="remember">${i(a.remember)} <small>${i(a.rememberHint)}</small></button>
        </div>
      </article>
    `}function vS(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function Si(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(V(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(_e(e))}</small>
      </li>
    `}function wS(e){return`
      <div class="answer-section">
        ${$i(e)}
        <strong>${i(_("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(Si).join("")}
        </ul>
        <strong>${i(_("apps"))}</strong>
        <p>${i(da(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${ji(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(Ur().forgot)} <small>${i(Ur().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(Ur().remember)} <small>${i(k0(e))}</small></button>
        </div>
      </div>
    `}function xl(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(r.reviewSession?.initialSize||t,1):Math.max(r.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${f0(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${M(_("review"),t,"queue",E(t,a))}
          ${M("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,E(r.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(_("hint"))} · Leya</h3>
          <p>${i(Ri(e.id).hint)}</p>
          <h3>${i(_("mnemonic"))}</h3>
          <p>${i(Ri(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function cs(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function bS(e){if(!e){r.activeCardId=null,cs();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){const t=se(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){r.activeCardId=null,cs();return}r.activeCardId!==t.id&&(r.activeCardId=t.id,cs());return}if(e.kind==="kana"){r.activeCardId=null,cs(),r.revealed=!1,at();return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function Cl(e,t,n="",s=null,a=null,o="textbook"){const l=Q(e);if(!l||!t)return null;if(String(o||"textbook")==="reading"){const v=a||Mg(t,l);if(!v)return null;const w=Yr(s||{},v);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(v.sourceId||n||w.lessonId||""),cardId:"",dueAt:w.dueAt?new Date(w.dueAt).getTime():0,progress:w,exercise:v,card:null}}const d=ps(s||{},{level:l,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||Dl(l,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),f=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:m,cardId:f,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:se(f)||se(d.cardId||"")}}function Js(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=Mg(t,e),l=o?En(o):r.progress.readingExercises?.[t]||null;return Cl(e,t,l?.lessonId||o?.sourceId||"",l,o,"reading")}const a=$0(e)?.exerciseSrs?.[t]||null;return Cl(e,t,a?.lessonId||"",a,null,"textbook")}function Al(e){if(!e||e.kind!=="kana")return null;const t=ci(e.cardId||e.key||"",e.courseSlug||"");if(!t?.id||!Fe(t.slug))return null;const n=Ps(t.slug),s=Et(e.progress||n[t.id]||null),a=e.character||Pu(t.slug,t.kana)||{};return{...e,kind:"kana",key:t.id,courseSlug:t.slug,cardId:t.id,kana:t.kana,romaji:String(a.romaji||e.romaji||""),strokes:Number(a.strokes||e.strokes||0),progress:s,character:a,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}function Tl(e){return!e||e.kind!=="exercise"?null:Cl(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function kS(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=se(t);if(!n?.id)return null;const s=e.progress||F(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="kana"?Al(e):e.kind==="exercise"?Tl(e):null}function zr(e){return(Array.isArray(e)?e:[]).map(kS).filter(Boolean)}function yS(e){const t=zr(e),n=Js();if(n&&r.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(l=>l.kind==="exercise"&&l.exerciseId===n.exerciseId&&l.level===n.level))return n;const s=r.activeCardId?t.find(l=>l.kind==="card"&&l.card?.id===r.activeCardId):null;if(s)return s;const a=["card","kana"],o=a.includes(r.reviewQueueLastKind)?["exercise"]:r.reviewQueueLastKind==="exercise"?a:[];if(o.length){const l=t.find(c=>o.includes(c.kind));if(l)return l}return t[0]||n||null}function $S(e,t){const n=Q(e);return n==="N5"?Ku(t):n==="N4"?Yu(t):n==="N3"?up(t):n==="N2"?jp(t):""}function jS(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Il(){return p()==="ru"?"Перевод":"Translation"}function rg(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=Qg(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function SS(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?V(e.reading):"",s=e?.reading?rg(e.reading):"",a=h({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Il())}</button>
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
    `}function NS(e){return r.reviewExerciseResults?.[e.exerciseId]||En(e.exercise)||null}function LS(e,t,n,s){const a=String(t?.id||n),o=s?.answers?.[a]||null,l=Array.isArray(t?.options)?t.options:[],c=l.find(u=>String(u.value||"")===String(t?.answer||"")),d=c?h(c.label||c):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(h(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${l.map(u=>{const m=o?.selected===u.value,f=o?.correct&&u.value===t.answer,v=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${f||v?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(a)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(h(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function xS(e){const t=Tl(e);if(!t||!t.exercise)return ds();const n=NS(t),s=!!n?.completed,a=t.progress||En(t.exercise),o=jS(t.exercise),l=h(t.exercise.sourceTitle||t.exercise.title||{}),c=Rt(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(A=>A?.id),u=t.exercise.kind==="cloze"||!d.length&&c.length>0;if(!u&&!d.length)return ds();const m=u?s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0:Object.keys(n?.answers||{}).length,f=u?Math.max(1,c.length):Math.max(1,d.length),v=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],w=v.map(A=>t.exercise.tiles?.[A]).filter(Boolean),N=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],j=SS(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(l||o)}</span>
          <span class="pill">${i(a.state)} · ${i(Zt(a.dueAt))}</span>
          <span class="pill">${i(m)}/${i(f)}</span>
        </div>
        ${j}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${Wp(t.exercise,w,N)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(h({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((A,k)=>{const S=v.includes(k),U=N.includes(k);return`
                <button class="sentence-tile ${S?"is-used":""} ${U?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${k}" ${S||s?"disabled":""}>
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
            <button class="btn" type="button" data-action="reading-review-undo" ${!v.length||s?"disabled":""}>${i(p()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!v.length||s?"disabled":""}>${i(p()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:d.map((A,k)=>LS(t,A,k,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function CS(e){const t=Tl(e);if(!t||!t.exercise)return ds();if(t.source==="reading")return xS(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Zt(t.progress.dueAt))}</span>
        </div>
        ${$S(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function AS(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Pe("eva","lessonComplete"))}</h2>
        <p>${i(e?ca(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(_("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function TS(){const e=r.reviewSession?.results||{},t=Number(e.remember||0),n=Number(e.forgot||0),s=t+n,a=(Array.isArray(e.items)?e.items:[]).filter(o=>o?.dueAt).sort((o,l)=>(Date.parse(o.dueAt)||0)-(Date.parse(l.dueAt)||0)).slice(0,4);return`
      <article class="empty-state review-complete-card">
        <span class="kanji-char">済</span>
        <h2>${i(p()==="ru"?"Повторение завершено":"Review complete")}</h2>
        <p>${i(p()==="ru"?"Карточки закрыты. Вот короткий итог с ближайшими возвращениями.":"Cards are done. Here is a short summary and the nearest returns.")}</p>
        <div class="mini-stat-row">
          ${M(p()==="ru"?"Помню":"Remember",t,`${s}`,E(t,Math.max(1,s)))}
          ${M(p()==="ru"?"Не помню":"Forgot",n,`${s}`,E(n,Math.max(1,s)))}
        </div>
        ${a.length?`<ul class="review-upcoming-list">
          ${a.map(o=>`<li><strong>${i(o.label||o.kind||"")}</strong><span>${i(o.course||"")}</span><small>${i(Zt(o.dueAt))}</small></li>`).join("")}
        </ul>`:""}
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">典 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function ds(){const e=r.reviewSession?.results||{},t=Number(e.remember||0)+Number(e.forgot||0);return r.route==="review"&&Number(r.reviewSession?.initialSize||0)>0&&t>0?TS():`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Pe("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
      </article>
    `}function IS(){const e=aN(),t=Math.max(ar,Number(r.dictionaryVisibleCount||ar)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],l=["all",...new Set(r.cards.map(u=>ea(u.id).radical).filter(Boolean))],c=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("dictionary"))}</h1>
            <p>${i(c)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${RS(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(_("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${ha(u,r.filters.jlpt)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(_("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",_("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${ha(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(_("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(u=>`<option value="${g(u)}" ${ha(u,r.filters.radical)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(_("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${ha("all",r.filters.favorites)}>${i(_("all"))}</option>
              <option value="yes" ${ha("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(_S).join("")||MS()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function RS(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
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
    `}function _S(e){const t=F(e.id),n=ea(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${PS(e)}
        <div class="tag-row">
          ${ua(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(_("strokes"))}</span>
          <span class="pill">${i(_("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(_("learnedStatus"))}: ${i(vm(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function PS(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(K(e))}</h3>
          <p>${i(Wl(e))}</p>
          <span class="label">${i(cc(e.lessonId))}</span>
        </span>
      </span>
    `}function MS(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function ES(){const e=r.kanjiPageId||VL(),t=se(e);if(!t)return r.deferredDataLoaded?wr(ge("hash","entity-not-found",QL(),Jn(location.hash).segments)):(Ea({route:"kanji",delay:0,force:!0}),bm());const n=F(t.id),s=ea(t.id),a=!!r.progress.favorites[t.id],o=YS(t,p()),l=KS(t),c=Ol(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(_("dictionary"))}</button>
            <h1>${i(l?`${t.kanji} — ${DS(l)}`:t.kanji)}</h1>
            <p>${i(l?FS(l):K(t))}</p>
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
                ${ua(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(_("strokes"))}</span>
                <span class="pill">${i(_("radical"))}: ${i(s.radical||"-")} ${i(h(s.radicalMeaning||{}))}</span>
                ${l?`<span class="pill">Grade ${i(l.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(l.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(K(t))}</h2>
              <p>${i(da(t))}</p>
              ${$i(t)}
              ${_l(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${l?OS(l):""}
          ${l?BS(l):""}
          <article class="kanji-profile-card">
            <h2>${i(_("examples"))}</h2>
            <ul class="example-list">${t.examples.map(Si).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${l?zS(l):qS(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("strokeOrder"))}</h2>
            <p class="label">${i(c?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Qr(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${ji(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("apps"))}</h2>
            <p>${i(da(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${l?JS(l):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${l?GS(l):""}
        </div>
      </section>
    `}function KS(e){return r.kanjiPageSources?.[e?.kanji]||null}function DS(e){return ag(e.meanings)[0]||e.literal}function ag(e){return e?e[p()]||e.ru||e.en||[]:[]}function Gs(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function FS(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function OS(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(ag(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Gs(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(_("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(_("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Gs(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function BS(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(HS(t))}">
                <b>${Rl(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Gs(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function zS(e){return`
      <ul class="kanji-sentence-list">
        ${US(e).map(n=>`
          <li>
            <strong>${Rl(n.japanese,e.literal)}</strong>
            <small>${i(Gs(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function US(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(o<3||o>44)}).sort((s,a)=>Number(ig(a.japanese,n))-Number(ig(s.japanese,n))).slice(0,8)}function ig(e,t){return[...t].some(n=>e.includes(n))}function JS(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(Gs(t.title||{}))}</span>
            <strong>${Rl(t.japanese,e.literal)}</strong>
            <small>${i(Gs(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function GS(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function HS(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Rl(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function qS(e){const t=WS(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${VS(n)}</strong>
            <span>${i(XS(n))}</span>
            <small>${i(QS(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function WS(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=og(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function og(e){return e?.sentence||e?.jp||""}function XS(e){return e?.reading||e?.hiragana||""}function QS(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function VS(e){let t=i(og(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function YS(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${lg(e)}/`}function lg(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function ZS(){const e=se(r.activeCardId)||Jl()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=ce(r.writingStep,0,Math.max(0,_t(e)-1)));const t=Ol(e),n=_t(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",l=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
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
            ${e?$i(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(_("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(Qr(e)[r.writingStep]||"")}</span>
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
            ${e?e0(e):""}
            <h3>${i(_("hint"))}</h3>
            <p>${i(Ri(e?.id).hint)}</p>
            <h3>${i(_("mnemonic"))}</h3>
            <p>${i(Ri(e?.id).mnemonic)}</p>
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
    `}function e0(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Qr(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function t0(){if(!r.detailCardId)return"";const e=se(r.detailCardId);if(!e)return"";const t=F(e.id),n=ea(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${ua(t.state)}
              <h2>${i(K(e))}</h2>
              <p>${i(Wl(e))} · ${e.strokes} ${i(_("strokes"))}</p>
              <p><span class="pill">${i(_("radical"))}: ${i(n.radical||"-")} ${i(h(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${$i(e)}
          ${_l(e)}
          <h3>${i(_("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(_("examples"))}</h3>
          <ul class="example-list">${e.examples.map(Si).join("")}</ul>
          <h3>${i(_("apps"))}</h3>
          <p>${i(da(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(_("favorites"))}</button>
            ${ji(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function _l(e){const t=Xl(e),n=Xs(e);return`
      <section class="audio-panel">
        <h3>${i(_("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${n0(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function n0(e,t=Xs(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(Pl(n))}">
                <span>${i(Pl(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function Pl(e){return e.kind==="onyomi"?Pi("onyomi"):e.kind==="kunyomi"?Pi("kunyomi"):e.label||"TTS"}function s0(){const e=Gl(),t=dn(),n=gn();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("stats"))}</h1>
            <p>${i(_("xp"))} · ${i(_("level"))} · ${i(_("coins"))}</p>
          </div>
          <div class="actions">
            ${Fn("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${i(_("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("xp"),`${n.current}/${n.next}`,`${_("level")} ${r.progress.level}`,n.percent)}
          ${M(_("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,E(r.progress.streak.current,30))}
          ${M(_("mastered"),e.mastered,`${e.total}`,E(e.mastered,e.total))}
          ${M(_("successRate"),`${Bg()}%`,`${Hl()} reviews`,Bg())}
          ${M(_("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,E(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(_("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${a0()}</article>
          <article class="tool-panel" data-section="shop-panel">${o0()}</article>
          <article class="tool-panel">${ug()}</article>
          <article class="tool-panel">
            <h3>${i(_("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(bn().badge)}</strong>
                  <small>${i(bn().hint)}</small>
                </span>
                <span class="pill">${i(bn().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${zi()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${zi()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Ui()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Ui()*100)}%</strong>
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
    `}function us(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function r0(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(us().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function Ml(e){return h(e.title||e.name||{ru:e.id,en:e.id})}function cg(e){return h(e.description||{})}function El(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function a0(){return`<h3>${i(_("achievements"))}</h3><div class="achievement-grid compact">${us().slice(0,8).map(dg).join("")}</div>`}function i0(){const e=us(),t=tx(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(_("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${Fn("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${i(_("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",E(t,e.length))}
          ${M("XP",n.xp,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(_("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&nr(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",E(e.filter(s=>s.secret&&nr(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${r0().map(s=>{const a=e.filter(l=>l.category===s.id);if(!a.length)return"";const o=a.filter(l=>nr(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${El(s.icon)} ${i(h(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${E(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(l=>dg(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function dg(e,t=!1){const n=nr(e.id),s=$g(e),a=Math.max(1,Number(e.target||1)),o=E(s,a),l=Math.min(s,a),c=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":Ml(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":cg(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${El(e.icon)}</span>
        <strong>${i(c)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${l}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(_("coins"))}</small>
      </div>
    `}function o0(){return iu({closable:!1})}function ug(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(_("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(l0(s))}</strong>
              <small>${i(vL(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function l0(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=we(n[1]);if(s)return xt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function c0(){if(!hg())return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=gn(),a=t?`${_("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${_("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${El(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(_("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${_n(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
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
    `}function d0(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(bs),l=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),c=`mailto:${tn}?subject=${o}&body=${l}`;return`
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
            <strong>${i(tn)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(c)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(a)}</button>
          </div>
        </article>
      </div>
    `}function u0(){const e=r.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=h(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),a=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",l=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${a.map(c=>`<li>${i(c)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${Zi}, ${eo}.`:`Saved locally: ${Zi}, ${eo}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(l)}</button>
          </div>
        </article>
      </div>
    `}function p0(){if(!r.pwaInstallHelpVisible)return"";const e=tr(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function g0(){if(Wd()||r.pwaInstallHelpVisible||!gc()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal)return"";const e=km(),t=!Wn&&tr();return`
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
    `}function m0(){if(Wd()||!r.notificationPromptVisible||!Hi("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.pwaInstallHelpVisible||gc())return"";const e=Lm();return`
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
    `}function f0(e,t,n){const s=er(e),a=Ni(e,t,n),o=fg(Pe(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(a)}" alt="${g(h(s.name))}" />
        <div><strong>${i(h(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function _n(e,t,n,s){const a=er(e),o=Ni(e,t,n),l=fg(Pe(e,n)),c=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return gg(c)?`
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
    `}function pg(){try{const e=sessionStorage.getItem(ne);return e?JSON.parse(e)||{}:{}}catch{return{}}}function h0(e){try{sessionStorage.setItem(ne,JSON.stringify(e||{}))}catch{}}function gg(e){return e?!!pg()[e]:!1}function mg(e){if(!e)return;const t=pg();t[e]=Date.now(),h0(t);const n=Xn.get(e);n&&(clearTimeout(n),Xn.delete(e)),I()}function v0(){const e=new Set;go("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||gg(n)||(e.add(n),Xn.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{Xn.delete(n),mg(n)},s);Xn.set(n,a)});for(const[t,n]of Xn)e.has(t)||(clearTimeout(n),Xn.delete(t))}function Ni(e,t="normal",n="welcome"){if(e==="eva")return _s(yn(null,w0(t,n)));const s=er(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function w0(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return l&&(!n||n==="welcome")?l:a[n]||o[s]||s||"neutral"}function fg(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function b0(e){const t=se(r.activeCardId);if(!t||!af[e])return;fr(t,"srs_rating");const n=re(F(t.id)),s=fe(n,e);r.progress.cards[t.id]=s,Qt(n,s,e),ve();const a=Number(r.progress.correctCombo||0),o=Ee(e)?"again":"ok";Ee(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,be({discipline:-.8,trust:-.2},"answer_again"),ke("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:a>0}),z(Pe("eva","wrong"))):(G(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),be({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),ke("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),z(Pe("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(G(r.rewards.rewards.comboXp,0,"combo_bonus"),rt({title:"Combo",message:Pe("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),r.reviewQueueLastKind="card",Fg("kanji",e,{label:t.kanji,level:t.jlpt,dueAt:s.dueAt,cardId:t.id}),r.revealed=!1,r.activeCardId=null,at(),r.pendingFocus="__scroll-top__",Oi("card"),Me(),C(),jt("review card post-render effects",()=>{Mi(),pa(o),Ts(),S0(t.lessonId),Fl(),X()},{scrollTop:!0})}function hg(){return!!(r.rewardModal&&r.route!=="review")}function vg(e,t,n){const s=ci(t,e);if(!s?.id||!Fe(s.slug))return;const a=vt(s.slug),o=Ps(s.slug),l=re(Et(o[s.id]||null)),c=Ee(n)?"forgot":"remember",d=Km(l,c);o[s.id]=d,a.review=o,a.currentRoute="review",a.updatedAt=new Date().toISOString(),Qt(l,d,c),ve({skipAchievements:!0});const u=Number(r.progress.correctCombo||0),m=c==="forgot"?"again":"ok";c==="forgot"?(r.progress.totalWrong+=1,r.progress.correctCombo=0,be({discipline:-.5,trust:-.1},"kana_answer_again"),ke("answer_wrong",{cardId:s.id,kana:s.kana,rating:c,comboLost:u>0},{skipAchievements:!0}),z(Pe("eva","wrong"))):(r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),be({trust:.25,discipline:.2,curiosity:.1},"kana_answer_remember"),ke("answer_correct",{cardId:s.id,kana:s.kana,rating:c,combo:r.progress.correctCombo},{skipAchievements:!0}),z(Pe("eva","correct"))),r.reviewQueueLastKind="kana",Fg("kana",c,{label:s.kana,course:Mu(s.slug),dueAt:d.dueAt,cardId:s.id}),r.revealed=!1,r.activeCardId=null,cs(),at(),r.pendingFocus="__scroll-top__",Oi("kana"),Me(),C(),jt("kana review post-render effects",()=>{Mi(),pa(m),Ts()},{scrollTop:r.route==="review"})}function Ur(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function k0(e){const t=Ur(),n=F(e.id),s=y0(n,"remember"),a=Yh(n,s);return`${t.rememberHint}: ${Zh(Qh(a))}`}function y0(e,t){if(Ee(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||a>=2?"good":"hard":c>=88&&a>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(a/3))?"hard":"good"}function Ee(e){return e==="forgot"||e==="again"}function Hs(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function ps(e,t={}){const s={...Hs(t.level||"",t.lessonId||"",t.exerciseId||"",t),...Et(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=wm(s),Number.isFinite(Number(s.srsStep))?s.srsStep=ce(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=Mo(s),wg(s)?s:Hs(s.level,s.lessonId,s.exerciseId,s)}function wg(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function Jr(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=ps(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function $0(e){const t=Q(e);return t==="N5"?Z():t==="N4"?W():t==="N3"?H():t==="N2"?q():t==="N1"?ee():null}function Kl(e){const t=Q(e);return t==="N5"?Ge():t==="N4"?ct():t==="N3"?ut():t==="N2"?gt():t==="N1"?ft():[]}function j0(e,t){const n=Q(e),s=String(t||"");return!n||!s?null:Kl(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function bg(e){const t=Q(e);return t==="N5"?Ar:t==="N4"?di:t==="N3"?ui:t==="N2"?pi:t==="N1"?fi:null}function Dl(e,t,n=""){const s=bg(e),a=Q(e),o=String(t||"");if(!s||!a||!o)return null;const l=j0(a,n);if(l){const c=s(l).find(d=>String(d.id)===o);if(c)return c}for(const c of Kl(a)){const d=s(c).find(u=>String(u.id)===o);if(d)return d}return null}function Li(e,t){const n=Q(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(l=>{if(e.exerciseSrs[l])return;const c=Dl(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const d=Hs(n,c.lessonId||"",c.id,c),u=e.exerciseResults?.[l]||null,m=!!e.completedExercises?.[l],f=fe(re(d),m||u?.correct?"good":"again");f.level=n,f.lessonId=String(c.lessonId||f.lessonId||""),f.exerciseId=String(c.id||l||""),f.cardId=String(c.cardId||f.cardId||""),f.kanji=String(c.kanji||f.kanji||""),f.type=String(c.type||f.type||""),f.title=c.title||f.title||null,f.prompt=String(c.prompt||f.prompt||""),f.answer=String(c.answer||f.answer||""),f.answerLabel=String(c.answerLabel||f.answerLabel||""),e.exerciseSrs[l]=f,o=!0}),o}function xi(e,t){const n=Q(t);if(!e||!n)return!1;const s=Kl(n),a=bg(n);if(!a?.length&&!a)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=new Map;s.forEach(c=>{(a(c)||[]).forEach(d=>{d?.id&&o.set(String(d.id),{exercise:d,lesson:c})})});let l=!1;return Object.entries(e.exerciseSrs).forEach(([c,d])=>{const u=o.get(String(c));if(!u)return;const{exercise:m,lesson:f}=u,v=ps(d,{level:n,lessonId:f.id,exerciseId:m.id,cardId:m.cardId||"",kanji:m.kanji||"",type:m.type||"",title:m.title||null,prompt:m.prompt||"",answer:m.answer||"",answerLabel:m.answerLabel||""});JSON.stringify(d)!==JSON.stringify(v)&&(e.exerciseSrs[c]=v,l=!0)}),l}function S0(e){if(r.progress.lessonCompletions[e])return;const t=ql(e);if(!(t.length>0&&t.every(o=>F(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),Ys("",e,"legacy-srs"),D("lesson_complete"),G(s,a,"lesson_completion"),be({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),ke("lesson_complete",{lessonId:e,xp:s,coins:a}),rt({title:h({ru:"Урок завершён",en:"Lesson complete"}),message:Pe("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),qi("lesson_complete")}function Fl(){const e=ie(),t=dn();if(t.goalClaimed||t.reviews<r.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=r.rewards.rewards.comboXp,s=r.rewards.rewards.streakCoins;G(n,s,"daily_goal"),rt({title:_("dailyGoal"),message:Pe("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[e]=t}function N0(){const e=Ci(),t=ie();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),kg()}function kg(){const e=r.progress.streak,t=pd(e.pendingReward);if(!t||ie()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return D("streak_reward"),G(0,n,`streak:${t.milestone}:claim`),rt({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),X(),C(),!0}function L0(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,be({warmth:.2,curiosity:.1},"eva_click"),z(Pe("eva","welcome")),X(),C(),I();return}e==="leya"&&z(Pe("leya","combo"))}function yg(){ue(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||(r.evaRuntime=zt()),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,ke("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),X(),D("notification_soft"),C(),I()}function x0(){if(Y.completed)return;Y.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,Y.cardId&&(r.progress.writingPractice.cards[Y.cardId]=(r.progress.writingPractice.cards[Y.cardId]||0)+1),be({curiosity:1,discipline:.8,trust:.4},"writing_complete"),ke("writing_complete",{cardId:Y.cardId}),pe("writing_complete",{route:"writing",cardId:Y.cardId||"",source:"practice"});const e=X();C(),e&&I()}function C0(){const e=ie();Ci();const t=A0(),n=Ja(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:xm(e,1)},C())}function A0(){const e=ie(),t=Ci(),n=Ja(r.progress.dailyBonusPending);if(!n||ie()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return T0(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),D("daily_bonus"),G(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),be({warmth:1,discipline:.8},"daily_bonus"),rt({title:_("dailyBonus"),message:Pe("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),X(),hc(),!0}function Ci(){var t;(t=r.progress).visits||(t.visits={});const e=r.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function T0(e,t){const n=Ci();n.streak=e&&Bn(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&Bn(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function X(){if(!us().length)return 0;let e=0;return us().forEach(t=>{if(nr(t.id)||!I0(t))return;e+=1;const n=t.rewardXp||0,s=t.rewardFragments||0;r.progress.achievements[t.id]={unlockedAt:new Date().toISOString(),rewardXp:n,rewardFragments:s},rt({type:"achievement",title:Ml(t),message:cg(t),xp:n,coins:s,icon:t.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),G(n,s,`achievement:${t.id}`)}),e}function I0(e){return $g(e)>=Number(e.target||1)}function $g(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return Gl().learned;if(e.kind==="reviews")return Hl();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(Z().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return as();if(e.kind==="n5Writing")return Object.keys(Z().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(Z().srsKanji||{}).length;if(e.kind==="n5FinalPass")return Z().finalTest?.passed?1:0;if(e.kind==="n4Opened")return W().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n4FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="n3Opened")return H().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(H().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(H().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(H().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(H().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(H().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(H().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return H().finalTest?.passed?1:0;if(e.kind==="n2Opened")return q().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(q().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(q().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(q().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(q().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(q().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(q().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return q().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=lt().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Gt(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>F(n.id).state==="Mastered")?1:0}return 0}function rt(e){if(!(e?.type==="achievement"&&r.route==="review"&&Ke()>0)){if(!r.rewardModal){r.rewardModal=e,jg(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}}function jg(e){if(LL(),e?.type==="achievement"){la()?D("achievement_unlock"):zi()&&NL();return}if(e?.type==="level"){D("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&D("notification_reward")}function G(e,t,n="reward"){const s=r.progress.level||Fi(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const a=R0(n);if(!a&&e>0&&D("xp_gain"),!a&&t>0&&D("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=Fi(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>s){D("level_up"),ke("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const o=gn();rt({type:"level",title:_("levelUp"),message:`${_("level")} ${r.progress.level} - ${o.current}/${o.next} XP - ${r.progress.moonFragments} ${_("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function R0(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function Qt(e,t,n){const s=dn();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Ee(n)&&(s.mistakes+=1),s.minutes=Xi(s.reviews*.75+s.learned*1.25,1),r.progress.daily[ie()]=s}function ve(e={}){kg();const t=ie(),n=r.progress.streak.lastStudyDate;if(n===t)return;const s=!!(n&&Bn(n,t)>1&&r.progress.streak.current>0);r.progress.streak.current=n&&Bn(n,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),be(s?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},s?"streak_lost":"study_streak"),s&&z(Pe("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:xm(t,1)}),ke("streak_up",{streak:r.progress.streak.current,lost:s},{skipAchievements:!!e.skipAchievements}),C()}function Sg(){if(r.route!=="stats")return;if(!window.Chart){Lf().then(()=>{r.route==="stats"&&Sg()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=WL(10),t=e.map(a=>a.slice(5)),n=yL(),s=$L(n);Gr("activityChart",{type:"bar",data:{labels:t,datasets:[{label:_("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:_("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),Gr("jlptChart",{type:"bar",data:{labels:Object.keys(Ug()),datasets:[{label:_("mastered"),data:Object.values(Ug()),backgroundColor:n.yellow}]},options:s}),Gr("streakChart",{type:"line",data:{labels:t,datasets:[{label:_("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),Gr("stateChart",{type:"doughnut",data:{labels:Object.keys(zg()),datasets:[{data:Object.values(zg()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),Gr("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:_("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function Gr(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function _0(){const e=Pn();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=ce(r.writingStep,0,Math.max(0,_t(e)-1)),Y.cardId!==String(e.id)&&P0(e)),M0(),qr(),Ai(),Vr(Hr(!1)),window.setTimeout(Lg,120)}function Pn(){return se(r.activeCardId)||Jl()[0]||r.cards[0]||null}function P0(e){Y.cardId=String(e?.id||""),Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Y.completed=!1}function M0(){const e=document.getElementById("practiceCanvas");if(!e)return;qs();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),Y.drawing=!0,Y.activePointerId=a.pointerId,Y.currentStroke=[Ng(e,a)],Y.completed=!1,qs())},n=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=Ng(e,a),l=Y.currentStroke[Y.currentStroke.length-1];(!l||Pg(l,o)>1.4)&&(Y.currentStroke.push(o),qs())},s=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=E0(Y.currentStroke);o.length&&Y.strokes.push(o),Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,qs(),Vr(Hr(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function Ng(e,t){const n=e.getBoundingClientRect();return{x:ce((t.clientX-n.left)*(e.width/n.width),0,e.width),y:ce((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function E0(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{Pg(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function qs(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=Pn();_g(t,e),n&&O0(t,e,n),Y.strokes.forEach((s,a)=>Rg(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===Y.strokes.length-1})),Y.currentStroke.length&&Rg(t,Y.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function K0(){Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.completed=!1,qs(),Vr(Hr(!1))}function D0(){Y.strokes.pop(),Y.currentStroke=[],Y.completed=!1,qs(),Vr(Hr(!1))}function F0(e=!1){const t=Hr(!0);Vr(t),e&&(pa(t.success?"good":"again"),z(t.message),t.success&&x0())}function Hr(e){const t=document.getElementById("practiceCanvas"),n=Pn(),s=_t(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=Y.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=ce(Math.round(Math.min(a.length,s)/s*100),0,100),l=e?100:o,c=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=Ol(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:d}}function Lg(){const e=document.getElementById("strokeCanvas"),t=Pn();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=_t(t),s=460,a=performance.now(),o=l=>{const c=l-a,d=ce(Math.floor(c/s),0,n-1),u=ce((c-d*s)/s,0,1);r.writingStep=d,qr(d,u),Ai(),c<n*s?Y.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,qr(r.writingStep,1),Ai())};Y.demoAnimationId=requestAnimationFrame(o)}function xg(){const e=document.getElementById("strokeCanvas"),t=Pn();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=performance.now(),s=520,a=ce(r.writingStep,0,Math.max(0,_t(t)-1)),o=l=>{const c=ce((l-n)/s,0,1);qr(a,c),c<1&&(Y.demoAnimationId=requestAnimationFrame(o))};Y.demoAnimationId=requestAnimationFrame(o)}function Cg(e){Ag(r.writingStep+e,!1)}function Ag(e,t){const n=Pn();n&&(r.writingStep=ce(e,0,Math.max(0,_t(n)-1)),Ai(),t?xg():qr(r.writingStep,1))}function Ai(){const e=Pn();if(!e)return;const t=Qr(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${_t(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),go(".writing-guide-list li").forEach((o,l)=>o.classList.toggle("is-active",l===r.writingStep))}function qr(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=Pn();if(!n||!s)return;const a=n.getContext("2d");_g(a,n);const o=Wr(s);if(!o){Ig(a,n,s,e);return}Tg(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function O0(e,t,n){const s=Wr(n);if(!s){Ig(e,t,n,r.writingStep);return}Tg(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Wr(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function Ol(e){return!!Wr(e)}function _t(e){const t=Wr(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function Xr(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function Tg(e,t,n,s={}){const a=ce(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=B0(n,t,s.padding||22),l=Xr(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=l.guide;n.strokeOrder.forEach((m,f)=>{const v=f<a,w=f===a;f>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=w?d:v?c:u,e.lineWidth=(w?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(w?1:v?.86:.24),w&&s.progress<1&&(e.globalAlpha*=.45+ce(s.progress,0,1)*.55),w&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&U0(e,m,o,f+1,w))})}function B0(e,t,n=22){const s=z0(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,l=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:l}}function z0(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function U0(e,t,n,s,a){const o=J0(t.path);if(!o)return;const l=n.x+o.x*n.scale,c=n.y+o.y*n.scale;G0(e,l,c,s,a)}function J0(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function G0(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Ig(e,t,n,s=0){const a=Xr(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=p()==="ru"?`Шаг ${s+1}/${_t(n)} · точной схемы пока нет`:`Step ${s+1}/${_t(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function Rg(e,t,n={}){const s=t.map(W0).filter(Boolean);if(!e||!s.length)return;const a=Xr();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=X0(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function _g(e,t){if(!e||!t)return;const n=Xr();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),H0(e,t)}function H0(e,t){const n=Xr();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Qr(e){const t=Wr(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:_t(e)},(s,a)=>n[a]||q0(e,a))}function q0(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Vr(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Y.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function W0(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function X0(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function Pg(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function Q0(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function V0(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(l=>l.id===s.lessonId);if(a&&!Oe(a))return!1;const o=F(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(Ii)}function Y0(){const e=new Date;return Ul().filter(t=>{const n=F(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(Ii)}function Z0(){const e=Date.now(),t=[];return[["N5",Z()],["N4",W()],["N3",H()],["N2",q()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const l=ps(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!l.dueAt||!wg(l))return;const c=Dl(n,a,l.lessonId||"");if(!c)return;const d=String(c?.lessonId||l.lessonId||"");if(!TN(n,d))return;const u=new Date(l.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(l.cardId||""),dueAt:u,progress:l})})}),t.sort(Zr)}function Ti(){const e=[];return r.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((a,o)=>{const l={id:String(a.id||`${s.id}:${o}`),prompt:a.prompt||{ru:"",en:""},answer:String(a.answer||""),options:bh(a.options)};e.push({id:String(a.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:l,questions:[l]})})})}),[...e,...hk()]}function Mg(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return Ti().find(a=>String(a.id||"")===n&&(!s||String(a.level||"").toUpperCase()===s))||Ti().find(a=>String(a.id||"")===n)||null}function Eg(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?h(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":Rt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":Rt(e).map(n=>n.kanji).join(""))}}function Bl(e){return 1}function Mn(e){const t=Eg(e);return{...Hs(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:Bl(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function Yr(e,t){const n=Mn(t),s=ps({...n,...e||{}},Eg(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=Bl(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function En(e){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const t=r.progress.readingExercises[String(e.id)]||null;if(t){const a=Yr(t,e);return r.progress.readingExercises[String(e.id)]=a,a}const n=Mn(e);return r.progress.readingExercises[String(e.id)]=n,n}function gs(e,t){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const n=Yr(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function Kg(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function Ws(e=""){var a;if(!r.progress)return!1;const t=Q(e);(a=r.progress).readingExercises||(a.readingExercises={});const n=new Map(Ti().filter(o=>!t||Q(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(r.progress.readingExercises).forEach(([o,l])=>{const c=n.get(String(o));if(!c)return;const d=Yr(l,c),u=Kg(d)?d:Mn(c);JSON.stringify(l)!==JSON.stringify(u)&&(r.progress.readingExercises[String(o)]=u,s=!0)}),s}function eN(){const e=Date.now();return Ti().map(t=>{if(!IN(t.level))return null;const n=r.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=Yr(n,t);if(r.progress.readingExercises[String(t.id)]=s,!Kg(s))return null;const a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort(Zr)}function tN(){const e=Date.now();return["hiragana","katakana"].flatMap(t=>{if(!Fe(t))return[];const n=Ps(t),s=Object.entries(n).map(([a,o])=>({cardId:a,...Et(o)}));return _m(s,e).initial.map(a=>{const o=ci(a.cardId,t);if(!o?.id||o.slug!==t)return null;const l=Pu(t,o.kana);return Al({kind:"kana",key:o.id,courseSlug:t,cardId:o.id,kana:o.kana,romaji:l?.romaji||"",strokes:l?.strokes||0,character:l,progress:a,dueAt:a.dueAt?Date.parse(a.dueAt):0})}).filter(Boolean)}).sort(Zr)}function zl(){const t=[...Y0().map(s=>{if(!s?.id)return null;const a=F(s.id);return{kind:"card",key:`card:${s.id}`,card:s,cardId:String(s.id),dueAt:a.dueAt?new Date(a.dueAt).getTime():0,progress:a}}).filter(Boolean),...tN()].sort(Zr),n=[...Z0(),...eN()].sort(Zr);return zr(Vh(t,n,Po))}function Dg(e=zl()){const t=Object.freeze(zr(e).map(n=>n.key).filter(Boolean));r.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString(),results:{remember:0,forgot:0,items:[]}}}function nN(){const e=zl();if(r.route!=="review")return e;r.reviewSession||Dg(e);const t=new Map(e.map(a=>[a.key,a])),n=Array.isArray(r.reviewSession?.keys)?r.reviewSession.keys:[],s=n.map(a=>t.get(a)).filter(Boolean);return!n.length&&e.length?(Dg(e),e):zr(s)}function Fg(e,t,n={}){if(r.route!=="review"||!r.reviewSession)return;const s=Ee(t)?"forgot":"remember",a=r.reviewSession.results||{remember:0,forgot:0,items:[]};a.remember=Number(a.remember||0),a.forgot=Number(a.forgot||0),a[s]+=1,a.items=Array.isArray(a.items)?a.items:[],a.items.push({kind:e,rating:s,label:String(n.label||n.kana||n.kanji||n.cardId||""),course:String(n.course||n.level||""),dueAt:n.dueAt||null}),r.reviewSession.results=a}function sN(){const e=Date.now(),t=Ul().filter(s=>{const a=F(s.id),o=a.dueAt?new Date(a.dueAt).getTime():0;return a.state==="Learning"&&o>e}).length,n=Og().filter(s=>{const a=s.dueAt?new Date(s.dueAt).getTime():0;return s.state==="Learning"&&a>e}).length;return t+n}function Og(){return["hiragana","katakana"].flatMap(e=>Fe(e)?Object.values(Ps(e)).map(t=>Et(t)):[])}function rN(){return Ul().filter(e=>F(e.id).state!=="New").length+Og().filter(e=>e.state!=="New").length}function Ke(){if(Ia&&Ra!==null)return Ra;const e=zl().length;return Ia&&(Ra=e),e}function Zr(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?F(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?F(t.card.id):t.progress,a=qa(n),o=qa(s);if(a!==o)return o-a;if(e.kind!==t.kind){const l=e.kind==="card"||e.kind==="kana",c=t.kind==="card"||t.kind==="kana";return l!==c?l?-1:1:String(e.kind||"").localeCompare(String(t.kind||""))}return e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function Ul(){const e=new Set,t=[];return ze.forEach(n=>{om(n).forEach(s=>{const a=String(s?.id||"");!a||e.has(a)||(e.add(a),t.push(s))})}),t.sort(Ii)}function Jl(){const e=qL();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!Oe(n))return!1;const s=F(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(Ii)}function Ii(e,t){const n=F(e.id),s=F(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const l=qa(n),c=qa(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function aN(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=ea(t.id),s=[t.kanji,K(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,Wl(t),t.jlpt,cc(t.lessonId),da(t),n.radical,h(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,_e(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&iN(t.strokes,r.filters.strokes)})}function iN(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function Gl(){const e=r.cards.length,t=r.cards.filter(s=>F(s.id).state!=="New").length,n=r.cards.filter(s=>F(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:Jl().length,completion:E(n,e)}}function Hl(){return Object.values(r.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function oN(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Bg(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function zg(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[F(t.id).state]+=1}),e}function Ug(){const e={};return r.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),F(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function dn(){const e=ie();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function ql(e){return r.cards.filter(t=>t.lessonId===e)}function lN(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||Oe(t))&&F(e.id).state==="New"})}function se(e){const t=String(e||"");return t&&r.cards.find(n=>String(n.id)===t||String(n.kanji||"")===t||lg(n)===t)||null}function cN(e){return se(e)}function dN(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function ea(e){return r.kanjiMeta[String(e)]||{}}function Ri(e){const t=r.kanjiHints[String(e)]||{};return{hint:h(t.hint||{})||Pe("leya","hint"),mnemonic:h(t.mnemonic||{})||""}}function uN(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),C(),I())}function at(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function pN(e){const t=String(e||"");r.readingCheck.cardId!==t&&at(t)}function Jg(){const e=se(r.readingCheck.cardId||r.activeCardId);if(!e)return;hr(e,"reading_check"),Mi();const t=mN(r.readingCheck.value),n=gN(e),s=t.some(c=>n.normalized.has(c)),a=t.length>0,o=a&&s?"correct":"wrong",l=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:l},D(o==="correct"?"answer_correct":"answer_wrong"),Me(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function gN(e){const t=ta(e),n=[...Kn(t.onyomi.kana),...Kn(t.kunyomi.kana),...Kn(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(Gg).filter(Boolean))}}function mN(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(Gg).filter(Boolean)}function Gg(e){const t=Hg(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return fN(t).trim()}function Hg(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function fN(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=hN(t.slice(-1));continue}t+=n}return t}function hN(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function qg(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const Wg={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},Xg={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function ta(e){const t=qg(e);if(t&&t.readings){const a=t.readings,o=_i(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),l=_i(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||l.kana)return{onyomi:o,kunyomi:l}}const n=_i(e?.onyomi,e?.onyomi_romaji),s=_i(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function Kn(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function _i(e,t="",n=""){const s=Kn(e).length?Kn(e):Kn(n),a=Kn(t),o=s.map((l,c)=>({kana:V(l),romaji:vN(l,a[c])})).filter(l=>l.kana||l.romaji);return{kana:o.map(l=>l.kana).filter(Boolean).join(" / "),romaji:o.map(l=>l.romaji).filter(Boolean).join(" / ")}}function vN(e,t){const n=Qg(e);return n?t&&Vg(t)===Vg(n)?t:n:t||""}function Qg(e){const t=[...wN(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],l=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=bN(n);u&&(n+=u);continue}let c="";const d=o+l;if(Xg[d])c=Xg[d],a+=1;else if(Wg[o])c=Wg[o];else if(/[a-zA-Z0-9]/u.test(o))c=o.toLowerCase();else{s=!1;continue}if(s){const u=c.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=c}return n}function wN(e){return Hg(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function bN(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function Vg(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function Yg(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Pi(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function Wl(e){const t=ta(e);return[`${Pi("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Pi("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function Xl(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return em(t)||Zg(e)}function Zg(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=kN(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function em(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function kN(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function yN(e){return!!(Xl(e)||Ql(e))}function Ql(e){if(!e)return"";const t=ta(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function $N(e){const t=ta(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Xs(e,t=""){const n=lC($N(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function jN(e){return Xs(e).length>0}function SN(e){return Kn(e)[0]||String(e||"").trim()}function Vl(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-ir);if(e>0){window.setTimeout(Vl,e);return}const t=se(r.activeCardId);if(!t)return;const n=Xs(t).map(o=>`${o.kind}:${o.kana}`).join("|")||Ql(t),s=em(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const a=`${r.route}:${t.id}:${n||s}`;a!==Kc&&(Kc=a,tm(t,{silent:!0}))}function Mi(){Ca+=1,yt="idle",Ei(),Zl()}function Yl(){return Ca+=1,Ca}function He(e){return e===Ca}function Zl(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Ei(){Ft&&(Ft.pause(),Ft.currentTime=0,Ft=null)}function tm(e,t={}){const n=Yl();let s=null;const a=()=>He(n)?(s||(s=nm(e,{...t,requestId:n})),s):Promise.resolve(!1);return sm(e,{kind:"cycle",silent:t.silent,fallback:a,requestId:n})?Promise.resolve(!0):a()}function nm(e,t={}){const n=t.requestId||Yl();if(!He(n))return Promise.resolve(!1);const s=Xl(e);if(!s||(Zl(),Ei(),!He(n)))return Promise.resolve(!1);yt="audio";const a=new Audio(s);return Ft=a,a.preload="auto",a.onended=()=>{Ft===a&&(Ft=null,He(n)&&(yt="idle"))},a.onerror=()=>{He(n)&&(t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:s}))},a.play().then(()=>He(n)&&Ft===a).catch(o=>(He(n)&&(Ft===a&&(Ft=null,yt="idle"),t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:s,error:o})),!1))}function sm(e,t={}){const n=t.requestId||Yl();Ei(),yt="tts-pending";let s=null;const a=typeof t.fallback=="function"?()=>He(n)?(s||(s=t.fallback({...t,requestId:n})),s):Promise.resolve(!1):null,o=V(t.text||""),l=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${l}`,d=Xs(e);let u=null;if(!o){const N=cC(d,Dc.get(c)??-1,l);u=N.item,Dc.set(c,N.cursor)}const m=o||u?.kana||SN(Ql(e));let f=!1;if(!Mm(m,{onStart:()=>{if(!He(n)||yt==="audio"){Zl();return}f=!0,yt="tts",Ei()},onEnd:()=>{He(n)&&yt==="tts"&&(yt="idle")},onError:N=>{!He(n)||f||yt==="audio"||(t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:N}),a?.())}}))return He(n)&&a?.(),!a&&He(n)&&(yt="idle"),!a&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:Zg(e)}),!1;if(!He(n))return!1;const w=t.label||(u?Pl(u):"TTS");return t.silent||z(`${e?.kanji||""} ${w}: ${m}`.trim()),!0}function NN(e,t){z(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Oe(e){return!!e}function Ki(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function rm(e){if(!e||!Oe(e))return"locked";const t=ql(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=F(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(a=>{const o=F(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function ec(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function tc(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function LN(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g(tc(e))}"></span>`}function xN(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${ec(e)}">${i(tc(e))}</span>`}function un(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function Pt(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function na(e){const t=String(e||"").toLowerCase();return r.kanaCatalog?.courses?.find(n=>n.slug===t)||null}function sa(e){const t=String(e||"").toLowerCase();return r.kanaCourses?.[t]||null}function Dn(){return r.progress.kanaCourses=$c(r.progress.kanaCourses||null),r.progress.kanaCourses}function vt(e){return gC(Dn(),e)}function CN(e){const t=String(e||"").toLowerCase(),n=na(t);if(!n||!Fe(t))return Promise.resolve(null);if(r.kanaCourses[t])return Promise.resolve(r.kanaCourses[t]);if(r.kanaCourseLoading[t])return r.kanaCourseLoading[t];r.kanaCourseErrors[t]=null;const s=Ue(n.course_file).then(a=>(r.kanaCourses[t]=a,r.kanaCourseLoading[t]=null,a)).catch(a=>{throw r.kanaCourseLoading[t]=null,r.kanaCourseErrors[t]=a,a});return r.kanaCourseLoading[t]=s,s}function ms(e){const t=String(e||"").toUpperCase();return t==="N5"?Z():t==="N4"?W():t==="N3"?H():t==="N2"?q():t==="N1"?ee():null}function AN(e,t,n="open"){const s=Q(e),a=String(t||"");if(!s||!a)return!1;const o=ms(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function TN(e,t){const n=Q(e),s=String(t||"");if(!n||!s)return!1;const a=ms(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function ra(e,t="open"){var s;const n=Q(e);return!n||((s=r.progress).viewedReadingLevels||(s.viewedReadingLevels={}),r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function IN(e){const t=Q(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function nc(e){const t=Pt(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function am(e){const t=String(e||"").toUpperCase(),n=ms(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const a=Pt(t)?.lessonCount||(t==="N5"?10:0);let o=0;if(t==="N5"){o=as();const l=Object.keys(n.studiedKanji||{}).length;if(o>=10&&l>=80||o>=a)return!0}else if(o=Object.keys(n.completedLessons||{}).length,o>=a)return!0;return!1}function wt(e){const t=String(e||"").toUpperCase();if(ze.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!Pt(t))return t==="N5";const s=nc(t);return s.length?s.every(a=>am(a)):!0}function im(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function pn(e){const t=nc(e);return t.length?p()==="ru"?`Откроется после завершения ${im(t)}.`:`Unlocks after completing ${im(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function aa(e){const t=Q(e);if(!t)return[];const n=Pt(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),l=s.filter(d=>!o.has(d.id)),c=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...l].slice(0,c||s.length)}function sc(e){const t=Q(e);if(!t)return"";const n=aa(t);if(!n.length)return"";const s=UN(t);if(s?.lessonId&&Bi(t,s.lessonId))return s.lessonId;const a=ms(t)?.currentLessonId||"";if(a&&Bi(t,a))return a;const o=t==="N5"?Z().completedLessons||{}:t==="N4"?W().completedLessons||{}:t==="N3"?H().completedLessons||{}:t==="N2"?q().completedLessons||{}:r.progress.lessonCompletions||{},l=n.filter(c=>o[c.id]);return l.length?(l.sort((c,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[c.id]||"")||0;return u!==m?u-m:(d.order||0)-(c.order||0)}),l[0]?.id||n[0]?.id||""):n[0]?.id||""}function Di(e,t=""){const n=Q(e);if(!n||!un(n))return;if(!wt(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,Qe("textbooks",null,n),z(pn(n));return}const s=r.route,a=String(t||"")||sc(n),o=["N5","N4","N3","N2"].includes(n),l=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&bt(n,a,"open_jlpt"),at(),it(l),ss(),I()}function RN(e){return e?un(e.jlpt):null}function Qs(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function fs(){return r.progress.jlptLessonPractice=jd(Ns().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function Vs(e){if(!e?.drills?.length)return null;const t=fs(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function _N(e){const t=Qs(r.activeJlptLesson),n=Vs(t);if(!n||!n.tiles[e])return;const s=fs(),a=s.selected[n.id]||[],o=n.blanks.flatMap(l=>l.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,C(),I())}function PN(){const e=Vs(Qs(r.activeJlptLesson));if(!e)return;const t=fs();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,C(),I()}function MN(){const e=Vs(Qs(r.activeJlptLesson));if(!e)return;const t=fs();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,C(),I()}function EN(){const e=Vs(Qs(r.activeJlptLesson));if(!e)return;const t={...ac(),...rc()},n=fs(),s=n.selected[e.id]||[],a=e.blanks.flatMap(c=>c.answer||[]),o=a.reduce((c,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&c.push(u),c},[]),l=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:o,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),G(8,1,`jlpt_practice:${e.id}`),D("answer_correct")):l||D("answer_wrong"),C(),I()}function KN(){var o,l,c,d,u,m;const e=Qs(r.activeJlptLesson),t=Vs(e);if(!e||!t)return;const n=e.drills.findIndex(f=>f.id===t.id),s=e.drills[(n+1)%e.drills.length],a=fs();a.activeIds[e.jlpt]=s.id,(o=a.selected)[l=s.id]||(o[l]=[]),(c=a.checked)[d=s.id]||(c[d]=!1),(u=a.results)[m=s.id]||(u[m]=null),C(),I()}function om(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function rc(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function ac(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function Fi(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=ia(n,t)&&n<100;)s-=ia(n,t),n+=1;return n}function gn(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=ia(t,e)&&t<100;)n-=ia(t,e),t+=1;const s=ia(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:E(n,s)}}function ia(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function DN(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${ie()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),pe("progress_export",{route:r.route,source:"manual"}),z(_("export"))}function pe(e,t={},n={}){return xC(e,t,n)}function Vt(e="learn",t={}){pe("learning_start",{route:r.route,source:e,...t},{dedupeKey:"learning_start"})}function Ys(e,t,n="textbook"){const s=Q(e),a=String(t||"");pe("lesson_complete",{route:r.route,level:s,lessonId:a,source:n},{dedupeKey:`${s||"legacy"}:${a}`})}function Oi(e="review"){if(r.route!=="review"||Ke()>0)return;const t=r.reviewSession?.startedAt||"current";pe("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function oa(e,t,n="final-test"){const s=Q(e);pe("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&pe("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function FN(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function Q(e){const t=String(e||"").toUpperCase();return ze.includes(t)?t:""}function qe(e){if(!e||typeof e!="object")return null;const t=Q(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function ON(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=Q(n),o=qe({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function hs(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function Bi(e,t){const n=Q(e),s=String(t||"");return!n||!s?!1:aa(n).some(a=>a.id===s)}function BN(e,t){const n=Q(e),s=String(t||"");if(!n||!s)return!!n;const a=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return a.has(s)||n!=="N5"&&o.has(s)?!0:aa(n).some(l=>l.id===s)}function zN(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim().toLowerCase();if(!Fe(n))return!1;if(!s)return!0;const a=sa(n);if(a)return["review","final","final-test","reference","sources"].includes(s)||a.lessons?.some(c=>c.id===s)||a.reading_practice?.some(c=>c.id===s);const o=na(n),l=Number(o?.lesson_count||(n==="hiragana"?10:11));if(/^lesson-\d+$/i.test(s)){const c=Number(s.replace(/\D+/g,""));return c>=1&&c<=l}return/^practice-[1-5]$/i.test(s)?!0:["review","final","final-test","reference","sources"].includes(s)}function lm(e){return aa(e)[0]?.id||""}function UN(e=""){const t=Q(e);if(t){const a=qe(r.progress.lastOpenedJlptLessons?.[t]||null)||(qe(r.progress.lastOpenedJlptLesson||null)?.level===t?qe(r.progress.lastOpenedJlptLesson||null):null);return a&&Bi(t,a.lessonId)?a:null}const n=[qe(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>qe(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>Bi(a.level,a.lessonId))||null}function JN(e=""){const t=Q(e);if(t)return qe(r.progress.lastOpenedJlptLessons?.[t]||null)||(qe(r.progress.lastOpenedJlptLesson||null)?.level===t?qe(r.progress.lastOpenedJlptLesson||null):null);const n=[qe(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>qe(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function GN(e){const t=Q(e);if(!t)return"";const n=ze.indexOf(t);return n>=0&&n<ze.length-1?ze[n+1]:""}function bt(e,t,n="open"){var f;const s=Q(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},l=qe(r.progress.lastOpenedJlptLessons?.[s]||null),c=qe(r.progress.lastOpenedJlptLesson||null);(f=r.progress).lastOpenedJlptLessons||(f.lastOpenedJlptLessons={}),r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=AN(s,a,n),u=ms(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!l||l.lessonId!==a||l.level!==s||c?.lessonId!==a||c?.level!==s||d)&&C(),o}function Mt(e,t="btn ghost"){const n=Q(e),s=GN(n);if(!n||!s)return"";const a=lm(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(a)}">${i(o)}</button>`}function Yt(){return Q(r.activeJlptLesson)||Q(r.activeTextbookLevel)||Q(r.jlptLessons.find(e=>wt(e.jlpt))?.jlpt)||Q(r.jlptLessons[0]?.jlpt)||"N5"}function HN(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(Q(t.level||r.activeTextbookLevel||Yt())||Yt())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(Q(t.level||r.activeJlptLesson||Yt())||Yt())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function qN(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=HN(e,t),n.href}function WN(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=Q(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function XN(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=Q(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?Pt(s):null,o=t.lesson||(s?un(s):null),l=p()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=h(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return l?`${c||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${c||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const c=h(o?.title||{}),d=h(o?.summary||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?tL(t.reward||r.rewardModal||{}):"Flash Kanji."}function QN(){return p()==="ru"?"Поделиться":"Share"}function Fn(e=r.route,t={}){const n=Q(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||QN();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${VN()}</span>
        <span>${i(a)}</span>
      </button>
    `}function VN(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function cm(e){return e==="youtube"?`
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
    `}async function YN(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await aL(e.text,e.url,n)?"copy":"failed"}async function ZN(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:WN(n,t),text:XN(n,t),url:qN(n,t),files:[]};if(n==="achievement"||s){const o=await nL(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function dm(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),pe("share_opened",{route:n,level:Q(s.level)||"",source:"share"});const a=await ZN(n,s),o=await YN(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(pe("share_completed",{route:n,source:a.files?.length?"file":"web-share"}),!0):o==="copy"?(pe("share_link_copied",{route:n,source:"copy"}),pe("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||z(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function eL(){await dm("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function tL(e={}){const t=_("shareFallback"),n=e.level||r.progress.level,s=gn(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${_("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function nL(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;sL(a,1200,630);const o=e.level||r.progress.level,l=gn(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=Ni(u,e.mood||"happy",e.dialog||e.type||"achievement"),[f,v]=await Promise.all([um("assets/logo.webp"),m?um(m):Promise.resolve(null)]);return f&&pm(a,f,58,48,330,116),v&&pm(a,v,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(_("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${_("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${c} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),rL(s)}function sL(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function um(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function pm(e,t,n,s,a,o){const l=Math.min(a/t.naturalWidth,o/t.naturalHeight),c=t.naturalWidth*l,d=t.naturalHeight*l;e.drawImage(t,n+(a-c)/2,s+(o-d)/2,c,d)}function rL(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function aL(e,t,n="shareLinkCopied"){const s=await gm(`${e}
${t}`);return z(s?_(n):e),s}async function gm(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function iL(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=ud(Ns(),n.progress||n),mr(),n.customization&&(r.customization={...Qn(),...n.customization,selected:{...Qn().selected,...n.customization.selected||{}}},Ss()),Ka(),Zs(),C(),mn(),z(_("import")),I()}catch(n){console.error(n),z("Invalid JSON")}finally{e.target.value=""}}function oL(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=Ns(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,mr(),Zs(),C(),I()}function lL(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,mn(),C(),I()}function cL(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,C(),I()}function mm(){r.progress.settings.sound=!hn(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,Zs(),ic(),C(),z(r.progress.settings.sound?"в™Є":"Г—")}function dL(){mm()}function la(){return window.FlashKanjiSound||null}function uL(){try{la()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function Zs(){const e=la();!e||!r.progress?.settings||(e.setSoundEnabled?.(hn(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(Ui()))}function zi(){return hn(r.progress?.settings?.sound,!0)}function ic(){const e=Ae('[data-action="sound"]');if(!e)return;const t=hn(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=pL(t)}function pL(e){return e?`
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
      `}function gL(e){return e?`
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
      `}function mL(){const e=Ae('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||ma(),n=!!(t.docked||r.notificationPromptVisible||Hi("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=gL(s)}function oc(){const e=Ae('[data-action="toggle-header-socials"]');if(!e)return;const t=lc(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function fm(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),oc())}function lc(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Ui(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?ce(e,0,1):.75}function fL(e){const t=ce(Number(e),0,1);r.progress.settings.uxVolume=t,Zs(),C()}function D(e){if(!zi())return!1;const t=()=>{try{if(!!la()?.playSound?.(e)){ir=Date.now();return}uc(String(e))}catch(n){console.warn("UX sound failed.",n),uc(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function mn(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=on();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",hL(e?.file||"assets/bg/bg_study_hub.webp"));const t=eb();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function hL(e){const t=String(e).replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function _(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function h(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function vL(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function ca(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function wL(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function cc(e){const t=r.lessons.find(n=>n.id===e);return t?ca(t):""}function K(e){return Be(e,p())}function Be(e,t=p()){if(!e)return"";const n=qg(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function da(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function _e(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||dc(n.romaji)===dc(e.romaji));return t?.translation_en?t.translation_en:lf[dc(e.romaji)]||e.translation||""}function dc(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function er(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Pe(e,t){const n=e==="eva"?bL(t):"";if(n)return n;const s=er(e).dialogs?.[t]||er(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return We(a)}function bL(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=kL(t),s=[...r.evaAutonomyLines||[],...ni()].filter(l=>{const c=h(l?.text||{});if(!c)return!1;const d=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||d.some(f=>n.includes(f))))return!1;const m=hm(c);return m.length>=12&&m.length<=132}),a=s.filter(l=>!lo.includes(l.id)),o=We(a.length?a:s);return o?(o.id&&(lo=[o.id,...lo.filter(l=>l!==o.id)].slice(0,18)),hm(h(o.text||{}))):""}function kL(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function hm(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function ua(e){const t=vm(e);return`<span class="pill ${t}">${i(of[t]||"New")}</span>`}function vm(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function wm(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function yL(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function $L(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function Ji(){try{return xa||(xa=new(window.AudioContext||window.webkitAudioContext)),xa.state==="suspended"&&xa.resume().catch(()=>null),xa}catch(e){return console.warn("Audio context unavailable.",e),null}}function jL(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function uc(e){const t=Ji();if(!t)return!1;try{const n=jL(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=a;const d=s+n.interval*o;c.gain.setValueAtTime(1e-4,d),c.gain.exponentialRampToValueAtTime(n.peak,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),l.connect(c).connect(t.destination),l.start(d),l.stop(d+n.duration+.02)}),ir=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=uc;function SL(){const e=()=>{const t=Ji();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function pa(e){if(r.progress.settings.sound){if(la()){D(e==="again"?"answer_wrong":"answer_correct");return}try{const t=Ji();if(!t)return;ir=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function NL(){if(r.progress.settings.sound)try{const e=Ji();if(!e)return;ir=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const l=t+s*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.12,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.24),a.connect(o).connect(e.destination),a.start(l),a.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function LL(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function z(e){const t=Ae("#toast");t.textContent=e,t.hidden=!1,clearTimeout(Fc),Fc=window.setTimeout(()=>{t.hidden=!0},2400)}function bm(){return`
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
      </section>`}function xL(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function CL(){try{[ot,rr,La,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function AL(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function TL(e){try{const t=Number(sessionStorage.getItem(Na)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Na,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&CL(),await AL();try{localStorage.removeItem(ot),localStorage.removeItem(rr),localStorage.removeItem(La),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function IL(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(rr,`${R}:done`)}catch(a){console.warn("Cannot save PWA cache reset marker.",a)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),a=await navigator.serviceWorker.register(s.href);if(!a||typeof a.update!="function")return;RL(a),await a.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function RL(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Gi(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(y)||localStorage.getItem(b);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(y)||localStorage.setItem(y,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function pc(){try{localStorage.setItem(y,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function _L(e){e.preventDefault(),Wn=e,r.progress&&r.i18n&&ML()}async function PL(){if(pe("pwa_install_click",{route:r.route,source:Wn?"browser":tr()?"ios":"help"}),ga()){mc();return}if(!Wn){r.pwaInstallHelpVisible=!0,Me();return}const e=Wn;Wn=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){mc();return}fc()}catch(t){console.warn("PWA install prompt failed.",t),fc()}}function ga(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function gc(){const e=r.pwaInstallPrompt||Gi();if(ga()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||Bn(t,ie())<1?!1:!!Wn||tr()}function ML(){gc()&&(D("notification_soft"),I())}function mc(){r.pwaInstallPrompt={...Gi(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,pc(),pe("pwa_installed",{route:r.route,source:tr()?"ios":"browser"},{dedupeKey:"appinstalled"}),jm(),r.progress&&r.i18n&&I()}function fc(){const e=r.pwaInstallPrompt||Gi(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:EL(t),neverShow:t>=5,installed:!1},pc(),I()}function EL(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function KL(){!ga()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},pc())}function tr(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function km(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function ma(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(L);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function On(){try{localStorage.setItem(L,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function fa(){clearTimeout(so),so=0}function DL(){fa(),r.notificationPromptVisible&&(so=window.setTimeout(()=>{r.notificationPromptVisible&&ym()},5e3))}function ym(){fa(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},On(),I())}function $m(){return ga()||!!r.pwaInstallPrompt?.installed}function Hi(e="usage"){const t=r.notificationPrompt||ma();return!(!("Notification"in window)||t.neverShow||t.enabled||!$m()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-po<2*60*1e3)}function qi(e="usage"){return Hi(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},On(),D("notification_soft"),DL(),I(),!0):("Notification"in window&&Notification.permission==="granted"&&Sm(),!1)}function jm(){if(clearTimeout(zc),!$m())return;const e=Math.max(0,2*60*1e3-(Date.now()-po));zc=window.setTimeout(()=>qi("usage"),e)}async function FL(){if(r.notificationPromptVisible=!1,fa(),!("Notification"in window)){Wi();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Sm(),z(Lm().enabled),Me();return}Wi()}catch(e){console.warn("Notification permission failed.",e),Wi()}}function Sm(){!("Notification"in window)||Notification.permission!=="granted"||(fa(),r.notificationPrompt={...ma(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},On(),hc())}function Wi(){const e=r.notificationPrompt||ma(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,fa(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:OL(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},On(),Me()}function OL(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function hc(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,On(),co.forEach(e=>clearTimeout(e)),co.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>Nm(e.type,BL(e.hour,e.minute))),GL())}function Nm(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await zL(e),Nm(e,HL(t,1))},n);co.set(e,s)}function BL(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function zL(e){if(!UL(e))return!1;const t=JL(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),D(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=ie(),On(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function UL(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===ie())return!1;if(e==="review")return Ke()>0;if(e==="daily_bonus"){const t=Ja(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=ie()&&!r.progress.dailyBonuses[ie()]}return e==="lesson"?lN().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function JL(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function GL(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,On()}catch{r.notificationPrompt.periodicSync=!1,On()}}function Lm(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function re(e){return{...e,history:[...e.history||[]]}}function HL(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function qL(){const e=new Date;return e.setHours(23,59,59,999),e}function ie(){return vc(new Date)}function vc(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function wc(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function Bn(e,t){return Math.round((wc(t)-wc(e))/864e5)}function xm(e,t){const n=wc(e);return n.setDate(n.getDate()+t),vc(n)}function WL(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),vc(s)})}function Zt(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function E(e,t){return t?ce(Math.round(e/t*100),0,100):0}function ce(e,t,n){return Math.max(t,Math.min(n,e))}function Xi(e,t){const n=10**t;return Math.round(e*n)/n}function We(e){return e[Math.floor(Math.random()*e.length)]}function zn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function ha(e,t){return String(e)===String(t)?"selected":""}function XL(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Rm(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Cm(e="",t=""){const n=String(e||"").trim(),s=Fe(n)?n.toLowerCase():n.toUpperCase(),a=String(t||"").trim(),o=s?`#textbooks/${encodeURIComponent(s)}`:"#textbooks/";return a?`${o}/${encodeURIComponent(a)}`:o}function it(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${XL()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function va(){const e=qm(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash||e.status==="valid"&&["textbooks","textbook-level","kana-course"].includes(e.kind||"")&&!location.hash?e:Rm(location.pathname||"/")?Jn(location.hash):e.status==="not-found"?e:ge("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function Am(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function wa(e){const t=e.route,n=e.status==="valid"?e.params:{};r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,r.kanjiPageId=t==="kanji"&&n.cardId||null,r.activeTextbookLevel=t==="textbooks"&&(n.level||n.course)||null,r.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,r.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"&&n.view||nn,r.activeLearnNodeId=t==="learn"&&r.activeLearnView===Dt&&n.targetId||null,r.activeLearnLegacyLessonId=t==="learn"&&r.activeLearnView===sn&&n.targetId||null}function Qi(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!cN(t.cardId))return!r.deferredDataLoaded&&dN(t.cardId)?e:ge("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||t.course||"",s=t.subroute||"";if(n&&Fe(n))return!na(n)||s&&!zN(n,s)?ge("hash","entity-not-found",e.raw,e.segments,e.locale):e;if(n&&!Pt(n)||n&&s&&!BN(n,s))return ge("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!un(t.level)||e.route==="learn"&&(t.view===Dt&&!ts(t.targetId)||t.view===sn&&!r.lessons.some(n=>n.id===t.targetId))?ge("hash","entity-not-found",e.raw,e.segments,e.locale):e}function QL(){return Jn(location.hash).raw}function VL(){const e=Jn(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function YL(){const e=Jn(location.hash);return e.status==="valid"&&e.route==="textbooks"&&(e.params.level||e.params.course)||""}function ZL(){const e=Jn(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function ex(){const e=Jn(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function tx(){return us().filter(e=>nr(e.id)).length}function nr(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
