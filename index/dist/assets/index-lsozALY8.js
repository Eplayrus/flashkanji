(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))S(y);new MutationObserver(y=>{for(const A of y)if(A.type==="childList")for(const I of A.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&S(I)}).observe(document,{childList:!0,subtree:!0});function j(y){const A={};return y.integrity&&(A.integrity=y.integrity),y.referrerPolicy&&(A.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?A.credentials="include":y.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function S(y){if(y.ep)return;y.ep=!0;const A=j(y);fetch(y.href,A)}})();const QA="modulepreload",YA=function(b,v){return new URL(b,v).href},_h={},Ph=function(v,j,S){let y=Promise.resolve();if(j&&j.length>0){const I=document.getElementsByTagName("link"),R=document.querySelector("meta[property=csp-nonce]"),q=R?.nonce||R?.getAttribute("nonce");y=Promise.allSettled(j.map(ae=>{if(ae=YA(ae,S),ae in _h)return;_h[ae]=!0;const Re=ae.endsWith(".css"),_t=Re?'[rel="stylesheet"]':"";if(!!S)for(let St=I.length-1;St>=0;St--){const Xs=I[St];if(Xs.href===ae&&(!Re||Xs.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${ae}"]${_t}`))return;const lt=document.createElement("link");if(lt.rel=Re?"stylesheet":QA,Re||(lt.as="script"),lt.crossOrigin="",lt.href=ae,q&&lt.setAttribute("nonce",q),document.head.appendChild(lt),Re)return new Promise((St,Xs)=>{lt.addEventListener("load",St),lt.addEventListener("error",()=>Xs(new Error(`Unable to preload CSS for ${ae}`)))})}))}function A(I){const R=new Event("vite:preloadError",{cancelable:!0});if(R.payload=I,window.dispatchEvent(R),!R.defaultPrevented)throw I}return y.then(I=>{for(const R of I||[])R.status==="rejected"&&A(R.reason);return v().catch(A)})},ZA="ru",e1={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},Bd={defaultLocale:ZA,locales:e1},t1=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Dd="not-found",Dr=Bd.defaultLocale,n1=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),Gh=/^n[1-5]$/i,s1=/^(?:hiragana|katakana)$/i,r1=/^[A-Za-z0-9_-]+$/,a1=/^[\p{Letter}\p{Number}_-]+$/u,i1=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,o1=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,l1=new Map(Object.entries(Bd.locales).map(([b,v])=>[String(v.urlSegment).toLowerCase(),b]));function Ae(b,v,j,S,y={},A=Dr,I={}){return{status:"valid",source:b,route:v,locale:A,params:y,raw:j,segments:S,...I}}function ve(b,v,j,S=[],y=Dr,A){return{status:"not-found",source:b,route:Dd,locale:y,params:{},raw:j,segments:S,reason:v,canonicalPath:A}}function qh(b){return!!(b&&t1.includes(b))}function Id(b){const v=String(b||"").trim().toUpperCase();return Gh.test(v)?v:""}function Hh(b){const v=String(b||"").trim().toLowerCase();return s1.test(v)?v:""}function Vh(b){try{return{ok:!0,value:decodeURIComponent(b)}}catch{return{ok:!1}}}function zd(b){return b.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function qe(b,v,j=zd(v)){return ve("hash",b,v,j)}function Td(b){return r1.test(b)}function c1(b){return a1.test(b)}function ms(b){const v=String(b||"").replace(/^#/,"").trim(),j=Vh(v);if(!j.ok)return qe("invalid-parameter",v,[]);const S=j.value.replace(/^\/+|\/+$/g,""),y=zd(S),A=(y[0]||"home").toLowerCase();if(!y.length)return Ae("hash","home",S,y);if(A==="jlpt"){if(y.length<2||y.length>3)return qe("unknown-route",S,y);const I=Id(y[1]);if(!I)return qe("invalid-parameter",S,y);const R=y[2]||"";return R&&!Td(R)?qe("invalid-parameter",S,y):Ae("hash","textbooks",S,y,{level:I,subroute:R,legacyRoute:"jlpt"})}if(A==="textbooks"){if(y.length>3)return qe("unknown-route",S,y);if(y.length===1)return Ae("hash","textbooks",S,y);const I=Id(y[1]),R=Hh(y[1]);if(!I&&!R)return qe("invalid-parameter",S,y);const q=y[2]||"";return q&&!Td(q)?qe("invalid-parameter",S,y):Ae("hash","textbooks",S,y,R?{course:R,subroute:q}:{level:I,subroute:q})}if(A==="jlpt-lesson"){if(y.length!==2)return qe("unknown-route",S,y);const I=Id(y[1]);return I?Ae("hash","jlpt-lesson",S,y,{level:I}):qe("invalid-parameter",S,y)}if(A==="kanji"){if(y.length!==2)return qe("unknown-route",S,y);const I=y[1];return c1(I)?Ae("hash","kanji",S,y,{cardId:I}):qe("invalid-parameter",S,y)}if(A==="learn"){if(y.length===1)return Ae("hash","learn",S,y,{view:"map"});if(y.length!==3)return qe("unknown-route",S,y);const I=y[1].toLowerCase(),R=y[2];return!["lesson","legacy"].includes(I)||!Td(R)?qe("invalid-parameter",S,y):Ae("hash","learn",S,y,{view:I,targetId:R})}return n1.has(A)?y.length!==1?qe("unknown-route",S,y):Ae("hash",A,S,y):(qh(A),qe("unknown-route",S,y))}function d1(b){return String(b||"/").split(/[?#]/,1)[0]||"/"}function u1(b){const v=d1(b),j=Vh(v);if(!j.ok)return{ok:!1,raw:v};const S=j.value.replace(/\/{2,}/g,"/"),y=S.startsWith("/")?S:`/${S}`,A=y===""?"/":y;return{ok:!0,path:A,segments:zd(A)}}function p1(b){return l1.get(b.toLowerCase())||null}function Ws(b,v="/"){return`/${Bd.locales[b].urlSegment}${v.startsWith("/")?v:`/${v}`}`}function Wh(b){const v=u1(b);if(!v.ok)return ve("pathname","invalid-parameter",v.raw,[],null);const{path:j,segments:S}=v,y=j;if(j==="/"||/^\/index\.html$/i.test(j))return Ae("pathname","home",y,S,{},Dr,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(j))return Ae("pathname","home",y,S,{},Dr,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(j))return Ae("pathname","download",y,S,{},Dr,{kind:"download",canonicalPath:"/download/"});if(!S.length)return Ae("pathname","home",y,S,{},Dr,{kind:"app-shell",canonicalPath:"/"});const A=p1(S[0]);if(!A){const R=o1.test(S[0])?"unknown-locale":"unknown-route";return ve("pathname",R,y,S,null)}if(S.length===1)return Ae("pathname","home",y,S,{},A,{kind:"localized-home",canonicalPath:Ws(A,"/")});const I=S[1].toLowerCase();if(I==="download"&&S.length===2)return Ae("pathname","download",y,S,{},A,{kind:"download",canonicalPath:Ws(A,"/download/")});if(I==="textbooks"){if(S.length===2)return Ae("pathname","textbooks",y,S,{},A,{kind:"textbooks",canonicalPath:Ws(A,"/textbooks/")});if(S.length===3){const R=S[2].toLowerCase(),q=Hh(R);return q?Ae("pathname","textbooks",y,S,{course:q},A,{kind:"kana-course",canonicalPath:Ws(A,`/textbooks/${q}/`)}):Gh.test(R)?Ae("pathname","textbooks",y,S,{level:R.toUpperCase()},A,{kind:"textbook-level",canonicalPath:Ws(A,`/textbooks/${R}/`)}):ve("pathname","invalid-parameter",y,S,A)}return ve("pathname","unknown-route",y,S,A)}if(I==="kanji"){if(S.length===2)return Ae("pathname","dictionary",y,S,{},A,{kind:"kanji-hub",canonicalPath:Ws(A,"/kanji/")});if(S.length===3){const R=S[2].toLowerCase();return i1.test(R)?Ae("pathname","kanji",y,S,{slug:R},A,{kind:"kanji-page",canonicalPath:Ws(A,`/kanji/${R}/`)}):ve("pathname","invalid-parameter",y,S,A)}return ve("pathname","unknown-route",y,S,A)}return ve("pathname","unknown-route",y,S,A)}function Eh(b){const v=Wh(b);return v.status==="valid"&&(v.kind==="app-shell"||v.kind==="legacy-index")}function g1(b){const v=()=>b(ms(window.location.hash));return window.addEventListener("hashchange",v),()=>window.removeEventListener("hashchange",v)}function m1(){let b=0,v=null;return{begin(j){v?.abort(),v=new AbortController;const S=++b,y=v;return{route:j,token:S,signal:y.signal,isCurrent:()=>b===S&&!y.signal.aborted}},abort(){v?.abort()}}}const ei=[5,60,12*60,24*60,2*24*60,4*24*60],Rd={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function Ue(b){const v=b&&typeof b=="object"?b:{},j=h1(v.state??v.stage),S=v1(v.dueAt??v.nextReview),y=gs(v.reviewCount??v.reviews,0),A=gs(v.correct,0),I=gs(v.wrong,0),R={...v,state:j,dueAt:S,reviewCount:y,intervalDays:gs(v.intervalDays,0),easeFactor:gs(v.easeFactor,2.5),srsStep:gs(v.srsStep,j==="New"?-1:0),lapses:gs(v.lapses,0),correct:A,wrong:I,successRate:gs(v.successRate,A+I?Math.round(A/(A+I)*100):0),history:Array.isArray(v.history)?v.history.slice(-120):[]};return delete R.nextReview,delete R.reviews,delete R.stage,delete R.lastReview,R}function ye(b,v,j=v,S=new Date){const y=Ue(b),A=f1(y,v),I={...y,history:[...y.history]};let R=y.srsStep,q=y.easeFactor;A==="again"?(R=0,q=Math.max(1.3,q-.2),I.state="Learning",I.wrong+=1,y.state!=="New"&&(I.lapses+=1)):A==="hard"?(R=Math.max(1,R),q=Math.max(1.3,q-.15),I.correct+=1):A==="easy"?(R=R<0?2:R+2,q=Math.min(3.2,q+.15),I.correct+=1):(R=R<0?0:R+1,I.correct+=1);const ae=w1(R)/1440;return A!=="again"&&(I.state=ae<1?"Learning":"Review"),I.correct>=8&&ae>=30&&(I.state="Mastered"),I.srsStep=R,I.easeFactor=Mh(q,2),I.intervalDays=Mh(ae,6),I.dueAt=new Date(S.getTime()+ae*864e5).toISOString(),I.reviewCount+=1,I.successRate=Math.round(I.correct/Math.max(I.correct+I.wrong,1)*100),I.lastReviewedAt=S.toISOString(),I.lastRating=Rd[j]||Rd[A],I.lastDecision=Rd[A],I.history=[...I.history,{at:S.toISOString(),rating:I.lastRating,decision:I.lastDecision,from:y.state,to:I.state,intervalDays:ae,srsStep:R}].slice(-120),I}function _d(b,v=Date.now()){const j=new Map;for(const A of b){if(!A.cardId||A.state==="New")continue;const I=A.dueAt?Date.parse(A.dueAt):Number.NaN;Number.isFinite(I)&&I<=v&&!j.has(A.cardId)&&j.set(A.cardId,{...A})}const S=Object.freeze([...j.values()].sort((A,I)=>Date.parse(A.dueAt||"")-Date.parse(I.dueAt||""))),y=new Set;return{initial:S,complete(A){y.add(A)},get remaining(){return S.filter(A=>!y.has(A.cardId))},get remainingCount(){return S.length-y.size}}}function f1(b,v){return v==="again"||v==="forgot"?"again":v!=="remember"?v:b.state==="New"?"good":b.state==="Learning"?b.successRate>=70||b.correct>=2?"good":"hard":b.successRate>=88&&b.correct>=5&&b.lapses<=1?"easy":b.successRate<70||b.lapses>Math.max(1,Math.floor(b.correct/3))?"hard":"good"}function h1(b){const v=String(b||"new").toLowerCase();return v.includes("master")?"Mastered":v.includes("learn")?"Learning":v.includes("review")?"Review":"New"}function v1(b){return typeof b!="string"||!Number.isFinite(Date.parse(b))?null:new Date(b).toISOString()}function gs(b,v){const j=Number(b);return Number.isFinite(j)&&j>=0?j:v}function Mh(b,v){const j=10**v;return Math.round(b*j)/j}function w1(b){return b<ei.length?ei[Math.max(0,b)]:ei[ei.length-1]*2**(b-(ei.length-1))}const Xh="flashKanji.progress.v2",b1="flashKanji.progress.v1";function k1(b=localStorage){const v=b.getItem(Xh)||b.getItem(b1);if(!v)return null;try{const j=JSON.parse(v);if(!j||typeof j!="object")return null;const S=j;return S.progress&&typeof S.progress=="object"?S.progress:S}catch(j){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",j),null}}function y1(b){return!b||typeof b!="object"?{}:Object.fromEntries(Object.entries(b).map(([v,j])=>[v,Ue(j)]))}function $1(b,v=localStorage){try{return v.setItem(Xh,JSON.stringify(b)),!0}catch(j){return console.warn("Flash Kanji could not save LocalStorage progress.",j),!1}}const j1=/[\/／,、;；\s]+/u,S1=/[\u30a1-\u30f6]/g,C1=/[()[\]{}.\-‐-―]/gu;function N1(b){return String(b||"").normalize("NFKC").replace(S1,v=>String.fromCharCode(v.charCodeAt(0)-96))}function Qh(b){return(Array.isArray(b)?b.join(" / "):String(b||"")).split(j1).map(j=>N1(j).replace(C1,"").trim()).filter(Boolean)}function x1(b){if(!b)return[];const v=[...Fh("onyomi","On",b.onyomi),...Fh("kunyomi","Kun",b.kunyomi)],j=new Set,S=v.filter(I=>{const R=I.kana;return!R||j.has(R)?!1:(j.add(R),!0)});if(S.length)return S;const y=Qh(b.hiragana)[0];if(y)return[{kind:"hiragana",kana:y,label:"Kana"}];const A=String(b.kanji||"").trim();return A?[{kind:"kanji",kana:A,label:"Kanji"}]:[]}function L1(b,v=-1,j=""){const S=j&&j!=="cycle"?b.filter(A=>A.kind===j):b;if(!S.length)return{item:null,cursor:-1};const y=(Number(v)+1)%S.length;return{item:S[y],cursor:y}}function Kh(b,v={}){const j=String(b||"").trim(),S=typeof window<"u"?window:void 0,y=v.synth||S?.speechSynthesis,A=v.Utterance||S?.SpeechSynthesisUtterance;if(!j||!y||!A)return!1;y.cancel();const I=new A(j);I.lang="ja-JP",I.rate=v.rate??.92,I.voice=A1(y),I.onstart=()=>v.onStart?.(),I.onend=()=>v.onEnd?.(),I.onerror=R=>v.onError?.(R);try{return y.speak(I),!0}catch(R){return v.onError?.(R),!1}}function Fh(b,v,j){return Qh(j).map(S=>({kind:b,kana:S,label:v}))}function A1(b){const v=typeof b.getVoices=="function"?b.getVoices():[];return v.find(j=>/^ja[-_]?JP$/iu.test(j.lang))||v.find(j=>/^ja/iu.test(j.lang))||null}const Yh=["hiragana","katakana"];function we(b){return Yh.includes(String(b||"").toLowerCase())}function Od(b){return String(b??"").normalize("NFKC").trim().replace(/\s+/gu," ").toLowerCase()}function I1(b,v){const j=Od(b);return j?(Array.isArray(v)?v:[]).some(y=>Od(y)===j):!1}function T1(){return{schema_version:1,content_version:"2026-08-kana-v1",settings:{showRomaji:!0},courses:{}}}function Pd(b){const v=T1();if(!b||typeof b!="object")return v;const j=b,S=j.settings&&typeof j.settings=="object"?j.settings:{},y=j.courses&&typeof j.courses=="object"?j.courses:{},A={};for(const I of Yh){const R=y[I]&&typeof y[I]=="object"?y[I]:{},q=R.review&&typeof R.review=="object"?R.review:{};A[I]={currentRoute:typeof R.currentRoute=="string"?R.currentRoute:"",lessons:ri(R.lessons,E1),practices:ri(R.practices,M1),finalTest:P1(R.finalTest),review:Object.fromEntries(Object.entries(q).map(([ae,Re])=>[ae,Ue(Re)])),writing:R.writing&&typeof R.writing=="object"?{...R.writing}:{},updatedAt:typeof R.updatedAt=="string"?R.updatedAt:null}}return{...v,...j,schema_version:1,content_version:"2026-08-kana-v1",settings:{...v.settings,showRomaji:typeof S.showRomaji=="boolean"?S.showRomaji:v.settings.showRomaji},courses:A}}function R1(b,v){var j;return(j=b.courses)[v]||(j[v]={currentRoute:"",lessons:{},practices:{},finalTest:Zh(),review:{},writing:{},updatedAt:null}),b.courses[v]}function Zh(){return{sections:{},completed:!1,passed:!1,latestScore:0,bestScore:0,score:0,total:0,updatedAt:null}}function _1(b,v,j=new Date){const S={},y={};let A=0;const I=b.items.length;for(const R of b.items){const q=String(v[R.number]??"");S[R.number]=q;const ae=I1(q,R.accepted_answers);y[R.number]=ae,ae&&(A+=1)}return{answers:S,correct:y,score:A,total:I,completed:I>0,passed:I>0&&A/I>=.8,updatedAt:j.toISOString()}}function Ed(b,v){const j=b.map(R=>v[R.id]).filter(Boolean),S=b.reduce((R,q)=>R+q.items.length,0),y=j.reduce((R,q)=>R+Number(q.score||0),0),A=j.reduce((R,q)=>R+Number(q.total||0),0),I=j.reduce((R,q)=>R+Math.max(Number(q.score||0),0),0);return{latestScore:y,bestScore:I,completed:S>0&&A>=S,passed:S>0&&y/S>=.8}}function Md(b,v,j=new Date){return ye(b,v,v,j)}function P1(b){const v=b&&typeof b=="object"?b:{},j=Uo(v),S=ri(v.sections,Uo);return{...Zh(),sections:S,completed:!!(v.completed||j.completed),passed:!!(v.passed||j.passed),latestScore:Number(v.latestScore||j.score||0),bestScore:Number(v.bestScore||j.score||0),score:Number(v.score||v.latestScore||j.score||0),total:Number(v.total||j.total||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:j.updatedAt}}function Uo(b){const v=b&&typeof b=="object"?b:{};return{answers:v.answers&&typeof v.answers=="object"?{...v.answers}:{},correct:v.correct&&typeof v.correct=="object"?{...v.correct}:{},score:Number(v.score||0),total:Number(v.total||0),completed:!!v.completed,passed:!!v.passed,updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function E1(b){const v=b&&typeof b=="object"?b:{};return{exercises:ri(v.exercises,Uo),completed:!!v.completed,passed:!!v.passed,latestScore:Number(v.latestScore||0),bestScore:Number(v.bestScore||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function M1(b){const v=b&&typeof b=="object"?b:{};return{exercises:ri(v.exercises,Uo),completed:!!v.completed,passed:!!v.passed,latestScore:Number(v.latestScore||0),bestScore:Number(v.bestScore||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function ri(b,v){return!b||typeof b!="object"?{}:Object.fromEntries(Object.entries(b).map(([j,S])=>[j,v(S)]))}const ev=109492033,K1=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],F1={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},D1={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},O1=/^[\p{Letter}\p{Number}_-]{1,96}$/u,B1=/^[a-z][a-z0-9_]{1,64}$/,z1=/^[a-z][a-z0-9_-]{0,48}$/i,U1=/^N[1-5]$/i,Dh=new Set;let si="";function tv(b,v={}){if(!b||b.status==="not-found")return"/app/not-found";const j=b.params||{},S=String(b.route||v.route||"home");if(S==="learn"){const y=Yt(j.view||v.activeLearnView||"map").toLowerCase(),A=Yt(j.targetId||v.activeLearnNodeId||v.activeLearnLegacyLessonId);return y==="lesson"&&A?`/app/learn/lesson/${A}`:y==="legacy"&&A?`/app/learn/legacy/${A}`:"/app/learn"}if(S==="textbooks"){const y=ai(j.level||v.activeTextbookLevel),A=Yt(j.subroute||v.activeTextbookSubroute);return y?A?`/app/textbooks/${y}/${A}`:`/app/textbooks/${y}`:"/app/textbooks"}if(S==="kanji"){const y=Yt(j.cardId||v.kanjiPageId||j.slug);return y?`/app/kanji/${y}`:"/app/kanji"}if(S==="jlpt-lesson"){const y=ai(j.level||v.activeJlptLesson);return y?`/app/jlpt-lesson/${y}`:"/app/jlpt-lesson"}return F1[S]||"/app/not-found"}function nv(b,v={}){const j=V1(v),S=D1[j];if(!b||b.status==="not-found")return S["not-found"];const y=b.params||{},A=String(b.route||v.route||"home");if(A==="learn"){const I=Yt(y.view||v.activeLearnView||"map").toLowerCase(),R=Yt(y.targetId||v.activeLearnNodeId||v.activeLearnLegacyLessonId);return I==="lesson"&&R?j==="ru"?`Flash Kanji — Урок маршрута ${R}`:`Flash Kanji — Path lesson ${R}`:I==="legacy"&&R?j==="ru"?`Flash Kanji — Урок ${R}`:`Flash Kanji — Lesson ${R}`:S.learn}if(A==="textbooks"){const I=ai(y.level||v.activeTextbookLevel).toUpperCase(),R=Yt(y.subroute||v.activeTextbookSubroute);return I?R?["final","final-test"].includes(R)?j==="ru"?`Flash Kanji — JLPT ${I} · Финальный тест`:`Flash Kanji — JLPT ${I} · Final test`:j==="ru"?`Flash Kanji — JLPT ${I} · Урок ${Oh(R)}`:`Flash Kanji — JLPT ${I} · Lesson ${Oh(R)}`:j==="ru"?`Flash Kanji — Учебник JLPT ${I}`:`Flash Kanji — JLPT ${I} textbook`:j==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(A==="kanji"){const I=Yt(y.cardId||v.kanjiPageId||y.slug),R=X1(v,I)||I;return j==="ru"?`Flash Kanji — Кандзи ${R}`:`Flash Kanji — Kanji ${R}`}if(A==="jlpt-lesson"){const I=ai(y.level||v.activeJlptLesson).toUpperCase();return I?j==="ru"?`Flash Kanji — JLPT ${I}`:`Flash Kanji — JLPT ${I}`:S.learn}return S[A]||S["not-found"]}function J1(b,v={}){const j=tv(b,v),S=nv(b,v);return si=j,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=j),vn("prime",{virtualPath:j,title:S}),{sent:!1,virtualPath:j,title:S,reason:"duplicate"}}function G1(b,v={}){const j=tv(b,v),S=nv(b,v);if(j===si)return vn("skip-pageview-duplicate",{virtualPath:j,title:S,previousVirtualPath:si}),{sent:!1,virtualPath:j,title:S,reason:"duplicate"};const y=si||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:j,title:S,referer:y,reason:"no-window"}:typeof window.ym!="function"?(vn("skip-pageview-missing-ym",{virtualPath:j,title:S,previousVirtualPath:y}),{sent:!1,virtualPath:j,title:S,referer:y,reason:"missing-ym"}):(window.ym(ev,"hit",j,{title:S,...y?{referer:y}:{}}),si=j,vn("pageview",{virtualPath:j,title:S,previousVirtualPath:y}),{sent:!0,virtualPath:j,title:S,referer:y})}catch(A){return vn("pageview-error",{virtualPath:j,title:S,previousVirtualPath:y,error:A instanceof Error?A.message:String(A)}),{sent:!1,virtualPath:j,title:S,referer:y,reason:"error"}}}function q1(b,v={},j={}){const S=H1(b);if(!S)return vn("skip-goal-invalid",{goal:b}),!1;const y=j.dedupeKey?`${S}:${j.dedupeKey}`:"";if(y&&Dh.has(y))return vn("skip-goal-duplicate",{goal:S,params:Do(v),dedupeKey:y}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return vn("skip-goal-missing-ym",{goal:S,params:Do(v)}),!1;const A=Do(v);return window.ym(ev,"reachGoal",S,A),y&&Dh.add(y),vn("goal",{goal:S,params:A}),!0}catch(A){return vn("goal-error",{goal:S,params:Do(v),error:A instanceof Error?A.message:String(A)}),!1}}function H1(b){const v=String(b||"").trim().toLowerCase();return B1.test(v)&&(K1.includes(v)||/^social_[a-z0-9_]+_opened$/.test(v))?v:""}function Do(b){const v={},j=Yt(b.route).toLowerCase(),S=ai(b.level).toUpperCase(),y=Yt(b.lessonId),A=Yt(b.cardId),I=W1(b.source);return j&&(v.route=j),S&&(v.level=S),y&&(v.lessonId=y),A&&(v.cardId=A),I&&(v.source=I),v}function V1(b){return String(b.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function ai(b){const v=String(b||"").trim().toUpperCase();return U1.test(v)?v.toLowerCase():""}function Yt(b){const v=String(b||"").trim();return O1.test(v)?encodeURIComponent(v):""}function W1(b){const v=String(b||"").trim();return z1.test(v)?v.toLowerCase():""}function Oh(b){const v=b.match(/-(\d+)$/);return v?.[1]?String(Number(v[1])):b}function X1(b,v){if(!v||!Array.isArray(b.cards))return"";const j=Q1(v),S=b.cards.find(y=>String(y.id||"")===j||String(y.slug||"")===j);return String(S?.kanji||"").trim()}function Q1(b){try{return decodeURIComponent(b)}catch{return b}}function vn(b,v){Y1()&&console.debug(`[Flash Kanji Metrika] ${b}`,v)}function Y1(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const v=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(v).get("debugMetrika")==="1"}catch{return!1}}const Jo="flashKanji.hasVisited",Go="flashKanji.changelog.lastSeenVersion",sv=new Set;function Z1(b){if(!b||typeof b!="object")return null;const v=b,j=String(v.currentVersion||"").trim();if(!j)return null;const S=Array.isArray(v.entries)?v.entries.map(nI).filter(y=>!!y):[];return S.length?{currentVersion:j,entries:S}:null}function eI(b,v,j,S={}){const y=b?.currentVersion||"",A=b?.entries.find(q=>q.version===y)||b?.entries[0]||null;return!b||!y||!A||sv.has(y)?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:Bh(j,Go)===y?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(S.hadPriorVisit||Bh(j,Jo)==="true"||S.useProgressSignals!==!1&&tI(v))?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:y,shouldShow:!0,shouldMarkHandled:!1,entry:A}}function Kd(b,v){const j=String(b||"").trim();j&&(sv.add(j),zh(v,Jo,"true"),zh(v,Go,j))}function tI(b){if(!b||typeof b!="object")return!1;const v=b;return!!(ni(v.appOpens)>0||ti(v.lessonCompletions)>0||ti(v.cards)>0||ti(v.seenKanji)>0||ti(v.daily)>0||ti(v.favorites)>0||aI(v.transactions)>0||ni(v.totalMoonFragmentsEarned)>0||ni(v.secrets?.evaClicks)>0||v.secrets?.nightVisit||ni(v.visits?.streak)>0||ni(v.visits?.bestStreak)>0)}function nI(b){if(!b||typeof b!="object")return null;const v=b,j=String(v.version||"").trim();return j?{version:j,date:String(v.date||"").trim(),title:sI(v.title),items:rI(v.items)}:null}function sI(b){const v=b&&typeof b=="object"?b:{};return{ru:String(v.ru||v.en||"").trim(),en:String(v.en||v.ru||"").trim()}}function rI(b){const v=b&&typeof b=="object"?b:{},j=Array.isArray(v.ru)?v.ru.map(y=>String(y||"").trim()).filter(Boolean):[],S=Array.isArray(v.en)?v.en.map(y=>String(y||"").trim()).filter(Boolean):[];return{ru:j.length?j:S,en:S.length?S:j}}function Bh(b,v){try{return b?.getItem(v)||""}catch{return""}}function zh(b,v,j){try{b?.setItem(v,j)}catch{}}function ti(b){return b&&typeof b=="object"&&!Array.isArray(b)?Object.keys(b).length:0}function aI(b){return Array.isArray(b)?b.length:0}function ni(b){const v=Number(b||0);return Number.isFinite(v)?v:0}const iI="bg_study_hub",Oo="outfit_fis_mentor";function ii(b,v=0){const j=Number(b),S=Number(v),y=Number.isFinite(j)?j:Number.isFinite(S)?S:0;return Math.max(0,Math.floor(y))}function He(b){const v=[],j=S=>{const y=String(S??"").trim();y&&v.push(y)};return Array.isArray(b)||b instanceof Set?b.forEach(j):typeof b=="string"?b.split(",").forEach(j):b&&typeof b=="object"&&Object.entries(b).forEach(([S,y])=>{y!==!1&&y!==null&&y!==void 0&&j(S)}),[...new Set(v)]}function ot(b){return String(b??"").trim()}function oI(b){return(Array.isArray(b)?b:[]).filter(v=>String(v?.type||"")==="background"&&ot(v?.id))}function lI(b){return(Array.isArray(b)?b:[]).filter(v=>String(v?.type||"")==="outfit"&&ot(v?.id))}function qo(b){return!!b?.defaultOwned||ii(b?.price)===0}function Uh(b){const v=ot(b.fallbackId)||iI,j=oI(b.catalogItems),S=new Map(j.map(I=>[ot(I.id),I])),y=new Set(He(b.owned));j.forEach(I=>{const R=ot(I.id);qo(I)&&y.add(R)});const A=I=>{const R=ot(I);if(!R)return null;const q=S.get(R);return q&&(y.has(R)||qo(q))?R:null};return A(b.customizationSelected)||A(b.progressEquipped)||A(b.progressSelected)||A(v)||v}function Jh(b){const v=ot(b.fallbackId)||Oo,j=lI(b.catalogItems),S=new Map(j.map(R=>[ot(R.id),R])),y=new Set(He(b.owned));j.forEach(R=>{const q=ot(R.id),ae=ot(R.spriteId);qo(R)&&y.add(q),ae&&y.has(ae)&&y.add(q)});const A=R=>{const q=ot(R);if(!q)return null;const ae=S.get(q);if(ae)return ae;const Re=q.startsWith("eva_sprite:")?q:`eva_sprite:${q}`;return j.find(_t=>{const Zt=ot(_t.spriteId),lt=ot(_t.legacySpriteId),St=He(_t.legacyIds);return Zt===q||lt===q||St.includes(q)||St.includes(Re)})||null},I=R=>{const q=A(R);if(!q)return null;const ae=ot(q.id);return y.has(ae)||qo(q)?ae:null};return I(b.customizationSelected)||I(b.progressEquipped)||I(b.progressSelected)||I(v)||v}function Fd(b){const v=["background","outfit","theme","decoration","frame","effect"],j=b&&typeof b=="object"?b:{};return Object.fromEntries(v.map(S=>{const y=j[S],A=y==null?null:String(y).trim();return[S,A||null]}))}function cI(b){const v=String(b.itemId??"").trim(),j=ii(b.price),S=ii(b.balance),y=He(b.owned);return v?y.includes(v)?{status:"already-owned",balance:S,owned:y,itemId:v,price:j}:S<j?{status:"insufficient-funds",balance:S,owned:y,itemId:v,price:j}:{status:"purchased",balance:S-j,owned:[...y,v],itemId:v,price:j}:{status:"invalid-item",balance:S,owned:y,itemId:v,price:j}}function Bo(b){return String(b?.value??"").trim()}function dI(b,v=Math.random){const j=[...b];for(let S=j.length-1;S>0;S-=1){const y=Number(v()),A=Number.isFinite(y)?Math.min(Math.max(y,0),.999999999):0,I=Math.floor(A*(S+1));[j[S],j[I]]=[j[I],j[S]]}return j}function uI(b,v){if(!Array.isArray(v)||v.length!==b.length)return null;const j=new Map(b.map(A=>[Bo(A),A])),S=[],y=new Set;for(const A of v){const I=String(A??"").trim(),R=j.get(I);if(!R||y.has(I))return null;y.add(I),S.push(R)}return S.length===b.length?S:null}function pI(b,v,j=Math.random){const S=b.filter(I=>Bo(I)),y=uI(S,v);if(y)return{options:y,order:y.map(Bo)};const A=dI(S,j);return{options:A,order:A.map(Bo)}}function gI(b){const v=String(b||"").toLowerCase();return v==="test"||v==="done"?v:"study"}function mI(b){const v=new Set,j=[];for(const S of Array.isArray(b)?b:[]){const y=String(S?.id??"").trim();!y||v.has(y)||(v.add(y),j.push(y))}return j}function zo(b){const v=mI(b.cards),j=b.session?.answers&&typeof b.session.answers=="object"?b.session.answers:{},S=v.filter(q=>!!j[q]),y=v.length,A=S.length;if(!y)return{status:"incomplete",phase:"study",total:0,expectedCardIds:v,answeredExpectedCardIds:S,answeredCount:0,currentIndex:0,currentCardId:null};if(b.confirmedCompleted&&b.session?.completedAt)return{status:"done",phase:"done",total:y,expectedCardIds:v,answeredExpectedCardIds:v,answeredCount:y,currentIndex:y,currentCardId:null};const I=v.findIndex(q=>!j[q]);if(I<0&&A===y)return{status:"test-ready",phase:"test",total:y,expectedCardIds:v,answeredExpectedCardIds:S,answeredCount:A,currentIndex:y,currentCardId:null};const R=I>=0?I:Math.min(Math.max(Number(b.session?.currentIndex??0)||0,0),y-1);return{status:"study",phase:(gI(b.session?.phase)==="done","study"),total:y,expectedCardIds:v,answeredExpectedCardIds:S,answeredCount:A,currentIndex:R,currentCardId:v[R]||null}}function fI(b){const v=new Set,j=[];for(const S of Array.isArray(b)?b:[]){const y=String(S?.id??"").trim();!y||v.has(y)||(v.add(y),j.push(y))}return j}function hI(b,v,j){const S=v[b];return S&&typeof S=="object"&&S.correct?!0:!!j[b]}function vI(b){const v=zo({cards:b.cards,session:b.session,confirmedCompleted:b.confirmedCompleted}),j=Array.isArray(b.cards)?b.cards:[],S=v.status==="done"||v.status==="test-ready",y=v.total>0&&j.length>=v.total&&j.every(Zt=>!!b.isCardStudied?.(Zt)),A=S||y,I=fI(b.exercises),R=b.exerciseResults&&typeof b.exerciseResults=="object"?b.exerciseResults:{},q=b.completedExercises&&typeof b.completedExercises=="object"?b.completedExercises:{},ae=I.filter(Zt=>hI(Zt,R,q)).length,Re=I.length>0&&ae===I.length,_t=!!b.confirmedCompleted||A&&Re;return{study:v,cardStudyComplete:A,exerciseComplete:Re,correctExerciseCount:ae,totalExercises:I.length,complete:_t,canMigrateCompletion:!b.confirmedCompleted&&A&&Re}}(()=>{const b="flashKanji.pwaInstallPrompt.v2",v="flashKanji.pwaInstallPrompt.v1",j="flashKanji.notificationPrompt.v1",S="flashkanji_customization",y="flashkanji_eva_state_v2",I="local-1788089741624",q=`flashKanji.hiddenMascotSpeeches:${I}`,ae="moonfarm",Re="flashKanji.appBuild.v1",_t="flashKanji.pwaCacheReset.v1",Zt="flashKanji.bootRecovery.v1",lt={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},St="aleksey.lebedev606@gmail.com",Xs="Flash Kanji bug report",rv="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",av="downloads/flash-kanji-android.apk",iv="assets/download/android-app-screenshot.png",oi="flashKanji.forcePwaCacheReset.v1",O={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",kanaCatalog:"data/kana/index.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},ov={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},lv={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},_e=["N5","N4","N3","N2","N1"],$e=new Set,cv={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},Ud={xp:12,coins:2},Jd="flashKanjiOnboardingCompleted.v3",Gd="flashKanjiOnboardingCompleted",qd="flashKanjiOnboardingAudience.v1",dv=850,Hd=450,uv=420,Or=72,pv=96,Vd=1,Wd="N5",wn="map",en="lesson",bn="legacy",Pe="intro-kanji",Qs="review-due",Ys="n5-checkpoint",gv=[Pe,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",Ys],mv={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},fv=new Set(["lesson-1","lesson-2","bulk-n5-01"]),Xd=7e3,Ho=8e3,hv=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),le=qs(),a={route:le.route,routeMatch:le,routeNotFound:le.status==="not-found"?le:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptCourseDataStatus:{N5:"idle",N4:"idle",N3:"idle",N2:"idle",N1:"idle"},jlptCourseDataErrors:{N5:null,N4:null,N3:null,N2:null,N1:null},jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},kanaCatalog:{schema_version:1,content_version:"",courses:[]},kanaCourses:{},kanaCourseLoading:{},kanaCourseErrors:{},kanaExerciseDrafts:{},kanaLessonCharacterIndex:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:le.status==="valid"&&le.params.level||null,activeTextbookLevel:le.status==="valid"&&le.route==="textbooks"&&(le.params.level||le.params.course)||null,activeTextbookSubroute:le.status==="valid"&&le.route==="textbooks"&&le.params.subroute||null,activeLearnView:le.status==="valid"&&le.route==="learn"&&le.params.view||wn,activeLearnNodeId:le.status==="valid"&&le.route==="learn"&&le.params.view===en&&le.params.targetId||null,activeLearnLegacyLessonId:le.status==="valid"&&le.route==="learn"&&le.params.view===bn&&le.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,answerOptionOrders:{},reviewQueueLastKind:"",reviewSession:null,kanjiPageId:le.status==="valid"&&le.route==="kanji"&&le.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:Or,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Po(),notificationPrompt:Qa(),notificationPromptVisible:!1,changelog:null,changelogModal:null,bootAncillaryLoaded:!1,deferredDataLoaded:!1,deferredDataLoading:!1};a.route==="textbooks"&&!a.routeNotFound&&jt(Ih(fA(),hA()));const vv=m1();let li=null,tn=null,ci=0,Pt="idle",Qd="",Yd=new Map,Br=0,Zd=0,kn=0,fs=0,Vo=!1,hs=0,Wo=!1,vs=0,di=!1,_n=0,zr=null,eu=!1,ui=0,tu=!1,Qe=!1,Ur=null,pi=null,gi=null,mi=null,fi=null,hi=null,ws=null,nu=0,vi=!1,Xo={scrollX:0,scrollY:0,at:Date.now()},Qo={scrollX:0,scrollY:0,at:Date.now()},wi=null,su=0,bi=0,ru=!1,yn=null,Yo=0;const Zo=new Set;let Zs=0,Jr=0,el=null,je=null,ct=null,Ee=null,nn=-1,Et=!1,Ie="step",sn=null,au=null,wv=null,ki=0,er=0,bv=null,Gr=null,qr=0,iu=0,tl=null,nl=null,bs=null;const yi=new Map;let Hr=null;const $i=new Map;let sl=0,rl=0,al=Math.floor(Date.now()/6e4),ou=0,ji="",il=[];const ol=new Map,ks=new Map,ll=new Set,cl=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const ee={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Me=(e,t=document)=>t.querySelector(e),dl=(e,t=document)=>Array.from(t.querySelectorAll(e)),Pn=Me("#app"),kv=document.title||"Flash Kanji",lu=Me("#progressImport"),re=Object.freeze({TOP:"top",PRESERVE:"preserve"});document.addEventListener("pointerdown",gl,{passive:!0,capture:!0}),document.addEventListener("click",gl,{passive:!0,capture:!0}),document.addEventListener("keydown",gl,{passive:!0,capture:!0}),document.addEventListener("click",sb),document.addEventListener("pointerdown",rb),document.addEventListener("input",xp),document.addEventListener("change",xp),document.addEventListener("keydown",lb),window.flashKanjiFarmMoon=(e=5e3)=>Lp(e),window.startFlashKanjiOnboarding=Vl,lu.addEventListener("change",$L),window.addEventListener("beforeinstallprompt",XL),window.addEventListener("appinstalled",Cd),window.addEventListener("scroll",yw,{passive:!0}),window.addEventListener("scroll",Xl,{passive:!0}),window.addEventListener("resize",Xl),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||ag(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||Mo("usage"),!document.hidden&&a.route==="eva-room"&&ra("return")&&(T(),P()),document.hidden&&_l()}),window.addEventListener("pagehide",_l),window.addEventListener("beforeunload",_l),g1(()=>{const e=Kr(qs()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,r=t==="textbooks"&&(n.level||n.course)||null,o=t==="textbooks"&&n.subroute||null,c=t==="jlpt-lesson"&&n.level||null,l=t==="learn"&&n.view||wn,d=t==="learn"&&l===en&&n.targetId||null,u=t==="learn"&&l===bn&&n.targetId||null,f=Th(a.routeNotFound),h=e.status==="not-found"?Th(e):"";if(t!==a.route||t==="kanji"&&s!==a.kanjiPageId||t==="textbooks"&&r!==a.activeTextbookLevel||t==="textbooks"&&o!==a.activeTextbookSubroute||t==="jlpt-lesson"&&c!==a.activeJlptLesson||t==="learn"&&l!==a.activeLearnView||t==="learn"&&d!==a.activeLearnNodeId||t==="learn"&&u!==a.activeLearnLegacyLessonId||f!==h){const g=a.route;a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,a.route!=="home"&&qp(),g!==t&&(g==="review"||t==="review")&&(a.reviewSession=null),a.kanjiPageId=t==="kanji"?s:null,a.activeTextbookLevel=t==="textbooks"?r:null,a.activeTextbookSubroute=t==="textbooks"?o:null,a.activeJlptLesson=t==="jlpt-lesson"?c:n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"?l:wn,a.activeLearnNodeId=t==="learn"?d:null,a.activeLearnLegacyLessonId=t==="learn"?u:null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,t!=="eva-room"&&(a.evaRoomShopOpen=!1),kt(),Ls(),Ve(),ys(t)&&Ci({route:t,delay:ml(t)}),t==="eva-room"&&be("room_opened")}}),yv();async function yv(){if(!await Ov()&&!await Dv()){cu(!0),Pn.innerHTML.trim()?Pn.setAttribute("aria-busy","true"):Pn.innerHTML=yh(),a.progress=uw(),_r(),hd(),BL(),vd(),hn();try{const[e,t,n]=await Promise.all([mu({initialOnly:!0}),Je(O.i18n),Je(O.rewards,Cv)]);a.lessons=e.lessons,a.cards=e.cards,a.i18n=t,a.rewards=n;const s=Gl(a.progress);Xr(),kb(),$s(),hw(),hn(),eA(),FN(),bb(s),BN(),Hs(Kr(qs())),T(),P(),du(()=>{ul({hadPriorVisit:s}).catch(r=>console.warn("Boot ancillary data failed to load.",r))},{timeout:1500}),xv(),Ci({route:a.route,delay:ml(a.route)}),VL(),Hl(),Ek(),Sk(),Ch(),xd();try{sessionStorage.removeItem(Zt)}catch(r){console.warn("Could not clear boot recovery marker after successful startup.",r)}}catch(e){console.error(e),await HL(e)||(Pn.innerHTML=JL(e))}finally{cu(!1)}}}async function ul({hadPriorVisit:e=!1}={}){if(!a.bootAncillaryLoaded)return zr||(zr=(async()=>{const[t,n,s,r,o,c,l,d]=await Promise.all([Je(O.dialogues),Je(O.achievements,()=>({achievements:[],categories:[]})),Je(O.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Je(O.jlptLessons,()=>({items:[]})),Je(O.kanaCatalog,()=>({schema_version:1,content_version:"",courses:[]})),Je(O.customizationShop,()=>({version:1,currency:"Moon Fragments",categories:[],items:[]})),Je(O.evaSprites,()=>({})),Je(O.changelog,()=>null)]),u=Vu(n,a.rewards?.achievements||[]);a.dialogues=t,a.achievements=u.items,a.achievementCategories=u.categories,a.jlptCatalog=rw(s),a.jlptLessons=sw(r),a.kanaCatalog=aw(o),a.customizationCatalog=Qv(c),a.evaSprites=l&&typeof l=="object"&&!Array.isArray(l)?l:{},a.bootAncillaryLoaded=!0,$s(),Pl(),hn(),a.rewards&&(a.rewards.achievements=a.achievements);const f=$v(d,e);Hs(Kr(qs())),P(),f&&jv()})().finally(()=>{zr=null}),zr)}function cu(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),Pn&&Pn.setAttribute("aria-busy",e?"true":"false")}function $v(e,t=!1){eu=!!t,a.changelogModal=null;const n=Z1(e);if(!n)return!1;a.changelog=n;const s=eI(n,a.progress,Si(),{hadPriorVisit:eu,useProgressSignals:!1});return s.shouldMarkHandled?(Kd(s.currentVersion,Si()),!1):!s.shouldShow||!s.entry?!1:a.route!=="home"?(Kd(s.currentVersion,Si()),!1):(a.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function Si(){try{return window.localStorage}catch{return null}}function jv(){ui&&window.clearTimeout(ui),ui=window.setTimeout(()=>{ui=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function pl(){const e=a.changelogModal?.version||a.changelog?.currentVersion||"";Kd(e,Si()),a.changelogModal=null,P()}function Sv(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const r=document.createElement("script");r.id=t,r.src=e,r.defer=!0,r.onload=()=>n(),r.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(r)})}function du(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function Cv(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function Nv(){return window.Chart?Promise.resolve():(au||(au=Sv("vendor/chart.umd.min.js","flash-kanji-chartjs")),au)}function xv(){window.setTimeout(()=>{wv||(wv=Ph(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{_r(),xL()}).catch(e=>console.warn("UX sound module failed to load.",e))),bv||(bv=Ph(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function gl(){_n=Date.now()}async function Lv({minQuietMs:e=450,maxDelayMs:t=1200}={}){if(!_n)return;const n=Date.now();for(;Date.now()-_n<e&&Date.now()-n<t;){const s=Math.min(160,Math.max(16,e-(Date.now()-_n)));await new Promise(r=>window.setTimeout(r,s))}await uu()}async function Av(e){const t=Date.now();for(;Date.now()-t<3200;){const n=String(a.route||""),s=e===n||ys(n),r=_n&&Date.now()-_n<650;if(s&&!r)break;await new Promise(o=>window.setTimeout(o,s?80:220))}await uu()}function uu(){return document.visibilityState==="hidden"?new Promise(e=>window.setTimeout(e,32)):new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)))}function ys(e=a.route){return hv.has(e)}function ml(e=a.route){return ys(e)?_n&&Date.now()-_n<1200?650:0:Xd}function Ci({route:e=a.route,delay:t=Xd,force:n=!1}={}){if(a.deferredDataLoaded||a.deferredDataLoading||Gr||!n&&!ys(e))return;qr&&(window.clearTimeout(qr),qr=0);const s=++iu,r=()=>{s===iu&&(!n&&!ys(a.route)||Iv({route:e}).catch(o=>console.warn("Deferred app data failed to load.",o)))};qr=window.setTimeout(()=>{qr=0,du(r,{timeout:1800})},Math.max(0,Number(t)||0))}async function Iv({renderAfter:e=!0,route:t=a.route}={}){const n=String(t||a.route||"");if(!a.deferredDataLoaded)return Gr||(a.deferredDataLoading=!0,Gr=(async()=>{const[s,r,o]=await Promise.all([mu(),zv([["kanjiMeta",O.kanjiMeta],["kanjiHints",O.kanjiHints],["kanjiTranslations",O.kanjiTranslations],["kanjiStrokes",O.kanjiStrokes],["kanjiPageSources",O.kanjiPageSources],["lessonTranslations",O.lessonTranslations],["vocabulary",O.vocabulary],["sentences",O.sentences],["jlptPracticeLessons",O.jlptPracticeLessons],["n5Meta",O.n5Meta],["n5Lessons",O.n5Lessons],["n5Kanji",O.n5Kanji],["n5Exercises",O.n5Exercises],["n5FinalTest",O.n5FinalTest],["n4Meta",O.n4Meta],["n4Lessons",O.n4Lessons],["n4Kanji",O.n4Kanji],["n4Grammar",O.n4Grammar],["n4Exercises",O.n4Exercises],["n4Reading",O.n4Reading],["n4Listening",O.n4Listening],["n4FinalTest",O.n4FinalTest],["n3Meta",O.n3Meta],["n3Lessons",O.n3Lessons],["n3Kanji",O.n3Kanji],["n3Grammar",O.n3Grammar],["n3Exercises",O.n3Exercises],["n3Reading",O.n3Reading],["n3Listening",O.n3Listening],["n3FinalTest",O.n3FinalTest],["n2Meta",O.n2Meta],["n2Lessons",O.n2Lessons],["n2Kanji",O.n2Kanji],["n2Grammar",O.n2Grammar],["n2Exercises",O.n2Exercises],["n2Reading",O.n2Reading],["n2Listening",O.n2Listening],["n2FinalTest",O.n2FinalTest],["n1Meta",O.n1Meta],["n1Lessons",O.n1Lessons],["n1Kanji",O.n1Kanji],["n1Grammar",O.n1Grammar],["n1Exercises",O.n1Exercises],["n1Reading",O.n1Reading],["n1Listening",O.n1Listening],["n1FinalTest",O.n1FinalTest],["jlptReadingTranslations",O.jlptReadingTranslations],["n5Reading",O.n5Reading],["monetization",O.monetization]]),Jv(O.jlptReadingMarkdown)]);await Lv(),await Av(n);const{kanjiMeta:c,kanjiHints:l,kanjiTranslations:d,kanjiStrokes:u,kanjiPageSources:f,lessonTranslations:h,vocabulary:g,sentences:$,jlptPracticeLessons:L,n5Meta:C,n5Lessons:x,n5Kanji:k,n5Exercises:N,n5FinalTest:z,n4Meta:G,n4Lessons:Vs,n4Kanji:U,n4Grammar:bA,n4Exercises:kA,n4Reading:yA,n4Listening:$A,n4FinalTest:jA,n3Meta:SA,n3Lessons:CA,n3Kanji:NA,n3Grammar:xA,n3Exercises:LA,n3Reading:AA,n3Listening:IA,n3FinalTest:TA,n2Meta:RA,n2Lessons:_A,n2Kanji:PA,n2Grammar:EA,n2Exercises:MA,n2Reading:KA,n2Listening:FA,n2FinalTest:DA,n1Meta:OA,n1Lessons:BA,n1Kanji:zA,n1Grammar:UA,n1Exercises:JA,n1Reading:GA,n1Listening:qA,n1FinalTest:HA,jlptReadingTranslations:VA,n5Reading:WA,monetization:XA}=r;a.lessons=s.lessons,a.cards=s.cards,a.jlptPracticeLessons=iw(L),a.jlptReadingMarkdown=o||"",a.jlptReadingByLevel=Gv(o||""),a.n5Meta=fu(C),a.n5Textbook=bl(x),a.n5KanjiCatalog=hu(k),vu(),a.n5Exercises=wu(N),a.n5FinalTest=bu(z),a.n5Reading=dw(WA),a.n4Meta=ku(G),a.n4Textbook=yu(Vs),a.n4KanjiCatalog=$u(U),a.n4Grammar=Su(bA),a.n4Exercises=Cu(kA),a.n4Reading=Ti(yA),a.n4Listening=Ti($A),a.n4FinalTest=Nu(jA),ju(),a.n3Meta=xu(SA),a.n3Textbook=Lu(CA),a.n3KanjiCatalog=Au(NA),a.n3Grammar=Tu(xA),a.n3Exercises=Ru(LA),a.n3Reading=_i(AA),a.n3Listening=_i(IA),a.n3FinalTest=_u(TA),Iu(),a.n2Meta=Pu(RA),a.n2Textbook=Eu(_A),a.n2KanjiCatalog=Mu(PA),a.n2Grammar=Fu(EA),a.n2Exercises=Du(MA),a.n2Reading=Ei(KA),a.n2Listening=Ei(FA),a.n2FinalTest=Ou(DA),Ku(),a.n1Meta=Bu(OA),a.n1Textbook=zu(BA),a.n1KanjiCatalog=Uu(zA),a.n1Grammar=Gu(UA),a.n1Exercises=qu(JA),a.n1Reading=Ki(GA),a.n1Listening=Ki(qA),a.n1FinalTest=Hu(HA),Ju(),_v(),a.kanjiMeta=c.items||{},a.kanjiHints=l.items||{},a.kanjiTranslations=d.items||{},a.kanjiStrokes=Xv(u),a.kanjiPageSources=f.items||{},a.lessonTranslations=h.items||{},a.vocabulary=g.items||[],a.sentenceExercises=$.items||[],a.jlptReadingTranslations=Vv(VA),a.monetization=XA,a.deferredDataLoaded=!0,a.deferredDataLoading=!1,a.progress&&(Xr(),T());const Rh=String(a.route||"");(n===Rh||ys(Rh))&&(Hs(Kr(qs())),e&&P())})().finally(()=>{a.deferredDataLoading=!1}),Gr)}function Tv(e){const t=D(e),n=t.toLowerCase();if(!t)return[];const s=[["meta",O[`${n}Meta`]],["lessons",O[`${n}Lessons`]],["kanji",O[`${n}Kanji`]],["exercises",O[`${n}Exercises`]]];return t!=="N5"?s.push(["grammar",O[`${n}Grammar`]],["reading",O[`${n}Reading`]],["listening",O[`${n}Listening`]],["finalTest",O[`${n}FinalTest`]]):s.push(["finalTest",O.n5FinalTest]),s.filter(([,r])=>!!r)}function $n(e,t,n=null){const s=D(e);s&&(a.jlptCourseDataStatus[s]=t,a.jlptCourseDataErrors[s]=n||null,s==="N1"&&(nl=n||null))}function Ni(e){const t=D(e);if(!t)return"error";if(a.jlptCourseDataStatus[t]!=="ready"&&xi(t))try{fl(t),$n(t,"ready")}catch(n){$n(t,"incomplete",n)}return a.jlptCourseDataStatus[t]==="ready"&&!xi(t)&&$n(t,"incomplete",new Error(Li())),a.jlptCourseDataStatus[t]||"idle"}function xi(e){const t=D(e);if(!t)return!1;const n=$t(t),s=pu(t),r=gu(t);return n.length>0&&s.length>0&&!!r}function pu(e){const t=D(e);return t==="N5"?Jt():t==="N4"?tt():t==="N3"?nt():t==="N2"?st():t==="N1"?Lt():[]}function gu(e){const t=D(e);return t==="N5"?a.n5Exercises:t==="N4"?a.n4Exercises:t==="N3"?a.n3Exercises:t==="N2"?a.n2Exercises:t==="N1"?a.n1Exercises:null}function Rv(e,t={}){const n=D(e);n==="N5"&&(a.n5Meta=fu(t.meta),a.n5Textbook=bl(t.lessons),a.n5KanjiCatalog=hu(t.kanji),vu(),a.n5Exercises=wu(t.exercises),t.finalTest&&(a.n5FinalTest=bu(t.finalTest))),n==="N4"&&(a.n4Meta=ku(t.meta),a.n4Textbook=yu(t.lessons),a.n4KanjiCatalog=$u(t.kanji),a.n4Grammar=Su(t.grammar),a.n4Exercises=Cu(t.exercises),a.n4Reading=Ti(t.reading),a.n4Listening=Ti(t.listening),a.n4FinalTest=Nu(t.finalTest),ju()),n==="N3"&&(a.n3Meta=xu(t.meta),a.n3Textbook=Lu(t.lessons),a.n3KanjiCatalog=Au(t.kanji),a.n3Grammar=Tu(t.grammar),a.n3Exercises=Ru(t.exercises),a.n3Reading=_i(t.reading),a.n3Listening=_i(t.listening),a.n3FinalTest=_u(t.finalTest),Iu()),n==="N2"&&(a.n2Meta=Pu(t.meta),a.n2Textbook=Eu(t.lessons),a.n2KanjiCatalog=Mu(t.kanji),a.n2Grammar=Fu(t.grammar),a.n2Exercises=Du(t.exercises),a.n2Reading=Ei(t.reading),a.n2Listening=Ei(t.listening),a.n2FinalTest=Ou(t.finalTest),Ku()),n==="N1"&&(a.n1Meta=Bu(t.meta),a.n1Textbook=zu(t.lessons),a.n1KanjiCatalog=Uu(t.kanji),a.n1Grammar=Gu(t.grammar),a.n1Exercises=qu(t.exercises),a.n1Reading=Ki(t.reading),a.n1Listening=Ki(t.listening),a.n1FinalTest=Hu(t.finalTest),Ju())}function Li(){return p()==="ru"?"Не удалось загрузить карточки урока. Проверьте подключение и попробуйте ещё раз.":"Could not load lesson cards. Check your connection and try again."}function fl(e){const t=D(e),n=$t(t),s=pu(t),r=gu(t);if(!t||!n.length||!s.length||!r)throw new Error(Li());if(t!=="N5")return!0;const o=[],c=new Map(a.n5KanjiCatalog.map(u=>[u.kanji,u])),l=new Set;a.n5KanjiCatalog.forEach(u=>{u.id&&l.add(u.id)}),n.length!==10&&o.push(`N5 lessons expected 10, got ${n.length}`),a.n5KanjiCatalog.length!==80&&o.push(`N5 kanji expected 80, got ${a.n5KanjiCatalog.length}`),l.size!==a.n5KanjiCatalog.length&&o.push("N5 card identifiers are not unique.");const d=new Set;if(n.forEach(u=>{d.has(u.id)&&o.push(`Duplicate N5 lesson id: ${u.id}`),d.add(u.id),(u.kanji||[]).length!==8&&o.push(`${u.id} expected 8 kanji, got ${(u.kanji||[]).length}`),(u.kanji||[]).map(g=>c.get(g)).filter(Boolean).length!==(u.kanji||[]).length&&o.push(`${u.id} has unresolved kanji references.`);const h=dn(u);h.length!==(u.kanji||[]).length&&o.push(`${u.id} cards expected ${u.kanji.length}, got ${h.length}`),Ps(u).length||o.push(`${u.id} has no exercises.`)}),o.length)throw new Error(`${Li()} ${o[0]}`);return!0}function _v(){_e.forEach(e=>{try{xi(e)&&(fl(e),$n(e,"ready"))}catch(t){$n(e,"incomplete",t)}})}function Pv(e){const t=D(e);if(!t||!a.progress)return!1;const n=Gn(),s=Wt(t);let r=!1;return $t(t).forEach(o=>{const c=Ye(t,o.id),l=n.sessions[c];if(!l)return;const d=zo({cards:Bl(t,o),session:l,confirmedCompleted:!!(s?.completedLessons?.[o.id]||$e.has(`${t.toLowerCase()}:${o.id}`))});(l.phase==="test"||l.phase==="done")&&d.status==="incomplete"&&(l.phase="study",l.currentIndex=0,l.completedAt=null,r=!0),d.status==="study"&&l.currentIndex!==d.currentIndex&&(l.currentIndex=d.currentIndex,r=!0),d.status==="study"&&l.phase!=="study"&&(l.phase="study",r=!0)}),r&&(n.lastUpdatedAt=new Date().toISOString()),r}function Ev(e){const t=D(e);if(!t||!a.progress)return!1;const n=cr(t);if(!n)return!1;const s=n.course();if(!p$(t,s))return!1;let r=!1;n.lessons().forEach(c=>{Rg(t,c)&&(r=!0)});const o=n.lessonById(s.currentLessonId);if(o&&Nn(t,s,o)){const l=n.lessons().find(d=>!Nn(t,s,d))?.id||o.id;s.currentLessonId!==l&&(s.currentLessonId=l,r=!0)}return r}function Mv(){if(!a.progress)return!1;let e=!1;return _e.forEach(t=>{const n=cr(t);if(!n||!n.lessons().length)return;const s=n.course();if(!qn(n.level,s.currentLessonId).some(d=>!!s.completedLessons?.[d]))return;const l=n.lessons().find(d=>!Nn(n.level,s,d))?.id||gc(n,{id:s.currentLessonId},s.currentLessonId)||s.currentLessonId;l&&s.currentLessonId!==l&&(s.currentLessonId=l,e=!0)}),e}async function hl(e,{renderAfter:t=!0,force:n=!1}={}){const s=D(e);if(!s)return null;if(!n&&Ni(s)==="ready")return $t(s);if(!n&&yi.has(s))return yi.get(s);$n(s,"loading");const r=Uv(Tv(s),s==="N5"?4:3).then(o=>{if(Rv(s,o),fl(s),$n(s,"ready"),a.progress){Xr();const c=Pv(s),l=Ev(s);(c||l)&&T()}return Hs(Kr(qs())),t&&P(),$t(s)}).catch(o=>{throw $n(s,"error",o),console.warn(`${s} textbook data failed to load.`,o),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&P(),o}).finally(()=>{yi.delete(s)});return yi.set(s,r),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&P(),r}function Kv(e){const t=D(e);t&&($n(t,"loading"),P(),hl(t,{renderAfter:!0,force:!0}).catch(()=>{}))}async function Fv({renderAfter:e=!0}={}){return tl=hl("N1",{renderAfter:e}).finally(()=>{tl=null}),tl}async function Dv(){try{const e=localStorage.getItem(Re);if(localStorage.setItem(Re,I),!e||e===I)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function Ov(){try{const e=localStorage.getItem(oi),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===I||(localStorage.setItem(oi,"done"),localStorage.setItem("flashKanji.lastForcedBuild",I)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function mu({initialOnly:e=!1}={}){const t=await Je(O.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Bv(n):n,r=await vl(s,async d=>{try{return{manifestLesson:d,payload:await Je(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(r.filter(Boolean).map(d=>[d.manifestLesson.id,d])),c=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:f}=u;return{...d,...f.lesson,file:d.file,items:Array.isArray(f.items)?f.items.map(h=>Wv(h,f.lesson.id)):[]}}),l=c.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:c,cards:l}}function Bv(e){return e.filter((t,n)=>fv.has(t.id)||n<2)}async function zv(e,t=3){const n=await vl(e,async([s,r])=>[s,await Je(r)],t);return Object.fromEntries(n)}async function Uv(e,t=3){const n=await vl(e,async([s,r])=>[s,await Yv(r)],t);return Object.fromEntries(n)}async function vl(e,t,n=6){const s=[],r=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=r){const c=e.slice(o,o+r);s.push(...await Promise.all(c.map(t))),o+r<e.length&&await new Promise(l=>window.setTimeout(l,0))}return s}async function Je(e,t=null){const n=wl(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),Ho):0;try{const l=await fetch(r,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${r}`);continue}const d=await l.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${r}. Trying fallback paths.`,u)}}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function Jv(e,t=""){const n=wl(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),Ho):0;try{const l=await fetch(r,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${r}`);continue}return await l.text()}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function Gv(e){const t=Object.fromEntries(_e.map(f=>[f,[]])),n=String(e||"").split(/\r?\n/);let s=null,r=null,o="idle",c=[],l=[];const d=()=>{!r||!s||(r.text=qv(c.join(`
`)),r.questions=l.map(f=>f.trim()).filter(Boolean),t[s].push(r),r=null,c=[],l=[],o="idle")},u=f=>{const h=String(f||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const f of n){const h=String(f??""),g=h.trim(),$=g.match(/^#\s*JLPT\s*(N[1-5])\b/i);if($){d(),s=$[1].toUpperCase();continue}const L=g.match(/^##\s*(N[1-5])\s*(.+)$/i);if(L){d(),s=L[1].toUpperCase(),r={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:Hv(L[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(g)&&!$&&!L){d(),s=null;continue}if(!r)continue;if(/^###\s*Проверочные вопросы/i.test(g)){o="questions";continue}if(o==="code"){/^```/.test(g)?o="body":c.push(h);continue}if(/^```/.test(g)){o="code";continue}if(o==="questions"){const x=g.match(/^[-*]\s+(.*)$/),k=g.match(/^\d+\.\s+(.*)$/);if(x){l.push(x[1]);continue}if(k){l.push(k[1]);continue}if(!g||/^---+$/.test(g))continue;l.push(g);continue}const C=g.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(C){const x=u(C[1]);r[x]=C[2].trim()}}return d(),t}function qv(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function Hv(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Vv(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,r])=>{!s||!r||typeof r!="object"||(n[String(s)]={titleRu:String(r.titleRu||r.ruTitle||r.title_ru||"").trim(),titleEn:String(r.titleEn||r.enTitle||r.title_en||"").trim(),ru:String(r.ru||r.translationRu||r.translation_ru||"").trim(),en:String(r.en||r.translationEn||r.translation_en||"").trim()})}),n}function wl(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Wv(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Xv(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const r=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return r.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||r.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:r}]:null}).filter(Boolean))}function Qv(e){const t=Array.isArray(e?.categories)?e.categories:[],n=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),currency:e?.currency||"Moon Fragments",categories:t.length?t:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}],items:n.map(s=>{const r=ii(s.price);return{...s,id:String(s.id||""),type:String(s.type||"effect"),price:r,asset:String(s.asset||""),preview:String(s.preview||s.asset||""),rarity:String(s.rarity||"common").toLowerCase(),defaultOwned:!!(s.defaultOwned||r===0),unlockCondition:s.unlockCondition||null}}).filter(s=>s.id)}}async function Yv(e){const t=wl(e);let n=null;for(const s of t)try{const r=typeof AbortController<"u"?new AbortController:null,o=r?window.setTimeout(()=>r.abort(),Ho):0;try{const c=await fetch(s,{signal:r?.signal});if(!c.ok){n=new Error(`Cannot load ${s}: HTTP ${c.status}`);continue}const l=await c.text();try{return JSON.parse(l)}catch(d){n=d}}finally{o&&window.clearTimeout(o)}}catch(r){n=r}throw n||new Error(`Cannot load ${e}`)}function En(){return{owned:[],selected:{background:"bg_study_hub",outfit:Oo,theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function Zv(){try{const e=localStorage.getItem(S);if(!e)return En();const t=JSON.parse(e);if(!t||typeof t!="object")return En();const n=En(),s=t.selected||t.equipped||{},r=Object.entries(Fd(s)).filter(([,o])=>!!o);return{owned:He(t.owned||t.ownedItems||t.inventory||n.owned),selected:{...n.selected,...Object.fromEntries(r)},seen:He(t.seen||n.seen),updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),En()}}function ew(){try{const e=localStorage.getItem(S);if(!e)return null;const t=JSON.parse(e);return!t||typeof t!="object"?null:t.selected?.background||t.equipped?.background||null}catch{return null}}function tr(){if(!a.customization)return!1;if(di)return!0;di=!0;const e=()=>{vs=0,di=!1,a.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(S,JSON.stringify(a.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?vs=window.requestIdleCallback(e,{timeout:1200}):vs=window.setTimeout(e,160),!0}function tw(){if(!a.customization)return!1;di=!1,vs&&("cancelIdleCallback"in window?window.cancelIdleCallback(vs):window.clearTimeout(vs),vs=0),a.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(S,JSON.stringify(a.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function $s(){const e=ew(),t=Zv(),n=Ke().length>0,s=new Set,r=He(a.progress.shop?.owned||[]);He(t.owned).forEach(c=>{const l=Se(c)||Mn(c);l?s.add(l.id):n||s.add(c)}),Ke().forEach(c=>{(c.defaultOwned||c.price===0)&&s.add(c.id)}),He(a.progress.unlockedBackgrounds||[]).forEach(c=>{const l=Se(c)||Mn(c);l?s.add(l.id):n||s.add(c)}),He(a.progress.unlockedEvaSprites||[]).forEach(c=>{const l=jn(c);l&&s.add(l.id),r.includes(`eva_sprite:${c}`)&&l&&s.add(l.id)}),r.forEach(c=>{const l=String(c),d=Se(l)||Mn(l);if(d?s.add(d.id):n||s.add(l),!d&&l.startsWith("eva_sprite:")){const u=jn(l.replace("eva_sprite:",""));u&&s.add(u.id)}});const o=nw({...En().selected,...Fd(a.progress.shop?.equipped||{}),...t.selected||{}});o.background=Uh({catalogItems:Ke(),owned:[...s],customizationSelected:e,progressEquipped:a.progress.shop?.equipped?.background,progressSelected:a.progress.selectedEvaRoomBackground}),o.outfit=Jh({catalogItems:Ke(),owned:[...s],customizationSelected:o.outfit,progressEquipped:a.progress.shop?.equipped?.outfit,progressSelected:a.progress.selectedEvaSprite,fallbackId:Oo}),n||(o.background=e||t.selected?.background||a.progress.shop?.equipped?.background||a.progress.selectedEvaRoomBackground||o.background||"bg_study_hub"),n&&!s.has(o.background)&&(o.background="bg_study_hub"),n&&!s.has(o.outfit)&&(o.outfit=Jh({catalogItems:Ke(),owned:[...s],progressEquipped:a.progress.shop?.equipped?.outfit,progressSelected:a.progress.selectedEvaSprite,fallbackId:Oo})),n&&!s.has(o.theme)&&(o.theme="theme_default_dark"),n&&o.decoration&&!s.has(o.decoration)&&(o.decoration=null),n&&o.effect&&!s.has(o.effect)&&(o.effect=null),a.customization={owned:[...s],selected:o,seen:[...new Set([...He(t.seen||[]),...s])],updatedAt:t.updatedAt||new Date().toISOString()},Vr(),n&&tr()}function Vr(){var n;if(!a.customization||!a.progress)return;me();const e=a.customization.selected||{};e.background&&(a.progress.selectedEvaRoomBackground=e.background);const t=Se(e.outfit);t?.spriteId&&(a.progress.selectedEvaSprite=t.spriteId),a.progress.unlockedBackgrounds=[...new Set([...He(a.progress.unlockedBackgrounds||[]),...a.customization.owned.filter(s=>Se(s)?.type==="background")])],a.progress.unlockedEvaSprites=[...new Set([...He(a.progress.unlockedEvaSprites||[]),...a.customization.owned.map(s=>Se(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=a.progress).shop||(n.shop={owned:[],equipped:{}}),a.progress.shop.owned=[...new Set([...He(a.progress.shop.owned||[]),...a.customization.owned,...a.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],a.progress.shop.equipped={...a.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function Ke(){return a.customizationCatalog?.items||[]}function Se(e){return Ke().find(t=>t.id===e)||null}function Mn(e){const t=String(e||"");return t&&Ke().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function Kn(e){return(Se(e)||Mn(e))?.id||e||null}function nw(e={}){return{background:Kn(e.background),outfit:Kn(e.outfit),theme:Kn(e.theme),decoration:Kn(e.decoration||e.frame),effect:Kn(e.effect)}}function jn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return Ke().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.spriteId&&t.startsWith(`${s.spriteId}_`)||s.legacySpriteId===t||s.legacySpriteId&&t.startsWith(`${s.legacySpriteId}_`)?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function sw(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function rw(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>_e.indexOf(n.jlpt)-_e.indexOf(s.jlpt))}}function aw(e){const t=Array.isArray(e?.courses)?e.courses:[];return{schema_version:Number(e?.schema_version||1),content_version:String(e?.content_version||""),courses:t.map(n=>({...n,slug:String(n.slug||"").toLowerCase(),title:String(n.title||""),native_title:String(n.native_title||""),description:String(n.description||""),course_file:String(n.course_file||""),pdf_url:String(n.pdf_url||""),lesson_count:Number(n.lesson_count||0),base_character_count:Number(n.base_character_count||0),task_count:Number(n.task_count||0)})).filter(n=>we(n.slug))}}function iw(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function fu(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function bl(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function hu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function vu(){if(!Array.isArray(a.n5KanjiCatalog)||!a.n5KanjiCatalog.length)return;const e=new Map(a.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const r=String(n.jlpt||s.jlpt||"").toUpperCase();return r&&r!=="N5"?n:(t.add(s.kanji),Ai(n,s))}),a.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ai({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Ai(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Z(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Z(s(n.onyomi)||e.onyomi||""),kunyomi:Z(s(n.kunyomi)||e.kunyomi||""),hiragana:Z((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function wu(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function bu(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function ku(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function yu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function $u(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function ju(){if(!Array.isArray(a.n4KanjiCatalog)||!a.n4KanjiCatalog.length)return;const e=new Map(a.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ii(n,s))}),a.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ii({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function Ii(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Z(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Z(s(n.onyomi)||e.onyomi||""),kunyomi:Z(s(n.kunyomi)||e.kunyomi||""),hiragana:Z((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function Su(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Cu(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ti(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Nu(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function xu(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function Lu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function Au(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Iu(){if(!Array.isArray(a.n3KanjiCatalog)||!a.n3KanjiCatalog.length)return;const e=new Map(a.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ri(n,s))}),a.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ri({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function Ri(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Z(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Z(s(n.onyomi)||e.onyomi||""),kunyomi:Z(s(n.kunyomi)||e.kunyomi||""),hiragana:Z((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Tu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Ru(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function _i(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function _u(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function Pu(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function Eu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Mu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Ku(){if(!Array.isArray(a.n2KanjiCatalog)||!a.n2KanjiCatalog.length)return;const e=new Map(a.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Pi(n,s))}),a.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Pi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function Pi(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Z(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Z(s(n.onyomi)||e.onyomi||""),kunyomi:Z(s(n.kunyomi)||e.kunyomi||""),hiragana:Z((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function Fu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Du(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ei(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Ou(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function Bu(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function zu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Uu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Ju(){if(!Array.isArray(a.n1KanjiCatalog)||!a.n1KanjiCatalog.length)return;bs=null;const e=new Map(a.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Mi(n,s))}),a.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Mi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))}),bs=null}function Mi(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),r=(t.examples||[]).map(l=>({...l,reading:Z(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=r[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:Z(s(n.onyomi)||e.onyomi||""),kunyomi:Z(s(n.kunyomi)||e.kunyomi||""),hiragana:Z((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function Gu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function qu(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ki(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Hu(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function ow(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function lw(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>Z(n)):[]})):[]}function cw(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((r,o)=>({kanji:String(r||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,r,o)=>o.findIndex(c=>c.kanji===s.kanji&&c.reading===s.reading)===r)}function dw(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(r=>String(r?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((r,o)=>({id:String(r.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(r.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(r.sentence||""),reading:Z(r.reading||""),translationRu:String(r.translationRu||r.translation_ru||r.ru||""),translationEn:String(r.translationEn||r.translation_en||r.en||""),blanks:lw(r.blanks),tiles:cw(r.tiles,r.blanks),source:"reading"})).filter(r=>r.id)}function Vu(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(c=>({id:String(c.id),title:c.title||{ru:c.id,en:c.id},icon:c.icon||"moon"})):[],r=n.map(c=>kl(c)),o=new Set(s.map(c=>c.id));return r.forEach(c=>{o.has(c.category)||(o.add(c.category),s.push({id:c.category,title:{ru:c.category,en:c.category},icon:c.icon||"moon"}))}),{categories:s,items:r}}function kl(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function Wu(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function nr(){const e=Wu();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:$l(),jlptLessonStudy:jl(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:Cl(),n4Course:Nl(),n3Course:xl(),n2Course:Ll(),n1Course:Al(),kanaCourses:Pd(null),unlockedJlptLevels:_e.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:cp(),evaRelationship:Tl(),shop:{owned:[],equipped:{}}}}function uw(){const e=nr();try{const t=k1();return t?Xu(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function Xu(e,t){return{...e,...t,version:3,settings:pw(e.settings,t.settings||{}),cards:y1({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:mw(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Fi(t.dailyBonusPending||null),lastOpenedJlptLesson:at(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:tL(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Gs(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),moonFragments:ii(t.moonFragments,e.moonFragments),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:np(e.learningPath,t.learningPath||{}),jlptLessonStudy:tp(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Il(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:lp(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:sp(e.n5Course,t.n5Course||{}),n4Course:rp(e.n4Course,t.n4Course||{}),n3Course:ap(e.n3Course,t.n3Course||{}),n2Course:ip(e.n2Course,t.n2Course||{}),n1Course:op(e.n1Course,t.n1Course||{}),kanaCourses:Pd(t.kanaCourses||e.kanaCourses),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],..._e])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:up(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:dp(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...He(e.shop.owned||[]),...He(t.shop?.owned||t.ownedItems||[])])],equipped:{...e.shop.equipped,...Fd(t.shop?.equipped||t.equippedItems||{})}}}}function pw(e,t){const n={...e,...t||{}};return n.theme=gw(n.theme,e.theme||"dark"),n.themeManuallySelected=Fn(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=Fn(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=Fn(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=Fn(n.languageManuallySelected,e.languageManuallySelected===!0),n}function gw(e,t="dark"){return e==="light"||e==="dark"?e:t}function mw(e,t){const n={...e,...t||{}};return n.current=yl(n.current,e.current||0),n.best=yl(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=Qu(n.pendingReward),n}function Qu(e){if(!e||typeof e!="object")return null;const t=yl(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Fi(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function Fn(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function yl(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function $l(){return{version:Vd,currentLevel:Wd,currentNodeId:Pe,completedNodes:{},unlockedNodes:{[Pe]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function jl(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function Yu(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function Zu(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function ep(e,t){const n=Yu(),s=t&&typeof t=="object"?t:{},r={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:r,phase:Zu(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function tp(e,t){const n=jl(),s=t&&typeof t=="object"?t:{},r={},o=e?.sessions||{},c=s.sessions||{};return Object.keys(o).forEach(l=>{r[l]=ep(o[l],c[l])}),Object.keys(c).forEach(l=>{r[l]||(r[l]=ep(null,c[l]))}),{...n,...e||{},...s||{},sessions:r,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function np(e,t){return{...e,...t||{},version:Vd,currentLevel:String(t?.currentLevel||e.currentLevel||Wd).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||Pe),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Sl(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Sl(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||en),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function Cl(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function sp(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Gs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:xa(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Nl(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function rp(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Gs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:xa(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function xl(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function ap(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Gs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:xa(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Ll(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function ip(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Gs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:xa(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Al(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function op(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Gs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:xa(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Il(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:fw(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Di(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Di(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function fw(e,t){const n=[],s=new Set,r=o=>{if(!o)return;const c=ns(o.jp||Vm(o)),l=yr(c);if(!l||s.has(l))return;s.add(l);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Oe(l).toString(36)}`;n.push({id:d,jp:c,hiragana:ns(o.hiragana||o.reading||""),ru:ns(o.ru||o.translationRu||""),en:ns(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(r),(Array.isArray(t)?t:[]).forEach(r),n.slice(0,160)}function lp(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Tl(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:ce(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function cp(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function dp(e,t){return{...e,...t,warmth:de(Number(t.warmth??e.warmth),0,100),trust:de(Number(t.trust??e.trust),0,100),discipline:de(Number(t.discipline??e.discipline),0,100),curiosity:de(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function up(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function rn(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function js(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function an(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:rn(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function hw(){const e=an();let t=null;try{const n=localStorage.getItem(y);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}a.evaRuntime=bw(e,t||ww()),vw(),Ss()}function vw(){if(!a.evaRuntime)return;a.evaRuntime.memory=js(rn(),a.evaRuntime.memory||{});const e=a.evaRuntime.memory,t=ce(),n=e.lastSeenDate||null,s=n?Math.max(0,us(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=a.route,e.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=a.evaRuntime.mood||e.lastKnownMood||"neutral"}function ww(){const e=a.progress?.evaAutonomy||{};return{currentSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:a.customization?.selected?.decoration||a.customization?.selected?.frame||null,currentEffect:a.customization?.selected?.effect||"none",activeSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function bw(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:js(e.memory||rn(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function Rl(){if(!a.evaRuntime)return!1;Pl(),a.evaRuntime.updatedAt=new Date().toISOString(),Wo=!1,hs&&("cancelIdleCallback"in window?window.cancelIdleCallback(hs):window.clearTimeout(hs),hs=0);try{return localStorage.setItem(y,JSON.stringify(a.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function Ss(e={}){if(!a.evaRuntime)return!1;if(e?.immediate)return Rl();if(Wo)return!0;Wo=!0;const t=()=>{hs=0,Rl()};return"requestIdleCallback"in window?hs=window.requestIdleCallback(t,{timeout:1200}):hs=window.setTimeout(t,160),!0}function _l(){El(),Rl(),tw()}function Pl(){if(!a.evaRuntime||!a.progress)return;const e=a.customization?.selected?.background||a.progress.shop?.equipped?.background||a.progress.selectedEvaRoomBackground||"bg_study_hub",t=Ke().filter(s=>Ot(s.id));a.evaRuntime.ownedSkins=[...new Set(["idle","default",...a.progress.unlockedEvaSprites||[],...t.filter(s=>s.type==="outfit").map(s=>s.spriteId||s.id)].filter(Boolean))],a.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...a.progress.unlockedBackgrounds||[],...t.filter(s=>s.type==="background").map(s=>s.id)].filter(Boolean))],a.evaRuntime.ownedEffects=[...new Set(t.filter(s=>s.type==="effect").map(s=>s.id))],a.evaRuntime.ownedDecorations=[...new Set(t.filter(s=>s.type==="decoration").map(s=>s.id))];const n=As();a.evaRuntime.currentBackground=e,a.evaRuntime.currentSkin=n,a.evaRuntime.activeSkin=n,a.evaRuntime.activeBackground=e}function El(){return a.progress?(Mv(),a.progress.level=Lo(a.progress.xp),a.progress.updatedAt=new Date().toISOString(),Vo=!1,fs&&("cancelIdleCallback"in window?window.cancelIdleCallback(fs):window.clearTimeout(fs),fs=0),$1(a.progress)):!1}function T(e={}){if(!a.progress)return!1;if(e?.immediate)return El();if(Vo)return!0;Vo=!0;const t=()=>{fs=0,El()};return"requestIdleCallback"in window?fs=window.requestIdleCallback(t,{timeout:1200}):fs=window.setTimeout(t,120),!0}function Wr(e,t,{timeout:n=0,afterPaint:s=!1}={}){const r=()=>{try{const c=t?.();c&&typeof c.then=="function"&&c.catch(l=>console.warn(`[Flash Kanji] ${e} failed.`,l))}catch(c){console.warn(`[Flash Kanji] ${e} failed.`,c)}},o=()=>window.setTimeout(r,n);requestAnimationFrame(s?()=>requestAnimationFrame(o):o)}function kw(){mp(),vi=!0,Ve(),Ls(),Ft(),window.setTimeout(Ls,120),window.setTimeout(Ls,320)}function he(){return typeof window>"u"?{scrollX:0,scrollY:0}:{scrollX:window.scrollX,scrollY:window.scrollY}}function pp(){return{...he(),at:Date.now()}}function yw(){if(typeof window>"u")return;const e=pp(),t=Qo;su=e.at,t&&(Math.abs(Number(e.scrollY||0)-Number(t.scrollY||0))>4||Math.abs(Number(e.scrollX||0)-Number(t.scrollX||0))>4)&&(wi=t),Qo=e,bi&&window.clearTimeout(bi),bi=window.setTimeout(()=>{Xo=pp(),Qo=Xo,wi=null,ru=!0,bi=0},30)}function gp(){const e=he(),t=wi||Xo||e,n=Date.now()-su<90,s=Math.abs(Number(e.scrollY||0)-Number(t.scrollY||0))>4||Math.abs(Number(e.scrollX||0)-Number(t.scrollX||0))>4;return(ru||wi)&&n&&s?t:e}function $w(){return yn||(yn=gp()),yn}function jw(){const e=yn||gp();return yn=null,e}function pe({scrollPolicy:e=re.PRESERVE,viewportSnapshot:t=null}={}){if(e===re.TOP){a.pendingFocus="__scroll-top__",kw();return}mb(t||he())}function mp(){if(typeof document>"u")return;const e=document.activeElement;e&&typeof e.blur=="function"&&e.blur()}function Mt(e,t,n={}){Wr(e,()=>{const s=t?.();s&&typeof s.then=="function"&&s.catch(r=>console.warn(`[Flash Kanji] ${e} failed.`,r)),T(),pe({scrollPolicy:n.scrollPolicy||(n.scrollTop?re.TOP:re.PRESERVE),viewportSnapshot:n.viewportSnapshot||null})})}function Sw(e){const t=e?.dataset?.action||"",n=Cw(t,e);return n?ll.has(n)?!1:(ll.add(n),requestAnimationFrame(()=>window.setTimeout(()=>ll.delete(n),0)),!0):!0}function Cw(e,t){return e?e==="rate"?`rate:${a.activeCardId||""}:${t?.dataset?.rating||""}`:e==="rate-kana-review"?`rate-kana:${t?.dataset?.course||""}:${t?.dataset?.card||""}:${t?.dataset?.rating||""}`:e==="kana-lesson-card"?`kana-lesson-card:${t?.dataset?.course||""}:${t?.dataset?.lesson||""}:${t?.dataset?.kana||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${a.activeExerciseReviewLevel||""}:${a.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function Xr(){Object.keys(a.progress.cards||{}).forEach(s=>B(s)),a.progress.level=Lo(a.progress.xp),a.progress.totalMoonFragmentsEarned=Math.max(Number(a.progress.totalMoonFragmentsEarned||0),Number(a.progress.moonFragments||0),kx()),me(),ir(),ca(),hc(),kc(),Sc(),typeof io=="function"&&io();const e=Lr(),t=[La(se(),"N5"),La(X(),"N4"),La(V(),"N3"),La(W(),"N2"),La(te(),"N1"),Aa(se(),"N5"),Aa(X(),"N4"),Aa(V(),"N3"),Aa(W(),"N2"),Aa(te(),"N1")].some(Boolean);[se(),X(),V(),W(),typeof te=="function"?te():null].filter(Boolean).forEach(s=>Nw(s)),(t||e)&&T(),Oi();const n=a.lessons.find(s=>We(s));a.activeLessonId||(a.activeLessonId=n?.id||a.lessons[0]?.id||null)}function Nw(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Gs(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function sr(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],r=e.srsKanji[t],o=s||r||n;return e.studiedKanji[t]=o,e.srsKanji[t]=r||o,o}function Oi(){a.progress.learningPath=np($l(),a.progress.learningPath||{});const e=a.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[Pe]=!0,(Object.keys(a.progress.seenKanji||{}).length>0||Object.keys(se().studiedKanji||{}).length>0||Object.keys(se().completedLessons||{}).length>0||Object.keys(a.progress.lessonCompletions||{}).length>0)&&!t[Pe]&&(t[Pe]=a.progress.visits?.firstVisitDate||new Date().toISOString()),Ml().forEach((o,c)=>{se().completedLessons?.[o]&&!t[o]&&(t[o]=se().completedLessons[o]),n[o]=!0});const r=fp();e.currentNodeId=r,n[r]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function Ml(){const e=(a.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:gv.filter(t=>/^n5-lesson-\d+$/i.test(t))}function fp(){const e=a.progress?.learningPath||$l(),t=[Pe,...Ml(),Ys];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||Pe}function Kl(){return a.n5Textbook?.items?.length?Promise.resolve(a.n5Textbook):Hr||(Hr=Je(O.n5Lessons).then(e=>(a.n5Textbook=bl(e),Oi(),(a.route==="learn"||a.route==="home")&&P(),a.n5Textbook)).catch(e=>{throw Hr=null,e}),Hr)}function xw(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(a.learningPathLessonPayloads[t])return Promise.resolve(a.learningPathLessonPayloads[t]);const n=mv[t];if(!n){const r=aa(t);return r&&(a.learningPathLessonPayloads[t]=r),Promise.resolve(r)}if($i.has(t))return $i.get(t);const s=Je(n).then(r=>(a.learningPathLessonPayloads[t]=r||aa(t),a.route==="learn"&&a.activeLearnNodeId===t&&P(),a.learningPathLessonPayloads[t])).catch(r=>{const o=aa(t);if(o)return a.learningPathLessonPayloads[t]=o,a.route==="learn"&&a.activeLearnNodeId===t&&P(),o;throw r}).finally(()=>{$i.delete(t)});return $i.set(t,s),s}function Dn(){return Oi(),a.progress.learningPath}function Fl(){const e=Dn().activeSession;return!e?.nodeId||Dn().completedNodes?.[e.nodeId]?null:e}function rr(){const e=Fl();return e?.nodeId?e.nodeId:Dn().currentNodeId||fp()||Pe}function hp(e){const t=Cs(e);return t?w(t.title):Lw(e)}function Lw(e){const t=String(e||"");if(t===Pe)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===Ys)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=Ut(t);if(n)return w(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Aw(e){const t=Cs(e);return t?w(t.summary):""}function ge(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Mistakes",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Step",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Iw(){const e=ge();return{id:Pe,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Tw(){const e=bt();return ge(),{id:Qs,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function Rw(){return{id:Ys,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function _w(){const e=Number(a.n5Meta?.kanjiPerLesson||a.n5Meta?.cardsPerLesson||8);return Ml().map((t,n)=>({id:t,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${n+1}`,en:`N5 · Lesson ${n+1}`},summary:n===0?{ru:`Первый интерактивный урок: ${e} знаков, чтения, примеры и мини-практика.`,en:`First interactive lesson: ${e} signs, readings, examples, and mini practice.`}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:n===0?12:10}))}function vp(){const e=Iw(),t=Tw(),n=Rw(),s=a.n5Textbook?.items?.length?a.n5Textbook.items.map((o,c)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):_w(),r=[e];return bt()>0&&r.push(t),[...r,...s,n]}function Cs(e){const t=String(e||"");return t&&vp().find(n=>n.id===t)||null}function wp(e){if(!e)return"locked";if(e.id===Qs)return bt()>0?"review":"available";const t=Dn();return t.completedNodes?.[e.id]?"completed":rr()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Pw(e){const t=ge();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function bp(){const e=Dn(),t=bt(),n=Fl(),s=rr(),r=Cs(s),o=Number(An().reviews||0)>=Number(a.progress.settings.dailyGoal||0);return!e.completedNodes?.[Pe]&&!n?{kind:"node",label:ge().start,nodeId:Pe}:n?.nodeId?{kind:"node",label:ge().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${ge().reviewAction}: ${t}`,nodeId:Qs}:o&&r?{kind:"node",label:ge().next,nodeId:r.id}:r?{kind:"node",label:e.completedNodes?.[Pe]?ge().resume:ge().start,nodeId:r.id}:{kind:"review",label:ge().reviewOld,nodeId:Qs}}function Ew(){const e=ge(),t=iL(),n=t?.level||fn(),s=t?.lessonId||gd(n),r=Wt(n),o=dh(n);return{label:!!(t?.lessonId||r&&(Object.keys(r.completedLessons||{}).length>0||r.currentLessonId&&r.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function kp(){return p()==="ru"?{sectionEyebrow:"Японские азбуки",sectionTitle:"Начни с каны",sectionHint:"Хирагана и катакана идут рядом с JLPT, но прогресс и статистика хранятся отдельно.",start:"Начать",continue:"Продолжить",review:"Повторить",lessons:"уроков",passed:"пройдено",due:"к повторению",mastered:"освоено",characters:"знаков",active:"выбранный курс",hiragana:"Хирагана",katakana:"Катакана"}:{sectionEyebrow:"Japanese syllabaries",sectionTitle:"Start with kana",sectionHint:"Hiragana and katakana live next to JLPT, while progress and stats stay separate.",start:"Start",continue:"Continue",review:"Review",lessons:"lessons",passed:"passed",due:"due",mastered:"mastered",characters:"characters",active:"selected course",hiragana:"Hiragana",katakana:"Katakana"}}function Mw(e){return e?!!(e.currentRoute||Object.keys(e.lessons||{}).length||Object.keys(e.practices||{}).length||Object.keys(e.review||{}).length||Object.keys(e.writing||{}).length||e.finalTest?.completed):!1}function Kw(e){if(!we(e))return 0;const t=Date.now(),n=Bt(e),s=Object.entries(n).map(([r,o])=>({cardId:r,...Ue(o)}));return _d(s,t).initial.length}function Fw(e){return we(e)?Object.values(Bt(e)).map(t=>Ue(t)).filter(t=>t.state==="Mastered").length:0}function Dw(e){return we(e)?Object.values(Bt(e)).map(t=>Ue(t)).filter(t=>t.state!=="New"||Number(t.reviewCount||0)>0).length:0}function Ow(){const e=kp();return(a.kanaCatalog?.courses||[]).map(t=>{const n=String(t.slug||"").toLowerCase(),s=Us(n),r=yt(n),o=s?.lessons?.[0]?.id||"lesson-1",c=r.currentRoute||o,l=Math.max(Number(s?.lessons?.length||0),Number(t.lesson_count||0)),d=s?.lessons?.length?s.lessons.filter(x=>so(n,x).passed).length:Object.values(r.lessons||{}).filter(x=>x?.passed).length,u=Math.max(Number(s?.base_characters?.length||0),Number(t.base_character_count||0)),f=Dw(n),h=Kw(n),g=E(d,Math.max(1,l)),$=E(f,Math.max(1,u)),L=Mw(r),C=n==="katakana"?e.katakana:e.hiragana;return{slug:n,title:C,subtitle:t.title||C,nativeTitle:t.native_title||(n==="katakana"?"カタカナ":"ひらがな"),description:t.description||"",currentRoute:c,started:L,dueCount:h,completedLessons:d,totalLessons:l,totalCharacters:u,masteredCount:Fw(n),progressPercent:Math.max(g,$),updatedAt:r.updatedAt||null}}).filter(t=>we(t.slug))}function Bw(e){const t=e.filter(n=>n.started||n.updatedAt);return t.length&&t.sort((n,s)=>(Date.parse(s.updatedAt||"")||0)-(Date.parse(n.updatedAt||"")||0))[0]?.slug||""}function zw(e,t,n){const s=e.slug===t,r=e.started?n.continue:n.start,o=`#textbooks/${m(e.slug)}/${m(e.currentRoute||"lesson-1")}`,c=e.totalLessons>0?`${e.completedLessons}/${e.totalLessons} ${n.lessons}`:`0 ${n.lessons}`,l=e.totalCharacters>0?`${e.masteredCount}/${e.totalCharacters} ${n.mastered}`:`${e.masteredCount} ${n.mastered}`;return`
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
    `}function Uw(){const e=Ow();if(!e.length)return"";const t=kp(),n=Bw(e);return`
      <article class="study-card home-kana-section" data-section="home-kana-courses">
        <div class="section-head">
          <div>
            <span class="eyebrow accent">${i(t.sectionEyebrow)}</span>
            <h2>${i(t.sectionTitle)}</h2>
            <p>${i(t.sectionHint)}</p>
          </div>
        </div>
        <div class="home-kana-grid">
          ${e.map(s=>zw(s,n,t)).join("")}
        </div>
      </article>
    `}function Jw(){const e=Rn(),t=bt(),n=ge();return[{label:n.streak,value:a.progress.streak.current},{label:n.level,value:a.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Gw(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function qw(){const e=p()==="ru",t=ic();return _e.map(n=>{const s=It(n),r=$t(n),o=Wt(n),c=yp(n,r),l=Math.max(Number(s?.lessonCount||0),r.length||0),d=Tt(n),u=Hw(n,r,s,o,c),f=!u&&t===n,h=w(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),g=l>0?`${c}/${l} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",$=u?e?"Пройдено":"Completed":f?`${g} · ${e?"сейчас":"now"}`:d?g:Tn(n);return{level:n,title:h,note:$,status:u?"done":f?"current":d?"open":"locked"}})}function yp(e,t=$t(e)){const n=Wt(e),s=n?.completedLessons||{};if(!n||!s||typeof s!="object")return 0;const r=new Set;return t.forEach(o=>{o?.id&&qn(e,o).some(c=>!!s[c])&&r.add(o.id)}),r.size?r.size:Object.values(s).filter(Boolean).length}function Hw(e,t=$t(e),n=It(e),s=Wt(e),r=yp(e,t)){if(!s)return!1;if(s.finalTest?.passed)return!0;const o=Math.max(Number(n?.lessonCount||0),t.length||0);return o>0&&r>=o}function Vw(e){const t=`data-action="route" data-route="textbooks" data-subroute="${m(e.level)}"`;return`
      <button class="home-route-step is-${m(e.status)}" type="button" ${t} aria-label="${m((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function Ww(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${m(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${m(e.level||"")}" data-lesson-id="${m(e.lessonId||"")}"`:`data-action="${m(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function $p(){const e=rr();return{title:hp(e),summary:Aw(e)}}function B(e){const t=String(e);a.progress.cards[t]||(a.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=Ue(a.progress.cards[t]);return n.successRate=kh(n),Number.isFinite(Number(n.srsStep))?n.srsStep=de(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=Ol(n),a.progress.cards[t]=n,n}function Qr(e,t="seen"){if(!a.progress||!e?.id)return!1;me();const n=new Date().toISOString();let s=!1;const r=String(e.id);return a.progress.seenCards[r]||(a.progress.seenCards[r]=n,s=!0),e.kanji&&!a.progress.seenKanji[e.kanji]&&(a.progress.seenKanji[e.kanji]={at:n,cardId:r,source:t,jlpt:e.jlpt||""},s=!0),s}function Yr(e,t="seen"){Qr(e,t)&&T()}const Kt=[5/1440,1/24,12/24,1,2,4],Dl=1;function Ol(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<Kt.length;s+=1)if(t<=Kt[s]*1.08)return s;const n=Kt[Kt.length-1];return Kt.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function Xw(e){const t=Math.trunc(e);return t<0?0:t<Kt.length?Kt[t]||Kt[0]:Kt[Kt.length-1]*2**(t-(Kt.length-1))}function Qw(e,t,n=Dl){const s=Array.isArray(e)?e.slice():[],r=Array.isArray(t)?t.slice():[],o=[],c=Math.max(1,Math.trunc(Number(n)||Dl));let l=0,d=0,u=0;for(;l<s.length||d<r.length;){if(u>=c&&d<r.length){o.push(r[d++]),u=0;continue}if(l<s.length){o.push(s[l++]),u+=1;continue}if(d<r.length){o.push(r[d++]),u=0;continue}break}return o}function Yw(e,t){const n=Ol(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Zw(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function Bi(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),r=Number(e.correct||0);return t+n*4+s*2-r*.05}function on(e,t,n="jlpt_lesson"){if(!t)return!1;const r=Bl(e,t).reduce((o,c)=>Qr(c,n)||o,!1);return r&&T(),r}function Bl(e,t){const n=String(e||"").toUpperCase();return n==="N5"?dn(t):n==="N4"?mr(t):n==="N3"?hr(t):n==="N2"?wr(t):(t?.kanji||[]).map(s=>a.cards.find(r=>r.kanji===s&&String(r.jlpt||"").toUpperCase()===n)).filter(Boolean)}function jp(e){const t=a.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function Sp(){return me(),a.progress.evaRoomQuiz}function Cp(){const e=[a.cards||[],typeof Jt=="function"?Jt():[],typeof tt=="function"?tt():[],typeof nt=="function"?nt():[],typeof st=="function"?st():[]];return Np(e.flat().filter(Boolean))}function eb(){if(!a.progress)return[];me();const e=new Set(Object.keys(a.progress.seenCards||{})),t=new Set(Object.keys(a.progress.seenKanji||{})),n=new Set(Object.keys(a.progress.lessonCompletions||{})),s=tb(),r=Cp().filter(o=>{if(!o?.id||!o.kanji||!Xe(o,"ru")||!Xe(o,"en"))return!1;const c=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||jp(o)||n.has(o.lessonId)||s.has(`${c}:${o.kanji}`)||s.has(o.kanji)});return Np(r)}function tb(){const e=new Set,t=(n,s)=>{if(!s)return;const r=String(n||"").toUpperCase();e.add(String(s)),r&&e.add(`${r}:${s}`)};return zl().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(r=>t(n.level,r)),Object.keys(s.completedLessons||{}).forEach(r=>{(n.lessonById(r)?.kanji||[]).forEach(c=>t(n.level,c))})}),e}function zl(){return[{level:"N5",course:se,lessonById:Ut,markStudied:gr,markDifficult:ma},{level:"N4",course:X,lessonById:Vn,markStudied:fr,markDifficult:va},{level:"N3",course:V,lessonById:Xn,markStudied:vr,markDifficult:ba},{level:"N2",course:W,lessonById:Yn,markStudied:br,markDifficult:ya}]}function Np(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Xe(n,"ru")}:${Xe(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function nb(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function sb(e){if(e.target.classList?.contains("detail-backdrop")){F("menu_close"),a.detailCardId=null,ue();return}if(e.target.classList?.contains("final-test-backdrop")){a.finalTestModal=null,a.finalTestBusy=!1,ue();return}if(e.target.classList?.contains("changelog-backdrop")){pl();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(a.navMenu&&!t&&!e.target.closest("[data-action]")){a.navMenu=null,ue();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,r=n.dataset.id;if(nb(n),!!Sw(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-ou<280)){if(s&&s.endsWith("-complete-lesson")){const c=`${s.split("-")[0]}:${r||""}`;if($e.has(c)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(Ul(s),requestAnimationFrame(()=>window.setTimeout(()=>ib(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Gi(o)){Pb(o);return}a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),On(o,n.dataset.focus||null,n.dataset.subroute||null,{afterFeedback:!0})}if(s==="nav-menu-route"){const o=n.dataset.route;a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),On(o,n.dataset.focus||null,n.dataset.subroute||null,{afterFeedback:!0})}if(s==="share-page"&&ph(n.dataset.shareSection||a.route,eL(n)).catch(()=>J(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&vh(!wd()),s==="notification-center"){if(a.notificationPromptVisible){jh();return}(a.notificationPrompt?.docked||Eo("header"))&&Mo("header");return}if(s==="repeat-onboarding"){Vl({force:!0});return}if(s==="onboarding-next"){zp();return}if(s==="onboarding-prev"){Up();return}if(s==="onboarding-continue"){Tb();return}if(s==="onboarding-close"||s==="onboarding-skip"){sa({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){gf(n.dataset.speechKey||"");return}if(s==="contact-email"&&(a.navMenu=null,a.contactModal=!0,ue()),s==="copy-contact-email"&&fh(St).then(o=>{J(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(a.contactModal=!1,ue()),s==="close-changelog"){pl();return}if(s==="close-pwa-install-help"&&(a.pwaInstallHelpVisible=!1,ue()),s==="close-nav-menu"&&(a.navMenu=null,ue()),s==="close-final-test-modal"&&(a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,ue()),s==="final-test-focus-missing"){const o=n.dataset.focus||a.finalTestModal?.focusSelector||null;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=o,ue()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||a.finalTestModal?.level||"N5").toUpperCase();o==="N4"?im(!0):o==="N3"?wm(!0):o==="N2"?Im(!0):o==="N1"?Bm(!0):Vg(!0)}if(s==="final-test-next-level"){const o=D(n.dataset.nextLevel||""),c=String(n.dataset.nextLesson||"");if(!o||!c)return;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,Zr(o,c);return}if(s==="scroll-page-edge"&&((n.dataset.direction||Wl())==="up"?Ls():Rb()),s==="theme"&&SL(),s==="language"&&CL(),s==="sound"&&hh(),s==="toggle-ux-sound"&&NL(),s==="export"&&Zx(),s==="apk-download"&&fe("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&lu.click(),s==="reset"&&jL(),s==="share-achievement"&&hL().catch(()=>J(_("shareFallback"))),s==="pwa-install"&&QL(),s==="pwa-later"&&Nd(),s==="notification-allow"&&nA(),s==="notification-later"&&Ko(),s==="mascot-click"&&DN(n.dataset.character),s==="eva-click"&&yf(),s==="eva-dialogue-skip"&&ab(n),s==="dictionary-favorites-tab"&&(a.filters.favorites=n.dataset.favorites||"all",a.dictionaryVisibleCount=Or,ue()),s==="set-learn-jlpt"){a.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=ac();wg(o),a.activeCardId=null,ue()}if(s==="dictionary-load-more"&&(a.dictionaryVisibleCount+=pv,ue()),s==="toggle-favorite"&&Sx(r),s==="eva-room-choice"&&Xk(n),s==="eva-question-answer"&&Bk(n),s==="eva-room-reset"&&Yk(),s==="toggle-eva-autonomy"&&oy(),s==="cycle-eva-autonomy"&&ly(),s==="eva-autonomy-room-mode"&&cy(),s==="eva-autonomy-outfit-mode"&&dy(),s==="eva-autonomy-next"&&hg(),s==="eva-autonomy-clear"&&uy(),s==="eva-room-shop-open"&&(a.evaRoomShopOpen=!0,be("shop_opened"),ue()),s==="eva-room-shop-close"&&(a.evaRoomShopOpen=!1,ue()),s==="eva-bg-buy"&&Zk(r),s==="eva-bg-select"&&ey(r),s==="eva-sprite-buy"&&ty(r),s==="eva-sprite-select"&&ny(r),s==="shop-category"&&(a.shopFilters.category=n.dataset.category||"all",ue()),s==="shop-filter"&&(a.shopFilters.view=n.dataset.filter||"all",ue()),s==="shop-sort"&&(a.shopFilters.sort=n.dataset.sort||"featured",ue()),s==="shop-buy"&&to(r),s==="shop-select"&&no(r),s==="shop-clear-effect"&&fg(r),s==="shop-clear-item"&&ay(r),s==="clear-writing"&&XN(),s==="undo-writing"&&QN(),s==="check-writing"&&YN(!0),s==="replay-writing"&&Nf(),s==="play-writing-step"&&xf(),s==="writing-step-prev"&&Lf(-1),s==="writing-step-next"&&Lf(1),s==="select-writing-step"&&Af(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&bC(Number(n.dataset.index)),s==="undo-sentence-tile"&&kC(),s==="clear-sentence"&&yC(),s==="check-sentence"&&$C(),s==="next-sentence"&&SC(),s==="reading-review-tile"&&B$(Number(n.dataset.index)),s==="reading-review-undo"&&z$(),s==="reading-review-clear"&&U$(),s==="reading-review-check"&&Jg(),s==="reading-review-answer"&&O$(n),s==="toggle-reading-translation"&&J$(),s==="add-custom-sentence"&&rC(),s==="edit-custom-sentence"&&iC(n.dataset.id),s==="delete-custom-sentence"&&oC(n.dataset.id),s==="cancel-custom-sentence-edit"&&lC(),s==="insert-jlpt-tile"&&Vx(Number(n.dataset.index)),s==="undo-jlpt-tile"&&Wx(),s==="clear-jlpt-practice"&&Xx(),s==="check-jlpt-practice"&&Qx(),s==="next-jlpt-practice"&&Yx(),s==="kana-submit-exercise"&&Qy(n),s==="kana-writing-done"&&Yy(n.dataset.course||"",n.dataset.lesson||""),s==="kana-srs"&&t$(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="kana-lesson-card"&&e$(n.dataset.course||"",n.dataset.lesson||"",n.dataset.kana||"",n.dataset.rating||"remember"),s==="kana-lesson-card-reset"&&Zy(n.dataset.course||"",n.dataset.lesson||""),s==="kana-toggle-romaji"&&s$(),s==="play-kana-tts"&&r$(n.dataset.text||""),s==="kana-download-pdf"&&fe("kana_pdf_download",{course:n.dataset.course||""}),s==="retry-jlpt-course-data"&&Kv(n.dataset.level||a.activeTextbookLevel||""),s==="n5-open-lesson"&&X$(r),s==="n5-overview"&&Q$(),s==="n5-review"&&Y$(n.dataset.mode||null),s==="n5-answer"&&G$(n),s==="n5-check-input"&&q$(r),s==="n5-srs"&&qg(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&V$(r),s==="n5-complete-lesson"&&W$(r),s==="jlpt-lesson-answer"&&H$(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||r,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&tj(n),s==="n5-final-submit"&&Vg(),s==="n5-final-reset"&&nj(),s==="n4-open-lesson"&&xj(r),s==="n4-overview"&&Lj(),s==="n4-review"&&Aj(n.dataset.mode||null),s==="n4-kanji"&&Ij(),s==="n4-grammar"&&Tj(),s==="n4-reading"&&Rj(),s==="n4-listening"&&_j(),s==="n4-final"&&Pj(),s==="n4-answer"&&kj(n),s==="n4-check-input"&&yj(r),s==="n4-srs"&&sm(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&$j(r),s==="n4-complete-lesson"&&jj(r),s==="n4-grammar-complete"&&Sj(r,n.dataset.value||""),s==="n4-reading-complete"&&Cj(r,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&Nj(r,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&Kj(n),s==="n4-final-submit"&&im(),s==="n4-final-reset"&&Fj(),s==="n3-open-lesson"&&dS(r),s==="n3-overview"&&uS(),s==="n3-review"&&pS(n.dataset.mode||null),s==="n3-kanji"&&gS(),s==="n3-grammar"&&mS(),s==="n3-reading"&&fS(),s==="n3-listening"&&hS(),s==="n3-final"&&vS(),s==="n3-answer"&&sS(n),s==="n3-check-input"&&rS(r),s==="n3-srs"&&fm(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&aS(r),s==="n3-complete-lesson"&&iS(r),s==="n3-grammar-complete"&&oS(r,n.dataset.value||""),s==="n3-reading-complete"&&lS(r,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&cS(r,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&kS(n),s==="n3-final-submit"&&wm(),s==="n3-final-reset"&&yS(),s==="n2-open-lesson"&&HS(r),s==="n2-overview"&&VS(),s==="n2-review"&&WS(n.dataset.mode||null),s==="n2-kanji"&&XS(),s==="n2-grammar"&&QS(),s==="n2-reading"&&YS(),s==="n2-listening"&&ZS(),s==="n2-final"&&e0(),s==="n2-answer"&&OS(n),s==="n2-check-input"&&BS(r),s==="n2-srs"&&xm(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&zS(r),s==="n2-complete-lesson"&&US(r),s==="n2-grammar-complete"&&JS(r,n.dataset.value||""),s==="n2-reading-complete"&&GS(r,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&qS(r,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&s0(n),s==="n2-final-submit"&&Im(),s==="n2-final-reset"&&r0(),s==="n1-open-lesson"&&T0(r),s==="n1-overview"&&R0(),s==="n1-review"&&_0(n.dataset.mode||null),s==="n1-kanji"&&P0(),s==="n1-grammar"&&E0(),s==="n1-reading"&&M0(),s==="n1-listening"&&K0(),s==="n1-final"&&F0(),s==="n1-answer"&&S0(n),s==="n1-check-input"&&C0(r),s==="n1-srs"&&Fm(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&N0(r),s==="n1-complete-lesson"&&x0(r),s==="n1-grammar-complete"&&L0(r,n.dataset.value||""),s==="n1-reading-complete"&&A0(r,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&I0(r,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&B0(n),s==="n1-final-submit"&&Bm(),s==="n1-final-reset"&&z0(),s==="review-exercise-next"){const o=he();Fs(),pe({scrollPolicy:re.TOP,viewportSnapshot:o});return}if(s==="play-kanji-audio"){const o=oe(r)||oe(a.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?ih(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:(c={})=>ah(o,c)}):rh(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(In(o)){if(mn("jlpt-level",{level:o}),!Tt(o)){a.activeTextbookLevel=o,a.activeJlptLesson=o,On("textbooks",null,o),J(Tn(o));return}a.activeJlptLesson=o,On("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(mn("jlpt-start",{level:n.dataset.jlpt||fn()}),Zr(n.dataset.jlpt||fn())),s==="social-link"&&fe(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:a.route,source:n.dataset.network||"social"}),s==="play-audio"&&Fx(n.dataset.audio,n.dataset.label),s==="close-reward"){const o=he();a.rewardModal=a.rewardQueue.shift()||null,a.rewardModal&&jf(a.rewardModal),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:o})}if(s==="set-goal"&&(a.progress.settings.dailyGoal=Number(n.dataset.goal),T(),J(`${_("dailyGoal")}: ${a.progress.settings.dailyGoal}`),P()),s==="buy-shop"&&to(r),s==="start-due"&&(On("textbooks"),Wr("start-due-toast",()=>{bt()||J(ze("eva","welcome"))})),s==="home-lesson"){const o=D(n.dataset.level||"")||fn(),c=String(n.dataset.lessonId||"");Zr(o,c)}if(s==="home-review"&&On("review"),s==="home-primary"&&(mn("home-primary"),Wr("home-primary-navigation",by)),s==="learning-path-node"&&(mn("learning-path",{lessonId:n.dataset.node||r}),Wr("learning-path-node-navigation",()=>bg(n.dataset.node||r))),s==="learning-path-back"&&Ns(),s==="learning-path-choice"){const o=String(n.dataset.node||""),c=String(n.dataset.step||""),l=String(n.dataset.value||""),d=ia(o),u=d.steps.find(f=>f.id===c);if(!u||u.kind!=="quiz"||d.session.answers?.[c])return;d.session.answers[c]={selected:l,correct:l===u.answer,at:new Date().toISOString()},l===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],c])],d.session.updatedAt=new Date().toISOString(),T(),P()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||a.activeLearnNodeId||""),c=ia(o);if(!c.steps.length)return;const l=c.steps[c.session.stepIndex];if(l?.kind==="quiz"&&!c.session.answers?.[l.id])return;c.session.stepIndex=Math.min(c.session.stepIndex+1,c.steps.length),c.session.updatedAt=new Date().toISOString(),T(),P()}if(s==="learning-path-retry"){const o=String(n.dataset.node||a.activeLearnNodeId||""),l=(ia(o).session.mistakes||[]).slice();Dn().activeSession=Sl({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:l,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),T(),P()}if(s==="learning-path-continue"){const o=String(n.dataset.node||a.activeLearnNodeId||""),c=ia(o);Sy(o,c.session,c.steps),Ns();return}if(s==="start-lesson"||s==="select-lesson"){const o=a.lessons.find(c=>c.id===r);if(!o||!We(o)){J(`${_("unlockedAt")} ${No(o)}`);return}if(a.activeLessonId=r,a.activeCardId=null,a.revealed=!1,kt(),s==="start-lesson"){mn("legacy-lesson",{level:o.jlpt||"",lessonId:r}),be("lesson_start",{lessonId:r,jlpt:o.jlpt});const c=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(c)?Zr(c,o.id):Ns(bn,o.id)}else P()}if(s==="show-answer"&&(Yr(oe(a.activeCardId),"show_answer"),a.revealed=!0,kt(),Ve()),s==="check-reading"){const o=document.getElementById(`readingCheck-${r||a.activeCardId}`);o&&(a.readingCheck.value=o.value,a.readingCheck.cardId=r||a.activeCardId),Hf()}if(s==="rate"&&_N(n.dataset.rating),s==="rate-kana-review"&&hf(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="open-card"&&(Yr(oe(r),"card_details"),a.detailCardId=r,P()),s==="open-kanji-page"&&db(r),s==="close-detail"&&(a.detailCardId=null,ue()),s==="study-card"){const o=oe(r);if(!o)return;Yr(o,"study_card"),a.activeLessonId=o.lessonId,a.activeCardId=o.id,a.revealed=!1,kt(o.id),a.detailCardId=null,Ns(bn,o.lessonId)}}}function rb(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;ou=Date.now(),e.preventDefault(),Ul(n),n==="eva-click"&&yf(),n==="eva-autonomy-next"&&hg()}function Ul(e="activity"){a.evaRuntime&&(a.evaRuntime.lastPlayerActionAt=Date.now(),a.evaRuntime.memory=js(rn(),a.evaRuntime.memory||{}),a.evaRuntime.memory.lastRoute=a.route,e.startsWith("eva")&&(a.evaRuntime.memory.lastInteractionDate=ce()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(a.evaRuntime.lastPlayerActionAt=Date.now()))}function ab(e){if(!a.evaRuntime)return;const t=e?.dataset?.lineId||ne().currentLine?.id||"";!t||a.evaRuntime.textRevealSkippedLineId===t||(a.evaRuntime.textRevealSkippedLineId=t,Ss(),P())}function ib(e,t){if(!(!e||t?.disabled)&&!ob(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){F("menu_open");return}if(e==="eva-room-shop-close"){F("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Gi(t.dataset.route)){F(a.navMenu===t.dataset.route?"menu_close":"menu_open");return}F("tab_switch");return}if(e==="nav-menu-route"){F("tab_switch");return}if(e==="close-nav-menu"){F("menu_close");return}if(e==="toggle-header-socials"){F(wd()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){F("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){F("menu_close");return}if(e==="notification-center"){F("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){F("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){F("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){F("notification_soft");return}t?.matches("button, .btn, [role='button']")&&F("button_click"),e!=="toggle-header-socials"&&vh(!1)}}function ob(e,t){return["learn","review"].includes(a.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function xp(e){var d;Ul("input");const t=e.target.closest("[data-ux-volume]");if(t){TL(Number(t.value)/100);const u=document.querySelector("[data-ux-volume-label]");u&&(u.textContent=`${Math.round(Ro()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){a.readingCheck={cardId:n.dataset.id||a.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const u=De(),f=s.dataset.sentenceDraft;u.customDraft=Di(u.customDraft||{}),f&&Object.prototype.hasOwnProperty.call(u.customDraft,f)&&(u.customDraft[f]=s.value,u.customMessage="",u.customStatus="",T());return}const r=e.target.closest("[data-kana-exercise-form] input");if(r){const u=r.closest("[data-kana-exercise-form]"),f=uc(u?.dataset.course||"",u?.dataset.owner||"",u?.dataset.ownerType||"",u?.dataset.exercise||""),h=String(r.name||"").replace(/^kana-/,"");f&&h&&((d=a.kanaExerciseDrafts)[f]||(d[f]={}),a.kanaExerciseDrafts[f][h]=r.value);return}const o=e.target.closest("[data-filter]");if(!o)return;const c=o.dataset.filter,l=o.selectionStart;a.filters[c]=o.value,a.dictionaryVisibleCount=Or,P(),requestAnimationFrame(()=>{const u=document.getElementById(o.id);u&&(u.focus(),typeof l=="number"&&"setSelectionRange"in u&&u.setSelectionRange(l,l))})}function lb(e){if(Ab(e)||cb(e))return;if(e.key==="Escape"&&(a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal||a.navMenu)){a.detailCardId=null,a.rewardModal=null,a.finalTestModal=null,a.contactModal=!1,a.pwaInstallHelpVisible=!1,a.navMenu=null,a.changelogModal?pl():P();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),a.readingCheck.value=t.value,a.readingCheck.cardId=t.dataset.id||a.activeCardId,Hf())}function cb(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(ji=`${ji}${e.key.toLowerCase()}`.slice(-ae.length),ji!==ae)?!1:(ji="",Lp(5e3),!0)}function Lp(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return a.progress?(H(0,t,"cheat:moon_farm"),Y(),T(),F("moon_fragment_gain"),J(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),P(),a.progress.moonFragments):0}function Ns(e=wn,t=null,n=null){a.route="learn",a.activeLearnView=e,a.activeLearnNodeId=e===en&&String(t||"")||null,a.activeLearnLegacyLessonId=e===bn&&String(t||"")||null;const s=e===en&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===bn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),a.activeTextbookLevel=null,a.activeTextbookSubroute=null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=n,a.evaRoomShopOpen=!1,kt(),Ft(),ue()}function On(e,t=null,n=null,s={}){const r=++ki,o=()=>{r===ki&&ea(e,t,n)};if(s?.afterFeedback){kn&&(cancelAnimationFrame(kn),kn=0),requestAnimationFrame(()=>window.setTimeout(o,0));return}o()}function Zr(e,t=""){++ki===ki&&qx(e,t)}function ea(e,t=null,n=null){if(e==="learn"){Ns(wn,null,t);return}if(!qh(e)){const r=String(e||"");Hs(ve("hash","unknown-route",r,r?[r]:[])),jt(r?`#${encodeURIComponent(r)}`:"#not-found"),a.pendingFocus=t,a.navMenu=null,kt(),Ft(),Ve();return}const s=a.route;if(a.route=e,a.route!=="home"&&qp(),a.routeMatch=null,a.routeNotFound=null,s!==a.route&&(s==="review"||a.route==="review")&&(a.reviewSession=null),a.route==="textbooks"){const r=n?String(n):"",o=D(r),c=we(r)?r.toLowerCase():"",l=o||c;if(r&&!l){Hs(ve("hash","invalid-parameter",`textbooks/${r}`,["textbooks",r])),jt(`#textbooks/${encodeURIComponent(r)}`),a.pendingFocus=t,Ve();return}a.activeTextbookLevel=l||null,a.activeTextbookSubroute=null}else if(a.route==="jlpt-lesson"){const r=n?String(n).toUpperCase():a.activeJlptLesson||vA()||"";if(r&&!D(r)){Hs(ve("hash","invalid-parameter",`jlpt-lesson/${r}`,["jlpt-lesson",r])),jt(`#jlpt-lesson/${encodeURIComponent(r)}`),a.pendingFocus=t,Ve();return}a.activeJlptLesson=r||null}else a.activeTextbookLevel=null,a.activeTextbookSubroute=null;if(a.route!=="review"&&Fs(),a.route==="textbooks")jt(Ih(a.activeTextbookLevel||"",a.activeTextbookSubroute||""));else{const r=a.route==="learn"?"#learn":a.route==="jlpt-lesson"&&a.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(a.activeJlptLesson)}`:`#${a.route}`;jt(r)}a.route!=="kanji"&&(a.kanjiPageId=null),a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=t,a.route!=="eva-room"&&(a.evaRoomShopOpen=!1),kt(),Ft(),Ve(),ys(a.route)&&Ci({route:a.route,delay:ml(a.route)}),a.route==="eva-room"&&be("room_opened")}function db(e){const t=oe(e);if(!t)return;a.route="kanji",a.kanjiPageId=t.id,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.evaRoomShopOpen=!1,kt();const n=`#kanji/${encodeURIComponent(t.id)}`;jt(n),Ft(),Ve()}function ub(){return a.routeMatch||Kr(qs())}function pb(){const e=ub();if(!tu){J1(e,a),tu=!0,Ap(e);return}G1(e,a).sent&&Ap(e)}function Ap(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){fe("review_open",{route:"review"});return}if(e.route==="kanji"){fe("kanji_open",{route:"kanji",cardId:t.cardId||a.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){fe("lesson_open",{route:"jlpt-lesson",level:t.level||a.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){fe("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){fe("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}gb(n)&&fe("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}if(e.route==="textbooks"&&t.course){const n=String(t.subroute||"");n?n==="final"||n==="final-test"?fe("kana_final_test_start",{route:"textbooks",course:t.course}):/^lesson-\d+$/i.test(n)&&fe("kana_lesson_open",{route:"textbooks",course:t.course,lessonId:n}):fe("kana_course_open",{route:"textbooks",course:t.course})}}function gb(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function Ip(){const e=vv.begin(a.route);Qe=!0,Tp(),cx();try{qb(),hb(),pb();let t="";if(a.route===Dd&&(t=ta(a.routeNotFound)),a.route==="home"&&(t=Wb()),a.route==="download"&&(t=Bb()),a.route==="about"&&(t=Ub()),a.route==="learn"&&(t=wy(),a.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(od)),a.route==="review"&&(t=W0(),a.pendingFocus!=="sentence-practice"&&requestAnimationFrame(od)),a.route==="dictionary"&&(t=GC()),a.route==="kanji"&&(t=XC()),a.route==="writing"&&(t=gN(),requestAnimationFrame(qN)),a.route==="stats"&&(t=vN(),requestAnimationFrame(Sf)),a.route==="achievements"&&(t=kN()),a.route==="eva-room"&&(t=tk()),a.route==="jlpt-lesson"&&(t=xy()),a.route==="textbooks"&&(t=Ly()),t||(t=ta(ve("hash","unknown-route",String(a.route||""),a.route?[String(a.route)]:[]))),!e.isCurrent())return;Pn.innerHTML=`${t}${Fb()}${vb()}`,document.body.classList.toggle("modal-open",!!(a.detailCardId||ff()||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal)),TN(),requestAnimationFrame(()=>{Gb(),Xl(),Nb()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${a.route} build=${I}`,t?.stack||t),Pn.innerHTML=zi(t))}finally{Qe=!1,Tp()}}function Tp(){Ur=null,pi=null,gi=null,mi=null,fi=null,hi=null}function ue(){kn||(kn=requestAnimationFrame(()=>{kn=0,Ip()}))}function Ve(){kn&&(cancelAnimationFrame(kn),kn=0),Ip()}function xs(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function mb(e=null){if(typeof window>"u"){Ve();return}vi=!0;const t=e||he(),n=Number(t?.scrollX||0),s=Number(t?.scrollY||0);mp(),Ve(),xs(n,s),requestAnimationFrame(()=>{xs(n,s),requestAnimationFrame(()=>xs(n,s))}),window.setTimeout(()=>xs(n,s),120),window.setTimeout(()=>xs(n,s),320),window.setTimeout(()=>xs(n,s),640),window.setTimeout(()=>xs(n,s),840)}function P(){ue()}function zi(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${m(a.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function ta(e=a.routeNotFound){fb();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},r=e?.raw||location.pathname||location.hash||"";return`
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
    `}function fb(){document.title=(p()==="ru","404 — Flash Kanji"),Rp("robots","noindex, follow"),_p("/404.html")}function hb(){a.route!==Dd&&(document.title=kv,Rp("robots","index, follow"),_p("/"))}function Rp(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function _p(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function vb(){const e=`${Jb()}${fN()}${jN()}${LC()}${SN()}${CN()}${NN()}${xN()}${LN()}${_b()}`;return e?`<div class="modal-layer">${e}</div>`:""}function Pp(){return je?.isConnected?je:document.body?(je||(je=document.createElement("div"),je.className="flash-kanji-onboarding-root",je.setAttribute("role","presentation"),je.setAttribute("aria-hidden","false")),je.isConnected||document.body.appendChild(je),je):null}const Jl=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Ui={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Ep(){try{return localStorage.getItem(Jd)==="true"}catch{return!1}}function wb(){try{return localStorage.getItem(qd)||""}catch{return""}}function Ji(e){try{localStorage.setItem(qd,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function Gl(e=a.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function bb(e=!1){const t=wb();return t==="returning"||t==="completed"?t:Ep()?(Ji("completed"),"completed"):e?(Ji("returning"),"returning"):(Ji("new"),"new")}function Mp(){return!Ep()}function kb(){try{localStorage.getItem(Gd)==="true"&&localStorage.removeItem(Gd)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function yb(){try{localStorage.setItem(Jd,"true"),Ji("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function Kp(){return Et}function na(){return Jl.length}function ql(){return Jl[de(nn,0,na()-1)]||Jl[0]}function $b(e=ql()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function jb(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Fp(e=ql()){for(const t of $b(e)){const s=Array.from(document.querySelectorAll(t)).find(r=>jb(r));if(s)return s}return null}function Dp(e,t=null){return typeof e=="function"?Dp(e(t),t):w(e||{ru:"",en:""})}function Sb(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Cb(){return!(Et||!a.progress||!a.i18n||!a.lessons.length||!document.body||document.visibilityState!=="visible"||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.navMenu)}function Hl(e=!1,t=dv){clearTimeout(Zs),!(!e&&!Mp())&&(Zs=window.setTimeout(()=>{Zs=0,Vl({force:e})},t))}function Vl(e={}){const t=!!e.force;let n=!1;if(Et){if(!t)return!0;sa({completed:!1,silent:!0})}if(!t&&!Mp())return!1;if(!Cb())return Hl(t,Hd),!1;clearTimeout(Zs);try{el=document.activeElement instanceof HTMLElement?document.activeElement:null,Et=!0,Ie="step",nn=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(r){console.warn("Could not make the app shell inert.",r)}}return Pp(),ar(),Op(),n=!0,window.addEventListener("scroll",Bn,{passive:!0}),window.addEventListener("resize",Bn),window.addEventListener("orientationchange",Bn),Bn(),Bp(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),sa({completed:!1,silent:!0}),n||Hl(t,Hd),!1}}function sa(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(Zs),Zs=0,cancelAnimationFrame(Jr),Jr=0,window.removeEventListener("scroll",Bn),window.removeEventListener("resize",Bn),window.removeEventListener("orientationchange",Bn),sn&&sn.classList.remove("is-onboarding-target"),sn=null,Et=!1,Ie="step",nn=0,je&&(je.remove(),je=null,ct=null,Ee=null),document.body.classList.remove("onboarding-open");const r=document.querySelector(".app-shell");if(r){r.removeAttribute("aria-hidden");try{r.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&yb(),n||(s?ea(s):P()),el?.focus&&requestAnimationFrame(()=>{try{el.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function ar(){if(!Pp())return;const e=Ie==="final"?null:ql(),t=Ie==="final"?null:Fp(e),n=Ie==="final"?Ui.title:e.title,s=Ie==="final"?Ui.text:Dp(e.text,t),r=Ie==="final"?p()==="ru"?"Готово":"Done":`${nn+1} ${p()==="ru"?"из":"of"} ${na()}`,o=w(n),c=w(s),l=vo("eva","calm","welcome"),d=na();je.classList.toggle("is-final",Ie==="final"),je.classList.toggle("has-target",!!t),je.dataset.view=Ie;const u=Ie==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(w(Ui.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(w(Ui.close))}</button>
      `:nn===0?`
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
    `,ct=Me("[data-onboarding-spotlight]",je),Ee=Me(".flash-kanji-onboarding-dialog",je),sn&&sn!==t&&sn.classList.remove("is-onboarding-target"),sn=t||null,sn&&sn.classList.add("is-onboarding-target"),Ee&&(Ee.dataset.totalSteps=String(d)),Bn()}function Bn(){Et&&(Jr||(Jr=requestAnimationFrame(()=>{Jr=0,Op()})))}function Op(){if(!Et||!je||!Ee)return;const e=Ie==="final"?null:sn||Fp();Sb();const t=window.innerWidth,n=window.innerHeight;if(Ee.style.maxWidth=`${Math.min(uv,Math.max(280,t-16))}px`,Ee.style.maxHeight=`${Math.max(180,n-24)}px`,Ee.style.left="50%",Ee.style.top="50%",Ee.style.transform="translate(-50%, -50%)",Ee.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&ct?(ct.hidden=!1,ct.style.left=`${Math.round(s.left-12)}px`,ct.style.top=`${Math.round(s.top-12)}px`,ct.style.width=`${Math.round(s.width+12*2)}px`,ct.style.height=`${Math.round(s.height+12*2)}px`,ct.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):ct&&(ct.hidden=!0)}else ct&&(ct.hidden=!0);je.style.visibility="visible",Bp()}function Nb(){Et&&ar()}function Bp(){if(!Ee)return;const e=Ee.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Ee.querySelectorAll("button"),n=e||t[0]||Ee;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function xb(){return Ee?Array.from(Ee.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function Lb(e=1){const t=xb();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),r=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[r]?.focus?.()}function Ab(e){return Et?e.key==="Tab"?(e.preventDefault(),Lb(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),sa({completed:Ie==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),zp(),!0):e.key==="ArrowLeft"?(e.preventDefault(),Up(),!0):!1:!1}function zp(){if(!Et)return;const e=na()-1;if(Ie!=="final"){if(nn<e){nn+=1,ar();return}Ie="final",ar()}}function Up(){if(Et){if(Ie==="final"){Ie="step",nn=na()-1,ar();return}nn>0&&(nn-=1,ar())}}function Ib(e=null){sa({completed:!0,routeTo:e})}function Tb(){Ib("textbooks")}function Ls(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Ft(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>Ls()))}function Rb(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function Jp(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function Wl(){return Jp()?window.scrollY>32?"up":"down":null}function _b(){const e=Wl()||"down",t=Jp()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",r=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${m(s)}" title="${m(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(r)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function Xl(){const e=Me('[data-action="scroll-page-edge"]');if(!e)return;const t=Wl();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const r=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",r),e.setAttribute("title",r)}function Gi(e){return e!=="review"&&Gp(e).length>1}function Pb(e){if(!Gi(e)){ea(e);return}a.navMenu=a.navMenu===e?null:e,ue()}function Gp(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:ic(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"▥",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"◈",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"▥",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function Ql(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":_(e)}function Eb(){return["home","textbooks","review","dictionary","download","stats","about"]}function Mb(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function Kb(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${m(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(Mb(e))}</span>
          <span>${i(Ql(e))}</span>
        </button>
      </li>
    `}function Fb(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",r=e?"Соцсети":"Social";return`
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
                ${Eb().map(o=>Kb(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(r)}</h2>
              <div class="site-footer-socials" aria-label="${m(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${m(lt.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${uh("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${m(lt.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${uh("instagram")}</span>
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
    `}function Db(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function Ob(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function Bb(){const e=Db();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${m(rv)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${m(iv)}" alt="${m(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(Ob).join("")}
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
              <a class="btn ghost" href="${m(av)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function zb(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function Ub(){const e=zb();return`
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
    `}function Jb(){const e=Gp(a.navMenu);if(!e.length)return"";const t=a.navMenu,n=t?Ql(t):"";return`
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
    `}function Gb(){if(!a.pendingFocus)return;if(vi){vi=!1,a.pendingFocus=null;return}const e=a.pendingFocus;if(a.pendingFocus=null,e==="__scroll-top__"){Ft();return}const t={"lesson-card":".study-card, .daily-lesson-card","kana-character-card":"[data-section='kana-character-study-card']","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"auto",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function qb(){dl(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===a.route||n==="learn"&&a.route==="textbooks"||n==="stats"&&a.route==="achievements"||n==="dictionary"&&a.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Gi(n)),t.setAttribute("aria-expanded",a.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const r=t.querySelector("small");r&&n&&(r.textContent=Ql(n))});const e=Me('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),Hb(),hd(),IL(),vd(),Vb()}function Hb(){const e=p()==="ru",t={sidebar:e?"Основная навигация Flash Kanji":"Flash Kanji main navigation",sidebarNav:e?"Разделы Flash Kanji":"Flash Kanji sections",learning:e?"Обучение":"Learning",project:e?"Проект":"Project",progress:e?"Прогресс Flash Kanji":"Flash Kanji progress",profile:e?"Профиль Flash Kanji":"Flash Kanji profile",home:e?"На главную":"Go home",socialLinks:e?"Социальные ссылки":"Social links",reportBug:e?"Сообщить об ошибке":"Report a bug",theme:e?"Сменить тему":"Toggle theme",themeTitle:e?"Тема":"Theme",language:e?"Сменить язык":"Change language",languageTitle:e?"Язык":"Language",exportProgress:e?"Экспорт прогресса":"Export progress",exportTitle:e?"Экспорт":"Export",importProgress:e?"Импорт прогресса":"Import progress",importTitle:e?"Импорт":"Import",openProfile:e?"Открыть профиль":"Open profile",profileTitle:e?"Профиль":"Profile"},n=(s,r,o=r)=>{document.querySelectorAll(s).forEach(c=>{c.setAttribute("aria-label",r),c.setAttribute("title",o)})};document.querySelector(".app-sidebar")?.setAttribute("aria-label",t.sidebar),document.querySelector(".sidebar-nav")?.setAttribute("aria-label",t.sidebarNav),document.querySelector(".sidebar-progress")?.setAttribute("aria-label",t.progress),document.querySelector(".sidebar-user")?.setAttribute("aria-label",t.profile),document.querySelector("#headerSocialActions")?.setAttribute("aria-label",t.socialLinks),document.querySelectorAll("[data-nav-caption]").forEach(s=>{s.textContent=s.getAttribute("data-nav-caption")==="project"?t.project:t.learning}),n('.brand-mark[data-action="route"][data-route="home"]',t.home),n('[data-action="contact-email"]',t.reportBug),n('[data-action="theme"]',t.theme,t.themeTitle),n('[data-action="language"]',t.language,t.languageTitle),n('.icon-btn[data-action="export"]',t.exportProgress,t.exportTitle),n('.icon-btn[data-action="import"]',t.importProgress,t.importTitle),n('.sidebar-user-open[data-action="route"][data-route="stats"]',t.openProfile,t.profileTitle)}function Vb(){const e=Me("#sidebarProgressBar"),t=Me("#sidebarProgressLabel"),n=Me("#sidebarProgressPercent"),s=Me("#sidebarProgressNote"),r=Me("#sidebarUserAvatar"),o=Me("#sidebarUserTitle"),c=Me("#sidebarUserSubtitle"),l=Rn(),d=$p(),u=bt(),f=Math.max(1,Number(a.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(l.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${f}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${ge().reviewQueue} · ${d.title||ge().mapHint}`:`${d.title||ge().mapHint}${d.summary?` · ${d.summary}`:""}`),r&&(r.textContent=`Lv ${f}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),c&&(c.textContent=`${ge().level} ${f} · ${a.progress?.streak?.current||0} ${ge().streak}`)}function Wb(){a.n5Textbook?.items?.length||Kl();const e=Xb(),t=Ew(),n=bt(),s=$p(),r=Jw(),o=ge(),c=Rn(),l=Math.max(0,Math.min(100,Math.round(c.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:a.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:a.progress.moonFragments}],f=$h();return`
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
          ${r.map(Gw).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            ${Uw()}
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"Маршрут N5":"N5 route")}</span>
                  <h2>${i(d?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${i(d?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${qw().map(Vw).join("")}
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
                ${u.map(Ww).join("")}
              </div>
            </article>
            ${Xa()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(f.install)}</button>
                <p class="home-install-hint">${i(f.description)}${Mr()?` ${i(f.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Zb(e)}
          </aside>
        </section>
      </section>
    `}function Xb(){Qb();const e=ne(),t=e.currentLine||a.evaRuntime?.currentPhrase||null,n=eo(),s=w(Pr("eva").name||{ru:"Ева",en:"Eva"}),r=a.evaRuntime?.mood||e.mood||ln().mood,o=a.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",c=t?.state||a.evaRuntime?.presenceState||(n?"wait_choice":"speak"),l=Is(Sn(t?.sprite||a.evaRuntime?.currentSkin||As(),o));return{line:t,question:n,speaker:s,mood:r,emotion:o,presenceState:c,sprite:l}}function Qb(){me();const e=ne();return e.currentLine?.text||a.evaRuntime?.currentPhrase?.text?e.currentLine||a.evaRuntime.currentPhrase:(Array.isArray(a.evaAutonomyLines)&&a.evaAutonomyLines.length&&Yb(),{id:"home_eva_idle_fallback",category:"idle",text:{ru:"Я рядом. Начнём с одного спокойного шага.",en:"I'm here. Let's start with one calm step."},sprite:As(),emotion:"calm",state:"speak"})}function Yb(){er||(er=window.setTimeout(()=>{er=0,!(a.route!=="home"||ne().currentLine?.text||a.evaRuntime?.currentPhrase?.text)&&vg("auto",{allowQuestion:!1})&&P()},260))}function qp(){er&&(window.clearTimeout(er),er=0)}function Zb(e){const t=Jn(),n=Un(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",r=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=r.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${m(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${m(e.question?"question":"dialogue")}" data-eva-state="${m(e.presenceState)}" data-eva-mood="${m(e.mood)}" data-eva-emotion="${m(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${Wp(w(r.text||{ru:"Я здесь.",en:"I'm here."}),o)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${i(n.question)}</span>
              <strong>${i(w(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(c=>`
                  <button class="btn ${c.id===e.question.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${m(c.id)}">
                    ${i(w(c.text))}
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
          <img class="${m(Vp({line:e.line,isAutonomy:!0}))}" src="${m(e.sprite)}" alt="${m(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function Hp(e){return e.line?.state||a.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function Vp(e){const t=["eva-vn-sprite"],n=Hp(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(a.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function ek(e){const t=String(e||"").trim();return t?(t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function Wp(e,t=""){const n=ek(e),r=`eva-dialogue-text ${a.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((c,l)=>`<span class="eva-line-piece" style="--i:${l}">${i(c)}</span>`).join(" "):i(e);return`<p class="${r}" data-action="eva-dialogue-skip" data-line-id="${m(t)}">${o}</p>`}function tk(){me(),ir(),ca(),Y();const e=Wk(),t=e.node,n=cn()||e.bg||or(t.background),s=e.sprite||e.spriteSrc||Is(e.spriteId||Sn(t.sprite)),r=Jn(),o=Un(),c=Array.isArray(t.choices)?t.choices:[],l=Hp(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${vk()}
        ${mk(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${m(l)}" data-eva-state="${m(l)}" data-eva-mood="${m(e.mood||ln().mood)}" data-eva-emotion="${m(e.emotion||"calm")}" style="--eva-bg:${m(bd(n.file))}; --eva-bg-fallback:${m(bd("assets/bg/bg_study_hub.webp"))}">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${m(w(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${m(Vp(e))}" src="${m(s)}" alt="${m(w(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${sk(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(w(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(w(n.title||{}))}</span>
            </div>
            ${Wp(w(t.text||{}),d)}
            ${e.isAutonomy?fk(r):`
              <div class="eva-choice-grid">
                ${c.map((u,f)=>`
                  <button class="btn ${f===0?"primary":"ghost"}" type="button" data-action="eva-room-choice" data-index="${f}">
                    ${i(w(u.text||{}))}
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

        ${a.evaRoomShopOpen?nk():""}
      </section>
    `}function nk(){const e=Jn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${m(e.shop)}">
        ${Xp({closable:!0})}
      </aside>
    `}function sk(e={}){const t=rk(e);return t?`
      <div class="eva-room-decoration deco-${m(t.id)}" aria-label="${m(Dt(t))}">
        <img src="${m(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function rk(e={}){const t=e.decoration||ne().currentDecoration||a.customization?.selected?.decoration||a.customization?.selected?.frame,n=Se(t);return!n||n.type!=="decoration"||!Ot(n.id)?null:n}function Xp(e={}){const t=zn(),n=lk(),s=Ke().filter(r=>Ot(r.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${a.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${Ke().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${m(Jn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${m(t.categories)}">
          ${ak().map(r=>`
            <button class="${a.shopFilters.category===r.id?"is-active":""}" type="button" data-action="shop-category" data-category="${m(r.id)}">
              ${i(w({ru:r.title_ru,en:r.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${ik().map(r=>`
            <button class="${a.shopFilters.view===r.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${m(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${ok().map(r=>`
            <button class="${a.shopFilters.sort===r.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${m(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(ck).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${df({limit:6})}
        </div>
      </div>
    `}function ak(){return a.customizationCatalog?.categories?.length?a.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function ik(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function ok(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function lk(){const e=a.shopFilters.category||"all",t=a.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=Ke().filter(r=>e==="all"||r.type===e);return t==="available"&&(s=s.filter(r=>mg(r)==="available")),t==="owned"&&(s=s.filter(r=>Ot(r.id))),t==="new"&&(s=s.filter(r=>!a.customization?.seen?.includes(r.id))),a.shopFilters.sort==="price"&&(s=[...s].sort((r,o)=>r.price-o.price)),a.shopFilters.sort==="rarity"&&(s=[...s].sort((r,o)=>(n[o.rarity]||0)-(n[r.rarity]||0)||r.price-o.price)),s}function ck(e){const t=mg(e),n=zn(),s=n.status[t]||t,r=iy(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${m(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${m(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${m(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${m(e.type)} is-${m(t)} rarity-${m(e.rarity)}" data-item-id="${m(e.id)}" data-shop-status="${m(t)}">
        <div class="custom-shop-preview">
          <img src="${m(uk(e))}" alt="${m(Dt(e))}" loading="lazy" onerror="this.onerror=null;this.src='assets/logo.webp';this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(pk(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(Dt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${m(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(dk(e))}</p>
          ${e.type==="outfit"&&Qp(e)?`<blockquote class="custom-shop-phrase">${i(Qp(e))}</blockquote>`:""}
          ${r?`<small class="custom-shop-unlock">${i(r)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(gk(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function zn(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function Dt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function dk(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function uk(e){return e?.preview||e?.asset||"assets/logo.webp"}function Qp(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function pk(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function gk(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function mk(e){Jn();const t=Un(),n=ne(),s=e.bg||cn(),r=eg(e.spriteId||a.progress.selectedEvaSprite),o=Se(a.customization?.selected?.effect),c=Se(e.decoration||n.currentDecoration),l=hk(e.mood||n.mood),d=Sp();return`
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
          <span>${i(w(s.title||{}))}</span>
          <span>${i(w(r?.title||{ru:"Ева",en:"Eva"}))}</span>
          ${c?`<span>${i(Dt(c))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(Dt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${m(o.id)}" aria-label="${m(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function fk(e){const t=Un(),n=eo();return n?.id?`
        <div class="eva-question-box">
          <span class="pill">${i(t.question)}</span>
          <strong>${i(w(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>`
              <button class="btn ${s.id===n.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${m(s.id)}">
                ${i(w(s.text))}
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
    `}function Un(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function hk(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function vk(){const e=ln(),t=Jn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${m(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([r,o,c])=>`
            <div class="eva-relationship-stat eva-stat-${r}">
              <div><span>${i(o)}</span><strong>${Math.round(c)}</strong></div>
              <i><b style="width:${de(c,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function Jn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function me(){var t,n,s,r,o,c,l,d,u,f,h,g,$;(t=a.progress).seenCards||(t.seenCards={}),(n=a.progress).seenKanji||(n.seenKanji={}),(s=a.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),a.progress.unlockedBackgrounds.includes("bg_study_hub")||a.progress.unlockedBackgrounds.unshift("bg_study_hub"),(r=a.progress).selectedEvaRoomBackground||(r.selectedEvaRoomBackground="bg_study_hub"),(o=a.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(L=>{a.progress.unlockedEvaSprites.includes(L)||a.progress.unlockedEvaSprites.push(L)}),(c=a.progress).selectedEvaSprite||(c.selectedEvaSprite="idle");const e=up(cp(),a.progress.evaAutonomy||{});if((l=a.progress).evaAutonomy||(l.evaAutonomy={}),Object.keys(a.progress.evaAutonomy).forEach(L=>delete a.progress.evaAutonomy[L]),Object.assign(a.progress.evaAutonomy,e),a.evaRuntime||(a.evaRuntime=an()),(d=a.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=a.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(f=a.progress.evaRoomDialogueProgress).rewardsClaimed||(f.rewardsClaimed={}),(h=a.progress.evaRoomDialogueProgress).visited||(h.visited={}),a.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(a.progress.evaRoomDialogueProgress.lineHistory)?a.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(g=a.progress).evaRoomQuiz||(g.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),($=a.progress.evaRoomQuiz).rewarded||($.rewarded={}),a.progress.evaRoomQuiz.history=Array.isArray(a.progress.evaRoomQuiz.history)?a.progress.evaRoomQuiz.history.slice(0,40):[],!a.progress.evaRelationship)a.progress.evaRelationship=Tl();else{const L=dp(Tl(),a.progress.evaRelationship);Object.keys(a.progress.evaRelationship).forEach(C=>delete a.progress.evaRelationship[C]),Object.assign(a.progress.evaRelationship,L)}}function ln(){return me(),a.progress.evaRelationship}function ir(){if(!a.progress||!a.cards.length)return!1;me();const e=a.progress.evaRelationship;let t=!1;const n=ce(),s=e.lastDecayDate||n,r=Math.max(0,us(s,n));if(r>0){const N=a.progress.streak?.lastStudyDate,z=N?us(N,n):r+1;!N||z>1?(Ce({warmth:-Math.min(10,r*1.2),trust:-Math.min(14,r*1.6),discipline:-Math.min(22,r*3.4)},"study_gap",{silent:!0}),t=!0):(a.progress.streak?.current||0)>0&&(Ce({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=td(),c={learned:o.learned,mastered:o.mastered,reviews:nd(),lessons:Object.keys(a.progress.lessonCompletions||{}).length,streak:Math.max(a.progress.streak?.current||0,a.progress.streak?.best||0),wrong:a.progress.totalWrong||0,writing:a.progress.writingPractice?.completed||0,sentence:Object.keys(a.progress.sentencePractice?.completed||{}).length},l=e.lastKnown||{},d=N=>Math.max(0,Number(c[N]||0)-Number(l[N]||0)),u={},f=d("reviews"),h=d("learned"),g=d("mastered"),$=d("lessons"),L=d("streak"),C=d("wrong"),x=d("writing"),k=d("sentence");return f&&(u.discipline=(u.discipline||0)+Math.min(18,f*.08),u.trust=(u.trust||0)+Math.min(10,f*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),g&&(u.trust=(u.trust||0)+Math.min(16,g*1.2),u.warmth=(u.warmth||0)+Math.min(8,g*.5)),$&&(u.warmth=(u.warmth||0)+Math.min(12,$*2),u.discipline=(u.discipline||0)+Math.min(10,$*1.5)),L&&(u.discipline=(u.discipline||0)+Math.min(15,L*3),u.warmth=(u.warmth||0)+Math.min(8,L)),x&&(u.curiosity=(u.curiosity||0)+Math.min(10,x*.8)),k&&(u.trust=(u.trust||0)+Math.min(10,k*.8)),C&&(u.discipline=(u.discipline||0)-Math.min(6,C*.12)),Object.keys(u).length&&(Ce(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=c,Yp(),t}function Ce(e={},t="relationship",n={}){me();const s=a.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(r=>{typeof e[r]>"u"||(s[r]=Fo(de(Number(s[r]||0)+Number(e[r]||0),0,100),1))}),Yp(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function Yp(){const e=a.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(a.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function As(){const e=a.customization?.selected?.outfit||a.progress?.shop?.equipped?.outfit||null,n=(Se(e)||Mn(e)||jn(e))?.spriteId||a.progress?.selectedEvaSprite||"idle";return a.evaSprites?.[n]&&Zp(n)?n:"idle"}function wk(e){const t=String(e||""),n=jn(t),s=n?.spriteId||n?.legacySpriteId||"";return!t||!s?"":t===s||t.startsWith(`${s}_`)?s:""}function bk(e){const t=String(e||"");if(!t)return t;const n=As(),s=wk(t);return s&&n&&s!==n?n:t}function Zp(e){const t=String(e||"");if(!t)return!1;if(Yl(t))return!0;const n=jn(t);return n?!!(n.defaultOwned||Ot(n.id)):!1}function kk(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Sn(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=As(),r=bk(n),o=kk(r),c=r&&!o?r:s,l=a.evaRuntime?.mood||ln().mood,d=t||(o?r:null)||a.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[l]||"idle",u=Ck(d),f=[...new Set([c,s].filter(Boolean))];return[...f.flatMap($=>yk($,u)),...f,...u,"idle","default"].filter(Boolean).find($=>a.evaSprites?.[$]&&(Yl($)||!c||Zp(c)))||"idle"}function yk(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>a.evaSprites?.[o]),r=jn(n);return!r||r.defaultOwned||s.length<=1?s:$k(s)}function $k(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=al%t.length;return[...t.slice(n),...t.slice(0,n)]}function jk(){const e=As(),t=jn(e);return!t||t.defaultOwned?!1:Object.keys(a.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function Sk(){rl&&window.clearInterval(rl),rl=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==al&&(al=e,!(document.hidden||!jk())&&(a.route==="home"||a.route==="eva-room")&&P())},3e4)}function Ck(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=Nk(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function Nk(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function ne(){return me(),a.progress.evaAutonomy}function qi(){const e=ne();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function Hi(){const e=Ke().filter(t=>t.type==="background").map(t=>({id:t.id,title:{ru:t.title_ru,en:t.title_en},file:t.asset||t.preview,price:t.price,defaultUnlocked:t.defaultOwned}));return e.length?e:a.evaBackgrounds?.length?a.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}]}function or(e){return Hi().find(t=>t.id===e)||Hi()[0]}function cn(){me();const e=Uh({catalogItems:Ke(),owned:a.customization?.owned||a.progress.unlockedBackgrounds||[],customizationSelected:a.customization?.selected?.background,progressEquipped:a.progress?.shop?.equipped?.background,progressSelected:a.progress.selectedEvaRoomBackground});return or(e)||or("bg_study_hub")}function xk(e){const t=or(e);return t?t.defaultUnlocked||t.price===0||a.progress.unlockedBackgrounds.includes(t.id):!1}function Lk(){const e=Ke().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>a.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function eg(e){return Lk().find(t=>t.id===e)}function Yl(e){if(!e)return!1;const t=eg(e);return!!(t?.defaultUnlocked||t?.price===0||a.progress.unlockedEvaSprites?.includes(e)||a.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function Vi(e){me();const t=a.evaRuntime?.mood||Cn(Fe()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],r=Hi().filter(c=>xk(c.id));return s.map(c=>r.find(l=>l.id===c)).find(Boolean)||it(r)||cn()}function Wi(e){me();const t=a.evaRuntime?.mood||Cn(Fe()),n=As(),s={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[n,e?.sprite,...s[t]||s.neutral].filter(Boolean).find(o=>Yl(o)&&a.evaSprites?.[o])||a.progress.selectedEvaSprite||"idle"}function Ak(e){return e==="generated_line"?Ik():a.evaRoomDialogues.find(t=>t.id===e)||a.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function Ik(){me();const e=Jn(),t=a.progress.evaRoomDialogueProgress.generatedLine||ug("adaptive");return a.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||cn().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function Xi(){return Array.isArray(a.evaRoomLines)?a.evaRoomLines:[]}function Tk(e="auto"){const t=a.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function tg(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function Rk(e,t=Fe()){const n=e?.conditions||{},s=(o,c)=>{const l=tg(c);return!l.length||l.includes(String(o))},r=(o,c)=>{const l=tg(c);return!l.length||l.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!r(t.activeSkin,n.activeSkin)||!r(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function _k(e="auto",t=Fe()){return null}function Qi(e,t="auto",n=Fe()){if(!a.evaRuntime||!e?.id)return;a.evaRuntime.memory=js(rn(),a.evaRuntime.memory||{});const s=a.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const r=e.category||t;s.recentTopics=[r,...(s.recentTopics||[]).filter(o=>o!==r)].slice(0,20),s.lastRoute=n.route||a.route,s.lastInteractionDate=ce(),s.lastKnownMood=a.evaRuntime.mood||ln().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function ng(e){if(!a.evaRuntime)return;a.evaRuntime.memory=js(rn(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory;t.lastRoute=a.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=ce()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function Pk(){return{quiet:12e4,normal:ps(45e3,12e4),active:45e3}}function Ek(){sl&&window.clearInterval(sl),sl=window.setInterval(Mk,5e3)}function lr(){const e=ne(),t=Pk()[e.frequency]||ps(45e3,12e4);e.nextSpeakAt=Date.now()+t}function Mk(){if(document.hidden||!a.progress||!a.evaRuntime)return!1;const e=Fe(),t=a.evaRuntime,n=ne(),s=Date.now();let r=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return be("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=Cn(e),c=Yi(e,o);(o!==t.mood||c!==t.emotion)&&(t.mood=o,t.emotion=c,n.mood=o,n.emotion=c,t.lastEmotionChangeAt=s,t.cooldowns.emotion=ps(15e3,3e4),r=!0)}return a.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",lr(),r=!0):ra("timer",{context:e})&&(r=!0)),r&&(Ss(),T(),a.route==="eva-room"&&P()),r}function Fe(e={}){const t=a.progress?An():{},n=a.evaRuntime||an(),s=js(rn(),n.memory||{}),r=new Date().getHours();return Pl(),{route:a.route,hour:r,timeOfDay:r<5?"late_night":r<11?"morning":r<18?"day":r<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(a.progress?.streak?.current||0),level:Number(a.progress?.level||1),moonFragments:Number(a.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||a.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||a.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-cl,lastEvent:n.lastEvent,dueReviews:a.progress?bt():0,shopOpen:!!a.evaRoomShopOpen,...e}}function Cn(e=Fe()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function Yi(e=Fe(),t=Cn(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return it(["approve","happy","soft_smile"]);if(n==="answer_wrong")return it(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return it(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return it(s[t]||s.neutral)}function ra(e="auto",t={}){if(!a.progress||!qi()||!t.force&&a.route!=="eva-room")return!1;const n=ne(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const r=t.context||Fe({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=Cn(r),c=sg(e)||Zl(e);if(!c)return!1;a.evaRuntime||(a.evaRuntime=an()),a.evaRuntime.mood=o;const l=c.emotion||Yi(r,o,e),d=Vi(c),u=Sn(Wi(c),l),f=ec(c),h=tc(c),g=lg(r,c);return n.currentLine={id:c.id,category:c.category||"mood",text:c.text,sprite:u,background:d.id,decoration:f,effect:h,emotion:l,state:c.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=g,n.currentDecoration=f,n.currentEffect=h,n.mood=o,n.emotion=l,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[c.id,...(n.recentLineIds||[]).filter($=>$!==c.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=an()),Object.assign(a.evaRuntime,{mood:o,emotion:l,presenceState:c.state||"speak",currentPhrase:n.currentLine,pendingQuestion:g,currentSkin:u,currentBackground:d.id,currentDecoration:f,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:g?s:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...a.evaRuntime.cooldowns,emotion:ps(15e3,3e4),phrase:ps(45e3,12e4),question:ps(3*6e4,7*6e4),visual:ps(10*6e4,15*6e4)}}),Qi(c,e,r),nc(u,d.file),lr(),Ce(c.relationshipDelta||{warmth:.1},`eva_autonomy:${c.id}`,{silent:!0}),Ss(),hn(),!0}function sg(e){const t=_k(e,Fe({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],r=new Set(ne().recentLineIds||[]),o=s.filter(l=>!r.has(`${e}_${Oe(`${l.ru||l.en}`)}`)),c=it(o.length?o:s);return c?{id:`${e}_${Oe(`${c.ru||c.en}`)}`,category:e,text:c,relationshipDelta:{}}:null}function rg(){const e=ne(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function Kk(e="auto"){const t=ln(),n=new Date().getHours(),s=bt(),r=An(),o=[];return o.push(...Tk(e)),(e==="return"||!t.lastInteractionDate&&a.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(r.reviews||0)===0&&o.push("fis_study","study"),(a.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(a.progress.rewardHistory?.length||a.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function Zl(e="auto"){me(),ir();const t=ln(),n=Fe({lastEvent:{type:e}}),s=ne().currentLine?.id,r=new Set([s,...ne().recentLineIds||[],...a.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(a.evaAutonomyLines)?a.evaAutonomyLines:[],c=Kk(e),l=(u,f=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!f&&r.has(h.id)||!pg(h,t)||!Rk(h,n))return!1;const $=Array.isArray(h.moods)?h.moods:[];return!$.length||$.includes(t.mood)});for(const u of c){const f=l(u);if(f.length)return it(f)}for(const u of c){const f=l(u,!0);if(f.length)return it(f)}const d=o.filter(u=>!r.has(u.id));return it(d.length?d:o)}function be(e,t={},n={}){if(!e)return;ca(),n.skipAchievements||Y({silent:!0});const s={type:ig(e),payload:t||{},at:Date.now()};ag(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:be});function ag(e={}){if(!e.type||!a.progress)return;me(),a.evaRuntime||(a.evaRuntime=an());const t={type:ig(e.type),payload:e.payload||{},at:e.at||Date.now()};a.evaRuntime.lastEvent=t,a.evaRuntime.eventHistory=[t,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[t,...a.evaRuntime.recentEvents||[]].slice(0,80),ng(t),["timer","idle_timeout"].includes(t.type)||(a.evaRuntime.lastPlayerActionAt=Date.now());const n=Fk(t.type,t.payload);Object.keys(n).length&&Ce(n,`eva_event:${t.type}`,{silent:!0});const s=ne();rg(),s.nextSpeakAt=0;const r=ra(t.type,{force:!0,eventPayload:t.payload});Ss(),T(),r&&a.route==="eva-room"&&P()}function ig(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function Fk(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function ec(e){const t=a.evaRuntime?.mood||Cn(Fe()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return og("decoration",s)}function tc(e){const t=a.evaRuntime?.mood||Cn(Fe()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return og("effect",s)||"none"}function og(e,t=[]){const n=Ke().filter(r=>r.type===e&&Ot(r.id));return(t.map(r=>n.find(o=>o.id===r)).find(Boolean)||it(n))?.id||null}function lg(e=Fe(),t=null){const n=ne();if(n.currentQuestion?.id)return n.currentQuestion;if(a.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=a.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",r=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),c=Number(a.evaRuntime?.lastQuestionAt||a.evaRuntime?.lastQuestion?.at||0),l=Number(a.evaRuntime?.cooldowns?.question||ps(3*6e4,7*6e4));if(!r&&o-c<l||!r&&Math.random()>.34)return null;const d=new Set(a.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=cg(s).filter(h=>!d.has(h.id)),f=it(u.length?u:cg(s));return f?{...f,at:new Date().toISOString()}:null}function cg(e="auto"){const t=eb();if(t.length<2)return[];const n=new Set((a.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${ce()}:${e}:${a.progress?.totalCorrect||0}:${a.progress?.totalWrong||0}`;return[...t].sort((o,c)=>{const l=n.has(String(o.id))?1:0,d=n.has(String(c.id))?1:0;return l-d||Oe(`${s}:${o.id}`)-Oe(`${s}:${c.id}`)}).slice(0,18).map(o=>Dk(o,t,e)).filter(Boolean)}function Dk(e,t,n="auto"){const s=Xe(e,"ru"),r=Xe(e,"en");if(!s||!r)return null;const o=Ok(e,t);if(!o.length)return null;const c=String(e.jlpt||"").toUpperCase(),l=c||(p()==="ru"?"твоих карточек":"your cards"),d=dg(e,e,!0),u=[d,...o.map(f=>dg(f,e,!1))].sort((f,h)=>Oe(`${n}:${e.id}:${f.id}`)-Oe(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Oe(`${s}:${r}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:c,answerId:d.id,answerText:{ru:s,en:r},text:{ru:`Что значит кандзи ${e.kanji} из ${l}?`,en:`What does the ${l} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function Ok(e,t){const n=Zi(Xe(e,"ru")),s=Zi(Xe(e,"en")),r=String(e.jlpt||"").toUpperCase(),c=[...t.filter(l=>{if(!l?.id||String(l.id)===String(e.id)||l.kanji===e.kanji)return!1;const d=Zi(Xe(l,"ru")),u=Zi(Xe(l,"en"));return!(!d||!u||d===n||u===s)})].sort((l,d)=>{const u=String(l.jlpt||"").toUpperCase()===r?0:1,f=String(d.jlpt||"").toUpperCase()===r?0:1;return u-f||Oe(`${e.id}:${l.id}`)-Oe(`${e.id}:${d.id}`)});return c.slice(0,Math.min(3,c.length))}function dg(e,t,n){const s=Xe(e,"ru"),r=Xe(e,"en"),o=Xe(t,"ru"),c=Xe(t,"en");return{id:`meaning_${Oe(`${t.id}:${e.id}:${s}:${r}`)}`,cardId:String(e.id),text:{ru:s,en:r},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${c}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${c}.`}}}function Zi(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function Bk(e){me();const t=eo();t?.id&&zk(t.id,e.dataset.option)}function zk(e,t){me();const n=ne(),s=eo();if(!s?.id||s.id!==e)return;const r=s.options?.find(h=>h.id===t);if(!r)return;const c=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(r.correct||r.id===s.answerId):null;a.evaRuntime||(a.evaRuntime=an()),a.evaRuntime.pendingQuestion=null,n.currentQuestion=null,Ce(r.delta||(c===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&Jk(s,r,c);const l={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:r.id,correct:c,at:new Date().toISOString()};a.evaRuntime.lastQuestion={...l,at:Date.now()},a.evaRuntime.lastQuestionAt=Date.now(),a.evaRuntime.pendingQuestion=null,a.evaRuntime.questionHistory=[l,...a.evaRuntime.questionHistory||[]].slice(0,40);const d=Vi({}),u=c===!1?"thinking":"approve",f=Sn(Wi({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${r.id}`,category:"question_reply",text:r.reply||Uk(s,c),sprite:f,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},a.evaRuntime.presenceState="react",a.evaRuntime.textRevealSkippedLineId=null,Qi(n.currentLine,"question_answer",Fe({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=f,lr(),Vk(s,r,c),Ss(),T(),F(c===!1?"answer_wrong":c===!0?"answer_correct":"notification_soft"),P()}function eo(){const e=ne(),t=e.currentQuestion?.id?e.currentQuestion:a.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,a.evaRuntime||(a.evaRuntime=an()),a.evaRuntime.pendingQuestion=t,t):null}function Uk(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||w(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||w(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||w(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||w(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function Jk(e,t,n){const s=Sp(),r=Gk(e);r&&Qr(r,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:w(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=An();o.reviews=Number(o.reviews||0)+1,n?(a.progress.totalCorrect=Number(a.progress.totalCorrect||0)+1,r&&qk(r),r&&!s.rewarded[String(r.id)]&&(s.rewarded[String(r.id)]=new Date().toISOString(),H(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${r.id}`))):(a.progress.totalWrong=Number(a.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,r&&Hk(r)),o.minutes=Fo(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),a.progress.daily[ce()]=o,ke(),Vc({silent:!0}),Y()}function Gk(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?oe(t):null)||Cp().find(r=>{if(!r)return!1;const o=t&&String(r.id)===t,c=n&&r.kanji===n,l=!s||String(r.jlpt||"").toUpperCase()===s;return o||c&&l})||(n?a.cards.find(r=>r.kanji===n):null)||null}function qk(e){const t=String(e?.jlpt||"").toUpperCase(),n=zl().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function Hk(e){const t=String(e?.jlpt||"").toUpperCase(),n=zl().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function Vk(e,t,n){if(!a.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};a.evaRuntime.lastEvent=s,a.evaRuntime.eventHistory=[s,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[s,...a.evaRuntime.recentEvents||[]].slice(0,80),ng(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Wk(){me(),qi()&&ra("render");const e=gg();let t=ne().currentLine;if(qi()&&!t?.text&&a.evaAutonomyLines.length){const r=Zl("render_fallback")||a.evaAutonomyLines[0],o=Vi(r),c=Fe({lastEvent:{type:"render_fallback"}}),l=Cn(c),d=ec(r),u=tc(r),f=r.emotion||Yi(c,l,"render_fallback"),h=Sn(Wi(r),f);Is(h),t={id:r.id,category:r.category||"mood",text:r.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:f,state:r.state||"observe",at:new Date().toISOString()},ne().currentLine=t,ne().currentDecoration=d,ne().currentEffect=u,ne().mood=l,ne().emotion=f,ne().lastSpokeAt=t.at,ne().lastRoomId=o.id,ne().lastSprite=h,a.evaRuntime.presenceState=t.state,a.evaRuntime.textRevealSkippedLineId=null,Qi(r,"render_fallback",c),nc(h,o.file),lr(),T()}if(qi()&&t?.text){const r=or(t.background)||cn(),o=Sn(t.sprite||"relationship",t.emotion||ne().emotion);return{isAutonomy:!0,line:t,bg:r,spriteId:o,sprite:Is(o),decoration:t.decoration||ne().currentDecoration,effect:t.effect||ne().currentEffect,mood:ne().mood||ln().mood,emotion:t.emotion||ne().emotion||"calm",node:{id:"eva_autonomy_line",background:r.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=or(e.background)||cn(),s=Sn(e.sprite,ne().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:Is(s),decoration:ne().currentDecoration,effect:ne().currentEffect,mood:ln().mood,emotion:ne().emotion||"calm",node:e}}function ug(e="adaptive"){me(),ir();const t=ln(),n=new Set(a.progress.evaRoomDialogueProgress.lineHistory||[]),s=Xi().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!pg(d,t)?!1:!n.has(d.id)}),r=Xi().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:r.length?r:Xi(),c=it(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:cn().id},l=a.progress.evaRoomDialogueProgress.lineHistory||[];return a.progress.evaRoomDialogueProgress.lineHistory=[c.id,...l.filter(d=>d!==c.id)].slice(0,24),{id:c.id,category:c.category||e,text:c.text||{ru:String(c.ru||""),en:String(c.en||c.ru||"")},sprite:c.sprite||"relationship",background:c.background||cn().id,relationshipDelta:c.relationshipDelta||{}}}function pg(e,t){return[["minWarmth",t.warmth,(s,r)=>s>=r],["maxWarmth",t.warmth,(s,r)=>s<=r],["minTrust",t.trust,(s,r)=>s>=r],["maxTrust",t.trust,(s,r)=>s<=r],["minDiscipline",t.discipline,(s,r)=>s>=r],["maxDiscipline",t.discipline,(s,r)=>s<=r],["minCuriosity",t.curiosity,(s,r)=>s>=r],["maxCuriosity",t.curiosity,(s,r)=>s<=r]].every(([s,r,o])=>typeof e[s]>"u"||o(r,Number(e[s])))}function gg(){me();const e=Ak(a.progress.evaRoomDialogueProgress.currentNode);return a.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function Is(e){return a.evaSprites?.[e]||a.evaSprites?.default||"assets/mascots/eva_normal.webp"}function nc(e,t=""){[Is(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Xk(e){const n=gg().choices?.[Number(e.dataset.index||0)];if(!n)return;me();const s=a.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=ce(),Qk(n),Ce(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const r=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(r>0&&o&&!a.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(a.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),H(0,r,`eva_room:${o}`),J(Jn().reward)),n.randomLine){const c=ug(n.randomLine);Ce(c.relationshipDelta||{},`eva_line:${c.id}`,{silent:!0}),a.progress.evaRoomDialogueProgress.generatedLine=c,a.progress.evaRoomDialogueProgress.currentNode="generated_line"}else a.progress.evaRoomDialogueProgress.generatedLine=null,a.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(a.evaRoomShopOpen=!0),T(),n.route){ea(n.route);return}F(n.openShop?"menu_open":"page_turn"),P()}function Qk(e={}){if(!a.evaRuntime)return;a.evaRuntime.memory=js(rn(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=ce(),t.lastRoute=a.route}function Yk(){me(),a.progress.evaRoomDialogueProgress.currentNode="intro",a.progress.evaRoomDialogueProgress.generatedLine=null,a.evaRuntime&&(a.evaRuntime.presenceState="wait_choice",a.evaRuntime.textRevealSkippedLineId=null),T(),F("page_turn"),P()}function Zk(e){to(e)}function ey(e){no(e)}function ty(e){const t=Se(e)||Mn(e)||jn(e);t&&to(t.id)}function ny(e){const t=Se(e)||Mn(e)||jn(e);t&&no(t.id)}function Ot(e){a.customization||$s();const t=Se(e)||Mn(e);return!!(t?.defaultOwned||t?.price===0||a.customization?.owned?.includes(t?.id||e))}function sc(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function sy(e){const t=sc(e);return!!(t&&a.customization?.selected?.[t]===e.id)}function mg(e){return!e||!rc(e)?"locked":sy(e)?"selected":Ot(e.id)?"owned":"available"}function ry(e={}){const t=[a.customization?.selected?.effect,e.effect,a.evaRuntime?.currentEffect,a.evaRuntime?.currentLine?.effect,a.progress?.evaAutonomy?.currentEffect,ne().currentEffect];for(const n of t){const s=Kn(n);if(!s||s==="none")continue;const r=Se(s);if(r?.type==="effect"&&Ot(r.id))return r.id}return null}function fg(e=null){const t=Kn(e||a.customization?.selected?.effect),n=Se(t);return!n||n.type!=="effect"||a.customization?.selected?.effect!==n.id?!1:(a.customization.selected.effect=null,a.progress?.evaAutonomy&&(a.progress.evaAutonomy.currentEffect=null),a.evaRuntime?.currentEffect===n.id&&(a.evaRuntime.currentEffect="none"),Vr(),tr(),T(),hn(),F("menu_close"),J(p()==="ru"?"Эффект убран.":"Effect removed."),P(),!0)}function ay(e=null){const t=Kn(e||a.customization?.selected?.effect||a.customization?.selected?.decoration||a.customization?.selected?.frame||a.customization?.selected?.outfit||a.customization?.selected?.background||a.customization?.selected?.theme),n=Se(t);if(!n)return!1;if(n.type==="effect")return fg(n.id);a.customization||$s();const s=sc(n);if(!s)return!1;const r=En().selected;return s==="background"?a.customization.selected.background=r.background:s==="outfit"?a.customization.selected.outfit=r.outfit:s==="theme"?a.customization.selected.theme=r.theme:s==="decoration"&&(a.customization.selected.decoration=r.decoration,a.customization.selected.frame=r.frame),Vr(),tr(),T(),hn(),F("menu_close"),J(p()==="ru"?"Выбор сброшен.":"Selection cleared."),P(),!0}function iy(e){if(!e?.unlockCondition||rc(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=Os().find(o=>o.id===t.id),r=s?Jc(s):t.id;return n?`Открывается за достижение: ${r}`:`Unlocks after achievement: ${r}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function rc(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?a.progress.level>=Number(t.value||0):t.type==="streak"?a.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!a.progress.achievements?.[t.id]?.unlockedAt:!0}function to(e){const t=Se(e);if(!t||(a.customization||$s(),Zo.has(t.id)))return;if(!rc(t)){F("purchase_failed"),J(zn().locked);return}if(Zo.add(t.id),window.setTimeout(()=>Zo.delete(t.id),0),Ot(t.id)){no(t.id);return}const n=cI({balance:a.progress.moonFragments,owned:a.customization?.owned||[],itemId:t.id,price:t.price});if(a.progress.moonFragments=n.balance,n.status==="insufficient-funds"){F("purchase_failed"),J(zn().notEnough),T(),P();return}if(n.status!=="purchased"){F("purchase_failed"),J(zn().unavailable),T(),P();return}a.customization.owned=n.owned,a.customization.seen=[...new Set([...a.customization.seen||[],t.id])],a.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:Dt(t),xp:0,coins:-n.price,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80),Vr(),tr(),T(),F("purchase_success"),F("item_unlock"),be("item_bought",{itemId:t.id,type:t.type,title:Dt(t),price:t.price},{skipAchievements:!0}),J(zn().bought.replace("{item}",Dt(t))),P()}function no(e){var s,r,o;const t=Se(e);if(a.customization||$s(),!t||!Ot(t.id))return;const n=sc(t);if(n){if(a.customization.selected[n]=t.id,n==="decoration"&&(a.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId){a.progress.selectedEvaSprite=t.spriteId,(s=a.progress).evaAutonomy||(s.evaAutonomy={}),a.progress.evaAutonomy.currentLine=null;const c=ne();c.currentLine=null,c.lastSprite=t.spriteId,a.evaRuntime&&(a.evaRuntime.currentSkin=t.spriteId,a.evaRuntime.activeSkin=t.spriteId,a.evaRuntime.currentPhrase=null,(r=a.evaRuntime).memory||(r.memory=rn()),a.evaRuntime.memory.preferredEvaOutfit=t.id)}t.type==="background"&&(a.progress.selectedEvaRoomBackground=t.id,a.evaRuntime&&(a.evaRuntime.currentBackground=t.id,a.evaRuntime.activeBackground=t.id,(o=a.evaRuntime).memory||(o.memory=rn()),a.evaRuntime.memory.preferredEvaRoomBackground=t.id),a.progress.evaAutonomy.currentLine=null),Vr(),tr(),T(),hn(),F("notification_soft"),be("item_equipped",{itemId:t.id,type:t.type,title:Dt(t)},{skipAchievements:!0}),J(zn().selectedToast.replace("{item}",Dt(t))),P()}}function oy(){const e=ne();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,ra("toggle",{force:!0}),T(),F("notification_soft"),J(Un().status),P()}function ly(){const e=ne();e.frequency="normal",lr(),T(),F("notification_soft"),P()}function cy(){const e=ne();e.roomMode="auto",e.currentLine=null,T(),F("notification_soft"),P()}function dy(){const e=ne();e.outfitMode="auto",e.currentLine=null,T(),F("notification_soft"),P()}function hg(){const e=ne();e.enabled=!0,rg(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,vg("manual"),T(),F("page_turn"),P()}function vg(e="manual",t={}){const n=sg(e)||Zl(e);if(!n)return!1;const s=Fe({lastEvent:{type:e}}),r=Cn(s),o=n.emotion||Yi(s,r,e),c=Vi(n),l=Sn(Wi(n),o),d=ec(n),u=tc(n),f=ne(),h=Date.now(),g=t.allowQuestion===!1?null:lg(s,n);return f.currentLine={id:n.id,category:n.category||e,text:n.text,sprite:l,background:c.id,decoration:d,effect:u,emotion:o,state:n.state||"speak",at:new Date(h).toISOString(),reason:e},f.currentDecoration=d,f.currentEffect=u,f.mood=r,f.emotion=o,f.lastSpokeAt=f.currentLine.at,f.lastRoomId=c.id,f.lastSprite=l,f.currentQuestion=g,f.recentLineIds=[n.id,...(f.recentLineIds||[]).filter($=>$!==n.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=an()),Object.assign(a.evaRuntime,{mood:r,emotion:o,presenceState:n.state||"speak",currentPhrase:f.currentLine,pendingQuestion:g,currentSkin:l,currentBackground:c.id,currentDecoration:d,currentEffect:u,activeSkin:l,activeBackground:c.id,lastPhraseAt:h,lastEmotionChangeAt:h,lastQuestionAt:g?h:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:h,textRevealSkippedLineId:null}),Qi(n,e,s),nc(l,c.file),lr(),Ss(),hn(),!0}function uy(){ne().currentLine=null,T(),F("menu_close"),P()}function M(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${de(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function py(e){const t=sd(e.id),n=t.filter(d=>B(d.id).state!=="New").length,s=t.filter(d=>B(d.id).state==="Mastered").length,r=!We(e),o=oh(e),c=r?"鎖":t[0]?.kanji||"文",l=E(s,t.length);return`
      <button class="lesson-tile ${r?"is-locked":""} ${dd(o)}" type="button" id="textbook-lesson-${m(e.id)}" data-action="start-lesson" data-id="${m(e.id)}">
        <span class="lesson-glyph">${i(c)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${Ox(o)}
          <h3>${i(qa(e))}</h3>
          <p>${i(EL(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(_("mastered"))}</span>
            ${r?`<span class="pill danger-pill">${i(_("unlockedAt"))} ${No(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${l}%"></i></span>
        </span>
      </button>
    `}function gy(e){const t=oh(e),n=e.id===a.activeLessonId,s=!We(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${dd(t)}" type="button" data-action="select-lesson" data-id="${m(e.id)}" title="${m(ud(t))}">
        <span>${i(e.jlpt)}</span>
        ${Dx(t)}
      </button>
    `}function ac(){const e=String(a.activeLearnJlpt||"all").toUpperCase();return a.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function my(){const e=ac();return e.find(t=>t.id===a.activeLessonId)||e.find(t=>We(t))||e[0]||a.lessons.find(t=>t.id===a.activeLessonId)||a.lessons.find(t=>We(t))||a.lessons[0]||null}function ic(){return D(my()?.jlpt)||fn()}function wg(e){if(!e.length)return a.activeLessonId=null,null;const t=e.find(r=>r.id===a.activeLessonId);if(t&&We(t))return t;const s=e.find(r=>We(r))||e[0];return a.activeLessonId=s?.id||null,s||null}function fy(e){const t=e.length,n=e.filter(r=>We(r)).length,s=["all",..._e];return`
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
    `}function hy(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${m(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <span class="pill">${i(t.jlpt||"")}</span>
        </div>
        <div class="learn-level-copy">
          <h3>${i(w(t.displayTitle||t.title||{}))}</h3>
          <p>${i(w(t.description||{}))}</p>
          <div class="tag-row">
            <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
            <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
            <span class="pill">${i(w(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${m(t.pdfUrl||t.pdfFile||"")}" download="${m((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function vy(e){const t=It(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?qa(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${No(e)}.`:`Unlocks at level ${No(e)}.`)}</p>
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
    `}function wy(){return a.activeLearnView===bn?Ny():a.activeLearnView===en?Cy():yg()}function by(){const e=bp();if(e.kind==="review"){On("review");return}if(a.route==="home"){Zr(ic());return}bg(e.nodeId)}function bg(e){const t=Cs(e);if(!t){Ns();return}if(wp(t)==="locked"){J(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===Qs){On("review");return}if(t.id===Ys){fa("final-test");return}if(t.type==="textbook"){fa(t.id);return}Ns(en,t.id)}function kg(e){const t=String(e||"");return t&&(oe(t)||a.cards.find(n=>String(n.id)===t))||null}function ky(){const e=ge();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function aa(e){const t=Ut(e);if(!t)return null;const n=dn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],r=n.map((o,c)=>{const l=Gt(o)[0]||null,d=s[c%Math.max(s.length,1)]||s[0]||null,u=l?{jp:l.word||o.kanji,hiragana:l.reading||o.hiragana||"",translation:l.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:Z(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:K(o),en:K(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:r,exercises:Ps(t),source:"learning_path"}}function yy(e){if(e===Pe)return ky();const t=a.learningPathLessonPayloads[e]||aa(e);if(!t)return[];const n=ge(),s=[],r=(t.objectives||[]).map(w).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:w(t.title),text:w(t.summary),note:r||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,c)=>{const l=kg(o.cardId);if(!l)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${c+1}`,kind:"kanji",eyebrow:l.jlpt||"N5",title:`${l.kanji} · ${K(l)}`,text:R$(l,{word:d?.jp||l.kanji,reading:d?.hiragana||l.hiragana||""}),note:d?.translation?w(d.translation):"",cardId:l.id,card:l,sentence:d})}),(t.exercises||[]).forEach(o=>{const c=(o.options||[]).map(l=>({value:String(l.value??l.id??l.label??l),label:w(l.label||l.text||l)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:w(o.prompt),text:w(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:c})}),s}function $y(e,t=null){const n=yy(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),r=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return r.length?r:n.filter(o=>o.kind==="quiz")}function jy(e,t=en,n=[]){const s=Dn(),r=s.activeSession,o=n.map(String).filter(Boolean);return r?.nodeId===e&&r.mode===t&&JSON.stringify(r.reviewStepIds||[])===JSON.stringify(o)?r:(s.activeSession=Sl({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,T(),s.activeSession)}function ia(e){const t=Fl(),n=t?.nodeId===e?t:jy(e),s=$y(e,n),r=s.filter(l=>l.kind==="quiz"),o=Object.keys(n.answers||{}).length,c=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:r,answeredCount:o,stepIndex:c,currentStep:s[c]||null,isResult:c>=s.length&&s.length>0}}function Sy(e,t,n){var l;const s=Dn(),r=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),c=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((l=s.completedNodes)[e]||(l[e]=r),s.resultHistory[e]={completedAt:r,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===Pe&&H(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=Ut(e),u=a.learningPathLessonPayloads[e]||aa(e),f=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(g=>g.cardId),...dn(d).map(g=>g.id)].map(String).filter(Boolean))],h=se();if(f.forEach(g=>{const $=kg(g);if(!$)return;Qr($,"learning_path"),sr(h,$.kanji);const L=ie(B($.id));L.state==="New"&&(a.progress.cards[$.id]=ye(L,c?"hard":"good"))}),d){$e.add(`n5:${d.id}`),h.completedLessons[d.id]=r,h.currentLessonId=et().find(L=>L.order===d.order+1)?.id||d.id,a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[d.id]=r,T({immediate:!0}),ao()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],a.progress.unlockedJlptLevels.includes("N5")||a.progress.unlockedJlptLevels.push("N5"),a.progress.unlockedJlptLevels.includes("N4")||a.progress.unlockedJlptLevels.push("N4"));const g=a.n5Meta?.rewards?.lessonCompleteXp||45,$=a.n5Meta?.rewards?.lessonCompleteMoon||6;H(g,$,`learning_path:${e}`),wt({title:`${Ze().lessonComplete}: ${w(d.title)}`,message:Ze().lessonCompleteText,xp:g,coins:$,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),be("lesson_complete",{lessonId:e,jlpt:"N5"})}}Oi(),ke(),Y(),T()}function yg(){a.n5Textbook?.items?.length||Kl();const e=ge(),t=vp(),n=bp(),s=Cs(rr()),r=Rn();return`
      <section class="page learning-path-page">
        <div class="section-head">
          <div>
            <h1>${i(e.route)}</h1>
            <p>${i(s?w(s.summary)||e.mapHint:e.loading)}</p>
          </div>
          <button class="btn primary" type="button" data-action="home-primary">${i(n.label)}</button>
        </div>

        <article class="learning-path-hero">
          <div>
            <span class="pill">${i(e.lessonTrack)}</span>
            <h2>${i(hp(rr()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(ge().reviewQueue)} · ${i(bt())}</span>
            <span class="pill">${i(ge().streak)} · ${i(a.progress.streak.current)}</span>
            <span class="pill">${i(ge().xp)} · ${i(r.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,c)=>{const l=wp(o),d=l==="locked",u=w(o.summary)||"",f=o.id===Qs?e.reviewAction:o.id===Ys?e.openCheckpoint:o.type==="textbook"?e.openTextbook:l==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${m(l)} is-${m(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${m(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${c+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(Pw(l))}</span>
                  </div>
                  <h2>${i(w(o.title))}</h2>
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
    `}function Cy(){const e=a.activeLearnNodeId||rr(),t=Cs(e),n=ge();if(!t)return yg();if(t.id!==Pe&&t.type==="lesson"&&!a.n5Textbook?.items?.length)return Kl(),`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(w(t.title))}</h1>
                <p>${i(n.loading)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;t.type==="lesson"&&xw(e);const s=ia(e),{session:r,steps:o,quizSteps:c,currentStep:l,isResult:d}=s;if(!o.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(w(t.title))}</h1>
                <p>${i(w(t.summary)||n.mapHint)}</p>
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
                <h1>${i(w(t.title))}</h1>
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
              <h1>${i(w(t.title))}</h1>
              <p>${i(w(t.summary)||n.mapHint)}</p>
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
                    ${l.card.hiragana?`<span class="pill">${i(Z(l.card.hiragana))}</span>`:""}
                    ${l.card.onyomi?`<span class="pill">${i(Z(l.card.onyomi))}</span>`:""}
                  </div>
                  ${l.sentence?`
                    <div class="lesson-player-sentence">
                      <strong>${i(l.sentence.jp||"")}</strong>
                      <p>${i(l.sentence.hiragana||"")}</p>
                      <small>${i(w(l.sentence.translation||{}))}</small>
                    </div>
                  `:""}
                </div>
              </div>
            `:l.kind==="quiz"?`
              <p>${i(l.text||"")}</p>
              <div class="lesson-choice-grid">
                ${(l.options||[]).map(C=>{const x=g===C.value,k=C.value===l.answer;return`<button class="btn ${x?$?"success":"danger":h&&k?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${m(e)}" data-step="${m(l.id)}" data-value="${m(C.value)}">${i(C.label)}</button>`}).join("")}
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
    `}function Ny(){const e=ac(),t=wg(e),n=!!(t&&We(t)),s=n?dx(t.id):[];(!a.activeCardId||!s.some(c=>c.id===a.activeCardId))&&(a.activeCardId=s[0]?.id||null);const r=n&&a.activeCardId?oe(a.activeCardId):null,o=a.activeLearnJlpt!=="all"?It(a.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("learn"))}</h1>
            <p>${i(t?qa(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${fy(e)}
        ${o?hy(o):""}
        <div class="actions lesson-tabs">
          ${e.map(gy).join("")}
        </div>
        <div class="study-layout">
          ${n?r?tf(r):UC(t):vy(t)}
          ${n?Mc(r,s.length):Mc(null,0)}
        </div>
      </section>
    `}function xy(){const e=In(a.activeJlptLesson)||In(oe(a.activeCardId)?.jlpt)||a.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(_("learn"))}</button>
          </article>
        </section>
      `;a.activeJlptLesson=e.jlpt;const t=It(e.jlpt);if(!Tt(e.jlpt))return $g(t||e);const n=ch(e.jlpt),s=n.filter(c=>B(c.id).state==="Mastered").length,r=n.filter(c=>B(c.id).state!=="New").length,o={...fd(),...md()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(w(e.title))}</h1>
            <p>${i(w(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${m(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${ls("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${m(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${a.jlptLessons.map(c=>{const l=Tt(c.jlpt),d=c.jlpt===e.jlpt,u=m(Tn(c.jlpt));return l?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(c.jlpt)}">${i(c.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(c.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${m(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
            <div class="jlpt-textbook-body">
              <span class="pill">${i(t.jlpt)}</span>
              <h2>${i(w(t.displayTitle||t.title||{}))}</h2>
              <p>${i(w(t.description||{}))}</p>
              <div class="tag-row">
                <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                <span class="pill">${i(w(t.goal||{}))}</span>
                <span class="pill">${i(w(t.recommendedCycle||{}))}</span>
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
        ${Um(e)}
        <div class="jlpt-section-grid">
          ${e.goals.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.goals)}</h3>
              <ul>${e.goals.map(c=>`<li>${i(w(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.sections.map(c=>`
            <article class="jlpt-section-card">
              <h3>${i(w(c.title))}</h3>
              <p>${i(w(c.body))}</p>
              ${Array.isArray(c.points)&&c.points.length?`<ul>${c.points.map(l=>`<li>${i(w(l))}</li>`).join("")}</ul>`:""}
            </article>
          `).join("")}
          ${e.practice.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.practice)}</h3>
              <ul>${e.practice.map(c=>`<li>${i(w(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.checkpoint.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.checkpoint)}</h3>
              <ul>${e.checkpoint.map(c=>`<li>${i(w(c))}</li>`).join("")}</ul>
            </article>
          `:""}
        </div>
      </section>
    `}function Ly(){const e=a.jlptCatalog?.items||[],t=String(a.activeTextbookLevel||"");if(we(t))return Ty(t);const n=t.toUpperCase(),s=n?It(n):null;if(s)return a.activeTextbookLevel=s.jlpt,a.activeJlptLesson=s.jlpt,Ay(s);if(n&&!a.bootAncillaryLoaded)return ul({hadPriorVisit:Gl(a.progress)}).catch(c=>console.warn("Boot ancillary data failed to load.",c)),oc({title:{ru:n,en:n}},n);const r=p()==="ru"?{title:"Учебники Flash Kanji",description:"Выберите азбуку для старта с нуля или продолжайте учебники JLPT N5–N1.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам",kanaBadge:"Курс на русском",kanaMeta:"знаков",kanaTasks:"заданий"}:{title:"Flash Kanji Textbooks",description:"Choose a kana course from zero or continue JLPT N5-N1 textbooks.",open:"Open page",pdf:"Download PDF",study:"Go to lessons",kanaBadge:"Russian course",kanaMeta:"characters",kanaTasks:"tasks"},o=(a.kanaCatalog?.courses||[]).map(c=>`
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
            ${ls("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${m(fn())}">${i(r.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${o}
          ${e.map(c=>`
            <article class="textbook-card ${Tt(c.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${m(c.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${m(c.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(c.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(w(c.displayTitle||c.title||{}))}</h2>
                <p>${i(w(c.description||{}))}</p>
                ${Tt(c.jlpt)?"":`<p class="textbook-lock-note">${i(Tn(c.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(c.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(c.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                  <span class="pill">${i(w(c.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${m(c.jlpt)}">${i(r.open)}</a>
                  ${Tt(c.jlpt)?`<a class="btn ghost" href="${m(c.pdfUrl||c.pdfFile||"")}" download="${m((c.pdfFile||c.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(r.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${m(Tn(c.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${Tt(c.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(c.jlpt)}">${i(r.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${m(Tn(c.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function $g(e){const t=String(e?.jlpt||"").toUpperCase(),n=pd(t),s=n.map(o=>`<a class="pill" href="#textbooks/${m(o)}">${i(o)}</a>`).join(""),r=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(w(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h1>
            <p>${i(Tn(t))}</p>
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
            <h2>${i(w(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h2>
            <p>${i(r.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(r.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${m(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function Ay(e){const t=String(e?.jlpt||"").toUpperCase();if(!Tt(t))return $g(e);if(_e.includes(t)&&!xi(t))return Ni(t)==="error"||Ni(t)==="incomplete"?Iy(e,t,a.jlptCourseDataErrors[t]):(hl(t).catch(()=>{}),oc(e,t));if(String(e?.jlpt||"").toUpperCase()==="N5"&&a.n5Textbook?.items?.length)return a$(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&a.n4Textbook?.items?.length)return sj(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&a.n3Textbook?.items?.length)return Dj(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&a.n2Textbook?.items?.length)return $S(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return a.n1Textbook?.items?.length?a0(e):(Fv().catch(()=>{}),nl?zi(nl):oc(e,"N1"));a.activeTextbookLevel=e.jlpt,a.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(g=>a.lessons.find($=>$.id===g)).filter(Boolean),s=a.lessons.filter(g=>String(g.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(g)),r=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=a.activeTextbookSubroute?r.find(g=>g.id===a.activeTextbookSubroute)||In(e.jlpt)||a.jlptLessons[0]:In(e.jlpt)||a.jlptLessons[0];a.activeTextbookSubroute&&o?.id&&Rt(t,o.id,"textbook_page");const c=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},l=gd(e.jlpt)||e.lessonIds?.[0]||r[0]?.id||"",d=w(e.recommendedCycle||{}),u=w(e.goal||{}),f=(e.previousLevels||[]).map(g=>`<a class="pill" href="#textbooks/${m(g)}">${i(g)}</a>`).join(""),h=(e.nextLevels||[]).map(g=>`<a class="pill" href="#textbooks/${m(g)}">${i(g)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(e.jlpt)} · ${i(c.title)}</p>
            <h1>${i(w(e.displayTitle||e.title||{}))}</h1>
            <p>${i(w(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(c.back)}</button>
            <a class="btn primary" href="${m(e.pdfUrl||e.pdfFile||"")}" download="${m((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(c.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(e.jlpt)}">${i(c.lessonPage)}</button>
            ${ls("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${m(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill">${i(e.jlpt)}</span>
            <h2>${i(w(e.displayTitle||e.title||{}))}</h2>
            <p>${i(w(e.description||{}))}</p>
            <div class="tag-row">
              <span class="pill">${i(e.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
              <span class="pill">${i(e.kanjiCount||0)} ${i(_("cardsToday"))}</span>
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

        ${pr(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(c.outline)}</h2>
              <p>${i(w(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,c.outline,E(o.sections?.length||0,4))}
              ${M(p()==="ru"?"Практика":"Practice",o.practice?.length||0,c.practice,E(o.practice?.length||0,4))}
            </div>
          </article>
          ${Um(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(g=>`<li>${i(w(g))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(g=>`
              <article class="jlpt-section-card">
                <h3>${i(w(g.title))}</h3>
                <p>${i(w(g.body))}</p>
                ${Array.isArray(g.points)&&g.points.length?`<ul>${g.points.map($=>`<li>${i(w($))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(c.practice)}</h3>
                <ul>${o.practice.map(g=>`<li>${i(w(g))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(g=>`<li>${i(w(g))}</li>`).join("")}</ul>
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
          ${r.map(g=>py(g)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function oc(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Загружаем урок…",text:`Подгружаю карточки и упражнения ${t}. Адрес сохранён — после загрузки откроется нужный урок.`,back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:"Loading lesson…",text:`Loading ${t} cards and exercises. The URL is preserved and the requested lesson will open next.`,back:"All textbooks"};return`
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
            <h2>${i(w(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(w(e?.description||{}))}</p>
            <div class="achievement-progress" aria-hidden="true"><i style="width:60%"></i></div>
          </div>
          ${Ln("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function Iy(e,t,n=null){const s=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Не удалось загрузить карточки урока",text:"Проверьте подключение и попробуйте ещё раз. Прогресс, XP и Moon Fragments не изменились.",retry:"Повторить",back:"К списку уроков"}:{eyebrow:`${t} · Flash Kanji`,title:"Could not load lesson cards",text:"Check your connection and try again. Progress, XP, and Moon Fragments were not changed.",retry:"Retry",back:"Lesson list"},r=n instanceof Error?n.message:String(n||"");return`
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
            <h2>${i(w(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(w(e?.description||{}))}</p>
          </div>
          ${Ln("eva","concerned","error","n5-hero-mascot")}
        </article>
      </section>
    `}function jg(){return p()==="ru"?{allTextbooks:"Все учебники",start:"Начать курс",continue:"Продолжить",downloadPdf:"Скачать PDF",reference:"Справочник",lessons:"Уроки",practice:"Практикум чтения",final:"Итоговая контрольная",review:"Повторение",sources:"Источники",russianCourse:"Курс на русском",showRomaji:"Показывать ромадзи",hideRomaji:"Скрыть ромадзи",check:"Проверить",score:"Результат",passed:"зачёт",notPassed:"повторить",correct:"верно",wrong:"ошибка",writeDone:"Пропись выполнена",markWriting:"Я написал(а) от руки",manualWriting:"Ручная пропись",noAutoWriting:"Почерк не оценивается автоматически: отметьте шаг, когда написали знаки от руки.",noCourse:"Курс не найден",loading:"Загружаю курс",offlineHint:"Если вы уже открывали этот урок, service worker отдаст его из кэша. Иначе появится понятный offline fallback.",remember:"Помню",forgot:"Не помню",noReview:"Повторений пока нет. Пройдите урок или откройте знаки курса.",sourcePdf:"Оригинальный PDF",taskCount:"заданий",characters:"знаков",lessonsCount:"уроков",lesson:"урок",lessonProgress:"Прогресс урока",newSigns:"Новые знаки",newSignsHint:"Сначала узнаём форму и чтение каждого нового знака.",characterCard:"Карточка знака",characterCardHint:"Идём как в кандзи-уроке: один знак, быстрое решение, следующая карточка.",cardComplete:"Все знаки урока открыты",cardCompleteHint:"Теперь можно закрепить их в упражнениях, прописи и общем повторении.",backToFirstCard:"Повторить карточки",cardProgress:"Карточка",exampleWord:"Пример слова",readWrite:"Как читать и писать",readWriteHint:"Произнесите знак, посмотрите количество штрихов и переходите к ручной прописи.",reading:"Чтение",strokes:"Штрихи",tts:"Звук",strokeOrder:"Stroke-order",explanation:"Объяснение",explanationHint:"Ключевые правила урока вынесены в отдельные карточки.",examples:"Примеры",examplesHint:"Короткие слова и записи для чтения.",example:"Пример",meaning:"Значение",practiceBlock:"Практика",practiceHint:"Выполняйте задания небольшими блоками и проверяйте ответы сразу.",selfCheck:"Проверь себя",selfCheckHint:"Завершите ручную часть и отметьте пропись после тренировки."}:{allTextbooks:"All textbooks",start:"Start course",continue:"Continue",downloadPdf:"Download PDF",reference:"Reference",lessons:"Lessons",practice:"Reading practice",final:"Final test",review:"Review",sources:"Sources",russianCourse:"Russian course",showRomaji:"Show romaji",hideRomaji:"Hide romaji",check:"Check",score:"Score",passed:"passed",notPassed:"retry",correct:"correct",wrong:"wrong",writeDone:"Writing done",markWriting:"I wrote it by hand",manualWriting:"Manual writing",noAutoWriting:"Handwriting is not graded automatically: mark this step after writing the signs by hand.",noCourse:"Course not found",loading:"Loading course",offlineHint:"If you opened this lesson before, the service worker can serve it from cache. Otherwise a clear offline fallback appears.",remember:"Remember",forgot:"Forgot",noReview:"No kana reviews yet. Finish a lesson or open course signs first.",sourcePdf:"Original PDF",taskCount:"tasks",characters:"characters",lessonsCount:"lessons",lesson:"lesson",lessonProgress:"Lesson progress",newSigns:"New signs",newSignsHint:"Start by recognizing the shape and reading of each new sign.",characterCard:"Character card",characterCardHint:"Use the kanji lesson rhythm: one sign, one decision, then the next card.",cardComplete:"All lesson signs are introduced",cardCompleteHint:"Now reinforce them with exercises, handwriting, and shared review.",backToFirstCard:"Repeat cards",cardProgress:"Card",exampleWord:"Example word",readWrite:"How to read and write",readWriteHint:"Play the sound, check the stroke count, then move to handwriting practice.",reading:"Reading",strokes:"Strokes",tts:"Sound",strokeOrder:"Stroke order",explanation:"Explanation",explanationHint:"The key lesson notes are separated into contrast cards.",examples:"Examples",examplesHint:"Short words and spellings for reading practice.",example:"Example",meaning:"Meaning",practiceBlock:"Practice",practiceHint:"Complete the exercises in compact blocks and check immediately.",selfCheck:"Check yourself",selfCheckHint:"Finish the handwriting step after practicing by hand."}}function Ty(e){const t=String(e||"").toLowerCase(),n=Ba(t),s=jg();if(!n&&!a.bootAncillaryLoaded)return ul({hadPriorVisit:Gl(a.progress)}).catch(c=>console.warn("Boot ancillary data failed to load.",c)),Sg({title:t,pdf_url:""},s);if(!n)return zi(new Error(s.noCourse));const r=Us(t);if(!r)return Bx(t).then(()=>P()).catch(()=>P()),a.kanaCourseErrors[t]?zi(a.kanaCourseErrors[t]):Sg(n,s);const o=String(a.activeTextbookSubroute||"").toLowerCase();if(o==="reference")return Jy(r,s);if(o==="sources")return Gy(r,s);if(o==="review")return qy(r,s);if(o==="final"||o==="final-test")return Uy(r,s);if(/^practice-\d+$/i.test(o)){const c=r.reading_practice?.find(l=>l.id===o);return c?zy(r,c,s):ta(ve("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}if(/^lesson-\d+$/i.test(o)){const c=r.lessons?.find(l=>l.id===o);return c?Ey(r,c,s):ta(ve("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}return Ry(r,s)}function Sg(e,t){return`
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
    `}function Ry(e,t){const n=yt(e.slug),s=e.lessons?.[0]?.id||"",r=n.currentRoute||s;xo(e.slug,r);const o=e.lessons.filter(c=>so(e.slug,c).passed).length;return`
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
          ${M(t.review,Ag(e,"due").length,t.characters,E(Ag(e,"due").length,Math.max(1,e.base_characters.length)))}
        </div>
        <div class="actions kana-course-tabs">
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/reference">${i(t.reference)}</a>
          <button class="btn ghost" type="button" data-action="route" data-route="review">${i(t.review)}</button>
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/final">${i(t.final)}</a>
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/sources">${i(t.sources)}</a>
          <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(os().settings.showRomaji?t.hideRomaji:t.showRomaji)}</button>
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.lessons)}</h2>
            <p>${i(p()==="ru"?"Курсы азбук независимы: хирагана не блокирует катакану и наоборот.":"Kana courses are independent: hiragana does not lock katakana and vice versa.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-lesson-grid">
          ${e.lessons.map(c=>_y(e,c,t)).join("")}
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.practice)}</h2>
            <p>${i(p()==="ru"?"Пять блоков чтения из PDF без обязательного ромадзи.":"Five PDF reading practice blocks without mandatory romaji.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-practice-grid">
          ${e.reading_practice.map(c=>Py(e,c,t)).join("")}
        </div>
      </section>
    `}function _y(e,t,n){const s=so(e.slug,t),r=s.passed?n.passed:s.completed?n.notPassed:n.start,o=s.completed?Math.round(s.latestScore/Math.max(1,dc(t.exercises))*100):0;return`
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
      `}function Py(e,t,n){const s=yt(e.slug).practices[t.id],r=dc(t.exercises),o=Number(s?.latestScore||0);return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p>${i((t.body||[]).slice(0,2).join(" "))}</p>
            <div class="progress mini"><span style="width:${E(o,Math.max(1,r))}%"></span></div>
          </div>
          <a class="btn ghost" href="#textbooks/${m(e.slug)}/${m(t.id)}">${i(n.practice)}</a>
        </article>
      `}function Ey(e,t,n){const s=yt(e.slug);xo(e.slug,t.id);const r=so(e.slug,t),o=dc(t.exercises),c=My(t),l=!!s.writing?.[t.id];return`
      <section class="page textbooks-page n5-course-page n5-lesson-page kana-course-page kana-lesson-page">
        <div class="kana-lesson-shell">
          ${Ky(e,t,n,c,r,o)}
          ${Dy(e,t,n,c)}
          ${Oy(c.explanations,n)}
          ${By(c.examples,n)}
          <section class="kana-lesson-step kana-practice-step" aria-labelledby="kanaPracticeTitle">
            <div class="kana-step-heading">
              <span class="pill">05</span>
              <h2 id="kanaPracticeTitle">${i(n.practiceBlock)}</h2>
              <p>${i(n.practiceHint)}</p>
            </div>
            <div class="kana-practice-stack">
              ${t.exercises.map(d=>cc(e.slug,t.id,"lesson",d,n)).join("")}
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
    `}function My(e){const t=(e.body||[]).map(d=>String(d||"").trim()).filter(Boolean),n=[],s=[],r={title:"",headers:[],rows:[]};let o=0;const c=d=>/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(d),l=d=>/^(Слова для чтения|Пример и узнавание)$/i.test(d);for(;o<t.length;){const d=t[o];if(/^\d+$/.test(d)){o+=1;continue}if(/^Цель раздела$/i.test(d)){for(o+=1;o<t.length&&!/^Знаки урока$/i.test(t[o]);)/^\d+$/.test(t[o])||n.push(t[o]),o+=1;continue}if(/^Знаки урока$/i.test(d)){for(o+=1;o<t.length&&!/^(Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(t[o]);)o+=1;continue}if(l(d)){r.title=d;const u=t.slice(o+1).filter(h=>!/^\d+$/.test(h));r.headers=u.slice(0,3);const f=u.slice(3);for(let h=0;h+2<f.length;h+=3)r.rows.push(f.slice(h,h+3));break}if(c(d)){const u=d,f=[];for(o+=1;o<t.length&&!c(t[o]);)/^\d+$/.test(t[o])||f.push(t[o]),o+=1;f.length&&s.push({title:u,body:f});continue}o+=1}return{goal:n,explanations:s,examples:r}}function Ky(e,t,n,s,r,o){const c=Number(r?.latestScore||0),l=E(c,Math.max(1,o)),d=s.goal.length?s.goal.join(" "):(t.body||[]).slice(0,2).join(" ");return`
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
              <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(os().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
              ${ls("textbook",{level:e.slug,subroute:t.id})}
            </div>
          </div>
        </article>
      `}function lc(e,t){return`${String(e||"").toLowerCase()}:${String(t||"")}`}function Cg(e,t){const n=lc(e,t?.id||""),s=t?.focus_characters?.length||0,r=Number(a.kanaLessonCharacterIndex[n]||0);return de(Number.isFinite(r)?r:0,0,s)}function Fy(e,t){const n=Array.isArray(e?.rows)?e.rows:[],s=String(t||""),r=n.find(o=>String(o?.[0]||"").includes(s))||n[0]||null;return r?{word:String(r[0]||""),reading:String(r[1]||""),meaning:String(r[2]||"")}:null}function Dy(e,t,n,s){const r=t.focus_characters||[];if(!r.length)return"";const o=Cg(e.slug,t),c=o>=r.length,l=r[Math.min(o,r.length-1)],d=`${Math.min(o+1,r.length)} / ${r.length}`,u=E(Math.min(o,r.length),Math.max(1,r.length));if(c)return`
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
              ${r.map(x=>`<span class="is-done">${i(x.kana)}</span>`).join("")}
            </div>
            <div class="actions">
              <button class="btn ghost" type="button" data-action="kana-lesson-card-reset" data-course="${m(e.slug)}" data-lesson="${m(t.id)}">${i(n.backToFirstCard)}</button>
              <a class="btn primary" href="#kanaPracticeTitle">${i(n.practiceBlock)}</a>
            </div>
          </article>
        </section>
      `;const f=Bt(e.slug),h=Ts(e.slug,l.kana),g=Ue(f[h]||null),$=Fy(s.examples,l.kana),L=os().settings.showRomaji,C=Cr();return`
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
                ${Er(g.state)}
                <span class="pill">${i(n.cardProgress)} ${i(d)}</span>
              </div>
              <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${m(l.kana)}" aria-label="${m(n.tts)}">🔊</button>
            </div>
            <div class="kanji-focus kana-lesson-focus" lang="ja" aria-label="${m(l.kana)}">${i(l.kana)}</div>
            <h3>${i(n.reading)}: ${i(L&&l.romaji?l.romaji:l.kana)}</h3>
            <p class="label">${i(e.title)} · ${i(l.strokes?`${l.strokes} ${n.strokes.toLowerCase()}`:n.characters)} · ${i(Qt(g.dueAt))}</p>
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
              ${r.map((x,k)=>`<span class="${k<o?"is-done":k===o?"is-current":""}">${i(x.kana)}</span>`).join("")}
            </div>
            <div class="progress mini" aria-hidden="true"><span style="width:${u}%"></span></div>
            <div class="rating-grid srs-binary-grid">
              <button class="btn danger" type="button" data-action="kana-lesson-card" data-course="${m(e.slug)}" data-lesson="${m(t.id)}" data-kana="${m(l.kana)}" data-rating="forgot">${i(C.forgot)} <small>${i(C.forgotHint)}</small></button>
              <button class="btn success" type="button" data-action="kana-lesson-card" data-course="${m(e.slug)}" data-lesson="${m(t.id)}" data-kana="${m(l.kana)}" data-rating="remember">${i(C.remember)} <small>${i(C.rememberHint)}</small></button>
            </div>
          </article>
        </section>
      `}function Oy(e,t){return e.length?`
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
      `:""}function By(e,t){if(!e?.rows?.length)return"";const n=e.headers.length===3?e.headers:[t.example,t.reading,t.meaning];return`
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
      `}function zy(e,t,n){return xo(e.slug,t.id),`
      <section class="page textbooks-page n5-course-page kana-course-page kana-practice-page">
        ${oa(e,t.title,n,t.id)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h2>${i(t.title)}</h2>
            ${Ng(t.body)}
          </div>
        </article>
        ${t.exercises.map(s=>cc(e.slug,t.id,"practice",s,n)).join("")}
      </section>
    `}function Uy(e,t){return xo(e.slug,"final"),`
      <section class="page textbooks-page n5-course-page n5-final-page kana-course-page kana-final-page">
        ${oa(e,t.final,t)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(t.final)}</span>
            <h2>${i(e.final_test.title)}</h2>
            <p>${i((e.final_test.body||[]).slice(0,4).join(" "))}</p>
          </div>
        </article>
        ${(e.final_test.sections||[]).map(n=>cc(e.slug,"final","final",n,t)).join("")}
      </section>
    `}function Jy(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${oa(e,t.reference,t)}
        <article class="jlpt-section-card">
          <h2>${i(e.reference.title)}</h2>
          ${Ng(e.reference.body)}
        </article>
        <div class="kana-table-grid">
          ${e.base_characters.map(n=>Hy(n)).join("")}
        </div>
      </section>
    `}function Gy(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${oa(e,t.sources,t)}
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
    `}function qy(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page kana-review-page">
        ${oa(e,t.review,t)}
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
    `}function oa(e,t,n,s){return`
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(e.title)}</p>
            <h1>${i(t)} <span lang="ja">${i(e.native_title)}</span></h1>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${m(e.slug)}">${i(e.title)}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(os().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
            ${ls("textbook",{level:e.slug})}
          </div>
        </div>
      `}function Ng(e=[]){const t=[];for(const n of e.slice(0,40))/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова|Пример|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(n)?t.push(`<h3>${i(n)}</h3>`):t.push(`<p>${i(n)}</p>`);return t.join("")}function Hy(e){return`
        <button class="kana-char-chip" type="button" data-action="play-kana-tts" data-text="${m(e.kana)}">
          <span lang="ja">${i(e.kana)}</span>
          ${os().settings.showRomaji&&e.romaji?`<small>${i(e.romaji)}</small>`:""}
        </button>
      `}function cc(e,t,n,s,r){const o=Wy(e,t,n,s.id),c=a.kanaExerciseDrafts[uc(e,t,n,s.id)]||{};return`
        <form class="jlpt-section-card kana-exercise-card" data-kana-exercise-form data-course="${m(e)}" data-owner="${m(t)}" data-owner-type="${m(n)}" data-exercise="${m(s.id)}">
          <h3>${i(s.label)}</h3>
          <p>${i(s.instruction||"")}</p>
          <div class="kana-exercise-items">
            ${s.items.map(l=>Vy(l,o,r,c)).join("")}
          </div>
          ${o?.completed?`<p class="exercise-feedback ${o.passed?"is-correct":"is-wrong"}" aria-live="polite">${i(r.score)}: ${i(o.score)}/${i(o.total)} · ${i(o.passed?r.passed:r.notPassed)}</p>`:""}
          <button class="btn primary" type="button" data-action="kana-submit-exercise">${i(r.check)}</button>
        </form>
      `}function Vy(e,t,n,s={}){const r=Object.prototype.hasOwnProperty.call(s,e.number)?s[e.number]:t?.answers?.[e.number]||"",o=t?.completed?t.correct?.[e.number]:null;return`
        <label class="kana-answer-row ${o===!0?"is-correct":o===!1?"is-wrong":""}">
          <span>${i(e.number)}. ${i(e.prompt)}</span>
          <input type="text" name="kana-${m(e.number)}" value="${m(r)}" autocomplete="off" inputmode="text" />
          ${o===null?"":`<small>${i(o?n.correct:`${n.wrong}: ${e.solution||e.accepted_answers?.[0]||""}`)}</small>`}
        </label>
      `}function dc(e=[]){return(e||[]).reduce((t,n)=>t+(n.items||[]).length,0)}function so(e,t){const n=yt(e).lessons[t.id];return n||{completed:!1,passed:!1,latestScore:0,bestScore:0,exercises:{},updatedAt:null}}function Wy(e,t,n,s){const r=yt(e);return n==="lesson"?r.lessons?.[t]?.exercises?.[s]||null:n==="practice"?r.practices?.[t]?.exercises?.[s]||null:n==="final"&&(r.finalTest?.[s]||r.finalTest?.sections?.[s])||null}function Ts(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim(),r=Array.from(s)[0]?.codePointAt(0);return!we(n)||!Number.isInteger(r)?"":`kana:${n}:${r.toString(16).toUpperCase()}`}function ro(e,t=""){const n=String(e||"").trim(),s=n.match(/^kana:(hiragana|katakana):([0-9a-f]+)$/i);if(s){const c=Number.parseInt(s[2],16);return!Number.isInteger(c)||c<=0?null:{slug:s[1].toLowerCase(),kana:String.fromCodePoint(c),id:Ts(s[1],String.fromCodePoint(c))}}const r=n.match(/^(hiragana|katakana):(.+)$/i);if(r){const c=r[1].toLowerCase(),l=r[2].trim();return{slug:c,kana:l,id:Ts(c,l)}}const o=String(t||"").toLowerCase();return we(o)&&n?{slug:o,kana:n,id:Ts(o,n)}:null}function Bt(e){const t=String(e||"").toLowerCase();if(!we(t))return{};const n=yt(t),s=n.review&&typeof n.review=="object"?n.review:{},r={};let o=!1;Object.entries(s).forEach(([d,u])=>{const f=ro(d,t),h=f?.slug===t?f.id:"",g=Ue(u);if(!h){r[d]=g;return}const $=r[h];(!$||Number(g.reviewCount||0)>Number($.reviewCount||0)||(Date.parse(String(g.lastReviewedAt||""))||0)>(Date.parse(String($.lastReviewedAt||""))||0))&&(r[h]=g),h!==d&&(o=!0)});const c=Object.keys(s).sort().join("|"),l=Object.keys(r).sort().join("|");return(o||c!==l)&&(n.review=r),n.review}function xg(e,t){const n=Us(e),s=String(t||"");return n?.base_characters?.find(r=>r.kana===s)||null}function Lg(e){const t=Us(e)||Ba(e);return t?.title?t.title:String(e||"").toLowerCase()==="katakana"?p()==="ru"?"Катакана":"Katakana":p()==="ru"?"Хирагана":"Hiragana"}function Ag(e,t="due"){const n=Bt(e.slug),s=Date.now();return(e.base_characters||[]).map(r=>{const o=Ts(e.slug,r.kana),c=n[o]||null;return{...r,id:o,progress:c}}).filter(r=>t==="all"?!0:_d(r.progress?[{cardId:r.id,...r.progress}]:[],s).initial.length>0)}function Xy(e,t,n,s){return e?n==="lesson"?e.lessons?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="practice"?e.reading_practice?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="final"&&e.final_test?.sections?.find(r=>r.id===s)||null:null}function uc(e,t,n,s){const r=[e,n,t,s].map(o=>String(o||"").trim());return r.every(Boolean)?r.join(":"):""}function Qy(e){var L;const t=e.closest?.("[data-kana-exercise-form]");if(!t)return;const n=String(t.dataset.course||"").toLowerCase(),s=String(t.dataset.owner||""),r=String(t.dataset.ownerType||""),o=String(t.dataset.exercise||"");if(!we(n))return;const c=Us(n),l=Xy(c,s,r,o);if(!c||!l)return;const d=he(),u={},f=uc(n,s,r,o),h=new FormData(t);l.items.forEach(C=>{const x=h.get(`kana-${C.number}`);u[C.number]=Od(typeof x=="string"?x:"")});const g=_1(l,u),$=yt(n);if($.currentRoute=s,$.updatedAt=g.updatedAt,r==="lesson"){const C=c.lessons.find(N=>N.id===s),x=$.lessons[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};x.exercises[o]=g;const k=Ed(C?.exercises||[],x.exercises);Object.assign(x,k,{bestScore:Math.max(Number(x.bestScore||0),k.latestScore),updatedAt:g.updatedAt}),$.lessons[s]=x,x.passed&&n$(c,C?.focus_characters||[])}if(r==="practice"){const C=c.reading_practice.find(N=>N.id===s),x=$.practices[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};x.exercises[o]=g;const k=Ed(C?.exercises||[],x.exercises);Object.assign(x,k,{bestScore:Math.max(Number(x.bestScore||0),k.latestScore),updatedAt:g.updatedAt}),$.practices[s]=x}if(r==="final"){$.finalTest||($.finalTest={}),(L=$.finalTest).sections||(L.sections={}),$.finalTest.sections[o]=g;const C=Ed(c.final_test?.sections||[],$.finalTest.sections);Object.assign($.finalTest,C,{bestScore:Math.max(Number($.finalTest.bestScore||0),C.latestScore),updatedAt:g.updatedAt})}f&&delete a.kanaExerciseDrafts[f],F(g.passed?"answer_correct":"answer_wrong"),T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:d})}function Yy(e,t){const n=String(e||"").toLowerCase();if(!we(n)||!t)return;const s=he(),r=yt(n);r.writing[t]=new Date().toISOString(),r.currentRoute=t,r.updatedAt=r.writing[t],T(),J(jg().writeDone),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:s})}function Zy(e,t){const n=String(e||"").toLowerCase(),s=lc(n,t);!we(n)||!t||(a.kanaLessonCharacterIndex[s]=0,a.pendingFocus="kana-character-card",Ve())}function e$(e,t,n,s){const r=String(e||"").toLowerCase();if(!we(r)||!t||!n)return;const o=he(),c=Us(r),l=c?.lessons?.find(k=>k.id===t)||null;if(!c||!l)return;const d=Ts(r,n);if(!d)return;const u=yt(r),f=Bt(r),h=ie(Ue(f[d]||null)),g=Be(s)?"forgot":"remember",$=Md(h,g);f[d]=$,u.review=f,u.currentRoute=t,u.updatedAt=new Date().toISOString(),Ht(h,$,g),ke({skipAchievements:!0}),g==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,be("answer_wrong",{cardId:d,kana:n,rating:g},{skipAchievements:!0})):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),be("answer_correct",{cardId:d,kana:n,rating:g,combo:a.progress.correctCombo},{skipAchievements:!0}));const L=lc(r,t),C=l.focus_characters.findIndex(k=>k.kana===n),x=Cg(r,l);a.kanaLessonCharacterIndex[L]=Math.min((C>=0?C:x)+1,l.focus_characters.length),a.pendingFocus="kana-character-card",F(g==="forgot"?"answer_wrong":"answer_correct"),T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:o})}function t$(e,t,n){hf(e,t,n)}function n$(e,t=[]){const n=yt(e.slug),s=Bt(e.slug);t.forEach(r=>{const o=Ts(e.slug,r.kana);o&&(s[o]||(s[o]=Md(null,"remember")))}),n.review=s}function s$(){const e=he(),t=os();t.settings.showRomaji=!t.settings.showRomaji,T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:e})}function r$(e){const t=String(e||"").trim();t&&(So(),Kh(t)||J(p()==="ru"?"Системная озвучка недоступна.":"System speech is not available."))}function a$(e){a.activeTextbookLevel="N5",a.activeJlptLesson="N5",ca();const t=String(a.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return S$();if(t==="review")return $$();const n=Ut(t);return n?(se().currentLessonId=n.id,Rt("N5",n.id,"n5_lesson_page"),on("N5",n,"n5_lesson_page"),k$(e,n)):i$(e)}function i$(e){const t=_$(),n=Ze(),s=et(),r=I$(),o=a.n5Meta||{},c=w(o.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(w(o.description||e.description||{}))}</p>
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
          ${Ln("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>o$(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(w((a.n5Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(w(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${pr("N5")}
      </section>
    `}function o$(e){const t=Dg(e.id),n=Ze();let s=e.kanji.filter(r=>se().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${m(e.id)}" data-action="n5-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(w(e.title))}</h3>
        <p>${i(w(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(P$(t))}</small>
      </a>
    `}function Gn(){return a.progress.jlptLessonStudy=tp(jl(),a.progress.jlptLessonStudy||{}),a.progress.jlptLessonStudy}function Ye(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function zt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function pc(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!1;const r=Wt(n),o=Nn(n,r,s),c=qn(n,s).some(l=>$e.has(`${n.toLowerCase()}:${l}`));return!!(o||c)}function Rs(e,t,n){const s=Gn(),r=Ye(e,t?.id),o=Yu();let c=s.sessions[r];c||(c={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[r]=c),c.level=String(e||c.level||"").toUpperCase(),c.lessonId=String(t?.id||c.lessonId||""),c.answers||(c.answers={}),c.phase=Zu(c.phase),c.startedAt||(c.startedAt=new Date().toISOString()),c.updatedAt||(c.updatedAt=new Date().toISOString());let l=pc(e,t?.id);!l&&Rg(e,t)&&(l=!0,T());const d=zo({cards:n,session:c,confirmedCompleted:l});return c.currentIndex=d.currentIndex,c.phase=d.phase,d.status!=="done"&&!l&&(c.completedAt=null),d.status==="test-ready"&&(c.testOpenedAt||(c.testOpenedAt=c.updatedAt||new Date().toISOString())),d.status==="incomplete"&&(c.testOpenedAt=null),s.activeSessionKey=r,s.lastUpdatedAt=new Date().toISOString(),{session:c,key:r,status:d.status,expectedCardIds:d.expectedCardIds,answeredExpectedCardIds:d.answeredExpectedCardIds,answeredCount:d.answeredCount,currentIndex:d.currentIndex,total:d.total}}function l$(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function cr(e){const t=D(e);return t==="N5"?{level:t,course:se,lessons:et,lessonById:Ut,cardsForLesson:dn,buildExercises:Ps}:t==="N4"?{level:t,course:X,lessons:dt,lessonById:Vn,cardsForLesson:mr,buildExercises:ha}:t==="N3"?{level:t,course:V,lessons:pt,lessonById:Xn,cardsForLesson:hr,buildExercises:wa}:t==="N2"?{level:t,course:W,lessons:mt,lessonById:Yn,cardsForLesson:wr,buildExercises:ka}:t==="N1"?{level:t,course:te,lessons:ht,lessonById:Es,cardsForLesson:$a,buildExercises:ja}:null}function c$(e){const t=D(e);return t?`${t.toLowerCase()}Course`:""}function qn(e,t){const n=D(e),s=String(typeof t=="object"&&t?t.id:t||"").trim(),r=new Set(s?[s]:[]),o=String(n||"").toLowerCase();if(o){const c=s.match(/^lesson-(\d+)$/i);c&&r.add(`${o}-lesson-${c[1]}`);const l=s.match(new RegExp(`^${o}-lesson-(\\d+)$`,"i"));l&&r.add(`lesson-${l[1]}`)}return[...r].filter(Boolean)}function Nn(e,t,n){const s=t?.completedLessons||{};return qn(e,n).some(r=>!!s[r])}function d$(e,t){if(!e||!t)return null;const n=e.lessons(),s=n.find(o=>Number(o.order||0)===Number(t.order||0)+1);if(s)return s;const r=n.findIndex(o=>o.id===t.id);return r>=0&&n[r+1]||null}function gc(e,t,n=""){if(!e||!t)return"";const s=e.lessons(),r=[...new Set([n,...qn(e.level,t)].map(String).filter(Boolean))];for(const o of r){const c=o.match(/^(.*?)(\d+)$/);if(!c)continue;const l=Number(c[2])+1;if(s.length&&l>s.length)continue;const d=`${c[1]}${l}`,u=e.lessonById(d);return u&&u.id!==t.id?u.id:d}return""}function u$(e,t,n){if(!e||!t||!n)return;const s=e.lessons(),r=e.lessonById(t.currentLessonId);if(!(r?Nn(e.level,t,r)||Nn(e.level,t,t.currentLessonId):!t.currentLessonId||t.currentLessonId===n.id||Nn(e.level,t,t.currentLessonId)))return;const c=s.find(l=>!Nn(e.level,t,l));t.currentLessonId=c?.id||gc(e,n,t.currentLessonId)||r?.id||n.id}function p$(e,t){const n=D(e);if(!n||!t)return!1;if([t.completedLessons,t.studiedKanji,t.srsKanji,t.difficultKanji,t.exerciseResults,t.completedExercises].some(o=>o&&typeof o=="object"&&Object.keys(o).length>0))return!0;const r=`${n}:`;return Object.keys(a.progress?.jlptLessonStudy?.sessions||{}).some(o=>o.startsWith(r))}function Ig(e,t){const n=D(e);return`${String(n||e||"").toLowerCase()}:${String(t||"")}`}function Tg(e,t){const n=cr(e);if(!n)return null;const s=typeof t=="object"&&t?t:n.lessonById(t);if(!s)return null;const r=n.course(),o=n.cardsForLesson(s),c=n.buildExercises(s),l=a.progress?.jlptLessonStudy?.sessions?.[Ye(n.level,s.id)]||null,d=pc(n.level,s.id);return{...vI({cards:o,session:l,confirmedCompleted:d,exercises:c,exerciseResults:r.exerciseResults||{},completedExercises:r.completedExercises||{},isCardStudied:u=>!!(r.studiedKanji?.[u.kanji]||r.difficultKanji?.[u.kanji]||jp(u))}),level:n.level,lesson:s,course:r,cards:o,exercises:c}}function g$(e,t,n,s){const r=D(e);if(!r||!t)return!1;const o=Gn(),c=Ye(r,t),l=o.sessions[c];return l?(l.phase="done",l.completedAt=s,l.updatedAt=s,l.currentIndex=Math.max(0,Number(n||0)),o.activeSessionKey=c,o.lastUpdatedAt=s,!0):!1}function m$(e,t,n,s,r=new Date().toISOString()){const o=cr(e);if(!o||!t||!n)return!1;const c=c$(o.level),l=c&&a.progress?.[c]||n;c&&a.progress&&!a.progress[c]&&(a.progress[c]=l),l.completedLessons||(l.completedLessons={});const d=qn(o.level,t),u=d.some(k=>!!l.completedLessons[k]),f=d.map(k=>l.completedLessons[k]).find(Boolean)||r;d.forEach(k=>{l.completedLessons[k]=f}),n!==l&&(n.completedLessons||(n.completedLessons={}),d.forEach(k=>{n.completedLessons[k]=f})),d.forEach(k=>$e.add(Ig(o.level,k))),g$(o.level,t.id,s?.length||0,f);const h=d$(o,t),g=o.lessonById(l.currentLessonId),$=h?.id||gc(o,t,l.currentLessonId)||t.id,L=qn(o.level,l.currentLessonId),C=L.some(k=>d.includes(k)),x=L.some(k=>!!l.completedLessons[k]);return(!l.currentLessonId||l.currentLessonId===t.id||g?.id===t.id||C||x)&&(l.currentLessonId=$),u$(o,l,t),n!==l&&(n.currentLessonId=l.currentLessonId),ur(o.level),!u}function Rg(e,t){const n=Tg(e,t);if(!n)return!1;const s=Nn(n.level,n.course,n.lesson),r=qn(n.level,n.lesson).some(c=>$e.has(Ig(n.level,c))),o=!!(n.cardStudyComplete&&n.exerciseComplete);return s||!(n.canMigrateCompletion||o||r)?!1:m$(n.level,n.lesson,n.course,n.cards)}function dr(e,t){const n=Tg(e,t);return n?n.complete?"completed":n.study.answeredCount>0||n.cardStudyComplete||n.correctExerciseCount>0||(n.lesson.kanji||[]).some(r=>n.course.studiedKanji?.[r]||n.course.difficultKanji?.[r])?"started":"new":"new"}function _s(e){const t=cr(e);return t?t.lessons().filter(n=>dr(t.level,n.id)==="completed").length:0}function ur(e){var o;const t=D(e),n={N5:"N4",N4:"N3",N3:"N2",N2:"N1"}[t],r=cr(t)?.lessons()||[];return!t||!n||!r.length||_s(t)<r.length?!1:((o=a.progress).unlockedJlptLevels||(o.unlockedJlptLevels=[]),[t,n].forEach(c=>{a.progress.unlockedJlptLevels.includes(c)||a.progress.unlockedJlptLevels.push(c)}),!0)}function f$(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(ho).join("")}
      </ul>
    `:""}function h$(e){const t=Ea(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${zc(e)}
          ${n?`
            <div>
              <h3>${i(_("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function v$(e,t,n,s,r,o,c={}){if(!n)return"";const l=typeof c.examples=="function"?c.examples(n,t)||[]:[],d=typeof c.sentence=="function"?c.sentence(n,t):"",u=typeof c.extra=="function"?c.extra(n,t):"",f=c.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),g=Number(s||0),$=B(n.id),L=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(g+1)}</span>
              <span class="pill">${i($.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(_("strokes"))}</span>`:""}
              ${Qm(n)}
            </div>
            <h2>${i(K(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(g+1,r)} из ${r}`:`Kanji ${Math.min(g+1,r)} of ${r}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${Zm(n,"onyomi",o.onyomi,n.onyomi)}
              ${Zm(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${f$(l)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${h$(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${m(f)}" data-level="${m(h)}" data-lesson="${m(L)}" data-card="${m(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${m(f)}" data-level="${m(h)}" data-lesson="${m(L)}" data-card="${m(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function w$(e,t,n,s,r,o="test-ready"){const c=o==="done";return`
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
    `}function b$(e,t,n){return`
      <article class="lesson-player-card lesson-study-complete lesson-study-unavailable">
        <div class="lesson-study-complete-copy">
          <span class="pill danger-pill">${i(e||"")} · ${i(p()==="ru"?"карточки недоступны":"cards unavailable")}</span>
          <h2>${i(p()==="ru"?"Не удалось загрузить карточки урока":"Could not load lesson cards")}</h2>
          <p>${i(Li())}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${m(e)}">${i(p()==="ru"?"Повторить":"Retry")}</button>
            <a class="btn ghost" href="#textbooks/${m(e)}">${i(p()==="ru"?"К списку уроков":"Lesson list")}</a>
          </div>
        </div>
      </article>
    `}function la(e,t,n,s,r={}){const o=Rs(e,t,n),c=l$(o,n),l=Number(o.answeredCount||0),d=Number(o.total||0),u=r.playerId||zt(e,t?.id,"player"),f=d?E(l,d):0,h=c?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(l+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":o.status==="incomplete"?p()==="ru"?"Карточки не загружены":"Cards not loaded":p()==="ru"?"Карточки изучены":"Cards studied",g=c?K(c):o.status==="done"?s.lessonComplete:h;return`
      <article class="study-card lesson-player lesson-study-player" id="${m(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(g)}</strong>
          <div class="meter"><i style="width:${f}%"></i></div>
        </div>
        ${c?v$(e,t,c,o.currentIndex,d,s,r):o.status==="incomplete"?b$(e):w$(e,t,s,d,l,o.status)}
      </article>
    `}function k$(e,t){const n=Ze(),s=dn(t),r=Ps(t),o=Dg(t.id),c=Rs("N5",t,s);let l=o==="completed";const d=`n5:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(G=>fc(G.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(G=>se().studiedKanji[G.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,x=t.kanji.filter(G=>se().difficultKanji[G]).join(" · "),k=et().find(G=>G.order===t.order+1),N=zt("N5",t.id,"player"),z=zt("N5",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · ${i(n.lesson)} ${t.order}/10</p>
            <h1>${i(w(t.title))}</h1>
            <p>${i(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(n.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.difficult)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(w(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(c.answeredCount,$)}/${$}`,n.kanji,E(c.answeredCount,$))}
            ${M(n.exercises,`${f}/${r.length}`,n.correct,E(f,r.length))}
          </div>
        </article>

        ${la("N5",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:G=>Gt(G),sentence:G=>y$(G,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(Z(G.reading||""))}</span>
                <small>${i(w({ru:G.ru,en:G.en}))}</small>
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
            ${r.map(G=>_g(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>se().studiedKanji[G.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
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
    `}function y$(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Z(n.reading||""))}</span>
        <small>${i(w({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function _g(e){const t=Ze(),n=fc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Hn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(w(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(Wg(e.id))}" type="text" maxlength="2" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Pg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(w(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${ua("N5",e).map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Pg(e,n)}
      </article>
    `}function Pg(e,t){if(!t)return"";const n=Ze(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function $$(e){const t=Ze(),n=se().activeReviewMode||"due",s=Z$(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${m(r.id)}">${i(w(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>j$(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function j$(e,t){const n=Ze(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Qt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Gt(e)[0]?.word||e.hiragana||"")} · ${i(Gt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function S$(e){const t=Ze(),n=a.n5FinalTest||{},s=Hg(),r=se().finalTest,o=gn(r,s),c=o.answered,l=o.ready,d=a.finalTestBusy;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const h=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==h)&&(r.percent=h),r.completedAt||(r.completedAt=new Date().toISOString()),T()}const u=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,f=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Final</p>
            <h1>${i(w(n.title||{}))}</h1>
            <p>${i(w(n.description||{}))}</p>
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
            ${Xt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,g)=>C$(h,g)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Xt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function C$(e,t){const n=se().finalTest.answers?.[e.id],s=!!se().finalTest.completedAt,r=a.finalTestModal&&a.finalTestModal.level==="N5"&&a.finalTestModal.kind==="warning"?a.finalTestModal:null,o=!!(r&&Array.isArray(r.missingIds)&&r.missingIds.includes(e.id));return`
      <article id="${m($r("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(c=>{const l=n===c.value;return`<button class="btn ${s&&c.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${m(e.id)}" data-value="${m(c.value)}">${i(c.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ze().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ze(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"К N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Eg(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Mg(e){return D(e)||String(e||"").toUpperCase()}function Kg(e){const t=Mg(e);return Array.isArray(a.jlptReadingByLevel?.[t])?a.jlptReadingByLevel[t]:[]}function mc(e){const t=a.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function Fg(e){return Z(Ca(String(e?.text||"")).replace(/\s+/g," ").trim())}function N$(e){const t=D(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function x$(){const e=Array.isArray(a.cards)?a.cards:[];if(!e.length)return[];const t=[];return _e.forEach(n=>{Kg(n).forEach((s,r)=>{const o=mc(s),c=Fg(s),l=Pc({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:c,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,N$(n));l&&(l.kind="cloze",l.tiles=ts(l,e),l.source="markdown",l.sourceId=String(s.id||""),l.sourceKind="markdown",l.sourceTitle=o.title,l.title=o.title,l.genre=s.genre||"",l.goal=s.goal||"",l.passageSource=s.source||"",l.questions=Array.isArray(s.questions)?s.questions:[],l.level=n,l.order=r+1,t.push(l))})}),t}function L$(e){const t=mc(e),n=Fg(e),s=n?nf(n):"",r=w(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Oc())}</summary>
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
            <span>${i(Oc())}</span>
            <strong>${i(r||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function pr(e){const t=Kg(e);if(!t.length)return"";const n=Eg(),s=Mg(e),r=za(s,"textbook_reading_block"),o=Lr(s);return(r||o)&&T(),`
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
          ${t.map((c,l)=>A$(c,s,l)).join("")}
        </div>
      </section>
    `}function A$(e,t,n){const s=Eg(),r=mc(e),o=Array.isArray(e?.questions)?e.questions:[];return`
      <article class="jlpt-reading-card">
        <div class="jlpt-reading-card-head">
          <div class="tag-row compact-tags">
            <span class="pill">${i(t)}</span>
            <span class="pill">${i(n+1)}</span>
            ${e.genre?`<span class="pill">${i(e.genre)}</span>`:""}
          </div>
          <h3>${i(e.title||`${t}-${n+1}`)}</h3>
          ${r.title.ru||r.title.en?`<p class="jlpt-reading-meta">${i(w(r.title))}</p>`:""}
          ${e.goal?`<p class="jlpt-reading-meta">${i(s.goal)}: ${i(e.goal)}</p>`:""}
          ${e.source?`<p class="jlpt-reading-meta">${i(s.source)}: ${i(e.source)}</p>`:""}
        </div>
        <div class="jlpt-reading-text">${i(e.text||"")}</div>
        ${L$(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(c=>`<li>${i(c)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function ca(){a.progress.n5Course=sp(Cl(),a.progress.n5Course||{});const e=et();!Ut(a.progress.n5Course.currentLessonId)&&e[0]&&(a.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n5Course.completedLessons[s.id]);return!a.progress.n5Course.currentLessonId&&n&&(a.progress.n5Course.currentLessonId=n.id),a.progress.n5Course}function se(){return ca()}function et(){return a.n5Textbook?.items||[]}function Ut(e){const t=String(e||"");return t&&et().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function I$(){return Ut(se().currentLessonId)||et().find(e=>!se().completedLessons[e.id])||et()[0]||null}function dn(e){return(e?.kanji||[]).map(t=>T$(t,e)).filter(Boolean)}function Jt(){const e=new Set;return et().flatMap(t=>dn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function T$(e,t=null){const n=String(e||""),s=a.n5KanjiCatalog?.find(c=>c.kanji===n)||null,r=a.cards.find(c=>c.kanji===n&&String(c.jlpt||"").toUpperCase()==="N5")||a.cards.find(c=>c.kanji===n)||null,o=t?.id||s?.lessonId||null;return r&&s?Ai({...r,lessonId:r.lessonId||o},s):r||(s?Ai({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function da(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:Z(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:Z(e.hiragana||""),romaji:e.romaji||"",translation:K(e)}]}function Gt(e){return da(e,e.examples)}function R$(e,t){const n=t?.word||e.kanji,s=Z(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${K(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${K(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function _$(){const e=Jt(),t=se(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:ao(),reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Dg(e){return dr("N5",e)}function P$(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ao(){return _s("N5")}function Ps(e){const t=dn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n5Exercises?.types||[]).map(C=>[C.type,C.title])),r=Object.fromEntries((a.n5Exercises?.types||[]).map(C=>[C.type,C])),o=C=>r[C]||{rewardXp:a.n5Meta?.rewards?.exerciseXp||7,rewardMoon:a.n5Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:un({value:l.id,label:K(l)},t.slice(1).map(C=>({value:C.id,label:K(C)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:un({value:d.kanji,label:d.kanji},t.filter(C=>C.id!==d.id).map(C=>({value:C.kanji,label:C.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=Gt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word,answer:f.reading,answerLabel:f.reading,kanji:u.kanji,cardId:u.id,options:un({value:f.reading,label:f.reading},t.flatMap(C=>Gt(C).map(x=>({value:x.reading,label:x.reading}))).filter(C=>C.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:w({ru:h.ru,en:h.en}),answerLabel:w({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:un({value:w({ru:h.ru,en:h.en}),label:w({ru:h.ru,en:h.en})},n.slice(1).map(C=>({value:w({ru:C.ru,en:C.en}),label:w({ru:C.ru,en:C.en})})),1),...o("sentence")});const g=t[3]||t[0],$=Gt(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:Va($),answer:$.word,answerLabel:$.word,kanji:g.kanji,cardId:g.id,options:un({value:$.word,label:$.word},t.flatMap(C=>Gt(C).map(x=>({value:x.word,label:x.word}))).filter(C=>C.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];return c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")}),c.slice(0,a.n5Exercises?.lessonQuestionCount||6).map(C=>({...C,level:"N5",lessonId:e.id}))}function un(e,t,n=0){const s=new Set([String(e.value)]),r=[e];if(t.forEach(l=>{const d=String(l.value||"");!d||s.has(d)||r.length>=4||(s.add(d),r.push(l))}),Jt().forEach(l=>{if(r.length>=4)return;const d={value:l.id,label:l.kanji};s.has(String(d.value))||(s.add(String(d.value)),r.push(d))}),r.length<=1)return r;const c=n%r.length;return[...r.slice(c),...r.slice(0,c)]}function E$(){return a.route==="review"?`review:${a.reviewSession?.startedAt||"active"}`:`route:${a.route}:${a.activeTextbookLevel||""}:${a.activeTextbookSubroute||""}`}function M$(...e){return[E$(),...e].map(t=>String(t??"").trim().replace(/\s+/g," ")).join(":")}function Og(e,...t){const n=Array.isArray(e)?e:[];if(n.length<=1)return n;a.answerOptionOrders||(a.answerOptionOrders={});const s=M$(...t),r=pI(n,a.answerOptionOrders[s]);return a.answerOptionOrders[s]=r.order,r.options}function ua(e,t){return Og(t?.options||[],"textbook",e,t?.lessonId||"",t?.id||"")}function K$(e,t,n=0){return Og(t?.options||[],"reading",e?.level||"",e?.exerciseId||"",t?.id||n)}function Bg(e){for(const t of et()){const n=Ps(t).find(s=>s.id===e);if(n)return n}return null}function Hn(e,t,n=""){return a.route==="review"&&a.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(a.activeExerciseReviewId||"")===String(t||"")&&(!n||String(a.activeExerciseReviewSource||"")===String(n||""))}function pa(e,t,n){return Hn(e,n)?a.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function F$(e,t,n){const s=D(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const r=e.exerciseSrs[String(n.id)]||null;if(r)return Bs(r,{level:s,lessonId:n.lessonId||r.lessonId||"",exerciseId:n.id,cardId:n.cardId||r.cardId||"",kanji:n.kanji||r.kanji||"",type:n.type||r.type||"",title:n.title||r.title||null,prompt:n.prompt||r.prompt||"",answer:n.answer||r.answer||"",answerLabel:n.answerLabel||r.answerLabel||""});const o=Nr(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function D$(e,t,n,s){if(!e||!n)return;const r=D(t);r&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=Bs(s,{level:r,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function ga(e,t,n,s,r,o={}){const c=D(e);if(!c||!t||!n)return;const l=new Date().toISOString(),d=Hn(c,n.id),u=he(),f=d?re.TOP:re.PRESERVE,h=!!o.quietReward;if(d&&a.reviewExerciseResults?.[n.id])return;const g={selected:s,correct:r,checkedAt:l};d?(a.reviewExerciseResults||(a.reviewExerciseResults={}),a.reviewExerciseResults[n.id]=g,a.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=g;const $=ie(F$(t,c,n)||Nr(c,n.lessonId||"",n.id,n)),L=ye($,r?"good":"again");if(D$(t,c,n,L),Ht($,L,r?"good":"again"),ke(),r){if(a.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=l,o.markCompleted?.(l),(o.markStudied||(()=>{}))();const x=Number(o.rewardXp||0),k=Number(o.rewardMoon||0);(x||k)&&H(x,k,o.rewardKey||`exercise:${n.id}`,{silent:h})}}else if(a.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const x=n.answerLabel||n.answer;x&&o.markWordMistake?.(x)}pe({scrollPolicy:f,viewportSnapshot:u}),T(),Mt("textbook exercise post-render effects",()=>{F(r?"answer_correct":"answer_wrong"),Y({silent:h})},{scrollPolicy:f,viewportSnapshot:u})}function zg(e){const t=D(e?.level||"");return t==="N5"?{xp:Number(a.n5Meta?.rewards?.exerciseXp||7),moon:Number(a.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(a.n4Meta?.rewards?.readingXp||a.n4Meta?.rewards?.exerciseXp||10),moon:Number(a.n4Meta?.rewards?.readingMoon||a.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(a.n3Meta?.rewards?.readingXp||a.n3Meta?.rewards?.exerciseXp||10),moon:Number(a.n3Meta?.rewards?.readingMoon||a.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(a.n2Meta?.rewards?.readingXp||a.n2Meta?.rewards?.exerciseXp||10),moon:Number(a.n2Meta?.rewards?.readingMoon||a.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(a.n1Meta?.rewards?.readingXp||a.n1Meta?.rewards?.exerciseXp||10),moon:Number(a.n1Meta?.rewards?.readingMoon||a.n1Meta?.rewards?.exerciseMoon||1)}}function Ug(e,t,n,s={}){if(!e?.id)return;const r=new Date().toISOString(),o=Hn(e.level,e.id,"reading"),c=he(),l=o?re.TOP:re.PRESERVE,d=!!s.quietReward,u=ie(as(e)||rs(e));if(a.reviewExerciseResults||(a.reviewExerciseResults={}),e.kind==="cloze"){u.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():u.selectedIndices||[],u.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(z=>({kanji:String(z?.kanji||""),reading:String(z?.reading||"")})).filter(z=>z.kanji):u.selectedTiles||[],u.selectedText=String(t||""),u.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():u.wrongIndexes||[],u.completed=!0,u.completedAt=r,u.correct=!!n,u.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:r}},zs(e,u),a.reviewExerciseResults[e.id]=ie(u),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1;const x=ie(u),k=ye(x,n?"good":"again");k.selectedIndices=u.selectedIndices,k.selectedTiles=u.selectedTiles,k.selectedText=u.selectedText,k.wrongIndexes=u.wrongIndexes,k.completed=!0,k.completedAt=r,k.correct=!!n,k.answers=u.answers,zs(e,k),a.reviewExerciseResults[e.id]=ie(k),Ht(x,k,n?"good":"again"),ke();const N=zg(e);n?H(N.xp,N.moon,`reading:${e.id}`,{silent:d}):H(Math.max(1,Math.round(N.xp*.35)),0,`reading:${e.id}:again`,{silent:d}),o&&Ao("reading-cloze"),pe({scrollPolicy:l,viewportSnapshot:c}),T(),Mt("reading cloze post-render effects",()=>{F(n?"answer_correct":"answer_wrong"),Y({silent:d})},{scrollPolicy:l,viewportSnapshot:c});return}const f=e.question||e.questions?.[0]||null,h=String(s.questionKey||f?.id||e.id);if(u.answers||(u.answers={}),u.answers[h])return;if(u.answers[h]={selected:String(t||""),correct:!!n,checkedAt:r},u.completed=!!h&&Object.keys(u.answers).length>=Qc(),u.completedAt=u.completed?r:u.completedAt||null,u.correct=u.completed?Object.values(u.answers).every(x=>!!x?.correct):!1,u.selectedText=String(t||""),zs(e,u),a.reviewExerciseResults[e.id]=ie(u),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1,T(),!u.completed){pe({scrollPolicy:l,viewportSnapshot:c}),Mt("reading question post-render sound",()=>{F(n?"answer_correct":"answer_wrong")},{scrollPolicy:l,viewportSnapshot:c});return}const g=ie(u),$=Object.values(u.answers).every(x=>!!x?.correct),L=ye(g,$?"good":"again");L.answers=u.answers,L.completed=!0,L.completedAt=r,L.correct=$,L.selectedText=String(t||""),L.wrongQuestions=Object.entries(u.answers).filter(([,x])=>!x?.correct).map(([x])=>x),zs(e,L),a.reviewExerciseResults[e.id]=ie(L),Ht(g,L,$?"good":"again"),ke();const C=zg(e);$?H(C.xp,C.moon,`reading:${e.id}`,{silent:d}):H(Math.max(1,Math.round(C.xp*.25)),0,`reading:${e.id}:again`,{silent:d}),o&&Ao("reading-exercise"),pe({scrollPolicy:l,viewportSnapshot:c}),T(),Mt("reading exercise post-render effects",()=>{F(n?"answer_correct":"answer_wrong"),Y({silent:d})},{scrollPolicy:l,viewportSnapshot:c})}function O$(e){const t=jr();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),r=s===String(n.answer||"");Ug(t.exercise,s,r,{questionKey:String(e.dataset.question||n.id||t.exercise.id),quietReward:!0})}function B$(e){const t=jr();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=ie(as(n)||rs(n));if(s.completed||s.selectedIndices?.includes(e))return;const r=Math.max(1,qt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=r){J(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),zs(n,s),a.activeExerciseReviewSelection=s.selectedIndices.slice(),a.reviewExerciseResults[n.id]=ie(s),T(),s.selectedIndices.length>=r){Jg();return}P()}function z$(){const e=jr();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=ie(as(t)||rs(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),a.activeExerciseReviewSelection=n.selectedIndices.slice(),a.reviewExerciseResults[t.id]=ie(n),zs(t,n),T(),P())}function U$(){const e=jr();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=ie(as(t)||rs(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],a.activeExerciseReviewSelection=[],a.reviewExerciseResults[t.id]=ie(n),zs(t,n),T(),P())}function Jg(){const e=jr();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=qt(t),s=ie(as(t)||rs(t)),r=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(r.length<n.length){J(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=r.map(d=>t.tiles?.[d]).filter(Boolean),c=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),l=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);Ug(t,o.map(d=>d.kanji).join(""),c,{selectedIndices:r,selectedTiles:o,wrongIndexes:l,quietReward:!0})}function J$(){a.activeExerciseReviewTranslationOpen=!a.activeExerciseReviewTranslationOpen,P()}function fc(e){return pa("N5",se(),e)}function G$(e){const t=Bg(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;Gg(t,n,s)}function q$(e){const t=Bg(e);if(!t)return;const n=document.getElementById(Wg(t.id)),s=n?String(n.value||"").trim():"";Gg(t,s,s===t.answer)}function Gg(e,t,n){const s=se();ga("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||a.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,quietReward:!0,markStudied:()=>gr(e.kanji,e.cardId),markDifficult:()=>ma(e.kanji,e.cardId),markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function H$(e,t,n,s){var g;const r=he(),o=D(e)||String(e||"").toUpperCase(),c=o==="N5"?Ut(t):o==="N4"?Vn(t):o==="N3"?Xn(t):o==="N2"?Yn(t):o==="N1"?Es(t):null;if(!c)return;const l=Bl(o,c),d=l.find($=>String($.id)===String(n))||oe(n);if(!d)return;const u=Rs(o,c,l);if(u.session.answers?.[d.id])return;const f=new Date().toISOString();u.session.answers[d.id]={remembered:!!s,rating:s?"good":"again",answeredAt:f};const h=zo({cards:l,session:u.session,confirmedCompleted:pc(o,c.id)});u.session.currentIndex=h.currentIndex,u.session.phase=h.phase,u.session.updatedAt=f,h.status==="test-ready"&&((g=u.session).testOpenedAt||(g.testOpenedAt=f)),a.pendingFocus=null,pe({scrollPolicy:re.PRESERVE,viewportSnapshot:r}),T(),Wr(`${o} lesson SRS post-render commit`,()=>{const $=s?"good":"again";o==="N5"?qg(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N4"?sm(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N3"?fm(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N2"?xm(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0}):o==="N1"&&Fm(d.id,$,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:r,quietReward:!0})})}function qg(e,t,n="review",s={}){const r=oe(e);if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ie(B(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ht(h,g,f),ke(),gr(r.kanji,r.id),se().srsKanji[r.kanji]=new Date().toISOString(),d?(ma(r.kanji,r.id,!1),a.progress.totalCorrect+=1,H(a.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${r.id}`,{silent:l})):Be(t)?(ma(r.kanji,r.id),a.progress.totalWrong+=1,H(a.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,H(t==="easy"?a.n5Meta?.rewards?.knowXp||6:a.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),T(),Mt("N5 SRS post-render effects",()=>{F(Be(t)?"answer_wrong":"answer_correct"),Y({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function V$(e){const t=oe(e);if(!t)return;const n=he(),s=se();s.writingPractice[t.kanji]||(s.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},gr(t.kanji,t.id),H(8,1,`n5_writing:${t.id}`)),Y(),T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:n})}function W$(e){const t=Ut(e);if(!t)return;const n=se(),s=`n5:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=dn(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof J=="function"&&J(g);return}const c=Ps(t);if(!(c.length>0&&c.every(g=>fc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),dn(t).forEach(g=>{gr(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=B(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ie($),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=et().find(g=>g.order===t.order+1)?.id||t.id;const d=Gn(),u=d.sessions[Ye("N5",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Ye("N5",t.id),d.lastUpdatedAt=g}se(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),T({immediate:!0}),ur("N5");const f=a.n5Meta?.rewards?.lessonCompleteXp||45,h=a.n5Meta?.rewards?.lessonCompleteMoon||6;H(f,h,`n5_lesson:${t.id}`),Rr("N5",t.id),wt({title:`${Ze().lessonComplete}: ${w(t.title)}`,message:Ze().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),Y(),T(),P()}function gr(e,t=null){if(!e)return;const n=se();sr(n,e)}function ma(e,t=null,n=!0){if(e&&(se().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=ye(ie(s),"again"))}}function X$(e){const t=Ut(e);t&&(mn("textbook-lesson",{level:"N5",lessonId:t.id}),se().currentLessonId=t.id,Rt("N5",t.id,"n5_lesson_open"),on("N5",t,"n5_lesson_open"),fa(t.id))}function Q$(){fa("")}function Y$(e=null){e&&(se().activeReviewMode=e),fa("review")}function fa(e){a.route="textbooks",a.activeTextbookLevel="N5",a.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";jt(t),T(),ue(),Ft()}function Z$(e="due"){const t=Date.now(),n=se(),s=Jt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Hg(){const e=Jt(),t=et(),n=a.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(a.n5FinalTest?.questionCount||24,Math.max(e.length,1)),r=[];for(let o=0;o<s;o+=1){const c=e[o*7%e.length]||e[o%e.length],l=n[o%n.length],d=t.find(u=>u.kanji.includes(c.kanji))||t[0];r.push(ej(l,c,d,o))}return r.filter(Boolean)}function ej(e,t,n,s){const o=Gt(t)[0],c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:un({value:t.id,label:K(t)},Jt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:un({value:o.reading,label:o.reading},Jt().flatMap(l=>Gt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value!==o.reading),s)};if(e==="sentence"&&c){const l=w({ru:c.ru,en:c.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:un({value:l,label:l},et().flatMap(d=>d.sentences||[]).map(d=>({value:w({ru:d.ru,en:d.en}),label:w({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:cs(o),answer:l,answerLabel:l,options:un({value:l,label:l},Jt().flatMap(d=>Gt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==l),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:un({value:t.kanji,label:t.kanji},Jt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function tj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(se().finalTest.answers[t]=n,T(),P())}function Vg(e=!1){if(a.finalTestBusy)return;const t=se().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=Hg(),s=a.n5FinalTest||{},r=Ze(),o=gn(t,n),c=xC(s),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const N=o.firstMissingId?`#${$r("n5",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=N,T();return}let u=0;const f=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();z===N.answer?(u+=1,gr(N.kanji,N.cardId)):(z||h.push(N),f.push({id:N.id,kanji:N.kanji,answer:N.answerLabel,selected:z}),ma(N.kanji,N.cardId))});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let x=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const N=Number(s?.rewards?.completeXp||120),z=Number(s?.rewards?.completeMoon||20);x+=N,k+=z,H(N,z,"n5_final_complete")}if(t.passed&&!L){const N=Number(s?.rewards?.passXp||80),z=Number(s?.rewards?.passMoon||12);x+=N,k+=z,H(N,z,"n5_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=k,Ja("N5",t),se(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.finalTest=a.progress.n5Course.finalTest||{},Object.assign(a.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),T({immediate:!0}),a.finalTestModal={kind:"result",level:"N5",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:x,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Y(),T()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function nj(){se().finalTest=Cl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,T(),P()}function Wg(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function sj(e){a.activeTextbookLevel="N4",a.activeJlptLesson="N4";const t=hc();t.opened||(t.opened=!0,Y({silent:!0}),T());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return fj();if(n==="review")return cj();if(n==="kanji")return uj();if(n==="grammar")return pj();if(n==="reading")return gj();if(n==="listening")return mj();const s=Vn(n);return s?(X().currentLessonId=s.id,Rt("N4",s.id,"n4_lesson_page"),on("N4",s,"n4_lesson_page"),ij(e,s)):rj(e)}function rj(e){const t=wj(),n=Te(),s=dt(),r=vj(),o=a.n4Meta||{},c=w(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(w(o.description||e.description||{}))}</p>
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
          ${Ln("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>aj(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(w((a.n4Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(w(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${pr("N4")}
      </section>
    `}function aj(e){const t=em(e.id),n=Te();let s=e.kanji.filter(r=>X().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N4/${m(e.id)}" data-action="n4-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(w(e.title))}</h3>
        <p>${i(w(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(bj(t))}</small>
      </a>
    `}function ij(e,t){const n=Te(),s=mr(t),r=ha(t),o=em(t.id),c=Rs("N4",t,s);let l=o==="completed";const d=`n4:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(G=>wc(G.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(G=>X().studiedKanji[G.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,x=t.kanji.filter(G=>X().difficultKanji[G]).join(" · "),k=dt().find(G=>G.order===t.order+1),N=zt("N4",t.id,"player"),z=zt("N4",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · ${i(n.lesson)} ${t.order}/17</p>
            <h1>${i(w(t.title))}</h1>
            <p>${i(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(n.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(w(t.theme))}</span>
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

        ${la("N4",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:G=>Ct(G),sentence:G=>oj(G,t)})}

        ${lj(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(Z(G.reading||""))}</span>
                <small>${i(w({ru:G.ru,en:G.en}))}</small>
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
            ${r.map(G=>Xg(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>X().studiedKanji[G.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
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
    `}function oj(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Z(n.reading||""))}</span>
        <small>${i(w({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Te().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function lj(e){const t=Te(),n=(e.grammarFocus||[]).map(s=>vc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n4-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n4-section-grid">
          ${n.map(s=>`
            <article class="n4-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(w(s.title))}</h3>
              <p>${i(w(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(w({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${m(s.id)}" data-value="${m(Q(s))}">${i(X().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Xg(e){const t=Te(),n=wc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Hn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(w(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(om(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Qg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(w(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${ua("N4",e).map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Qg(e,n)}
      </article>
    `}function Qg(e,t){if(!t)return"";const n=Te(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function cj(e){const t=Te(),n=X().activeReviewMode||"due",s=Ej(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${m(r.id)}">${i(w(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>dj(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function dj(e,t){const n=Te(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Qt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Ct(e)[0]?.word||e.hiragana||"")} · ${i(Ct(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function uj(e){const t=Te(),n=tt();return`
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
              <p>${i(Ct(s)[0]?.word||"")} · ${i(Ct(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${m(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function pj(e){const t=Te();return`
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
          ${M(t.completedGrammar,`${Object.keys(X().completedGrammar||{}).length}/${a.n4Grammar.length}`,t.grammar,E(Object.keys(X().completedGrammar||{}).length,a.n4Grammar.length))}
          ${M(t.questions,a.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${a.n4Grammar.map(n=>{const s=X().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(w(n.title))}</h3>
                <p>${i(w(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Z(r.reading||""))}</span><small>${i(w({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(w(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(Ge(n).length?Ge(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function gj(e){const t=Te(),n=za("N4","n4_reading_page"),s=Lr("N4");return(n||s)&&T(),`
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
          ${a.n4Reading.map(r=>Yg(r,"reading")).join("")}
        </div>
      </section>
    `}function mj(e){const t=Te();return`
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
          ${a.n4Listening.map(n=>Yg(n,"listening")).join("")}
        </div>
      </section>
    `}function Yg(e,t){const n=Te(),s=t==="reading"?X().completedReading[e.id]:X().completedListening[e.id],r=t==="reading"?X().readingAnswers:X().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(w(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n4-question-block">
              <h3>${i(w(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(w(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function fj(e){const t=Te(),n=a.n4FinalTest||{},s=am(),r=X().finalTest,o=gn(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),T()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Final</p>
            <h1>${i(w(n.title||{}))}</h1>
            <p>${i(w(n.description||{}))}</p>
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
            ${Xt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>hj(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${a.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Xt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function hj(e,t){const n=X().finalTest.answers?.[e.id],s=!!X().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Te().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Te(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function hc(){a.progress.n4Course=rp(Nl(),a.progress.n4Course||{});const e=dt();!Vn(a.progress.n4Course.currentLessonId)&&e[0]&&(a.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n4Course.completedLessons[s.id]);return!a.progress.n4Course.currentLessonId&&n&&(a.progress.n4Course.currentLessonId=n.id),a.progress.n4Course}function X(){return hc()}function dt(){return a.n4Textbook?.items||[]}function Vn(e){const t=String(e||"");return t&&dt().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function vj(){return Vn(X().currentLessonId)||dt().find(e=>!X().completedLessons[e.id])||dt()[0]||null}function mr(e){return(e?.kanji||[]).map(t=>Zg(t)).filter(Boolean)}function tt(){const e=new Set;return(a.n4KanjiCatalog||[]).map(t=>Zg(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Zg(e){const t=String(e||""),n=a.n4KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N4")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ii(s,n):s||(n?Ii({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function vc(e){const t=String(e||"");return a.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Ct(e){return da(e,e.examples)}function wj(){const e=tt(),t=X(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:_s("N4"),completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function em(e){return dr("N4",e)}function bj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ha(e){const t=mr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n4Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n4Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n4Meta?.rewards?.exerciseXp||9,rewardMoon:a.n4Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:ut({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ut({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=Ct(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ut({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>Ct(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:w({ru:h.ru,en:h.en}),answerLabel:w({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ut({value:w({ru:h.ru,en:h.en}),label:w({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=Ct(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Va($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:ut({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>Ct(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=vc(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:w(C.question||C.explanation),answer:Q(C),answerLabel:Q(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:ut({value:Q(C),label:Q(C)},Ge(C).filter(k=>k!==Q(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const x=n[1]||n[0];return x&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:x.jp,answer:w({ru:x.ru,en:x.en}),answerLabel:w({ru:x.ru,en:x.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ut({value:w({ru:x.ru,en:x.en}),label:w({ru:x.ru,en:x.en})},n.filter(k=>k.jp!==x.jp).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n4Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N4",lessonId:e.id}))}function ut(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),tt().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function tm(e){for(const t of dt()){const n=ha(t).find(s=>s.id===e);if(n)return n}return null}function wc(e){return pa("N4",X(),e)}function kj(e){const t=tm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;nm(t,s,r)}function yj(e){const t=tm(e);if(!t)return;const n=document.getElementById(om(t.id)),s=n?String(n.value||"").trim():"";nm(t,s,s===t.answer)}function nm(e,t,n){const s=X();ga("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||a.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,quietReward:!0,markStudied:()=>fr(e.kanji,e.cardId),markDifficult:()=>va(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function sm(e,t,n="review",s={}){const r=oe(e)||tt().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ie(B(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ht(h,g,f),ke(),fr(r.kanji,r.id),X().srsKanji[r.kanji]=new Date().toISOString(),d?(va(r.kanji,r.id,!1),a.progress.totalCorrect+=1,H(a.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${r.id}`,{silent:l})):Be(t)?(va(r.kanji,r.id),a.progress.totalWrong+=1,H(a.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,H(t==="easy"?a.n4Meta?.rewards?.knowXp||7:a.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),T(),Mt("N4 SRS post-render effects",()=>{F(Be(t)?"answer_wrong":"answer_correct"),Y({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function $j(e){const t=oe(e)||tt().find(s=>String(s.id)===String(e));if(!t)return;const n=X();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},fr(t.kanji,t.id),H(9,1,`n4_writing:${t.id}`)),Y(),T(),P()}function jj(e){const t=Vn(e);if(!t)return;const n=X(),s=`n4:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=mr(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=ha(t);if(!(c.length>0&&c.every(g=>wc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),mr(t).forEach(g=>{fr(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=B(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ie($),"good"))}),(t.grammarFocus||[]).map(g=>vc(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=dt().find(g=>g.order===t.order+1)?.id||t.id;const d=Gn(),u=d.sessions[Ye("N4",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Ye("N4",t.id),d.lastUpdatedAt=g}X(),ur("N4");const f=a.n4Meta?.rewards?.lessonCompleteXp||65,h=a.n4Meta?.rewards?.lessonCompleteMoon||8;H(f,h,`n4_lesson:${t.id}`),Rr("N4",t.id),wt({title:`${Te().lessonComplete}: ${w(t.title)}`,message:Te().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),Y(),T(),P()}function fr(e,t=null){if(!e)return;const n=X();sr(n,e)}function va(e,t=null,n=!0){if(e&&(X().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=ye(ie(s),"again"))}}function Sj(e,t=""){const n=a.n4Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,c=X();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),H(a.n4Meta?.rewards?.grammarXp||10,a.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ke(),Y(),T(),P()}function Cj(e,t="0",n=""){rm("reading",e,t,n)}function Nj(e,t="0",n=""){rm("listening",e,t,n)}function rm(e,t,n="0",s=""){const o=(e==="reading"?a.n4Reading:a.n4Listening).find($=>$.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=X(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!g[o.id]){g[o.id]=new Date().toISOString();const $=e==="reading"?a.n4Meta?.rewards?.readingXp||35:a.n4Meta?.rewards?.listeningXp||30,L=e==="reading"?a.n4Meta?.rewards?.readingMoon||4:a.n4Meta?.rewards?.listeningMoon||3;H($,L,`n4_${e}:${o.id}`),a.progress.totalCorrect+=1,F("answer_correct")}else d||(a.progress.totalWrong+=1,F("answer_wrong"));ke(),Y(),T(),P()}function xj(e){const t=Vn(e);t&&(mn("textbook-lesson",{level:"N4",lessonId:t.id}),X().currentLessonId=t.id,Rt("N4",t.id,"n4_lesson_open"),on("N4",t,"n4_lesson_open"),Wn(t.id))}function Lj(){Wn("")}function Aj(e=null){e&&(X().activeReviewMode=e),Wn("review")}function Ij(){Wn("kanji")}function Tj(){Wn("grammar")}function Rj(){Wn("reading")}function _j(){Wn("listening")}function Pj(){Wn("final-test")}function Wn(e){a.route="textbooks",a.activeTextbookLevel="N4",a.activeTextbookSubroute=e||null,X().opened=!0;const t=e?`#textbooks/N4/${encodeURIComponent(e)}`:"#textbooks/N4";jt(t),Y(),T(),ue(),Ft()}function Ej(e="due"){const t=Date.now(),n=X(),s=tt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function am(){const e=tt();if(!e.length)return[];const t=a.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=dt().find(d=>d.kanji.includes(o.kanji))||dt()[0];s.push(Mj(c,o,l,r))}return s.filter(Boolean)}function Mj(e,t,n,s){const o=Ct(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ut({value:t.id,label:K(t)},tt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ut({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},tt().flatMap(l=>Ct(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=w({ru:c.ru,en:c.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:ut({value:l,label:l},dt().flatMap(d=>d.sentences||[]).map(d=>({value:w({ru:d.ru,en:d.en}),label:w({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:cs(o),answer:l,answerLabel:l,options:ut({value:l,label:l},tt().flatMap(d=>Ct(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n4Grammar[s%Math.max(a.n4Grammar.length,1)];if(l)return{id:`n4-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${w(l.question||l.explanation)}`,answer:Q(l),answerLabel:Q(l),options:ut({value:Q(l),label:Q(l)},Ge(l).filter(d=>d!==Q(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n4Reading[s%Math.max(a.n4Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n4-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||w(l.title)} ${w(d.prompt)}`,answer:d.answer,answerLabel:w((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:w(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ut({value:t.kanji,label:t.kanji},tt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Kj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(X().finalTest.answers[t]=n,T(),P())}function im(e=!1){if(a.finalTestBusy)return;const t=X().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=am(),s=a.n4FinalTest||{},r=Te(),o=gn(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const N=o.firstMissingId?`#${$r("n4",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=N,T();return}let u=0;const f=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&fr(N.kanji,N.cardId),N.grammarId){const G=X();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else z||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&va(N.kanji,N.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let x=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const N=Number(s?.rewards?.completeXp||180),z=Number(s?.rewards?.completeMoon||35);x+=N,k+=z,H(N,z,"n4_final_complete")}if(t.passed&&!L){const N=Number(s?.rewards?.passXp||90),z=Number(s?.rewards?.passMoon||15);x+=N,k+=z,H(N,z,"n4_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=k,Ja("N4",t),X(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N4",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:x,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Y(),T()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function Fj(){X().finalTest=Nl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,T(),P()}function om(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Dj(e){a.activeTextbookLevel="N3",a.activeJlptLesson="N3";const t=kc();t.opened||(t.opened=!0,Y({silent:!0}),T());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Yj();if(n==="review")return qj();if(n==="kanji")return Vj();if(n==="grammar")return Wj();if(n==="reading")return Xj();if(n==="listening")return Qj();const s=Xn(n);return s?(V().currentLessonId=s.id,Rt("N3",s.id,"n3_lesson_page"),on("N3",s,"n3_lesson_page"),zj(e,s)):Oj(e)}function Oj(e){const t=tS(),n=Ne(),s=pt(),r=eS(),o=a.n3Meta||{},c=w(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(w(o.description||e.description||{}))}</p>
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
          ${Ln("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>Bj(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(w((a.n3Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(w(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${pr("N3")}
      </section>
    `}function Bj(e){const t=pm(e.id),n=Ne();let s=e.kanji.filter(r=>V().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${m(e.id)}" data-action="n3-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(w(e.title))}</h3>
        <p>${i(w(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(nS(t))}</small>
      </a>
    `}function zj(e,t){const n=Ne(),s=hr(t),r=wa(t),o=pm(t.id),c=Rs("N3",t,s);let l=o==="completed";const d=`n3:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(U=>$c(U.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(U=>V().studiedKanji[U.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,x=t.kanji.filter(U=>V().difficultKanji[U]).join(" · "),k=pt().find(U=>U.order===t.order+1),N=lm(t),z=N?!!V().completedReading[N.id]:!1,G=zt("N3",t.id,"player"),Vs=zt("N3",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · ${i(n.lesson)} ${t.order}/37</p>
            <h1>${i(w(t.title))}</h1>
            <p>${i(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(n.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(w(t.theme))}</span>
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

        ${la("N3",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:U=>Nt(U),sentence:U=>Jj(U,t)})}

        ${Gj(t)}

        ${Uj(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(Z(U.reading||""))}</span>
                <small>${i(w({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${m(Vs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(U=>cm(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>V().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
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
    `}function lm(e){return e?.miniReadingId&&a.n3Reading.find(t=>t.id===e.miniReadingId)||null}function Uj(e){const t=Ne(),n=lm(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${bc(n,"reading")}
      </section>
    `:""}function Jj(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Z(n.reading||""))}</span>
        <small>${i(w({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Ne().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Gj(e){const t=Ne(),n=(e.grammarFocus||[]).map(s=>yc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n3-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n3-section-grid">
          ${n.map(s=>`
            <article class="n3-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(w(s.title))}</h3>
              <p>${i(w(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(w({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${m(s.id)}" data-value="${m(Q(s))}">${i(V().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function cm(e){const t=Ne(),n=$c(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Hn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(w(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(bm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${dm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(w(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${ua("N3",e).map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${dm(e,n)}
      </article>
    `}function dm(e,t){if(!t)return"";const n=Ne(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function qj(e){const t=Ne(),n=V().activeReviewMode||"due",s=wS(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${m(r.id)}">${i(w(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>Hj(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Hj(e,t){const n=Ne(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Qt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Nt(e)[0]?.word||e.hiragana||"")} · ${i(Nt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Vj(e){const t=Ne(),n=nt();return`
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
              <p>${i(Nt(s)[0]?.word||"")} · ${i(Nt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${m(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Wj(e){const t=Ne();return`
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
          ${M(t.completedGrammar,`${Object.keys(V().completedGrammar||{}).length}/${a.n3Grammar.length}`,t.grammar,E(Object.keys(V().completedGrammar||{}).length,a.n3Grammar.length))}
          ${M(t.questions,a.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${a.n3Grammar.map(n=>{const s=V().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(w(n.title))}</h3>
                <p>${i(w(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Z(r.reading||""))}</span><small>${i(w({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(w(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(Ge(n).length?Ge(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Xj(e){const t=Ne(),n=za("N3","n3_reading_page"),s=Lr("N3");return(n||s)&&T(),`
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
          ${a.n3Reading.map(r=>bc(r,"reading")).join("")}
        </div>
      </section>
    `}function Qj(e){const t=Ne();return`
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
          ${a.n3Listening.map(n=>bc(n,"listening")).join("")}
        </div>
      </section>
    `}function bc(e,t){const n=Ne(),s=t==="reading"?V().completedReading[e.id]:V().completedListening[e.id],r=t==="reading"?V().readingAnswers:V().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(w(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n3-question-block">
              <h3>${i(w(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(w(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Yj(e){const t=Ne(),n=a.n3FinalTest||{},s=vm(),r=V().finalTest,o=gn(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),T()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Final</p>
            <h1>${i(w(n.title||{}))}</h1>
            <p>${i(w(n.description||{}))}</p>
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
            ${Xt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>Zj(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Xt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Zj(e,t){const n=V().finalTest.answers?.[e.id],s=!!V().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ne().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ne(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function kc(){a.progress.n3Course=ap(xl(),a.progress.n3Course||{});const e=pt();!Xn(a.progress.n3Course.currentLessonId)&&e[0]&&(a.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n3Course.completedLessons[s.id]);return!a.progress.n3Course.currentLessonId&&n&&(a.progress.n3Course.currentLessonId=n.id),a.progress.n3Course}function V(){return kc()}function pt(){return a.n3Textbook?.items||[]}function Xn(e){const t=String(e||"");return t&&pt().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function eS(){return Xn(V().currentLessonId)||pt().find(e=>!V().completedLessons[e.id])||pt()[0]||null}function hr(e){return(e?.kanji||[]).map(t=>um(t)).filter(Boolean)}function nt(){const e=new Set;return(a.n3KanjiCatalog||[]).map(t=>um(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function um(e){const t=String(e||""),n=a.n3KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N3")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ri(s,n):s||(n?Ri({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function yc(e){const t=String(e||"");return a.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Nt(e){return da(e,e.examples)}function tS(){const e=nt(),t=V(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:_s("N3"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function pm(e){return dr("N3",e)}function nS(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function wa(e){const t=hr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n3Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n3Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n3Meta?.rewards?.exerciseXp||10,rewardMoon:a.n3Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:gt({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:gt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=Nt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:gt({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>Nt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:w({ru:h.ru,en:h.en}),answerLabel:w({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:gt({value:w({ru:h.ru,en:h.en}),label:w({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=Nt(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Va($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:gt({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>Nt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=yc(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:w(C.question||C.explanation),answer:Q(C),answerLabel:Q(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:gt({value:Q(C),label:Q(C)},Ge(C).filter(k=>k!==Q(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const x=n[1]||n[0];return x&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:x.jp,answer:w({ru:x.ru,en:x.en}),answerLabel:w({ru:x.ru,en:x.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:gt({value:w({ru:x.ru,en:x.en}),label:w({ru:x.ru,en:x.en})},n.filter(k=>k.jp!==x.jp).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n3Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N3",lessonId:e.id}))}function gt(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),nt().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function gm(e){for(const t of pt()){const n=wa(t).find(s=>s.id===e);if(n)return n}return null}function $c(e){return pa("N3",V(),e)}function sS(e){const t=gm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;mm(t,s,r)}function rS(e){const t=gm(e);if(!t)return;const n=document.getElementById(bm(t.id)),s=n?String(n.value||"").trim():"";mm(t,s,s===t.answer)}function mm(e,t,n){const s=V();ga("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||a.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,quietReward:!0,markStudied:()=>vr(e.kanji,e.cardId),markDifficult:()=>ba(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function fm(e,t,n="review",s={}){const r=oe(e)||nt().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ie(B(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ht(h,g,f),ke(),vr(r.kanji,r.id),V().srsKanji[r.kanji]=new Date().toISOString(),d?(ba(r.kanji,r.id,!1),a.progress.totalCorrect+=1,H(a.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${r.id}`,{silent:l})):Be(t)?(ba(r.kanji,r.id),a.progress.totalWrong+=1,H(a.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,H(t==="easy"?a.n3Meta?.rewards?.knowXp||8:a.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),T(),Mt("N3 SRS post-render effects",()=>{F(Be(t)?"answer_wrong":"answer_correct"),Y({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function aS(e){const t=oe(e)||nt().find(s=>String(s.id)===String(e));if(!t)return;const n=V();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},vr(t.kanji,t.id),H(9,1,`n3_writing:${t.id}`)),Y(),T(),P()}function iS(e){const t=Xn(e);if(!t)return;const n=V(),s=`n3:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=hr(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=wa(t);if(!(c.length>0&&c.every(g=>$c(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),hr(t).forEach(g=>{vr(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=B(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ie($),"good"))}),(t.grammarFocus||[]).map(g=>yc(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=pt().find(g=>g.order===t.order+1)?.id||t.id;const d=Gn(),u=d.sessions[Ye("N3",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Ye("N3",t.id),d.lastUpdatedAt=g}V(),ur("N3");const f=a.n3Meta?.rewards?.lessonCompleteXp||75,h=a.n3Meta?.rewards?.lessonCompleteMoon||9;H(f,h,`n3_lesson:${t.id}`),Rr("N3",t.id),wt({title:`${Ne().lessonComplete}: ${w(t.title)}`,message:Ne().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),Y(),T(),P()}function vr(e,t=null){if(!e)return;const n=V();sr(n,e)}function ba(e,t=null,n=!0){if(e&&(V().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=ye(ie(s),"again"))}}function oS(e,t=""){const n=a.n3Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,c=V();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),H(a.n3Meta?.rewards?.grammarXp||11,a.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ke(),Y(),T(),P()}function lS(e,t="0",n=""){hm("reading",e,t,n)}function cS(e,t="0",n=""){hm("listening",e,t,n)}function hm(e,t,n="0",s=""){const o=(e==="reading"?a.n3Reading:a.n3Listening).find(C=>C.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=V(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening,$=!!g[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const L=(o.questions||[]).every((C,x)=>h[`${o.id}:${x}`]?.correct);if(d?(a.progress.totalCorrect+=1,F("answer_correct")):(a.progress.totalWrong+=1,F("answer_wrong")),L&&!$){g[o.id]=new Date().toISOString();const C=e==="reading"?a.n3Meta?.rewards?.readingXp||38:a.n3Meta?.rewards?.listeningXp||34,x=e==="reading"?a.n3Meta?.rewards?.readingMoon||4:a.n3Meta?.rewards?.listeningMoon||4;H(C,x,`n3_${e}:${o.id}`)}ke(),Y(),T(),P()}function dS(e){const t=Xn(e);t&&(mn("textbook-lesson",{level:"N3",lessonId:t.id}),V().currentLessonId=t.id,Rt("N3",t.id,"n3_lesson_open"),on("N3",t,"n3_lesson_open"),Qn(t.id))}function uS(){Qn("")}function pS(e=null){e&&(V().activeReviewMode=e),Qn("review")}function gS(){Qn("kanji")}function mS(){Qn("grammar")}function fS(){Qn("reading")}function hS(){Qn("listening")}function vS(){Qn("final-test")}function Qn(e){a.route="textbooks",a.activeTextbookLevel="N3",a.activeTextbookSubroute=e||null,V().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";jt(t),Y(),T(),ue(),Ft()}function wS(e="due"){const t=Date.now(),n=V(),s=nt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function vm(){const e=nt();if(!e.length)return[];const t=a.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=pt().find(d=>d.kanji.includes(o.kanji))||pt()[0];s.push(bS(c,o,l,r))}return s.filter(Boolean)}function bS(e,t,n,s){const o=Nt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:gt({value:t.id,label:K(t)},nt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:gt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},nt().flatMap(l=>Nt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=w({ru:c.ru,en:c.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:gt({value:l,label:l},pt().flatMap(d=>d.sentences||[]).map(d=>({value:w({ru:d.ru,en:d.en}),label:w({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:cs(o),answer:l,answerLabel:l,options:gt({value:l,label:l},nt().flatMap(d=>Nt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n3Grammar[s%Math.max(a.n3Grammar.length,1)];if(l)return{id:`n3-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${w(l.question||l.explanation)}`,answer:Q(l),answerLabel:Q(l),options:gt({value:Q(l),label:Q(l)},Ge(l).filter(d=>d!==Q(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n3Reading[s%Math.max(a.n3Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n3-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||w(l.title)} ${w(d.prompt)}`,answer:d.answer,answerLabel:w((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:w(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:gt({value:t.kanji,label:t.kanji},nt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function kS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(V().finalTest.answers[t]=n,T(),P())}function wm(e=!1){if(a.finalTestBusy)return;const t=V().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=vm(),s=a.n3FinalTest||{},r=Ne(),o=gn(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const N=o.firstMissingId?`#${$r("n3",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=N,T();return}let u=0;const f=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&vr(N.kanji,N.cardId),N.grammarId){const G=V();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else z||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&ba(N.kanji,N.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let x=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);x+=N,k+=z,H(N,z,"n3_final_complete")}if(t.passed&&!L){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);x+=N,k+=z,H(N,z,"n3_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=k,Ja("N3",t),V(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N3",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:x,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Y(),T()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function yS(){V().finalTest=xl().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,T(),P()}function bm(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function $S(e){a.activeTextbookLevel="N2",a.activeJlptLesson="N2";const t=Sc();t.opened||(t.opened=!0,Y({silent:!0}),T());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return ES();if(n==="review")return AS();if(n==="kanji")return TS();if(n==="grammar")return RS();if(n==="reading")return _S();if(n==="listening")return PS();const s=Yn(n);return s?(W().currentLessonId=s.id,Rt("N2",s.id,"n2_lesson_page"),on("N2",s,"n2_lesson_page"),CS(e,s)):jS(e)}function jS(e){const t=FS(),n=xe(),s=mt(),r=KS(),o=a.n2Meta||{},c=w(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(w(o.description||e.description||{}))}</p>
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
          ${Ln("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>SS(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(w((a.n2Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(w(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${pr("N2")}
      </section>
    `}function SS(e){const t=Sm(e.id),n=xe();let s=e.kanji.filter(r=>W().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${m(e.id)}" data-action="n2-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(w(e.title))}</h3>
        <p>${i(w(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(DS(t))}</small>
      </a>
    `}function CS(e,t){const n=xe(),s=wr(t),r=ka(t),o=Sm(t.id),c=Rs("N2",t,s);let l=o==="completed";const d=`n2:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(U=>Nc(U.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(U=>W().studiedKanji[U.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,x=t.kanji.filter(U=>W().difficultKanji[U]).join(" · "),k=mt().find(U=>U.order===t.order+1),N=km(t),z=N?!!W().completedReading[N.id]:!1,G=zt("N2",t.id,"player"),Vs=zt("N2",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · ${i(n.lesson)} ${t.order}/38</p>
            <h1>${i(w(t.title))}</h1>
            <p>${i(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(n.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(w(t.theme))}</span>
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

        ${la("N2",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:U=>xt(U),sentence:U=>xS(U,t)})}

        ${LS(t)}

        ${NS(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(Z(U.reading||""))}</span>
                <small>${i(w({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${m(Vs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(U=>ym(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>W().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
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
    `}function km(e){return e?.miniReadingId&&a.n2Reading.find(t=>t.id===e.miniReadingId)||null}function NS(e){const t=xe(),n=km(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${jc(n,"reading")}
      </section>
    `:""}function xS(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Z(n.reading||""))}</span>
        <small>${i(w({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(xe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function LS(e){const t=xe(),n=(e.grammarFocus||[]).map(s=>Cc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n2-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n2-section-grid">
          ${n.map(s=>`
            <article class="n2-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(w(s.title))}</h3>
              <p>${i(w(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(w({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${m(s.id)}" data-value="${m(Q(s))}">${i(W().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function ym(e){const t=xe(),n=Nc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Hn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(w(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(Tm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${$m(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(w(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${ua("N2",e).map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${$m(e,n)}
      </article>
    `}function $m(e,t){if(!t)return"";const n=xe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function AS(e){const t=xe(),n=W().activeReviewMode||"due",s=t0(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${m(r.id)}">${i(w(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>IS(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function IS(e,t){const n=xe(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Qt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(xt(e)[0]?.word||e.hiragana||"")} · ${i(xt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function TS(e){const t=xe(),n=st();return`
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
              <p>${i(xt(s)[0]?.word||"")} · ${i(xt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${m(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function RS(e){const t=xe();return`
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
          ${M(t.completedGrammar,`${Object.keys(W().completedGrammar||{}).length}/${a.n2Grammar.length}`,t.grammar,E(Object.keys(W().completedGrammar||{}).length,a.n2Grammar.length))}
          ${M(t.questions,a.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${a.n2Grammar.map(n=>{const s=W().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(w(n.title))}</h3>
                <p>${i(w(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Z(r.reading||""))}</span><small>${i(w({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(w(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(Ge(n).length?Ge(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function _S(e){const t=xe(),n=za("N2","n2_reading_page"),s=Lr("N2");return(n||s)&&T(),`
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
          ${a.n2Reading.map(r=>jc(r,"reading")).join("")}
        </div>
      </section>
    `}function PS(e){const t=xe();return`
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
          ${a.n2Listening.map(n=>jc(n,"listening")).join("")}
        </div>
      </section>
    `}function jc(e,t){const n=xe(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],r=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(w(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n2-question-block">
              <h3>${i(w(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(w(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function ES(e){const t=xe(),n=a.n2FinalTest||{},s=Am(),r=W().finalTest,o=gn(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),T()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Final</p>
            <h1>${i(w(n.title||{}))}</h1>
            <p>${i(w(n.description||{}))}</p>
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
            ${Xt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>MS(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Xt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function MS(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(xe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function xe(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Sc(){a.progress.n2Course=ip(Ll(),a.progress.n2Course||{});const e=mt();!Yn(a.progress.n2Course.currentLessonId)&&e[0]&&(a.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n2Course.completedLessons[s.id]);return!a.progress.n2Course.currentLessonId&&n&&(a.progress.n2Course.currentLessonId=n.id),a.progress.n2Course}function W(){return Sc()}function mt(){return a.n2Textbook?.items||[]}function Yn(e){const t=String(e||"");return t&&mt().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function KS(){return Yn(W().currentLessonId)||mt().find(e=>!W().completedLessons[e.id])||mt()[0]||null}function wr(e){return(e?.kanji||[]).map(t=>jm(t)).filter(Boolean)}function st(){const e=new Set;return(a.n2KanjiCatalog||[]).map(t=>jm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function jm(e){const t=String(e||""),n=a.n2KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N2")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Pi(s,n):s||(n?Pi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Cc(e){const t=String(e||"");return a.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function xt(e){return da(e,e.examples)}function FS(){const e=st(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{B(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:_s("N2"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(B(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Sm(e){return dr("N2",e)}function DS(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ka(e){const t=wr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n2Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n2Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n2Meta?.rewards?.exerciseXp||11,rewardMoon:a.n2Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:ft({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ft({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=xt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ft({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>xt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:w({ru:h.ru,en:h.en}),answerLabel:w({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ft({value:w({ru:h.ru,en:h.en}),label:w({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=xt(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Va($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:ft({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>xt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=Cc(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:w(C.question||C.explanation),answer:Q(C),answerLabel:Q(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:ft({value:Q(C),label:Q(C)},Ge(C).filter(k=>k!==Q(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const x=n[1]||n[0];return x&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:x.jp,answer:w({ru:x.ru,en:x.en}),answerLabel:w({ru:x.ru,en:x.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ft({value:w({ru:x.ru,en:x.en}),label:w({ru:x.ru,en:x.en})},n.filter(k=>k.jp!==x.jp).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n2Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N2",lessonId:e.id}))}function ft(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),st().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function Cm(e){for(const t of mt()){const n=ka(t).find(s=>s.id===e);if(n)return n}return null}function Nc(e){return pa("N2",W(),e)}function OS(e){const t=Cm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Nm(t,s,r)}function BS(e){const t=Cm(e);if(!t)return;const n=document.getElementById(Tm(t.id)),s=n?String(n.value||"").trim():"";Nm(t,s,s===t.answer)}function Nm(e,t,n){const s=W();ga("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,quietReward:!0,markStudied:()=>br(e.kanji,e.cardId),markDifficult:()=>ya(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function xm(e,t,n="review",s={}){const r=oe(e)||st().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ie(B(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ht(h,g,f),ke(),br(r.kanji,r.id),W().srsKanji[r.kanji]=new Date().toISOString(),d?(ya(r.kanji,r.id,!1),a.progress.totalCorrect+=1,H(a.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${r.id}`,{silent:l})):Be(t)?(ya(r.kanji,r.id),a.progress.totalWrong+=1,H(a.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,H(t==="easy"?a.n2Meta?.rewards?.knowXp||9:a.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),T(),Mt("N2 SRS post-render effects",()=>{F(Be(t)?"answer_wrong":"answer_correct"),Y({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function zS(e){const t=oe(e)||st().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},br(t.kanji,t.id),H(9,1,`n2_writing:${t.id}`)),Y(),T(),P()}function US(e){const t=Yn(e);if(!t)return;const n=W(),s=`n2:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=wr(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=ka(t);if(!(c.length>0&&c.every(g=>Nc(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),wr(t).forEach(g=>{br(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=B(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ie($),"good"))}),(t.grammarFocus||[]).map(g=>Cc(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=mt().find(g=>g.order===t.order+1)?.id||t.id;const d=Gn(),u=d.sessions[Ye("N2",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Ye("N2",t.id),d.lastUpdatedAt=g}W(),ur("N2");const f=a.n2Meta?.rewards?.lessonCompleteXp||85,h=a.n2Meta?.rewards?.lessonCompleteMoon||10;H(f,h,`n2_lesson:${t.id}`),Rr("N2",t.id),wt({title:`${xe().lessonComplete}: ${w(t.title)}`,message:xe().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),Y(),T(),P()}function br(e,t=null){if(!e)return;const n=W();sr(n,e)}function ya(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=ye(ie(s),"again"))}}function JS(e,t=""){const n=a.n2Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,c=W();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),H(a.n2Meta?.rewards?.grammarXp||12,a.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ke(),Y(),T(),P()}function GS(e,t="0",n=""){Lm("reading",e,t,n)}function qS(e,t="0",n=""){Lm("listening",e,t,n)}function Lm(e,t,n="0",s=""){const o=(e==="reading"?a.n2Reading:a.n2Listening).find(C=>C.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=W(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening,$=!!g[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const L=(o.questions||[]).every((C,x)=>h[`${o.id}:${x}`]?.correct);if(d?(a.progress.totalCorrect+=1,F("answer_correct")):(a.progress.totalWrong+=1,F("answer_wrong")),L&&!$){g[o.id]=new Date().toISOString();const C=e==="reading"?a.n2Meta?.rewards?.readingXp||42:a.n2Meta?.rewards?.listeningXp||38,x=e==="reading"?a.n2Meta?.rewards?.readingMoon||4:a.n2Meta?.rewards?.listeningMoon||4;H(C,x,`n2_${e}:${o.id}`)}ke(),Y(),T(),P()}function HS(e){const t=Yn(e);t&&(mn("textbook-lesson",{level:"N2",lessonId:t.id}),W().currentLessonId=t.id,Rt("N2",t.id,"n2_lesson_open"),on("N2",t,"n2_lesson_open"),Zn(t.id))}function VS(){Zn("")}function WS(e=null){e&&(W().activeReviewMode=e),Zn("review")}function XS(){Zn("kanji")}function QS(){Zn("grammar")}function YS(){Zn("reading")}function ZS(){Zn("listening")}function e0(){Zn("final-test")}function Zn(e){a.route="textbooks",a.activeTextbookLevel="N2",a.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";jt(t),Y(),T(),ue(),Ft()}function t0(e="due"){const t=Date.now(),n=W(),s=st();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Am(){const e=st();if(!e.length)return[];const t=a.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=mt().find(d=>d.kanji.includes(o.kanji))||mt()[0];s.push(n0(c,o,l,r))}return s.filter(Boolean)}function n0(e,t,n,s){const o=xt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ft({value:t.id,label:K(t)},st().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ft({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},st().flatMap(l=>xt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=w({ru:c.ru,en:c.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:ft({value:l,label:l},mt().flatMap(d=>d.sentences||[]).map(d=>({value:w({ru:d.ru,en:d.en}),label:w({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:cs(o),answer:l,answerLabel:l,options:ft({value:l,label:l},st().flatMap(d=>xt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n2Grammar[s%Math.max(a.n2Grammar.length,1)];if(l)return{id:`n2-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${w(l.question||l.explanation)}`,answer:Q(l),answerLabel:Q(l),options:ft({value:Q(l),label:Q(l)},Ge(l).filter(d=>d!==Q(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n2Reading[s%Math.max(a.n2Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n2-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||w(l.title)} ${w(d.prompt)}`,answer:d.answer,answerLabel:w((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:w(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ft({value:t.kanji,label:t.kanji},st().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function s0(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,T(),P())}function Im(e=!1){if(a.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=Am(),s=a.n2FinalTest||{},r=xe(),o=gn(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const N=o.firstMissingId?`#${$r("n2",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=N,T();return}let u=0;const f=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&br(N.kanji,N.cardId),N.grammarId){const G=W();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else z||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&ya(N.kanji,N.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let x=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);x+=N,k+=z,H(N,z,"n2_final_complete")}if(t.passed&&!L){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);x+=N,k+=z,H(N,z,"n2_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=k,Ja("N2",t),W(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N2",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:x,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Y(),T()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function r0(){W().finalTest=Ll().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,T(),P()}function Tm(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function a0(e){a.activeTextbookLevel="N1",a.activeJlptLesson="N1";const t=io();t.opened||(t.opened=!0,Y({silent:!0}),T());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return b0();if(n==="review")return g0();if(n==="kanji")return f0();if(n==="grammar")return h0();if(n==="reading")return v0();if(n==="listening")return w0();const s=Es(n);return s?(te().currentLessonId=s.id,Rt("N1",s.id,"n1_lesson_page"),on("N1",s,"n1_lesson_page"),l0(e,s)):i0(e)}function i0(e){const t=$0(),n=Le(),s=ht(),r=y0(),o=a.n1Meta||{},c=w(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N1 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(w(o.description||e.description||{}))}</p>
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
          ${Ln("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>o0(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(w((a.n1Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(w(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${pr("N1")}
      </section>
    `}function o0(e){const t=Em(e.id),n=Le();let s=e.kanji.filter(r=>te().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${m(e.id)}" data-action="n1-open-lesson" data-id="${m(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(w(e.title))}</h3>
        <p>${i(w(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${m(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(j0(t))}</small>
      </a>
    `}function l0(e,t){const n=Le(),s=$a(t),r=ja(t),o=Em(t.id),c=Rs("N1",t,s);let l=o==="completed";const d=`n1:${t.id}`;$e.has(d)&&(l=!0);const u=l,f=r.filter(U=>Ic(U.id)?.correct).length,h=r.length>0&&f===r.length,g=s.filter(U=>te().studiedKanji[U.kanji]).length,$=t.kanji.length,L=g>=$,C=!l&&h&&L,x=t.kanji.filter(U=>te().difficultKanji[U]).join(" · "),k=ht().find(U=>U.order===t.order+1),N=Rm(t),z=N?!!te().completedReading[N.id]:!1,G=zt("N1",t.id,"player"),Vs=zt("N1",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · ${i(n.lesson)} ${t.order}/53</p>
            <h1>${i(w(t.title))}</h1>
            <p>${i(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(n.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(w(t.theme))}</span>
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

        ${la("N1",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:U=>At(U),sentence:U=>d0(U,t)})}

        ${u0(t)}

        ${c0(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(Z(U.reading||""))}</span>
                <small>${i(w({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${m(Vs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(U=>p0(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>te().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${f}/${r.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
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
    `}function Rm(e){return e?.miniReadingId&&a.n1Reading.find(t=>t.id===e.miniReadingId)||null}function c0(e){const t=Le(),n=Rm(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${xc(n,"reading")}
      </section>
    `:""}function d0(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(Z(n.reading||""))}</span>
        <small>${i(w({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Le().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function u0(e){const t=Le(),n=(e.grammarFocus||[]).map(s=>Ac(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n1-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n1-section-grid">
          ${n.map(s=>`
            <article class="n1-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(w(s.title))}</h3>
              <p>${i(w(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(w({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${m(s.id)}" data-value="${m(Q(s))}">${i(te().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function p0(e){const t=Le(),n=Ic(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&Hn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(w(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${m(zm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${m(n?.selected||"")}" aria-label="${m(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${m(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${m(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${_m(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(w(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${ua("N1",e).map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${m(e.id)}" data-value="${m(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${_m(e,n)}
      </article>
    `}function _m(e,t){if(!t)return"";const n=Le(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function g0(e){const t=Le(),n=te().activeReviewMode||"due",s=D0(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n1-review" data-mode="${m(r.id)}">${i(w(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>m0(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function m0(e,t){const n=Le(),s=B(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Qt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(At(e)[0]?.word||e.hiragana||"")} · ${i(At(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${m(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${m(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function f0(e){const t=Le(),n=Lt(),s=n.slice(0,160);return`
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
              <p>${i(At(r)[0]?.word||"")} · ${i(At(r)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${m(r.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function h0(e){const t=Le();return`
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
          ${M(t.completedGrammar,`${Object.keys(te().completedGrammar||{}).length}/${a.n1Grammar.length}`,t.grammar,E(Object.keys(te().completedGrammar||{}).length,a.n1Grammar.length))}
          ${M(t.questions,a.n1Grammar.length,t.grammar,100)}
        </div>
        <div class="n1-section-grid">
          ${a.n1Grammar.map(n=>{const s=te().grammarResults?.[n.id];return`
              <article class="n1-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(w(n.title))}</h3>
                <p>${i(w(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(Z(r.reading||""))}</span><small>${i(w({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(w(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(Ge(n).length?Ge(n):[Q(n)]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n1-grammar-complete" data-id="${m(n.id)}" data-value="${m(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${Q(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function v0(e){const t=Le(),n=za("N1","n1_reading_page"),s=Lr("N1");return(n||s)&&T(),`
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
          ${a.n1Reading.map(r=>xc(r,"reading")).join("")}
        </div>
      </section>
    `}function w0(e){const t=Le();return`
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
          ${a.n1Listening.map(n=>xc(n,"listening")).join("")}
        </div>
      </section>
    `}function xc(e,t){const n=Le(),s=t==="reading"?te().completedReading[e.id]:te().completedListening[e.id],r=t==="reading"?te().readingAnswers:te().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
      <article class="n1-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(w(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n1-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=r?.[d],f=Array.isArray(c.options)?c.options:[];return`
            <div class="n1-question-block">
              <h3>${i(w(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${f.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${m(o)}" data-id="${m(e.id)}" data-question="${m(l)}" data-value="${m(h.value)}">${i(w(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function b0(e){const t=Le(),n=a.n1FinalTest||{},s=Om(),r=te().finalTest,o=gn(r,s),c=o.answered,l=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),T()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Final</p>
            <h1>${i(w(n.title||{}))}</h1>
            <p>${i(w(n.description||{}))}</p>
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
            ${Xt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,h)=>k0(f,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Xt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function k0(e,t){const n=te().finalTest.answers?.[e.id],s=!!te().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${m(e.id)}" data-value="${m(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Le().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Le(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function io(){a.progress.n1Course=op(Al(),a.progress.n1Course||{});const e=ht();!Es(a.progress.n1Course.currentLessonId)&&e[0]&&(a.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n1Course.completedLessons[s.id]);return!a.progress.n1Course.currentLessonId&&n&&(a.progress.n1Course.currentLessonId=n.id),a.progress.n1Course}function te(){return io()}function ht(){return a.n1Textbook?.items||[]}function Es(e){const t=String(e||"");return t&&ht().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function y0(){return Es(te().currentLessonId)||ht().find(e=>!te().completedLessons[e.id])||ht()[0]||null}function $a(e){const t=Lc();return(e?.kanji||[]).map(n=>Pm(n,t)).filter(Boolean)}function Lt(){const e=Lc(),t=new Set;return(a.n1KanjiCatalog||[]).map(n=>Pm(n.kanji,e)).filter(Boolean).filter(n=>t.has(n.kanji)?!1:(t.add(n.kanji),!0))}function Lc(){if(bs?.catalog===a.n1KanjiCatalog&&bs?.cards===a.cards)return bs;const e=new Map;(a.n1KanjiCatalog||[]).forEach(s=>{s?.kanji&&e.set(s.kanji,s)});const t=new Map,n=new Map;return a.cards.forEach(s=>{if(s?.id&&n.set(String(s.id),s),!s?.kanji)return;const r=String(s.jlpt||"").toUpperCase();(r==="N1"||e.has(s.kanji))&&(!t.has(s.kanji)||r==="N1")&&t.set(s.kanji,s)}),bs={catalog:a.n1KanjiCatalog,cards:a.cards,detailsByKanji:e,cardsByKanji:t,cardsById:n},bs}function Pm(e,t=Lc()){const n=String(e||""),s=t.detailsByKanji.get(n)||null,r=t.cardsByKanji.get(n)||(s?t.cardsById.get(String(s.courseCardId||s.id)):null)||null;return r&&s?Mi(r,s):r||(s?Mi({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:s.lessonId,jlpt:"N1",examples:[]},s):null)}function Ac(e){const t=String(e||"");return a.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function At(e){return da(e,e.examples)}function $0(){const e=Lt(),t=te(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{const r=a.progress.cards?.[String(s.id)];r&&Ue(r).state!=="New"&&n.add(s.kanji)}),{total:a.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:_s("N1"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,r)=>s+Number(a.progress.cards?.[String(r.id)]?.reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Em(e){return dr("N1",e)}function j0(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ja(e){const t=$a(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n1Exercises?.types||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((a.n1Exercises?.types||[]).map(k=>[k.type,k])),o=k=>r[k]||{rewardXp:a.n1Meta?.rewards?.exerciseXp||11,rewardMoon:a.n1Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:K(l),kanji:l.kanji,cardId:l.id,options:vt({value:l.id,label:K(l)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:vt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],f=At(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:f.word||u.kanji,answer:f.reading||u.hiragana||"",answerLabel:f.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:vt({value:f.reading||u.hiragana||"",label:f.reading||u.hiragana||""},t.flatMap(k=>At(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==f.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:w({ru:h.ru,en:h.en}),answerLabel:w({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:vt({value:w({ru:h.ru,en:h.en}),label:w({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),1),...o("sentence")});const g=t[3]||t[0],$=At(g)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Va($),answer:$.word||g.kanji,answerLabel:$.word||g.kanji,kanji:g.kanji,cardId:g.id,options:vt({value:$.word||g.kanji,label:$.word||g.kanji},t.flatMap(k=>At(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==$.word),2),...o("missing-word")});const L=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(L)}`:`Type the kanji for: ${K(L)}`,answer:L.kanji,answerLabel:L.kanji,kanji:L.kanji,cardId:L.id,options:[],...o("active-recall")});const C=Ac(e.grammarFocus?.[0]);C&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:w(C.question||C.explanation),answer:Q(C),answerLabel:Q(C),kanji:t[0].kanji,cardId:t[0].id,grammarId:C.id,options:vt({value:Q(C),label:Q(C)},Ge(C).filter(k=>k!==Q(C)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const x=n[1]||n[0];return x&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:x.jp,answer:w({ru:x.ru,en:x.en}),answerLabel:w({ru:x.ru,en:x.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:vt({value:w({ru:x.ru,en:x.en}),label:w({ru:x.ru,en:x.en})},n.filter(k=>k.jp!==x.jp).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),c.slice(0,a.n1Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N1",lessonId:e.id}))}function vt(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||r.length>=4||(s.add(l),r.push(c))}),Lt().forEach(c=>{if(r.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),r.push(l))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function Mm(e){for(const t of ht()){const n=ja(t).find(s=>s.id===e);if(n)return n}return null}function Ic(e){return pa("N1",te(),e)}function S0(e){const t=Mm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Km(t,s,r)}function C0(e){const t=Mm(e);if(!t)return;const n=document.getElementById(zm(t.id)),s=n?String(n.value||"").trim():"";Km(t,s,s===t.answer)}function Km(e,t,n){const s=te();ga("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,quietReward:!0,markStudied:()=>Sa(e.kanji,e.cardId),markDifficult:()=>oo(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Fm(e,t,n="review",s={}){const r=oe(e)||Lt().find($=>String($.id)===String(e));if(!r)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),c=s.viewportSnapshot||he(),l=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,f=d?"hard":t,h=ie(B(r.id)),g=ye(h,u,f);a.progress.cards[r.id]=g,Ht(h,g,f),ke(),Sa(r.kanji,r.id),te().srsKanji[r.kanji]=new Date().toISOString(),d?(oo(r.kanji,r.id,!1),a.progress.totalCorrect+=1,H(a.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${r.id}`,{silent:l})):Be(t)?(oo(r.kanji,r.id),a.progress.totalWrong+=1,H(a.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${r.id}`,{silent:l})):(a.progress.totalCorrect+=1,H(t==="easy"?a.n1Meta?.rewards?.knowXp||9:a.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${r.id}`,{silent:l})),pe({scrollPolicy:o,viewportSnapshot:c}),T(),Mt("N1 SRS post-render effects",()=>{F(Be(t)?"answer_wrong":"answer_correct"),Y({silent:l})},{scrollPolicy:o,viewportSnapshot:c})}function N0(e){const t=oe(e)||Lt().find(s=>String(s.id)===String(e));if(!t)return;const n=te();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Sa(t.kanji,t.id),H(9,1,`n1_writing:${t.id}`)),Y(),T(),P()}function x0(e){const t=Es(e);if(!t)return;const n=te(),s=`n1:${t.id}`;if($e.has(s)||n.completedLessons[t.id]){P();return}const r=$a(t);if(r.filter(g=>n.studiedKanji[g.kanji]).length<t.kanji.length){const g=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof J=="function"&&J(g);return}const c=ja(t);if(!(c.length>0&&c.every(g=>Ic(g.id)?.correct))){const g=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof J=="function"&&J(g);return}$e.add(s),$a(t).forEach(g=>{Sa(g.kanji,g.id),n.srsKanji[g.kanji]=n.srsKanji[g.kanji]||new Date().toISOString();const $=B(g.id);$.state==="New"&&(a.progress.cards[g.id]=ye(ie($),"good"))}),(t.grammarFocus||[]).map(g=>Ac(g)).filter(Boolean).forEach(g=>{n.completedGrammar[g.id]=n.completedGrammar[g.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ht().find(g=>g.order===t.order+1)?.id||t.id;const d=Gn(),u=d.sessions[Ye("N1",t.id)];if(u){const g=new Date().toISOString();u.phase="done",u.completedAt=g,u.updatedAt=g,u.currentIndex=r.length,d.activeSessionKey=Ye("N1",t.id),d.lastUpdatedAt=g}te(),ur("N1");const f=a.n1Meta?.rewards?.lessonCompleteXp||85,h=a.n1Meta?.rewards?.lessonCompleteMoon||10;H(f,h,`n1_lesson:${t.id}`),Rr("N1",t.id),wt({title:`${Le().lessonComplete}: ${w(t.title)}`,message:Le().lessonCompleteText,xp:f,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),F("lesson_complete"),Y(),T(),P()}function Sa(e,t=null){if(!e)return;const n=te();sr(n,e)}function oo(e,t=null,n=!0){if(e&&(te().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=B(t);s.state!=="New"&&(a.progress.cards[t]=ye(ie(s),"again"))}}function L0(e,t=""){const n=a.n1Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=Q(n),r=t||s,o=r===s,c=te();c.grammarResults[n.id]={selected:r,correct:o,checkedAt:new Date().toISOString()},o&&!c.completedGrammar[n.id]?(c.completedGrammar[n.id]=new Date().toISOString(),H(a.n1Meta?.rewards?.grammarXp||12,a.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),a.progress.totalCorrect+=1,F("answer_correct")):o||(a.progress.totalWrong+=1,F("answer_wrong")),ke(),Y(),T(),P()}function A0(e,t="0",n=""){Dm("reading",e,t,n)}function I0(e,t="0",n=""){Dm("listening",e,t,n)}function Dm(e,t,n="0",s=""){const o=(e==="reading"?a.n1Reading:a.n1Listening).find(C=>C.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,f=te(),h=e==="reading"?f.readingAnswers:f.listeningAnswers,g=e==="reading"?f.completedReading:f.completedListening,$=!!g[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const L=(o.questions||[]).every((C,x)=>h[`${o.id}:${x}`]?.correct);if(d?(a.progress.totalCorrect+=1,F("answer_correct")):(a.progress.totalWrong+=1,F("answer_wrong")),L&&!$){g[o.id]=new Date().toISOString();const C=e==="reading"?a.n1Meta?.rewards?.readingXp||55:a.n1Meta?.rewards?.listeningXp||50,x=e==="reading"?a.n1Meta?.rewards?.readingMoon||4:a.n1Meta?.rewards?.listeningMoon||4;H(C,x,`n1_${e}:${o.id}`)}ke(),Y(),T(),P()}function T0(e){const t=Es(e);t&&(mn("textbook-lesson",{level:"N1",lessonId:t.id}),te().currentLessonId=t.id,Rt("N1",t.id,"n1_lesson_open"),on("N1",t,"n1_lesson_open"),es(t.id))}function R0(){es("")}function _0(e=null){e&&(te().activeReviewMode=e),es("review")}function P0(){es("kanji")}function E0(){es("grammar")}function M0(){es("reading")}function K0(){es("listening")}function F0(){es("final-test")}function es(e){a.route="textbooks",a.activeTextbookLevel="N1",a.activeTextbookSubroute=e||null,te().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";jt(t),Y(),T(),ue(),Ft()}function D0(e="due"){const t=Date.now(),n=te(),s=Lt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=B(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Om(){const e=Lt();if(!e.length)return[];const t=a.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],c=t[r%t.length],l=ht().find(d=>d.kanji.includes(o.kanji))||ht()[0];s.push(O0(c,o,l,r))}return s.filter(Boolean)}function O0(e,t,n,s){const o=At(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:vt({value:t.id,label:K(t)},Lt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:K(l)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:vt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Lt().flatMap(l=>At(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=w({ru:c.ru,en:c.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:vt({value:l,label:l},ht().flatMap(d=>d.sentences||[]).map(d=>({value:w({ru:d.ru,en:d.en}),label:w({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:cs(o),answer:l,answerLabel:l,options:vt({value:l,label:l},Lt().flatMap(d=>At(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=a.n1Grammar[s%Math.max(a.n1Grammar.length,1)];if(l)return{id:`n1-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${w(l.question||l.explanation)}`,answer:Q(l),answerLabel:Q(l),options:vt({value:Q(l),label:Q(l)},Ge(l).filter(d=>d!==Q(l)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=a.n1Reading[s%Math.max(a.n1Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n1-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||w(l.title)} ${w(d.prompt)}`,answer:d.answer,answerLabel:w((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:w(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:vt({value:t.kanji,label:t.kanji},Lt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function B0(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(te().finalTest.answers[t]=n,T(),P())}function Bm(e=!1){if(a.finalTestBusy)return;const t=te().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}a.finalTestBusy=!0;try{const n=Om(),s=a.n1FinalTest||{},r=Le(),o=gn(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const N=o.firstMissingId?`#${$r("n1",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},a.pendingFocus=N,T();return}let u=0;const f=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&Sa(N.kanji,N.cardId),N.grammarId){const G=te();G.completedGrammar[N.grammarId]=G.completedGrammar[N.grammarId]||d}}else z||h.push(N),f.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&oo(N.kanji,N.cardId)});const g=n.length?Math.round(u/n.length*100):0,$=!!t.completedAt,L=!!t.passed,C=Math.max(0,f.length-h.length);let x=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=g,t.passed=g>=c,t.correctAnswers=u,t.incorrectAnswers=C,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=f,t.mistakeQuestionIds=f.map(N=>N.id),t.completedAt=d,t.lastScore=g,t.bestScore=Math.max(Number(t.bestScore||0),g),t.passedAt=t.passed?L&&t.passedAt||d:t.passedAt||null,!$){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);x+=N,k+=z,H(N,z,"n1_final_complete")}if(t.passed&&!L){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);x+=N,k+=z,H(N,z,"n1_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=k,Ja("N1",t),te(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N1",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:g,correct:u,incorrect:C,unanswered:h.length,totalQuestions:n.length,rewardXp:x,rewardMoon:k,attempts:t.attempts,threshold:c,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Y(),T()}catch(n){console.error(n),J(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,P()}}function z0(){te().finalTest=Al().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,T(),P()}function zm(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Um(e){const t=Ir(e.jlpt);if(!t)return"";const n={...fd(),...md()};return`
      <div class="jlpt-practice-grid">
        ${U0(t,n)}
        ${J0(t,n)}
        ${G0(t,n)}
        ${H0(t,n)}
      </div>
    `}function U0(e,t){return e.apps.length?`
      <article class="jlpt-practice-card">
        <h3>${i(t.apps)}</h3>
        <div class="jlpt-app-grid">
          ${e.apps.map(n=>`
            <div class="jlpt-app-chip">
              <strong>${i(n.name)}</strong>
              <span>${i(w(n.context))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function J0(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${Jm(t.hiragana,n)}
          ${Jm(t.katakana,s)}
        </div>
      </article>
    `}function Jm(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(w(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function G0(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${q0(n)}</strong>
                <small>${i(n.romaji)} · ${i(w(n.meaning))}</small>
                <p>${i(w(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function q0(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function H0(e,t){const n=Tr(e);if(!n)return"";const s=Js(),r=s.selected[n.id]||[],o=!!s.checked[n.id],c=s.results[n.id]||null,l=r.map(f=>n.tiles[f]).filter(Boolean),d=o&&c?.correct,u=o&&c?c.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(w(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${V0(n,l,u)}</div>
        <p class="label">${i(Z(n.reading))}</p>
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
    `}function V0(e,t,n){let s=0;return String(e.sentence||"").split("___").map((r,o,c)=>{if(o===c.length-1)return i(r);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),f=u.some((g,$)=>n.includes(s+$));s+=d;const h=u.length?u.map(g=>`<span>${i(g.kanji)}</span>`).join(""):`<span>${i("□".repeat(d))}</span>`;return`${i(r)}<span class="sentence-blank ${f?"is-wrong":""}">${h}</span>`}).join("")}function W0(){const e=Na(Bf()),t=EC(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?oe(t.card?.id||t.cardId||t.progress?.cardId||""):null;_C(t);const r=t?t.kind==="card"?s?tf(s):Ds():t.kind==="kana"?IC(t,n):zC(t):Ds();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Сейчас":"Due now",bt(),"due")}
              ${M(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${M(p()==="ru"?"Позже":"Learning later",hx(),"learning")}
              ${M(p()==="ru"?"Всего SRS":"Total SRS",vx(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${ls("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${r}
          ${Mc(s,n)}
        </div>
        ${X0()}
      </section>
    `}function X0(){try{return Q0()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),a.progress&&(a.progress.sentencePractice=Il(nr().sentencePractice,{})),""}}function Q0(){const e=pn(),t=co(e),n={...kr(),...Tc()},s=Y0(e,n);if(!e.length)return`
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
      `;const r=_c(t,e);if(!r)return"";const{exercise:o,tiles:c,selectedTiles:l,answerFlat:d,wrongIndexes:u,complete:f,awarded:h}=r,g=new Set(a.progress.sentencePractice.selected),$=a.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${a.progress.sentencePractice.checked?f?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",a.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(eC(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(a.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${qm(o,l,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(tC(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${c.map((C,x)=>{const k=g.has(x),N=u.includes(a.progress.sentencePractice.selected.indexOf(x));return`
              <button class="sentence-tile ${k?"is-used":""} ${N?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${x}" ${k||f?"disabled":""}>
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
    `}function Y0(e,t){const n=De(),s=Di(n.customDraft||{}),r=Array.isArray(n.customSentences)?n.customSentences:[],o=r.length,c=!!n.customEditingId,l=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${Z0(r,e,t)}
      </details>
    `}function Z0(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const r=Rc(s,t),o=!!(r&&ts(r,t).length>=Math.max(4,qt(r).length)),c=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function eC(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function kr(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Tc(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function tC(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function Gm(e=pn()){const t=nC(e),n=sC(e),s=Array.isArray(a.sentenceExercises)?a.sentenceExercises:[],r=new Set;return[...t,...n,...s].filter(o=>!o?.id||r.has(o.id)?!1:(r.add(o.id),!0))}function nC(e=pn()){const t=De();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>Rc(s,e)).filter(Boolean)}function Rc(e,t=pn()){return e?.jp?Pc({id:e.id,jlpt:hC(e.jp,t),sentence:e.jp,reading:e.hiragana||Ca(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function qm(e,t,n){const s=e?.blanks||[],r=String(e?.sentence||"").split("___");let o=0;return r.map((c,l)=>{const d=s[l];if(!d)return i(c);const u=d.answer||[],f=u.map((h,g)=>{const $=o+g,L=t[$],C=n.includes($);return`<span class="sentence-slot ${L?"is-filled":""} ${C?"is-wrong":""}">${L?i(L.kanji):""}</span>`}).join("");return o+=u.length,`${i(c)}<span class="sentence-blank">${f}</span>`}).join("")}function _c(e=co(),t=pn()){const n=Ms(t),s=(Array.isArray(e)?e:[]).filter(L=>L?.id),r=De();new Set(s.map(L=>L.id)).has(r.activeId)||lo(Ec(s)?.id||null);const c=s.find(L=>L.id===a.progress.sentencePractice.activeId)||s[0];if(!c)return null;const l=qt(c);(!Array.isArray(a.progress.sentencePractice.tileKeys)||!a.progress.sentencePractice.tileKeys.length)&&(a.progress.sentencePractice.tileKeys=ts(c,n).map(go));let d=(Array.isArray(a.progress.sentencePractice.tileKeys)?a.progress.sentencePractice.tileKeys:[]).map(wC).filter(Boolean);const u=()=>l.every(L=>d.some(C=>C.kanji===L.kanji));(d.length<Math.max(4,l.length)||!u())&&(d=ts(c,n),a.progress.sentencePractice.tileKeys=d.map(go),a.progress.sentencePractice.selected=[],a.progress.sentencePractice.checked=!1,a.progress.sentencePractice.result=null);const f=Array.isArray(a.progress.sentencePractice.selected)?a.progress.sentencePractice.selected:[];a.progress.sentencePractice.selected=f.filter((L,C,x)=>Number.isInteger(L)&&L>=0&&L<d.length&&x.indexOf(L)===C).slice(0,l.length);const h=a.progress.sentencePractice.selected.map(L=>d[L]).filter(Boolean),g=a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?a.progress.sentencePractice.result.wrongIndexes:[],$=Array.isArray(g)?g.filter(L=>Number.isInteger(L)&&L>=0&&L<l.length):[];return{exercise:c,tiles:d,selectedTiles:h,answerFlat:l,wrongIndexes:$,complete:!!(a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?.correct),awarded:!!a.progress.sentencePractice.completed?.[c.id]}}function De(){return a.progress.sentencePractice=Il(nr().sentencePractice,a.progress.sentencePractice||{}),a.progress.sentencePractice}function lo(e){a.progress.sentencePractice={...De(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=Gm(pn()).find(n=>n?.id===e);t&&Xm(t)}function Ms(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function pn(){return Ms(a.cards).filter(e=>{const t=a.lessons.find(s=>s.id===e.lessonId);if(t&&!We(t))return!1;const n=B(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||a.progress.lessonCompletions[e.lessonId]})}function co(e=pn()){const t=Ms(e),n=new Set(t.map(s=>s.kanji));return Gm(t).filter(s=>{if(!s?.id)return!1;const r=qt(s);return!r.length||r.some(o=>!n.has(o.kanji))?!1:ts(s,t).length>=Math.max(4,r.length)})}function qt(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function Hm(e){return qt(e).map(t=>t.kanji).join("")}function ts(e,t){if(!e?.id)return[];const n=Ms(t),s=qt(e),r=new Set(s.map(g=>g.kanji)),o=new Set(n.map(g=>g.kanji)),c=new Map;[...e.tiles||[],...s].forEach(g=>{g?.kanji&&g?.reading&&c.set(g.kanji,g.reading)});const l=s.map(g=>({kanji:g.kanji,reading:g.reading||c.get(g.kanji)||xn(g.kanji)})),d=(e.tiles||[]).filter(g=>g?.kanji&&!r.has(g.kanji)&&o.has(g.kanji)).map(g=>({kanji:g.kanji,reading:g.reading||xn(g.kanji)})).filter((g,$,L)=>L.findIndex(C=>C.kanji===g.kanji)===$),u=n.filter(g=>g.kanji&&!r.has(g.kanji)).map(g=>({kanji:g.kanji,reading:c.get(g.kanji)||xn(g.kanji,g)})).filter((g,$,L)=>L.findIndex(C=>C.kanji===g.kanji)===$).sort((g,$)=>Oe(`${e.id}:${g.kanji}`)-Oe(`${e.id}:${$.kanji}`)),f=[...d,...u].filter(g=>!r.has(g.kanji)).filter((g,$,L)=>L.findIndex(C=>C.kanji===g.kanji)===$),h=Math.min(Math.max(6,l.length+2),l.length+f.length);return NC([...l,...f.slice(0,h-l.length)],e.id)}function sC(e){const t=Ms(e);if(!t.length)return[];const n=new Set(t.map(c=>c.kanji)),s=new Set,r=[];return t.flatMap(c=>(c.examples||[]).map(l=>({...l,card:c}))).forEach((c,l)=>{const d=yr(c.word||"");if(!d||s.has(d)||!vC(d)||Wm(d).some(L=>!n.has(L)))return;s.add(d);const u=Ks(c.reading||Ca(d)),f=c.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${f}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${f}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${f}.`,translationEn:`I write ${d} in a memo.`}],g=h[l%h.length],$=Pc({id:`sentence-json-${Oe(`${d}:${g.sentence}`).toString(36)}`,jlpt:c.card?.jlpt||"N5",sentence:g.sentence,reading:g.reading,translationRu:g.translationRu,translationEn:g.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});$&&r.push($)}),r.slice(0,160)}function rC(){const e=De(),t={...kr(),...Tc()},n=Di(aC()||e.customDraft||{}),s=pn(),r=ns(n.jp);if(!r){uo(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(cC(r,o)){uo(t.customDuplicate,"error");return}const l=De(),d={id:o||`custom_${Date.now().toString(36)}_${Oe(r).toString(36)}`,jp:r,hiragana:Ks(ns(n.hiragana)||Ca(r)),ru:ns(n.ru),en:ns(n.en),source:"user"},u=(l.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?l.customSentences[u]=d:l.customSentences=[d,...l.customSentences||[]].slice(0,160),l.customDraft={jp:"",hiragana:"",ru:"",en:""},l.customEditingId=null,uo(o?t.customUpdated:t.customAdded,"success",!1);const f=Rc(d,s);f&&ts(f,s).length>=Math.max(4,qt(f).length)&&(lo(f.id),a.progress.sentencePractice.tileKeys=ts(f,s).map(go)),T(),P()}function aC(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function iC(e){const t=De(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",T(),P())}function oC(e){const t=De(),n={...kr(),...Tc()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(r=>r.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(r=>r!==e),t.activeId===e){const r=pn(),o=Ec(co(r));lo(o?.id||null)}uo(n.customDeleted,"success",!1),T(),P()}}function lC(){const e=De();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",T(),P()}function cC(e,t=null){const n=yr(e);return(De().customSentences||[]).some(r=>r.id!==t&&yr(r.jp)===n)?!0:a.sentenceExercises.some(r=>yr(Vm(r))===n)}function uo(e,t,n=!0){const s=De();s.customMessage=e,s.customStatus=t,T(),n&&P()}function Pc(e,t,n={}){if(!e||typeof e!="object")return null;const s=Ms(t),r=yr(e.sentence||"");if(!r||!e.id||!s.length)return null;const o=dC(r,s).filter(f=>f.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const c=uC(o,r,n);if(!c.length)return null;let l="",d=0;const u=c.map(f=>(l+=r.slice(d,f.start)+"___",d=f.end,{answer:f.answer,reading:pC(f.text)}));return l+=r.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:l,originalSentence:r,reading:Ks(e.reading||Ca(r)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(f=>f.answer.map((h,g)=>({kanji:h,reading:f.reading[g]||xn(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function dC(e,t){const n=new Map(Ms(t).map(o=>[o.kanji,o])),s=[];let r=null;return Array.from(e).forEach((o,c)=>{if(po(o)&&n.has(o)){r||(r={start:c,end:c,text:"",answer:[]}),r.end=c+1,r.text+=o,r.answer.push(o);return}r&&s.push(r),r=null}),r&&s.push(r),s}function uC(e,t,n={}){const s=Number(n.maxBlanks||2),r=Number(n.maxBlankChars||5),o=e.filter(f=>f.start>0&&f.end<t.length),c=e.filter(f=>f.start>0),l=(o.length?o:c.length?c:e).slice().sort((f,h)=>{const g=h.answer.length-f.answer.length;return g||Math.abs(f.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return l.forEach(f=>{d.length>=s||u+f.answer.length>r||(d.push(f),u+=f.answer.length)}),d.sort((f,h)=>f.start-h.start)}function pC(e){const t=Array.from(e),n=gC(e);return n?mC(t,Ks(n)):t.map(s=>xn(s))}function gC(e){for(const t of a.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function mC(e,t){const n=Array(e.length).fill("");let s=t;for(let r=e.length-1;r>0;r-=1){const c=fC(e[r]).sort((l,d)=>d.length-l.length).find(l=>l&&s.endsWith(l));c&&(n[r]=c,s=s.slice(0,-c.length))}return n[0]=s||xn(e[0]),n.map((r,o)=>r||xn(e[o]))}function fC(e){const t=a.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;・、\s]+/u)).map(s=>Ks(s.trim())).filter(Boolean);return[...new Set(n)]}function Ca(e){return Ks(Array.from(e).map(t=>po(t)?xn(t):t).join(""))}function hC(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return Wm(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,c)=>n.indexOf(c)-n.indexOf(o))[0]||"N5"}function yr(e){return String(e||"").replace(/\s+/g,"").trim()}function ns(e){return String(e||"").replace(/\s+/g," ").trim()}function Vm(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function vC(e){return Array.from(String(e||"")).some(po)}function Wm(e){return Array.from(String(e||"")).filter(po)}function po(e){return/[㐀-鿿]/u.test(e)}function Ks(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function Z(e){return Ks(String(e||""))}function xn(e,t=a.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function go(e){return`${e.kanji}	${e.reading||""}`}function wC(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||xn(t)}:null}function bC(e){const t=_c();if(!t||!Number.isInteger(e))return;const n=kr(),s=a.progress.sentencePractice;if(s.result?.correct||s.selected.includes(e))return;if(s.selected.length>=t.answerFlat.length){J(n.full);return}$w();const r=he();s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:r})}function kC(){const e=De();if(!e.selected.length||e.result?.correct)return;const t=yn||he();e.selected.pop(),e.checked=!1,e.result={correct:!1,message:kr().removed,wrongIndexes:[]},T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:t})}function yC(){const e=De();if(e.result?.correct)return;const t=yn||he();yn=null,e.selected=[],e.checked=!1,e.result=null,T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:t})}function $C(){const e=_c();if(!e)return;const t=kr(),n=jw(),s=a.progress.sentencePractice;if(s.selected.length<e.answerFlat.length){s.checked=!0,s.result={correct:!1,message:t.fillAll,wrongIndexes:[]},T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:n});return}const r=e.answerFlat.map((c,l)=>e.selectedTiles[l]?.kanji===c.kanji?-1:l).filter(c=>c>=0),o=r.length===0;if(s.checked=!0,s.attempts=(s.attempts||0)+1,s.result={correct:o,wrongIndexes:r,message:o?t.correct:t.wrong},o)jC(e.exercise,{quietReward:!0}),Ce({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),be("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),Wa("ok");else{a.progress.totalWrong+=1,a.progress.correctCombo=0,Ce({discipline:-.6,curiosity:.2},"sentence_wrong"),be("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const c=An();c.mistakes+=1,a.progress.daily[ce()]=c,Wa("again")}T(),pe({scrollPolicy:re.PRESERVE,viewportSnapshot:n})}function jC(e,t={}){const n=De();if(n.completed[e.id])return;const s=!!t.quietReward,r=a.rewards?.rewards||{},o=r.sentencePracticeXp||Ud.xp,c=r.sentencePracticeCoins||Ud.coins;n.completed[e.id]=new Date().toISOString(),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo);const l=An();l.reviews+=1,l.minutes=Fo((l.minutes||0)+.8,1),a.progress.daily[ce()]=l,H(o,c,`sentence:${e.id}`,{silent:s}),Ce({trust:.8,curiosity:.7},"sentence_complete"),ke(),Vc({silent:!0}),Y({silent:s})}function SC(){const e=pn(),t=co(e);if(!t.length)return;yn=null;const n=a.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&Xm(s);const r=Ec(t,{excludeCurrent:!0,preferUncompleted:!0});r?.id&&(lo(r.id),a.progress.sentencePractice.tileKeys=ts(r,e).map(go),T(),P())}function Ec(e,t={}){const n=(Array.isArray(e)?e:[]).filter(C=>C?.id);if(!n.length)return null;const s=De(),r=s.activeId,o=new Set(s.recentIds||[]),c=new Set(s.recentAnswers||[]),l=C=>!t.excludeCurrent||n.length===1||C.id!==r,d=C=>!t.preferUncompleted||!s.completed?.[C.id],u=C=>!c.has(Hm(C)),f=C=>!o.has(C.id),g=[n.filter(l).filter(d).filter(u).filter(f),n.filter(l).filter(d).filter(u),n.filter(l).filter(u).filter(f),n.filter(l).filter(f),n.filter(l),n].find(C=>C.length)||n,$=g.filter(CC),L=$.length?$:g;return L[Math.floor(Math.random()*L.length)]}function CC(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function Xm(e){if(!e?.id)return;const t=De(),n=Hm(e),s=Array.isArray(t.recentIds)?t.recentIds:[],r=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...r.filter(o=>o!==n)].slice(0,8)}function Oe(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function NC(e,t){return[...e].sort((n,s)=>Oe(`${t}:${n.kanji}:${n.reading}`)-Oe(`${t}:${s.kanji}:${s.reading}`))}function gn(e,t=[]){const n=t.filter(r=>String(e?.answers?.[r.id]||"").trim()).length,s=t.filter(r=>!String(e?.answers?.[r.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(r=>r.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function $r(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function xC(e){return Number(e?.passingPercent??e?.passThreshold??70)}function LC(){const e=a.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Xt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const r=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(_("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${Ln("eva",n,t?"review":"achievement","reward-mascot")}
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
    `}function Qm(e){const t=Mx(e);if(!t&&!Px(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${m(n)}" title="${m(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function mo(e){const t=Oa(e);return`
      <div class="reading-row reading-split">
        ${Ym(e,"onyomi",th("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${Ym(e,"kunyomi",th("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function Ym(e,t,n,s,r){const o=ef(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(Z(s)||"—")}</strong>
        <small>${i(r||"—")}</small>
      </div>
    `}function Zm(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${ef(e,t,n)}
            </dt>
            <dd>${i(Z(s||"—"))}</dd>
          </div>
        `}function ef(e,t,n){return Ar(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}" data-tts-kind="${m(t)}" aria-label="${m(`${n} TTS`)}" title="TTS">🔊</button>`:""}function fo(e,t="btn ghost"){const n=Hx(e);if(!n)return"";const s=Tt(n.jlpt),r=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${m(n.jlpt)}">${i(n.jlpt)} · ${i(r)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${m(Tn(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function tf(e){if(!e?.id)return Ds();Yr(e,"study_card");const t=B(e.id),n=a.revealed;Cx(e.id);const s=e.lessonTitle||kd(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${m(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${Er(t.state)}
          </div>
          ${Qm(e)}
        </div>
        <div class="kanji-focus" aria-label="${m(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?K(e):_("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(_("strokes"))} · ${i(Qt(t.dueAt))}</p>
        ${n?RC(e):`
          ${TC(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(_("showAnswer"))}</button>
            ${fo(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${m(e.id)}">⋯ ${i(_("details"))}</button>
          </div>
        `}
      </article>
    `}function AC(e){const t=Math.max(Number(a.reviewSession?.initialSize||e||0),e||0,1),n=de(t-Math.max(Number(e||0),0),0,t),s=Math.min(n+1,t);return p()==="ru"?`Осталось: ${e} · ${s} / ${t}`:`Remaining: ${e} · ${s} / ${t}`}function IC(e,t){const n=Fc(e);if(!n)return Ds();const s=n.progress||Ue(null),r=Cr(),o=Lg(n.courseSlug),c=os().settings.showRomaji;return`
      <article class="study-card kana-srs-card" data-review-card-id="${m(n.cardId)}" data-review-kind="kana">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(o)}</span>
            ${Er(s.state)}
            <span class="pill">${i(AC(t))}</span>
          </div>
          <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${m(n.kana)}" aria-label="${m(p()==="ru"?"Озвучить знак":"Speak kana")}">🔊</button>
        </div>
        <div class="kanji-focus kana-srs-focus" lang="ja" aria-label="${m(n.kana)}">${i(n.kana)}</div>
        <h2>${i(c&&n.romaji?n.romaji:p()==="ru"?"Вспомни чтение":"Recall the reading")}</h2>
        <p class="label">${i(o)} · ${i(n.strokes?`${n.strokes} ${_("strokes")}`:p()==="ru"?"знак каны":"kana card")} · ${i(Qt(s.dueAt))}</p>
        ${c&&n.romaji?`<p class="kana-srs-reading"><span lang="ja">${i(n.kana)}</span> · ${i(n.romaji)}</p>`:""}
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate-kana-review" data-course="${m(n.courseSlug)}" data-card="${m(n.cardId)}" data-rating="forgot">${i(r.forgot)} <small>${i(r.forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate-kana-review" data-course="${m(n.courseSlug)}" data-card="${m(n.cardId)}" data-rating="remember">${i(r.remember)} <small>${i(r.rememberHint)}</small></button>
        </div>
      </article>
    `}function TC(e){const t=a.readingCheck.cardId===e.id?a.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
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
          <span>${i(Z(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(cs(e))}</small>
      </li>
    `}function RC(e){return`
      <div class="answer-section">
        ${mo(e)}
        <strong>${i(_("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(ho).join("")}
        </ul>
        <strong>${i(_("apps"))}</strong>
        <p>${i(Ha(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${fo(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(Cr().forgot)} <small>${i(Cr().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(Cr().remember)} <small>${i(PN(e))}</small></button>
        </div>
      </div>
    `}function Mc(e,t){const n=a.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",r=a.route==="review"?Math.max(a.reviewSession?.initialSize||t,1):Math.max(a.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${AN(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${M(_("review"),t,"queue",E(t,r))}
          ${M("Combo",a.progress.correctCombo,`${a.progress.bestCorrectCombo} best`,E(a.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(_("hint"))} · Leya</h3>
          <p>${i(yo(e.id).hint)}</p>
          <h3>${i(_("mnemonic"))}</h3>
          <p>${i(yo(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function Fs(){a.reviewExerciseResults={},a.activeExerciseReviewId=null,a.activeExerciseReviewLevel="",a.activeExerciseReviewSource="",a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1}function _C(e){if(!e){a.activeCardId=null,Fs();return}if(a.reviewQueueLastKind=e.kind,e.kind==="card"){const t=oe(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){a.activeCardId=null,Fs();return}a.activeCardId!==t.id&&(a.activeCardId=t.id,Fs());return}if(e.kind==="kana"){a.activeCardId=null,Fs(),a.revealed=!1,kt();return}if(e.kind==="exercise"){const t=a.activeExerciseReviewId===e.exerciseId&&a.activeExerciseReviewLevel===e.level&&a.activeExerciseReviewSource===String(e.source||"textbook");a.activeCardId=null,a.activeExerciseReviewId=e.exerciseId,a.activeExerciseReviewLevel=e.level,a.activeExerciseReviewSource=String(e.source||"textbook"),t||(a.reviewExerciseResults={}),t||(a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1)}}function Kc(e,t,n="",s=null,r=null,o="textbook"){const c=D(e);if(!c||!t)return null;if(String(o||"textbook")==="reading"){const g=r||Ef(t,c);if(!g)return null;const $=Ka(s||{},g);return{kind:"exercise",source:"reading",key:`reading:${String(c)}:${t}`,level:c,exerciseId:t,lessonId:String(g.sourceId||n||$.lessonId||""),cardId:"",dueAt:$.dueAt?new Date($.dueAt).getTime():0,progress:$,exercise:g,card:null}}const d=Bs(s||{},{level:c,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=r||Hc(c,t,n||d.lessonId||"");if(!u)return null;const f=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${c}:${t}`,level:c,exerciseId:t,lessonId:f,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:oe(h)||oe(d.cardId||"")}}function jr(){if(!a.activeExerciseReviewId||!a.activeExerciseReviewLevel)return null;const e=a.activeExerciseReviewLevel,t=a.activeExerciseReviewId;if(String(a.activeExerciseReviewSource||"textbook")==="reading"){const o=Ef(t,e),c=o?as(o):a.progress.readingExercises?.[t]||null;return Kc(e,t,c?.lessonId||o?.sourceId||"",c,o,"reading")}const r=wf(e)?.exerciseSrs?.[t]||null;return Kc(e,t,r?.lessonId||"",r,null,"textbook")}function Fc(e){if(!e||e.kind!=="kana")return null;const t=ro(e.cardId||e.key||"",e.courseSlug||"");if(!t?.id||!we(t.slug))return null;const n=Bt(t.slug),s=Ue(e.progress||n[t.id]||null),r=e.character||xg(t.slug,t.kana)||{};return{...e,kind:"kana",key:t.id,courseSlug:t.slug,cardId:t.id,kana:t.kana,romaji:String(r.romaji||e.romaji||""),strokes:Number(r.strokes||e.strokes||0),progress:s,character:r,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}function Dc(e){return!e||e.kind!=="exercise"?null:Kc(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function PC(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=oe(t);if(!n?.id)return null;const s=e.progress||B(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="kana"?Fc(e):e.kind==="exercise"?Dc(e):null}function Na(e){return(Array.isArray(e)?e:[]).map(PC).filter(Boolean)}function EC(e){const t=Na(e),n=jr();if(n&&a.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(c=>c.kind==="exercise"&&c.exerciseId===n.exerciseId&&c.level===n.level))return n;const s=a.activeCardId?t.find(c=>c.kind==="card"&&c.card?.id===a.activeCardId):null;if(s)return s;const r=["card","kana"],o=r.includes(a.reviewQueueLastKind)?["exercise"]:a.reviewQueueLastKind==="exercise"?r:[];if(o.length){const c=t.find(l=>o.includes(l.kind));if(c)return c}return t[0]||n||null}function MC(e,t){const n=D(e);return n==="N5"?_g(t):n==="N4"?Xg(t):n==="N3"?cm(t):n==="N2"?ym(t):""}function KC(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Oc(){return p()==="ru"?"Перевод":"Translation"}function nf(e){const t=String(e||"").trim();return t?t.split(/([。！？、\n]+)/u).map(n=>{if(!n)return"";if(/^[。！？、\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=Zf(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([。！？、])/gu,"$1 ").replace(/([。！？、])\s*$/gu,"$1").trim():""}function FC(e){const t=!!a.activeExerciseReviewTranslationOpen,n=e?.reading?Z(e.reading):"",s=e?.reading?nf(e.reading):"",r=w({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Oc())}</button>
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
    `}function DC(e){return a.reviewExerciseResults?.[e.exerciseId]||as(e.exercise)||null}function OC(e,t,n,s){const r=String(t?.id||n),o=s?.answers?.[r]||null,c=K$(e,t,n),l=c.find(u=>String(u.value||"")===String(t?.answer||"")),d=l?w(l.label||l):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(w(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${c.map(u=>{const f=o?.selected===u.value,h=o?.correct&&u.value===t.answer,g=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||g?"success":f?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${m(r)}" data-value="${m(u.value)}" ${o||s?.completed?"disabled":""}>${i(w(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function BC(e){const t=Dc(e);if(!t||!t.exercise)return Ds();const n=DC(t),s=!!n?.completed,r=t.progress||as(t.exercise),o=KC(t.exercise),c=w(t.exercise.sourceTitle||t.exercise.title||{}),l=qt(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(x=>x?.id),u=t.exercise.kind==="cloze"||!d.length&&l.length>0;if(!u&&!d.length)return Ds();const f=u?s?1:Array.isArray(r?.selectedIndices)?r.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,l.length):Math.max(1,d.length),g=Array.isArray(r?.selectedIndices)?r.selectedIndices:Array.isArray(a.activeExerciseReviewSelection)?a.activeExerciseReviewSelection:[],$=g.map(x=>t.exercise.tiles?.[x]).filter(Boolean),L=Array.isArray(r?.wrongIndexes)?r.wrongIndexes:[],C=FC(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${m(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(c||o)}</span>
          <span class="pill">${i(r.state)} · ${i(Qt(r.dueAt))}</span>
          <span class="pill">${i(f)}/${i(h)}</span>
        </div>
        ${C}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${qm(t.exercise,$,L)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(w({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((x,k)=>{const N=g.includes(k),z=L.includes(k);return`
                <button class="sentence-tile ${N?"is-used":""} ${z?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${k}" ${N||s?"disabled":""}>
                  <span>${i(x.reading||"")}</span>
                  <strong>${i(x.kanji)}</strong>
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
        `:d.map((x,k)=>OC(t,x,k,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function zC(e){const t=Dc(e);if(!t||!t.exercise)return Ds();if(t.source==="reading")return BC(t);const n=!!a.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${m(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Qt(t.progress.dueAt))}</span>
        </div>
        ${MC(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function UC(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(ze("eva","lessonComplete"))}</h2>
        <p>${i(e?qa(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(_("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function JC(){const e=a.reviewSession?.results||{},t=Number(e.remember||0),n=Number(e.forgot||0),s=t+n,r=(Array.isArray(e.items)?e.items:[]).filter(o=>o?.dueAt).sort((o,c)=>(Date.parse(o.dueAt)||0)-(Date.parse(c.dueAt)||0)).slice(0,4);return`
      <article class="empty-state review-complete-card">
        <span class="kanji-char">済</span>
        <h2>${i(p()==="ru"?"Повторение завершено":"Review complete")}</h2>
        <p>${i(p()==="ru"?"Карточки закрыты. Вот короткий итог с ближайшими возвращениями.":"Cards are done. Here is a short summary and the nearest returns.")}</p>
        <div class="mini-stat-row">
          ${M(p()==="ru"?"Помню":"Remember",t,`${s}`,E(t,Math.max(1,s)))}
          ${M(p()==="ru"?"Не помню":"Forgot",n,`${s}`,E(n,Math.max(1,s)))}
        </div>
        ${r.length?`<ul class="review-upcoming-list">
          ${r.map(o=>`<li><strong>${i(o.label||o.kind||"")}</strong><span>${i(o.course||"")}</span><small>${i(Qt(o.dueAt))}</small></li>`).join("")}
        </ul>`:""}
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">典 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function Ds(){const e=a.reviewSession?.results||{},t=Number(e.remember||0)+Number(e.forgot||0);return a.route==="review"&&Number(a.reviewSession?.initialSize||0)>0&&t>0?JC():`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(ze("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
      </article>
    `}function GC(){const e=wx(),t=Math.max(Or,Number(a.dictionaryVisibleCount||Or)),n=e.slice(0,t),s=n.length<e.length,r=a.cards.filter(u=>!!a.progress.favorites[u.id]).length,o=["all",...new Set(a.cards.map(u=>u.jlpt))],c=["all",...new Set(a.cards.map(u=>Da(u.id).radical).filter(Boolean))],l=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("dictionary"))}</h1>
            <p>${i(l)} · ${e.length}/${a.cards.length}</p>
          </div>
        </div>
        ${qC(r)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(_("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${m(a.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${m(u)}" ${Za(u,a.filters.jlpt)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(_("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",_("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,f])=>`<option value="${u}" ${Za(u,a.filters.strokes)}>${i(f)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(_("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${c.map(u=>`<option value="${m(u)}" ${Za(u,a.filters.radical)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(_("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${Za("all",a.filters.favorites)}>${i(_("all"))}</option>
              <option value="yes" ${Za("yes",a.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(HC).join("")||WC()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(l)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function qC(e){const t=a.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${m(_("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${a.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function HC(e){const t=B(e.id),n=Da(e.id),s=!!a.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${m(e.id)}">
        ${VC(e)}
        <div class="tag-row">
          ${Er(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(_("strokes"))}</span>
          <span class="pill">${i(_("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(_("learnedStatus"))}: ${i(bh(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function VC(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(K(e))}</h3>
          <p>${i(rd(e))}</p>
          <span class="label">${i(kd(e.lessonId))}</span>
        </span>
      </span>
    `}function WC(){const e=a.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function XC(){const e=a.kanjiPageId||mA(),t=oe(e);if(!t)return a.deferredDataLoaded?ta(ve("hash","entity-not-found",gA(),ms(location.hash).segments)):(Ci({route:"kanji",delay:0,force:!0}),yh());const n=B(t.id),s=Da(t.id),r=!!a.progress.favorites[t.id],o=pN(t,p()),c=QC(t),l=Wc(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(_("dictionary"))}</button>
            <h1>${i(c?`${t.kanji} — ${YC(c)}`:t.kanji)}</h1>
            <p>${i(c?ZC(c):K(t))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${m(t.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${m(t.id)}">${r?"★":"☆"} ${i(_("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${m(t.kanji)}">${i(t.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${Er(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(_("strokes"))}</span>
                <span class="pill">${i(_("radical"))}: ${i(s.radical||"-")} ${i(w(s.radicalMeaning||{}))}</span>
                ${c?`<span class="pill">Grade ${i(c.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(c.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(K(t))}</h2>
              <p>${i(Ha(t))}</p>
              ${mo(t)}
              ${zc(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${c?eN(c):""}
          ${c?tN(c):""}
          <article class="kanji-profile-card">
            <h2>${i(_("examples"))}</h2>
            <ul class="example-list">${t.examples.map(ho).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${c?nN(c):oN(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("strokeOrder"))}</h2>
            <p class="label">${i(l?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Ea(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${fo(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("apps"))}</h2>
            <p>${i(Ha(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${c?rN(c):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${m(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${c?aN(c):""}
        </div>
      </section>
    `}function QC(e){return a.kanjiPageSources?.[e?.kanji]||null}function YC(e){return sf(e.meanings)[0]||e.literal}function sf(e){return e?e[p()]||e.ru||e.en||[]:[]}function Sr(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function ZC(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function eN(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(sf(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Sr(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(_("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(_("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Sr(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function tN(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${m(iN(t))}">
                <b>${Bc(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Sr(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function nN(e){return`
      <ul class="kanji-sentence-list">
        ${sN(e).map(n=>`
          <li>
            <strong>${Bc(n.japanese,e.literal)}</strong>
            <small>${i(Sr(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function sN(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const r=s.japanese||"";if(!r.includes(e.literal)||t.has(r))return!1;t.add(r);const o=r.replace(/[\s。、！？!?「」『』（）()・ー]/gu,"").length;return!(o<3||o>44)}).sort((s,r)=>Number(rf(r.japanese,n))-Number(rf(s.japanese,n))).slice(0,8)}function rf(e,t){return[...t].some(n=>e.includes(n))}function rN(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${m(t.type||"card")}">
            <span>${i(Sr(t.title||{}))}</span>
            <strong>${Bc(t.japanese,e.literal)}</strong>
            <small>${i(Sr(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function aN(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((r,o)=>r?`<section><h3>${i(n[o])}</h3><p>${i(r)}</p></section>`:"").join("")}
      </article>
    `}function iN(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Bc(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${m(n)}">${i(n)}</mark>`):i(s)}function oN(e){const t=lN(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${uN(n)}</strong>
            <span>${i(cN(n))}</span>
            <small>${i(dN(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function lN(e){const t=e?.kanji||"";return t?(a.sentenceExercises||[]).filter(n=>{const s=af(n),r=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||r.includes(t)}).slice(0,6):[]}function af(e){return e?.sentence||e?.jp||""}function cN(e){return e?.reading||e?.hiragana||""}function dN(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function uN(e){let t=i(af(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function pN(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${of(e)}/`}function of(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),r=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${r}`}function gN(){const e=oe(a.activeCardId)||ed()[0]||a.cards[0];e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=de(a.writingStep,0,Math.max(0,Vt(e)-1)));const t=Wc(e),n=Vt(e),s=p()==="ru"?"Шаг":"Step",r=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",c=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
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
            ${e?mo(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}">🔊 ${i(_("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${a.writingStep+1}/${n}</span>
                <span class="label">${i(Ea(e)[a.writingStep]||"")}</span>
                <span class="writing-mode-note">${i(c)}</span>
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
            ${e?mN(e):""}
            <h3>${i(_("hint"))}</h3>
            <p>${i(yo(e?.id).hint)}</p>
            <h3>${i(_("mnemonic"))}</h3>
            <p>${i(yo(e?.id).mnemonic)}</p>
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
    `}function mN(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Ea(e).map((n,s)=>`
          <li class="${s===a.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function fN(){if(!a.detailCardId)return"";const e=oe(a.detailCardId);if(!e)return"";const t=B(e.id),n=Da(e.id),s=!!a.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${Er(t.state)}
              <h2>${i(K(e))}</h2>
              <p>${i(rd(e))} · ${e.strokes} ${i(_("strokes"))}</p>
              <p><span class="pill">${i(_("radical"))}: ${i(n.radical||"-")} ${i(w(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${mo(e)}
          ${zc(e)}
          <h3>${i(_("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(r=>`<li>${i(r)}</li>`).join("")}</ol>
          <h3>${i(_("examples"))}</h3>
          <ul class="example-list">${e.examples.map(ho).join("")}</ul>
          <h3>${i(_("apps"))}</h3>
          <p>${i(Ha(e))}</p>
          <ul class="app-list">${e.apps.map(r=>`<li>${i(r)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${m(e.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${m(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${m(e.id)}">${s?"★":"☆"} ${i(_("favorites"))}</button>
            ${fo(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function zc(e){const t=ad(e),n=Ar(e);return`
      <section class="audio-panel">
        <h3>${i(_("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}">🔊 Kanji</button>`:""}
          ${hN(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function hN(e,t=Ar(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${m(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${m(e.id)}" data-tts-text="${m(n.kana)}" data-tts-label="${m(Uc(n))}">
                <span>${i(Uc(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function Uc(e){return e.kind==="onyomi"?jo("onyomi"):e.kind==="kunyomi"?jo("kunyomi"):e.label||"TTS"}function vN(){const e=td(),t=An(),n=Rn();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("stats"))}</h1>
            <p>${i(_("xp"))} · ${i(_("level"))} · ${i(_("coins"))}</p>
          </div>
          <div class="actions">
            ${ls("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">✦ ${i(_("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("xp"),`${n.current}/${n.next}`,`${_("level")} ${a.progress.level}`,n.percent)}
          ${M(_("streak"),a.progress.streak.current,`${a.progress.streak.best} best`,E(a.progress.streak.current,30))}
          ${M(_("mastered"),e.mastered,`${e.total}`,E(e.mastered,e.total))}
          ${M(_("successRate"),`${Jf()}%`,`${nd()} reviews`,Jf())}
          ${M(_("errors"),t.mistakes||0,`${a.progress.totalWrong} total`,E(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(_("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${bN()}</article>
          ${a.bootAncillaryLoaded?`<article class="tool-panel" data-section="shop-panel">${yN()}</article>`:`<article class="tool-panel" data-section="shop-panel-loading"><h3>${i(zn().title)}</h3><p>${i(p()==="ru"?"Загружаю каталог кастомизации…":"Loading customization catalog…")}</p></article>`}
          <article class="tool-panel">${df()}</article>
          <article class="tool-panel">
            <h3>${i(_("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(Un().badge)}</strong>
                  <small>${i(Un().hint)}</small>
                </span>
                <span class="pill">${i(Un().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${To()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${To()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Ro()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Ro()*100)}%</strong>
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
    `}function Os(){return a.achievements?.length?a.achievements:a.rewards?.achievements||[]}function wN(){return a.achievementCategories?.length?a.achievementCategories:[...new Set(Os().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function Jc(e){return w(e.title||e.name||{ru:e.id,en:e.id})}function lf(e){return w(e.description||{})}function Gc(e){return{moon:"月",book:"文",memory:"記",flame:"火",star:"星",brush:"筆",text:"文",lock:"鍵",eye:"眼"}[e]||"✦"}function bN(){return`<h3>${i(_("achievements"))}</h3><div class="achievement-grid compact">${Os().slice(0,8).map(cf).join("")}</div>`}function kN(){const e=Os(),t=wA(),n=e.reduce((s,r)=>({xp:s.xp+(r.rewardXp||0),coins:s.coins+(r.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(_("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${ls("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">▥ ${i(_("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",E(t,e.length))}
          ${M("XP",n.xp,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(_("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Fr(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",E(e.filter(s=>s.secret&&Fr(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${wN().map(s=>{const r=e.filter(c=>c.category===s.id);if(!r.length)return"";const o=r.filter(c=>Fr(c.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${Gc(s.icon)} ${i(w(s.title))}</h2>
                    <p>${o}/${r.length}</p>
                  </div>
                  <span class="pill">${E(o,r.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${r.map(c=>cf(c,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function cf(e,t=!1){const n=Fr(e.id),s=$f(e),r=Math.max(1,Number(e.target||1)),o=E(s,r),c=Math.min(s,r),l=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":Jc(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":lf(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${Gc(e.icon)}</span>
        <strong>${i(l)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${m(`${c}/${r}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(_("coins"))}</small>
      </div>
    `}function yN(){return Xp({closable:!1})}function df(e={}){const t=e.limit||10,n=(a.progress.transactions||[]).slice(0,t);return`
      <h3>${i(_("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i($N(s))}</strong>
              <small>${i(PL(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function $N(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=Se(n[1]);if(s)return Dt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function jN(){if(!ff())return"";const e=a.rewardModal,t=e.type==="level",n=e.type==="achievement",s=Rn(),r=t?`${_("level")} ${a.progress.level} - ${s.current}/${s.next} XP - ${a.progress.moonFragments} ${_("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${Gc(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(_("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${Ln(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
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
    `}function SN(){if(!a.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",r=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(Xs),c=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),l=`mailto:${St}?subject=${o}&body=${c}`;return`
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
            <a class="btn primary" href="${m(l)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(r)}</button>
          </div>
        </article>
      </div>
    `}function CN(){const e=a.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=w(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),r=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",c=n==="ru"?"Понятно":"Got it";return`
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
    `}function NN(){if(!a.pwaInstallHelpVisible)return"";const e=Mr(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",r=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function xN(){if(Kp()||a.pwaInstallHelpVisible||!Sd()||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal)return"";const e=$h(),t=!ws&&Mr();return`
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
    `}function LN(){if(Kp()||!a.notificationPromptVisible||!Eo("visible")||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.pwaInstallHelpVisible||Sd())return"";const e=Lh();return`
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
    `}function AN(e,t,n){const s=Pr(e),r=vo(e,t,n),o=mf(ze(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${m(e)}">
        <img src="${m(r)}" alt="${m(w(s.name))}" />
        <div><strong>${i(w(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function Ln(e,t,n,s){const r=Pr(e),o=vo(e,t,n),c=mf(ze(e,n)),l=`${s||"mascot"}:${e}:${n}:${a.route}:${a.activeTextbookLevel||a.activeJlptLesson||""}`.toLowerCase();return pf(l)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${m(e)}">
        <img src="${m(o)}" alt="${m(w(r.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${m(e)}">
        <img src="${m(o)}" alt="${m(w(r.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${m(l)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${m(l)}" aria-label="${m(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(c)}</span>
        </div>
      </div>
    `}function uf(){try{const e=sessionStorage.getItem(q);return e?JSON.parse(e)||{}:{}}catch{return{}}}function IN(e){try{sessionStorage.setItem(q,JSON.stringify(e||{}))}catch{}}function pf(e){return e?!!uf()[e]:!1}function gf(e){if(!e)return;const t=uf();t[e]=Date.now(),IN(t);const n=ks.get(e);n&&(clearTimeout(n),ks.delete(e)),P()}function TN(){const e=new Set;dl("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||pf(n)||(e.add(n),ks.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const r=window.setTimeout(()=>{ks.delete(n),gf(n)},s);ks.set(n,r)});for(const[t,n]of ks)e.has(t)||(clearTimeout(n),ks.delete(t))}function vo(e,t="normal",n="welcome"){if(e==="eva")return Is(Sn(null,RN(t,n)));const s=Pr(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function RN(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),r={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},c=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return c&&(!n||n==="welcome")?c:r[n]||o[s]||s||"neutral"}function mf(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function _N(e){const t=oe(a.activeCardId);if(!t||!ov[e])return;const n=he();Qr(t,"srs_rating");const s=ie(B(t.id)),r=ye(s,e);a.progress.cards[t.id]=r,Ht(s,r,e),ke();const o=Number(a.progress.correctCombo||0),c=Be(e)?"again":"ok";Be(e)?(a.progress.totalWrong+=1,a.progress.correctCombo=0,Ce({discipline:-.8,trust:-.2},"answer_again"),be("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:o>0}),J(ze("eva","wrong"))):(H(a.rewards.rewards.correctXp,a.rewards.rewards.correctCoins,"review_success"),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),Ce({trust:.35,discipline:.25,curiosity:r.lastDecision==="Easy"?.2:0},`answer_${e}`),be("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:a.progress.correctCombo}),J(ze("eva","correct")),a.progress.correctCombo>0&&a.progress.correctCombo%5===0&&(H(a.rewards.rewards.comboXp,0,"combo_bonus"),wt({title:"Combo",message:ze("leya","combo"),xp:a.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),a.reviewQueueLastKind="card",zf("kanji",e,{label:t.kanji,level:t.jlpt,dueAt:r.dueAt,cardId:t.id}),Df(`card:${t.id}`),a.revealed=!1,a.activeCardId=null,kt(),Ao("card"),pe({scrollPolicy:re.TOP,viewportSnapshot:n}),T(),Mt("review card post-render effects",()=>{So(),Wa(c),ir(),KN(t.lessonId),Vc({silent:!0}),Y()},{scrollPolicy:re.TOP,viewportSnapshot:n})}function ff(){return!!(a.rewardModal&&a.route!=="review")}function hf(e,t,n){const s=ro(t,e);if(!s?.id||!we(s.slug))return;const r=he(),o=yt(s.slug),c=Bt(s.slug),l=ie(Ue(c[s.id]||null)),d=Be(n)?"forgot":"remember",u=Md(l,d);c[s.id]=u,o.review=c,o.currentRoute="review",o.updatedAt=new Date().toISOString(),Ht(l,u,d),ke({skipAchievements:!0});const f=Number(a.progress.correctCombo||0),h=d==="forgot"?"again":"ok";d==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,Ce({discipline:-.5,trust:-.1},"kana_answer_again"),be("answer_wrong",{cardId:s.id,kana:s.kana,rating:d,comboLost:f>0},{skipAchievements:!0}),J(ze("eva","wrong"))):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),Ce({trust:.25,discipline:.2,curiosity:.1},"kana_answer_remember"),be("answer_correct",{cardId:s.id,kana:s.kana,rating:d,combo:a.progress.correctCombo},{skipAchievements:!0}),J(ze("eva","correct"))),a.reviewQueueLastKind="kana",zf("kana",d,{label:s.kana,course:Lg(s.slug),dueAt:u.dueAt,cardId:s.id}),Df(s.id),a.revealed=!1,a.activeCardId=null,Fs(),kt(),Ao("kana"),pe({scrollPolicy:re.TOP,viewportSnapshot:r}),T(),Mt("kana review post-render effects",()=>{So(),Wa(h),ir()},{scrollPolicy:re.TOP,viewportSnapshot:r})}function Cr(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function PN(e){const t=Cr(),n=B(e.id),s=EN(n,"remember"),r=Yw(n,s);return`${t.rememberHint}: ${Zw(Xw(r))}`}function EN(e,t){if(Be(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),r=Number(e.correct||0),o=Number(e.wrong||0),c=Number(e.lapses||0),l=Number(e.successRate||(s?r/Math.max(r+o,1)*100:0));return n==="New"?"good":n==="Learning"?l>=70||r>=2?"good":"hard":l>=88&&r>=5&&c<=1?"easy":l<70||c>Math.max(1,Math.floor(r/3))?"hard":"good"}function Be(e){return e==="forgot"||e==="again"}function Nr(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function Bs(e,t={}){const s={...Nr(t.level||"",t.lessonId||"",t.exerciseId||"",t),...Ue(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=kh(s),Number.isFinite(Number(s.srsStep))?s.srsStep=de(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=Ol(s),vf(s)?s:Nr(s.level,s.lessonId,s.exerciseId,s)}function vf(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function xa(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([r,o])=>{s[r]=Bs(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function wf(e){const t=D(e);return t==="N5"?se():t==="N4"?X():t==="N3"?V():t==="N2"?W():t==="N1"?te():null}function qc(e){const t=D(e);return t==="N5"?et():t==="N4"?dt():t==="N3"?pt():t==="N2"?mt():t==="N1"?ht():[]}function MN(e,t){const n=D(e),s=String(t||"");return!n||!s?null:qc(n).find(r=>r.id===s||r.id===`${n.toLowerCase()}-${s}`||r.id.endsWith(`-${s}`))||null}function bf(e){const t=D(e);return t==="N5"?Ps:t==="N4"?ha:t==="N3"?wa:t==="N2"?ka:t==="N1"?ja:null}function Hc(e,t,n=""){const s=bf(e),r=D(e),o=String(t||"");if(!s||!r||!o)return null;const c=MN(r,n);if(c){const l=s(c).find(d=>String(d.id)===o);if(l)return l}for(const l of qc(r)){const d=s(l).find(u=>String(u.id)===o);if(d)return d}return null}function La(e,t){const n=D(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),r=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return r.forEach(c=>{if(e.exerciseSrs[c])return;const l=Hc(n,c);if(!l||!s.has(String(l.lessonId||"")))return;const d=Nr(n,l.lessonId||"",l.id,l),u=e.exerciseResults?.[c]||null,f=!!e.completedExercises?.[c],h=ye(ie(d),f||u?.correct?"good":"again");h.level=n,h.lessonId=String(l.lessonId||h.lessonId||""),h.exerciseId=String(l.id||c||""),h.cardId=String(l.cardId||h.cardId||""),h.kanji=String(l.kanji||h.kanji||""),h.type=String(l.type||h.type||""),h.title=l.title||h.title||null,h.prompt=String(l.prompt||h.prompt||""),h.answer=String(l.answer||h.answer||""),h.answerLabel=String(l.answerLabel||h.answerLabel||""),e.exerciseSrs[c]=h,o=!0}),o}function Aa(e,t){const n=D(t);if(!e||!n)return!1;const s=qc(n),r=bf(n);if(!r?.length&&!r)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=Object.entries(e.exerciseSrs);if(!o.length)return!1;const c=new Map;s.forEach(d=>{(r(d)||[]).forEach(u=>{u?.id&&c.set(String(u.id),{exercise:u,lesson:d})})});let l=!1;return o.forEach(([d,u])=>{const f=c.get(String(d));if(!f)return;const{exercise:h,lesson:g}=f,$=Bs(u,{level:n,lessonId:g.id,exerciseId:h.id,cardId:h.cardId||"",kanji:h.kanji||"",type:h.type||"",title:h.title||null,prompt:h.prompt||"",answer:h.answer||"",answerLabel:h.answerLabel||""});JSON.stringify(u)!==JSON.stringify($)&&(e.exerciseSrs[d]=$,l=!0)}),l}function KN(e){if(a.progress.lessonCompletions[e])return;const t=sd(e);if(!(t.length>0&&t.every(o=>B(o.id).state!=="New")))return;const s=a.rewards.rewards.lessonCompleteXp,r=a.rewards.rewards.lessonCompleteCoins;a.progress.lessonCompletions[e]=new Date().toISOString(),Rr("",e,"legacy-srs"),F("lesson_complete"),H(s,r,"lesson_completion"),Ce({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),be("lesson_complete",{lessonId:e,xp:s,coins:r}),wt({title:w({ru:"Урок завершён",en:"Lesson complete"}),message:ze("eva","lessonComplete"),xp:s,coins:r,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),Mo("lesson_complete")}function Vc(e={}){const t=ce(),n=An();if(n.goalClaimed||n.reviews<a.progress.settings.dailyGoal)return;n.goalClaimed=!0;const s=a.rewards.rewards.comboXp,r=a.rewards.rewards.streakCoins;H(s,r,"daily_goal"),e.silent||wt({title:_("dailyGoal"),message:ze("leya","goal"),xp:s,coins:r,mascot:"leya",mood:"happy",dialog:"goal"}),a.progress.daily[t]=n}function FN(){const e=wo(),t=ce();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,a.progress.appOpens=Number(a.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(a.progress.secrets.nightVisit=!0),kf()}function kf(){const e=a.progress.streak,t=Qu(e.pendingReward);if(!t||ce()<t.availableOn)return!1;e.pendingReward=null;const n=a.rewards.rewards.streakCoins;return F("streak_reward"),H(0,n,`streak:${t.milestone}:claim`),wt({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),Y(),T(),!0}function DN(e){if(e==="eva"){a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,Ce({warmth:.2,curiosity:.1},"eva_click"),J(ze("eva","welcome")),Y(),T(),P();return}e==="leya"&&J(ze("leya","combo"))}function yf(){me(),a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,a.evaRuntime||(a.evaRuntime=an()),a.evaRuntime.clickCount=Number(a.evaRuntime.clickCount||0)+1,be("user_clicked_eva",{clickCount:a.evaRuntime.clickCount}),Y(),F("notification_soft"),T(),P()}function ON(){if(ee.completed)return;ee.completed=!0,a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,ee.cardId&&(a.progress.writingPractice.cards[ee.cardId]=(a.progress.writingPractice.cards[ee.cardId]||0)+1),Ce({curiosity:1,discipline:.8,trust:.4},"writing_complete"),be("writing_complete",{cardId:ee.cardId}),fe("writing_complete",{route:"writing",cardId:ee.cardId||"",source:"practice"});const e=Y();T(),e&&P()}function BN(){const e=ce();wo();const t=zN(),n=Fi(a.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(a.progress.dailyBonusPending=null),a.progress.dailyBonusPending={availableOn:Ah(e,1)},T())}function zN(){const e=ce(),t=wo(),n=Fi(a.progress.dailyBonusPending);if(!n||ce()<n.availableOn||a.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;a.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return UN(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,a.progress.dailyBonuses[e]=new Date().toISOString(),F("daily_bonus"),H(a.rewards.rewards.dailyBonusXp,a.rewards.rewards.dailyBonusCoins,"daily_bonus"),Ce({warmth:1,discipline:.8},"daily_bonus"),wt({title:_("dailyBonus"),message:ze("leya","welcome"),xp:a.rewards.rewards.dailyBonusXp,coins:a.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),Y(),xd(),!0}function wo(){var t;(t=a.progress).visits||(t.visits={});const e=a.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function UN(e,t){const n=wo();n.streak=e&&us(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=a.progress.streak.lastStudyDate;s!==t&&(a.progress.streak.current=s&&us(s,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best||0,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120))}function Y(e={}){if(!Os().length)return 0;const t=!!e.silent;let n=0;return Os().forEach(s=>{if(Fr(s.id)||!JN(s))return;n+=1;const r=s.rewardXp||0,o=s.rewardFragments||0;a.progress.achievements[s.id]={unlockedAt:new Date().toISOString(),rewardXp:r,rewardFragments:o},t||wt({type:"achievement",title:Jc(s),message:lf(s),xp:r,coins:o,icon:s.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),H(r,o,`achievement:${s.id}`,{silent:t})}),n}function JN(e){return $f(e)>=Number(e.target||1)}function $f(e){if(e.kind==="lessonComplete")return Object.keys(a.progress.lessonCompletions).length;if(e.kind==="correct")return a.progress.totalCorrect;if(e.kind==="learned")return td().learned;if(e.kind==="reviews")return nd();if(e.kind==="streak")return Math.max(a.progress.streak.current||0,a.progress.streak.best||0);if(e.kind==="level")return a.progress.level||1;if(e.kind==="moonFragments")return a.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return a.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(a.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return a.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return a.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return a.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(se().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return ao();if(e.kind==="n5Writing")return Object.keys(se().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(se().srsKanji||{}).length;if(e.kind==="n5FinalPass")return se().finalTest?.passed?1:0;if(e.kind==="n4Opened")return X().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(X().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(X().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(X().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(X().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(X().writingPractice||{}).length;if(e.kind==="n4FinalPass")return X().finalTest?.passed?1:0;if(e.kind==="n3Opened")return V().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(V().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(V().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(V().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(V().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(V().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(V().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(V().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(V().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return V().finalTest?.passed?1:0;if(e.kind==="n2Opened")return W().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(W().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=Ke().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Ot(n.id))?1:0}if(e.kind==="jlpt"){const t=a.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>B(n.id).state==="Mastered")?1:0}return 0}function wt(e){if(!(e?.type==="achievement"&&Of())){if(!a.rewardModal){a.rewardModal=e,jf(e);return}if(e.type==="level"){a.rewardQueue.unshift(e);return}a.rewardQueue.push(e)}}function jf(e){if(UL(),e?.type==="achievement"){Ga()?F("achievement_unlock"):To()&&zL();return}if(e?.type==="level"){F("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&F("notification_reward")}function H(e,t,n="reward",s={}){const r=!!s.silent,o=a.progress.level||Lo(a.progress.xp);a.progress.xp+=e,a.progress.moonFragments+=t;const c=GN(n);if(!r&&!c&&e>0&&F("xp_gain"),!r&&!c&&t>0&&F("moon_fragment_gain"),t>0&&(a.progress.totalMoonFragmentsEarned=Number(a.progress.totalMoonFragmentsEarned||0)+t),a.progress.level=Lo(a.progress.xp),(e||t)&&(a.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80)),a.progress.level>o){if(r)return;F("level_up"),be("level_up",{level:a.progress.level,xp:a.progress.xp,moonFragments:a.progress.moonFragments});const l=Rn();wt({type:"level",title:_("levelUp"),message:`${_("level")} ${a.progress.level} - ${l.current}/${l.next} XP - ${a.progress.moonFragments} ${_("coins")}`,xp:0,coins:0,mascot:a.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:a.progress.level,totalXp:a.progress.xp,moonFragments:a.progress.moonFragments})}}function GN(e){return["learn","review"].includes(a.route)&&["review_success","combo_bonus"].includes(e)}function Ht(e,t,n){const s=An();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Be(n)&&(s.mistakes+=1),s.minutes=Fo(s.reviews*.75+s.learned*1.25,1),a.progress.daily[ce()]=s}function ke(e={}){kf();const t=ce(),n=a.progress.streak.lastStudyDate;if(n===t)return;const s=!!(n&&us(n,t)>1&&a.progress.streak.current>0);a.progress.streak.current=n&&us(n,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120),Ce(s?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},s?"streak_lost":"study_streak"),s&&J(ze("eva","streakLoss")),[1,7,30,100].includes(a.progress.streak.current)&&(a.progress.streak.pendingReward={milestone:a.progress.streak.current,availableOn:Ah(t,1)}),be("streak_up",{streak:a.progress.streak.current,lost:s},{skipAchievements:!!e.skipAchievements}),T()}function Sf(){if(a.route!=="stats")return;if(!window.Chart){Nv().then(()=>{a.route==="stats"&&Sf()}).catch(r=>console.warn("Chart.js failed to load.",r));return}const e=uA(10),t=e.map(r=>r.slice(5)),n=FL(),s=DL(n);Ia("activityChart",{type:"bar",data:{labels:t,datasets:[{label:_("learned"),data:e.map(r=>a.progress.daily[r]?.learned||0),backgroundColor:n.green},{label:_("review"),data:e.map(r=>a.progress.daily[r]?.reviews||0),backgroundColor:n.red}]},options:s}),Ia("jlptChart",{type:"bar",data:{labels:Object.keys(qf()),datasets:[{label:_("mastered"),data:Object.values(qf()),backgroundColor:n.yellow}]},options:s}),Ia("streakChart",{type:"line",data:{labels:t,datasets:[{label:_("streak"),data:e.map(r=>a.progress.streakHistory.find(o=>o.date===r)?.value||(a.progress.daily[r]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),Ia("stateChart",{type:"doughnut",data:{labels:Object.keys(Gf()),datasets:[{data:Object.values(Gf()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),Ia("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:_("errors"),data:e.map(r=>a.progress.daily[r]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function Ia(e,t){const n=document.getElementById(e);n&&a.charts.push(new Chart(n,t))}function qN(){const e=ss();e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=de(a.writingStep,0,Math.max(0,Vt(e)-1)),ee.cardId!==String(e.id)&&HN(e)),VN(),Ra(),bo(),Ma(Ta(!1)),window.setTimeout(Nf,120)}function ss(){return oe(a.activeCardId)||ed()[0]||a.cards[0]||null}function HN(e){ee.cardId=String(e?.id||""),ee.strokes=[],ee.currentStroke=[],ee.drawing=!1,ee.activePointerId=null,ee.completed=!1}function VN(){const e=document.getElementById("practiceCanvas");if(!e)return;xr();const t=r=>{r.pointerType==="mouse"&&r.button!==0||(r.preventDefault(),e.setPointerCapture?.(r.pointerId),ee.drawing=!0,ee.activePointerId=r.pointerId,ee.currentStroke=[Cf(e,r)],ee.completed=!1,xr())},n=r=>{if(!ee.drawing||r.pointerId!==ee.activePointerId)return;r.preventDefault();const o=Cf(e,r),c=ee.currentStroke[ee.currentStroke.length-1];(!c||Pf(c,o)>1.4)&&(ee.currentStroke.push(o),xr())},s=r=>{if(!ee.drawing||r.pointerId!==ee.activePointerId)return;r.preventDefault();const o=WN(ee.currentStroke);o.length&&ee.strokes.push(o),ee.currentStroke=[],ee.drawing=!1,ee.activePointerId=null,xr(),Ma(Ta(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=r=>r.preventDefault()}function Cf(e,t){const n=e.getBoundingClientRect();return{x:de((t.clientX-n.left)*(e.width/n.width),0,e.width),y:de((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function WN(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{Pf(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function xr(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=ss();_f(t,e),n&&ZN(t,e,n),ee.strokes.forEach((s,r)=>Rf(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:r===ee.strokes.length-1})),ee.currentStroke.length&&Rf(t,ee.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function XN(){ee.strokes=[],ee.currentStroke=[],ee.drawing=!1,ee.completed=!1,xr(),Ma(Ta(!1))}function QN(){ee.strokes.pop(),ee.currentStroke=[],ee.completed=!1,xr(),Ma(Ta(!1))}function YN(e=!1){const t=Ta(!0);Ma(t),e&&(Wa(t.success?"good":"again"),J(t.message),t.success&&ON())}function Ta(e){const t=document.getElementById("practiceCanvas"),n=ss(),s=Vt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const r=ee.strokes;if(!r.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=de(Math.round(Math.min(r.length,s)/s*100),0,100),c=e?100:o,l=!!(e&&r.length);let d=p()==="ru"?`Черты: ${r.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${r.length}/${s}. Self-check without recognition.`;return!e&&r.length<s?d=p()==="ru"?`Черта ${r.length+1}/${s}: продолжай по образцу.`:`Stroke ${r.length+1}/${s}: keep following the guide.`:!e&&r.length>s?d=p()==="ru"?`Черты: ${r.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${r.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=Wc(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:c,success:l,expectedCount:s,message:d}}function Nf(){const e=document.getElementById("strokeCanvas"),t=ss();if(!e||!t)return;cancelAnimationFrame(ee.demoAnimationId);const n=Vt(t),s=460,r=performance.now(),o=c=>{const l=c-r,d=de(Math.floor(l/s),0,n-1),u=de((l-d*s)/s,0,1);a.writingStep=d,Ra(d,u),bo(),l<n*s?ee.demoAnimationId=requestAnimationFrame(o):(a.writingStep=n-1,Ra(a.writingStep,1),bo())};ee.demoAnimationId=requestAnimationFrame(o)}function xf(){const e=document.getElementById("strokeCanvas"),t=ss();if(!e||!t)return;cancelAnimationFrame(ee.demoAnimationId);const n=performance.now(),s=520,r=de(a.writingStep,0,Math.max(0,Vt(t)-1)),o=c=>{const l=de((c-n)/s,0,1);Ra(r,l),l<1&&(ee.demoAnimationId=requestAnimationFrame(o))};ee.demoAnimationId=requestAnimationFrame(o)}function Lf(e){Af(a.writingStep+e,!1)}function Af(e,t){const n=ss();n&&(a.writingStep=de(e,0,Math.max(0,Vt(n)-1)),bo(),t?xf():Ra(a.writingStep,1))}function bo(){const e=ss();if(!e)return;const t=Ea(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${a.writingStep+1}/${Vt(e)}`);const r=document.querySelector(".writing-step-head .label");r&&(r.textContent=t[a.writingStep]||""),dl(".writing-guide-list li").forEach((o,c)=>o.classList.toggle("is-active",c===a.writingStep))}function Ra(e=a.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=ss();if(!n||!s)return;const r=n.getContext("2d");_f(r,n);const o=_a(s);if(!o){Tf(r,n,s,e);return}If(r,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function ZN(e,t,n){const s=_a(n);if(!s){Tf(e,t,n,a.writingStep);return}If(e,t,s,{activeIndex:a.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function _a(e){if(!e?.kanji)return null;const t=a.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function Wc(e){return!!_a(e)}function Vt(e){const t=_a(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function Pa(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function If(e,t,n,s={}){const r=de(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=ex(n,t,s.padding||22),c=Pa(),l=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=c.guide;n.strokeOrder.forEach((f,h)=>{const g=h<r,$=h===r;h>r&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=$?d:g?l:u,e.lineWidth=($?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*($?1:g?.86:.24),$&&s.progress<1&&(e.globalAlpha*=.45+de(s.progress,0,1)*.55),$&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(f.path)),e.restore(),s.showNumbers&&nx(e,f,o,h+1,$))})}function ex(e,t,n=22){const s=tx(e.viewBox),r=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*r)/2-s.x*r,c=(t.height-s.height*r)/2-s.y*r;return{...s,scale:r,x:o,y:c}}function tx(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,r=109,o=109]=t;return{x:n,y:s,width:Math.max(1,r),height:Math.max(1,o)}}function nx(e,t,n,s,r){const o=sx(t.path);if(!o)return;const c=n.x+o.x*n.scale,l=n.y+o.y*n.scale;rx(e,c,l,s,r)}function sx(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function rx(e,t,n,s,r){e.save(),e.fillStyle=r?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,r?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=r?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Tf(e,t,n,s=0){const r=Pa(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=r.templateOpacity,e.fillStyle=r.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const c=p()==="ru"?`Шаг ${s+1}/${Vt(n)} · точной схемы пока нет`:`Step ${s+1}/${Vt(n)} · exact paths not available yet`;e.fillText(c,18,16),e.restore()}function Rf(e,t,n={}){const s=t.map(ox).filter(Boolean);if(!e||!s.length)return;const r=Pa();if(e.save(),e.strokeStyle=n.color||r.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let c=1;c<s.length-1;c+=1){const l=lx(s[c],s[c+1]);e.quadraticCurveTo(s[c].x,s[c].y,l.x,l.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function _f(e,t){if(!e||!t)return;const n=Pa();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),ax(e,t)}function ax(e,t){const n=Pa();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Ea(e){const t=_a(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,r)=>p()==="ru"?s.description_ru||`Штрих ${r+1} по данным KanjiVG`:s.description_en||`Stroke ${r+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:Vt(e)},(s,r)=>n[r]||ix(e,r))}function ix(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Ma(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${ee.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function ox(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function lx(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function Pf(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function cx(){a.charts.forEach(e=>e.destroy()),a.charts=[]}function dx(e,t){const n=new Date;return a.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const r=a.lessons.find(c=>c.id===s.lessonId);if(r&&!We(r))return!1;const o=B(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(ko)}function ux(){const e=new Date;return Zc().filter(t=>{const n=B(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(ko)}function px(){const e=Date.now(),t=[];return _e.forEach(n=>{const s=wf(n);Object.entries(s?.exerciseSrs||{}).forEach(([r,o])=>{const c=Bs(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!c.dueAt||!vf(c))return;const l=Hc(n,r,c.lessonId||"");if(!l)return;const d=String(l?.lessonId||c.lessonId||"");if(!Ux(n,d))return;const u=new Date(c.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${r}`,level:String(n||"").toUpperCase(),exerciseId:r,lessonId:d,cardId:String(c.cardId||""),dueAt:u,progress:c})})}),t.sort(Fa)}function Xc(){if(Qe&&hi)return hi;const e=[];a.n5Reading.forEach(n=>{n?.id&&e.push(n)}),[["N4",a.n4Reading],["N3",a.n3Reading],["N2",a.n2Reading],["N1",a.n1Reading]].forEach(([n,s])=>{(Array.isArray(s)?s:[]).forEach(r=>{(r.questions||[]).forEach((o,c)=>{const l={id:String(o.id||`${r.id}:${c}`),prompt:o.prompt||{ru:"",en:""},answer:String(o.answer||""),options:ow(o.options)};e.push({id:String(o.id||`${r.id}:${c}`),level:String(r.level||n||"").toUpperCase(),kind:"question",sourceKind:String(r.kind||"reading"),sourceId:String(r.id||""),sourceTitle:r.title||{ru:r.id||"",en:r.id||""},title:r.title||{ru:r.id||"",en:r.id||""},jp:String(r.jp||""),reading:String(r.reading||""),translationRu:String(r.ru||""),translationEn:String(r.en||""),passageSource:String(r.source||""),questionIndex:c,question:l,questions:[l]})})})});const t=[...e,...x$()];return Qe&&(hi=t),t}function Ef(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase(),r=Xc();return r.find(o=>String(o.id||"")===n&&(!s||String(o.level||"").toUpperCase()===s))||r.find(o=>String(o.id||"")===n)||null}function Mf(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?w(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":qt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":qt(e).map(n=>n.kanji).join(""))}}function Qc(e){return 1}function rs(e){const t=Mf(e);return{...Nr(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:Qc(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function Ka(e,t){const n=rs(t),s=Bs({...n,...e||{}},Mf(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=Qc(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(r=>({kanji:String(r?.kanji||""),reading:String(r?.reading||"")})).filter(r=>r.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(r=>String(r)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function as(e){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const t=a.progress.readingExercises[String(e.id)]||null;if(t){const r=Ka(t,e);return a.progress.readingExercises[String(e.id)]=r,r}const n=rs(e);return a.progress.readingExercises[String(e.id)]=n,n}function zs(e,t){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const n=Ka(t||{},e);return a.progress.readingExercises[String(e.id)]=n,n}function Kf(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function Lr(e=""){var r;if(!a.progress)return!1;const t=D(e);(r=a.progress).readingExercises||(r.readingExercises={});const n=new Map(Xc().filter(o=>!t||D(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(a.progress.readingExercises).forEach(([o,c])=>{const l=n.get(String(o));if(!l)return;const d=Ka(c,l),u=Kf(d)?d:rs(l);JSON.stringify(c)!==JSON.stringify(u)&&(a.progress.readingExercises[String(o)]=u,s=!0)}),s}function gx(){const e=Date.now();return Xc().map(t=>{if(!Jx(t.level))return null;const n=a.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=Ka(n,t);if(a.progress.readingExercises[String(t.id)]=s,!Kf(s))return null;const r=s.dueAt?new Date(s.dueAt).getTime():0;return!r||r>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:r,progress:s,exercise:t,card:null}}).filter(Boolean).sort(Fa)}function mx(){const e=Date.now();return["hiragana","katakana"].flatMap(t=>{if(!we(t))return[];const n=Bt(t),s=Object.entries(n).map(([r,o])=>({cardId:r,...Ue(o)}));return _d(s,e).initial.map(r=>{const o=ro(r.cardId,t);if(!o?.id||o.slug!==t)return null;const c=xg(t,o.kana);return Fc({kind:"kana",key:o.id,courseSlug:t,cardId:o.id,kana:o.kana,romaji:c?.romaji||"",strokes:c?.strokes||0,character:c,progress:r,dueAt:r.dueAt?Date.parse(r.dueAt):0})}).filter(Boolean)}).sort(Fa)}function fx(){const t=[...ux().map(s=>{if(!s?.id)return null;const r=B(s.id);return{kind:"card",key:`card:${s.id}`,card:s,cardId:String(s.id),dueAt:r.dueAt?new Date(r.dueAt).getTime():0,progress:r}}).filter(Boolean),...mx()].sort(Fa),n=[...px(),...gx()].sort(Fa);return Na(Qw(t,n,Dl))}function Yc(){if(Qe&&pi)return pi;const e=fx();return Qe&&(pi=e,Ur=e.length),e}function Ff(e=Yc()){const t=Object.freeze(Na(e).map(n=>n.key).filter(Boolean));a.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString(),results:{remember:0,forgot:0,items:[]}}}function Df(e){if(a.route!=="review"||!a.reviewSession)return!1;const t=String(e||"").trim();if(!t)return!1;const n=Array.isArray(a.reviewSession.keys)?a.reviewSession.keys:[],s=n.filter(r=>r!==t);return s.length===n.length?!1:(a.reviewSession.keys=Object.freeze(s),!0)}function Of(){if(a.route!=="review")return!1;const e=Array.isArray(a.reviewSession?.keys)?a.reviewSession.keys:null;return e?e.length>0:!!(a.activeCardId||a.activeExerciseReviewId)}function Bf(){const e=Yc();if(a.route!=="review")return e;a.reviewSession||Ff(e);const t=new Map(e.map(r=>[r.key,r])),n=Array.isArray(a.reviewSession?.keys)?a.reviewSession.keys:[],s=n.map(r=>t.get(r)).filter(Boolean);return!n.length&&e.length?(Ff(e),e):Na(s)}function zf(e,t,n={}){if(a.route!=="review"||!a.reviewSession)return;const s=Be(t)?"forgot":"remember",r=a.reviewSession.results||{remember:0,forgot:0,items:[]};r.remember=Number(r.remember||0),r.forgot=Number(r.forgot||0),r[s]+=1,r.items=Array.isArray(r.items)?r.items:[],r.items.push({kind:e,rating:s,label:String(n.label||n.kana||n.kanji||n.cardId||""),course:String(n.course||n.level||""),dueAt:n.dueAt||null}),a.reviewSession.results=r}function hx(){if(Qe&&gi!==null)return gi;const e=Date.now(),t=Zc().filter(r=>{const o=B(r.id),c=o.dueAt?new Date(o.dueAt).getTime():0;return o.state==="Learning"&&c>e}).length,n=Uf().filter(r=>{const o=r.dueAt?new Date(r.dueAt).getTime():0;return r.state==="Learning"&&o>e}).length,s=t+n;return Qe&&(gi=s),s}function Uf(){return["hiragana","katakana"].flatMap(e=>we(e)?Object.values(Bt(e)).map(t=>Ue(t)):[])}function vx(){if(Qe&&mi!==null)return mi;const e=Zc().filter(t=>B(t.id).state!=="New").length+Uf().filter(t=>t.state!=="New").length;return Qe&&(mi=e),e}function bt(){if(Qe&&Ur!==null)return Ur;const e=a.route==="review"?Bf().length:Yc().length;return Qe&&(Ur=e),e}function Fa(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?B(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?B(t.card.id):t.progress,r=Bi(n),o=Bi(s);if(r!==o)return o-r;if(e.kind!==t.kind){const c=e.kind==="card"||e.kind==="kana",l=t.kind==="card"||t.kind==="kana";return c!==l?c?-1:1:String(e.kind||"").localeCompare(String(t.kind||""))}return e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function Zc(){if(Qe&&fi)return fi;const e=new Set,t=[];_e.forEach(s=>{ch(s).forEach(r=>{const o=String(r?.id||"");!o||e.has(o)||(e.add(o),t.push(r))})});const n=t.sort(ko);return Qe&&(fi=n),n}function ed(){const e=dA();return a.cards.filter(t=>{const n=a.lessons.find(r=>r.id===t.lessonId);if(n&&!We(n))return!1;const s=B(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(ko)}function ko(e,t){const n=B(e.id),s=B(t.id),r=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(r!==o)return r-o;if(r>0){const c=Bi(n),l=Bi(s);if(c!==l)return l-c}return Number(e.id)-Number(t.id)}function wx(){const e=a.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return a.cards.filter(t=>{const n=Da(t.id),s=[t.kanji,K(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,rd(t),t.jlpt,kd(t.lessonId),Ha(t),n.radical,w(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(r=>[r.word,r.reading,r.romaji,r.translation,cs(r)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(a.filters.jlpt==="all"||t.jlpt===a.filters.jlpt)&&(a.filters.radical==="all"||n.radical===a.filters.radical)&&(a.filters.favorites==="all"||!!a.progress.favorites[t.id])&&bx(t.strokes,a.filters.strokes)})}function bx(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function td(){const e=a.cards.length,t=a.cards.filter(s=>B(s.id).state!=="New").length,n=a.cards.filter(s=>B(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:ed().length,completion:E(n,e)}}function nd(){return Object.values(a.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function kx(){return(a.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Jf(){const e=a.progress.totalCorrect+a.progress.totalWrong;return e?Math.round(a.progress.totalCorrect/e*100):0}function Gf(){const e={New:0,Learning:0,Review:0,Mastered:0};return a.cards.forEach(t=>{e[B(t.id).state]+=1}),e}function qf(){const e={};return a.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),B(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function An(){const e=ce();return a.progress.daily[e]||(a.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),a.progress.daily[e]}function sd(e){return a.cards.filter(t=>t.lessonId===e)}function yx(){return a.cards.filter(e=>{const t=a.lessons.find(n=>n.id===e.lessonId);return(!t||We(t))&&B(e.id).state==="New"})}function oe(e){const t=String(e||"");return t&&a.cards.find(n=>String(n.id)===t||String(n.kanji||"")===t||of(n)===t)||null}function $x(e){return oe(e)}function jx(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function Da(e){return a.kanjiMeta[String(e)]||{}}function yo(e){const t=a.kanjiHints[String(e)]||{};return{hint:w(t.hint||{})||ze("leya","hint"),mnemonic:w(t.mnemonic||{})||""}}function Sx(e){e&&(a.progress.favorites[e]?delete a.progress.favorites[e]:a.progress.favorites[e]=new Date().toISOString(),T(),P())}function kt(e=null){a.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function Cx(e){const t=String(e||"");a.readingCheck.cardId!==t&&kt(t)}function Hf(){const e=oe(a.readingCheck.cardId||a.activeCardId);if(!e)return;Yr(e,"reading_check"),So();const t=xx(a.readingCheck.value),n=Nx(e),s=t.some(l=>n.normalized.has(l)),r=t.length>0,o=r&&s?"correct":"wrong",c=r?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";a.readingCheck={cardId:e.id,value:a.readingCheck.value,status:o,message:c},F(o==="correct"?"answer_correct":"answer_wrong"),Ve(),requestAnimationFrame(()=>{const l=document.getElementById(`readingCheck-${e.id}`);l&&(l.focus(),"setSelectionRange"in l&&l.setSelectionRange(l.value.length,l.value.length))})}function Nx(e){const t=Oa(e),n=[...is(t.onyomi.kana),...is(t.kunyomi.kana),...is(e.hiragana)].filter(Boolean),s=n.filter((r,o)=>n.indexOf(r)===o);return{normalized:new Set(s.map(Vf).filter(Boolean))}}function xx(e){return String(e||"").split(/[\/,、，\s]+/u).map(Vf).filter(Boolean)}function Vf(e){const t=Wf(String(e||"").normalize("NFKC")).replace(/[・･.\-]/gu,"").replace(/\s+/gu,"");return Lx(t).trim()}function Wf(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function Lx(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=Ax(t.slice(-1));continue}t+=n}return t}function Ax(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎじぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function Xf(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=a.n5KanjiCatalog:t==="N4"?n=a.n4KanjiCatalog:t==="N3"?n=a.n3KanjiCatalog:t==="N2"&&(n=a.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const Qf={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},Yf={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Oa(e){const t=Xf(e);if(t&&t.readings){const r=t.readings,o=$o(r.onyomi,r.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),c=$o(r.kunyomi,r.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||c.kana)return{onyomi:o,kunyomi:c}}const n=$o(e?.onyomi,e?.onyomi_romaji),s=$o(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function is(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/／,，、・･;；]+/u).map(n=>n.trim()).filter(Boolean)}function $o(e,t="",n=""){const s=is(e).length?is(e):is(n),r=is(t),o=s.map((c,l)=>({kana:Z(c),romaji:Ix(c,r[l])})).filter(c=>c.kana||c.romaji);return{kana:o.map(c=>c.kana).filter(Boolean).join(" / "),romaji:o.map(c=>c.romaji).filter(Boolean).join(" / ")}}function Ix(e,t){const n=Zf(e);return n?t&&eh(t)===eh(n)?t:n:t||""}function Zf(e){const t=[...Tx(e)];let n="",s=!1;for(let r=0;r<t.length;r+=1){const o=t[r],c=t[r+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=Rx(n);u&&(n+=u);continue}let l="";const d=o+c;if(Yf[d])l=Yf[d],r+=1;else if(Qf[o])l=Qf[o];else if(/[a-zA-Z0-9]/u.test(o))l=o.toLowerCase();else{s=!1;continue}if(s){const u=l.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=l}return n}function Tx(e){return Wf(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function Rx(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function eh(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/gu,"").replace(/[^a-z0-9]+/gu,"")}function th(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function jo(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function rd(e){const t=Oa(e);return[`${jo("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${jo("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" · ")}function ad(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return sh(t)||nh(e)}function nh(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=_x(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function sh(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function _x(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function Px(e){return!!(ad(e)||id(e))}function id(e){if(!e)return"";const t=Oa(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function Ex(e){const t=Oa(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Ar(e,t=""){const n=x1(Ex(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function Mx(e){return Ar(e).length>0}function Kx(e){return is(e)[0]||String(e||"").trim()}function od(){if(a.route!=="learn"&&a.route!=="review")return;const e=560-(Date.now()-Br);if(e>0){window.setTimeout(od,e);return}const t=oe(a.activeCardId);if(!t)return;const n=Ar(t).map(o=>`${o.kind}:${o.kana}`).join("|")||id(t),s=sh(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const r=`${a.route}:${t.id}:${n||s}`;r!==Qd&&(Qd=r,rh(t,{silent:!0}))}function So(){ci+=1,Pt="idle",Co(),cd()}function ld(){return ci+=1,ci}function rt(e){return e===ci}function cd(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Co(){tn&&(tn.pause(),tn.currentTime=0,tn=null)}function rh(e,t={}){const n=ld();let s=null;const r=()=>rt(n)?(s||(s=ah(e,{...t,requestId:n})),s):Promise.resolve(!1);return ih(e,{kind:"cycle",silent:t.silent,fallback:r,requestId:n})?Promise.resolve(!0):r()}function ah(e,t={}){const n=t.requestId||ld();if(!rt(n))return Promise.resolve(!1);const s=ad(e);if(!s||(cd(),Co(),!rt(n)))return Promise.resolve(!1);Pt="audio";const r=new Audio(s);return tn=r,r.preload="auto",r.onended=()=>{tn===r&&(tn=null,rt(n)&&(Pt="idle"))},r.onerror=()=>{rt(n)&&(t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:s}))},r.play().then(()=>rt(n)&&tn===r).catch(o=>(rt(n)&&(tn===r&&(tn=null,Pt="idle"),t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:s,error:o})),!1))}function ih(e,t={}){const n=t.requestId||ld();Co(),Pt="tts-pending";let s=null;const r=typeof t.fallback=="function"?()=>rt(n)?(s||(s=t.fallback({...t,requestId:n})),s):Promise.resolve(!1):null,o=Z(t.text||""),c=t.kind||"cycle",l=`${e?.id||e?.kanji||"kanji"}:${c}`,d=Ar(e);let u=null;if(!o){const L=L1(d,Yd.get(l)??-1,c);u=L.item,Yd.set(l,L.cursor)}const f=o||u?.kana||Kx(id(e));let h=!1;if(!Kh(f,{onStart:()=>{if(!rt(n)||Pt==="audio"){cd();return}h=!0,Pt="tts",Co()},onEnd:()=>{rt(n)&&Pt==="tts"&&(Pt="idle")},onError:L=>{!rt(n)||h||Pt==="audio"||(t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:L}),r?.())}}))return rt(n)&&r?.(),!r&&rt(n)&&(Pt="idle"),!r&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:nh(e)}),!1;if(!rt(n))return!1;const $=t.label||(u?Uc(u):"TTS");return t.silent||J(`${e?.kanji||""} ${$}: ${f}`.trim()),!0}function Fx(e,t){J(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function We(e){return!!e}function No(e){return a.rewards?.lessonUnlocks?.[e?.id]||1}function oh(e){if(!e||!We(e))return"locked";const t=sd(e.id);return t.length?!!a.progress.lessonCompletions?.[e.id]||t.every(r=>{const o=B(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(r=>{const o=B(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function dd(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function ud(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function Dx(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${m(ud(e))}"></span>`}function Ox(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${dd(e)}">${i(ud(e))}</span>`}function In(e){const t=String(e||"").toUpperCase();return a.jlptLessons.find(n=>n.jlpt===t)||null}function It(e){const t=String(e||"").toUpperCase();return a.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function Ba(e){const t=String(e||"").toLowerCase();return a.kanaCatalog?.courses?.find(n=>n.slug===t)||null}function Us(e){const t=String(e||"").toLowerCase();return a.kanaCourses?.[t]||null}function os(){return a.progress.kanaCourses=Pd(a.progress.kanaCourses||null),a.progress.kanaCourses}function yt(e){return R1(os(),e)}function xo(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim();if(!we(n)||!s)return;const r=yt(n),o=new Date().toISOString();let c=!1;r.currentRoute!==s&&(r.currentRoute=s,c=!0),r.updatedAt||(r.updatedAt=o,c=!0),c&&T()}function Bx(e){const t=String(e||"").toLowerCase(),n=Ba(t);if(!n||!we(t))return Promise.resolve(null);if(a.kanaCourses[t])return Promise.resolve(a.kanaCourses[t]);if(a.kanaCourseLoading[t])return a.kanaCourseLoading[t];a.kanaCourseErrors[t]=null;const s=Je(n.course_file).then(r=>(a.kanaCourses[t]=r,a.kanaCourseLoading[t]=null,r)).catch(r=>{throw a.kanaCourseLoading[t]=null,a.kanaCourseErrors[t]=r,r});return a.kanaCourseLoading[t]=s,s}function Wt(e){const t=String(e||"").toUpperCase();return t==="N5"?se():t==="N4"?X():t==="N3"?V():t==="N2"?W():t==="N1"?te():null}function zx(e,t,n="open"){const s=D(e),r=String(t||"");if(!s||!r)return!1;const o=Wt(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[r])?!1:(o.viewedLessons[r]=new Date().toISOString(),!0)}function Ux(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!1;const r=Wt(n);return r?!!(r.viewedLessons?.[s]||r.completedLessons?.[s]):!1}function za(e,t="open"){var s;const n=D(e);return!n||((s=a.progress).viewedReadingLevels||(s.viewedReadingLevels={}),a.progress.viewedReadingLevels[n])?!1:(a.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function Jx(e){const t=D(e);return t?!!a.progress.viewedReadingLevels?.[t]:!1}function pd(e){const t=It(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function Gx(e){const t=String(e||"").toUpperCase(),n=Wt(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const s=It(t),r=$t(t),o=Math.max(Number(s?.lessonCount||0),r.length||0),c=_s(t);return o>0&&c>=o}function Tt(e){const t=String(e||"").toUpperCase();if(_e.includes(t)||a.progress.unlockedJlptLevels&&a.progress.unlockedJlptLevels.includes(t))return!0;if(!It(t))return t==="N5";const s=pd(t);return s.length?s.every(r=>Gx(r)):!0}function lh(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function Tn(e){const t=pd(e);return t.length?p()==="ru"?`Откроется после завершения ${lh(t)}.`:`Unlocks after completing ${lh(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function $t(e){const t=D(e);if(!t)return[];if(t==="N5"&&a.n5Textbook?.items?.length)return a.n5Textbook.items;if(t==="N4"&&a.n4Textbook?.items?.length)return a.n4Textbook.items;if(t==="N3"&&a.n3Textbook?.items?.length)return a.n3Textbook.items;if(t==="N2"&&a.n2Textbook?.items?.length)return a.n2Textbook.items;if(t==="N1"&&a.n1Textbook?.items?.length)return a.n1Textbook.items;const n=It(t),s=a.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),r=n?(n.lessonIds||[]).map(d=>a.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(r.map(d=>d.id)),c=s.filter(d=>!o.has(d.id)),l=Math.max(n?n.lessonCount||r.length:s.length,r.length);return[...r,...c].slice(0,l||s.length)}function gd(e){const t=D(e);if(!t)return"";const n=$t(t);if(!n.length)return"";const s=aL(t);if(s?.lessonId&&Io(t,s.lessonId))return s.lessonId;const r=Wt(t)?.currentLessonId||"";if(r&&Io(t,r))return r;const o=t==="N5"?se().completedLessons||{}:t==="N4"?X().completedLessons||{}:t==="N3"?V().completedLessons||{}:t==="N2"?W().completedLessons||{}:a.progress.lessonCompletions||{},c=n.filter(l=>o[l.id]);return c.length?(c.sort((l,d)=>{const u=Date.parse(o[d.id]||"")||0,f=Date.parse(o[l.id]||"")||0;return u!==f?u-f:(d.order||0)-(l.order||0)}),c[0]?.id||n[0]?.id||""):n[0]?.id||""}function qx(e,t=""){const n=D(e);if(!n||!In(n))return;if(!Tt(n)){a.activeTextbookLevel=n,a.activeJlptLesson=n,ea("textbooks",null,n),J(Tn(n));return}const s=a.route,r=String(t||"")||gd(n),o=["N5","N4","N3","N2"].includes(n),c=r?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(r)}`:`#textbooks/${encodeURIComponent(n)}`;a.route="textbooks",a.activeTextbookLevel=n,a.activeJlptLesson=n,a.activeTextbookSubroute=r||null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=!o&&r?`#textbook-lesson-${r}`:null,s!=="eva-room"&&(a.evaRoomShopOpen=!1),r&&Rt(n,r,"open_jlpt"),kt(),jt(c),Ls(),P()}function Hx(e){return e?In(e.jlpt):null}function Ir(e){const t=String(e||"").toUpperCase();return a.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Js(){return a.progress.jlptLessonPractice=lp(nr().jlptLessonPractice,a.progress.jlptLessonPractice||{}),a.progress.jlptLessonPractice}function Tr(e){if(!e?.drills?.length)return null;const t=Js(),n=t.activeIds[e.jlpt],s=e.drills.find(r=>r.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function Vx(e){const t=Ir(a.activeJlptLesson),n=Tr(t);if(!n||!n.tiles[e])return;const s=Js(),r=s.selected[n.id]||[],o=n.blanks.flatMap(c=>c.answer||[]).length;r.includes(e)||r.length>=o||(s.selected[n.id]=[...r,e],s.checked[n.id]=!1,s.results[n.id]=null,T(),P())}function Wx(){const e=Tr(Ir(a.activeJlptLesson));if(!e)return;const t=Js();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,T(),P()}function Xx(){const e=Tr(Ir(a.activeJlptLesson));if(!e)return;const t=Js();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,T(),P()}function Qx(){const e=Tr(Ir(a.activeJlptLesson));if(!e)return;const t={...fd(),...md()},n=Js(),s=n.selected[e.id]||[],r=e.blanks.flatMap(l=>l.answer||[]),o=r.reduce((l,d,u)=>{const f=e.tiles[s[u]];return(!f||f.kanji!==d)&&l.push(u),l},[]),c=s.length===r.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:c,wrongIndexes:o,message:c?t.correct:t.wrong},c&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),H(8,1,`jlpt_practice:${e.id}`),F("answer_correct")):c||F("answer_wrong"),T(),P()}function Yx(){var o,c,l,d,u,f;const e=Ir(a.activeJlptLesson),t=Tr(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],r=Js();r.activeIds[e.jlpt]=s.id,(o=r.selected)[c=s.id]||(o[c]=[]),(l=r.checked)[d=s.id]||(l[d]=!1),(u=r.results)[f=s.id]||(u[f]=null),T(),P()}function ch(e){const t=String(e||"").toUpperCase();return t?a.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function md(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function fd(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function Lo(e){const t=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=Ua(n,t)&&n<100;)s-=Ua(n,t),n+=1;return n}function Rn(){const e=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=a.progress.xp;for(;n>=Ua(t,e)&&t<100;)n-=Ua(t,e),t+=1;const s=Ua(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:E(n,s)}}function Ua(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function Zx(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:a.progress,customization:a.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${ce()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),fe("progress_export",{route:a.route,source:"manual"}),J(_("export"))}function fe(e,t={},n={}){return q1(e,t,n)}function mn(e="learn",t={}){fe("learning_start",{route:a.route,source:e,...t},{dedupeKey:"learning_start"})}function Rr(e,t,n="textbook"){const s=D(e),r=String(t||"");fe("lesson_complete",{route:a.route,level:s,lessonId:r,source:n},{dedupeKey:`${s||"legacy"}:${r}`})}function Ao(e="review"){if(a.route!=="review"||Of())return;const t=a.reviewSession?.startedAt||"current";fe("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function Ja(e,t,n="final-test"){const s=D(e);fe("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&fe("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function eL(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&a.rewardModal||null}}function D(e){const t=String(e||"").toUpperCase();return _e.includes(t)?t:""}function at(e){if(!e||typeof e!="object")return null;const t=D(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function tL(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=D(n),o=at({...typeof s=="object"&&s?s:{},level:r||n});r&&o&&(t[r]=o)}),t}function Gs(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=String(n||"").trim();if(r){if(typeof s=="string"&&s.trim()){t[r]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[r]=o;return}s&&(t[r]=new Date().toISOString())}}),t}function Io(e,t){const n=D(e),s=String(t||"");return!n||!s?!1:$t(n).some(r=>r.id===s)}function nL(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!!n;const r=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return r.has(s)||n!=="N5"&&o.has(s)?!0:$t(n).some(c=>c.id===s)}function sL(e,t){const n=D(e),s=String(t||"");if(!n||!s)return!1;const r=Ni(n);return r==="ready"||r==="error"||r==="incomplete"?!1:/^[A-Za-z0-9_-]+$/.test(s)}function rL(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim().toLowerCase();if(!we(n))return!1;if(!s)return!0;const r=Us(n);if(r)return["review","final","final-test","reference","sources"].includes(s)||r.lessons?.some(l=>l.id===s)||r.reading_practice?.some(l=>l.id===s);const o=Ba(n),c=Number(o?.lesson_count||(n==="hiragana"?10:11));if(/^lesson-\d+$/i.test(s)){const l=Number(s.replace(/\D+/g,""));return l>=1&&l<=c}return/^practice-[1-5]$/i.test(s)?!0:["review","final","final-test","reference","sources"].includes(s)}function dh(e){return $t(e)[0]?.id||""}function aL(e=""){const t=D(e);if(t){const r=at(a.progress.lastOpenedJlptLessons?.[t]||null)||(at(a.progress.lastOpenedJlptLesson||null)?.level===t?at(a.progress.lastOpenedJlptLesson||null):null);return r&&Io(t,r.lessonId)?r:null}const n=[at(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(r=>at(r)).filter(Boolean)].filter(Boolean);return n.sort((r,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(r.updatedAt||"")||0)),n.find(r=>Io(r.level,r.lessonId))||null}function iL(e=""){const t=D(e);if(t)return at(a.progress.lastOpenedJlptLessons?.[t]||null)||(at(a.progress.lastOpenedJlptLesson||null)?.level===t?at(a.progress.lastOpenedJlptLesson||null):null);const n=[at(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(s=>at(s)).filter(Boolean)].filter(Boolean);return n.sort((s,r)=>(Date.parse(r.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function oL(e){const t=D(e);if(!t)return"";const n=_e.indexOf(t);return n>=0&&n<_e.length-1?_e[n+1]:""}function Rt(e,t,n="open"){var h;const s=D(e),r=String(t||"");if(!s||!r)return null;const o={level:s,lessonId:r,updatedAt:new Date().toISOString(),source:n},c=at(a.progress.lastOpenedJlptLessons?.[s]||null),l=at(a.progress.lastOpenedJlptLesson||null);(h=a.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),a.progress.lastOpenedJlptLessons[s]=o,a.progress.lastOpenedJlptLesson=o;const d=zx(s,r,n),u=Wt(s);return u&&u.currentLessonId!==r&&(u.currentLessonId=r),(!c||c.lessonId!==r||c.level!==s||l?.lessonId!==r||l?.level!==s||d)&&T(),o}function Xt(e,t="btn ghost"){const n=D(e),s=oL(n);if(!n||!s)return"";const r=dh(s);if(!r)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${m(t)}" type="button" data-action="final-test-next-level" data-level="${m(n)}" data-next-level="${m(s)}" data-next-lesson="${m(r)}">${i(o)}</button>`}function fn(){return D(a.activeJlptLesson)||D(a.activeTextbookLevel)||D(a.jlptLessons.find(e=>Tt(e.jlpt))?.jlpt)||D(a.jlptLessons[0]?.jlpt)||"N5"}function lL(e,t={}){const n=String(e||a.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(D(t.level||a.activeTextbookLevel||fn())||fn())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(D(t.level||a.activeJlptLesson||fn())||fn())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?a.route||"home":n||"home"}function cL(e=a.route,t={}){const n=new URL(location.href);return n.search="",n.hash=lL(e,t),n.href}function dL(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=D(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=p()==="ru",o={textbooks:r?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:r?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:r?"Урок Flash Kanji":"Flash Kanji lesson",srs:r?"Повторение Flash Kanji":"Flash Kanji review",stats:r?"Статистика Flash Kanji":"Flash Kanji stats",achievements:r?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},c=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${c} ${s}`:c}function uL(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=D(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=s?It(s):null,o=t.lesson||(s?In(s):null),c=p()==="ru";if(n==="textbooks")return c?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const l=w(r?.displayTitle||r?.title||{}),d=Number(r?.lessonCount||0),u=Number(r?.kanjiCount||0);return c?`${l||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${l||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const l=w(o?.title||{}),d=w(o?.summary||{});return c?`${s?`${s} · `:""}${l||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${l||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?c?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?c?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?c?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?vL(t.reward||a.rewardModal||{}):"Flash Kanji."}function pL(){return p()==="ru"?"Поделиться":"Share"}function ls(e=a.route,t={}){const n=D(t.level||""),s=String(t.lessonId||t.lesson?.id||""),r=t.label||pL();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${m(e)}" ${n?`data-share-level="${m(n)}"`:""} ${s?`data-share-lesson-id="${m(s)}"`:""} ${t.toastKey?`data-share-toast-key="${m(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${gL()}</span>
        <span>${i(r)}</span>
      </button>
    `}function gL(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function uh(e){return e==="youtube"?`
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
    `}async function mL(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await yL(e.text,e.url,n)?"copy":"failed"}async function fL(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=t.reward||a.rewardModal||null,r={section:n,title:dL(n,t),text:uL(n,t),url:cL(n,t),files:[]};if(n==="achievement"||s){const o=await wL(s||{});o&&typeof File<"u"&&(r.files=[new File([o],`flash-kanji-achievement-${a.progress.level}.png`,{type:"image/png"})])}return r}async function ph(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||a.activeJlptLesson||a.activeTextbookLevel||""),fe("share_opened",{route:n,level:D(s.level)||"",source:"share"});const r=await fL(n,s),o=await mL(r,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(fe("share_completed",{route:n,source:r.files?.length?"file":"web-share"}),!0):o==="copy"?(fe("share_link_copied",{route:n,source:"copy"}),fe("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||J(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function hL(){await ph("achievement",{reward:a.rewardModal||{},toastKey:"shareCopied"})}function vL(e={}){const t=_("shareFallback"),n=e.level||a.progress.level,s=Rn(),r=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||a.progress.xp,o=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments;return`${t}: ${_("level")} ${n}, ${r} XP, ${o} Moon Fragments.`}async function wL(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const r=s.getContext("2d");if(!r)return null;bL(r,1200,630);const o=e.level||a.progress.level,c=Rn(),l=e.type==="level"?`${c.current}/${c.next}`:e.totalXp||a.progress.xp,d=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments,u=e.mascot||(a.progress.level%2===0?"leya":"eva"),f=vo(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,g]=await Promise.all([gh("assets/logo.webp"),f?gh(f):Promise.resolve(null)]);return h&&mh(r,h,58,48,330,116),g&&mh(r,g,780,95,330,450),r.fillStyle="#f7f4ee",r.font="900 58px system-ui, sans-serif",r.fillText(_("levelUp"),64,230),r.font="900 110px 'Yu Mincho', serif",r.fillStyle="#ffe15a",r.fillText(`${_("level")} ${o}`,64,340),r.font="800 38px system-ui, sans-serif",r.fillStyle="#f7f4ee",r.fillText(`${l} XP`,70,425),r.fillText(`${d} Moon Fragments`,70,482),r.fillStyle="rgba(255,255,255,0.74)",r.font="700 28px system-ui, sans-serif",r.fillText("Flash Kanji | JLPT Japanese learning",70,558),r.strokeStyle="rgba(255, 225, 90, 0.7)",r.lineWidth=3,r.strokeRect(34,30,1132,570),kL(s)}function bL(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let r=-t;r<t*2;r+=38)e.beginPath(),e.moveTo(r,0),e.lineTo(r+t,n),e.stroke()}function gh(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function mh(e,t,n,s,r,o){const c=Math.min(r/t.naturalWidth,o/t.naturalHeight),l=t.naturalWidth*c,d=t.naturalHeight*c;e.drawImage(t,n+(r-l)/2,s+(o-d)/2,l,d)}function kL(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function yL(e,t,n="shareLinkCopied"){const s=await fh(`${e}
${t}`);return J(s?_(n):e),s}async function fh(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function $L(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());a.progress=Xu(nr(),n.progress||n),Xr(),n.customization&&(a.customization={...En(),...n.customization,selected:{...En().selected,...n.customization.selected||{}}},tr()),$s(),_r(),T(),hn(),J(_("import")),P()}catch(n){console.error(n),J("Invalid JSON")}finally{e.target.value=""}}function jL(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=a.progress.settings;a.progress=nr(),a.progress.settings=e,a.finalTestModal=null,a.finalTestBusy=!1,Xr(),_r(),T(),P()}function SL(){a.progress.settings.theme=a.progress.settings.theme==="dark"?"light":"dark",a.progress.settings.themeManuallySelected=!0,hn(),T(),P()}function CL(){a.progress.settings.language=p()==="ru"?"en":"ru",a.progress.settings.languageAutoDetected=!1,a.progress.settings.languageManuallySelected=!0,T(),P()}function hh(){a.progress.settings.sound=!Fn(a.progress.settings.sound,!0),a.progress.settings.uxSound=a.progress.settings.sound,_r(),hd(),T(),J(a.progress.settings.sound?"♪":"×")}function NL(){hh()}function Ga(){return window.FlashKanjiSound||null}function xL(){try{Ga()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function _r(){const e=Ga();!e||!a.progress?.settings||(e.setSoundEnabled?.(Fn(a.progress?.settings?.sound,!0)),e.setSoundVolume?.(Ro()))}function To(){return Fn(a.progress?.settings?.sound,!0)}function hd(){const e=Me('[data-action="sound"]');if(!e)return;const t=Fn(a.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=LL(t)}function LL(e){return e?`
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
      `}function AL(e){return e?`
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
      `}function IL(){const e=Me('[data-action="notification-center"]');if(!e)return;const t=a.notificationPrompt||Qa(),n=!!(t.docked||a.notificationPromptVisible||Eo("header")),s=!!a.notificationPromptVisible,r=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",r),e.title=r,e.innerHTML=AL(s)}function vd(){const e=Me('[data-action="toggle-header-socials"]');if(!e)return;const t=wd(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function vh(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),vd())}function wd(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Ro(){const e=Number(a.progress?.settings?.uxVolume);return Number.isFinite(e)?de(e,0,1):.75}function TL(e){const t=de(Number(e),0,1);a.progress.settings.uxVolume=t,_r(),T()}function F(e){if(!To())return!1;const t=()=>{try{if(!!Ga()?.playSound?.(e)){Br=Date.now();return}$d(String(e))}catch(n){console.warn("UX sound failed.",n),$d(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function hn(){document.documentElement.dataset.theme=a.progress.settings.theme,document.documentElement.dataset.customTheme=a.customization?.selected?.theme||"theme_default_dark";const e=cn();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",bd(e?.file||"assets/bg/bg_study_hub.webp"));const t=ry();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a.progress.settings.theme==="light"?"#f8f7f2":"#08080c"),_L()}function RL(){return["localhost","127.0.0.1","::1",""].includes(window.location.hostname)}function _L(){RL()&&(window.FLASH_KANJI_EVA_ROOM_DEBUG={getBackground:()=>{const e=cn();return{selectedCustomization:a.customization?.selected?.background||null,selectedProgress:a.progress?.selectedEvaRoomBackground||null,equippedProgress:a.progress?.shop?.equipped?.background||null,currentId:e?.id||null,currentFile:e?.file||null,appRoomCss:document.documentElement.style.getPropertyValue("--app-room-bg"),sceneCss:document.querySelector(".eva-vn-scene")?.style.getPropertyValue("--eva-bg")||"",customRoomDataset:document.documentElement.dataset.customRoom||"",backgrounds:Hi().map(t=>({id:t.id,file:t.file,defaultUnlocked:!!t.defaultUnlocked}))}}})}function bd(e){const t=String(e||"assets/bg/bg_study_hub.webp").replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function _(e){return a.i18n?.ui?.[e]?.[p()]||a.i18n?.ui?.[e]?.ru||e}function p(){return a.progress?.settings?.language||"ru"}function w(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function PL(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function qa(e){return p()==="en"&&a.lessonTranslations[e.id]?.title_en||e.title}function EL(e){return p()==="en"&&a.lessonTranslations[e.id]?.summary_en||e.summary}function kd(e){const t=a.lessons.find(n=>n.id===e);return t?qa(t):""}function K(e){return Xe(e,p())}function Xe(e,t=p()){if(!e)return"";const n=Xf(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||a.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Ha(e){return p()==="en"?a.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function cs(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=a.vocabulary.find(n=>n.word===e.word||yd(n.romaji)===yd(e.romaji));return t?.translation_en?t.translation_en:cv[yd(e.romaji)]||e.translation||""}function Va(e){const t=cs(e);return p()==="ru"?`Какое слово подходит к значению «${t}»?`:`Which word matches "${t}"?`}function Q(e){return e?p()==="en"?String(e.answerEn||e.answer_en||e.answer||""):String(e.answer||e.answerRu||""):""}function Ge(e){if(!e)return[];const t=p()==="en"&&Array.isArray(e.optionsEn)&&e.optionsEn.length?e.optionsEn:e.options;return Array.isArray(t)?t.map(String).filter(Boolean):[]}function yd(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Pr(e){return a.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function ze(e,t){const n=e==="eva"?ML(t):"";if(n)return n;const s=Pr(e).dialogs?.[t]||Pr(e).dialogs?.welcome||{},r=s[p()]||s.ru||[""];return it(r)}function ML(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=KL(t),s=[...a.evaAutonomyLines||[],...Xi()].filter(c=>{const l=w(c?.text||{});if(!l)return!1;const d=Array.isArray(c.tags)?c.tags:[];if(!(n.includes(c.category)||d.some(h=>n.includes(h))))return!1;const f=wh(l);return f.length>=12&&f.length<=132}),r=s.filter(c=>!il.includes(c.id)),o=it(r.length?r:s);return o?(o.id&&(il=[o.id,...il.filter(c=>c!==o.id)].slice(0,18)),wh(w(o.text||{}))):""}function KL(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function wh(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t];let s="";for(const r of n){const o=`${s} ${r.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Er(e){const t=bh(e);return`<span class="pill ${t}">${i(lv[t]||"New")}</span>`}function bh(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function kh(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function FL(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function DL(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function _o(){try{return li||(li=new(window.AudioContext||window.webkitAudioContext)),li.state==="suspended"&&li.resume().catch(()=>null),li}catch(e){return console.warn("Audio context unavailable.",e),null}}function OL(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function $d(e){const t=_o();if(!t)return!1;try{const n=OL(e),s=t.currentTime+.01;return n.frequencies.forEach((r,o)=>{const c=t.createOscillator(),l=t.createGain();c.type=n.type,c.frequency.value=r;const d=s+n.interval*o;l.gain.setValueAtTime(1e-4,d),l.gain.exponentialRampToValueAtTime(n.peak,d+.02),l.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),c.connect(l).connect(t.destination),c.start(d),c.stop(d+n.duration+.02)}),Br=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=$d;function BL(){const e=()=>{const t=_o();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function Wa(e){if(a.progress.settings.sound){if(Ga()){F(e==="again"?"answer_wrong":"answer_correct");return}try{const t=_o();if(!t)return;Br=Date.now();const n=t.createOscillator(),s=t.createGain(),r=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.13,r+.015),s.gain.exponentialRampToValueAtTime(1e-4,r+.18),n.connect(s).connect(t.destination),n.start(r),n.stop(r+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function zL(){if(a.progress.settings.sound)try{const e=_o();if(!e)return;Br=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.value=n;const c=t+s*.08;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(.12,c+.02),o.gain.exponentialRampToValueAtTime(1e-4,c+.24),r.connect(o).connect(e.destination),r.start(c),r.stop(c+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function UL(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function J(e){const t=Me("#toast");t.textContent=e,t.hidden=!1,clearTimeout(Zd),Zd=window.setTimeout(()=>{t.hidden=!0},2400)}function yh(){return`
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
      </section>`}function JL(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function GL(){try{[Re,_t,oi,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function qL(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function HL(e){try{const t=Number(sessionStorage.getItem(Zt)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Zt,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&GL(),await qL();try{localStorage.removeItem(Re),localStorage.removeItem(_t),localStorage.removeItem(oi),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(r){console.warn("Boot recovery marker cleanup failed.",r)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function VL(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(_t,`${I}:done`)}catch(r){console.warn("Cannot save PWA cache reset marker.",r)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),r=await navigator.serviceWorker.register(s.href);if(!r||typeof r.update!="function")return;WL(r),await r.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function WL(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Po(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(b)||localStorage.getItem(v);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(b)||localStorage.setItem(b,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function jd(){try{localStorage.setItem(b,JSON.stringify(a.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function XL(e){e.preventDefault(),ws=e,a.progress&&a.i18n&&YL()}async function QL(){if(fe("pwa_install_click",{route:a.route,source:ws?"browser":Mr()?"ios":"help"}),Xa()){Cd();return}if(!ws){a.pwaInstallHelpVisible=!0,Ve();return}const e=ws;ws=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Cd();return}Nd()}catch(t){console.warn("PWA install prompt failed.",t),Nd()}}function Xa(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function Sd(){const e=a.pwaInstallPrompt||Po();if(Xa()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=a.progress?.visits?.firstVisitDate;return!t||us(t,ce())<1?!1:!!ws||Mr()}function YL(){Sd()&&(F("notification_soft"),P())}function Cd(){a.pwaInstallPrompt={...Po(),...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},a.pwaInstallHelpVisible=!1,jd(),fe("pwa_installed",{route:a.route,source:Mr()?"ios":"browser"},{dedupeKey:"appinstalled"}),Ch(),a.progress&&a.i18n&&P()}function Nd(){const e=a.pwaInstallPrompt||Po(),t=Math.min(Number(e.declineCount||0)+1,5);a.pwaInstallPrompt={...e,declineCount:t,nextShowAt:ZL(t),neverShow:t>=5,installed:!1},jd(),P()}function ZL(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function eA(){!Xa()||a.pwaInstallPrompt.installed||(a.pwaInstallPrompt={...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},jd())}function Mr(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function $h(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function Qa(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(j);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function ds(){try{localStorage.setItem(j,JSON.stringify(a.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function Ya(){clearTimeout(Yo),Yo=0}function tA(){Ya(),a.notificationPromptVisible&&(Yo=window.setTimeout(()=>{a.notificationPromptVisible&&jh()},5e3))}function jh(){Ya(),!(!a.notificationPromptVisible&&a.notificationPrompt?.docked)&&(a.notificationPromptVisible=!1,a.notificationPrompt={...a.notificationPrompt,docked:!0},ds(),P())}function Sh(){return Xa()||!!a.pwaInstallPrompt?.installed}function Eo(e="usage"){const t=a.notificationPrompt||Qa();return!(!("Notification"in window)||t.neverShow||t.enabled||!Sh()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-cl<2*60*1e3)}function Mo(e="usage"){return Eo(e)?(a.notificationPromptVisible=!0,a.notificationPrompt={...a.notificationPrompt,docked:!1},ds(),F("notification_soft"),tA(),P(),!0):("Notification"in window&&Notification.permission==="granted"&&Nh(),!1)}function Ch(){if(clearTimeout(nu),!Sh())return;const e=Math.max(0,2*60*1e3-(Date.now()-cl));nu=window.setTimeout(()=>Mo("usage"),e)}async function nA(){if(a.notificationPromptVisible=!1,Ya(),!("Notification"in window)){Ko();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(a.notificationPrompt.permission=e,a.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Nh(),J(Lh().enabled),Ve();return}Ko()}catch(e){console.warn("Notification permission failed.",e),Ko()}}function Nh(){!("Notification"in window)||Notification.permission!=="granted"||(Ya(),a.notificationPrompt={...Qa(),...a.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:a.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},ds(),xd())}function Ko(){const e=a.notificationPrompt||Qa(),t=Math.min(Number(e.declineCount||0)+1,5);a.notificationPromptVisible=!1,Ya(),a.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:sA(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},ds(),Ve()}function sA(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function xd(){!("Notification"in window)||Notification.permission!=="granted"||(a.notificationPrompt.permission="granted",a.notificationPrompt.enabled=!0,ds(),ol.forEach(e=>clearTimeout(e)),ol.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>xh(e.type,rA(e.hour,e.minute))),lA())}function xh(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await aA(e),xh(e,cA(t,1))},n);ol.set(e,s)}function rA(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function aA(e){if(!iA(e))return!1;const t=oA(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),F(e==="daily_bonus"?"notification_reward":"notification_reminder"),a.notificationPrompt.lastShown[e]=ce(),ds(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function iA(e){if(!("Notification"in window)||Notification.permission!=="granted"||a.notificationPrompt.lastShown?.[e]===ce())return!1;if(e==="review")return bt()>0;if(e==="daily_bonus"){const t=Fi(a.progress.dailyBonusPending);return!!a.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=ce()&&!a.progress.dailyBonuses[ce()]}return e==="lesson"?yx().length>0:e==="streak"?(a.progress.streak.current||a.progress.visits?.streak||0)>0:!0}function oA(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function lA(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),a.notificationPrompt.periodicSync=!0,ds()}catch{a.notificationPrompt.periodicSync=!1,ds()}}function Lh(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function ie(e){return{...e,history:[...e.history||[]]}}function cA(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function dA(){const e=new Date;return e.setHours(23,59,59,999),e}function ce(){return Ld(new Date)}function Ld(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Ad(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function us(e,t){return Math.round((Ad(t)-Ad(e))/864e5)}function Ah(e,t){const n=Ad(e);return n.setDate(n.getDate()+t),Ld(n)}function uA(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Ld(s)})}function Qt(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const r=Math.ceil(s/24);return p()==="ru"?`через ${r} дн.`:`in ${r} d`}function E(e,t){return t?de(Math.round(e/t*100),0,100):0}function de(e,t,n){return Math.max(t,Math.min(n,e))}function Fo(e,t){const n=10**t;return Math.round(e*n)/n}function it(e){return e[Math.floor(Math.random()*e.length)]}function ps(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function Za(e,t){return String(e)===String(t)?"selected":""}function pA(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Eh(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Ih(e="",t=""){const n=String(e||"").trim(),s=we(n)?n.toLowerCase():n.toUpperCase(),r=String(t||"").trim(),o=s?`#textbooks/${encodeURIComponent(s)}`:"#textbooks/";return r?`${o}/${encodeURIComponent(r)}`:o}function jt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${pA()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function qs(){const e=Wh(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash||e.status==="valid"&&["textbooks","textbook-level","kana-course"].includes(e.kind||"")&&!location.hash?e:Eh(location.pathname||"/")?ms(location.hash):e.status==="not-found"?e:ve("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function Th(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function Hs(e){const t=e.route,n=e.status==="valid"?e.params:{};a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,a.kanjiPageId=t==="kanji"&&n.cardId||null,a.activeTextbookLevel=t==="textbooks"&&(n.level||n.course)||null,a.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,a.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"&&n.view||wn,a.activeLearnNodeId=t==="learn"&&a.activeLearnView===en&&n.targetId||null,a.activeLearnLegacyLessonId=t==="learn"&&a.activeLearnView===bn&&n.targetId||null}function Kr(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!$x(t.cardId))return!a.deferredDataLoaded&&jx(t.cardId)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||t.course||"",s=t.subroute||"";if(n&&we(n))return Ba(n)?s&&!rL(n,s)?ve("hash","entity-not-found",e.raw,e.segments,e.locale):e:a.bootAncillaryLoaded?ve("hash","entity-not-found",e.raw,e.segments,e.locale):e;if(n&&!It(n))return!a.bootAncillaryLoaded&&D(n)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale);if(n&&s&&!nL(n,s))return sL(n,s)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!In(t.level)?!a.bootAncillaryLoaded&&D(t.level)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale):e.route==="learn"&&(t.view===en&&!Cs(t.targetId)||t.view===bn&&!a.lessons.some(n=>n.id===t.targetId))?ve("hash","entity-not-found",e.raw,e.segments,e.locale):e}function gA(){return ms(location.hash).raw}function mA(){const e=ms(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function fA(){const e=ms(location.hash);return e.status==="valid"&&e.route==="textbooks"&&(e.params.level||e.params.course)||""}function hA(){const e=ms(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function vA(){const e=ms(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function wA(){return Os().filter(e=>Fr(e.id)).length}function Fr(e){const t=a.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function m(e){return i(e)}})();
