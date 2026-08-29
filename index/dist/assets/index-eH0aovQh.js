(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))S(y);new MutationObserver(y=>{for(const I of y)if(I.type==="childList")for(const T of I.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&S(T)}).observe(document,{childList:!0,subtree:!0});function j(y){const I={};return y.integrity&&(I.integrity=y.integrity),y.referrerPolicy&&(I.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?I.credentials="include":y.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function S(y){if(y.ep)return;y.ep=!0;const I=j(y);fetch(y.href,I)}})();const qA="modulepreload",HA=function(b,w){return new URL(b,w).href},Ah={},Ih=function(w,j,S){let y=Promise.resolve();if(j&&j.length>0){const T=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),te=_?.nonce||_?.getAttribute("nonce");y=Promise.allSettled(j.map(de=>{if(de=HA(de,S),de in Ah)return;Ah[de]=!0;const ze=de.endsWith(".css"),us=ze?'[rel="stylesheet"]':"";if(!!S)for(let gn=T.length-1;gn>=0;gn--){const qs=T[gn];if(qs.href===de&&(!ze||qs.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${de}"]${us}`))return;const Tt=document.createElement("link");if(Tt.rel=ze?"stylesheet":qA,ze||(Tt.as="script"),Tt.crossOrigin="",Tt.href=de,te&&Tt.setAttribute("nonce",te),document.head.appendChild(Tt),ze)return new Promise((gn,qs)=>{Tt.addEventListener("load",gn),Tt.addEventListener("error",()=>qs(new Error(`Unable to preload CSS for ${de}`)))})}))}function I(T){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=T,window.dispatchEvent(_),!_.defaultPrevented)throw T}return y.then(T=>{for(const _ of T||[])_.status==="rejected"&&I(_.reason);return w().catch(I)})},VA="ru",WA={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},Od={defaultLocale:VA,locales:WA},XA=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Dd="not-found",Dr=Od.defaultLocale,QA=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),Bh=/^n[1-5]$/i,YA=/^(?:hiragana|katakana)$/i,ZA=/^[A-Za-z0-9_-]+$/,e1=/^[\p{Letter}\p{Number}_-]+$/u,t1=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,n1=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,s1=new Map(Object.entries(Od.locales).map(([b,w])=>[String(w.urlSegment).toLowerCase(),b]));function Ae(b,w,j,S,y={},I=Dr,T={}){return{status:"valid",source:b,route:w,locale:I,params:y,raw:j,segments:S,...T}}function we(b,w,j,S=[],y=Dr,I){return{status:"not-found",source:b,route:Dd,locale:y,params:{},raw:j,segments:S,reason:w,canonicalPath:I}}function zh(b){return!!(b&&XA.includes(b))}function Ad(b){const w=String(b||"").trim().toUpperCase();return Bh.test(w)?w:""}function Uh(b){const w=String(b||"").trim().toLowerCase();return YA.test(w)?w:""}function Jh(b){try{return{ok:!0,value:decodeURIComponent(b)}}catch{return{ok:!1}}}function Bd(b){return b.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function Je(b,w,j=Bd(w)){return we("hash",b,w,j)}function Id(b){return ZA.test(b)}function r1(b){return e1.test(b)}function ds(b){const w=String(b||"").replace(/^#/,"").trim(),j=Jh(w);if(!j.ok)return Je("invalid-parameter",w,[]);const S=j.value.replace(/^\/+|\/+$/g,""),y=Bd(S),I=(y[0]||"home").toLowerCase();if(!y.length)return Ae("hash","home",S,y);if(I==="jlpt"){if(y.length<2||y.length>3)return Je("unknown-route",S,y);const T=Ad(y[1]);if(!T)return Je("invalid-parameter",S,y);const _=y[2]||"";return _&&!Id(_)?Je("invalid-parameter",S,y):Ae("hash","textbooks",S,y,{level:T,subroute:_,legacyRoute:"jlpt"})}if(I==="textbooks"){if(y.length>3)return Je("unknown-route",S,y);if(y.length===1)return Ae("hash","textbooks",S,y);const T=Ad(y[1]),_=Uh(y[1]);if(!T&&!_)return Je("invalid-parameter",S,y);const te=y[2]||"";return te&&!Id(te)?Je("invalid-parameter",S,y):Ae("hash","textbooks",S,y,_?{course:_,subroute:te}:{level:T,subroute:te})}if(I==="jlpt-lesson"){if(y.length!==2)return Je("unknown-route",S,y);const T=Ad(y[1]);return T?Ae("hash","jlpt-lesson",S,y,{level:T}):Je("invalid-parameter",S,y)}if(I==="kanji"){if(y.length!==2)return Je("unknown-route",S,y);const T=y[1];return r1(T)?Ae("hash","kanji",S,y,{cardId:T}):Je("invalid-parameter",S,y)}if(I==="learn"){if(y.length===1)return Ae("hash","learn",S,y,{view:"map"});if(y.length!==3)return Je("unknown-route",S,y);const T=y[1].toLowerCase(),_=y[2];return!["lesson","legacy"].includes(T)||!Id(_)?Je("invalid-parameter",S,y):Ae("hash","learn",S,y,{view:T,targetId:_})}return QA.has(I)?y.length!==1?Je("unknown-route",S,y):Ae("hash",I,S,y):(zh(I),Je("unknown-route",S,y))}function a1(b){return String(b||"/").split(/[?#]/,1)[0]||"/"}function i1(b){const w=a1(b),j=Jh(w);if(!j.ok)return{ok:!1,raw:w};const S=j.value.replace(/\/{2,}/g,"/"),y=S.startsWith("/")?S:`/${S}`,I=y===""?"/":y;return{ok:!0,path:I,segments:Bd(I)}}function o1(b){return s1.get(b.toLowerCase())||null}function Gs(b,w="/"){return`/${Od.locales[b].urlSegment}${w.startsWith("/")?w:`/${w}`}`}function Gh(b){const w=i1(b);if(!w.ok)return we("pathname","invalid-parameter",w.raw,[],null);const{path:j,segments:S}=w,y=j;if(j==="/"||/^\/index\.html$/i.test(j))return Ae("pathname","home",y,S,{},Dr,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(j))return Ae("pathname","home",y,S,{},Dr,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(j))return Ae("pathname","download",y,S,{},Dr,{kind:"download",canonicalPath:"/download/"});if(!S.length)return Ae("pathname","home",y,S,{},Dr,{kind:"app-shell",canonicalPath:"/"});const I=o1(S[0]);if(!I){const _=n1.test(S[0])?"unknown-locale":"unknown-route";return we("pathname",_,y,S,null)}if(S.length===1)return Ae("pathname","home",y,S,{},I,{kind:"localized-home",canonicalPath:Gs(I,"/")});const T=S[1].toLowerCase();if(T==="download"&&S.length===2)return Ae("pathname","download",y,S,{},I,{kind:"download",canonicalPath:Gs(I,"/download/")});if(T==="textbooks"){if(S.length===2)return Ae("pathname","textbooks",y,S,{},I,{kind:"textbooks",canonicalPath:Gs(I,"/textbooks/")});if(S.length===3){const _=S[2].toLowerCase(),te=Uh(_);return te?Ae("pathname","textbooks",y,S,{course:te},I,{kind:"kana-course",canonicalPath:Gs(I,`/textbooks/${te}/`)}):Bh.test(_)?Ae("pathname","textbooks",y,S,{level:_.toUpperCase()},I,{kind:"textbook-level",canonicalPath:Gs(I,`/textbooks/${_}/`)}):we("pathname","invalid-parameter",y,S,I)}return we("pathname","unknown-route",y,S,I)}if(T==="kanji"){if(S.length===2)return Ae("pathname","dictionary",y,S,{},I,{kind:"kanji-hub",canonicalPath:Gs(I,"/kanji/")});if(S.length===3){const _=S[2].toLowerCase();return t1.test(_)?Ae("pathname","kanji",y,S,{slug:_},I,{kind:"kanji-page",canonicalPath:Gs(I,`/kanji/${_}/`)}):we("pathname","invalid-parameter",y,S,I)}return we("pathname","unknown-route",y,S,I)}return we("pathname","unknown-route",y,S,I)}function Th(b){const w=Gh(b);return w.status==="valid"&&(w.kind==="app-shell"||w.kind==="legacy-index")}function l1(b){const w=()=>b(ds(window.location.hash));return window.addEventListener("hashchange",w),()=>window.removeEventListener("hashchange",w)}function c1(){let b=0,w=null;return{begin(j){w?.abort(),w=new AbortController;const S=++b,y=w;return{route:j,token:S,signal:y.signal,isCurrent:()=>b===S&&!y.signal.aborted}},abort(){w?.abort()}}}const Qa=[5,60,12*60,24*60,2*24*60,4*24*60],Td={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function Pe(b){const w=b&&typeof b=="object"?b:{},j=u1(w.state??w.stage),S=p1(w.dueAt??w.nextReview),y=cs(w.reviewCount??w.reviews,0),I=cs(w.correct,0),T=cs(w.wrong,0),_={...w,state:j,dueAt:S,reviewCount:y,intervalDays:cs(w.intervalDays,0),easeFactor:cs(w.easeFactor,2.5),srsStep:cs(w.srsStep,j==="New"?-1:0),lapses:cs(w.lapses,0),correct:I,wrong:T,successRate:cs(w.successRate,I+T?Math.round(I/(I+T)*100):0),history:Array.isArray(w.history)?w.history.slice(-120):[]};return delete _.nextReview,delete _.reviews,delete _.stage,delete _.lastReview,_}function ye(b,w,j=w,S=new Date){const y=Pe(b),I=d1(y,w),T={...y,history:[...y.history]};let _=y.srsStep,te=y.easeFactor;I==="again"?(_=0,te=Math.max(1.3,te-.2),T.state="Learning",T.wrong+=1,y.state!=="New"&&(T.lapses+=1)):I==="hard"?(_=Math.max(1,_),te=Math.max(1.3,te-.15),T.correct+=1):I==="easy"?(_=_<0?2:_+2,te=Math.min(3.2,te+.15),T.correct+=1):(_=_<0?0:_+1,T.correct+=1);const de=g1(_)/1440;return I!=="again"&&(T.state=de<1?"Learning":"Review"),T.correct>=8&&de>=30&&(T.state="Mastered"),T.srsStep=_,T.easeFactor=Rh(te,2),T.intervalDays=Rh(de,6),T.dueAt=new Date(S.getTime()+de*864e5).toISOString(),T.reviewCount+=1,T.successRate=Math.round(T.correct/Math.max(T.correct+T.wrong,1)*100),T.lastReviewedAt=S.toISOString(),T.lastRating=Td[j]||Td[I],T.lastDecision=Td[I],T.history=[...T.history,{at:S.toISOString(),rating:T.lastRating,decision:T.lastDecision,from:y.state,to:T.state,intervalDays:de,srsStep:_}].slice(-120),T}function Rd(b,w=Date.now()){const j=new Map;for(const I of b){if(!I.cardId||I.state==="New")continue;const T=I.dueAt?Date.parse(I.dueAt):Number.NaN;Number.isFinite(T)&&T<=w&&!j.has(I.cardId)&&j.set(I.cardId,{...I})}const S=Object.freeze([...j.values()].sort((I,T)=>Date.parse(I.dueAt||"")-Date.parse(T.dueAt||""))),y=new Set;return{initial:S,complete(I){y.add(I)},get remaining(){return S.filter(I=>!y.has(I.cardId))},get remainingCount(){return S.length-y.size}}}function d1(b,w){return w==="again"||w==="forgot"?"again":w!=="remember"?w:b.state==="New"?"good":b.state==="Learning"?b.successRate>=70||b.correct>=2?"good":"hard":b.successRate>=88&&b.correct>=5&&b.lapses<=1?"easy":b.successRate<70||b.lapses>Math.max(1,Math.floor(b.correct/3))?"hard":"good"}function u1(b){const w=String(b||"new").toLowerCase();return w.includes("master")?"Mastered":w.includes("learn")?"Learning":w.includes("review")?"Review":"New"}function p1(b){return typeof b!="string"||!Number.isFinite(Date.parse(b))?null:new Date(b).toISOString()}function cs(b,w){const j=Number(b);return Number.isFinite(j)&&j>=0?j:w}function Rh(b,w){const j=10**w;return Math.round(b*j)/j}function g1(b){return b<Qa.length?Qa[Math.max(0,b)]:Qa[Qa.length-1]*2**(b-(Qa.length-1))}const qh="flashKanji.progress.v2",m1="flashKanji.progress.v1";function f1(b=localStorage){const w=b.getItem(qh)||b.getItem(m1);if(!w)return null;try{const j=JSON.parse(w);if(!j||typeof j!="object")return null;const S=j;return S.progress&&typeof S.progress=="object"?S.progress:S}catch(j){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",j),null}}function h1(b){return!b||typeof b!="object"?{}:Object.fromEntries(Object.entries(b).map(([w,j])=>[w,Pe(j)]))}function v1(b,w=localStorage){try{return w.setItem(qh,JSON.stringify(b)),!0}catch(j){return console.warn("Flash Kanji could not save LocalStorage progress.",j),!1}}const w1=/[\/／,、;；\s]+/u,b1=/[\u30a1-\u30f6]/g,k1=/[()[\]{}.\-‐-―]/gu;function y1(b){return String(b||"").normalize("NFKC").replace(b1,w=>String.fromCharCode(w.charCodeAt(0)-96))}function Hh(b){return(Array.isArray(b)?b.join(" / "):String(b||"")).split(w1).map(j=>y1(j).replace(k1,"").trim()).filter(Boolean)}function $1(b){if(!b)return[];const w=[...Ph("onyomi","On",b.onyomi),...Ph("kunyomi","Kun",b.kunyomi)],j=new Set,S=w.filter(T=>{const _=T.kana;return!_||j.has(_)?!1:(j.add(_),!0)});if(S.length)return S;const y=Hh(b.hiragana)[0];if(y)return[{kind:"hiragana",kana:y,label:"Kana"}];const I=String(b.kanji||"").trim();return I?[{kind:"kanji",kana:I,label:"Kanji"}]:[]}function j1(b,w=-1,j=""){const S=j&&j!=="cycle"?b.filter(I=>I.kind===j):b;if(!S.length)return{item:null,cursor:-1};const y=(Number(w)+1)%S.length;return{item:S[y],cursor:y}}function _h(b,w={}){const j=String(b||"").trim(),S=typeof window<"u"?window:void 0,y=w.synth||S?.speechSynthesis,I=w.Utterance||S?.SpeechSynthesisUtterance;if(!j||!y||!I)return!1;y.cancel();const T=new I(j);T.lang="ja-JP",T.rate=w.rate??.92,T.voice=S1(y),T.onstart=()=>w.onStart?.(),T.onend=()=>w.onEnd?.(),T.onerror=_=>w.onError?.(_);try{return y.speak(T),!0}catch(_){return w.onError?.(_),!1}}function Ph(b,w,j){return Hh(j).map(S=>({kind:b,kana:S,label:w}))}function S1(b){const w=typeof b.getVoices=="function"?b.getVoices():[];return w.find(j=>/^ja[-_]?JP$/iu.test(j.lang))||w.find(j=>/^ja/iu.test(j.lang))||null}const Vh=["hiragana","katakana"];function ve(b){return Vh.includes(String(b||"").toLowerCase())}function Fd(b){return String(b??"").normalize("NFKC").trim().replace(/\s+/gu," ").toLowerCase()}function C1(b,w){const j=Fd(b);return j?(Array.isArray(w)?w:[]).some(y=>Fd(y)===j):!1}function x1(){return{schema_version:1,content_version:"2026-08-kana-v1",settings:{showRomaji:!0},courses:{}}}function _d(b){const w=x1();if(!b||typeof b!="object")return w;const j=b,S=j.settings&&typeof j.settings=="object"?j.settings:{},y=j.courses&&typeof j.courses=="object"?j.courses:{},I={};for(const T of Vh){const _=y[T]&&typeof y[T]=="object"?y[T]:{},te=_.review&&typeof _.review=="object"?_.review:{};I[T]={currentRoute:typeof _.currentRoute=="string"?_.currentRoute:"",lessons:ni(_.lessons,I1),practices:ni(_.practices,T1),finalTest:A1(_.finalTest),review:Object.fromEntries(Object.entries(te).map(([de,ze])=>[de,Pe(ze)])),writing:_.writing&&typeof _.writing=="object"?{..._.writing}:{},updatedAt:typeof _.updatedAt=="string"?_.updatedAt:null}}return{...w,...j,schema_version:1,content_version:"2026-08-kana-v1",settings:{...w.settings,showRomaji:typeof S.showRomaji=="boolean"?S.showRomaji:w.settings.showRomaji},courses:I}}function N1(b,w){var j;return(j=b.courses)[w]||(j[w]={currentRoute:"",lessons:{},practices:{},finalTest:Wh(),review:{},writing:{},updatedAt:null}),b.courses[w]}function Wh(){return{sections:{},completed:!1,passed:!1,latestScore:0,bestScore:0,score:0,total:0,updatedAt:null}}function L1(b,w,j=new Date){const S={},y={};let I=0;const T=b.items.length;for(const _ of b.items){const te=String(w[_.number]??"");S[_.number]=te;const de=C1(te,_.accepted_answers);y[_.number]=de,de&&(I+=1)}return{answers:S,correct:y,score:I,total:T,completed:T>0,passed:T>0&&I/T>=.8,updatedAt:j.toISOString()}}function Pd(b,w){const j=b.map(_=>w[_.id]).filter(Boolean),S=b.reduce((_,te)=>_+te.items.length,0),y=j.reduce((_,te)=>_+Number(te.score||0),0),I=j.reduce((_,te)=>_+Number(te.total||0),0),T=j.reduce((_,te)=>_+Math.max(Number(te.score||0),0),0);return{latestScore:y,bestScore:T,completed:S>0&&I>=S,passed:S>0&&y/S>=.8}}function Ed(b,w,j=new Date){return ye(b,w,w,j)}function A1(b){const w=b&&typeof b=="object"?b:{},j=Uo(w),S=ni(w.sections,Uo);return{...Wh(),sections:S,completed:!!(w.completed||j.completed),passed:!!(w.passed||j.passed),latestScore:Number(w.latestScore||j.score||0),bestScore:Number(w.bestScore||j.score||0),score:Number(w.score||w.latestScore||j.score||0),total:Number(w.total||j.total||0),updatedAt:typeof w.updatedAt=="string"?w.updatedAt:j.updatedAt}}function Uo(b){const w=b&&typeof b=="object"?b:{};return{answers:w.answers&&typeof w.answers=="object"?{...w.answers}:{},correct:w.correct&&typeof w.correct=="object"?{...w.correct}:{},score:Number(w.score||0),total:Number(w.total||0),completed:!!w.completed,passed:!!w.passed,updatedAt:typeof w.updatedAt=="string"?w.updatedAt:null}}function I1(b){const w=b&&typeof b=="object"?b:{};return{exercises:ni(w.exercises,Uo),completed:!!w.completed,passed:!!w.passed,latestScore:Number(w.latestScore||0),bestScore:Number(w.bestScore||0),updatedAt:typeof w.updatedAt=="string"?w.updatedAt:null}}function T1(b){const w=b&&typeof b=="object"?b:{};return{exercises:ni(w.exercises,Uo),completed:!!w.completed,passed:!!w.passed,latestScore:Number(w.latestScore||0),bestScore:Number(w.bestScore||0),updatedAt:typeof w.updatedAt=="string"?w.updatedAt:null}}function ni(b,w){return!b||typeof b!="object"?{}:Object.fromEntries(Object.entries(b).map(([j,S])=>[j,w(S)]))}const Xh=109492033,R1=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],_1={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},P1={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},E1=/^[\p{Letter}\p{Number}_-]{1,96}$/u,M1=/^[a-z][a-z0-9_]{1,64}$/,K1=/^[a-z][a-z0-9_-]{0,48}$/i,D1=/^N[1-5]$/i,Eh=new Set;let ei="";function Qh(b,w={}){if(!b||b.status==="not-found")return"/app/not-found";const j=b.params||{},S=String(b.route||w.route||"home");if(S==="learn"){const y=Vt(j.view||w.activeLearnView||"map").toLowerCase(),I=Vt(j.targetId||w.activeLearnNodeId||w.activeLearnLegacyLessonId);return y==="lesson"&&I?`/app/learn/lesson/${I}`:y==="legacy"&&I?`/app/learn/legacy/${I}`:"/app/learn"}if(S==="textbooks"){const y=si(j.level||w.activeTextbookLevel),I=Vt(j.subroute||w.activeTextbookSubroute);return y?I?`/app/textbooks/${y}/${I}`:`/app/textbooks/${y}`:"/app/textbooks"}if(S==="kanji"){const y=Vt(j.cardId||w.kanjiPageId||j.slug);return y?`/app/kanji/${y}`:"/app/kanji"}if(S==="jlpt-lesson"){const y=si(j.level||w.activeJlptLesson);return y?`/app/jlpt-lesson/${y}`:"/app/jlpt-lesson"}return _1[S]||"/app/not-found"}function Yh(b,w={}){const j=U1(w),S=P1[j];if(!b||b.status==="not-found")return S["not-found"];const y=b.params||{},I=String(b.route||w.route||"home");if(I==="learn"){const T=Vt(y.view||w.activeLearnView||"map").toLowerCase(),_=Vt(y.targetId||w.activeLearnNodeId||w.activeLearnLegacyLessonId);return T==="lesson"&&_?j==="ru"?`Flash Kanji — Урок маршрута ${_}`:`Flash Kanji — Path lesson ${_}`:T==="legacy"&&_?j==="ru"?`Flash Kanji — Урок ${_}`:`Flash Kanji — Lesson ${_}`:S.learn}if(I==="textbooks"){const T=si(y.level||w.activeTextbookLevel).toUpperCase(),_=Vt(y.subroute||w.activeTextbookSubroute);return T?_?["final","final-test"].includes(_)?j==="ru"?`Flash Kanji — JLPT ${T} · Финальный тест`:`Flash Kanji — JLPT ${T} · Final test`:j==="ru"?`Flash Kanji — JLPT ${T} · Урок ${Mh(_)}`:`Flash Kanji — JLPT ${T} · Lesson ${Mh(_)}`:j==="ru"?`Flash Kanji — Учебник JLPT ${T}`:`Flash Kanji — JLPT ${T} textbook`:j==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(I==="kanji"){const T=Vt(y.cardId||w.kanjiPageId||y.slug),_=G1(w,T)||T;return j==="ru"?`Flash Kanji — Кандзи ${_}`:`Flash Kanji — Kanji ${_}`}if(I==="jlpt-lesson"){const T=si(y.level||w.activeJlptLesson).toUpperCase();return T?j==="ru"?`Flash Kanji — JLPT ${T}`:`Flash Kanji — JLPT ${T}`:S.learn}return S[I]||S["not-found"]}function F1(b,w={}){const j=Qh(b,w),S=Yh(b,w);return ei=j,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=j),pn("prime",{virtualPath:j,title:S}),{sent:!1,virtualPath:j,title:S,reason:"duplicate"}}function O1(b,w={}){const j=Qh(b,w),S=Yh(b,w);if(j===ei)return pn("skip-pageview-duplicate",{virtualPath:j,title:S,previousVirtualPath:ei}),{sent:!1,virtualPath:j,title:S,reason:"duplicate"};const y=ei||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:j,title:S,referer:y,reason:"no-window"}:typeof window.ym!="function"?(pn("skip-pageview-missing-ym",{virtualPath:j,title:S,previousVirtualPath:y}),{sent:!1,virtualPath:j,title:S,referer:y,reason:"missing-ym"}):(window.ym(Xh,"hit",j,{title:S,...y?{referer:y}:{}}),ei=j,pn("pageview",{virtualPath:j,title:S,previousVirtualPath:y}),{sent:!0,virtualPath:j,title:S,referer:y})}catch(I){return pn("pageview-error",{virtualPath:j,title:S,previousVirtualPath:y,error:I instanceof Error?I.message:String(I)}),{sent:!1,virtualPath:j,title:S,referer:y,reason:"error"}}}function B1(b,w={},j={}){const S=z1(b);if(!S)return pn("skip-goal-invalid",{goal:b}),!1;const y=j.dedupeKey?`${S}:${j.dedupeKey}`:"";if(y&&Eh.has(y))return pn("skip-goal-duplicate",{goal:S,params:Bo(w),dedupeKey:y}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return pn("skip-goal-missing-ym",{goal:S,params:Bo(w)}),!1;const I=Bo(w);return window.ym(Xh,"reachGoal",S,I),y&&Eh.add(y),pn("goal",{goal:S,params:I}),!0}catch(I){return pn("goal-error",{goal:S,params:Bo(w),error:I instanceof Error?I.message:String(I)}),!1}}function z1(b){const w=String(b||"").trim().toLowerCase();return M1.test(w)&&(R1.includes(w)||/^social_[a-z0-9_]+_opened$/.test(w))?w:""}function Bo(b){const w={},j=Vt(b.route).toLowerCase(),S=si(b.level).toUpperCase(),y=Vt(b.lessonId),I=Vt(b.cardId),T=J1(b.source);return j&&(w.route=j),S&&(w.level=S),y&&(w.lessonId=y),I&&(w.cardId=I),T&&(w.source=T),w}function U1(b){return String(b.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function si(b){const w=String(b||"").trim().toUpperCase();return D1.test(w)?w.toLowerCase():""}function Vt(b){const w=String(b||"").trim();return E1.test(w)?encodeURIComponent(w):""}function J1(b){const w=String(b||"").trim();return K1.test(w)?w.toLowerCase():""}function Mh(b){const w=b.match(/-(\d+)$/);return w?.[1]?String(Number(w[1])):b}function G1(b,w){if(!w||!Array.isArray(b.cards))return"";const j=q1(w),S=b.cards.find(y=>String(y.id||"")===j||String(y.slug||"")===j);return String(S?.kanji||"").trim()}function q1(b){try{return decodeURIComponent(b)}catch{return b}}function pn(b,w){H1()&&console.debug(`[Flash Kanji Metrika] ${b}`,w)}function H1(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const w=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(w).get("debugMetrika")==="1"}catch{return!1}}const Jo="flashKanji.hasVisited",Go="flashKanji.changelog.lastSeenVersion",Zh=new Set;function V1(b){if(!b||typeof b!="object")return null;const w=b,j=String(w.currentVersion||"").trim();if(!j)return null;const S=Array.isArray(w.entries)?w.entries.map(Q1).filter(y=>!!y):[];return S.length?{currentVersion:j,entries:S}:null}function W1(b,w,j,S={}){const y=b?.currentVersion||"",I=b?.entries.find(te=>te.version===y)||b?.entries[0]||null;return!b||!y||!I||Zh.has(y)?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:Kh(j,Go)===y?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(S.hadPriorVisit||Kh(j,Jo)==="true"||S.useProgressSignals!==!1&&X1(w))?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:y,shouldShow:!0,shouldMarkHandled:!1,entry:I}}function Md(b,w){const j=String(b||"").trim();j&&(Zh.add(j),Dh(w,Jo,"true"),Dh(w,Go,j))}function X1(b){if(!b||typeof b!="object")return!1;const w=b;return!!(Za(w.appOpens)>0||Ya(w.lessonCompletions)>0||Ya(w.cards)>0||Ya(w.seenKanji)>0||Ya(w.daily)>0||Ya(w.favorites)>0||eI(w.transactions)>0||Za(w.totalMoonFragmentsEarned)>0||Za(w.secrets?.evaClicks)>0||w.secrets?.nightVisit||Za(w.visits?.streak)>0||Za(w.visits?.bestStreak)>0)}function Q1(b){if(!b||typeof b!="object")return null;const w=b,j=String(w.version||"").trim();return j?{version:j,date:String(w.date||"").trim(),title:Y1(w.title),items:Z1(w.items)}:null}function Y1(b){const w=b&&typeof b=="object"?b:{};return{ru:String(w.ru||w.en||"").trim(),en:String(w.en||w.ru||"").trim()}}function Z1(b){const w=b&&typeof b=="object"?b:{},j=Array.isArray(w.ru)?w.ru.map(y=>String(y||"").trim()).filter(Boolean):[],S=Array.isArray(w.en)?w.en.map(y=>String(y||"").trim()).filter(Boolean):[];return{ru:j.length?j:S,en:S.length?S:j}}function Kh(b,w){try{return b?.getItem(w)||""}catch{return""}}function Dh(b,w,j){try{b?.setItem(w,j)}catch{}}function Ya(b){return b&&typeof b=="object"&&!Array.isArray(b)?Object.keys(b).length:0}function eI(b){return Array.isArray(b)?b.length:0}function Za(b){const w=Number(b||0);return Number.isFinite(w)?w:0}const tI="bg_study_hub";function ri(b,w=0){const j=Number(b),S=Number(w),y=Number.isFinite(j)?j:Number.isFinite(S)?S:0;return Math.max(0,Math.floor(y))}function it(b){const w=[],j=S=>{const y=String(S??"").trim();y&&w.push(y)};return Array.isArray(b)||b instanceof Set?b.forEach(j):typeof b=="string"?b.split(",").forEach(j):b&&typeof b=="object"&&Object.entries(b).forEach(([S,y])=>{y!==!1&&y!==null&&y!==void 0&&j(S)}),[...new Set(w)]}function ti(b){return String(b??"").trim()}function nI(b){return(Array.isArray(b)?b:[]).filter(w=>String(w?.type||"")==="background"&&ti(w?.id))}function Fh(b){return!!b?.defaultOwned||ri(b?.price)===0}function Oh(b){const w=ti(b.fallbackId)||tI,j=nI(b.catalogItems),S=new Map(j.map(T=>[ti(T.id),T])),y=new Set(it(b.owned));j.forEach(T=>{const _=ti(T.id);Fh(T)&&y.add(_)});const I=T=>{const _=ti(T);if(!_)return null;const te=S.get(_);return te&&(y.has(_)||Fh(te))?_:null};return I(b.customizationSelected)||I(b.progressEquipped)||I(b.progressSelected)||I(w)||w}function Kd(b){const w=["background","outfit","theme","decoration","frame","effect"],j=b&&typeof b=="object"?b:{};return Object.fromEntries(w.map(S=>{const y=j[S],I=y==null?null:String(y).trim();return[S,I||null]}))}function sI(b){const w=String(b.itemId??"").trim(),j=ri(b.price),S=ri(b.balance),y=it(b.owned);return w?y.includes(w)?{status:"already-owned",balance:S,owned:y,itemId:w,price:j}:S<j?{status:"insufficient-funds",balance:S,owned:y,itemId:w,price:j}:{status:"purchased",balance:S-j,owned:[...y,w],itemId:w,price:j}:{status:"invalid-item",balance:S,owned:y,itemId:w,price:j}}function rI(b){const w=String(b||"").toLowerCase();return w==="test"||w==="done"?w:"study"}function aI(b){const w=new Set,j=[];for(const S of Array.isArray(b)?b:[]){const y=String(S?.id??"").trim();!y||w.has(y)||(w.add(y),j.push(y))}return j}function zo(b){const w=aI(b.cards),j=b.session?.answers&&typeof b.session.answers=="object"?b.session.answers:{},S=w.filter(te=>!!j[te]),y=w.length,I=S.length;if(!y)return{status:"incomplete",phase:"study",total:0,expectedCardIds:w,answeredExpectedCardIds:S,answeredCount:0,currentIndex:0,currentCardId:null};if(b.confirmedCompleted&&b.session?.completedAt)return{status:"done",phase:"done",total:y,expectedCardIds:w,answeredExpectedCardIds:w,answeredCount:y,currentIndex:y,currentCardId:null};const T=w.findIndex(te=>!j[te]);if(T<0&&I===y)return{status:"test-ready",phase:"test",total:y,expectedCardIds:w,answeredExpectedCardIds:S,answeredCount:I,currentIndex:y,currentCardId:null};const _=T>=0?T:Math.min(Math.max(Number(b.session?.currentIndex??0)||0,0),y-1);return{status:"study",phase:(rI(b.session?.phase)==="done","study"),total:y,expectedCardIds:w,answeredExpectedCardIds:S,answeredCount:I,currentIndex:_,currentCardId:w[_]||null}}function iI(b){const w=new Set,j=[];for(const S of Array.isArray(b)?b:[]){const y=String(S?.id??"").trim();!y||w.has(y)||(w.add(y),j.push(y))}return j}function oI(b,w,j){const S=w[b];return S&&typeof S=="object"&&S.correct?!0:!!j[b]}function lI(b){const w=zo({cards:b.cards,session:b.session,confirmedCompleted:b.confirmedCompleted}),j=Array.isArray(b.cards)?b.cards:[],S=w.status==="done"||w.status==="test-ready",y=w.total>0&&j.length>=w.total&&j.every(Nn=>!!b.isCardStudied?.(Nn)),I=S||y,T=iI(b.exercises),_=b.exerciseResults&&typeof b.exerciseResults=="object"?b.exerciseResults:{},te=b.completedExercises&&typeof b.completedExercises=="object"?b.completedExercises:{},de=T.filter(Nn=>oI(Nn,_,te)).length,ze=T.length>0&&de===T.length,us=!!b.confirmedCompleted||I&&ze;return{study:w,cardStudyComplete:I,exerciseComplete:ze,correctExerciseCount:de,totalExercises:T.length,complete:us,canMigrateCompletion:!b.confirmedCompleted&&I&&ze}}(()=>{const b="flashKanji.pwaInstallPrompt.v2",w="flashKanji.pwaInstallPrompt.v1",j="flashKanji.notificationPrompt.v1",S="flashkanji_customization",y="flashkanji_eva_state_v2",T="local-1788039771402",te=`flashKanji.hiddenMascotSpeeches:${T}`,de="moonfarm",ze="flashKanji.appBuild.v1",us="flashKanji.pwaCacheReset.v1",Nn="flashKanji.bootRecovery.v1",Tt={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},gn="aleksey.lebedev606@gmail.com",qs="Flash Kanji bug report",ev="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",tv="downloads/flash-kanji-android.apk",nv="assets/download/android-app-screenshot.png",ai="flashKanji.forcePwaCacheReset.v1",B={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",kanaCatalog:"data/kana/index.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},sv={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},rv={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},Re=["N5","N4","N3","N2","N1"],$e=new Set,av={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},zd={xp:12,coins:2},Ud="flashKanjiOnboardingCompleted.v3",Jd="flashKanjiOnboardingCompleted",Gd="flashKanjiOnboardingAudience.v1",iv=850,qd=450,ov=420,Fr=72,lv=96,Hd=1,Vd="N5",mn="map",Wt="lesson",fn="legacy",_e="intro-kanji",Hs="review-due",Vs="n5-checkpoint",cv=[_e,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",Vs],dv={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},uv=new Set(["lesson-1","lesson-2","bulk-n5-01"]),Wd=7e3,qo=8e3,pv=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),oe=zs(),a={route:oe.route,routeMatch:oe,routeNotFound:oe.status==="not-found"?oe:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptCourseDataStatus:{N5:"idle",N4:"idle",N3:"idle",N2:"idle",N1:"idle"},jlptCourseDataErrors:{N5:null,N4:null,N3:null,N2:null,N1:null},jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},kanaCatalog:{schema_version:1,content_version:"",courses:[]},kanaCourses:{},kanaCourseLoading:{},kanaCourseErrors:{},kanaExerciseDrafts:{},kanaLessonCharacterIndex:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:oe.status==="valid"&&oe.params.level||null,activeTextbookLevel:oe.status==="valid"&&oe.route==="textbooks"&&(oe.params.level||oe.params.course)||null,activeTextbookSubroute:oe.status==="valid"&&oe.route==="textbooks"&&oe.params.subroute||null,activeLearnView:oe.status==="valid"&&oe.route==="learn"&&oe.params.view||mn,activeLearnNodeId:oe.status==="valid"&&oe.route==="learn"&&oe.params.view===Wt&&oe.params.targetId||null,activeLearnLegacyLessonId:oe.status==="valid"&&oe.route==="learn"&&oe.params.view===fn&&oe.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:oe.status==="valid"&&oe.route==="kanji"&&oe.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:Fr,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Mo(),notificationPrompt:Va(),notificationPromptVisible:!1,changelog:null,changelogModal:null,bootAncillaryLoaded:!1,deferredDataLoaded:!1,deferredDataLoading:!1};a.route==="textbooks"&&!a.routeNotFound&&yt(xh(dA(),uA()));const gv=c1();let ii=null,Xt=null,oi=0,Rt="idle",Xd="",Qd=new Map,Or=0,Yd=0,Ws=0,ps=0,Ho=!1,gs=0,Vo=!1,ms=0,li=!1,Ln=0,Br=null,Zd=!1,ci=0,eu=!1,Xe=!1,zr=null,di=null,ui=null,pi=null,gi=null,mi=null,fs=null,tu=0,fi=!1,Wo={scrollX:0,scrollY:0,at:Date.now()},Xo={scrollX:0,scrollY:0,at:Date.now()},hi=null,nu=0,vi=0,su=!1,hn=null,Qo=0;const Yo=new Set;let Xs=0,Ur=0,Zo=null,je=null,ot=null,Ee=null,Qt=-1,_t=!1,Ie="step",Yt=null,ru=null,mv=null,wi=0,Qs=0,fv=null,Jr=null,Gr=0,au=0,el=null,tl=null,hs=null;const bi=new Map;let qr=null;const ki=new Map;let nl=0,sl=0,rl=Math.floor(Date.now()/6e4),iu=0,yi="",al=[];const il=new Map,vs=new Map,ol=new Set,ll=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Z={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Me=(e,t=document)=>t.querySelector(e),cl=(e,t=document)=>Array.from(t.querySelectorAll(e)),An=Me("#app"),hv=document.title||"Flash Kanji",ou=Me("#progressImport"),re=Object.freeze({TOP:"top",PRESERVE:"preserve"});document.addEventListener("pointerdown",pl,{passive:!0,capture:!0}),document.addEventListener("click",pl,{passive:!0,capture:!0}),document.addEventListener("keydown",pl,{passive:!0,capture:!0}),document.addEventListener("click",Zw),document.addEventListener("pointerdown",eb),document.addEventListener("input",xp),document.addEventListener("change",xp),document.addEventListener("keydown",rb),window.flashKanjiFarmMoon=(e=5e3)=>Np(e),window.startFlashKanjiOnboarding=Hl,ou.addEventListener("change",vL),window.addEventListener("beforeinstallprompt",GL),window.addEventListener("appinstalled",Sd),window.addEventListener("scroll",vw,{passive:!0}),window.addEventListener("scroll",Wl,{passive:!0}),window.addEventListener("resize",Wl),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||sg(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||Do("usage"),!document.hidden&&a.route==="eva-room"&&sa("return")&&(A(),P()),document.hidden&&Rl()}),window.addEventListener("pagehide",Rl),window.addEventListener("beforeunload",Rl),l1(()=>{const e=Mr(zs()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,r=t==="textbooks"&&(n.level||n.course)||null,o=t==="textbooks"&&n.subroute||null,c=t==="jlpt-lesson"&&n.level||null,l=t==="learn"&&n.view||mn,d=t==="learn"&&l===Wt&&n.targetId||null,u=t==="learn"&&l===fn&&n.targetId||null,f=Nh(a.routeNotFound),h=e.status==="not-found"?Nh(e):"";if(t!==a.route||t==="kanji"&&s!==a.kanjiPageId||t==="textbooks"&&r!==a.activeTextbookLevel||t==="textbooks"&&o!==a.activeTextbookSubroute||t==="jlpt-lesson"&&c!==a.activeJlptLesson||t==="learn"&&l!==a.activeLearnView||t==="learn"&&d!==a.activeLearnNodeId||t==="learn"&&u!==a.activeLearnLegacyLessonId||f!==h){const g=a.route;a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,a.route!=="home"&&Gp(),g!==t&&(g==="review"||t==="review")&&(a.reviewSession=null),a.kanjiPageId=t==="kanji"?s:null,a.activeTextbookLevel=t==="textbooks"?r:null,a.activeTextbookSubroute=t==="textbooks"?o:null,a.activeJlptLesson=t==="jlpt-lesson"?c:n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"?l:mn,a.activeLearnNodeId=t==="learn"?d:null,a.activeLearnLegacyLessonId=t==="learn"?u:null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,t!=="eva-room"&&(a.evaRoomShopOpen=!1),wt(),Ns(),He(),ws(t)&&ji({route:t,delay:gl(t)}),t==="eva-room"&&be("room_opened")}}),vv();async function vv(){if(!await Mv()&&!await Ev()){lu(!0),An.innerHTML.trim()?An.setAttribute("aria-busy","true"):An.innerHTML=vh(),a.progress=ow(),Rr(),fd(),ML(),hd(),un();try{const[e,t,n]=await Promise.all([gu({initialOnly:!0}),Ge(B.i18n),Ge(B.rewards,yv)]);a.lessons=e.lessons,a.cards=e.cards,a.i18n=t,a.rewards=n;const s=Jl(a.progress);Wr(),hb(),bs(),pw(),un(),WL(),Ax(),fb(s),Rx(),Us(Mr(zs())),A(),P(),cu(()=>{dl({hadPriorVisit:s}).catch(r=>console.warn("Boot ancillary data failed to load.",r))},{timeout:1500}),jv(),ji({route:a.route,delay:gl(a.route)}),UL(),ql(),Ak(),wk(),yh(),xd();try{sessionStorage.removeItem(Nn)}catch(r){console.warn("Could not clear boot recovery marker after successful startup.",r)}}catch(e){console.error(e),await zL(e)||(An.innerHTML=FL(e))}finally{lu(!1)}}}async function dl({hadPriorVisit:e=!1}={}){if(!a.bootAncillaryLoaded)return Br||(Br=(async()=>{const[t,n,s,r,o,c,l]=await Promise.all([Ge(B.dialogues),Ge(B.achievements,()=>({achievements:[],categories:[]})),Ge(B.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Ge(B.jlptLessons,()=>({items:[]})),Ge(B.kanaCatalog,()=>({schema_version:1,content_version:"",courses:[]})),Ge(B.customizationShop,()=>({version:1,currency:"Moon Fragments",categories:[],items:[]})),Ge(B.changelog,()=>null)]),d=Hu(n,a.rewards?.achievements||[]);a.dialogues=t,a.achievements=d.items,a.achievementCategories=d.categories,a.jlptCatalog=ew(s),a.jlptLessons=Zv(r),a.kanaCatalog=tw(o),a.customizationCatalog=Hv(c),a.bootAncillaryLoaded=!0,bs(),_l(),un(),a.rewards&&(a.rewards.achievements=a.achievements);const u=wv(l,e);Us(Mr(zs())),P(),u&&bv()})().finally(()=>{Br=null}),Br)}function lu(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),An&&An.setAttribute("aria-busy",e?"true":"false")}function wv(e,t=!1){Zd=!!t,a.changelogModal=null;const n=V1(e);if(!n)return!1;a.changelog=n;const s=W1(n,a.progress,$i(),{hadPriorVisit:Zd,useProgressSignals:!1});return s.shouldMarkHandled?(Md(s.currentVersion,$i()),!1):!s.shouldShow||!s.entry?!1:a.route!=="home"?(Md(s.currentVersion,$i()),!1):(a.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function $i(){try{return window.localStorage}catch{return null}}function bv(){ci&&window.clearTimeout(ci),ci=window.setTimeout(()=>{ci=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function ul(){const e=a.changelogModal?.version||a.changelog?.currentVersion||"";Md(e,$i()),a.changelogModal=null,P()}function kv(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const r=document.createElement("script");r.id=t,r.src=e,r.defer=!0,r.onload=()=>n(),r.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(r)})}function cu(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function yv(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function $v(){return window.Chart?Promise.resolve():(ru||(ru=kv("vendor/chart.umd.min.js","flash-kanji-chartjs")),ru)}function jv(){window.setTimeout(()=>{mv||(mv=Ih(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{Rr(),$L()}).catch(e=>console.warn("UX sound module failed to load.",e))),fv||(fv=Ih(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function pl(){Ln=Date.now()}async function Sv({minQuietMs:e=450,maxDelayMs:t=1200}={}){if(!Ln)return;const n=Date.now();for(;Date.now()-Ln<e&&Date.now()-n<t;){const s=Math.min(160,Math.max(16,e-(Date.now()-Ln)));await new Promise(r=>window.setTimeout(r,s))}await du()}async function Cv(e){const t=Date.now();for(;Date.now()-t<3200;){const n=String(a.route||""),s=e===n||ws(n),r=Ln&&Date.now()-Ln<650;if(s&&!r)break;await new Promise(o=>window.setTimeout(o,s?80:220))}await du()}function du(){return document.visibilityState==="hidden"?new Promise(e=>window.setTimeout(e,32)):new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)))}function ws(e=a.route){return pv.has(e)}function gl(e=a.route){return ws(e)?Ln&&Date.now()-Ln<1200?650:0:Wd}function ji({route:e=a.route,delay:t=Wd,force:n=!1}={}){if(a.deferredDataLoaded||a.deferredDataLoading||Jr||!n&&!ws(e))return;Gr&&(window.clearTimeout(Gr),Gr=0);const s=++au,r=()=>{s===au&&(!n&&!ws(a.route)||xv({route:e}).catch(o=>console.warn("Deferred app data failed to load.",o)))};Gr=window.setTimeout(()=>{Gr=0,cu(r,{timeout:1800})},Math.max(0,Number(t)||0))}async function xv({renderAfter:e=!0,route:t=a.route}={}){const n=String(t||a.route||"");if(!a.deferredDataLoaded)return Jr||(a.deferredDataLoading=!0,Jr=(async()=>{const[s,r,o]=await Promise.all([gu(),Dv([["kanjiMeta",B.kanjiMeta],["kanjiHints",B.kanjiHints],["kanjiTranslations",B.kanjiTranslations],["kanjiStrokes",B.kanjiStrokes],["kanjiPageSources",B.kanjiPageSources],["lessonTranslations",B.lessonTranslations],["vocabulary",B.vocabulary],["sentences",B.sentences],["jlptPracticeLessons",B.jlptPracticeLessons],["n5Meta",B.n5Meta],["n5Lessons",B.n5Lessons],["n5Kanji",B.n5Kanji],["n5Exercises",B.n5Exercises],["n5FinalTest",B.n5FinalTest],["n4Meta",B.n4Meta],["n4Lessons",B.n4Lessons],["n4Kanji",B.n4Kanji],["n4Grammar",B.n4Grammar],["n4Exercises",B.n4Exercises],["n4Reading",B.n4Reading],["n4Listening",B.n4Listening],["n4FinalTest",B.n4FinalTest],["n3Meta",B.n3Meta],["n3Lessons",B.n3Lessons],["n3Kanji",B.n3Kanji],["n3Grammar",B.n3Grammar],["n3Exercises",B.n3Exercises],["n3Reading",B.n3Reading],["n3Listening",B.n3Listening],["n3FinalTest",B.n3FinalTest],["n2Meta",B.n2Meta],["n2Lessons",B.n2Lessons],["n2Kanji",B.n2Kanji],["n2Grammar",B.n2Grammar],["n2Exercises",B.n2Exercises],["n2Reading",B.n2Reading],["n2Listening",B.n2Listening],["n2FinalTest",B.n2FinalTest],["n1Meta",B.n1Meta],["n1Lessons",B.n1Lessons],["n1Kanji",B.n1Kanji],["n1Grammar",B.n1Grammar],["n1Exercises",B.n1Exercises],["n1Reading",B.n1Reading],["n1Listening",B.n1Listening],["n1FinalTest",B.n1FinalTest],["jlptReadingTranslations",B.jlptReadingTranslations],["n5Reading",B.n5Reading],["monetization",B.monetization]]),Ov(B.jlptReadingMarkdown)]);await Sv(),await Cv(n);const{kanjiMeta:c,kanjiHints:l,kanjiTranslations:d,kanjiStrokes:u,kanjiPageSources:f,lessonTranslations:h,vocabulary:g,sentences:$,jlptPracticeLessons:L,n5Meta:C,n5Lessons:N,n5Kanji:k,n5Exercises:x,n5FinalTest:z,n4Meta:G,n4Lessons:Js,n4Kanji:U,n4Grammar:mA,n4Exercises:fA,n4Reading:hA,n4Listening:vA,n4FinalTest:wA,n3Meta:bA,n3Lessons:kA,n3Kanji:yA,n3Grammar:$A,n3Exercises:jA,n3Reading:SA,n3Listening:CA,n3FinalTest:xA,n2Meta:NA,n2Lessons:LA,n2Kanji:AA,n2Grammar:IA,n2Exercises:TA,n2Reading:RA,n2Listening:_A,n2FinalTest:PA,n1Meta:EA,n1Lessons:MA,n1Kanji:KA,n1Grammar:DA,n1Exercises:FA,n1Reading:OA,n1Listening:BA,n1FinalTest:zA,jlptReadingTranslations:UA,n5Reading:JA,monetization:GA}=r;a.lessons=s.lessons,a.cards=s.cards,a.jlptPracticeLessons=nw(L),a.jlptReadingMarkdown=o||"",a.jlptReadingByLevel=Bv(o||""),a.n5Meta=mu(C),a.n5Textbook=wl(N),a.n5KanjiCatalog=fu(k),hu(),a.n5Exercises=vu(x),a.n5FinalTest=wu(z),a.n5Reading=iw(JA),a.n4Meta=bu(G),a.n4Textbook=ku(Js),a.n4KanjiCatalog=yu(U),a.n4Grammar=ju(mA),a.n4Exercises=Su(fA),a.n4Reading=Ai(hA),a.n4Listening=Ai(vA),a.n4FinalTest=Cu(wA),$u(),a.n3Meta=xu(bA),a.n3Textbook=Nu(kA),a.n3KanjiCatalog=Lu(yA),a.n3Grammar=Iu($A),a.n3Exercises=Tu(jA),a.n3Reading=Ti(SA),a.n3Listening=Ti(CA),a.n3FinalTest=Ru(xA),Au(),a.n2Meta=_u(NA),a.n2Textbook=Pu(LA),a.n2KanjiCatalog=Eu(AA),a.n2Grammar=Ku(IA),a.n2Exercises=Du(TA),a.n2Reading=_i(RA),a.n2Listening=_i(_A),a.n2FinalTest=Fu(PA),Mu(),a.n1Meta=Ou(EA),a.n1Textbook=Bu(MA),a.n1KanjiCatalog=zu(KA),a.n1Grammar=Ju(DA),a.n1Exercises=Gu(FA),a.n1Reading=Ei(OA),a.n1Listening=Ei(BA),a.n1FinalTest=qu(zA),Uu(),Av(),a.kanjiMeta=c.items||{},a.kanjiHints=l.items||{},a.kanjiTranslations=d.items||{},a.kanjiStrokes=qv(u),a.kanjiPageSources=f.items||{},a.lessonTranslations=h.items||{},a.vocabulary=g.items||[],a.sentenceExercises=$.items||[],a.jlptReadingTranslations=Jv(UA),a.monetization=GA,a.deferredDataLoaded=!0,a.deferredDataLoading=!1,a.progress&&(Wr(),A());const Lh=String(a.route||"");(n===Lh||ws(Lh))&&(Us(Mr(zs())),e&&P())})().finally(()=>{a.deferredDataLoading=!1}),Jr)}function Nv(e){const t=F(e),n=t.toLowerCase();if(!t)return[];const s=[["meta",B[`${n}Meta`]],["lessons",B[`${n}Lessons`]],["kanji",B[`${n}Kanji`]],["exercises",B[`${n}Exercises`]]];return t!=="N5"?s.push(["grammar",B[`${n}Grammar`]],["reading",B[`${n}Reading`]],["listening",B[`${n}Listening`]],["finalTest",B[`${n}FinalTest`]]):s.push(["finalTest",B.n5FinalTest]),s.filter(([,r])=>!!r)}function vn(e,t,n=null){const s=F(e);s&&(a.jlptCourseDataStatus[s]=t,a.jlptCourseDataErrors[s]=n||null,s==="N1"&&(tl=n||null))}function Si(e){const t=F(e);if(!t)return"error";if(a.jlptCourseDataStatus[t]!=="ready"&&Ci(t))try{ml(t),vn(t,"ready")}catch(n){vn(t,"incomplete",n)}return a.jlptCourseDataStatus[t]==="ready"&&!Ci(t)&&vn(t,"incomplete",new Error(xi())),a.jlptCourseDataStatus[t]||"idle"}function Ci(e){const t=F(e);if(!t)return!1;const n=kt(t),s=uu(t),r=pu(t);return n.length>0&&s.length>0&&!!r}function uu(e){const t=F(e);return t==="N5"?Ot():t==="N4"?et():t==="N3"?tt():t==="N2"?nt():t==="N1"?xt():[]}function pu(e){const t=F(e);return t==="N5"?a.n5Exercises:t==="N4"?a.n4Exercises:t==="N3"?a.n3Exercises:t==="N2"?a.n2Exercises:t==="N1"?a.n1Exercises:null}function Lv(e,t={}){const n=F(e);n==="N5"&&(a.n5Meta=mu(t.meta),a.n5Textbook=wl(t.lessons),a.n5KanjiCatalog=fu(t.kanji),hu(),a.n5Exercises=vu(t.exercises),t.finalTest&&(a.n5FinalTest=wu(t.finalTest))),n==="N4"&&(a.n4Meta=bu(t.meta),a.n4Textbook=ku(t.lessons),a.n4KanjiCatalog=yu(t.kanji),a.n4Grammar=ju(t.grammar),a.n4Exercises=Su(t.exercises),a.n4Reading=Ai(t.reading),a.n4Listening=Ai(t.listening),a.n4FinalTest=Cu(t.finalTest),$u()),n==="N3"&&(a.n3Meta=xu(t.meta),a.n3Textbook=Nu(t.lessons),a.n3KanjiCatalog=Lu(t.kanji),a.n3Grammar=Iu(t.grammar),a.n3Exercises=Tu(t.exercises),a.n3Reading=Ti(t.reading),a.n3Listening=Ti(t.listening),a.n3FinalTest=Ru(t.finalTest),Au()),n==="N2"&&(a.n2Meta=_u(t.meta),a.n2Textbook=Pu(t.lessons),a.n2KanjiCatalog=Eu(t.kanji),a.n2Grammar=Ku(t.grammar),a.n2Exercises=Du(t.exercises),a.n2Reading=_i(t.reading),a.n2Listening=_i(t.listening),a.n2FinalTest=Fu(t.finalTest),Mu()),n==="N1"&&(a.n1Meta=Ou(t.meta),a.n1Textbook=Bu(t.lessons),a.n1KanjiCatalog=zu(t.kanji),a.n1Grammar=Ju(t.grammar),a.n1Exercises=Gu(t.exercises),a.n1Reading=Ei(t.reading),a.n1Listening=Ei(t.listening),a.n1FinalTest=qu(t.finalTest),Uu())}function xi(){return p()==="ru"?"Не удалось загрузить карточки урока. Проверьте подключение и попробуйте ещё раз.":"Could not load lesson cards. Check your connection and try again."}function ml(e){const t=F(e),n=kt(t),s=uu(t),r=pu(t);if(!t||!n.length||!s.length||!r)throw new Error(xi());if(t!=="N5")return!0;const o=[],c=new Map(a.n5KanjiCatalog.map(u=>[u.kanji,u])),l=new Set;a.n5KanjiCatalog.forEach(u=>{u.id&&l.add(u.id)}),n.length!==10&&o.push(`N5 lessons expected 10, got ${n.length}`),a.n5KanjiCatalog.length!==80&&o.push(`N5 kanji expected 80, got ${a.n5KanjiCatalog.length}`),l.size!==a.n5KanjiCatalog.length&&o.push("N5 card identifiers are not unique.");const d=new Set;if(n.forEach(u=>{d.has(u.id)&&o.push(`Duplicate N5 lesson id: ${u.id}`),d.add(u.id),(u.kanji||[]).length!==8&&o.push(`${u.id} expected 8 kanji, got ${(u.kanji||[]).length}`),(u.kanji||[]).map(g=>c.get(g)).filter(Boolean).length!==(u.kanji||[]).length&&o.push(`${u.id} has unresolved kanji references.`);const h=rn(u);h.length!==(u.kanji||[]).length&&o.push(`${u.id} cards expected ${u.kanji.length}, got ${h.length}`),Ts(u).length||o.push(`${u.id} has no exercises.`)}),o.length)throw new Error(`${xi()} ${o[0]}`);return!0}function Av(){Re.forEach(e=>{try{Ci(e)&&(ml(e),vn(e,"ready"))}catch(t){vn(e,"incomplete",t)}})}function Iv(e){const t=F(e);if(!t||!a.progress)return!1;const n=On(),s=Gt(t);let r=!1;return kt(t).forEach(o=>{const c=Qe(t,o.id),l=n.sessions[c];if(!l)return;const d=zo({cards:Ol(t,o),session:l,confirmedCompleted:!!(s?.completedLessons?.[o.id]||$e.has(`${t.toLowerCase()}:${o.id}`))});(l.phase==="test"||l.phase==="done")&&d.status==="incomplete"&&(l.phase="study",l.currentIndex=0,l.completedAt=null,r=!0),d.status==="study"&&l.currentIndex!==d.currentIndex&&(l.currentIndex=d.currentIndex,r=!0),d.status==="study"&&l.phase!=="study"&&(l.phase="study",r=!0)}),r&&(n.lastUpdatedAt=new Date().toISOString()),r}function Tv(e){const t=F(e);if(!t||!a.progress)return!1;const n=or(t);if(!n)return!1;const s=n.course();if(!i$(t,s))return!1;let r=!1;n.lessons().forEach(c=>{Ig(t,c)&&(r=!0)});const o=n.lessonById(s.currentLessonId);if(o&&kn(t,s,o)){const l=n.lessons().find(d=>!kn(t,s,d))?.id||o.id;s.currentLessonId!==l&&(s.currentLessonId=l,r=!0)}return r}function Rv(){if(!a.progress)return!1;let e=!1;return Re.forEach(t=>{const n=or(t);if(!n||!n.lessons().length)return;const s=n.course();if(!Bn(n.level,s.currentLessonId).some(d=>!!s.completedLessons?.[d]))return;const l=n.lessons().find(d=>!kn(n.level,s,d))?.id||uc(n,{id:s.currentLessonId},s.currentLessonId)||s.currentLessonId;l&&s.currentLessonId!==l&&(s.currentLessonId=l,e=!0)}),e}async function fl(e,{renderAfter:t=!0,force:n=!1}={}){const s=F(e);if(!s)return null;if(!n&&Si(s)==="ready")return kt(s);if(!n&&bi.has(s))return bi.get(s);vn(s,"loading");const r=Fv(Nv(s),s==="N5"?4:3).then(o=>{if(Lv(s,o),ml(s),vn(s,"ready"),a.progress){Wr();const c=Iv(s),l=Tv(s);(c||l)&&A()}return Us(Mr(zs())),t&&P(),kt(s)}).catch(o=>{throw vn(s,"error",o),console.warn(`${s} textbook data failed to load.`,o),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&P(),o}).finally(()=>{bi.delete(s)});return bi.set(s,r),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&P(),r}function _v(e){const t=F(e);t&&(vn(t,"loading"),P(),fl(t,{renderAfter:!0,force:!0}).catch(()=>{}))}async function Pv({renderAfter:e=!0}={}){return el=fl("N1",{renderAfter:e}).finally(()=>{el=null}),el}async function Ev(){try{const e=localStorage.getItem(ze);if(localStorage.setItem(ze,T),!e||e===T)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function Mv(){try{const e=localStorage.getItem(ai),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===T||(localStorage.setItem(ai,"done"),localStorage.setItem("flashKanji.lastForcedBuild",T)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function gu({initialOnly:e=!1}={}){const t=await Ge(B.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Kv(n):n,r=await hl(s,async d=>{try{return{manifestLesson:d,payload:await Ge(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(r.filter(Boolean).map(d=>[d.manifestLesson.id,d])),c=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:f}=u;return{...d,...f.lesson,file:d.file,items:Array.isArray(f.items)?f.items.map(h=>Gv(h,f.lesson.id)):[]}}),l=c.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:c,cards:l}}function Kv(e){return e.filter((t,n)=>uv.has(t.id)||n<2)}async function Dv(e,t=3){const n=await hl(e,async([s,r])=>[s,await Ge(r)],t);return Object.fromEntries(n)}async function Fv(e,t=3){const n=await hl(e,async([s,r])=>[s,await Vv(r)],t);return Object.fromEntries(n)}async function hl(e,t,n=6){const s=[],r=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=r){const c=e.slice(o,o+r);s.push(...await Promise.all(c.map(t))),o+r<e.length&&await new Promise(l=>window.setTimeout(l,0))}return s}async function Ge(e,t=null){const n=vl(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),qo):0;try{const l=await fetch(r,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${r}`);continue}const d=await l.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${r}. Trying fallback paths.`,u)}}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function Ov(e,t=""){const n=vl(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),qo):0;try{const l=await fetch(r,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${r}`);continue}return await l.text()}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function Bv(e){const t=Object.fromEntries(Re.map(f=>[f,[]])),n=String(e||"").split(/\r?\n/);let s=null,r=null,o="idle",c=[],l=[];const d=()=>{!r||!s||(r.text=zv(c.join(`
`)),r.questions=l.map(f=>f.trim()).filter(Boolean),t[s].push(r),r=null,c=[],l=[],o="idle")},u=f=>{const h=String(f||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const f of n){const h=String(f??""),g=h.trim(),$=g.match(/^#\s*JLPT\s*(N[1-5])\b/i);if($){d(),s=$[1].toUpperCase();continue}const L=g.match(/^##\s*(N[1-5])\s*(.+)$/i);if(L){d(),s=L[1].toUpperCase(),r={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:Uv(L[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(g)&&!$&&!L){d(),s=null;continue}if(!r)continue;if(/^###\s*Проверочные вопросы/i.test(g)){o="questions";continue}if(o==="code"){/^```/.test(g)?o="body":c.push(h);continue}if(/^```/.test(g)){o="code";continue}if(o==="questions"){const N=g.match(/^[-*]\s+(.*)$/),k=g.match(/^\d+\.\s+(.*)$/);if(N){l.push(N[1]);continue}if(k){l.push(k[1]);continue}if(!g||/^---+$/.test(g))continue;l.push(g);continue}const C=g.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(C){const N=u(C[1]);r[N]=C[2].trim()}}return d(),t}function zv(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function Uv(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Jv(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,r])=>{!s||!r||typeof r!="object"||(n[String(s)]={titleRu:String(r.titleRu||r.ruTitle||r.title_ru||"").trim(),titleEn:String(r.titleEn||r.enTitle||r.title_en||"").trim(),ru:String(r.ru||r.translationRu||r.translation_ru||"").trim(),en:String(r.en||r.translationEn||r.translation_en||"").trim()})}),n}function vl(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Gv(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function qv(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const r=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return r.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||r.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:r}]:null}).filter(Boolean))}function Hv(e){const t=Array.isArray(e?.categories)?e.categories:[],n=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),currency:e?.currency||"Moon Fragments",categories:t.length?t:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}],items:n.map(s=>{const r=ri(s.price);return{...s,id:String(s.id||""),type:String(s.type||"effect"),price:r,asset:String(s.asset||""),preview:String(s.preview||s.asset||""),rarity:String(s.rarity||"common").toLowerCase(),defaultOwned:!!(s.defaultOwned||r===0),unlockCondition:s.unlockCondition||null}}).filter(s=>s.id)}}async function Vv(e){const t=vl(e);let n=null;for(const s of t)try{const r=typeof AbortController<"u"?new AbortController:null,o=r?window.setTimeout(()=>r.abort(),qo):0;try{const c=await fetch(s,{signal:r?.signal});if(!c.ok){n=new Error(`Cannot load ${s}: HTTP ${c.status}`);continue}const l=await c.text();try{return JSON.parse(l)}catch(d){n=d}}finally{o&&window.clearTimeout(o)}}catch(r){n=r}throw n||new Error(`Cannot load ${e}`)}function In(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function Wv(){try{const e=localStorage.getItem(S);if(!e)return In();const t=JSON.parse(e);if(!t||typeof t!="object")return In();const n=In(),s=t.selected||t.equipped||{},r=Object.entries(Kd(s)).filter(([,o])=>!!o);return{owned:it(t.owned||t.ownedItems||t.inventory||n.owned),selected:{...n.selected,...Object.fromEntries(r)},seen:it(t.seen||n.seen),updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),In()}}function Xv(){try{const e=localStorage.getItem(S);if(!e)return null;const t=JSON.parse(e);return!t||typeof t!="object"?null:t.selected?.background||t.equipped?.background||null}catch{return null}}function Ys(){if(!a.customization)return!1;if(li)return!0;li=!0;const e=()=>{ms=0,li=!1,a.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(S,JSON.stringify(a.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?ms=window.requestIdleCallback(e,{timeout:1200}):ms=window.setTimeout(e,160),!0}function Qv(){if(!a.customization)return!1;li=!1,ms&&("cancelIdleCallback"in window?window.cancelIdleCallback(ms):window.clearTimeout(ms),ms=0),a.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(S,JSON.stringify(a.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function bs(){const e=Xv(),t=Wv(),n=qe().length>0,s=new Set,r=it(a.progress.shop?.owned||[]);it(t.owned).forEach(c=>{const l=Se(c)||ks(c);l?s.add(l.id):n||s.add(c)}),qe().forEach(c=>{(c.defaultOwned||c.price===0)&&s.add(c.id)}),it(a.progress.unlockedBackgrounds||[]).forEach(c=>{const l=Se(c)||ks(c);l?s.add(l.id):n||s.add(c)}),it(a.progress.unlockedEvaSprites||[]).forEach(c=>{const l=ys(c);l&&s.add(l.id),r.includes(`eva_sprite:${c}`)&&l&&s.add(l.id)}),r.forEach(c=>{const l=String(c),d=Se(l)||ks(l);if(d?s.add(d.id):n||s.add(l),!d&&l.startsWith("eva_sprite:")){const u=ys(l.replace("eva_sprite:",""));u&&s.add(u.id)}});const o=Yv({...In().selected,...Kd(a.progress.shop?.equipped||{}),...t.selected||{}});o.background=Oh({catalogItems:qe(),owned:[...s],customizationSelected:e,progressEquipped:a.progress.shop?.equipped?.background,progressSelected:a.progress.selectedEvaRoomBackground}),a.progress.selectedEvaSprite&&(o.outfit=ys(a.progress.selectedEvaSprite)?.id||o.outfit),n||(o.background=e||t.selected?.background||a.progress.shop?.equipped?.background||a.progress.selectedEvaRoomBackground||o.background||"bg_study_hub"),n&&!s.has(o.background)&&(o.background="bg_study_hub"),n&&!s.has(o.outfit)&&(o.outfit="outfit_default_assassin"),n&&!s.has(o.theme)&&(o.theme="theme_default_dark"),n&&o.decoration&&!s.has(o.decoration)&&(o.decoration=null),n&&o.effect&&!s.has(o.effect)&&(o.effect=null),a.customization={owned:[...s],selected:o,seen:[...new Set([...it(t.seen||[]),...s])],updatedAt:t.updatedAt||new Date().toISOString()},Hr(),n&&Ys()}function Hr(){var n;if(!a.customization||!a.progress)return;me();const e=a.customization.selected||{};e.background&&(a.progress.selectedEvaRoomBackground=e.background);const t=Se(e.outfit);t?.spriteId&&(a.progress.selectedEvaSprite=t.spriteId),a.progress.unlockedBackgrounds=[...new Set([...it(a.progress.unlockedBackgrounds||[]),...a.customization.owned.filter(s=>Se(s)?.type==="background")])],a.progress.unlockedEvaSprites=[...new Set([...it(a.progress.unlockedEvaSprites||[]),...a.customization.owned.map(s=>Se(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=a.progress).shop||(n.shop={owned:[],equipped:{}}),a.progress.shop.owned=[...new Set([...it(a.progress.shop.owned||[]),...a.customization.owned,...a.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],a.progress.shop.equipped={...a.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function qe(){return a.customizationCatalog?.items||[]}function Se(e){return qe().find(t=>t.id===e)||null}function ks(e){const t=String(e||"");return t&&qe().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function Tn(e){return(Se(e)||ks(e))?.id||e||null}function Yv(e={}){return{background:Tn(e.background),outfit:Tn(e.outfit),theme:Tn(e.theme),decoration:Tn(e.decoration||e.frame),effect:Tn(e.effect)}}function ys(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return qe().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Zv(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function ew(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>Re.indexOf(n.jlpt)-Re.indexOf(s.jlpt))}}function tw(e){const t=Array.isArray(e?.courses)?e.courses:[];return{schema_version:Number(e?.schema_version||1),content_version:String(e?.content_version||""),courses:t.map(n=>({...n,slug:String(n.slug||"").toLowerCase(),title:String(n.title||""),native_title:String(n.native_title||""),description:String(n.description||""),course_file:String(n.course_file||""),pdf_url:String(n.pdf_url||""),lesson_count:Number(n.lesson_count||0),base_character_count:Number(n.base_character_count||0),task_count:Number(n.task_count||0)})).filter(n=>ve(n.slug))}}function nw(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function mu(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function wl(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function fu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function hu(){if(!Array.isArray(a.n5KanjiCatalog)||!a.n5KanjiCatalog.length)return;const e=new Map(a.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const r=String(n.jlpt||s.jlpt||"").toUpperCase();return r&&r!=="N5"?n:(t.add(s.kanji),Ni(n,s))}),a.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ni({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Ni(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Y(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function vu(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function wu(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function bu(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function ku(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function yu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function $u(){if(!Array.isArray(a.n4KanjiCatalog)||!a.n4KanjiCatalog.length)return;const e=new Map(a.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Li(n,s))}),a.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Li({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function Li(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Y(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function ju(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Su(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ai(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Cu(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function xu(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function Nu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function Lu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Au(){if(!Array.isArray(a.n3KanjiCatalog)||!a.n3KanjiCatalog.length)return;const e=new Map(a.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ii(n,s))}),a.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ii({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function Ii(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Y(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Iu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Tu(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ti(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Ru(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function _u(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function Pu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Eu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Mu(){if(!Array.isArray(a.n2KanjiCatalog)||!a.n2KanjiCatalog.length)return;const e=new Map(a.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ri(n,s))}),a.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ri({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function Ri(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Y(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function Ku(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Du(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function _i(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Fu(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function Ou(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function Bu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function zu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Uu(){if(!Array.isArray(a.n1KanjiCatalog)||!a.n1KanjiCatalog.length)return;hs=null;const e=new Map(a.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Pi(n,s))}),a.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Pi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))}),hs=null}function Pi(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Y(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Y(s(n.onyomi)||e.onyomi||""),kunyomi:Y(s(n.kunyomi)||e.kunyomi||""),hiragana:Y((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function Ju(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Gu(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ei(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function qu(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function sw(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function rw(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>Y(n)):[]})):[]}function aw(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((r,o)=>({kanji:String(r||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,r,o)=>o.findIndex(c=>c.kanji===s.kanji&&c.reading===s.reading)===r)}function iw(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(r=>String(r?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((r,o)=>({id:String(r.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(r.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(r.sentence||""),reading:Y(r.reading||""),translationRu:String(r.translationRu||r.translation_ru||r.ru||""),translationEn:String(r.translationEn||r.translation_en||r.en||""),blanks:rw(r.blanks),tiles:aw(r.tiles,r.blanks),source:"reading"})).filter(r=>r.id)}function Hu(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(c=>({id:String(c.id),title:c.title||{ru:c.id,en:c.id},icon:c.icon||"moon"})):[],r=n.map(c=>bl(c)),o=new Set(s.map(c=>c.id));return r.forEach(c=>{o.has(c.category)||(o.add(c.category),s.push({id:c.category,title:{ru:c.category,en:c.category},icon:c.icon||"moon"}))}),{categories:s,items:r}}function bl(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function Vu(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function Zs(){const e=Vu();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:yl(),jlptLessonStudy:$l(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:Sl(),n4Course:Cl(),n3Course:xl(),n2Course:Nl(),n1Course:Ll(),kanaCourses:_d(null),unlockedJlptLevels:Re.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:lp(),evaRelationship:Il(),shop:{owned:[],equipped:{}}}}function ow(){const e=Zs();try{const t=f1();return t?Wu(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function Wu(e,t){return{...e,...t,version:3,settings:lw(e.settings,t.settings||{}),cards:h1({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:dw(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Mi(t.dailyBonusPending||null),lastOpenedJlptLesson:rt(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:XN(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Bs(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),moonFragments:ri(t.moonFragments,e.moonFragments),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:tp(e.learningPath,t.learningPath||{}),jlptLessonStudy:ep(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Al(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:op(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:np(e.n5Course,t.n5Course||{}),n4Course:sp(e.n4Course,t.n4Course||{}),n3Course:rp(e.n3Course,t.n3Course||{}),n2Course:ap(e.n2Course,t.n2Course||{}),n1Course:ip(e.n1Course,t.n1Course||{}),kanaCourses:_d(t.kanaCourses||e.kanaCourses),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...Re])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:dp(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:cp(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...it(e.shop.owned||[]),...it(t.shop?.owned||t.ownedItems||[])])],equipped:{...e.shop.equipped,...Kd(t.shop?.equipped||t.equippedItems||{})}}}}function lw(e,t){const n={...e,...t||{}};return n.theme=cw(n.theme,e.theme||"dark"),n.themeManuallySelected=Rn(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=Rn(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=Rn(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=Rn(n.languageManuallySelected,e.languageManuallySelected===!0),n}function cw(e,t="dark"){return e==="light"||e==="dark"?e:t}function dw(e,t){const n={...e,...t||{}};return n.current=kl(n.current,e.current||0),n.best=kl(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=Xu(n.pendingReward),n}function Xu(e){if(!e||typeof e!="object")return null;const t=kl(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Mi(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function Rn(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function kl(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function yl(){return{version:Hd,currentLevel:Vd,currentNodeId:_e,completedNodes:{},unlockedNodes:{[_e]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function $l(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function Qu(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function Yu(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function Zu(e,t){const n=Qu(),s=t&&typeof t=="object"?t:{},r={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:r,phase:Yu(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function ep(e,t){const n=$l(),s=t&&typeof t=="object"?t:{},r={},o=e?.sessions||{},c=s.sessions||{};return Object.keys(o).forEach(l=>{r[l]=Zu(o[l],c[l])}),Object.keys(c).forEach(l=>{r[l]||(r[l]=Zu(null,c[l]))}),{...n,...e||{},...s||{},sessions:r,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function tp(e,t){return{...e,...t||{},version:Hd,currentLevel:String(t?.currentLevel||e.currentLevel||Vd).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||_e),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:jl(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function jl(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Wt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function Sl(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function np(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Bs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ca(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Cl(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function sp(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Bs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ca(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function xl(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function rp(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Bs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ca(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Nl(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function ap(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Bs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ca(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Ll(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function ip(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Bs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ca(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Al(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:uw(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Ki(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Ki(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function uw(e,t){const n=[],s=new Set,r=o=>{if(!o)return;const c=Qn(o.jp||Gm(o)),l=br(c);if(!l||s.has(l))return;s.add(l);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Fe(l).toString(36)}`;n.push({id:d,jp:c,hiragana:Qn(o.hiragana||o.reading||""),ru:Qn(o.ru||o.translationRu||""),en:Qn(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(r),(Array.isArray(t)?t:[]).forEach(r),n.slice(0,160)}function op(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Il(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:le(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function lp(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function cp(e,t){return{...e,...t,warmth:ce(Number(t.warmth??e.warmth),0,100),trust:ce(Number(t.trust??e.trust),0,100),discipline:ce(Number(t.discipline??e.discipline),0,100),curiosity:ce(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function dp(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function wn(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function $s(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function Zt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:wn(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function pw(){const e=Zt();let t=null;try{const n=localStorage.getItem(y);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}a.evaRuntime=fw(e,t||mw()),gw(),js()}function gw(){if(!a.evaRuntime)return;a.evaRuntime.memory=$s(wn(),a.evaRuntime.memory||{});const e=a.evaRuntime.memory,t=le(),n=e.lastSeenDate||null,s=n?Math.max(0,os(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=a.route,e.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=a.evaRuntime.mood||e.lastKnownMood||"neutral"}function mw(){const e=a.progress?.evaAutonomy||{};return{currentSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:a.customization?.selected?.decoration||a.customization?.selected?.frame||null,currentEffect:a.customization?.selected?.effect||"none",activeSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function fw(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:$s(e.memory||wn(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function Tl(){if(!a.evaRuntime)return!1;_l(),a.evaRuntime.updatedAt=new Date().toISOString(),Vo=!1,gs&&("cancelIdleCallback"in window?window.cancelIdleCallback(gs):window.clearTimeout(gs),gs=0);try{return localStorage.setItem(y,JSON.stringify(a.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function js(e={}){if(!a.evaRuntime)return!1;if(e?.immediate)return Tl();if(Vo)return!0;Vo=!0;const t=()=>{gs=0,Tl()};return"requestIdleCallback"in window?gs=window.requestIdleCallback(t,{timeout:1200}):gs=window.setTimeout(t,160),!0}function Rl(){Pl(),Tl(),Qv()}function _l(){if(!a.evaRuntime||!a.progress)return;const e=a.customization?.selected?.background||a.progress.shop?.equipped?.background||a.progress.selectedEvaRoomBackground||"bg_study_hub",t=qe().filter(n=>sn(n.id));a.evaRuntime.ownedSkins=[...new Set(["idle","default",...a.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],a.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...a.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],a.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],a.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],a.evaRuntime.currentBackground=e,a.evaRuntime.activeSkin=a.evaRuntime.currentSkin||a.progress.selectedEvaSprite||"idle",a.evaRuntime.activeBackground=e}function Pl(){return a.progress?(Rv(),a.progress.level=Io(a.progress.xp),a.progress.updatedAt=new Date().toISOString(),Ho=!1,ps&&("cancelIdleCallback"in window?window.cancelIdleCallback(ps):window.clearTimeout(ps),ps=0),v1(a.progress)):!1}function A(e={}){if(!a.progress)return!1;if(e?.immediate)return Pl();if(Ho)return!0;Ho=!0;const t=()=>{ps=0,Pl()};return"requestIdleCallback"in window?ps=window.requestIdleCallback(t,{timeout:1200}):ps=window.setTimeout(t,120),!0}function Vr(e,t,{timeout:n=0,afterPaint:s=!1}={}){const r=()=>{try{const c=t?.();c&&typeof c.then=="function"&&c.catch(l=>console.warn(`[Flash Kanji] ${e} failed.`,l))}catch(c){console.warn(`[Flash Kanji] ${e} failed.`,c)}},o=()=>window.setTimeout(r,n);requestAnimationFrame(s?()=>requestAnimationFrame(o):o)}function hw(){gp(),fi=!0,He(),Ns(),Mt(),window.setTimeout(Ns,120),window.setTimeout(Ns,320)}function he(){return typeof window>"u"?{scrollX:0,scrollY:0}:{scrollX:window.scrollX,scrollY:window.scrollY}}function up(){return{...he(),at:Date.now()}}function vw(){if(typeof window>"u")return;const e=up(),t=Xo;nu=e.at,t&&(Math.abs(Number(e.scrollY||0)-Number(t.scrollY||0))>4||Math.abs(Number(e.scrollX||0)-Number(t.scrollX||0))>4)&&(hi=t),Xo=e,vi&&window.clearTimeout(vi),vi=window.setTimeout(()=>{Wo=up(),Xo=Wo,hi=null,su=!0,vi=0},30)}function pp(){const e=he(),t=hi||Wo||e,n=Date.now()-nu<90,s=Math.abs(Number(e.scrollY||0)-Number(t.scrollY||0))>4||Math.abs(Number(e.scrollX||0)-Number(t.scrollX||0))>4;return(su||hi)&&n&&s?t:e}function ww(){return hn||(hn=pp()),hn}function bw(){const e=hn||pp();return hn=null,e}function pe({scrollPolicy:e=re.PRESERVE,viewportSnapshot:t=null}={}){if(e===re.TOP){a.pendingFocus="__scroll-top__",hw();return}db(t||he())}function gp(){if(typeof document>"u")return;const e=document.activeElement;e&&typeof e.blur=="function"&&e.blur()}function Pt(e,t,n={}){Vr(e,()=>{const s=t?.();s&&typeof s.then=="function"&&s.catch(r=>console.warn(`[Flash Kanji] ${e} failed.`,r)),A(),pe({scrollPolicy:n.scrollPolicy||(n.scrollTop?re.TOP:re.PRESERVE),viewportSnapshot:n.viewportSnapshot||null})})}function kw(e){const t=e?.dataset?.action||"",n=yw(t,e);return n?ol.has(n)?!1:(ol.add(n),requestAnimationFrame(()=>window.setTimeout(()=>ol.delete(n),0)),!0):!0}function yw(e,t){return e?e==="rate"?`rate:${a.activeCardId||""}:${t?.dataset?.rating||""}`:e==="rate-kana-review"?`rate-kana:${t?.dataset?.course||""}:${t?.dataset?.card||""}:${t?.dataset?.rating||""}`:e==="kana-lesson-card"?`kana-lesson-card:${t?.dataset?.course||""}:${t?.dataset?.lesson||""}:${t?.dataset?.kana||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${a.activeExerciseReviewLevel||""}:${a.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function Wr(){Object.keys(a.progress.cards||{}).forEach(s=>O(s)),a.progress.level=Io(a.progress.xp),a.progress.totalMoonFragmentsEarned=Math.max(Number(a.progress.totalMoonFragmentsEarned||0),Number(a.progress.moonFragments||0),vN()),me(),sr(),la(),mc(),wc(),$c(),typeof io=="function"&&io();const e=Nr(),t=[xa(ne(),"N5"),xa(W(),"N4"),xa(H(),"N3"),xa(V(),"N2"),xa(ee(),"N1"),Na(ne(),"N5"),Na(W(),"N4"),Na(H(),"N3"),Na(V(),"N2"),Na(ee(),"N1")].some(Boolean);[ne(),W(),H(),V(),typeof ee=="function"?ee():null].filter(Boolean).forEach(s=>$w(s)),(t||e)&&A(),Di();const n=a.lessons.find(s=>Ve(s));a.activeLessonId||(a.activeLessonId=n?.id||a.lessons[0]?.id||null)}function $w(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Bs(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function er(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],r=e.srsKanji[t],o=s||r||n;return e.studiedKanji[t]=o,e.srsKanji[t]=r||o,o}function Di(){a.progress.learningPath=tp(yl(),a.progress.learningPath||{});const e=a.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[_e]=!0,(Object.keys(a.progress.seenKanji||{}).length>0||Object.keys(ne().studiedKanji||{}).length>0||Object.keys(ne().completedLessons||{}).length>0||Object.keys(a.progress.lessonCompletions||{}).length>0)&&!t[_e]&&(t[_e]=a.progress.visits?.firstVisitDate||new Date().toISOString()),El().forEach((o,c)=>{ne().completedLessons?.[o]&&!t[o]&&(t[o]=ne().completedLessons[o]),n[o]=!0});const r=mp();e.currentNodeId=r,n[r]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function El(){const e=(a.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:cv.filter(t=>/^n5-lesson-\d+$/i.test(t))}function mp(){const e=a.progress?.learningPath||yl(),t=[_e,...El(),Vs];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||_e}function Ml(){return a.n5Textbook?.items?.length?Promise.resolve(a.n5Textbook):qr||(qr=Ge(B.n5Lessons).then(e=>(a.n5Textbook=wl(e),Di(),(a.route==="learn"||a.route==="home")&&P(),a.n5Textbook)).catch(e=>{throw qr=null,e}),qr)}function jw(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(a.learningPathLessonPayloads[t])return Promise.resolve(a.learningPathLessonPayloads[t]);const n=dv[t];if(!n){const r=ra(t);return r&&(a.learningPathLessonPayloads[t]=r),Promise.resolve(r)}if(ki.has(t))return ki.get(t);const s=Ge(n).then(r=>(a.learningPathLessonPayloads[t]=r||ra(t),a.route==="learn"&&a.activeLearnNodeId===t&&P(),a.learningPathLessonPayloads[t])).catch(r=>{const o=ra(t);if(o)return a.learningPathLessonPayloads[t]=o,a.route==="learn"&&a.activeLearnNodeId===t&&P(),o;throw r}).finally(()=>{ki.delete(t)});return ki.set(t,s),s}function _n(){return Di(),a.progress.learningPath}function Kl(){const e=_n().activeSession;return!e?.nodeId||_n().completedNodes?.[e.nodeId]?null:e}function tr(){const e=Kl();return e?.nodeId?e.nodeId:_n().currentNodeId||mp()||_e}function fp(e){const t=Ss(e);return t?v(t.title):Sw(e)}function Sw(e){const t=String(e||"");if(t===_e)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===Vs)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=Ft(t);if(n)return v(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Cw(e){const t=Ss(e);return t?v(t.summary):""}function ge(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Mistakes",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Step",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function xw(){const e=ge();return{id:_e,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Nw(){const e=vt();return ge(),{id:Hs,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function Lw(){return{id:Vs,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function Aw(){const e=Number(a.n5Meta?.kanjiPerLesson||a.n5Meta?.cardsPerLesson||8);return El().map((t,n)=>({id:t,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${n+1}`,en:`N5 · Lesson ${n+1}`},summary:n===0?{ru:`Первый интерактивный урок: ${e} знаков, чтения, примеры и мини-практика.`,en:`First interactive lesson: ${e} signs, readings, examples, and mini practice.`}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:n===0?12:10}))}function hp(){const e=xw(),t=Nw(),n=Lw(),s=a.n5Textbook?.items?.length?a.n5Textbook.items.map((o,c)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):Aw(),r=[e];return vt()>0&&r.push(t),[...r,...s,n]}function Ss(e){const t=String(e||"");return t&&hp().find(n=>n.id===t)||null}function vp(e){if(!e)return"locked";if(e.id===Hs)return vt()>0?"review":"available";const t=_n();return t.completedNodes?.[e.id]?"completed":tr()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Iw(e){const t=ge();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function wp(){const e=_n(),t=vt(),n=Kl(),s=tr(),r=Ss(s),o=Number(jn().reviews||0)>=Number(a.progress.settings.dailyGoal||0);return!e.completedNodes?.[_e]&&!n?{kind:"node",label:ge().start,nodeId:_e}:n?.nodeId?{kind:"node",label:ge().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${ge().reviewAction}: ${t}`,nodeId:Hs}:o&&r?{kind:"node",label:ge().next,nodeId:r.id}:r?{kind:"node",label:e.completedNodes?.[_e]?ge().resume:ge().start,nodeId:r.id}:{kind:"review",label:ge().reviewOld,nodeId:Hs}}function Tw(){const e=ge(),t=tL(),n=t?.level||dn(),s=t?.lessonId||pd(n),r=Gt(n),o=ih(n);return{label:!!(t?.lessonId||r&&(Object.keys(r.completedLessons||{}).length>0||r.currentLessonId&&r.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function bp(){return p()==="ru"?{sectionEyebrow:"Японские азбуки",sectionTitle:"Начни с каны",sectionHint:"Хирагана и катакана идут рядом с JLPT, но прогресс и статистика хранятся отдельно.",start:"Начать",continue:"Продолжить",review:"Повторить",lessons:"уроков",passed:"пройдено",due:"к повторению",mastered:"освоено",characters:"знаков",active:"выбранный курс",hiragana:"Хирагана",katakana:"Катакана"}:{sectionEyebrow:"Japanese syllabaries",sectionTitle:"Start with kana",sectionHint:"Hiragana and katakana live next to JLPT, while progress and stats stay separate.",start:"Start",continue:"Continue",review:"Review",lessons:"lessons",passed:"passed",due:"due",mastered:"mastered",characters:"characters",active:"selected course",hiragana:"Hiragana",katakana:"Katakana"}}function Rw(e){return e?!!(e.currentRoute||Object.keys(e.lessons||{}).length||Object.keys(e.practices||{}).length||Object.keys(e.review||{}).length||Object.keys(e.writing||{}).length||e.finalTest?.completed):!1}function _w(e){if(!ve(e))return 0;const t=Date.now(),n=$t(e),s=Object.entries(n).map(([r,o])=>({cardId:r,...Pe(o)}));return Rd(s,t).initial.length}function Pw(e){return ve(e)?Object.values($t(e)).map(t=>Pe(t)).filter(t=>t.state==="Mastered").length:0}function Ew(e){return ve(e)?Object.values($t(e)).map(t=>Pe(t)).filter(t=>t.state!=="New"||Number(t.reviewCount||0)>0).length:0}function Mw(){const e=bp();return(a.kanaCatalog?.courses||[]).map(t=>{const n=String(t.slug||"").toLowerCase(),s=Fs(n),r=bt(n),o=s?.lessons?.[0]?.id||"lesson-1",c=r.currentRoute||o,l=Math.max(Number(s?.lessons?.length||0),Number(t.lesson_count||0)),d=s?.lessons?.length?s.lessons.filter(N=>so(n,N).passed).length:Object.values(r.lessons||{}).filter(N=>N?.passed).length,u=Math.max(Number(s?.base_characters?.length||0),Number(t.base_character_count||0)),f=Ew(n),h=_w(n),g=E(d,Math.max(1,l)),$=E(f,Math.max(1,u)),L=Rw(r),C=n==="katakana"?e.katakana:e.hiragana;return{slug:n,title:C,subtitle:t.title||C,nativeTitle:t.native_title||(n==="katakana"?"カタカナ":"ひらがな"),description:t.description||"",currentRoute:c,started:L,dueCount:h,completedLessons:d,totalLessons:l,totalCharacters:u,masteredCount:Pw(n),progressPercent:Math.max(g,$),updatedAt:r.updatedAt||null}}).filter(t=>ve(t.slug))}function Kw(e){const t=e.filter(n=>n.started||n.updatedAt);return t.length&&t.sort((n,s)=>(Date.parse(s.updatedAt||"")||0)-(Date.parse(n.updatedAt||"")||0))[0]?.slug||""}function Dw(e,t,n){const s=e.slug===t,r=e.started?n.continue:n.start,o=`#textbooks/${m(e.slug)}/${m(e.currentRoute||"lesson-1")}`,c=e.totalLessons>0?`${e.completedLessons}/${e.totalLessons} ${n.lessons}`:`0 ${n.lessons}`,l=e.totalCharacters>0?`${e.masteredCount}/${e.totalCharacters} ${n.mastered}`:`${e.masteredCount} ${n.mastered}`;return`
      <article class="home-kana-card${s?" is-active":""}" data-kana-course="${m(e.slug)}">
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
          <span>${i(c)}</span>
          <span>${i(l)}</span>
          <strong>${i(`${e.progressPercent}%`)}</strong>
        </div>
        <div class="progress mini" aria-hidden="true"><span style="width:${e.progressPercent}%"></span></div>
        <div class="home-kana-actions">
          ${e.dueCount>0?`<button class="btn primary" type="button" data-action="home-review">${i(n.review)} · ${i(e.dueCount)}</button><a class="btn ghost" href="${o}">${i(r)}</a>`:`<a class="btn primary" href="${o}">${i(r)}</a><button class="btn ghost" type="button" disabled aria-disabled="true">${i(n.review)} · 0</button>`}
        </div>
      </article>
    `}function Fw(){const e=Mw();if(!e.length)return"";const t=bp(),n=Kw(e);return`
      <article class="study-card home-kana-section" data-section="home-kana-courses">
        <div class="section-head">
          <div>
            <span class="eyebrow accent">${i(t.sectionEyebrow)}</span>
            <h2>${i(t.sectionTitle)}</h2>
            <p>${i(t.sectionHint)}</p>
          </div>
        </div>
        <div class="home-kana-grid">
          ${e.map(s=>Dw(s,n,t)).join("")}
        </div>
      </article>
    `}function Ow(){const e=xn(),t=vt(),n=ge();return[{label:n.streak,value:a.progress.streak.current},{label:n.level,value:a.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Bw(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function zw(){const e=p()==="ru",t=rc();return Re.map(n=>{const s=Lt(n),r=kt(n),o=Gt(n),c=kp(n,r),l=Math.max(Number(s?.lessonCount||0),r.length||0),d=At(n),u=Uw(n,r,s,o,c),f=!u&&t===n,h=v(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),g=l>0?`${c}/${l} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",$=u?e?"Пройдено":"Completed":f?`${g} · ${e?"сейчас":"now"}`:d?g:Cn(n);return{level:n,title:h,note:$,status:u?"done":f?"current":d?"open":"locked"}})}function kp(e,t=kt(e)){const n=Gt(e),s=n?.completedLessons||{};if(!n||!s||typeof s!="object")return 0;const r=new Set;return t.forEach(o=>{o?.id&&Bn(e,o).some(c=>!!s[c])&&r.add(o.id)}),r.size?r.size:Object.values(s).filter(Boolean).length}function Uw(e,t=kt(e),n=Lt(e),s=Gt(e),r=kp(e,t)){if(!s)return!1;if(s.finalTest?.passed)return!0;const o=Math.max(Number(n?.lessonCount||0),t.length||0);return o>0&&r>=o}function Jw(e){const t=`data-action="route" data-route="textbooks" data-subroute="${m(e.level)}"`;return`
      <button class="home-route-step is-${m(e.status)}" type="button" ${t} aria-label="${m((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function Gw(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${m(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${m(e.level||"")}" data-lesson-id="${m(e.lessonId||"")}"`:`data-action="${m(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function yp(){const e=tr();return{title:fp(e),summary:Cw(e)}}function O(e){const t=String(e);a.progress.cards[t]||(a.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=Pe(a.progress.cards[t]);return n.successRate=hh(n),Number.isFinite(Number(n.srsStep))?n.srsStep=ce(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=Fl(n),a.progress.cards[t]=n,n}function Xr(e,t="seen"){if(!a.progress||!e?.id)return!1;me();const n=new Date().toISOString();let s=!1;const r=String(e.id);return a.progress.seenCards[r]||(a.progress.seenCards[r]=n,s=!0),e.kanji&&!a.progress.seenKanji[e.kanji]&&(a.progress.seenKanji[e.kanji]={at:n,cardId:r,source:t,jlpt:e.jlpt||""},s=!0),s}function Qr(e,t="seen"){Xr(e,t)&&A()}const Et=[5/1440,1/24,12/24,1,2,4],Dl=1;function Fl(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<Et.length;s+=1)if(t<=Et[s]*1.08)return s;const n=Et[Et.length-1];return Et.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function qw(e){const t=Math.trunc(e);return t<0?0:t<Et.length?Et[t]||Et[0]:Et[Et.length-1]*2**(t-(Et.length-1))}function Hw(e,t,n=Dl){const s=Array.isArray(e)?e.slice():[],r=Array.isArray(t)?t.slice():[],o=[],c=Math.max(1,Math.trunc(Number(n)||Dl));let l=0,d=0,u=0;for(;l<s.length||d<r.length;){if(u>=c&&d<r.length){o.push(r[d++]),u=0;continue}if(l<s.length){o.push(s[l++]),u+=1;continue}if(d<r.length){o.push(r[d++]),u=0;continue}break}return o}function Vw(e,t){const n=Fl(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Ww(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function Fi(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),r=Number(e.correct||0);return t+n*4+s*2-r*.05}function en(e,t,n="jlpt_lesson"){if(!t)return!1;const r=Ol(e,t).reduce((o,c)=>Xr(c,n)||o,!1);return r&&A(),r}function Ol(e,t){const n=String(e||"").toUpperCase();return n==="N5"?rn(t):n==="N4"?pr(t):n==="N3"?mr(t):n==="N2"?hr(t):(t?.kanji||[]).map(s=>a.cards.find(r=>r.kanji===s&&String(r.jlpt||"").toUpperCase()===n)).filter(Boolean)}function $p(e){const t=a.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function jp(){return me(),a.progress.evaRoomQuiz}function Sp(){const e=[a.cards||[],typeof Ot=="function"?Ot():[],typeof et=="function"?et():[],typeof tt=="function"?tt():[],typeof nt=="function"?nt():[]];return Cp(e.flat().filter(Boolean))}function Xw(){if(!a.progress)return[];me();const e=new Set(Object.keys(a.progress.seenCards||{})),t=new Set(Object.keys(a.progress.seenKanji||{})),n=new Set(Object.keys(a.progress.lessonCompletions||{})),s=Qw(),r=Sp().filter(o=>{if(!o?.id||!o.kanji||!We(o,"ru")||!We(o,"en"))return!1;const c=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||$p(o)||n.has(o.lessonId)||s.has(`${c}:${o.kanji}`)||s.has(o.kanji)});return Cp(r)}function Qw(){const e=new Set,t=(n,s)=>{if(!s)return;const r=String(n||"").toUpperCase();e.add(String(s)),r&&e.add(`${r}:${s}`)};return Bl().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(r=>t(n.level,r)),Object.keys(s.completedLessons||{}).forEach(r=>{(n.lessonById(r)?.kanji||[]).forEach(c=>t(n.level,c))})}),e}function Bl(){return[{level:"N5",course:ne,lessonById:Ft,markStudied:ur,markDifficult:pa},{level:"N4",course:W,lessonById:Un,markStudied:gr,markDifficult:fa},{level:"N3",course:H,lessonById:Gn,markStudied:fr,markDifficult:va},{level:"N2",course:V,lessonById:Hn,markStudied:vr,markDifficult:ba}]}function Cp(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${We(n,"ru")}:${We(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function Yw(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function Zw(e){if(e.target.classList?.contains("detail-backdrop")){D("menu_close"),a.detailCardId=null,ue();return}if(e.target.classList?.contains("final-test-backdrop")){a.finalTestModal=null,a.finalTestBusy=!1,ue();return}if(e.target.classList?.contains("changelog-backdrop")){ul();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(a.navMenu&&!t&&!e.target.closest("[data-action]")){a.navMenu=null,ue();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,r=n.dataset.id;if(Yw(n),!!kw(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-iu<280)){if(s&&s.endsWith("-complete-lesson")){const c=`${s.split("-")[0]}:${r||""}`;if($e.has(c)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(zl(s),requestAnimationFrame(()=>window.setTimeout(()=>nb(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Ui(o)){Ib(o);return}a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),Pn(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),Pn(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&lh(n.dataset.shareSection||a.route,WN(n)).catch(()=>J(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&gh(!vd()),s==="notification-center"){if(a.notificationPromptVisible){bh();return}(a.notificationPrompt?.docked||Ko("header"))&&Do("header");return}if(s==="repeat-onboarding"){Hl({force:!0});return}if(s==="onboarding-next"){Bp();return}if(s==="onboarding-prev"){zp();return}if(s==="onboarding-continue"){Nb();return}if(s==="onboarding-close"||s==="onboarding-skip"){na({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){df(n.dataset.speechKey||"");return}if(s==="contact-email"&&(a.navMenu=null,a.contactModal=!0,ue()),s==="copy-contact-email"&&uh(gn).then(o=>{J(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(a.contactModal=!1,ue()),s==="close-changelog"){ul();return}if(s==="close-pwa-install-help"&&(a.pwaInstallHelpVisible=!1,ue()),s==="close-nav-menu"&&(a.navMenu=null,ue()),s==="close-final-test-modal"&&(a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,ue()),s==="final-test-focus-missing"){const o=n.dataset.focus||a.finalTestModal?.focusSelector||null;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=o,ue()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||a.finalTestModal?.level||"N5").toUpperCase();o==="N4"?sm(!0):o==="N3"?fm(!0):o==="N2"?Nm(!0):o==="N1"?Dm(!0):Gg(!0)}if(s==="final-test-next-level"){const o=F(n.dataset.nextLevel||""),c=String(n.dataset.nextLesson||"");if(!o||!c)return;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,Yr(o,c);return}if(s==="scroll-page-edge"&&((n.dataset.direction||Vl())==="up"?Ns():Lb()),s==="theme"&&bL(),s==="language"&&kL(),s==="sound"&&ph(),s==="toggle-ux-sound"&&yL(),s==="export"&&VN(),s==="apk-download"&&fe("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&ou.click(),s==="reset"&&wL(),s==="share-achievement"&&uL().catch(()=>J(R("shareFallback"))),s==="pwa-install"&&qL(),s==="pwa-later"&&Cd(),s==="notification-allow"&&QL(),s==="notification-later"&&Fo(),s==="mascot-click"&&Ix(n.dataset.character),s==="eva-click"&&vf(),s==="eva-dialogue-skip"&&tb(n),s==="dictionary-favorites-tab"&&(a.filters.favorites=n.dataset.favorites||"all",a.dictionaryVisibleCount=Fr,ue()),s==="set-learn-jlpt"){a.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=sc();hg(o),a.activeCardId=null,ue()}if(s==="dictionary-load-more"&&(a.dictionaryVisibleCount+=lv,ue()),s==="toggle-favorite"&&yN(r),s==="eva-room-choice"&&Jk(n),s==="eva-question-answer"&&Ek(n),s==="eva-room-reset"&&qk(),s==="toggle-eva-autonomy"&&ty(),s==="cycle-eva-autonomy"&&ny(),s==="eva-autonomy-room-mode"&&sy(),s==="eva-autonomy-outfit-mode"&&ry(),s==="eva-autonomy-next"&&mg(),s==="eva-autonomy-clear"&&ay(),s==="eva-room-shop-open"&&(a.evaRoomShopOpen=!0,be("shop_opened"),ue()),s==="eva-room-shop-close"&&(a.evaRoomShopOpen=!1,ue()),s==="eva-bg-buy"&&Hk(r),s==="eva-bg-select"&&Vk(r),s==="eva-sprite-buy"&&Wk(r),s==="eva-sprite-select"&&Xk(r),s==="shop-category"&&(a.shopFilters.category=n.dataset.category||"all",ue()),s==="shop-filter"&&(a.shopFilters.view=n.dataset.filter||"all",ue()),s==="shop-sort"&&(a.shopFilters.sort=n.dataset.sort||"featured",ue()),s==="shop-buy"&&to(r),s==="shop-select"&&no(r),s==="shop-clear-effect"&&gg(r),s==="shop-clear-item"&&Zk(r),s==="clear-writing"&&Bx(),s==="undo-writing"&&zx(),s==="check-writing"&&Ux(!0),s==="replay-writing"&&$f(),s==="play-writing-step"&&jf(),s==="writing-step-prev"&&Sf(-1),s==="writing-step-next"&&Sf(1),s==="select-writing-step"&&Cf(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&dC(Number(n.dataset.index)),s==="undo-sentence-tile"&&uC(),s==="clear-sentence"&&pC(),s==="check-sentence"&&gC(),s==="next-sentence"&&fC(),s==="reading-review-tile"&&R$(Number(n.dataset.index)),s==="reading-review-undo"&&_$(),s==="reading-review-clear"&&P$(),s==="reading-review-check"&&Bg(),s==="reading-review-answer"&&T$(n),s==="toggle-reading-translation"&&E$(),s==="add-custom-sentence"&&W0(),s==="edit-custom-sentence"&&Q0(n.dataset.id),s==="delete-custom-sentence"&&Y0(n.dataset.id),s==="cancel-custom-sentence-edit"&&Z0(),s==="insert-jlpt-tile"&&UN(Number(n.dataset.index)),s==="undo-jlpt-tile"&&JN(),s==="clear-jlpt-practice"&&GN(),s==="check-jlpt-practice"&&qN(),s==="next-jlpt-practice"&&HN(),s==="kana-submit-exercise"&&Gy(n),s==="kana-writing-done"&&qy(n.dataset.course||"",n.dataset.lesson||""),s==="kana-srs"&&Wy(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="kana-lesson-card"&&Vy(n.dataset.course||"",n.dataset.lesson||"",n.dataset.kana||"",n.dataset.rating||"remember"),s==="kana-lesson-card-reset"&&Hy(n.dataset.course||"",n.dataset.lesson||""),s==="kana-toggle-romaji"&&Qy(),s==="play-kana-tts"&&Yy(n.dataset.text||""),s==="kana-download-pdf"&&fe("kana_pdf_download",{course:n.dataset.course||""}),s==="retry-jlpt-course-data"&&_v(n.dataset.level||a.activeTextbookLevel||""),s==="n5-open-lesson"&&B$(r),s==="n5-overview"&&z$(),s==="n5-review"&&U$(n.dataset.mode||null),s==="n5-answer"&&M$(n),s==="n5-check-input"&&K$(r),s==="n5-srs"&&Ug(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&F$(r),s==="n5-complete-lesson"&&O$(r),s==="jlpt-lesson-answer"&&D$(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||r,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&q$(n),s==="n5-final-submit"&&Gg(),s==="n5-final-reset"&&H$(),s==="n4-open-lesson"&&wj(r),s==="n4-overview"&&bj(),s==="n4-review"&&kj(n.dataset.mode||null),s==="n4-kanji"&&yj(),s==="n4-grammar"&&$j(),s==="n4-reading"&&jj(),s==="n4-listening"&&Sj(),s==="n4-final"&&Cj(),s==="n4-answer"&&uj(n),s==="n4-check-input"&&pj(r),s==="n4-srs"&&em(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&gj(r),s==="n4-complete-lesson"&&mj(r),s==="n4-grammar-complete"&&fj(r,n.dataset.value||""),s==="n4-reading-complete"&&hj(r,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&vj(r,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&Lj(n),s==="n4-final-submit"&&sm(),s==="n4-final-reset"&&Aj(),s==="n3-open-lesson"&&tS(r),s==="n3-overview"&&nS(),s==="n3-review"&&sS(n.dataset.mode||null),s==="n3-kanji"&&rS(),s==="n3-grammar"&&aS(),s==="n3-reading"&&iS(),s==="n3-listening"&&oS(),s==="n3-final"&&lS(),s==="n3-answer"&&Vj(n),s==="n3-check-input"&&Wj(r),s==="n3-srs"&&pm(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&Xj(r),s==="n3-complete-lesson"&&Qj(r),s==="n3-grammar-complete"&&Yj(r,n.dataset.value||""),s==="n3-reading-complete"&&Zj(r,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&eS(r,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&uS(n),s==="n3-final-submit"&&fm(),s==="n3-final-reset"&&pS(),s==="n2-open-lesson"&&DS(r),s==="n2-overview"&&FS(),s==="n2-review"&&OS(n.dataset.mode||null),s==="n2-kanji"&&BS(),s==="n2-grammar"&&zS(),s==="n2-reading"&&US(),s==="n2-listening"&&JS(),s==="n2-final"&&GS(),s==="n2-answer"&&TS(n),s==="n2-check-input"&&RS(r),s==="n2-srs"&&Sm(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&_S(r),s==="n2-complete-lesson"&&PS(r),s==="n2-grammar-complete"&&ES(r,n.dataset.value||""),s==="n2-reading-complete"&&MS(r,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&KS(r,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&VS(n),s==="n2-final-submit"&&Nm(),s==="n2-final-reset"&&WS(),s==="n1-open-lesson"&&$0(r),s==="n1-overview"&&j0(),s==="n1-review"&&S0(n.dataset.mode||null),s==="n1-kanji"&&C0(),s==="n1-grammar"&&x0(),s==="n1-reading"&&N0(),s==="n1-listening"&&L0(),s==="n1-final"&&A0(),s==="n1-answer"&&f0(n),s==="n1-check-input"&&h0(r),s==="n1-srs"&&Em(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&v0(r),s==="n1-complete-lesson"&&w0(r),s==="n1-grammar-complete"&&b0(r,n.dataset.value||""),s==="n1-reading-complete"&&k0(r,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&y0(r,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&R0(n),s==="n1-final-submit"&&Dm(),s==="n1-final-reset"&&_0(),s==="review-exercise-next"){const o=he();Es(),pe({scrollPolicy:re.TOP,viewportSnapshot:o});return}if(s==="play-kanji-audio"){const o=ie(r)||ie(a.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?eh(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:(c={})=>Zf(o,c)}):Yf(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(Sn(o)){if(cn("jlpt-level",{level:o}),!At(o)){a.activeTextbookLevel=o,a.activeJlptLesson=o,Pn("textbooks",null,o),J(Cn(o));return}a.activeJlptLesson=o,Pn("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(cn("jlpt-start",{level:n.dataset.jlpt||dn()}),Yr(n.dataset.jlpt||dn())),s==="social-link"&&fe(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:a.route,source:n.dataset.network||"social"}),s==="play-audio"&&EN(n.dataset.audio,n.dataset.label),s==="close-reward"){const o=he();a.rewardModal=a.rewardQueue.shift()||null,a.rewardModal&&bf(a.rewardModal),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:o})}if(s==="set-goal"&&(a.progress.settings.dailyGoal=Number(n.dataset.goal),A(),J(`${R("dailyGoal")}: ${a.progress.settings.dailyGoal}`),P()),s==="buy-shop"&&to(r),s==="start-due"&&(Pn("textbooks"),Vr("start-due-toast",()=>{vt()||J(Be("eva","welcome"))})),s==="home-lesson"){const o=F(n.dataset.level||"")||dn(),c=String(n.dataset.lessonId||"");Yr(o,c)}if(s==="home-review"&&Pn("review"),s==="home-primary"&&(cn("home-primary"),Vr("home-primary-navigation",gy)),s==="learning-path-node"&&(cn("learning-path",{lessonId:n.dataset.node||r}),Vr("learning-path-node-navigation",()=>vg(n.dataset.node||r))),s==="learning-path-back"&&Cs(),s==="learning-path-choice"){const o=String(n.dataset.node||""),c=String(n.dataset.step||""),l=String(n.dataset.value||""),d=aa(o),u=d.steps.find(f=>f.id===c);if(!u||u.kind!=="quiz"||d.session.answers?.[c])return;d.session.answers[c]={selected:l,correct:l===u.answer,at:new Date().toISOString()},l===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],c])],d.session.updatedAt=new Date().toISOString(),A(),P()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||a.activeLearnNodeId||""),c=aa(o);if(!c.steps.length)return;const l=c.steps[c.session.stepIndex];if(l?.kind==="quiz"&&!c.session.answers?.[l.id])return;c.session.stepIndex=Math.min(c.session.stepIndex+1,c.steps.length),c.session.updatedAt=new Date().toISOString(),A(),P()}if(s==="learning-path-retry"){const o=String(n.dataset.node||a.activeLearnNodeId||""),l=(aa(o).session.mistakes||[]).slice();_n().activeSession=jl({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:l,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),A(),P()}if(s==="learning-path-continue"){const o=String(n.dataset.node||a.activeLearnNodeId||""),c=aa(o);wy(o,c.session,c.steps),Cs();return}if(s==="start-lesson"||s==="select-lesson"){const o=a.lessons.find(c=>c.id===r);if(!o||!Ve(o)){J(`${R("unlockedAt")} ${Lo(o)}`);return}if(a.activeLessonId=r,a.activeCardId=null,a.revealed=!1,wt(),s==="start-lesson"){cn("legacy-lesson",{level:o.jlpt||"",lessonId:r}),be("lesson_start",{lessonId:r,jlpt:o.jlpt});const c=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(c)?Yr(c,o.id):Cs(fn,o.id)}else P()}if(s==="show-answer"&&(Qr(ie(a.activeCardId),"show_answer"),a.revealed=!0,wt(),He()),s==="check-reading"){const o=document.getElementById(`readingCheck-${r||a.activeCardId}`);o&&(a.readingCheck.value=o.value,a.readingCheck.cardId=r||a.activeCardId),Bf()}if(s==="rate"&&Sx(n.dataset.rating),s==="rate-kana-review"&&gf(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="open-card"&&(Qr(ie(r),"card_details"),a.detailCardId=r,P()),s==="open-kanji-page"&&ib(r),s==="close-detail"&&(a.detailCardId=null,ue()),s==="study-card"){const o=ie(r);if(!o)return;Qr(o,"study_card"),a.activeLessonId=o.lessonId,a.activeCardId=o.id,a.revealed=!1,wt(o.id),a.detailCardId=null,Cs(fn,o.lessonId)}}}function eb(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;iu=Date.now(),e.preventDefault(),zl(n),n==="eva-click"&&vf(),n==="eva-autonomy-next"&&mg()}function zl(e="activity"){a.evaRuntime&&(a.evaRuntime.lastPlayerActionAt=Date.now(),a.evaRuntime.memory=$s(wn(),a.evaRuntime.memory||{}),a.evaRuntime.memory.lastRoute=a.route,e.startsWith("eva")&&(a.evaRuntime.memory.lastInteractionDate=le()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(a.evaRuntime.lastPlayerActionAt=Date.now()))}function tb(e){if(!a.evaRuntime)return;const t=e?.dataset?.lineId||se().currentLine?.id||"";!t||a.evaRuntime.textRevealSkippedLineId===t||(a.evaRuntime.textRevealSkippedLineId=t,js(),P())}function nb(e,t){if(!(!e||t?.disabled)&&!sb(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){D("menu_open");return}if(e==="eva-room-shop-close"){D("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Ui(t.dataset.route)){D(a.navMenu===t.dataset.route?"menu_close":"menu_open");return}D("tab_switch");return}if(e==="nav-menu-route"){D("tab_switch");return}if(e==="close-nav-menu"){D("menu_close");return}if(e==="toggle-header-socials"){D(vd()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){D("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){D("menu_close");return}if(e==="notification-center"){D("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){D("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){D("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){D("notification_soft");return}t?.matches("button, .btn, [role='button']")&&D("button_click"),e!=="toggle-header-socials"&&gh(!1)}}function sb(e,t){return["learn","review"].includes(a.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function xp(e){var d;zl("input");const t=e.target.closest("[data-ux-volume]");if(t){xL(Number(t.value)/100);const u=document.querySelector("[data-ux-volume-label]");u&&(u.textContent=`${Math.round(Po()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){a.readingCheck={cardId:n.dataset.id||a.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const u=De(),f=s.dataset.sentenceDraft;u.customDraft=Ki(u.customDraft||{}),f&&Object.prototype.hasOwnProperty.call(u.customDraft,f)&&(u.customDraft[f]=s.value,u.customMessage="",u.customStatus="",A());return}const r=e.target.closest("[data-kana-exercise-form] input");if(r){const u=r.closest("[data-kana-exercise-form]"),f=cc(u?.dataset.course||"",u?.dataset.owner||"",u?.dataset.ownerType||"",u?.dataset.exercise||""),h=String(r.name||"").replace(/^kana-/,"");f&&h&&((d=a.kanaExerciseDrafts)[f]||(d[f]={}),a.kanaExerciseDrafts[f][h]=r.value);return}const o=e.target.closest("[data-filter]");if(!o)return;const c=o.dataset.filter,l=o.selectionStart;a.filters[c]=o.value,a.dictionaryVisibleCount=Fr,P(),requestAnimationFrame(()=>{const u=document.getElementById(o.id);u&&(u.focus(),typeof l=="number"&&"setSelectionRange"in u&&u.setSelectionRange(l,l))})}function rb(e){if(Cb(e)||ab(e))return;if(e.key==="Escape"&&(a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal||a.navMenu)){a.detailCardId=null,a.rewardModal=null,a.finalTestModal=null,a.contactModal=!1,a.pwaInstallHelpVisible=!1,a.navMenu=null,a.changelogModal?ul():P();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),a.readingCheck.value=t.value,a.readingCheck.cardId=t.dataset.id||a.activeCardId,Bf())}function ab(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(yi=`${yi}${e.key.toLowerCase()}`.slice(-de.length),yi!==de)?!1:(yi="",Np(5e3),!0)}function Np(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return a.progress?(q(0,t,"cheat:moon_farm"),Q(),A(),D("moon_fragment_gain"),J(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),P(),a.progress.moonFragments):0}function Cs(e=mn,t=null,n=null){a.route="learn",a.activeLearnView=e,a.activeLearnNodeId=e===Wt&&String(t||"")||null,a.activeLearnLegacyLessonId=e===fn&&String(t||"")||null;const s=e===Wt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===fn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),a.activeTextbookLevel=null,a.activeTextbookSubroute=null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=n,a.evaRoomShopOpen=!1,wt(),Mt(),ue()}function Pn(e,t=null,n=null){++wi===wi&&Zr(e,t,n)}function Yr(e,t=""){++wi===wi&&BN(e,t)}function Zr(e,t=null,n=null){if(e==="learn"){Cs(mn,null,t);return}if(!zh(e)){const r=String(e||"");Us(we("hash","unknown-route",r,r?[r]:[])),yt(r?`#${encodeURIComponent(r)}`:"#not-found"),a.pendingFocus=t,a.navMenu=null,wt(),Mt(),He();return}const s=a.route;if(a.route=e,a.route!=="home"&&Gp(),a.routeMatch=null,a.routeNotFound=null,s!==a.route&&(s==="review"||a.route==="review")&&(a.reviewSession=null),a.route==="textbooks"){const r=n?String(n):"",o=F(r),c=ve(r)?r.toLowerCase():"",l=o||c;if(r&&!l){Us(we("hash","invalid-parameter",`textbooks/${r}`,["textbooks",r])),yt(`#textbooks/${encodeURIComponent(r)}`),a.pendingFocus=t,He();return}a.activeTextbookLevel=l||null,a.activeTextbookSubroute=null}else if(a.route==="jlpt-lesson"){const r=n?String(n).toUpperCase():a.activeJlptLesson||pA()||"";if(r&&!F(r)){Us(we("hash","invalid-parameter",`jlpt-lesson/${r}`,["jlpt-lesson",r])),yt(`#jlpt-lesson/${encodeURIComponent(r)}`),a.pendingFocus=t,He();return}a.activeJlptLesson=r||null}else a.activeTextbookLevel=null,a.activeTextbookSubroute=null;if(a.route!=="review"&&Es(),a.route==="textbooks")yt(xh(a.activeTextbookLevel||"",a.activeTextbookSubroute||""));else{const r=a.route==="learn"?"#learn":a.route==="jlpt-lesson"&&a.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(a.activeJlptLesson)}`:`#${a.route}`;yt(r)}a.route!=="kanji"&&(a.kanjiPageId=null),a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=t,a.route!=="eva-room"&&(a.evaRoomShopOpen=!1),wt(),Mt(),He(),ws(a.route)&&ji({route:a.route,delay:gl(a.route)}),a.route==="eva-room"&&be("room_opened")}function ib(e){const t=ie(e);if(!t)return;a.route="kanji",a.kanjiPageId=t.id,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.evaRoomShopOpen=!1,wt();const n=`#kanji/${encodeURIComponent(t.id)}`;yt(n),Mt(),He()}function ob(){return a.routeMatch||Mr(zs())}function lb(){const e=ob();if(!eu){F1(e,a),eu=!0,Lp(e);return}O1(e,a).sent&&Lp(e)}function Lp(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){fe("review_open",{route:"review"});return}if(e.route==="kanji"){fe("kanji_open",{route:"kanji",cardId:t.cardId||a.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){fe("lesson_open",{route:"jlpt-lesson",level:t.level||a.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){fe("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){fe("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}cb(n)&&fe("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}if(e.route==="textbooks"&&t.course){const n=String(t.subroute||"");n?n==="final"||n==="final-test"?fe("kana_final_test_start",{route:"textbooks",course:t.course}):/^lesson-\d+$/i.test(n)&&fe("kana_lesson_open",{route:"textbooks",course:t.course,lessonId:n}):fe("kana_course_open",{route:"textbooks",course:t.course})}}function cb(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function Ap(){const e=gv.begin(a.route);Xe=!0,Ip(),eN();try{zb(),pb(),lb();let t="";if(a.route===Dd&&(t=ea(a.routeNotFound)),a.route==="home"&&(t=Gb()),a.route==="download"&&(t=Kb()),a.route==="about"&&(t=Fb()),a.route==="learn"&&(t=py(),a.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(id)),a.route==="review"&&(t=O0(),a.pendingFocus!=="sentence-practice"&&requestAnimationFrame(id)),a.route==="dictionary"&&(t=MC()),a.route==="kanji"&&(t=BC()),a.route==="writing"&&(t=rx(),requestAnimationFrame(Kx)),a.route==="stats"&&(t=lx(),requestAnimationFrame(kf)),a.route==="achievements"&&(t=ux()),a.route==="eva-room"&&(t=Qb()),a.route==="jlpt-lesson"&&(t=yy()),a.route==="textbooks"&&(t=$y()),t||(t=ea(we("hash","unknown-route",String(a.route||""),a.route?[String(a.route)]:[]))),!e.isCurrent())return;An.innerHTML=`${t}${Pb()}${gb()}`,document.body.classList.toggle("modal-open",!!(a.detailCardId||pf()||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal)),$x(),requestAnimationFrame(()=>{Bb(),Wl(),$b()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${a.route} build=${T}`,t?.stack||t),An.innerHTML=Oi(t))}finally{Xe=!1,Ip()}}function Ip(){zr=null,di=null,ui=null,pi=null,gi=null,mi=null}function ue(){Ws||(Ws=requestAnimationFrame(()=>{Ws=0,Ap()}))}function He(){Ws&&(cancelAnimationFrame(Ws),Ws=0),Ap()}function xs(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function db(e=null){if(typeof window>"u"){He();return}fi=!0;const t=e||he(),n=Number(t?.scrollX||0),s=Number(t?.scrollY||0);gp(),He(),xs(n,s),requestAnimationFrame(()=>{xs(n,s),requestAnimationFrame(()=>xs(n,s))}),window.setTimeout(()=>xs(n,s),120),window.setTimeout(()=>xs(n,s),320),window.setTimeout(()=>xs(n,s),640),window.setTimeout(()=>xs(n,s),840)}function P(){ue()}function Oi(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${m(a.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function ea(e=a.routeNotFound){ub();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},r=e?.raw||location.pathname||location.hash||"";return`
      <section class="page empty-state not-found-page" data-route-error="not-found" data-route-not-found="${m(n)}">
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
    `}function ub(){document.title=(p()==="ru","404 — Flash Kanji"),Tp("robots","noindex, follow"),Rp("/404.html")}function pb(){a.route!==Dd&&(document.title=hv,Tp("robots","index, follow"),Rp("/"))}function Tp(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function Rp(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function gb(){const e=`${Ob()}${ix()}${mx()}${bC()}${fx()}${hx()}${vx()}${wx()}${bx()}${Ab()}`;return e?`<div class="modal-layer">${e}</div>`:""}function _p(){return je?.isConnected?je:document.body?(je||(je=document.createElement("div"),je.className="flash-kanji-onboarding-root",je.setAttribute("role","presentation"),je.setAttribute("aria-hidden","false")),je.isConnected||document.body.appendChild(je),je):null}const Ul=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Bi={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Pp(){try{return localStorage.getItem(Ud)==="true"}catch{return!1}}function mb(){try{return localStorage.getItem(Gd)||""}catch{return""}}function zi(e){try{localStorage.setItem(Gd,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function Jl(e=a.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function fb(e=!1){const t=mb();return t==="returning"||t==="completed"?t:Pp()?(zi("completed"),"completed"):e?(zi("returning"),"returning"):(zi("new"),"new")}function Ep(){return!Pp()}function hb(){try{localStorage.getItem(Jd)==="true"&&localStorage.removeItem(Jd)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function vb(){try{localStorage.setItem(Ud,"true"),zi("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function Mp(){return _t}function ta(){return Ul.length}function Gl(){return Ul[ce(Qt,0,ta()-1)]||Ul[0]}function wb(e=Gl()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function bb(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Kp(e=Gl()){for(const t of wb(e)){const s=Array.from(document.querySelectorAll(t)).find(r=>bb(r));if(s)return s}return null}function Dp(e,t=null){return typeof e=="function"?Dp(e(t),t):v(e||{ru:"",en:""})}function kb(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function yb(){return!(_t||!a.progress||!a.i18n||!a.lessons.length||!document.body||document.visibilityState!=="visible"||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.navMenu)}function ql(e=!1,t=iv){clearTimeout(Xs),!(!e&&!Ep())&&(Xs=window.setTimeout(()=>{Xs=0,Hl({force:e})},t))}function Hl(e={}){const t=!!e.force;let n=!1;if(_t){if(!t)return!0;na({completed:!1,silent:!0})}if(!t&&!Ep())return!1;if(!yb())return ql(t,qd),!1;clearTimeout(Xs);try{Zo=document.activeElement instanceof HTMLElement?document.activeElement:null,_t=!0,Ie="step",Qt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(r){console.warn("Could not make the app shell inert.",r)}}return _p(),nr(),Fp(),n=!0,window.addEventListener("scroll",En,{passive:!0}),window.addEventListener("resize",En),window.addEventListener("orientationchange",En),En(),Op(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),na({completed:!1,silent:!0}),n||ql(t,qd),!1}}function na(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(Xs),Xs=0,cancelAnimationFrame(Ur),Ur=0,window.removeEventListener("scroll",En),window.removeEventListener("resize",En),window.removeEventListener("orientationchange",En),Yt&&Yt.classList.remove("is-onboarding-target"),Yt=null,_t=!1,Ie="step",Qt=0,je&&(je.remove(),je=null,ot=null,Ee=null),document.body.classList.remove("onboarding-open");const r=document.querySelector(".app-shell");if(r){r.removeAttribute("aria-hidden");try{r.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&vb(),n||(s?Zr(s):P()),Zo?.focus&&requestAnimationFrame(()=>{try{Zo.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function nr(){if(!_p())return;const e=Ie==="final"?null:Gl(),t=Ie==="final"?null:Kp(e),n=Ie==="final"?Bi.title:e.title,s=Ie==="final"?Bi.text:Dp(e.text,t),r=Ie==="final"?p()==="ru"?"Готово":"Done":`${Qt+1} ${p()==="ru"?"из":"of"} ${ta()}`,o=v(n),c=v(s),l=vo("eva","calm","welcome"),d=ta();je.classList.toggle("is-final",Ie==="final"),je.classList.toggle("has-target",!!t),je.dataset.view=Ie;const u=Ie==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(v(Bi.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(v(Bi.close))}</button>
      `:Qt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;je.innerHTML=`
      ${Ie==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${Ie==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${Ie==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
        <div class="flash-kanji-onboarding-head">
          <span class="pill">${i(r)}</span>
          <span class="pill">${i(o)}</span>
        </div>
        <div class="flash-kanji-onboarding-body">
          <img class="flash-kanji-onboarding-eva" src="${m(l)}" alt="${m(p()==="ru"?"Ева":"Eva")}" loading="eager" decoding="async" />
          <div class="flash-kanji-onboarding-copy">
            <h2 id="flashKanjiOnboardingTitle">${i(o)}</h2>
            <p id="flashKanjiOnboardingDesc">${i(c)}</p>
          </div>
        </div>
        <div class="actions flash-kanji-onboarding-actions">${u}</div>
      </section>
    `,ot=Me("[data-onboarding-spotlight]",je),Ee=Me(".flash-kanji-onboarding-dialog",je),Yt&&Yt!==t&&Yt.classList.remove("is-onboarding-target"),Yt=t||null,Yt&&Yt.classList.add("is-onboarding-target"),Ee&&(Ee.dataset.totalSteps=String(d)),En()}function En(){_t&&(Ur||(Ur=requestAnimationFrame(()=>{Ur=0,Fp()})))}function Fp(){if(!_t||!je||!Ee)return;const e=Ie==="final"?null:Yt||Kp();kb();const t=window.innerWidth,n=window.innerHeight;if(Ee.style.maxWidth=`${Math.min(ov,Math.max(280,t-16))}px`,Ee.style.maxHeight=`${Math.max(180,n-24)}px`,Ee.style.left="50%",Ee.style.top="50%",Ee.style.transform="translate(-50%, -50%)",Ee.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&ot?(ot.hidden=!1,ot.style.left=`${Math.round(s.left-12)}px`,ot.style.top=`${Math.round(s.top-12)}px`,ot.style.width=`${Math.round(s.width+12*2)}px`,ot.style.height=`${Math.round(s.height+12*2)}px`,ot.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):ot&&(ot.hidden=!0)}else ot&&(ot.hidden=!0);je.style.visibility="visible",Op()}function $b(){_t&&nr()}function Op(){if(!Ee)return;const e=Ee.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Ee.querySelectorAll("button"),n=e||t[0]||Ee;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function jb(){return Ee?Array.from(Ee.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function Sb(e=1){const t=jb();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),r=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[r]?.focus?.()}function Cb(e){return _t?e.key==="Tab"?(e.preventDefault(),Sb(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),na({completed:Ie==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),Bp(),!0):e.key==="ArrowLeft"?(e.preventDefault(),zp(),!0):!1:!1}function Bp(){if(!_t)return;const e=ta()-1;if(Ie!=="final"){if(Qt<e){Qt+=1,nr();return}Ie="final",nr()}}function zp(){if(_t){if(Ie==="final"){Ie="step",Qt=ta()-1,nr();return}Qt>0&&(Qt-=1,nr())}}function xb(e=null){na({completed:!0,routeTo:e})}function Nb(){xb("textbooks")}function Ns(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Mt(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>Ns()))}function Lb(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function Up(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function Vl(){return Up()?window.scrollY>32?"up":"down":null}function Ab(){const e=Vl()||"down",t=Up()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",r=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${m(s)}" title="${m(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(r)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function Wl(){const e=Me('[data-action="scroll-page-edge"]');if(!e)return;const t=Vl();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const r=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",r),e.setAttribute("title",r)}function Ui(e){return e!=="review"&&Jp(e).length>1}function Ib(e){if(!Ui(e)){Zr(e);return}a.navMenu=a.navMenu===e?null:e,ue()}function Jp(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:rc(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"▥",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"◈",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"▥",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function Xl(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":R(e)}function Tb(){return["home","textbooks","review","dictionary","download","stats","about"]}function Rb(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function _b(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${m(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(Rb(e))}</span>
          <span>${i(Xl(e))}</span>
        </button>
      </li>
    `}function Pb(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",r=e?"Соцсети":"Social";return`
      <footer class="seo-footer site-footer" aria-label="${m(e?"Подвал сайта":"Site footer")}">
        <div class="site-footer-grid">
          <section class="site-footer-brand" aria-label="${m(e?"О проекте":"About Flash Kanji")}">
            <span class="pill">Flash Kanji</span>
            <p class="site-footer-blurb">${i(n)}</p>
          </section>
          <div class="site-footer-columns">
            <section class="site-footer-section">
              <h2>${i(s)}</h2>
              <ul class="site-footer-nav" aria-label="${m(s)}">
                ${Tb().map(o=>_b(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(r)}</h2>
              <div class="site-footer-socials" aria-label="${m(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${m(Tt.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${oh("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${m(Tt.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${oh("instagram")}</span>
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
    `}function Eb(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function Mb(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function Kb(){const e=Eb();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${m(ev)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${m(nv)}" alt="${m(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(Mb).join("")}
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
              <a class="btn ghost" href="${m(tv)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function Db(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function Fb(){const e=Db();return`
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
    `}function Ob(){const e=Jp(a.navMenu);if(!e.length)return"";const t=a.navMenu,n=t?Xl(t):"";return`
      <aside class="nav-popover" role="menu" aria-label="${m(n)}">
        <div class="nav-popover-head">
          <strong>${i(n)}</strong>
          <button class="icon-btn nav-popover-close" type="button" data-action="close-nav-menu" aria-label="${m(p()==="ru"?"Закрыть меню":"Close menu")}">✕</button>
        </div>
        <div class="nav-popover-list">
          ${e.map(s=>`
            <button class="nav-popover-item" type="button" role="menuitem" ${s.action?`data-action="${m(s.action)}"${s.jlpt?` data-jlpt="${m(s.jlpt)}"`:""}`:`data-action="nav-menu-route" data-route="${m(s.route)}" data-focus="${m(s.focus)}"`}>
              <span>${i(s.icon)}</span>
              <b>${i(s.title)}</b>
              <small>${i(s.text)}</small>
            </button>
          `).join("")}
        </div>
      </aside>
    `}function Bb(){if(!a.pendingFocus)return;if(fi){fi=!1,a.pendingFocus=null;return}const e=a.pendingFocus;if(a.pendingFocus=null,e==="__scroll-top__"){Mt();return}const t={"lesson-card":".study-card, .daily-lesson-card","kana-character-card":"[data-section='kana-character-study-card']","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"auto",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function zb(){cl(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===a.route||n==="learn"&&a.route==="textbooks"||n==="stats"&&a.route==="achievements"||n==="dictionary"&&a.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Ui(n)),t.setAttribute("aria-expanded",a.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const r=t.querySelector("small");r&&n&&(r.textContent=Xl(n))});const e=Me('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),Ub(),fd(),CL(),hd(),Jb()}function Ub(){const e=p()==="ru",t={sidebar:e?"Основная навигация Flash Kanji":"Flash Kanji main navigation",sidebarNav:e?"Разделы Flash Kanji":"Flash Kanji sections",learning:e?"Обучение":"Learning",project:e?"Проект":"Project",progress:e?"Прогресс Flash Kanji":"Flash Kanji progress",profile:e?"Профиль Flash Kanji":"Flash Kanji profile",home:e?"На главную":"Go home",socialLinks:e?"Социальные ссылки":"Social links",reportBug:e?"Сообщить об ошибке":"Report a bug",theme:e?"Сменить тему":"Toggle theme",themeTitle:e?"Тема":"Theme",language:e?"Сменить язык":"Change language",languageTitle:e?"Язык":"Language",exportProgress:e?"Экспорт прогресса":"Export progress",exportTitle:e?"Экспорт":"Export",importProgress:e?"Импорт прогресса":"Import progress",importTitle:e?"Импорт":"Import",openProfile:e?"Открыть профиль":"Open profile",profileTitle:e?"Профиль":"Profile"},n=(s,r,o=r)=>{document.querySelectorAll(s).forEach(c=>{c.setAttribute("aria-label",r),c.setAttribute("title",o)})};document.querySelector(".app-sidebar")?.setAttribute("aria-label",t.sidebar),document.querySelector(".sidebar-nav")?.setAttribute("aria-label",t.sidebarNav),document.querySelector(".sidebar-progress")?.setAttribute("aria-label",t.progress),document.querySelector(".sidebar-user")?.setAttribute("aria-label",t.profile),document.querySelector("#headerSocialActions")?.setAttribute("aria-label",t.socialLinks),document.querySelectorAll("[data-nav-caption]").forEach(s=>{s.textContent=s.getAttribute("data-nav-caption")==="project"?t.project:t.learning}),n('.brand-mark[data-action="route"][data-route="home"]',t.home),n('[data-action="contact-email"]',t.reportBug),n('[data-action="theme"]',t.theme,t.themeTitle),n('[data-action="language"]',t.language,t.languageTitle),n('.icon-btn[data-action="export"]',t.exportProgress,t.exportTitle),n('.icon-btn[data-action="import"]',t.importProgress,t.importTitle),n('.sidebar-user-open[data-action="route"][data-route="stats"]',t.openProfile,t.profileTitle)}function Jb(){const e=Me("#sidebarProgressBar"),t=Me("#sidebarProgressLabel"),n=Me("#sidebarProgressPercent"),s=Me("#sidebarProgressNote"),r=Me("#sidebarUserAvatar"),o=Me("#sidebarUserTitle"),c=Me("#sidebarUserSubtitle"),l=xn(),d=yp(),u=vt(),f=Math.max(1,Number(a.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(l.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${f}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${ge().reviewQueue} · ${d.title||ge().mapHint}`:`${d.title||ge().mapHint}${d.summary?` · ${d.summary}`:""}`),r&&(r.textContent=`Lv ${f}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),c&&(c.textContent=`${ge().level} ${f} · ${a.progress?.streak?.current||0} ${ge().streak}`)}function Gb(){a.n5Textbook?.items?.length||Ml();const e=qb(),t=Tw(),n=vt(),s=yp(),r=Ow(),o=ge(),c=xn(),l=Math.max(0,Math.min(100,Math.round(c.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:a.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:a.progress.moonFragments}],f=wh();return`
      <section class="page home-shell">
        <article class="home-hero-card">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy">
            <p class="eyebrow">JLPT N5-N1 · ${i(d?"Учебники":"Textbooks")} · ${i(d?"Повторение":"Review")}</p>
            <h1 class="hero-title home-hero-title">${d?"Небольшой урок.<br><em>Большой шаг.</em>":"Small lesson.<br><em>Big step.</em>"}</h1>
            <p class="home-hero-note">${i(s.summary||(d?"Сегодня появится новый шаг вперед.":"Today brings a small but steady step forward."))}</p>
            <p class="hero-subtitle">${i(R("tagline"))}</p>
            <div class="home-next-lesson">
              <span class="pill">${i(o.nextLesson)}</span>
              <strong>${i(s.title)}</strong>
              <p>${i(s.summary||o.mapHint)}</p>
            </div>
            <div class="hero-actions home-hero-actions">
              <button class="btn primary home-primary-cta" type="button" data-action="home-lesson" data-tour="home-lesson" data-level="${m(t.level)}" data-lesson-id="${m(t.lessonId||"")}">${i(t.label)}</button>
              ${n>0?`<button class="btn ghost home-primary-cta" type="button" data-action="home-review" data-tour="home-review">${i(d?`Повторить: ${n}`:`Review: ${n}`)}</button>`:""}
              <button class="btn ghost home-primary-cta home-download-cta" type="button" data-action="route" data-route="download">${i(d?"Скачать APK / PWA":"Download APK / PWA")}</button>
            </div>
            <div class="home-hero-progress" aria-label="${m(o.level)}">
              <progress class="progress-line" max="100" value="${m(String(l))}">0%</progress>
              <b>${i(`${l}%`)}</b>
            </div>
          </div>
        </article>
        <section class="metric-grid home-metrics" aria-label="${m(o.route)}">
          ${r.map(Bw).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            ${Fw()}
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"Маршрут N5":"N5 route")}</span>
                  <h2>${i(d?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${i(d?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${zw().map(Jw).join("")}
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
                ${u.map(Gw).join("")}
              </div>
            </article>
            ${Ha()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(f.install)}</button>
                <p class="home-install-hint">${i(f.description)}${Er()?` ${i(f.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Wb(e)}
          </aside>
        </section>
      </section>
    `}function qb(){Hb();const e=se(),t=e.currentLine||a.evaRuntime?.currentPhrase||null,n=eo(),s=v(_r("eva").name||{ru:"Ева",en:"Eva"}),r=a.evaRuntime?.mood||e.mood||tn().mood,o=a.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",c=t?.state||a.evaRuntime?.presenceState||(n?"wait_choice":"speak"),l=ir(t?.sprite||a.evaRuntime?.currentSkin||Ji());return{line:t,question:n,speaker:s,mood:r,emotion:o,presenceState:c,sprite:l}}function Hb(){me();const e=se();return e.currentLine?.text||a.evaRuntime?.currentPhrase?.text?e.currentLine||a.evaRuntime.currentPhrase:(Array.isArray(a.evaAutonomyLines)&&a.evaAutonomyLines.length&&Vb(),{id:"home_eva_idle_fallback",category:"idle",text:{ru:"Я рядом. Начнём с одного спокойного шага.",en:"I'm here. Let's start with one calm step."},sprite:Ji(),emotion:"calm",state:"speak"})}function Vb(){Qs||(Qs=window.setTimeout(()=>{Qs=0,!(a.route!=="home"||se().currentLine?.text||a.evaRuntime?.currentPhrase?.text)&&fg("auto",{allowQuestion:!1})&&P()},260))}function Gp(){Qs&&(window.clearTimeout(Qs),Qs=0)}function Wb(e){const t=Dn(),n=Kn(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",r=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=r.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${m(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${m(e.question?"question":"dialogue")}" data-eva-state="${m(e.presenceState)}" data-eva-mood="${m(e.mood)}" data-eva-emotion="${m(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${Vp(v(r.text||{ru:"Я здесь.",en:"I'm here."}),o)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${i(n.question)}</span>
              <strong>${i(v(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(c=>`
                  <button class="btn ${c.id===e.question.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${m(c.id)}">
                    ${i(v(c.text))}
                  </button>
                `).join("")}
              </div>
            </div>
          `:`
            <div class="home-eva-actions">
              <button class="btn primary" type="button" data-action="eva-autonomy-next" aria-label="${m(t.nextAutonomyLine)}" title="${m(t.nextAutonomyLine)}">→</button>
            </div>
          `}
        </div>
        <button class="home-eva-avatar" type="button" data-action="eva-click" data-character="eva" aria-label="${m(e.speaker)}">
          <img class="${m(Hp({line:e.line,isAutonomy:!0}))}" src="${m(e.sprite)}" alt="${m(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function qp(e){return e.line?.state||a.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function Hp(e){const t=["eva-vn-sprite"],n=qp(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(a.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function Xb(e){const t=String(e||"").trim();return t?(t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function Vp(e,t=""){const n=Xb(e),r=`eva-dialogue-text ${a.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((c,l)=>`<span class="eva-line-piece" style="--i:${l}">${i(c)}</span>`).join(" "):i(e);return`<p class="${r}" data-action="eva-dialogue-skip" data-line-id="${m(t)}">${o}</p>`}function Qb(){me(),sr(),la(),Q();const e=Uk(),t=e.node,n=nn()||e.bg||rr(t.background),s=e.sprite||e.spriteSrc||ir(e.spriteId||Fn(t.sprite)),r=Dn(),o=Kn(),c=Array.isArray(t.choices)?t.choices:[],l=qp(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${gk()}
        ${dk(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${m(l)}" data-eva-state="${m(l)}" data-eva-mood="${m(e.mood||tn().mood)}" data-eva-emotion="${m(e.emotion||"calm")}" style="--eva-bg:${m(wd(n.file))}; --eva-bg-fallback:${m(wd("assets/bg/bg_study_hub.webp"))}">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${m(v(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${m(Hp(e))}" src="${m(s)}" alt="${m(v(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${Zb(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(v(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(v(n.title||{}))}</span>
            </div>
            ${Vp(v(t.text||{}),d)}
            ${e.isAutonomy?uk(r):`
              <div class="eva-choice-grid">
                ${c.map((u,f)=>`
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

        ${a.evaRoomShopOpen?Yb():""}
      </section>
    `}function Yb(){const e=Dn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${m(e.shop)}">
        ${Wp({closable:!0})}
      </aside>
    `}function Zb(e={}){const t=ek(e);return t?`
      <div class="eva-room-decoration deco-${m(t.id)}" aria-label="${m(Kt(t))}">
        <img src="${m(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function ek(e={}){const t=e.decoration||se().currentDecoration||a.customization?.selected?.decoration||a.customization?.selected?.frame,n=Se(t);return!n||n.type!=="decoration"||!sn(n.id)?null:n}function Wp(e={}){const t=Mn(),n=rk(),s=qe().filter(r=>sn(r.id)).length;return`
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
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${m(Dn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${m(t.categories)}">
          ${tk().map(r=>`
            <button class="${a.shopFilters.category===r.id?"is-active":""}" type="button" data-action="shop-category" data-category="${m(r.id)}">
              ${i(v({ru:r.title_ru,en:r.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${nk().map(r=>`
            <button class="${a.shopFilters.view===r.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${m(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${sk().map(r=>`
            <button class="${a.shopFilters.sort===r.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${m(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(ak).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${of({limit:6})}
        </div>
      </div>
    `}function tk(){return a.customizationCatalog?.categories?.length?a.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function nk(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function sk(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function rk(){const e=a.shopFilters.category||"all",t=a.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=qe().filter(r=>e==="all"||r.type===e);return t==="available"&&(s=s.filter(r=>pg(r)==="available")),t==="owned"&&(s=s.filter(r=>sn(r.id))),t==="new"&&(s=s.filter(r=>!a.customization?.seen?.includes(r.id))),a.shopFilters.sort==="price"&&(s=[...s].sort((r,o)=>r.price-o.price)),a.shopFilters.sort==="rarity"&&(s=[...s].sort((r,o)=>(n[o.rarity]||0)-(n[r.rarity]||0)||r.price-o.price)),s}function ak(e){const t=pg(e),n=Mn(),s=n.status[t]||t,r=ey(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${m(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${m(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${m(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${m(e.type)} is-${m(t)} rarity-${m(e.rarity)}" data-item-id="${m(e.id)}" data-shop-status="${m(t)}">
        <div class="custom-shop-preview">
          <img src="${m(ok(e))}" alt="${m(Kt(e))}" loading="lazy" onerror="this.onerror=null;this.src='assets/logo.webp';this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(lk(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(Kt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${m(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(ik(e))}</p>
          ${e.type==="outfit"&&Xp(e)?`<blockquote class="custom-shop-phrase">${i(Xp(e))}</blockquote>`:""}
          ${r?`<small class="custom-shop-unlock">${i(r)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(ck(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function Mn(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function Kt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function ik(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function ok(e){return e?.preview||e?.asset||"assets/logo.webp"}function Xp(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function lk(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function ck(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function dk(e){Dn();const t=Kn(),n=se(),s=e.bg||nn(),r=Yp(e.spriteId||a.progress.selectedEvaSprite),o=Se(a.customization?.selected?.effect),c=Se(e.decoration||n.currentDecoration),l=pk(e.mood||n.mood),d=jp();return`
      <aside class="eva-autonomy-panel eva-live-status" data-eva-lines="${a.evaAutonomyLines.length}" data-eva-current="${m(n.currentLine?.id||"")}">
        <div>
          <span class="pill">${i(t.badge)}</span>
          <strong>${i(t.status)}</strong>
          <small>${i(t.hint)}</small>
        </div>
        <div class="eva-autonomy-meta">
          <span>${i(t.mood)}: ${i(l)}</span>
          <span>${i(t.quiz)}: ${i(d.correct||0)}/${i(d.answered||0)}</span>
          ${d.streak?`<span>${i(t.quizStreak)}: ${i(d.streak)}</span>`:""}
          <span>${i(v(s.title||{}))}</span>
          <span>${i(v(r?.title||{ru:"Ева",en:"Eva"}))}</span>
          ${c?`<span>${i(Kt(c))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(Kt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${m(o.id)}" aria-label="${m(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function uk(e){const t=Kn(),n=eo();return n?.id?`
        <div class="eva-question-box">
          <span class="pill">${i(t.question)}</span>
          <strong>${i(v(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>`
              <button class="btn ${s.id===n.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${m(s.id)}">
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
    `}function Kn(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function pk(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function gk(){const e=tn(),t=Dn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${m(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([r,o,c])=>`
            <div class="eva-relationship-stat eva-stat-${r}">
              <div><span>${i(o)}</span><strong>${Math.round(c)}</strong></div>
              <i><b style="width:${ce(c,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function Dn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function me(){var t,n,s,r,o,c,l,d,u,f,h,g,$;(t=a.progress).seenCards||(t.seenCards={}),(n=a.progress).seenKanji||(n.seenKanji={}),(s=a.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),a.progress.unlockedBackgrounds.includes("bg_study_hub")||a.progress.unlockedBackgrounds.unshift("bg_study_hub"),(r=a.progress).selectedEvaRoomBackground||(r.selectedEvaRoomBackground="bg_study_hub"),(o=a.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(L=>{a.progress.unlockedEvaSprites.includes(L)||a.progress.unlockedEvaSprites.push(L)}),(c=a.progress).selectedEvaSprite||(c.selectedEvaSprite="idle");const e=dp(lp(),a.progress.evaAutonomy||{});if((l=a.progress).evaAutonomy||(l.evaAutonomy={}),Object.keys(a.progress.evaAutonomy).forEach(L=>delete a.progress.evaAutonomy[L]),Object.assign(a.progress.evaAutonomy,e),a.evaRuntime||(a.evaRuntime=Zt()),(d=a.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=a.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(f=a.progress.evaRoomDialogueProgress).rewardsClaimed||(f.rewardsClaimed={}),(h=a.progress.evaRoomDialogueProgress).visited||(h.visited={}),a.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(a.progress.evaRoomDialogueProgress.lineHistory)?a.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(g=a.progress).evaRoomQuiz||(g.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),($=a.progress.evaRoomQuiz).rewarded||($.rewarded={}),a.progress.evaRoomQuiz.history=Array.isArray(a.progress.evaRoomQuiz.history)?a.progress.evaRoomQuiz.history.slice(0,40):[],!a.progress.evaRelationship)a.progress.evaRelationship=Il();else{const L=cp(Il(),a.progress.evaRelationship);Object.keys(a.progress.evaRelationship).forEach(C=>delete a.progress.evaRelationship[C]),Object.assign(a.progress.evaRelationship,L)}}function tn(){return me(),a.progress.evaRelationship}function sr(){if(!a.progress||!a.cards.length)return!1;me();const e=a.progress.evaRelationship;let t=!1;const n=le(),s=e.lastDecayDate||n,r=Math.max(0,os(s,n));if(r>0){const x=a.progress.streak?.lastStudyDate,z=x?os(x,n):r+1;!x||z>1?(Ce({warmth:-Math.min(10,r*1.2),trust:-Math.min(14,r*1.6),discipline:-Math.min(22,r*3.4)},"study_gap",{silent:!0}),t=!0):(a.progress.streak?.current||0)>0&&(Ce({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=ed(),c={learned:o.learned,mastered:o.mastered,reviews:td(),lessons:Object.keys(a.progress.lessonCompletions||{}).length,streak:Math.max(a.progress.streak?.current||0,a.progress.streak?.best||0),wrong:a.progress.totalWrong||0,writing:a.progress.writingPractice?.completed||0,sentence:Object.keys(a.progress.sentencePractice?.completed||{}).length},l=e.lastKnown||{},d=x=>Math.max(0,Number(c[x]||0)-Number(l[x]||0)),u={},f=d("reviews"),h=d("learned"),g=d("mastered"),$=d("lessons"),L=d("streak"),C=d("wrong"),N=d("writing"),k=d("sentence");return f&&(u.discipline=(u.discipline||0)+Math.min(18,f*.08),u.trust=(u.trust||0)+Math.min(10,f*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),g&&(u.trust=(u.trust||0)+Math.min(16,g*1.2),u.warmth=(u.warmth||0)+Math.min(8,g*.5)),$&&(u.warmth=(u.warmth||0)+Math.min(12,$*2),u.discipline=(u.discipline||0)+Math.min(10,$*1.5)),L&&(u.discipline=(u.discipline||0)+Math.min(15,L*3),u.warmth=(u.warmth||0)+Math.min(8,L)),N&&(u.curiosity=(u.curiosity||0)+Math.min(10,N*.8)),k&&(u.trust=(u.trust||0)+Math.min(10,k*.8)),C&&(u.discipline=(u.discipline||0)-Math.min(6,C*.12)),Object.keys(u).length&&(Ce(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=c,Qp(),t}function Ce(e={},t="relationship",n={}){me();const s=a.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(r=>{typeof e[r]>"u"||(s[r]=Oo(ce(Number(s[r]||0)+Number(e[r]||0),0,100),1))}),Qp(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function Qp(){const e=a.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(a.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function Ji(){const e=a.customization?.selected?.outfit||a.progress?.shop?.equipped?.outfit||null,n=Se(e)?.spriteId||a.progress?.selectedEvaSprite||"idle";return a.evaSprites?.[n]&&Hi(n)?n:"idle"}function mk(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Fn(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=Ji(),r=mk(n),o=n&&!r?n:s,c=a.evaRuntime?.mood||tn().mood,l=t||(r?n:null)||a.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[c]||"idle",d=bk(l),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(g=>fk(g,d)),...u,...d,"idle","default"].filter(Boolean).find(g=>a.evaSprites?.[g]&&(Hi(g)||!o||Hi(o)))||"idle"}function fk(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>a.evaSprites?.[o]),r=ys(n);return!r||r.defaultOwned||s.length<=1?s:hk(s)}function hk(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=rl%t.length;return[...t.slice(n),...t.slice(0,n)]}function vk(){const e=Ji(),t=ys(e);return!t||t.defaultOwned?!1:Object.keys(a.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function wk(){sl&&window.clearInterval(sl),sl=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==rl&&(rl=e,!(document.hidden||!vk())&&(a.route==="home"||a.route==="eva-room")&&P())},3e4)}function bk(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=kk(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function kk(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function se(){return me(),a.progress.evaAutonomy}function Gi(){const e=se();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function qi(){const e=qe().filter(t=>t.type==="background").map(t=>({id:t.id,title:{ru:t.title_ru,en:t.title_en},file:t.asset||t.preview,price:t.price,defaultUnlocked:t.defaultOwned}));return e.length?e:a.evaBackgrounds?.length?a.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}]}function rr(e){return qi().find(t=>t.id===e)||qi()[0]}function nn(){me();const e=Oh({catalogItems:qe(),owned:a.customization?.owned||a.progress.unlockedBackgrounds||[],customizationSelected:a.customization?.selected?.background,progressEquipped:a.progress?.shop?.equipped?.background,progressSelected:a.progress.selectedEvaRoomBackground});return rr(e)||rr("bg_study_hub")}function yk(e){const t=rr(e);return t?t.defaultUnlocked||t.price===0||a.progress.unlockedBackgrounds.includes(t.id):!1}function $k(){const e=qe().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>a.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function Yp(e){return $k().find(t=>t.id===e)}function Hi(e){if(!e)return!1;const t=Yp(e);return!!(t?.defaultUnlocked||t?.price===0||a.progress.unlockedEvaSprites?.includes(e)||a.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function Vi(e){me();const t=a.evaRuntime?.mood||bn(Ke()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],r=qi().filter(c=>yk(c.id));return s.map(c=>r.find(l=>l.id===c)).find(Boolean)||at(r)||nn()}function Wi(e){me();const t=a.evaRuntime?.mood||bn(Ke()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(r=>Hi(r)&&a.evaSprites?.[r])||a.progress.selectedEvaSprite||"idle"}function jk(e){return e==="generated_line"?Sk():a.evaRoomDialogues.find(t=>t.id===e)||a.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function Sk(){me();const e=Dn(),t=a.progress.evaRoomDialogueProgress.generatedLine||cg("adaptive");return a.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||nn().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function Xi(){return Array.isArray(a.evaRoomLines)?a.evaRoomLines:[]}function Ck(e="auto"){const t=a.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function Zp(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function xk(e,t=Ke()){const n=e?.conditions||{},s=(o,c)=>{const l=Zp(c);return!l.length||l.includes(String(o))},r=(o,c)=>{const l=Zp(c);return!l.length||l.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!r(t.activeSkin,n.activeSkin)||!r(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function Nk(e="auto",t=Ke()){return null}function Qi(e,t="auto",n=Ke()){if(!a.evaRuntime||!e?.id)return;a.evaRuntime.memory=$s(wn(),a.evaRuntime.memory||{});const s=a.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const r=e.category||t;s.recentTopics=[r,...(s.recentTopics||[]).filter(o=>o!==r)].slice(0,20),s.lastRoute=n.route||a.route,s.lastInteractionDate=le(),s.lastKnownMood=a.evaRuntime.mood||tn().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function eg(e){if(!a.evaRuntime)return;a.evaRuntime.memory=$s(wn(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory;t.lastRoute=a.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=le()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function Lk(){return{quiet:12e4,normal:ls(45e3,12e4),active:45e3}}function Ak(){nl&&window.clearInterval(nl),nl=window.setInterval(Ik,5e3)}function ar(){const e=se(),t=Lk()[e.frequency]||ls(45e3,12e4);e.nextSpeakAt=Date.now()+t}function Ik(){if(document.hidden||!a.progress||!a.evaRuntime)return!1;const e=Ke(),t=a.evaRuntime,n=se(),s=Date.now();let r=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return be("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=bn(e),c=Yi(e,o);(o!==t.mood||c!==t.emotion)&&(t.mood=o,t.emotion=c,n.mood=o,n.emotion=c,t.lastEmotionChangeAt=s,t.cooldowns.emotion=ls(15e3,3e4),r=!0)}return a.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",ar(),r=!0):sa("timer",{context:e})&&(r=!0)),r&&(js(),A(),a.route==="eva-room"&&P()),r}function Ke(e={}){const t=a.progress?jn():{},n=a.evaRuntime||Zt(),s=$s(wn(),n.memory||{}),r=new Date().getHours();return _l(),{route:a.route,hour:r,timeOfDay:r<5?"late_night":r<11?"morning":r<18?"day":r<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(a.progress?.streak?.current||0),level:Number(a.progress?.level||1),moonFragments:Number(a.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||a.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||a.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-ll,lastEvent:n.lastEvent,dueReviews:a.progress?vt():0,shopOpen:!!a.evaRoomShopOpen,...e}}function bn(e=Ke()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function Yi(e=Ke(),t=bn(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return at(["approve","happy","soft_smile"]);if(n==="answer_wrong")return at(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return at(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return at(s[t]||s.neutral)}function sa(e="auto",t={}){if(!a.progress||!Gi()||!t.force&&a.route!=="eva-room")return!1;const n=se(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const r=t.context||Ke({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=bn(r),c=tg(e)||Ql(e);if(!c)return!1;a.evaRuntime||(a.evaRuntime=Zt()),a.evaRuntime.mood=o;const l=c.emotion||Yi(r,o,e),d=Vi(c),u=Fn(Wi(c),l),f=Yl(c),h=Zl(c),g=ig(r,c);return n.currentLine={id:c.id,category:c.category||"mood",text:c.text,sprite:u,background:d.id,decoration:f,effect:h,emotion:l,state:c.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=g,n.currentDecoration=f,n.currentEffect=h,n.mood=o,n.emotion=l,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[c.id,...(n.recentLineIds||[]).filter($=>$!==c.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=Zt()),Object.assign(a.evaRuntime,{mood:o,emotion:l,presenceState:c.state||"speak",currentPhrase:n.currentLine,pendingQuestion:g,currentSkin:u,currentBackground:d.id,currentDecoration:f,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:g?s:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...a.evaRuntime.cooldowns,emotion:ls(15e3,3e4),phrase:ls(45e3,12e4),question:ls(3*6e4,7*6e4),visual:ls(10*6e4,15*6e4)}}),Qi(c,e,r),ec(u,d.file),ar(),Ce(c.relationshipDelta||{warmth:.1},`eva_autonomy:${c.id}`,{silent:!0}),js(),un(),!0}function tg(e){const t=Nk(e,Ke({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],r=new Set(se().recentLineIds||[]),o=s.filter(l=>!r.has(`${e}_${Fe(`${l.ru||l.en}`)}`)),c=at(o.length?o:s);return c?{id:`${e}_${Fe(`${c.ru||c.en}`)}`,category:e,text:c,relationshipDelta:{}}:null}function ng(){const e=se(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function Tk(e="auto"){const t=tn(),n=new Date().getHours(),s=vt(),r=jn(),o=[];return o.push(...Ck(e)),(e==="return"||!t.lastInteractionDate&&a.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(r.reviews||0)===0&&o.push("fis_study","study"),(a.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(a.progress.rewardHistory?.length||a.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function Ql(e="auto"){me(),sr();const t=tn(),n=Ke({lastEvent:{type:e}}),s=se().currentLine?.id,r=new Set([s,...se().recentLineIds||[],...a.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(a.evaAutonomyLines)?a.evaAutonomyLines:[],c=Tk(e),l=(u,f=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!f&&r.has(h.id)||!dg(h,t)||!xk(h,n))return!1;const $=Array.isArray(h.moods)?h.moods:[];return!$.length||$.includes(t.mood)});for(const u of c){const f=l(u);if(f.length)return at(f)}for(const u of c){const f=l(u,!0);if(f.length)return at(f)}const d=o.filter(u=>!r.has(u.id));return at(d.length?d:o)}function be(e,t={},n={}){if(!e)return;la(),n.skipAchievements||Q({silent:!0});const s={type:rg(e),payload:t||{},at:Date.now()};sg(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:be});function sg(e={}){if(!e.type||!a.progress)return;me(),a.evaRuntime||(a.evaRuntime=Zt());const t={type:rg(e.type),payload:e.payload||{},at:e.at||Date.now()};a.evaRuntime.lastEvent=t,a.evaRuntime.eventHistory=[t,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[t,...a.evaRuntime.recentEvents||[]].slice(0,80),eg(t),["timer","idle_timeout"].includes(t.type)||(a.evaRuntime.lastPlayerActionAt=Date.now());const n=Rk(t.type,t.payload);Object.keys(n).length&&Ce(n,`eva_event:${t.type}`,{silent:!0});const s=se();ng(),s.nextSpeakAt=0;const r=sa(t.type,{force:!0,eventPayload:t.payload});js(),A(),r&&a.route==="eva-room"&&P()}function rg(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function Rk(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function Yl(e){const t=a.evaRuntime?.mood||bn(Ke()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return ag("decoration",s)}function Zl(e){const t=a.evaRuntime?.mood||bn(Ke()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return ag("effect",s)||"none"}function ag(e,t=[]){const n=qe().filter(r=>r.type===e&&sn(r.id));return(t.map(r=>n.find(o=>o.id===r)).find(Boolean)||at(n))?.id||null}function ig(e=Ke(),t=null){const n=se();if(n.currentQuestion?.id)return n.currentQuestion;if(a.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=a.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",r=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),c=Number(a.evaRuntime?.lastQuestionAt||a.evaRuntime?.lastQuestion?.at||0),l=Number(a.evaRuntime?.cooldowns?.question||ls(3*6e4,7*6e4));if(!r&&o-c<l||!r&&Math.random()>.34)return null;const d=new Set(a.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=og(s).filter(h=>!d.has(h.id)),f=at(u.length?u:og(s));return f?{...f,at:new Date().toISOString()}:null}function og(e="auto"){const t=Xw();if(t.length<2)return[];const n=new Set((a.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${le()}:${e}:${a.progress?.totalCorrect||0}:${a.progress?.totalWrong||0}`;return[...t].sort((o,c)=>{const l=n.has(String(o.id))?1:0,d=n.has(String(c.id))?1:0;return l-d||Fe(`${s}:${o.id}`)-Fe(`${s}:${c.id}`)}).slice(0,18).map(o=>_k(o,t,e)).filter(Boolean)}function _k(e,t,n="auto"){const s=We(e,"ru"),r=We(e,"en");if(!s||!r)return null;const o=Pk(e,t);if(!o.length)return null;const c=String(e.jlpt||"").toUpperCase(),l=c||(p()==="ru"?"твоих карточек":"your cards"),d=lg(e,e,!0),u=[d,...o.map(f=>lg(f,e,!1))].sort((f,h)=>Fe(`${n}:${e.id}:${f.id}`)-Fe(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Fe(`${s}:${r}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:c,answerId:d.id,answerText:{ru:s,en:r},text:{ru:`Что значит кандзи ${e.kanji} из ${l}?`,en:`What does the ${l} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function Pk(e,t){const n=Zi(We(e,"ru")),s=Zi(We(e,"en")),r=String(e.jlpt||"").toUpperCase(),c=[...t.filter(l=>{if(!l?.id||String(l.id)===String(e.id)||l.kanji===e.kanji)return!1;const d=Zi(We(l,"ru")),u=Zi(We(l,"en"));return!(!d||!u||d===n||u===s)})].sort((l,d)=>{const u=String(l.jlpt||"").toUpperCase()===r?0:1,f=String(d.jlpt||"").toUpperCase()===r?0:1;return u-f||Fe(`${e.id}:${l.id}`)-Fe(`${e.id}:${d.id}`)});return c.slice(0,Math.min(3,c.length))}function lg(e,t,n){const s=We(e,"ru"),r=We(e,"en"),o=We(t,"ru"),c=We(t,"en");return{id:`meaning_${Fe(`${t.id}:${e.id}:${s}:${r}`)}`,cardId:String(e.id),text:{ru:s,en:r},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${c}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${c}.`}}}function Zi(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function Ek(e){me();const t=eo();t?.id&&Mk(t.id,e.dataset.option)}function Mk(e,t){me();const n=se(),s=eo();if(!s?.id||s.id!==e)return;const r=s.options?.find(h=>h.id===t);if(!r)return;const c=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(r.correct||r.id===s.answerId):null;a.evaRuntime||(a.evaRuntime=Zt()),a.evaRuntime.pendingQuestion=null,n.currentQuestion=null,Ce(r.delta||(c===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&Dk(s,r,c);const l={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:r.id,correct:c,at:new Date().toISOString()};a.evaRuntime.lastQuestion={...l,at:Date.now()},a.evaRuntime.lastQuestionAt=Date.now(),a.evaRuntime.pendingQuestion=null,a.evaRuntime.questionHistory=[l,...a.evaRuntime.questionHistory||[]].slice(0,40);const d=Vi({}),u=c===!1?"thinking":"approve",f=Fn(Wi({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${r.id}`,category:"question_reply",text:r.reply||Kk(s,c),sprite:f,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},a.evaRuntime.presenceState="react",a.evaRuntime.textRevealSkippedLineId=null,Qi(n.currentLine,"question_answer",Ke({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=f,ar(),zk(s,r,c),js(),A(),D(c===!1?"answer_wrong":c===!0?"answer_correct":"notification_soft"),P()}function eo(){const e=se(),t=e.currentQuestion?.id?e.currentQuestion:a.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,a.evaRuntime||(a.evaRuntime=Zt()),a.evaRuntime.pendingQuestion=t,t):null}function Kk(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||v(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||v(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||v(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||v(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function Dk(e,t,n){const s=jp(),r=Fk(e);r&&Xr(r,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:v(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=jn();o.reviews=Number(o.reviews||0)+1,n?(a.progress.totalCorrect=Number(a.progress.totalCorrect||0)+1,r&&Ok(r),r&&!s.rewarded[String(r.id)]&&(s.rewarded[String(r.id)]=new Date().toISOString(),q(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${r.id}`))):(a.progress.totalWrong=Number(a.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,r&&Bk(r)),o.minutes=Oo(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),a.progress.daily[le()]=o,ke(),Hc({silent:!0}),Q()}function Fk(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?ie(t):null)||Sp().find(r=>{if(!r)return!1;const o=t&&String(r.id)===t,c=n&&r.kanji===n,l=!s||String(r.jlpt||"").toUpperCase()===s;return o||c&&l})||(n?a.cards.find(r=>r.kanji===n):null)||null}function Ok(e){const t=String(e?.jlpt||"").toUpperCase(),n=Bl().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function Bk(e){const t=String(e?.jlpt||"").toUpperCase(),n=Bl().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function zk(e,t,n){if(!a.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};a.evaRuntime.lastEvent=s,a.evaRuntime.eventHistory=[s,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[s,...a.evaRuntime.recentEvents||[]].slice(0,80),eg(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Uk(){me(),Gi()&&sa("render");const e=ug();let t=se().currentLine;if(Gi()&&!t?.text&&a.evaAutonomyLines.length){const r=Ql("render_fallback")||a.evaAutonomyLines[0],o=Vi(r),c=Ke({lastEvent:{type:"render_fallback"}}),l=bn(c),d=Yl(r),u=Zl(r),f=r.emotion||Yi(c,l,"render_fallback"),h=Fn(Wi(r),f);t={id:r.id,category:r.category||"mood",text:r.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:f,state:r.state||"observe",at:new Date().toISOString()},se().currentLine=t,se().currentDecoration=d,se().currentEffect=u,se().mood=l,se().emotion=f,se().lastSpokeAt=t.at,se().lastRoomId=o.id,se().lastSprite=h,a.evaRuntime.presenceState=t.state,a.evaRuntime.textRevealSkippedLineId=null,Qi(r,"render_fallback",c),ec(h,o.file),ar(),A()}if(Gi()&&t?.text){const r=rr(t.background)||nn(),o=Fn(t.sprite||"relationship",t.emotion||se().emotion);return{isAutonomy:!0,line:t,bg:r,spriteId:o,sprite:ir(o),decoration:t.decoration||se().currentDecoration,effect:t.effect||se().currentEffect,mood:se().mood||tn().mood,emotion:t.emotion||se().emotion||"calm",node:{id:"eva_autonomy_line",background:r.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=rr(e.background)||nn(),s=Fn(e.sprite,se().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:ir(s),decoration:se().currentDecoration,effect:se().currentEffect,mood:tn().mood,emotion:se().emotion||"calm",node:e}}function cg(e="adaptive"){me(),sr();const t=tn(),n=new Set(a.progress.evaRoomDialogueProgress.lineHistory||[]),s=Xi().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!dg(d,t)?!1:!n.has(d.id)}),r=Xi().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:r.length?r:Xi(),c=at(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:nn().id},l=a.progress.evaRoomDialogueProgress.lineHistory||[];return a.progress.evaRoomDialogueProgress.lineHistory=[c.id,...l.filter(d=>d!==c.id)].slice(0,24),{id:c.id,category:c.category||e,text:c.text||{ru:String(c.ru||""),en:String(c.en||c.ru||"")},sprite:c.sprite||"relationship",background:c.background||nn().id,relationshipDelta:c.relationshipDelta||{}}}function dg(e,t){return[["minWarmth",t.warmth,(s,r)=>s>=r],["maxWarmth",t.warmth,(s,r)=>s<=r],["minTrust",t.trust,(s,r)=>s>=r],["maxTrust",t.trust,(s,r)=>s<=r],["minDiscipline",t.discipline,(s,r)=>s>=r],["maxDiscipline",t.discipline,(s,r)=>s<=r],["minCuriosity",t.curiosity,(s,r)=>s>=r],["maxCuriosity",t.curiosity,(s,r)=>s<=r]].every(([s,r,o])=>typeof e[s]>"u"||o(r,Number(e[s])))}function ug(){me();const e=jk(a.progress.evaRoomDialogueProgress.currentNode);return a.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function ir(e){return a.evaSprites?.[e]||a.evaSprites?.default||"assets/mascots/eva_normal.webp"}function ec(e,t=""){[ir(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Jk(e){const n=ug().choices?.[Number(e.dataset.index||0)];if(!n)return;me();const s=a.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=le(),Gk(n),Ce(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const r=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(r>0&&o&&!a.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(a.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),q(0,r,`eva_room:${o}`),J(Dn().reward)),n.randomLine){const c=cg(n.randomLine);Ce(c.relationshipDelta||{},`eva_line:${c.id}`,{silent:!0}),a.progress.evaRoomDialogueProgress.generatedLine=c,a.progress.evaRoomDialogueProgress.currentNode="generated_line"}else a.progress.evaRoomDialogueProgress.generatedLine=null,a.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(a.evaRoomShopOpen=!0),A(),n.route){Zr(n.route);return}D(n.openShop?"menu_open":"page_turn"),P()}function Gk(e={}){if(!a.evaRuntime)return;a.evaRuntime.memory=$s(wn(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=le(),t.lastRoute=a.route}function qk(){me(),a.progress.evaRoomDialogueProgress.currentNode="intro",a.progress.evaRoomDialogueProgress.generatedLine=null,a.evaRuntime&&(a.evaRuntime.presenceState="wait_choice",a.evaRuntime.textRevealSkippedLineId=null),A(),D("page_turn"),P()}function Hk(e){to(e)}function Vk(e){no(e)}function Wk(e){const t=Se(e)||ks(e)||ys(e);t&&to(t.id)}function Xk(e){const t=Se(e)||ks(e)||ys(e);t&&no(t.id)}function sn(e){a.customization||bs();const t=Se(e)||ks(e);return!!(t?.defaultOwned||t?.price===0||a.customization?.owned?.includes(t?.id||e))}function tc(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Qk(e){const t=tc(e);return!!(t&&a.customization?.selected?.[t]===e.id)}function pg(e){return!e||!nc(e)?"locked":Qk(e)?"selected":sn(e.id)?"owned":"available"}function Yk(e={}){const t=[a.customization?.selected?.effect,e.effect,a.evaRuntime?.currentEffect,a.evaRuntime?.currentLine?.effect,a.progress?.evaAutonomy?.currentEffect,se().currentEffect];for(const n of t){const s=Tn(n);if(!s||s==="none")continue;const r=Se(s);if(r?.type==="effect"&&sn(r.id))return r.id}return null}function gg(e=null){const t=Tn(e||a.customization?.selected?.effect),n=Se(t);return!n||n.type!=="effect"||a.customization?.selected?.effect!==n.id?!1:(a.customization.selected.effect=null,a.progress?.evaAutonomy&&(a.progress.evaAutonomy.currentEffect=null),a.evaRuntime?.currentEffect===n.id&&(a.evaRuntime.currentEffect="none"),Hr(),Ys(),A(),un(),D("menu_close"),J(p()==="ru"?"Эффект убран.":"Effect removed."),P(),!0)}function Zk(e=null){const t=Tn(e||a.customization?.selected?.effect||a.customization?.selected?.decoration||a.customization?.selected?.frame||a.customization?.selected?.outfit||a.customization?.selected?.background||a.customization?.selected?.theme),n=Se(t);if(!n)return!1;if(n.type==="effect")return gg(n.id);a.customization||bs();const s=tc(n);if(!s)return!1;const r=In().selected;return s==="background"?a.customization.selected.background=r.background:s==="outfit"?a.customization.selected.outfit=r.outfit:s==="theme"?a.customization.selected.theme=r.theme:s==="decoration"&&(a.customization.selected.decoration=r.decoration,a.customization.selected.frame=r.frame),Hr(),Ys(),A(),un(),D("menu_close"),J(p()==="ru"?"Выбор сброшен.":"Selection cleared."),P(),!0}function ey(e){if(!e?.unlockCondition||nc(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=Ks().find(o=>o.id===t.id),r=s?zc(s):t.id;return n?`Открывается за достижение: ${r}`:`Unlocks after achievement: ${r}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function nc(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?a.progress.level>=Number(t.value||0):t.type==="streak"?a.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!a.progress.achievements?.[t.id]?.unlockedAt:!0}function to(e){const t=Se(e);if(!t||(a.customization||bs(),Yo.has(t.id)))return;if(!nc(t)){D("purchase_failed"),J(Mn().locked);return}if(Yo.add(t.id),window.setTimeout(()=>Yo.delete(t.id),0),sn(t.id)){no(t.id);return}const n=sI({balance:a.progress.moonFragments,owned:a.customization?.owned||[],itemId:t.id,price:t.price});if(a.progress.moonFragments=n.balance,n.status==="insufficient-funds"){D("purchase_failed"),J(Mn().notEnough),A(),P();return}if(n.status!=="purchased"){D("purchase_failed"),J(Mn().unavailable),A(),P();return}a.customization.owned=n.owned,a.customization.seen=[...new Set([...a.customization.seen||[],t.id])],a.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:Kt(t),xp:0,coins:-n.price,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80),Hr(),Ys(),A(),D("purchase_success"),D("item_unlock"),be("item_bought",{itemId:t.id,type:t.type,title:Kt(t),price:t.price},{skipAchievements:!0}),J(Mn().bought.replace("{item}",Kt(t))),P()}function no(e){var s;const t=Se(e);if(a.customization||bs(),!t||!sn(t.id))return;const n=tc(t);n&&(a.customization.selected[n]=t.id,n==="decoration"&&(a.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(a.progress.selectedEvaSprite=t.spriteId,a.progress.evaAutonomy.currentLine=null),t.type==="background"&&(a.progress.selectedEvaRoomBackground=t.id,a.evaRuntime&&(a.evaRuntime.currentBackground=t.id,a.evaRuntime.activeBackground=t.id,(s=a.evaRuntime).memory||(s.memory=wn()),a.evaRuntime.memory.preferredEvaRoomBackground=t.id),a.progress.evaAutonomy.currentLine=null),Hr(),Ys(),A(),un(),D("notification_soft"),be("item_equipped",{itemId:t.id,type:t.type,title:Kt(t)},{skipAchievements:!0}),J(Mn().selectedToast.replace("{item}",Kt(t))),P())}function ty(){const e=se();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,sa("toggle",{force:!0}),A(),D("notification_soft"),J(Kn().status),P()}function ny(){const e=se();e.frequency="normal",ar(),A(),D("notification_soft"),P()}function sy(){const e=se();e.roomMode="auto",e.currentLine=null,A(),D("notification_soft"),P()}function ry(){const e=se();e.outfitMode="auto",e.currentLine=null,A(),D("notification_soft"),P()}function mg(){const e=se();e.enabled=!0,ng(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,fg("manual"),A(),D("page_turn"),P()}function fg(e="manual",t={}){const n=tg(e)||Ql(e);if(!n)return!1;const s=Ke({lastEvent:{type:e}}),r=bn(s),o=n.emotion||Yi(s,r,e),c=Vi(n),l=Fn(Wi(n),o),d=Yl(n),u=Zl(n),f=se(),h=Date.now(),g=t.allowQuestion===!1?null:ig(s,n);return f.currentLine={id:n.id,category:n.category||e,text:n.text,sprite:l,background:c.id,decoration:d,effect:u,emotion:o,state:n.state||"speak",at:new Date(h).toISOString(),reason:e},f.currentDecoration=d,f.currentEffect=u,f.mood=r,f.emotion=o,f.lastSpokeAt=f.currentLine.at,f.lastRoomId=c.id,f.lastSprite=l,f.currentQuestion=g,f.recentLineIds=[n.id,...(f.recentLineIds||[]).filter($=>$!==n.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=Zt()),Object.assign(a.evaRuntime,{mood:r,emotion:o,presenceState:n.state||"speak",currentPhrase:f.currentLine,pendingQuestion:g,currentSkin:l,currentBackground:c.id,currentDecoration:d,currentEffect:u,activeSkin:l,activeBackground:c.id,lastPhraseAt:h,lastEmotionChangeAt:h,lastQuestionAt:g?h:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:h,textRevealSkippedLineId:null}),Qi(n,e,s),ec(l,c.file),ar(),js(),un(),!0}function ay(){se().currentLine=null,A(),D("menu_close"),P()}function M(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${ce(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function iy(e){const t=nd(e.id),n=t.filter(d=>O(d.id).state!=="New").length,s=t.filter(d=>O(d.id).state==="Mastered").length,r=!Ve(e),o=th(e),c=r?"鎖":t[0]?.kanji||"文",l=E(s,t.length);return`
      <button class="lesson-tile ${r?"is-locked":""} ${cd(o)}" type="button" id="textbook-lesson-${m(e.id)}" data-action="start-lesson" data-id="${m(e.id)}">
        <span class="lesson-glyph">${i(c)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${KN(o)}
          <h3>${i(Ua(e))}</h3>
          <p>${i(IL(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(R("mastered"))}</span>
            ${r?`<span class="pill danger-pill">${i(R("unlockedAt"))} ${Lo(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${l}%"></i></span>
        </span>
      </button>
    `}function oy(e){const t=th(e),n=e.id===a.activeLessonId,s=!Ve(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${cd(t)}" type="button" data-action="select-lesson" data-id="${m(e.id)}" title="${m(dd(t))}">
        <span>${i(e.jlpt)}</span>
        ${MN(t)}
      </button>
    `}function sc(){const e=String(a.activeLearnJlpt||"all").toUpperCase();return a.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function ly(){const e=sc();return e.find(t=>t.id===a.activeLessonId)||e.find(t=>Ve(t))||e[0]||a.lessons.find(t=>t.id===a.activeLessonId)||a.lessons.find(t=>Ve(t))||a.lessons[0]||null}function rc(){return F(ly()?.jlpt)||dn()}function hg(e){if(!e.length)return a.activeLessonId=null,null;const t=e.find(r=>r.id===a.activeLessonId);if(t&&Ve(t))return t;const s=e.find(r=>Ve(r))||e[0];return a.activeLessonId=s?.id||null,s||null}function cy(e){const t=e.length,n=e.filter(r=>Ve(r)).length,s=["all",...Re];return`
      <div class="jlpt-filter-bar" role="tablist" aria-label="${m(p()==="ru"?"Фильтр уровней JLPT":"JLPT level filter")}">
        ${s.map(r=>{const o=String(a.activeLearnJlpt||"all").toLowerCase()===String(r).toLowerCase(),c=r==="all"?p()==="ru"?"Все":"All":r,l=r==="all"?t:a.lessons.filter(d=>d.jlpt===r).length;return`
            <button class="btn jlpt-filter-chip ${o?"primary":"ghost"}" type="button" role="tab" aria-selected="${o?"true":"false"}" data-action="set-learn-jlpt" data-jlpt="${m(r)}">
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
    `}function dy(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${m(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <span class="pill">${i(t.jlpt||"")}</span>
        </div>
        <div class="learn-level-copy">
          <h3>${i(v(t.displayTitle||t.title||{}))}</h3>
          <p>${i(v(t.description||{}))}</p>
          <div class="tag-row">
            <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
            <span class="pill">${i(t.kanjiCount||0)} ${i(R("cardsToday"))}</span>
            <span class="pill">${i(v(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${m(t.pdfUrl||t.pdfFile||"")}" download="${m((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function uy(e){const t=Lt(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Ua(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${Lo(e)}.`:`Unlocks at level ${Lo(e)}.`)}</p>
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
    `}function py(){return a.activeLearnView===fn?ky():a.activeLearnView===Wt?by():bg()}function gy(){const e=wp();if(e.kind==="review"){Pn("review");return}if(a.route==="home"){Yr(rc());return}vg(e.nodeId)}function vg(e){const t=Ss(e);if(!t){Cs();return}if(vp(t)==="locked"){J(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===Hs){Pn("review");return}if(t.id===Vs){ga("final-test");return}if(t.type==="textbook"){ga(t.id);return}Cs(Wt,t.id)}function wg(e){const t=String(e||"");return t&&(ie(t)||a.cards.find(n=>String(n.id)===t))||null}function my(){const e=ge();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function ra(e){const t=Ft(e);if(!t)return null;const n=rn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],r=n.map((o,c)=>{const l=Bt(o)[0]||null,d=s[c%Math.max(s.length,1)]||s[0]||null,u=l?{jp:l.word||o.kanji,hiragana:l.reading||o.hiragana||"",translation:l.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:Y(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:K(o),en:K(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:r,exercises:Ts(t),source:"learning_path"}}function fy(e){if(e===_e)return my();const t=a.learningPathLessonPayloads[e]||ra(e);if(!t)return[];const n=ge(),s=[],r=(t.objectives||[]).map(v).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:v(t.title),text:v(t.summary),note:r||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,c)=>{const l=wg(o.cardId);if(!l)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${c+1}`,kind:"kanji",eyebrow:l.jlpt||"N5",title:`${l.kanji} · ${K(l)}`,text:x$(l,{word:d?.jp||l.kanji,reading:d?.hiragana||l.hiragana||""}),note:d?.translation?v(d.translation):"",cardId:l.id,card:l,sentence:d})}),(t.exercises||[]).forEach(o=>{const c=(o.options||[]).map(l=>({value:String(l.value??l.id??l.label??l),label:v(l.label||l.text||l)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:v(o.prompt),text:v(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:c})}),s}function hy(e,t=null){const n=fy(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),r=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return r.length?r:n.filter(o=>o.kind==="quiz")}function vy(e,t=Wt,n=[]){const s=_n(),r=s.activeSession,o=n.map(String).filter(Boolean);return r?.nodeId===e&&r.mode===t&&JSON.stringify(r.reviewStepIds||[])===JSON.stringify(o)?r:(s.activeSession=jl({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,A(),s.activeSession)}function aa(e){const t=Kl(),n=t?.nodeId===e?t:vy(e),s=hy(e,n),r=s.filter(l=>l.kind==="quiz"),o=Object.keys(n.answers||{}).length,c=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:r,answeredCount:o,stepIndex:c,currentStep:s[c]||null,isResult:c>=s.length&&s.length>0}}function wy(e,t,n){var l;const s=_n(),r=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),c=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((l=s.completedNodes)[e]||(l[e]=r),s.resultHistory[e]={completedAt:r,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===_e&&q(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=Ft(e),u=a.learningPathLessonPayloads[e]||ra(e),f=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(g=>g.cardId),...rn(d).map(g=>g.id)].map(String).filter(Boolean))],h=ne();if(f.forEach(g=>{const $=wg(g);if(!$)return;Xr($,"learning_path"),er(h,$.kanji);const L=ae(O($.id));L.state==="New"&&(a.progress.cards[$.id]=ye(L,c?"hard":"good"))}),d){$e.add(`n5:${d.id}`),h.completedLessons[d.id]=r,h.currentLessonId=Ze().find(L=>L.order===d.order+1)?.id||d.id,a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[d.id]=r,A({immediate:!0}),ao()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],a.progress.unlockedJlptLevels.includes("N5")||a.progress.unlockedJlptLevels.push("N5"),a.progress.unlockedJlptLevels.includes("N4")||a.progress.unlockedJlptLevels.push("N4"));const g=a.n5Meta?.rewards?.lessonCompleteXp||45,$=a.n5Meta?.rewards?.lessonCompleteMoon||6;q(g,$,`learning_path:${e}`),ht({title:`${Ye().lessonComplete}: ${v(d.title)}`,message:Ye().lessonCompleteText,xp:g,coins:$,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),be("lesson_complete",{lessonId:e,jlpt:"N5"})}}Di(),ke(),Q(),A()}function bg(){a.n5Textbook?.items?.length||Ml();const e=ge(),t=hp(),n=wp(),s=Ss(tr()),r=xn();return`
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
            <h2>${i(fp(tr()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(ge().reviewQueue)} · ${i(vt())}</span>
            <span class="pill">${i(ge().streak)} · ${i(a.progress.streak.current)}</span>
            <span class="pill">${i(ge().xp)} · ${i(r.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,c)=>{const l=vp(o),d=l==="locked",u=v(o.summary)||"",f=o.id===Hs?e.reviewAction:o.id===Vs?e.openCheckpoint:o.type==="textbook"?e.openTextbook:l==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${m(l)} is-${m(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${m(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${c+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(Iw(l))}</span>
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
    `}function by(){const e=a.activeLearnNodeId||tr(),t=Ss(e),n=ge();if(!t)return bg();if(t.id!==_e&&t.type==="lesson"&&!a.n5Textbook?.items?.length)return Ml(),`
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
      `;t.type==="lesson"&&jw(e);const s=aa(e),{session:r,steps:o,quizSteps:c,currentStep:l,isResult:d}=s;if(!o.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(v(t.title))}</h1>
                <p>${i(v(t.summary)||n.mapHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-node" data-node="${m(t.id)}">${i(t.type==="textbook"?n.openTextbook:n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;const u=o.length,f=u?E(Math.min(r.stepIndex,u),u):0,h=r.answers?.[l?.id||""]||null,g=h?.selected||"",$=!!h?.correct,L=c.length?Math.round(Number(r.score||0)/Math.max(c.length,1)*100):100;return d?`
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
              <strong>${i(L)}%</strong>
              <div class="meter"><i style="width:${L}%"></i></div>
            </div>
            <div class="lesson-result-panel">
              <article class="home-summary-card">
                <span>${i(n.score)}</span>
                <strong>${i(`${r.score}/${Math.max(c.length,1)}`)}</strong>
              </article>
              <article class="home-summary-card">
                <span>${i(n.mistakes)}</span>
                <strong>${i(r.mistakes.length)}</strong>
              </article>
            </div>
            <div class="lesson-player-actions">
              ${r.mistakes.length?`<button class="btn ghost" type="button" data-action="learning-path-retry" data-node="${m(e)}">${i(n.retryMistakes)}</button>`:""}
              <button class="btn primary" type="button" data-action="learning-path-continue" data-node="${m(e)}">${i(n.continuePath)}</button>
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
            <strong>${i(l.eyebrow||t.level||"N5")}</strong>
            <div class="meter"><i style="width:${f}%"></i></div>
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
                    <span class="pill">${i(K(l.card))}</span>
                    ${l.card.hiragana?`<span class="pill">${i(Y(l.card.hiragana))}</span>`:""}
                    ${l.card.onyomi?`<span class="pill">${i(Y(l.card.onyomi))}</span>`:""}
                  </div>
                  ${l.sentence?`
                    <div class="lesson-player-sentence">
                      <strong>${i(l.sentence.jp||"")}</strong>
                      <p>${i(l.sentence.hiragana||"")}</p>
                      <small>${i(v(l.sentence.translation||{}))}</small>
                    </div>
                  `:""}
                </div>
              </div>
            `:l.kind==="quiz"?`
              <p>${i(l.text||"")}</p>
              <div class="lesson-choice-grid">
                ${(l.options||[]).map(C=>{const N=g===C.value,k=C.value===l.answer;return`<button class="btn ${N?$?"success":"danger":h&&k?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${m(e)}" data-step="${m(l.id)}" data-value="${m(C.value)}">${i(C.label)}</button>`}).join("")}
              </div>
              ${h?`<p class="lesson-player-feedback ${$?"is-good":"is-warning"}">${i($?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(l.options||[]).find(C=>C.value===l.answer)?.label||l.answer}`)}</p>`:""}
            `:`
              <p>${i(l.text||"")}</p>
              ${l.note?`<small>${i(l.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${m(e)}" ${l.kind==="quiz"&&!h?'disabled aria-disabled="true"':""}>${i(r.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function ky(){const e=sc(),t=hg(e),n=!!(t&&Ve(t)),s=n?tN(t.id):[];(!a.activeCardId||!s.some(c=>c.id===a.activeCardId))&&(a.activeCardId=s[0]?.id||null);const r=n&&a.activeCardId?ie(a.activeCardId):null,o=a.activeLearnJlpt!=="all"?Lt(a.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(R("learn"))}</h1>
            <p>${i(t?Ua(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${cy(e)}
        ${o?dy(o):""}
        <div class="actions lesson-tabs">
          ${e.map(oy).join("")}
        </div>
        <div class="study-layout">
          ${n?r?Ym(r):PC(t):uy(t)}
          ${n?Pc(r,s.length):Pc(null,0)}
        </div>
      </section>
    `}function yy(){const e=Sn(a.activeJlptLesson)||Sn(ie(a.activeCardId)?.jlpt)||a.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(R("learn"))}</button>
          </article>
        </section>
      `;a.activeJlptLesson=e.jlpt;const t=Lt(e.jlpt);if(!At(e.jlpt))return kg(t||e);const n=ah(e.jlpt),s=n.filter(c=>O(c.id).state==="Mastered").length,r=n.filter(c=>O(c.id).state!=="New").length,o={...md(),...gd()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(v(e.title))}</h1>
            <p>${i(v(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${m(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${rs("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${m(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${a.jlptLessons.map(c=>{const l=At(c.jlpt),d=c.jlpt===e.jlpt,u=m(Cn(c.jlpt));return l?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(c.jlpt)}">${i(c.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(c.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${m(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
            <div class="jlpt-textbook-body">
              <span class="pill">${i(t.jlpt)}</span>
              <h2>${i(v(t.displayTitle||t.title||{}))}</h2>
              <p>${i(v(t.description||{}))}</p>
              <div class="tag-row">
                <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                <span class="pill">${i(t.kanjiCount||0)} ${i(R("cardsToday"))}</span>
                <span class="pill">${i(v(t.goal||{}))}</span>
                <span class="pill">${i(v(t.recommendedCycle||{}))}</span>
              </div>
              <div class="actions">
                <a class="btn primary" href="${m(t.pdfUrl||t.pdfFile||"")}" download="${m((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
                <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(e.jlpt)}">${i(p()==="ru"?"К уроку":"Go to lesson")}</button>
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
            ${M(o.available,n.length,e.jlpt,E(n.length,Math.max(a.cards.length,1)))}
            ${M(o.learned,r,`${s} ${o.mastered}`,E(r,Math.max(n.length,1)))}
          </div>
        </article>
        ${Om(e)}
        <div class="jlpt-section-grid">
          ${e.goals.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.goals)}</h3>
              <ul>${e.goals.map(c=>`<li>${i(v(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.sections.map(c=>`
            <article class="jlpt-section-card">
              <h3>${i(v(c.title))}</h3>
              <p>${i(v(c.body))}</p>
              ${Array.isArray(c.points)&&c.points.length?`<ul>${c.points.map(l=>`<li>${i(v(l))}</li>`).join("")}</ul>`:""}
            </article>
          `).join("")}
          ${e.practice.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.practice)}</h3>
              <ul>${e.practice.map(c=>`<li>${i(v(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.checkpoint.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.checkpoint)}</h3>
              <ul>${e.checkpoint.map(c=>`<li>${i(v(c))}</li>`).join("")}</ul>
            </article>
          `:""}
        </div>
      </section>
    `}function $y(){const e=a.jlptCatalog?.items||[],t=String(a.activeTextbookLevel||"");if(ve(t))return Cy(t);const n=t.toUpperCase(),s=n?Lt(n):null;if(s)return a.activeTextbookLevel=s.jlpt,a.activeJlptLesson=s.jlpt,jy(s);if(n&&!a.bootAncillaryLoaded)return dl({hadPriorVisit:Jl(a.progress)}).catch(c=>console.warn("Boot ancillary data failed to load.",c)),ac({title:{ru:n,en:n}},n);const r=p()==="ru"?{title:"Учебники Flash Kanji",description:"Выберите азбуку для старта с нуля или продолжайте учебники JLPT N5–N1.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам",kanaBadge:"Курс на русском",kanaMeta:"знаков",kanaTasks:"заданий"}:{title:"Flash Kanji Textbooks",description:"Choose a kana course from zero or continue JLPT N5-N1 textbooks.",open:"Open page",pdf:"Download PDF",study:"Go to lessons",kanaBadge:"Russian course",kanaMeta:"characters",kanaTasks:"tasks"},o=(a.kanaCatalog?.courses||[]).map(c=>`
            <article class="textbook-card kana-textbook-card is-unlocked" id="textbook-${m(c.slug)}">
              <div class="textbook-cover-wrap kana-cover-wrap">
                <div class="kana-cover-symbol" aria-hidden="true">${i(c.native_title)}</div>
                <span class="pill textbook-level">${i(r.kanaBadge)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(c.title)}</h2>
                <p>${i(c.description)}</p>
                <div class="textbook-meta">
                  <span class="pill">${i(c.lesson_count)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(c.base_character_count)} ${i(r.kanaMeta)}</span>
                  <span class="pill">${i(c.task_count)} ${i(r.kanaTasks)}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${m(c.slug)}">${i(r.open)}</a>
                  <a class="btn ghost" href="${m(c.pdf_url)}" download="${m((c.pdf_url||"").split("/").pop()||`${c.slug}.pdf`)}" target="_blank" rel="noopener" data-action="kana-download-pdf" data-course="${m(c.slug)}">${i(r.pdf)}</a>
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
            ${rs("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${m(dn())}">${i(r.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${o}
          ${e.map(c=>`
            <article class="textbook-card ${At(c.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${m(c.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${m(c.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(c.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(v(c.displayTitle||c.title||{}))}</h2>
                <p>${i(v(c.description||{}))}</p>
                ${At(c.jlpt)?"":`<p class="textbook-lock-note">${i(Cn(c.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(c.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(c.kanjiCount||0)} ${i(R("cardsToday"))}</span>
                  <span class="pill">${i(v(c.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${m(c.jlpt)}">${i(r.open)}</a>
                  ${At(c.jlpt)?`<a class="btn ghost" href="${m(c.pdfUrl||c.pdfFile||"")}" download="${m((c.pdfFile||c.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(r.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${m(Cn(c.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${At(c.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(c.jlpt)}">${i(r.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${m(Cn(c.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function kg(e){const t=String(e?.jlpt||"").toUpperCase(),n=ud(t),s=n.map(o=>`<a class="pill" href="#textbooks/${m(o)}">${i(o)}</a>`).join(""),r=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(v(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h1>
            <p>${i(Cn(t))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(r.back)}</button>
            <button class="btn ghost" type="button" data-action="route" data-route="home">${i(r.home)}</button>
          </div>
        </div>
        <article class="lesson-locked-panel textbook-locked-panel">
          <img class="jlpt-textbook-cover" src="${m(e?.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill danger-pill">${i(t||"JLPT")}</span>
            <h2>${i(v(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h2>
            <p>${i(r.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(r.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${m(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function jy(e){const t=String(e?.jlpt||"").toUpperCase();if(!At(t))return kg(e);if(Re.includes(t)&&!Ci(t))return Si(t)==="error"||Si(t)==="incomplete"?Sy(e,t,a.jlptCourseDataErrors[t]):(fl(t).catch(()=>{}),ac(e,t));if(String(e?.jlpt||"").toUpperCase()==="N5"&&a.n5Textbook?.items?.length)return Zy(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&a.n4Textbook?.items?.length)return V$(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&a.n3Textbook?.items?.length)return Ij(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&a.n2Textbook?.items?.length)return gS(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return a.n1Textbook?.items?.length?XS(e):(Pv().catch(()=>{}),tl?Oi(tl):ac(e,"N1"));a.activeTextbookLevel=e.jlpt,a.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(g=>a.lessons.find($=>$.id===g)).filter(Boolean),s=a.lessons.filter(g=>String(g.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(g)),r=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=a.activeTextbookSubroute?r.find(g=>g.id===a.activeTextbookSubroute)||Sn(e.jlpt)||a.jlptLessons[0]:Sn(e.jlpt)||a.jlptLessons[0];a.activeTextbookSubroute&&o?.id&&It(t,o.id,"textbook_page");const c=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},l=pd(e.jlpt)||e.lessonIds?.[0]||r[0]?.id||"",d=v(e.recommendedCycle||{}),u=v(e.goal||{}),f=(e.previousLevels||[]).map(g=>`<a class="pill" href="#textbooks/${m(g)}">${i(g)}</a>`).join(""),h=(e.nextLevels||[]).map(g=>`<a class="pill" href="#textbooks/${m(g)}">${i(g)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(e.jlpt)} · ${i(c.title)}</p>
            <h1>${i(v(e.displayTitle||e.title||{}))}</h1>
            <p>${i(v(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(c.back)}</button>
            <a class="btn primary" href="${m(e.pdfUrl||e.pdfFile||"")}" download="${m((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(c.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(e.jlpt)}">${i(c.lessonPage)}</button>
            ${rs("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${m(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill">${i(e.jlpt)}</span>
            <h2>${i(v(e.displayTitle||e.title||{}))}</h2>
            <p>${i(v(e.description||{}))}</p>
            <div class="tag-row">
              <span class="pill">${i(e.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
              <span class="pill">${i(e.kanjiCount||0)} ${i(R("cardsToday"))}</span>
              <span class="pill">${i(u)}</span>
              <span class="pill">${i(d)}</span>
            </div>
            <div class="textbook-route-links">
              ${f?`<div><strong>${i(c.previous)}</strong><div class="tag-row">${f}</div></div>`:""}
              ${h?`<div><strong>${i(c.next)}</strong><div class="tag-row">${h}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${M(e.jlpt,e.lessonCount||0,u,E(e.lessonCount||0,Math.max(1,a.jlptLessons.length)))}
          ${M(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",E(e.kanjiCount||0,Math.max(1,a.cards.length)))}
          ${M(p()==="ru"?"Уроки":"Lessons",r.length,c.practice,E(r.length,Math.max(1,a.lessons.filter(g=>String(g.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${M(p()==="ru"?"Переход":"Jump",a.activeTextbookLevel===e.jlpt?1:0,c.lessonPage,a.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${dr(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(c.outline)}</h2>
              <p>${i(v(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,c.outline,E(o.sections?.length||0,4))}
              ${M(p()==="ru"?"Практика":"Practice",o.practice?.length||0,c.practice,E(o.practice?.length||0,4))}
            </div>
          </article>
          ${Om(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(g=>`<li>${i(v(g))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(g=>`
              <article class="jlpt-section-card">
                <h3>${i(v(g.title))}</h3>
                <p>${i(v(g.body))}</p>
                ${Array.isArray(g.points)&&g.points.length?`<ul>${g.points.map($=>`<li>${i(v($))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(c.practice)}</h3>
                <ul>${o.practice.map(g=>`<li>${i(v(g))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(g=>`<li>${i(v(g))}</li>`).join("")}</ul>
              </article>
            `:""}
          </div>
        `:""}

        <div class="section-head">
          <div>
            <h2>${i(c.lessons)}</h2>
            <p>${i(p()==="ru"?"Карточки, входящие в этот учебник, и быстрые переходы в урок.":"Cards included in this textbook, with quick jumps into lessons.")}</p>
          </div>
          ${l?`<button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${m(e.jlpt)}">${i(c.openLesson)}</button>`:""}
        </div>
        <div class="lesson-grid">
          ${r.map(g=>iy(g)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function ac(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Загружаем урок…",text:`Подгружаю карточки и упражнения ${t}. Адрес сохранён — после загрузки откроется нужный урок.`,back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:"Loading lesson…",text:`Loading ${t} cards and exercises. The URL is preserved and the requested lesson will open next.`,back:"All textbooks"};return`
      <section class="page textbooks-page n5-course-page textbook-data-loading-page" aria-busy="true">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">${i(n.eyebrow)}</p>
            <h1>${i(n.title)}</h1>
            <p>${i(n.text)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.back)}</button>
            ${e?.pdfUrl||e?.pdfFile?`<a class="btn ghost" href="${m(e.pdfUrl||e.pdfFile)}" target="_blank" rel="noopener">${i(p()==="ru"?"PDF-учебник":"PDF textbook")}</a>`:""}
          </div>
        </div>
        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(t)} · ${i(p()==="ru"?"загрузка данных":"loading data")}</span>
            <h2>${i(v(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(v(e?.description||{}))}</p>
            <div class="achievement-progress" aria-hidden="true"><i style="width:60%"></i></div>
          </div>
          ${$n("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function Sy(e,t,n=null){const s=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Не удалось загрузить карточки урока",text:"Проверьте подключение и попробуйте ещё раз. Прогресс, XP и Moon Fragments не изменились.",retry:"Повторить",back:"К списку уроков"}:{eyebrow:`${t} · Flash Kanji`,title:"Could not load lesson cards",text:"Check your connection and try again. Progress, XP, and Moon Fragments were not changed.",retry:"Retry",back:"Lesson list"},r=n instanceof Error?n.message:String(n||"");return`
      <section class="page textbooks-page n5-course-page textbook-data-error-page" data-course-data-error="${m(t)}">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">${i(s.eyebrow)}</p>
            <h1>${i(s.title)}</h1>
            <p>${i(s.text)}</p>
            ${r?`<p class="label">${i(r)}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${m(t)}">${i(s.retry)}</button>
            <a class="btn ghost" href="#textbooks/${m(t)}">${i(s.back)}</a>
          </div>
        </div>
        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill danger-pill">${i(t)} · ${i(p()==="ru"?"данные недоступны":"data unavailable")}</span>
            <h2>${i(v(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(v(e?.description||{}))}</p>
          </div>
          ${$n("eva","concerned","error","n5-hero-mascot")}
        </article>
      </section>
    `}function yg(){return p()==="ru"?{allTextbooks:"Все учебники",start:"Начать курс",continue:"Продолжить",downloadPdf:"Скачать PDF",reference:"Справочник",lessons:"Уроки",practice:"Практикум чтения",final:"Итоговая контрольная",review:"Повторение",sources:"Источники",russianCourse:"Курс на русском",showRomaji:"Показывать ромадзи",hideRomaji:"Скрыть ромадзи",check:"Проверить",score:"Результат",passed:"зачёт",notPassed:"повторить",correct:"верно",wrong:"ошибка",writeDone:"Пропись выполнена",markWriting:"Я написал(а) от руки",manualWriting:"Ручная пропись",noAutoWriting:"Почерк не оценивается автоматически: отметьте шаг, когда написали знаки от руки.",noCourse:"Курс не найден",loading:"Загружаю курс",offlineHint:"Если вы уже открывали этот урок, service worker отдаст его из кэша. Иначе появится понятный offline fallback.",remember:"Помню",forgot:"Не помню",noReview:"Повторений пока нет. Пройдите урок или откройте знаки курса.",sourcePdf:"Оригинальный PDF",taskCount:"заданий",characters:"знаков",lessonsCount:"уроков",lesson:"урок",lessonProgress:"Прогресс урока",newSigns:"Новые знаки",newSignsHint:"Сначала узнаём форму и чтение каждого нового знака.",characterCard:"Карточка знака",characterCardHint:"Идём как в кандзи-уроке: один знак, быстрое решение, следующая карточка.",cardComplete:"Все знаки урока открыты",cardCompleteHint:"Теперь можно закрепить их в упражнениях, прописи и общем повторении.",backToFirstCard:"Повторить карточки",cardProgress:"Карточка",exampleWord:"Пример слова",readWrite:"Как читать и писать",readWriteHint:"Произнесите знак, посмотрите количество штрихов и переходите к ручной прописи.",reading:"Чтение",strokes:"Штрихи",tts:"Звук",strokeOrder:"Stroke-order",explanation:"Объяснение",explanationHint:"Ключевые правила урока вынесены в отдельные карточки.",examples:"Примеры",examplesHint:"Короткие слова и записи для чтения.",example:"Пример",meaning:"Значение",practiceBlock:"Практика",practiceHint:"Выполняйте задания небольшими блоками и проверяйте ответы сразу.",selfCheck:"Проверь себя",selfCheckHint:"Завершите ручную часть и отметьте пропись после тренировки."}:{allTextbooks:"All textbooks",start:"Start course",continue:"Continue",downloadPdf:"Download PDF",reference:"Reference",lessons:"Lessons",practice:"Reading practice",final:"Final test",review:"Review",sources:"Sources",russianCourse:"Russian course",showRomaji:"Show romaji",hideRomaji:"Hide romaji",check:"Check",score:"Score",passed:"passed",notPassed:"retry",correct:"correct",wrong:"wrong",writeDone:"Writing done",markWriting:"I wrote it by hand",manualWriting:"Manual writing",noAutoWriting:"Handwriting is not graded automatically: mark this step after writing the signs by hand.",noCourse:"Course not found",loading:"Loading course",offlineHint:"If you opened this lesson before, the service worker can serve it from cache. Otherwise a clear offline fallback appears.",remember:"Remember",forgot:"Forgot",noReview:"No kana reviews yet. Finish a lesson or open course signs first.",sourcePdf:"Original PDF",taskCount:"tasks",characters:"characters",lessonsCount:"lessons",lesson:"lesson",lessonProgress:"Lesson progress",newSigns:"New signs",newSignsHint:"Start by recognizing the shape and reading of each new sign.",characterCard:"Character card",characterCardHint:"Use the kanji lesson rhythm: one sign, one decision, then the next card.",cardComplete:"All lesson signs are introduced",cardCompleteHint:"Now reinforce them with exercises, handwriting, and shared review.",backToFirstCard:"Repeat cards",cardProgress:"Card",exampleWord:"Example word",readWrite:"How to read and write",readWriteHint:"Play the sound, check the stroke count, then move to handwriting practice.",reading:"Reading",strokes:"Strokes",tts:"Sound",strokeOrder:"Stroke order",explanation:"Explanation",explanationHint:"The key lesson notes are separated into contrast cards.",examples:"Examples",examplesHint:"Short words and spellings for reading practice.",example:"Example",meaning:"Meaning",practiceBlock:"Practice",practiceHint:"Complete the exercises in compact blocks and check immediately.",selfCheck:"Check yourself",selfCheckHint:"Finish the handwriting step after practicing by hand."}}function Cy(e){const t=String(e||"").toLowerCase(),n=Da(t),s=yg();if(!n&&!a.bootAncillaryLoaded)return dl({hadPriorVisit:Jl(a.progress)}).catch(c=>console.warn("Boot ancillary data failed to load.",c)),$g({title:t,pdf_url:""},s);if(!n)return Oi(new Error(s.noCourse));const r=Fs(t);if(!r)return DN(t).then(()=>P()).catch(()=>P()),a.kanaCourseErrors[t]?Oi(a.kanaCourseErrors[t]):$g(n,s);const o=String(a.activeTextbookSubroute||"").toLowerCase();if(o==="reference")return Dy(r,s);if(o==="sources")return Fy(r,s);if(o==="review")return Oy(r,s);if(o==="final"||o==="final-test")return Ky(r,s);if(/^practice-\d+$/i.test(o)){const c=r.reading_practice?.find(l=>l.id===o);return c?My(r,c,s):ea(we("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}if(/^lesson-\d+$/i.test(o)){const c=r.lessons?.find(l=>l.id===o);return c?Ay(r,c,s):ea(we("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}return xy(r,s)}function $g(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page" aria-busy="true">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">${i(t.russianCourse)}</p>
            <h1>${i(t.loading)}: ${i(e.title)}</h1>
            <p>${i(t.offlineHint)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(t.allTextbooks)}</button>
            <a class="btn ghost" href="${m(e.pdf_url)}" download="${m((e.pdf_url||"").split("/").pop()||"kana.pdf")}" target="_blank" rel="noopener">${i(t.downloadPdf)}</a>
          </div>
        </div>
      </section>
    `}function xy(e,t){const n=bt(e.slug),s=e.lessons?.[0]?.id||"",r=n.currentRoute||s;Ao(e.slug,r);const o=e.lessons.filter(c=>so(e.slug,c).passed).length;return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(t.russianCourse)}</p>
            <h1>${i(e.title)} <span lang="ja">${i(e.native_title)}</span></h1>
            <p>${i(e.description)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(t.allTextbooks)}</button>
            <a class="btn primary" href="#textbooks/${m(e.slug)}/${m(r)}">${i(n.currentRoute?t.continue:t.start)}</a>
            <a class="btn ghost" href="${m(e.source.pdf_file)}" download="${m((e.source.pdf_file||"").split("/").pop()||`${e.slug}.pdf`)}" target="_blank" rel="noopener" data-action="kana-download-pdf" data-course="${m(e.slug)}">${i(t.downloadPdf)}</a>
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
          ${M(t.review,Ng(e,"due").length,t.characters,E(Ng(e,"due").length,Math.max(1,e.base_characters.length)))}
        </div>
        <div class="actions kana-course-tabs">
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/reference">${i(t.reference)}</a>
          <button class="btn ghost" type="button" data-action="route" data-route="review">${i(t.review)}</button>
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/final">${i(t.final)}</a>
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/sources">${i(t.sources)}</a>
          <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(ss().settings.showRomaji?t.hideRomaji:t.showRomaji)}</button>
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.lessons)}</h2>
            <p>${i(p()==="ru"?"Курсы азбук независимы: хирагана не блокирует катакану и наоборот.":"Kana courses are independent: hiragana does not lock katakana and vice versa.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-lesson-grid">
          ${e.lessons.map(c=>Ny(e,c,t)).join("")}
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.practice)}</h2>
            <p>${i(p()==="ru"?"Пять блоков чтения из PDF без обязательного ромадзи.":"Five PDF reading practice blocks without mandatory romaji.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-practice-grid">
          ${e.reading_practice.map(c=>Ly(e,c,t)).join("")}
        </div>
      </section>
    `}function Ny(e,t,n){const s=so(e.slug,t),r=s.passed?n.passed:s.completed?n.notPassed:n.start,o=s.completed?Math.round(s.latestScore/Math.max(1,lc(t.exercises))*100):0;return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">#${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p class="kana-character-row" lang="ja">${t.focus_characters.slice(0,16).map(c=>`<span>${i(c.kana)}</span>`).join("")}</p>
            <div class="progress mini"><span style="width:${E(o,100)}%"></span></div>
            <p>${i(r)} · ${i(o)}%</p>
          </div>
          <a class="btn primary" href="#textbooks/${m(e.slug)}/${m(t.id)}">${i(s.completed?n.continue:n.start)}</a>
        </article>
      `}function Ly(e,t,n){const s=bt(e.slug).practices[t.id],r=lc(t.exercises),o=Number(s?.latestScore||0);return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p>${i((t.body||[]).slice(0,2).join(" "))}</p>
            <div class="progress mini"><span style="width:${E(o,Math.max(1,r))}%"></span></div>
          </div>
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/${m(t.id)}">${i(n.practice)}</a>
        </article>
      `}function Ay(e,t,n){const s=bt(e.slug);Ao(e.slug,t.id);const r=so(e.slug,t),o=lc(t.exercises),c=Iy(t),l=!!s.writing?.[t.id];return`
      <section class="page textbooks-page n5-course-page n5-lesson-page kana-course-page kana-lesson-page">
        <div class="kana-lesson-shell">
          ${Ty(e,t,n,c,r,o)}
          ${_y(e,t,n,c)}
          ${Py(c.explanations,n)}
          ${Ey(c.examples,n)}
          <section class="kana-lesson-step kana-practice-step" aria-labelledby="kanaPracticeTitle">
            <div class="kana-step-heading">
              <span class="pill">05</span>
              <h2 id="kanaPracticeTitle">${i(n.practiceBlock)}</h2>
              <p>${i(n.practiceHint)}</p>
            </div>
            <div class="kana-practice-stack">
              ${t.exercises.map(d=>oc(e.slug,t.id,"lesson",d,n)).join("")}
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
              <button class="btn ${l?"ghost":"primary"}" type="button" data-action="kana-writing-done" data-course="${m(e.slug)}" data-lesson="${m(t.id)}">${i(l?n.writeDone:n.markWriting)}</button>
            </article>
          </section>
        </div>
      </section>
    `}function Iy(e){const t=(e.body||[]).map(d=>String(d||"").trim()).filter(Boolean),n=[],s=[],r={title:"",headers:[],rows:[]};let o=0;const c=d=>/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(d),l=d=>/^(Слова для чтения|Пример и узнавание)$/i.test(d);for(;o<t.length;){const d=t[o];if(/^\d+$/.test(d)){o+=1;continue}if(/^Цель раздела$/i.test(d)){for(o+=1;o<t.length&&!/^Знаки урока$/i.test(t[o]);)/^\d+$/.test(t[o])||n.push(t[o]),o+=1;continue}if(/^Знаки урока$/i.test(d)){for(o+=1;o<t.length&&!/^(Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(t[o]);)o+=1;continue}if(l(d)){r.title=d;const u=t.slice(o+1).filter(h=>!/^\d+$/.test(h));r.headers=u.slice(0,3);const f=u.slice(3);for(let h=0;h+2<f.length;h+=3)r.rows.push(f.slice(h,h+3));break}if(c(d)){const u=d,f=[];for(o+=1;o<t.length&&!c(t[o]);)/^\d+$/.test(t[o])||f.push(t[o]),o+=1;f.length&&s.push({title:u,body:f});continue}o+=1}return{goal:n,explanations:s,examples:r}}function Ty(e,t,n,s,r,o){const c=Number(r?.latestScore||0),l=E(c,Math.max(1,o)),d=s.goal.length?s.goal.join(" "):(t.body||[]).slice(0,2).join(" ");return`
        <article class="kana-lesson-hero-card" aria-labelledby="kanaLessonTitle">
          <div class="kana-lesson-hero-copy">
            <p class="eyebrow">Flash Kanji · ${i(e.title)} · ${i(n.lesson)} ${i(t.order||"")}</p>
            <h1 id="kanaLessonTitle">${i(t.title)} <span lang="ja">${i(e.native_title)}</span></h1>
            <p>${i(d)}</p>
            <div class="kana-lesson-progress-row">
              <span>${i(n.lessonProgress)}: ${i(c)}/${i(o)}</span>
              <div class="achievement-progress" aria-hidden="true"><i style="width:${l}%"></i></div>
            </div>
          </div>
          <div class="kana-lesson-hero-aside" aria-label="${m(n.newSigns)}">
            <span class="pill">${i(n.newSigns)} · ${i(t.focus_characters.length)}</span>
            <div class="kana-hero-signs" lang="ja">
              ${t.focus_characters.map(u=>`<span>${i(u.kana)}</span>`).join("")}
            </div>
            <div class="actions">
              <a class="btn ghost" href="#textbooks/${m(e.slug)}">${i(e.title)}</a>
              <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
              <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(ss().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
              ${rs("textbook",{level:e.slug,subroute:t.id})}
            </div>
          </div>
        </article>
      `}function ic(e,t){return`${String(e||"").toLowerCase()}:${String(t||"")}`}function jg(e,t){const n=ic(e,t?.id||""),s=t?.focus_characters?.length||0,r=Number(a.kanaLessonCharacterIndex[n]||0);return ce(Number.isFinite(r)?r:0,0,s)}function Ry(e,t){const n=Array.isArray(e?.rows)?e.rows:[],s=String(t||""),r=n.find(o=>String(o?.[0]||"").includes(s))||n[0]||null;return r?{word:String(r[0]||""),reading:String(r[1]||""),meaning:String(r[2]||"")}:null}function _y(e,t,n,s){const r=t.focus_characters||[];if(!r.length)return"";const o=jg(e.slug,t),c=o>=r.length,l=r[Math.min(o,r.length-1)],d=`${Math.min(o+1,r.length)} / ${r.length}`,u=E(Math.min(o,r.length),Math.max(1,r.length));if(c)return`
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
            <div class="kana-card-strip" lang="ja" aria-label="${m(n.newSigns)}">
              ${r.map(N=>`<span class="is-done">${i(N.kana)}</span>`).join("")}
            </div>
            <div class="actions">
              <button class="btn ghost" type="button" data-action="kana-lesson-card-reset" data-course="${m(e.slug)}" data-lesson="${m(t.id)}">${i(n.backToFirstCard)}</button>
              <a class="btn primary" href="#kanaPracticeTitle">${i(n.practiceBlock)}</a>
            </div>
          </article>
        </section>
      `;const f=$t(e.slug),h=Ls(e.slug,l.kana),g=Pe(f[h]||null),$=Ry(s.examples,l.kana),L=ss().settings.showRomaji,C=jr();return`
        <section class="kana-lesson-step kana-character-flow" data-section="kana-character-study-card" aria-labelledby="kanaCharacterFlowTitle">
          <div class="kana-step-heading">
            <span class="pill">01</span>
            <h2 id="kanaCharacterFlowTitle">${i(n.characterCard)}</h2>
            <p>${i(n.characterCardHint)}</p>
          </div>
          <article class="study-card kana-character-study-card" data-kana-character-card data-kana-card-id="${m(h)}">
            <div class="study-topline">
              <div class="tag-row compact-tags">
                <span class="pill">${i(e.title)}</span>
                ${Pr(g.state)}
                <span class="pill">${i(n.cardProgress)} ${i(d)}</span>
              </div>
              <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${m(l.kana)}" aria-label="${m(n.tts)}">🔊</button>
            </div>
            <div class="kanji-focus kana-lesson-focus" lang="ja" aria-label="${m(l.kana)}">${i(l.kana)}</div>
            <h3>${i(n.reading)}: ${i(L&&l.romaji?l.romaji:l.kana)}</h3>
            <p class="label">${i(e.title)} · ${i(l.strokes?`${l.strokes} ${n.strokes.toLowerCase()}`:n.characters)} · ${i(Ht(g.dueAt))}</p>
            <div class="kana-character-details">
              <div>
                <span>${i(n.reading)}</span>
                <strong>${i(l.romaji||"—")}</strong>
              </div>
              <div>
                <span>${i(n.strokes)}</span>
                <strong>${i(l.strokes||"—")}</strong>
              </div>
              <div>
                <span>${i(n.strokeOrder)}</span>
                <a href="#kana-writing-practice">${i(n.manualWriting)}</a>
              </div>
            </div>
            ${$?`
              <div class="lesson-player-sentence kana-character-example">
                <small>${i(n.exampleWord)}</small>
                <strong lang="ja">${i($.word)}</strong>
                <p>${i($.reading)} · ${i($.meaning)}</p>
              </div>
            `:""}
            <div class="kana-card-strip" lang="ja" aria-label="${m(n.newSigns)}">
              ${r.map((N,k)=>`<span class="${k<o?"is-done":k===o?"is-current":""}">${i(N.kana)}</span>`).join("")}
            </div>
            <div class="progress mini" aria-hidden="true"><span style="width:${u}%"></span></div>
            <div class="rating-grid srs-binary-grid">
              <button class="btn danger" type="button" data-action="kana-lesson-card" data-course="${m(e.slug)}" data-lesson="${m(t.id)}" data-kana="${m(l.kana)}" data-rating="forgot">${i(C.forgot)} <small>${i(C.forgotHint)}</small></button>
              <button class="btn success" type="button" data-action="kana-lesson-card" data-course="${m(e.slug)}" data-lesson="${m(t.id)}" data-kana="${m(l.kana)}" data-rating="remember">${i(C.remember)} <small>${i(C.rememberHint)}</small></button>
            </div>
          </article>
        </section>
      `}function Py(e,t){return e.length?`
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
      `:""}function Ey(e,t){if(!e?.rows?.length)return"";const n=e.headers.length===3?e.headers:[t.example,t.reading,t.meaning];return`
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
                    ${s.map((r,o)=>`<td data-label="${m(n[o]||"")}"${o===0?' lang="ja"':""}>${i(r)}</td>`).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>
      `}function My(e,t,n){return Ao(e.slug,t.id),`
      <section class="page textbooks-page n5-course-page kana-course-page kana-practice-page">
        ${ia(e,t.title,n,t.id)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h2>${i(t.title)}</h2>
            ${Sg(t.body)}
          </div>
        </article>
        ${t.exercises.map(s=>oc(e.slug,t.id,"practice",s,n)).join("")}
      </section>
    `}function Ky(e,t){return Ao(e.slug,"final"),`
      <section class="page textbooks-page n5-course-page n5-final-page kana-course-page kana-final-page">
        ${ia(e,t.final,t)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(t.final)}</span>
            <h2>${i(e.final_test.title)}</h2>
            <p>${i((e.final_test.body||[]).slice(0,4).join(" "))}</p>
          </div>
        </article>
        ${(e.final_test.sections||[]).map(n=>oc(e.slug,"final","final",n,t)).join("")}
      </section>
    `}function Dy(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${ia(e,t.reference,t)}
        <article class="jlpt-section-card">
          <h2>${i(e.reference.title)}</h2>
          ${Sg(e.reference.body)}
        </article>
        <div class="kana-table-grid">
          ${e.base_characters.map(n=>By(n)).join("")}
        </div>
      </section>
    `}function Fy(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${ia(e,t.sources,t)}
        <article class="jlpt-section-card">
          <h2>${i(t.sourcePdf)}</h2>
          <p>SHA-256: <code>${i(e.source.sha256)}</code></p>
          <p>${i(e.source.publisher)} · ${i(e.source.revision)} · ${i(e.source.site)}</p>
          <a class="btn primary" href="${m(e.source.pdf_file)}" download="${m((e.source.pdf_file||"").split("/").pop()||`${e.slug}.pdf`)}" target="_blank" rel="noopener">${i(t.downloadPdf)}</a>
        </article>
        <article class="jlpt-section-card">
          <h2>${i(t.sources)}</h2>
          <ul>${(e.sources||[]).map(n=>`<li>${i(n)}</li>`).join("")}</ul>
        </article>
      </section>
    `}function Oy(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page kana-review-page">
        ${ia(e,t.review,t)}
        <article class="empty-state kana-review-entry">
          <span class="kanji-char" lang="ja">${i(e.native_title)}</span>
          <h2>${i(p()==="ru"?"Повторение теперь общее":"Review is unified now")}</h2>
          <p>${i(p()==="ru"?"Хирагана, катакана и кандзи идут через один экран SRS Flash Kanji: одна карточка за раз, общие кнопки «Не помню» и «Помню», раздельная статистика по ID.":"Hiragana, katakana and kanji now use the same Flash Kanji SRS screen: one card at a time, shared Forgot/Remember actions, independent card IDs.")}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="route" data-route="review">${i(t.review)}</button>
            <a class="btn ghost" href="#textbooks/${m(e.slug)}">${i(e.title)}</a>
          </div>
        </article>
      </section>
    `}function ia(e,t,n,s){return`
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(e.title)}</p>
            <h1>${i(t)} <span lang="ja">${i(e.native_title)}</span></h1>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${m(e.slug)}">${i(e.title)}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(ss().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
            ${rs("textbook",{level:e.slug})}
          </div>
        </div>
      `}function Sg(e=[]){const t=[];for(const n of e.slice(0,40))/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова|Пример|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(n)?t.push(`<h3>${i(n)}</h3>`):t.push(`<p>${i(n)}</p>`);return t.join("")}function By(e){return`
        <button class="kana-char-chip" type="button" data-action="play-kana-tts" data-text="${m(e.kana)}">
          <span lang="ja">${i(e.kana)}</span>
          ${ss().settings.showRomaji&&e.romaji?`<small>${i(e.romaji)}</small>`:""}
        </button>
      `}function oc(e,t,n,s,r){const o=Uy(e,t,n,s.id),c=a.kanaExerciseDrafts[cc(e,t,n,s.id)]||{};return`
        <form class="jlpt-section-card kana-exercise-card" data-kana-exercise-form data-course="${m(e)}" data-owner="${m(t)}" data-owner-type="${m(n)}" data-exercise="${m(s.id)}">
          <h3>${i(s.label)}</h3>
          <p>${i(s.instruction||"")}</p>
          <div class="kana-exercise-items">
            ${s.items.map(l=>zy(l,o,r,c)).join("")}
          </div>
          ${o?.completed?`<p class="exercise-feedback ${o.passed?"is-correct":"is-wrong"}" aria-live="polite">${i(r.score)}: ${i(o.score)}/${i(o.total)} · ${i(o.passed?r.passed:r.notPassed)}</p>`:""}
          <button class="btn primary" type="button" data-action="kana-submit-exercise">${i(r.check)}</button>
        </form>
      `}function zy(e,t,n,s={}){const r=Object.prototype.hasOwnProperty.call(s,e.number)?s[e.number]:t?.answers?.[e.number]||"",o=t?.completed?t.correct?.[e.number]:null;return`
        <label class="kana-answer-row ${o===!0?"is-correct":o===!1?"is-wrong":""}">
          <span>${i(e.number)}. ${i(e.prompt)}</span>
          <input type="text" name="kana-${m(e.number)}" value="${m(r)}" autocomplete="off" inputmode="text" />
          ${o===null?"":`<small>${i(o?n.correct:`${n.wrong}: ${e.solution||e.accepted_answers?.[0]||""}`)}</small>`}
        </label>
      `}function lc(e=[]){return(e||[]).reduce((t,n)=>t+(n.items||[]).length,0)}function so(e,t){const n=bt(e).lessons[t.id];return n||{completed:!1,passed:!1,latestScore:0,bestScore:0,exercises:{},updatedAt:null}}function Uy(e,t,n,s){const r=bt(e);return n==="lesson"?r.lessons?.[t]?.exercises?.[s]||null:n==="practice"?r.practices?.[t]?.exercises?.[s]||null:n==="final"&&(r.finalTest?.[s]||r.finalTest?.sections?.[s])||null}function Ls(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim(),r=Array.from(s)[0]?.codePointAt(0);return!ve(n)||!Number.isInteger(r)?"":`kana:${n}:${r.toString(16).toUpperCase()}`}function ro(e,t=""){const n=String(e||"").trim(),s=n.match(/^kana:(hiragana|katakana):([0-9a-f]+)$/i);if(s){const c=Number.parseInt(s[2],16);return!Number.isInteger(c)||c<=0?null:{slug:s[1].toLowerCase(),kana:String.fromCodePoint(c),id:Ls(s[1],String.fromCodePoint(c))}}const r=n.match(/^(hiragana|katakana):(.+)$/i);if(r){const c=r[1].toLowerCase(),l=r[2].trim();return{slug:c,kana:l,id:Ls(c,l)}}const o=String(t||"").toLowerCase();return ve(o)&&n?{slug:o,kana:n,id:Ls(o,n)}:null}function $t(e){const t=String(e||"").toLowerCase();if(!ve(t))return{};const n=bt(t),s=n.review&&typeof n.review=="object"?n.review:{},r={};let o=!1;Object.entries(s).forEach(([d,u])=>{const f=ro(d,t),h=f?.slug===t?f.id:"",g=Pe(u);if(!h){r[d]=g;return}const $=r[h];(!$||Number(g.reviewCount||0)>Number($.reviewCount||0)||(Date.parse(String(g.lastReviewedAt||""))||0)>(Date.parse(String($.lastReviewedAt||""))||0))&&(r[h]=g),h!==d&&(o=!0)});const c=Object.keys(s).sort().join("|"),l=Object.keys(r).sort().join("|");return(o||c!==l)&&(n.review=r),n.review}function Cg(e,t){const n=Fs(e),s=String(t||"");return n?.base_characters?.find(r=>r.kana===s)||null}function xg(e){const t=Fs(e)||Da(e);return t?.title?t.title:String(e||"").toLowerCase()==="katakana"?p()==="ru"?"Катакана":"Katakana":p()==="ru"?"Хирагана":"Hiragana"}function Ng(e,t="due"){const n=$t(e.slug),s=Date.now();return(e.base_characters||[]).map(r=>{const o=Ls(e.slug,r.kana),c=n[o]||null;return{...r,id:o,progress:c}}).filter(r=>t==="all"?!0:Rd(r.progress?[{cardId:r.id,...r.progress}]:[],s).initial.length>0)}function Jy(e,t,n,s){return e?n==="lesson"?e.lessons?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="practice"?e.reading_practice?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="final"&&e.final_test?.sections?.find(r=>r.id===s)||null:null}function cc(e,t,n,s){const r=[e,n,t,s].map(o=>String(o||"").trim());return r.every(Boolean)?r.join(":"):""}function Gy(e){var L;const t=e.closest?.("[data-kana-exercise-form]");if(!t)return;const n=String(t.dataset.course||"").toLowerCase(),s=String(t.dataset.owner||""),r=String(t.dataset.ownerType||""),o=String(t.dataset.exercise||"");if(!ve(n))return;const c=Fs(n),l=Jy(c,s,r,o);if(!c||!l)return;const d=he(),u={},f=cc(n,s,r,o),h=new FormData(t);l.items.forEach(C=>{const N=h.get(`kana-${C.number}`);u[C.number]=Fd(typeof N=="string"?N:"")});const g=L1(l,u),$=bt(n);if($.currentRoute=s,$.updatedAt=g.updatedAt,r==="lesson"){const C=c.lessons.find(x=>x.id===s),N=$.lessons[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};N.exercises[o]=g;const k=Pd(C?.exercises||[],N.exercises);Object.assign(N,k,{bestScore:Math.max(Number(N.bestScore||0),k.latestScore),updatedAt:g.updatedAt}),$.lessons[s]=N,N.passed&&Xy(c,C?.focus_characters||[])}if(r==="practice"){const C=c.reading_practice.find(x=>x.id===s),N=$.practices[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};N.exercises[o]=g;const k=Pd(C?.exercises||[],N.exercises);Object.assign(N,k,{bestScore:Math.max(Number(N.bestScore||0),k.latestScore),updatedAt:g.updatedAt}),$.practices[s]=N}if(r==="final"){$.finalTest||($.finalTest={}),(L=$.finalTest).sections||(L.sections={}),$.finalTest.sections[o]=g;const C=Pd(c.final_test?.sections||[],$.finalTest.sections);Object.assign($.finalTest,C,{bestScore:Math.max(Number($.finalTest.bestScore||0),C.latestScore),updatedAt:g.updatedAt})}f&&delete a.kanaExerciseDrafts[f],D(g.passed?"answer_correct":"answer_wrong"),A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:d})}function qy(e,t){const n=String(e||"").toLowerCase();if(!ve(n)||!t)return;const s=he(),r=bt(n);r.writing[t]=new Date().toISOString(),r.currentRoute=t,r.updatedAt=r.writing[t],A(),J(yg().writeDone),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:s})}function Hy(e,t){const n=String(e||"").toLowerCase(),s=ic(n,t);!ve(n)||!t||(a.kanaLessonCharacterIndex[s]=0,a.pendingFocus="kana-character-card",He())}function Vy(e,t,n,s){const r=String(e||"").toLowerCase();if(!ve(r)||!t||!n)return;const o=he(),c=Fs(r),l=c?.lessons?.find(k=>k.id===t)||null;if(!c||!l)return;const d=Ls(r,n);if(!d)return;const u=bt(r),f=$t(r),h=ae(Pe(f[d]||null)),g=Oe(s)?"forgot":"remember",$=Ed(h,g);f[d]=$,u.review=f,u.currentRoute=t,u.updatedAt=new Date().toISOString(),Ut(h,$,g),ke({skipAchievements:!0}),g==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,be("answer_wrong",{cardId:d,kana:n,rating:g},{skipAchievements:!0})):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),be("answer_correct",{cardId:d,kana:n,rating:g,combo:a.progress.correctCombo},{skipAchievements:!0}));const L=ic(r,t),C=l.focus_characters.findIndex(k=>k.kana===n),N=jg(r,l);a.kanaLessonCharacterIndex[L]=Math.min((C>=0?C:N)+1,l.focus_characters.length),a.pendingFocus="kana-character-card",D(g==="forgot"?"answer_wrong":"answer_correct"),A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:o})}function Wy(e,t,n){gf(e,t,n)}function Xy(e,t=[]){const n=bt(e.slug),s=$t(e.slug);t.forEach(r=>{const o=Ls(e.slug,r.kana);o&&(s[o]||(s[o]=Ed(null,"remember")))}),n.review=s}function Qy(){const e=he(),t=ss();t.settings.showRomaji=!t.settings.showRomaji,A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:e})}function Yy(e){const t=String(e||"").trim();t&&(xo(),_h(t)||J(p()==="ru"?"Системная озвучка недоступна.":"System speech is not available."))}function Zy(e){a.activeTextbookLevel="N5",a.activeJlptLesson="N5",la();const t=String(a.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return w$();if(t==="review")return h$();const n=Ft(t);return n?(ne().currentLessonId=n.id,It("N5",n.id,"n5_lesson_page"),en("N5",n,"n5_lesson_page"),m$(e,n)):e$(e)}function e$(e){const t=N$(),n=Ye(),s=Ze(),r=S$(),o=a.n5Meta||{},c=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${m(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N5_expanded_textbook.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero">
          <div class="n5-hero-copy">
            <span class="pill">80 ${i(n.kanji)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(c)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#textbooks/N5/${m(r?.id||"n5-lesson-1")}" data-action="n5-open-lesson" data-id="${m(r?.id||"n5-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n5-review" data-mode="due">${i(n.review)}</button>
              <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
            </div>
          </div>
          ${$n("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>t$(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n5Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(v(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${dr("N5")}
      </section>
    `}function t$(e){const t=Kg(e.id),n=Ye();let s=e.kanji.filter(r=>ne().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${m(e.id)}" data-action="n5-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(L$(t))}</small>
      </a>
    `}function On(){return a.progress.jlptLessonStudy=ep($l(),a.progress.jlptLessonStudy||{}),a.progress.jlptLessonStudy}function Qe(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function Dt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function dc(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const r=Gt(n),o=kn(n,r,s),c=Bn(n,s).some(l=>$e.has(`${n.toLowerCase()}:${l}`));return!!(o||c)}function As(e,t,n){const s=On(),r=Qe(e,t?.id),o=Qu();let c=s.sessions[r];c||(c={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[r]=c),c.level=String(e||c.level||"").toUpperCase(),c.lessonId=String(t?.id||c.lessonId||""),c.answers||(c.answers={}),c.phase=Yu(c.phase),c.startedAt||(c.startedAt=new Date().toISOString()),c.updatedAt||(c.updatedAt=new Date().toISOString());let l=dc(e,t?.id);!l&&Ig(e,t)&&(l=!0,A());const d=zo({cards:n,session:c,confirmedCompleted:l});return c.currentIndex=d.currentIndex,c.phase=d.phase,d.status!=="done"&&!l&&(c.completedAt=null),d.status==="test-ready"&&(c.testOpenedAt||(c.testOpenedAt=c.updatedAt||new Date().toISOString())),d.status==="incomplete"&&(c.testOpenedAt=null),s.activeSessionKey=r,s.lastUpdatedAt=new Date().toISOString(),{session:c,key:r,status:d.status,expectedCardIds:d.expectedCardIds,answeredExpectedCardIds:d.answeredExpectedCardIds,answeredCount:d.answeredCount,currentIndex:d.currentIndex,total:d.total}}function n$(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function or(e){const t=F(e);return t==="N5"?{level:t,course:ne,lessons:Ze,lessonById:Ft,cardsForLesson:rn,buildExercises:Ts}:t==="N4"?{level:t,course:W,lessons:lt,lessonById:Un,cardsForLesson:pr,buildExercises:ma}:t==="N3"?{level:t,course:H,lessons:dt,lessonById:Gn,cardsForLesson:mr,buildExercises:ha}:t==="N2"?{level:t,course:V,lessons:pt,lessonById:Hn,cardsForLesson:hr,buildExercises:wa}:t==="N1"?{level:t,course:ee,lessons:mt,lessonById:Rs,cardsForLesson:ka,buildExercises:ya}:null}function s$(e){const t=F(e);return t?`${t.toLowerCase()}Course`:""}function Bn(e,t){const n=F(e),s=String(typeof t=="object"&&t?t.id:t||"").trim(),r=new Set(s?[s]:[]),o=String(n||"").toLowerCase();if(o){const c=s.match(/^lesson-(\d+)$/i);c&&r.add(`${o}-lesson-${c[1]}`);const l=s.match(new RegExp(`^${o}-lesson-(\\d+)$`,"i"));l&&r.add(`lesson-${l[1]}`)}return[...r].filter(Boolean)}function kn(e,t,n){const s=t?.completedLessons||{};return Bn(e,n).some(r=>!!s[r])}function r$(e,t){if(!e||!t)return null;const n=e.lessons(),s=n.find(o=>Number(o.order||0)===Number(t.order||0)+1);if(s)return s;const r=n.findIndex(o=>o.id===t.id);return r>=0&&n[r+1]||null}function uc(e,t,n=""){if(!e||!t)return"";const s=e.lessons(),r=[...new Set([n,...Bn(e.level,t)].map(String).filter(Boolean))];for(const o of r){const c=o.match(/^(.*?)(\d+)$/);if(!c)continue;const l=Number(c[2])+1;if(s.length&&l>s.length)continue;const d=`${c[1]}${l}`,u=e.lessonById(d);return u&&u.id!==t.id?u.id:d}return""}function a$(e,t,n){if(!e||!t||!n)return;const s=e.lessons(),r=e.lessonById(t.currentLessonId);if(!(r?kn(e.level,t,r)||kn(e.level,t,t.currentLessonId):!t.currentLessonId||t.currentLessonId===n.id||kn(e.level,t,t.currentLessonId)))return;const c=s.find(l=>!kn(e.level,t,l));t.currentLessonId=c?.id||uc(e,n,t.currentLessonId)||r?.id||n.id}function i$(e,t){const n=F(e);if(!n||!t)return!1;if([t.completedLessons,t.studiedKanji,t.srsKanji,t.difficultKanji,t.exerciseResults,t.completedExercises].some(o=>o&&typeof o=="object"&&Object.keys(o).length>0))return!0;const r=`${n}:`;return Object.keys(a.progress?.jlptLessonStudy?.sessions||{}).some(o=>o.startsWith(r))}function Lg(e,t){const n=F(e);return`${String(n||e||"").toLowerCase()}:${String(t||"")}`}function Ag(e,t){const n=or(e);if(!n)return null;const s=typeof t=="object"&&t?t:n.lessonById(t);if(!s)return null;const r=n.course(),o=n.cardsForLesson(s),c=n.buildExercises(s),l=a.progress?.jlptLessonStudy?.sessions?.[Qe(n.level,s.id)]||null,d=dc(n.level,s.id);return{...lI({cards:o,session:l,confirmedCompleted:d,exercises:c,exerciseResults:r.exerciseResults||{},completedExercises:r.completedExercises||{},isCardStudied:u=>!!(r.studiedKanji?.[u.kanji]||r.difficultKanji?.[u.kanji]||$p(u))}),level:n.level,lesson:s,course:r,cards:o,exercises:c}}function o$(e,t,n,s){const r=F(e);if(!r||!t)return!1;const o=On(),c=Qe(r,t),l=o.sessions[c];return l?(l.phase="done",l.completedAt=s,l.updatedAt=s,l.currentIndex=Math.max(0,Number(n||0)),o.activeSessionKey=c,o.lastUpdatedAt=s,!0):!1}function l$(e,t,n,s,r=new Date().toISOString()){const o=or(e);if(!o||!t||!n)return!1;const c=s$(o.level),l=c&&a.progress?.[c]||n;c&&a.progress&&!a.progress[c]&&(a.progress[c]=l),l.completedLessons||(l.completedLessons={});const d=Bn(o.level,t),u=d.some(k=>!!l.completedLessons[k]),f=d.map(k=>l.completedLessons[k]).find(Boolean)||r;d.forEach(k=>{l.completedLessons[k]=f}),n!==l&&(n.completedLessons||(n.completedLessons={}),d.forEach(k=>{n.completedLessons[k]=f})),d.forEach(k=>$e.add(Lg(o.level,k))),o$(o.level,t.id,s?.length||0,f);const h=r$(o,t),g=o.lessonById(l.currentLessonId),$=h?.id||uc(o,t,l.currentLessonId)||t.id,L=Bn(o.level,l.currentLessonId),C=L.some(k=>d.includes(k)),N=L.some(k=>!!l.completedLessons[k]);return(!l.currentLessonId||l.currentLessonId===t.id||g?.id===t.id||C||N)&&(l.currentLessonId=$),a$(o,l,t),n!==l&&(n.currentLessonId=l.currentLessonId),cr(o.level),!u}function Ig(e,t){const n=Ag(e,t);if(!n)return!1;const s=kn(n.level,n.course,n.lesson),r=Bn(n.level,n.lesson).some(c=>$e.has(Lg(n.level,c))),o=!!(n.cardStudyComplete&&n.exerciseComplete);return s||!(n.canMigrateCompletion||o||r)?!1:l$(n.level,n.lesson,n.course,n.cards)}function lr(e,t){const n=Ag(e,t);return n?n.complete?"completed":n.study.answeredCount>0||n.cardStudyComplete||n.correctExerciseCount>0||(n.lesson.kanji||[]).some(r=>n.course.studiedKanji?.[r]||n.course.difficultKanji?.[r])?"started":"new":"new"}function Is(e){const t=or(e);return t?t.lessons().filter(n=>lr(t.level,n.id)==="completed").length:0}function cr(e){var o;const t=F(e),n={N5:"N4",N4:"N3",N3:"N2",N2:"N1"}[t],r=or(t)?.lessons()||[];return!t||!n||!r.length||Is(t)<r.length?!1:((o=a.progress).unlockedJlptLevels||(o.unlockedJlptLevels=[]),[t,n].forEach(c=>{a.progress.unlockedJlptLevels.includes(c)||a.progress.unlockedJlptLevels.push(c)}),!0)}function c$(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(ho).join("")}
      </ul>
    `:""}function d$(e){const t=_a(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${Oc(e)}
          ${n?`
            <div>
              <h3>${i(R("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function u$(e,t,n,s,r,o,c={}){if(!n)return"";const l=typeof c.examples=="function"?c.examples(n,t)||[]:[],d=typeof c.sentence=="function"?c.sentence(n,t):"",u=typeof c.extra=="function"?c.extra(n,t):"",f=c.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),g=Number(s||0),$=O(n.id),L=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(g+1)}</span>
              <span class="pill">${i($.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(R("strokes"))}</span>`:""}
              ${Vm(n)}
            </div>
            <h2>${i(K(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(g+1,r)} из ${r}`:`Kanji ${Math.min(g+1,r)} of ${r}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${Xm(n,"onyomi",o.onyomi,n.onyomi)}
              ${Xm(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${c$(l)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${d$(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${m(f)}" data-level="${m(h)}" data-lesson="${m(L)}" data-card="${m(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${m(f)}" data-level="${m(h)}" data-lesson="${m(L)}" data-card="${m(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function p$(e,t,n,s,r,o="test-ready"){const c=o==="done";return`
      <article class="lesson-player-card lesson-study-complete">
        <div class="lesson-study-complete-copy">
          <span class="pill">${i(c?n.completed:p()==="ru"?"Карточки изучены":"Cards studied")}</span>
          <h2>${i(c?n.lessonComplete:p()==="ru"?"Карточки изучены. Перейдите к упражнениям":"Cards studied. Continue to the exercises")}</h2>
          <p>${i(c?p()==="ru"?"Урок завершён штатно, прогресс сохранён.":"The lesson is completed and progress is saved.":p()==="ru"?"Все карточки урока отвечены. Выполните упражнения ниже, чтобы завершить урок.":"All lesson cards are answered. Complete the exercises below to finish the lesson.")}</p>
          <div class="tag-row">
            <span class="pill">${i(p()==="ru"?`Кандзи ${r}/${s}`:`Kanji ${r}/${s}`)}</span>
            <span class="pill">${i(c?n.completed:p()==="ru"?"упражнения ниже":"exercises below")}</span>
          </div>
        </div>
      </article>
    `}function g$(e,t,n){return`
      <article class="lesson-player-card lesson-study-complete lesson-study-unavailable">
        <div class="lesson-study-complete-copy">
          <span class="pill danger-pill">${i(e||"")} · ${i(p()==="ru"?"карточки недоступны":"cards unavailable")}</span>
          <h2>${i(p()==="ru"?"Не удалось загрузить карточки урока":"Could not load lesson cards")}</h2>
          <p>${i(xi())}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${m(e)}">${i(p()==="ru"?"Повторить":"Retry")}</button>
            <a class="btn ghost" href="#textbooks/${m(e)}">${i(p()==="ru"?"К списку уроков":"Lesson list")}</a>
          </div>
        </div>
      </article>
    `}function oa(e,t,n,s,r={}){const o=As(e,t,n),c=n$(o,n),l=Number(o.answeredCount||0),d=Number(o.total||0),u=r.playerId||Dt(e,t?.id,"player"),f=d?E(l,d):0,h=c?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(l+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":o.status==="incomplete"?p()==="ru"?"Карточки не загружены":"Cards not loaded":p()==="ru"?"Карточки изучены":"Cards studied",g=c?K(c):o.status==="done"?s.lessonComplete:h;return`
      <article class="study-card lesson-player lesson-study-player" id="${m(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(g)}</strong>
          <div class="meter"><i style="width:${f}%"></i></div>
        </div>
        ${c?u$(e,t,c,o.currentIndex,d,s,r):o.status==="incomplete"?g$(e):p$(e,t,s,d,l,o.status)}
      </article>
    `}function m$(e,t){const n=Ye(),s=rn(t),r=Ts(t),o=Kg(t.id),c=As("N5",t,s);let l=o==="completed";const d=`n5:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(G=>gc(G.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(G=>ne().studiedKanji[G.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,N=t.kanji.filter(G=>ne().difficultKanji[G]).join(" · "),k=Ze().find(G=>G.order===t.order+1),x=Dt("N5",t.id,"player"),z=Dt("N5",t.id,"test");return`
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
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,$)}/${$}`,n.kanji,E(c.answeredCount,$))}
            ${M(n.exercises,`${f}/${r.length}`,n.correct,E(f,r.length))}
          </div>
        </article>

        ${oa("N5",t,s,n,{playerId:x,answerAction:"jlpt-lesson-answer",examples:G=>Bt(G),sentence:G=>f$(G,t)})}

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

        <section class="n5-panel" id="${m(z)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(G=>Tg(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>ne().studiedKanji[G.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(N||n.none)}</span>
            </div>
            ${!l&&!C?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${m(t.id)}" ${u||!C?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#textbooks/N5/${m(k.id)}" data-action="n5-open-lesson" data-id="${m(k.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function f$(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Tg(e){const t=Ye(),n=gc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&zn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(qg(e.id))}" type="text" maxlength="2" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Rg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Rg(e,n)}
      </article>
    `}function Rg(e,t){if(!t)return"";const n=Ye(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function h$(e){const t=Ye(),n=ne().activeReviewMode||"due",s=J$(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${m(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>v$(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function v$(e,t){const n=Ye(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Ht(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Bt(e)[0]?.word||e.hiragana||"")} · ${i(Bt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function w$(e){const t=Ye(),n=a.n5FinalTest||{},s=Jg(),r=ne().finalTest,o=ln(r,s),c=o.answered,l=o.ready,d=a.finalTestBusy;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const h=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==h)&&(r.percent=h),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const u=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,f=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
          ${M(t.score,u||f>0?`${f}%`:"—",`${n.passingPercent||80}%`,u||f>0?f:0)}
          ${M(t.mistakes,u?(r.mistakes||[]).length:0,t.difficult,u?E((r.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${qt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,g)=>b$(h,g)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${qt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function b$(e,t){const n=ne().finalTest.answers?.[e.id],s=!!ne().finalTest.completedAt,r=a.finalTestModal&&a.finalTestModal.level==="N5"&&a.finalTestModal.kind==="warning"?a.finalTestModal:null,o=!!(r&&Array.isArray(r.missingIds)&&r.missingIds.includes(e.id));return`
      <article id="${m(kr("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(c=>{const l=n===c.value;return`<button class="btn ${s&&c.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${m(e.id)}" data-value="${m(c.value)}">${i(c.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ye().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ye(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"К N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function _g(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Pg(e){return F(e)||String(e||"").toUpperCase()}function Eg(e){const t=Pg(e);return Array.isArray(a.jlptReadingByLevel?.[t])?a.jlptReadingByLevel[t]:[]}function pc(e){const t=a.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function Mg(e){return Y(ja(String(e?.text||"")).replace(/\s+/g," ").trim())}function k$(e){const t=F(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function y$(){const e=Array.isArray(a.cards)?a.cards:[];if(!e.length)return[];const t=[];return Re.forEach(n=>{Eg(n).forEach((s,r)=>{const o=pc(s),c=Mg(s),l=Rc({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:c,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,k$(n));l&&(l.kind="cloze",l.tiles=Xn(l,e),l.source="markdown",l.sourceId=String(s.id||""),l.sourceKind="markdown",l.sourceTitle=o.title,l.title=o.title,l.genre=s.genre||"",l.goal=s.goal||"",l.passageSource=s.source||"",l.questions=Array.isArray(s.questions)?s.questions:[],l.level=n,l.order=r+1,t.push(l))})}),t}function $$(e){const t=pc(e),n=Mg(e),s=n?Zm(n):"",r=v(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Dc())}</summary>
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
            <span>${i(Dc())}</span>
            <strong>${i(r||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function dr(e){const t=Eg(e);if(!t.length)return"";const n=_g(),s=Pg(e),r=Fa(s,"textbook_reading_block"),o=Nr(s);return(r||o)&&A(),`
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
          ${t.map((c,l)=>j$(c,s,l)).join("")}
        </div>
      </section>
    `}function j$(e,t,n){const s=_g(),r=pc(e),o=Array.isArray(e?.questions)?e.questions:[];return`
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
        ${$$(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(c=>`<li>${i(c)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function la(){a.progress.n5Course=np(Sl(),a.progress.n5Course||{});const e=Ze();!Ft(a.progress.n5Course.currentLessonId)&&e[0]&&(a.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n5Course.completedLessons[s.id]);return!a.progress.n5Course.currentLessonId&&n&&(a.progress.n5Course.currentLessonId=n.id),a.progress.n5Course}function ne(){return la()}function Ze(){return a.n5Textbook?.items||[]}function Ft(e){const t=String(e||"");return t&&Ze().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function S$(){return Ft(ne().currentLessonId)||Ze().find(e=>!ne().completedLessons[e.id])||Ze()[0]||null}function rn(e){return(e?.kanji||[]).map(t=>C$(t,e)).filter(Boolean)}function Ot(){const e=new Set;return Ze().flatMap(t=>rn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function C$(e,t=null){const n=String(e||""),s=a.n5KanjiCatalog?.find(c=>c.kanji===n)||null,r=a.cards.find(c=>c.kanji===n&&String(c.jlpt||"").toUpperCase()==="N5")||a.cards.find(c=>c.kanji===n)||null,o=t?.id||s?.lessonId||null;return r&&s?Ni({...r,lessonId:r.lessonId||o},s):r||(s?Ni({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function ca(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:Y(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:Y(e.hiragana||""),romaji:e.romaji||"",translation:K(e)}]}function Bt(e){return ca(e,e.examples)}function x$(e,t){const n=t?.word||e.kanji,s=Y(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${K(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${K(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function N$(){const e=Ot(),t=ne(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{O(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:ao(),reviews:e.reduce((s,r)=>s+Number(O(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Kg(e){return lr("N5",e)}function L$(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ao(){return Is("N5")}function Ts(e){const t=rn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n5Exercises?.types||[]).map(C=>[C.type,C.title])),r=Object.fromEntries((a.n5Exercises?.types||[]).map(C=>[C.type,C])),o=C=>r[C]||{rewardXp:a.n5Meta?.rewards?.exerciseXp||7,rewardMoon:a.n5Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:an({value:l.id,label:K(l)},t.slice(1).map(C=>({value:C.id,label:K(C)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:an({value:d.kanji,label:d.kanji},t.filter(C=>C.id!==d.id).map(C=>({value:C.kanji,label:C.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=Bt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word,answer:f.reading,answerLabel:f.reading,kanji:u.kanji,cardId:u.id,options:an({value:f.reading,label:f.reading},t.flatMap(C=>Bt(C).map(N=>({value:N.reading,label:N.reading}))).filter(C=>C.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:an({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(C=>({value:v({ru:C.ru,en:C.en}),label:v({ru:C.ru,en:C.en})})),1),...o("sentence")});const g=t[3]||t[0],$=Bt(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:Ga($),answer:$.word,answerLabel:$.word,kanji:g.kanji,cardId:g.id,options:an({value:$.word,label:$.word},t.flatMap(C=>Bt(C).map(N=>({value:N.word,label:N.word}))).filter(C=>C.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];return c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")}),c.slice(0,a.n5Exercises?.lessonQuestionCount||6).map(C=>({...C,level:"N5",lessonId:e.id}))}function an(e,t,n=0){const s=new Set([String(e.value)]),r=[e];if(t.forEach(l=>{const d=String(l.value||"");!d||s.has(d)||r.length>=4||(s.add(d),r.push(l))}),Ot().forEach(l=>{if(r.length>=4)return;const d={value:l.id,label:l.kanji};s.has(String(d.value))||(s.add(String(d.value)),r.push(d))}),r.length<=1)return r;const c=n%r.length;return[...r.slice(c),...r.slice(0,c)]}function Dg(e){for(const t of Ze()){const n=Ts(t).find(s=>s.id===e);if(n)return n}return null}function zn(e,t,n=""){return a.route==="review"&&a.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(a.activeExerciseReviewId||"")===String(t||"")&&(!n||String(a.activeExerciseReviewSource||"")===String(n||""))}function da(e,t,n){return zn(e,n)?a.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function A$(e,t,n){const s=F(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const r=e.exerciseSrs[String(n.id)]||null;if(r)return Yn(r,{level:s,lessonId:n.lessonId||r.lessonId||"",exerciseId:n.id,cardId:n.cardId||r.cardId||"",kanji:n.kanji||r.kanji||"",type:n.type||r.type||"",title:n.title||r.title||null,prompt:n.prompt||r.prompt||"",answer:n.answer||r.answer||"",answerLabel:n.answerLabel||r.answerLabel||""});const o=Sr(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function I$(e,t,n,s){if(!e||!n)return;const r=F(t);r&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=Yn(s,{level:r,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function ua(e,t,n,s,r,o={}){const c=F(e);if(!c||!t||!n)return;const l=new Date().toISOString(),d=zn(c,n.id),u=he(),f=d?re.TOP:re.PRESERVE,h=!!o.quietReward;if(d&&a.reviewExerciseResults?.[n.id])return;const g={selected:s,correct:r,checkedAt:l};d?(a.reviewExerciseResults||(a.reviewExerciseResults={}),a.reviewExerciseResults[n.id]=g,a.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=g;const $=ae(A$(t,c,n)||Sr(c,n.lessonId||"",n.id,n)),L=ye($,r?"good":"again");if(I$(t,c,n,L),Ut($,L,r?"good":"again"),ke(),r){if(a.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=l,o.markCompleted?.(l),(o.markStudied||(()=>{}))();const N=Number(o.rewardXp||0),k=Number(o.rewardMoon||0);(N||k)&&q(N,k,o.rewardKey||`exercise:${n.id}`,{silent:h})}}else if(a.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const N=n.answerLabel||n.answer;N&&o.markWordMistake?.(N)}pe({scrollPolicy:f,viewportSnapshot:u}),A(),Pt("textbook exercise post-render effects",()=>{D(r?"answer_correct":"answer_wrong"),Q({silent:h})},{scrollPolicy:f,viewportSnapshot:u})}function Fg(e){const t=F(e?.level||"");return t==="N5"?{xp:Number(a.n5Meta?.rewards?.exerciseXp||7),moon:Number(a.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(a.n4Meta?.rewards?.readingXp||a.n4Meta?.rewards?.exerciseXp||10),moon:Number(a.n4Meta?.rewards?.readingMoon||a.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(a.n3Meta?.rewards?.readingXp||a.n3Meta?.rewards?.exerciseXp||10),moon:Number(a.n3Meta?.rewards?.readingMoon||a.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(a.n2Meta?.rewards?.readingXp||a.n2Meta?.rewards?.exerciseXp||10),moon:Number(a.n2Meta?.rewards?.readingMoon||a.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(a.n1Meta?.rewards?.readingXp||a.n1Meta?.rewards?.exerciseXp||10),moon:Number(a.n1Meta?.rewards?.readingMoon||a.n1Meta?.rewards?.exerciseMoon||1)}}function Og(e,t,n,s={}){if(!e?.id)return;const r=new Date().toISOString(),o=zn(e.level,e.id,"reading"),c=he(),l=o?re.TOP:re.PRESERVE,d=!!s.quietReward,u=ae(ts(e)||es(e));if(a.reviewExerciseResults||(a.reviewExerciseResults={}),e.kind==="cloze"){u.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():u.selectedIndices||[],u.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(z=>({kanji:String(z?.kanji||""),reading:String(z?.reading||"")})).filter(z=>z.kanji):u.selectedTiles||[],u.selectedText=String(t||""),u.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():u.wrongIndexes||[],u.completed=!0,u.completedAt=r,u.correct=!!n,u.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:r}},Ds(e,u),a.reviewExerciseResults[e.id]=ae(u),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1;const N=ae(u),k=ye(N,n?"good":"again");k.selectedIndices=u.selectedIndices,k.selectedTiles=u.selectedTiles,k.selectedText=u.selectedText,k.wrongIndexes=u.wrongIndexes,k.completed=!0,k.completedAt=r,k.correct=!!n,k.answers=u.answers,Ds(e,k),a.reviewExerciseResults[e.id]=ae(k),Ut(N,k,n?"good":"again"),ke();const x=Fg(e);n?q(x.xp,x.moon,`reading:${e.id}`,{silent:d}):q(Math.max(1,Math.round(x.xp*.35)),0,`reading:${e.id}:again`,{silent:d}),o&&To("reading-cloze"),pe({scrollPolicy:l,viewportSnapshot:c}),A(),Pt("reading cloze post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Q({silent:d})},{scrollPolicy:l,viewportSnapshot:c});return}const f=e.question||e.questions?.[0]||null,h=String(s.questionKey||f?.id||e.id);if(u.answers||(u.answers={}),u.answers[h])return;if(u.answers[h]={selected:String(t||""),correct:!!n,checkedAt:r},u.completed=!!h&&Object.keys(u.answers).length>=Xc(),u.completedAt=u.completed?r:u.completedAt||null,u.correct=u.completed?Object.values(u.answers).every(N=>!!N?.correct):!1,u.selectedText=String(t||""),Ds(e,u),a.reviewExerciseResults[e.id]=ae(u),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1,A(),!u.completed){pe({scrollPolicy:l,viewportSnapshot:c}),Pt("reading question post-render sound",()=>{D(n?"answer_correct":"answer_wrong")},{scrollPolicy:l,viewportSnapshot:c});return}const g=ae(u),$=Object.values(u.answers).every(N=>!!N?.correct),L=ye(g,$?"good":"again");L.answers=u.answers,L.completed=!0,L.completedAt=r,L.correct=$,L.selectedText=String(t||""),L.wrongQuestions=Object.entries(u.answers).filter(([,N])=>!N?.correct).map(([N])=>N),Ds(e,L),a.reviewExerciseResults[e.id]=ae(L),Ut(g,L,$?"good":"again"),ke();const C=Fg(e);$?q(C.xp,C.moon,`reading:${e.id}`,{silent:d}):q(Math.max(1,Math.round(C.xp*.25)),0,`reading:${e.id}:again`,{silent:d}),o&&To("reading-exercise"),pe({scrollPolicy:l,viewportSnapshot:c}),A(),Pt("reading exercise post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Q({silent:d})},{scrollPolicy:l,viewportSnapshot:c})}function T$(e){const t=yr();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),r=s===String(n.answer||"");Og(t.exercise,s,r,{questionKey:String(e.dataset.question||n.id||t.exercise.id),quietReward:!0})}function R$(e){const t=yr();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=ae(ts(n)||es(n));if(s.completed||s.selectedIndices?.includes(e))return;const r=Math.max(1,zt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=r){J(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),Ds(n,s),a.activeExerciseReviewSelection=s.selectedIndices.slice(),a.reviewExerciseResults[n.id]=ae(s),A(),s.selectedIndices.length>=r){Bg();return}P()}function _$(){const e=yr();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=ae(ts(t)||es(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),a.activeExerciseReviewSelection=n.selectedIndices.slice(),a.reviewExerciseResults[t.id]=ae(n),Ds(t,n),A(),P())}function P$(){const e=yr();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=ae(ts(t)||es(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],a.activeExerciseReviewSelection=[],a.reviewExerciseResults[t.id]=ae(n),Ds(t,n),A(),P())}function Bg(){const e=yr();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=zt(t),s=ae(ts(t)||es(t)),r=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(r.length<n.length){J(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=r.map(d=>t.tiles?.[d]).filter(Boolean),c=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),l=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);Og(t,o.map(d=>d.kanji).join(""),c,{selectedIndices:r,selectedTiles:o,wrongIndexes:l,quietReward:!0})}function E$(){a.activeExerciseReviewTranslationOpen=!a.activeExerciseReviewTranslationOpen,P()}function gc(e){return da("N5",ne(),e)}function M$(e){const t=Dg(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;zg(t,n,s)}function K$(e){const t=Dg(e);if(!t)return;const n=document.getElementById(qg(t.id)),s=n?String(n.value||"").trim():"";zg(t,s,s===t.answer)}function zg(e,t,n){const s=ne();ua("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||a.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,quietReward:!0,markStudied:()=>ur(e.kanji,e.cardId),markDifficult:()=>pa(e.kanji,e.cardId),markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function D$(e,t,n,s){var g;const r=he(),o=F(e)||String(e||"").toUpperCase(),c=o==="N5"?Ft(t):o==="N4"?Un(t):o==="N3"?Gn(t):o==="N2"?Hn(t):o==="N1"?Rs(t):null;if(!c)return;const l=Ol(o,c),d=l.find($=>String($.id)===String(n))||ie(n);if(!d)return;const u=As(o,c,l);if(u.session.answers?.[d.id])return;const f=new Date().toISOString();u.session.answers[d.id]={remembered:!!s,rating:s?"good":"again",answeredAt:f};const h=zo({cards:l,session:u.session,confirmedCompleted:dc(o,c.id)});u.session.currentIndex=h.currentIndex,u.session.phase=h.phase,u.session.updatedAt=f,h.status==="test-ready"&&((g=u.session).testOpenedAt||(g.testOpenedAt=f)),a.pendingFocus=null,pe({scrollPolicy:re.PRESERVE,viewportSnapshot:r}),A(),Vr(`${o} lesson SRS post-render commit`,()=>{const $=s?"good":"again";o==="N5"?Ug(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N4"?em(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N3"?pm(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N2"?Sm(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N1"&&Em(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0})})}function Ug(e,t,n="review",s={}){const r=ie(e);if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ae(O(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ut(h,g,f),ke(),ur(r.kanji,r.id),ne().srsKanji[r.kanji]=new Date().toISOString(),d?(pa(r.kanji,r.id,!1),a.progress.totalCorrect+=1,q(a.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${r.id}`,{silent:l})):Oe(t)?(pa(r.kanji,r.id),a.progress.totalWrong+=1,q(a.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,q(t==="easy"?a.n5Meta?.rewards?.knowXp||6:a.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),A(),Pt("N5 SRS post-render effects",()=>{D(Oe(t)?"answer_wrong":"answer_correct"),Q({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function F$(e){const t=ie(e);if(!t)return;const n=he(),s=ne();s.writingPractice[t.kanji]||(s.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},ur(t.kanji,t.id),q(8,1,`n5_writing:${t.id}`)),Q(),A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:n})}function O$(e){const t=Ft(e);if(!t)return;const n=ne(),s=`n5:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=rn(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof J=="function"&&J(g);return}const c=Ts(t);if(!(c.length>0&&c.every(g=>gc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),rn(t).forEach(g=>{ur(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=O(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ae($),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Ze().find(g=>g.order===t.order+1)?.id||t.id;const d=On(),u=d.sessions[Qe("N5",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Qe("N5",t.id),d.lastUpdatedAt=g}ne(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),A({immediate:!0}),cr("N5");const f=a.n5Meta?.rewards?.lessonCompleteXp||45,h=a.n5Meta?.rewards?.lessonCompleteMoon||6;q(f,h,`n5_lesson:${t.id}`),Tr("N5",t.id),ht({title:`${Ye().lessonComplete}: ${v(t.title)}`,message:Ye().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),P()}function ur(e,t=null){if(!e)return;const n=ne();er(n,e)}function pa(e,t=null,n=!0){if(e&&(ne().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(a.progress.cards[t]=ye(ae(s),"again"))}}function B$(e){const t=Ft(e);t&&(cn("textbook-lesson",{level:"N5",lessonId:t.id}),ne().currentLessonId=t.id,It("N5",t.id,"n5_lesson_open"),en("N5",t,"n5_lesson_open"),ga(t.id))}function z$(){ga("")}function U$(e=null){e&&(ne().activeReviewMode=e),ga("review")}function ga(e){a.route="textbooks",a.activeTextbookLevel="N5",a.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";yt(t),A(),ue(),Mt()}function J$(e="due"){const t=Date.now(),n=ne(),s=Ot();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=O(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Jg(){const e=Ot(),t=Ze(),n=a.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(a.n5FinalTest?.questionCount||24,Math.max(e.length,1)),r=[];for(let o=0;o<s;o+=1){const c=e[o*7%e.length]||e[o%e.length],l=n[o%n.length],d=t.find(u=>u.kanji.includes(c.kanji))||t[0];r.push(G$(l,c,d,o))}return r.filter(Boolean)}function G$(e,t,n,s){const o=Bt(t)[0],c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:an({value:t.id,label:K(t)},Ot().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:an({value:o.reading,label:o.reading},Ot().flatMap(l=>Bt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value!==o.reading),s)};if(e==="sentence"&&c){const l=v({ru:c.ru,en:c.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:an({value:l,label:l},Ze().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:as(o),answer:l,answerLabel:l,options:an({value:l,label:l},Ot().flatMap(d=>Bt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==l),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:an({value:t.kanji,label:t.kanji},Ot().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function q$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ne().finalTest.answers[t]=n,A(),P())}function Gg(e=!1){if(a.finalTestBusy)return;const t=ne().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=Jg(),s=a.n5FinalTest||{},r=Ye(),o=ln(t,n),c=wC(s),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const x=o.firstMissingId?`#${kr("n5",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=x,A();return}let u=0;const f=[],h=[];n.forEach(x=>{const z=String(t.answers?.[x.id]||"").trim();z===x.answer?(u+=1,ur(x.kanji,x.cardId)):(z||h.push(x),f.push({id:x.id,kanji:x.kanji,answer:x.answerLabel,selected:z}),pa(x.kanji,x.cardId))});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let N=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(x=>x.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const x=Number(s?.rewards?.completeXp||120),z=Number(s?.rewards?.completeMoon||20);N+=x,k+=z,q(x,z,"n5_final_complete")}if(t.passed&&!L){const x=Number(s?.rewards?.passXp||80),z=Number(s?.rewards?.passMoon||12);N+=x,k+=z,q(x,z,"n5_final_pass")}t.lastRewardXp=N,t.lastRewardMoon=k,Ba("N5",t),ne(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.finalTest=a.progress.n5Course.finalTest||{},Object.assign(a.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),A({immediate:!0}),a.finalTestModal={kind:"result",level:"N5",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:N,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function H$(){ne().finalTest=Sl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),P()}function qg(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function V$(e){a.activeTextbookLevel="N4",a.activeJlptLesson="N4";const t=mc();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return ij();if(n==="review")return ej();if(n==="kanji")return nj();if(n==="grammar")return sj();if(n==="reading")return rj();if(n==="listening")return aj();const s=Un(n);return s?(W().currentLessonId=s.id,It("N4",s.id,"n4_lesson_page"),en("N4",s,"n4_lesson_page"),Q$(e,s)):W$(e)}function W$(e){const t=cj(),n=Te(),s=lt(),r=lj(),o=a.n4Meta||{},c=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${m(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N4_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n4-hero">
          <div class="n5-hero-copy">
            <span class="pill">170 ${i(n.kanji)} · 48 ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(c)}</p>
            <div class="textbook-actions">
            <a class="btn primary" href="#textbooks/N4/${m(r?.id||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${m(r?.id||"n4-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${i(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${i(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${$n("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${a.n4Meta?.grammarCount||a.n4Grammar.length}`,n.grammar,E(t.completedGrammar,a.n4Meta?.grammarCount||a.n4Grammar.length))}
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
            ${s.map(l=>X$(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n4Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(v(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${dr("N4")}
      </section>
    `}function X$(e){const t=Qg(e.id),n=Te();let s=e.kanji.filter(r=>W().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N4/${m(e.id)}" data-action="n4-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(dj(t))}</small>
      </a>
    `}function Q$(e,t){const n=Te(),s=pr(t),r=ma(t),o=Qg(t.id),c=As("N4",t,s);let l=o==="completed";const d=`n4:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(G=>hc(G.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(G=>W().studiedKanji[G.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,N=t.kanji.filter(G=>W().difficultKanji[G]).join(" · "),k=lt().find(G=>G.order===t.order+1),x=Dt("N4",t.id,"player"),z=Dt("N4",t.id,"test");return`
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
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${f}/${r.length}`,n.correct,E(f,r.length))}
          </div>
        </article>

        ${oa("N4",t,s,n,{playerId:x,answerAction:"jlpt-lesson-answer",examples:G=>jt(G),sentence:G=>Y$(G,t)})}

        ${Z$(t)}

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

        <section class="n5-panel" id="${m(z)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(G=>Hg(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>W().studiedKanji[G.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(N||n.none)}</span>
            </div>
            ${!l&&!C?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${m(t.id)}" ${u||!C?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#textbooks/N4/${m(k.id)}" data-action="n4-open-lesson" data-id="${m(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Y$(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Te().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Z$(e){const t=Te(),n=(e.grammarFocus||[]).map(s=>fc(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${m(s.id)}" data-value="${m(X(s))}">${i(W().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Hg(e){const t=Te(),n=hc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&zn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(rm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Vg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Vg(e,n)}
      </article>
    `}function Vg(e,t){if(!t)return"";const n=Te(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function ej(e){const t=Te(),n=W().activeReviewMode||"due",s=xj(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${m(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>tj(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function tj(e,t){const n=Te(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Ht(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(jt(e)[0]?.word||e.hiragana||"")} · ${i(jt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function nj(e){const t=Te(),n=et();return`
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
              <div class="n5-kanji-topline"><span class="pill">${r+1}/170</span><span class="pill">${i(O(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(jt(s)[0]?.word||"")} · ${i(jt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${m(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function sj(e){const t=Te();return`
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
          ${M(t.completedGrammar,`${Object.keys(W().completedGrammar||{}).length}/${a.n4Grammar.length}`,t.grammar,E(Object.keys(W().completedGrammar||{}).length,a.n4Grammar.length))}
          ${M(t.questions,a.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${a.n4Grammar.map(n=>{const s=W().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(v(n.title))}</h3>
                <p>${i(v(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Y(r.reading||""))}</span><small>${i(v({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(v(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(Ue(n).length?Ue(n):[X(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${X(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function rj(e){const t=Te(),n=Fa("N4","n4_reading_page"),s=Nr("N4");return(n||s)&&A(),`
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
          ${a.n4Reading.map(r=>Wg(r,"reading")).join("")}
        </div>
      </section>
    `}function aj(e){const t=Te();return`
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
          ${a.n4Listening.map(n=>Wg(n,"listening")).join("")}
        </div>
      </section>
    `}function Wg(e,t){const n=Te(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],r=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n4-question-block">
              <h3>${i(v(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function ij(e){const t=Te(),n=a.n4FinalTest||{},s=nm(),r=W().finalTest,o=ln(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?E((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n4-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${qt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>oj(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${a.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${qt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function oj(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Te().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Te(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function mc(){a.progress.n4Course=sp(Cl(),a.progress.n4Course||{});const e=lt();!Un(a.progress.n4Course.currentLessonId)&&e[0]&&(a.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n4Course.completedLessons[s.id]);return!a.progress.n4Course.currentLessonId&&n&&(a.progress.n4Course.currentLessonId=n.id),a.progress.n4Course}function W(){return mc()}function lt(){return a.n4Textbook?.items||[]}function Un(e){const t=String(e||"");return t&&lt().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function lj(){return Un(W().currentLessonId)||lt().find(e=>!W().completedLessons[e.id])||lt()[0]||null}function pr(e){return(e?.kanji||[]).map(t=>Xg(t)).filter(Boolean)}function et(){const e=new Set;return(a.n4KanjiCatalog||[]).map(t=>Xg(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Xg(e){const t=String(e||""),n=a.n4KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N4")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Li(s,n):s||(n?Li({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function fc(e){const t=String(e||"");return a.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function jt(e){return ca(e,e.examples)}function cj(){const e=et(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{O(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Is("N4"),completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((s,r)=>s+Number(O(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Qg(e){return lr("N4",e)}function dj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ma(e){const t=pr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n4Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n4Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n4Meta?.rewards?.exerciseXp||9,rewardMoon:a.n4Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:ct({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ct({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=jt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ct({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>jt(k).map(x=>({value:x.reading,label:x.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ct({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=jt(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ga($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:ct({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>jt(k).map(x=>({value:x.word,label:x.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=fc(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v(C.question||C.explanation),answer:X(C),answerLabel:X(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:ct({value:X(C),label:X(C)},Ue(C).filter(k=>k!==X(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const N=n[1]||n[0];return N&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:N.jp,answer:v({ru:N.ru,en:N.en}),answerLabel:v({ru:N.ru,en:N.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ct({value:v({ru:N.ru,en:N.en}),label:v({ru:N.ru,en:N.en})},n.filter(k=>k.jp!==N.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n4Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N4",lessonId:e.id}))}function ct(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),et().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function Yg(e){for(const t of lt()){const n=ma(t).find(s=>s.id===e);if(n)return n}return null}function hc(e){return da("N4",W(),e)}function uj(e){const t=Yg(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Zg(t,s,r)}function pj(e){const t=Yg(e);if(!t)return;const n=document.getElementById(rm(t.id)),s=n?String(n.value||"").trim():"";Zg(t,s,s===t.answer)}function Zg(e,t,n){const s=W();ua("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||a.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,quietReward:!0,markStudied:()=>gr(e.kanji,e.cardId),markDifficult:()=>fa(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function em(e,t,n="review",s={}){const r=ie(e)||et().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ae(O(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ut(h,g,f),ke(),gr(r.kanji,r.id),W().srsKanji[r.kanji]=new Date().toISOString(),d?(fa(r.kanji,r.id,!1),a.progress.totalCorrect+=1,q(a.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${r.id}`,{silent:l})):Oe(t)?(fa(r.kanji,r.id),a.progress.totalWrong+=1,q(a.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,q(t==="easy"?a.n4Meta?.rewards?.knowXp||7:a.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),A(),Pt("N4 SRS post-render effects",()=>{D(Oe(t)?"answer_wrong":"answer_correct"),Q({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function gj(e){const t=ie(e)||et().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},gr(t.kanji,t.id),q(9,1,`n4_writing:${t.id}`)),Q(),A(),P()}function mj(e){const t=Un(e);if(!t)return;const n=W(),s=`n4:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=pr(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=ma(t);if(!(c.length>0&&c.every(g=>hc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),pr(t).forEach(g=>{gr(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=O(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ae($),"good"))}),(t.grammarFocus||[]).map(g=>fc(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=lt().find(g=>g.order===t.order+1)?.id||t.id;const d=On(),u=d.sessions[Qe("N4",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Qe("N4",t.id),d.lastUpdatedAt=g}W(),cr("N4");const f=a.n4Meta?.rewards?.lessonCompleteXp||65,h=a.n4Meta?.rewards?.lessonCompleteMoon||8;q(f,h,`n4_lesson:${t.id}`),Tr("N4",t.id),ht({title:`${Te().lessonComplete}: ${v(t.title)}`,message:Te().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),P()}function gr(e,t=null){if(!e)return;const n=W();er(n,e)}function fa(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(a.progress.cards[t]=ye(ae(s),"again"))}}function fj(e,t=""){const n=a.n4Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=X(n),r=t||s,o=r===s,c=W();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),q(a.n4Meta?.rewards?.grammarXp||10,a.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):o||(a.progress.totalWrong+=1,D("answer_wrong")),ke(),Q(),A(),P()}function hj(e,t="0",n=""){tm("reading",e,t,n)}function vj(e,t="0",n=""){tm("listening",e,t,n)}function tm(e,t,n="0",s=""){const o=(e==="reading"?a.n4Reading:a.n4Listening).find($=>$.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=W(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!g[o.id]){g[o.id]=new Date().toISOString();const $=e==="reading"?a.n4Meta?.rewards?.readingXp||35:a.n4Meta?.rewards?.listeningXp||30,L=e==="reading"?a.n4Meta?.rewards?.readingMoon||4:a.n4Meta?.rewards?.listeningMoon||3;q($,L,`n4_${e}:${o.id}`),a.progress.totalCorrect+=1,D("answer_correct")}else d||(a.progress.totalWrong+=1,D("answer_wrong"));ke(),Q(),A(),P()}function wj(e){const t=Un(e);t&&(cn("textbook-lesson",{level:"N4",lessonId:t.id}),W().currentLessonId=t.id,It("N4",t.id,"n4_lesson_open"),en("N4",t,"n4_lesson_open"),Jn(t.id))}function bj(){Jn("")}function kj(e=null){e&&(W().activeReviewMode=e),Jn("review")}function yj(){Jn("kanji")}function $j(){Jn("grammar")}function jj(){Jn("reading")}function Sj(){Jn("listening")}function Cj(){Jn("final-test")}function Jn(e){a.route="textbooks",a.activeTextbookLevel="N4",a.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#textbooks/N4/${encodeURIComponent(e)}`:"#textbooks/N4";yt(t),Q(),A(),ue(),Mt()}function xj(e="due"){const t=Date.now(),n=W(),s=et();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=O(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function nm(){const e=et();if(!e.length)return[];const t=a.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=lt().find(d=>d.kanji.includes(o.kanji))||lt()[0];s.push(Nj(c,o,l,r))}return s.filter(Boolean)}function Nj(e,t,n,s){const o=jt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ct({value:t.id,label:K(t)},et().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ct({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},et().flatMap(l=>jt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=v({ru:c.ru,en:c.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:ct({value:l,label:l},lt().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:as(o),answer:l,answerLabel:l,options:ct({value:l,label:l},et().flatMap(d=>jt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n4Grammar[s%Math.max(a.n4Grammar.length,1)];if(l)return{id:`n4-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${v(l.question||l.explanation)}`,answer:X(l),answerLabel:X(l),options:ct({value:X(l),label:X(l)},Ue(l).filter(d=>d!==X(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n4Reading[s%Math.max(a.n4Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n4-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||v(l.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ct({value:t.kanji,label:t.kanji},et().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Lj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,A(),P())}function sm(e=!1){if(a.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=nm(),s=a.n4FinalTest||{},r=Te(),o=ln(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const x=o.firstMissingId?`#${kr("n4",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=x,A();return}let u=0;const f=[],h=[];n.forEach(x=>{const z=String(t.answers?.[x.id]||"").trim();if(z===x.answer){if(u+=1,x.kanji&&gr(x.kanji,x.cardId),x.grammarId){const G=W();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else z||h.push(x),f.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:z}),x.kanji&&fa(x.kanji,x.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let N=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(x=>x.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const x=Number(s?.rewards?.completeXp||180),z=Number(s?.rewards?.completeMoon||35);N+=x,k+=z,q(x,z,"n4_final_complete")}if(t.passed&&!L){const x=Number(s?.rewards?.passXp||90),z=Number(s?.rewards?.passMoon||15);N+=x,k+=z,q(x,z,"n4_final_pass")}t.lastRewardXp=N,t.lastRewardMoon=k,Ba("N4",t),W(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N4",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:N,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function Aj(){W().finalTest=Cl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),P()}function rm(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Ij(e){a.activeTextbookLevel="N3",a.activeJlptLesson="N3";const t=wc();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Uj();if(n==="review")return Kj();if(n==="kanji")return Fj();if(n==="grammar")return Oj();if(n==="reading")return Bj();if(n==="listening")return zj();const s=Gn(n);return s?(H().currentLessonId=s.id,It("N3",s.id,"n3_lesson_page"),en("N3",s,"n3_lesson_page"),_j(e,s)):Tj(e)}function Tj(e){const t=qj(),n=xe(),s=dt(),r=Gj(),o=a.n3Meta||{},c=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${m(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N3_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n3-hero">
          <div class="n5-hero-copy">
            <span class="pill">370 ${i(n.kanji)} · 80 ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(c)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n3/${m(r?.id||"n3-lesson-1")}" data-action="n3-open-lesson" data-id="${m(r?.id||"n3-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n3-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n3-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n3-grammar">${i(n.grammarN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-reading">${i(n.readingN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-listening">${i(n.listeningN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${$n("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${a.n3Meta?.grammarCount||a.n3Grammar.length}`,n.grammar,E(t.completedGrammar,a.n3Meta?.grammarCount||a.n3Grammar.length))}
          ${M(n.completedReading,`${t.completedReading}/${a.n3Meta?.readingCount||a.n3Reading.length}`,n.readingN3,E(t.completedReading,a.n3Meta?.readingCount||a.n3Reading.length))}
          ${M(n.completedListening,`${t.completedListening}/${a.n3Meta?.listeningCount||a.n3Listening.length}`,n.listeningN3,E(t.completedListening,a.n3Meta?.listeningCount||a.n3Listening.length))}
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
            ${s.map(l=>Rj(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n3Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(v(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${dr("N3")}
      </section>
    `}function Rj(e){const t=cm(e.id),n=xe();let s=e.kanji.filter(r=>H().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${m(e.id)}" data-action="n3-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Hj(t))}</small>
      </a>
    `}function _j(e,t){const n=xe(),s=mr(t),r=ha(t),o=cm(t.id),c=As("N3",t,s);let l=o==="completed";const d=`n3:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(U=>kc(U.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(U=>H().studiedKanji[U.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,N=t.kanji.filter(U=>H().difficultKanji[U]).join(" · "),k=dt().find(U=>U.order===t.order+1),x=am(t),z=x?!!H().completedReading[x.id]:!1,G=Dt("N3",t.id,"player"),Js=Dt("N3",t.id,"test");return`
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
              ${t.grammarFocus.map(U=>`<span class="pill">${i(U)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${f}/${r.length}`,n.correct,E(f,r.length))}
          </div>
        </article>

        ${oa("N3",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:U=>St(U),sentence:U=>Ej(U,t)})}

        ${Mj(t)}

        ${Pj(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(Y(U.reading||""))}</span>
                <small>${i(v({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${m(Js)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(U=>im(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>H().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${x?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(N||n.none)}</span>
            </div>
            ${!l&&!C?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${m(t.id)}" ${u||!C?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n3/${m(k.id)}" data-action="n3-open-lesson" data-id="${m(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function am(e){return e?.miniReadingId&&a.n3Reading.find(t=>t.id===e.miniReadingId)||null}function Pj(e){const t=xe(),n=am(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${vc(n,"reading")}
      </section>
    `:""}function Ej(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(xe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Mj(e){const t=xe(),n=(e.grammarFocus||[]).map(s=>bc(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${m(s.id)}" data-value="${m(X(s))}">${i(H().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function im(e){const t=xe(),n=kc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&zn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(hm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${om(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${om(e,n)}
      </article>
    `}function om(e,t){if(!t)return"";const n=xe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Kj(e){const t=xe(),n=H().activeReviewMode||"due",s=cS(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${m(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>Dj(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Dj(e,t){const n=xe(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Ht(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(St(e)[0]?.word||e.hiragana||"")} · ${i(St(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Fj(e){const t=xe(),n=tt();return`
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
              <div class="n5-kanji-topline"><span class="pill">${r+1}/370</span><span class="pill">${i(O(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(St(s)[0]?.word||"")} · ${i(St(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${m(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Oj(e){const t=xe();return`
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
          ${M(t.completedGrammar,`${Object.keys(H().completedGrammar||{}).length}/${a.n3Grammar.length}`,t.grammar,E(Object.keys(H().completedGrammar||{}).length,a.n3Grammar.length))}
          ${M(t.questions,a.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${a.n3Grammar.map(n=>{const s=H().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(v(n.title))}</h3>
                <p>${i(v(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Y(r.reading||""))}</span><small>${i(v({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(v(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(Ue(n).length?Ue(n):[X(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${X(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Bj(e){const t=xe(),n=Fa("N3","n3_reading_page"),s=Nr("N3");return(n||s)&&A(),`
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
          ${a.n3Reading.map(r=>vc(r,"reading")).join("")}
        </div>
      </section>
    `}function zj(e){const t=xe();return`
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
          ${a.n3Listening.map(n=>vc(n,"listening")).join("")}
        </div>
      </section>
    `}function vc(e,t){const n=xe(),s=t==="reading"?H().completedReading[e.id]:H().completedListening[e.id],r=t==="reading"?H().readingAnswers:H().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n3-question-block">
              <h3>${i(v(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Uj(e){const t=xe(),n=a.n3FinalTest||{},s=mm(),r=H().finalTest,o=ln(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?E((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n3-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${qt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>Jj(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${qt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Jj(e,t){const n=H().finalTest.answers?.[e.id],s=!!H().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(xe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function xe(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function wc(){a.progress.n3Course=rp(xl(),a.progress.n3Course||{});const e=dt();!Gn(a.progress.n3Course.currentLessonId)&&e[0]&&(a.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n3Course.completedLessons[s.id]);return!a.progress.n3Course.currentLessonId&&n&&(a.progress.n3Course.currentLessonId=n.id),a.progress.n3Course}function H(){return wc()}function dt(){return a.n3Textbook?.items||[]}function Gn(e){const t=String(e||"");return t&&dt().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function Gj(){return Gn(H().currentLessonId)||dt().find(e=>!H().completedLessons[e.id])||dt()[0]||null}function mr(e){return(e?.kanji||[]).map(t=>lm(t)).filter(Boolean)}function tt(){const e=new Set;return(a.n3KanjiCatalog||[]).map(t=>lm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function lm(e){const t=String(e||""),n=a.n3KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N3")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ii(s,n):s||(n?Ii({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function bc(e){const t=String(e||"");return a.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function St(e){return ca(e,e.examples)}function qj(){const e=tt(),t=H(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{O(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Is("N3"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(O(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function cm(e){return lr("N3",e)}function Hj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ha(e){const t=mr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n3Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n3Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n3Meta?.rewards?.exerciseXp||10,rewardMoon:a.n3Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:ut({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ut({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=St(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ut({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>St(k).map(x=>({value:x.reading,label:x.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ut({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=St(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ga($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:ut({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>St(k).map(x=>({value:x.word,label:x.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=bc(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v(C.question||C.explanation),answer:X(C),answerLabel:X(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:ut({value:X(C),label:X(C)},Ue(C).filter(k=>k!==X(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const N=n[1]||n[0];return N&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:N.jp,answer:v({ru:N.ru,en:N.en}),answerLabel:v({ru:N.ru,en:N.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ut({value:v({ru:N.ru,en:N.en}),label:v({ru:N.ru,en:N.en})},n.filter(k=>k.jp!==N.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n3Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N3",lessonId:e.id}))}function ut(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),tt().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function dm(e){for(const t of dt()){const n=ha(t).find(s=>s.id===e);if(n)return n}return null}function kc(e){return da("N3",H(),e)}function Vj(e){const t=dm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;um(t,s,r)}function Wj(e){const t=dm(e);if(!t)return;const n=document.getElementById(hm(t.id)),s=n?String(n.value||"").trim():"";um(t,s,s===t.answer)}function um(e,t,n){const s=H();ua("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||a.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,quietReward:!0,markStudied:()=>fr(e.kanji,e.cardId),markDifficult:()=>va(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function pm(e,t,n="review",s={}){const r=ie(e)||tt().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ae(O(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ut(h,g,f),ke(),fr(r.kanji,r.id),H().srsKanji[r.kanji]=new Date().toISOString(),d?(va(r.kanji,r.id,!1),a.progress.totalCorrect+=1,q(a.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${r.id}`,{silent:l})):Oe(t)?(va(r.kanji,r.id),a.progress.totalWrong+=1,q(a.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,q(t==="easy"?a.n3Meta?.rewards?.knowXp||8:a.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),A(),Pt("N3 SRS post-render effects",()=>{D(Oe(t)?"answer_wrong":"answer_correct"),Q({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function Xj(e){const t=ie(e)||tt().find(s=>String(s.id)===String(e));if(!t)return;const n=H();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},fr(t.kanji,t.id),q(9,1,`n3_writing:${t.id}`)),Q(),A(),P()}function Qj(e){const t=Gn(e);if(!t)return;const n=H(),s=`n3:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=mr(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=ha(t);if(!(c.length>0&&c.every(g=>kc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),mr(t).forEach(g=>{fr(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=O(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ae($),"good"))}),(t.grammarFocus||[]).map(g=>bc(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=dt().find(g=>g.order===t.order+1)?.id||t.id;const d=On(),u=d.sessions[Qe("N3",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Qe("N3",t.id),d.lastUpdatedAt=g}H(),cr("N3");const f=a.n3Meta?.rewards?.lessonCompleteXp||75,h=a.n3Meta?.rewards?.lessonCompleteMoon||9;q(f,h,`n3_lesson:${t.id}`),Tr("N3",t.id),ht({title:`${xe().lessonComplete}: ${v(t.title)}`,message:xe().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),P()}function fr(e,t=null){if(!e)return;const n=H();er(n,e)}function va(e,t=null,n=!0){if(e&&(H().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(a.progress.cards[t]=ye(ae(s),"again"))}}function Yj(e,t=""){const n=a.n3Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=X(n),r=t||s,o=r===s,c=H();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),q(a.n3Meta?.rewards?.grammarXp||11,a.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):o||(a.progress.totalWrong+=1,D("answer_wrong")),ke(),Q(),A(),P()}function Zj(e,t="0",n=""){gm("reading",e,t,n)}function eS(e,t="0",n=""){gm("listening",e,t,n)}function gm(e,t,n="0",s=""){const o=(e==="reading"?a.n3Reading:a.n3Listening).find(C=>C.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=H(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening,$=!!g[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const L=(o.questions||[]).every((C,N)=>h[`${o.id}:${N}`]?.correct);if(d?(a.progress.totalCorrect+=1,D("answer_correct")):(a.progress.totalWrong+=1,D("answer_wrong")),L&&!$){g[o.id]=new Date().toISOString();const C=e==="reading"?a.n3Meta?.rewards?.readingXp||38:a.n3Meta?.rewards?.listeningXp||34,N=e==="reading"?a.n3Meta?.rewards?.readingMoon||4:a.n3Meta?.rewards?.listeningMoon||4;q(C,N,`n3_${e}:${o.id}`)}ke(),Q(),A(),P()}function tS(e){const t=Gn(e);t&&(cn("textbook-lesson",{level:"N3",lessonId:t.id}),H().currentLessonId=t.id,It("N3",t.id,"n3_lesson_open"),en("N3",t,"n3_lesson_open"),qn(t.id))}function nS(){qn("")}function sS(e=null){e&&(H().activeReviewMode=e),qn("review")}function rS(){qn("kanji")}function aS(){qn("grammar")}function iS(){qn("reading")}function oS(){qn("listening")}function lS(){qn("final-test")}function qn(e){a.route="textbooks",a.activeTextbookLevel="N3",a.activeTextbookSubroute=e||null,H().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";yt(t),Q(),A(),ue(),Mt()}function cS(e="due"){const t=Date.now(),n=H(),s=tt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=O(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function mm(){const e=tt();if(!e.length)return[];const t=a.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=dt().find(d=>d.kanji.includes(o.kanji))||dt()[0];s.push(dS(c,o,l,r))}return s.filter(Boolean)}function dS(e,t,n,s){const o=St(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ut({value:t.id,label:K(t)},tt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ut({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},tt().flatMap(l=>St(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=v({ru:c.ru,en:c.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:ut({value:l,label:l},dt().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:as(o),answer:l,answerLabel:l,options:ut({value:l,label:l},tt().flatMap(d=>St(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n3Grammar[s%Math.max(a.n3Grammar.length,1)];if(l)return{id:`n3-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${v(l.question||l.explanation)}`,answer:X(l),answerLabel:X(l),options:ut({value:X(l),label:X(l)},Ue(l).filter(d=>d!==X(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n3Reading[s%Math.max(a.n3Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n3-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||v(l.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ut({value:t.kanji,label:t.kanji},tt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function uS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(H().finalTest.answers[t]=n,A(),P())}function fm(e=!1){if(a.finalTestBusy)return;const t=H().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=mm(),s=a.n3FinalTest||{},r=xe(),o=ln(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const x=o.firstMissingId?`#${kr("n3",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=x,A();return}let u=0;const f=[],h=[];n.forEach(x=>{const z=String(t.answers?.[x.id]||"").trim();if(z===x.answer){if(u+=1,x.kanji&&fr(x.kanji,x.cardId),x.grammarId){const G=H();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else z||h.push(x),f.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:z}),x.kanji&&va(x.kanji,x.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let N=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(x=>x.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const x=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);N+=x,k+=z,q(x,z,"n3_final_complete")}if(t.passed&&!L){const x=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);N+=x,k+=z,q(x,z,"n3_final_pass")}t.lastRewardXp=N,t.lastRewardMoon=k,Ba("N3",t),H(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N3",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:N,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function pS(){H().finalTest=xl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),P()}function hm(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function gS(e){a.activeTextbookLevel="N2",a.activeJlptLesson="N2";const t=$c();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return xS();if(n==="review")return kS();if(n==="kanji")return $S();if(n==="grammar")return jS();if(n==="reading")return SS();if(n==="listening")return CS();const s=Hn(n);return s?(V().currentLessonId=s.id,It("N2",s.id,"n2_lesson_page"),en("N2",s,"n2_lesson_page"),hS(e,s)):mS(e)}function mS(e){const t=AS(),n=Ne(),s=pt(),r=LS(),o=a.n2Meta||{},c=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${m(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N2_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n2-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(o.kanjiCount||380)} ${i(n.kanji)} · ${i(o.grammarCount||a.n2Grammar.length||120)} ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(c)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n2/${m(r?.id||"n2-lesson-1")}" data-action="n2-open-lesson" data-id="${m(r?.id||"n2-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n2-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n2-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n2-grammar">${i(n.grammarN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-reading">${i(n.readingN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-listening">${i(n.listeningN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${$n("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${a.n2Meta?.grammarCount||a.n2Grammar.length}`,n.grammar,E(t.completedGrammar,a.n2Meta?.grammarCount||a.n2Grammar.length))}
          ${M(n.completedReading,`${t.completedReading}/${a.n2Meta?.readingCount||a.n2Reading.length}`,n.readingN2,E(t.completedReading,a.n2Meta?.readingCount||a.n2Reading.length))}
          ${M(n.completedListening,`${t.completedListening}/${a.n2Meta?.listeningCount||a.n2Listening.length}`,n.listeningN2,E(t.completedListening,a.n2Meta?.listeningCount||a.n2Listening.length))}
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
            ${s.map(l=>fS(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n2Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(v(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${dr("N2")}
      </section>
    `}function fS(e){const t=ym(e.id),n=Ne();let s=e.kanji.filter(r=>V().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${m(e.id)}" data-action="n2-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(IS(t))}</small>
      </a>
    `}function hS(e,t){const n=Ne(),s=hr(t),r=wa(t),o=ym(t.id),c=As("N2",t,s);let l=o==="completed";const d=`n2:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(U=>Sc(U.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(U=>V().studiedKanji[U.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,N=t.kanji.filter(U=>V().difficultKanji[U]).join(" · "),k=pt().find(U=>U.order===t.order+1),x=vm(t),z=x?!!V().completedReading[x.id]:!1,G=Dt("N2",t.id,"player"),Js=Dt("N2",t.id,"test");return`
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
              ${t.grammarFocus.map(U=>`<span class="pill">${i(U)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${f}/${r.length}`,n.correct,E(f,r.length))}
          </div>
        </article>

        ${oa("N2",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:U=>Ct(U),sentence:U=>wS(U,t)})}

        ${bS(t)}

        ${vS(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(Y(U.reading||""))}</span>
                <small>${i(v({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${m(Js)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(U=>wm(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>V().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${x?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(N||n.none)}</span>
            </div>
            ${!l&&!C?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${m(t.id)}" ${u||!C?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n2/${m(k.id)}" data-action="n2-open-lesson" data-id="${m(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function vm(e){return e?.miniReadingId&&a.n2Reading.find(t=>t.id===e.miniReadingId)||null}function vS(e){const t=Ne(),n=vm(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${yc(n,"reading")}
      </section>
    `:""}function wS(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Ne().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function bS(e){const t=Ne(),n=(e.grammarFocus||[]).map(s=>jc(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${m(s.id)}" data-value="${m(X(s))}">${i(V().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function wm(e){const t=Ne(),n=Sc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&zn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(Lm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${bm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${bm(e,n)}
      </article>
    `}function bm(e,t){if(!t)return"";const n=Ne(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function kS(e){const t=Ne(),n=V().activeReviewMode||"due",s=qS(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${m(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>yS(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function yS(e,t){const n=Ne(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Ht(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Ct(e)[0]?.word||e.hiragana||"")} · ${i(Ct(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function $S(e){const t=Ne(),n=nt();return`
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
              <div class="n5-kanji-topline"><span class="pill">${r+1}/380</span><span class="pill">${i(O(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(Ct(s)[0]?.word||"")} · ${i(Ct(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${m(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function jS(e){const t=Ne();return`
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
          ${M(t.completedGrammar,`${Object.keys(V().completedGrammar||{}).length}/${a.n2Grammar.length}`,t.grammar,E(Object.keys(V().completedGrammar||{}).length,a.n2Grammar.length))}
          ${M(t.questions,a.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${a.n2Grammar.map(n=>{const s=V().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(v(n.title))}</h3>
                <p>${i(v(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Y(r.reading||""))}</span><small>${i(v({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(v(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(Ue(n).length?Ue(n):[X(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${X(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function SS(e){const t=Ne(),n=Fa("N2","n2_reading_page"),s=Nr("N2");return(n||s)&&A(),`
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
          ${a.n2Reading.map(r=>yc(r,"reading")).join("")}
        </div>
      </section>
    `}function CS(e){const t=Ne();return`
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
          ${a.n2Listening.map(n=>yc(n,"listening")).join("")}
        </div>
      </section>
    `}function yc(e,t){const n=Ne(),s=t==="reading"?V().completedReading[e.id]:V().completedListening[e.id],r=t==="reading"?V().readingAnswers:V().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n2-question-block">
              <h3>${i(v(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function xS(e){const t=Ne(),n=a.n2FinalTest||{},s=xm(),r=V().finalTest,o=ln(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?E((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n2-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${qt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>NS(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${qt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function NS(e,t){const n=V().finalTest.answers?.[e.id],s=!!V().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ne().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ne(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function $c(){a.progress.n2Course=ap(Nl(),a.progress.n2Course||{});const e=pt();!Hn(a.progress.n2Course.currentLessonId)&&e[0]&&(a.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n2Course.completedLessons[s.id]);return!a.progress.n2Course.currentLessonId&&n&&(a.progress.n2Course.currentLessonId=n.id),a.progress.n2Course}function V(){return $c()}function pt(){return a.n2Textbook?.items||[]}function Hn(e){const t=String(e||"");return t&&pt().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function LS(){return Hn(V().currentLessonId)||pt().find(e=>!V().completedLessons[e.id])||pt()[0]||null}function hr(e){return(e?.kanji||[]).map(t=>km(t)).filter(Boolean)}function nt(){const e=new Set;return(a.n2KanjiCatalog||[]).map(t=>km(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function km(e){const t=String(e||""),n=a.n2KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N2")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ri(s,n):s||(n?Ri({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function jc(e){const t=String(e||"");return a.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Ct(e){return ca(e,e.examples)}function AS(){const e=nt(),t=V(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{O(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Is("N2"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(O(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function ym(e){return lr("N2",e)}function IS(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function wa(e){const t=hr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n2Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n2Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n2Meta?.rewards?.exerciseXp||11,rewardMoon:a.n2Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:gt({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:gt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=Ct(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:gt({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>Ct(k).map(x=>({value:x.reading,label:x.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:gt({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=Ct(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ga($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:gt({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>Ct(k).map(x=>({value:x.word,label:x.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=jc(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v(C.question||C.explanation),answer:X(C),answerLabel:X(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:gt({value:X(C),label:X(C)},Ue(C).filter(k=>k!==X(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const N=n[1]||n[0];return N&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:N.jp,answer:v({ru:N.ru,en:N.en}),answerLabel:v({ru:N.ru,en:N.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:gt({value:v({ru:N.ru,en:N.en}),label:v({ru:N.ru,en:N.en})},n.filter(k=>k.jp!==N.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n2Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N2",lessonId:e.id}))}function gt(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),nt().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function $m(e){for(const t of pt()){const n=wa(t).find(s=>s.id===e);if(n)return n}return null}function Sc(e){return da("N2",V(),e)}function TS(e){const t=$m(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;jm(t,s,r)}function RS(e){const t=$m(e);if(!t)return;const n=document.getElementById(Lm(t.id)),s=n?String(n.value||"").trim():"";jm(t,s,s===t.answer)}function jm(e,t,n){const s=V();ua("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,quietReward:!0,markStudied:()=>vr(e.kanji,e.cardId),markDifficult:()=>ba(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Sm(e,t,n="review",s={}){const r=ie(e)||nt().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ae(O(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ut(h,g,f),ke(),vr(r.kanji,r.id),V().srsKanji[r.kanji]=new Date().toISOString(),d?(ba(r.kanji,r.id,!1),a.progress.totalCorrect+=1,q(a.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${r.id}`,{silent:l})):Oe(t)?(ba(r.kanji,r.id),a.progress.totalWrong+=1,q(a.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,q(t==="easy"?a.n2Meta?.rewards?.knowXp||9:a.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),A(),Pt("N2 SRS post-render effects",()=>{D(Oe(t)?"answer_wrong":"answer_correct"),Q({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function _S(e){const t=ie(e)||nt().find(s=>String(s.id)===String(e));if(!t)return;const n=V();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},vr(t.kanji,t.id),q(9,1,`n2_writing:${t.id}`)),Q(),A(),P()}function PS(e){const t=Hn(e);if(!t)return;const n=V(),s=`n2:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=hr(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=wa(t);if(!(c.length>0&&c.every(g=>Sc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),hr(t).forEach(g=>{vr(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=O(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ae($),"good"))}),(t.grammarFocus||[]).map(g=>jc(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=pt().find(g=>g.order===t.order+1)?.id||t.id;const d=On(),u=d.sessions[Qe("N2",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Qe("N2",t.id),d.lastUpdatedAt=g}V(),cr("N2");const f=a.n2Meta?.rewards?.lessonCompleteXp||85,h=a.n2Meta?.rewards?.lessonCompleteMoon||10;q(f,h,`n2_lesson:${t.id}`),Tr("N2",t.id),ht({title:`${Ne().lessonComplete}: ${v(t.title)}`,message:Ne().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),P()}function vr(e,t=null){if(!e)return;const n=V();er(n,e)}function ba(e,t=null,n=!0){if(e&&(V().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(a.progress.cards[t]=ye(ae(s),"again"))}}function ES(e,t=""){const n=a.n2Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=X(n),r=t||s,o=r===s,c=V();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),q(a.n2Meta?.rewards?.grammarXp||12,a.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):o||(a.progress.totalWrong+=1,D("answer_wrong")),ke(),Q(),A(),P()}function MS(e,t="0",n=""){Cm("reading",e,t,n)}function KS(e,t="0",n=""){Cm("listening",e,t,n)}function Cm(e,t,n="0",s=""){const o=(e==="reading"?a.n2Reading:a.n2Listening).find(C=>C.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=V(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening,$=!!g[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const L=(o.questions||[]).every((C,N)=>h[`${o.id}:${N}`]?.correct);if(d?(a.progress.totalCorrect+=1,D("answer_correct")):(a.progress.totalWrong+=1,D("answer_wrong")),L&&!$){g[o.id]=new Date().toISOString();const C=e==="reading"?a.n2Meta?.rewards?.readingXp||42:a.n2Meta?.rewards?.listeningXp||38,N=e==="reading"?a.n2Meta?.rewards?.readingMoon||4:a.n2Meta?.rewards?.listeningMoon||4;q(C,N,`n2_${e}:${o.id}`)}ke(),Q(),A(),P()}function DS(e){const t=Hn(e);t&&(cn("textbook-lesson",{level:"N2",lessonId:t.id}),V().currentLessonId=t.id,It("N2",t.id,"n2_lesson_open"),en("N2",t,"n2_lesson_open"),Vn(t.id))}function FS(){Vn("")}function OS(e=null){e&&(V().activeReviewMode=e),Vn("review")}function BS(){Vn("kanji")}function zS(){Vn("grammar")}function US(){Vn("reading")}function JS(){Vn("listening")}function GS(){Vn("final-test")}function Vn(e){a.route="textbooks",a.activeTextbookLevel="N2",a.activeTextbookSubroute=e||null,V().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";yt(t),Q(),A(),ue(),Mt()}function qS(e="due"){const t=Date.now(),n=V(),s=nt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=O(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function xm(){const e=nt();if(!e.length)return[];const t=a.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=pt().find(d=>d.kanji.includes(o.kanji))||pt()[0];s.push(HS(c,o,l,r))}return s.filter(Boolean)}function HS(e,t,n,s){const o=Ct(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:gt({value:t.id,label:K(t)},nt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:gt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},nt().flatMap(l=>Ct(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=v({ru:c.ru,en:c.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:gt({value:l,label:l},pt().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:as(o),answer:l,answerLabel:l,options:gt({value:l,label:l},nt().flatMap(d=>Ct(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n2Grammar[s%Math.max(a.n2Grammar.length,1)];if(l)return{id:`n2-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${v(l.question||l.explanation)}`,answer:X(l),answerLabel:X(l),options:gt({value:X(l),label:X(l)},Ue(l).filter(d=>d!==X(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n2Reading[s%Math.max(a.n2Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n2-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||v(l.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:gt({value:t.kanji,label:t.kanji},nt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function VS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(V().finalTest.answers[t]=n,A(),P())}function Nm(e=!1){if(a.finalTestBusy)return;const t=V().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=xm(),s=a.n2FinalTest||{},r=Ne(),o=ln(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const x=o.firstMissingId?`#${kr("n2",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=x,A();return}let u=0;const f=[],h=[];n.forEach(x=>{const z=String(t.answers?.[x.id]||"").trim();if(z===x.answer){if(u+=1,x.kanji&&vr(x.kanji,x.cardId),x.grammarId){const G=V();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else z||h.push(x),f.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:z}),x.kanji&&ba(x.kanji,x.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let N=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(x=>x.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const x=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);N+=x,k+=z,q(x,z,"n2_final_complete")}if(t.passed&&!L){const x=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);N+=x,k+=z,q(x,z,"n2_final_pass")}t.lastRewardXp=N,t.lastRewardMoon=k,Ba("N2",t),V(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N2",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:N,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function WS(){V().finalTest=Nl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),P()}function Lm(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function XS(e){a.activeTextbookLevel="N1",a.activeJlptLesson="N1";const t=io();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return d0();if(n==="review")return r0();if(n==="kanji")return i0();if(n==="grammar")return o0();if(n==="reading")return l0();if(n==="listening")return c0();const s=Rs(n);return s?(ee().currentLessonId=s.id,It("N1",s.id,"n1_lesson_page"),en("N1",s,"n1_lesson_page"),ZS(e,s)):QS(e)}function QS(e){const t=g0(),n=Le(),s=mt(),r=p0(),o=a.n1Meta||{},c=v(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N1 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(v(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${m(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N1_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(o.kanjiCount||1047)} ${i(n.kanji)} · ${i(o.grammarCount||a.n1Grammar.length||142)} ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(c)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n1/${m(r?.id||"bulk-n1-01")}" data-action="n1-open-lesson" data-id="${m(r?.id||"bulk-n1-01")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n1-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n1-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n1-grammar">${i(n.grammarN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-reading">${i(n.readingN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-listening">${i(n.listeningN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${$n("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${a.n1Meta?.grammarCount||a.n1Grammar.length}`,n.grammar,E(t.completedGrammar,a.n1Meta?.grammarCount||a.n1Grammar.length))}
          ${M(n.completedReading,`${t.completedReading}/${a.n1Meta?.readingCount||a.n1Reading.length}`,n.readingN1,E(t.completedReading,a.n1Meta?.readingCount||a.n1Reading.length))}
          ${M(n.completedListening,`${t.completedListening}/${a.n1Meta?.listeningCount||a.n1Listening.length}`,n.listeningN1,E(t.completedListening,a.n1Meta?.listeningCount||a.n1Listening.length))}
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
            ${s.map(l=>YS(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(v((a.n1Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(v(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${dr("N1")}
      </section>
    `}function YS(e){const t=Rm(e.id),n=Le();let s=e.kanji.filter(r=>ee().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${m(e.id)}" data-action="n1-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(v(e.title))}</h3>
        <p>${i(v(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(m0(t))}</small>
      </a>
    `}function ZS(e,t){const n=Le(),s=ka(t),r=ya(t),o=Rm(t.id),c=As("N1",t,s);let l=o==="completed";const d=`n1:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(U=>Lc(U.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(U=>ee().studiedKanji[U.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,N=t.kanji.filter(U=>ee().difficultKanji[U]).join(" · "),k=mt().find(U=>U.order===t.order+1),x=Am(t),z=x?!!ee().completedReading[x.id]:!1,G=Dt("N1",t.id,"player"),Js=Dt("N1",t.id,"test");return`
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
              ${t.grammarFocus.map(U=>`<span class="pill">${i(U)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(c.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${f}/${r.length}`,n.correct,E(f,r.length))}
          </div>
        </article>

        ${oa("N1",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:U=>Nt(U),sentence:U=>t0(U,t)})}

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
                <span>${i(Y(U.reading||""))}</span>
                <small>${i(v({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${m(Js)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(U=>s0(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>ee().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${x?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(N||n.none)}</span>
            </div>
            ${!l&&!C?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n1-complete-lesson" data-id="${m(t.id)}" ${u||!C?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n1/${m(k.id)}" data-action="n1-open-lesson" data-id="${m(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Am(e){return e?.miniReadingId&&a.n1Reading.find(t=>t.id===e.miniReadingId)||null}function e0(e){const t=Le(),n=Am(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Cc(n,"reading")}
      </section>
    `:""}function t0(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Y(n.reading||""))}</span>
        <small>${i(v({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Le().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function n0(e){const t=Le(),n=(e.grammarFocus||[]).map(s=>Nc(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${m(s.id)}" data-value="${m(X(s))}">${i(ee().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function s0(e){const t=Le(),n=Lc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&zn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(v(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(Fm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(v(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Im(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(v(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Im(e,n)}
      </article>
    `}function Im(e,t){if(!t)return"";const n=Le(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function r0(e){const t=Le(),n=ee().activeReviewMode||"due",s=I0(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n1-review" data-mode="${m(r.id)}">${i(v(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>a0(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function a0(e,t){const n=Le(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Ht(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Nt(e)[0]?.word||e.hiragana||"")} · ${i(Nt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function i0(e){const t=Le(),n=xt(),s=n.slice(0,160);return`
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
              <div class="n5-kanji-topline"><span class="pill">${o+1}/${n.length}</span><span class="pill">${i(O(r.id).state)}</span></div>
              <div class="n5-big-kanji">${i(r.kanji)}</div>
              <h3>${i(K(r))}</h3>
              <p>${i(Nt(r)[0]?.word||"")} · ${i(Nt(r)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${m(r.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function o0(e){const t=Le();return`
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
          ${M(t.completedGrammar,`${Object.keys(ee().completedGrammar||{}).length}/${a.n1Grammar.length}`,t.grammar,E(Object.keys(ee().completedGrammar||{}).length,a.n1Grammar.length))}
          ${M(t.questions,a.n1Grammar.length,t.grammar,100)}
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
                  ${(Ue(n).length?Ue(n):[X(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n1-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${X(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function l0(e){const t=Le(),n=Fa("N1","n1_reading_page"),s=Nr("N1");return(n||s)&&A(),`
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
          ${a.n1Reading.map(r=>Cc(r,"reading")).join("")}
        </div>
      </section>
    `}function c0(e){const t=Le();return`
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
          ${a.n1Listening.map(n=>Cc(n,"listening")).join("")}
        </div>
      </section>
    `}function Cc(e,t){const n=Le(),s=t==="reading"?ee().completedReading[e.id]:ee().completedListening[e.id],r=t==="reading"?ee().readingAnswers:ee().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
      <article class="n1-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(v(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n1-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n1-question-block">
              <h3>${i(v(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(v(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function d0(e){const t=Le(),n=a.n1FinalTest||{},s=Km(),r=ee().finalTest,o=ln(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
          ${M(t.questions,`${c}/${s.length}`,t.finalTest,E(c,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(r.mistakes||[]).length:0,t.difficult,d?E((r.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n1-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${qt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>u0(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${qt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function u0(e,t){const n=ee().finalTest.answers?.[e.id],s=!!ee().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Le().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Le(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function io(){a.progress.n1Course=ip(Ll(),a.progress.n1Course||{});const e=mt();!Rs(a.progress.n1Course.currentLessonId)&&e[0]&&(a.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n1Course.completedLessons[s.id]);return!a.progress.n1Course.currentLessonId&&n&&(a.progress.n1Course.currentLessonId=n.id),a.progress.n1Course}function ee(){return io()}function mt(){return a.n1Textbook?.items||[]}function Rs(e){const t=String(e||"");return t&&mt().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function p0(){return Rs(ee().currentLessonId)||mt().find(e=>!ee().completedLessons[e.id])||mt()[0]||null}function ka(e){const t=xc();return(e?.kanji||[]).map(n=>Tm(n,t)).filter(Boolean)}function xt(){const e=xc(),t=new Set;return(a.n1KanjiCatalog||[]).map(n=>Tm(n.kanji,e)).filter(Boolean).filter(n=>t.has(n.kanji)?!1:(t.add(n.kanji),!0))}function xc(){if(hs?.catalog===a.n1KanjiCatalog&&hs?.cards===a.cards)return hs;const e=new Map;(a.n1KanjiCatalog||[]).forEach(s=>{s?.kanji&&e.set(s.kanji,s)});const t=new Map,n=new Map;return a.cards.forEach(s=>{if(s?.id&&n.set(String(s.id),s),!s?.kanji)return;const r=String(s.jlpt||"").toUpperCase();(r==="N1"||e.has(s.kanji))&&(!t.has(s.kanji)||r==="N1")&&t.set(s.kanji,s)}),hs={catalog:a.n1KanjiCatalog,cards:a.cards,detailsByKanji:e,cardsByKanji:t,cardsById:n},hs}function Tm(e,t=xc()){const n=String(e||""),s=t.detailsByKanji.get(n)||null,r=t.cardsByKanji.get(n)||(s?t.cardsById.get(String(s.courseCardId||s.id)):null)||null;return r&&s?Pi(r,s):r||(s?Pi({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:s.lessonId,jlpt:"N1",examples:[]},s):null)}function Nc(e){const t=String(e||"");return a.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Nt(e){return ca(e,e.examples)}function g0(){const e=xt(),t=ee(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{const r=a.progress.cards?.[String(s.id)];r&&Pe(r).state!=="New"&&n.add(s.kanji)}),{total:a.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Is("N1"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(a.progress.cards?.[String(r.id)]?.reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Rm(e){return lr("N1",e)}function m0(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ya(e){const t=ka(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n1Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n1Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n1Meta?.rewards?.exerciseXp||11,rewardMoon:a.n1Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:ft({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ft({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=Nt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ft({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>Nt(k).map(x=>({value:x.reading,label:x.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:v({ru:h.ru,en:h.en}),answerLabel:v({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ft({value:v({ru:h.ru,en:h.en}),label:v({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=Nt(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ga($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:ft({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>Nt(k).map(x=>({value:x.word,label:x.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=Nc(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:v(C.question||C.explanation),answer:X(C),answerLabel:X(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:ft({value:X(C),label:X(C)},Ue(C).filter(k=>k!==X(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const N=n[1]||n[0];return N&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:N.jp,answer:v({ru:N.ru,en:N.en}),answerLabel:v({ru:N.ru,en:N.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ft({value:v({ru:N.ru,en:N.en}),label:v({ru:N.ru,en:N.en})},n.filter(k=>k.jp!==N.jp).map(k=>({value:v({ru:k.ru,en:k.en}),label:v({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n1Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N1",lessonId:e.id}))}function ft(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),xt().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function _m(e){for(const t of mt()){const n=ya(t).find(s=>s.id===e);if(n)return n}return null}function Lc(e){return da("N1",ee(),e)}function f0(e){const t=_m(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Pm(t,s,r)}function h0(e){const t=_m(e);if(!t)return;const n=document.getElementById(Fm(t.id)),s=n?String(n.value||"").trim():"";Pm(t,s,s===t.answer)}function Pm(e,t,n){const s=ee();ua("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,quietReward:!0,markStudied:()=>$a(e.kanji,e.cardId),markDifficult:()=>oo(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Em(e,t,n="review",s={}){const r=ie(e)||xt().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ae(O(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ut(h,g,f),ke(),$a(r.kanji,r.id),ee().srsKanji[r.kanji]=new Date().toISOString(),d?(oo(r.kanji,r.id,!1),a.progress.totalCorrect+=1,q(a.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${r.id}`,{silent:l})):Oe(t)?(oo(r.kanji,r.id),a.progress.totalWrong+=1,q(a.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,q(t==="easy"?a.n1Meta?.rewards?.knowXp||9:a.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),A(),Pt("N1 SRS post-render effects",()=>{D(Oe(t)?"answer_wrong":"answer_correct"),Q({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function v0(e){const t=ie(e)||xt().find(s=>String(s.id)===String(e));if(!t)return;const n=ee();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},$a(t.kanji,t.id),q(9,1,`n1_writing:${t.id}`)),Q(),A(),P()}function w0(e){const t=Rs(e);if(!t)return;const n=ee(),s=`n1:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=ka(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=ya(t);if(!(c.length>0&&c.every(g=>Lc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),ka(t).forEach(g=>{$a(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=O(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ae($),"good"))}),(t.grammarFocus||[]).map(g=>Nc(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=mt().find(g=>g.order===t.order+1)?.id||t.id;const d=On(),u=d.sessions[Qe("N1",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Qe("N1",t.id),d.lastUpdatedAt=g}ee(),cr("N1");const f=a.n1Meta?.rewards?.lessonCompleteXp||85,h=a.n1Meta?.rewards?.lessonCompleteMoon||10;q(f,h,`n1_lesson:${t.id}`),Tr("N1",t.id),ht({title:`${Le().lessonComplete}: ${v(t.title)}`,message:Le().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),P()}function $a(e,t=null){if(!e)return;const n=ee();er(n,e)}function oo(e,t=null,n=!0){if(e&&(ee().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(a.progress.cards[t]=ye(ae(s),"again"))}}function b0(e,t=""){const n=a.n1Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=X(n),r=t||s,o=r===s,c=ee();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),q(a.n1Meta?.rewards?.grammarXp||12,a.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):o||(a.progress.totalWrong+=1,D("answer_wrong")),ke(),Q(),A(),P()}function k0(e,t="0",n=""){Mm("reading",e,t,n)}function y0(e,t="0",n=""){Mm("listening",e,t,n)}function Mm(e,t,n="0",s=""){const o=(e==="reading"?a.n1Reading:a.n1Listening).find(C=>C.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=ee(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening,$=!!g[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const L=(o.questions||[]).every((C,N)=>h[`${o.id}:${N}`]?.correct);if(d?(a.progress.totalCorrect+=1,D("answer_correct")):(a.progress.totalWrong+=1,D("answer_wrong")),L&&!$){g[o.id]=new Date().toISOString();const C=e==="reading"?a.n1Meta?.rewards?.readingXp||55:a.n1Meta?.rewards?.listeningXp||50,N=e==="reading"?a.n1Meta?.rewards?.readingMoon||4:a.n1Meta?.rewards?.listeningMoon||4;q(C,N,`n1_${e}:${o.id}`)}ke(),Q(),A(),P()}function $0(e){const t=Rs(e);t&&(cn("textbook-lesson",{level:"N1",lessonId:t.id}),ee().currentLessonId=t.id,It("N1",t.id,"n1_lesson_open"),en("N1",t,"n1_lesson_open"),Wn(t.id))}function j0(){Wn("")}function S0(e=null){e&&(ee().activeReviewMode=e),Wn("review")}function C0(){Wn("kanji")}function x0(){Wn("grammar")}function N0(){Wn("reading")}function L0(){Wn("listening")}function A0(){Wn("final-test")}function Wn(e){a.route="textbooks",a.activeTextbookLevel="N1",a.activeTextbookSubroute=e||null,ee().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";yt(t),Q(),A(),ue(),Mt()}function I0(e="due"){const t=Date.now(),n=ee(),s=xt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=O(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Km(){const e=xt();if(!e.length)return[];const t=a.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=mt().find(d=>d.kanji.includes(o.kanji))||mt()[0];s.push(T0(c,o,l,r))}return s.filter(Boolean)}function T0(e,t,n,s){const o=Nt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ft({value:t.id,label:K(t)},xt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ft({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},xt().flatMap(l=>Nt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=v({ru:c.ru,en:c.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:ft({value:l,label:l},mt().flatMap(d=>d.sentences||[]).map(d=>({value:v({ru:d.ru,en:d.en}),label:v({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:as(o),answer:l,answerLabel:l,options:ft({value:l,label:l},xt().flatMap(d=>Nt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n1Grammar[s%Math.max(a.n1Grammar.length,1)];if(l)return{id:`n1-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${v(l.question||l.explanation)}`,answer:X(l),answerLabel:X(l),options:ft({value:X(l),label:X(l)},Ue(l).filter(d=>d!==X(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n1Reading[s%Math.max(a.n1Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n1-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||v(l.title)} ${v(d.prompt)}`,answer:d.answer,answerLabel:v((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:v(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ft({value:t.kanji,label:t.kanji},xt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function R0(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ee().finalTest.answers[t]=n,A(),P())}function Dm(e=!1){if(a.finalTestBusy)return;const t=ee().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=Km(),s=a.n1FinalTest||{},r=Le(),o=ln(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const x=o.firstMissingId?`#${kr("n1",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=x,A();return}let u=0;const f=[],h=[];n.forEach(x=>{const z=String(t.answers?.[x.id]||"").trim();if(z===x.answer){if(u+=1,x.kanji&&$a(x.kanji,x.cardId),x.grammarId){const G=ee();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else z||h.push(x),f.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:z}),x.kanji&&oo(x.kanji,x.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let N=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(x=>x.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const x=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);N+=x,k+=z,q(x,z,"n1_final_complete")}if(t.passed&&!L){const x=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);N+=x,k+=z,q(x,z,"n1_final_pass")}t.lastRewardXp=N,t.lastRewardMoon=k,Ba("N1",t),ee(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N1",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:N,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function _0(){ee().finalTest=Ll().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),P()}function Fm(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Om(e){const t=Ar(e.jlpt);if(!t)return"";const n={...md(),...gd()};return`
      <div class="jlpt-practice-grid">
        ${P0(t,n)}
        ${E0(t,n)}
        ${M0(t,n)}
        ${D0(t,n)}
      </div>
    `}function P0(e,t){return e.apps.length?`
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
    `:""}function E0(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${Bm(t.hiragana,n)}
          ${Bm(t.katakana,s)}
        </div>
      </article>
    `}function Bm(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(v(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function M0(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${K0(n)}</strong>
                <small>${i(n.romaji)} · ${i(v(n.meaning))}</small>
                <p>${i(v(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function K0(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function D0(e,t){const n=Ir(e);if(!n)return"";const s=Os(),r=s.selected[n.id]||[],o=!!s.checked[n.id],c=s.results[n.id]||null,l=r.map(f=>n.tiles[f]).filter(Boolean),d=o&&c?.correct,u=o&&c?c.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(v(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${F0(n,l,u)}</div>
        <p class="label">${i(Y(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((f,h)=>{const g=r.includes(h);return`
              <button class="sentence-tile ${g?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${h}" ${g||d?"disabled":""}>
                <small>${i(f.reading)}</small>
                <strong>${i(f.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <p class="sentence-result ${o?d?"is-success":"is-error":""}">
          ${i(c?.message||t.fillBlanks)}
        </p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="check-jlpt-practice" ${d?"disabled":""}>${i(t.check)}</button>
          <button class="btn" type="button" data-action="undo-jlpt-tile" ${!r.length||d?"disabled":""}>${i(t.undo)}</button>
          <button class="btn" type="button" data-action="clear-jlpt-practice" ${!r.length||d?"disabled":""}>${i(t.clear)}</button>
          <button class="btn" type="button" data-action="next-jlpt-practice">${i(t.next)}</button>
        </div>
      </article>
    `}function F0(e,t,n){let s=0;return String(e.sentence||"").split("___").map((r,o,c)=>{if(o===c.length-1)return i(r);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),f=u.some((g,$)=>n.includes(s+$));s+=d;const h=u.length?u.map(g=>`<span>${i(g.kanji)}</span>`).join(""):`<span>${i("□".repeat(d))}</span>`;return`${i(r)}<span class="sentence-blank ${f?"is-wrong":""}">${h}</span>`}).join("")}function O0(){const e=Sa(oN()),t=xC(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?ie(t.card?.id||t.cardId||t.progress?.cardId||""):null;SC(t);const r=t?t.kind==="card"?s?Ym(s):Ms():t.kind==="kana"?yC(t,n):_C(t):Ms();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(R("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Сейчас":"Due now",vt(),"due")}
              ${M(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${M(p()==="ru"?"Позже":"Learning later",lN(),"learning")}
              ${M(p()==="ru"?"Всего SRS":"Total SRS",cN(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${rs("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${r}
          ${Pc(s,n)}
        </div>
        ${B0()}
      </section>
    `}function B0(){try{return z0()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),a.progress&&(a.progress.sentencePractice=Al(Zs().sentencePractice,{})),""}}function z0(){const e=on(),t=co(e),n={...wr(),...Ac()},s=U0(e,n);if(!e.length)return`
      <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${i(n.title)}</h2>
          <p>${i(n.noLearned)}</p>
          ${s}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(R("learn"))}</button>
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
      `;const r=Tc(t,e);if(!r)return"";const{exercise:o,tiles:c,selectedTiles:l,answerFlat:d,wrongIndexes:u,complete:f,awarded:h}=r,g=new Set(a.progress.sentencePractice.selected),$=a.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${a.progress.sentencePractice.checked?f?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",a.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(G0(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(a.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${Um(o,l,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(q0(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${c.map((C,N)=>{const k=g.has(N),x=u.includes(a.progress.sentencePractice.selected.indexOf(N));return`
              <button class="sentence-tile ${k?"is-used":""} ${x?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${N}" ${k||f?"disabled":""}>
                <span>${i(C.reading)}</span>
                <strong>${i(C.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i($.message||n.tip.replace("{count}",d.length))}
          ${f&&!h?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!a.progress.sentencePractice.selected.length||f?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!a.progress.sentencePractice.selected.length||f?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function U0(e,t){const n=De(),s=Ki(n.customDraft||{}),r=Array.isArray(n.customSentences)?n.customSentences:[],o=r.length,c=!!n.customEditingId,l=n.customStatus?` is-${n.customStatus}`:"";return`
      <details class="sentence-builder" ${c||n.customMessage?"open":""}>
        <summary>
          <span>${i(t.customTitle)}</span>
          <small>${i(t.customCount.replace("{count}",o))}</small>
        </summary>
        <div class="sentence-builder-grid">
          <label class="field sentence-builder-wide">
            <span>${i(t.customSentence)}</span>
            <textarea data-sentence-draft="jp" rows="2" autocomplete="off" spellcheck="false" placeholder="${m(t.customSentencePlaceholder)}">${i(s.jp||"")}</textarea>
          </label>
          <label class="field sentence-builder-wide">
            <span>${i(t.customReading)}</span>
            <input data-sentence-draft="hiragana" type="text" autocomplete="off" spellcheck="false" value="${m(s.hiragana||"")}" placeholder="${m(t.customReadingPlaceholder)}" />
          </label>
          <label class="field">
            <span>${i(t.customTranslationRu)}</span>
            <input data-sentence-draft="ru" type="text" value="${m(s.ru||"")}" placeholder="${m(t.customTranslationRuPlaceholder)}" />
          </label>
          <label class="field">
            <span>${i(t.customTranslationEn)}</span>
            <input data-sentence-draft="en" type="text" value="${m(s.en||"")}" placeholder="${m(t.customTranslationEnPlaceholder)}" />
          </label>
        </div>
        <div class="sentence-builder-actions">
          <button class="btn primary" type="button" data-action="add-custom-sentence">${i(c?t.updateCustom:t.addCustom)}</button>
          ${c?`<button class="btn ghost" type="button" data-action="cancel-custom-sentence-edit">${i(t.cancelEdit)}</button>`:""}
          <span class="sentence-builder-message${l}">${i(n.customMessage||t.customHelp.replace("{learned}",e.length))}</span>
        </div>
        ${J0(r,e,t)}
      </details>
    `}function J0(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const r=Ic(s,t),o=!!(r&&Xn(r,t).length>=Math.max(4,zt(r).length)),c=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
                <button class="btn" type="button" data-action="edit-custom-sentence" data-id="${m(s.id)}">${i(n.editCustom)}</button>
                <button class="btn ghost" type="button" data-action="delete-custom-sentence" data-id="${m(s.id)}">${i(n.deleteCustom)}</button>
              </div>
            </article>
          `}).join("")}
      </div>
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function G0(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function wr(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Ac(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function q0(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function zm(e=on()){const t=H0(e),n=V0(e),s=Array.isArray(a.sentenceExercises)?a.sentenceExercises:[],r=new Set;return[...t,...n,...s].filter(o=>!o?.id||r.has(o.id)?!1:(r.add(o.id),!0))}function H0(e=on()){const t=De();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>Ic(s,e)).filter(Boolean)}function Ic(e,t=on()){return e?.jp?Rc({id:e.id,jlpt:oC(e.jp,t),sentence:e.jp,reading:e.hiragana||ja(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function Um(e,t,n){const s=e?.blanks||[],r=String(e?.sentence||"").split("___");let o=0;return r.map((c,l)=>{const d=s[l];if(!d)return i(c);const u=d.answer||[],f=u.map((h,g)=>{const $=o+g,L=t[$],C=n.includes($);return`<span class="sentence-slot ${L?"is-filled":""} ${C?"is-wrong":""}">${L?i(L.kanji):""}</span>`}).join("");return o+=u.length,`${i(c)}<span class="sentence-blank">${f}</span>`}).join("")}function Tc(e=co(),t=on()){const n=_s(t),s=(Array.isArray(e)?e:[]).filter(L=>L?.id),r=De();new Set(s.map(L=>L.id)).has(r.activeId)||lo(_c(s)?.id||null);const c=s.find(L=>L.id===a.progress.sentencePractice.activeId)||s[0];if(!c)return null;const l=zt(c);(!Array.isArray(a.progress.sentencePractice.tileKeys)||!a.progress.sentencePractice.tileKeys.length)&&(a.progress.sentencePractice.tileKeys=Xn(c,n).map(go));let d=(Array.isArray(a.progress.sentencePractice.tileKeys)?a.progress.sentencePractice.tileKeys:[]).map(cC).filter(Boolean);const u=()=>l.every(L=>d.some(C=>C.kanji===L.kanji));(d.length<Math.max(4,l.length)||!u())&&(d=Xn(c,n),a.progress.sentencePractice.tileKeys=d.map(go),a.progress.sentencePractice.selected=[],a.progress.sentencePractice.checked=!1,a.progress.sentencePractice.result=null);const f=Array.isArray(a.progress.sentencePractice.selected)?a.progress.sentencePractice.selected:[];a.progress.sentencePractice.selected=f.filter((L,C,N)=>Number.isInteger(L)&&L>=0&&L<d.length&&N.indexOf(L)===C).slice(0,l.length);const h=a.progress.sentencePractice.selected.map(L=>d[L]).filter(Boolean),g=a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?a.progress.sentencePractice.result.wrongIndexes:[],$=Array.isArray(g)?g.filter(L=>Number.isInteger(L)&&L>=0&&L<l.length):[];return{exercise:c,tiles:d,selectedTiles:h,answerFlat:l,wrongIndexes:$,complete:!!(a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?.correct),awarded:!!a.progress.sentencePractice.completed?.[c.id]}}function De(){return a.progress.sentencePractice=Al(Zs().sentencePractice,a.progress.sentencePractice||{}),a.progress.sentencePractice}function lo(e){a.progress.sentencePractice={...De(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=zm(on()).find(n=>n?.id===e);t&&Hm(t)}function _s(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function on(){return _s(a.cards).filter(e=>{const t=a.lessons.find(s=>s.id===e.lessonId);if(t&&!Ve(t))return!1;const n=O(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||a.progress.lessonCompletions[e.lessonId]})}function co(e=on()){const t=_s(e),n=new Set(t.map(s=>s.kanji));return zm(t).filter(s=>{if(!s?.id)return!1;const r=zt(s);return!r.length||r.some(o=>!n.has(o.kanji))?!1:Xn(s,t).length>=Math.max(4,r.length)})}function zt(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function Jm(e){return zt(e).map(t=>t.kanji).join("")}function Xn(e,t){if(!e?.id)return[];const n=_s(t),s=zt(e),r=new Set(s.map(g=>g.kanji)),o=new Set(n.map(g=>g.kanji)),c=new Map;[...e.tiles||[],...s].forEach(g=>{g?.kanji&&g?.reading&&c.set(g.kanji,g.reading)});const l=s.map(g=>({kanji:g.kanji,reading:g.reading||c.get(g.kanji)||yn(g.kanji)})),d=(e.tiles||[]).filter(g=>g?.kanji&&!r.has(g.kanji)&&o.has(g.kanji)).map(g=>({kanji:g.kanji,reading:g.reading||yn(g.kanji)})).filter((g,$,L)=>L.findIndex(C=>C.kanji===g.kanji)===$),u=n.filter(g=>g.kanji&&!r.has(g.kanji)).map(g=>({kanji:g.kanji,reading:c.get(g.kanji)||yn(g.kanji,g)})).filter((g,$,L)=>L.findIndex(C=>C.kanji===g.kanji)===$).sort((g,$)=>Fe(`${e.id}:${g.kanji}`)-Fe(`${e.id}:${$.kanji}`)),f=[...d,...u].filter(g=>!r.has(g.kanji)).filter((g,$,L)=>L.findIndex(C=>C.kanji===g.kanji)===$),h=Math.min(Math.max(6,l.length+2),l.length+f.length);return vC([...l,...f.slice(0,h-l.length)],e.id)}function V0(e){const t=_s(e);if(!t.length)return[];const n=new Set(t.map(c=>c.kanji)),s=new Set,r=[];return t.flatMap(c=>(c.examples||[]).map(l=>({...l,card:c}))).forEach((c,l)=>{const d=br(c.word||"");if(!d||s.has(d)||!lC(d)||qm(d).some(L=>!n.has(L)))return;s.add(d);const u=Ps(c.reading||ja(d)),f=c.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${f}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${f}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${f}.`,translationEn:`I write ${d} in a memo.`}],g=h[l%h.length],$=Rc({id:`sentence-json-${Fe(`${d}:${g.sentence}`).toString(36)}`,jlpt:c.card?.jlpt||"N5",sentence:g.sentence,reading:g.reading,translationRu:g.translationRu,translationEn:g.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});$&&r.push($)}),r.slice(0,160)}function W0(){const e=De(),t={...wr(),...Ac()},n=Ki(X0()||e.customDraft||{}),s=on(),r=Qn(n.jp);if(!r){uo(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(eC(r,o)){uo(t.customDuplicate,"error");return}const l=De(),d={id:o||`custom_${Date.now().toString(36)}_${Fe(r).toString(36)}`,jp:r,hiragana:Ps(Qn(n.hiragana)||ja(r)),ru:Qn(n.ru),en:Qn(n.en),source:"user"},u=(l.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?l.customSentences[u]=d:l.customSentences=[d,...l.customSentences||[]].slice(0,160),l.customDraft={jp:"",hiragana:"",ru:"",en:""},l.customEditingId=null,uo(o?t.customUpdated:t.customAdded,"success",!1);const f=Ic(d,s);f&&Xn(f,s).length>=Math.max(4,zt(f).length)&&(lo(f.id),a.progress.sentencePractice.tileKeys=Xn(f,s).map(go)),A(),P()}function X0(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function Q0(e){const t=De(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",A(),P())}function Y0(e){const t=De(),n={...wr(),...Ac()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(r=>r.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(r=>r!==e),t.activeId===e){const r=on(),o=_c(co(r));lo(o?.id||null)}uo(n.customDeleted,"success",!1),A(),P()}}function Z0(){const e=De();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",A(),P()}function eC(e,t=null){const n=br(e);return(De().customSentences||[]).some(r=>r.id!==t&&br(r.jp)===n)?!0:a.sentenceExercises.some(r=>br(Gm(r))===n)}function uo(e,t,n=!0){const s=De();s.customMessage=e,s.customStatus=t,A(),n&&P()}function Rc(e,t,n={}){if(!e||typeof e!="object")return null;const s=_s(t),r=br(e.sentence||"");if(!r||!e.id||!s.length)return null;const o=tC(r,s).filter(f=>f.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const c=nC(o,r,n);if(!c.length)return null;let l="",d=0;const u=c.map(f=>(l+=r.slice(d,f.start)+"___",d=f.end,{answer:f.answer,reading:sC(f.text)}));return l+=r.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:l,originalSentence:r,reading:Ps(e.reading||ja(r)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(f=>f.answer.map((h,g)=>({kanji:h,reading:f.reading[g]||yn(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function tC(e,t){const n=new Map(_s(t).map(o=>[o.kanji,o])),s=[];let r=null;return Array.from(e).forEach((o,c)=>{if(po(o)&&n.has(o)){r||(r={start:c,end:c,text:"",answer:[]}),r.end=c+1,r.text+=o,r.answer.push(o);return}r&&s.push(r),r=null}),r&&s.push(r),s}function nC(e,t,n={}){const s=Number(n.maxBlanks||2),r=Number(n.maxBlankChars||5),o=e.filter(f=>f.start>0&&f.end<t.length),c=e.filter(f=>f.start>0),l=(o.length?o:c.length?c:e).slice().sort((f,h)=>{const g=h.answer.length-f.answer.length;return g||Math.abs(f.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return l.forEach(f=>{d.length>=s||u+f.answer.length>r||(d.push(f),u+=f.answer.length)}),d.sort((f,h)=>f.start-h.start)}function sC(e){const t=Array.from(e),n=rC(e);return n?aC(t,Ps(n)):t.map(s=>yn(s))}function rC(e){for(const t of a.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function aC(e,t){const n=Array(e.length).fill("");let s=t;for(let r=e.length-1;r>0;r-=1){const c=iC(e[r]).sort((l,d)=>d.length-l.length).find(l=>l&&s.endsWith(l));c&&(n[r]=c,s=s.slice(0,-c.length))}return n[0]=s||yn(e[0]),n.map((r,o)=>r||yn(e[o]))}function iC(e){const t=a.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;・、\s]+/u)).map(s=>Ps(s.trim())).filter(Boolean);return[...new Set(n)]}function ja(e){return Ps(Array.from(e).map(t=>po(t)?yn(t):t).join(""))}function oC(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return qm(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,c)=>n.indexOf(c)-n.indexOf(o))[0]||"N5"}function br(e){return String(e||"").replace(/\s+/g,"").trim()}function Qn(e){return String(e||"").replace(/\s+/g," ").trim()}function Gm(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function lC(e){return Array.from(String(e||"")).some(po)}function qm(e){return Array.from(String(e||"")).filter(po)}function po(e){return/[㐀-鿿]/u.test(e)}function Ps(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function Y(e){return Ps(String(e||""))}function yn(e,t=a.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function go(e){return`${e.kanji}	${e.reading||""}`}function cC(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||yn(t)}:null}function dC(e){const t=Tc();if(!t||!Number.isInteger(e))return;const n=wr(),s=a.progress.sentencePractice;if(s.result?.correct||s.selected.includes(e))return;if(s.selected.length>=t.answerFlat.length){J(n.full);return}ww();const r=he();s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:r})}function uC(){const e=De();if(!e.selected.length||e.result?.correct)return;const t=hn||he();e.selected.pop(),e.checked=!1,e.result={correct:!1,message:wr().removed,wrongIndexes:[]},A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:t})}function pC(){const e=De();if(e.result?.correct)return;const t=hn||he();hn=null,e.selected=[],e.checked=!1,e.result=null,A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:t})}function gC(){const e=Tc();if(!e)return;const t=wr(),n=bw(),s=a.progress.sentencePractice;if(s.selected.length<e.answerFlat.length){s.checked=!0,s.result={correct:!1,message:t.fillAll,wrongIndexes:[]},A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:n});return}const r=e.answerFlat.map((c,l)=>e.selectedTiles[l]?.kanji===c.kanji?-1:l).filter(c=>c>=0),o=r.length===0;if(s.checked=!0,s.attempts=(s.attempts||0)+1,s.result={correct:o,wrongIndexes:r,message:o?t.correct:t.wrong},o)mC(e.exercise,{quietReward:!0}),Ce({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),be("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),qa("ok");else{a.progress.totalWrong+=1,a.progress.correctCombo=0,Ce({discipline:-.6,curiosity:.2},"sentence_wrong"),be("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const c=jn();c.mistakes+=1,a.progress.daily[le()]=c,qa("again")}A(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:n})}function mC(e,t={}){const n=De();if(n.completed[e.id])return;const s=!!t.quietReward,r=a.rewards?.rewards||{},o=r.sentencePracticeXp||zd.xp,c=r.sentencePracticeCoins||zd.coins;n.completed[e.id]=new Date().toISOString(),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo);const l=jn();l.reviews+=1,l.minutes=Oo((l.minutes||0)+.8,1),a.progress.daily[le()]=l,q(o,c,`sentence:${e.id}`,{silent:s}),Ce({trust:.8,curiosity:.7},"sentence_complete"),ke(),Hc({silent:!0}),Q({silent:s})}function fC(){const e=on(),t=co(e);if(!t.length)return;hn=null;const n=a.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&Hm(s);const r=_c(t,{excludeCurrent:!0,preferUncompleted:!0});r?.id&&(lo(r.id),a.progress.sentencePractice.tileKeys=Xn(r,e).map(go),A(),P())}function _c(e,t={}){const n=(Array.isArray(e)?e:[]).filter(C=>C?.id);if(!n.length)return null;const s=De(),r=s.activeId,o=new Set(s.recentIds||[]),c=new Set(s.recentAnswers||[]),l=C=>!t.excludeCurrent||n.length===1||C.id!==r,d=C=>!t.preferUncompleted||!s.completed?.[C.id],u=C=>!c.has(Jm(C)),f=C=>!o.has(C.id),g=[n.filter(l).filter(d).filter(u).filter(f),n.filter(l).filter(d).filter(u),n.filter(l).filter(u).filter(f),n.filter(l).filter(f),n.filter(l),n].find(C=>C.length)||n,$=g.filter(hC),L=$.length?$:g;return L[Math.floor(Math.random()*L.length)]}function hC(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function Hm(e){if(!e?.id)return;const t=De(),n=Jm(e),s=Array.isArray(t.recentIds)?t.recentIds:[],r=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...r.filter(o=>o!==n)].slice(0,8)}function Fe(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function vC(e,t){return[...e].sort((n,s)=>Fe(`${t}:${n.kanji}:${n.reading}`)-Fe(`${t}:${s.kanji}:${s.reading}`))}function ln(e,t=[]){const n=t.filter(r=>String(e?.answers?.[r.id]||"").trim()).length,s=t.filter(r=>!String(e?.answers?.[r.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(r=>r.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function kr(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function wC(e){return Number(e?.passingPercent??e?.passThreshold??70)}function bC(){const e=a.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":qt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const r=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(R("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${$n("eva",n,t?"review":"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(e.message)}</p>
          <div class="reward-values">
            ${r.join("")}
          </div>
          <div class="actions final-test-modal-actions">
            ${t?`<button class="btn primary" type="button" data-action="final-test-focus-missing" data-focus="${m(e.focusSelector||"")}">${i(e.focusLabel||(p()==="ru"?"К пропуску":"Go to missing"))}</button>`:""}
            ${t&&e.allowIncomplete?`<button class="btn ghost" type="button" data-action="final-test-force-submit" data-level="${m(e.level||"N5")}">${i(e.forceLabel||(p()==="ru"?"Завершить без ответов":"Finish anyway"))}</button>`:""}
            ${!t&&e.reviewAction?`<button class="btn ghost" type="button" data-action="${m(e.reviewAction)}" data-mode="difficult">${i(e.repeatLabel||(p()==="ru"?"Повторить ошибки":"Repeat mistakes"))}</button>`:""}
            ${!t&&e.reviewAllAction?`<button class="btn ghost" type="button" data-action="${m(e.reviewAllAction)}" data-mode="all">${i(e.reviewAllLabel||(p()==="ru"?"Повторить весь тест":"Review all"))}</button>`:""}
            ${s}
            <button class="btn primary" type="button" data-action="close-final-test-modal">${i(e.closeLabel||"OK")}</button>
          </div>
        </article>
      </div>
    `}function Vm(e){const t=_N(e);if(!t&&!TN(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${m(n)}" title="${m(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function mo(e){const t=Ka(e);return`
      <div class="reading-row reading-split">
        ${Wm(e,"onyomi",Wf("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${Wm(e,"kunyomi",Wf("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function Wm(e,t,n,s,r){const o=Qm(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(Y(s)||"—")}</strong>
        <small>${i(r||"—")}</small>
      </div>
    `}function Xm(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${Qm(e,t,n)}
            </dt>
            <dd>${i(Y(s||"—"))}</dd>
          </div>
        `}function Qm(e,t,n){return Lr(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}" data-tts-kind="${m(t)}" aria-label="${m(`${n} TTS`)}" title="TTS">🔊</button>`:""}function fo(e,t="btn ghost"){const n=zN(e);if(!n)return"";const s=At(n.jlpt),r=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(n.jlpt)}">${i(n.jlpt)} · ${i(r)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${m(Cn(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function Ym(e){if(!e?.id)return Ms();Qr(e,"study_card");const t=O(e.id),n=a.revealed;$N(e.id);const s=e.lessonTitle||bd(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${m(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${Pr(t.state)}
          </div>
          ${Vm(e)}
        </div>
        <div class="kanji-focus" aria-label="${m(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?K(e):R("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(R("strokes"))} · ${i(Ht(t.dueAt))}</p>
        ${n?jC(e):`
          ${$C(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(R("showAnswer"))}</button>
            ${fo(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${m(e.id)}">⋯ ${i(R("details"))}</button>
          </div>
        `}
      </article>
    `}function kC(e){const t=Math.max(Number(a.reviewSession?.initialSize||e||0),e||0,1),n=ce(t-Math.max(Number(e||0),0),0,t),s=Math.min(n+1,t);return p()==="ru"?`Осталось: ${e} · ${s} / ${t}`:`Remaining: ${e} · ${s} / ${t}`}function yC(e,t){const n=Mc(e);if(!n)return Ms();const s=n.progress||Pe(null),r=jr(),o=xg(n.courseSlug),c=ss().settings.showRomaji;return`
      <article class="study-card kana-srs-card" data-review-card-id="${m(n.cardId)}" data-review-kind="kana">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(o)}</span>
            ${Pr(s.state)}
            <span class="pill">${i(kC(t))}</span>
          </div>
          <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${m(n.kana)}" aria-label="${m(p()==="ru"?"Озвучить знак":"Speak kana")}">🔊</button>
        </div>
        <div class="kanji-focus kana-srs-focus" lang="ja" aria-label="${m(n.kana)}">${i(n.kana)}</div>
        <h2>${i(c&&n.romaji?n.romaji:p()==="ru"?"Вспомни чтение":"Recall the reading")}</h2>
        <p class="label">${i(o)} · ${i(n.strokes?`${n.strokes} ${R("strokes")}`:p()==="ru"?"знак каны":"kana card")} · ${i(Ht(s.dueAt))}</p>
        ${c&&n.romaji?`<p class="kana-srs-reading"><span lang="ja">${i(n.kana)}</span> · ${i(n.romaji)}</p>`:""}
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate-kana-review" data-course="${m(n.courseSlug)}" data-card="${m(n.cardId)}" data-rating="forgot">${i(r.forgot)} <small>${i(r.forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate-kana-review" data-course="${m(n.courseSlug)}" data-card="${m(n.cardId)}" data-rating="remember">${i(r.remember)} <small>${i(r.rememberHint)}</small></button>
        </div>
      </article>
    `}function $C(e){const t=a.readingCheck.cardId===e.id?a.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${m(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${m(e.id)}" data-reading-input data-id="${m(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${m(t.value)}" placeholder="${m(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${m(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function ho(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(Y(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(as(e))}</small>
      </li>
    `}function jC(e){return`
      <div class="answer-section">
        ${mo(e)}
        <strong>${i(R("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(ho).join("")}
        </ul>
        <strong>${i(R("apps"))}</strong>
        <p>${i(Ja(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${fo(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(jr().forgot)} <small>${i(jr().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(jr().remember)} <small>${i(Cx(e))}</small></button>
        </div>
      </div>
    `}function Pc(e,t){const n=a.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",r=a.route==="review"?Math.max(a.reviewSession?.initialSize||t,1):Math.max(a.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${kx(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${M(R("review"),t,"queue",E(t,r))}
          ${M("Combo",a.progress.correctCombo,`${a.progress.bestCorrectCombo} best`,E(a.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(R("hint"))} · Leya</h3>
          <p>${i(jo(e.id).hint)}</p>
          <h3>${i(R("mnemonic"))}</h3>
          <p>${i(jo(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function Es(){a.reviewExerciseResults={},a.activeExerciseReviewId=null,a.activeExerciseReviewLevel="",a.activeExerciseReviewSource="",a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1}function SC(e){if(!e){a.activeCardId=null,Es();return}if(a.reviewQueueLastKind=e.kind,e.kind==="card"){const t=ie(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){a.activeCardId=null,Es();return}a.activeCardId!==t.id&&(a.activeCardId=t.id,Es());return}if(e.kind==="kana"){a.activeCardId=null,Es(),a.revealed=!1,wt();return}if(e.kind==="exercise"){const t=a.activeExerciseReviewId===e.exerciseId&&a.activeExerciseReviewLevel===e.level&&a.activeExerciseReviewSource===String(e.source||"textbook");a.activeCardId=null,a.activeExerciseReviewId=e.exerciseId,a.activeExerciseReviewLevel=e.level,a.activeExerciseReviewSource=String(e.source||"textbook"),t||(a.reviewExerciseResults={}),t||(a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1)}}function Ec(e,t,n="",s=null,r=null,o="textbook"){const c=F(e);if(!c||!t)return null;if(String(o||"textbook")==="reading"){const g=r||Tf(t,c);if(!g)return null;const $=xr(s||{},g);return{kind:"exercise",source:"reading",key:`reading:${String(c)}:${t}`,level:c,exerciseId:t,lessonId:String(g.sourceId||n||$.lessonId||""),cardId:"",dueAt:$.dueAt?new Date($.dueAt).getTime():0,progress:$,exercise:g,card:null}}const d=Yn(s||{},{level:c,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=r||qc(c,t,n||d.lessonId||"");if(!u)return null;const f=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${c}:${t}`,level:c,exerciseId:t,lessonId:f,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:ie(h)||ie(d.cardId||"")}}function yr(){if(!a.activeExerciseReviewId||!a.activeExerciseReviewLevel)return null;const e=a.activeExerciseReviewLevel,t=a.activeExerciseReviewId;if(String(a.activeExerciseReviewSource||"textbook")==="reading"){const o=Tf(t,e),c=o?ts(o):a.progress.readingExercises?.[t]||null;return Ec(e,t,c?.lessonId||o?.sourceId||"",c,o,"reading")}const r=mf(e)?.exerciseSrs?.[t]||null;return Ec(e,t,r?.lessonId||"",r,null,"textbook")}function Mc(e){if(!e||e.kind!=="kana")return null;const t=ro(e.cardId||e.key||"",e.courseSlug||"");if(!t?.id||!ve(t.slug))return null;const n=$t(t.slug),s=Pe(e.progress||n[t.id]||null),r=e.character||Cg(t.slug,t.kana)||{};return{...e,kind:"kana",key:t.id,courseSlug:t.slug,cardId:t.id,kana:t.kana,romaji:String(r.romaji||e.romaji||""),strokes:Number(r.strokes||e.strokes||0),progress:s,character:r,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}function Kc(e){return!e||e.kind!=="exercise"?null:Ec(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function CC(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=ie(t);if(!n?.id)return null;const s=e.progress||O(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="kana"?Mc(e):e.kind==="exercise"?Kc(e):null}function Sa(e){return(Array.isArray(e)?e:[]).map(CC).filter(Boolean)}function xC(e){const t=Sa(e),n=yr();if(n&&a.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(c=>c.kind==="exercise"&&c.exerciseId===n.exerciseId&&c.level===n.level))return n;const s=a.activeCardId?t.find(c=>c.kind==="card"&&c.card?.id===a.activeCardId):null;if(s)return s;const r=["card","kana"],o=r.includes(a.reviewQueueLastKind)?["exercise"]:a.reviewQueueLastKind==="exercise"?r:[];if(o.length){const c=t.find(l=>o.includes(l.kind));if(c)return c}return t[0]||n||null}function NC(e,t){const n=F(e);return n==="N5"?Tg(t):n==="N4"?Hg(t):n==="N3"?im(t):n==="N2"?wm(t):""}function LC(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Dc(){return p()==="ru"?"Перевод":"Translation"}function Zm(e){const t=String(e||"").trim();return t?t.split(/([。！？、\n]+)/u).map(n=>{if(!n)return"";if(/^[。！？、\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=Hf(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([。！？、])/gu,"$1 ").replace(/([。！？、])\s*$/gu,"$1").trim():""}function AC(e){const t=!!a.activeExerciseReviewTranslationOpen,n=e?.reading?Y(e.reading):"",s=e?.reading?Zm(e.reading):"",r=v({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Dc())}</button>
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
    `}function IC(e){return a.reviewExerciseResults?.[e.exerciseId]||ts(e.exercise)||null}function TC(e,t,n,s){const r=String(t?.id||n),o=s?.answers?.[r]||null,c=Array.isArray(t?.options)?t.options:[],l=c.find(u=>String(u.value||"")===String(t?.answer||"")),d=l?v(l.label||l):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(v(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${c.map(u=>{const f=o?.selected===u.value,h=o?.correct&&u.value===t.answer,g=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||g?"success":f?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${m(r)}" data-value="${m(u.value)}" ${o||s?.completed?"disabled":""}>${i(v(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function RC(e){const t=Kc(e);if(!t||!t.exercise)return Ms();const n=IC(t),s=!!n?.completed,r=t.progress||ts(t.exercise),o=LC(t.exercise),c=v(t.exercise.sourceTitle||t.exercise.title||{}),l=zt(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(N=>N?.id),u=t.exercise.kind==="cloze"||!d.length&&l.length>0;if(!u&&!d.length)return Ms();const f=u?s?1:Array.isArray(r?.selectedIndices)?r.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,l.length):Math.max(1,d.length),g=Array.isArray(r?.selectedIndices)?r.selectedIndices:Array.isArray(a.activeExerciseReviewSelection)?a.activeExerciseReviewSelection:[],$=g.map(N=>t.exercise.tiles?.[N]).filter(Boolean),L=Array.isArray(r?.wrongIndexes)?r.wrongIndexes:[],C=AC(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${m(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(c||o)}</span>
          <span class="pill">${i(r.state)} · ${i(Ht(r.dueAt))}</span>
          <span class="pill">${i(f)}/${i(h)}</span>
        </div>
        ${C}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${Um(t.exercise,$,L)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(v({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((N,k)=>{const x=g.includes(k),z=L.includes(k);return`
                <button class="sentence-tile ${x?"is-used":""} ${z?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${k}" ${x||s?"disabled":""}>
                  <span>${i(N.reading||"")}</span>
                  <strong>${i(N.kanji)}</strong>
                </button>
              `}).join("")}
          </div>
          <div class="sentence-feedback">
            ${i(n?.completed?n.correct?p()==="ru"?"Верно. Предложение собрано правильно.":"Correct. The sentence is complete.":p()==="ru"?"Проверь красные места и попробуй ещё раз.":"Check the red slots and try again.":p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.")}
          </div>
          <div class="actions sentence-actions">
            <button class="btn primary" type="button" data-action="reading-review-check" ${s?"disabled":""}>${i(p()==="ru"?"Проверить":"Check")}</button>
            <button class="btn" type="button" data-action="reading-review-undo" ${!g.length||s?"disabled":""}>${i(p()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!g.length||s?"disabled":""}>${i(p()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:d.map((N,k)=>TC(t,N,k,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function _C(e){const t=Kc(e);if(!t||!t.exercise)return Ms();if(t.source==="reading")return RC(t);const n=!!a.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${m(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Ht(t.progress.dueAt))}</span>
        </div>
        ${NC(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function PC(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Be("eva","lessonComplete"))}</h2>
        <p>${i(e?Ua(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(R("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(R("dictionary"))}</button>
        </div>
      </article>
    `}function EC(){const e=a.reviewSession?.results||{},t=Number(e.remember||0),n=Number(e.forgot||0),s=t+n,r=(Array.isArray(e.items)?e.items:[]).filter(o=>o?.dueAt).sort((o,c)=>(Date.parse(o.dueAt)||0)-(Date.parse(c.dueAt)||0)).slice(0,4);return`
      <article class="empty-state review-complete-card">
        <span class="kanji-char">済</span>
        <h2>${i(p()==="ru"?"Повторение завершено":"Review complete")}</h2>
        <p>${i(p()==="ru"?"Карточки закрыты. Вот короткий итог с ближайшими возвращениями.":"Cards are done. Here is a short summary and the nearest returns.")}</p>
        <div class="mini-stat-row">
          ${M(p()==="ru"?"Помню":"Remember",t,`${s}`,E(t,Math.max(1,s)))}
          ${M(p()==="ru"?"Не помню":"Forgot",n,`${s}`,E(n,Math.max(1,s)))}
        </div>
        ${r.length?`<ul class="review-upcoming-list">
          ${r.map(o=>`<li><strong>${i(o.label||o.kind||"")}</strong><span>${i(o.course||"")}</span><small>${i(Ht(o.dueAt))}</small></li>`).join("")}
        </ul>`:""}
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(R("learn"))}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">典 ${i(R("dictionary"))}</button>
        </div>
      </article>
    `}function Ms(){const e=a.reviewSession?.results||{},t=Number(e.remember||0)+Number(e.forgot||0);return a.route==="review"&&Number(a.reviewSession?.initialSize||0)>0&&t>0?EC():`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Be("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(R("learn"))}</button>
      </article>
    `}function MC(){const e=fN(),t=Math.max(Fr,Number(a.dictionaryVisibleCount||Fr)),n=e.slice(0,t),s=n.length<e.length,r=a.cards.filter(u=>!!a.progress.favorites[u.id]).length,o=["all",...new Set(a.cards.map(u=>u.jlpt))],c=["all",...new Set(a.cards.map(u=>Ma(u.id).radical).filter(Boolean))],l=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(R("dictionary"))}</h1>
            <p>${i(l)} · ${e.length}/${a.cards.length}</p>
          </div>
        </div>
        ${KC(r)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(R("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${m(a.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${m(u)}" ${Xa(u,a.filters.jlpt)}>${i(u==="all"?R("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(R("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",R("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,f])=>`<option value="${u}" ${Xa(u,a.filters.strokes)}>${i(f)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(R("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${c.map(u=>`<option value="${m(u)}" ${Xa(u,a.filters.radical)}>${i(u==="all"?R("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(R("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${Xa("all",a.filters.favorites)}>${i(R("all"))}</option>
              <option value="yes" ${Xa("yes",a.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(DC).join("")||OC()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(l)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function KC(e){const t=a.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${m(R("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${a.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function DC(e){const t=O(e.id),n=Ma(e.id),s=!!a.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${m(e.id)}">
        ${FC(e)}
        <div class="tag-row">
          ${Pr(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(R("strokes"))}</span>
          <span class="pill">${i(R("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(R("learnedStatus"))}: ${i(fh(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function FC(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(K(e))}</h3>
          <p>${i(sd(e))}</p>
          <span class="label">${i(bd(e.lessonId))}</span>
        </span>
      </span>
    `}function OC(){const e=a.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function BC(){const e=a.kanjiPageId||cA(),t=ie(e);if(!t)return a.deferredDataLoaded?ea(we("hash","entity-not-found",lA(),ds(location.hash).segments)):(ji({route:"kanji",delay:0,force:!0}),vh());const n=O(t.id),s=Ma(t.id),r=!!a.progress.favorites[t.id],o=sx(t,p()),c=zC(t),l=Vc(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(R("dictionary"))}</button>
            <h1>${i(c?`${t.kanji} — ${UC(c)}`:t.kanji)}</h1>
            <p>${i(c?JC(c):K(t))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${m(t.id)}">▶ ${i(R("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${m(t.id)}">${r?"★":"☆"} ${i(R("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${m(t.kanji)}">${i(t.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${Pr(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(R("strokes"))}</span>
                <span class="pill">${i(R("radical"))}: ${i(s.radical||"-")} ${i(v(s.radicalMeaning||{}))}</span>
                ${c?`<span class="pill">Grade ${i(c.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(c.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(K(t))}</h2>
              <p>${i(Ja(t))}</p>
              ${mo(t)}
              ${Oc(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${c?GC(c):""}
          ${c?qC(c):""}
          <article class="kanji-profile-card">
            <h2>${i(R("examples"))}</h2>
            <ul class="example-list">${t.examples.map(ho).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${c?HC(c):YC(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(R("strokeOrder"))}</h2>
            <p class="label">${i(l?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${_a(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${fo(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(R("apps"))}</h2>
            <p>${i(Ja(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${c?WC(c):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${m(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${c?XC(c):""}
        </div>
      </section>
    `}function zC(e){return a.kanjiPageSources?.[e?.kanji]||null}function UC(e){return ef(e.meanings)[0]||e.literal}function ef(e){return e?e[p()]||e.ru||e.en||[]:[]}function $r(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function JC(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function GC(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(ef(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i($r(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(R("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(R("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${$r(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function qC(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${m(QC(t))}">
                <b>${Fc(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i($r(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function HC(e){return`
      <ul class="kanji-sentence-list">
        ${VC(e).map(n=>`
          <li>
            <strong>${Fc(n.japanese,e.literal)}</strong>
            <small>${i($r(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function VC(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const r=s.japanese||"";if(!r.includes(e.literal)||t.has(r))return!1;t.add(r);const o=r.replace(/[\s。、！？!?「」『』（）()・ー]/gu,"").length;return!(o<3||o>44)}).sort((s,r)=>Number(tf(r.japanese,n))-Number(tf(s.japanese,n))).slice(0,8)}function tf(e,t){return[...t].some(n=>e.includes(n))}function WC(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${m(t.type||"card")}">
            <span>${i($r(t.title||{}))}</span>
            <strong>${Fc(t.japanese,e.literal)}</strong>
            <small>${i($r(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function XC(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((r,o)=>r?`<section><h3>${i(n[o])}</h3><p>${i(r)}</p></section>`:"").join("")}
      </article>
    `}function QC(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Fc(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${m(n)}">${i(n)}</mark>`):i(s)}function YC(e){const t=ZC(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${nx(n)}</strong>
            <span>${i(ex(n))}</span>
            <small>${i(tx(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function ZC(e){const t=e?.kanji||"";return t?(a.sentenceExercises||[]).filter(n=>{const s=nf(n),r=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||r.includes(t)}).slice(0,6):[]}function nf(e){return e?.sentence||e?.jp||""}function ex(e){return e?.reading||e?.hiragana||""}function tx(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function nx(e){let t=i(nf(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function sx(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${sf(e)}/`}function sf(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),r=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${r}`}function rx(){const e=ie(a.activeCardId)||Zc()[0]||a.cards[0];e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=ce(a.writingStep,0,Math.max(0,Jt(e)-1)));const t=Vc(e),n=Jt(e),s=p()==="ru"?"Шаг":"Step",r=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",c=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(R("writingPractice"))}</h1>
            <p>${i(e?`${e.kanji} · ${K(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${i(e?.kanji||"文")}</div>
            ${e?mo(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}">🔊 ${i(R("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${a.writingStep+1}/${n}</span>
                <span class="label">${i(_a(e)[a.writingStep]||"")}</span>
                <span class="writing-mode-note">${i(c)}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${i(o)}</button>
                <button class="btn" type="button" data-action="writing-step-next">→</button>
              </div>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${i(R("replay"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${i(R("strokeOrder"))}</h3>
            ${e?ax(e):""}
            <h3>${i(R("hint"))}</h3>
            <p>${i(jo(e?.id).hint)}</p>
            <h3>${i(R("mnemonic"))}</h3>
            <p>${i(jo(e?.id).mnemonic)}</p>
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
              <button class="btn" type="button" data-action="clear-writing">${i(R("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${i(R("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${i(p()==="ru"?"Напиши кандзи поверх образца и нажми «Получилось» для самопроверки.":"Write over the guide and tap 'Got it' for self-check.")}</div>
          </article>
        </div>
      </section>
    `}function ax(e){return`
      <ol class="stroke-list writing-guide-list">
        ${_a(e).map((n,s)=>`
          <li class="${s===a.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function ix(){if(!a.detailCardId)return"";const e=ie(a.detailCardId);if(!e)return"";const t=O(e.id),n=Ma(e.id),s=!!a.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${Pr(t.state)}
              <h2>${i(K(e))}</h2>
              <p>${i(sd(e))} · ${e.strokes} ${i(R("strokes"))}</p>
              <p><span class="pill">${i(R("radical"))}: ${i(n.radical||"-")} ${i(v(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${mo(e)}
          ${Oc(e)}
          <h3>${i(R("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(r=>`<li>${i(r)}</li>`).join("")}</ol>
          <h3>${i(R("examples"))}</h3>
          <ul class="example-list">${e.examples.map(ho).join("")}</ul>
          <h3>${i(R("apps"))}</h3>
          <p>${i(Ja(e))}</p>
          <ul class="app-list">${e.apps.map(r=>`<li>${i(r)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${m(e.id)}">▶ ${i(R("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${m(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${m(e.id)}">${s?"★":"☆"} ${i(R("favorites"))}</button>
            ${fo(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function Oc(e){const t=rd(e),n=Lr(e);return`
      <section class="audio-panel">
        <h3>${i(R("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}">🔊 Kanji</button>`:""}
          ${ox(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function ox(e,t=Lr(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${m(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}" data-tts-text="${m(n.kana)}" data-tts-label="${m(Bc(n))}">
                <span>${i(Bc(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function Bc(e){return e.kind==="onyomi"?Co("onyomi"):e.kind==="kunyomi"?Co("kunyomi"):e.label||"TTS"}function lx(){const e=ed(),t=jn(),n=xn();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(R("stats"))}</h1>
            <p>${i(R("xp"))} · ${i(R("level"))} · ${i(R("coins"))}</p>
          </div>
          <div class="actions">
            ${rs("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">✦ ${i(R("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(R("xp"),`${n.current}/${n.next}`,`${R("level")} ${a.progress.level}`,n.percent)}
          ${M(R("streak"),a.progress.streak.current,`${a.progress.streak.best} best`,E(a.progress.streak.current,30))}
          ${M(R("mastered"),e.mastered,`${e.total}`,E(e.mastered,e.total))}
          ${M(R("successRate"),`${Df()}%`,`${td()} reviews`,Df())}
          ${M(R("errors"),t.mistakes||0,`${a.progress.totalWrong} total`,E(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(R("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(R("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(R("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(R("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${dx()}</article>
          ${a.bootAncillaryLoaded?`<article class="tool-panel" data-section="shop-panel">${px()}</article>`:`<article class="tool-panel" data-section="shop-panel-loading"><h3>${i(Mn().title)}</h3><p>${i(p()==="ru"?"Загружаю каталог кастомизации…":"Loading customization catalog…")}</p></article>`}
          <article class="tool-panel">${of()}</article>
          <article class="tool-panel">
            <h3>${i(R("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(Kn().badge)}</strong>
                  <small>${i(Kn().hint)}</small>
                </span>
                <span class="pill">${i(Kn().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${_o()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${_o()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Po()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Po()*100)}%</strong>
              </label>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="export">⬇ ${i(R("export"))}</button>
              <button class="btn" type="button" data-action="import">⬆ ${i(R("import"))}</button>
              <button class="btn danger" type="button" data-action="reset">↺ ${i(R("reset"))}</button>
            </div>
          </article>
        </div>
      </section>
    `}function Ks(){return a.achievements?.length?a.achievements:a.rewards?.achievements||[]}function cx(){return a.achievementCategories?.length?a.achievementCategories:[...new Set(Ks().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function zc(e){return v(e.title||e.name||{ru:e.id,en:e.id})}function rf(e){return v(e.description||{})}function Uc(e){return{moon:"月",book:"文",memory:"記",flame:"火",star:"星",brush:"筆",text:"文",lock:"鍵",eye:"眼"}[e]||"✦"}function dx(){return`<h3>${i(R("achievements"))}</h3><div class="achievement-grid compact">${Ks().slice(0,8).map(af).join("")}</div>`}function ux(){const e=Ks(),t=gA(),n=e.reduce((s,r)=>({xp:s.xp+(r.rewardXp||0),coins:s.coins+(r.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(R("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${rs("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">▥ ${i(R("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(R("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",E(t,e.length))}
          ${M("XP",n.xp,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(R("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Kr(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",E(e.filter(s=>s.secret&&Kr(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${cx().map(s=>{const r=e.filter(c=>c.category===s.id);if(!r.length)return"";const o=r.filter(c=>Kr(c.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${Uc(s.icon)} ${i(v(s.title))}</h2>
                    <p>${o}/${r.length}</p>
                  </div>
                  <span class="pill">${E(o,r.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${r.map(c=>af(c,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function af(e,t=!1){const n=Kr(e.id),s=wf(e),r=Math.max(1,Number(e.target||1)),o=E(s,r),c=Math.min(s,r),l=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":zc(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":rf(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${Uc(e.icon)}</span>
        <strong>${i(l)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${m(`${c}/${r}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(R("coins"))}</small>
      </div>
    `}function px(){return Wp({closable:!1})}function of(e={}){const t=e.limit||10,n=(a.progress.transactions||[]).slice(0,t);return`
      <h3>${i(R("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(gx(s))}</strong>
              <small>${i(AL(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function gx(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=Se(n[1]);if(s)return Kt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function mx(){if(!pf())return"";const e=a.rewardModal,t=e.type==="level",n=e.type==="achievement",s=xn(),r=t?`${R("level")} ${a.progress.level} - ${s.current}/${s.next} XP - ${a.progress.moonFragments} ${R("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${Uc(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(R("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${$n(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(r)}</p>
          <div class="reward-values">
            ${t?`<span>${i(R("level"))} ${a.progress.level}</span>`:""}
            ${e.xp?`<span>+${e.xp} XP</span>`:""}
            ${t?`<span>${s.current}/${s.next} XP</span>`:""}
            ${e.coins?`<span>+${e.coins} ${i(R("coins"))}</span>`:""}
            ${t?`<span>${a.progress.moonFragments} ${i(R("coins"))}</span>`:""}
          </div>
        </article>
      </div>
    `}function fx(){if(!a.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",r=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(qs),c=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),l=`mailto:${gn}?subject=${o}&body=${c}`;return`
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
            <strong>${i(gn)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${m(l)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(r)}</button>
          </div>
        </article>
      </div>
    `}function hx(){const e=a.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=v(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),r=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",c=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${r.map(l=>`<li>${i(l)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${Jo}, ${Go}.`:`Saved locally: ${Jo}, ${Go}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(c)}</button>
          </div>
        </article>
      </div>
    `}function vx(){if(!a.pwaInstallHelpVisible)return"";const e=Er(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",r=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function wx(){if(Mp()||a.pwaInstallHelpVisible||!jd()||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal)return"";const e=wh(),t=!fs&&Er();return`
      <aside class="pwa-install-banner" role="dialog" aria-modal="false" aria-label="${m(e.title)}">
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
    `}function bx(){if(Mp()||!a.notificationPromptVisible||!Ko("visible")||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.pwaInstallHelpVisible||jd())return"";const e=Sh();return`
      <aside class="pwa-install-banner notification-permission-banner" role="dialog" aria-modal="false" aria-label="${m(e.title)}">
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
    `}function kx(e,t,n){const s=_r(e),r=vo(e,t,n),o=uf(Be(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${m(e)}">
        <img src="${m(r)}" alt="${m(v(s.name))}" />
        <div><strong>${i(v(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function $n(e,t,n,s){const r=_r(e),o=vo(e,t,n),c=uf(Be(e,n)),l=`${s||"mascot"}:${e}:${n}:${a.route}:${a.activeTextbookLevel||a.activeJlptLesson||""}`.toLowerCase();return cf(l)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${m(e)}">
        <img src="${m(o)}" alt="${m(v(r.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${m(e)}">
        <img src="${m(o)}" alt="${m(v(r.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${m(l)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${m(l)}" aria-label="${m(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(c)}</span>
        </div>
      </div>
    `}function lf(){try{const e=sessionStorage.getItem(te);return e?JSON.parse(e)||{}:{}}catch{return{}}}function yx(e){try{sessionStorage.setItem(te,JSON.stringify(e||{}))}catch{}}function cf(e){return e?!!lf()[e]:!1}function df(e){if(!e)return;const t=lf();t[e]=Date.now(),yx(t);const n=vs.get(e);n&&(clearTimeout(n),vs.delete(e)),P()}function $x(){const e=new Set;cl("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||cf(n)||(e.add(n),vs.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const r=window.setTimeout(()=>{vs.delete(n),df(n)},s);vs.set(n,r)});for(const[t,n]of vs)e.has(t)||(clearTimeout(n),vs.delete(t))}function vo(e,t="normal",n="welcome"){if(e==="eva")return ir(Fn(null,jx(t,n)));const s=_r(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function jx(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),r={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},c=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return c&&(!n||n==="welcome")?c:r[n]||o[s]||s||"neutral"}function uf(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function Sx(e){const t=ie(a.activeCardId);if(!t||!sv[e])return;const n=he();Xr(t,"srs_rating");const s=ae(O(t.id)),r=ye(s,e);a.progress.cards[t.id]=r,Ut(s,r,e),ke();const o=Number(a.progress.correctCombo||0),c=Oe(e)?"again":"ok";Oe(e)?(a.progress.totalWrong+=1,a.progress.correctCombo=0,Ce({discipline:-.8,trust:-.2},"answer_again"),be("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:o>0}),J(Be("eva","wrong"))):(q(a.rewards.rewards.correctXp,a.rewards.rewards.correctCoins,"review_success"),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),Ce({trust:.35,discipline:.25,curiosity:r.lastDecision==="Easy"?.2:0},`answer_${e}`),be("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:a.progress.correctCombo}),J(Be("eva","correct")),a.progress.correctCombo>0&&a.progress.correctCombo%5===0&&(q(a.rewards.rewards.comboXp,0,"combo_bonus"),ht({title:"Combo",message:Be("leya","combo"),xp:a.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),a.reviewQueueLastKind="card",Mf("kanji",e,{label:t.kanji,level:t.jlpt,dueAt:r.dueAt,cardId:t.id}),Pf(`card:${t.id}`),a.revealed=!1,a.activeCardId=null,wt(),To("card"),pe({scrollPolicy:re.TOP,viewportSnapshot:n}),A(),Pt("review card post-render effects",()=>{xo(),qa(c),sr(),Lx(t.lessonId),Hc({silent:!0}),Q()},{scrollPolicy:re.TOP,viewportSnapshot:n})}function pf(){return!!(a.rewardModal&&a.route!=="review")}function gf(e,t,n){const s=ro(t,e);if(!s?.id||!ve(s.slug))return;const r=he(),o=bt(s.slug),c=$t(s.slug),l=ae(Pe(c[s.id]||null)),d=Oe(n)?"forgot":"remember",u=Ed(l,d);c[s.id]=u,o.review=c,o.currentRoute="review",o.updatedAt=new Date().toISOString(),Ut(l,u,d),ke({skipAchievements:!0});const f=Number(a.progress.correctCombo||0),h=d==="forgot"?"again":"ok";d==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,Ce({discipline:-.5,trust:-.1},"kana_answer_again"),be("answer_wrong",{cardId:s.id,kana:s.kana,rating:d,comboLost:f>0},{skipAchievements:!0}),J(Be("eva","wrong"))):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),Ce({trust:.25,discipline:.2,curiosity:.1},"kana_answer_remember"),be("answer_correct",{cardId:s.id,kana:s.kana,rating:d,combo:a.progress.correctCombo},{skipAchievements:!0}),J(Be("eva","correct"))),a.reviewQueueLastKind="kana",Mf("kana",d,{label:s.kana,course:xg(s.slug),dueAt:u.dueAt,cardId:s.id}),Pf(s.id),a.revealed=!1,a.activeCardId=null,Es(),wt(),To("kana"),pe({scrollPolicy:re.TOP,viewportSnapshot:r}),A(),Pt("kana review post-render effects",()=>{xo(),qa(h),sr()},{scrollPolicy:re.TOP,viewportSnapshot:r})}function jr(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function Cx(e){const t=jr(),n=O(e.id),s=xx(n,"remember"),r=Vw(n,s);return`${t.rememberHint}: ${Ww(qw(r))}`}function xx(e,t){if(Oe(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),r=Number(e.correct||0),o=Number(e.wrong||0),c=Number(e.lapses||0),l=Number(e.successRate||(s?r/Math.max(r+o,1)*100:0));return n==="New"?"good":n==="Learning"?l>=70||r>=2?"good":"hard":l>=88&&r>=5&&c<=1?"easy":l<70||c>Math.max(1,Math.floor(r/3))?"hard":"good"}function Oe(e){return e==="forgot"||e==="again"}function Sr(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function Yn(e,t={}){const s={...Sr(t.level||"",t.lessonId||"",t.exerciseId||"",t),...Pe(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=hh(s),Number.isFinite(Number(s.srsStep))?s.srsStep=ce(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=Fl(s),Jc(s)?s:Sr(s.level,s.lessonId,s.exerciseId,s)}function Jc(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function Ca(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([r,o])=>{s[r]=Yn(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function mf(e){const t=F(e);return t==="N5"?ne():t==="N4"?W():t==="N3"?H():t==="N2"?V():t==="N1"?ee():null}function Gc(e){const t=F(e);return t==="N5"?Ze():t==="N4"?lt():t==="N3"?dt():t==="N2"?pt():t==="N1"?mt():[]}function Nx(e,t){const n=F(e),s=String(t||"");return!n||!s?null:Gc(n).find(r=>r.id===s||r.id===`${n.toLowerCase()}-${s}`||r.id.endsWith(`-${s}`))||null}function ff(e){const t=F(e);return t==="N5"?Ts:t==="N4"?ma:t==="N3"?ha:t==="N2"?wa:t==="N1"?ya:null}function qc(e,t,n=""){const s=ff(e),r=F(e),o=String(t||"");if(!s||!r||!o)return null;const c=Nx(r,n);if(c){const l=s(c).find(d=>String(d.id)===o);if(l)return l}for(const l of Gc(r)){const d=s(l).find(u=>String(u.id)===o);if(d)return d}return null}function xa(e,t){const n=F(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),r=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return r.forEach(c=>{if(e.exerciseSrs[c])return;const l=qc(n,c);if(!l||!s.has(String(l.lessonId||"")))return;const d=Sr(n,l.lessonId||"",l.id,l),u=e.exerciseResults?.[c]||null,f=!!e.completedExercises?.[c],h=ye(ae(d),f||u?.correct?"good":"again");h.level=n,h.lessonId=String(l.lessonId||h.lessonId||""),h.exerciseId=String(l.id||c||""),h.cardId=String(l.cardId||h.cardId||""),h.kanji=String(l.kanji||h.kanji||""),h.type=String(l.type||h.type||""),h.title=l.title||h.title||null,h.prompt=String(l.prompt||h.prompt||""),h.answer=String(l.answer||h.answer||""),h.answerLabel=String(l.answerLabel||h.answerLabel||""),e.exerciseSrs[c]=h,o=!0}),o}function Na(e,t){const n=F(t);if(!e||!n)return!1;const s=Gc(n),r=ff(n);if(!r?.length&&!r)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=Object.entries(e.exerciseSrs);if(!o.length)return!1;const c=new Map;s.forEach(d=>{(r(d)||[]).forEach(u=>{u?.id&&c.set(String(u.id),{exercise:u,lesson:d})})});let l=!1;return o.forEach(([d,u])=>{const f=c.get(String(d));if(!f)return;const{exercise:h,lesson:g}=f,$=Yn(u,{level:n,lessonId:g.id,exerciseId:h.id,cardId:h.cardId||"",kanji:h.kanji||"",type:h.type||"",title:h.title||null,prompt:h.prompt||"",answer:h.answer||"",answerLabel:h.answerLabel||""});JSON.stringify(u)!==JSON.stringify($)&&(e.exerciseSrs[d]=$,l=!0)}),l}function Lx(e){if(a.progress.lessonCompletions[e])return;const t=nd(e);if(!(t.length>0&&t.every(o=>O(o.id).state!=="New")))return;const s=a.rewards.rewards.lessonCompleteXp,r=a.rewards.rewards.lessonCompleteCoins;a.progress.lessonCompletions[e]=new Date().toISOString(),Tr("",e,"legacy-srs"),D("lesson_complete"),q(s,r,"lesson_completion"),Ce({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),be("lesson_complete",{lessonId:e,xp:s,coins:r}),ht({title:v({ru:"Урок завершён",en:"Lesson complete"}),message:Be("eva","lessonComplete"),xp:s,coins:r,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),Do("lesson_complete")}function Hc(e={}){const t=le(),n=jn();if(n.goalClaimed||n.reviews<a.progress.settings.dailyGoal)return;n.goalClaimed=!0;const s=a.rewards.rewards.comboXp,r=a.rewards.rewards.streakCoins;q(s,r,"daily_goal"),e.silent||ht({title:R("dailyGoal"),message:Be("leya","goal"),xp:s,coins:r,mascot:"leya",mood:"happy",dialog:"goal"}),a.progress.daily[t]=n}function Ax(){const e=wo(),t=le();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,a.progress.appOpens=Number(a.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(a.progress.secrets.nightVisit=!0),hf()}function hf(){const e=a.progress.streak,t=Xu(e.pendingReward);if(!t||le()<t.availableOn)return!1;e.pendingReward=null;const n=a.rewards.rewards.streakCoins;return D("streak_reward"),q(0,n,`streak:${t.milestone}:claim`),ht({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),Q(),A(),!0}function Ix(e){if(e==="eva"){a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,Ce({warmth:.2,curiosity:.1},"eva_click"),J(Be("eva","welcome")),Q(),A(),P();return}e==="leya"&&J(Be("leya","combo"))}function vf(){me(),a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,a.evaRuntime||(a.evaRuntime=Zt()),a.evaRuntime.clickCount=Number(a.evaRuntime.clickCount||0)+1,be("user_clicked_eva",{clickCount:a.evaRuntime.clickCount}),Q(),D("notification_soft"),A(),P()}function Tx(){if(Z.completed)return;Z.completed=!0,a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,Z.cardId&&(a.progress.writingPractice.cards[Z.cardId]=(a.progress.writingPractice.cards[Z.cardId]||0)+1),Ce({curiosity:1,discipline:.8,trust:.4},"writing_complete"),be("writing_complete",{cardId:Z.cardId}),fe("writing_complete",{route:"writing",cardId:Z.cardId||"",source:"practice"});const e=Q();A(),e&&P()}function Rx(){const e=le();wo();const t=_x(),n=Mi(a.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(a.progress.dailyBonusPending=null),a.progress.dailyBonusPending={availableOn:Ch(e,1)},A())}function _x(){const e=le(),t=wo(),n=Mi(a.progress.dailyBonusPending);if(!n||le()<n.availableOn||a.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;a.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return Px(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,a.progress.dailyBonuses[e]=new Date().toISOString(),D("daily_bonus"),q(a.rewards.rewards.dailyBonusXp,a.rewards.rewards.dailyBonusCoins,"daily_bonus"),Ce({warmth:1,discipline:.8},"daily_bonus"),ht({title:R("dailyBonus"),message:Be("leya","welcome"),xp:a.rewards.rewards.dailyBonusXp,coins:a.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),Q(),xd(),!0}function wo(){var t;(t=a.progress).visits||(t.visits={});const e=a.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function Px(e,t){const n=wo();n.streak=e&&os(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=a.progress.streak.lastStudyDate;s!==t&&(a.progress.streak.current=s&&os(s,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best||0,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120))}function Q(e={}){if(!Ks().length)return 0;const t=!!e.silent;let n=0;return Ks().forEach(s=>{if(Kr(s.id)||!Ex(s))return;n+=1;const r=s.rewardXp||0,o=s.rewardFragments||0;a.progress.achievements[s.id]={unlockedAt:new Date().toISOString(),rewardXp:r,rewardFragments:o},t||ht({type:"achievement",title:zc(s),message:rf(s),xp:r,coins:o,icon:s.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),q(r,o,`achievement:${s.id}`,{silent:t})}),n}function Ex(e){return wf(e)>=Number(e.target||1)}function wf(e){if(e.kind==="lessonComplete")return Object.keys(a.progress.lessonCompletions).length;if(e.kind==="correct")return a.progress.totalCorrect;if(e.kind==="learned")return ed().learned;if(e.kind==="reviews")return td();if(e.kind==="streak")return Math.max(a.progress.streak.current||0,a.progress.streak.best||0);if(e.kind==="level")return a.progress.level||1;if(e.kind==="moonFragments")return a.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return a.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(a.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return a.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return a.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return a.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(ne().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return ao();if(e.kind==="n5Writing")return Object.keys(ne().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(ne().srsKanji||{}).length;if(e.kind==="n5FinalPass")return ne().finalTest?.passed?1:0;if(e.kind==="n4Opened")return W().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n4FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="n3Opened")return H().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(H().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(H().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(H().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(H().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(H().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(H().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(H().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return H().finalTest?.passed?1:0;if(e.kind==="n2Opened")return V().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(V().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(V().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(V().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(V().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(V().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(V().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(V().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(V().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return V().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=qe().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>sn(n.id))?1:0}if(e.kind==="jlpt"){const t=a.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>O(n.id).state==="Mastered")?1:0}return 0}function ht(e){if(!(e?.type==="achievement"&&Ef())){if(!a.rewardModal){a.rewardModal=e,bf(e);return}if(e.type==="level"){a.rewardQueue.unshift(e);return}a.rewardQueue.push(e)}}function bf(e){if(DL(),e?.type==="achievement"){za()?D("achievement_unlock"):_o()&&KL();return}if(e?.type==="level"){D("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&D("notification_reward")}function q(e,t,n="reward",s={}){const r=!!s.silent,o=a.progress.level||Io(a.progress.xp);a.progress.xp+=e,a.progress.moonFragments+=t;const c=Mx(n);if(!r&&!c&&e>0&&D("xp_gain"),!r&&!c&&t>0&&D("moon_fragment_gain"),t>0&&(a.progress.totalMoonFragmentsEarned=Number(a.progress.totalMoonFragmentsEarned||0)+t),a.progress.level=Io(a.progress.xp),(e||t)&&(a.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80)),a.progress.level>o){if(r)return;D("level_up"),be("level_up",{level:a.progress.level,xp:a.progress.xp,moonFragments:a.progress.moonFragments});const l=xn();ht({type:"level",title:R("levelUp"),message:`${R("level")} ${a.progress.level} - ${l.current}/${l.next} XP - ${a.progress.moonFragments} ${R("coins")}`,xp:0,coins:0,mascot:a.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:a.progress.level,totalXp:a.progress.xp,moonFragments:a.progress.moonFragments})}}function Mx(e){return["learn","review"].includes(a.route)&&["review_success","combo_bonus"].includes(e)}function Ut(e,t,n){const s=jn();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Oe(n)&&(s.mistakes+=1),s.minutes=Oo(s.reviews*.75+s.learned*1.25,1),a.progress.daily[le()]=s}function ke(e={}){hf();const t=le(),n=a.progress.streak.lastStudyDate;if(n===t)return;const s=!!(n&&os(n,t)>1&&a.progress.streak.current>0);a.progress.streak.current=n&&os(n,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120),Ce(s?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},s?"streak_lost":"study_streak"),s&&J(Be("eva","streakLoss")),[1,7,30,100].includes(a.progress.streak.current)&&(a.progress.streak.pendingReward={milestone:a.progress.streak.current,availableOn:Ch(t,1)}),be("streak_up",{streak:a.progress.streak.current,lost:s},{skipAchievements:!!e.skipAchievements}),A()}function kf(){if(a.route!=="stats")return;if(!window.Chart){$v().then(()=>{a.route==="stats"&&kf()}).catch(r=>console.warn("Chart.js failed to load.",r));return}const e=iA(10),t=e.map(r=>r.slice(5)),n=_L(),s=PL(n);La("activityChart",{type:"bar",data:{labels:t,datasets:[{label:R("learned"),data:e.map(r=>a.progress.daily[r]?.learned||0),backgroundColor:n.green},{label:R("review"),data:e.map(r=>a.progress.daily[r]?.reviews||0),backgroundColor:n.red}]},options:s}),La("jlptChart",{type:"bar",data:{labels:Object.keys(Of()),datasets:[{label:R("mastered"),data:Object.values(Of()),backgroundColor:n.yellow}]},options:s}),La("streakChart",{type:"line",data:{labels:t,datasets:[{label:R("streak"),data:e.map(r=>a.progress.streakHistory.find(o=>o.date===r)?.value||(a.progress.daily[r]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),La("stateChart",{type:"doughnut",data:{labels:Object.keys(Ff()),datasets:[{data:Object.values(Ff()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),La("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:R("errors"),data:e.map(r=>a.progress.daily[r]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function La(e,t){const n=document.getElementById(e);n&&a.charts.push(new Chart(n,t))}function Kx(){const e=Zn();e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=ce(a.writingStep,0,Math.max(0,Jt(e)-1)),Z.cardId!==String(e.id)&&Dx(e)),Fx(),Ia(),bo(),Pa(Aa(!1)),window.setTimeout($f,120)}function Zn(){return ie(a.activeCardId)||Zc()[0]||a.cards[0]||null}function Dx(e){Z.cardId=String(e?.id||""),Z.strokes=[],Z.currentStroke=[],Z.drawing=!1,Z.activePointerId=null,Z.completed=!1}function Fx(){const e=document.getElementById("practiceCanvas");if(!e)return;Cr();const t=r=>{r.pointerType==="mouse"&&r.button!==0||(r.preventDefault(),e.setPointerCapture?.(r.pointerId),Z.drawing=!0,Z.activePointerId=r.pointerId,Z.currentStroke=[yf(e,r)],Z.completed=!1,Cr())},n=r=>{if(!Z.drawing||r.pointerId!==Z.activePointerId)return;r.preventDefault();const o=yf(e,r),c=Z.currentStroke[Z.currentStroke.length-1];(!c||If(c,o)>1.4)&&(Z.currentStroke.push(o),Cr())},s=r=>{if(!Z.drawing||r.pointerId!==Z.activePointerId)return;r.preventDefault();const o=Ox(Z.currentStroke);o.length&&Z.strokes.push(o),Z.currentStroke=[],Z.drawing=!1,Z.activePointerId=null,Cr(),Pa(Aa(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=r=>r.preventDefault()}function yf(e,t){const n=e.getBoundingClientRect();return{x:ce((t.clientX-n.left)*(e.width/n.width),0,e.width),y:ce((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function Ox(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{If(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function Cr(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=Zn();Af(t,e),n&&Jx(t,e,n),Z.strokes.forEach((s,r)=>Lf(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:r===Z.strokes.length-1})),Z.currentStroke.length&&Lf(t,Z.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function Bx(){Z.strokes=[],Z.currentStroke=[],Z.drawing=!1,Z.completed=!1,Cr(),Pa(Aa(!1))}function zx(){Z.strokes.pop(),Z.currentStroke=[],Z.completed=!1,Cr(),Pa(Aa(!1))}function Ux(e=!1){const t=Aa(!0);Pa(t),e&&(qa(t.success?"good":"again"),J(t.message),t.success&&Tx())}function Aa(e){const t=document.getElementById("practiceCanvas"),n=Zn(),s=Jt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const r=Z.strokes;if(!r.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=ce(Math.round(Math.min(r.length,s)/s*100),0,100),c=e?100:o,l=!!(e&&r.length);let d=p()==="ru"?`Черты: ${r.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${r.length}/${s}. Self-check without recognition.`;return!e&&r.length<s?d=p()==="ru"?`Черта ${r.length+1}/${s}: продолжай по образцу.`:`Stroke ${r.length+1}/${s}: keep following the guide.`:!e&&r.length>s?d=p()==="ru"?`Черты: ${r.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${r.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=Vc(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:c,success:l,expectedCount:s,message:d}}function $f(){const e=document.getElementById("strokeCanvas"),t=Zn();if(!e||!t)return;cancelAnimationFrame(Z.demoAnimationId);const n=Jt(t),s=460,r=performance.now(),o=c=>{const l=c-r,d=ce(Math.floor(l/s),0,n-1),u=ce((l-d*s)/s,0,1);a.writingStep=d,Ia(d,u),bo(),l<n*s?Z.demoAnimationId=requestAnimationFrame(o):(a.writingStep=n-1,Ia(a.writingStep,1),bo())};Z.demoAnimationId=requestAnimationFrame(o)}function jf(){const e=document.getElementById("strokeCanvas"),t=Zn();if(!e||!t)return;cancelAnimationFrame(Z.demoAnimationId);const n=performance.now(),s=520,r=ce(a.writingStep,0,Math.max(0,Jt(t)-1)),o=c=>{const l=ce((c-n)/s,0,1);Ia(r,l),l<1&&(Z.demoAnimationId=requestAnimationFrame(o))};Z.demoAnimationId=requestAnimationFrame(o)}function Sf(e){Cf(a.writingStep+e,!1)}function Cf(e,t){const n=Zn();n&&(a.writingStep=ce(e,0,Math.max(0,Jt(n)-1)),bo(),t?jf():Ia(a.writingStep,1))}function bo(){const e=Zn();if(!e)return;const t=_a(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${a.writingStep+1}/${Jt(e)}`);const r=document.querySelector(".writing-step-head .label");r&&(r.textContent=t[a.writingStep]||""),cl(".writing-guide-list li").forEach((o,c)=>o.classList.toggle("is-active",c===a.writingStep))}function Ia(e=a.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=Zn();if(!n||!s)return;const r=n.getContext("2d");Af(r,n);const o=Ta(s);if(!o){Nf(r,n,s,e);return}xf(r,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function Jx(e,t,n){const s=Ta(n);if(!s){Nf(e,t,n,a.writingStep);return}xf(e,t,s,{activeIndex:a.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Ta(e){if(!e?.kanji)return null;const t=a.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function Vc(e){return!!Ta(e)}function Jt(e){const t=Ta(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function Ra(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function xf(e,t,n,s={}){const r=ce(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=Gx(n,t,s.padding||22),c=Ra(),l=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=c.guide;n.strokeOrder.forEach((f,h)=>{const g=h<r,$=h===r;h>r&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=$?d:g?l:u,e.lineWidth=($?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*($?1:g?.86:.24),$&&s.progress<1&&(e.globalAlpha*=.45+ce(s.progress,0,1)*.55),$&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(f.path)),e.restore(),s.showNumbers&&Hx(e,f,o,h+1,$))})}function Gx(e,t,n=22){const s=qx(e.viewBox),r=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*r)/2-s.x*r,c=(t.height-s.height*r)/2-s.y*r;return{...s,scale:r,x:o,y:c}}function qx(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,r=109,o=109]=t;return{x:n,y:s,width:Math.max(1,r),height:Math.max(1,o)}}function Hx(e,t,n,s,r){const o=Vx(t.path);if(!o)return;const c=n.x+o.x*n.scale,l=n.y+o.y*n.scale;Wx(e,c,l,s,r)}function Vx(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function Wx(e,t,n,s,r){e.save(),e.fillStyle=r?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,r?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=r?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Nf(e,t,n,s=0){const r=Ra(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=r.templateOpacity,e.fillStyle=r.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const c=p()==="ru"?`Шаг ${s+1}/${Jt(n)} · точной схемы пока нет`:`Step ${s+1}/${Jt(n)} · exact paths not available yet`;e.fillText(c,18,16),e.restore()}function Lf(e,t,n={}){const s=t.map(Yx).filter(Boolean);if(!e||!s.length)return;const r=Ra();if(e.save(),e.strokeStyle=n.color||r.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let c=1;c<s.length-1;c+=1){const l=Zx(s[c],s[c+1]);e.quadraticCurveTo(s[c].x,s[c].y,l.x,l.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Af(e,t){if(!e||!t)return;const n=Ra();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),Xx(e,t)}function Xx(e,t){const n=Ra();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function _a(e){const t=Ta(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,r)=>p()==="ru"?s.description_ru||`Штрих ${r+1} по данным KanjiVG`:s.description_en||`Stroke ${r+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:Jt(e)},(s,r)=>n[r]||Qx(e,r))}function Qx(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Pa(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Z.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function Yx(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function Zx(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function If(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function eN(){a.charts.forEach(e=>e.destroy()),a.charts=[]}function tN(e,t){const n=new Date;return a.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const r=a.lessons.find(c=>c.id===s.lessonId);if(r&&!Ve(r))return!1;const o=O(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort($o)}function nN(){const e=new Date;return yo().filter(t=>{const n=O(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort($o)}function sN(){const e=Date.now(),t=[];return[["N5",ne()],["N4",W()],["N3",H()],["N2",V()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([r,o])=>{const c=Yn(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!c.dueAt||!Jc(c))return;const l=qc(n,r,c.lessonId||"");if(!l)return;const d=String(l?.lessonId||c.lessonId||"");if(!nh(n,d))return;const u=new Date(c.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${r}`,level:String(n||"").toUpperCase(),exerciseId:r,lessonId:d,cardId:String(c.cardId||""),dueAt:u,progress:c})})}),t.sort(Ea)}function Wc(){if(Xe&&mi)return mi;const e=[];a.n5Reading.forEach(n=>{n?.id&&e.push(n)}),[["N4",a.n4Reading],["N3",a.n3Reading],["N2",a.n2Reading],["N1",a.n1Reading]].forEach(([n,s])=>{(Array.isArray(s)?s:[]).forEach(r=>{(r.questions||[]).forEach((o,c)=>{const l={id:String(o.id||`${r.id}:${c}`),prompt:o.prompt||{ru:"",en:""},answer:String(o.answer||""),options:sw(o.options)};e.push({id:String(o.id||`${r.id}:${c}`),level:String(r.level||n||"").toUpperCase(),kind:"question",sourceKind:String(r.kind||"reading"),sourceId:String(r.id||""),sourceTitle:r.title||{ru:r.id||"",en:r.id||""},title:r.title||{ru:r.id||"",en:r.id||""},jp:String(r.jp||""),reading:String(r.reading||""),translationRu:String(r.ru||""),translationEn:String(r.en||""),passageSource:String(r.source||""),questionIndex:c,question:l,questions:[l]})})})});const t=[...e,...y$()];return Xe&&(mi=t),t}function Tf(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase(),r=Wc();return r.find(o=>String(o.id||"")===n&&(!s||String(o.level||"").toUpperCase()===s))||r.find(o=>String(o.id||"")===n)||null}function Rf(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?v(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":zt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":zt(e).map(n=>n.kanji).join(""))}}function Xc(e){return 1}function es(e){const t=Rf(e);return{...Sr(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:Xc(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function xr(e,t){const n=es(t),s=Yn({...n,...e||{}},Rf(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=Xc(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(r=>({kanji:String(r?.kanji||""),reading:String(r?.reading||"")})).filter(r=>r.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(r=>String(r)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function ts(e){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const t=a.progress.readingExercises[String(e.id)]||null;if(t){const r=xr(t,e);return a.progress.readingExercises[String(e.id)]=r,r}const n=es(e);return a.progress.readingExercises[String(e.id)]=n,n}function Ds(e,t){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const n=xr(t||{},e);return a.progress.readingExercises[String(e.id)]=n,n}function Qc(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function Nr(e=""){var r;if(!a.progress)return!1;const t=F(e);(r=a.progress).readingExercises||(r.readingExercises={});const n=new Map(Wc().filter(o=>!t||F(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(a.progress.readingExercises).forEach(([o,c])=>{const l=n.get(String(o));if(!l)return;const d=xr(c,l),u=Qc(d)?d:es(l);JSON.stringify(c)!==JSON.stringify(u)&&(a.progress.readingExercises[String(o)]=u,s=!0)}),s}function rN(){const e=Date.now();return Wc().map(t=>{if(!sh(t.level))return null;const n=a.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=xr(n,t);if(a.progress.readingExercises[String(t.id)]=s,!Qc(s))return null;const r=s.dueAt?new Date(s.dueAt).getTime():0;return!r||r>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:r,progress:s,exercise:t,card:null}}).filter(Boolean).sort(Ea)}function aN(){const e=Date.now();return["hiragana","katakana"].flatMap(t=>{if(!ve(t))return[];const n=$t(t),s=Object.entries(n).map(([r,o])=>({cardId:r,...Pe(o)}));return Rd(s,e).initial.map(r=>{const o=ro(r.cardId,t);if(!o?.id||o.slug!==t)return null;const c=Cg(t,o.kana);return Mc({kind:"kana",key:o.id,courseSlug:t,cardId:o.id,kana:o.kana,romaji:c?.romaji||"",strokes:c?.strokes||0,character:c,progress:r,dueAt:r.dueAt?Date.parse(r.dueAt):0})}).filter(Boolean)}).sort(Ea)}function iN(){const t=[...nN().map(s=>{if(!s?.id)return null;const r=O(s.id);return{kind:"card",key:`card:${s.id}`,card:s,cardId:String(s.id),dueAt:r.dueAt?new Date(r.dueAt).getTime():0,progress:r}}).filter(Boolean),...aN()].sort(Ea),n=[...sN(),...rN()].sort(Ea);return Sa(Hw(t,n,Dl))}function Yc(){if(Xe&&di)return di;const e=iN();return Xe&&(di=e,zr=e.length),e}function _f(e=Yc()){const t=Object.freeze(Sa(e).map(n=>n.key).filter(Boolean));a.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString(),results:{remember:0,forgot:0,items:[]}}}function Pf(e){if(a.route!=="review"||!a.reviewSession)return!1;const t=String(e||"").trim();if(!t)return!1;const n=Array.isArray(a.reviewSession.keys)?a.reviewSession.keys:[],s=n.filter(r=>r!==t);return s.length===n.length?!1:(a.reviewSession.keys=Object.freeze(s),!0)}function Ef(){if(a.route!=="review")return!1;const e=Array.isArray(a.reviewSession?.keys)?a.reviewSession.keys:null;return e?e.length>0:!!(a.activeCardId||a.activeExerciseReviewId)}function oN(){const e=Yc();if(a.route!=="review")return e;a.reviewSession||_f(e);const t=new Map(e.map(r=>[r.key,r])),n=Array.isArray(a.reviewSession?.keys)?a.reviewSession.keys:[],s=n.map(r=>t.get(r)).filter(Boolean);return!n.length&&e.length?(_f(e),e):Sa(s)}function Mf(e,t,n={}){if(a.route!=="review"||!a.reviewSession)return;const s=Oe(t)?"forgot":"remember",r=a.reviewSession.results||{remember:0,forgot:0,items:[]};r.remember=Number(r.remember||0),r.forgot=Number(r.forgot||0),r[s]+=1,r.items=Array.isArray(r.items)?r.items:[],r.items.push({kind:e,rating:s,label:String(n.label||n.kana||n.kanji||n.cardId||""),course:String(n.course||n.level||""),dueAt:n.dueAt||null}),a.reviewSession.results=r}function lN(){if(Xe&&ui!==null)return ui;const e=Date.now(),t=yo().filter(r=>{const o=O(r.id),c=o.dueAt?new Date(o.dueAt).getTime():0;return o.state==="Learning"&&c>e}).length,n=Kf().filter(r=>{const o=r.dueAt?new Date(r.dueAt).getTime():0;return r.state==="Learning"&&o>e}).length,s=t+n;return Xe&&(ui=s),s}function Kf(){return["hiragana","katakana"].flatMap(e=>ve(e)?Object.values($t(e)).map(t=>Pe(t)):[])}function cN(){if(Xe&&pi!==null)return pi;const e=yo().filter(t=>O(t.id).state!=="New").length+Kf().filter(t=>t.state!=="New").length;return Xe&&(pi=e),e}function vt(){if(Xe&&zr!==null)return zr;const e=a.route==="review"?Yc().length:dN();return Xe&&(zr=e),e}function dN(){const e=Date.now();return uN(e)+pN(e)+gN(e)+mN(e)}function ko(e,t=Date.now()){if(!e||typeof e!="object"||e.state==="New")return!1;const n=e.dueAt?new Date(e.dueAt).getTime():0;return!!(n&&n<=t)}function uN(e=Date.now()){return yo().reduce((t,n)=>{const s=O(n.id);return t+(ko(s,e)?1:0)},0)}function pN(e=Date.now()){return["hiragana","katakana"].reduce((t,n)=>{if(!ve(n))return t;const s=$t(n);return t+Object.values(s).reduce((r,o)=>{const c=Pe(o);return r+(ko(c,e)?1:0)},0)},0)}function gN(e=Date.now()){return Re.reduce((t,n)=>{const s=mf(n);return t+Object.entries(s?.exerciseSrs||{}).reduce((r,[o,c])=>{const l=Yn(c,{level:n,exerciseId:o,lessonId:c?.lessonId||"",cardId:c?.cardId||"",kanji:c?.kanji||"",type:c?.type||"",title:c?.title||null,prompt:c?.prompt||"",answer:c?.answer||"",answerLabel:c?.answerLabel||""});return!ko(l,e)||!Jc(l)||l.lessonId&&!nh(n,l.lessonId)?r:r+1},0)},0)}function mN(e=Date.now()){return Object.values(a.progress?.readingExercises||{}).reduce((t,n)=>{const s=String(n?.level||"").toUpperCase();if(s&&!sh(s))return t;const r=xr(n,{level:s,id:n?.exerciseId||n?.id||""});return Qc(r)?t+(ko(r,e)?1:0):t},0)}function Ea(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?O(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?O(t.card.id):t.progress,r=Fi(n),o=Fi(s);if(r!==o)return o-r;if(e.kind!==t.kind){const c=e.kind==="card"||e.kind==="kana",l=t.kind==="card"||t.kind==="kana";return c!==l?c?-1:1:String(e.kind||"").localeCompare(String(t.kind||""))}return e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function yo(){if(Xe&&gi)return gi;const e=new Set,t=[];Re.forEach(s=>{ah(s).forEach(r=>{const o=String(r?.id||"");!o||e.has(o)||(e.add(o),t.push(r))})});const n=t.sort($o);return Xe&&(gi=n),n}function Zc(){const e=aA();return a.cards.filter(t=>{const n=a.lessons.find(r=>r.id===t.lessonId);if(n&&!Ve(n))return!1;const s=O(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort($o)}function $o(e,t){const n=O(e.id),s=O(t.id),r=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(r!==o)return r-o;if(r>0){const c=Fi(n),l=Fi(s);if(c!==l)return l-c}return Number(e.id)-Number(t.id)}function fN(){const e=a.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return a.cards.filter(t=>{const n=Ma(t.id),s=[t.kanji,K(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,sd(t),t.jlpt,bd(t.lessonId),Ja(t),n.radical,v(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(r=>[r.word,r.reading,r.romaji,r.translation,as(r)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(a.filters.jlpt==="all"||t.jlpt===a.filters.jlpt)&&(a.filters.radical==="all"||n.radical===a.filters.radical)&&(a.filters.favorites==="all"||!!a.progress.favorites[t.id])&&hN(t.strokes,a.filters.strokes)})}function hN(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function ed(){const e=a.cards.length,t=a.cards.filter(s=>O(s.id).state!=="New").length,n=a.cards.filter(s=>O(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:Zc().length,completion:E(n,e)}}function td(){return Object.values(a.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function vN(){return(a.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Df(){const e=a.progress.totalCorrect+a.progress.totalWrong;return e?Math.round(a.progress.totalCorrect/e*100):0}function Ff(){const e={New:0,Learning:0,Review:0,Mastered:0};return a.cards.forEach(t=>{e[O(t.id).state]+=1}),e}function Of(){const e={};return a.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),O(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function jn(){const e=le();return a.progress.daily[e]||(a.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),a.progress.daily[e]}function nd(e){return a.cards.filter(t=>t.lessonId===e)}function wN(){return a.cards.filter(e=>{const t=a.lessons.find(n=>n.id===e.lessonId);return(!t||Ve(t))&&O(e.id).state==="New"})}function ie(e){const t=String(e||"");return t&&a.cards.find(n=>String(n.id)===t||String(n.kanji||"")===t||sf(n)===t)||null}function bN(e){return ie(e)}function kN(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function Ma(e){return a.kanjiMeta[String(e)]||{}}function jo(e){const t=a.kanjiHints[String(e)]||{};return{hint:v(t.hint||{})||Be("leya","hint"),mnemonic:v(t.mnemonic||{})||""}}function yN(e){e&&(a.progress.favorites[e]?delete a.progress.favorites[e]:a.progress.favorites[e]=new Date().toISOString(),A(),P())}function wt(e=null){a.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function $N(e){const t=String(e||"");a.readingCheck.cardId!==t&&wt(t)}function Bf(){const e=ie(a.readingCheck.cardId||a.activeCardId);if(!e)return;Qr(e,"reading_check"),xo();const t=SN(a.readingCheck.value),n=jN(e),s=t.some(l=>n.normalized.has(l)),r=t.length>0,o=r&&s?"correct":"wrong",c=r?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";a.readingCheck={cardId:e.id,value:a.readingCheck.value,status:o,message:c},D(o==="correct"?"answer_correct":"answer_wrong"),He(),requestAnimationFrame(()=>{const l=document.getElementById(`readingCheck-${e.id}`);l&&(l.focus(),"setSelectionRange"in l&&l.setSelectionRange(l.value.length,l.value.length))})}function jN(e){const t=Ka(e),n=[...ns(t.onyomi.kana),...ns(t.kunyomi.kana),...ns(e.hiragana)].filter(Boolean),s=n.filter((r,o)=>n.indexOf(r)===o);return{normalized:new Set(s.map(zf).filter(Boolean))}}function SN(e){return String(e||"").split(/[\/,、，\s]+/u).map(zf).filter(Boolean)}function zf(e){const t=Uf(String(e||"").normalize("NFKC")).replace(/[・･.\-]/gu,"").replace(/\s+/gu,"");return CN(t).trim()}function Uf(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function CN(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=xN(t.slice(-1));continue}t+=n}return t}function xN(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎじぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function Jf(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=a.n5KanjiCatalog:t==="N4"?n=a.n4KanjiCatalog:t==="N3"?n=a.n3KanjiCatalog:t==="N2"&&(n=a.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const Gf={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},qf={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Ka(e){const t=Jf(e);if(t&&t.readings){const r=t.readings,o=So(r.onyomi,r.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),c=So(r.kunyomi,r.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||c.kana)return{onyomi:o,kunyomi:c}}const n=So(e?.onyomi,e?.onyomi_romaji),s=So(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function ns(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/／,，、・･;；]+/u).map(n=>n.trim()).filter(Boolean)}function So(e,t="",n=""){const s=ns(e).length?ns(e):ns(n),r=ns(t),o=s.map((c,l)=>({kana:Y(c),romaji:NN(c,r[l])})).filter(c=>c.kana||c.romaji);return{kana:o.map(c=>c.kana).filter(Boolean).join(" / "),romaji:o.map(c=>c.romaji).filter(Boolean).join(" / ")}}function NN(e,t){const n=Hf(e);return n?t&&Vf(t)===Vf(n)?t:n:t||""}function Hf(e){const t=[...LN(e)];let n="",s=!1;for(let r=0;r<t.length;r+=1){const o=t[r],c=t[r+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=AN(n);u&&(n+=u);continue}let l="";const d=o+c;if(qf[d])l=qf[d],r+=1;else if(Gf[o])l=Gf[o];else if(/[a-zA-Z0-9]/u.test(o))l=o.toLowerCase();else{s=!1;continue}if(s){const u=l.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=l}return n}function LN(e){return Uf(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function AN(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function Vf(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/gu,"").replace(/[^a-z0-9]+/gu,"")}function Wf(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Co(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function sd(e){const t=Ka(e);return[`${Co("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Co("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" · ")}function rd(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return Qf(t)||Xf(e)}function Xf(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=IN(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function Qf(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function IN(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function TN(e){return!!(rd(e)||ad(e))}function ad(e){if(!e)return"";const t=Ka(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function RN(e){const t=Ka(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Lr(e,t=""){const n=$1(RN(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function _N(e){return Lr(e).length>0}function PN(e){return ns(e)[0]||String(e||"").trim()}function id(){if(a.route!=="learn"&&a.route!=="review")return;const e=560-(Date.now()-Or);if(e>0){window.setTimeout(id,e);return}const t=ie(a.activeCardId);if(!t)return;const n=Lr(t).map(o=>`${o.kind}:${o.kana}`).join("|")||ad(t),s=Qf(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const r=`${a.route}:${t.id}:${n||s}`;r!==Xd&&(Xd=r,Yf(t,{silent:!0}))}function xo(){oi+=1,Rt="idle",No(),ld()}function od(){return oi+=1,oi}function st(e){return e===oi}function ld(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function No(){Xt&&(Xt.pause(),Xt.currentTime=0,Xt=null)}function Yf(e,t={}){const n=od();let s=null;const r=()=>st(n)?(s||(s=Zf(e,{...t,requestId:n})),s):Promise.resolve(!1);return eh(e,{kind:"cycle",silent:t.silent,fallback:r,requestId:n})?Promise.resolve(!0):r()}function Zf(e,t={}){const n=t.requestId||od();if(!st(n))return Promise.resolve(!1);const s=rd(e);if(!s||(ld(),No(),!st(n)))return Promise.resolve(!1);Rt="audio";const r=new Audio(s);return Xt=r,r.preload="auto",r.onended=()=>{Xt===r&&(Xt=null,st(n)&&(Rt="idle"))},r.onerror=()=>{st(n)&&(t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:s}))},r.play().then(()=>st(n)&&Xt===r).catch(o=>(st(n)&&(Xt===r&&(Xt=null,Rt="idle"),t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:s,error:o})),!1))}function eh(e,t={}){const n=t.requestId||od();No(),Rt="tts-pending";let s=null;const r=typeof t.fallback=="function"?()=>st(n)?(s||(s=t.fallback({...t,requestId:n})),s):Promise.resolve(!1):null,o=Y(t.text||""),c=t.kind||"cycle",l=`${e?.id||e?.kanji||"kanji"}:${c}`,d=Lr(e);let u=null;if(!o){const L=j1(d,Qd.get(l)??-1,c);u=L.item,Qd.set(l,L.cursor)}const f=o||u?.kana||PN(ad(e));let h=!1;if(!_h(f,{onStart:()=>{if(!st(n)||Rt==="audio"){ld();return}h=!0,Rt="tts",No()},onEnd:()=>{st(n)&&Rt==="tts"&&(Rt="idle")},onError:L=>{!st(n)||h||Rt==="audio"||(t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:L}),r?.())}}))return st(n)&&r?.(),!r&&st(n)&&(Rt="idle"),!r&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:Xf(e)}),!1;if(!st(n))return!1;const $=t.label||(u?Bc(u):"TTS");return t.silent||J(`${e?.kanji||""} ${$}: ${f}`.trim()),!0}function EN(e,t){J(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Ve(e){return!!e}function Lo(e){return a.rewards?.lessonUnlocks?.[e?.id]||1}function th(e){if(!e||!Ve(e))return"locked";const t=nd(e.id);return t.length?!!a.progress.lessonCompletions?.[e.id]||t.every(r=>{const o=O(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(r=>{const o=O(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function cd(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function dd(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function MN(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${m(dd(e))}"></span>`}function KN(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${cd(e)}">${i(dd(e))}</span>`}function Sn(e){const t=String(e||"").toUpperCase();return a.jlptLessons.find(n=>n.jlpt===t)||null}function Lt(e){const t=String(e||"").toUpperCase();return a.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function Da(e){const t=String(e||"").toLowerCase();return a.kanaCatalog?.courses?.find(n=>n.slug===t)||null}function Fs(e){const t=String(e||"").toLowerCase();return a.kanaCourses?.[t]||null}function ss(){return a.progress.kanaCourses=_d(a.progress.kanaCourses||null),a.progress.kanaCourses}function bt(e){return N1(ss(),e)}function Ao(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim();if(!ve(n)||!s)return;const r=bt(n),o=new Date().toISOString();let c=!1;r.currentRoute!==s&&(r.currentRoute=s,c=!0),r.updatedAt||(r.updatedAt=o,c=!0),c&&A()}function DN(e){const t=String(e||"").toLowerCase(),n=Da(t);if(!n||!ve(t))return Promise.resolve(null);if(a.kanaCourses[t])return Promise.resolve(a.kanaCourses[t]);if(a.kanaCourseLoading[t])return a.kanaCourseLoading[t];a.kanaCourseErrors[t]=null;const s=Ge(n.course_file).then(r=>(a.kanaCourses[t]=r,a.kanaCourseLoading[t]=null,r)).catch(r=>{throw a.kanaCourseLoading[t]=null,a.kanaCourseErrors[t]=r,r});return a.kanaCourseLoading[t]=s,s}function Gt(e){const t=String(e||"").toUpperCase();return t==="N5"?ne():t==="N4"?W():t==="N3"?H():t==="N2"?V():t==="N1"?ee():null}function FN(e,t,n="open"){const s=F(e),r=String(t||"");if(!s||!r)return!1;const o=Gt(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[r])?!1:(o.viewedLessons[r]=new Date().toISOString(),!0)}function nh(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const r=Gt(n);return r?!!(r.viewedLessons?.[s]||r.completedLessons?.[s]):!1}function Fa(e,t="open"){var s;const n=F(e);return!n||((s=a.progress).viewedReadingLevels||(s.viewedReadingLevels={}),a.progress.viewedReadingLevels[n])?!1:(a.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function sh(e){const t=F(e);return t?!!a.progress.viewedReadingLevels?.[t]:!1}function ud(e){const t=Lt(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function ON(e){const t=String(e||"").toUpperCase(),n=Gt(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const s=Lt(t),r=kt(t),o=Math.max(Number(s?.lessonCount||0),r.length||0),c=Is(t);return o>0&&c>=o}function At(e){const t=String(e||"").toUpperCase();if(Re.includes(t)||a.progress.unlockedJlptLevels&&a.progress.unlockedJlptLevels.includes(t))return!0;if(!Lt(t))return t==="N5";const s=ud(t);return s.length?s.every(r=>ON(r)):!0}function rh(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function Cn(e){const t=ud(e);return t.length?p()==="ru"?`Откроется после завершения ${rh(t)}.`:`Unlocks after completing ${rh(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function kt(e){const t=F(e);if(!t)return[];if(t==="N5"&&a.n5Textbook?.items?.length)return a.n5Textbook.items;if(t==="N4"&&a.n4Textbook?.items?.length)return a.n4Textbook.items;if(t==="N3"&&a.n3Textbook?.items?.length)return a.n3Textbook.items;if(t==="N2"&&a.n2Textbook?.items?.length)return a.n2Textbook.items;if(t==="N1"&&a.n1Textbook?.items?.length)return a.n1Textbook.items;const n=Lt(t),s=a.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),r=n?(n.lessonIds||[]).map(d=>a.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(r.map(d=>d.id)),c=s.filter(d=>!o.has(d.id)),l=Math.max(n?n.lessonCount||r.length:s.length,r.length);return[...r,...c].slice(0,l||s.length)}function pd(e){const t=F(e);if(!t)return"";const n=kt(t);if(!n.length)return"";const s=eL(t);if(s?.lessonId&&Ro(t,s.lessonId))return s.lessonId;const r=Gt(t)?.currentLessonId||"";if(r&&Ro(t,r))return r;const o=t==="N5"?ne().completedLessons||{}:t==="N4"?W().completedLessons||{}:t==="N3"?H().completedLessons||{}:t==="N2"?V().completedLessons||{}:a.progress.lessonCompletions||{},c=n.filter(l=>o[l.id]);return c.length?(c.sort((l,d)=>{const u=Date.parse(o[d.id]||"")||0,f=Date.parse(o[l.id]||"")||0;return u!==f?u-f:(d.order||0)-(l.order||0)}),c[0]?.id||n[0]?.id||""):n[0]?.id||""}function BN(e,t=""){const n=F(e);if(!n||!Sn(n))return;if(!At(n)){a.activeTextbookLevel=n,a.activeJlptLesson=n,Zr("textbooks",null,n),J(Cn(n));return}const s=a.route,r=String(t||"")||pd(n),o=["N5","N4","N3","N2"].includes(n),c=r?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(r)}`:`#textbooks/${encodeURIComponent(n)}`;a.route="textbooks",a.activeTextbookLevel=n,a.activeJlptLesson=n,a.activeTextbookSubroute=r||null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=!o&&r?`#textbook-lesson-${r}`:null,s!=="eva-room"&&(a.evaRoomShopOpen=!1),r&&It(n,r,"open_jlpt"),wt(),yt(c),Ns(),P()}function zN(e){return e?Sn(e.jlpt):null}function Ar(e){const t=String(e||"").toUpperCase();return a.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Os(){return a.progress.jlptLessonPractice=op(Zs().jlptLessonPractice,a.progress.jlptLessonPractice||{}),a.progress.jlptLessonPractice}function Ir(e){if(!e?.drills?.length)return null;const t=Os(),n=t.activeIds[e.jlpt],s=e.drills.find(r=>r.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function UN(e){const t=Ar(a.activeJlptLesson),n=Ir(t);if(!n||!n.tiles[e])return;const s=Os(),r=s.selected[n.id]||[],o=n.blanks.flatMap(c=>c.answer||[]).length;r.includes(e)||r.length>=o||(s.selected[n.id]=[...r,e],s.checked[n.id]=!1,s.results[n.id]=null,A(),P())}function JN(){const e=Ir(Ar(a.activeJlptLesson));if(!e)return;const t=Os();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,A(),P()}function GN(){const e=Ir(Ar(a.activeJlptLesson));if(!e)return;const t=Os();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,A(),P()}function qN(){const e=Ir(Ar(a.activeJlptLesson));if(!e)return;const t={...md(),...gd()},n=Os(),s=n.selected[e.id]||[],r=e.blanks.flatMap(l=>l.answer||[]),o=r.reduce((l,d,u)=>{const f=e.tiles[s[u]];return(!f||f.kanji!==d)&&l.push(u),l},[]),c=s.length===r.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:c,wrongIndexes:o,message:c?t.correct:t.wrong},c&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),q(8,1,`jlpt_practice:${e.id}`),D("answer_correct")):c||D("answer_wrong"),A(),P()}function HN(){var o,c,l,d,u,f;const e=Ar(a.activeJlptLesson),t=Ir(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],r=Os();r.activeIds[e.jlpt]=s.id,(o=r.selected)[c=s.id]||(o[c]=[]),(l=r.checked)[d=s.id]||(l[d]=!1),(u=r.results)[f=s.id]||(u[f]=null),A(),P()}function ah(e){const t=String(e||"").toUpperCase();return t?a.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function gd(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function md(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function Io(e){const t=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=Oa(n,t)&&n<100;)s-=Oa(n,t),n+=1;return n}function xn(){const e=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=a.progress.xp;for(;n>=Oa(t,e)&&t<100;)n-=Oa(t,e),t+=1;const s=Oa(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:E(n,s)}}function Oa(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function VN(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:a.progress,customization:a.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${le()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),fe("progress_export",{route:a.route,source:"manual"}),J(R("export"))}function fe(e,t={},n={}){return B1(e,t,n)}function cn(e="learn",t={}){fe("learning_start",{route:a.route,source:e,...t},{dedupeKey:"learning_start"})}function Tr(e,t,n="textbook"){const s=F(e),r=String(t||"");fe("lesson_complete",{route:a.route,level:s,lessonId:r,source:n},{dedupeKey:`${s||"legacy"}:${r}`})}function To(e="review"){if(a.route!=="review"||Ef())return;const t=a.reviewSession?.startedAt||"current";fe("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function Ba(e,t,n="final-test"){const s=F(e);fe("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&fe("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function WN(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&a.rewardModal||null}}function F(e){const t=String(e||"").toUpperCase();return Re.includes(t)?t:""}function rt(e){if(!e||typeof e!="object")return null;const t=F(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function XN(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=F(n),o=rt({...typeof s=="object"&&s?s:{},level:r||n});r&&o&&(t[r]=o)}),t}function Bs(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=String(n||"").trim();if(r){if(typeof s=="string"&&s.trim()){t[r]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[r]=o;return}s&&(t[r]=new Date().toISOString())}}),t}function Ro(e,t){const n=F(e),s=String(t||"");return!n||!s?!1:kt(n).some(r=>r.id===s)}function QN(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!!n;const r=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return r.has(s)||n!=="N5"&&o.has(s)?!0:kt(n).some(c=>c.id===s)}function YN(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const r=Si(n);return r==="ready"||r==="error"||r==="incomplete"?!1:/^[A-Za-z0-9_-]+$/.test(s)}function ZN(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim().toLowerCase();if(!ve(n))return!1;if(!s)return!0;const r=Fs(n);if(r)return["review","final","final-test","reference","sources"].includes(s)||r.lessons?.some(l=>l.id===s)||r.reading_practice?.some(l=>l.id===s);const o=Da(n),c=Number(o?.lesson_count||(n==="hiragana"?10:11));if(/^lesson-\d+$/i.test(s)){const l=Number(s.replace(/\D+/g,""));return l>=1&&l<=c}return/^practice-[1-5]$/i.test(s)?!0:["review","final","final-test","reference","sources"].includes(s)}function ih(e){return kt(e)[0]?.id||""}function eL(e=""){const t=F(e);if(t){const r=rt(a.progress.lastOpenedJlptLessons?.[t]||null)||(rt(a.progress.lastOpenedJlptLesson||null)?.level===t?rt(a.progress.lastOpenedJlptLesson||null):null);return r&&Ro(t,r.lessonId)?r:null}const n=[rt(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(r=>rt(r)).filter(Boolean)].filter(Boolean);return n.sort((r,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(r.updatedAt||"")||0)),n.find(r=>Ro(r.level,r.lessonId))||null}function tL(e=""){const t=F(e);if(t)return rt(a.progress.lastOpenedJlptLessons?.[t]||null)||(rt(a.progress.lastOpenedJlptLesson||null)?.level===t?rt(a.progress.lastOpenedJlptLesson||null):null);const n=[rt(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(s=>rt(s)).filter(Boolean)].filter(Boolean);return n.sort((s,r)=>(Date.parse(r.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function nL(e){const t=F(e);if(!t)return"";const n=Re.indexOf(t);return n>=0&&n<Re.length-1?Re[n+1]:""}function It(e,t,n="open"){var h;const s=F(e),r=String(t||"");if(!s||!r)return null;const o={level:s,lessonId:r,updatedAt:new Date().toISOString(),source:n},c=rt(a.progress.lastOpenedJlptLessons?.[s]||null),l=rt(a.progress.lastOpenedJlptLesson||null);(h=a.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),a.progress.lastOpenedJlptLessons[s]=o,a.progress.lastOpenedJlptLesson=o;const d=FN(s,r,n),u=Gt(s);return u&&u.currentLessonId!==r&&(u.currentLessonId=r),(!c||c.lessonId!==r||c.level!==s||l?.lessonId!==r||l?.level!==s||d)&&A(),o}function qt(e,t="btn ghost"){const n=F(e),s=nL(n);if(!n||!s)return"";const r=ih(s);if(!r)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${m(t)}" type="button" data-action="final-test-next-level" data-level="${m(n)}" data-next-level="${m(s)}" data-next-lesson="${m(r)}">${i(o)}</button>`}function dn(){return F(a.activeJlptLesson)||F(a.activeTextbookLevel)||F(a.jlptLessons.find(e=>At(e.jlpt))?.jlpt)||F(a.jlptLessons[0]?.jlpt)||"N5"}function sL(e,t={}){const n=String(e||a.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(F(t.level||a.activeTextbookLevel||dn())||dn())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(F(t.level||a.activeJlptLesson||dn())||dn())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?a.route||"home":n||"home"}function rL(e=a.route,t={}){const n=new URL(location.href);return n.search="",n.hash=sL(e,t),n.href}function aL(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=F(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=p()==="ru",o={textbooks:r?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:r?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:r?"Урок Flash Kanji":"Flash Kanji lesson",srs:r?"Повторение Flash Kanji":"Flash Kanji review",stats:r?"Статистика Flash Kanji":"Flash Kanji stats",achievements:r?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},c=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${c} ${s}`:c}function iL(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=F(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=s?Lt(s):null,o=t.lesson||(s?Sn(s):null),c=p()==="ru";if(n==="textbooks")return c?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const l=v(r?.displayTitle||r?.title||{}),d=Number(r?.lessonCount||0),u=Number(r?.kanjiCount||0);return c?`${l||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${l||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const l=v(o?.title||{}),d=v(o?.summary||{});return c?`${s?`${s} · `:""}${l||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${l||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?c?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?c?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?c?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?pL(t.reward||a.rewardModal||{}):"Flash Kanji."}function oL(){return p()==="ru"?"Поделиться":"Share"}function rs(e=a.route,t={}){const n=F(t.level||""),s=String(t.lessonId||t.lesson?.id||""),r=t.label||oL();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${m(e)}" ${n?`data-share-level="${m(n)}"`:""} ${s?`data-share-lesson-id="${m(s)}"`:""} ${t.toastKey?`data-share-toast-key="${m(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${lL()}</span>
        <span>${i(r)}</span>
      </button>
    `}function lL(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function oh(e){return e==="youtube"?`
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
    `}async function cL(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await hL(e.text,e.url,n)?"copy":"failed"}async function dL(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=t.reward||a.rewardModal||null,r={section:n,title:aL(n,t),text:iL(n,t),url:rL(n,t),files:[]};if(n==="achievement"||s){const o=await gL(s||{});o&&typeof File<"u"&&(r.files=[new File([o],`flash-kanji-achievement-${a.progress.level}.png`,{type:"image/png"})])}return r}async function lh(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||a.activeJlptLesson||a.activeTextbookLevel||""),fe("share_opened",{route:n,level:F(s.level)||"",source:"share"});const r=await dL(n,s),o=await cL(r,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(fe("share_completed",{route:n,source:r.files?.length?"file":"web-share"}),!0):o==="copy"?(fe("share_link_copied",{route:n,source:"copy"}),fe("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||J(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function uL(){await lh("achievement",{reward:a.rewardModal||{},toastKey:"shareCopied"})}function pL(e={}){const t=R("shareFallback"),n=e.level||a.progress.level,s=xn(),r=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||a.progress.xp,o=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments;return`${t}: ${R("level")} ${n}, ${r} XP, ${o} Moon Fragments.`}async function gL(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const r=s.getContext("2d");if(!r)return null;mL(r,1200,630);const o=e.level||a.progress.level,c=xn(),l=e.type==="level"?`${c.current}/${c.next}`:e.totalXp||a.progress.xp,d=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments,u=e.mascot||(a.progress.level%2===0?"leya":"eva"),f=vo(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,g]=await Promise.all([ch("assets/logo.webp"),f?ch(f):Promise.resolve(null)]);return h&&dh(r,h,58,48,330,116),g&&dh(r,g,780,95,330,450),r.fillStyle="#f7f4ee",r.font="900 58px system-ui, sans-serif",r.fillText(R("levelUp"),64,230),r.font="900 110px 'Yu Mincho', serif",r.fillStyle="#ffe15a",r.fillText(`${R("level")} ${o}`,64,340),r.font="800 38px system-ui, sans-serif",r.fillStyle="#f7f4ee",r.fillText(`${l} XP`,70,425),r.fillText(`${d} Moon Fragments`,70,482),r.fillStyle="rgba(255,255,255,0.74)",r.font="700 28px system-ui, sans-serif",r.fillText("Flash Kanji | JLPT Japanese learning",70,558),r.strokeStyle="rgba(255, 225, 90, 0.7)",r.lineWidth=3,r.strokeRect(34,30,1132,570),fL(s)}function mL(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let r=-t;r<t*2;r+=38)e.beginPath(),e.moveTo(r,0),e.lineTo(r+t,n),e.stroke()}function ch(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function dh(e,t,n,s,r,o){const c=Math.min(r/t.naturalWidth,o/t.naturalHeight),l=t.naturalWidth*c,d=t.naturalHeight*c;e.drawImage(t,n+(r-l)/2,s+(o-d)/2,l,d)}function fL(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function hL(e,t,n="shareLinkCopied"){const s=await uh(`${e}
${t}`);return J(s?R(n):e),s}async function uh(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function vL(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());a.progress=Wu(Zs(),n.progress||n),Wr(),n.customization&&(a.customization={...In(),...n.customization,selected:{...In().selected,...n.customization.selected||{}}},Ys()),bs(),Rr(),A(),un(),J(R("import")),P()}catch(n){console.error(n),J("Invalid JSON")}finally{e.target.value=""}}function wL(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=a.progress.settings;a.progress=Zs(),a.progress.settings=e,a.finalTestModal=null,a.finalTestBusy=!1,Wr(),Rr(),A(),P()}function bL(){a.progress.settings.theme=a.progress.settings.theme==="dark"?"light":"dark",a.progress.settings.themeManuallySelected=!0,un(),A(),P()}function kL(){a.progress.settings.language=p()==="ru"?"en":"ru",a.progress.settings.languageAutoDetected=!1,a.progress.settings.languageManuallySelected=!0,A(),P()}function ph(){a.progress.settings.sound=!Rn(a.progress.settings.sound,!0),a.progress.settings.uxSound=a.progress.settings.sound,Rr(),fd(),A(),J(a.progress.settings.sound?"♪":"×")}function yL(){ph()}function za(){return window.FlashKanjiSound||null}function $L(){try{za()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function Rr(){const e=za();!e||!a.progress?.settings||(e.setSoundEnabled?.(Rn(a.progress?.settings?.sound,!0)),e.setSoundVolume?.(Po()))}function _o(){return Rn(a.progress?.settings?.sound,!0)}function fd(){const e=Me('[data-action="sound"]');if(!e)return;const t=Rn(a.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=jL(t)}function jL(e){return e?`
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
      `}function SL(e){return e?`
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
      `}function CL(){const e=Me('[data-action="notification-center"]');if(!e)return;const t=a.notificationPrompt||Va(),n=!!(t.docked||a.notificationPromptVisible||Ko("header")),s=!!a.notificationPromptVisible,r=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",r),e.title=r,e.innerHTML=SL(s)}function hd(){const e=Me('[data-action="toggle-header-socials"]');if(!e)return;const t=vd(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function gh(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),hd())}function vd(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Po(){const e=Number(a.progress?.settings?.uxVolume);return Number.isFinite(e)?ce(e,0,1):.75}function xL(e){const t=ce(Number(e),0,1);a.progress.settings.uxVolume=t,Rr(),A()}function D(e){if(!_o())return!1;const t=()=>{try{if(!!za()?.playSound?.(e)){Or=Date.now();return}yd(String(e))}catch(n){console.warn("UX sound failed.",n),yd(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function un(){document.documentElement.dataset.theme=a.progress.settings.theme,document.documentElement.dataset.customTheme=a.customization?.selected?.theme||"theme_default_dark";const e=nn();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",wd(e?.file||"assets/bg/bg_study_hub.webp"));const t=Yk();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a.progress.settings.theme==="light"?"#f8f7f2":"#08080c"),LL()}function NL(){return["localhost","127.0.0.1","::1",""].includes(window.location.hostname)}function LL(){NL()&&(window.FLASH_KANJI_EVA_ROOM_DEBUG={getBackground:()=>{const e=nn();return{selectedCustomization:a.customization?.selected?.background||null,selectedProgress:a.progress?.selectedEvaRoomBackground||null,equippedProgress:a.progress?.shop?.equipped?.background||null,currentId:e?.id||null,currentFile:e?.file||null,appRoomCss:document.documentElement.style.getPropertyValue("--app-room-bg"),sceneCss:document.querySelector(".eva-vn-scene")?.style.getPropertyValue("--eva-bg")||"",customRoomDataset:document.documentElement.dataset.customRoom||"",backgrounds:qi().map(t=>({id:t.id,file:t.file,defaultUnlocked:!!t.defaultUnlocked}))}}})}function wd(e){const t=String(e||"assets/bg/bg_study_hub.webp").replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function R(e){return a.i18n?.ui?.[e]?.[p()]||a.i18n?.ui?.[e]?.ru||e}function p(){return a.progress?.settings?.language||"ru"}function v(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function AL(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Ua(e){return p()==="en"&&a.lessonTranslations[e.id]?.title_en||e.title}function IL(e){return p()==="en"&&a.lessonTranslations[e.id]?.summary_en||e.summary}function bd(e){const t=a.lessons.find(n=>n.id===e);return t?Ua(t):""}function K(e){return We(e,p())}function We(e,t=p()){if(!e)return"";const n=Jf(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||a.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Ja(e){return p()==="en"?a.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function as(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=a.vocabulary.find(n=>n.word===e.word||kd(n.romaji)===kd(e.romaji));return t?.translation_en?t.translation_en:av[kd(e.romaji)]||e.translation||""}function Ga(e){const t=as(e);return p()==="ru"?`Какое слово подходит к значению «${t}»?`:`Which word matches "${t}"?`}function X(e){return e?p()==="en"?String(e.answerEn||e.answer_en||e.answer||""):String(e.answer||e.answerRu||""):""}function Ue(e){if(!e)return[];const t=p()==="en"&&Array.isArray(e.optionsEn)&&e.optionsEn.length?e.optionsEn:e.options;return Array.isArray(t)?t.map(String).filter(Boolean):[]}function kd(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function _r(e){return a.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Be(e,t){const n=e==="eva"?TL(t):"";if(n)return n;const s=_r(e).dialogs?.[t]||_r(e).dialogs?.welcome||{},r=s[p()]||s.ru||[""];return at(r)}function TL(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=RL(t),s=[...a.evaAutonomyLines||[],...Xi()].filter(c=>{const l=v(c?.text||{});if(!l)return!1;const d=Array.isArray(c.tags)?c.tags:[];if(!(n.includes(c.category)||d.some(h=>n.includes(h))))return!1;const f=mh(l);return f.length>=12&&f.length<=132}),r=s.filter(c=>!al.includes(c.id)),o=at(r.length?r:s);return o?(o.id&&(al=[o.id,...al.filter(c=>c!==o.id)].slice(0,18)),mh(v(o.text||{}))):""}function RL(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function mh(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t];let s="";for(const r of n){const o=`${s} ${r.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Pr(e){const t=fh(e);return`<span class="pill ${t}">${i(rv[t]||"New")}</span>`}function fh(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function hh(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function _L(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function PL(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function Eo(){try{return ii||(ii=new(window.AudioContext||window.webkitAudioContext)),ii.state==="suspended"&&ii.resume().catch(()=>null),ii}catch(e){return console.warn("Audio context unavailable.",e),null}}function EL(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function yd(e){const t=Eo();if(!t)return!1;try{const n=EL(e),s=t.currentTime+.01;return n.frequencies.forEach((r,o)=>{const c=t.createOscillator(),l=t.createGain();c.type=n.type,c.frequency.value=r;const d=s+n.interval*o;l.gain.setValueAtTime(1e-4,d),l.gain.exponentialRampToValueAtTime(n.peak,d+.02),l.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),c.connect(l).connect(t.destination),c.start(d),c.stop(d+n.duration+.02)}),Or=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=yd;function ML(){const e=()=>{const t=Eo();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function qa(e){if(a.progress.settings.sound){if(za()){D(e==="again"?"answer_wrong":"answer_correct");return}try{const t=Eo();if(!t)return;Or=Date.now();const n=t.createOscillator(),s=t.createGain(),r=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.13,r+.015),s.gain.exponentialRampToValueAtTime(1e-4,r+.18),n.connect(s).connect(t.destination),n.start(r),n.stop(r+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function KL(){if(a.progress.settings.sound)try{const e=Eo();if(!e)return;Or=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.value=n;const c=t+s*.08;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(.12,c+.02),o.gain.exponentialRampToValueAtTime(1e-4,c+.24),r.connect(o).connect(e.destination),r.start(c),r.stop(c+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function DL(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function J(e){const t=Me("#toast");t.textContent=e,t.hidden=!1,clearTimeout(Yd),Yd=window.setTimeout(()=>{t.hidden=!0},2400)}function vh(){return`
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
      </section>`}function FL(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function OL(){try{[ze,us,ai,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function BL(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function zL(e){try{const t=Number(sessionStorage.getItem(Nn)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Nn,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&OL(),await BL();try{localStorage.removeItem(ze),localStorage.removeItem(us),localStorage.removeItem(ai),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(r){console.warn("Boot recovery marker cleanup failed.",r)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function UL(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(us,`${T}:done`)}catch(r){console.warn("Cannot save PWA cache reset marker.",r)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),r=await navigator.serviceWorker.register(s.href);if(!r||typeof r.update!="function")return;JL(r),await r.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function JL(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Mo(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(b)||localStorage.getItem(w);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(b)||localStorage.setItem(b,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function $d(){try{localStorage.setItem(b,JSON.stringify(a.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function GL(e){e.preventDefault(),fs=e,a.progress&&a.i18n&&HL()}async function qL(){if(fe("pwa_install_click",{route:a.route,source:fs?"browser":Er()?"ios":"help"}),Ha()){Sd();return}if(!fs){a.pwaInstallHelpVisible=!0,He();return}const e=fs;fs=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Sd();return}Cd()}catch(t){console.warn("PWA install prompt failed.",t),Cd()}}function Ha(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function jd(){const e=a.pwaInstallPrompt||Mo();if(Ha()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=a.progress?.visits?.firstVisitDate;return!t||os(t,le())<1?!1:!!fs||Er()}function HL(){jd()&&(D("notification_soft"),P())}function Sd(){a.pwaInstallPrompt={...Mo(),...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},a.pwaInstallHelpVisible=!1,$d(),fe("pwa_installed",{route:a.route,source:Er()?"ios":"browser"},{dedupeKey:"appinstalled"}),yh(),a.progress&&a.i18n&&P()}function Cd(){const e=a.pwaInstallPrompt||Mo(),t=Math.min(Number(e.declineCount||0)+1,5);a.pwaInstallPrompt={...e,declineCount:t,nextShowAt:VL(t),neverShow:t>=5,installed:!1},$d(),P()}function VL(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function WL(){!Ha()||a.pwaInstallPrompt.installed||(a.pwaInstallPrompt={...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},$d())}function Er(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function wh(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function Va(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(j);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function is(){try{localStorage.setItem(j,JSON.stringify(a.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function Wa(){clearTimeout(Qo),Qo=0}function XL(){Wa(),a.notificationPromptVisible&&(Qo=window.setTimeout(()=>{a.notificationPromptVisible&&bh()},5e3))}function bh(){Wa(),!(!a.notificationPromptVisible&&a.notificationPrompt?.docked)&&(a.notificationPromptVisible=!1,a.notificationPrompt={...a.notificationPrompt,docked:!0},is(),P())}function kh(){return Ha()||!!a.pwaInstallPrompt?.installed}function Ko(e="usage"){const t=a.notificationPrompt||Va();return!(!("Notification"in window)||t.neverShow||t.enabled||!kh()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-ll<2*60*1e3)}function Do(e="usage"){return Ko(e)?(a.notificationPromptVisible=!0,a.notificationPrompt={...a.notificationPrompt,docked:!1},is(),D("notification_soft"),XL(),P(),!0):("Notification"in window&&Notification.permission==="granted"&&$h(),!1)}function yh(){if(clearTimeout(tu),!kh())return;const e=Math.max(0,2*60*1e3-(Date.now()-ll));tu=window.setTimeout(()=>Do("usage"),e)}async function QL(){if(a.notificationPromptVisible=!1,Wa(),!("Notification"in window)){Fo();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(a.notificationPrompt.permission=e,a.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){$h(),J(Sh().enabled),He();return}Fo()}catch(e){console.warn("Notification permission failed.",e),Fo()}}function $h(){!("Notification"in window)||Notification.permission!=="granted"||(Wa(),a.notificationPrompt={...Va(),...a.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:a.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},is(),xd())}function Fo(){const e=a.notificationPrompt||Va(),t=Math.min(Number(e.declineCount||0)+1,5);a.notificationPromptVisible=!1,Wa(),a.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:YL(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},is(),He()}function YL(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function xd(){!("Notification"in window)||Notification.permission!=="granted"||(a.notificationPrompt.permission="granted",a.notificationPrompt.enabled=!0,is(),il.forEach(e=>clearTimeout(e)),il.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>jh(e.type,ZL(e.hour,e.minute))),sA())}function jh(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await eA(e),jh(e,rA(t,1))},n);il.set(e,s)}function ZL(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function eA(e){if(!tA(e))return!1;const t=nA(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),D(e==="daily_bonus"?"notification_reward":"notification_reminder"),a.notificationPrompt.lastShown[e]=le(),is(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function tA(e){if(!("Notification"in window)||Notification.permission!=="granted"||a.notificationPrompt.lastShown?.[e]===le())return!1;if(e==="review")return vt()>0;if(e==="daily_bonus"){const t=Mi(a.progress.dailyBonusPending);return!!a.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=le()&&!a.progress.dailyBonuses[le()]}return e==="lesson"?wN().length>0:e==="streak"?(a.progress.streak.current||a.progress.visits?.streak||0)>0:!0}function nA(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function sA(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),a.notificationPrompt.periodicSync=!0,is()}catch{a.notificationPrompt.periodicSync=!1,is()}}function Sh(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function ae(e){return{...e,history:[...e.history||[]]}}function rA(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function aA(){const e=new Date;return e.setHours(23,59,59,999),e}function le(){return Nd(new Date)}function Nd(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Ld(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function os(e,t){return Math.round((Ld(t)-Ld(e))/864e5)}function Ch(e,t){const n=Ld(e);return n.setDate(n.getDate()+t),Nd(n)}function iA(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Nd(s)})}function Ht(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const r=Math.ceil(s/24);return p()==="ru"?`через ${r} дн.`:`in ${r} d`}function E(e,t){return t?ce(Math.round(e/t*100),0,100):0}function ce(e,t,n){return Math.max(t,Math.min(n,e))}function Oo(e,t){const n=10**t;return Math.round(e*n)/n}function at(e){return e[Math.floor(Math.random()*e.length)]}function ls(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function Xa(e,t){return String(e)===String(t)?"selected":""}function oA(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Th(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function xh(e="",t=""){const n=String(e||"").trim(),s=ve(n)?n.toLowerCase():n.toUpperCase(),r=String(t||"").trim(),o=s?`#textbooks/${encodeURIComponent(s)}`:"#textbooks/";return r?`${o}/${encodeURIComponent(r)}`:o}function yt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${oA()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function zs(){const e=Gh(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash||e.status==="valid"&&["textbooks","textbook-level","kana-course"].includes(e.kind||"")&&!location.hash?e:Th(location.pathname||"/")?ds(location.hash):e.status==="not-found"?e:we("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function Nh(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function Us(e){const t=e.route,n=e.status==="valid"?e.params:{};a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,a.kanjiPageId=t==="kanji"&&n.cardId||null,a.activeTextbookLevel=t==="textbooks"&&(n.level||n.course)||null,a.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,a.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"&&n.view||mn,a.activeLearnNodeId=t==="learn"&&a.activeLearnView===Wt&&n.targetId||null,a.activeLearnLegacyLessonId=t==="learn"&&a.activeLearnView===fn&&n.targetId||null}function Mr(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!bN(t.cardId))return!a.deferredDataLoaded&&kN(t.cardId)?e:we("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||t.course||"",s=t.subroute||"";if(n&&ve(n))return Da(n)?s&&!ZN(n,s)?we("hash","entity-not-found",e.raw,e.segments,e.locale):e:a.bootAncillaryLoaded?we("hash","entity-not-found",e.raw,e.segments,e.locale):e;if(n&&!Lt(n))return!a.bootAncillaryLoaded&&F(n)?e:we("hash","entity-not-found",e.raw,e.segments,e.locale);if(n&&s&&!QN(n,s))return YN(n,s)?e:we("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!Sn(t.level)?!a.bootAncillaryLoaded&&F(t.level)?e:we("hash","entity-not-found",e.raw,e.segments,e.locale):e.route==="learn"&&(t.view===Wt&&!Ss(t.targetId)||t.view===fn&&!a.lessons.some(n=>n.id===t.targetId))?we("hash","entity-not-found",e.raw,e.segments,e.locale):e}function lA(){return ds(location.hash).raw}function cA(){const e=ds(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function dA(){const e=ds(location.hash);return e.status==="valid"&&e.route==="textbooks"&&(e.params.level||e.params.course)||""}function uA(){const e=ds(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function pA(){const e=ds(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function gA(){return Ks().filter(e=>Kr(e.id)).length}function Kr(e){const t=a.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function m(e){return i(e)}})();
