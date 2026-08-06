(function(){const k=document.createElement("link").relList;if(k&&k.supports&&k.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))L(j);new MutationObserver(j=>{for(const _ of j)if(_.type==="childList")for(const R of _.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&L(R)}).observe(document,{childList:!0,subtree:!0});function C(j){const _={};return j.integrity&&(_.integrity=j.integrity),j.referrerPolicy&&(_.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?_.credentials="include":j.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function L(j){if(j.ep)return;j.ep=!0;const _=C(j);fetch(j.href,_)}})();const pL="modulepreload",gL=function(y,k){return new URL(y,k).href},Vg={},Yg=function(k,C,L){let j=Promise.resolve();if(C&&C.length>0){const R=document.getElementsByTagName("link"),F=document.querySelector("meta[property=csp-nonce]"),Me=F?.nonce||F?.getAttribute("nonce");j=Promise.allSettled(C.map(je=>{if(je=gL(je,L),je in Vg)return;Vg[je]=!0;const At=je.endsWith(".css"),Ws=At?'[rel="stylesheet"]':"";if(!!L)for(let qt=R.length-1;qt>=0;qt--){const ls=R[qt];if(ls.href===je&&(!At||ls.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${je}"]${Ws}`))return;const ft=document.createElement("link");if(ft.rel=At?"stylesheet":pL,At||(ft.as="script"),ft.crossOrigin="",ft.href=je,Me&&ft.setAttribute("nonce",Me),document.head.appendChild(ft),At)return new Promise((qt,ls)=>{ft.addEventListener("load",qt),ft.addEventListener("error",()=>ls(new Error(`Unable to preload CSS for ${je}`)))})}))}function _(R){const F=new Event("vite:preloadError",{cancelable:!0});if(F.payload=R,window.dispatchEvent(F),!F.defaultPrevented)throw R}return j.then(R=>{for(const F of R||[])F.status==="rejected"&&_(F.reason);return k().catch(_)})},mL="ru",fL={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},ec={defaultLocale:mL,locales:fL},hL=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Zl="not-found",qs=ec.defaultLocale,vL=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),om=/^n[1-5]$/i,wL=/^[A-Za-z0-9_-]+$/,bL=/^[\p{Letter}\p{Number}_-]+$/u,kL=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,yL=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,$L=new Map(Object.entries(ec.locales).map(([y,k])=>[String(k.urlSegment).toLowerCase(),y]));function $e(y,k,C,L,j={},_=qs,R={}){return{status:"valid",source:y,route:k,locale:_,params:j,raw:C,segments:L,...R}}function be(y,k,C,L=[],j=qs,_){return{status:"not-found",source:y,route:Zl,locale:j,params:{},raw:C,segments:L,reason:k,canonicalPath:_}}function lm(y){return!!(y&&hL.includes(y))}function Ql(y){const k=String(y||"").trim().toUpperCase();return om.test(k)?k:""}function cm(y){try{return{ok:!0,value:decodeURIComponent(y)}}catch{return{ok:!1}}}function tc(y){return y.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function _e(y,k,C=tc(k)){return be("hash",y,k,C)}function Vl(y){return wL.test(y)}function jL(y){return bL.test(y)}function Kn(y){const k=String(y||"").replace(/^#/,"").trim(),C=cm(k);if(!C.ok)return _e("invalid-parameter",k,[]);const L=C.value.replace(/^\/+|\/+$/g,""),j=tc(L),_=(j[0]||"home").toLowerCase();if(!j.length)return $e("hash","home",L,j);if(_==="jlpt"){if(j.length<2||j.length>3)return _e("unknown-route",L,j);const R=Ql(j[1]);if(!R)return _e("invalid-parameter",L,j);const F=j[2]||"";return F&&!Vl(F)?_e("invalid-parameter",L,j):$e("hash","textbooks",L,j,{level:R,subroute:F,legacyRoute:"jlpt"})}if(_==="textbooks"){if(j.length>3)return _e("unknown-route",L,j);if(j.length===1)return $e("hash","textbooks",L,j);const R=Ql(j[1]);if(!R)return _e("invalid-parameter",L,j);const F=j[2]||"";return F&&!Vl(F)?_e("invalid-parameter",L,j):$e("hash","textbooks",L,j,{level:R,subroute:F})}if(_==="jlpt-lesson"){if(j.length!==2)return _e("unknown-route",L,j);const R=Ql(j[1]);return R?$e("hash","jlpt-lesson",L,j,{level:R}):_e("invalid-parameter",L,j)}if(_==="kanji"){if(j.length!==2)return _e("unknown-route",L,j);const R=j[1];return jL(R)?$e("hash","kanji",L,j,{cardId:R}):_e("invalid-parameter",L,j)}if(_==="learn"){if(j.length===1)return $e("hash","learn",L,j,{view:"map"});if(j.length!==3)return _e("unknown-route",L,j);const R=j[1].toLowerCase(),F=j[2];return!["lesson","legacy"].includes(R)||!Vl(F)?_e("invalid-parameter",L,j):$e("hash","learn",L,j,{view:R,targetId:F})}return vL.has(_)?j.length!==1?_e("unknown-route",L,j):$e("hash",_,L,j):(lm(_),_e("unknown-route",L,j))}function SL(y){return String(y||"/").split(/[?#]/,1)[0]||"/"}function NL(y){const k=SL(y),C=cm(k);if(!C.ok)return{ok:!1,raw:k};const L=C.value.replace(/\/{2,}/g,"/"),j=L.startsWith("/")?L:`/${L}`,_=j===""?"/":j;return{ok:!0,path:_,segments:tc(_)}}function LL(y){return $L.get(y.toLowerCase())||null}function Hs(y,k="/"){return`/${ec.locales[y].urlSegment}${k.startsWith("/")?k:`/${k}`}`}function dm(y){const k=NL(y);if(!k.ok)return be("pathname","invalid-parameter",k.raw,[],null);const{path:C,segments:L}=k,j=C;if(C==="/"||/^\/index\.html$/i.test(C))return $e("pathname","home",j,L,{},qs,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(C))return $e("pathname","home",j,L,{},qs,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(C))return $e("pathname","download",j,L,{},qs,{kind:"download",canonicalPath:"/download/"});if(!L.length)return $e("pathname","home",j,L,{},qs,{kind:"app-shell",canonicalPath:"/"});const _=LL(L[0]);if(!_){const F=yL.test(L[0])?"unknown-locale":"unknown-route";return be("pathname",F,j,L,null)}if(L.length===1)return $e("pathname","home",j,L,{},_,{kind:"localized-home",canonicalPath:Hs(_,"/")});const R=L[1].toLowerCase();if(R==="download"&&L.length===2)return $e("pathname","download",j,L,{},_,{kind:"download",canonicalPath:Hs(_,"/download/")});if(R==="textbooks"){if(L.length===2)return $e("pathname","textbooks",j,L,{},_,{kind:"textbooks",canonicalPath:Hs(_,"/textbooks/")});if(L.length===3){const F=L[2].toLowerCase();return om.test(F)?$e("pathname","textbooks",j,L,{level:F.toUpperCase()},_,{kind:"textbook-level",canonicalPath:Hs(_,`/textbooks/${F}/`)}):be("pathname","invalid-parameter",j,L,_)}return be("pathname","unknown-route",j,L,_)}if(R==="kanji"){if(L.length===2)return $e("pathname","dictionary",j,L,{},_,{kind:"kanji-hub",canonicalPath:Hs(_,"/kanji/")});if(L.length===3){const F=L[2].toLowerCase();return kL.test(F)?$e("pathname","kanji",j,L,{slug:F},_,{kind:"kanji-page",canonicalPath:Hs(_,`/kanji/${F}/`)}):be("pathname","invalid-parameter",j,L,_)}return be("pathname","unknown-route",j,L,_)}return be("pathname","unknown-route",j,L,_)}function Zg(y){const k=dm(y);return k.status==="valid"&&(k.kind==="app-shell"||k.kind==="legacy-index")}function xL(y){const k=()=>y(Kn(window.location.hash));return window.addEventListener("hashchange",k),()=>window.removeEventListener("hashchange",k)}function CL(){let y=0,k=null;return{begin(C){k?.abort(),k=new AbortController;const L=++y,j=k;return{route:C,token:L,signal:j.signal,isCurrent:()=>y===L&&!j.signal.aborted}},abort(){k?.abort()}}}const na=[5,60,12*60,24*60,2*24*60,4*24*60],Yl={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function Ri(y){const k=y&&typeof y=="object"?y:{},C=TL(k.state??k.stage),L=IL(k.dueAt??k.nextReview),j=En(k.reviewCount??k.reviews,0),_=En(k.correct,0),R=En(k.wrong,0),F={...k,state:C,dueAt:L,reviewCount:j,intervalDays:En(k.intervalDays,0),easeFactor:En(k.easeFactor,2.5),srsStep:En(k.srsStep,C==="New"?-1:0),lapses:En(k.lapses,0),correct:_,wrong:R,successRate:En(k.successRate,_+R?Math.round(_/(_+R)*100):0),history:Array.isArray(k.history)?k.history.slice(-120):[]};return delete F.nextReview,delete F.reviews,delete F.stage,delete F.lastReview,F}function ge(y,k,C=k,L=new Date){const j=Ri(y),_=AL(j,k),R={...j,history:[...j.history]};let F=j.srsStep,Me=j.easeFactor;_==="again"?(F=0,Me=Math.max(1.3,Me-.2),R.state="Learning",R.wrong+=1,j.state!=="New"&&(R.lapses+=1)):_==="hard"?(F=Math.max(1,F),Me=Math.max(1.3,Me-.15),R.correct+=1):_==="easy"?(F=F<0?2:F+2,Me=Math.min(3.2,Me+.15),R.correct+=1):(F=F<0?0:F+1,R.correct+=1);const je=RL(F)/1440;return _!=="again"&&(R.state=je<1?"Learning":"Review"),R.correct>=8&&je>=30&&(R.state="Mastered"),R.srsStep=F,R.easeFactor=em(Me,2),R.intervalDays=em(je,6),R.dueAt=new Date(L.getTime()+je*864e5).toISOString(),R.reviewCount+=1,R.successRate=Math.round(R.correct/Math.max(R.correct+R.wrong,1)*100),R.lastReviewedAt=L.toISOString(),R.lastRating=Yl[C]||Yl[_],R.lastDecision=Yl[_],R.history=[...R.history,{at:L.toISOString(),rating:R.lastRating,decision:R.lastDecision,from:j.state,to:R.state,intervalDays:je,srsStep:F}].slice(-120),R}function AL(y,k){return k==="again"||k==="forgot"?"again":k!=="remember"?k:y.state==="New"?"good":y.state==="Learning"?y.successRate>=70||y.correct>=2?"good":"hard":y.successRate>=88&&y.correct>=5&&y.lapses<=1?"easy":y.successRate<70||y.lapses>Math.max(1,Math.floor(y.correct/3))?"hard":"good"}function TL(y){const k=String(y||"new").toLowerCase();return k.includes("master")?"Mastered":k.includes("learn")?"Learning":k.includes("review")?"Review":"New"}function IL(y){return typeof y!="string"||!Number.isFinite(Date.parse(y))?null:new Date(y).toISOString()}function En(y,k){const C=Number(y);return Number.isFinite(C)&&C>=0?C:k}function em(y,k){const C=10**k;return Math.round(y*C)/C}function RL(y){return y<na.length?na[Math.max(0,y)]:na[na.length-1]*2**(y-(na.length-1))}const um="flashKanji.progress.v2",_L="flashKanji.progress.v1";function ML(y=localStorage){const k=y.getItem(um)||y.getItem(_L);if(!k)return null;try{const C=JSON.parse(k);if(!C||typeof C!="object")return null;const L=C;return L.progress&&typeof L.progress=="object"?L.progress:L}catch(C){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",C),null}}function PL(y){return!y||typeof y!="object"?{}:Object.fromEntries(Object.entries(y).map(([k,C])=>[k,Ri(C)]))}function EL(y,k=localStorage){try{return k.setItem(um,JSON.stringify(y)),!0}catch(C){return console.warn("Flash Kanji could not save LocalStorage progress.",C),!1}}const KL=/[\/／,、;；\s]+/u,FL=/[\u30a1-\u30f6]/g,DL=/[()[\]{}.\-‐-―]/gu;function OL(y){return String(y||"").normalize("NFKC").replace(FL,k=>String.fromCharCode(k.charCodeAt(0)-96))}function pm(y){return(Array.isArray(y)?y.join(" / "):String(y||"")).split(KL).map(C=>OL(C).replace(DL,"").trim()).filter(Boolean)}function BL(y){if(!y)return[];const k=[...tm("onyomi","On",y.onyomi),...tm("kunyomi","Kun",y.kunyomi)],C=new Set,L=k.filter(R=>{const F=R.kana;return!F||C.has(F)?!1:(C.add(F),!0)});if(L.length)return L;const j=pm(y.hiragana)[0];if(j)return[{kind:"hiragana",kana:j,label:"Kana"}];const _=String(y.kanji||"").trim();return _?[{kind:"kanji",kana:_,label:"Kanji"}]:[]}function UL(y,k=-1,C=""){const L=C&&C!=="cycle"?y.filter(_=>_.kind===C):y;if(!L.length)return{item:null,cursor:-1};const j=(Number(k)+1)%L.length;return{item:L[j],cursor:j}}function JL(y,k={}){const C=String(y||"").trim(),L=typeof window<"u"?window:void 0,j=k.synth||L?.speechSynthesis,_=k.Utterance||L?.SpeechSynthesisUtterance;if(!C||!j||!_)return!1;j.cancel();const R=new _(C);R.lang="ja-JP",R.rate=k.rate??.92,R.voice=zL(j),R.onend=()=>k.onEnd?.(),R.onerror=F=>k.onError?.(F);try{return j.speak(R),!0}catch(F){return k.onError?.(F),!1}}function tm(y,k,C){return pm(C).map(L=>({kind:y,kana:L,label:k}))}function zL(y){const k=typeof y.getVoices=="function"?y.getVoices():[];return k.find(C=>/^ja[-_]?JP$/iu.test(C.lang))||k.find(C=>/^ja/iu.test(C.lang))||null}const gm=109492033,GL=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],HL={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},qL={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},WL=/^[\p{Letter}\p{Number}_-]{1,96}$/u,XL=/^[a-z][a-z0-9_]{1,64}$/,QL=/^[a-z][a-z0-9_-]{0,48}$/i,VL=/^N[1-5]$/i,nm=new Set;let aa="";function mm(y,k={}){if(!y||y.status==="not-found")return"/app/not-found";const C=y.params||{},L=String(y.route||k.route||"home");if(L==="learn"){const j=Ct(C.view||k.activeLearnView||"map").toLowerCase(),_=Ct(C.targetId||k.activeLearnNodeId||k.activeLearnLegacyLessonId);return j==="lesson"&&_?`/app/learn/lesson/${_}`:j==="legacy"&&_?`/app/learn/legacy/${_}`:"/app/learn"}if(L==="textbooks"){const j=ia(C.level||k.activeTextbookLevel),_=Ct(C.subroute||k.activeTextbookSubroute);return j?_?`/app/textbooks/${j}/${_}`:`/app/textbooks/${j}`:"/app/textbooks"}if(L==="kanji"){const j=Ct(C.cardId||k.kanjiPageId||C.slug);return j?`/app/kanji/${j}`:"/app/kanji"}if(L==="jlpt-lesson"){const j=ia(C.level||k.activeJlptLesson);return j?`/app/jlpt-lesson/${j}`:"/app/jlpt-lesson"}return HL[L]||"/app/not-found"}function fm(y,k={}){const C=n1(k),L=qL[C];if(!y||y.status==="not-found")return L["not-found"];const j=y.params||{},_=String(y.route||k.route||"home");if(_==="learn"){const R=Ct(j.view||k.activeLearnView||"map").toLowerCase(),F=Ct(j.targetId||k.activeLearnNodeId||k.activeLearnLegacyLessonId);return R==="lesson"&&F?C==="ru"?`Flash Kanji — Урок маршрута ${F}`:`Flash Kanji — Path lesson ${F}`:R==="legacy"&&F?C==="ru"?`Flash Kanji — Урок ${F}`:`Flash Kanji — Lesson ${F}`:L.learn}if(_==="textbooks"){const R=ia(j.level||k.activeTextbookLevel).toUpperCase(),F=Ct(j.subroute||k.activeTextbookSubroute);return R?F?["final","final-test"].includes(F)?C==="ru"?`Flash Kanji — JLPT ${R} · Финальный тест`:`Flash Kanji — JLPT ${R} · Final test`:C==="ru"?`Flash Kanji — JLPT ${R} · Урок ${sm(F)}`:`Flash Kanji — JLPT ${R} · Lesson ${sm(F)}`:C==="ru"?`Flash Kanji — Учебник JLPT ${R}`:`Flash Kanji — JLPT ${R} textbook`:C==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(_==="kanji"){const R=Ct(j.cardId||k.kanjiPageId||j.slug),F=r1(k,R)||R;return C==="ru"?`Flash Kanji — Кандзи ${F}`:`Flash Kanji — Kanji ${F}`}if(_==="jlpt-lesson"){const R=ia(j.level||k.activeJlptLesson).toUpperCase();return R?C==="ru"?`Flash Kanji — JLPT ${R}`:`Flash Kanji — JLPT ${R}`:L.learn}return L[_]||L["not-found"]}function YL(y,k={}){const C=mm(y,k),L=fm(y,k);return aa=C,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=C),Ht("prime",{virtualPath:C,title:L}),{sent:!1,virtualPath:C,title:L,reason:"duplicate"}}function ZL(y,k={}){const C=mm(y,k),L=fm(y,k);if(C===aa)return Ht("skip-pageview-duplicate",{virtualPath:C,title:L,previousVirtualPath:aa}),{sent:!1,virtualPath:C,title:L,reason:"duplicate"};const j=aa||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:C,title:L,referer:j,reason:"no-window"}:typeof window.ym!="function"?(Ht("skip-pageview-missing-ym",{virtualPath:C,title:L,previousVirtualPath:j}),{sent:!1,virtualPath:C,title:L,referer:j,reason:"missing-ym"}):(window.ym(gm,"hit",C,{title:L,...j?{referer:j}:{}}),aa=C,Ht("pageview",{virtualPath:C,title:L,previousVirtualPath:j}),{sent:!0,virtualPath:C,title:L,referer:j})}catch(_){return Ht("pageview-error",{virtualPath:C,title:L,previousVirtualPath:j,error:_ instanceof Error?_.message:String(_)}),{sent:!1,virtualPath:C,title:L,referer:j,reason:"error"}}}function e1(y,k={},C={}){const L=t1(y);if(!L)return Ht("skip-goal-invalid",{goal:y}),!1;const j=C.dedupeKey?`${L}:${C.dedupeKey}`:"";if(j&&nm.has(j))return Ht("skip-goal-duplicate",{goal:L,params:Ii(k),dedupeKey:j}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return Ht("skip-goal-missing-ym",{goal:L,params:Ii(k)}),!1;const _=Ii(k);return window.ym(gm,"reachGoal",L,_),j&&nm.add(j),Ht("goal",{goal:L,params:_}),!0}catch(_){return Ht("goal-error",{goal:L,params:Ii(k),error:_ instanceof Error?_.message:String(_)}),!1}}function t1(y){const k=String(y||"").trim().toLowerCase();return XL.test(k)&&(GL.includes(k)||/^social_[a-z0-9_]+_opened$/.test(k))?k:""}function Ii(y){const k={},C=Ct(y.route).toLowerCase(),L=ia(y.level).toUpperCase(),j=Ct(y.lessonId),_=Ct(y.cardId),R=s1(y.source);return C&&(k.route=C),L&&(k.level=L),j&&(k.lessonId=j),_&&(k.cardId=_),R&&(k.source=R),k}function n1(y){return String(y.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function ia(y){const k=String(y||"").trim().toUpperCase();return VL.test(k)?k.toLowerCase():""}function Ct(y){const k=String(y||"").trim();return WL.test(k)?encodeURIComponent(k):""}function s1(y){const k=String(y||"").trim();return QL.test(k)?k.toLowerCase():""}function sm(y){const k=y.match(/-(\d+)$/);return k?.[1]?String(Number(k[1])):y}function r1(y,k){if(!k||!Array.isArray(y.cards))return"";const C=a1(k),L=y.cards.find(j=>String(j.id||"")===C||String(j.slug||"")===C);return String(L?.kanji||"").trim()}function a1(y){try{return decodeURIComponent(y)}catch{return y}}function Ht(y,k){i1()&&console.debug(`[Flash Kanji Metrika] ${y}`,k)}function i1(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const k=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(k).get("debugMetrika")==="1"}catch{return!1}}const _i="flashKanji.hasVisited",Mi="flashKanji.changelog.lastSeenVersion",hm=new Set;function o1(y){if(!y||typeof y!="object")return null;const k=y,C=String(k.currentVersion||"").trim();if(!C)return null;const L=Array.isArray(k.entries)?k.entries.map(d1).filter(j=>!!j):[];return L.length?{currentVersion:C,entries:L}:null}function l1(y,k,C,L={}){const j=y?.currentVersion||"",_=y?.entries.find(Me=>Me.version===j)||y?.entries[0]||null;return!y||!j||!_||hm.has(j)?{currentVersion:j,shouldShow:!1,shouldMarkHandled:!1,entry:null}:am(C,Mi)===j?{currentVersion:j,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(L.hadPriorVisit||am(C,_i)==="true"||L.useProgressSignals!==!1&&c1(k))?{currentVersion:j,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:j,shouldShow:!0,shouldMarkHandled:!1,entry:_}}function rm(y,k){const C=String(y||"").trim();C&&(hm.add(C),im(k,_i,"true"),im(k,Mi,C))}function c1(y){if(!y||typeof y!="object")return!1;const k=y;return!!(ra(k.appOpens)>0||sa(k.lessonCompletions)>0||sa(k.cards)>0||sa(k.seenKanji)>0||sa(k.daily)>0||sa(k.favorites)>0||g1(k.transactions)>0||ra(k.totalMoonFragmentsEarned)>0||ra(k.secrets?.evaClicks)>0||k.secrets?.nightVisit||ra(k.visits?.streak)>0||ra(k.visits?.bestStreak)>0)}function d1(y){if(!y||typeof y!="object")return null;const k=y,C=String(k.version||"").trim();return C?{version:C,date:String(k.date||"").trim(),title:u1(k.title),items:p1(k.items)}:null}function u1(y){const k=y&&typeof y=="object"?y:{};return{ru:String(k.ru||k.en||"").trim(),en:String(k.en||k.ru||"").trim()}}function p1(y){const k=y&&typeof y=="object"?y:{},C=Array.isArray(k.ru)?k.ru.map(j=>String(j||"").trim()).filter(Boolean):[],L=Array.isArray(k.en)?k.en.map(j=>String(j||"").trim()).filter(Boolean):[];return{ru:C.length?C:L,en:L.length?L:C}}function am(y,k){try{return y?.getItem(k)||""}catch{return""}}function im(y,k,C){try{y?.setItem(k,C)}catch{}}function sa(y){return y&&typeof y=="object"&&!Array.isArray(y)?Object.keys(y).length:0}function g1(y){return Array.isArray(y)?y.length:0}function ra(y){const k=Number(y||0);return Number.isFinite(k)?k:0}(()=>{const y="flashKanji.pwaInstallPrompt.v2",k="flashKanji.pwaInstallPrompt.v1",C="flashKanji.notificationPrompt.v1",L="flashkanji_customization",j="flashkanji_eva_state_v2",R="local-1786029657610",Me=`flashKanji.hiddenMascotSpeeches:${R}`,je="moonfarm",At="flashKanji.appBuild.v1",Ws="flashKanji.pwaCacheReset.v1",oa="flashKanji.bootRecovery.v1",ft={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},qt="aleksey.lebedev606@gmail.com",ls="Flash Kanji bug report",vm="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",wm="downloads/flash-kanji-android.apk",bm="assets/download/android-app-screenshot.png",la="flashKanji.forcePwaCacheReset.v1",B={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},km={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},ym={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},De=["N5","N4","N3","N2","N1"],ae=new Set,$m={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},nc={xp:12,coins:2},sc="flashKanjiOnboardingCompleted.v3",rc="flashKanjiOnboardingCompleted",ac="flashKanjiOnboardingAudience.v1",jm=850,ic=450,Sm=420,Xs=72,Nm=96,oc=1,lc="N5",Wt="map",Tt="lesson",Xt="legacy",Se="intro-kanji",cs="review-due",ds="n5-checkpoint",Lm=[Se,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",ds],xm={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},Cm=new Set(["lesson-1","lesson-2","bulk-n5-01"]),cc=7e3,dc=8e3,Am=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),ie=ea(),r={route:ie.route,routeMatch:ie,routeNotFound:ie.status==="not-found"?ie:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:ie.status==="valid"&&ie.params.level||null,activeTextbookLevel:ie.status==="valid"&&ie.route==="textbooks"&&ie.params.level||null,activeTextbookSubroute:ie.status==="valid"&&ie.route==="textbooks"&&ie.params.subroute||null,activeLearnView:ie.status==="valid"&&ie.route==="learn"&&ie.params.view||Wt,activeLearnNodeId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===Tt&&ie.params.targetId||null,activeLearnLegacyLessonId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===Xt&&ie.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:ie.status==="valid"&&ie.route==="kanji"&&ie.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:Xs,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Ni(),notificationPrompt:Vr(),notificationPromptVisible:!1,changelog:null,changelogModal:null,deferredDataLoaded:!1,deferredDataLoading:!1};r.route==="textbooks"&&!r.routeNotFound&&nt(Xg(RN(),_N()));const Tm=CL();let ca=null,It=null,uc="",pc=new Map,Qs=0,gc=0,us=0,Fn=0,Pi=!1,Dn=0,Ei=!1,On=0,da=!1,mc=!1,ua=0,fc=!1,pa=!1,ga=null,Bn=null,hc=0,Ki=0,ps=0,Vs=0,Fi=null,ue=null,He=null,xe=null,Rt=-1,ht=!1,ke="step",_t=null,vc=null,Im=null,Rm=null,Ys=null,Zs=0,wc=0,er=null,ma=null,tr=null;const fa=new Map;let Di=0,Oi=0,Bi=Math.floor(Date.now()/6e4),bc=0,ha="",Ui=[];const Ji=new Map,Un=new Map,zi=new Set,Gi=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Y={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Ce=(e,t=document)=>t.querySelector(e),Hi=(e,t=document)=>Array.from(t.querySelectorAll(e)),ln=Ce("#app"),_m=document.title||"Flash Kanji",kc=Ce("#progressImport");document.addEventListener("click",vh),document.addEventListener("pointerdown",wh),document.addEventListener("input",gd),document.addEventListener("change",gd),document.addEventListener("keydown",$h),window.flashKanjiFarmMoon=(e=5e3)=>md(e),window.startFlashKanjiOnboarding=$o,kc.addEventListener("change",O0),window.addEventListener("beforeinstallprompt",gN),window.addEventListener("appinstalled",Gl),window.addEventListener("scroll",So,{passive:!0}),window.addEventListener("resize",So),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||Jd(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||xi("usage"),!document.hidden&&r.route==="eva-room"&&ur("return")&&(x(),T()),document.hidden&&lo()}),window.addEventListener("pagehide",lo),window.addEventListener("beforeunload",lo),xL(()=>{const e=Ti(ea()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,a=t==="textbooks"&&n.level||null,o=t==="textbooks"&&n.subroute||null,c=t==="jlpt-lesson"&&n.level||null,l=t==="learn"&&n.view||Wt,d=t==="learn"&&l===Tt&&n.targetId||null,u=t==="learn"&&l===Xt&&n.targetId||null,m=Qg(r.routeNotFound),h=e.status==="not-found"?Qg(e):"";if(t!==r.route||t==="kanji"&&s!==r.kanjiPageId||t==="textbooks"&&a!==r.activeTextbookLevel||t==="textbooks"&&o!==r.activeTextbookSubroute||t==="jlpt-lesson"&&c!==r.activeJlptLesson||t==="learn"&&l!==r.activeLearnView||t==="learn"&&d!==r.activeLearnNodeId||t==="learn"&&u!==r.activeLearnLegacyLessonId||m!==h){const v=r.route;r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,v!==t&&(v==="review"||t==="review")&&(r.reviewSession=null),r.kanjiPageId=t==="kanji"?s:null,r.activeTextbookLevel=t==="textbooks"?a:null,r.activeTextbookSubroute=t==="textbooks"?o:null,r.activeJlptLesson=t==="jlpt-lesson"?c:r.activeJlptLesson,r.activeLearnView=t==="learn"?l:Wt,r.activeLearnNodeId=t==="learn"?d:null,r.activeLearnLegacyLessonId=t==="learn"?u:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,t!=="eva-room"&&(r.evaRoomShopOpen=!1),Nt(),Ia(),Oe(),nr(t)&&va({route:t,delay:0}),t==="eva-room"&&Le("room_opened")}}),Mm();async function Mm(){if(!await Gm()&&!await zm()){yc(!0),ln.innerHTML.trim()?ln.setAttribute("aria-busy","true"):ln.innerHTML=Og(),r.progress=Kf(),Us(),Kl(),rN(),Fl(),on();try{const[e,t,n,s,a,o,c,l]=await Promise.all([$c({initialOnly:!0}),st(B.i18n),st(B.dialogues),st(B.rewards,Dm),st(B.achievements,()=>({achievements:[],categories:[]})),st(B.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),st(B.jlptLessons,()=>({items:[]})),st(B.changelog,()=>null)]),d=Kc(a,s.achievements||[]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.dialogues=n,r.rewards=s,r.achievements=d.items,r.achievementCategories=d.categories,r.jlptCatalog=rf(o),r.jlptLessons=sf(c),r.rewards.achievements=r.achievements;const u=Rh(r.progress);rr(),Mh(),wa(),Uf(),on(),vN(),lS(),_h(u),uS(),X(),ta(Ti(ea()));const m=Pm(l,u);x(),T(),m&&Em(),Bm(),va({route:r.route,delay:nr(r.route)?0:cc}),uN(),yo(),zv(),_v(),zg(),ql();try{sessionStorage.removeItem(oa)}catch(h){console.warn("Could not clear boot recovery marker after successful startup.",h)}}catch(e){console.error(e),await dN(e)||(ln.innerHTML=oN(e))}finally{yc(!1)}}}function yc(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),ln&&ln.setAttribute("aria-busy",e?"true":"false")}function Pm(e,t=!1){mc=!!t,r.changelogModal=null;const n=o1(e);if(!n)return!1;r.changelog=n;const s=l1(n,r.progress,qi(),{hadPriorVisit:mc,useProgressSignals:!1});return s.shouldMarkHandled?(rm(s.currentVersion,qi()),!1):!s.shouldShow||!s.entry?!1:(r.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function qi(){try{return window.localStorage}catch{return null}}function Em(){ua&&window.clearTimeout(ua),ua=window.setTimeout(()=>{ua=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function Wi(){const e=r.changelogModal?.version||r.changelog?.currentVersion||"";rm(e,qi()),r.changelogModal=null,T()}function Km(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");a.id=t,a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function Fm(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function Dm(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function Om(){return window.Chart?Promise.resolve():(vc||(vc=Km("vendor/chart.umd.min.js","flash-kanji-chartjs")),vc)}function Bm(){window.setTimeout(()=>{Im||(Im=Yg(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{Us(),G0()}).catch(e=>console.warn("UX sound module failed to load.",e))),Rm||(Rm=Yg(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function nr(e=r.route){return Am.has(e)}function va({route:e=r.route,delay:t=cc,force:n=!1}={}){if(r.deferredDataLoaded||r.deferredDataLoading||Ys||!n&&!nr(e))return;Zs&&(window.clearTimeout(Zs),Zs=0);const s=++wc,a=()=>{s===wc&&(!n&&!nr(r.route)||Um().catch(o=>console.warn("Deferred app data failed to load.",o)))};Zs=window.setTimeout(()=>{Zs=0,Fm(a,{timeout:1800})},Math.max(0,Number(t)||0))}async function Um({renderAfter:e=!0}={}){if(!r.deferredDataLoaded)return Ys||(r.deferredDataLoading=!0,Ys=(async()=>{const[t,n,s]=await Promise.all([$c(),jc([["kanjiMeta",B.kanjiMeta],["kanjiHints",B.kanjiHints],["kanjiTranslations",B.kanjiTranslations],["kanjiStrokes",B.kanjiStrokes],["kanjiPageSources",B.kanjiPageSources],["lessonTranslations",B.lessonTranslations],["vocabulary",B.vocabulary],["sentences",B.sentences],["jlptPracticeLessons",B.jlptPracticeLessons],["n5Meta",B.n5Meta],["n5Lessons",B.n5Lessons],["n5Kanji",B.n5Kanji],["n5Exercises",B.n5Exercises],["n5FinalTest",B.n5FinalTest],["n4Meta",B.n4Meta],["n4Lessons",B.n4Lessons],["n4Kanji",B.n4Kanji],["n4Grammar",B.n4Grammar],["n4Exercises",B.n4Exercises],["n4Reading",B.n4Reading],["n4Listening",B.n4Listening],["n4FinalTest",B.n4FinalTest],["n3Meta",B.n3Meta],["n3Lessons",B.n3Lessons],["n3Kanji",B.n3Kanji],["n3Grammar",B.n3Grammar],["n3Exercises",B.n3Exercises],["n3Reading",B.n3Reading],["n3Listening",B.n3Listening],["n3FinalTest",B.n3FinalTest],["n2Meta",B.n2Meta],["n2Lessons",B.n2Lessons],["n2Kanji",B.n2Kanji],["n2Grammar",B.n2Grammar],["n2Exercises",B.n2Exercises],["n2Reading",B.n2Reading],["n2Listening",B.n2Listening],["n2FinalTest",B.n2FinalTest],["n1Meta",B.n1Meta],["n1Lessons",B.n1Lessons],["n1Kanji",B.n1Kanji],["n1Grammar",B.n1Grammar],["n1Exercises",B.n1Exercises],["n1Reading",B.n1Reading],["n1Listening",B.n1Listening],["n1FinalTest",B.n1FinalTest],["jlptReadingTranslations",B.jlptReadingTranslations],["n5Reading",B.n5Reading],["monetization",B.monetization]]),qm(B.jlptReadingMarkdown)]),{kanjiMeta:a,kanjiHints:o,kanjiTranslations:c,kanjiStrokes:l,kanjiPageSources:d,lessonTranslations:u,vocabulary:m,sentences:h,jlptPracticeLessons:v,n5Meta:w,n5Lessons:N,n5Kanji:S,n5Exercises:A,n5FinalTest:b,n4Meta:$,n4Lessons:U,n4Kanji:J,n4Grammar:os,n4Exercises:O,n4Reading:EN,n4Listening:KN,n4FinalTest:FN,n3Meta:DN,n3Lessons:ON,n3Kanji:BN,n3Grammar:UN,n3Exercises:JN,n3Reading:zN,n3Listening:GN,n3FinalTest:HN,n2Meta:qN,n2Lessons:WN,n2Kanji:XN,n2Grammar:QN,n2Exercises:VN,n2Reading:YN,n2Listening:ZN,n2FinalTest:eL,n1Meta:tL,n1Lessons:nL,n1Kanji:sL,n1Grammar:rL,n1Exercises:aL,n1Reading:iL,n1Listening:oL,n1FinalTest:lL,jlptReadingTranslations:cL,n5Reading:dL,monetization:uL}=n;r.lessons=t.lessons,r.cards=t.cards,r.jlptPracticeLessons=af(v),r.jlptReadingMarkdown=s||"",r.jlptReadingByLevel=Wm(s||""),r.n5Meta=of(w),r.n5Textbook=Lc(N),r.n5KanjiCatalog=lf(S),cf(),r.n5Exercises=df(A),r.n5FinalTest=uf(b),r.n5Reading=Ef(dL),r.n4Meta=pf($),r.n4Textbook=gf(U),r.n4KanjiCatalog=mf(J),r.n4Grammar=hf(os),r.n4Exercises=vf(O),r.n4Reading=xc(EN),r.n4Listening=xc(KN),r.n4FinalTest=wf(FN),ff(),r.n3Meta=bf(DN),r.n3Textbook=kf(ON),r.n3KanjiCatalog=yf(BN),r.n3Grammar=jf(UN),r.n3Exercises=Sf(JN),r.n3Reading=Cc(zN),r.n3Listening=Cc(GN),r.n3FinalTest=Nf(HN),$f(),r.n2Meta=Lf(qN),r.n2Textbook=xf(WN),r.n2KanjiCatalog=Cf(XN),r.n2Grammar=Tf(QN),r.n2Exercises=If(VN),r.n2Reading=Ac(YN),r.n2Listening=Ac(ZN),r.n2FinalTest=Rf(eL),Af(),r.n1Meta=Tc(tL),r.n1Textbook=Ic(nL),r.n1KanjiCatalog=Rc(sL),r.n1Grammar=Mc(rL),r.n1Exercises=Pc(aL),r.n1Reading=Sa(iL),r.n1Listening=Sa(oL),r.n1FinalTest=Ec(lL),_c(),r.kanjiMeta=a.items||{},r.kanjiHints=o.items||{},r.kanjiTranslations=c.items||{},r.kanjiStrokes=Zm(l),r.kanjiPageSources=d.items||{},r.lessonTranslations=u.items||{},r.vocabulary=m.items||[],r.sentenceExercises=h.items||[],r.jlptReadingTranslations=Vm(cL),r.monetization=uL,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(rr(),X(),x()),ta(Ti(ea())),e&&T()})().finally(()=>{r.deferredDataLoading=!1}),Ys)}async function Jm({renderAfter:e=!0}={}){return r.n1Textbook?.items?.length&&r.n1KanjiCatalog?.length?r.n1Textbook:er||(ma=null,er=jc([["n1Meta",B.n1Meta],["n1Lessons",B.n1Lessons],["n1Kanji",B.n1Kanji],["n1Grammar",B.n1Grammar],["n1Exercises",B.n1Exercises],["n1Reading",B.n1Reading],["n1Listening",B.n1Listening],["n1FinalTest",B.n1FinalTest]],4).then(t=>(r.n1Meta=Tc(t.n1Meta),r.n1Textbook=Ic(t.n1Lessons),r.n1KanjiCatalog=Rc(t.n1Kanji),r.n1Grammar=Mc(t.n1Grammar),r.n1Exercises=Pc(t.n1Exercises),r.n1Reading=Sa(t.n1Reading),r.n1Listening=Sa(t.n1Listening),r.n1FinalTest=Ec(t.n1FinalTest),_c(),r.progress&&(rr(),x()),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&T(),r.n1Textbook)).catch(t=>{throw ma=t,console.warn("N1 textbook data failed to load.",t),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&T(),t}).finally(()=>{er=null}),er)}async function zm(){try{const e=localStorage.getItem(At);if(localStorage.setItem(At,R),!e||e===R)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function Gm(){try{const e=localStorage.getItem(la),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===R||(localStorage.setItem(la,"done"),localStorage.setItem("flashKanji.lastForcedBuild",R)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function $c({initialOnly:e=!1}={}){const t=await st(B.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Hm(n):n,a=await Sc(s,async d=>{try{return{manifestLesson:d,payload:await st(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),c=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(h=>Ym(h,m.lesson.id)):[]}}),l=c.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:c,cards:l}}function Hm(e){return e.filter((t,n)=>Cm.has(t.id)||n<2)}async function jc(e,t=3){const n=await Sc(e,async([s,a])=>[s,await st(a)],t);return Object.fromEntries(n)}async function Sc(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const c=e.slice(o,o+a);s.push(...await Promise.all(c.map(t))),o+a<e.length&&await new Promise(l=>window.setTimeout(l,0))}return s}async function st(e,t=null){const n=Nc(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),dc):0;try{const l=await fetch(a,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${a}`);continue}const d=await l.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${a}. Trying fallback paths.`,u)}}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function qm(e,t=""){const n=Nc(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),dc):0;try{const l=await fetch(a,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${a}`);continue}return await l.text()}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function Wm(e){const t=Object.fromEntries(De.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",c=[],l=[];const d=()=>{!a||!s||(a.text=Xm(c.join(`
`)),a.questions=l.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,c=[],l=[],o="idle")},u=m=>{const h=String(m||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const m of n){const h=String(m??""),v=h.trim(),w=v.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(w){d(),s=w[1].toUpperCase();continue}const N=v.match(/^##\s*(N[1-5])\s*(.+)$/i);if(N){d(),s=N[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:Qm(N[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(v)&&!w&&!N){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(v)){o="questions";continue}if(o==="code"){/^```/.test(v)?o="body":c.push(h);continue}if(/^```/.test(v)){o="code";continue}if(o==="questions"){const A=v.match(/^[-*]\s+(.*)$/),b=v.match(/^\d+\.\s+(.*)$/);if(A){l.push(A[1]);continue}if(b){l.push(b[1]);continue}if(!v||/^---+$/.test(v))continue;l.push(v);continue}const S=v.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(S){const A=u(S[1]);a[A]=S[2].trim()}}return d(),t}function Xm(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function Qm(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Vm(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function Nc(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Ym(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Zm(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function Jn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function ef(){try{const e=localStorage.getItem(L);if(!e)return Jn();const t=JSON.parse(e),n=Jn();return{owned:Array.isArray(t.owned)?t.owned.map(String):n.owned,selected:{...n.selected,...t&&t.selected||{}},seen:Array.isArray(t.seen)?t.seen.map(String):n.seen,updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),Jn()}}function gs(){if(!r.customization)return!1;if(da)return!0;da=!0;const e=()=>{On=0,da=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(L,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?On=window.requestIdleCallback(e,{timeout:1200}):On=window.setTimeout(e,160),!0}function tf(){if(!r.customization)return!1;da=!1,On&&("cancelIdleCallback"in window?window.cancelIdleCallback(On):window.clearTimeout(On),On=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(L,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function wa(){const e=ef(),t=new Set;(e.owned||[]).forEach(s=>{const a=me(s)||zn(s);a&&t.add(a.id)}),rt().forEach(s=>{(s.defaultOwned||s.price===0)&&t.add(s.id)}),(r.progress.unlockedBackgrounds||[]).forEach(s=>{const a=me(s)||zn(s);a&&t.add(a.id)}),(r.progress.unlockedEvaSprites||[]).forEach(s=>{const a=Gn(s);a&&t.add(a.id),r.progress.shop?.owned?.includes(`eva_sprite:${s}`)&&a&&t.add(a.id)}),(r.progress.shop?.owned||[]).forEach(s=>{const a=String(s),o=me(a)||zn(a);if(o&&t.add(o.id),!o&&a.startsWith("eva_sprite:")){const c=Gn(a.replace("eva_sprite:",""));c&&t.add(c.id)}});const n=nf({...Jn().selected,...e.selected||{}});r.progress.selectedEvaRoomBackground&&(n.background=Qt(r.progress.selectedEvaRoomBackground)),r.progress.selectedEvaSprite&&(n.outfit=Gn(r.progress.selectedEvaSprite)?.id||n.outfit),t.has(n.background)||(n.background="bg_study_hub"),t.has(n.outfit)||(n.outfit="outfit_default_assassin"),t.has(n.theme)||(n.theme="theme_default_dark"),n.decoration&&!t.has(n.decoration)&&(n.decoration=null),n.effect&&!t.has(n.effect)&&(n.effect=null),r.customization={owned:[...t],selected:n,seen:[...new Set([...e.seen||[],...t])],updatedAt:e.updatedAt||new Date().toISOString()},sr(),gs()}function sr(){var n;if(!r.customization||!r.progress)return;ce();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=me(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...r.progress.unlockedBackgrounds||[],...r.customization.owned.filter(s=>me(s)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...r.progress.unlockedEvaSprites||[],...r.customization.owned.map(s=>me(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=r.progress).shop||(n.shop={owned:[],equipped:{}}),r.progress.shop.owned=[...new Set([...r.progress.shop.owned||[],...r.customization.owned,...r.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function rt(){return r.customizationCatalog?.items||[]}function me(e){return rt().find(t=>t.id===e)||null}function zn(e){const t=String(e||"");return t&&rt().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function Qt(e){return(me(e)||zn(e))?.id||e||null}function nf(e={}){return{background:Qt(e.background),outfit:Qt(e.outfit),theme:Qt(e.theme),decoration:Qt(e.decoration||e.frame),effect:Qt(e.effect)}}function Gn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return rt().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function sf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function rf(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>De.indexOf(n.jlpt)-De.indexOf(s.jlpt))}}function af(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function of(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function Lc(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function lf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function cf(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),ba(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ba({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function ba(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:V(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function df(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function uf(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function pf(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function gf(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function mf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function ff(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ka(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ka({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function ka(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:V(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function hf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function vf(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function xc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function wf(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function bf(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function kf(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function yf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function $f(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ya(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ya({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function ya(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:V(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function jf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Sf(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Cc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Nf(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function Lf(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function xf(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Cf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Af(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),$a(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push($a({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function $a(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:V(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function Tf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function If(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ac(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Rf(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function Tc(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function Ic(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Rc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function _c(){if(!Array.isArray(r.n1KanjiCatalog)||!r.n1KanjiCatalog.length)return;const e=new Map(r.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ja(n,s))}),r.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ja({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))})}function ja(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:V(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function Mc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Pc(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Sa(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Ec(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function _f(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function Mf(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>V(n)):[]})):[]}function Pf(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(c=>c.kanji===s.kanji&&c.reading===s.reading)===a)}function Ef(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:V(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:Mf(a.blanks),tiles:Pf(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function Kc(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(c=>({id:String(c.id),title:c.title||{ru:c.id,en:c.id},icon:c.icon||"moon"})):[],a=n.map(c=>Xi(c)),o=new Set(s.map(c=>c.id));return a.forEach(c=>{o.has(c.category)||(o.add(c.category),s.push({id:c.category,title:{ru:c.category,en:c.category},icon:c.icon||"moon"}))}),{categories:s,items:a}}function Xi(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function Fc(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function ms(){const e=Fc();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:Vi(),jlptLessonStudy:Yi(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:eo(),n4Course:to(),n3Course:no(),n2Course:so(),n1Course:ro(),unlockedJlptLevels:De.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:Yc(),evaRelationship:io(),shop:{owned:[],equipped:{}}}}function Kf(){const e=ms();try{const t=ML();return t?Dc(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function Dc(e,t){return{...e,...t,version:3,settings:Ff(e.settings,t.settings||{}),cards:PL({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:Of(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Na(t.dailyBonusPending||null),lastOpenedJlptLesson:ze(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:y0(t.lastOpenedJlptLessons||{}),viewedReadingLevels:is(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:Gc(e.learningPath,t.learningPath||{}),jlptLessonStudy:zc(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:ao(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:Vc(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:Hc(e.n5Course,t.n5Course||{}),n4Course:qc(e.n4Course,t.n4Course||{}),n3Course:Wc(e.n3Course,t.n3Course||{}),n2Course:Xc(e.n2Course,t.n2Course||{}),n1Course:Qc(e.n1Course,t.n1Course||{}),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...De])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:ed(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:Zc(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...e.shop.owned||[],...t.shop&&t.shop.owned||[]])],equipped:{...e.shop.equipped,...t.shop&&t.shop.equipped||{}}}}}function Ff(e,t){const n={...e,...t||{}};return n.theme=Df(n.theme,e.theme||"dark"),n.themeManuallySelected=cn(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=cn(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=cn(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=cn(n.languageManuallySelected,e.languageManuallySelected===!0),n}function Df(e,t="dark"){return e==="light"||e==="dark"?e:t}function Of(e,t){const n={...e,...t||{}};return n.current=Qi(n.current,e.current||0),n.best=Qi(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=Oc(n.pendingReward),n}function Oc(e){if(!e||typeof e!="object")return null;const t=Qi(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Na(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function cn(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Qi(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Vi(){return{version:oc,currentLevel:lc,currentNodeId:Se,completedNodes:{},unlockedNodes:{[Se]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function Yi(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function Bc(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function Uc(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function Jc(e,t){const n=Bc(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:Uc(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function zc(e,t){const n=Yi(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},c=s.sessions||{};return Object.keys(o).forEach(l=>{a[l]=Jc(o[l],c[l])}),Object.keys(c).forEach(l=>{a[l]||(a[l]=Jc(null,c[l]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function Gc(e,t){return{...e,...t||{},version:oc,currentLevel:String(t?.currentLevel||e.currentLevel||lc).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||Se),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Zi(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Zi(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Tt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function eo(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function Hc(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:is(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Rr(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function to(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function qc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:is(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Rr(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function no(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Wc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:is(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Rr(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function so(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Xc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:is(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Rr(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function ro(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Qc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:is(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Rr(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function ao(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:Bf(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:La(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function La(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function Bf(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const c=Ln(o.jp||kp(o)),l=As(c);if(!l||s.has(l))return;s.add(l);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Ie(l).toString(36)}`;n.push({id:d,jp:c,hiragana:Ln(o.hiragana||o.reading||""),ru:Ln(o.ru||o.translationRu||""),en:Ln(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function Vc(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function io(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:re(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function Yc(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function Zc(e,t){return{...e,...t,warmth:de(Number(t.warmth??e.warmth),0,100),trust:de(Number(t.trust??e.trust),0,100),discipline:de(Number(t.discipline??e.discipline),0,100),curiosity:de(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function ed(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function Vt(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function Hn(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function Mt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:Vt(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function Uf(){const e=Mt();let t=null;try{const n=localStorage.getItem(j);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=Gf(e,t||zf()),Jf(),qn()}function Jf(){if(!r.evaRuntime)return;r.evaRuntime.memory=Hn(Vt(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=re(),n=e.lastSeenDate||null,s=n?Math.max(0,_n(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function zf(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function Gf(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:Hn(e.memory||Vt(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function oo(){if(!r.evaRuntime)return!1;td(),r.evaRuntime.updatedAt=new Date().toISOString(),Ei=!1,Dn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Dn):window.clearTimeout(Dn),Dn=0);try{return localStorage.setItem(j,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function qn(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return oo();if(Ei)return!0;Ei=!0;const t=()=>{Dn=0,oo()};return"requestIdleCallback"in window?Dn=window.requestIdleCallback(t,{timeout:1200}):Dn=window.setTimeout(t,160),!0}function lo(){co(),oo(),tf()}function td(){if(!r.evaRuntime||!r.progress)return;const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background||"bg_study_hub",t=rt().filter(n=>Dt(n.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],r.evaRuntime.currentBackground=e,r.evaRuntime.activeSkin=r.evaRuntime.currentSkin||r.progress.selectedEvaSprite||"idle",r.evaRuntime.activeBackground=e}function co(){return r.progress?(r.progress.level=wi(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),Pi=!1,Fn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Fn):window.clearTimeout(Fn),Fn=0),EL(r.progress)):!1}function x(e={}){if(!r.progress)return!1;if(e?.immediate)return co();if(Pi)return!0;Pi=!0;const t=()=>{Fn=0,co()};return"requestIdleCallback"in window?Fn=window.requestIdleCallback(t,{timeout:1200}):Fn=window.setTimeout(t,120),!0}function nd(e,t,{timeout:n=0}={}){const s=()=>{try{const a=t?.();a&&typeof a.then=="function"&&a.catch(o=>console.warn(`[Flash Kanji] ${e} failed.`,o))}catch(a){console.warn(`[Flash Kanji] ${e} failed.`,a)}};requestAnimationFrame(()=>window.setTimeout(s,n))}function Pt(e,t){nd(e,()=>{const n=t?.();n&&typeof n.then=="function"&&n.catch(s=>console.warn(`[Flash Kanji] ${e} failed.`,s)),x(),un()})}function Hf(e){const t=e?.dataset?.action||"",n=qf(t,e);return n?zi.has(n)?!1:(zi.add(n),requestAnimationFrame(()=>window.setTimeout(()=>zi.delete(n),0)),!0):!0}function qf(e,t){return e?e==="rate"?`rate:${r.activeCardId||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${r.activeExerciseReviewLevel||""}:${r.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function rr(){r.cards.forEach(s=>D(s.id)),r.progress.level=wi(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),JS()),ce(),dr(),fr(),Do(),Jo(),qo(),typeof qa=="function"&&qa();const e=Es(),t=[oi(Z(),"N5"),oi(W(),"N4"),oi(H(),"N3"),oi(q(),"N2"),li(Z(),"N5"),li(W(),"N4"),li(H(),"N3"),li(q(),"N2")].some(Boolean);[Z(),W(),H(),q(),typeof ee=="function"?ee():null].filter(Boolean).forEach(s=>Wf(s)),(t||e)&&x(),xa();const n=r.lessons.find(s=>Ee(s));r.activeLessonId||(r.activeLessonId=n?.id||r.lessons[0]?.id||null)}function Wf(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=is(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function fs(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function xa(){r.progress.learningPath=Gc(Vi(),r.progress.learningPath||{});const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[Se]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(Z().studiedKanji||{}).length>0||Object.keys(Z().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[Se]&&(t[Se]=r.progress.visits?.firstVisitDate||new Date().toISOString()),uo().forEach((o,c)=>{Z().completedLessons?.[o]&&!t[o]&&(t[o]=Z().completedLessons[o]),n[o]=!0});const a=sd();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function uo(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:Lm.filter(t=>/^n5-lesson-\d+$/i.test(t))}function sd(){const e=r.progress?.learningPath||Vi(),t=[Se,...uo(),ds];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||Se}function po(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):tr||(tr=st(B.n5Lessons).then(e=>(r.n5Textbook=Lc(e),xa(),(r.route==="learn"||r.route==="home")&&T(),r.n5Textbook)).catch(e=>{throw tr=null,e}),tr)}function Xf(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=xm[t];if(!n){const a=pr(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(fa.has(t))return fa.get(t);const s=st(n).then(a=>(r.learningPathLessonPayloads[t]=a||pr(t),r.route==="learn"&&r.activeLearnNodeId===t&&T(),r.learningPathLessonPayloads[t])).catch(a=>{const o=pr(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&T(),o;throw a}).finally(()=>{fa.delete(t)});return fa.set(t,s),s}function dn(){return xa(),r.progress.learningPath}function go(){const e=dn().activeSession;return!e?.nodeId||dn().completedNodes?.[e.nodeId]?null:e}function hs(){const e=go();return e?.nodeId?e.nodeId:dn().currentNodeId||sd()||Se}function rd(e){const t=Wn(e);return t?f(t.title):Qf(e)}function Qf(e){const t=String(e||"");if(t===Se)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===ds)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=kt(t);if(n)return f(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Vf(e){const t=Wn(e);return t?f(t.summary):""}function le(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Yf(){const e=le();return{id:Se,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Zf(){const e=Pe();return le(),{id:cs,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function eh(){return{id:ds,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function th(){return uo().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function ad(){const e=Yf(),t=Zf(),n=eh(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,c)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):th(),a=[e];return Pe()>0&&a.push(t),[...a,...s,n]}function Wn(e){const t=String(e||"");return t&&ad().find(n=>n.id===t)||null}function id(e){if(!e)return"locked";if(e.id===cs)return Pe()>0?"review":"available";const t=dn();return t.completedNodes?.[e.id]?"completed":hs()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function nh(e){const t=le();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function od(){const e=dn(),t=Pe(),n=go(),s=hs(),a=Wn(s),o=Number(nn().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[Se]&&!n?{kind:"node",label:le().start,nodeId:Se}:n?.nodeId?{kind:"node",label:le().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${le().reviewAction}: ${t}`,nodeId:cs}:o&&a?{kind:"node",label:le().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[Se]?le().resume:le().start,nodeId:a.id}:{kind:"review",label:le().reviewOld,nodeId:cs}}function sh(){const e=le(),t=S0(),n=t?.level||Gt(),s=t?.lessonId||_l(n),a=rs(n),o=Ag(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function rh(){const e=an(),t=Pe(),n=le();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function ah(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function ih(){const e=p()==="ru",t=Po();return De.map(n=>{const s=Lt(n),a=zr(n),o=rs(n),c=n==="N5"?Vn():Object.keys(o?.completedLessons||{}).length,l=Math.max(Number(s?.lessonCount||0),a.length||0),d=gt(n),u=Lg(n),m=!u&&t===n,h=f(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),v=l>0?`${c}/${l} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",w=u?e?"Пройдено":"Completed":m?`${v} · ${e?"сейчас":"now"}`:d?v:rn(n);return{level:n,title:h,note:w,status:u?"done":m?"current":d?"open":"locked"}})}function oh(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function lh(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function ld(){const e=hs();return{title:rd(e),summary:Vf(e)}}function D(e){const t=String(e);r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=Ri(r.progress.cards[t]);return n.successRate=Dg(n),Number.isFinite(Number(n.srsStep))?n.srsStep=de(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=fo(n),r.progress.cards[t]=n,n}function ar(e,t="seen"){if(!r.progress||!e?.id)return!1;ce();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function ir(e,t="seen"){ar(e,t)&&x()}const vt=[5/1440,1/24,12/24,1,2,4],mo=1;function fo(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<vt.length;s+=1)if(t<=vt[s]*1.08)return s;const n=vt[vt.length-1];return vt.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function ch(e){const t=Math.trunc(e);return t<0?0:t<vt.length?vt[t]||vt[0]:vt[vt.length-1]*2**(t-(vt.length-1))}function dh(e,t,n=mo){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],c=Math.max(1,Math.trunc(Number(n)||mo));let l=0,d=0,u=0;for(;l<s.length||d<a.length;){if(u>=c&&d<a.length){o.push(a[d++]),u=0;continue}if(l<s.length){o.push(s[l++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function uh(e,t){const n=fo(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function ph(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function Ca(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function Et(e,t,n="jlpt_lesson"){if(!t)return!1;const a=cd(e,t).reduce((o,c)=>ar(c,n)||o,!1);return a&&x(),a}function cd(e,t){const n=String(e||"").toUpperCase();return n==="N5"?hn(t):n==="N4"?$r(t):n==="N3"?Sr(t):n==="N2"?Lr(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function gh(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function dd(){return ce(),r.progress.evaRoomQuiz}function ud(){const e=[r.cards||[],typeof Ot=="function"?Ot():[],typeof We=="function"?We():[],typeof Qe=="function"?Qe():[],typeof Ye=="function"?Ye():[]];return pd(e.flat().filter(Boolean))}function mh(){if(!r.progress)return[];ce();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=fh(),a=ud().filter(o=>{if(!o?.id||!o.kanji||!Ke(o,"ru")||!Ke(o,"en"))return!1;const c=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||gh(o)||n.has(o.lessonId)||s.has(`${c}:${o.kanji}`)||s.has(o.kanji)});return pd(a)}function fh(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return ho().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(c=>t(n.level,c))})}),e}function ho(){return[{level:"N5",course:Z,lessonById:kt,markStudied:Ss,markDifficult:kr},{level:"N4",course:W,lessonById:wn,markStudied:Ns,markDifficult:jr},{level:"N3",course:H,lessonById:kn,markStudied:Ls,markDifficult:Nr},{level:"N2",course:q,lessonById:$n,markStudied:xs,markDifficult:xr}]}function pd(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Ke(n,"ru")}:${Ke(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function hh(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function vh(e){if(e.target.classList?.contains("detail-backdrop")){E("menu_close"),r.detailCardId=null,oe();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,oe();return}if(e.target.classList?.contains("changelog-backdrop")){Wi();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,oe();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,a=n.dataset.id;if(hh(n),!!Hf(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-bc<280)){if(s&&s.endsWith("-complete-lesson")){const c=`${s.split("-")[0]}:${a||""}`;if(ae.has(c)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(vo(s),requestAnimationFrame(()=>window.setTimeout(()=>kh(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Ra(o)){Wh(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),qe(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),qe(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&Ig(n.dataset.shareSection||r.route,k0(n)).catch(()=>G(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&Eg(!Dl()),s==="notification-center"){if(r.notificationPromptVisible){Ug();return}(r.notificationPrompt?.docked||Li("header"))&&xi("header");return}if(s==="repeat-onboarding"){$o({force:!0});return}if(s==="onboarding-next"){Cd();return}if(s==="onboarding-prev"){Ad();return}if(s==="onboarding-continue"){Gh();return}if(s==="onboarding-close"||s==="onboarding-skip"){cr({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){Fp(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,oe()),s==="copy-contact-email"&&Mg(qt).then(o=>{G(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,oe()),s==="close-changelog"){Wi();return}if(s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,oe()),s==="close-nav-menu"&&(r.navMenu=null,oe()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,oe()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,oe()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?Ru(!0):o==="N3"?zu(!0):o==="N2"?np(!0):o==="N1"?gp(!0):ku(!0)}if(s==="final-test-next-level"){const o=Q(n.dataset.nextLevel||""),c=String(n.dataset.nextLesson||"");if(!o||!c)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,vi(o,c);return}if(s==="scroll-page-edge"&&((n.dataset.direction||jo())==="up"?Ia():Hh()),s==="theme"&&U0(),s==="language"&&J0(),s==="sound"&&Pg(),s==="toggle-ux-sound"&&z0(),s==="export"&&b0(),s==="apk-download"&&pe("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&kc.click(),s==="reset"&&B0(),s==="share-achievement"&&M0().catch(()=>G(I("shareFallback"))),s==="pwa-install"&&mN(),s==="pwa-later"&&Hl(),s==="notification-allow"&&bN(),s==="notification-later"&&Ci(),s==="mascot-click"&&cS(n.dataset.character),s==="eva-click"&&Jp(),s==="eva-dialogue-skip"&&bh(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=Xs,oe()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=Mo();nu(o),r.activeCardId=null,oe()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=Nm,oe()),s==="toggle-favorite"&&qS(a),s==="eva-room-choice"&&aw(n),s==="eva-question-answer"&&Qv(n),s==="eva-room-reset"&&ow(),s==="toggle-eva-autonomy"&&hw(),s==="cycle-eva-autonomy"&&vw(),s==="eva-autonomy-room-mode"&&ww(),s==="eva-autonomy-outfit-mode"&&bw(),s==="eva-autonomy-next"&&eu(),s==="eva-autonomy-clear"&&kw(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,Le("shop_opened"),oe()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,oe()),s==="eva-bg-buy"&&lw(a),s==="eva-bg-select"&&cw(a),s==="eva-sprite-buy"&&dw(a),s==="eva-sprite-select"&&uw(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",oe()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",oe()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",oe()),s==="shop-buy"&&Ua(a),s==="shop-select"&&Ja(a),s==="shop-clear-effect"&&Zd(a),s==="shop-clear-item"&&mw(a),s==="clear-writing"&&kS(),s==="undo-writing"&&yS(),s==="check-writing"&&$S(!0),s==="replay-writing"&&Wp(),s==="play-writing-step"&&Xp(),s==="writing-step-prev"&&Qp(-1),s==="writing-step-next"&&Qp(1),s==="select-writing-step"&&Vp(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&G$(Number(n.dataset.index)),s==="undo-sentence-tile"&&H$(),s==="clear-sentence"&&q$(),s==="check-sentence"&&W$(),s==="next-sentence"&&Q$(),s==="reading-review-tile"&&gb(Number(n.dataset.index)),s==="reading-review-undo"&&mb(),s==="reading-review-clear"&&fb(),s==="reading-review-check"&&hu(),s==="reading-review-answer"&&pb(n),s==="toggle-reading-translation"&&hb(),s==="add-custom-sentence"&&T$(),s==="edit-custom-sentence"&&R$(n.dataset.id),s==="delete-custom-sentence"&&_$(n.dataset.id),s==="cancel-custom-sentence-edit"&&M$(),s==="insert-jlpt-tile"&&m0(Number(n.dataset.index)),s==="undo-jlpt-tile"&&f0(),s==="clear-jlpt-practice"&&h0(),s==="check-jlpt-practice"&&v0(),s==="next-jlpt-practice"&&w0(),s==="n5-open-lesson"&&$b(a),s==="n5-overview"&&jb(),s==="n5-review"&&Sb(n.dataset.mode||null),s==="n5-answer"&&vb(n),s==="n5-check-input"&&wb(a),s==="n5-srs"&&wu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&kb(a),s==="n5-complete-lesson"&&yb(a),s==="jlpt-lesson-answer"&&bb(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&xb(n),s==="n5-final-submit"&&ku(),s==="n5-final-reset"&&Cb(),s==="n4-open-lesson"&&Zb(a),s==="n4-overview"&&ek(),s==="n4-review"&&tk(n.dataset.mode||null),s==="n4-kanji"&&nk(),s==="n4-grammar"&&sk(),s==="n4-reading"&&rk(),s==="n4-listening"&&ak(),s==="n4-final"&&ik(),s==="n4-answer"&&Hb(n),s==="n4-check-input"&&qb(a),s==="n4-srs"&&Au(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&Wb(a),s==="n4-complete-lesson"&&Xb(a),s==="n4-grammar-complete"&&Qb(a,n.dataset.value||""),s==="n4-reading-complete"&&Vb(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&Yb(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&ck(n),s==="n4-final-submit"&&Ru(),s==="n4-final-reset"&&dk(),s==="n3-open-lesson"&&Ek(a),s==="n3-overview"&&Kk(),s==="n3-review"&&Fk(n.dataset.mode||null),s==="n3-kanji"&&Dk(),s==="n3-grammar"&&Ok(),s==="n3-reading"&&Bk(),s==="n3-listening"&&Uk(),s==="n3-final"&&Jk(),s==="n3-answer"&&Ak(n),s==="n3-check-input"&&Tk(a),s==="n3-srs"&&Bu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&Ik(a),s==="n3-complete-lesson"&&Rk(a),s==="n3-grammar-complete"&&_k(a,n.dataset.value||""),s==="n3-reading-complete"&&Mk(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&Pk(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&Hk(n),s==="n3-final-submit"&&zu(),s==="n3-final-reset"&&qk(),s==="n2-open-lesson"&&by(a),s==="n2-overview"&&ky(),s==="n2-review"&&yy(n.dataset.mode||null),s==="n2-kanji"&&$y(),s==="n2-grammar"&&jy(),s==="n2-reading"&&Sy(),s==="n2-listening"&&Ny(),s==="n2-final"&&Ly(),s==="n2-answer"&&py(n),s==="n2-check-input"&&gy(a),s==="n2-srs"&&Zu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&my(a),s==="n2-complete-lesson"&&fy(a),s==="n2-grammar-complete"&&hy(a,n.dataset.value||""),s==="n2-reading-complete"&&vy(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&wy(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&Ay(n),s==="n2-final-submit"&&np(),s==="n2-final-reset"&&Ty(),s==="n1-open-lesson"&&s$(a),s==="n1-overview"&&r$(),s==="n1-review"&&a$(n.dataset.mode||null),s==="n1-kanji"&&i$(),s==="n1-grammar"&&o$(),s==="n1-reading"&&l$(),s==="n1-listening"&&c$(),s==="n1-final"&&d$(),s==="n1-answer"&&Qy(n),s==="n1-check-input"&&Vy(a),s==="n1-srs"&&dp(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&Yy(a),s==="n1-complete-lesson"&&Zy(a),s==="n1-grammar-complete"&&e$(a,n.dataset.value||""),s==="n1-reading-complete"&&t$(a,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&n$(a,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&g$(n),s==="n1-final-submit"&&gp(),s==="n1-final-reset"&&m$(),s==="review-exercise-next"){Tr(),r.pendingFocus="__scroll-top__",T();return}if(s==="play-kanji-audio"){const o=ne(a)||ne(r.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?Sg(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:()=>jg(o)}):$g(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(sn(o)){if(zt("jlpt-level",{level:o}),!gt(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,qe("textbooks",null,o),G(rn(o));return}r.activeJlptLesson=o,qe("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(zt("jlpt-start",{level:n.dataset.jlpt||Gt()}),vi(n.dataset.jlpt||Gt())),s==="social-link"&&pe(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:r.route,source:n.dataset.network||"social"}),s==="play-audio"&&o0(n.dataset.audio,n.dataset.label),s==="close-reward"&&(r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&Gp(r.rewardModal),un()),s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),x(),G(`${I("dailyGoal")}: ${r.progress.settings.dailyGoal}`),T()),s==="buy-shop"&&Ua(a),s==="start-due"&&(qe("textbooks"),Pe()||G(Fe("eva","welcome"))),s==="home-lesson"){const o=Q(n.dataset.level||"")||Gt(),c=String(n.dataset.lessonId||"");vi(o,c)}if(s==="home-review"&&(Pe()?qe("review"):G(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&(zt("home-primary"),Cw()),s==="learning-path-node"&&(zt("learning-path",{lessonId:n.dataset.node||a}),su(n.dataset.node||a)),s==="learning-path-back"&&Xn(),s==="learning-path-choice"){const o=String(n.dataset.node||""),c=String(n.dataset.step||""),l=String(n.dataset.value||""),d=gr(o),u=d.steps.find(m=>m.id===c);if(!u||u.kind!=="quiz"||d.session.answers?.[c])return;d.session.answers[c]={selected:l,correct:l===u.answer,at:new Date().toISOString()},l===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],c])],d.session.updatedAt=new Date().toISOString(),x(),T()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=gr(o);if(!c.steps.length)return;const l=c.steps[c.session.stepIndex];if(l?.kind==="quiz"&&!c.session.answers?.[l.id])return;c.session.stepIndex=Math.min(c.session.stepIndex+1,c.steps.length),c.session.updatedAt=new Date().toISOString(),x(),T()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=(gr(o).session.mistakes||[]).slice();dn().activeSession=Zi({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:l,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),x(),T()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=gr(o);_w(o,c.session,c.steps),Xn();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(c=>c.id===a);if(!o||!Ee(o)){G(`${I("unlockedAt")} ${hi(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,Nt(),s==="start-lesson"){zt("legacy-lesson",{level:o.jlpt||"",lessonId:a}),Le("lesson_start",{lessonId:a,jlpt:o.jlpt});const c=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(c)?(qe("textbooks",null,c),r.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(c)}/${encodeURIComponent(o.id)}`),T()):Xn(Xt,o.id)}else T()}if(s==="show-answer"&&(ir(ne(r.activeCardId),"show_answer"),r.revealed=!0,Nt(),Oe()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),dg()}if(s==="rate"&&nS(n.dataset.rating),s==="open-card"&&(ir(ne(a),"card_details"),r.detailCardId=a,T()),s==="open-kanji-page"&&Sh(a),s==="close-detail"&&(r.detailCardId=null,oe()),s==="study-card"){const o=ne(a);if(!o)return;ir(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,Nt(o.id),r.detailCardId=null,Xn(Xt,o.lessonId)}}}function wh(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;bc=Date.now(),e.preventDefault(),vo(n),n==="eva-click"&&Jp(),n==="eva-autonomy-next"&&eu()}function vo(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=Hn(Vt(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=re()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function bh(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||te().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,qn(),T())}function kh(e,t){if(!(!e||t?.disabled)&&!yh(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){E("menu_open");return}if(e==="eva-room-shop-close"){E("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Ra(t.dataset.route)){E(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}E("tab_switch");return}if(e==="nav-menu-route"){E("tab_switch");return}if(e==="close-nav-menu"){E("menu_close");return}if(e==="toggle-header-socials"){E(Dl()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){E("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){E("menu_close");return}if(e==="notification-center"){E("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){E("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){E("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){E("notification_soft");return}t?.matches("button, .btn, [role='button']")&&E("button_click"),e!=="toggle-header-socials"&&Eg(!1)}}function yh(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function gd(e){vo("input");const t=e.target.closest("[data-ux-volume]");if(t){X0(Number(t.value)/100);const l=document.querySelector("[data-ux-volume-label]");l&&(l.textContent=`${Math.round(yi()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const l=Te(),d=s.dataset.sentenceDraft;l.customDraft=La(l.customDraft||{}),d&&Object.prototype.hasOwnProperty.call(l.customDraft,d)&&(l.customDraft[d]=s.value,l.customMessage="",l.customStatus="",x());return}const a=e.target.closest("[data-filter]");if(!a)return;const o=a.dataset.filter,c=a.selectionStart;r.filters[o]=a.value,r.dictionaryVisibleCount=Xs,T(),requestAnimationFrame(()=>{const l=document.getElementById(a.id);l&&(l.focus(),typeof c=="number"&&"setSelectionRange"in l&&l.setSelectionRange(c,c))})}function $h(e){if(Jh(e)||jh(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,r.changelogModal?Wi():T();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,dg())}function jh(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(ha=`${ha}${e.key.toLowerCase()}`.slice(-je.length),ha!==je)?!1:(ha="",md(5e3),!0)}function md(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(z(0,t,"cheat:moon_farm"),X(),x(),E("moon_fragment_gain"),G(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),T(),r.progress.moonFragments):0}function Xn(e=Wt,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===Tt&&String(t||"")||null,r.activeLearnLegacyLessonId=e===Xt&&String(t||"")||null;const s=e===Tt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===Xt&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,Nt(),Kt(),oe()}function qe(e,t=null,n=null){if(e==="learn"){Xn(Wt,null,t);return}if(!lm(e)){const a=String(e||"");ta(be("hash","unknown-route",a,a?[a]:[])),nt(a?`#${encodeURIComponent(a)}`:"#not-found"),r.pendingFocus=t,r.navMenu=null,Nt(),Kt(),Oe();return}const s=r.route;if(r.route=e,r.routeMatch=null,r.routeNotFound=null,s!==r.route&&(s==="review"||r.route==="review")&&(r.reviewSession=null),r.route==="textbooks"){const a=n?String(n).toUpperCase():"";if(a&&!Q(a)){ta(be("hash","invalid-parameter",`textbooks/${a}`,["textbooks",a])),nt(`#textbooks/${encodeURIComponent(a)}`),r.pendingFocus=t,Oe();return}r.activeTextbookLevel=a||null,r.activeTextbookSubroute=null}else if(r.route==="jlpt-lesson"){const a=n?String(n).toUpperCase():r.activeJlptLesson||MN()||"";if(a&&!Q(a)){ta(be("hash","invalid-parameter",`jlpt-lesson/${a}`,["jlpt-lesson",a])),nt(`#jlpt-lesson/${encodeURIComponent(a)}`),r.pendingFocus=t,Oe();return}r.activeJlptLesson=a||null}else r.activeTextbookLevel=null,r.activeTextbookSubroute=null;if(r.route!=="review"&&Tr(),r.route==="textbooks")nt(Xg(r.activeTextbookLevel||"",r.activeTextbookSubroute||""));else{const a=r.route==="learn"?"#learn":r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;nt(a)}r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),Nt(),Kt(),Oe(),nr(r.route)&&va({route:r.route,delay:0}),r.route==="eva-room"&&Le("room_opened")}function Sh(e){const t=ne(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,Nt();const n=`#kanji/${encodeURIComponent(t.id)}`;nt(n),Kt(),Oe()}function Nh(){return r.routeMatch||Ti(ea())}function Lh(){const e=Nh();if(!fc){YL(e,r),fc=!0,fd(e);return}ZL(e,r).sent&&fd(e)}function fd(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){pe("review_open",{route:"review"});return}if(e.route==="kanji"){pe("kanji_open",{route:"kanji",cardId:t.cardId||r.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){pe("lesson_open",{route:"jlpt-lesson",level:t.level||r.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){pe("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){pe("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}xh(n)&&pe("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}}function xh(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function hd(){const e=Tm.begin(r.route);pa=!0,ga=null,_S();try{iv(),Ah(),Lh();let t="";if(r.route===Zl&&(t=wo(r.routeNotFound)),r.route==="home"&&(t=lv()),r.route==="download"&&(t=tv()),r.route==="about"&&(t=sv()),r.route==="learn"&&(t=xw(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(Cl)),r.route==="review"&&(t=y$(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(Cl)),r.route==="dictionary"&&(t=mj()),r.route==="kanji"&&(t=bj()),r.route==="writing"&&(t=Ej(),requestAnimationFrame(hS)),r.route==="stats"&&(t=Oj(),requestAnimationFrame(Hp)),r.route==="achievements"&&(t=Jj()),r.route==="eva-room"&&(t=gv()),r.route==="jlpt-lesson"&&(t=Ew()),r.route==="textbooks"&&(t=Kw()),t||(t=wo(be("hash","unknown-route",String(r.route||""),r.route?[String(r.route)]:[]))),!e.isCurrent())return;ln.innerHTML=`${t}${Yh()}${Th()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal)),eS(),requestAnimationFrame(()=>{av(),So(),Oh()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${r.route} build=${R}`,t?.stack||t),ln.innerHTML=vd(t))}finally{pa=!1}}function oe(){us||(us=requestAnimationFrame(()=>{us=0,hd()}))}function Oe(){us&&(cancelAnimationFrame(us),us=0),hd()}function or(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function un(){if(typeof window>"u"){Oe();return}const e=window.scrollX,t=window.scrollY;Oe(),or(e,t),requestAnimationFrame(()=>{or(e,t),requestAnimationFrame(()=>or(e,t))}),window.setTimeout(()=>or(e,t),120),window.setTimeout(()=>or(e,t),320)}function T(){oe()}function vd(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(r.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function wo(e=r.routeNotFound){Ch();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},a=e?.raw||location.pathname||location.hash||"";return`
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
    `}function Ch(){document.title=(p()==="ru","404 — Flash Kanji"),wd("robots","noindex, follow"),bd("/404.html")}function Ah(){r.route!==Zl&&(document.title=_m,wd("robots","index, follow"),bd("/"))}function wd(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function bd(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function Th(){const e=`${rv()}${Fj()}${Hj()}${ej()}${qj()}${Wj()}${Xj()}${Qj()}${Vj()}${qh()}`;return e?`<div class="modal-layer">${e}</div>`:""}function kd(){return ue?.isConnected?ue:document.body?(ue||(ue=document.createElement("div"),ue.className="flash-kanji-onboarding-root",ue.setAttribute("role","presentation"),ue.setAttribute("aria-hidden","false")),ue.isConnected||document.body.appendChild(ue),ue):null}const bo=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Aa={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function yd(){try{return localStorage.getItem(sc)==="true"}catch{return!1}}function Ih(){try{return localStorage.getItem(ac)||""}catch{return""}}function Ta(e){try{localStorage.setItem(ac,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function Rh(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function _h(e=!1){const t=Ih();return t==="returning"||t==="completed"?t:yd()?(Ta("completed"),"completed"):e?(Ta("returning"),"returning"):(Ta("new"),"new")}function $d(){return!yd()}function Mh(){try{localStorage.getItem(rc)==="true"&&localStorage.removeItem(rc)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function Ph(){try{localStorage.setItem(sc,"true"),Ta("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function jd(){return ht}function lr(){return bo.length}function ko(){return bo[de(Rt,0,lr()-1)]||bo[0]}function Eh(e=ko()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function Kh(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Sd(e=ko()){for(const t of Eh(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>Kh(a));if(s)return s}return null}function Nd(e,t=null){return typeof e=="function"?Nd(e(t),t):f(e||{ru:"",en:""})}function Fh(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Dh(){return!(ht||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.navMenu)}function yo(e=!1,t=jm){clearTimeout(ps),!(!e&&!$d())&&(ps=window.setTimeout(()=>{ps=0,$o({force:e})},t))}function $o(e={}){const t=!!e.force;let n=!1;if(ht){if(!t)return!0;cr({completed:!1,silent:!0})}if(!t&&!$d())return!1;if(!Dh())return yo(t,ic),!1;clearTimeout(ps);try{Fi=document.activeElement instanceof HTMLElement?document.activeElement:null,ht=!0,ke="step",Rt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(a){console.warn("Could not make the app shell inert.",a)}}return kd(),vs(),Ld(),n=!0,window.addEventListener("scroll",pn,{passive:!0}),window.addEventListener("resize",pn),window.addEventListener("orientationchange",pn),pn(),xd(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),cr({completed:!1,silent:!0}),n||yo(t,ic),!1}}function cr(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(ps),ps=0,cancelAnimationFrame(Vs),Vs=0,window.removeEventListener("scroll",pn),window.removeEventListener("resize",pn),window.removeEventListener("orientationchange",pn),_t&&_t.classList.remove("is-onboarding-target"),_t=null,ht=!1,ke="step",Rt=0,ue&&(ue.remove(),ue=null,He=null,xe=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&Ph(),n||(s?qe(s):T()),Fi?.focus&&requestAnimationFrame(()=>{try{Fi.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function vs(){if(!kd())return;const e=ke==="final"?null:ko(),t=ke==="final"?null:Sd(e),n=ke==="final"?Aa.title:e.title,s=ke==="final"?Aa.text:Nd(e.text,t),a=ke==="final"?p()==="ru"?"Готово":"Done":`${Rt+1} ${p()==="ru"?"из":"of"} ${lr()}`,o=f(n),c=f(s),l=ai("eva","calm","welcome"),d=lr();ue.classList.toggle("is-final",ke==="final"),ue.classList.toggle("has-target",!!t),ue.dataset.view=ke;const u=ke==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(f(Aa.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(f(Aa.close))}</button>
      `:Rt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;ue.innerHTML=`
      ${ke==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${ke==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${ke==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
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
    `,He=Ce("[data-onboarding-spotlight]",ue),xe=Ce(".flash-kanji-onboarding-dialog",ue),_t&&_t!==t&&_t.classList.remove("is-onboarding-target"),_t=t||null,_t&&_t.classList.add("is-onboarding-target"),xe&&(xe.dataset.totalSteps=String(d)),pn()}function pn(){ht&&(Vs||(Vs=requestAnimationFrame(()=>{Vs=0,Ld()})))}function Ld(){if(!ht||!ue||!xe)return;const e=ke==="final"?null:_t||Sd();Fh();const t=window.innerWidth,n=window.innerHeight;if(xe.style.maxWidth=`${Math.min(Sm,Math.max(280,t-16))}px`,xe.style.maxHeight=`${Math.max(180,n-24)}px`,xe.style.left="50%",xe.style.top="50%",xe.style.transform="translate(-50%, -50%)",xe.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&He?(He.hidden=!1,He.style.left=`${Math.round(s.left-12)}px`,He.style.top=`${Math.round(s.top-12)}px`,He.style.width=`${Math.round(s.width+12*2)}px`,He.style.height=`${Math.round(s.height+12*2)}px`,He.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):He&&(He.hidden=!0)}else He&&(He.hidden=!0);ue.style.visibility="visible",xd()}function Oh(){ht&&vs()}function xd(){if(!xe)return;const e=xe.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=xe.querySelectorAll("button"),n=e||t[0]||xe;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function Bh(){return xe?Array.from(xe.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function Uh(e=1){const t=Bh();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function Jh(e){return ht?e.key==="Tab"?(e.preventDefault(),Uh(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),cr({completed:ke==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),Cd(),!0):e.key==="ArrowLeft"?(e.preventDefault(),Ad(),!0):!1:!1}function Cd(){if(!ht)return;const e=lr()-1;if(ke!=="final"){if(Rt<e){Rt+=1,vs();return}ke="final",vs()}}function Ad(){if(ht){if(ke==="final"){ke="step",Rt=lr()-1,vs();return}Rt>0&&(Rt-=1,vs())}}function zh(e=null){cr({completed:!0,routeTo:e})}function Gh(){zh("textbooks")}function Ia(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Kt(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>Ia()))}function Hh(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function Td(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function jo(){return Td()?window.scrollY>32?"up":"down":null}function qh(){const e=jo()||"down",t=Td()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function So(){const e=Ce('[data-action="scroll-page-edge"]');if(!e)return;const t=jo();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function Ra(e){return e!=="review"&&Id(e).length>1}function Wh(e){if(!Ra(e)){qe(e);return}r.navMenu=r.navMenu===e?null:e,oe()}function Id(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:Po(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function No(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":I(e)}function Xh(){return["home","textbooks","review","dictionary","download","stats","about"]}function Qh(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function Vh(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(Qh(e))}</span>
          <span>${i(No(e))}</span>
        </button>
      </li>
    `}function Yh(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
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
                ${Xh().map(o=>Vh(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(ft.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${Tg("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(ft.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${Tg("instagram")}</span>
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
    `}function Zh(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function ev(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function tv(){const e=Zh();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(vm)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(bm)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(ev).join("")}
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
              <a class="btn ghost" href="${g(wm)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function nv(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function sv(){const e=nv();return`
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
    `}function rv(){const e=Id(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?No(t):"";return`
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
    `}function av(){if(!r.pendingFocus)return;const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Kt();return}const t={"lesson-card":".study-card, .daily-lesson-card","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function iv(){Hi(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Ra(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=No(n))});const e=Ce('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),Kl(),W0(),Fl(),ov()}function ov(){const e=Ce("#sidebarProgressBar"),t=Ce("#sidebarProgressLabel"),n=Ce("#sidebarProgressPercent"),s=Ce("#sidebarProgressNote"),a=Ce("#sidebarUserAvatar"),o=Ce("#sidebarUserTitle"),c=Ce("#sidebarUserSubtitle"),l=an(),d=ld(),u=Pe(),m=Math.max(1,Number(r.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(l.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${le().reviewQueue} · ${d.title||le().mapHint}`:`${d.title||le().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`N${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),c&&(c.textContent=`${le().level} ${m} · ${r.progress?.streak?.current||0} ${le().streak}`)}function lv(){r.n5Textbook?.items?.length||po();const e=cv(),t=sh(),n=Pe(),s=ld(),a=rh(),o=le(),c=an(),l=Math.max(0,Math.min(100,Math.round(c.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=Bg();return`
      <section class="page home-shell">
        <article class="home-hero-card">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy">
            <p class="eyebrow">JLPT N5-N1 · ${i(d?"Учебники":"Textbooks")} · ${i(d?"Повторение":"Review")}</p>
            <h1 class="hero-title home-hero-title">${d?"Небольшой урок.<br><em>Большой шаг.</em>":"Small lesson.<br><em>Big step.</em>"}</h1>
            <p class="home-hero-note">${i(s.summary||(d?"Сегодня появится новый шаг вперед.":"Today brings a small but steady step forward."))}</p>
            <p class="hero-subtitle">${i(I("tagline"))}</p>
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
          ${a.map(ah).join("")}
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
                ${ih().map(oh).join("")}
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
                ${u.map(lh).join("")}
              </div>
            </article>
            ${Qr()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${zs()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${uv(e)}
          </aside>
        </section>
      </section>
    `}function cv(){dv();const e=te(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=Ba(),s=f(Js("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||Ft().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",c=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),l=ys(t?.sprite||r.evaRuntime?.currentSkin||Lo());return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:c,sprite:l}}function dv(){ce();const e=te();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(tu("manual"),te().currentLine||r.evaRuntime?.currentPhrase||null)}function uv(e){const t=mn(),n=gn(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${Md(f(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
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
          <img class="${g(_d({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function Rd(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function _d(e){const t=["eva-vn-sprite"],n=Rd(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function pv(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function Md(e,t=""){const n=pv(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((c,l)=>`<span class="eva-line-piece" style="--i:${l}">${i(c)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function gv(){ce(),dr(),fr(),X();const e=rw(),t=e.node,n=Yt()||e.bg||bs(t.background),s=e.sprite||e.spriteSrc||ys(e.spriteId||fn(t.sprite)),a=mn(),o=gn(),c=Array.isArray(t.choices)?t.choices:[],l=Rd(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${Cv()}
        ${Nv(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(l)}" data-eva-state="${g(l)}" data-eva-mood="${g(e.mood||Ft().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:url('${g(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(f(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(_d(e))}" src="${g(s)}" alt="${g(f(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${fv(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(f(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(f(n.title||{}))}</span>
            </div>
            ${Md(f(t.text||{}),d)}
            ${e.isAutonomy?Lv(a):`
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

        ${r.evaRoomShopOpen?mv():""}
      </section>
    `}function mv(){const e=mn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${Pd({closable:!0})}
      </aside>
    `}function fv(e={}){const t=hv(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(wt(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function hv(e={}){const t=e.decoration||te().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=me(t);return!n||n.type!=="decoration"||!Dt(n.id)?null:n}function Pd(e={}){const t=ws(),n=kv(),s=rt().filter(a=>Dt(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${rt().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(mn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${vv().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(a.id)}">
              ${i(f({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${wv().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${bv().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(yv).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${Pp({limit:6})}
        </div>
      </div>
    `}function vv(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function wv(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function bv(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function kv(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=rt().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>Yd(a)==="available")),t==="owned"&&(s=s.filter(a=>Dt(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function yv(e){const t=Yd(e),n=ws(),s=n.status[t]||t,a=fw(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}">
        <div class="custom-shop-preview">
          <img src="${g(e.preview||e.asset)}" alt="${g(wt(e))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(jv(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(wt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i($v(e))}</p>
          ${e.type==="outfit"&&Ed(e)?`<blockquote class="custom-shop-phrase">${i(Ed(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(Sv(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function ws(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function wt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function $v(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function Ed(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function jv(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function Sv(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function Nv(e){mn();const t=gn(),n=te(),s=e.bg||Yt(),a=Fd(e.spriteId||r.progress.selectedEvaSprite),o=me(r.customization?.selected?.effect),c=me(e.decoration||n.currentDecoration),l=xv(e.mood||n.mood),d=dd();return`
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
          ${c?`<span>${i(wt(c))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(wt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function Lv(e){const t=gn(),n=Ba();return n?.id?`
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
    `}function gn(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function xv(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function Cv(){const e=Ft(),t=mn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
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
    `}function mn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function ce(){var t,n,s,a,o,c,l,d,u,m,h,v,w;(t=r.progress).seenCards||(t.seenCards={}),(n=r.progress).seenKanji||(n.seenKanji={}),(s=r.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),(a=r.progress).selectedEvaRoomBackground||(a.selectedEvaRoomBackground="bg_study_hub"),(o=r.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(N=>{r.progress.unlockedEvaSprites.includes(N)||r.progress.unlockedEvaSprites.push(N)}),(c=r.progress).selectedEvaSprite||(c.selectedEvaSprite="idle");const e=ed(Yc(),r.progress.evaAutonomy||{});if((l=r.progress).evaAutonomy||(l.evaAutonomy={}),Object.keys(r.progress.evaAutonomy).forEach(N=>delete r.progress.evaAutonomy[N]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||(r.evaRuntime=Mt()),(d=r.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=r.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=r.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(h=r.progress.evaRoomDialogueProgress).visited||(h.visited={}),r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(v=r.progress).evaRoomQuiz||(v.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(w=r.progress.evaRoomQuiz).rewarded||(w.rewarded={}),r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=io();else{const N=Zc(io(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(S=>delete r.progress.evaRelationship[S]),Object.assign(r.progress.evaRelationship,N)}}function Ft(){return ce(),r.progress.evaRelationship}function dr(){if(!r.progress||!r.cards.length)return!1;ce();const e=r.progress.evaRelationship;let t=!1;const n=re(),s=e.lastDecayDate||n,a=Math.max(0,_n(s,n));if(a>0){const $=r.progress.streak?.lastStudyDate,U=$?_n($,n):a+1;!$||U>1?(Ne({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(Ne({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=$l(),c={learned:o.learned,mastered:o.mastered,reviews:jl(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},l=e.lastKnown||{},d=$=>Math.max(0,Number(c[$]||0)-Number(l[$]||0)),u={},m=d("reviews"),h=d("learned"),v=d("mastered"),w=d("lessons"),N=d("streak"),S=d("wrong"),A=d("writing"),b=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),v&&(u.trust=(u.trust||0)+Math.min(16,v*1.2),u.warmth=(u.warmth||0)+Math.min(8,v*.5)),w&&(u.warmth=(u.warmth||0)+Math.min(12,w*2),u.discipline=(u.discipline||0)+Math.min(10,w*1.5)),N&&(u.discipline=(u.discipline||0)+Math.min(15,N*3),u.warmth=(u.warmth||0)+Math.min(8,N)),A&&(u.curiosity=(u.curiosity||0)+Math.min(10,A*.8)),b&&(u.trust=(u.trust||0)+Math.min(10,b*.8)),S&&(u.discipline=(u.discipline||0)-Math.min(6,S*.12)),Object.keys(u).length&&(Ne(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=c,Kd(),t}function Ne(e={},t="relationship",n={}){ce();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=Ai(de(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),Kd(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function Kd(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function Lo(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=me(e)?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&Ma(n)?n:"idle"}function Av(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function fn(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=Lo(),a=Av(n),o=n&&!a?n:s,c=r.evaRuntime?.mood||Ft().mood,l=t||(a?n:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[c]||"idle",d=Mv(l),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(v=>Tv(v,d)),...u,...d,"idle","default"].filter(Boolean).find(v=>r.evaSprites?.[v]&&(Ma(v)||!o||Ma(o)))||"idle"}function Tv(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=Gn(n);return!a||a.defaultOwned||s.length<=1?s:Iv(s)}function Iv(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=Bi%t.length;return[...t.slice(n),...t.slice(0,n)]}function Rv(){const e=Lo(),t=Gn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function _v(){Oi&&window.clearInterval(Oi),Oi=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==Bi&&(Bi=e,!(document.hidden||!Rv())&&(r.route==="home"||r.route==="eva-room")&&T())},3e4)}function Mv(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=Pv(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function Pv(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function te(){return ce(),r.progress.evaAutonomy}function _a(){const e=te();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function xo(){const e=r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(s=>s.id)),n=rt().filter(s=>s.type==="background"&&!t.has(s.id)).map(s=>({id:s.id,title:{ru:s.title_ru,en:s.title_en},file:s.asset||s.preview,price:s.price,defaultUnlocked:s.defaultOwned}));return[...e,...n]}function bs(e){return xo().find(t=>t.id===e)||xo()[0]}function Yt(){ce();const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background;return bs(e)||bs("bg_study_hub")}function Ev(e){const t=bs(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function Kv(){const e=rt().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function Fd(e){return Kv().find(t=>t.id===e)}function Ma(e){if(!e)return!1;const t=Fd(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function Pa(e){ce();const t=r.evaRuntime?.mood||Zt(Ae()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=xo().filter(c=>Ev(c.id));return s.map(c=>a.find(l=>l.id===c)).find(Boolean)||Ge(a)||Yt()}function Ea(e){ce();const t=r.evaRuntime?.mood||Zt(Ae()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(a=>Ma(a)&&r.evaSprites?.[a])||r.progress.selectedEvaSprite||"idle"}function Fv(e){return e==="generated_line"?Dv():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function Dv(){ce();const e=mn(),t=r.progress.evaRoomDialogueProgress.generatedLine||Xd("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||Yt().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function Ka(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function Ov(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function Dd(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function Bv(e,t=Ae()){const n=e?.conditions||{},s=(o,c)=>{const l=Dd(c);return!l.length||l.includes(String(o))},a=(o,c)=>{const l=Dd(c);return!l.length||l.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function Uv(e="auto",t=Ae()){return null}function Fa(e,t="auto",n=Ae()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=Hn(Vt(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=re(),s.lastKnownMood=r.evaRuntime.mood||Ft().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function Od(e){if(!r.evaRuntime)return;r.evaRuntime.memory=Hn(Vt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=re()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function Jv(){return{quiet:12e4,normal:Pn(45e3,12e4),active:45e3}}function zv(){Di&&window.clearInterval(Di),Di=window.setInterval(Gv,5e3)}function ks(){const e=te(),t=Jv()[e.frequency]||Pn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function Gv(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=Ae(),t=r.evaRuntime,n=te(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return Le("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=Zt(e),c=Da(e,o);(o!==t.mood||c!==t.emotion)&&(t.mood=o,t.emotion=c,n.mood=o,n.emotion=c,t.lastEmotionChangeAt=s,t.cooldowns.emotion=Pn(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",ks(),a=!0):ur("timer",{context:e})&&(a=!0)),a&&(qn(),x(),r.route==="eva-room"&&T()),a}function Ae(e={}){const t=r.progress?nn():{},n=r.evaRuntime||Mt(),s=Hn(Vt(),n.memory||{}),a=new Date().getHours();return td(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-Gi,lastEvent:n.lastEvent,dueReviews:r.progress?Pe():0,shopOpen:!!r.evaRoomShopOpen,...e}}function Zt(e=Ae()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function Da(e=Ae(),t=Zt(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return Ge(["approve","happy","soft_smile"]);if(n==="answer_wrong")return Ge(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return Ge(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return Ge(s[t]||s.neutral)}function ur(e="auto",t={}){if(!r.progress||!_a()||!t.force&&r.route!=="eva-room")return!1;const n=te(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||Ae({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=Zt(a),c=Bd(e)||Co(e);if(!c)return!1;r.evaRuntime||(r.evaRuntime=Mt()),r.evaRuntime.mood=o;const l=c.emotion||Da(a,o,e),d=Pa(c),u=fn(Ea(c),l),m=Ao(c),h=To(c),v=Hd(a,c);return n.currentLine={id:c.id,category:c.category||"mood",text:c.text,sprite:u,background:d.id,decoration:m,effect:h,emotion:l,state:c.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=v,n.currentDecoration=m,n.currentEffect=h,n.mood=o,n.emotion=l,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[c.id,...(n.recentLineIds||[]).filter(w=>w!==c.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=Mt()),Object.assign(r.evaRuntime,{mood:o,emotion:l,presenceState:c.state||"speak",currentPhrase:n.currentLine,pendingQuestion:v,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:v?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:Pn(15e3,3e4),phrase:Pn(45e3,12e4),question:Pn(3*6e4,7*6e4),visual:Pn(10*6e4,15*6e4)}}),Fa(c,e,a),Io(u,d.file),ks(),Ne(c.relationshipDelta||{warmth:.1},`eva_autonomy:${c.id}`,{silent:!0}),qn(),on(),!0}function Bd(e){const t=Uv(e,Ae({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(te().recentLineIds||[]),o=s.filter(l=>!a.has(`${e}_${Ie(`${l.ru||l.en}`)}`)),c=Ge(o.length?o:s);return c?{id:`${e}_${Ie(`${c.ru||c.en}`)}`,category:e,text:c,relationshipDelta:{}}:null}function Ud(){const e=te(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function Hv(e="auto"){const t=Ft(),n=new Date().getHours(),s=Pe(),a=nn(),o=[];return o.push(...Ov(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function Co(e="auto"){ce(),dr();const t=Ft(),n=Ae({lastEvent:{type:e}}),s=te().currentLine?.id,a=new Set([s,...te().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],c=Hv(e),l=(u,m=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!m&&a.has(h.id)||!Qd(h,t)||!Bv(h,n))return!1;const w=Array.isArray(h.moods)?h.moods:[];return!w.length||w.includes(t.mood)});for(const u of c){const m=l(u);if(m.length)return Ge(m)}for(const u of c){const m=l(u,!0);if(m.length)return Ge(m)}const d=o.filter(u=>!a.has(u.id));return Ge(d.length?d:o)}function Le(e,t={}){if(!e)return;fr(),X();const n={type:zd(e),payload:t||{},at:Date.now()};Jd(n),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...n,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:Le});function Jd(e={}){if(!e.type||!r.progress)return;ce(),r.evaRuntime||(r.evaRuntime=Mt());const t={type:zd(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),Od(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=qv(t.type,t.payload);Object.keys(n).length&&Ne(n,`eva_event:${t.type}`,{silent:!0});const s=te();Ud(),s.nextSpeakAt=0;const a=ur(t.type,{force:!0,eventPayload:t.payload});qn(),x(),a&&r.route==="eva-room"&&T()}function zd(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function qv(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function Ao(e){const t=r.evaRuntime?.mood||Zt(Ae()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return Gd("decoration",s)}function To(e){const t=r.evaRuntime?.mood||Zt(Ae()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return Gd("effect",s)||"none"}function Gd(e,t=[]){const n=rt().filter(a=>a.type===e&&Dt(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||Ge(n))?.id||null}function Hd(e=Ae(),t=null){const n=te();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),c=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),l=Number(r.evaRuntime?.cooldowns?.question||Pn(3*6e4,7*6e4));if(!a&&o-c<l||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=qd(s).filter(h=>!d.has(h.id)),m=Ge(u.length?u:qd(s));return m?{...m,at:new Date().toISOString()}:null}function qd(e="auto"){const t=mh();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${re()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,c)=>{const l=n.has(String(o.id))?1:0,d=n.has(String(c.id))?1:0;return l-d||Ie(`${s}:${o.id}`)-Ie(`${s}:${c.id}`)}).slice(0,18).map(o=>Wv(o,t,e)).filter(Boolean)}function Wv(e,t,n="auto"){const s=Ke(e,"ru"),a=Ke(e,"en");if(!s||!a)return null;const o=Xv(e,t);if(!o.length)return null;const c=String(e.jlpt||"").toUpperCase(),l=c||(p()==="ru"?"твоих карточек":"your cards"),d=Wd(e,e,!0),u=[d,...o.map(m=>Wd(m,e,!1))].sort((m,h)=>Ie(`${n}:${e.id}:${m.id}`)-Ie(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Ie(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:c,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${l}?`,en:`What does the ${l} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function Xv(e,t){const n=Oa(Ke(e,"ru")),s=Oa(Ke(e,"en")),a=String(e.jlpt||"").toUpperCase(),c=[...t.filter(l=>{if(!l?.id||String(l.id)===String(e.id)||l.kanji===e.kanji)return!1;const d=Oa(Ke(l,"ru")),u=Oa(Ke(l,"en"));return!(!d||!u||d===n||u===s)})].sort((l,d)=>{const u=String(l.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||Ie(`${e.id}:${l.id}`)-Ie(`${e.id}:${d.id}`)});return c.slice(0,Math.min(3,c.length))}function Wd(e,t,n){const s=Ke(e,"ru"),a=Ke(e,"en"),o=Ke(t,"ru"),c=Ke(t,"en");return{id:`meaning_${Ie(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${c}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${c}.`}}}function Oa(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function Qv(e){ce();const t=Ba();t?.id&&Vv(t.id,e.dataset.option)}function Vv(e,t){ce();const n=te(),s=Ba();if(!s?.id||s.id!==e)return;const a=s.options?.find(h=>h.id===t);if(!a)return;const c=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||(r.evaRuntime=Mt()),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,Ne(a.delta||(c===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&Zv(s,a,c);const l={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:c,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...l,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[l,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=Pa({}),u=c===!1?"thinking":"approve",m=fn(Ea({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||Yv(s,c),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,Fa(n.currentLine,"question_answer",Ae({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,ks(),sw(s,a,c),qn(),x(),E(c===!1?"answer_wrong":c===!0?"answer_correct":"notification_soft"),T()}function Ba(){const e=te(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||(r.evaRuntime=Mt()),r.evaRuntime.pendingQuestion=t,t):null}function Yv(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||f(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||f(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||f(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||f(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function Zv(e,t,n){const s=dd(),a=ew(e);a&&ar(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:f(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=nn();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&tw(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),z(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&nw(a)),o.minutes=Ai(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[re()]=o,we(),fl(),X()}function ew(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?ne(t):null)||ud().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,c=n&&a.kanji===n,l=!s||String(a.jlpt||"").toUpperCase()===s;return o||c&&l})||(n?r.cards.find(a=>a.kanji===n):null)||null}function tw(e){const t=String(e?.jlpt||"").toUpperCase(),n=ho().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function nw(e){const t=String(e?.jlpt||"").toUpperCase(),n=ho().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function sw(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),Od(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function rw(){ce(),_a()&&ur("render");const e=Vd();let t=te().currentLine;if(_a()&&!t?.text&&r.evaAutonomyLines.length){const a=Co("render_fallback")||r.evaAutonomyLines[0],o=Pa(a),c=Ae({lastEvent:{type:"render_fallback"}}),l=Zt(c),d=Ao(a),u=To(a),m=a.emotion||Da(c,l,"render_fallback"),h=fn(Ea(a),m);t={id:a.id,category:a.category||"mood",text:a.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},te().currentLine=t,te().currentDecoration=d,te().currentEffect=u,te().mood=l,te().emotion=m,te().lastSpokeAt=t.at,te().lastRoomId=o.id,te().lastSprite=h,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,Fa(a,"render_fallback",c),Io(h,o.file),ks(),x()}if(_a()&&t?.text){const a=bs(t.background)||Yt(),o=fn(t.sprite||"relationship",t.emotion||te().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:ys(o),decoration:t.decoration||te().currentDecoration,effect:t.effect||te().currentEffect,mood:te().mood||Ft().mood,emotion:t.emotion||te().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=bs(e.background)||Yt(),s=fn(e.sprite,te().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:ys(s),decoration:te().currentDecoration,effect:te().currentEffect,mood:Ft().mood,emotion:te().emotion||"calm",node:e}}function Xd(e="adaptive"){ce(),dr();const t=Ft(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=Ka().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!Qd(d,t)?!1:!n.has(d.id)}),a=Ka().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:Ka(),c=Ge(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:Yt().id},l=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[c.id,...l.filter(d=>d!==c.id)].slice(0,24),{id:c.id,category:c.category||e,text:c.text||{ru:String(c.ru||""),en:String(c.en||c.ru||"")},sprite:c.sprite||"relationship",background:c.background||Yt().id,relationshipDelta:c.relationshipDelta||{}}}function Qd(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function Vd(){ce();const e=Fv(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function ys(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function Io(e,t=""){[ys(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function aw(e){const n=Vd().choices?.[Number(e.dataset.index||0)];if(!n)return;ce();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=re(),iw(n),Ne(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),z(0,a,`eva_room:${o}`),G(mn().reward)),n.randomLine){const c=Xd(n.randomLine);Ne(c.relationshipDelta||{},`eva_line:${c.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=c,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),x(),n.route){qe(n.route);return}E(n.openShop?"menu_open":"page_turn"),T()}function iw(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=Hn(Vt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=re(),t.lastRoute=r.route}function ow(){ce(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),x(),E("page_turn"),T()}function lw(e){Ua(e)}function cw(e){Ja(e)}function dw(e){const t=me(e)||zn(e)||Gn(e);t&&Ua(t.id)}function uw(e){const t=me(e)||zn(e)||Gn(e);t&&Ja(t.id)}function Dt(e){r.customization||wa();const t=me(e)||zn(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function Ro(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function pw(e){const t=Ro(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function Yd(e){return!e||!_o(e)?"locked":pw(e)?"selected":Dt(e.id)?"owned":"available"}function gw(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,te().currentEffect];for(const n of t){const s=Qt(n);if(!s||s==="none")continue;const a=me(s);if(a?.type==="effect"&&Dt(a.id))return a.id}return null}function Zd(e=null){const t=Qt(e||r.customization?.selected?.effect),n=me(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),sr(),gs(),x(),on(),E("menu_close"),G(p()==="ru"?"Эффект убран.":"Effect removed."),T(),!0)}function mw(e=null){const t=Qt(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=me(t);if(!n)return!1;if(n.type==="effect")return Zd(n.id);r.customization||wa();const s=Ro(n);if(!s)return!1;const a=Jn().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),sr(),gs(),x(),on(),E("menu_close"),G(p()==="ru"?"Выбор сброшен.":"Selection cleared."),T(),!0}function fw(e){if(!e?.unlockCondition||_o(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=ts().find(o=>o.id===t.id),a=s?ul(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function _o(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function Ua(e){const t=me(e);if(t){if(!_o(t)){E("purchase_failed"),G(ws().locked);return}if(Dt(t.id)){Ja(t.id);return}if(r.progress.moonFragments<t.price){E("purchase_failed"),G(ws().notEnough);return}r.progress.moonFragments-=t.price,r.customization.owned=[...new Set([...r.customization.owned||[],t.id])],r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:wt(t),xp:0,coins:-t.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),sr(),gs(),X(),x(),E("purchase_success"),E("item_unlock"),Le("item_bought",{itemId:t.id,type:t.type,title:wt(t),price:t.price}),G(ws().bought.replace("{item}",wt(t))),T()}}function Ja(e){var s;const t=me(e);if(!t||!Dt(t.id))return;const n=Ro(t);n&&(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(r.progress.selectedEvaSprite=t.spriteId,r.progress.evaAutonomy.currentLine=null),t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,(s=r.evaRuntime).memory||(s.memory=Vt()),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),sr(),gs(),x(),on(),E("notification_soft"),Le("item_equipped",{itemId:t.id,type:t.type,title:wt(t)}),G(ws().selectedToast.replace("{item}",wt(t))),T())}function hw(){const e=te();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,ur("toggle",{force:!0}),x(),E("notification_soft"),G(gn().status),T()}function vw(){const e=te();e.frequency="normal",ks(),x(),E("notification_soft"),T()}function ww(){const e=te();e.roomMode="auto",e.currentLine=null,x(),E("notification_soft"),T()}function bw(){const e=te();e.outfitMode="auto",e.currentLine=null,x(),E("notification_soft"),T()}function eu(){const e=te();e.enabled=!0,Ud(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,tu("manual"),x(),E("page_turn"),T()}function tu(e="manual"){const t=Bd(e)||Co(e);if(!t)return!1;const n=Ae({lastEvent:{type:e}}),s=Zt(n),a=t.emotion||Da(n,s,e),o=Pa(t),c=fn(Ea(t),a),l=Ao(t),d=To(t),u=te(),m=Date.now(),h=Hd(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:c,background:o.id,decoration:l,effect:d,emotion:a,state:t.state||"speak",at:new Date(m).toISOString(),reason:e},u.currentDecoration=l,u.currentEffect=d,u.mood=s,u.emotion=a,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=c,u.currentQuestion=h,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(v=>v!==t.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=Mt()),Object.assign(r.evaRuntime,{mood:s,emotion:a,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:h,currentSkin:c,currentBackground:o.id,currentDecoration:l,currentEffect:d,activeSkin:c,activeBackground:o.id,lastPhraseAt:m,lastEmotionChangeAt:m,lastQuestionAt:h?m:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:m,textRevealSkippedLineId:null}),Fa(t,e,n),Io(c,o.file),ks(),qn(),on(),!0}function kw(){te().currentLine=null,x(),E("menu_close"),T()}function P(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${de(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function yw(e){const t=Sl(e.id),n=t.filter(d=>D(d.id).state!=="New").length,s=t.filter(d=>D(d.id).state==="Mastered").length,a=!Ee(e),o=Ng(e),c=a?"鎖":t[0]?.kanji||"文",l=K(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${Tl(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(c)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${c0(o)}
          <h3>${i(Wr(e))}</h3>
          <p>${i(Y0(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(I("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(I("unlockedAt"))} ${hi(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${l}%"></i></span>
        </span>
      </button>
    `}function $w(e){const t=Ng(e),n=e.id===r.activeLessonId,s=!Ee(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${Tl(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g(Il(t))}">
        <span>${i(e.jlpt)}</span>
        ${l0(t)}
      </button>
    `}function Mo(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function jw(){const e=Mo();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>Ee(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>Ee(t))||r.lessons[0]||null}function Po(){return Q(jw()?.jlpt)||Gt()}function nu(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&Ee(t))return t;const s=e.find(a=>Ee(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function Sw(e){const t=e.length,n=e.filter(a=>Ee(a)).length,s=["all",...De];return`
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
    `}function Nw(e){if(!e)return"";const t=e.textbook||e;return`
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
            <span class="pill">${i(t.kanjiCount||0)} ${i(I("cardsToday"))}</span>
            <span class="pill">${i(f(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${g(t.pdfUrl||t.pdfFile||"")}" download="${g((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function Lw(e){const t=Lt(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Wr(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${hi(e)}.`:`Unlocks at level ${hi(e)}.`)}</p>
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
    `}function xw(){return r.activeLearnView===Xt?Pw():r.activeLearnView===Tt?Mw():au()}function Cw(){const e=od();if(e.kind==="review"){qe("review");return}if(r.route==="home"){vi(Po());return}su(e.nodeId)}function su(e){const t=Wn(e);if(!t){Xn();return}if(id(t)==="locked"){G(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===cs){qe("review");return}if(t.id===ds){yr("final-test");return}if(t.type==="textbook"){yr(t.id);return}Xn(Tt,t.id)}function ru(e){const t=String(e||"");return t&&(ne(t)||r.cards.find(n=>String(n.id)===t))||null}function Aw(){const e=le();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function pr(e){const t=kt(e);if(!t)return null;const n=hn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,c)=>{const l=yt(o)[0]||null,d=s[c%Math.max(s.length,1)]||s[0]||null,u=l?{jp:l.word||o.kanji,hiragana:l.reading||o.hiragana||"",translation:l.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:V(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:M(o),en:M(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:vr(t),source:"learning_path"}}function Tw(e){if(e===Se)return Aw();const t=r.learningPathLessonPayloads[e]||pr(e);if(!t)return[];const n=le(),s=[],a=(t.objectives||[]).map(f).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:f(t.title),text:f(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,c)=>{const l=ru(o.cardId);if(!l)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${c+1}`,kind:"kanji",eyebrow:l.jlpt||"N5",title:`${l.kanji} · ${M(l)}`,text:ob(l,{word:d?.jp||l.kanji,reading:d?.hiragana||l.hiragana||""}),note:d?.translation?f(d.translation):"",cardId:l.id,card:l,sentence:d})}),(t.exercises||[]).forEach(o=>{const c=(o.options||[]).map(l=>({value:String(l.value??l.id??l.label??l),label:f(l.label||l.text||l)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:f(o.prompt),text:f(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:c})}),s}function Iw(e,t=null){const n=Tw(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function Rw(e,t=Tt,n=[]){const s=dn(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=Zi({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,x(),s.activeSession)}function gr(e){const t=go(),n=t?.nodeId===e?t:Rw(e),s=Iw(e,n),a=s.filter(l=>l.kind==="quiz"),o=Object.keys(n.answers||{}).length,c=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:c,currentStep:s[c]||null,isResult:c>=s.length&&s.length>0}}function _w(e,t,n){var l;const s=dn(),a=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),c=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((l=s.completedNodes)[e]||(l[e]=a),s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===Se&&z(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=kt(e),u=r.learningPathLessonPayloads[e]||pr(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(v=>v.cardId),...hn(d).map(v=>v.id)].map(String).filter(Boolean))],h=Z();if(m.forEach(v=>{const w=ru(v);if(!w)return;ar(w,"learning_path"),fs(h,w.kanji);const N=se(D(w.id));N.state==="New"&&(r.progress.cards[w.id]=ge(N,c?"hard":"good"))}),d){ae.add(`n5:${d.id}`),h.completedLessons[d.id]=a,h.currentLessonId=Ue().find(N=>N.order===d.order+1)?.id||d.id,r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[d.id]=a,x({immediate:!0}),Vn()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const v=r.n5Meta?.rewards?.lessonCompleteXp||45,w=r.n5Meta?.rewards?.lessonCompleteMoon||6;z(v,w,`learning_path:${e}`),tt({title:`${Be().lessonComplete}: ${f(d.title)}`,message:Be().lessonCompleteText,xp:v,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),E("lesson_complete"),Le("lesson_complete",{lessonId:e,jlpt:"N5"})}}xa(),we(),X(),x()}function au(){r.n5Textbook?.items?.length||po();const e=le(),t=ad(),n=od(),s=Wn(hs()),a=an();return`
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
            <h2>${i(rd(hs()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(le().reviewQueue)} · ${i(Pe())}</span>
            <span class="pill">${i(le().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(le().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,c)=>{const l=id(o),d=l==="locked",u=f(o.summary)||"",m=o.id===cs?e.reviewAction:o.id===ds?e.openCheckpoint:o.type==="textbook"?e.openTextbook:l==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(l)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${c+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(nh(l))}</span>
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
    `}function Mw(){const e=r.activeLearnNodeId||hs(),t=Wn(e),n=le();if(!t)return au();if(t.id!==Se&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return po(),`
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
      `;t.type==="lesson"&&Xf(e);const s=gr(e),{session:a,steps:o,quizSteps:c,currentStep:l,isResult:d}=s;if(!o.length)return`
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
      `;const u=o.length,m=u?K(Math.min(a.stepIndex,u),u):0,h=a.answers?.[l?.id||""]||null,v=h?.selected||"",w=!!h?.correct,N=c.length?Math.round(Number(a.score||0)/Math.max(c.length,1)*100):100;return d?`
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
              <strong>${i(N)}%</strong>
              <div class="meter"><i style="width:${N}%"></i></div>
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
                    <span class="pill">${i(M(l.card))}</span>
                    ${l.card.hiragana?`<span class="pill">${i(V(l.card.hiragana))}</span>`:""}
                    ${l.card.onyomi?`<span class="pill">${i(V(l.card.onyomi))}</span>`:""}
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
                ${(l.options||[]).map(S=>{const A=v===S.value,b=S.value===l.answer;return`<button class="btn ${A?w?"success":"danger":h&&b?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(l.id)}" data-value="${g(S.value)}">${i(S.label)}</button>`}).join("")}
              </div>
              ${h?`<p class="lesson-player-feedback ${w?"is-good":"is-warning"}">${i(w?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(l.options||[]).find(S=>S.value===l.answer)?.label||l.answer}`)}</p>`:""}
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
    `}function Pw(){const e=Mo(),t=nu(e),n=!!(t&&Ee(t)),s=n?MS(t.id):[];(!r.activeCardId||!s.some(c=>c.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?ne(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?Lt(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(I("learn"))}</h1>
            <p>${i(t?Wr(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${Sw(e)}
        ${o?Nw(o):""}
        <div class="actions lesson-tabs">
          ${e.map($w).join("")}
        </div>
        <div class="study-layout">
          ${n?a?xp(a):gj(t):Lw(t)}
          ${n?rl(a,s.length):rl(null,0)}
        </div>
      </section>
    `}function Ew(){const e=sn(r.activeJlptLesson)||sn(ne(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(I("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=Lt(e.jlpt);if(!gt(e.jlpt))return iu(t||e);const n=Cg(e.jlpt),s=n.filter(c=>D(c.id).state==="Mastered").length,a=n.filter(c=>D(c.id).state!=="New").length,o={...Pl(),...Ml()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(f(e.title))}</h1>
            <p>${i(f(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${Bs("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(c=>{const l=gt(c.jlpt),d=c.jlpt===e.jlpt,u=g(rn(c.jlpt));return l?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(c.jlpt)}">${i(c.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(c.jlpt)}</button>`}).join("")}
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
                <span class="pill">${i(t.kanjiCount||0)} ${i(I("cardsToday"))}</span>
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
            ${P(o.available,n.length,e.jlpt,K(n.length,Math.max(r.cards.length,1)))}
            ${P(o.learned,a,`${s} ${o.mastered}`,K(a,Math.max(n.length,1)))}
          </div>
        </article>
        ${fp(e)}
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
    `}function Kw(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"").toUpperCase(),n=t?Lt(t):null;if(n)return r.activeTextbookLevel=n.jlpt,r.activeJlptLesson=n.jlpt,Fw(n);const s=p()==="ru"?{title:"Учебники Flash Kanji",description:"Функциональные страницы учебников JLPT N5–N1 с переходом к урокам, повторению и материалам внутри уровня.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам"}:{title:"Flash Kanji Textbooks",description:"Functional JLPT N5-N1 textbook pages with lesson links, review entry points, and level materials.",open:"Open page",pdf:"Download PDF",study:"Go to lessons"};return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${i(s.title)}</h1>
            <p>${i(s.description)}</p>
          </div>
          <div class="actions">
            ${Bs("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(Gt())}">${i(s.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${e.map(a=>`
            <article class="textbook-card ${gt(a.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(a.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(a.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(a.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(f(a.displayTitle||a.title||{}))}</h2>
                <p>${i(f(a.description||{}))}</p>
                ${gt(a.jlpt)?"":`<p class="textbook-lock-note">${i(rn(a.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(a.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(a.kanjiCount||0)} ${i(I("cardsToday"))}</span>
                  <span class="pill">${i(f(a.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(a.jlpt)}">${i(s.open)}</a>
                  ${gt(a.jlpt)?`<a class="btn ghost" href="${g(a.pdfUrl||a.pdfFile||"")}" download="${g((a.pdfFile||a.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(s.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(rn(a.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${gt(a.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(a.jlpt)}">${i(s.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(rn(a.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function iu(e){const t=String(e?.jlpt||"").toUpperCase(),n=Rl(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(f(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i(rn(t))}</p>
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
    `}function Fw(e){const t=String(e?.jlpt||"").toUpperCase();if(!gt(t))return iu(e);if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return Ow(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return Ab(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return uk(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return Wk(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return r.n1Textbook?.items?.length?Iy(e):(Jm().catch(()=>{}),ma?vd(ma):Dw(e,"N1"));r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(v=>r.lessons.find(w=>w.id===v)).filter(Boolean),s=r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(v)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(v=>v.id===r.activeTextbookSubroute)||sn(e.jlpt)||r.jlptLessons[0]:sn(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&mt(t,o.id,"textbook_page");const c=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},l=_l(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=f(e.recommendedCycle||{}),u=f(e.goal||{}),m=(e.previousLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join(""),h=(e.nextLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join("");return`
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
            ${Bs("textbook",{level:e.jlpt})}
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
              <span class="pill">${i(e.kanjiCount||0)} ${i(I("cardsToday"))}</span>
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
          ${P(e.jlpt,e.lessonCount||0,u,K(e.lessonCount||0,Math.max(1,r.jlptLessons.length)))}
          ${P(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",K(e.kanjiCount||0,Math.max(1,r.cards.length)))}
          ${P(p()==="ru"?"Уроки":"Lessons",a.length,c.practice,K(a.length,Math.max(1,r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${P(p()==="ru"?"Переход":"Jump",r.activeTextbookLevel===e.jlpt?1:0,c.lessonPage,r.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${js(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(c.outline)}</h2>
              <p>${i(f(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${P(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,c.outline,K(o.sections?.length||0,4))}
              ${P(p()==="ru"?"Практика":"Practice",o.practice?.length||0,c.practice,K(o.practice?.length||0,4))}
            </div>
          </article>
          ${fp(o)}
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
          ${a.map(v=>yw(v)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function Dw(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:`Готовлю интерактивный учебник ${t}`,text:"Подгружаю главы, карточки, грамматику и финальный тест. Сейчас откроется рабочая оболочка, не старый экран.",back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:`Preparing the interactive ${t} textbook`,text:"Loading lessons, cards, grammar, and the final test. The full app shell will open in a moment.",back:"All textbooks"};return`
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
          ${xn("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function Ow(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",fr();const t=String(r.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return Zw();if(t==="review")return Vw();const n=kt(t);return n?(Z().currentLessonId=n.id,mt("N5",n.id,"n5_lesson_page"),Et("N5",n,"n5_lesson_page"),Xw(e,n)):Bw(e)}function Bw(e){const t=lb(),n=Be(),s=Ue(),a=ab(),o=r.n5Meta||{},c=f(o.principle||{});return`
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
          ${xn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${P(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,K(t.studied,t.total))}
          ${P(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,K(t.completedLessons,s.length))}
          ${P(n.reviews,t.reviews,n.srs,K(t.reviews,Math.max(t.total,1)))}
          ${P(n.difficult,t.difficult,n.filterDifficult,K(t.difficult,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(l=>Uw(l)).join("")}
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

        ${js("N5")}
      </section>
    `}function Uw(e){const t=Ko(e.id),n=Be();let s=e.kanji.filter(a=>Z().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${K(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(cb(t))}</small>
      </a>
    `}function $s(){return r.progress.jlptLessonStudy=zc(Yi(),r.progress.jlptLessonStudy||{}),r.progress.jlptLessonStudy}function Jw(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function bt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Qn(e,t,n){const s=$s(),a=Jw(e,t?.id),o=Bc();let c=s.sessions[a];c||(c={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=c),c.level=String(e||c.level||"").toUpperCase(),c.lessonId=String(t?.id||c.lessonId||""),c.answers||(c.answers={}),c.phase=Uc(c.phase),c.startedAt||(c.startedAt=new Date().toISOString()),c.updatedAt||(c.updatedAt=new Date().toISOString());const l=Array.isArray(n)?n.length:0,d=l?n.findIndex(m=>!c.answers[m.id]):-1,u=Object.keys(c.answers||{}).length;return c.completedAt?(c.phase="done",c.currentIndex=l):d<0?(c.currentIndex=l,c.phase="test",c.testOpenedAt||(c.testOpenedAt=c.updatedAt||new Date().toISOString())):(c.currentIndex=d,c.phase!=="test"&&(c.phase="study")),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:c,key:a,answeredCount:u,currentIndex:c.currentIndex,total:l}}function zw(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function Gw(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(ri).join("")}
      </ul>
    `:""}function Hw(e){const t=Fr(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${cl(e)}
          ${n?`
            <div>
              <h3>${i(I("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function qw(e,t,n,s,a,o,c={}){if(!n)return"";const l=typeof c.examples=="function"?c.examples(n,t)||[]:[],d=typeof c.sentence=="function"?c.sentence(n,t):"",u=typeof c.extra=="function"?c.extra(n,t):"",m=c.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),v=Number(s||0),w=D(n.id),N=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(v+1)}</span>
              <span class="pill">${i(w.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(I("strokes"))}</span>`:""}
              ${jp(n)}
            </div>
            <h2>${i(M(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(v+1,a)} из ${a}`:`Kanji ${Math.min(v+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${Np(n,"onyomi",o.onyomi,n.onyomi)}
              ${Np(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${Gw(l)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${Hw(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g(N)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g(N)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function Ww(e,t,n,s,a){return`
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
    `}function mr(e,t,n,s,a={}){const o=Qn(e,t,n),c=zw(o,n),l=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||bt(e,t?.id,"player"),m=d?K(l,d):0,h=c?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(l+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":p()==="ru"?"Тест открыт":"Test open",v=c?M(c):s.lessonComplete;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(v)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${c?qw(e,t,c,o.currentIndex,d,s,a):Ww(e,t,s,d,l)}
      </article>
    `}function Xw(e,t){const n=Be(),s=hn(t),a=vr(t),o=Ko(t.id),c=Qn("N5",t,s);let l=o==="completed";const d=`n5:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(J=>Fo(J.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(J=>Z().studiedKanji[J.kanji]).length,w=t.kanji.length,N=v>=w,S=!l&&h&&N,A=t.kanji.filter(J=>Z().difficultKanji[J]).join(" · "),b=Ue().find(J=>J.order===t.order+1),$=bt("N5",t.id,"player"),U=bt("N5",t.id,"test");return`
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
            ${P(n.studiedKanji,`${Math.min(c.answeredCount,w)}/${w}`,n.kanji,K(c.answeredCount,w))}
            ${P(n.exercises,`${m}/${a.length}`,n.correct,K(m,a.length))}
          </div>
        </article>

        ${mr("N5",t,s,n,{playerId:$,answerAction:"jlpt-lesson-answer",examples:J=>yt(J),sentence:J=>Qw(J,t)})}

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
                <small>${i(f({ru:J.ru,en:J.en}))}</small>
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
            ${a.map(J=>ou(J)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(J=>Z().studiedKanji[J.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!l&&!S?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${g(t.id)}" ${u||!S?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#textbooks/N5/${g(b.id)}" data-action="n5-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function Qw(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function ou(e){const t=Be(),n=Fo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(yu(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${lu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${lu(e,n)}
      </article>
    `}function lu(e,t){if(!t)return"";const n=Be(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Vw(e){const t=Be(),n=Z().activeReviewMode||"due",s=Nb(n);return`
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
          ${s.map((a,o)=>Yw(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Yw(e,t){const n=Be(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Mn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(M(e))}</h3>
        <p>${i(yt(e)[0]?.word||e.hiragana||"")} · ${i(yt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Zw(e){const t=Be(),n=r.n5FinalTest||{},s=bu(),a=Z().finalTest,o=Jt(a,s),c=o.answered,l=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const h=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==h)&&(a.percent=h),a.completedAt||(a.completedAt=new Date().toISOString()),x()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${P(t.questions,`${c}/${s.length}`,t.finalTest,K(c,s.length))}
          ${P(t.score,u||m>0?`${m}%`:"—",`${n.passingPercent||80}%`,u||m>0?m:0)}
          ${P(t.mistakes,u?(a.mistakes||[]).length:0,t.difficult,u?K((a.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${xt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,v)=>eb(h,v)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${xt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function eb(e,t){const n=Z().finalTest.answers?.[e.id],s=!!Z().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${g(Ts("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(c=>{const l=n===c.value;return`<button class="btn ${s&&c.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(c.value)}">${i(c.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Be().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Be(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function cu(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function du(e){return Q(e)||String(e||"").toUpperCase()}function uu(e){const t=du(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function Eo(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function pu(e){return V(Ar(String(e?.text||"")).replace(/\s+/g," ").trim())}function tb(e){const t=Q(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function nb(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return De.forEach(n=>{uu(n).forEach((s,a)=>{const o=Eo(s),c=pu(s),l=nl({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:c,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,tb(n));l&&(l.kind="cloze",l.tiles=Nn(l,e),l.source="markdown",l.sourceId=String(s.id||""),l.sourceKind="markdown",l.sourceTitle=o.title,l.title=o.title,l.genre=s.genre||"",l.goal=s.goal||"",l.passageSource=s.source||"",l.questions=Array.isArray(s.questions)?s.questions:[],l.level=n,l.order=a+1,t.push(l))})}),t}function sb(e){const t=Eo(e),n=pu(e),s=n?Cp(n):"",a=f(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(ol())}</summary>
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
            <span>${i(ol())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function js(e){const t=uu(e);if(!t.length)return"";const n=cu(),s=du(e),a=Jr(s,"textbook_reading_block"),o=Es(s);return(a||o)&&x(),`
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
          ${t.map((c,l)=>rb(c,s,l)).join("")}
        </div>
      </section>
    `}function rb(e,t,n){const s=cu(),a=Eo(e),o=Array.isArray(e?.questions)?e.questions:[];return`
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
        ${sb(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(c=>`<li>${i(c)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function fr(){r.progress.n5Course=Hc(eo(),r.progress.n5Course||{});const e=Ue();!kt(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n5Course.completedLessons[s.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function Z(){return fr()}function Ue(){return r.n5Textbook?.items||[]}function kt(e){const t=String(e||"");return t&&Ue().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function ab(){return kt(Z().currentLessonId)||Ue().find(e=>!Z().completedLessons[e.id])||Ue()[0]||null}function hn(e){return(e?.kanji||[]).map(t=>ib(t,e)).filter(Boolean)}function Ot(){const e=new Set;return Ue().flatMap(t=>hn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function ib(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(c=>c.kanji===n)||null,a=r.cards.find(c=>c.kanji===n&&String(c.jlpt||"").toUpperCase()==="N5")||r.cards.find(c=>c.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?ba({...a,lessonId:a.lessonId||o},s):a||(s?ba({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function hr(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:V(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:V(e.hiragana||""),romaji:e.romaji||"",translation:M(e)}]}function yt(e){return hr(e,e.examples)}function ob(e,t){const n=t?.word||e.kanji,s=V(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${M(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${M(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function lb(){const e=Ot(),t=Z(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{D(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:Vn(),reviews:e.reduce((s,a)=>s+Number(D(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Ko(e){const t=Z(),n=`n5:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":kt(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function cb(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Vn(){return Ue().filter(t=>Ko(t.id)==="completed").length}function vr(e){const t=hn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(S=>[S.type,S.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(S=>[S.type,S])),o=S=>a[S]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:M(l),kanji:l.kanji,cardId:l.id,options:Bt({value:l.id,label:M(l)},t.slice(1).map(S=>({value:S.id,label:M(S)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:M(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Bt({value:d.kanji,label:d.kanji},t.filter(S=>S.id!==d.id).map(S=>({value:S.kanji,label:S.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=yt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:Bt({value:m.reading,label:m.reading},t.flatMap(S=>yt(S).map(A=>({value:A.reading,label:A.reading}))).filter(S=>S.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Bt({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(S=>({value:f({ru:S.ru,en:S.en}),label:f({ru:S.ru,en:S.en})})),1),...o("sentence")});const v=t[3]||t[0],w=yt(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Re(w)}В»?`:`Which word matches "${Re(w)}"?`,answer:w.word,answerLabel:w.word,kanji:v.kanji,cardId:v.id,options:Bt({value:w.word,label:w.word},t.flatMap(S=>yt(S).map(A=>({value:A.word,label:A.word}))).filter(S=>S.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];return c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${M(N)}`:`Type the kanji for: ${M(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")}),c.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(S=>({...S,level:"N5",lessonId:e.id}))}function Bt(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(l=>{const d=String(l.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(l))}),Ot().forEach(l=>{if(a.length>=4)return;const d={value:l.id,label:l.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const c=n%a.length;return[...a.slice(c),...a.slice(0,c)]}function gu(e){for(const t of Ue()){const n=vr(t).find(s=>s.id===e);if(n)return n}return null}function vn(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function wr(e,t,n){return vn(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function db(e,t,n){const s=Q(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const a=e.exerciseSrs[String(n.id)]||null;if(a)return ns(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=Ms(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function ub(e,t,n,s){if(!e||!n)return;const a=Q(t);a&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=ns(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function br(e,t,n,s,a,o={}){const c=Q(e);if(!c||!t||!n)return;const l=new Date().toISOString(),d=vn(c,n.id);if(d&&r.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:a,checkedAt:l};d?(r.reviewExerciseResults||(r.reviewExerciseResults={}),r.reviewExerciseResults[n.id]=u,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const m=se(db(t,c,n)||Ms(c,n.lessonId||"",n.id,n)),h=ge(m,a?"good":"again");if(ub(t,c,n,h),tn(m,h,a?"good":"again"),we(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=l,o.markCompleted?.(l),(o.markStudied||(()=>{}))();const w=Number(o.rewardXp||0),N=Number(o.rewardMoon||0);(w||N)&&z(w,N,o.rewardKey||`exercise:${n.id}`)}}else if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const w=n.answerLabel||n.answer;w&&o.markWordMistake?.(w)}d&&(r.pendingFocus="__scroll-top__"),T(),x(),Pt("textbook exercise post-render effects",()=>{E(a?"answer_correct":"answer_wrong"),X()})}function mu(e){const t=Q(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function fu(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=vn(e.level,e.id,"reading"),c=se(Tn(e)||An(e));if(r.reviewExerciseResults||(r.reviewExerciseResults={}),e.kind==="cloze"){c.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():c.selectedIndices||[],c.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(A=>({kanji:String(A?.kanji||""),reading:String(A?.reading||"")})).filter(A=>A.kanji):c.selectedTiles||[],c.selectedText=String(t||""),c.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():c.wrongIndexes||[],c.completed=!0,c.completedAt=a,c.correct=!!n,c.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},ss(e,c),r.reviewExerciseResults[e.id]=se(c),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1;const w=se(c),N=ge(w,n?"good":"again");N.selectedIndices=c.selectedIndices,N.selectedTiles=c.selectedTiles,N.selectedText=c.selectedText,N.wrongIndexes=c.wrongIndexes,N.completed=!0,N.completedAt=a,N.correct=!!n,N.answers=c.answers,ss(e,N),r.reviewExerciseResults[e.id]=se(N),tn(w,N,n?"good":"again"),we();const S=mu(e);n?z(S.xp,S.moon,`reading:${e.id}`):z(Math.max(1,Math.round(S.xp*.35)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),o&&El("reading-cloze"),T(),x(),Pt("reading cloze post-render effects",()=>{E(n?"answer_correct":"answer_wrong"),X()});return}const l=e.question||e.questions?.[0]||null,d=String(s.questionKey||l?.id||e.id);if(c.answers||(c.answers={}),c.answers[d])return;if(c.answers[d]={selected:String(t||""),correct:!!n,checkedAt:a},c.completed=!!d&&Object.keys(c.answers).length>=vl(),c.completedAt=c.completed?a:c.completedAt||null,c.correct=c.completed?Object.values(c.answers).every(w=>!!w?.correct):!1,c.selectedText=String(t||""),ss(e,c),r.reviewExerciseResults[e.id]=se(c),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1,x(),!c.completed){T(),Pt("reading question post-render sound",()=>{E(n?"answer_correct":"answer_wrong")});return}const u=se(c),m=Object.values(c.answers).every(w=>!!w?.correct),h=ge(u,m?"good":"again");h.answers=c.answers,h.completed=!0,h.completedAt=a,h.correct=m,h.selectedText=String(t||""),h.wrongQuestions=Object.entries(c.answers).filter(([,w])=>!w?.correct).map(([w])=>w),ss(e,h),r.reviewExerciseResults[e.id]=se(h),tn(u,h,m?"good":"again"),we();const v=mu(e);m?z(v.xp,v.moon,`reading:${e.id}`):z(Math.max(1,Math.round(v.xp*.25)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),o&&El("reading-exercise"),T(),x(),Pt("reading exercise post-render effects",()=>{E(n?"answer_correct":"answer_wrong"),X()})}function pb(e){const t=Is();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");fu(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function gb(e){const t=Is();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=se(Tn(n)||An(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,jt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){G(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),ss(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=se(s),x(),s.selectedIndices.length>=a){hu();return}T()}function mb(){const e=Is();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=se(Tn(t)||An(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=se(n),ss(t,n),x(),T())}function fb(){const e=Is();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=se(Tn(t)||An(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=se(n),ss(t,n),x(),T())}function hu(){const e=Is();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=jt(t),s=se(Tn(t)||An(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){G(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),c=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),l=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);fu(t,o.map(d=>d.kanji).join(""),c,{selectedIndices:a,selectedTiles:o,wrongIndexes:l})}function hb(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,T()}function Fo(e){return wr("N5",Z(),e)}function vb(e){const t=gu(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;vu(t,n,s)}function wb(e){const t=gu(e);if(!t)return;const n=document.getElementById(yu(t.id)),s=n?String(n.value||"").trim():"";vu(t,s,s===t.answer)}function vu(e,t,n){const s=Z();br("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>Ss(e.kanji,e.cardId),markDifficult:()=>kr(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function bb(e,t,n,s){var h;const a=Q(e)||String(e||"").toUpperCase(),o=a==="N5"?kt(t):a==="N4"?wn(t):a==="N3"?kn(t):a==="N2"?$n(t):a==="N1"?Yn(t):null;if(!o)return;const c=cd(a,o),l=c.find(v=>String(v.id)===String(n))||ne(n);if(!l)return;const d=Qn(a,o,c);if(d.session.answers?.[l.id])return;const u=new Date().toISOString();d.session.answers[l.id]={remembered:!!s,rating:s?"good":"again",answeredAt:u};const m=c.findIndex(v=>String(v.id)===String(l.id));d.session.currentIndex=m>=0?m+1:Math.min(Number(d.session.currentIndex||0)+1,c.length),d.session.phase=d.session.currentIndex>=c.length?"test":"study",d.session.updatedAt=u,d.session.phase==="test"&&((h=d.session).testOpenedAt||(h.testOpenedAt=u)),r.pendingFocus=null,un(),x(),nd(`${a} lesson SRS post-render commit`,()=>{const v=s?"good":"again";a==="N5"?wu(l.id,v,"review"):a==="N4"?Au(l.id,v,"review"):a==="N3"?Bu(l.id,v,"review"):a==="N2"?Zu(l.id,v,"review"):a==="N1"&&dp(l.id,v,"review")})}function wu(e,t,n="review"){const s=ne(e);if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=ge(l,o,c);r.progress.cards[s.id]=d,tn(l,d,c),we(),Ss(s.kanji,s.id),Z().srsKanji[s.kanji]=new Date().toISOString(),a?(kr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,z(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`)):Je(t)?(kr(s.kanji,s.id),r.progress.totalWrong+=1,z(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,z(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`)),un(),x(),Pt("N5 SRS post-render effects",()=>{E(Je(t)?"answer_wrong":"answer_correct"),X()})}function kb(e){const t=ne(e);if(!t)return;const n=Z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ss(t.kanji,t.id),z(8,1,`n5_writing:${t.id}`)),X(),x(),T()}function yb(e){const t=kt(e);if(!t)return;const n=Z(),s=`n5:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){T();return}const a=hn(t);if(a.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof G=="function"&&G(v);return}const c=vr(t);if(!(c.length>0&&c.every(v=>Fo(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(v);return}ae.add(s),hn(t).forEach(v=>{Ss(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const w=D(v.id);w.state==="New"&&(r.progress.cards[v.id]=ge(se(w),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Ue().find(v=>v.order===t.order+1)?.id||t.id;const d=$s(),u=d.sessions[n5SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=a.length,d.activeSessionKey=n5SessKey,d.lastUpdatedAt=v}Z(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),x({immediate:!0}),Vn()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const m=r.n5Meta?.rewards?.lessonCompleteXp||45,h=r.n5Meta?.rewards?.lessonCompleteMoon||6;z(m,h,`n5_lesson:${t.id}`),Os("N5",t.id),tt({title:`${Be().lessonComplete}: ${f(t.title)}`,message:Be().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),E("lesson_complete"),X(),x(),T()}function Ss(e,t=null){if(!e)return;const n=Z();fs(n,e)}function kr(e,t=null,n=!0){if(e&&(Z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=ge(se(s),"again"))}}function $b(e){const t=kt(e);t&&(zt("textbook-lesson",{level:"N5",lessonId:t.id}),Z().currentLessonId=t.id,mt("N5",t.id,"n5_lesson_open"),Et("N5",t,"n5_lesson_open"),yr(t.id))}function jb(){yr("")}function Sb(e=null){e&&(Z().activeReviewMode=e),yr("review")}function yr(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";nt(t),x(),oe(),Kt()}function Nb(e="due"){const t=Date.now(),n=Z(),s=Ot();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function bu(){const e=Ot(),t=Ue(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const c=e[o*7%e.length]||e[o%e.length],l=n[o%n.length],d=t.find(u=>u.kanji.includes(c.kanji))||t[0];a.push(Lb(l,c,d,o))}return a.filter(Boolean)}function Lb(e,t,n,s){const o=yt(t)[0],c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:M(t),options:Bt({value:t.id,label:M(t)},Ot().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:M(l)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:Bt({value:o.reading,label:o.reading},Ot().flatMap(l=>yt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Bt({value:l,label:l},Ue().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Re(o),answer:l,answerLabel:l,options:Bt({value:l,label:l},Ot().flatMap(d=>yt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==l),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${M(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${M(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:M(t),answer:t.kanji,answerLabel:t.kanji,options:Bt({value:t.kanji,label:t.kanji},Ot().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function xb(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Z().finalTest.answers[t]=n,x(),T())}function ku(e=!1){if(r.finalTestBusy)return;const t=Z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){T();return}r.finalTestBusy=!0;try{const n=bu(),s=r.n5FinalTest||{},a=Be(),o=Jt(t,n),c=Z$(s),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const $=o.firstMissingId?`#${Ts("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=$,x();return}let u=0;const m=[],h=[];n.forEach($=>{const U=String(t.answers?.[$.id]||"").trim();U===$.answer?(u+=1,Ss($.kanji,$.cardId)):(U||h.push($),m.push({id:$.id,kanji:$.kanji,answer:$.answerLabel,selected:U}),kr($.kanji,$.cardId))});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,S=Math.max(0,m.length-h.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=S,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||120),U=Number(s?.rewards?.completeMoon||20);A+=$,b+=U,z($,U,"n5_final_complete")}if(t.passed&&!N){const $=Number(s?.rewards?.passXp||80),U=Number(s?.rewards?.passMoon||12);A+=$,b+=U,z($,U,"n5_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,Hr("N5",t),Z(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),x({immediate:!0}),r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:S,unanswered:h.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),x()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,T()}}function Cb(){Z().finalTest=eo().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,x(),T()}function yu(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Ab(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=Do();t.opened||(t.opened=!0,X(),x());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Bb();if(n==="review")return Pb();if(n==="kanji")return Kb();if(n==="grammar")return Fb();if(n==="reading")return Db();if(n==="listening")return Ob();const s=wn(n);return s?(W().currentLessonId=s.id,mt("N4",s.id,"n4_lesson_page"),Et("N4",s,"n4_lesson_page"),Rb(e,s)):Tb(e)}function Tb(e){const t=zb(),n=ye(),s=at(),a=Jb(),o=r.n4Meta||{},c=f(o.principle||{});return`
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
          ${xn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${P(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,K(t.studied,t.total))}
          ${P(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,K(t.completedLessons,s.length))}
          ${P(n.completedGrammar,`${t.completedGrammar}/${r.n4Meta?.grammarCount||r.n4Grammar.length}`,n.grammar,K(t.completedGrammar,r.n4Meta?.grammarCount||r.n4Grammar.length))}
          ${P(n.reviews,t.reviews,n.srs,K(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(l=>Ib(l)).join("")}
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

        ${js("N4")}
      </section>
    `}function Ib(e){const t=Lu(e.id),n=ye();let s=e.kanji.filter(a=>W().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${K(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Gb(t))}</small>
      </a>
    `}function Rb(e,t){const n=ye(),s=$r(t),a=za(t),o=Lu(t.id),c=Qn("N4",t,s);let l=o==="completed";const d=`n4:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(J=>Bo(J.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(J=>W().studiedKanji[J.kanji]).length,w=t.kanji.length,N=v>=w,S=!l&&h&&N,A=t.kanji.filter(J=>W().difficultKanji[J]).join(" · "),b=at().find(J=>J.order===t.order+1),$=bt("N4",t.id,"player"),U=bt("N4",t.id,"test");return`
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
              ${t.grammarFocus.map(J=>`<span class="pill">${i(J)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${P(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,K(c.answeredCount,t.kanji.length))}
            ${P(n.exercises,`${m}/${a.length}`,n.correct,K(m,a.length))}
          </div>
        </article>

        ${mr("N4",t,s,n,{playerId:$,answerAction:"jlpt-lesson-answer",examples:J=>it(J),sentence:J=>_b(J,t)})}

        ${Mb(t)}

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
                <small>${i(f({ru:J.ru,en:J.en}))}</small>
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
            ${a.map(J=>$u(J)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(J=>W().studiedKanji[J.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!l&&!S?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${g(t.id)}" ${u||!S?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n4/${g(b.id)}" data-action="n4-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function _b(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(ye().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Mb(e){const t=ye(),n=(e.grammarFocus||[]).map(s=>Oo(s)).filter(Boolean).slice(0,3);return n.length?`
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
    `:""}function $u(e){const t=ye(),n=Bo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(_u(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${ju(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${ju(e,n)}
      </article>
    `}function ju(e,t){if(!t)return"";const n=ye(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Pb(e){const t=ye(),n=W().activeReviewMode||"due",s=ok(n);return`
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
          ${s.map((a,o)=>Eb(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Eb(e,t){const n=ye(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Mn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(M(e))}</h3>
        <p>${i(it(e)[0]?.word||e.hiragana||"")} · ${i(it(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Kb(e){const t=ye(),n=We();return`
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
              <h3>${i(M(s))}</h3>
              <p>${i(it(s)[0]?.word||"")} · ${i(it(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Fb(e){const t=ye();return`
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
          ${P(t.completedGrammar,`${Object.keys(W().completedGrammar||{}).length}/${r.n4Grammar.length}`,t.grammar,K(Object.keys(W().completedGrammar||{}).length,r.n4Grammar.length))}
          ${P(t.questions,r.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${r.n4Grammar.map(n=>{const s=W().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function Db(e){const t=ye(),n=Jr("N4","n4_reading_page"),s=Es("N4");return(n||s)&&x(),`
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
          ${r.n4Reading.map(a=>Su(a,"reading")).join("")}
        </div>
      </section>
    `}function Ob(e){const t=ye();return`
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
          ${r.n4Listening.map(n=>Su(n,"listening")).join("")}
        </div>
      </section>
    `}function Su(e,t){const n=ye(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],a=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
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
    `}function Bb(e){const t=ye(),n=r.n4FinalTest||{},s=Iu(),a=W().finalTest,o=Jt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),x()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${P(t.questions,`${c}/${s.length}`,t.finalTest,K(c,s.length))}
          ${P(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${P(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?K((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n4-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${xt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Ub(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${xt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Ub(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(ye().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function ye(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Do(){r.progress.n4Course=qc(to(),r.progress.n4Course||{});const e=at();!wn(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n4Course.completedLessons[s.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function W(){return Do()}function at(){return r.n4Textbook?.items||[]}function wn(e){const t=String(e||"");return t&&at().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function Jb(){return wn(W().currentLessonId)||at().find(e=>!W().completedLessons[e.id])||at()[0]||null}function $r(e){return(e?.kanji||[]).map(t=>Nu(t)).filter(Boolean)}function We(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>Nu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Nu(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ka(s,n):s||(n?ka({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Oo(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function it(e){return hr(e,e.examples)}function zb(){const e=We(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n4:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Lu(e){const t=W(),n=`n4:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":wn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Gb(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function za(e){const t=$r(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:M(l),kanji:l.kanji,cardId:l.id,options:Xe({value:l.id,label:M(l)},t.slice(1).map(b=>({value:b.id,label:M(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:M(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Xe({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=it(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Xe({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>it(b).map($=>({value:$.reading,label:$.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Xe({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=it(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Re(w)}В»?`:`Which word matches "${Re(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Xe({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>it(b).map($=>({value:$.word,label:$.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${M(N)}`:`Type the kanji for: ${M(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const S=Oo(e.grammarFocus?.[0]);S&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(S.question||S.explanation),answer:S.answer,answerLabel:S.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:S.id,options:Xe({value:S.answer,label:S.answer},S.options.filter(b=>b!==S.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:f({ru:A.ru,en:A.en}),answerLabel:f({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Xe({value:f({ru:A.ru,en:A.en}),label:f({ru:A.ru,en:A.en})},n.filter(b=>b.jp!==A.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N4",lessonId:e.id}))}function Xe(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),We().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function xu(e){for(const t of at()){const n=za(t).find(s=>s.id===e);if(n)return n}return null}function Bo(e){return wr("N4",W(),e)}function Hb(e){const t=xu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Cu(t,s,a)}function qb(e){const t=xu(e);if(!t)return;const n=document.getElementById(_u(t.id)),s=n?String(n.value||"").trim():"";Cu(t,s,s===t.answer)}function Cu(e,t,n){const s=W();br("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>Ns(e.kanji,e.cardId),markDifficult:()=>jr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Au(e,t,n="review"){const s=ne(e)||We().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=ge(l,o,c);r.progress.cards[s.id]=d,tn(l,d,c),we(),Ns(s.kanji,s.id),W().srsKanji[s.kanji]=new Date().toISOString(),a?(jr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,z(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`)):Je(t)?(jr(s.kanji,s.id),r.progress.totalWrong+=1,z(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,z(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`)),un(),x(),Pt("N4 SRS post-render effects",()=>{E(Je(t)?"answer_wrong":"answer_correct"),X()})}function Wb(e){const t=ne(e)||We().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ns(t.kanji,t.id),z(9,1,`n4_writing:${t.id}`)),X(),x(),T()}function Xb(e){const t=wn(e);if(!t)return;const n=W(),s=`n4:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){T();return}const a=$r(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(w);return}const c=za(t);if(!(c.length>0&&c.every(w=>Bo(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(w);return}ae.add(s),$r(t).forEach(w=>{Ns(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=D(w.id);N.state==="New"&&(r.progress.cards[w.id]=ge(se(N),"good"))}),(t.grammarFocus||[]).map(w=>Oo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=at().find(w=>w.order===t.order+1)?.id||t.id;const d=$s(),u=d.sessions[n4SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n4SessKey,d.lastUpdatedAt=w}W(),Object.keys(n.completedLessons||{}).length>=9&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"),r.progress.unlockedJlptLevels.includes("N3")||r.progress.unlockedJlptLevels.push("N3"));const h=r.n4Meta?.rewards?.lessonCompleteXp||65,v=r.n4Meta?.rewards?.lessonCompleteMoon||8;z(h,v,`n4_lesson:${t.id}`),Os("N4",t.id),tt({title:`${ye().lessonComplete}: ${f(t.title)}`,message:ye().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),E("lesson_complete"),X(),x(),T()}function Ns(e,t=null){if(!e)return;const n=W();fs(n,e)}function jr(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=ge(se(s),"again"))}}function Qb(e,t=""){const n=r.n4Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=W();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),z(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,E("answer_correct")):a||(r.progress.totalWrong+=1,E("answer_wrong")),we(),X(),x(),T()}function Vb(e,t="0",n=""){Tu("reading",e,t,n)}function Yb(e,t="0",n=""){Tu("listening",e,t,n)}function Tu(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(w=>w.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=W(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!v[o.id]){v[o.id]=new Date().toISOString();const w=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,N=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;z(w,N,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,E("answer_correct")}else d||(r.progress.totalWrong+=1,E("answer_wrong"));we(),X(),x(),T()}function Zb(e){const t=wn(e);t&&(zt("textbook-lesson",{level:"N4",lessonId:t.id}),W().currentLessonId=t.id,mt("N4",t.id,"n4_lesson_open"),Et("N4",t,"n4_lesson_open"),bn(t.id))}function ek(){bn("")}function tk(e=null){e&&(W().activeReviewMode=e),bn("review")}function nk(){bn("kanji")}function sk(){bn("grammar")}function rk(){bn("reading")}function ak(){bn("listening")}function ik(){bn("final-test")}function bn(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";nt(t),X(),x(),oe(),Kt()}function ok(e="due"){const t=Date.now(),n=W(),s=We();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Iu(){const e=We();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=at().find(d=>d.kanji.includes(o.kanji))||at()[0];s.push(lk(c,o,l,a))}return s.filter(Boolean)}function lk(e,t,n,s){const o=it(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:M(t),options:Xe({value:t.id,label:M(t)},We().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:M(l)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Xe({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},We().flatMap(l=>it(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Xe({value:l,label:l},at().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Re(o),answer:l,answerLabel:l,options:Xe({value:l,label:l},We().flatMap(d=>it(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(l)return{id:`n4-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:Xe({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n4-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${M(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${M(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:M(t),answer:t.kanji,answerLabel:t.kanji,options:Xe({value:t.kanji,label:t.kanji},We().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function ck(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,x(),T())}function Ru(e=!1){if(r.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){T();return}r.finalTestBusy=!0;try{const n=Iu(),s=r.n4FinalTest||{},a=ye(),o=Jt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const $=o.firstMissingId?`#${Ts("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=$,x();return}let u=0;const m=[],h=[];n.forEach($=>{const U=String(t.answers?.[$.id]||"").trim();if(U===$.answer){if(u+=1,$.kanji&&Ns($.kanji,$.cardId),$.grammarId){const J=W();J.completedGrammar[$.grammarId]=J.completedGrammar[$.grammarId]||d}}else U||h.push($),m.push({id:$.id,kanji:$.kanji||"",answer:$.answerLabel,selected:U}),$.kanji&&jr($.kanji,$.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,S=Math.max(0,m.length-h.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=S,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||180),U=Number(s?.rewards?.completeMoon||35);A+=$,b+=U,z($,U,"n4_final_complete")}if(t.passed&&!N){const $=Number(s?.rewards?.passXp||90),U=Number(s?.rewards?.passMoon||15);A+=$,b+=U,z($,U,"n4_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,Hr("N4",t),W(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:S,unanswered:h.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),x()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,T()}}function dk(){W().finalTest=to().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,x(),T()}function _u(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function uk(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=Jo();t.opened||(t.opened=!0,X(),x());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Sk();if(n==="review")return wk();if(n==="kanji")return kk();if(n==="grammar")return yk();if(n==="reading")return $k();if(n==="listening")return jk();const s=kn(n);return s?(H().currentLessonId=s.id,mt("N3",s.id,"n3_lesson_page"),Et("N3",s,"n3_lesson_page"),mk(e,s)):pk(e)}function pk(e){const t=xk(),n=fe(),s=ot(),a=Lk(),o=r.n3Meta||{},c=f(o.principle||{});return`
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
          ${xn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${P(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,K(t.studied,t.total))}
          ${P(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,K(t.completedLessons,s.length))}
          ${P(n.completedGrammar,`${t.completedGrammar}/${r.n3Meta?.grammarCount||r.n3Grammar.length}`,n.grammar,K(t.completedGrammar,r.n3Meta?.grammarCount||r.n3Grammar.length))}
          ${P(n.completedReading,`${t.completedReading}/${r.n3Meta?.readingCount||r.n3Reading.length}`,n.readingN3,K(t.completedReading,r.n3Meta?.readingCount||r.n3Reading.length))}
          ${P(n.completedListening,`${t.completedListening}/${r.n3Meta?.listeningCount||r.n3Listening.length}`,n.listeningN3,K(t.completedListening,r.n3Meta?.listeningCount||r.n3Listening.length))}
          ${P(n.reviews,t.reviews,n.srs,K(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(l=>gk(l)).join("")}
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

        ${js("N3")}
      </section>
    `}function gk(e){const t=Fu(e.id),n=fe();let s=e.kanji.filter(a=>H().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${K(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Ck(t))}</small>
      </a>
    `}function mk(e,t){const n=fe(),s=Sr(t),a=Ga(t),o=Fu(t.id),c=Qn("N3",t,s);let l=o==="completed";const d=`n3:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(O=>Go(O.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(O=>H().studiedKanji[O.kanji]).length,w=t.kanji.length,N=v>=w,S=!l&&h&&N,A=t.kanji.filter(O=>H().difficultKanji[O]).join(" · "),b=ot().find(O=>O.order===t.order+1),$=Mu(t),U=$?!!H().completedReading[$.id]:!1,J=bt("N3",t.id,"player"),os=bt("N3",t.id,"test");return`
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
              ${t.grammarFocus.map(O=>`<span class="pill">${i(O)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${P(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,K(c.answeredCount,t.kanji.length))}
            ${P(n.exercises,`${m}/${a.length}`,n.correct,K(m,a.length))}
          </div>
        </article>

        ${mr("N3",t,s,n,{playerId:J,answerAction:"jlpt-lesson-answer",examples:O=>lt(O),sentence:O=>hk(O,t)})}

        ${vk(t)}

        ${fk(t)}

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
                <small>${i(f({ru:O.ru,en:O.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(os)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(O=>Pu(O)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(O=>H().studiedKanji[O.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${$?`<span class="pill">${i(n.miniReadingTitle)}: ${i(U?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!l&&!S?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${g(t.id)}" ${u||!S?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n3/${g(b.id)}" data-action="n3-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Mu(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function fk(e){const t=fe(),n=Mu(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Uo(n,"reading")}
      </section>
    `:""}function hk(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(fe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function vk(e){const t=fe(),n=(e.grammarFocus||[]).map(s=>zo(s)).filter(Boolean).slice(0,3);return n.length?`
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
    `:""}function Pu(e){const t=fe(),n=Go(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Gu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Eu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Eu(e,n)}
      </article>
    `}function Eu(e,t){if(!t)return"";const n=fe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function wk(e){const t=fe(),n=H().activeReviewMode||"due",s=zk(n);return`
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
          ${s.map((a,o)=>bk(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function bk(e,t){const n=fe(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Mn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(M(e))}</h3>
        <p>${i(lt(e)[0]?.word||e.hiragana||"")} · ${i(lt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function kk(e){const t=fe(),n=Qe();return`
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
              <h3>${i(M(s))}</h3>
              <p>${i(lt(s)[0]?.word||"")} · ${i(lt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function yk(e){const t=fe();return`
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
          ${P(t.completedGrammar,`${Object.keys(H().completedGrammar||{}).length}/${r.n3Grammar.length}`,t.grammar,K(Object.keys(H().completedGrammar||{}).length,r.n3Grammar.length))}
          ${P(t.questions,r.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${r.n3Grammar.map(n=>{const s=H().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function $k(e){const t=fe(),n=Jr("N3","n3_reading_page"),s=Es("N3");return(n||s)&&x(),`
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
          ${r.n3Reading.map(a=>Uo(a,"reading")).join("")}
        </div>
      </section>
    `}function jk(e){const t=fe();return`
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
          ${r.n3Listening.map(n=>Uo(n,"listening")).join("")}
        </div>
      </section>
    `}function Uo(e,t){const n=fe(),s=t==="reading"?H().completedReading[e.id]:H().completedListening[e.id],a=t==="reading"?H().readingAnswers:H().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
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
    `}function Sk(e){const t=fe(),n=r.n3FinalTest||{},s=Ju(),a=H().finalTest,o=Jt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),x()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${P(t.questions,`${c}/${s.length}`,t.finalTest,K(c,s.length))}
          ${P(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${P(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?K((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n3-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${xt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Nk(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${xt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Nk(e,t){const n=H().finalTest.answers?.[e.id],s=!!H().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(fe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function fe(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Jo(){r.progress.n3Course=Wc(no(),r.progress.n3Course||{});const e=ot();!kn(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n3Course.completedLessons[s.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function H(){return Jo()}function ot(){return r.n3Textbook?.items||[]}function kn(e){const t=String(e||"");return t&&ot().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function Lk(){return kn(H().currentLessonId)||ot().find(e=>!H().completedLessons[e.id])||ot()[0]||null}function Sr(e){return(e?.kanji||[]).map(t=>Ku(t)).filter(Boolean)}function Qe(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>Ku(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Ku(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ya(s,n):s||(n?ya({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function zo(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function lt(e){return hr(e,e.examples)}function xk(){const e=Qe(),t=H(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n3:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Fu(e){const t=H(),n=`n3:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":kn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Ck(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Ga(e){const t=Sr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:M(l),kanji:l.kanji,cardId:l.id,options:Ve({value:l.id,label:M(l)},t.slice(1).map(b=>({value:b.id,label:M(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:M(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ve({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=lt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Ve({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>lt(b).map($=>({value:$.reading,label:$.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ve({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=lt(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Re(w)}В»?`:`Which word matches "${Re(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Ve({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>lt(b).map($=>({value:$.word,label:$.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${M(N)}`:`Type the kanji for: ${M(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const S=zo(e.grammarFocus?.[0]);S&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(S.question||S.explanation),answer:S.answer,answerLabel:S.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:S.id,options:Ve({value:S.answer,label:S.answer},S.options.filter(b=>b!==S.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:f({ru:A.ru,en:A.en}),answerLabel:f({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Ve({value:f({ru:A.ru,en:A.en}),label:f({ru:A.ru,en:A.en})},n.filter(b=>b.jp!==A.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N3",lessonId:e.id}))}function Ve(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),Qe().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Du(e){for(const t of ot()){const n=Ga(t).find(s=>s.id===e);if(n)return n}return null}function Go(e){return wr("N3",H(),e)}function Ak(e){const t=Du(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Ou(t,s,a)}function Tk(e){const t=Du(e);if(!t)return;const n=document.getElementById(Gu(t.id)),s=n?String(n.value||"").trim():"";Ou(t,s,s===t.answer)}function Ou(e,t,n){const s=H();br("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>Ls(e.kanji,e.cardId),markDifficult:()=>Nr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Bu(e,t,n="review"){const s=ne(e)||Qe().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=ge(l,o,c);r.progress.cards[s.id]=d,tn(l,d,c),we(),Ls(s.kanji,s.id),H().srsKanji[s.kanji]=new Date().toISOString(),a?(Nr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,z(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`)):Je(t)?(Nr(s.kanji,s.id),r.progress.totalWrong+=1,z(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,z(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`)),un(),x(),Pt("N3 SRS post-render effects",()=>{E(Je(t)?"answer_wrong":"answer_correct"),X()})}function Ik(e){const t=ne(e)||Qe().find(s=>String(s.id)===String(e));if(!t)return;const n=H();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ls(t.kanji,t.id),z(9,1,`n3_writing:${t.id}`)),X(),x(),T()}function Rk(e){const t=kn(e);if(!t)return;const n=H(),s=`n3:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){T();return}const a=Sr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(w);return}const c=Ga(t);if(!(c.length>0&&c.every(w=>Go(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(w);return}ae.add(s),Sr(t).forEach(w=>{Ls(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=D(w.id);N.state==="New"&&(r.progress.cards[w.id]=ge(se(N),"good"))}),(t.grammarFocus||[]).map(w=>zo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ot().find(w=>w.order===t.order+1)?.id||t.id;const d=$s(),u=d.sessions[n3SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n3SessKey,d.lastUpdatedAt=w}H(),Object.keys(n.completedLessons||{}).length>=37&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N3","N2"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n3Meta?.rewards?.lessonCompleteXp||75,v=r.n3Meta?.rewards?.lessonCompleteMoon||9;z(h,v,`n3_lesson:${t.id}`),Os("N3",t.id),tt({title:`${fe().lessonComplete}: ${f(t.title)}`,message:fe().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),E("lesson_complete"),X(),x(),T()}function Ls(e,t=null){if(!e)return;const n=H();fs(n,e)}function Nr(e,t=null,n=!0){if(e&&(H().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=ge(se(s),"again"))}}function _k(e,t=""){const n=r.n3Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=H();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),z(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,E("answer_correct")):a||(r.progress.totalWrong+=1,E("answer_wrong")),we(),X(),x(),T()}function Mk(e,t="0",n=""){Uu("reading",e,t,n)}function Pk(e,t="0",n=""){Uu("listening",e,t,n)}function Uu(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(S=>S.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=H(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const N=(o.questions||[]).every((S,A)=>h[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,E("answer_correct")):(r.progress.totalWrong+=1,E("answer_wrong")),N&&!w){v[o.id]=new Date().toISOString();const S=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,A=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;z(S,A,`n3_${e}:${o.id}`)}we(),X(),x(),T()}function Ek(e){const t=kn(e);t&&(zt("textbook-lesson",{level:"N3",lessonId:t.id}),H().currentLessonId=t.id,mt("N3",t.id,"n3_lesson_open"),Et("N3",t,"n3_lesson_open"),yn(t.id))}function Kk(){yn("")}function Fk(e=null){e&&(H().activeReviewMode=e),yn("review")}function Dk(){yn("kanji")}function Ok(){yn("grammar")}function Bk(){yn("reading")}function Uk(){yn("listening")}function Jk(){yn("final-test")}function yn(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,H().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";nt(t),X(),x(),oe(),Kt()}function zk(e="due"){const t=Date.now(),n=H(),s=Qe();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Ju(){const e=Qe();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=ot().find(d=>d.kanji.includes(o.kanji))||ot()[0];s.push(Gk(c,o,l,a))}return s.filter(Boolean)}function Gk(e,t,n,s){const o=lt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:M(t),options:Ve({value:t.id,label:M(t)},Qe().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:M(l)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Ve({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Qe().flatMap(l=>lt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Ve({value:l,label:l},ot().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Re(o),answer:l,answerLabel:l,options:Ve({value:l,label:l},Qe().flatMap(d=>lt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(l)return{id:`n3-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:Ve({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n3-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${M(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${M(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:M(t),answer:t.kanji,answerLabel:t.kanji,options:Ve({value:t.kanji,label:t.kanji},Qe().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Hk(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(H().finalTest.answers[t]=n,x(),T())}function zu(e=!1){if(r.finalTestBusy)return;const t=H().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){T();return}r.finalTestBusy=!0;try{const n=Ju(),s=r.n3FinalTest||{},a=fe(),o=Jt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const $=o.firstMissingId?`#${Ts("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=$,x();return}let u=0;const m=[],h=[];n.forEach($=>{const U=String(t.answers?.[$.id]||"").trim();if(U===$.answer){if(u+=1,$.kanji&&Ls($.kanji,$.cardId),$.grammarId){const J=H();J.completedGrammar[$.grammarId]=J.completedGrammar[$.grammarId]||d}}else U||h.push($),m.push({id:$.id,kanji:$.kanji||"",answer:$.answerLabel,selected:U}),$.kanji&&Nr($.kanji,$.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,S=Math.max(0,m.length-h.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=S,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||220),U=Number(s?.rewards?.completeMoon||40);A+=$,b+=U,z($,U,"n3_final_complete")}if(t.passed&&!N){const $=Number(s?.rewards?.passXp||110),U=Number(s?.rewards?.passMoon||18);A+=$,b+=U,z($,U,"n3_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,Hr("N3",t),H(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:S,unanswered:h.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),x()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,T()}}function qk(){H().finalTest=no().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,x(),T()}function Gu(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Wk(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=qo();t.opened||(t.opened=!0,X(),x());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return oy();if(n==="review")return ty();if(n==="kanji")return sy();if(n==="grammar")return ry();if(n==="reading")return ay();if(n==="listening")return iy();const s=$n(n);return s?(q().currentLessonId=s.id,mt("N2",s.id,"n2_lesson_page"),Et("N2",s,"n2_lesson_page"),Vk(e,s)):Xk(e)}function Xk(e){const t=dy(),n=he(),s=ct(),a=cy(),o=r.n2Meta||{},c=f(o.principle||{});return`
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
          ${xn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${P(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,K(t.studied,t.total))}
          ${P(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,K(t.completedLessons,s.length))}
          ${P(n.completedGrammar,`${t.completedGrammar}/${r.n2Meta?.grammarCount||r.n2Grammar.length}`,n.grammar,K(t.completedGrammar,r.n2Meta?.grammarCount||r.n2Grammar.length))}
          ${P(n.completedReading,`${t.completedReading}/${r.n2Meta?.readingCount||r.n2Reading.length}`,n.readingN2,K(t.completedReading,r.n2Meta?.readingCount||r.n2Reading.length))}
          ${P(n.completedListening,`${t.completedListening}/${r.n2Meta?.listeningCount||r.n2Listening.length}`,n.listeningN2,K(t.completedListening,r.n2Meta?.listeningCount||r.n2Listening.length))}
          ${P(n.reviews,t.reviews,n.srs,K(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(l=>Qk(l)).join("")}
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

        ${js("N2")}
      </section>
    `}function Qk(e){const t=Qu(e.id),n=he();let s=e.kanji.filter(a=>q().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${K(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(uy(t))}</small>
      </a>
    `}function Vk(e,t){const n=he(),s=Lr(t),a=Ha(t),o=Qu(t.id),c=Qn("N2",t,s);let l=o==="completed";const d=`n2:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(O=>Xo(O.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(O=>q().studiedKanji[O.kanji]).length,w=t.kanji.length,N=v>=w,S=!l&&h&&N,A=t.kanji.filter(O=>q().difficultKanji[O]).join(" · "),b=ct().find(O=>O.order===t.order+1),$=Hu(t),U=$?!!q().completedReading[$.id]:!1,J=bt("N2",t.id,"player"),os=bt("N2",t.id,"test");return`
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
              ${t.grammarFocus.map(O=>`<span class="pill">${i(O)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${P(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,K(c.answeredCount,t.kanji.length))}
            ${P(n.exercises,`${m}/${a.length}`,n.correct,K(m,a.length))}
          </div>
        </article>

        ${mr("N2",t,s,n,{playerId:J,answerAction:"jlpt-lesson-answer",examples:O=>dt(O),sentence:O=>Zk(O,t)})}

        ${ey(t)}

        ${Yk(t)}

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
                <small>${i(f({ru:O.ru,en:O.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(os)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(O=>qu(O)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(O=>q().studiedKanji[O.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${$?`<span class="pill">${i(n.miniReadingTitle)}: ${i(U?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!l&&!S?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${g(t.id)}" ${u||!S?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n2/${g(b.id)}" data-action="n2-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Hu(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function Yk(e){const t=he(),n=Hu(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Ho(n,"reading")}
      </section>
    `:""}function Zk(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(he().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function ey(e){const t=he(),n=(e.grammarFocus||[]).map(s=>Wo(s)).filter(Boolean).slice(0,3);return n.length?`
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
    `:""}function qu(e){const t=he(),n=Xo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(sp(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Wu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Wu(e,n)}
      </article>
    `}function Wu(e,t){if(!t)return"";const n=he(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function ty(e){const t=he(),n=q().activeReviewMode||"due",s=xy(n);return`
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
          ${s.map((a,o)=>ny(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function ny(e,t){const n=he(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Mn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(M(e))}</h3>
        <p>${i(dt(e)[0]?.word||e.hiragana||"")} · ${i(dt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function sy(e){const t=he(),n=Ye();return`
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
              <h3>${i(M(s))}</h3>
              <p>${i(dt(s)[0]?.word||"")} · ${i(dt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function ry(e){const t=he();return`
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
          ${P(t.completedGrammar,`${Object.keys(q().completedGrammar||{}).length}/${r.n2Grammar.length}`,t.grammar,K(Object.keys(q().completedGrammar||{}).length,r.n2Grammar.length))}
          ${P(t.questions,r.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${r.n2Grammar.map(n=>{const s=q().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function ay(e){const t=he(),n=Jr("N2","n2_reading_page"),s=Es("N2");return(n||s)&&x(),`
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
          ${r.n2Reading.map(a=>Ho(a,"reading")).join("")}
        </div>
      </section>
    `}function iy(e){const t=he();return`
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
          ${r.n2Listening.map(n=>Ho(n,"listening")).join("")}
        </div>
      </section>
    `}function Ho(e,t){const n=he(),s=t==="reading"?q().completedReading[e.id]:q().completedListening[e.id],a=t==="reading"?q().readingAnswers:q().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
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
    `}function oy(e){const t=he(),n=r.n2FinalTest||{},s=tp(),a=q().finalTest,o=Jt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),x()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${P(t.questions,`${c}/${s.length}`,t.finalTest,K(c,s.length))}
          ${P(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${P(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?K((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n2-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${xt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>ly(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${xt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function ly(e,t){const n=q().finalTest.answers?.[e.id],s=!!q().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(he().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function he(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function qo(){r.progress.n2Course=Xc(so(),r.progress.n2Course||{});const e=ct();!$n(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n2Course.completedLessons[s.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function q(){return qo()}function ct(){return r.n2Textbook?.items||[]}function $n(e){const t=String(e||"");return t&&ct().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function cy(){return $n(q().currentLessonId)||ct().find(e=>!q().completedLessons[e.id])||ct()[0]||null}function Lr(e){return(e?.kanji||[]).map(t=>Xu(t)).filter(Boolean)}function Ye(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>Xu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Xu(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?$a(s,n):s||(n?$a({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Wo(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function dt(e){return hr(e,e.examples)}function dy(){const e=Ye(),t=q(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n2:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Qu(e){const t=q(),n=`n2:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":$n(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function uy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Ha(e){const t=Lr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:M(l),kanji:l.kanji,cardId:l.id,options:Ze({value:l.id,label:M(l)},t.slice(1).map(b=>({value:b.id,label:M(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:M(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ze({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=dt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Ze({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>dt(b).map($=>({value:$.reading,label:$.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ze({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=dt(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Re(w)}В»?`:`Which word matches "${Re(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Ze({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>dt(b).map($=>({value:$.word,label:$.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${M(N)}`:`Type the kanji for: ${M(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const S=Wo(e.grammarFocus?.[0]);S&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(S.question||S.explanation),answer:S.answer,answerLabel:S.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:S.id,options:Ze({value:S.answer,label:S.answer},S.options.filter(b=>b!==S.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:f({ru:A.ru,en:A.en}),answerLabel:f({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Ze({value:f({ru:A.ru,en:A.en}),label:f({ru:A.ru,en:A.en})},n.filter(b=>b.jp!==A.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N2",lessonId:e.id}))}function Ze(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),Ye().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Vu(e){for(const t of ct()){const n=Ha(t).find(s=>s.id===e);if(n)return n}return null}function Xo(e){return wr("N2",q(),e)}function py(e){const t=Vu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Yu(t,s,a)}function gy(e){const t=Vu(e);if(!t)return;const n=document.getElementById(sp(t.id)),s=n?String(n.value||"").trim():"";Yu(t,s,s===t.answer)}function Yu(e,t,n){const s=q();br("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>xs(e.kanji,e.cardId),markDifficult:()=>xr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Zu(e,t,n="review"){const s=ne(e)||Ye().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=ge(l,o,c);r.progress.cards[s.id]=d,tn(l,d,c),we(),xs(s.kanji,s.id),q().srsKanji[s.kanji]=new Date().toISOString(),a?(xr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,z(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`)):Je(t)?(xr(s.kanji,s.id),r.progress.totalWrong+=1,z(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,z(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`)),un(),x(),Pt("N2 SRS post-render effects",()=>{E(Je(t)?"answer_wrong":"answer_correct"),X()})}function my(e){const t=ne(e)||Ye().find(s=>String(s.id)===String(e));if(!t)return;const n=q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},xs(t.kanji,t.id),z(9,1,`n2_writing:${t.id}`)),X(),x(),T()}function fy(e){const t=$n(e);if(!t)return;const n=q(),s=`n2:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){T();return}const a=Lr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(w);return}const c=Ha(t);if(!(c.length>0&&c.every(w=>Xo(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(w);return}ae.add(s),Lr(t).forEach(w=>{xs(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=D(w.id);N.state==="New"&&(r.progress.cards[w.id]=ge(se(N),"good"))}),(t.grammarFocus||[]).map(w=>Wo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ct().find(w=>w.order===t.order+1)?.id||t.id;const d=$s(),u=d.sessions[n2SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n2SessKey,d.lastUpdatedAt=w}q(),Object.keys(n.completedLessons||{}).length>=38&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N2","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n2Meta?.rewards?.lessonCompleteXp||85,v=r.n2Meta?.rewards?.lessonCompleteMoon||10;z(h,v,`n2_lesson:${t.id}`),Os("N2",t.id),tt({title:`${he().lessonComplete}: ${f(t.title)}`,message:he().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),E("lesson_complete"),X(),x(),T()}function xs(e,t=null){if(!e)return;const n=q();fs(n,e)}function xr(e,t=null,n=!0){if(e&&(q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=ge(se(s),"again"))}}function hy(e,t=""){const n=r.n2Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=q();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),z(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,E("answer_correct")):a||(r.progress.totalWrong+=1,E("answer_wrong")),we(),X(),x(),T()}function vy(e,t="0",n=""){ep("reading",e,t,n)}function wy(e,t="0",n=""){ep("listening",e,t,n)}function ep(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(S=>S.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=q(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const N=(o.questions||[]).every((S,A)=>h[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,E("answer_correct")):(r.progress.totalWrong+=1,E("answer_wrong")),N&&!w){v[o.id]=new Date().toISOString();const S=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,A=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;z(S,A,`n2_${e}:${o.id}`)}we(),X(),x(),T()}function by(e){const t=$n(e);t&&(zt("textbook-lesson",{level:"N2",lessonId:t.id}),q().currentLessonId=t.id,mt("N2",t.id,"n2_lesson_open"),Et("N2",t,"n2_lesson_open"),jn(t.id))}function ky(){jn("")}function yy(e=null){e&&(q().activeReviewMode=e),jn("review")}function $y(){jn("kanji")}function jy(){jn("grammar")}function Sy(){jn("reading")}function Ny(){jn("listening")}function Ly(){jn("final-test")}function jn(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,q().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";nt(t),X(),x(),oe(),Kt()}function xy(e="due"){const t=Date.now(),n=q(),s=Ye();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function tp(){const e=Ye();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=ct().find(d=>d.kanji.includes(o.kanji))||ct()[0];s.push(Cy(c,o,l,a))}return s.filter(Boolean)}function Cy(e,t,n,s){const o=dt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:M(t),options:Ze({value:t.id,label:M(t)},Ye().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:M(l)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Ze({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ye().flatMap(l=>dt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Ze({value:l,label:l},ct().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Re(o),answer:l,answerLabel:l,options:Ze({value:l,label:l},Ye().flatMap(d=>dt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(l)return{id:`n2-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:Ze({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n2-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${M(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${M(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:M(t),answer:t.kanji,answerLabel:t.kanji,options:Ze({value:t.kanji,label:t.kanji},Ye().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Ay(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(q().finalTest.answers[t]=n,x(),T())}function np(e=!1){if(r.finalTestBusy)return;const t=q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){T();return}r.finalTestBusy=!0;try{const n=tp(),s=r.n2FinalTest||{},a=he(),o=Jt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const $=o.firstMissingId?`#${Ts("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=$,x();return}let u=0;const m=[],h=[];n.forEach($=>{const U=String(t.answers?.[$.id]||"").trim();if(U===$.answer){if(u+=1,$.kanji&&xs($.kanji,$.cardId),$.grammarId){const J=q();J.completedGrammar[$.grammarId]=J.completedGrammar[$.grammarId]||d}}else U||h.push($),m.push({id:$.id,kanji:$.kanji||"",answer:$.answerLabel,selected:U}),$.kanji&&xr($.kanji,$.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,S=Math.max(0,m.length-h.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=S,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||220),U=Number(s?.rewards?.completeMoon||40);A+=$,b+=U,z($,U,"n2_final_complete")}if(t.passed&&!N){const $=Number(s?.rewards?.passXp||110),U=Number(s?.rewards?.passMoon||18);A+=$,b+=U,z($,U,"n2_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,Hr("N2",t),q(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:S,unanswered:h.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),x()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,T()}}function Ty(){q().finalTest=so().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,x(),T()}function sp(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Iy(e){r.activeTextbookLevel="N1",r.activeJlptLesson="N1";const t=qa();t.opened||(t.opened=!0,X(),x());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Gy();if(n==="review")return Dy();if(n==="kanji")return By();if(n==="grammar")return Uy();if(n==="reading")return Jy();if(n==="listening")return zy();const s=Yn(n);return s?(ee().currentLessonId=s.id,mt("N1",s.id,"n1_lesson_page"),Et("N1",s,"n1_lesson_page"),My(e,s)):Ry(e)}function Ry(e){const t=Wy(),n=ve(),s=ut(),a=qy(),o=r.n1Meta||{},c=f(o.principle||{});return`
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
          ${xn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${P(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,K(t.studied,t.total))}
          ${P(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,K(t.completedLessons,s.length))}
          ${P(n.completedGrammar,`${t.completedGrammar}/${r.n1Meta?.grammarCount||r.n1Grammar.length}`,n.grammar,K(t.completedGrammar,r.n1Meta?.grammarCount||r.n1Grammar.length))}
          ${P(n.completedReading,`${t.completedReading}/${r.n1Meta?.readingCount||r.n1Reading.length}`,n.readingN1,K(t.completedReading,r.n1Meta?.readingCount||r.n1Reading.length))}
          ${P(n.completedListening,`${t.completedListening}/${r.n1Meta?.listeningCount||r.n1Listening.length}`,n.listeningN1,K(t.completedListening,r.n1Meta?.listeningCount||r.n1Listening.length))}
          ${P(n.reviews,t.reviews,n.srs,K(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(l=>_y(l)).join("")}
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

        ${js("N1")}
      </section>
    `}function _y(e){const t=op(e.id),n=ve();let s=e.kanji.filter(a=>ee().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${K(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Xy(t))}</small>
      </a>
    `}function My(e,t){const n=ve(),s=Wa(t),a=Xa(t),o=op(t.id),c=Qn("N1",t,s);let l=o==="completed";const d=`n1:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(O=>Yo(O.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(O=>ee().studiedKanji[O.kanji]).length,w=t.kanji.length,N=v>=w,S=!l&&h&&N,A=t.kanji.filter(O=>ee().difficultKanji[O]).join(" · "),b=ut().find(O=>O.order===t.order+1),$=rp(t),U=$?!!ee().completedReading[$.id]:!1,J=bt("N1",t.id,"player"),os=bt("N1",t.id,"test");return`
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
              ${t.grammarFocus.map(O=>`<span class="pill">${i(O)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${P(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,K(c.answeredCount,t.kanji.length))}
            ${P(n.exercises,`${m}/${a.length}`,n.correct,K(m,a.length))}
          </div>
        </article>

        ${mr("N1",t,s,n,{playerId:J,answerAction:"jlpt-lesson-answer",examples:O=>pt(O),sentence:O=>Ey(O,t)})}

        ${Ky(t)}

        ${Py(t)}

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
                <small>${i(f({ru:O.ru,en:O.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(os)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(O=>Fy(O)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(O=>ee().studiedKanji[O.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${$?`<span class="pill">${i(n.miniReadingTitle)}: ${i(U?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!l&&!S?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n1-complete-lesson" data-id="${g(t.id)}" ${u||!S?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n1/${g(b.id)}" data-action="n1-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function rp(e){return e?.miniReadingId&&r.n1Reading.find(t=>t.id===e.miniReadingId)||null}function Py(e){const t=ve(),n=rp(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Qo(n,"reading")}
      </section>
    `:""}function Ey(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(ve().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Ky(e){const t=ve(),n=(e.grammarFocus||[]).map(s=>Vo(s)).filter(Boolean).slice(0,3);return n.length?`
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
    `:""}function Fy(e){const t=ve(),n=Yo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(mp(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${ap(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${ap(e,n)}
      </article>
    `}function ap(e,t){if(!t)return"";const n=ve(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Dy(e){const t=ve(),n=ee().activeReviewMode||"due",s=u$(n);return`
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
          ${s.map((a,o)=>Oy(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Oy(e,t){const n=ve(),s=D(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Mn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(M(e))}</h3>
        <p>${i(pt(e)[0]?.word||e.hiragana||"")} · ${i(pt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function By(e){const t=ve(),n=$t(),s=n.slice(0,160);return`
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
              <h3>${i(M(a))}</h3>
              <p>${i(pt(a)[0]?.word||"")} · ${i(pt(a)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${g(a.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Uy(e){const t=ve();return`
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
          ${P(t.completedGrammar,`${Object.keys(ee().completedGrammar||{}).length}/${r.n1Grammar.length}`,t.grammar,K(Object.keys(ee().completedGrammar||{}).length,r.n1Grammar.length))}
          ${P(t.questions,r.n1Grammar.length,t.grammar,100)}
        </div>
        <div class="n1-section-grid">
          ${r.n1Grammar.map(n=>{const s=ee().grammarResults?.[n.id];return`
              <article class="n1-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
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
    `}function Jy(e){const t=ve(),n=Jr("N1","n1_reading_page"),s=Es("N1");return(n||s)&&x(),`
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
          ${r.n1Reading.map(a=>Qo(a,"reading")).join("")}
        </div>
      </section>
    `}function zy(e){const t=ve();return`
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
          ${r.n1Listening.map(n=>Qo(n,"listening")).join("")}
        </div>
      </section>
    `}function Qo(e,t){const n=ve(),s=t==="reading"?ee().completedReading[e.id]:ee().completedListening[e.id],a=t==="reading"?ee().readingAnswers:ee().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
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
    `}function Gy(e){const t=ve(),n=r.n1FinalTest||{},s=pp(),a=ee().finalTest,o=Jt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),x()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${P(t.questions,`${c}/${s.length}`,t.finalTest,K(c,s.length))}
          ${P(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${P(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?K((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n1-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${xt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Hy(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${xt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Hy(e,t){const n=ee().finalTest.answers?.[e.id],s=!!ee().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(ve().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function ve(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function qa(){r.progress.n1Course=Qc(ro(),r.progress.n1Course||{});const e=ut();!Yn(r.progress.n1Course.currentLessonId)&&e[0]&&(r.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n1Course.completedLessons[s.id]);return!r.progress.n1Course.currentLessonId&&n&&(r.progress.n1Course.currentLessonId=n.id),r.progress.n1Course}function ee(){return qa()}function ut(){return r.n1Textbook?.items||[]}function Yn(e){const t=String(e||"");return t&&ut().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function qy(){return Yn(ee().currentLessonId)||ut().find(e=>!ee().completedLessons[e.id])||ut()[0]||null}function Wa(e){return(e?.kanji||[]).map(t=>ip(t)).filter(Boolean)}function $t(){const e=new Set;return(r.n1KanjiCatalog||[]).map(t=>ip(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function ip(e){const t=String(e||""),n=r.n1KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N1")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ja(s,n):s||(n?ja({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[]},n):null)}function Vo(e){const t=String(e||"");return r.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function pt(e){return hr(e,e.examples)}function Wy(){const e=$t(),t=ee(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{D(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n1:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(D(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function op(e){const t=ee(),n=`n1:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":Yn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Xy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Xa(e){const t=Wa(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n1Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n1Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n1Meta?.rewards?.exerciseXp||11,rewardMoon:r.n1Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:M(l),kanji:l.kanji,cardId:l.id,options:et({value:l.id,label:M(l)},t.slice(1).map(b=>({value:b.id,label:M(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:M(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:et({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=pt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:et({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>pt(b).map($=>({value:$.reading,label:$.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:et({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=pt(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Re(w)}В»?`:`Which word matches "${Re(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:et({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>pt(b).map($=>({value:$.word,label:$.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const N=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${M(N)}`:`Type the kanji for: ${M(N)}`,answer:N.kanji,answerLabel:N.kanji,kanji:N.kanji,cardId:N.id,options:[],...o("active-recall")});const S=Vo(e.grammarFocus?.[0]);S&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(S.question||S.explanation),answer:S.answer,answerLabel:S.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:S.id,options:et({value:S.answer,label:S.answer},S.options.filter(b=>b!==S.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:f({ru:A.ru,en:A.en}),answerLabel:f({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:et({value:f({ru:A.ru,en:A.en}),label:f({ru:A.ru,en:A.en})},n.filter(b=>b.jp!==A.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n1Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N1",lessonId:e.id}))}function et(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),$t().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function lp(e){for(const t of ut()){const n=Xa(t).find(s=>s.id===e);if(n)return n}return null}function Yo(e){return wr("N1",ee(),e)}function Qy(e){const t=lp(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;cp(t,s,a)}function Vy(e){const t=lp(e);if(!t)return;const n=document.getElementById(mp(t.id)),s=n?String(n.value||"").trim():"";cp(t,s,s===t.answer)}function cp(e,t,n){const s=ee();br("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,markStudied:()=>Cr(e.kanji,e.cardId),markDifficult:()=>Qa(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function dp(e,t,n="review"){const s=ne(e)||$t().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(D(s.id)),d=ge(l,o,c);r.progress.cards[s.id]=d,tn(l,d,c),we(),Cr(s.kanji,s.id),ee().srsKanji[s.kanji]=new Date().toISOString(),a?(Qa(s.kanji,s.id,!1),r.progress.totalCorrect+=1,z(r.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${s.id}`)):Je(t)?(Qa(s.kanji,s.id),r.progress.totalWrong+=1,z(r.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,z(t==="easy"?r.n1Meta?.rewards?.knowXp||9:r.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${s.id}`)),un(),x(),Pt("N1 SRS post-render effects",()=>{E(Je(t)?"answer_wrong":"answer_correct"),X()})}function Yy(e){const t=ne(e)||$t().find(s=>String(s.id)===String(e));if(!t)return;const n=ee();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Cr(t.kanji,t.id),z(9,1,`n1_writing:${t.id}`)),X(),x(),T()}function Zy(e){const t=Yn(e);if(!t)return;const n=ee(),s=`n1:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){T();return}const a=Wa(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(w);return}const c=Xa(t);if(!(c.length>0&&c.every(w=>Yo(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(w);return}ae.add(s),Wa(t).forEach(w=>{Cr(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const N=D(w.id);N.state==="New"&&(r.progress.cards[w.id]=ge(se(N),"good"))}),(t.grammarFocus||[]).map(w=>Vo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ut().find(w=>w.order===t.order+1)?.id||t.id;const d=$s(),u=d.sessions[n1SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n1SessKey,d.lastUpdatedAt=w}ee(),Object.keys(n.completedLessons||{}).length>=53&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N1","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n1Meta?.rewards?.lessonCompleteXp||85,v=r.n1Meta?.rewards?.lessonCompleteMoon||10;z(h,v,`n1_lesson:${t.id}`),Os("N1",t.id),tt({title:`${ve().lessonComplete}: ${f(t.title)}`,message:ve().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),E("lesson_complete"),X(),x(),T()}function Cr(e,t=null){if(!e)return;const n=ee();fs(n,e)}function Qa(e,t=null,n=!0){if(e&&(ee().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=D(t);s.state!=="New"&&(r.progress.cards[t]=ge(se(s),"again"))}}function e$(e,t=""){const n=r.n1Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=ee();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),z(r.n1Meta?.rewards?.grammarXp||12,r.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),r.progress.totalCorrect+=1,E("answer_correct")):a||(r.progress.totalWrong+=1,E("answer_wrong")),we(),X(),x(),T()}function t$(e,t="0",n=""){up("reading",e,t,n)}function n$(e,t="0",n=""){up("listening",e,t,n)}function up(e,t,n="0",s=""){const o=(e==="reading"?r.n1Reading:r.n1Listening).find(S=>S.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=ee(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const N=(o.questions||[]).every((S,A)=>h[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,E("answer_correct")):(r.progress.totalWrong+=1,E("answer_wrong")),N&&!w){v[o.id]=new Date().toISOString();const S=e==="reading"?r.n1Meta?.rewards?.readingXp||55:r.n1Meta?.rewards?.listeningXp||50,A=e==="reading"?r.n1Meta?.rewards?.readingMoon||4:r.n1Meta?.rewards?.listeningMoon||4;z(S,A,`n1_${e}:${o.id}`)}we(),X(),x(),T()}function s$(e){const t=Yn(e);t&&(zt("textbook-lesson",{level:"N1",lessonId:t.id}),ee().currentLessonId=t.id,mt("N1",t.id,"n1_lesson_open"),Et("N1",t,"n1_lesson_open"),Sn(t.id))}function r$(){Sn("")}function a$(e=null){e&&(ee().activeReviewMode=e),Sn("review")}function i$(){Sn("kanji")}function o$(){Sn("grammar")}function l$(){Sn("reading")}function c$(){Sn("listening")}function d$(){Sn("final-test")}function Sn(e){r.route="textbooks",r.activeTextbookLevel="N1",r.activeTextbookSubroute=e||null,ee().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";nt(t),X(),x(),oe(),Kt()}function u$(e="due"){const t=Date.now(),n=ee(),s=$t();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=D(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function pp(){const e=$t();if(!e.length)return[];const t=r.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=ut().find(d=>d.kanji.includes(o.kanji))||ut()[0];s.push(p$(c,o,l,a))}return s.filter(Boolean)}function p$(e,t,n,s){const o=pt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:M(t),options:et({value:t.id,label:M(t)},$t().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:M(l)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:et({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},$t().flatMap(l=>pt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:et({value:l,label:l},ut().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Re(o),answer:l,answerLabel:l,options:et({value:l,label:l},$t().flatMap(d=>pt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n1Grammar[s%Math.max(r.n1Grammar.length,1)];if(l)return{id:`n1-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:et({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n1Reading[s%Math.max(r.n1Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n1-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${M(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${M(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:M(t),answer:t.kanji,answerLabel:t.kanji,options:et({value:t.kanji,label:t.kanji},$t().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function g$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ee().finalTest.answers[t]=n,x(),T())}function gp(e=!1){if(r.finalTestBusy)return;const t=ee().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){T();return}r.finalTestBusy=!0;try{const n=pp(),s=r.n1FinalTest||{},a=ve(),o=Jt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const $=o.firstMissingId?`#${Ts("n1",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=$,x();return}let u=0;const m=[],h=[];n.forEach($=>{const U=String(t.answers?.[$.id]||"").trim();if(U===$.answer){if(u+=1,$.kanji&&Cr($.kanji,$.cardId),$.grammarId){const J=ee();J.completedGrammar[$.grammarId]=J.completedGrammar[$.grammarId]||d}}else U||h.push($),m.push({id:$.id,kanji:$.kanji||"",answer:$.answerLabel,selected:U}),$.kanji&&Qa($.kanji,$.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,N=!!t.passed,S=Math.max(0,m.length-h.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=S,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?N&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||220),U=Number(s?.rewards?.completeMoon||40);A+=$,b+=U,z($,U,"n1_final_complete")}if(t.passed&&!N){const $=Number(s?.rewards?.passXp||110),U=Number(s?.rewards?.passMoon||18);A+=$,b+=U,z($,U,"n1_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,Hr("N1",t),ee(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N1",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:S,unanswered:h.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},X(),x()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,T()}}function m$(){ee().finalTest=ro().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,x(),T()}function mp(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function fp(e){const t=Fs(e.jlpt);if(!t)return"";const n={...Pl(),...Ml()};return`
      <div class="jlpt-practice-grid">
        ${f$(t,n)}
        ${h$(t,n)}
        ${v$(t,n)}
        ${b$(t,n)}
      </div>
    `}function f$(e,t){return e.apps.length?`
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
    `:""}function h$(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${hp(t.hiragana,n)}
          ${hp(t.katakana,s)}
        </div>
      </article>
    `}function hp(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(f(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function v$(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${w$(n)}</strong>
                <small>${i(n.romaji)} · ${i(f(n.meaning))}</small>
                <p>${i(f(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function w$(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function b$(e,t){const n=Ds(e);if(!n)return"";const s=as(),a=s.selected[n.id]||[],o=!!s.checked[n.id],c=s.results[n.id]||null,l=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&c?.correct,u=o&&c?c.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(f(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${k$(n,l,u)}</div>
        <p class="label">${i(V(n.reading))}</p>
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
    `}function k$(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,c)=>{if(o===c.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((v,w)=>n.includes(s+w));s+=d;const h=u.length?u.map(v=>`<span>${i(v.kanji)}</span>`).join(""):`<span>${i("в–Ў".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${h}</span>`}).join("")}function y$(){const e=Ir(FS()),t=aj(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?ne(t.card?.id||t.cardId||t.progress?.cardId||""):null;sj(t);const a=t?t.kind==="card"?s?xp(s):Rs():pj(t):Rs();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(I("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${P(p()==="ru"?"Сейчас":"Due now",Pe(),"due")}
              ${P(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${P(p()==="ru"?"Позже":"Learning later",DS(),"learning")}
              ${P(p()==="ru"?"Всего SRS":"Total SRS",OS(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${Bs("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${rl(s,n)}
        </div>
        ${$$()}
      </section>
    `}function $$(){try{return j$()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),r.progress&&(r.progress.sentencePractice=ao(ms().sentencePractice,{})),""}}function j$(){const e=Ut(),t=Ya(e),n={...Cs(),...Zo()},s=S$(e,n);if(!e.length)return`
      <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${i(n.title)}</h2>
          <p>${i(n.noLearned)}</p>
          ${s}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(I("learn"))}</button>
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
      `;const a=tl(t,e);if(!a)return"";const{exercise:o,tiles:c,selectedTiles:l,answerFlat:d,wrongIndexes:u,complete:m,awarded:h}=a,v=new Set(r.progress.sentencePractice.selected),w=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(L$(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${wp(o,l,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(x$(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${c.map((S,A)=>{const b=v.has(A),$=u.includes(r.progress.sentencePractice.selected.indexOf(A));return`
              <button class="sentence-tile ${b?"is-used":""} ${$?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${A}" ${b||m?"disabled":""}>
                <span>${i(S.reading)}</span>
                <strong>${i(S.kanji)}</strong>
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
    `}function S$(e,t){const n=Te(),s=La(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,c=!!n.customEditingId,l=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${N$(a,e,t)}
      </details>
    `}function N$(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=el(s,t),o=!!(a&&Nn(a,t).length>=Math.max(4,jt(a).length)),c=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function L$(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function Cs(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Zo(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function x$(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function vp(e=Ut()){const t=C$(e),n=A$(e),s=Array.isArray(r.sentenceExercises)?r.sentenceExercises:[],a=new Set;return[...t,...n,...s].filter(o=>!o?.id||a.has(o.id)?!1:(a.add(o.id),!0))}function C$(e=Ut()){const t=Te();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>el(s,e)).filter(Boolean)}function el(e,t=Ut()){return e?.jp?nl({id:e.id,jlpt:U$(e.jp,t),sentence:e.jp,reading:e.hiragana||Ar(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function wp(e,t,n){const s=e?.blanks||[],a=String(e?.sentence||"").split("___");let o=0;return a.map((c,l)=>{const d=s[l];if(!d)return i(c);const u=d.answer||[],m=u.map((h,v)=>{const w=o+v,N=t[w],S=n.includes(w);return`<span class="sentence-slot ${N?"is-filled":""} ${S?"is-wrong":""}">${N?i(N.kanji):""}</span>`}).join("");return o+=u.length,`${i(c)}<span class="sentence-blank">${m}</span>`}).join("")}function tl(e=Ya(),t=Ut()){const n=Zn(t),s=(Array.isArray(e)?e:[]).filter(N=>N?.id),a=Te();new Set(s.map(N=>N.id)).has(a.activeId)||Va(sl(s)?.id||null);const c=s.find(N=>N.id===r.progress.sentencePractice.activeId)||s[0];if(!c)return null;const l=jt(c);(!Array.isArray(r.progress.sentencePractice.tileKeys)||!r.progress.sentencePractice.tileKeys.length)&&(r.progress.sentencePractice.tileKeys=Nn(c,n).map(ti));let d=(Array.isArray(r.progress.sentencePractice.tileKeys)?r.progress.sentencePractice.tileKeys:[]).map(z$).filter(Boolean);const u=()=>l.every(N=>d.some(S=>S.kanji===N.kanji));(d.length<Math.max(4,l.length)||!u())&&(d=Nn(c,n),r.progress.sentencePractice.tileKeys=d.map(ti),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null);const m=Array.isArray(r.progress.sentencePractice.selected)?r.progress.sentencePractice.selected:[];r.progress.sentencePractice.selected=m.filter((N,S,A)=>Number.isInteger(N)&&N>=0&&N<d.length&&A.indexOf(N)===S).slice(0,l.length);const h=r.progress.sentencePractice.selected.map(N=>d[N]).filter(Boolean),v=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes:[],w=Array.isArray(v)?v.filter(N=>Number.isInteger(N)&&N>=0&&N<l.length):[];return{exercise:c,tiles:d,selectedTiles:h,answerFlat:l,wrongIndexes:w,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[c.id]}}function Te(){return r.progress.sentencePractice=ao(ms().sentencePractice,r.progress.sentencePractice||{}),r.progress.sentencePractice}function Va(e){r.progress.sentencePractice={...Te(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=vp(Ut()).find(n=>n?.id===e);t&&$p(t)}function Zn(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function Ut(){return Zn(r.cards).filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!Ee(t))return!1;const n=D(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||r.progress.lessonCompletions[e.lessonId]})}function Ya(e=Ut()){const t=Zn(e),n=new Set(t.map(s=>s.kanji));return vp(t).filter(s=>{if(!s?.id)return!1;const a=jt(s);return!a.length||a.some(o=>!n.has(o.kanji))?!1:Nn(s,t).length>=Math.max(4,a.length)})}function jt(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function bp(e){return jt(e).map(t=>t.kanji).join("")}function Nn(e,t){if(!e?.id)return[];const n=Zn(t),s=jt(e),a=new Set(s.map(v=>v.kanji)),o=new Set(n.map(v=>v.kanji)),c=new Map;[...e.tiles||[],...s].forEach(v=>{v?.kanji&&v?.reading&&c.set(v.kanji,v.reading)});const l=s.map(v=>({kanji:v.kanji,reading:v.reading||c.get(v.kanji)||en(v.kanji)})),d=(e.tiles||[]).filter(v=>v?.kanji&&!a.has(v.kanji)&&o.has(v.kanji)).map(v=>({kanji:v.kanji,reading:v.reading||en(v.kanji)})).filter((v,w,N)=>N.findIndex(S=>S.kanji===v.kanji)===w),u=n.filter(v=>v.kanji&&!a.has(v.kanji)).map(v=>({kanji:v.kanji,reading:c.get(v.kanji)||en(v.kanji,v)})).filter((v,w,N)=>N.findIndex(S=>S.kanji===v.kanji)===w).sort((v,w)=>Ie(`${e.id}:${v.kanji}`)-Ie(`${e.id}:${w.kanji}`)),m=[...d,...u].filter(v=>!a.has(v.kanji)).filter((v,w,N)=>N.findIndex(S=>S.kanji===v.kanji)===w),h=Math.min(Math.max(6,l.length+2),l.length+m.length);return Y$([...l,...m.slice(0,h-l.length)],e.id)}function A$(e){const t=Zn(e);if(!t.length)return[];const n=new Set(t.map(c=>c.kanji)),s=new Set,a=[];return t.flatMap(c=>(c.examples||[]).map(l=>({...l,card:c}))).forEach((c,l)=>{const d=As(c.word||"");if(!d||s.has(d)||!J$(d)||yp(d).some(N=>!n.has(N)))return;s.add(d);const u=es(c.reading||Ar(d)),m=c.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],v=h[l%h.length],w=nl({id:`sentence-json-${Ie(`${d}:${v.sentence}`).toString(36)}`,jlpt:c.card?.jlpt||"N5",sentence:v.sentence,reading:v.reading,translationRu:v.translationRu,translationEn:v.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});w&&a.push(w)}),a.slice(0,160)}function T$(){const e=Te(),t={...Cs(),...Zo()},n=La(I$()||e.customDraft||{}),s=Ut(),a=Ln(n.jp);if(!a){Za(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(P$(a,o)){Za(t.customDuplicate,"error");return}const l=Te(),d={id:o||`custom_${Date.now().toString(36)}_${Ie(a).toString(36)}`,jp:a,hiragana:es(Ln(n.hiragana)||Ar(a)),ru:Ln(n.ru),en:Ln(n.en),source:"user"},u=(l.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?l.customSentences[u]=d:l.customSentences=[d,...l.customSentences||[]].slice(0,160),l.customDraft={jp:"",hiragana:"",ru:"",en:""},l.customEditingId=null,Za(o?t.customUpdated:t.customAdded,"success",!1);const m=el(d,s);m&&Nn(m,s).length>=Math.max(4,jt(m).length)&&(Va(m.id),r.progress.sentencePractice.tileKeys=Nn(m,s).map(ti)),x(),T()}function I$(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function R$(e){const t=Te(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",x(),T())}function _$(e){const t=Te(),n={...Cs(),...Zo()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=Ut(),o=sl(Ya(a));Va(o?.id||null)}Za(n.customDeleted,"success",!1),x(),T()}}function M$(){const e=Te();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",x(),T()}function P$(e,t=null){const n=As(e);return(Te().customSentences||[]).some(a=>a.id!==t&&As(a.jp)===n)?!0:r.sentenceExercises.some(a=>As(kp(a))===n)}function Za(e,t,n=!0){const s=Te();s.customMessage=e,s.customStatus=t,x(),n&&T()}function nl(e,t,n={}){if(!e||typeof e!="object")return null;const s=Zn(t),a=As(e.sentence||"");if(!a||!e.id||!s.length)return null;const o=E$(a,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const c=K$(o,a,n);if(!c.length)return null;let l="",d=0;const u=c.map(m=>(l+=a.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:F$(m.text)}));return l+=a.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:l,originalSentence:a,reading:es(e.reading||Ar(a)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((h,v)=>({kanji:h,reading:m.reading[v]||en(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function E$(e,t){const n=new Map(Zn(t).map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,c)=>{if(ei(o)&&n.has(o)){a||(a={start:c,end:c,text:"",answer:[]}),a.end=c+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function K$(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),c=e.filter(m=>m.start>0),l=(o.length?o:c.length?c:e).slice().sort((m,h)=>{const v=h.answer.length-m.answer.length;return v||Math.abs(m.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return l.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,h)=>m.start-h.start)}function F$(e){const t=Array.from(e),n=D$(e);return n?O$(t,es(n)):t.map(s=>en(s))}function D$(e){for(const t of r.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function O$(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const c=B$(e[a]).sort((l,d)=>d.length-l.length).find(l=>l&&s.endsWith(l));c&&(n[a]=c,s=s.slice(0,-c.length))}return n[0]=s||en(e[0]),n.map((a,o)=>a||en(e[o]))}function B$(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>es(s.trim())).filter(Boolean);return[...new Set(n)]}function Ar(e){return es(Array.from(e).map(t=>ei(t)?en(t):t).join(""))}function U$(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return yp(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,c)=>n.indexOf(c)-n.indexOf(o))[0]||"N5"}function As(e){return String(e||"").replace(/\s+/g,"").trim()}function Ln(e){return String(e||"").replace(/\s+/g," ").trim()}function kp(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function J$(e){return Array.from(String(e||"")).some(ei)}function yp(e){return Array.from(String(e||"")).filter(ei)}function ei(e){return/[㐀-鿿]/u.test(e)}function es(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function V(e){return es(String(e||""))}function en(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function ti(e){return`${e.kanji}	${e.reading||""}`}function z$(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||en(t)}:null}function G$(e){const t=tl();if(!t||!Number.isInteger(e))return;const n=Cs(),s=r.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){G(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},x(),T()}}function H$(){const e=Te();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:Cs().removed,wrongIndexes:[]},x(),T())}function q$(){const e=Te();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,x(),T())}function W$(){const e=tl();if(!e)return;const t=Cs(),n=r.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},x(),T();return}const s=e.answerFlat.map((o,c)=>e.selectedTiles[c]?.kanji===o.kanji?-1:c).filter(o=>o>=0),a=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:a,wrongIndexes:s,message:a?t.correct:t.wrong},a)X$(e.exercise),Ne({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),Le("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),Si("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,Ne({discipline:-.6,curiosity:.2},"sentence_wrong"),Le("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=nn();o.mistakes+=1,r.progress.daily[re()]=o,Si("again")}x(),T()}function X$(e){const t=Te();if(t.completed[e.id])return;const n=r.rewards?.rewards||{},s=n.sentencePracticeXp||nc.xp,a=n.sentencePracticeCoins||nc.coins;t.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const o=nn();o.reviews+=1,o.minutes=Ai((o.minutes||0)+.8,1),r.progress.daily[re()]=o,z(s,a,`sentence:${e.id}`),Ne({trust:.8,curiosity:.7},"sentence_complete"),we(),fl(),X()}function Q$(){const e=Ut(),t=Ya(e);if(!t.length)return;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&$p(s);const a=sl(t,{excludeCurrent:!0,preferUncompleted:!0});a?.id&&(Va(a.id),r.progress.sentencePractice.tileKeys=Nn(a,e).map(ti),x(),T())}function sl(e,t={}){const n=(Array.isArray(e)?e:[]).filter(S=>S?.id);if(!n.length)return null;const s=Te(),a=s.activeId,o=new Set(s.recentIds||[]),c=new Set(s.recentAnswers||[]),l=S=>!t.excludeCurrent||n.length===1||S.id!==a,d=S=>!t.preferUncompleted||!s.completed?.[S.id],u=S=>!c.has(bp(S)),m=S=>!o.has(S.id),v=[n.filter(l).filter(d).filter(u).filter(m),n.filter(l).filter(d).filter(u),n.filter(l).filter(u).filter(m),n.filter(l).filter(m),n.filter(l),n].find(S=>S.length)||n,w=v.filter(V$),N=w.length?w:v;return N[Math.floor(Math.random()*N.length)]}function V$(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function $p(e){if(!e?.id)return;const t=Te(),n=bp(e),s=Array.isArray(t.recentIds)?t.recentIds:[],a=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...a.filter(o=>o!==n)].slice(0,8)}function Ie(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function Y$(e,t){return[...e].sort((n,s)=>Ie(`${t}:${n.kanji}:${n.reading}`)-Ie(`${t}:${s.kanji}:${s.reading}`))}function Jt(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function Ts(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function Z$(e){return Number(e?.passingPercent??e?.passThreshold??70)}function ej(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":xt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(I("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${xn("eva",n,t?"review":"achievement","reward-mascot")}
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
    `}function jp(e){const t=a0(e);if(!t&&!s0(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function ni(e){const t=Ur(e);return`
      <div class="reading-row reading-split">
        ${Sp(e,"onyomi",wg("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${Sp(e,"kunyomi",wg("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function Sp(e,t,n,s,a){const o=Lp(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(V(s)||"—")}</strong>
        <small>${i(a||"—")}</small>
      </div>
    `}function Np(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${Lp(e,t,n)}
            </dt>
            <dd>${i(V(s||"—"))}</dd>
          </div>
        `}function Lp(e,t,n){return Ks(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function si(e,t="btn ghost"){const n=g0(e);if(!n)return"";const s=gt(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(rn(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function xp(e){if(!e?.id)return Rs();ir(e,"study_card");const t=D(e.id),n=r.revealed;WS(e.id);const s=e.lessonTitle||Ol(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${$i(t.state)}
          </div>
          ${jp(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?M(e):I("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(I("strokes"))} · ${i(Mn(t.dueAt))}</p>
        ${n?nj(e):`
          ${tj(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(I("showAnswer"))}</button>
            ${si(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(I("details"))}</button>
          </div>
        `}
      </article>
    `}function tj(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function ri(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(V(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(Re(e))}</small>
      </li>
    `}function nj(e){return`
      <div class="answer-section">
        ${ni(e)}
        <strong>${i(I("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(ri).join("")}
        </ul>
        <strong>${i(I("apps"))}</strong>
        <p>${i(Xr(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${si(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(ii().forgot)} <small>${i(ii().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(ii().remember)} <small>${i(sS(e))}</small></button>
        </div>
      </div>
    `}function rl(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(r.reviewSession?.initialSize||t,1):Math.max(r.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${Yj(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${P(I("review"),t,"queue",K(t,a))}
          ${P("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,K(r.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(I("hint"))} · Leya</h3>
          <p>${i(gi(e.id).hint)}</p>
          <h3>${i(I("mnemonic"))}</h3>
          <p>${i(gi(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function Tr(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function sj(e){if(!e){r.activeCardId=null,Tr();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){const t=ne(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){r.activeCardId=null,Tr();return}r.activeCardId!==t.id&&(r.activeCardId=t.id,Tr());return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function al(e,t,n="",s=null,a=null,o="textbook"){const c=Q(e);if(!c||!t)return null;if(String(o||"textbook")==="reading"){const v=a||sg(t,c);if(!v)return null;const w=Or(s||{},v);return{kind:"exercise",source:"reading",key:`reading:${String(c)}:${t}`,level:c,exerciseId:t,lessonId:String(v.sourceId||n||w.lessonId||""),cardId:"",dueAt:w.dueAt?new Date(w.dueAt).getTime():0,progress:w,exercise:v,card:null}}const d=ns(s||{},{level:c,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||ml(c,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${c}:${t}`,level:c,exerciseId:t,lessonId:m,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:ne(h)||ne(d.cardId||"")}}function Is(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=sg(t,e),c=o?Tn(o):r.progress.readingExercises?.[t]||null;return al(e,t,c?.lessonId||o?.sourceId||"",c,o,"reading")}const a=aS(e)?.exerciseSrs?.[t]||null;return al(e,t,a?.lessonId||"",a,null,"textbook")}function il(e){return!e||e.kind!=="exercise"?null:al(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function rj(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=ne(t);if(!n?.id)return null;const s=e.progress||D(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="exercise"?il(e):null}function Ir(e){return(Array.isArray(e)?e:[]).map(rj).filter(Boolean)}function aj(e){const t=Ir(e),n=Is();if(n&&r.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(o=>o.kind==="exercise"&&o.exerciseId===n.exerciseId&&o.level===n.level))return n;const s=r.activeCardId?t.find(o=>o.kind==="card"&&o.card?.id===r.activeCardId):null;if(s)return s;const a=r.reviewQueueLastKind==="card"?"exercise":r.reviewQueueLastKind==="exercise"?"card":"";if(a){const o=t.find(c=>c.kind===a);if(o)return o}return t[0]||n||null}function ij(e,t){const n=Q(e);return n==="N5"?ou(t):n==="N4"?$u(t):n==="N3"?Pu(t):n==="N2"?qu(t):""}function oj(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function ol(){return p()==="ru"?"Перевод":"Translation"}function Cp(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=hg(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function lj(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?V(e.reading):"",s=e?.reading?Cp(e.reading):"",a=f({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(ol())}</button>
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
    `}function cj(e){return r.reviewExerciseResults?.[e.exerciseId]||Tn(e.exercise)||null}function dj(e,t,n,s){const a=String(t?.id||n),o=s?.answers?.[a]||null,c=Array.isArray(t?.options)?t.options:[],l=c.find(u=>String(u.value||"")===String(t?.answer||"")),d=l?f(l.label||l):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(f(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${c.map(u=>{const m=o?.selected===u.value,h=o?.correct&&u.value===t.answer,v=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||v?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(a)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(f(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function uj(e){const t=il(e);if(!t||!t.exercise)return Rs();const n=cj(t),s=!!n?.completed,a=t.progress||Tn(t.exercise),o=oj(t.exercise),c=f(t.exercise.sourceTitle||t.exercise.title||{}),l=jt(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(A=>A?.id),u=t.exercise.kind==="cloze"||!d.length&&l.length>0;if(!u&&!d.length)return Rs();const m=u?s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,l.length):Math.max(1,d.length),v=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],w=v.map(A=>t.exercise.tiles?.[A]).filter(Boolean),N=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],S=lj(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(c||o)}</span>
          <span class="pill">${i(a.state)} · ${i(Mn(a.dueAt))}</span>
          <span class="pill">${i(m)}/${i(h)}</span>
        </div>
        ${S}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${wp(t.exercise,w,N)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(f({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((A,b)=>{const $=v.includes(b),U=N.includes(b);return`
                <button class="sentence-tile ${$?"is-used":""} ${U?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${b}" ${$||s?"disabled":""}>
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
        `:d.map((A,b)=>dj(t,A,b,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function pj(e){const t=il(e);if(!t||!t.exercise)return Rs();if(t.source==="reading")return uj(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Mn(t.progress.dueAt))}</span>
        </div>
        ${ij(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function gj(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Fe("eva","lessonComplete"))}</h2>
        <p>${i(e?Wr(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(I("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(I("dictionary"))}</button>
        </div>
      </article>
    `}function Rs(){return`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Fe("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(I("learn"))}</button>
      </article>
    `}function mj(){const e=BS(),t=Math.max(Xs,Number(r.dictionaryVisibleCount||Xs)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],c=["all",...new Set(r.cards.map(u=>Br(u.id).radical).filter(Boolean))],l=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(I("dictionary"))}</h1>
            <p>${i(l)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${fj(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(I("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${Zr(u,r.filters.jlpt)}>${i(u==="all"?I("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(I("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",I("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${Zr(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(I("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${c.map(u=>`<option value="${g(u)}" ${Zr(u,r.filters.radical)}>${i(u==="all"?I("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(I("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${Zr("all",r.filters.favorites)}>${i(I("all"))}</option>
              <option value="yes" ${Zr("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(hj).join("")||wj()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(l)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function fj(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${g(I("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${r.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function hj(e){const t=D(e.id),n=Br(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${vj(e)}
        <div class="tag-row">
          ${$i(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(I("strokes"))}</span>
          <span class="pill">${i(I("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(I("learnedStatus"))}: ${i(Fg(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function vj(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(M(e))}</h3>
          <p>${i(Nl(e))}</p>
          <span class="label">${i(Ol(e.lessonId))}</span>
        </span>
      </span>
    `}function wj(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function bj(){const e=r.kanjiPageId||IN(),t=ne(e);if(!t)return r.deferredDataLoaded?wo(be("hash","entity-not-found",TN(),Kn(location.hash).segments)):(va({route:"kanji",delay:0,force:!0}),Og());const n=D(t.id),s=Br(t.id),a=!!r.progress.favorites[t.id],o=Pj(t,p()),c=kj(t),l=hl(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(I("dictionary"))}</button>
            <h1>${i(c?`${t.kanji} — ${yj(c)}`:t.kanji)}</h1>
            <p>${i(c?$j(c):M(t))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(t.id)}">▶ ${i(I("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(t.id)}">${a?"★":"☆"} ${i(I("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${g(t.kanji)}">${i(t.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${$i(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(I("strokes"))}</span>
                <span class="pill">${i(I("radical"))}: ${i(s.radical||"-")} ${i(f(s.radicalMeaning||{}))}</span>
                ${c?`<span class="pill">Grade ${i(c.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(c.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(M(t))}</h2>
              <p>${i(Xr(t))}</p>
              ${ni(t)}
              ${cl(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${c?jj(c):""}
          ${c?Sj(c):""}
          <article class="kanji-profile-card">
            <h2>${i(I("examples"))}</h2>
            <ul class="example-list">${t.examples.map(ri).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${c?Nj(c):Tj(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(I("strokeOrder"))}</h2>
            <p class="label">${i(l?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Fr(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${si(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(I("apps"))}</h2>
            <p>${i(Xr(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${c?xj(c):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${c?Cj(c):""}
        </div>
      </section>
    `}function kj(e){return r.kanjiPageSources?.[e?.kanji]||null}function yj(e){return Ap(e.meanings)[0]||e.literal}function Ap(e){return e?e[p()]||e.ru||e.en||[]:[]}function _s(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function $j(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function jj(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(Ap(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(_s(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(I("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(I("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${_s(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function Sj(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(Aj(t))}">
                <b>${ll(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(_s(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function Nj(e){return`
      <ul class="kanji-sentence-list">
        ${Lj(e).map(n=>`
          <li>
            <strong>${ll(n.japanese,e.literal)}</strong>
            <small>${i(_s(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function Lj(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(o<3||o>44)}).sort((s,a)=>Number(Tp(a.japanese,n))-Number(Tp(s.japanese,n))).slice(0,8)}function Tp(e,t){return[...t].some(n=>e.includes(n))}function xj(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(_s(t.title||{}))}</span>
            <strong>${ll(t.japanese,e.literal)}</strong>
            <small>${i(_s(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function Cj(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function Aj(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function ll(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function Tj(e){const t=Ij(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${Mj(n)}</strong>
            <span>${i(Rj(n))}</span>
            <small>${i(_j(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function Ij(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=Ip(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function Ip(e){return e?.sentence||e?.jp||""}function Rj(e){return e?.reading||e?.hiragana||""}function _j(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function Mj(e){let t=i(Ip(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function Pj(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${Rp(e)}/`}function Rp(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function Ej(){const e=ne(r.activeCardId)||yl()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,St(e)-1)));const t=hl(e),n=St(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",c=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(I("writingPractice"))}</h1>
            <p>${i(e?`${e.kanji} · ${M(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${i(e?.kanji||"文")}</div>
            ${e?ni(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(I("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(Fr(e)[r.writingStep]||"")}</span>
                <span class="writing-mode-note">${i(c)}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${i(o)}</button>
                <button class="btn" type="button" data-action="writing-step-next">→</button>
              </div>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${i(I("replay"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${i(I("strokeOrder"))}</h3>
            ${e?Kj(e):""}
            <h3>${i(I("hint"))}</h3>
            <p>${i(gi(e?.id).hint)}</p>
            <h3>${i(I("mnemonic"))}</h3>
            <p>${i(gi(e?.id).mnemonic)}</p>
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
              <button class="btn" type="button" data-action="clear-writing">${i(I("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${i(I("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${i(p()==="ru"?"Напиши кандзи поверх образца и нажми «Получилось» для самопроверки.":"Write over the guide and tap 'Got it' for self-check.")}</div>
          </article>
        </div>
      </section>
    `}function Kj(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Fr(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function Fj(){if(!r.detailCardId)return"";const e=ne(r.detailCardId);if(!e)return"";const t=D(e.id),n=Br(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${$i(t.state)}
              <h2>${i(M(e))}</h2>
              <p>${i(Nl(e))} · ${e.strokes} ${i(I("strokes"))}</p>
              <p><span class="pill">${i(I("radical"))}: ${i(n.radical||"-")} ${i(f(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${ni(e)}
          ${cl(e)}
          <h3>${i(I("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(I("examples"))}</h3>
          <ul class="example-list">${e.examples.map(ri).join("")}</ul>
          <h3>${i(I("apps"))}</h3>
          <p>${i(Xr(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(I("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(I("favorites"))}</button>
            ${si(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function cl(e){const t=Ll(e),n=Ks(e);return`
      <section class="audio-panel">
        <h3>${i(I("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${Dj(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function Dj(e,t=Ks(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(dl(n))}">
                <span>${i(dl(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function dl(e){return e.kind==="onyomi"?fi("onyomi"):e.kind==="kunyomi"?fi("kunyomi"):e.label||"TTS"}function Oj(){const e=$l(),t=nn(),n=an();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(I("stats"))}</h1>
            <p>${i(I("xp"))} · ${i(I("level"))} · ${i(I("coins"))}</p>
          </div>
          <div class="actions">
            ${Bs("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${i(I("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${P(I("xp"),`${n.current}/${n.next}`,`${I("level")} ${r.progress.level}`,n.percent)}
          ${P(I("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,K(r.progress.streak.current,30))}
          ${P(I("mastered"),e.mastered,`${e.total}`,K(e.mastered,e.total))}
          ${P(I("successRate"),`${og()}%`,`${jl()} reviews`,og())}
          ${P(I("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,K(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(I("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(I("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(I("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(I("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${Uj()}</article>
          <article class="tool-panel" data-section="shop-panel">${zj()}</article>
          <article class="tool-panel">${Pp()}</article>
          <article class="tool-panel">
            <h3>${i(I("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(gn().badge)}</strong>
                  <small>${i(gn().hint)}</small>
                </span>
                <span class="pill">${i(gn().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${ki()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${ki()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(yi()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(yi()*100)}%</strong>
              </label>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="export">⬇ ${i(I("export"))}</button>
              <button class="btn" type="button" data-action="import">⬆ ${i(I("import"))}</button>
              <button class="btn danger" type="button" data-action="reset">↺ ${i(I("reset"))}</button>
            </div>
          </article>
        </div>
      </section>
    `}function ts(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function Bj(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(ts().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function ul(e){return f(e.title||e.name||{ru:e.id,en:e.id})}function _p(e){return f(e.description||{})}function pl(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function Uj(){return`<h3>${i(I("achievements"))}</h3><div class="achievement-grid compact">${ts().slice(0,8).map(Mp).join("")}</div>`}function Jj(){const e=ts(),t=PN(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(I("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${Bs("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${i(I("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${P(I("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",K(t,e.length))}
          ${P("XP",n.xp,p()==="ru"?"в наградах":"in rewards",K(t,e.length))}
          ${P(I("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",K(t,e.length))}
          ${P(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Gs(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",K(e.filter(s=>s.secret&&Gs(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${Bj().map(s=>{const a=e.filter(c=>c.category===s.id);if(!a.length)return"";const o=a.filter(c=>Gs(c.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${pl(s.icon)} ${i(f(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${K(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(c=>Mp(c,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function Mp(e,t=!1){const n=Gs(e.id),s=zp(e),a=Math.max(1,Number(e.target||1)),o=K(s,a),c=Math.min(s,a),l=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":ul(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":_p(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${pl(e.icon)}</span>
        <strong>${i(l)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${c}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(I("coins"))}</small>
      </div>
    `}function zj(){return Pd({closable:!1})}function Pp(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(I("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(Gj(s))}</strong>
              <small>${i(V0(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function Gj(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=me(n[1]);if(s)return wt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function Hj(){if(!r.rewardModal)return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=an(),a=t?`${I("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${I("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${pl(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(I("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${xn(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(a)}</p>
          <div class="reward-values">
            ${t?`<span>${i(I("level"))} ${r.progress.level}</span>`:""}
            ${e.xp?`<span>+${e.xp} XP</span>`:""}
            ${t?`<span>${s.current}/${s.next} XP</span>`:""}
            ${e.coins?`<span>+${e.coins} ${i(I("coins"))}</span>`:""}
            ${t?`<span>${r.progress.moonFragments} ${i(I("coins"))}</span>`:""}
          </div>
        </article>
      </div>
    `}function qj(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(ls),c=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),l=`mailto:${qt}?subject=${o}&body=${c}`;return`
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
            <strong>${i(qt)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(l)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(a)}</button>
          </div>
        </article>
      </div>
    `}function Wj(){const e=r.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=f(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),a=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",c=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${a.map(l=>`<li>${i(l)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${_i}, ${Mi}.`:`Saved locally: ${_i}, ${Mi}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(c)}</button>
          </div>
        </article>
      </div>
    `}function Xj(){if(!r.pwaInstallHelpVisible)return"";const e=zs(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function Qj(){if(jd()||r.pwaInstallHelpVisible||!zl()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal)return"";const e=Bg(),t=!Bn&&zs();return`
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
    `}function Vj(){if(jd()||!r.notificationPromptVisible||!Li("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.pwaInstallHelpVisible||zl())return"";const e=qg();return`
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
    `}function Yj(e,t,n){const s=Js(e),a=ai(e,t,n),o=Dp(Fe(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(a)}" alt="${g(f(s.name))}" />
        <div><strong>${i(f(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function xn(e,t,n,s){const a=Js(e),o=ai(e,t,n),c=Dp(Fe(e,n)),l=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return Kp(l)?`
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
    `}function Ep(){try{const e=sessionStorage.getItem(Me);return e?JSON.parse(e)||{}:{}}catch{return{}}}function Zj(e){try{sessionStorage.setItem(Me,JSON.stringify(e||{}))}catch{}}function Kp(e){return e?!!Ep()[e]:!1}function Fp(e){if(!e)return;const t=Ep();t[e]=Date.now(),Zj(t);const n=Un.get(e);n&&(clearTimeout(n),Un.delete(e)),T()}function eS(){const e=new Set;Hi("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||Kp(n)||(e.add(n),Un.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{Un.delete(n),Fp(n)},s);Un.set(n,a)});for(const[t,n]of Un)e.has(t)||(clearTimeout(n),Un.delete(t))}function ai(e,t="normal",n="welcome"){if(e==="eva")return ys(fn(null,tS(t,n)));const s=Js(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function tS(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},c=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return c&&(!n||n==="welcome")?c:a[n]||o[s]||s||"neutral"}function Dp(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function nS(e){const t=ne(r.activeCardId);if(!t||!km[e])return;ar(t,"srs_rating");const n=se(D(t.id)),s=ge(n,e);r.progress.cards[t.id]=s,tn(n,s,e),we();const a=Number(r.progress.correctCombo||0),o=Je(e)?"again":"ok";Je(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,Ne({discipline:-.8,trust:-.2},"answer_again"),Le("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:a>0}),G(Fe("eva","wrong"))):(z(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),Ne({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),Le("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),G(Fe("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(z(r.rewards.rewards.comboXp,0,"combo_bonus"),tt({title:"Combo",message:Fe("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),r.reviewQueueLastKind="card",r.revealed=!1,r.activeCardId=null,Nt(),r.pendingFocus="review-card",El("card"),Oe(),x(),Pt("review card post-render effects",()=>{yg(),Si(o),dr(),oS(t.lessonId),fl(),X()})}function ii(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function sS(e){const t=ii(),n=D(e.id),s=rS(n,"remember"),a=uh(n,s);return`${t.rememberHint}: ${ph(ch(a))}`}function rS(e,t){if(Je(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),c=Number(e.lapses||0),l=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?l>=70||a>=2?"good":"hard":l>=88&&a>=5&&c<=1?"easy":l<70||c>Math.max(1,Math.floor(a/3))?"hard":"good"}function Je(e){return e==="forgot"||e==="again"}function Ms(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function ns(e,t={}){const s={...Ms(t.level||"",t.lessonId||"",t.exerciseId||"",t),...Ri(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=Dg(s),Number.isFinite(Number(s.srsStep))?s.srsStep=de(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=fo(s),Op(s)?s:Ms(s.level,s.lessonId,s.exerciseId,s)}function Op(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function Rr(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=ns(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function aS(e){const t=Q(e);return t==="N5"?Z():t==="N4"?W():t==="N3"?H():t==="N2"?q():t==="N1"?ee():null}function gl(e){const t=Q(e);return t==="N5"?Ue():t==="N4"?at():t==="N3"?ot():t==="N2"?ct():t==="N1"?ut():[]}function iS(e,t){const n=Q(e),s=String(t||"");return!n||!s?null:gl(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function Bp(e){const t=Q(e);return t==="N5"?vr:t==="N4"?za:t==="N3"?Ga:t==="N2"?Ha:t==="N1"?Xa:null}function ml(e,t,n=""){const s=Bp(e),a=Q(e),o=String(t||"");if(!s||!a||!o)return null;const c=iS(a,n);if(c){const l=s(c).find(d=>String(d.id)===o);if(l)return l}for(const l of gl(a)){const d=s(l).find(u=>String(u.id)===o);if(d)return d}return null}function oi(e,t){const n=Q(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(c=>{if(e.exerciseSrs[c])return;const l=ml(n,c);if(!l||!s.has(String(l.lessonId||"")))return;const d=Ms(n,l.lessonId||"",l.id,l),u=e.exerciseResults?.[c]||null,m=!!e.completedExercises?.[c],h=ge(se(d),m||u?.correct?"good":"again");h.level=n,h.lessonId=String(l.lessonId||h.lessonId||""),h.exerciseId=String(l.id||c||""),h.cardId=String(l.cardId||h.cardId||""),h.kanji=String(l.kanji||h.kanji||""),h.type=String(l.type||h.type||""),h.title=l.title||h.title||null,h.prompt=String(l.prompt||h.prompt||""),h.answer=String(l.answer||h.answer||""),h.answerLabel=String(l.answerLabel||h.answerLabel||""),e.exerciseSrs[c]=h,o=!0}),o}function li(e,t){const n=Q(t);if(!e||!n)return!1;const s=gl(n),a=Bp(n);if(!a?.length&&!a)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=new Map;s.forEach(l=>{(a(l)||[]).forEach(d=>{d?.id&&o.set(String(d.id),{exercise:d,lesson:l})})});let c=!1;return Object.entries(e.exerciseSrs).forEach(([l,d])=>{const u=o.get(String(l));if(!u)return;const{exercise:m,lesson:h}=u,v=ns(d,{level:n,lessonId:h.id,exerciseId:m.id,cardId:m.cardId||"",kanji:m.kanji||"",type:m.type||"",title:m.title||null,prompt:m.prompt||"",answer:m.answer||"",answerLabel:m.answerLabel||""});JSON.stringify(d)!==JSON.stringify(v)&&(e.exerciseSrs[l]=v,c=!0)}),c}function oS(e){if(r.progress.lessonCompletions[e])return;const t=Sl(e);if(!(t.length>0&&t.every(o=>D(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),Os("",e,"legacy-srs"),E("lesson_complete"),z(s,a,"lesson_completion"),Ne({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),Le("lesson_complete",{lessonId:e,xp:s,coins:a}),tt({title:f({ru:"Урок завершён",en:"Lesson complete"}),message:Fe("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),xi("lesson_complete")}function fl(){const e=re(),t=nn();if(t.goalClaimed||t.reviews<r.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=r.rewards.rewards.comboXp,s=r.rewards.rewards.streakCoins;z(n,s,"daily_goal"),tt({title:I("dailyGoal"),message:Fe("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[e]=t}function lS(){const e=ci(),t=re();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),Up()}function Up(){const e=r.progress.streak,t=Oc(e.pendingReward);if(!t||re()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return E("streak_reward"),z(0,n,`streak:${t.milestone}:claim`),tt({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),X(),x(),!0}function cS(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,Ne({warmth:.2,curiosity:.1},"eva_click"),G(Fe("eva","welcome")),X(),x(),T();return}e==="leya"&&G(Fe("leya","combo"))}function Jp(){ce(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||(r.evaRuntime=Mt()),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,Le("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),X(),E("notification_soft"),x(),T()}function dS(){if(Y.completed)return;Y.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,Y.cardId&&(r.progress.writingPractice.cards[Y.cardId]=(r.progress.writingPractice.cards[Y.cardId]||0)+1),Ne({curiosity:1,discipline:.8,trust:.4},"writing_complete"),Le("writing_complete",{cardId:Y.cardId}),pe("writing_complete",{route:"writing",cardId:Y.cardId||"",source:"practice"});const e=X();x(),e&&T()}function uS(){const e=re();ci();const t=pS(),n=Na(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:Wg(e,1)},x())}function pS(){const e=re(),t=ci(),n=Na(r.progress.dailyBonusPending);if(!n||re()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return gS(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),E("daily_bonus"),z(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),Ne({warmth:1,discipline:.8},"daily_bonus"),tt({title:I("dailyBonus"),message:Fe("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),X(),ql(),!0}function ci(){var t;(t=r.progress).visits||(t.visits={});const e=r.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function gS(e,t){const n=ci();n.streak=e&&_n(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&_n(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function X(){if(!ts().length)return 0;let e=0;return ts().forEach(t=>{if(Gs(t.id)||!mS(t))return;e+=1;const n=t.rewardXp||0,s=t.rewardFragments||0;r.progress.achievements[t.id]={unlockedAt:new Date().toISOString(),rewardXp:n,rewardFragments:s},tt({type:"achievement",title:ul(t),message:_p(t),xp:n,coins:s,icon:t.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),z(n,s,`achievement:${t.id}`)}),e}function mS(e){return zp(e)>=Number(e.target||1)}function zp(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return $l().learned;if(e.kind==="reviews")return jl();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(Z().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return Vn();if(e.kind==="n5Writing")return Object.keys(Z().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(Z().srsKanji||{}).length;if(e.kind==="n5FinalPass")return Z().finalTest?.passed?1:0;if(e.kind==="n4Opened")return W().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n4FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="n3Opened")return H().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(H().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(H().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(H().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(H().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(H().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(H().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return H().finalTest?.passed?1:0;if(e.kind==="n2Opened")return q().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(q().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(q().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(q().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(q().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(q().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(q().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return q().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=rt().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Dt(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>D(n.id).state==="Mastered")?1:0}return 0}function tt(e){if(!r.rewardModal){r.rewardModal=e,Gp(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}function Gp(e){if(iN(),e?.type==="achievement"){qr()?E("achievement_unlock"):ki()&&aN();return}if(e?.type==="level"){E("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&E("notification_reward")}function z(e,t,n="reward"){const s=r.progress.level||wi(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const a=fS(n);if(!a&&e>0&&E("xp_gain"),!a&&t>0&&E("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=wi(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>s){E("level_up"),Le("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const o=an();tt({type:"level",title:I("levelUp"),message:`${I("level")} ${r.progress.level} - ${o.current}/${o.next} XP - ${r.progress.moonFragments} ${I("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function fS(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function tn(e,t,n){const s=nn();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Je(n)&&(s.mistakes+=1),s.minutes=Ai(s.reviews*.75+s.learned*1.25,1),r.progress.daily[re()]=s}function we(){Up();const e=re(),t=r.progress.streak.lastStudyDate;if(t===e)return;const n=!!(t&&_n(t,e)>1&&r.progress.streak.current>0);r.progress.streak.current=t&&_n(t,e)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=e,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:e,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),Ne(n?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},n?"streak_lost":"study_streak"),n&&G(Fe("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:Wg(e,1)}),Le("streak_up",{streak:r.progress.streak.current,lost:n}),x()}function Hp(){if(r.route!=="stats")return;if(!window.Chart){Om().then(()=>{r.route==="stats"&&Hp()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=CN(10),t=e.map(a=>a.slice(5)),n=tN(),s=nN(n);_r("activityChart",{type:"bar",data:{labels:t,datasets:[{label:I("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:I("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),_r("jlptChart",{type:"bar",data:{labels:Object.keys(cg()),datasets:[{label:I("mastered"),data:Object.values(cg()),backgroundColor:n.yellow}]},options:s}),_r("streakChart",{type:"line",data:{labels:t,datasets:[{label:I("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),_r("stateChart",{type:"doughnut",data:{labels:Object.keys(lg()),datasets:[{data:Object.values(lg()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),_r("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:I("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function _r(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function hS(){const e=Cn();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,St(e)-1)),Y.cardId!==String(e.id)&&vS(e)),wS(),Pr(),di(),Dr(Mr(!1)),window.setTimeout(Wp,120)}function Cn(){return ne(r.activeCardId)||yl()[0]||r.cards[0]||null}function vS(e){Y.cardId=String(e?.id||""),Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Y.completed=!1}function wS(){const e=document.getElementById("practiceCanvas");if(!e)return;Ps();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),Y.drawing=!0,Y.activePointerId=a.pointerId,Y.currentStroke=[qp(e,a)],Y.completed=!1,Ps())},n=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=qp(e,a),c=Y.currentStroke[Y.currentStroke.length-1];(!c||ng(c,o)>1.4)&&(Y.currentStroke.push(o),Ps())},s=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=bS(Y.currentStroke);o.length&&Y.strokes.push(o),Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Ps(),Dr(Mr(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function qp(e,t){const n=e.getBoundingClientRect();return{x:de((t.clientX-n.left)*(e.width/n.width),0,e.width),y:de((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function bS(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{ng(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function Ps(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=Cn();tg(t,e),n&&jS(t,e,n),Y.strokes.forEach((s,a)=>eg(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===Y.strokes.length-1})),Y.currentStroke.length&&eg(t,Y.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function kS(){Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.completed=!1,Ps(),Dr(Mr(!1))}function yS(){Y.strokes.pop(),Y.currentStroke=[],Y.completed=!1,Ps(),Dr(Mr(!1))}function $S(e=!1){const t=Mr(!0);Dr(t),e&&(Si(t.success?"good":"again"),G(t.message),t.success&&dS())}function Mr(e){const t=document.getElementById("practiceCanvas"),n=Cn(),s=St(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=Y.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=de(Math.round(Math.min(a.length,s)/s*100),0,100),c=e?100:o,l=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=hl(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:c,success:l,expectedCount:s,message:d}}function Wp(){const e=document.getElementById("strokeCanvas"),t=Cn();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=St(t),s=460,a=performance.now(),o=c=>{const l=c-a,d=de(Math.floor(l/s),0,n-1),u=de((l-d*s)/s,0,1);r.writingStep=d,Pr(d,u),di(),l<n*s?Y.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,Pr(r.writingStep,1),di())};Y.demoAnimationId=requestAnimationFrame(o)}function Xp(){const e=document.getElementById("strokeCanvas"),t=Cn();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=performance.now(),s=520,a=de(r.writingStep,0,Math.max(0,St(t)-1)),o=c=>{const l=de((c-n)/s,0,1);Pr(a,l),l<1&&(Y.demoAnimationId=requestAnimationFrame(o))};Y.demoAnimationId=requestAnimationFrame(o)}function Qp(e){Vp(r.writingStep+e,!1)}function Vp(e,t){const n=Cn();n&&(r.writingStep=de(e,0,Math.max(0,St(n)-1)),di(),t?Xp():Pr(r.writingStep,1))}function di(){const e=Cn();if(!e)return;const t=Fr(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${St(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),Hi(".writing-guide-list li").forEach((o,c)=>o.classList.toggle("is-active",c===r.writingStep))}function Pr(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=Cn();if(!n||!s)return;const a=n.getContext("2d");tg(a,n);const o=Er(s);if(!o){Zp(a,n,s,e);return}Yp(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function jS(e,t,n){const s=Er(n);if(!s){Zp(e,t,n,r.writingStep);return}Yp(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Er(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function hl(e){return!!Er(e)}function St(e){const t=Er(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function Kr(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function Yp(e,t,n,s={}){const a=de(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=SS(n,t,s.padding||22),c=Kr(),l=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=c.guide;n.strokeOrder.forEach((m,h)=>{const v=h<a,w=h===a;h>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=w?d:v?l:u,e.lineWidth=(w?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(w?1:v?.86:.24),w&&s.progress<1&&(e.globalAlpha*=.45+de(s.progress,0,1)*.55),w&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&LS(e,m,o,h+1,w))})}function SS(e,t,n=22){const s=NS(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,c=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:c}}function NS(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function LS(e,t,n,s,a){const o=xS(t.path);if(!o)return;const c=n.x+o.x*n.scale,l=n.y+o.y*n.scale;CS(e,c,l,s,a)}function xS(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function CS(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Zp(e,t,n,s=0){const a=Kr(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const c=p()==="ru"?`Шаг ${s+1}/${St(n)} · точной схемы пока нет`:`Step ${s+1}/${St(n)} · exact paths not available yet`;e.fillText(c,18,16),e.restore()}function eg(e,t,n={}){const s=t.map(IS).filter(Boolean);if(!e||!s.length)return;const a=Kr();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let c=1;c<s.length-1;c+=1){const l=RS(s[c],s[c+1]);e.quadraticCurveTo(s[c].x,s[c].y,l.x,l.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function tg(e,t){if(!e||!t)return;const n=Kr();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),AS(e,t)}function AS(e,t){const n=Kr();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Fr(e){const t=Er(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:St(e)},(s,a)=>n[a]||TS(e,a))}function TS(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Dr(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Y.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function IS(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function RS(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function ng(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function _S(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function MS(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(c=>c.id===s.lessonId);if(a&&!Ee(a))return!1;const o=D(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(pi)}function PS(){const e=new Date;return kl().filter(t=>{const n=D(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(pi)}function ES(){const e=Date.now(),t=[];return[["N5",Z()],["N4",W()],["N3",H()],["N2",q()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const c=ns(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!c.dueAt||!Op(c))return;const l=ml(n,a,c.lessonId||"");if(!l)return;const d=String(l?.lessonId||c.lessonId||"");if(!u0(n,d))return;const u=new Date(c.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(c.cardId||""),dueAt:u,progress:c})})}),t.sort(bl)}function ui(){const e=[];return r.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((a,o)=>{const c={id:String(a.id||`${s.id}:${o}`),prompt:a.prompt||{ru:"",en:""},answer:String(a.answer||""),options:_f(a.options)};e.push({id:String(a.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:c,questions:[c]})})})}),[...e,...nb()]}function sg(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return ui().find(a=>String(a.id||"")===n&&(!s||String(a.level||"").toUpperCase()===s))||ui().find(a=>String(a.id||"")===n)||null}function rg(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?f(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":jt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":jt(e).map(n=>n.kanji).join(""))}}function vl(e){return 1}function An(e){const t=rg(e);return{...Ms(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:vl(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function Or(e,t){const n=An(t),s=ns({...n,...e||{}},rg(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=vl(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function Tn(e){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const t=r.progress.readingExercises[String(e.id)]||null;if(t){const a=Or(t,e);return r.progress.readingExercises[String(e.id)]=a,a}const n=An(e);return r.progress.readingExercises[String(e.id)]=n,n}function ss(e,t){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const n=Or(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function ag(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function Es(e=""){var a;if(!r.progress)return!1;const t=Q(e);(a=r.progress).readingExercises||(a.readingExercises={});const n=new Map(ui().filter(o=>!t||Q(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(r.progress.readingExercises).forEach(([o,c])=>{const l=n.get(String(o));if(!l)return;const d=Or(c,l),u=ag(d)?d:An(l);JSON.stringify(c)!==JSON.stringify(u)&&(r.progress.readingExercises[String(o)]=u,s=!0)}),s}function KS(){const e=Date.now();return ui().map(t=>{if(!p0(t.level))return null;const n=r.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=Or(n,t);if(r.progress.readingExercises[String(t.id)]=s,!ag(s))return null;const a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort(bl)}function wl(){const e=PS().map(n=>{if(!n?.id)return null;const s=D(n.id);return{kind:"card",key:`card:${n.id}`,card:n,cardId:String(n.id),dueAt:s.dueAt?new Date(s.dueAt).getTime():0,progress:s}}).filter(Boolean),t=[...ES(),...KS()].sort(bl);return Ir(dh(e,t,mo))}function ig(e=wl()){const t=Object.freeze(Ir(e).map(n=>n.key).filter(Boolean));r.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString()}}function FS(){const e=wl();if(r.route!=="review")return e;r.reviewSession||ig(e);const t=new Map(e.map(a=>[a.key,a])),n=Array.isArray(r.reviewSession?.keys)?r.reviewSession.keys:[],s=n.map(a=>t.get(a)).filter(Boolean);return s.length!==n.length||!s.length&&e.length?(ig(e),e):Ir(s)}function DS(){const e=Date.now();return kl().filter(t=>{const n=D(t.id),s=n.dueAt?new Date(n.dueAt).getTime():0;return n.state==="Learning"&&s>e}).length}function OS(){return kl().filter(e=>D(e.id).state!=="New").length}function Pe(){if(pa&&ga!==null)return ga;const e=wl().length;return pa&&(ga=e),e}function bl(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?D(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?D(t.card.id):t.progress,a=Ca(n),o=Ca(s);return a!==o?o-a:e.kind!==t.kind?e.kind==="card"?-1:1:e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function kl(){const e=new Set,t=[];return De.forEach(n=>{Cg(n).forEach(s=>{const a=String(s?.id||"");!a||e.has(a)||(e.add(a),t.push(s))})}),t.sort(pi)}function yl(){const e=xN();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!Ee(n))return!1;const s=D(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(pi)}function pi(e,t){const n=D(e.id),s=D(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const c=Ca(n),l=Ca(s);if(c!==l)return l-c}return Number(e.id)-Number(t.id)}function BS(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=Br(t.id),s=[t.kanji,M(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,Nl(t),t.jlpt,Ol(t.lessonId),Xr(t),n.radical,f(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,Re(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&US(t.strokes,r.filters.strokes)})}function US(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function $l(){const e=r.cards.length,t=r.cards.filter(s=>D(s.id).state!=="New").length,n=r.cards.filter(s=>D(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:yl().length,completion:K(n,e)}}function jl(){return Object.values(r.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function JS(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function og(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function lg(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[D(t.id).state]+=1}),e}function cg(){const e={};return r.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),D(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function nn(){const e=re();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function Sl(e){return r.cards.filter(t=>t.lessonId===e)}function zS(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||Ee(t))&&D(e.id).state==="New"})}function ne(e){const t=String(e||"");return t&&r.cards.find(n=>String(n.id)===t||String(n.kanji||"")===t||Rp(n)===t)||null}function GS(e){return ne(e)}function HS(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function Br(e){return r.kanjiMeta[String(e)]||{}}function gi(e){const t=r.kanjiHints[String(e)]||{};return{hint:f(t.hint||{})||Fe("leya","hint"),mnemonic:f(t.mnemonic||{})||""}}function qS(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),x(),T())}function Nt(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function WS(e){const t=String(e||"");r.readingCheck.cardId!==t&&Nt(t)}function dg(){const e=ne(r.readingCheck.cardId||r.activeCardId);if(!e)return;ir(e,"reading_check"),yg();const t=QS(r.readingCheck.value),n=XS(e),s=t.some(l=>n.normalized.has(l)),a=t.length>0,o=a&&s?"correct":"wrong",c=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:c},E(o==="correct"?"answer_correct":"answer_wrong"),Oe(),requestAnimationFrame(()=>{const l=document.getElementById(`readingCheck-${e.id}`);l&&(l.focus(),"setSelectionRange"in l&&l.setSelectionRange(l.value.length,l.value.length))})}function XS(e){const t=Ur(e),n=[...In(t.onyomi.kana),...In(t.kunyomi.kana),...In(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(ug).filter(Boolean))}}function QS(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(ug).filter(Boolean)}function ug(e){const t=pg(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return VS(t).trim()}function pg(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function VS(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=YS(t.slice(-1));continue}t+=n}return t}function YS(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function gg(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const mg={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},fg={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Ur(e){const t=gg(e);if(t&&t.readings){const a=t.readings,o=mi(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),c=mi(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||c.kana)return{onyomi:o,kunyomi:c}}const n=mi(e?.onyomi,e?.onyomi_romaji),s=mi(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function In(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function mi(e,t="",n=""){const s=In(e).length?In(e):In(n),a=In(t),o=s.map((c,l)=>({kana:V(c),romaji:ZS(c,a[l])})).filter(c=>c.kana||c.romaji);return{kana:o.map(c=>c.kana).filter(Boolean).join(" / "),romaji:o.map(c=>c.romaji).filter(Boolean).join(" / ")}}function ZS(e,t){const n=hg(e);return n?t&&vg(t)===vg(n)?t:n:t||""}function hg(e){const t=[...e0(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],c=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=t0(n);u&&(n+=u);continue}let l="";const d=o+c;if(fg[d])l=fg[d],a+=1;else if(mg[o])l=mg[o];else if(/[a-zA-Z0-9]/u.test(o))l=o.toLowerCase();else{s=!1;continue}if(s){const u=l.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=l}return n}function e0(e){return pg(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function t0(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function vg(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function wg(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function fi(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function Nl(e){const t=Ur(e);return[`${fi("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${fi("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function Ll(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return kg(t)||bg(e)}function bg(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=n0(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function kg(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function n0(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function s0(e){return!!(Ll(e)||xl(e))}function xl(e){if(!e)return"";const t=Ur(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function r0(e){const t=Ur(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Ks(e,t=""){const n=BL(r0(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function a0(e){return Ks(e).length>0}function i0(e){return In(e)[0]||String(e||"").trim()}function Cl(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-Qs);if(e>0){window.setTimeout(Cl,e);return}const t=ne(r.activeCardId);if(!t)return;const n=Ks(t).map(o=>`${o.kind}:${o.kana}`).join("|")||xl(t),s=kg(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const a=`${r.route}:${t.id}:${n||s}`;a!==uc&&(uc=a,$g(t,{silent:!0}))}function yg(){Al(),"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Al(){It&&(It.pause(),It.currentTime=0,It=null)}function $g(e,t={}){let n=null;const s=()=>(n||(n=jg(e,t)),n);return Sg(e,{kind:"cycle",silent:t.silent,fallback:s})?Promise.resolve(!0):s()}function jg(e,t={}){const n=Ll(e);return n?(Al(),It=new Audio(n),It.preload="auto",It.onended=()=>{It=null},It.onerror=()=>{t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:n})},It.play().then(()=>!0).catch(s=>(t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:n,error:s}),!1))):Promise.resolve(!1)}function Sg(e,t={}){Al();let n=null;const s=typeof t.fallback=="function"?()=>(n||(n=t.fallback()),n):null,a=V(t.text||""),o=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${o}`,l=Ks(e);let d=null;if(!a){const v=UL(l,pc.get(c)??-1,o);d=v.item,pc.set(c,v.cursor)}const u=a||d?.kana||i0(xl(e));if(!JL(u,{onError:v=>{t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:v}),s?.()}}))return s?.(),!s&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:bg(e)}),!1;const h=t.label||(d?dl(d):"TTS");return t.silent||G(`${e?.kanji||""} ${h}: ${u}`.trim()),!0}function o0(e,t){G(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Ee(e){return!!e}function hi(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function Ng(e){if(!e||!Ee(e))return"locked";const t=Sl(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=D(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(a=>{const o=D(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function Tl(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function Il(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function l0(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g(Il(e))}"></span>`}function c0(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${Tl(e)}">${i(Il(e))}</span>`}function sn(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function Lt(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function rs(e){const t=String(e||"").toUpperCase();return t==="N5"?Z():t==="N4"?W():t==="N3"?H():t==="N2"?q():t==="N1"?ee():null}function d0(e,t,n="open"){const s=Q(e),a=String(t||"");if(!s||!a)return!1;const o=rs(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function u0(e,t){const n=Q(e),s=String(t||"");if(!n||!s)return!1;const a=rs(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function Jr(e,t="open"){var s;const n=Q(e);return!n||((s=r.progress).viewedReadingLevels||(s.viewedReadingLevels={}),r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function p0(e){const t=Q(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function Rl(e){const t=Lt(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function Lg(e){const t=String(e||"").toUpperCase(),n=rs(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const a=Lt(t)?.lessonCount||(t==="N5"?10:0);let o=0;if(t==="N5"){o=Vn();const c=Object.keys(n.studiedKanji||{}).length;if(o>=10&&c>=80||o>=a)return!0}else if(o=Object.keys(n.completedLessons||{}).length,o>=a)return!0;return!1}function gt(e){const t=String(e||"").toUpperCase();if(De.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!Lt(t))return t==="N5";const s=Rl(t);return s.length?s.every(a=>Lg(a)):!0}function xg(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function rn(e){const t=Rl(e);return t.length?p()==="ru"?`Откроется после завершения ${xg(t)}.`:`Unlocks after completing ${xg(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function zr(e){const t=Q(e);if(!t)return[];const n=Lt(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),c=s.filter(d=>!o.has(d.id)),l=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...c].slice(0,l||s.length)}function _l(e){const t=Q(e);if(!t)return"";const n=zr(t);if(!n.length)return"";const s=j0(t);if(s?.lessonId&&bi(t,s.lessonId))return s.lessonId;const a=rs(t)?.currentLessonId||"";if(a&&bi(t,a))return a;const o=t==="N5"?Z().completedLessons||{}:t==="N4"?W().completedLessons||{}:t==="N3"?H().completedLessons||{}:t==="N2"?q().completedLessons||{}:r.progress.lessonCompletions||{},c=n.filter(l=>o[l.id]);return c.length?(c.sort((l,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[l.id]||"")||0;return u!==m?u-m:(d.order||0)-(l.order||0)}),c[0]?.id||n[0]?.id||""):n[0]?.id||""}function vi(e,t=""){const n=Q(e);if(!n||!sn(n))return;if(!gt(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,qe("textbooks",null,n),G(rn(n));return}const s=r.route,a=String(t||"")||_l(n),o=["N5","N4","N3","N2"].includes(n),c=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&mt(n,a,"open_jlpt"),Nt(),nt(c),Ia(),T()}function g0(e){return e?sn(e.jlpt):null}function Fs(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function as(){return r.progress.jlptLessonPractice=Vc(ms().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function Ds(e){if(!e?.drills?.length)return null;const t=as(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function m0(e){const t=Fs(r.activeJlptLesson),n=Ds(t);if(!n||!n.tiles[e])return;const s=as(),a=s.selected[n.id]||[],o=n.blanks.flatMap(c=>c.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,x(),T())}function f0(){const e=Ds(Fs(r.activeJlptLesson));if(!e)return;const t=as();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,x(),T()}function h0(){const e=Ds(Fs(r.activeJlptLesson));if(!e)return;const t=as();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,x(),T()}function v0(){const e=Ds(Fs(r.activeJlptLesson));if(!e)return;const t={...Pl(),...Ml()},n=as(),s=n.selected[e.id]||[],a=e.blanks.flatMap(l=>l.answer||[]),o=a.reduce((l,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&l.push(u),l},[]),c=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:c,wrongIndexes:o,message:c?t.correct:t.wrong},c&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),z(8,1,`jlpt_practice:${e.id}`),E("answer_correct")):c||E("answer_wrong"),x(),T()}function w0(){var o,c,l,d,u,m;const e=Fs(r.activeJlptLesson),t=Ds(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],a=as();a.activeIds[e.jlpt]=s.id,(o=a.selected)[c=s.id]||(o[c]=[]),(l=a.checked)[d=s.id]||(l[d]=!1),(u=a.results)[m=s.id]||(u[m]=null),x(),T()}function Cg(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function Ml(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function Pl(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function wi(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=Gr(n,t)&&n<100;)s-=Gr(n,t),n+=1;return n}function an(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=Gr(t,e)&&t<100;)n-=Gr(t,e),t+=1;const s=Gr(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:K(n,s)}}function Gr(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function b0(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${re()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),pe("progress_export",{route:r.route,source:"manual"}),G(I("export"))}function pe(e,t={},n={}){return e1(e,t,n)}function zt(e="learn",t={}){pe("learning_start",{route:r.route,source:e,...t},{dedupeKey:"learning_start"})}function Os(e,t,n="textbook"){const s=Q(e),a=String(t||"");pe("lesson_complete",{route:r.route,level:s,lessonId:a,source:n},{dedupeKey:`${s||"legacy"}:${a}`})}function El(e="review"){if(r.route!=="review"||Pe()>0)return;const t=r.reviewSession?.startedAt||"current";pe("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function Hr(e,t,n="final-test"){const s=Q(e);pe("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&pe("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function k0(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function Q(e){const t=String(e||"").toUpperCase();return De.includes(t)?t:""}function ze(e){if(!e||typeof e!="object")return null;const t=Q(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function y0(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=Q(n),o=ze({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function is(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function bi(e,t){const n=Q(e),s=String(t||"");return!n||!s?!1:zr(n).some(a=>a.id===s)}function $0(e,t){const n=Q(e),s=String(t||"");if(!n||!s)return!!n;const a=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return a.has(s)||n!=="N5"&&o.has(s)?!0:zr(n).some(c=>c.id===s)}function Ag(e){return zr(e)[0]?.id||""}function j0(e=""){const t=Q(e);if(t){const a=ze(r.progress.lastOpenedJlptLessons?.[t]||null)||(ze(r.progress.lastOpenedJlptLesson||null)?.level===t?ze(r.progress.lastOpenedJlptLesson||null):null);return a&&bi(t,a.lessonId)?a:null}const n=[ze(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>ze(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>bi(a.level,a.lessonId))||null}function S0(e=""){const t=Q(e);if(t)return ze(r.progress.lastOpenedJlptLessons?.[t]||null)||(ze(r.progress.lastOpenedJlptLesson||null)?.level===t?ze(r.progress.lastOpenedJlptLesson||null):null);const n=[ze(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>ze(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function N0(e){const t=Q(e);if(!t)return"";const n=De.indexOf(t);return n>=0&&n<De.length-1?De[n+1]:""}function mt(e,t,n="open"){var h;const s=Q(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},c=ze(r.progress.lastOpenedJlptLessons?.[s]||null),l=ze(r.progress.lastOpenedJlptLesson||null);(h=r.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=d0(s,a,n),u=rs(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!c||c.lessonId!==a||c.level!==s||l?.lessonId!==a||l?.level!==s||d)&&x(),o}function xt(e,t="btn ghost"){const n=Q(e),s=N0(n);if(!n||!s)return"";const a=Ag(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(a)}">${i(o)}</button>`}function Gt(){return Q(r.activeJlptLesson)||Q(r.activeTextbookLevel)||Q(r.jlptLessons.find(e=>gt(e.jlpt))?.jlpt)||Q(r.jlptLessons[0]?.jlpt)||"N5"}function L0(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(Q(t.level||r.activeTextbookLevel||Gt())||Gt())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(Q(t.level||r.activeJlptLesson||Gt())||Gt())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function x0(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=L0(e,t),n.href}function C0(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=Q(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},c=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${c} ${s}`:c}function A0(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=Q(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?Lt(s):null,o=t.lesson||(s?sn(s):null),c=p()==="ru";if(n==="textbooks")return c?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const l=f(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return c?`${l||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${l||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const l=f(o?.title||{}),d=f(o?.summary||{});return c?`${s?`${s} · `:""}${l||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${l||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?c?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?c?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?c?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?P0(t.reward||r.rewardModal||{}):"Flash Kanji."}function T0(){return p()==="ru"?"Поделиться":"Share"}function Bs(e=r.route,t={}){const n=Q(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||T0();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${I0()}</span>
        <span>${i(a)}</span>
      </button>
    `}function I0(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function Tg(e){return e==="youtube"?`
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
    `}async function R0(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await D0(e.text,e.url,n)?"copy":"failed"}async function _0(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:C0(n,t),text:A0(n,t),url:x0(n,t),files:[]};if(n==="achievement"||s){const o=await E0(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function Ig(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),pe("share_opened",{route:n,level:Q(s.level)||"",source:"share"});const a=await _0(n,s),o=await R0(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(pe("share_completed",{route:n,source:a.files?.length?"file":"web-share"}),!0):o==="copy"?(pe("share_link_copied",{route:n,source:"copy"}),pe("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||G(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function M0(){await Ig("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function P0(e={}){const t=I("shareFallback"),n=e.level||r.progress.level,s=an(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${I("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function E0(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;K0(a,1200,630);const o=e.level||r.progress.level,c=an(),l=e.type==="level"?`${c.current}/${c.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=ai(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,v]=await Promise.all([Rg("assets/logo.webp"),m?Rg(m):Promise.resolve(null)]);return h&&_g(a,h,58,48,330,116),v&&_g(a,v,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(I("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${I("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${l} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),F0(s)}function K0(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function Rg(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function _g(e,t,n,s,a,o){const c=Math.min(a/t.naturalWidth,o/t.naturalHeight),l=t.naturalWidth*c,d=t.naturalHeight*c;e.drawImage(t,n+(a-l)/2,s+(o-d)/2,l,d)}function F0(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function D0(e,t,n="shareLinkCopied"){const s=await Mg(`${e}
${t}`);return G(s?I(n):e),s}async function Mg(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function O0(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=Dc(ms(),n.progress||n),rr(),n.customization&&(r.customization={...Jn(),...n.customization,selected:{...Jn().selected,...n.customization.selected||{}}},gs()),wa(),Us(),x(),on(),G(I("import")),T()}catch(n){console.error(n),G("Invalid JSON")}finally{e.target.value=""}}function B0(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=ms(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,rr(),Us(),x(),T()}function U0(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,on(),x(),T()}function J0(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,x(),T()}function Pg(){r.progress.settings.sound=!cn(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,Us(),Kl(),x(),G(r.progress.settings.sound?"в™Є":"Г—")}function z0(){Pg()}function qr(){return window.FlashKanjiSound||null}function G0(){try{qr()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function Us(){const e=qr();!e||!r.progress?.settings||(e.setSoundEnabled?.(cn(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(yi()))}function ki(){return cn(r.progress?.settings?.sound,!0)}function Kl(){const e=Ce('[data-action="sound"]');if(!e)return;const t=cn(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=H0(t)}function H0(e){return e?`
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
      `}function q0(e){return e?`
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
      `}function W0(){const e=Ce('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||Vr(),n=!!(t.docked||r.notificationPromptVisible||Li("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=q0(s)}function Fl(){const e=Ce('[data-action="toggle-header-socials"]');if(!e)return;const t=Dl(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function Eg(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),Fl())}function Dl(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function yi(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?de(e,0,1):.75}function X0(e){const t=de(Number(e),0,1);r.progress.settings.uxVolume=t,Us(),x()}function E(e){if(!ki())return!1;const t=()=>{try{if(!!qr()?.playSound?.(e)){Qs=Date.now();return}Ul(String(e))}catch(n){console.warn("UX sound failed.",n),Ul(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function on(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=Yt();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",Q0(e?.file||"assets/bg/bg_study_hub.webp"));const t=gw();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function Q0(e){const t=String(e).replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function I(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function f(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function V0(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Wr(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function Y0(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function Ol(e){const t=r.lessons.find(n=>n.id===e);return t?Wr(t):""}function M(e){return Ke(e,p())}function Ke(e,t=p()){if(!e)return"";const n=gg(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Xr(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Re(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||Bl(n.romaji)===Bl(e.romaji));return t?.translation_en?t.translation_en:$m[Bl(e.romaji)]||e.translation||""}function Bl(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Js(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Fe(e,t){const n=e==="eva"?Z0(t):"";if(n)return n;const s=Js(e).dialogs?.[t]||Js(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return Ge(a)}function Z0(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=eN(t),s=[...r.evaAutonomyLines||[],...Ka()].filter(c=>{const l=f(c?.text||{});if(!l)return!1;const d=Array.isArray(c.tags)?c.tags:[];if(!(n.includes(c.category)||d.some(h=>n.includes(h))))return!1;const m=Kg(l);return m.length>=12&&m.length<=132}),a=s.filter(c=>!Ui.includes(c.id)),o=Ge(a.length?a:s);return o?(o.id&&(Ui=[o.id,...Ui.filter(c=>c!==o.id)].slice(0,18)),Kg(f(o.text||{}))):""}function eN(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function Kg(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function $i(e){const t=Fg(e);return`<span class="pill ${t}">${i(ym[t]||"New")}</span>`}function Fg(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function Dg(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function tN(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function nN(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function ji(){try{return ca||(ca=new(window.AudioContext||window.webkitAudioContext)),ca.state==="suspended"&&ca.resume().catch(()=>null),ca}catch(e){return console.warn("Audio context unavailable.",e),null}}function sN(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function Ul(e){const t=ji();if(!t)return!1;try{const n=sN(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const c=t.createOscillator(),l=t.createGain();c.type=n.type,c.frequency.value=a;const d=s+n.interval*o;l.gain.setValueAtTime(1e-4,d),l.gain.exponentialRampToValueAtTime(n.peak,d+.02),l.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),c.connect(l).connect(t.destination),c.start(d),c.stop(d+n.duration+.02)}),Qs=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=Ul;function rN(){const e=()=>{const t=ji();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function Si(e){if(r.progress.settings.sound){if(qr()){E(e==="again"?"answer_wrong":"answer_correct");return}try{const t=ji();if(!t)return;Qs=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function aN(){if(r.progress.settings.sound)try{const e=ji();if(!e)return;Qs=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const c=t+s*.08;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(.12,c+.02),o.gain.exponentialRampToValueAtTime(1e-4,c+.24),a.connect(o).connect(e.destination),a.start(c),a.stop(c+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function iN(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function G(e){const t=Ce("#toast");t.textContent=e,t.hidden=!1,clearTimeout(gc),gc=window.setTimeout(()=>{t.hidden=!0},2400)}function Og(){return`
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
      </section>`}function oN(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function lN(){try{[At,Ws,la,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function cN(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function dN(e){try{const t=Number(sessionStorage.getItem(oa)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(oa,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&lN(),await cN();try{localStorage.removeItem(At),localStorage.removeItem(Ws),localStorage.removeItem(la),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function uN(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(Ws,`${R}:done`)}catch(a){console.warn("Cannot save PWA cache reset marker.",a)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),a=await navigator.serviceWorker.register(s.href);if(!a||typeof a.update!="function")return;pN(a),await a.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function pN(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Ni(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(y)||localStorage.getItem(k);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(y)||localStorage.setItem(y,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function Jl(){try{localStorage.setItem(y,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function gN(e){e.preventDefault(),Bn=e,r.progress&&r.i18n&&fN()}async function mN(){if(pe("pwa_install_click",{route:r.route,source:Bn?"browser":zs()?"ios":"help"}),Qr()){Gl();return}if(!Bn){r.pwaInstallHelpVisible=!0,Oe();return}const e=Bn;Bn=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Gl();return}Hl()}catch(t){console.warn("PWA install prompt failed.",t),Hl()}}function Qr(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function zl(){const e=r.pwaInstallPrompt||Ni();if(Qr()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||_n(t,re())<1?!1:!!Bn||zs()}function fN(){zl()&&(E("notification_soft"),T())}function Gl(){r.pwaInstallPrompt={...Ni(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,Jl(),pe("pwa_installed",{route:r.route,source:zs()?"ios":"browser"},{dedupeKey:"appinstalled"}),zg(),r.progress&&r.i18n&&T()}function Hl(){const e=r.pwaInstallPrompt||Ni(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:hN(t),neverShow:t>=5,installed:!1},Jl(),T()}function hN(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function vN(){!Qr()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},Jl())}function zs(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function Bg(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function Vr(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(C);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function Rn(){try{localStorage.setItem(C,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function Yr(){clearTimeout(Ki),Ki=0}function wN(){Yr(),r.notificationPromptVisible&&(Ki=window.setTimeout(()=>{r.notificationPromptVisible&&Ug()},5e3))}function Ug(){Yr(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},Rn(),T())}function Jg(){return Qr()||!!r.pwaInstallPrompt?.installed}function Li(e="usage"){const t=r.notificationPrompt||Vr();return!(!("Notification"in window)||t.neverShow||t.enabled||!Jg()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-Gi<2*60*1e3)}function xi(e="usage"){return Li(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},Rn(),E("notification_soft"),wN(),T(),!0):("Notification"in window&&Notification.permission==="granted"&&Gg(),!1)}function zg(){if(clearTimeout(hc),!Jg())return;const e=Math.max(0,2*60*1e3-(Date.now()-Gi));hc=window.setTimeout(()=>xi("usage"),e)}async function bN(){if(r.notificationPromptVisible=!1,Yr(),!("Notification"in window)){Ci();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Gg(),G(qg().enabled),Oe();return}Ci()}catch(e){console.warn("Notification permission failed.",e),Ci()}}function Gg(){!("Notification"in window)||Notification.permission!=="granted"||(Yr(),r.notificationPrompt={...Vr(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},Rn(),ql())}function Ci(){const e=r.notificationPrompt||Vr(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,Yr(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:kN(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},Rn(),Oe()}function kN(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function ql(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,Rn(),Ji.forEach(e=>clearTimeout(e)),Ji.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>Hg(e.type,yN(e.hour,e.minute))),NN())}function Hg(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await $N(e),Hg(e,LN(t,1))},n);Ji.set(e,s)}function yN(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function $N(e){if(!jN(e))return!1;const t=SN(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),E(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=re(),Rn(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function jN(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===re())return!1;if(e==="review")return Pe()>0;if(e==="daily_bonus"){const t=Na(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=re()&&!r.progress.dailyBonuses[re()]}return e==="lesson"?zS().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function SN(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function NN(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,Rn()}catch{r.notificationPrompt.periodicSync=!1,Rn()}}function qg(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function se(e){return{...e,history:[...e.history||[]]}}function LN(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function xN(){const e=new Date;return e.setHours(23,59,59,999),e}function re(){return Wl(new Date)}function Wl(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Xl(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function _n(e,t){return Math.round((Xl(t)-Xl(e))/864e5)}function Wg(e,t){const n=Xl(e);return n.setDate(n.getDate()+t),Wl(n)}function CN(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Wl(s)})}function Mn(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function K(e,t){return t?de(Math.round(e/t*100),0,100):0}function de(e,t,n){return Math.max(t,Math.min(n,e))}function Ai(e,t){const n=10**t;return Math.round(e*n)/n}function Ge(e){return e[Math.floor(Math.random()*e.length)]}function Pn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function Zr(e,t){return String(e)===String(t)?"selected":""}function AN(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Zg(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Xg(e="",t=""){const n=String(e||"").trim().toUpperCase(),s=String(t||"").trim(),a=n?`#textbooks/${encodeURIComponent(n)}`:"#textbooks/";return s?`${a}/${encodeURIComponent(s)}`:a}function nt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${AN()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function ea(){const e=dm(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash?e:Zg(location.pathname||"/")?Kn(location.hash):e.status==="not-found"?e:be("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function Qg(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function ta(e){const t=e.route,n=e.status==="valid"?e.params:{};r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,r.kanjiPageId=t==="kanji"&&n.cardId||null,r.activeTextbookLevel=t==="textbooks"&&n.level||null,r.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,r.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"&&n.view||Wt,r.activeLearnNodeId=t==="learn"&&r.activeLearnView===Tt&&n.targetId||null,r.activeLearnLegacyLessonId=t==="learn"&&r.activeLearnView===Xt&&n.targetId||null}function Ti(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!GS(t.cardId))return!r.deferredDataLoaded&&HS(t.cardId)?e:be("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||"",s=t.subroute||"";if(n&&!Lt(n)||n&&s&&!$0(n,s))return be("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!sn(t.level)||e.route==="learn"&&(t.view===Tt&&!Wn(t.targetId)||t.view===Xt&&!r.lessons.some(n=>n.id===t.targetId))?be("hash","entity-not-found",e.raw,e.segments,e.locale):e}function TN(){return Kn(location.hash).raw}function IN(){const e=Kn(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function RN(){const e=Kn(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.level||""}function _N(){const e=Kn(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function MN(){const e=Kn(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function PN(){return ts().filter(e=>Gs(e.id)).length}function Gs(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
