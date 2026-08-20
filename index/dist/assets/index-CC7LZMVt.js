(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const $ of document.querySelectorAll('link[rel="modulepreload"]'))N($);new MutationObserver($=>{for(const T of $)if(T.type==="childList")for(const R of T.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&N(R)}).observe(document,{childList:!0,subtree:!0});function S($){const T={};return $.integrity&&(T.integrity=$.integrity),$.referrerPolicy&&(T.referrerPolicy=$.referrerPolicy),$.crossOrigin==="use-credentials"?T.credentials="include":$.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function N($){if($.ep)return;$.ep=!0;const T=S($);fetch($.href,T)}})();const bL="modulepreload",kL=function(k,w){return new URL(k,w).href},Sf={},Nf=function(w,S,N){let $=Promise.resolve();if(S&&S.length>0){const R=document.getElementsByTagName("link"),P=document.querySelector("meta[property=csp-nonce]"),ne=P?.nonce||P?.getAttribute("nonce");$=Promise.allSettled(S.map(me=>{if(me=kL(me,N),me in Sf)return;Sf[me]=!0;const dt=me.endsWith(".css"),hr=dt?'[rel="stylesheet"]':"";if(!!N)for(let an=R.length-1;an>=0;an--){const Ls=R[an];if(Ls.href===me&&(!dt||Ls.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${me}"]${hr}`))return;const jt=document.createElement("link");if(jt.rel=dt?"stylesheet":bL,dt||(jt.as="script"),jt.crossOrigin="",jt.href=me,ne&&jt.setAttribute("nonce",ne),document.head.appendChild(jt),dt)return new Promise((an,Ls)=>{jt.addEventListener("load",an),jt.addEventListener("error",()=>Ls(new Error(`Unable to preload CSS for ${me}`)))})}))}function T(R){const P=new Event("vite:preloadError",{cancelable:!0});if(P.payload=R,window.dispatchEvent(P),!P.defaultPrevented)throw R}return $.then(R=>{for(const P of R||[])P.status==="rejected"&&T(P.reason);return w().catch(T)})},yL="ru",$L={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},Qc={defaultLocale:yL,locales:$L},jL=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Wc="not-found",fr=Qc.defaultLocale,SL=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),Ef=/^n[1-5]$/i,NL=/^(?:hiragana|katakana)$/i,CL=/^[A-Za-z0-9_-]+$/,xL=/^[\p{Letter}\p{Number}_-]+$/u,LL=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,AL=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,TL=new Map(Object.entries(Qc.locales).map(([k,w])=>[String(w.urlSegment).toLowerCase(),k]));function Ne(k,w,S,N,$={},T=fr,R={}){return{status:"valid",source:k,route:w,locale:T,params:$,raw:S,segments:N,...R}}function ge(k,w,S,N=[],$=fr,T){return{status:"not-found",source:k,route:Wc,locale:$,params:{},raw:S,segments:N,reason:w,canonicalPath:T}}function Kf(k){return!!(k&&jL.includes(k))}function Oc(k){const w=String(k||"").trim().toUpperCase();return Ef.test(w)?w:""}function Df(k){const w=String(k||"").trim().toLowerCase();return NL.test(w)?w:""}function Ff(k){try{return{ok:!0,value:decodeURIComponent(k)}}catch{return{ok:!1}}}function Vc(k){return k.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function Oe(k,w,S=Vc(w)){return ge("hash",k,w,S)}function Bc(k){return CL.test(k)}function IL(k){return xL.test(k)}function Vn(k){const w=String(k||"").replace(/^#/,"").trim(),S=Ff(w);if(!S.ok)return Oe("invalid-parameter",w,[]);const N=S.value.replace(/^\/+|\/+$/g,""),$=Vc(N),T=($[0]||"home").toLowerCase();if(!$.length)return Ne("hash","home",N,$);if(T==="jlpt"){if($.length<2||$.length>3)return Oe("unknown-route",N,$);const R=Oc($[1]);if(!R)return Oe("invalid-parameter",N,$);const P=$[2]||"";return P&&!Bc(P)?Oe("invalid-parameter",N,$):Ne("hash","textbooks",N,$,{level:R,subroute:P,legacyRoute:"jlpt"})}if(T==="textbooks"){if($.length>3)return Oe("unknown-route",N,$);if($.length===1)return Ne("hash","textbooks",N,$);const R=Oc($[1]),P=Df($[1]);if(!R&&!P)return Oe("invalid-parameter",N,$);const ne=$[2]||"";return ne&&!Bc(ne)?Oe("invalid-parameter",N,$):Ne("hash","textbooks",N,$,P?{course:P,subroute:ne}:{level:R,subroute:ne})}if(T==="jlpt-lesson"){if($.length!==2)return Oe("unknown-route",N,$);const R=Oc($[1]);return R?Ne("hash","jlpt-lesson",N,$,{level:R}):Oe("invalid-parameter",N,$)}if(T==="kanji"){if($.length!==2)return Oe("unknown-route",N,$);const R=$[1];return IL(R)?Ne("hash","kanji",N,$,{cardId:R}):Oe("invalid-parameter",N,$)}if(T==="learn"){if($.length===1)return Ne("hash","learn",N,$,{view:"map"});if($.length!==3)return Oe("unknown-route",N,$);const R=$[1].toLowerCase(),P=$[2];return!["lesson","legacy"].includes(R)||!Bc(P)?Oe("invalid-parameter",N,$):Ne("hash","learn",N,$,{view:R,targetId:P})}return SL.has(T)?$.length!==1?Oe("unknown-route",N,$):Ne("hash",T,N,$):(Kf(T),Oe("unknown-route",N,$))}function RL(k){return String(k||"/").split(/[?#]/,1)[0]||"/"}function _L(k){const w=RL(k),S=Ff(w);if(!S.ok)return{ok:!1,raw:w};const N=S.value.replace(/\/{2,}/g,"/"),$=N.startsWith("/")?N:`/${N}`,T=$===""?"/":$;return{ok:!0,path:T,segments:Vc(T)}}function PL(k){return TL.get(k.toLowerCase())||null}function xs(k,w="/"){return`/${Qc.locales[k].urlSegment}${w.startsWith("/")?w:`/${w}`}`}function Of(k){const w=_L(k);if(!w.ok)return ge("pathname","invalid-parameter",w.raw,[],null);const{path:S,segments:N}=w,$=S;if(S==="/"||/^\/index\.html$/i.test(S))return Ne("pathname","home",$,N,{},fr,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(S))return Ne("pathname","home",$,N,{},fr,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(S))return Ne("pathname","download",$,N,{},fr,{kind:"download",canonicalPath:"/download/"});if(!N.length)return Ne("pathname","home",$,N,{},fr,{kind:"app-shell",canonicalPath:"/"});const T=PL(N[0]);if(!T){const P=AL.test(N[0])?"unknown-locale":"unknown-route";return ge("pathname",P,$,N,null)}if(N.length===1)return Ne("pathname","home",$,N,{},T,{kind:"localized-home",canonicalPath:xs(T,"/")});const R=N[1].toLowerCase();if(R==="download"&&N.length===2)return Ne("pathname","download",$,N,{},T,{kind:"download",canonicalPath:xs(T,"/download/")});if(R==="textbooks"){if(N.length===2)return Ne("pathname","textbooks",$,N,{},T,{kind:"textbooks",canonicalPath:xs(T,"/textbooks/")});if(N.length===3){const P=N[2].toLowerCase(),ne=Df(P);return ne?Ne("pathname","textbooks",$,N,{course:ne},T,{kind:"kana-course",canonicalPath:xs(T,`/textbooks/${ne}/`)}):Ef.test(P)?Ne("pathname","textbooks",$,N,{level:P.toUpperCase()},T,{kind:"textbook-level",canonicalPath:xs(T,`/textbooks/${P}/`)}):ge("pathname","invalid-parameter",$,N,T)}return ge("pathname","unknown-route",$,N,T)}if(R==="kanji"){if(N.length===2)return Ne("pathname","dictionary",$,N,{},T,{kind:"kanji-hub",canonicalPath:xs(T,"/kanji/")});if(N.length===3){const P=N[2].toLowerCase();return LL.test(P)?Ne("pathname","kanji",$,N,{slug:P},T,{kind:"kanji-page",canonicalPath:xs(T,`/kanji/${P}/`)}):ge("pathname","invalid-parameter",$,N,T)}return ge("pathname","unknown-route",$,N,T)}return ge("pathname","unknown-route",$,N,T)}function Cf(k){const w=Of(k);return w.status==="valid"&&(w.kind==="app-shell"||w.kind==="legacy-index")}function ML(k){const w=()=>k(Vn(window.location.hash));return window.addEventListener("hashchange",w),()=>window.removeEventListener("hashchange",w)}function EL(){let k=0,w=null;return{begin(S){w?.abort(),w=new AbortController;const N=++k,$=w;return{route:S,token:N,signal:$.signal,isCurrent:()=>k===N&&!$.signal.aborted}},abort(){w?.abort()}}}const $a=[5,60,12*60,24*60,2*24*60,4*24*60],zc={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function Be(k){const w=k&&typeof k=="object"?k:{},S=DL(w.state??w.stage),N=FL(w.dueAt??w.nextReview),$=Qn(w.reviewCount??w.reviews,0),T=Qn(w.correct,0),R=Qn(w.wrong,0),P={...w,state:S,dueAt:N,reviewCount:$,intervalDays:Qn(w.intervalDays,0),easeFactor:Qn(w.easeFactor,2.5),srsStep:Qn(w.srsStep,S==="New"?-1:0),lapses:Qn(w.lapses,0),correct:T,wrong:R,successRate:Qn(w.successRate,T+R?Math.round(T/(T+R)*100):0),history:Array.isArray(w.history)?w.history.slice(-120):[]};return delete P.nextReview,delete P.reviews,delete P.stage,delete P.lastReview,P}function we(k,w,S=w,N=new Date){const $=Be(k),T=KL($,w),R={...$,history:[...$.history]};let P=$.srsStep,ne=$.easeFactor;T==="again"?(P=0,ne=Math.max(1.3,ne-.2),R.state="Learning",R.wrong+=1,$.state!=="New"&&(R.lapses+=1)):T==="hard"?(P=Math.max(1,P),ne=Math.max(1.3,ne-.15),R.correct+=1):T==="easy"?(P=P<0?2:P+2,ne=Math.min(3.2,ne+.15),R.correct+=1):(P=P<0?0:P+1,R.correct+=1);const me=OL(P)/1440;return T!=="again"&&(R.state=me<1?"Learning":"Review"),R.correct>=8&&me>=30&&(R.state="Mastered"),R.srsStep=P,R.easeFactor=xf(ne,2),R.intervalDays=xf(me,6),R.dueAt=new Date(N.getTime()+me*864e5).toISOString(),R.reviewCount+=1,R.successRate=Math.round(R.correct/Math.max(R.correct+R.wrong,1)*100),R.lastReviewedAt=N.toISOString(),R.lastRating=zc[S]||zc[T],R.lastDecision=zc[T],R.history=[...R.history,{at:N.toISOString(),rating:R.lastRating,decision:R.lastDecision,from:$.state,to:R.state,intervalDays:me,srsStep:P}].slice(-120),R}function Jc(k,w=Date.now()){const S=new Map;for(const T of k){if(!T.cardId||T.state==="New")continue;const R=T.dueAt?Date.parse(T.dueAt):Number.NaN;Number.isFinite(R)&&R<=w&&!S.has(T.cardId)&&S.set(T.cardId,{...T})}const N=Object.freeze([...S.values()].sort((T,R)=>Date.parse(T.dueAt||"")-Date.parse(R.dueAt||""))),$=new Set;return{initial:N,complete(T){$.add(T)},get remaining(){return N.filter(T=>!$.has(T.cardId))},get remainingCount(){return N.length-$.size}}}function KL(k,w){return w==="again"||w==="forgot"?"again":w!=="remember"?w:k.state==="New"?"good":k.state==="Learning"?k.successRate>=70||k.correct>=2?"good":"hard":k.successRate>=88&&k.correct>=5&&k.lapses<=1?"easy":k.successRate<70||k.lapses>Math.max(1,Math.floor(k.correct/3))?"hard":"good"}function DL(k){const w=String(k||"new").toLowerCase();return w.includes("master")?"Mastered":w.includes("learn")?"Learning":w.includes("review")?"Review":"New"}function FL(k){return typeof k!="string"||!Number.isFinite(Date.parse(k))?null:new Date(k).toISOString()}function Qn(k,w){const S=Number(k);return Number.isFinite(S)&&S>=0?S:w}function xf(k,w){const S=10**w;return Math.round(k*S)/S}function OL(k){return k<$a.length?$a[Math.max(0,k)]:$a[$a.length-1]*2**(k-($a.length-1))}const Bf="flashKanji.progress.v2",BL="flashKanji.progress.v1";function zL(k=localStorage){const w=k.getItem(Bf)||k.getItem(BL);if(!w)return null;try{const S=JSON.parse(w);if(!S||typeof S!="object")return null;const N=S;return N.progress&&typeof N.progress=="object"?N.progress:N}catch(S){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",S),null}}function JL(k){return!k||typeof k!="object"?{}:Object.fromEntries(Object.entries(k).map(([w,S])=>[w,Be(S)]))}function UL(k,w=localStorage){try{return w.setItem(Bf,JSON.stringify(k)),!0}catch(S){return console.warn("Flash Kanji could not save LocalStorage progress.",S),!1}}const GL=/[\/／,、;；\s]+/u,HL=/[\u30a1-\u30f6]/g,qL=/[()[\]{}.\-‐-―]/gu;function WL(k){return String(k||"").normalize("NFKC").replace(HL,w=>String.fromCharCode(w.charCodeAt(0)-96))}function zf(k){return(Array.isArray(k)?k.join(" / "):String(k||"")).split(GL).map(S=>WL(S).replace(qL,"").trim()).filter(Boolean)}function XL(k){if(!k)return[];const w=[...Af("onyomi","On",k.onyomi),...Af("kunyomi","Kun",k.kunyomi)],S=new Set,N=w.filter(R=>{const P=R.kana;return!P||S.has(P)?!1:(S.add(P),!0)});if(N.length)return N;const $=zf(k.hiragana)[0];if($)return[{kind:"hiragana",kana:$,label:"Kana"}];const T=String(k.kanji||"").trim();return T?[{kind:"kanji",kana:T,label:"Kanji"}]:[]}function QL(k,w=-1,S=""){const N=S&&S!=="cycle"?k.filter(T=>T.kind===S):k;if(!N.length)return{item:null,cursor:-1};const $=(Number(w)+1)%N.length;return{item:N[$],cursor:$}}function Lf(k,w={}){const S=String(k||"").trim(),N=typeof window<"u"?window:void 0,$=w.synth||N?.speechSynthesis,T=w.Utterance||N?.SpeechSynthesisUtterance;if(!S||!$||!T)return!1;$.cancel();const R=new T(S);R.lang="ja-JP",R.rate=w.rate??.92,R.voice=VL($),R.onstart=()=>w.onStart?.(),R.onend=()=>w.onEnd?.(),R.onerror=P=>w.onError?.(P);try{return $.speak(R),!0}catch(P){return w.onError?.(P),!1}}function Af(k,w,S){return zf(S).map(N=>({kind:k,kana:N,label:w}))}function VL(k){const w=typeof k.getVoices=="function"?k.getVoices():[];return w.find(S=>/^ja[-_]?JP$/iu.test(S.lang))||w.find(S=>/^ja/iu.test(S.lang))||null}const Jf=["hiragana","katakana"];function fe(k){return Jf.includes(String(k||"").toLowerCase())}function Xc(k){return String(k??"").normalize("NFKC").trim().replace(/\s+/gu," ").toLowerCase()}function YL(k,w){const S=Xc(k);return S?(Array.isArray(w)?w:[]).some($=>Xc($)===S):!1}function ZL(){return{schema_version:1,content_version:"2026-08-kana-v1",settings:{showRomaji:!0},courses:{}}}function Uc(k){const w=ZL();if(!k||typeof k!="object")return w;const S=k,N=S.settings&&typeof S.settings=="object"?S.settings:{},$=S.courses&&typeof S.courses=="object"?S.courses:{},T={};for(const R of Jf){const P=$[R]&&typeof $[R]=="object"?$[R]:{},ne=P.review&&typeof P.review=="object"?P.review:{};T[R]={currentRoute:typeof P.currentRoute=="string"?P.currentRoute:"",lessons:Ca(P.lessons,sA),practices:Ca(P.practices,rA),finalTest:nA(P.finalTest),review:Object.fromEntries(Object.entries(ne).map(([me,dt])=>[me,Be(dt)])),writing:P.writing&&typeof P.writing=="object"?{...P.writing}:{},updatedAt:typeof P.updatedAt=="string"?P.updatedAt:null}}return{...w,...S,schema_version:1,content_version:"2026-08-kana-v1",settings:{...w.settings,showRomaji:typeof N.showRomaji=="boolean"?N.showRomaji:w.settings.showRomaji},courses:T}}function eA(k,w){var S;return(S=k.courses)[w]||(S[w]={currentRoute:"",lessons:{},practices:{},finalTest:Uf(),review:{},writing:{},updatedAt:null}),k.courses[w]}function Uf(){return{sections:{},completed:!1,passed:!1,latestScore:0,bestScore:0,score:0,total:0,updatedAt:null}}function tA(k,w,S=new Date){const N={},$={};let T=0;const R=k.items.length;for(const P of k.items){const ne=String(w[P.number]??"");N[P.number]=ne;const me=YL(ne,P.accepted_answers);$[P.number]=me,me&&(T+=1)}return{answers:N,correct:$,score:T,total:R,completed:R>0,passed:R>0&&T/R>=.8,updatedAt:S.toISOString()}}function Gc(k,w){const S=k.map(P=>w[P.id]).filter(Boolean),N=k.reduce((P,ne)=>P+ne.items.length,0),$=S.reduce((P,ne)=>P+Number(ne.score||0),0),T=S.reduce((P,ne)=>P+Number(ne.total||0),0),R=S.reduce((P,ne)=>P+Math.max(Number(ne.score||0),0),0);return{latestScore:$,bestScore:R,completed:N>0&&T>=N,passed:N>0&&$/N>=.8}}function Hc(k,w,S=new Date){return we(k,w,w,S)}function nA(k){const w=k&&typeof k=="object"?k:{},S=oo(w),N=Ca(w.sections,oo);return{...Uf(),sections:N,completed:!!(w.completed||S.completed),passed:!!(w.passed||S.passed),latestScore:Number(w.latestScore||S.score||0),bestScore:Number(w.bestScore||S.score||0),score:Number(w.score||w.latestScore||S.score||0),total:Number(w.total||S.total||0),updatedAt:typeof w.updatedAt=="string"?w.updatedAt:S.updatedAt}}function oo(k){const w=k&&typeof k=="object"?k:{};return{answers:w.answers&&typeof w.answers=="object"?{...w.answers}:{},correct:w.correct&&typeof w.correct=="object"?{...w.correct}:{},score:Number(w.score||0),total:Number(w.total||0),completed:!!w.completed,passed:!!w.passed,updatedAt:typeof w.updatedAt=="string"?w.updatedAt:null}}function sA(k){const w=k&&typeof k=="object"?k:{};return{exercises:Ca(w.exercises,oo),completed:!!w.completed,passed:!!w.passed,latestScore:Number(w.latestScore||0),bestScore:Number(w.bestScore||0),updatedAt:typeof w.updatedAt=="string"?w.updatedAt:null}}function rA(k){const w=k&&typeof k=="object"?k:{};return{exercises:Ca(w.exercises,oo),completed:!!w.completed,passed:!!w.passed,latestScore:Number(w.latestScore||0),bestScore:Number(w.bestScore||0),updatedAt:typeof w.updatedAt=="string"?w.updatedAt:null}}function Ca(k,w){return!k||typeof k!="object"?{}:Object.fromEntries(Object.entries(k).map(([S,N])=>[S,w(N)]))}const Gf=109492033,aA=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],iA={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},oA={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},lA=/^[\p{Letter}\p{Number}_-]{1,96}$/u,cA=/^[a-z][a-z0-9_]{1,64}$/,dA=/^[a-z][a-z0-9_-]{0,48}$/i,uA=/^N[1-5]$/i,Tf=new Set;let Na="";function Hf(k,w={}){if(!k||k.status==="not-found")return"/app/not-found";const S=k.params||{},N=String(k.route||w.route||"home");if(N==="learn"){const $=zt(S.view||w.activeLearnView||"map").toLowerCase(),T=zt(S.targetId||w.activeLearnNodeId||w.activeLearnLegacyLessonId);return $==="lesson"&&T?`/app/learn/lesson/${T}`:$==="legacy"&&T?`/app/learn/legacy/${T}`:"/app/learn"}if(N==="textbooks"){const $=xa(S.level||w.activeTextbookLevel),T=zt(S.subroute||w.activeTextbookSubroute);return $?T?`/app/textbooks/${$}/${T}`:`/app/textbooks/${$}`:"/app/textbooks"}if(N==="kanji"){const $=zt(S.cardId||w.kanjiPageId||S.slug);return $?`/app/kanji/${$}`:"/app/kanji"}if(N==="jlpt-lesson"){const $=xa(S.level||w.activeJlptLesson);return $?`/app/jlpt-lesson/${$}`:"/app/jlpt-lesson"}return iA[N]||"/app/not-found"}function qf(k,w={}){const S=hA(w),N=oA[S];if(!k||k.status==="not-found")return N["not-found"];const $=k.params||{},T=String(k.route||w.route||"home");if(T==="learn"){const R=zt($.view||w.activeLearnView||"map").toLowerCase(),P=zt($.targetId||w.activeLearnNodeId||w.activeLearnLegacyLessonId);return R==="lesson"&&P?S==="ru"?`Flash Kanji — Урок маршрута ${P}`:`Flash Kanji — Path lesson ${P}`:R==="legacy"&&P?S==="ru"?`Flash Kanji — Урок ${P}`:`Flash Kanji — Lesson ${P}`:N.learn}if(T==="textbooks"){const R=xa($.level||w.activeTextbookLevel).toUpperCase(),P=zt($.subroute||w.activeTextbookSubroute);return R?P?["final","final-test"].includes(P)?S==="ru"?`Flash Kanji — JLPT ${R} · Финальный тест`:`Flash Kanji — JLPT ${R} · Final test`:S==="ru"?`Flash Kanji — JLPT ${R} · Урок ${If(P)}`:`Flash Kanji — JLPT ${R} · Lesson ${If(P)}`:S==="ru"?`Flash Kanji — Учебник JLPT ${R}`:`Flash Kanji — JLPT ${R} textbook`:S==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(T==="kanji"){const R=zt($.cardId||w.kanjiPageId||$.slug),P=wA(w,R)||R;return S==="ru"?`Flash Kanji — Кандзи ${P}`:`Flash Kanji — Kanji ${P}`}if(T==="jlpt-lesson"){const R=xa($.level||w.activeJlptLesson).toUpperCase();return R?S==="ru"?`Flash Kanji — JLPT ${R}`:`Flash Kanji — JLPT ${R}`:N.learn}return N[T]||N["not-found"]}function pA(k,w={}){const S=Hf(k,w),N=qf(k,w);return Na=S,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=S),rn("prime",{virtualPath:S,title:N}),{sent:!1,virtualPath:S,title:N,reason:"duplicate"}}function gA(k,w={}){const S=Hf(k,w),N=qf(k,w);if(S===Na)return rn("skip-pageview-duplicate",{virtualPath:S,title:N,previousVirtualPath:Na}),{sent:!1,virtualPath:S,title:N,reason:"duplicate"};const $=Na||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:S,title:N,referer:$,reason:"no-window"}:typeof window.ym!="function"?(rn("skip-pageview-missing-ym",{virtualPath:S,title:N,previousVirtualPath:$}),{sent:!1,virtualPath:S,title:N,referer:$,reason:"missing-ym"}):(window.ym(Gf,"hit",S,{title:N,...$?{referer:$}:{}}),Na=S,rn("pageview",{virtualPath:S,title:N,previousVirtualPath:$}),{sent:!0,virtualPath:S,title:N,referer:$})}catch(T){return rn("pageview-error",{virtualPath:S,title:N,previousVirtualPath:$,error:T instanceof Error?T.message:String(T)}),{sent:!1,virtualPath:S,title:N,referer:$,reason:"error"}}}function mA(k,w={},S={}){const N=fA(k);if(!N)return rn("skip-goal-invalid",{goal:k}),!1;const $=S.dedupeKey?`${N}:${S.dedupeKey}`:"";if($&&Tf.has($))return rn("skip-goal-duplicate",{goal:N,params:io(w),dedupeKey:$}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return rn("skip-goal-missing-ym",{goal:N,params:io(w)}),!1;const T=io(w);return window.ym(Gf,"reachGoal",N,T),$&&Tf.add($),rn("goal",{goal:N,params:T}),!0}catch(T){return rn("goal-error",{goal:N,params:io(w),error:T instanceof Error?T.message:String(T)}),!1}}function fA(k){const w=String(k||"").trim().toLowerCase();return cA.test(w)&&(aA.includes(w)||/^social_[a-z0-9_]+_opened$/.test(w))?w:""}function io(k){const w={},S=zt(k.route).toLowerCase(),N=xa(k.level).toUpperCase(),$=zt(k.lessonId),T=zt(k.cardId),R=vA(k.source);return S&&(w.route=S),N&&(w.level=N),$&&(w.lessonId=$),T&&(w.cardId=T),R&&(w.source=R),w}function hA(k){return String(k.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function xa(k){const w=String(k||"").trim().toUpperCase();return uA.test(w)?w.toLowerCase():""}function zt(k){const w=String(k||"").trim();return lA.test(w)?encodeURIComponent(w):""}function vA(k){const w=String(k||"").trim();return dA.test(w)?w.toLowerCase():""}function If(k){const w=k.match(/-(\d+)$/);return w?.[1]?String(Number(w[1])):k}function wA(k,w){if(!w||!Array.isArray(k.cards))return"";const S=bA(w),N=k.cards.find($=>String($.id||"")===S||String($.slug||"")===S);return String(N?.kanji||"").trim()}function bA(k){try{return decodeURIComponent(k)}catch{return k}}function rn(k,w){kA()&&console.debug(`[Flash Kanji Metrika] ${k}`,w)}function kA(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const w=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(w).get("debugMetrika")==="1"}catch{return!1}}const lo="flashKanji.hasVisited",co="flashKanji.changelog.lastSeenVersion",Wf=new Set;function yA(k){if(!k||typeof k!="object")return null;const w=k,S=String(w.currentVersion||"").trim();if(!S)return null;const N=Array.isArray(w.entries)?w.entries.map(SA).filter($=>!!$):[];return N.length?{currentVersion:S,entries:N}:null}function $A(k,w,S,N={}){const $=k?.currentVersion||"",T=k?.entries.find(ne=>ne.version===$)||k?.entries[0]||null;return!k||!$||!T||Wf.has($)?{currentVersion:$,shouldShow:!1,shouldMarkHandled:!1,entry:null}:_f(S,co)===$?{currentVersion:$,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(N.hadPriorVisit||_f(S,lo)==="true"||N.useProgressSignals!==!1&&jA(w))?{currentVersion:$,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:$,shouldShow:!0,shouldMarkHandled:!1,entry:T}}function Rf(k,w){const S=String(k||"").trim();S&&(Wf.add(S),Pf(w,lo,"true"),Pf(w,co,S))}function jA(k){if(!k||typeof k!="object")return!1;const w=k;return!!(Sa(w.appOpens)>0||ja(w.lessonCompletions)>0||ja(w.cards)>0||ja(w.seenKanji)>0||ja(w.daily)>0||ja(w.favorites)>0||xA(w.transactions)>0||Sa(w.totalMoonFragmentsEarned)>0||Sa(w.secrets?.evaClicks)>0||w.secrets?.nightVisit||Sa(w.visits?.streak)>0||Sa(w.visits?.bestStreak)>0)}function SA(k){if(!k||typeof k!="object")return null;const w=k,S=String(w.version||"").trim();return S?{version:S,date:String(w.date||"").trim(),title:NA(w.title),items:CA(w.items)}:null}function NA(k){const w=k&&typeof k=="object"?k:{};return{ru:String(w.ru||w.en||"").trim(),en:String(w.en||w.ru||"").trim()}}function CA(k){const w=k&&typeof k=="object"?k:{},S=Array.isArray(w.ru)?w.ru.map($=>String($||"").trim()).filter(Boolean):[],N=Array.isArray(w.en)?w.en.map($=>String($||"").trim()).filter(Boolean):[];return{ru:S.length?S:N,en:N.length?N:S}}function _f(k,w){try{return k?.getItem(w)||""}catch{return""}}function Pf(k,w,S){try{k?.setItem(w,S)}catch{}}function ja(k){return k&&typeof k=="object"&&!Array.isArray(k)?Object.keys(k).length:0}function xA(k){return Array.isArray(k)?k.length:0}function Sa(k){const w=Number(k||0);return Number.isFinite(w)?w:0}function uo(k,w=0){const S=Number(k),N=Number(w),$=Number.isFinite(S)?S:Number.isFinite(N)?N:0;return Math.max(0,Math.floor($))}function ct(k){const w=[],S=N=>{const $=String(N??"").trim();$&&w.push($)};return Array.isArray(k)||k instanceof Set?k.forEach(S):typeof k=="string"?k.split(",").forEach(S):k&&typeof k=="object"&&Object.entries(k).forEach(([N,$])=>{$!==!1&&$!==null&&$!==void 0&&S(N)}),[...new Set(w)]}function Mf(k){const w=["background","outfit","theme","decoration","frame","effect"],S=k&&typeof k=="object"?k:{};return Object.fromEntries(w.map(N=>{const $=S[N],T=$==null?null:String($).trim();return[N,T||null]}))}function LA(k){const w=String(k.itemId??"").trim(),S=uo(k.price),N=uo(k.balance),$=ct(k.owned);return w?$.includes(w)?{status:"already-owned",balance:N,owned:$,itemId:w,price:S}:N<S?{status:"insufficient-funds",balance:N,owned:$,itemId:w,price:S}:{status:"purchased",balance:N-S,owned:[...$,w],itemId:w,price:S}:{status:"invalid-item",balance:N,owned:$,itemId:w,price:S}}function AA(k){const w=String(k||"").toLowerCase();return w==="test"||w==="done"?w:"study"}function TA(k){const w=new Set,S=[];for(const N of Array.isArray(k)?k:[]){const $=String(N?.id??"").trim();!$||w.has($)||(w.add($),S.push($))}return S}function qc(k){const w=TA(k.cards),S=k.session?.answers&&typeof k.session.answers=="object"?k.session.answers:{},N=w.filter(ne=>!!S[ne]),$=w.length,T=N.length;if(!$)return{status:"incomplete",phase:"study",total:0,expectedCardIds:w,answeredExpectedCardIds:N,answeredCount:0,currentIndex:0,currentCardId:null};if(k.confirmedCompleted&&k.session?.completedAt)return{status:"done",phase:"done",total:$,expectedCardIds:w,answeredExpectedCardIds:N,answeredCount:T,currentIndex:$,currentCardId:null};const R=w.findIndex(ne=>!S[ne]);if(R<0&&T===$)return{status:"test-ready",phase:"test",total:$,expectedCardIds:w,answeredExpectedCardIds:N,answeredCount:T,currentIndex:$,currentCardId:null};const P=R>=0?R:Math.min(Math.max(Number(k.session?.currentIndex??0)||0,0),$-1);return{status:"study",phase:(AA(k.session?.phase)==="done","study"),total:$,expectedCardIds:w,answeredExpectedCardIds:N,answeredCount:T,currentIndex:P,currentCardId:w[P]||null}}(()=>{const k="flashKanji.pwaInstallPrompt.v2",w="flashKanji.pwaInstallPrompt.v1",S="flashKanji.notificationPrompt.v1",N="flashkanji_customization",$="flashkanji_eva_state_v2",R="local-1787228322953",ne=`flashKanji.hiddenMascotSpeeches:${R}`,me="moonfarm",dt="flashKanji.appBuild.v1",hr="flashKanji.pwaCacheReset.v1",La="flashKanji.bootRecovery.v1",jt={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},an="aleksey.lebedev606@gmail.com",Ls="Flash Kanji bug report",Xf="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",Qf="downloads/flash-kanji-android.apk",Vf="assets/download/android-app-screenshot.png",Aa="flashKanji.forcePwaCacheReset.v1",O={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",kanaCatalog:"data/kana/index.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},Yf={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},Zf={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},De=["N5","N4","N3","N2","N1"],ae=new Set,eh={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},Yc={xp:12,coins:2},Zc="flashKanjiOnboardingCompleted.v3",ed="flashKanjiOnboardingCompleted",td="flashKanjiOnboardingAudience.v1",th=850,nd=450,nh=420,vr=72,sh=96,sd=1,rd="N5",on="map",Jt="lesson",ln="legacy",Le="intro-kanji",As="review-due",Ts="n5-checkpoint",rh=[Le,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",Ts],ah={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},ih=new Set(["lesson-1","lesson-2","bulk-n5-01"]),ad=7e3,po=8e3,oh=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),ie=pr(),a={route:ie.route,routeMatch:ie,routeNotFound:ie.status==="not-found"?ie:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptCourseDataStatus:{N5:"idle",N4:"idle",N3:"idle",N2:"idle",N1:"idle"},jlptCourseDataErrors:{N5:null,N4:null,N3:null,N2:null,N1:null},jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},kanaCatalog:{schema_version:1,content_version:"",courses:[]},kanaCourses:{},kanaCourseLoading:{},kanaCourseErrors:{},kanaExerciseDrafts:{},kanaLessonCharacterIndex:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:ie.status==="valid"&&ie.params.level||null,activeTextbookLevel:ie.status==="valid"&&ie.route==="textbooks"&&(ie.params.level||ie.params.course)||null,activeTextbookSubroute:ie.status==="valid"&&ie.route==="textbooks"&&ie.params.subroute||null,activeLearnView:ie.status==="valid"&&ie.route==="learn"&&ie.params.view||on,activeLearnNodeId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===Jt&&ie.params.targetId||null,activeLearnLegacyLessonId:ie.status==="valid"&&ie.route==="learn"&&ie.params.view===ln&&ie.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:ie.status==="valid"&&ie.route==="kanji"&&ie.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:vr,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:to(),notificationPrompt:wa(),notificationPromptVisible:!1,changelog:null,changelogModal:null,deferredDataLoaded:!1,deferredDataLoading:!1};a.route==="textbooks"&&!a.routeNotFound&&lt($f(Fx(),Ox()));const lh=EL();let Ta=null,Ut=null,Ia=0,St="idle",id="",od=new Map,wr=0,ld=0,Is=0,Yn=0,go=!1,Zn=0,mo=!1,es=0,Ra=!1,cd=!1,_a=0,dd=!1,Pa=!1,Ma=null,ts=null,ud=0,fo=0;const ho=new Set;let Rs=0,br=0,vo=null,be=null,Ze=null,Te=null,Gt=-1,Nt=!1,Ce="step",Ht=null,pd=null,ch=null,dh=null,kr=null,yr=0,gd=0,wo=null,bo=null;const Ea=new Map;let $r=null;const Ka=new Map;let ko=0,yo=0,$o=Math.floor(Date.now()/6e4),md=0,Da="",jo=[];const So=new Map,ns=new Map,No=new Set,Co=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Y={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Ie=(e,t=document)=>t.querySelector(e),xo=(e,t=document)=>Array.from(t.querySelectorAll(e)),jn=Ie("#app"),uh=document.title||"Flash Kanji",fd=Ie("#progressImport");document.addEventListener("click",Bv),document.addEventListener("pointerdown",zv),document.addEventListener("input",Au),document.addEventListener("change",Au),document.addEventListener("keydown",Hv),window.flashKanjiFarmMoon=(e=5e3)=>Tu(e),window.startFlashKanjiOnboarding=ol,fd.addEventListener("change",qC),window.addEventListener("beforeinstallprompt",kx),window.addEventListener("appinstalled",Mc),window.addEventListener("scroll",cl,{passive:!0}),window.addEventListener("resize",cl),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||rp(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||so("usage"),!document.hidden&&a.route==="eva-room"&&Ir("return")&&(A(),I()),document.hidden&&Wo()}),window.addEventListener("pagehide",Wo),window.addEventListener("beforeunload",Wo),ML(()=>{const e=ya(pr()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,r=t==="textbooks"&&(n.level||n.course)||null,o=t==="textbooks"&&n.subroute||null,l=t==="jlpt-lesson"&&n.level||null,c=t==="learn"&&n.view||on,d=t==="learn"&&c===Jt&&n.targetId||null,u=t==="learn"&&c===ln&&n.targetId||null,m=jf(a.routeNotFound),f=e.status==="not-found"?jf(e):"";if(t!==a.route||t==="kanji"&&s!==a.kanjiPageId||t==="textbooks"&&r!==a.activeTextbookLevel||t==="textbooks"&&o!==a.activeTextbookSubroute||t==="jlpt-lesson"&&l!==a.activeJlptLesson||t==="learn"&&c!==a.activeLearnView||t==="learn"&&d!==a.activeLearnNodeId||t==="learn"&&u!==a.activeLearnLegacyLessonId||m!==f){const v=a.route;a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,v!==t&&(v==="review"||t==="review")&&(a.reviewSession=null),a.kanjiPageId=t==="kanji"?s:null,a.activeTextbookLevel=t==="textbooks"?r:null,a.activeTextbookSubroute=t==="textbooks"?o:null,a.activeJlptLesson=t==="jlpt-lesson"?l:n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"?c:on,a.activeLearnNodeId=t==="learn"?d:null,a.activeLearnLegacyLessonId=t==="learn"?u:null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,t!=="eva-room"&&(a.evaRoomShopOpen=!1),it(),cs(),Ae(),jr(t)&&Fa({route:t,delay:0}),t==="eva-room"&&he("room_opened")}}),ph();async function ph(){if(!await Lh()&&!await xh()){hd(!0),jn.innerHTML.trim()?jn.setAttribute("aria-busy","true"):jn.innerHTML=gf(),a.progress=Yh(),lr(),xc(),ux(),Lc(),$n();try{const[e,t,n,s,r,o,l,c,d,u]=await Promise.all([bd({initialOnly:!0}),ze(O.i18n),ze(O.dialogues),ze(O.rewards,vh),ze(O.achievements,()=>({achievements:[],categories:[]})),ze(O.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),ze(O.jlptLessons,()=>({items:[]})),ze(O.kanaCatalog,()=>({schema_version:1,content_version:"",courses:[]})),ze(O.customizationShop,()=>({version:1,currency:"Moon Fragments",categories:[],items:[]})),ze(O.changelog,()=>null)]),m=Zd(r,s.achievements||[]);a.lessons=e.lessons,a.cards=e.cards,a.i18n=t,a.dialogues=n,a.rewards=s,a.achievements=m.items,a.achievementCategories=m.categories,a.jlptCatalog=Gh(o),a.jlptLessons=Uh(l),a.kanaCatalog=Hh(c),a.customizationCatalog=Fh(d),a.rewards.achievements=a.achievements;const f=nw(a.progress);Nr(),rw(),Ps(),sv(),$n(),Sx(),uN(),sw(f),mN(),Q({silent:!0}),gr(ya(pr()));const v=gh(u,f);A(),I(),v&&mh(),bh(),Fa({route:a.route,delay:jr(a.route)?0:ad}),wx(),il(),fb(),rb(),vf(),Kc();try{sessionStorage.removeItem(La)}catch(b){console.warn("Could not clear boot recovery marker after successful startup.",b)}}catch(e){console.error(e),await vx(e)||(jn.innerHTML=mx(e))}finally{hd(!1)}}}function hd(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),jn&&jn.setAttribute("aria-busy",e?"true":"false")}function gh(e,t=!1){cd=!!t,a.changelogModal=null;const n=yA(e);if(!n)return!1;a.changelog=n;const s=$A(n,a.progress,Lo(),{hadPriorVisit:cd,useProgressSignals:!1});return s.shouldMarkHandled?(Rf(s.currentVersion,Lo()),!1):!s.shouldShow||!s.entry?!1:(a.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function Lo(){try{return window.localStorage}catch{return null}}function mh(){_a&&window.clearTimeout(_a),_a=window.setTimeout(()=>{_a=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function Ao(){const e=a.changelogModal?.version||a.changelog?.currentVersion||"";Rf(e,Lo()),a.changelogModal=null,I()}function fh(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const r=document.createElement("script");r.id=t,r.src=e,r.defer=!0,r.onload=()=>n(),r.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(r)})}function hh(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function vh(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function wh(){return window.Chart?Promise.resolve():(pd||(pd=fh("vendor/chart.umd.min.js","flash-kanji-chartjs")),pd)}function bh(){window.setTimeout(()=>{ch||(ch=Nf(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{lr(),YC()}).catch(e=>console.warn("UX sound module failed to load.",e))),dh||(dh=Nf(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function jr(e=a.route){return oh.has(e)}function Fa({route:e=a.route,delay:t=ad,force:n=!1}={}){if(a.deferredDataLoaded||a.deferredDataLoading||kr||!n&&!jr(e))return;yr&&(window.clearTimeout(yr),yr=0);const s=++gd,r=()=>{s===gd&&(!n&&!jr(a.route)||kh().catch(o=>console.warn("Deferred app data failed to load.",o)))};yr=window.setTimeout(()=>{yr=0,hh(r,{timeout:1800})},Math.max(0,Number(t)||0))}async function kh({renderAfter:e=!0}={}){if(!a.deferredDataLoaded)return kr||(a.deferredDataLoading=!0,kr=(async()=>{const[t,n,s]=await Promise.all([bd(),Th([["kanjiMeta",O.kanjiMeta],["kanjiHints",O.kanjiHints],["kanjiTranslations",O.kanjiTranslations],["kanjiStrokes",O.kanjiStrokes],["kanjiPageSources",O.kanjiPageSources],["lessonTranslations",O.lessonTranslations],["vocabulary",O.vocabulary],["sentences",O.sentences],["jlptPracticeLessons",O.jlptPracticeLessons],["n5Meta",O.n5Meta],["n5Lessons",O.n5Lessons],["n5Kanji",O.n5Kanji],["n5Exercises",O.n5Exercises],["n5FinalTest",O.n5FinalTest],["n4Meta",O.n4Meta],["n4Lessons",O.n4Lessons],["n4Kanji",O.n4Kanji],["n4Grammar",O.n4Grammar],["n4Exercises",O.n4Exercises],["n4Reading",O.n4Reading],["n4Listening",O.n4Listening],["n4FinalTest",O.n4FinalTest],["n3Meta",O.n3Meta],["n3Lessons",O.n3Lessons],["n3Kanji",O.n3Kanji],["n3Grammar",O.n3Grammar],["n3Exercises",O.n3Exercises],["n3Reading",O.n3Reading],["n3Listening",O.n3Listening],["n3FinalTest",O.n3FinalTest],["n2Meta",O.n2Meta],["n2Lessons",O.n2Lessons],["n2Kanji",O.n2Kanji],["n2Grammar",O.n2Grammar],["n2Exercises",O.n2Exercises],["n2Reading",O.n2Reading],["n2Listening",O.n2Listening],["n2FinalTest",O.n2FinalTest],["n1Meta",O.n1Meta],["n1Lessons",O.n1Lessons],["n1Kanji",O.n1Kanji],["n1Grammar",O.n1Grammar],["n1Exercises",O.n1Exercises],["n1Reading",O.n1Reading],["n1Listening",O.n1Listening],["n1FinalTest",O.n1FinalTest],["jlptReadingTranslations",O.jlptReadingTranslations],["n5Reading",O.n5Reading],["monetization",O.monetization]]),Rh(O.jlptReadingMarkdown)]),{kanjiMeta:r,kanjiHints:o,kanjiTranslations:l,kanjiStrokes:c,kanjiPageSources:d,lessonTranslations:u,vocabulary:m,sentences:f,jlptPracticeLessons:v,n5Meta:b,n5Lessons:C,n5Kanji:j,n5Exercises:L,n5FinalTest:y,n4Meta:x,n4Lessons:J,n4Kanji:G,n4Grammar:Cs,n4Exercises:B,n4Reading:Jx,n4Listening:Ux,n4FinalTest:Gx,n3Meta:Hx,n3Lessons:qx,n3Kanji:Wx,n3Grammar:Xx,n3Exercises:Qx,n3Reading:Vx,n3Listening:Yx,n3FinalTest:Zx,n2Meta:eL,n2Lessons:tL,n2Kanji:nL,n2Grammar:sL,n2Exercises:rL,n2Reading:aL,n2Listening:iL,n2FinalTest:oL,n1Meta:lL,n1Lessons:cL,n1Kanji:dL,n1Grammar:uL,n1Exercises:pL,n1Reading:gL,n1Listening:mL,n1FinalTest:fL,jlptReadingTranslations:hL,n5Reading:vL,monetization:wL}=n;a.lessons=t.lessons,a.cards=t.cards,a.jlptPracticeLessons=qh(v),a.jlptReadingMarkdown=s||"",a.jlptReadingByLevel=_h(s||""),a.n5Meta=kd(b),a.n5Textbook=Po(C),a.n5KanjiCatalog=yd(j),$d(),a.n5Exercises=jd(L),a.n5FinalTest=Sd(y),a.n5Reading=Vh(vL),a.n4Meta=Nd(x),a.n4Textbook=Cd(J),a.n4KanjiCatalog=xd(G),a.n4Grammar=Ad(Cs),a.n4Exercises=Td(B),a.n4Reading=Ga(Jx),a.n4Listening=Ga(Ux),a.n4FinalTest=Id(Gx),Ld(),a.n3Meta=Rd(Hx),a.n3Textbook=_d(qx),a.n3KanjiCatalog=Pd(Wx),a.n3Grammar=Ed(Xx),a.n3Exercises=Kd(Qx),a.n3Reading=qa(Vx),a.n3Listening=qa(Yx),a.n3FinalTest=Dd(Zx),Md(),a.n2Meta=Fd(eL),a.n2Textbook=Od(tL),a.n2KanjiCatalog=Bd(nL),a.n2Grammar=Jd(sL),a.n2Exercises=Ud(rL),a.n2Reading=Xa(aL),a.n2Listening=Xa(iL),a.n2FinalTest=Gd(oL),zd(),a.n1Meta=Hd(lL),a.n1Textbook=qd(cL),a.n1KanjiCatalog=Wd(dL),a.n1Grammar=Qd(uL),a.n1Exercises=Vd(pL),a.n1Reading=Va(gL),a.n1Listening=Va(mL),a.n1FinalTest=Yd(fL),Xd(),jh(),a.kanjiMeta=r.items||{},a.kanjiHints=o.items||{},a.kanjiTranslations=l.items||{},a.kanjiStrokes=Dh(c),a.kanjiPageSources=d.items||{},a.lessonTranslations=u.items||{},a.vocabulary=m.items||[],a.sentenceExercises=f.items||[],a.jlptReadingTranslations=Eh(hL),a.monetization=wL,a.deferredDataLoaded=!0,a.deferredDataLoading=!1,a.progress&&(Nr(),Q({silent:!0}),A()),gr(ya(pr())),e&&I()})().finally(()=>{a.deferredDataLoading=!1}),kr)}function yh(e){const t=U(e),n=t.toLowerCase();if(!t)return[];const s=[["meta",O[`${n}Meta`]],["lessons",O[`${n}Lessons`]],["kanji",O[`${n}Kanji`]],["exercises",O[`${n}Exercises`]]];return t!=="N5"?s.push(["grammar",O[`${n}Grammar`]],["reading",O[`${n}Reading`]],["listening",O[`${n}Listening`]],["finalTest",O[`${n}FinalTest`]]):s.push(["finalTest",O.n5FinalTest]),s.filter(([,r])=>!!r)}function cn(e,t,n=null){const s=U(e);s&&(a.jlptCourseDataStatus[s]=t,a.jlptCourseDataErrors[s]=n||null,s==="N1"&&(bo=n||null))}function Oa(e){const t=U(e);if(!t)return"error";if(a.jlptCourseDataStatus[t]!=="ready"&&Ba(t))try{To(t),cn(t,"ready")}catch(n){cn(t,"incomplete",n)}return a.jlptCourseDataStatus[t]==="ready"&&!Ba(t)&&cn(t,"incomplete",new Error(za())),a.jlptCourseDataStatus[t]||"idle"}function Ba(e){const t=U(e);if(!t)return!1;const n=tn(t),s=vd(t),r=wd(t);return n.length>0&&s.length>0&&!!r}function vd(e){const t=U(e);return t==="N5"?Pt():t==="N4"?qe():t==="N3"?We():t==="N2"?Xe():t==="N1"?bt():[]}function wd(e){const t=U(e);return t==="N5"?a.n5Exercises:t==="N4"?a.n4Exercises:t==="N3"?a.n3Exercises:t==="N2"?a.n2Exercises:t==="N1"?a.n1Exercises:null}function $h(e,t={}){const n=U(e);n==="N5"&&(a.n5Meta=kd(t.meta),a.n5Textbook=Po(t.lessons),a.n5KanjiCatalog=yd(t.kanji),$d(),a.n5Exercises=jd(t.exercises),t.finalTest&&(a.n5FinalTest=Sd(t.finalTest))),n==="N4"&&(a.n4Meta=Nd(t.meta),a.n4Textbook=Cd(t.lessons),a.n4KanjiCatalog=xd(t.kanji),a.n4Grammar=Ad(t.grammar),a.n4Exercises=Td(t.exercises),a.n4Reading=Ga(t.reading),a.n4Listening=Ga(t.listening),a.n4FinalTest=Id(t.finalTest),Ld()),n==="N3"&&(a.n3Meta=Rd(t.meta),a.n3Textbook=_d(t.lessons),a.n3KanjiCatalog=Pd(t.kanji),a.n3Grammar=Ed(t.grammar),a.n3Exercises=Kd(t.exercises),a.n3Reading=qa(t.reading),a.n3Listening=qa(t.listening),a.n3FinalTest=Dd(t.finalTest),Md()),n==="N2"&&(a.n2Meta=Fd(t.meta),a.n2Textbook=Od(t.lessons),a.n2KanjiCatalog=Bd(t.kanji),a.n2Grammar=Jd(t.grammar),a.n2Exercises=Ud(t.exercises),a.n2Reading=Xa(t.reading),a.n2Listening=Xa(t.listening),a.n2FinalTest=Gd(t.finalTest),zd()),n==="N1"&&(a.n1Meta=Hd(t.meta),a.n1Textbook=qd(t.lessons),a.n1KanjiCatalog=Wd(t.kanji),a.n1Grammar=Qd(t.grammar),a.n1Exercises=Vd(t.exercises),a.n1Reading=Va(t.reading),a.n1Listening=Va(t.listening),a.n1FinalTest=Yd(t.finalTest),Xd())}function za(){return p()==="ru"?"Не удалось загрузить карточки урока. Проверьте подключение и попробуйте ещё раз.":"Could not load lesson cards. Check your connection and try again."}function To(e){const t=U(e),n=tn(t),s=vd(t),r=wd(t);if(!t||!n.length||!s.length||!r)throw new Error(za());if(t!=="N5")return!0;const o=[],l=new Map(a.n5KanjiCatalog.map(u=>[u.kanji,u])),c=new Set;a.n5KanjiCatalog.forEach(u=>{u.id&&c.add(u.id)}),n.length!==10&&o.push(`N5 lessons expected 10, got ${n.length}`),a.n5KanjiCatalog.length!==80&&o.push(`N5 kanji expected 80, got ${a.n5KanjiCatalog.length}`),c.size!==a.n5KanjiCatalog.length&&o.push("N5 card identifiers are not unique.");const d=new Set;if(n.forEach(u=>{d.has(u.id)&&o.push(`Duplicate N5 lesson id: ${u.id}`),d.add(u.id),(u.kanji||[]).length!==8&&o.push(`${u.id} expected 8 kanji, got ${(u.kanji||[]).length}`),(u.kanji||[]).map(v=>l.get(v)).filter(Boolean).length!==(u.kanji||[]).length&&o.push(`${u.id} has unresolved kanji references.`);const f=mn(u);f.length!==(u.kanji||[]).length&&o.push(`${u.id} cards expected ${u.kanji.length}, got ${f.length}`),Us(u).length||o.push(`${u.id} has no exercises.`)}),o.length)throw new Error(`${za()} ${o[0]}`);return!0}function jh(){De.forEach(e=>{try{Ba(e)&&(To(e),cn(e,"ready"))}catch(t){cn(e,"incomplete",t)}})}function Sh(e){const t=U(e);if(!t||!a.progress)return!1;const n=ps(),s=bn(t);let r=!1;return tn(t).forEach(o=>{const l=Ap(t,o.id),c=n.sessions[l];if(!c)return;const d=qc({cards:tl(t,o),session:c,confirmedCompleted:!!(s?.completedLessons?.[o.id]||ae.has(`${t.toLowerCase()}:${o.id}`))});(c.phase==="test"||c.phase==="done")&&d.status==="incomplete"&&(c.phase="study",c.currentIndex=0,c.completedAt=null,r=!0),d.status==="study"&&c.currentIndex!==d.currentIndex&&(c.currentIndex=d.currentIndex,r=!0),d.status==="study"&&c.phase!=="study"&&(c.phase="study",r=!0)}),r&&(n.lastUpdatedAt=new Date().toISOString()),r}async function Io(e,{renderAfter:t=!0,force:n=!1}={}){const s=U(e);if(!s)return null;if(!n&&Oa(s)==="ready")return tn(s);if(!n&&Ea.has(s))return Ea.get(s);cn(s,"loading");const r=Ih(yh(s),s==="N5"?4:3).then(o=>{$h(s,o),To(s),cn(s,"ready");const l=Sh(s);return a.progress&&(Nr(),l&&A()),gr(ya(pr())),t&&I(),tn(s)}).catch(o=>{throw cn(s,"error",o),console.warn(`${s} textbook data failed to load.`,o),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&I(),o}).finally(()=>{Ea.delete(s)});return Ea.set(s,r),t&&a.route==="textbooks"&&a.activeTextbookLevel===s&&I(),r}function Nh(e){const t=U(e);t&&(cn(t,"loading"),I(),Io(t,{renderAfter:!0,force:!0}).catch(()=>{}))}async function Ch({renderAfter:e=!0}={}){return wo=Io("N1",{renderAfter:e}).finally(()=>{wo=null}),wo}async function xh(){try{const e=localStorage.getItem(dt);if(localStorage.setItem(dt,R),!e||e===R)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function Lh(){try{const e=localStorage.getItem(Aa),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===R||(localStorage.setItem(Aa,"done"),localStorage.setItem("flashKanji.lastForcedBuild",R)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function bd({initialOnly:e=!1}={}){const t=await ze(O.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Ah(n):n,r=await Ro(s,async d=>{try{return{manifestLesson:d,payload:await ze(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(r.filter(Boolean).map(d=>[d.manifestLesson.id,d])),l=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(f=>Kh(f,m.lesson.id)):[]}}),c=l.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:l,cards:c}}function Ah(e){return e.filter((t,n)=>ih.has(t.id)||n<2)}async function Th(e,t=3){const n=await Ro(e,async([s,r])=>[s,await ze(r)],t);return Object.fromEntries(n)}async function Ih(e,t=3){const n=await Ro(e,async([s,r])=>[s,await Oh(r)],t);return Object.fromEntries(n)}async function Ro(e,t,n=6){const s=[],r=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=r){const l=e.slice(o,o+r);s.push(...await Promise.all(l.map(t))),o+r<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function ze(e,t=null){const n=_o(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),po):0;try{const c=await fetch(r,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${r}`);continue}const d=await c.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${r}. Trying fallback paths.`,u)}}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function Rh(e,t=""){const n=_o(e);let s=null;for(const r of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),po):0;try{const c=await fetch(r,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${r}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function _h(e){const t=Object.fromEntries(De.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,r=null,o="idle",l=[],c=[];const d=()=>{!r||!s||(r.text=Ph(l.join(`
`)),r.questions=c.map(m=>m.trim()).filter(Boolean),t[s].push(r),r=null,l=[],c=[],o="idle")},u=m=>{const f=String(m||"").trim().toLowerCase();return f==="жанр"||f==="genre"?"genre":f==="опора"||f==="source"||f==="basis"?"source":f==="цель"||f==="goal"?"goal":f};for(const m of n){const f=String(m??""),v=f.trim(),b=v.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(b){d(),s=b[1].toUpperCase();continue}const C=v.match(/^##\s*(N[1-5])\s*(.+)$/i);if(C){d(),s=C[1].toUpperCase(),r={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:Mh(C[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(v)&&!b&&!C){d(),s=null;continue}if(!r)continue;if(/^###\s*Проверочные вопросы/i.test(v)){o="questions";continue}if(o==="code"){/^```/.test(v)?o="body":l.push(f);continue}if(/^```/.test(v)){o="code";continue}if(o==="questions"){const L=v.match(/^[-*]\s+(.*)$/),y=v.match(/^\d+\.\s+(.*)$/);if(L){c.push(L[1]);continue}if(y){c.push(y[1]);continue}if(!v||/^---+$/.test(v))continue;c.push(v);continue}const j=v.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(j){const L=u(j[1]);r[L]=j[2].trim()}}return d(),t}function Ph(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function Mh(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Eh(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,r])=>{!s||!r||typeof r!="object"||(n[String(s)]={titleRu:String(r.titleRu||r.ruTitle||r.title_ru||"").trim(),titleEn:String(r.titleEn||r.enTitle||r.title_en||"").trim(),ru:String(r.ru||r.translationRu||r.translation_ru||"").trim(),en:String(r.en||r.translationEn||r.translation_en||"").trim()})}),n}function _o(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Kh(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Dh(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const r=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return r.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||r.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:r}]:null}).filter(Boolean))}function Fh(e){const t=Array.isArray(e?.categories)?e.categories:[],n=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),currency:e?.currency||"Moon Fragments",categories:t.length?t:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}],items:n.map(s=>{const r=uo(s.price);return{...s,id:String(s.id||""),type:String(s.type||"effect"),price:r,asset:String(s.asset||""),preview:String(s.preview||s.asset||""),rarity:String(s.rarity||"common").toLowerCase(),defaultOwned:!!(s.defaultOwned||r===0),unlockCondition:s.unlockCondition||null}}).filter(s=>s.id)}}async function Oh(e){const t=_o(e);let n=null;for(const s of t)try{const r=typeof AbortController<"u"?new AbortController:null,o=r?window.setTimeout(()=>r.abort(),po):0;try{const l=await fetch(s,{signal:r?.signal});if(!l.ok){n=new Error(`Cannot load ${s}: HTTP ${l.status}`);continue}const c=await l.text();try{return JSON.parse(c)}catch(d){n=d}}finally{o&&window.clearTimeout(o)}}catch(r){n=r}throw n||new Error(`Cannot load ${e}`)}function Sn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function Bh(){try{const e=localStorage.getItem(N);if(!e)return Sn();const t=JSON.parse(e);if(!t||typeof t!="object")return Sn();const n=Sn(),s=t.selected||t.equipped||{},r=Object.entries(Mf(s)).filter(([,o])=>!!o);return{owned:ct(t.owned||t.ownedItems||t.inventory||n.owned),selected:{...n.selected,...Object.fromEntries(r)},seen:ct(t.seen||n.seen),updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),Sn()}}function _s(){if(!a.customization)return!1;if(Ra)return!0;Ra=!0;const e=()=>{es=0,Ra=!1,a.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(N,JSON.stringify(a.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?es=window.requestIdleCallback(e,{timeout:1200}):es=window.setTimeout(e,160),!0}function zh(){if(!a.customization)return!1;Ra=!1,es&&("cancelIdleCallback"in window?window.cancelIdleCallback(es):window.clearTimeout(es),es=0),a.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(N,JSON.stringify(a.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function Ps(){const e=Bh(),t=new Set,n=ct(a.progress.shop?.owned||[]);ct(e.owned).forEach(r=>{const o=ke(r)||ss(r);o&&t.add(o.id)}),ut().forEach(r=>{(r.defaultOwned||r.price===0)&&t.add(r.id)}),ct(a.progress.unlockedBackgrounds||[]).forEach(r=>{const o=ke(r)||ss(r);o&&t.add(o.id)}),ct(a.progress.unlockedEvaSprites||[]).forEach(r=>{const o=rs(r);o&&t.add(o.id),n.includes(`eva_sprite:${r}`)&&o&&t.add(o.id)}),n.forEach(r=>{const o=String(r),l=ke(o)||ss(o);if(l&&t.add(l.id),!l&&o.startsWith("eva_sprite:")){const c=rs(o.replace("eva_sprite:",""));c&&t.add(c.id)}});const s=Jh({...Sn().selected,...e.selected||{}});a.progress.selectedEvaRoomBackground&&(s.background=dn(a.progress.selectedEvaRoomBackground)),a.progress.selectedEvaSprite&&(s.outfit=rs(a.progress.selectedEvaSprite)?.id||s.outfit),t.has(s.background)||(s.background="bg_study_hub"),t.has(s.outfit)||(s.outfit="outfit_default_assassin"),t.has(s.theme)||(s.theme="theme_default_dark"),s.decoration&&!t.has(s.decoration)&&(s.decoration=null),s.effect&&!t.has(s.effect)&&(s.effect=null),a.customization={owned:[...t],selected:s,seen:[...new Set([...ct(e.seen||[]),...t])],updatedAt:e.updatedAt||new Date().toISOString()},Sr(),_s()}function Sr(){var n;if(!a.customization||!a.progress)return;ue();const e=a.customization.selected||{};e.background&&(a.progress.selectedEvaRoomBackground=e.background);const t=ke(e.outfit);t?.spriteId&&(a.progress.selectedEvaSprite=t.spriteId),a.progress.unlockedBackgrounds=[...new Set([...ct(a.progress.unlockedBackgrounds||[]),...a.customization.owned.filter(s=>ke(s)?.type==="background")])],a.progress.unlockedEvaSprites=[...new Set([...ct(a.progress.unlockedEvaSprites||[]),...a.customization.owned.map(s=>ke(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=a.progress).shop||(n.shop={owned:[],equipped:{}}),a.progress.shop.owned=[...new Set([...ct(a.progress.shop.owned||[]),...a.customization.owned,...a.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],a.progress.shop.equipped={...a.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function ut(){return a.customizationCatalog?.items||[]}function ke(e){return ut().find(t=>t.id===e)||null}function ss(e){const t=String(e||"");return t&&ut().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function dn(e){return(ke(e)||ss(e))?.id||e||null}function Jh(e={}){return{background:dn(e.background),outfit:dn(e.outfit),theme:dn(e.theme),decoration:dn(e.decoration||e.frame),effect:dn(e.effect)}}function rs(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return ut().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Uh(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function Gh(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>De.indexOf(n.jlpt)-De.indexOf(s.jlpt))}}function Hh(e){const t=Array.isArray(e?.courses)?e.courses:[];return{schema_version:Number(e?.schema_version||1),content_version:String(e?.content_version||""),courses:t.map(n=>({...n,slug:String(n.slug||"").toLowerCase(),title:String(n.title||""),native_title:String(n.native_title||""),description:String(n.description||""),course_file:String(n.course_file||""),pdf_url:String(n.pdf_url||""),lesson_count:Number(n.lesson_count||0),base_character_count:Number(n.base_character_count||0),task_count:Number(n.task_count||0)})).filter(n=>fe(n.slug))}}function qh(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function kd(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function Po(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function yd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function $d(){if(!Array.isArray(a.n5KanjiCatalog)||!a.n5KanjiCatalog.length)return;const e=new Map(a.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const r=String(n.jlpt||s.jlpt||"").toUpperCase();return r&&r!=="N5"?n:(t.add(s.kanji),Ja(n,s))}),a.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ja({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Ja(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function jd(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Sd(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Nd(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Cd(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function xd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Ld(){if(!Array.isArray(a.n4KanjiCatalog)||!a.n4KanjiCatalog.length)return;const e=new Map(a.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ua(n,s))}),a.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ua({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function Ua(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function Ad(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Td(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ga(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Id(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function Rd(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function _d(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function Pd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Md(){if(!Array.isArray(a.n3KanjiCatalog)||!a.n3KanjiCatalog.length)return;const e=new Map(a.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ha(n,s))}),a.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Ha({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function Ha(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Ed(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Kd(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function qa(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Dd(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function Fd(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function Od(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Bd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function zd(){if(!Array.isArray(a.n2KanjiCatalog)||!a.n2KanjiCatalog.length)return;const e=new Map(a.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Wa(n,s))}),a.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Wa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function Wa(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function Jd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Ud(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Xa(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Gd(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function Hd(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function qd(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Wd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Xd(){if(!Array.isArray(a.n1KanjiCatalog)||!a.n1KanjiCatalog.length)return;const e=new Map(a.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;a.cards=a.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Qa(n,s))}),a.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(a.cards.push(Qa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))})}function Qa(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),r=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function Qd(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Vd(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Va(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Yd(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function Wh(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function Xh(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>V(n)):[]})):[]}function Qh(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((r,o)=>({kanji:String(r||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,r,o)=>o.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===r)}function Vh(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(r=>String(r?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((r,o)=>({id:String(r.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(r.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(r.sentence||""),reading:V(r.reading||""),translationRu:String(r.translationRu||r.translation_ru||r.ru||""),translationEn:String(r.translationEn||r.translation_en||r.en||""),blanks:Xh(r.blanks),tiles:Qh(r.tiles,r.blanks),source:"reading"})).filter(r=>r.id)}function Zd(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],r=n.map(l=>Mo(l)),o=new Set(s.map(l=>l.id));return r.forEach(l=>{o.has(l.category)||(o.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:r}}function Mo(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function eu(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function Ms(){const e=eu();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:Ko(),jlptLessonStudy:Do(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:Oo(),n4Course:Bo(),n3Course:zo(),n2Course:Jo(),n1Course:Uo(),kanaCourses:Uc(null),unlockedJlptLevels:De.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:mu(),evaRelationship:Ho(),shop:{owned:[],equipped:{}}}}function Yh(){const e=Ms();try{const t=zL();return t?tu(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function tu(e,t){return{...e,...t,version:3,settings:Zh(e.settings,t.settings||{}),cards:JL({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:tv(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Ya(t.dailyBonusPending||null),lastOpenedJlptLesson:Ve(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:CC(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Ns(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),moonFragments:uo(t.moonFragments,e.moonFragments),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:ou(e.learningPath,t.learningPath||{}),jlptLessonStudy:iu(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Go(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:gu(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:lu(e.n5Course,t.n5Course||{}),n4Course:cu(e.n4Course,t.n4Course||{}),n3Course:du(e.n3Course,t.n3Course||{}),n2Course:uu(e.n2Course,t.n2Course||{}),n1Course:pu(e.n1Course,t.n1Course||{}),kanaCourses:Uc(t.kanaCourses||e.kanaCourses),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...De])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:hu(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:fu(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...ct(e.shop.owned||[]),...ct(t.shop?.owned||t.ownedItems||[])])],equipped:{...e.shop.equipped,...Mf(t.shop?.equipped||t.equippedItems||{})}}}}function Zh(e,t){const n={...e,...t||{}};return n.theme=ev(n.theme,e.theme||"dark"),n.themeManuallySelected=Nn(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=Nn(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=Nn(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=Nn(n.languageManuallySelected,e.languageManuallySelected===!0),n}function ev(e,t="dark"){return e==="light"||e==="dark"?e:t}function tv(e,t){const n={...e,...t||{}};return n.current=Eo(n.current,e.current||0),n.best=Eo(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=nu(n.pendingReward),n}function nu(e){if(!e||typeof e!="object")return null;const t=Eo(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Ya(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function Nn(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Eo(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Ko(){return{version:sd,currentLevel:rd,currentNodeId:Le,completedNodes:{},unlockedNodes:{[Le]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function Do(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function su(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function ru(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function au(e,t){const n=su(),s=t&&typeof t=="object"?t:{},r={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:r,phase:ru(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function iu(e,t){const n=Do(),s=t&&typeof t=="object"?t:{},r={},o=e?.sessions||{},l=s.sessions||{};return Object.keys(o).forEach(c=>{r[c]=au(o[c],l[c])}),Object.keys(l).forEach(c=>{r[c]||(r[c]=au(null,l[c]))}),{...n,...e||{},...s||{},sessions:r,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function ou(e,t){return{...e,...t||{},version:sd,currentLevel:String(t?.currentLevel||e.currentLevel||rd).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||Le),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Fo(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Fo(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Jt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function Oo(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function lu(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ns(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Vr(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Bo(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function cu(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ns(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Vr(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function zo(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function du(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ns(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Vr(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Jo(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function uu(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ns(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Vr(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Uo(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function pu(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ns(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Vr(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Go(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:nv(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Za(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Za(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function nv(e,t){const n=[],s=new Set,r=o=>{if(!o)return;const l=On(o.jp||Jg(o)),c=Qs(l);if(!c||s.has(c))return;s.add(c);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Pe(c).toString(36)}`;n.push({id:d,jp:l,hiragana:On(o.hiragana||o.reading||""),ru:On(o.ru||o.translationRu||""),en:On(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(r),(Array.isArray(t)?t:[]).forEach(r),n.slice(0,160)}function gu(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Ho(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:oe(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function mu(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function fu(e,t){return{...e,...t,warmth:le(Number(t.warmth??e.warmth),0,100),trust:le(Number(t.trust??e.trust),0,100),discipline:le(Number(t.discipline??e.discipline),0,100),curiosity:le(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function hu(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function un(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function as(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function qt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:un(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function sv(){const e=qt();let t=null;try{const n=localStorage.getItem($);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}a.evaRuntime=iv(e,t||av()),rv(),is()}function rv(){if(!a.evaRuntime)return;a.evaRuntime.memory=as(un(),a.evaRuntime.memory||{});const e=a.evaRuntime.memory,t=oe(),n=e.lastSeenDate||null,s=n?Math.max(0,Wn(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=a.route,e.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=a.evaRuntime.mood||e.lastKnownMood||"neutral"}function av(){const e=a.progress?.evaAutonomy||{};return{currentSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:a.customization?.selected?.decoration||a.customization?.selected?.frame||null,currentEffect:a.customization?.selected?.effect||"none",activeSkin:a.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:a.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function iv(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:as(e.memory||un(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function qo(){if(!a.evaRuntime)return!1;vu(),a.evaRuntime.updatedAt=new Date().toISOString(),mo=!1,Zn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Zn):window.clearTimeout(Zn),Zn=0);try{return localStorage.setItem($,JSON.stringify(a.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function is(e={}){if(!a.evaRuntime)return!1;if(e?.immediate)return qo();if(mo)return!0;mo=!0;const t=()=>{Zn=0,qo()};return"requestIdleCallback"in window?Zn=window.requestIdleCallback(t,{timeout:1200}):Zn=window.setTimeout(t,160),!0}function Wo(){Xo(),qo(),zh()}function vu(){if(!a.evaRuntime||!a.progress)return;const e=a.progress.selectedEvaRoomBackground||a.customization?.selected?.background||"bg_study_hub",t=ut().filter(n=>Vt(n.id));a.evaRuntime.ownedSkins=[...new Set(["idle","default",...a.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],a.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...a.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],a.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],a.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],a.evaRuntime.currentBackground=e,a.evaRuntime.activeSkin=a.evaRuntime.currentSkin||a.progress.selectedEvaSprite||"idle",a.evaRuntime.activeBackground=e}function Xo(){return a.progress?(a.progress.level=Xi(a.progress.xp),a.progress.updatedAt=new Date().toISOString(),go=!1,Yn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Yn):window.clearTimeout(Yn),Yn=0),UL(a.progress)):!1}function A(e={}){if(!a.progress)return!1;if(e?.immediate)return Xo();if(go)return!0;go=!0;const t=()=>{Yn=0,Xo()};return"requestIdleCallback"in window?Yn=window.requestIdleCallback(t,{timeout:1200}):Yn=window.setTimeout(t,120),!0}function wu(e,t,{timeout:n=0}={}){const s=()=>{try{const r=t?.();r&&typeof r.then=="function"&&r.catch(o=>console.warn(`[Flash Kanji] ${e} failed.`,o))}catch(r){console.warn(`[Flash Kanji] ${e} failed.`,r)}};requestAnimationFrame(()=>window.setTimeout(s,n))}function ov(){Ae(),cs(),At(),window.setTimeout(cs,120),window.setTimeout(cs,320)}function Ct(e,t,n={}){wu(e,()=>{const s=t?.();s&&typeof s.then=="function"&&s.catch(r=>console.warn(`[Flash Kanji] ${e} failed.`,r)),A(),n.scrollTop?ov():Lt()})}function lv(e){const t=e?.dataset?.action||"",n=cv(t,e);return n?No.has(n)?!1:(No.add(n),requestAnimationFrame(()=>window.setTimeout(()=>No.delete(n),0)),!0):!0}function cv(e,t){return e?e==="rate"?`rate:${a.activeCardId||""}:${t?.dataset?.rating||""}`:e==="rate-kana-review"?`rate-kana:${t?.dataset?.course||""}:${t?.dataset?.card||""}:${t?.dataset?.rating||""}`:e==="kana-lesson-card"?`kana-lesson-card:${t?.dataset?.course||""}:${t?.dataset?.lesson||""}:${t?.dataset?.kana||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${a.activeExerciseReviewLevel||""}:${a.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function Nr(){a.cards.forEach(s=>F(s.id)),a.progress.level=Xi(a.progress.xp),a.progress.totalMoonFragmentsEarned=Math.max(Number(a.progress.totalMoonFragmentsEarned||0),Number(a.progress.moonFragments||0),qN()),ue(),Fs(),Er(),Al(),_l(),Kl(),typeof $i=="function"&&$i();const e=sr(),t=[Mi(Z(),"N5"),Mi(X(),"N4"),Mi(q(),"N3"),Mi(W(),"N2"),Ei(Z(),"N5"),Ei(X(),"N4"),Ei(q(),"N3"),Ei(W(),"N2")].some(Boolean);[Z(),X(),q(),W(),typeof ee=="function"?ee():null].filter(Boolean).forEach(s=>dv(s)),(t||e)&&A(),ei();const n=a.lessons.find(s=>Je(s));a.activeLessonId||(a.activeLessonId=n?.id||a.lessons[0]?.id||null)}function dv(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Ns(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function Es(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],r=e.srsKanji[t],o=s||r||n;return e.studiedKanji[t]=o,e.srsKanji[t]=r||o,o}function ei(){a.progress.learningPath=ou(Ko(),a.progress.learningPath||{});const e=a.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[Le]=!0,(Object.keys(a.progress.seenKanji||{}).length>0||Object.keys(Z().studiedKanji||{}).length>0||Object.keys(Z().completedLessons||{}).length>0||Object.keys(a.progress.lessonCompletions||{}).length>0)&&!t[Le]&&(t[Le]=a.progress.visits?.firstVisitDate||new Date().toISOString()),Qo().forEach((o,l)=>{Z().completedLessons?.[o]&&!t[o]&&(t[o]=Z().completedLessons[o]),n[o]=!0});const r=bu();e.currentNodeId=r,n[r]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function Qo(){const e=(a.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:rh.filter(t=>/^n5-lesson-\d+$/i.test(t))}function bu(){const e=a.progress?.learningPath||Ko(),t=[Le,...Qo(),Ts];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||Le}function Vo(){return a.n5Textbook?.items?.length?Promise.resolve(a.n5Textbook):$r||($r=ze(O.n5Lessons).then(e=>(a.n5Textbook=Po(e),ei(),(a.route==="learn"||a.route==="home")&&I(),a.n5Textbook)).catch(e=>{throw $r=null,e}),$r)}function uv(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(a.learningPathLessonPayloads[t])return Promise.resolve(a.learningPathLessonPayloads[t]);const n=ah[t];if(!n){const r=Rr(t);return r&&(a.learningPathLessonPayloads[t]=r),Promise.resolve(r)}if(Ka.has(t))return Ka.get(t);const s=ze(n).then(r=>(a.learningPathLessonPayloads[t]=r||Rr(t),a.route==="learn"&&a.activeLearnNodeId===t&&I(),a.learningPathLessonPayloads[t])).catch(r=>{const o=Rr(t);if(o)return a.learningPathLessonPayloads[t]=o,a.route==="learn"&&a.activeLearnNodeId===t&&I(),o;throw r}).finally(()=>{Ka.delete(t)});return Ka.set(t,s),s}function Cn(){return ei(),a.progress.learningPath}function Yo(){const e=Cn().activeSession;return!e?.nodeId||Cn().completedNodes?.[e.nodeId]?null:e}function Ks(){const e=Yo();return e?.nodeId?e.nodeId:Cn().currentNodeId||bu()||Le}function ku(e){const t=os(e);return t?h(t.title):pv(e)}function pv(e){const t=String(e||"");if(t===Le)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===Ts)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=_t(t);if(n)return h(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function gv(e){const t=os(e);return t?h(t.summary):""}function de(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function mv(){const e=de();return{id:Le,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function fv(){const e=Fe();return de(),{id:As,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function hv(){return{id:Ts,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function vv(){return Qo().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function yu(){const e=mv(),t=fv(),n=hv(),s=a.n5Textbook?.items?.length?a.n5Textbook.items.map((o,l)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):vv(),r=[e];return Fe()>0&&r.push(t),[...r,...s,n]}function os(e){const t=String(e||"");return t&&yu().find(n=>n.id===t)||null}function $u(e){if(!e)return"locked";if(e.id===As)return Fe()>0?"review":"available";const t=Cn();return t.completedNodes?.[e.id]?"completed":Ks()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function wv(e){const t=de();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function ju(){const e=Cn(),t=Fe(),n=Yo(),s=Ks(),r=os(s),o=Number(vn().reviews||0)>=Number(a.progress.settings.dailyGoal||0);return!e.completedNodes?.[Le]&&!n?{kind:"node",label:de().start,nodeId:Le}:n?.nodeId?{kind:"node",label:de().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${de().reviewAction}: ${t}`,nodeId:As}:o&&r?{kind:"node",label:de().next,nodeId:r.id}:r?{kind:"node",label:e.completedNodes?.[Le]?de().resume:de().start,nodeId:r.id}:{kind:"review",label:de().reviewOld,nodeId:As}}function bv(){const e=de(),t=IC(),n=t?.level||sn(),s=t?.lessonId||Sc(n),r=bn(n),o=tf(n);return{label:!!(t?.lessonId||r&&(Object.keys(r.completedLessons||{}).length>0||r.currentLessonId&&r.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Su(){return p()==="ru"?{sectionEyebrow:"Японские азбуки",sectionTitle:"Начни с каны",sectionHint:"Хирагана и катакана идут рядом с JLPT, но прогресс и статистика хранятся отдельно.",start:"Начать",continue:"Продолжить",review:"Повторить",lessons:"уроков",passed:"пройдено",due:"к повторению",mastered:"освоено",characters:"знаков",active:"выбранный курс",hiragana:"Хирагана",katakana:"Катакана"}:{sectionEyebrow:"Japanese syllabaries",sectionTitle:"Start with kana",sectionHint:"Hiragana and katakana live next to JLPT, while progress and stats stay separate.",start:"Start",continue:"Continue",review:"Review",lessons:"lessons",passed:"passed",due:"due",mastered:"mastered",characters:"characters",active:"selected course",hiragana:"Hiragana",katakana:"Katakana"}}function kv(e){return e?!!(e.currentRoute||Object.keys(e.lessons||{}).length||Object.keys(e.practices||{}).length||Object.keys(e.review||{}).length||Object.keys(e.writing||{}).length||e.finalTest?.completed):!1}function yv(e){if(!fe(e))return 0;const t=Date.now(),n=It(e),s=Object.entries(n).map(([r,o])=>({cardId:r,...Be(o)}));return Jc(s,t).initial.length}function $v(e){return fe(e)?Object.values(It(e)).map(t=>Be(t)).filter(t=>t.state==="Mastered").length:0}function jv(e){return fe(e)?Object.values(It(e)).map(t=>Be(t)).filter(t=>t.state!=="New"||Number(t.reviewCount||0)>0).length:0}function Sv(){const e=Su();return(a.kanaCatalog?.courses||[]).map(t=>{const n=String(t.slug||"").toLowerCase(),s=js(n),r=ot(n),o=s?.lessons?.[0]?.id||"lesson-1",l=r.currentRoute||o,c=Math.max(Number(s?.lessons?.length||0),Number(t.lesson_count||0)),d=s?.lessons?.length?s.lessons.filter(L=>vi(n,L).passed).length:Object.values(r.lessons||{}).filter(L=>L?.passed).length,u=Math.max(Number(s?.base_characters?.length||0),Number(t.base_character_count||0)),m=jv(n),f=yv(n),v=M(d,Math.max(1,c)),b=M(m,Math.max(1,u)),C=kv(r),j=n==="katakana"?e.katakana:e.hiragana;return{slug:n,title:j,subtitle:t.title||j,nativeTitle:t.native_title||(n==="katakana"?"カタカナ":"ひらがな"),description:t.description||"",currentRoute:l,started:C,dueCount:f,completedLessons:d,totalLessons:c,totalCharacters:u,masteredCount:$v(n),progressPercent:Math.max(v,b),updatedAt:r.updatedAt||null}}).filter(t=>fe(t.slug))}function Nv(e){const t=e.filter(n=>n.started||n.updatedAt);return t.length&&t.sort((n,s)=>(Date.parse(s.updatedAt||"")||0)-(Date.parse(n.updatedAt||"")||0))[0]?.slug||""}function Cv(e,t,n){const s=e.slug===t,r=e.started?n.continue:n.start,o=`#textbooks/${g(e.slug)}/${g(e.currentRoute||"lesson-1")}`,l=e.totalLessons>0?`${e.completedLessons}/${e.totalLessons} ${n.lessons}`:`0 ${n.lessons}`,c=e.totalCharacters>0?`${e.masteredCount}/${e.totalCharacters} ${n.mastered}`:`${e.masteredCount} ${n.mastered}`;return`
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
    `}function xv(){const e=Sv();if(!e.length)return"";const t=Su(),n=Nv(e);return`
      <article class="study-card home-kana-section" data-section="home-kana-courses">
        <div class="section-head">
          <div>
            <span class="eyebrow accent">${i(t.sectionEyebrow)}</span>
            <h2>${i(t.sectionTitle)}</h2>
            <p>${i(t.sectionHint)}</p>
          </div>
        </div>
        <div class="home-kana-grid">
          ${e.map(s=>Cv(s,n,t)).join("")}
        </div>
      </article>
    `}function Lv(){const e=yn(),t=Fe(),n=de();return[{label:n.streak,value:a.progress.streak.current},{label:n.level,value:a.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Av(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function Tv(){const e=p()==="ru",t=kl();return De.map(n=>{const s=Ft(n),r=tn(n),o=bn(n),l=n==="N5"?ms():Object.keys(o?.completedLessons||{}).length,c=Math.max(Number(s?.lessonCount||0),r.length||0),d=yt(n),u=Ym(n),m=!u&&t===n,f=h(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),v=c>0?`${l}/${c} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",b=u?e?"Пройдено":"Completed":m?`${v} · ${e?"сейчас":"now"}`:d?v:kn(n);return{level:n,title:f,note:b,status:u?"done":m?"current":d?"open":"locked"}})}function Iv(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function Rv(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function Nu(){const e=Ks();return{title:ku(e),summary:gv(e)}}function F(e){const t=String(e);a.progress.cards[t]||(a.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=Be(a.progress.cards[t]);return n.successRate=pf(n),Number.isFinite(Number(n.srsStep))?n.srsStep=le(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=el(n),a.progress.cards[t]=n,n}function Cr(e,t="seen"){if(!a.progress||!e?.id)return!1;ue();const n=new Date().toISOString();let s=!1;const r=String(e.id);return a.progress.seenCards[r]||(a.progress.seenCards[r]=n,s=!0),e.kanji&&!a.progress.seenKanji[e.kanji]&&(a.progress.seenKanji[e.kanji]={at:n,cardId:r,source:t,jlpt:e.jlpt||""},s=!0),s}function xr(e,t="seen"){Cr(e,t)&&A()}const xt=[5/1440,1/24,12/24,1,2,4],Zo=1;function el(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<xt.length;s+=1)if(t<=xt[s]*1.08)return s;const n=xt[xt.length-1];return xt.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function _v(e){const t=Math.trunc(e);return t<0?0:t<xt.length?xt[t]||xt[0]:xt[xt.length-1]*2**(t-(xt.length-1))}function Pv(e,t,n=Zo){const s=Array.isArray(e)?e.slice():[],r=Array.isArray(t)?t.slice():[],o=[],l=Math.max(1,Math.trunc(Number(n)||Zo));let c=0,d=0,u=0;for(;c<s.length||d<r.length;){if(u>=l&&d<r.length){o.push(r[d++]),u=0;continue}if(c<s.length){o.push(s[c++]),u+=1;continue}if(d<r.length){o.push(r[d++]),u=0;continue}break}return o}function Mv(e,t){const n=el(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Ev(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function ti(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),r=Number(e.correct||0);return t+n*4+s*2-r*.05}function Wt(e,t,n="jlpt_lesson"){if(!t)return!1;const r=tl(e,t).reduce((o,l)=>Cr(l,n)||o,!1);return r&&A(),r}function tl(e,t){const n=String(e||"").toUpperCase();return n==="N5"?mn(t):n==="N4"?zr(t):n==="N3"?Ur(t):n==="N2"?Hr(t):(t?.kanji||[]).map(s=>a.cards.find(r=>r.kanji===s&&String(r.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Kv(e){const t=a.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function Cu(){return ue(),a.progress.evaRoomQuiz}function xu(){const e=[a.cards||[],typeof Pt=="function"?Pt():[],typeof qe=="function"?qe():[],typeof We=="function"?We():[],typeof Xe=="function"?Xe():[]];return Lu(e.flat().filter(Boolean))}function Dv(){if(!a.progress)return[];ue();const e=new Set(Object.keys(a.progress.seenCards||{})),t=new Set(Object.keys(a.progress.seenKanji||{})),n=new Set(Object.keys(a.progress.lessonCompletions||{})),s=Fv(),r=xu().filter(o=>{if(!o?.id||!o.kanji||!Ue(o,"ru")||!Ue(o,"en"))return!1;const l=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Kv(o)||n.has(o.lessonId)||s.has(`${l}:${o.kanji}`)||s.has(o.kanji)});return Lu(r)}function Fv(){const e=new Set,t=(n,s)=>{if(!s)return;const r=String(n||"").toUpperCase();e.add(String(s)),r&&e.add(`${r}:${s}`)};return nl().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(r=>t(n.level,r)),Object.keys(s.completedLessons||{}).forEach(r=>{(n.lessonById(r)?.kanji||[]).forEach(l=>t(n.level,l))})}),e}function nl(){return[{level:"N5",course:Z,lessonById:_t,markStudied:Gs,markDifficult:Or},{level:"N4",course:X,lessonById:Rn,markStudied:Hs,markDifficult:Jr},{level:"N3",course:q,lessonById:Pn,markStudied:qs,markDifficult:Gr},{level:"N2",course:W,lessonById:En,markStudied:Ws,markDifficult:qr}]}function Lu(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Ue(n,"ru")}:${Ue(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function Ov(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function Bv(e){if(e.target.classList?.contains("detail-backdrop")){D("menu_close"),a.detailCardId=null,ce();return}if(e.target.classList?.contains("final-test-backdrop")){a.finalTestModal=null,a.finalTestBusy=!1,ce();return}if(e.target.classList?.contains("changelog-backdrop")){Ao();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(a.navMenu&&!t&&!e.target.closest("[data-action]")){a.navMenu=null,ce();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,r=n.dataset.id;if(Ov(n),!!lv(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-md<280)){if(s&&s.endsWith("-complete-lesson")){const l=`${s.split("-")[0]}:${r||""}`;if(ae.has(l)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(sl(s),requestAnimationFrame(()=>window.setTimeout(()=>Uv(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&ai(o)){ww(o);return}a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),et(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;a.navMenu=null,o==="writing"&&a.detailCardId&&(a.activeCardId=a.detailCardId),et(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&sf(n.dataset.shareSection||a.route,NC(n)).catch(()=>z(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&cf(!Ac()),s==="notification-center"){if(a.notificationPromptVisible){ff();return}(a.notificationPrompt?.docked||no("header"))&&so("header");return}if(s==="repeat-onboarding"){ol({force:!0});return}if(s==="onboarding-next"){Ju();return}if(s==="onboarding-prev"){Uu();return}if(s==="onboarding-continue"){fw();return}if(s==="onboarding-close"||s==="onboarding-skip"){Tr({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){om(n.dataset.speechKey||"");return}if(s==="contact-email"&&(a.navMenu=null,a.contactModal=!0,ce()),s==="copy-contact-email"&&of(an).then(o=>{z(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(a.contactModal=!1,ce()),s==="close-changelog"){Ao();return}if(s==="close-pwa-install-help"&&(a.pwaInstallHelpVisible=!1,ce()),s==="close-nav-menu"&&(a.navMenu=null,ce()),s==="close-final-test-modal"&&(a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,ce()),s==="final-test-focus-missing"){const o=n.dataset.focus||a.finalTestModal?.focusSelector||null;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=o,ce()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||a.finalTestModal?.level||"N5").toUpperCase();o==="N4"?tg(!0):o==="N3"?gg(!0):o==="N2"?Ng(!0):o==="N1"?Eg(!0):Jp(!0)}if(s==="final-test-next-level"){const o=U(n.dataset.nextLevel||""),l=String(n.dataset.nextLesson||"");if(!o||!l)return;a.finalTestModal=null,a.finalTestBusy=!1,a.pendingFocus=null,Wi(o,l);return}if(s==="scroll-page-edge"&&((n.dataset.direction||ll())==="up"?cs():hw()),s==="theme"&&XC(),s==="language"&&QC(),s==="sound"&&lf(),s==="toggle-ux-sound"&&VC(),s==="export"&&SC(),s==="apk-download"&&pe("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&fd.click(),s==="reset"&&WC(),s==="share-achievement"&&BC().catch(()=>z(_("shareFallback"))),s==="pwa-install"&&yx(),s==="pwa-later"&&Ec(),s==="notification-allow"&&Cx(),s==="notification-later"&&ro(),s==="mascot-click"&&pN(n.dataset.character),s==="eva-click"&&mm(),s==="eva-dialogue-skip"&&Jv(n),s==="dictionary-favorites-tab"&&(a.filters.favorites=n.dataset.favorites||"all",a.dictionaryVisibleCount=vr,ce()),s==="set-learn-jlpt"){a.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=bl();vp(o),a.activeCardId=null,ce()}if(s==="dictionary-load-more"&&(a.dictionaryVisibleCount+=sh,ce()),s==="toggle-favorite"&&VN(r),s==="eva-room-choice"&&Tb(n),s==="eva-question-answer"&&yb(n),s==="eva-room-reset"&&Rb(),s==="toggle-eva-autonomy"&&Bb(),s==="cycle-eva-autonomy"&&zb(),s==="eva-autonomy-room-mode"&&Jb(),s==="eva-autonomy-outfit-mode"&&Ub(),s==="eva-autonomy-next"&&fp(),s==="eva-autonomy-clear"&&Gb(),s==="eva-room-shop-open"&&(a.evaRoomShopOpen=!0,he("shop_opened"),ce()),s==="eva-room-shop-close"&&(a.evaRoomShopOpen=!1,ce()),s==="eva-bg-buy"&&_b(r),s==="eva-bg-select"&&Pb(r),s==="eva-sprite-buy"&&Mb(r),s==="eva-sprite-select"&&Eb(r),s==="shop-category"&&(a.shopFilters.category=n.dataset.category||"all",ce()),s==="shop-filter"&&(a.shopFilters.view=n.dataset.filter||"all",ce()),s==="shop-sort"&&(a.shopFilters.sort=n.dataset.sort||"featured",ce()),s==="shop-buy"&&fi(r),s==="shop-select"&&hi(r),s==="shop-clear-effect"&&mp(r),s==="shop-clear-item"&&Fb(r),s==="clear-writing"&&jN(),s==="undo-writing"&&SN(),s==="check-writing"&&NN(!0),s==="replay-writing"&&bm(),s==="play-writing-step"&&km(),s==="writing-step-prev"&&ym(-1),s==="writing-step-next"&&ym(1),s==="select-writing-step"&&$m(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&GS(Number(n.dataset.index)),s==="undo-sentence-tile"&&HS(),s==="clear-sentence"&&qS(),s==="check-sentence"&&WS(),s==="next-sentence"&&QS(),s==="reading-review-tile"&&gy(Number(n.dataset.index)),s==="reading-review-undo"&&my(),s==="reading-review-clear"&&fy(),s==="reading-review-check"&&Fp(),s==="reading-review-answer"&&py(n),s==="toggle-reading-translation"&&hy(),s==="add-custom-sentence"&&TS(),s==="edit-custom-sentence"&&RS(n.dataset.id),s==="delete-custom-sentence"&&_S(n.dataset.id),s==="cancel-custom-sentence-edit"&&PS(),s==="insert-jlpt-tile"&&bC(Number(n.dataset.index)),s==="undo-jlpt-tile"&&kC(),s==="clear-jlpt-practice"&&yC(),s==="check-jlpt-practice"&&$C(),s==="next-jlpt-practice"&&jC(),s==="kana-submit-exercise"&&Rk(n),s==="kana-writing-done"&&_k(n.dataset.course||"",n.dataset.lesson||""),s==="kana-srs"&&Ek(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="kana-lesson-card"&&Mk(n.dataset.course||"",n.dataset.lesson||"",n.dataset.kana||"",n.dataset.rating||"remember"),s==="kana-lesson-card-reset"&&Pk(n.dataset.course||"",n.dataset.lesson||""),s==="kana-toggle-romaji"&&Dk(),s==="play-kana-tts"&&Fk(n.dataset.text||""),s==="kana-download-pdf"&&pe("kana_pdf_download",{course:n.dataset.course||""}),s==="retry-jlpt-course-data"&&Nh(n.dataset.level||a.activeTextbookLevel||""),s==="n5-open-lesson"&&$y(r),s==="n5-overview"&&jy(),s==="n5-review"&&Sy(n.dataset.mode||null),s==="n5-answer"&&vy(n),s==="n5-check-input"&&wy(r),s==="n5-srs"&&Bp(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&ky(r),s==="n5-complete-lesson"&&yy(r),s==="jlpt-lesson-answer"&&by(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||r,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&xy(n),s==="n5-final-submit"&&Jp(),s==="n5-final-reset"&&Ly(),s==="n4-open-lesson"&&Zy(r),s==="n4-overview"&&e$(),s==="n4-review"&&t$(n.dataset.mode||null),s==="n4-kanji"&&n$(),s==="n4-grammar"&&s$(),s==="n4-reading"&&r$(),s==="n4-listening"&&a$(),s==="n4-final"&&i$(),s==="n4-answer"&&Hy(n),s==="n4-check-input"&&qy(r),s==="n4-srs"&&Yp(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&Wy(r),s==="n4-complete-lesson"&&Xy(r),s==="n4-grammar-complete"&&Qy(r,n.dataset.value||""),s==="n4-reading-complete"&&Vy(r,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&Yy(r,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&c$(n),s==="n4-final-submit"&&tg(),s==="n4-final-reset"&&d$(),s==="n3-open-lesson"&&E$(r),s==="n3-overview"&&K$(),s==="n3-review"&&D$(n.dataset.mode||null),s==="n3-kanji"&&F$(),s==="n3-grammar"&&O$(),s==="n3-reading"&&B$(),s==="n3-listening"&&z$(),s==="n3-final"&&J$(),s==="n3-answer"&&A$(n),s==="n3-check-input"&&T$(r),s==="n3-srs"&&dg(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&I$(r),s==="n3-complete-lesson"&&R$(r),s==="n3-grammar-complete"&&_$(r,n.dataset.value||""),s==="n3-reading-complete"&&P$(r,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&M$(r,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&H$(n),s==="n3-final-submit"&&gg(),s==="n3-final-reset"&&q$(),s==="n2-open-lesson"&&bj(r),s==="n2-overview"&&kj(),s==="n2-review"&&yj(n.dataset.mode||null),s==="n2-kanji"&&$j(),s==="n2-grammar"&&jj(),s==="n2-reading"&&Sj(),s==="n2-listening"&&Nj(),s==="n2-final"&&Cj(),s==="n2-answer"&&pj(n),s==="n2-check-input"&&gj(r),s==="n2-srs"&&$g(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&mj(r),s==="n2-complete-lesson"&&fj(r),s==="n2-grammar-complete"&&hj(r,n.dataset.value||""),s==="n2-reading-complete"&&vj(r,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&wj(r,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&Aj(n),s==="n2-final-submit"&&Ng(),s==="n2-final-reset"&&Tj(),s==="n1-open-lesson"&&sS(r),s==="n1-overview"&&rS(),s==="n1-review"&&aS(n.dataset.mode||null),s==="n1-kanji"&&iS(),s==="n1-grammar"&&oS(),s==="n1-reading"&&lS(),s==="n1-listening"&&cS(),s==="n1-final"&&dS(),s==="n1-answer"&&Qj(n),s==="n1-check-input"&&Vj(r),s==="n1-srs"&&_g(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&Yj(r),s==="n1-complete-lesson"&&Zj(r),s==="n1-grammar-complete"&&eS(r,n.dataset.value||""),s==="n1-reading-complete"&&tS(r,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&nS(r,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&gS(n),s==="n1-final-submit"&&Eg(),s==="n1-final-reset"&&mS(),s==="review-exercise-next"){ws(),a.pendingFocus="__scroll-top__",I();return}if(s==="play-kanji-audio"){const o=re(r)||re(a.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?Qm(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:(l={})=>Xm(o,l)}):Wm(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(wn(o)){if(nn("jlpt-level",{level:o}),!yt(o)){a.activeTextbookLevel=o,a.activeJlptLesson=o,et("textbooks",null,o),z(kn(o));return}a.activeJlptLesson=o,et("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(nn("jlpt-start",{level:n.dataset.jlpt||sn()}),Wi(n.dataset.jlpt||sn())),s==="social-link"&&pe(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:a.route,source:n.dataset.network||"social"}),s==="play-audio"&&uC(n.dataset.audio,n.dataset.label),s==="close-reward"&&(a.rewardModal=a.rewardQueue.shift()||null,a.rewardModal&&hm(a.rewardModal),Lt()),s==="set-goal"&&(a.progress.settings.dailyGoal=Number(n.dataset.goal),A(),z(`${_("dailyGoal")}: ${a.progress.settings.dailyGoal}`),I()),s==="buy-shop"&&fi(r),s==="start-due"&&(et("textbooks"),Fe()||z(Ke("eva","welcome"))),s==="home-lesson"){const o=U(n.dataset.level||"")||sn(),l=String(n.dataset.lessonId||"");Wi(o,l)}if(s==="home-review"&&(Fe()?et("review"):z(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&(nn("home-primary"),Zb()),s==="learning-path-node"&&(nn("learning-path",{lessonId:n.dataset.node||r}),wp(n.dataset.node||r)),s==="learning-path-back"&&ls(),s==="learning-path-choice"){const o=String(n.dataset.node||""),l=String(n.dataset.step||""),c=String(n.dataset.value||""),d=_r(o),u=d.steps.find(m=>m.id===l);if(!u||u.kind!=="quiz"||d.session.answers?.[l])return;d.session.answers[l]={selected:c,correct:c===u.answer,at:new Date().toISOString()},c===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],l])],d.session.updatedAt=new Date().toISOString(),A(),I()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||a.activeLearnNodeId||""),l=_r(o);if(!l.steps.length)return;const c=l.steps[l.session.stepIndex];if(c?.kind==="quiz"&&!l.session.answers?.[c.id])return;l.session.stepIndex=Math.min(l.session.stepIndex+1,l.steps.length),l.session.updatedAt=new Date().toISOString(),A(),I()}if(s==="learning-path-retry"){const o=String(n.dataset.node||a.activeLearnNodeId||""),c=(_r(o).session.mistakes||[]).slice();Cn().activeSession=Fo({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:c,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),A(),I()}if(s==="learning-path-continue"){const o=String(n.dataset.node||a.activeLearnNodeId||""),l=_r(o);rk(o,l.session,l.steps),ls();return}if(s==="start-lesson"||s==="select-lesson"){const o=a.lessons.find(l=>l.id===r);if(!o||!Je(o)){z(`${_("unlockedAt")} ${Hi(o)}`);return}if(a.activeLessonId=r,a.activeCardId=null,a.revealed=!1,it(),s==="start-lesson"){nn("legacy-lesson",{level:o.jlpt||"",lessonId:r}),he("lesson_start",{lessonId:r,jlpt:o.jlpt});const l=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(l)?(et("textbooks",null,l),a.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(l)}/${encodeURIComponent(o.id)}`),I()):ls(ln,o.id)}else I()}if(s==="show-answer"&&(xr(re(a.activeCardId),"show_answer"),a.revealed=!0,it(),Ae()),s==="check-reading"){const o=document.getElementById(`readingCheck-${r||a.activeCardId}`);o&&(a.readingCheck.value=o.value,a.readingCheck.cardId=r||a.activeCardId),Km()}if(s==="rate"&&aN(n.dataset.rating),s==="rate-kana-review"&&dm(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="open-card"&&(xr(re(r),"card_details"),a.detailCardId=r,I()),s==="open-kanji-page"&&Wv(r),s==="close-detail"&&(a.detailCardId=null,ce()),s==="study-card"){const o=re(r);if(!o)return;xr(o,"study_card"),a.activeLessonId=o.lessonId,a.activeCardId=o.id,a.revealed=!1,it(o.id),a.detailCardId=null,ls(ln,o.lessonId)}}}function zv(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;md=Date.now(),e.preventDefault(),sl(n),n==="eva-click"&&mm(),n==="eva-autonomy-next"&&fp()}function sl(e="activity"){a.evaRuntime&&(a.evaRuntime.lastPlayerActionAt=Date.now(),a.evaRuntime.memory=as(un(),a.evaRuntime.memory||{}),a.evaRuntime.memory.lastRoute=a.route,e.startsWith("eva")&&(a.evaRuntime.memory.lastInteractionDate=oe()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(a.evaRuntime.lastPlayerActionAt=Date.now()))}function Jv(e){if(!a.evaRuntime)return;const t=e?.dataset?.lineId||te().currentLine?.id||"";!t||a.evaRuntime.textRevealSkippedLineId===t||(a.evaRuntime.textRevealSkippedLineId=t,is(),I())}function Uv(e,t){if(!(!e||t?.disabled)&&!Gv(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){D("menu_open");return}if(e==="eva-room-shop-close"){D("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&ai(t.dataset.route)){D(a.navMenu===t.dataset.route?"menu_close":"menu_open");return}D("tab_switch");return}if(e==="nav-menu-route"){D("tab_switch");return}if(e==="close-nav-menu"){D("menu_close");return}if(e==="toggle-header-socials"){D(Ac()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){D("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){D("menu_close");return}if(e==="notification-center"){D("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){D("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){D("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){D("notification_soft");return}t?.matches("button, .btn, [role='button']")&&D("button_click"),e!=="toggle-header-socials"&&cf(!1)}}function Gv(e,t){return["learn","review"].includes(a.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function Au(e){var d;sl("input");const t=e.target.closest("[data-ux-volume]");if(t){nx(Number(t.value)/100);const u=document.querySelector("[data-ux-volume-label]");u&&(u.textContent=`${Math.round(Zi()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){a.readingCheck={cardId:n.dataset.id||a.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const u=_e(),m=s.dataset.sentenceDraft;u.customDraft=Za(u.customDraft||{}),m&&Object.prototype.hasOwnProperty.call(u.customDraft,m)&&(u.customDraft[m]=s.value,u.customMessage="",u.customStatus="",A());return}const r=e.target.closest("[data-kana-exercise-form] input");if(r){const u=r.closest("[data-kana-exercise-form]"),m=Sl(u?.dataset.course||"",u?.dataset.owner||"",u?.dataset.ownerType||"",u?.dataset.exercise||""),f=String(r.name||"").replace(/^kana-/,"");m&&f&&((d=a.kanaExerciseDrafts)[m]||(d[m]={}),a.kanaExerciseDrafts[m][f]=r.value);return}const o=e.target.closest("[data-filter]");if(!o)return;const l=o.dataset.filter,c=o.selectionStart;a.filters[l]=o.value,a.dictionaryVisibleCount=vr,I(),requestAnimationFrame(()=>{const u=document.getElementById(o.id);u&&(u.focus(),typeof c=="number"&&"setSelectionRange"in u&&u.setSelectionRange(c,c))})}function Hv(e){if(gw(e)||qv(e))return;if(e.key==="Escape"&&(a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal||a.navMenu)){a.detailCardId=null,a.rewardModal=null,a.finalTestModal=null,a.contactModal=!1,a.pwaInstallHelpVisible=!1,a.navMenu=null,a.changelogModal?Ao():I();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),a.readingCheck.value=t.value,a.readingCheck.cardId=t.dataset.id||a.activeCardId,Km())}function qv(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(Da=`${Da}${e.key.toLowerCase()}`.slice(-me.length),Da!==me)?!1:(Da="",Tu(5e3),!0)}function Tu(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return a.progress?(H(0,t,"cheat:moon_farm"),Q(),A(),D("moon_fragment_gain"),z(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),I(),a.progress.moonFragments):0}function ls(e=on,t=null,n=null){a.route="learn",a.activeLearnView=e,a.activeLearnNodeId=e===Jt&&String(t||"")||null,a.activeLearnLegacyLessonId=e===ln&&String(t||"")||null;const s=e===Jt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===ln&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),a.activeTextbookLevel=null,a.activeTextbookSubroute=null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=n,a.evaRoomShopOpen=!1,it(),At(),ce()}function et(e,t=null,n=null){if(e==="learn"){ls(on,null,t);return}if(!Kf(e)){const r=String(e||"");gr(ge("hash","unknown-route",r,r?[r]:[])),lt(r?`#${encodeURIComponent(r)}`:"#not-found"),a.pendingFocus=t,a.navMenu=null,it(),At(),Ae();return}const s=a.route;if(a.route=e,a.routeMatch=null,a.routeNotFound=null,s!==a.route&&(s==="review"||a.route==="review")&&(a.reviewSession=null),a.route==="textbooks"){const r=n?String(n):"",o=U(r),l=fe(r)?r.toLowerCase():"",c=o||l;if(r&&!c){gr(ge("hash","invalid-parameter",`textbooks/${r}`,["textbooks",r])),lt(`#textbooks/${encodeURIComponent(r)}`),a.pendingFocus=t,Ae();return}a.activeTextbookLevel=c||null,a.activeTextbookSubroute=null}else if(a.route==="jlpt-lesson"){const r=n?String(n).toUpperCase():a.activeJlptLesson||Bx()||"";if(r&&!U(r)){gr(ge("hash","invalid-parameter",`jlpt-lesson/${r}`,["jlpt-lesson",r])),lt(`#jlpt-lesson/${encodeURIComponent(r)}`),a.pendingFocus=t,Ae();return}a.activeJlptLesson=r||null}else a.activeTextbookLevel=null,a.activeTextbookSubroute=null;if(a.route!=="review"&&ws(),a.route==="textbooks")lt($f(a.activeTextbookLevel||"",a.activeTextbookSubroute||""));else{const r=a.route==="learn"?"#learn":a.route==="jlpt-lesson"&&a.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(a.activeJlptLesson)}`:`#${a.route}`;lt(r)}a.route!=="kanji"&&(a.kanjiPageId=null),a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=t,a.route!=="eva-room"&&(a.evaRoomShopOpen=!1),it(),At(),Ae(),jr(a.route)&&Fa({route:a.route,delay:0}),a.route==="eva-room"&&he("room_opened")}function Wv(e){const t=re(e);if(!t)return;a.route="kanji",a.kanjiPageId=t.id,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.pendingFocus=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.evaRoomShopOpen=!1,it();const n=`#kanji/${encodeURIComponent(t.id)}`;lt(n),At(),Ae()}function Xv(){return a.routeMatch||ya(pr())}function Qv(){const e=Xv();if(!dd){pA(e,a),dd=!0,Iu(e);return}gA(e,a).sent&&Iu(e)}function Iu(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){pe("review_open",{route:"review"});return}if(e.route==="kanji"){pe("kanji_open",{route:"kanji",cardId:t.cardId||a.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){pe("lesson_open",{route:"jlpt-lesson",level:t.level||a.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){pe("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){pe("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}Vv(n)&&pe("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}if(e.route==="textbooks"&&t.course){const n=String(t.subroute||"");n?n==="final"||n==="final-test"?pe("kana_final_test_start",{route:"textbooks",course:t.course}):/^lesson-\d+$/i.test(n)&&pe("kana_lesson_open",{route:"textbooks",course:t.course,lessonId:n}):pe("kana_course_open",{route:"textbooks",course:t.course})}}function Vv(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function Ru(){const e=lh.begin(a.route);Pa=!0,Ma=null,EN();try{Tw(),Zv(),Qv();let t="";if(a.route===Wc&&(t=Lr(a.routeNotFound)),a.route==="home"&&(t=Rw()),a.route==="download"&&(t=Nw()),a.route==="about"&&(t=xw()),a.route==="learn"&&(t=Yb(),a.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(wc)),a.route==="review"&&(t=yS(),a.pendingFocus!=="sentence-practice"&&requestAnimationFrame(wc)),a.route==="dictionary"&&(t=v0()),a.route==="kanji"&&(t=$0()),a.route==="writing"&&(t=F0(),requestAnimationFrame(bN)),a.route==="stats"&&(t=J0(),requestAnimationFrame(vm)),a.route==="achievements"&&(t=H0()),a.route==="eva-room"&&(t=Kw()),a.route==="jlpt-lesson"&&(t=ok()),a.route==="textbooks"&&(t=lk()),t||(t=Lr(ge("hash","unknown-route",String(a.route||""),a.route?[String(a.route)]:[]))),!e.isCurrent())return;jn.innerHTML=`${t}${$w()}${ew()}`,document.body.classList.toggle("modal-open",!!(a.detailCardId||cm()||a.finalTestModal||a.contactModal||a.pwaInstallHelpVisible||a.changelogModal)),sN(),requestAnimationFrame(()=>{Aw(),cl(),dw()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${a.route} build=${R}`,t?.stack||t),jn.innerHTML=ni(t))}finally{Pa=!1}}function ce(){Is||(Is=requestAnimationFrame(()=>{Is=0,Ru()}))}function Ae(){Is&&(cancelAnimationFrame(Is),Is=0),Ru()}function Xt(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function Lt(){if(typeof window>"u"){Ae();return}const e=window.scrollX,t=window.scrollY;Ae(),Xt(e,t),requestAnimationFrame(()=>{Xt(e,t),requestAnimationFrame(()=>Xt(e,t))}),window.setTimeout(()=>Xt(e,t),120),window.setTimeout(()=>Xt(e,t),320)}function I(){ce()}function ni(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(a.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function Lr(e=a.routeNotFound){Yv();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},r=e?.raw||location.pathname||location.hash||"";return`
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
    `}function Yv(){document.title=(p()==="ru","404 — Flash Kanji"),_u("robots","noindex, follow"),Pu("/404.html")}function Zv(){a.route!==Wc&&(document.title=uh,_u("robots","index, follow"),Pu("/"))}function _u(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function Pu(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function ew(){const e=`${Lw()}${B0()}${X0()}${e0()}${Q0()}${V0()}${Y0()}${Z0()}${eN()}${vw()}`;return e?`<div class="modal-layer">${e}</div>`:""}function Mu(){return be?.isConnected?be:document.body?(be||(be=document.createElement("div"),be.className="flash-kanji-onboarding-root",be.setAttribute("role","presentation"),be.setAttribute("aria-hidden","false")),be.isConnected||document.body.appendChild(be),be):null}const rl=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],si={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Eu(){try{return localStorage.getItem(Zc)==="true"}catch{return!1}}function tw(){try{return localStorage.getItem(td)||""}catch{return""}}function ri(e){try{localStorage.setItem(td,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function nw(e=a.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function sw(e=!1){const t=tw();return t==="returning"||t==="completed"?t:Eu()?(ri("completed"),"completed"):e?(ri("returning"),"returning"):(ri("new"),"new")}function Ku(){return!Eu()}function rw(){try{localStorage.getItem(ed)==="true"&&localStorage.removeItem(ed)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function aw(){try{localStorage.setItem(Zc,"true"),ri("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function Du(){return Nt}function Ar(){return rl.length}function al(){return rl[le(Gt,0,Ar()-1)]||rl[0]}function iw(e=al()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function ow(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Fu(e=al()){for(const t of iw(e)){const s=Array.from(document.querySelectorAll(t)).find(r=>ow(r));if(s)return s}return null}function Ou(e,t=null){return typeof e=="function"?Ou(e(t),t):h(e||{ru:"",en:""})}function lw(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function cw(){return!(Nt||!a.progress||!a.i18n||!a.lessons.length||!document.body||document.visibilityState!=="visible"||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.navMenu)}function il(e=!1,t=th){clearTimeout(Rs),!(!e&&!Ku())&&(Rs=window.setTimeout(()=>{Rs=0,ol({force:e})},t))}function ol(e={}){const t=!!e.force;let n=!1;if(Nt){if(!t)return!0;Tr({completed:!1,silent:!0})}if(!t&&!Ku())return!1;if(!cw())return il(t,nd),!1;clearTimeout(Rs);try{vo=document.activeElement instanceof HTMLElement?document.activeElement:null,Nt=!0,Ce="step",Gt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(r){console.warn("Could not make the app shell inert.",r)}}return Mu(),Ds(),Bu(),n=!0,window.addEventListener("scroll",xn,{passive:!0}),window.addEventListener("resize",xn),window.addEventListener("orientationchange",xn),xn(),zu(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),Tr({completed:!1,silent:!0}),n||il(t,nd),!1}}function Tr(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(Rs),Rs=0,cancelAnimationFrame(br),br=0,window.removeEventListener("scroll",xn),window.removeEventListener("resize",xn),window.removeEventListener("orientationchange",xn),Ht&&Ht.classList.remove("is-onboarding-target"),Ht=null,Nt=!1,Ce="step",Gt=0,be&&(be.remove(),be=null,Ze=null,Te=null),document.body.classList.remove("onboarding-open");const r=document.querySelector(".app-shell");if(r){r.removeAttribute("aria-hidden");try{r.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&aw(),n||(s?et(s):I()),vo?.focus&&requestAnimationFrame(()=>{try{vo.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function Ds(){if(!Mu())return;const e=Ce==="final"?null:al(),t=Ce==="final"?null:Fu(e),n=Ce==="final"?si.title:e.title,s=Ce==="final"?si.text:Ou(e.text,t),r=Ce==="final"?p()==="ru"?"Готово":"Done":`${Gt+1} ${p()==="ru"?"из":"of"} ${Ar()}`,o=h(n),l=h(s),c=Pi("eva","calm","welcome"),d=Ar();be.classList.toggle("is-final",Ce==="final"),be.classList.toggle("has-target",!!t),be.dataset.view=Ce;const u=Ce==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(h(si.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(h(si.close))}</button>
      `:Gt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;be.innerHTML=`
      ${Ce==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${Ce==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${Ce==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
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
    `,Ze=Ie("[data-onboarding-spotlight]",be),Te=Ie(".flash-kanji-onboarding-dialog",be),Ht&&Ht!==t&&Ht.classList.remove("is-onboarding-target"),Ht=t||null,Ht&&Ht.classList.add("is-onboarding-target"),Te&&(Te.dataset.totalSteps=String(d)),xn()}function xn(){Nt&&(br||(br=requestAnimationFrame(()=>{br=0,Bu()})))}function Bu(){if(!Nt||!be||!Te)return;const e=Ce==="final"?null:Ht||Fu();lw();const t=window.innerWidth,n=window.innerHeight;if(Te.style.maxWidth=`${Math.min(nh,Math.max(280,t-16))}px`,Te.style.maxHeight=`${Math.max(180,n-24)}px`,Te.style.left="50%",Te.style.top="50%",Te.style.transform="translate(-50%, -50%)",Te.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&Ze?(Ze.hidden=!1,Ze.style.left=`${Math.round(s.left-12)}px`,Ze.style.top=`${Math.round(s.top-12)}px`,Ze.style.width=`${Math.round(s.width+12*2)}px`,Ze.style.height=`${Math.round(s.height+12*2)}px`,Ze.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):Ze&&(Ze.hidden=!0)}else Ze&&(Ze.hidden=!0);be.style.visibility="visible",zu()}function dw(){Nt&&Ds()}function zu(){if(!Te)return;const e=Te.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Te.querySelectorAll("button"),n=e||t[0]||Te;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function uw(){return Te?Array.from(Te.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function pw(e=1){const t=uw();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),r=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[r]?.focus?.()}function gw(e){return Nt?e.key==="Tab"?(e.preventDefault(),pw(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),Tr({completed:Ce==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),Ju(),!0):e.key==="ArrowLeft"?(e.preventDefault(),Uu(),!0):!1:!1}function Ju(){if(!Nt)return;const e=Ar()-1;if(Ce!=="final"){if(Gt<e){Gt+=1,Ds();return}Ce="final",Ds()}}function Uu(){if(Nt){if(Ce==="final"){Ce="step",Gt=Ar()-1,Ds();return}Gt>0&&(Gt-=1,Ds())}}function mw(e=null){Tr({completed:!0,routeTo:e})}function fw(){mw("textbooks")}function cs(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function At(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>cs()))}function hw(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function Gu(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function ll(){return Gu()?window.scrollY>32?"up":"down":null}function vw(){const e=ll()||"down",t=Gu()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",r=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(r)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function cl(){const e=Ie('[data-action="scroll-page-edge"]');if(!e)return;const t=ll();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const r=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",r),e.setAttribute("title",r)}function ai(e){return e!=="review"&&Hu(e).length>1}function ww(e){if(!ai(e)){et(e);return}a.navMenu=a.navMenu===e?null:e,ce()}function Hu(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:kl(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function dl(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":_(e)}function bw(){return["home","textbooks","review","dictionary","download","stats","about"]}function kw(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function yw(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(kw(e))}</span>
          <span>${i(dl(e))}</span>
        </button>
      </li>
    `}function $w(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",r=e?"Соцсети":"Social";return`
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
                ${bw().map(o=>yw(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(r)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(jt.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${nf("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(jt.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${nf("instagram")}</span>
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
    `}function jw(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function Sw(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function Nw(){const e=jw();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(Xf)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(Vf)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(Sw).join("")}
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
              <a class="btn ghost" href="${g(Qf)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function Cw(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function xw(){const e=Cw();return`
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
    `}function Lw(){const e=Hu(a.navMenu);if(!e.length)return"";const t=a.navMenu,n=t?dl(t):"";return`
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
    `}function Aw(){if(!a.pendingFocus)return;const e=a.pendingFocus;if(a.pendingFocus=null,e==="__scroll-top__"){At();return}const t={"lesson-card":".study-card, .daily-lesson-card","kana-character-card":"[data-section='kana-character-study-card']","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function Tw(){xo(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===a.route||n==="learn"&&a.route==="textbooks"||n==="stats"&&a.route==="achievements"||n==="dictionary"&&a.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&ai(n)),t.setAttribute("aria-expanded",a.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const r=t.querySelector("small");r&&n&&(r.textContent=dl(n))});const e=Ie('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),xc(),tx(),Lc(),Iw()}function Iw(){const e=Ie("#sidebarProgressBar"),t=Ie("#sidebarProgressLabel"),n=Ie("#sidebarProgressPercent"),s=Ie("#sidebarProgressNote"),r=Ie("#sidebarUserAvatar"),o=Ie("#sidebarUserTitle"),l=Ie("#sidebarUserSubtitle"),c=yn(),d=Nu(),u=Fe(),m=Math.max(1,Number(a.progress?.level||1)),f=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=f),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${f}%`),s&&(s.textContent=u>0?`${u} ${de().reviewQueue} · ${d.title||de().mapHint}`:`${d.title||de().mapHint}${d.summary?` · ${d.summary}`:""}`),r&&(r.textContent=`N${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),l&&(l.textContent=`${de().level} ${m} · ${a.progress?.streak?.current||0} ${de().streak}`)}function Rw(){a.n5Textbook?.items?.length||Vo();const e=_w(),t=bv(),n=Fe(),s=Nu(),r=Lv(),o=de(),l=yn(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:a.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:a.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:a.progress.moonFragments}],m=mf();return`
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
          ${r.map(Av).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            ${xv()}
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"Маршрут N5":"N5 route")}</span>
                  <h2>${i(d?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${i(d?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${Tv().map(Iv).join("")}
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
                ${u.map(Rv).join("")}
              </div>
            </article>
            ${va()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${ur()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Mw(e)}
          </aside>
        </section>
      </section>
    `}function _w(){Pw();const e=te(),t=e.currentLine||a.evaRuntime?.currentPhrase||null,n=mi(),s=h(cr("eva").name||{ru:"Ева",en:"Eva"}),r=a.evaRuntime?.mood||e.mood||Qt().mood,o=a.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",l=t?.state||a.evaRuntime?.presenceState||(n?"wait_choice":"speak"),c=zs(t?.sprite||a.evaRuntime?.currentSkin||ul());return{line:t,question:n,speaker:s,mood:r,emotion:o,presenceState:l,sprite:c}}function Pw(){ue();const e=te();return e.currentLine?.text||a.evaRuntime?.currentPhrase?.text?e.currentLine||a.evaRuntime.currentPhrase:(hp("manual"),te().currentLine||a.evaRuntime?.currentPhrase||null)}function Mw(e){const t=An(),n=Ln(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",r=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=r.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${Xu(h(r.text||{ru:"Я здесь.",en:"I'm here."}),o)}
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
          <img class="${g(Wu({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function qu(e){return e.line?.state||a.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function Wu(e){const t=["eva-vn-sprite"],n=qu(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(a.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function Ew(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function Xu(e,t=""){const n=Ew(e),r=`eva-dialogue-text ${a.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((l,c)=>`<span class="eva-line-piece" style="--i:${c}">${i(l)}</span>`).join(" "):i(e);return`<p class="${r}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function Kw(){ue(),Fs(),Er(),Q();const e=Ab(),t=e.node,n=pn()||e.bg||Os(t.background),s=e.sprite||e.spriteSrc||zs(e.spriteId||Tn(t.sprite)),r=An(),o=Ln(),l=Array.isArray(t.choices)?t.choices:[],c=qu(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${Zw()}
        ${Qw(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(c)}" data-eva-state="${g(c)}" data-eva-mood="${g(e.mood||Qt().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:url('${g(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(h(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(Wu(e))}" src="${g(s)}" alt="${g(h(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${Fw(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(h(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(h(n.title||{}))}</span>
            </div>
            ${Xu(h(t.text||{}),d)}
            ${e.isAutonomy?Vw(r):`
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
          <button class="btn" type="button" data-action="eva-room-reset">${i(r.restart)}</button>
          <button class="btn" type="button" data-action="route" data-route="textbooks">${i(r.study)}</button>
          <button class="btn" type="button" data-action="route" data-route="review">${i(r.review)}</button>
        </div>

        ${a.evaRoomShopOpen?Dw():""}
      </section>
    `}function Dw(){const e=An();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${Qu({closable:!0})}
      </aside>
    `}function Fw(e={}){const t=Ow(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(Tt(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function Ow(e={}){const t=e.decoration||te().currentDecoration||a.customization?.selected?.decoration||a.customization?.selected?.frame,n=ke(t);return!n||n.type!=="decoration"||!Vt(n.id)?null:n}function Qu(e={}){const t=ds(),n=Uw(),s=ut().filter(r=>Vt(r.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${a.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${ut().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(An().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${Bw().map(r=>`
            <button class="${a.shopFilters.category===r.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(r.id)}">
              ${i(h({ru:r.title_ru,en:r.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${zw().map(r=>`
            <button class="${a.shopFilters.view===r.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${Jw().map(r=>`
            <button class="${a.shopFilters.sort===r.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(r.id)}">
              ${i(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(Gw).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${rm({limit:6})}
        </div>
      </div>
    `}function Bw(){return a.customizationCatalog?.categories?.length?a.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function zw(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function Jw(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function Uw(){const e=a.shopFilters.category||"all",t=a.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=ut().filter(r=>e==="all"||r.type===e);return t==="available"&&(s=s.filter(r=>gp(r)==="available")),t==="owned"&&(s=s.filter(r=>Vt(r.id))),t==="new"&&(s=s.filter(r=>!a.customization?.seen?.includes(r.id))),a.shopFilters.sort==="price"&&(s=[...s].sort((r,o)=>r.price-o.price)),a.shopFilters.sort==="rarity"&&(s=[...s].sort((r,o)=>(n[o.rarity]||0)-(n[r.rarity]||0)||r.price-o.price)),s}function Gw(e){const t=gp(e),n=ds(),s=n.status[t]||t,r=Ob(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}" data-item-id="${g(e.id)}" data-shop-status="${g(t)}">
        <div class="custom-shop-preview">
          <img src="${g(qw(e))}" alt="${g(Tt(e))}" loading="lazy" onerror="this.onerror=null;this.src='assets/logo.webp';this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(Ww(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(Tt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(Hw(e))}</p>
          ${e.type==="outfit"&&Vu(e)?`<blockquote class="custom-shop-phrase">${i(Vu(e))}</blockquote>`:""}
          ${r?`<small class="custom-shop-unlock">${i(r)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(Xw(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function ds(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function Tt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function Hw(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function qw(e){return e?.preview||e?.asset||"assets/logo.webp"}function Vu(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function Ww(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function Xw(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function Qw(e){An();const t=Ln(),n=te(),s=e.bg||pn(),r=Zu(e.spriteId||a.progress.selectedEvaSprite),o=ke(a.customization?.selected?.effect),l=ke(e.decoration||n.currentDecoration),c=Yw(e.mood||n.mood),d=Cu();return`
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
          <span>${i(h(s.title||{}))}</span>
          <span>${i(h(r?.title||{ru:"Ева",en:"Eva"}))}</span>
          ${l?`<span>${i(Tt(l))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(Tt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function Vw(e){const t=Ln(),n=mi();return n?.id?`
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
    `}function Ln(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function Yw(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function Zw(){const e=Qt(),t=An(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
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
    `}function An(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function ue(){var t,n,s,r,o,l,c,d,u,m,f,v,b;(t=a.progress).seenCards||(t.seenCards={}),(n=a.progress).seenKanji||(n.seenKanji={}),(s=a.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),a.progress.unlockedBackgrounds.includes("bg_study_hub")||a.progress.unlockedBackgrounds.unshift("bg_study_hub"),(r=a.progress).selectedEvaRoomBackground||(r.selectedEvaRoomBackground="bg_study_hub"),(o=a.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(C=>{a.progress.unlockedEvaSprites.includes(C)||a.progress.unlockedEvaSprites.push(C)}),(l=a.progress).selectedEvaSprite||(l.selectedEvaSprite="idle");const e=hu(mu(),a.progress.evaAutonomy||{});if((c=a.progress).evaAutonomy||(c.evaAutonomy={}),Object.keys(a.progress.evaAutonomy).forEach(C=>delete a.progress.evaAutonomy[C]),Object.assign(a.progress.evaAutonomy,e),a.evaRuntime||(a.evaRuntime=qt()),(d=a.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=a.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=a.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(f=a.progress.evaRoomDialogueProgress).visited||(f.visited={}),a.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(a.progress.evaRoomDialogueProgress.lineHistory)?a.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(v=a.progress).evaRoomQuiz||(v.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(b=a.progress.evaRoomQuiz).rewarded||(b.rewarded={}),a.progress.evaRoomQuiz.history=Array.isArray(a.progress.evaRoomQuiz.history)?a.progress.evaRoomQuiz.history.slice(0,40):[],!a.progress.evaRelationship)a.progress.evaRelationship=Ho();else{const C=fu(Ho(),a.progress.evaRelationship);Object.keys(a.progress.evaRelationship).forEach(j=>delete a.progress.evaRelationship[j]),Object.assign(a.progress.evaRelationship,C)}}function Qt(){return ue(),a.progress.evaRelationship}function Fs(){if(!a.progress||!a.cards.length)return!1;ue();const e=a.progress.evaRelationship;let t=!1;const n=oe(),s=e.lastDecayDate||n,r=Math.max(0,Wn(s,n));if(r>0){const x=a.progress.streak?.lastStudyDate,J=x?Wn(x,n):r+1;!x||J>1?(ye({warmth:-Math.min(10,r*1.2),trust:-Math.min(14,r*1.6),discipline:-Math.min(22,r*3.4)},"study_gap",{silent:!0}),t=!0):(a.progress.streak?.current||0)>0&&(ye({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=pc(),l={learned:o.learned,mastered:o.mastered,reviews:gc(),lessons:Object.keys(a.progress.lessonCompletions||{}).length,streak:Math.max(a.progress.streak?.current||0,a.progress.streak?.best||0),wrong:a.progress.totalWrong||0,writing:a.progress.writingPractice?.completed||0,sentence:Object.keys(a.progress.sentencePractice?.completed||{}).length},c=e.lastKnown||{},d=x=>Math.max(0,Number(l[x]||0)-Number(c[x]||0)),u={},m=d("reviews"),f=d("learned"),v=d("mastered"),b=d("lessons"),C=d("streak"),j=d("wrong"),L=d("writing"),y=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),f&&(u.trust=(u.trust||0)+Math.min(20,f*.5),u.curiosity=(u.curiosity||0)+Math.min(16,f*.35)),v&&(u.trust=(u.trust||0)+Math.min(16,v*1.2),u.warmth=(u.warmth||0)+Math.min(8,v*.5)),b&&(u.warmth=(u.warmth||0)+Math.min(12,b*2),u.discipline=(u.discipline||0)+Math.min(10,b*1.5)),C&&(u.discipline=(u.discipline||0)+Math.min(15,C*3),u.warmth=(u.warmth||0)+Math.min(8,C)),L&&(u.curiosity=(u.curiosity||0)+Math.min(10,L*.8)),y&&(u.trust=(u.trust||0)+Math.min(10,y*.8)),j&&(u.discipline=(u.discipline||0)-Math.min(6,j*.12)),Object.keys(u).length&&(ye(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,Yu(),t}function ye(e={},t="relationship",n={}){ue();const s=a.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(r=>{typeof e[r]>"u"||(s[r]=ao(le(Number(s[r]||0)+Number(e[r]||0),0,100),1))}),Yu(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function Yu(){const e=a.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(a.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function ul(){const e=a.customization?.selected?.outfit||a.progress?.shop?.equipped?.outfit||null,n=ke(e)?.spriteId||a.progress?.selectedEvaSprite||"idle";return a.evaSprites?.[n]&&oi(n)?n:"idle"}function eb(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Tn(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=ul(),r=eb(n),o=n&&!r?n:s,l=a.evaRuntime?.mood||Qt().mood,c=t||(r?n:null)||a.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[l]||"idle",d=ab(c),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(v=>tb(v,d)),...u,...d,"idle","default"].filter(Boolean).find(v=>a.evaSprites?.[v]&&(oi(v)||!o||oi(o)))||"idle"}function tb(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>a.evaSprites?.[o]),r=rs(n);return!r||r.defaultOwned||s.length<=1?s:nb(s)}function nb(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=$o%t.length;return[...t.slice(n),...t.slice(0,n)]}function sb(){const e=ul(),t=rs(e);return!t||t.defaultOwned?!1:Object.keys(a.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function rb(){yo&&window.clearInterval(yo),yo=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==$o&&($o=e,!(document.hidden||!sb())&&(a.route==="home"||a.route==="eva-room")&&I())},3e4)}function ab(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=ib(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function ib(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function te(){return ue(),a.progress.evaAutonomy}function ii(){const e=te();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function pl(){const e=a.evaBackgrounds?.length?a.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(s=>s.id)),n=ut().filter(s=>s.type==="background"&&!t.has(s.id)).map(s=>({id:s.id,title:{ru:s.title_ru,en:s.title_en},file:s.asset||s.preview,price:s.price,defaultUnlocked:s.defaultOwned}));return[...e,...n]}function Os(e){return pl().find(t=>t.id===e)||pl()[0]}function pn(){ue();const e=a.progress.selectedEvaRoomBackground||a.customization?.selected?.background;return Os(e)||Os("bg_study_hub")}function ob(e){const t=Os(e);return t?t.defaultUnlocked||t.price===0||a.progress.unlockedBackgrounds.includes(t.id):!1}function lb(){const e=ut().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>a.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function Zu(e){return lb().find(t=>t.id===e)}function oi(e){if(!e)return!1;const t=Zu(e);return!!(t?.defaultUnlocked||t?.price===0||a.progress.unlockedEvaSprites?.includes(e)||a.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function li(e){ue();const t=a.evaRuntime?.mood||gn(Re()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],r=pl().filter(l=>ob(l.id));return s.map(l=>r.find(c=>c.id===l)).find(Boolean)||Ye(r)||pn()}function ci(e){ue();const t=a.evaRuntime?.mood||gn(Re()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(r=>oi(r)&&a.evaSprites?.[r])||a.progress.selectedEvaSprite||"idle"}function cb(e){return e==="generated_line"?db():a.evaRoomDialogues.find(t=>t.id===e)||a.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function db(){ue();const e=An(),t=a.progress.evaRoomDialogueProgress.generatedLine||dp("adaptive");return a.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||pn().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function di(){return Array.isArray(a.evaRoomLines)?a.evaRoomLines:[]}function ub(e="auto"){const t=a.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function ep(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function pb(e,t=Re()){const n=e?.conditions||{},s=(o,l)=>{const c=ep(l);return!c.length||c.includes(String(o))},r=(o,l)=>{const c=ep(l);return!c.length||c.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!r(t.activeSkin,n.activeSkin)||!r(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function gb(e="auto",t=Re()){return null}function ui(e,t="auto",n=Re()){if(!a.evaRuntime||!e?.id)return;a.evaRuntime.memory=as(un(),a.evaRuntime.memory||{});const s=a.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const r=e.category||t;s.recentTopics=[r,...(s.recentTopics||[]).filter(o=>o!==r)].slice(0,20),s.lastRoute=n.route||a.route,s.lastInteractionDate=oe(),s.lastKnownMood=a.evaRuntime.mood||Qt().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function tp(e){if(!a.evaRuntime)return;a.evaRuntime.memory=as(un(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory;t.lastRoute=a.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=oe()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=a.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function mb(){return{quiet:12e4,normal:Xn(45e3,12e4),active:45e3}}function fb(){ko&&window.clearInterval(ko),ko=window.setInterval(hb,5e3)}function Bs(){const e=te(),t=mb()[e.frequency]||Xn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function hb(){if(document.hidden||!a.progress||!a.evaRuntime)return!1;const e=Re(),t=a.evaRuntime,n=te(),s=Date.now();let r=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return he("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=gn(e),l=pi(e,o);(o!==t.mood||l!==t.emotion)&&(t.mood=o,t.emotion=l,n.mood=o,n.emotion=l,t.lastEmotionChangeAt=s,t.cooldowns.emotion=Xn(15e3,3e4),r=!0)}return a.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",Bs(),r=!0):Ir("timer",{context:e})&&(r=!0)),r&&(is(),A(),a.route==="eva-room"&&I()),r}function Re(e={}){const t=a.progress?vn():{},n=a.evaRuntime||qt(),s=as(un(),n.memory||{}),r=new Date().getHours();return vu(),{route:a.route,hour:r,timeOfDay:r<5?"late_night":r<11?"morning":r<18?"day":r<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(a.progress?.streak?.current||0),level:Number(a.progress?.level||1),moonFragments:Number(a.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||a.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||a.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-Co,lastEvent:n.lastEvent,dueReviews:a.progress?Fe():0,shopOpen:!!a.evaRoomShopOpen,...e}}function gn(e=Re()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function pi(e=Re(),t=gn(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return Ye(["approve","happy","soft_smile"]);if(n==="answer_wrong")return Ye(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return Ye(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return Ye(s[t]||s.neutral)}function Ir(e="auto",t={}){if(!a.progress||!ii()||!t.force&&a.route!=="eva-room")return!1;const n=te(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const r=t.context||Re({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=gn(r),l=np(e)||gl(e);if(!l)return!1;a.evaRuntime||(a.evaRuntime=qt()),a.evaRuntime.mood=o;const c=l.emotion||pi(r,o,e),d=li(l),u=Tn(ci(l),c),m=ml(l),f=fl(l),v=op(r,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:u,background:d.id,decoration:m,effect:f,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=v,n.currentDecoration=m,n.currentEffect=f,n.mood=o,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(b=>b!==l.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=qt()),Object.assign(a.evaRuntime,{mood:o,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:v,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:f,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:v?s:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...a.evaRuntime.cooldowns,emotion:Xn(15e3,3e4),phrase:Xn(45e3,12e4),question:Xn(3*6e4,7*6e4),visual:Xn(10*6e4,15*6e4)}}),ui(l,e,r),hl(u,d.file),Bs(),ye(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),is(),$n(),!0}function np(e){const t=gb(e,Re({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],r=new Set(te().recentLineIds||[]),o=s.filter(c=>!r.has(`${e}_${Pe(`${c.ru||c.en}`)}`)),l=Ye(o.length?o:s);return l?{id:`${e}_${Pe(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function sp(){const e=te(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function vb(e="auto"){const t=Qt(),n=new Date().getHours(),s=Fe(),r=vn(),o=[];return o.push(...ub(e)),(e==="return"||!t.lastInteractionDate&&a.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(r.reviews||0)===0&&o.push("fis_study","study"),(a.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(a.progress.rewardHistory?.length||a.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function gl(e="auto"){ue(),Fs();const t=Qt(),n=Re({lastEvent:{type:e}}),s=te().currentLine?.id,r=new Set([s,...te().recentLineIds||[],...a.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(a.evaAutonomyLines)?a.evaAutonomyLines:[],l=vb(e),c=(u,m=!1)=>o.filter(f=>{if(!(f.category===u||(f.tags||[]).includes(u))||!m&&r.has(f.id)||!up(f,t)||!pb(f,n))return!1;const b=Array.isArray(f.moods)?f.moods:[];return!b.length||b.includes(t.mood)});for(const u of l){const m=c(u);if(m.length)return Ye(m)}for(const u of l){const m=c(u,!0);if(m.length)return Ye(m)}const d=o.filter(u=>!r.has(u.id));return Ye(d.length?d:o)}function he(e,t={},n={}){if(!e)return;Er(),n.skipAchievements||Q({silent:!0});const s={type:ap(e),payload:t||{},at:Date.now()};rp(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:he});function rp(e={}){if(!e.type||!a.progress)return;ue(),a.evaRuntime||(a.evaRuntime=qt());const t={type:ap(e.type),payload:e.payload||{},at:e.at||Date.now()};a.evaRuntime.lastEvent=t,a.evaRuntime.eventHistory=[t,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[t,...a.evaRuntime.recentEvents||[]].slice(0,80),tp(t),["timer","idle_timeout"].includes(t.type)||(a.evaRuntime.lastPlayerActionAt=Date.now());const n=wb(t.type,t.payload);Object.keys(n).length&&ye(n,`eva_event:${t.type}`,{silent:!0});const s=te();sp(),s.nextSpeakAt=0;const r=Ir(t.type,{force:!0,eventPayload:t.payload});is(),A(),r&&a.route==="eva-room"&&I()}function ap(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function wb(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function ml(e){const t=a.evaRuntime?.mood||gn(Re()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return ip("decoration",s)}function fl(e){const t=a.evaRuntime?.mood||gn(Re()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return ip("effect",s)||"none"}function ip(e,t=[]){const n=ut().filter(r=>r.type===e&&Vt(r.id));return(t.map(r=>n.find(o=>o.id===r)).find(Boolean)||Ye(n))?.id||null}function op(e=Re(),t=null){const n=te();if(n.currentQuestion?.id)return n.currentQuestion;if(a.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=a.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",r=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),l=Number(a.evaRuntime?.lastQuestionAt||a.evaRuntime?.lastQuestion?.at||0),c=Number(a.evaRuntime?.cooldowns?.question||Xn(3*6e4,7*6e4));if(!r&&o-l<c||!r&&Math.random()>.34)return null;const d=new Set(a.evaRuntime?.questionHistory?.slice(0,6).map(f=>f.id)),u=lp(s).filter(f=>!d.has(f.id)),m=Ye(u.length?u:lp(s));return m?{...m,at:new Date().toISOString()}:null}function lp(e="auto"){const t=Dv();if(t.length<2)return[];const n=new Set((a.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${oe()}:${e}:${a.progress?.totalCorrect||0}:${a.progress?.totalWrong||0}`;return[...t].sort((o,l)=>{const c=n.has(String(o.id))?1:0,d=n.has(String(l.id))?1:0;return c-d||Pe(`${s}:${o.id}`)-Pe(`${s}:${l.id}`)}).slice(0,18).map(o=>bb(o,t,e)).filter(Boolean)}function bb(e,t,n="auto"){const s=Ue(e,"ru"),r=Ue(e,"en");if(!s||!r)return null;const o=kb(e,t);if(!o.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(p()==="ru"?"твоих карточек":"your cards"),d=cp(e,e,!0),u=[d,...o.map(m=>cp(m,e,!1))].sort((m,f)=>Pe(`${n}:${e.id}:${m.id}`)-Pe(`${n}:${e.id}:${f.id}`));return{id:`kanji_meaning_${e.id}_${Pe(`${s}:${r}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:d.id,answerText:{ru:s,en:r},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function kb(e,t){const n=gi(Ue(e,"ru")),s=gi(Ue(e,"en")),r=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!c?.id||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const d=gi(Ue(c,"ru")),u=gi(Ue(c,"en"));return!(!d||!u||d===n||u===s)})].sort((c,d)=>{const u=String(c.jlpt||"").toUpperCase()===r?0:1,m=String(d.jlpt||"").toUpperCase()===r?0:1;return u-m||Pe(`${e.id}:${c.id}`)-Pe(`${e.id}:${d.id}`)});return l.slice(0,Math.min(3,l.length))}function cp(e,t,n){const s=Ue(e,"ru"),r=Ue(e,"en"),o=Ue(t,"ru"),l=Ue(t,"en");return{id:`meaning_${Pe(`${t.id}:${e.id}:${s}:${r}`)}`,cardId:String(e.id),text:{ru:s,en:r},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function gi(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function yb(e){ue();const t=mi();t?.id&&$b(t.id,e.dataset.option)}function $b(e,t){ue();const n=te(),s=mi();if(!s?.id||s.id!==e)return;const r=s.options?.find(f=>f.id===t);if(!r)return;const l=s.options?.some(f=>f.correct||f.id===s.answerId)?!!(r.correct||r.id===s.answerId):null;a.evaRuntime||(a.evaRuntime=qt()),a.evaRuntime.pendingQuestion=null,n.currentQuestion=null,ye(r.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&Sb(s,r,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:r.id,correct:l,at:new Date().toISOString()};a.evaRuntime.lastQuestion={...c,at:Date.now()},a.evaRuntime.lastQuestionAt=Date.now(),a.evaRuntime.pendingQuestion=null,a.evaRuntime.questionHistory=[c,...a.evaRuntime.questionHistory||[]].slice(0,40);const d=li({}),u=l===!1?"thinking":"approve",m=Tn(ci({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${r.id}`,category:"question_reply",text:r.reply||jb(s,l),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},a.evaRuntime.presenceState="react",a.evaRuntime.textRevealSkippedLineId=null,ui(n.currentLine,"question_answer",Re({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,Bs(),Lb(s,r,l),is(),A(),D(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),I()}function mi(){const e=te(),t=e.currentQuestion?.id?e.currentQuestion:a.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,a.evaRuntime||(a.evaRuntime=qt()),a.evaRuntime.pendingQuestion=t,t):null}function jb(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function Sb(e,t,n){const s=Cu(),r=Nb(e);r&&Cr(r,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:h(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=vn();o.reviews=Number(o.reviews||0)+1,n?(a.progress.totalCorrect=Number(a.progress.totalCorrect||0)+1,r&&Cb(r),r&&!s.rewarded[String(r.id)]&&(s.rewarded[String(r.id)]=new Date().toISOString(),H(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${r.id}`))):(a.progress.totalWrong=Number(a.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,r&&xb(r)),o.minutes=ao(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),a.progress.daily[oe()]=o,ve(),ic(),Q()}function Nb(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?re(t):null)||xu().find(r=>{if(!r)return!1;const o=t&&String(r.id)===t,l=n&&r.kanji===n,c=!s||String(r.jlpt||"").toUpperCase()===s;return o||l&&c})||(n?a.cards.find(r=>r.kanji===n):null)||null}function Cb(e){const t=String(e?.jlpt||"").toUpperCase(),n=nl().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function xb(e){const t=String(e?.jlpt||"").toUpperCase(),n=nl().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function Lb(e,t,n){if(!a.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};a.evaRuntime.lastEvent=s,a.evaRuntime.eventHistory=[s,...a.evaRuntime.eventHistory||[]].slice(0,80),a.evaRuntime.recentEvents=[s,...a.evaRuntime.recentEvents||[]].slice(0,80),tp(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Ab(){ue(),ii()&&Ir("render");const e=pp();let t=te().currentLine;if(ii()&&!t?.text&&a.evaAutonomyLines.length){const r=gl("render_fallback")||a.evaAutonomyLines[0],o=li(r),l=Re({lastEvent:{type:"render_fallback"}}),c=gn(l),d=ml(r),u=fl(r),m=r.emotion||pi(l,c,"render_fallback"),f=Tn(ci(r),m);t={id:r.id,category:r.category||"mood",text:r.text,sprite:f,background:o.id,decoration:d,effect:u,emotion:m,state:r.state||"observe",at:new Date().toISOString()},te().currentLine=t,te().currentDecoration=d,te().currentEffect=u,te().mood=c,te().emotion=m,te().lastSpokeAt=t.at,te().lastRoomId=o.id,te().lastSprite=f,a.evaRuntime.presenceState=t.state,a.evaRuntime.textRevealSkippedLineId=null,ui(r,"render_fallback",l),hl(f,o.file),Bs(),A()}if(ii()&&t?.text){const r=Os(t.background)||pn(),o=Tn(t.sprite||"relationship",t.emotion||te().emotion);return{isAutonomy:!0,line:t,bg:r,spriteId:o,sprite:zs(o),decoration:t.decoration||te().currentDecoration,effect:t.effect||te().currentEffect,mood:te().mood||Qt().mood,emotion:t.emotion||te().emotion||"calm",node:{id:"eva_autonomy_line",background:r.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=Os(e.background)||pn(),s=Tn(e.sprite,te().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:zs(s),decoration:te().currentDecoration,effect:te().currentEffect,mood:Qt().mood,emotion:te().emotion||"calm",node:e}}function dp(e="adaptive"){ue(),Fs();const t=Qt(),n=new Set(a.progress.evaRoomDialogueProgress.lineHistory||[]),s=di().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!up(d,t)?!1:!n.has(d.id)}),r=di().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:r.length?r:di(),l=Ye(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:pn().id},c=a.progress.evaRoomDialogueProgress.lineHistory||[];return a.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(d=>d!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||pn().id,relationshipDelta:l.relationshipDelta||{}}}function up(e,t){return[["minWarmth",t.warmth,(s,r)=>s>=r],["maxWarmth",t.warmth,(s,r)=>s<=r],["minTrust",t.trust,(s,r)=>s>=r],["maxTrust",t.trust,(s,r)=>s<=r],["minDiscipline",t.discipline,(s,r)=>s>=r],["maxDiscipline",t.discipline,(s,r)=>s<=r],["minCuriosity",t.curiosity,(s,r)=>s>=r],["maxCuriosity",t.curiosity,(s,r)=>s<=r]].every(([s,r,o])=>typeof e[s]>"u"||o(r,Number(e[s])))}function pp(){ue();const e=cb(a.progress.evaRoomDialogueProgress.currentNode);return a.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function zs(e){return a.evaSprites?.[e]||a.evaSprites?.default||"assets/mascots/eva_normal.webp"}function hl(e,t=""){[zs(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Tb(e){const n=pp().choices?.[Number(e.dataset.index||0)];if(!n)return;ue();const s=a.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=oe(),Ib(n),ye(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const r=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(r>0&&o&&!a.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(a.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),H(0,r,`eva_room:${o}`),z(An().reward)),n.randomLine){const l=dp(n.randomLine);ye(l.relationshipDelta||{},`eva_line:${l.id}`,{silent:!0}),a.progress.evaRoomDialogueProgress.generatedLine=l,a.progress.evaRoomDialogueProgress.currentNode="generated_line"}else a.progress.evaRoomDialogueProgress.generatedLine=null,a.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(a.evaRoomShopOpen=!0),A(),n.route){et(n.route);return}D(n.openShop?"menu_open":"page_turn"),I()}function Ib(e={}){if(!a.evaRuntime)return;a.evaRuntime.memory=as(un(),a.evaRuntime.memory||{});const t=a.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=oe(),t.lastRoute=a.route}function Rb(){ue(),a.progress.evaRoomDialogueProgress.currentNode="intro",a.progress.evaRoomDialogueProgress.generatedLine=null,a.evaRuntime&&(a.evaRuntime.presenceState="wait_choice",a.evaRuntime.textRevealSkippedLineId=null),A(),D("page_turn"),I()}function _b(e){fi(e)}function Pb(e){hi(e)}function Mb(e){const t=ke(e)||ss(e)||rs(e);t&&fi(t.id)}function Eb(e){const t=ke(e)||ss(e)||rs(e);t&&hi(t.id)}function Vt(e){a.customization||Ps();const t=ke(e)||ss(e);return!!(t?.defaultOwned||t?.price===0||a.customization?.owned?.includes(t?.id||e))}function vl(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Kb(e){const t=vl(e);return!!(t&&a.customization?.selected?.[t]===e.id)}function gp(e){return!e||!wl(e)?"locked":Kb(e)?"selected":Vt(e.id)?"owned":"available"}function Db(e={}){const t=[a.customization?.selected?.effect,e.effect,a.evaRuntime?.currentEffect,a.evaRuntime?.currentLine?.effect,a.progress?.evaAutonomy?.currentEffect,te().currentEffect];for(const n of t){const s=dn(n);if(!s||s==="none")continue;const r=ke(s);if(r?.type==="effect"&&Vt(r.id))return r.id}return null}function mp(e=null){const t=dn(e||a.customization?.selected?.effect),n=ke(t);return!n||n.type!=="effect"||a.customization?.selected?.effect!==n.id?!1:(a.customization.selected.effect=null,a.progress?.evaAutonomy&&(a.progress.evaAutonomy.currentEffect=null),a.evaRuntime?.currentEffect===n.id&&(a.evaRuntime.currentEffect="none"),Sr(),_s(),A(),$n(),D("menu_close"),z(p()==="ru"?"Эффект убран.":"Effect removed."),I(),!0)}function Fb(e=null){const t=dn(e||a.customization?.selected?.effect||a.customization?.selected?.decoration||a.customization?.selected?.frame||a.customization?.selected?.outfit||a.customization?.selected?.background||a.customization?.selected?.theme),n=ke(t);if(!n)return!1;if(n.type==="effect")return mp(n.id);a.customization||Ps();const s=vl(n);if(!s)return!1;const r=Sn().selected;return s==="background"?a.customization.selected.background=r.background:s==="outfit"?a.customization.selected.outfit=r.outfit:s==="theme"?a.customization.selected.theme=r.theme:s==="decoration"&&(a.customization.selected.decoration=r.decoration,a.customization.selected.frame=r.frame),Sr(),_s(),A(),$n(),D("menu_close"),z(p()==="ru"?"Выбор сброшен.":"Selection cleared."),I(),!0}function Ob(e){if(!e?.unlockCondition||wl(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=ks().find(o=>o.id===t.id),r=s?nc(s):t.id;return n?`Открывается за достижение: ${r}`:`Unlocks after achievement: ${r}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function wl(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?a.progress.level>=Number(t.value||0):t.type==="streak"?a.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!a.progress.achievements?.[t.id]?.unlockedAt:!0}function fi(e){const t=ke(e);if(!t||(a.customization||Ps(),ho.has(t.id)))return;if(!wl(t)){D("purchase_failed"),z(ds().locked);return}if(ho.add(t.id),window.setTimeout(()=>ho.delete(t.id),0),Vt(t.id)){hi(t.id);return}const n=LA({balance:a.progress.moonFragments,owned:a.customization?.owned||[],itemId:t.id,price:t.price});if(a.progress.moonFragments=n.balance,n.status==="insufficient-funds"){D("purchase_failed"),z(ds().notEnough),A(),I();return}if(n.status!=="purchased"){D("purchase_failed"),z(ds().unavailable),A(),I();return}a.customization.owned=n.owned,a.customization.seen=[...new Set([...a.customization.seen||[],t.id])],a.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:Tt(t),xp:0,coins:-n.price,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80),Sr(),_s(),Q(),A(),D("purchase_success"),D("item_unlock"),he("item_bought",{itemId:t.id,type:t.type,title:Tt(t),price:t.price}),z(ds().bought.replace("{item}",Tt(t))),I()}function hi(e){var s;const t=ke(e);if(a.customization||Ps(),!t||!Vt(t.id))return;const n=vl(t);n&&(a.customization.selected[n]=t.id,n==="decoration"&&(a.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(a.progress.selectedEvaSprite=t.spriteId,a.progress.evaAutonomy.currentLine=null),t.type==="background"&&(a.progress.selectedEvaRoomBackground=t.id,a.evaRuntime&&(a.evaRuntime.currentBackground=t.id,a.evaRuntime.activeBackground=t.id,(s=a.evaRuntime).memory||(s.memory=un()),a.evaRuntime.memory.preferredEvaRoomBackground=t.id),a.progress.evaAutonomy.currentLine=null),Sr(),_s(),A(),$n(),D("notification_soft"),he("item_equipped",{itemId:t.id,type:t.type,title:Tt(t)}),z(ds().selectedToast.replace("{item}",Tt(t))),I())}function Bb(){const e=te();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,Ir("toggle",{force:!0}),A(),D("notification_soft"),z(Ln().status),I()}function zb(){const e=te();e.frequency="normal",Bs(),A(),D("notification_soft"),I()}function Jb(){const e=te();e.roomMode="auto",e.currentLine=null,A(),D("notification_soft"),I()}function Ub(){const e=te();e.outfitMode="auto",e.currentLine=null,A(),D("notification_soft"),I()}function fp(){const e=te();e.enabled=!0,sp(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,hp("manual"),A(),D("page_turn"),I()}function hp(e="manual"){const t=np(e)||gl(e);if(!t)return!1;const n=Re({lastEvent:{type:e}}),s=gn(n),r=t.emotion||pi(n,s,e),o=li(t),l=Tn(ci(t),r),c=ml(t),d=fl(t),u=te(),m=Date.now(),f=op(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:l,background:o.id,decoration:c,effect:d,emotion:r,state:t.state||"speak",at:new Date(m).toISOString(),reason:e},u.currentDecoration=c,u.currentEffect=d,u.mood=s,u.emotion=r,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=l,u.currentQuestion=f,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(v=>v!==t.id)].slice(0,32),a.evaRuntime||(a.evaRuntime=qt()),Object.assign(a.evaRuntime,{mood:s,emotion:r,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:f,currentSkin:l,currentBackground:o.id,currentDecoration:c,currentEffect:d,activeSkin:l,activeBackground:o.id,lastPhraseAt:m,lastEmotionChangeAt:m,lastQuestionAt:f?m:Number(a.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:m,textRevealSkippedLineId:null}),ui(t,e,n),hl(l,o.file),Bs(),is(),$n(),!0}function Gb(){te().currentLine=null,A(),D("menu_close"),I()}function E(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${le(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function Hb(e){const t=mc(e.id),n=t.filter(d=>F(d.id).state!=="New").length,s=t.filter(d=>F(d.id).state==="Mastered").length,r=!Je(e),o=Vm(e),l=r?"鎖":t[0]?.kanji||"文",c=M(s,t.length);return`
      <button class="lesson-tile ${r?"is-locked":""} ${yc(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(l)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${gC(o)}
          <h3>${i(ma(e))}</h3>
          <p>${i(ax(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(_("mastered"))}</span>
            ${r?`<span class="pill danger-pill">${i(_("unlockedAt"))} ${Hi(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function qb(e){const t=Vm(e),n=e.id===a.activeLessonId,s=!Je(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${yc(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g($c(t))}">
        <span>${i(e.jlpt)}</span>
        ${pC(t)}
      </button>
    `}function bl(){const e=String(a.activeLearnJlpt||"all").toUpperCase();return a.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function Wb(){const e=bl();return e.find(t=>t.id===a.activeLessonId)||e.find(t=>Je(t))||e[0]||a.lessons.find(t=>t.id===a.activeLessonId)||a.lessons.find(t=>Je(t))||a.lessons[0]||null}function kl(){return U(Wb()?.jlpt)||sn()}function vp(e){if(!e.length)return a.activeLessonId=null,null;const t=e.find(r=>r.id===a.activeLessonId);if(t&&Je(t))return t;const s=e.find(r=>Je(r))||e[0];return a.activeLessonId=s?.id||null,s||null}function Xb(e){const t=e.length,n=e.filter(r=>Je(r)).length,s=["all",...De];return`
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
    `}function Qb(e){if(!e)return"";const t=e.textbook||e;return`
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
    `}function Vb(e){const t=Ft(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?ma(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${Hi(e)}.`:`Unlocks at level ${Hi(e)}.`)}</p>
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
    `}function Yb(){return a.activeLearnView===ln?ik():a.activeLearnView===Jt?ak():kp()}function Zb(){const e=ju();if(e.kind==="review"){et("review");return}if(a.route==="home"){Wi(kl());return}wp(e.nodeId)}function wp(e){const t=os(e);if(!t){ls();return}if($u(t)==="locked"){z(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===As){et("review");return}if(t.id===Ts){Br("final-test");return}if(t.type==="textbook"){Br(t.id);return}ls(Jt,t.id)}function bp(e){const t=String(e||"");return t&&(re(t)||a.cards.find(n=>String(n.id)===t))||null}function ek(){const e=de();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function Rr(e){const t=_t(e);if(!t)return null;const n=mn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],r=n.map((o,l)=>{const c=Mt(o)[0]||null,d=s[l%Math.max(s.length,1)]||s[0]||null,u=c?{jp:c.word||o.kanji,hiragana:c.reading||o.hiragana||"",translation:c.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:V(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:K(o),en:K(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:r,exercises:Us(t),source:"learning_path"}}function tk(e){if(e===Le)return ek();const t=a.learningPathLessonPayloads[e]||Rr(e);if(!t)return[];const n=de(),s=[],r=(t.objectives||[]).map(h).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:h(t.title),text:h(t.summary),note:r||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,l)=>{const c=bp(o.cardId);if(!c)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${K(c)}`,text:oy(c,{word:d?.jp||c.kanji,reading:d?.hiragana||c.hiragana||""}),note:d?.translation?h(d.translation):"",cardId:c.id,card:c,sentence:d})}),(t.exercises||[]).forEach(o=>{const l=(o.options||[]).map(c=>({value:String(c.value??c.id??c.label??c),label:h(c.label||c.text||c)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:h(o.prompt),text:h(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:l})}),s}function nk(e,t=null){const n=tk(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),r=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return r.length?r:n.filter(o=>o.kind==="quiz")}function sk(e,t=Jt,n=[]){const s=Cn(),r=s.activeSession,o=n.map(String).filter(Boolean);return r?.nodeId===e&&r.mode===t&&JSON.stringify(r.reviewStepIds||[])===JSON.stringify(o)?r:(s.activeSession=Fo({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,A(),s.activeSession)}function _r(e){const t=Yo(),n=t?.nodeId===e?t:sk(e),s=nk(e,n),r=s.filter(c=>c.kind==="quiz"),o=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:r,answeredCount:o,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function rk(e,t,n){var c;const s=Cn(),r=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((c=s.completedNodes)[e]||(c[e]=r),s.resultHistory[e]={completedAt:r,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===Le&&H(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=_t(e),u=a.learningPathLessonPayloads[e]||Rr(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(v=>v.cardId),...mn(d).map(v=>v.id)].map(String).filter(Boolean))],f=Z();if(m.forEach(v=>{const b=bp(v);if(!b)return;Cr(b,"learning_path"),Es(f,b.kanji);const C=se(F(b.id));C.state==="New"&&(a.progress.cards[b.id]=we(C,l?"hard":"good"))}),d){ae.add(`n5:${d.id}`),f.completedLessons[d.id]=r,f.currentLessonId=He().find(C=>C.order===d.order+1)?.id||d.id,a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[d.id]=r,A({immediate:!0}),ms()>=10&&Object.keys(f.studiedKanji||{}).length>=80&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],a.progress.unlockedJlptLevels.includes("N5")||a.progress.unlockedJlptLevels.push("N5"),a.progress.unlockedJlptLevels.includes("N4")||a.progress.unlockedJlptLevels.push("N4"));const v=a.n5Meta?.rewards?.lessonCompleteXp||45,b=a.n5Meta?.rewards?.lessonCompleteMoon||6;H(v,b,`learning_path:${e}`),at({title:`${Ge().lessonComplete}: ${h(d.title)}`,message:Ge().lessonCompleteText,xp:v,coins:b,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),he("lesson_complete",{lessonId:e,jlpt:"N5"})}}ei(),ve(),Q(),A()}function kp(){a.n5Textbook?.items?.length||Vo();const e=de(),t=yu(),n=ju(),s=os(Ks()),r=yn();return`
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
            <h2>${i(ku(Ks()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(de().reviewQueue)} · ${i(Fe())}</span>
            <span class="pill">${i(de().streak)} · ${i(a.progress.streak.current)}</span>
            <span class="pill">${i(de().xp)} · ${i(r.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,l)=>{const c=$u(o),d=c==="locked",u=h(o.summary)||"",m=o.id===As?e.reviewAction:o.id===Ts?e.openCheckpoint:o.type==="textbook"?e.openTextbook:c==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(c)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${l+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(wv(c))}</span>
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
    `}function ak(){const e=a.activeLearnNodeId||Ks(),t=os(e),n=de();if(!t)return kp();if(t.id!==Le&&t.type==="lesson"&&!a.n5Textbook?.items?.length)return Vo(),`
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
      `;t.type==="lesson"&&uv(e);const s=_r(e),{session:r,steps:o,quizSteps:l,currentStep:c,isResult:d}=s;if(!o.length)return`
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
      `;const u=o.length,m=u?M(Math.min(r.stepIndex,u),u):0,f=r.answers?.[c?.id||""]||null,v=f?.selected||"",b=!!f?.correct,C=l.length?Math.round(Number(r.score||0)/Math.max(l.length,1)*100):100;return d?`
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
              <strong>${i(C)}%</strong>
              <div class="meter"><i style="width:${C}%"></i></div>
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
              <h1>${i(h(t.title))}</h1>
              <p>${i(h(t.summary)||n.mapHint)}</p>
            </div>
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
          </div>
          <div class="lesson-player-progress">
            <span>${i(n.step)} ${i(Math.min(r.stepIndex+1,u))}/${i(u)}</span>
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
                ${(c.options||[]).map(j=>{const L=v===j.value,y=j.value===c.answer;return`<button class="btn ${L?b?"success":"danger":f&&y?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(c.id)}" data-value="${g(j.value)}">${i(j.label)}</button>`}).join("")}
              </div>
              ${f?`<p class="lesson-player-feedback ${b?"is-good":"is-warning"}">${i(b?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(c.options||[]).find(j=>j.value===c.answer)?.label||c.answer}`)}</p>`:""}
            `:`
              <p>${i(c.text||"")}</p>
              ${c.note?`<small>${i(c.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${g(e)}" ${c.kind==="quiz"&&!f?'disabled aria-disabled="true"':""}>${i(r.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function ik(){const e=bl(),t=vp(e),n=!!(t&&Je(t)),s=n?KN(t.id):[];(!a.activeCardId||!s.some(l=>l.id===a.activeCardId))&&(a.activeCardId=s[0]?.id||null);const r=n&&a.activeCardId?re(a.activeCardId):null,o=a.activeLearnJlpt!=="all"?Ft(a.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("learn"))}</h1>
            <p>${i(t?ma(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${Xb(e)}
        ${o?Qb(o):""}
        <div class="actions lesson-tabs">
          ${e.map(qb).join("")}
        </div>
        <div class="study-layout">
          ${n?r?Qg(r):f0(t):Vb(t)}
          ${n?Wl(r,s.length):Wl(null,0)}
        </div>
      </section>
    `}function ok(){const e=wn(a.activeJlptLesson)||wn(re(a.activeCardId)?.jlpt)||a.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(_("learn"))}</button>
          </article>
        </section>
      `;a.activeJlptLesson=e.jlpt;const t=Ft(e.jlpt);if(!yt(e.jlpt))return yp(t||e);const n=ef(e.jlpt),s=n.filter(l=>F(l.id).state==="Mastered").length,r=n.filter(l=>F(l.id).state!=="New").length,o={...Cc(),...Nc()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(h(e.title))}</h1>
            <p>${i(h(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${Hn("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${a.jlptLessons.map(l=>{const c=yt(l.jlpt),d=l.jlpt===e.jlpt,u=g(kn(l.jlpt));return c?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(l.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(l.jlpt)}</button>`}).join("")}
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
            ${E(o.available,n.length,e.jlpt,M(n.length,Math.max(a.cards.length,1)))}
            ${E(o.learned,r,`${s} ${o.mastered}`,M(r,Math.max(n.length,1)))}
          </div>
        </article>
        ${Dg(e)}
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
    `}function lk(){const e=a.jlptCatalog?.items||[],t=String(a.activeTextbookLevel||"");if(fe(t))return uk(t);const n=t.toUpperCase(),s=n?Ft(n):null;if(s)return a.activeTextbookLevel=s.jlpt,a.activeJlptLesson=s.jlpt,ck(s);const r=p()==="ru"?{title:"Учебники Flash Kanji",description:"Выберите азбуку для старта с нуля или продолжайте учебники JLPT N5–N1.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам",kanaBadge:"Курс на русском",kanaMeta:"знаков",kanaTasks:"заданий"}:{title:"Flash Kanji Textbooks",description:"Choose a kana course from zero or continue JLPT N5-N1 textbooks.",open:"Open page",pdf:"Download PDF",study:"Go to lessons",kanaBadge:"Russian course",kanaMeta:"characters",kanaTasks:"tasks"},o=(a.kanaCatalog?.courses||[]).map(l=>`
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
            ${Hn("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(sn())}">${i(r.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${o}
          ${e.map(l=>`
            <article class="textbook-card ${yt(l.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(l.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(l.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(l.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(h(l.displayTitle||l.title||{}))}</h2>
                <p>${i(h(l.description||{}))}</p>
                ${yt(l.jlpt)?"":`<p class="textbook-lock-note">${i(kn(l.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(l.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(l.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                  <span class="pill">${i(h(l.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(l.jlpt)}">${i(r.open)}</a>
                  ${yt(l.jlpt)?`<a class="btn ghost" href="${g(l.pdfUrl||l.pdfFile||"")}" download="${g((l.pdfFile||l.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(r.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(kn(l.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${yt(l.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(r.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(kn(l.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function yp(e){const t=String(e?.jlpt||"").toUpperCase(),n=jc(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),r=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(h(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h1>
            <p>${i(kn(t))}</p>
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
            <h2>${i(h(e?.displayTitle||e?.title||{ru:r.title,en:r.title}))}</h2>
            <p>${i(r.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(r.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${g(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function ck(e){const t=String(e?.jlpt||"").toUpperCase();if(!yt(t))return yp(e);if(De.includes(t)&&!Ba(t))return Oa(t)==="error"||Oa(t)==="incomplete"?dk(e,t,a.jlptCourseDataErrors[t]):(Io(t).catch(()=>{}),$p(e,t));if(String(e?.jlpt||"").toUpperCase()==="N5"&&a.n5Textbook?.items?.length)return Ok(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&a.n4Textbook?.items?.length)return Ay(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&a.n3Textbook?.items?.length)return u$(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&a.n2Textbook?.items?.length)return W$(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return a.n1Textbook?.items?.length?Ij(e):(Ch().catch(()=>{}),bo?ni(bo):$p(e,"N1"));a.activeTextbookLevel=e.jlpt,a.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(v=>a.lessons.find(b=>b.id===v)).filter(Boolean),s=a.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(v)),r=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=a.activeTextbookSubroute?r.find(v=>v.id===a.activeTextbookSubroute)||wn(e.jlpt)||a.jlptLessons[0]:wn(e.jlpt)||a.jlptLessons[0];a.activeTextbookSubroute&&o?.id&&$t(t,o.id,"textbook_page");const l=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=Sc(e.jlpt)||e.lessonIds?.[0]||r[0]?.id||"",d=h(e.recommendedCycle||{}),u=h(e.goal||{}),m=(e.previousLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join(""),f=(e.nextLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join("");return`
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
            ${Hn("textbook",{level:e.jlpt})}
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
          ${E(e.jlpt,e.lessonCount||0,u,M(e.lessonCount||0,Math.max(1,a.jlptLessons.length)))}
          ${E(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",M(e.kanjiCount||0,Math.max(1,a.cards.length)))}
          ${E(p()==="ru"?"Уроки":"Lessons",r.length,l.practice,M(r.length,Math.max(1,a.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${E(p()==="ru"?"Переход":"Jump",a.activeTextbookLevel===e.jlpt?1:0,l.lessonPage,a.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${Js(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(l.outline)}</h2>
              <p>${i(h(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${E(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,l.outline,M(o.sections?.length||0,4))}
              ${E(p()==="ru"?"Практика":"Practice",o.practice?.length||0,l.practice,M(o.practice?.length||0,4))}
            </div>
          </article>
          ${Dg(o)}
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
                ${Array.isArray(v.points)&&v.points.length?`<ul>${v.points.map(b=>`<li>${i(h(b))}</li>`).join("")}</ul>`:""}
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
          ${r.map(v=>Hb(v)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function $p(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Загружаем урок…",text:`Подгружаю карточки и упражнения ${t}. Адрес сохранён — после загрузки откроется нужный урок.`,back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:"Loading lesson…",text:`Loading ${t} cards and exercises. The URL is preserved and the requested lesson will open next.`,back:"All textbooks"};return`
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
          ${hn("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function dk(e,t,n=null){const s=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Не удалось загрузить карточки урока",text:"Проверьте подключение и попробуйте ещё раз. Прогресс, XP и Moon Fragments не изменились.",retry:"Повторить",back:"К списку уроков"}:{eyebrow:`${t} · Flash Kanji`,title:"Could not load lesson cards",text:"Check your connection and try again. Progress, XP, and Moon Fragments were not changed.",retry:"Retry",back:"Lesson list"},r=n instanceof Error?n.message:String(n||"");return`
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
            <h2>${i(h(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(h(e?.description||{}))}</p>
          </div>
          ${hn("eva","concerned","error","n5-hero-mascot")}
        </article>
      </section>
    `}function jp(){return p()==="ru"?{allTextbooks:"Все учебники",start:"Начать курс",continue:"Продолжить",downloadPdf:"Скачать PDF",reference:"Справочник",lessons:"Уроки",practice:"Практикум чтения",final:"Итоговая контрольная",review:"Повторение",sources:"Источники",russianCourse:"Курс на русском",showRomaji:"Показывать ромадзи",hideRomaji:"Скрыть ромадзи",check:"Проверить",score:"Результат",passed:"зачёт",notPassed:"повторить",correct:"верно",wrong:"ошибка",writeDone:"Пропись выполнена",markWriting:"Я написал(а) от руки",manualWriting:"Ручная пропись",noAutoWriting:"Почерк не оценивается автоматически: отметьте шаг, когда написали знаки от руки.",noCourse:"Курс не найден",loading:"Загружаю курс",offlineHint:"Если вы уже открывали этот урок, service worker отдаст его из кэша. Иначе появится понятный offline fallback.",remember:"Помню",forgot:"Не помню",noReview:"Повторений пока нет. Пройдите урок или откройте знаки курса.",sourcePdf:"Оригинальный PDF",taskCount:"заданий",characters:"знаков",lessonsCount:"уроков",lesson:"урок",lessonProgress:"Прогресс урока",newSigns:"Новые знаки",newSignsHint:"Сначала узнаём форму и чтение каждого нового знака.",characterCard:"Карточка знака",characterCardHint:"Идём как в кандзи-уроке: один знак, быстрое решение, следующая карточка.",cardComplete:"Все знаки урока открыты",cardCompleteHint:"Теперь можно закрепить их в упражнениях, прописи и общем повторении.",backToFirstCard:"Повторить карточки",cardProgress:"Карточка",exampleWord:"Пример слова",readWrite:"Как читать и писать",readWriteHint:"Произнесите знак, посмотрите количество штрихов и переходите к ручной прописи.",reading:"Чтение",strokes:"Штрихи",tts:"Звук",strokeOrder:"Stroke-order",explanation:"Объяснение",explanationHint:"Ключевые правила урока вынесены в отдельные карточки.",examples:"Примеры",examplesHint:"Короткие слова и записи для чтения.",example:"Пример",meaning:"Значение",practiceBlock:"Практика",practiceHint:"Выполняйте задания небольшими блоками и проверяйте ответы сразу.",selfCheck:"Проверь себя",selfCheckHint:"Завершите ручную часть и отметьте пропись после тренировки."}:{allTextbooks:"All textbooks",start:"Start course",continue:"Continue",downloadPdf:"Download PDF",reference:"Reference",lessons:"Lessons",practice:"Reading practice",final:"Final test",review:"Review",sources:"Sources",russianCourse:"Russian course",showRomaji:"Show romaji",hideRomaji:"Hide romaji",check:"Check",score:"Score",passed:"passed",notPassed:"retry",correct:"correct",wrong:"wrong",writeDone:"Writing done",markWriting:"I wrote it by hand",manualWriting:"Manual writing",noAutoWriting:"Handwriting is not graded automatically: mark this step after writing the signs by hand.",noCourse:"Course not found",loading:"Loading course",offlineHint:"If you opened this lesson before, the service worker can serve it from cache. Otherwise a clear offline fallback appears.",remember:"Remember",forgot:"Forgot",noReview:"No kana reviews yet. Finish a lesson or open course signs first.",sourcePdf:"Original PDF",taskCount:"tasks",characters:"characters",lessonsCount:"lessons",lesson:"lesson",lessonProgress:"Lesson progress",newSigns:"New signs",newSignsHint:"Start by recognizing the shape and reading of each new sign.",characterCard:"Character card",characterCardHint:"Use the kanji lesson rhythm: one sign, one decision, then the next card.",cardComplete:"All lesson signs are introduced",cardCompleteHint:"Now reinforce them with exercises, handwriting, and shared review.",backToFirstCard:"Repeat cards",cardProgress:"Card",exampleWord:"Example word",readWrite:"How to read and write",readWriteHint:"Play the sound, check the stroke count, then move to handwriting practice.",reading:"Reading",strokes:"Strokes",tts:"Sound",strokeOrder:"Stroke order",explanation:"Explanation",explanationHint:"The key lesson notes are separated into contrast cards.",examples:"Examples",examplesHint:"Short words and spellings for reading practice.",example:"Example",meaning:"Meaning",practiceBlock:"Practice",practiceHint:"Complete the exercises in compact blocks and check immediately.",selfCheck:"Check yourself",selfCheckHint:"Finish the handwriting step after practicing by hand."}}function uk(e){const t=String(e||"").toLowerCase(),n=ca(t),s=jp();if(!n)return ni(new Error(s.noCourse));const r=js(t);if(!r)return mC(t).then(()=>I()).catch(()=>I()),a.kanaCourseErrors[t]?ni(a.kanaCourseErrors[t]):pk(n,s);const o=String(a.activeTextbookSubroute||"").toLowerCase();if(o==="reference")return Nk(r,s);if(o==="sources")return Ck(r,s);if(o==="review")return xk(r,s);if(o==="final"||o==="final-test")return Sk(r,s);if(/^practice-\d+$/i.test(o)){const l=r.reading_practice?.find(c=>c.id===o);return l?jk(r,l,s):Lr(ge("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}if(/^lesson-\d+$/i.test(o)){const l=r.lessons?.find(c=>c.id===o);return l?hk(r,l,s):Lr(ge("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}return gk(r,s)}function pk(e,t){return`
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
    `}function gk(e,t){const n=ot(e.slug),s=e.lessons?.[0]?.id||"",r=n.currentRoute||s;qi(e.slug,r);const o=e.lessons.filter(l=>vi(e.slug,l).passed).length;return`
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
          ${E(t.review,Lp(e,"due").length,t.characters,M(Lp(e,"due").length,Math.max(1,e.base_characters.length)))}
        </div>
        <div class="actions kana-course-tabs">
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/reference">${i(t.reference)}</a>
          <button class="btn ghost" type="button" data-action="route" data-route="review">${i(t.review)}</button>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/final">${i(t.final)}</a>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/sources">${i(t.sources)}</a>
          <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Gn().settings.showRomaji?t.hideRomaji:t.showRomaji)}</button>
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.lessons)}</h2>
            <p>${i(p()==="ru"?"Курсы азбук независимы: хирагана не блокирует катакану и наоборот.":"Kana courses are independent: hiragana does not lock katakana and vice versa.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-lesson-grid">
          ${e.lessons.map(l=>mk(e,l,t)).join("")}
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.practice)}</h2>
            <p>${i(p()==="ru"?"Пять блоков чтения из PDF без обязательного ромадзи.":"Five PDF reading practice blocks without mandatory romaji.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-practice-grid">
          ${e.reading_practice.map(l=>fk(e,l,t)).join("")}
        </div>
      </section>
    `}function mk(e,t,n){const s=vi(e.slug,t),r=s.passed?n.passed:s.completed?n.notPassed:n.start,o=s.completed?Math.round(s.latestScore/Math.max(1,jl(t.exercises))*100):0;return`
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
      `}function fk(e,t,n){const s=ot(e.slug).practices[t.id],r=jl(t.exercises),o=Number(s?.latestScore||0);return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p>${i((t.body||[]).slice(0,2).join(" "))}</p>
            <div class="progress mini"><span style="width:${M(o,Math.max(1,r))}%"></span></div>
          </div>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/${g(t.id)}">${i(n.practice)}</a>
        </article>
      `}function hk(e,t,n){const s=ot(e.slug);qi(e.slug,t.id);const r=vi(e.slug,t),o=jl(t.exercises),l=vk(t),c=!!s.writing?.[t.id];return`
      <section class="page textbooks-page n5-course-page n5-lesson-page kana-course-page kana-lesson-page">
        <div class="kana-lesson-shell">
          ${wk(e,t,n,l,r,o)}
          ${kk(e,t,n,l)}
          ${yk(l.explanations,n)}
          ${$k(l.examples,n)}
          <section class="kana-lesson-step kana-practice-step" aria-labelledby="kanaPracticeTitle">
            <div class="kana-step-heading">
              <span class="pill">05</span>
              <h2 id="kanaPracticeTitle">${i(n.practiceBlock)}</h2>
              <p>${i(n.practiceHint)}</p>
            </div>
            <div class="kana-practice-stack">
              ${t.exercises.map(d=>$l(e.slug,t.id,"lesson",d,n)).join("")}
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
    `}function vk(e){const t=(e.body||[]).map(d=>String(d||"").trim()).filter(Boolean),n=[],s=[],r={title:"",headers:[],rows:[]};let o=0;const l=d=>/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(d),c=d=>/^(Слова для чтения|Пример и узнавание)$/i.test(d);for(;o<t.length;){const d=t[o];if(/^\d+$/.test(d)){o+=1;continue}if(/^Цель раздела$/i.test(d)){for(o+=1;o<t.length&&!/^Знаки урока$/i.test(t[o]);)/^\d+$/.test(t[o])||n.push(t[o]),o+=1;continue}if(/^Знаки урока$/i.test(d)){for(o+=1;o<t.length&&!/^(Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(t[o]);)o+=1;continue}if(c(d)){r.title=d;const u=t.slice(o+1).filter(f=>!/^\d+$/.test(f));r.headers=u.slice(0,3);const m=u.slice(3);for(let f=0;f+2<m.length;f+=3)r.rows.push(m.slice(f,f+3));break}if(l(d)){const u=d,m=[];for(o+=1;o<t.length&&!l(t[o]);)/^\d+$/.test(t[o])||m.push(t[o]),o+=1;m.length&&s.push({title:u,body:m});continue}o+=1}return{goal:n,explanations:s,examples:r}}function wk(e,t,n,s,r,o){const l=Number(r?.latestScore||0),c=M(l,Math.max(1,o)),d=s.goal.length?s.goal.join(" "):(t.body||[]).slice(0,2).join(" ");return`
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
              <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Gn().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
              ${Hn("textbook",{level:e.slug,subroute:t.id})}
            </div>
          </div>
        </article>
      `}function yl(e,t){return`${String(e||"").toLowerCase()}:${String(t||"")}`}function Sp(e,t){const n=yl(e,t?.id||""),s=t?.focus_characters?.length||0,r=Number(a.kanaLessonCharacterIndex[n]||0);return le(Number.isFinite(r)?r:0,0,s)}function bk(e,t){const n=Array.isArray(e?.rows)?e.rows:[],s=String(t||""),r=n.find(o=>String(o?.[0]||"").includes(s))||n[0]||null;return r?{word:String(r[0]||""),reading:String(r[1]||""),meaning:String(r[2]||"")}:null}function kk(e,t,n,s){const r=t.focus_characters||[];if(!r.length)return"";const o=Sp(e.slug,t),l=o>=r.length,c=r[Math.min(o,r.length-1)],d=`${Math.min(o+1,r.length)} / ${r.length}`,u=M(Math.min(o,r.length),Math.max(1,r.length));if(l)return`
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
      `;const m=It(e.slug),f=us(e.slug,c.kana),v=Be(m[f]||null),b=bk(s.examples,c.kana),C=Gn().settings.showRomaji,j=er();return`
        <section class="kana-lesson-step kana-character-flow" data-section="kana-character-study-card" aria-labelledby="kanaCharacterFlowTitle">
          <div class="kana-step-heading">
            <span class="pill">01</span>
            <h2 id="kanaCharacterFlowTitle">${i(n.characterCard)}</h2>
            <p>${i(n.characterCardHint)}</p>
          </div>
          <article class="study-card kana-character-study-card" data-kana-character-card data-kana-card-id="${g(f)}">
            <div class="study-topline">
              <div class="tag-row compact-tags">
                <span class="pill">${i(e.title)}</span>
                ${dr(v.state)}
                <span class="pill">${i(n.cardProgress)} ${i(d)}</span>
              </div>
              <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(c.kana)}" aria-label="${g(n.tts)}">🔊</button>
            </div>
            <div class="kanji-focus kana-lesson-focus" lang="ja" aria-label="${g(c.kana)}">${i(c.kana)}</div>
            <h3>${i(n.reading)}: ${i(C&&c.romaji?c.romaji:c.kana)}</h3>
            <p class="label">${i(e.title)} · ${i(c.strokes?`${c.strokes} ${n.strokes.toLowerCase()}`:n.characters)} · ${i(Bt(v.dueAt))}</p>
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
            ${b?`
              <div class="lesson-player-sentence kana-character-example">
                <small>${i(n.exampleWord)}</small>
                <strong lang="ja">${i(b.word)}</strong>
                <p>${i(b.reading)} · ${i(b.meaning)}</p>
              </div>
            `:""}
            <div class="kana-card-strip" lang="ja" aria-label="${g(n.newSigns)}">
              ${r.map((L,y)=>`<span class="${y<o?"is-done":y===o?"is-current":""}">${i(L.kana)}</span>`).join("")}
            </div>
            <div class="progress mini" aria-hidden="true"><span style="width:${u}%"></span></div>
            <div class="rating-grid srs-binary-grid">
              <button class="btn danger" type="button" data-action="kana-lesson-card" data-course="${g(e.slug)}" data-lesson="${g(t.id)}" data-kana="${g(c.kana)}" data-rating="forgot">${i(j.forgot)} <small>${i(j.forgotHint)}</small></button>
              <button class="btn success" type="button" data-action="kana-lesson-card" data-course="${g(e.slug)}" data-lesson="${g(t.id)}" data-kana="${g(c.kana)}" data-rating="remember">${i(j.remember)} <small>${i(j.rememberHint)}</small></button>
            </div>
          </article>
        </section>
      `}function yk(e,t){return e.length?`
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
      `:""}function $k(e,t){if(!e?.rows?.length)return"";const n=e.headers.length===3?e.headers:[t.example,t.reading,t.meaning];return`
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
      `}function jk(e,t,n){return qi(e.slug,t.id),`
      <section class="page textbooks-page n5-course-page kana-course-page kana-practice-page">
        ${Pr(e,t.title,n,t.id)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h2>${i(t.title)}</h2>
            ${Np(t.body)}
          </div>
        </article>
        ${t.exercises.map(s=>$l(e.slug,t.id,"practice",s,n)).join("")}
      </section>
    `}function Sk(e,t){return qi(e.slug,"final"),`
      <section class="page textbooks-page n5-course-page n5-final-page kana-course-page kana-final-page">
        ${Pr(e,t.final,t)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(t.final)}</span>
            <h2>${i(e.final_test.title)}</h2>
            <p>${i((e.final_test.body||[]).slice(0,4).join(" "))}</p>
          </div>
        </article>
        ${(e.final_test.sections||[]).map(n=>$l(e.slug,"final","final",n,t)).join("")}
      </section>
    `}function Nk(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${Pr(e,t.reference,t)}
        <article class="jlpt-section-card">
          <h2>${i(e.reference.title)}</h2>
          ${Np(e.reference.body)}
        </article>
        <div class="kana-table-grid">
          ${e.base_characters.map(n=>Lk(n)).join("")}
        </div>
      </section>
    `}function Ck(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${Pr(e,t.sources,t)}
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
    `}function xk(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page kana-review-page">
        ${Pr(e,t.review,t)}
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
    `}function Pr(e,t,n,s){return`
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(e.title)}</p>
            <h1>${i(t)} <span lang="ja">${i(e.native_title)}</span></h1>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.slug)}">${i(e.title)}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(Gn().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
            ${Hn("textbook",{level:e.slug})}
          </div>
        </div>
      `}function Np(e=[]){const t=[];for(const n of e.slice(0,40))/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова|Пример|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(n)?t.push(`<h3>${i(n)}</h3>`):t.push(`<p>${i(n)}</p>`);return t.join("")}function Lk(e){return`
        <button class="kana-char-chip" type="button" data-action="play-kana-tts" data-text="${g(e.kana)}">
          <span lang="ja">${i(e.kana)}</span>
          ${Gn().settings.showRomaji&&e.romaji?`<small>${i(e.romaji)}</small>`:""}
        </button>
      `}function $l(e,t,n,s,r){const o=Tk(e,t,n,s.id),l=a.kanaExerciseDrafts[Sl(e,t,n,s.id)]||{};return`
        <form class="jlpt-section-card kana-exercise-card" data-kana-exercise-form data-course="${g(e)}" data-owner="${g(t)}" data-owner-type="${g(n)}" data-exercise="${g(s.id)}">
          <h3>${i(s.label)}</h3>
          <p>${i(s.instruction||"")}</p>
          <div class="kana-exercise-items">
            ${s.items.map(c=>Ak(c,o,r,l)).join("")}
          </div>
          ${o?.completed?`<p class="exercise-feedback ${o.passed?"is-correct":"is-wrong"}" aria-live="polite">${i(r.score)}: ${i(o.score)}/${i(o.total)} · ${i(o.passed?r.passed:r.notPassed)}</p>`:""}
          <button class="btn primary" type="button" data-action="kana-submit-exercise">${i(r.check)}</button>
        </form>
      `}function Ak(e,t,n,s={}){const r=Object.prototype.hasOwnProperty.call(s,e.number)?s[e.number]:t?.answers?.[e.number]||"",o=t?.completed?t.correct?.[e.number]:null;return`
        <label class="kana-answer-row ${o===!0?"is-correct":o===!1?"is-wrong":""}">
          <span>${i(e.number)}. ${i(e.prompt)}</span>
          <input type="text" name="kana-${g(e.number)}" value="${g(r)}" autocomplete="off" inputmode="text" />
          ${o===null?"":`<small>${i(o?n.correct:`${n.wrong}: ${e.solution||e.accepted_answers?.[0]||""}`)}</small>`}
        </label>
      `}function jl(e=[]){return(e||[]).reduce((t,n)=>t+(n.items||[]).length,0)}function vi(e,t){const n=ot(e).lessons[t.id];return n||{completed:!1,passed:!1,latestScore:0,bestScore:0,exercises:{},updatedAt:null}}function Tk(e,t,n,s){const r=ot(e);return n==="lesson"?r.lessons?.[t]?.exercises?.[s]||null:n==="practice"?r.practices?.[t]?.exercises?.[s]||null:n==="final"&&(r.finalTest?.[s]||r.finalTest?.sections?.[s])||null}function us(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim(),r=Array.from(s)[0]?.codePointAt(0);return!fe(n)||!Number.isInteger(r)?"":`kana:${n}:${r.toString(16).toUpperCase()}`}function wi(e,t=""){const n=String(e||"").trim(),s=n.match(/^kana:(hiragana|katakana):([0-9a-f]+)$/i);if(s){const l=Number.parseInt(s[2],16);return!Number.isInteger(l)||l<=0?null:{slug:s[1].toLowerCase(),kana:String.fromCodePoint(l),id:us(s[1],String.fromCodePoint(l))}}const r=n.match(/^(hiragana|katakana):(.+)$/i);if(r){const l=r[1].toLowerCase(),c=r[2].trim();return{slug:l,kana:c,id:us(l,c)}}const o=String(t||"").toLowerCase();return fe(o)&&n?{slug:o,kana:n,id:us(o,n)}:null}function It(e){const t=String(e||"").toLowerCase();if(!fe(t))return{};const n=ot(t),s=n.review&&typeof n.review=="object"?n.review:{},r={};let o=!1;Object.entries(s).forEach(([d,u])=>{const m=wi(d,t),f=m?.slug===t?m.id:"",v=Be(u);if(!f){r[d]=v;return}const b=r[f];(!b||Number(v.reviewCount||0)>Number(b.reviewCount||0)||(Date.parse(String(v.lastReviewedAt||""))||0)>(Date.parse(String(b.lastReviewedAt||""))||0))&&(r[f]=v),f!==d&&(o=!0)});const l=Object.keys(s).sort().join("|"),c=Object.keys(r).sort().join("|");return(o||l!==c)&&(n.review=r),n.review}function Cp(e,t){const n=js(e),s=String(t||"");return n?.base_characters?.find(r=>r.kana===s)||null}function xp(e){const t=js(e)||ca(e);return t?.title?t.title:String(e||"").toLowerCase()==="katakana"?p()==="ru"?"Катакана":"Katakana":p()==="ru"?"Хирагана":"Hiragana"}function Lp(e,t="due"){const n=It(e.slug),s=Date.now();return(e.base_characters||[]).map(r=>{const o=us(e.slug,r.kana),l=n[o]||null;return{...r,id:o,progress:l}}).filter(r=>t==="all"?!0:Jc(r.progress?[{cardId:r.id,...r.progress}]:[],s).initial.length>0)}function Ik(e,t,n,s){return e?n==="lesson"?e.lessons?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="practice"?e.reading_practice?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="final"&&e.final_test?.sections?.find(r=>r.id===s)||null:null}function Sl(e,t,n,s){const r=[e,n,t,s].map(o=>String(o||"").trim());return r.every(Boolean)?r.join(":"):""}function Rk(e){var b;const t=e.closest?.("[data-kana-exercise-form]");if(!t)return;const n=String(t.dataset.course||"").toLowerCase(),s=String(t.dataset.owner||""),r=String(t.dataset.ownerType||""),o=String(t.dataset.exercise||"");if(!fe(n))return;const l=js(n),c=Ik(l,s,r,o);if(!l||!c)return;const d={},u=Sl(n,s,r,o),m=new FormData(t);c.items.forEach(C=>{const j=m.get(`kana-${C.number}`);d[C.number]=Xc(typeof j=="string"?j:"")});const f=tA(c,d),v=ot(n);if(v.currentRoute=s,v.updatedAt=f.updatedAt,r==="lesson"){const C=l.lessons.find(y=>y.id===s),j=v.lessons[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};j.exercises[o]=f;const L=Gc(C?.exercises||[],j.exercises);Object.assign(j,L,{bestScore:Math.max(Number(j.bestScore||0),L.latestScore),updatedAt:f.updatedAt}),v.lessons[s]=j,j.passed&&Kk(l,C?.focus_characters||[])}if(r==="practice"){const C=l.reading_practice.find(y=>y.id===s),j=v.practices[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};j.exercises[o]=f;const L=Gc(C?.exercises||[],j.exercises);Object.assign(j,L,{bestScore:Math.max(Number(j.bestScore||0),L.latestScore),updatedAt:f.updatedAt}),v.practices[s]=j}if(r==="final"){v.finalTest||(v.finalTest={}),(b=v.finalTest).sections||(b.sections={}),v.finalTest.sections[o]=f;const C=Gc(l.final_test?.sections||[],v.finalTest.sections);Object.assign(v.finalTest,C,{bestScore:Math.max(Number(v.finalTest.bestScore||0),C.latestScore),updatedAt:f.updatedAt})}u&&delete a.kanaExerciseDrafts[u],D(f.passed?"answer_correct":"answer_wrong"),A(),Lt()}function _k(e,t){const n=String(e||"").toLowerCase();if(!fe(n)||!t)return;const s=ot(n);s.writing[t]=new Date().toISOString(),s.currentRoute=t,s.updatedAt=s.writing[t],A(),z(jp().writeDone),Lt()}function Pk(e,t){const n=String(e||"").toLowerCase(),s=yl(n,t);!fe(n)||!t||(a.kanaLessonCharacterIndex[s]=0,a.pendingFocus="kana-character-card",Ae())}function Mk(e,t,n,s){const r=String(e||"").toLowerCase();if(!fe(r)||!t||!n)return;const o=js(r),l=o?.lessons?.find(L=>L.id===t)||null;if(!o||!l)return;const c=us(r,n);if(!c)return;const d=ot(r),u=It(r),m=se(Be(u[c]||null)),f=Me(s)?"forgot":"remember",v=Hc(m,f);u[c]=v,d.review=u,d.currentRoute=t,d.updatedAt=new Date().toISOString(),Kt(m,v,f),ve({skipAchievements:!0}),f==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,he("answer_wrong",{cardId:c,kana:n,rating:f},{skipAchievements:!0})):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),he("answer_correct",{cardId:c,kana:n,rating:f,combo:a.progress.correctCombo},{skipAchievements:!0}));const b=yl(r,t),C=l.focus_characters.findIndex(L=>L.kana===n),j=Sp(r,l);a.kanaLessonCharacterIndex[b]=Math.min((C>=0?C:j)+1,l.focus_characters.length),a.pendingFocus="kana-character-card",D(f==="forgot"?"answer_wrong":"answer_correct"),A(),Ae()}function Ek(e,t,n){dm(e,t,n)}function Kk(e,t=[]){const n=ot(e.slug),s=It(e.slug);t.forEach(r=>{const o=us(e.slug,r.kana);o&&(s[o]||(s[o]=Hc(null,"remember")))}),n.review=s}function Dk(){const e=Gn();e.settings.showRomaji=!e.settings.showRomaji,A(),Lt()}function Fk(e){const t=String(e||"").trim();t&&(Ui(),Lf(t)||z(p()==="ru"?"Системная озвучка недоступна.":"System speech is not available."))}function Ok(e){a.activeTextbookLevel="N5",a.activeJlptLesson="N5",Er();const t=String(a.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return Zk();if(t==="review")return Vk();const n=_t(t);return n?(Z().currentLessonId=n.id,$t("N5",n.id,"n5_lesson_page"),Wt("N5",n,"n5_lesson_page"),Xk(e,n)):Bk(e)}function Bk(e){const t=ly(),n=Ge(),s=He(),r=ay(),o=a.n5Meta||{},l=h(o.principle||{});return`
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
              <a class="btn primary" href="#textbooks/N5/${g(r?.id||"n5-lesson-1")}" data-action="n5-open-lesson" data-id="${g(r?.id||"n5-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n5-review" data-mode="due">${i(n.review)}</button>
              <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
            </div>
          </div>
          ${hn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>zk(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((a.n5Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Js("N5")}
      </section>
    `}function zk(e){const t=xl(e.id),n=Ge();let s=e.kanji.filter(r=>Z().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(cy(t))}</small>
      </a>
    `}function ps(){return a.progress.jlptLessonStudy=iu(Do(),a.progress.jlptLessonStudy||{}),a.progress.jlptLessonStudy}function Ap(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function Rt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Nl(e,t){const n=U(e),s=String(t||"");return!n||!s?!1:!!(bn(n)?.completedLessons?.[s]||ae.has(`${n.toLowerCase()}:${s}`))}function gs(e,t,n){const s=ps(),r=Ap(e,t?.id),o=su();let l=s.sessions[r];l||(l={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[r]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String(t?.id||l.lessonId||""),l.answers||(l.answers={}),l.phase=ru(l.phase),l.startedAt||(l.startedAt=new Date().toISOString()),l.updatedAt||(l.updatedAt=new Date().toISOString());const c=qc({cards:n,session:l,confirmedCompleted:Nl(e,t?.id)});return l.currentIndex=c.currentIndex,l.phase=c.phase,c.status!=="done"&&!Nl(e,t?.id)&&(l.completedAt=null),c.status==="test-ready"&&(l.testOpenedAt||(l.testOpenedAt=l.updatedAt||new Date().toISOString())),c.status==="incomplete"&&(l.testOpenedAt=null),s.activeSessionKey=r,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:r,status:c.status,expectedCardIds:c.expectedCardIds,answeredExpectedCardIds:c.answeredExpectedCardIds,answeredCount:c.answeredCount,currentIndex:c.currentIndex,total:c.total}}function Jk(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function Uk(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(_i).join("")}
      </ul>
    `:""}function Gk(e){const t=sa(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${ec(e)}
          ${n?`
            <div>
              <h3>${i(_("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function Hk(e,t,n,s,r,o,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],d=typeof l.sentence=="function"?l.sentence(n,t):"",u=typeof l.extra=="function"?l.extra(n,t):"",m=l.answerAction||"jlpt-lesson-answer",f=String(e||n.jlpt||"").toUpperCase(),v=Number(s||0),b=F(n.id),C=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(v+1)}</span>
              <span class="pill">${i(b.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(_("strokes"))}</span>`:""}
              ${Hg(n)}
            </div>
            <h2>${i(K(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(v+1,r)} из ${r}`:`Kanji ${Math.min(v+1,r)} of ${r}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${Wg(n,"onyomi",o.onyomi,n.onyomi)}
              ${Wg(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${Uk(c)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${Gk(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(f)}" data-lesson="${g(C)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(f)}" data-lesson="${g(C)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function qk(e,t,n,s,r,o="test-ready"){const l=o==="done";return`
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
    `}function Wk(e,t,n){return`
      <article class="lesson-player-card lesson-study-complete lesson-study-unavailable">
        <div class="lesson-study-complete-copy">
          <span class="pill danger-pill">${i(e||"")} · ${i(p()==="ru"?"карточки недоступны":"cards unavailable")}</span>
          <h2>${i(p()==="ru"?"Не удалось загрузить карточки урока":"Could not load lesson cards")}</h2>
          <p>${i(za())}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${g(e)}">${i(p()==="ru"?"Повторить":"Retry")}</button>
            <a class="btn ghost" href="#textbooks/${g(e)}">${i(p()==="ru"?"К списку уроков":"Lesson list")}</a>
          </div>
        </div>
      </article>
    `}function Mr(e,t,n,s,r={}){const o=gs(e,t,n),l=Jk(o,n),c=Number(o.answeredCount||0),d=Number(o.total||0),u=r.playerId||Rt(e,t?.id,"player"),m=d?M(c,d):0,f=l?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":o.status==="incomplete"?p()==="ru"?"Карточки не загружены":"Cards not loaded":p()==="ru"?"Карточки изучены":"Cards studied",v=l?K(l):o.status==="done"?s.lessonComplete:f;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(f)}</span>
          <strong>${i(v)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${l?Hk(e,t,l,o.currentIndex,d,s,r):o.status==="incomplete"?Wk(e):qk(e,t,s,d,c,o.status)}
      </article>
    `}function Xk(e,t){const n=Ge(),s=mn(t),r=Us(t),o=xl(t.id),l=gs("N5",t,s);let c=o==="completed";const d=`n5:${t.id}`;ae.has(d)&&(c=!0);const u=c,m=r.filter(G=>Ll(G.id)?.correct).length,f=r.length>0&&m===r.length,v=s.filter(G=>Z().studiedKanji[G.kanji]).length,b=t.kanji.length,C=v>=b,j=!c&&f&&C,L=t.kanji.filter(G=>Z().difficultKanji[G]).join(" · "),y=He().find(G=>G.order===t.order+1),x=Rt("N5",t.id,"player"),J=Rt("N5",t.id,"test");return`
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
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,b)}/${b}`,n.kanji,M(l.answeredCount,b))}
            ${E(n.exercises,`${m}/${r.length}`,n.correct,M(m,r.length))}
          </div>
        </article>

        ${Mr("N5",t,s,n,{playerId:x,answerAction:"jlpt-lesson-answer",examples:G=>Mt(G),sentence:G=>Qk(G,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(V(G.reading||""))}</span>
                <small>${i(h({ru:G.ru,en:G.en}))}</small>
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
            ${r.map(G=>Tp(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>Z().studiedKanji[G.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${y?`<a class="btn ghost" href="#textbooks/N5/${g(y.id)}" data-action="n5-open-lesson" data-id="${g(y.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function Qk(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Tp(e){const t=Ge(),n=Ll(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&In("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Up(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Ip(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Ip(e,n)}
      </article>
    `}function Ip(e,t){if(!t)return"";const n=Ge(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Vk(e){const t=Ge(),n=Z().activeReviewMode||"due",s=Ny(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${g(r.id)}">${i(h(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>Yk(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Yk(e,t){const n=Ge(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Bt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Mt(e)[0]?.word||e.hiragana||"")} · ${i(Mt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Zk(e){const t=Ge(),n=a.n5FinalTest||{},s=zp(),r=Z().finalTest,o=en(r,s),l=o.answered,c=o.ready,d=a.finalTestBusy;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const f=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==f)&&(r.percent=f),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const u=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,m=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,M(l,s.length))}
          ${E(t.score,u||m>0?`${m}%`:"—",`${n.passingPercent||80}%`,u||m>0?m:0)}
          ${E(t.mistakes,u?(r.mistakes||[]).length:0,t.difficult,u?M((r.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${i(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Ot("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((f,v)=>ey(f,v)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Ot("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function ey(e,t){const n=Z().finalTest.answers?.[e.id],s=!!Z().finalTest.completedAt,r=a.finalTestModal&&a.finalTestModal.level==="N5"&&a.finalTestModal.kind==="warning"?a.finalTestModal:null,o=!!(r&&Array.isArray(r.missingIds)&&r.missingIds.includes(e.id));return`
      <article id="${g(Vs("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(l=>{const c=n===l.value;return`<button class="btn ${s&&l.value===e.answer?"success":c?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(l.value)}">${i(l.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ge().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ge(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Rp(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function _p(e){return U(e)||String(e||"").toUpperCase()}function Pp(e){const t=_p(e);return Array.isArray(a.jlptReadingByLevel?.[t])?a.jlptReadingByLevel[t]:[]}function Cl(e){const t=a.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function Mp(e){return V(Xr(String(e?.text||"")).replace(/\s+/g," ").trim())}function ty(e){const t=U(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function ny(){const e=Array.isArray(a.cards)?a.cards:[];if(!e.length)return[];const t=[];return De.forEach(n=>{Pp(n).forEach((s,r)=>{const o=Cl(s),l=Mp(s),c=Hl({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,ty(n));c&&(c.kind="cloze",c.tiles=Fn(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=o.title,c.title=o.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=r+1,t.push(c))})}),t}function sy(e){const t=Cl(e),n=Mp(e),s=n?Vg(n):"",r=h(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Yl())}</summary>
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
            <span>${i(Yl())}</span>
            <strong>${i(r||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function Js(e){const t=Pp(e);if(!t.length)return"";const n=Rp(),s=_p(e),r=da(s,"textbook_reading_block"),o=sr(s);return(r||o)&&A(),`
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
          ${t.map((l,c)=>ry(l,s,c)).join("")}
        </div>
      </section>
    `}function ry(e,t,n){const s=Rp(),r=Cl(e),o=Array.isArray(e?.questions)?e.questions:[];return`
      <article class="jlpt-reading-card">
        <div class="jlpt-reading-card-head">
          <div class="tag-row compact-tags">
            <span class="pill">${i(t)}</span>
            <span class="pill">${i(n+1)}</span>
            ${e.genre?`<span class="pill">${i(e.genre)}</span>`:""}
          </div>
          <h3>${i(e.title||`${t}-${n+1}`)}</h3>
          ${r.title.ru||r.title.en?`<p class="jlpt-reading-meta">${i(h(r.title))}</p>`:""}
          ${e.goal?`<p class="jlpt-reading-meta">${i(s.goal)}: ${i(e.goal)}</p>`:""}
          ${e.source?`<p class="jlpt-reading-meta">${i(s.source)}: ${i(e.source)}</p>`:""}
        </div>
        <div class="jlpt-reading-text">${i(e.text||"")}</div>
        ${sy(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(l=>`<li>${i(l)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function Er(){a.progress.n5Course=lu(Oo(),a.progress.n5Course||{});const e=He();!_t(a.progress.n5Course.currentLessonId)&&e[0]&&(a.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n5Course.completedLessons[s.id]);return!a.progress.n5Course.currentLessonId&&n&&(a.progress.n5Course.currentLessonId=n.id),a.progress.n5Course}function Z(){return Er()}function He(){return a.n5Textbook?.items||[]}function _t(e){const t=String(e||"");return t&&He().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function ay(){return _t(Z().currentLessonId)||He().find(e=>!Z().completedLessons[e.id])||He()[0]||null}function mn(e){return(e?.kanji||[]).map(t=>iy(t,e)).filter(Boolean)}function Pt(){const e=new Set;return He().flatMap(t=>mn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function iy(e,t=null){const n=String(e||""),s=a.n5KanjiCatalog?.find(l=>l.kanji===n)||null,r=a.cards.find(l=>l.kanji===n&&String(l.jlpt||"").toUpperCase()==="N5")||a.cards.find(l=>l.kanji===n)||null,o=t?.id||s?.lessonId||null;return r&&s?Ja({...r,lessonId:r.lessonId||o},s):r||(s?Ja({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function Kr(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:V(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:V(e.hiragana||""),romaji:e.romaji||"",translation:K(e)}]}function Mt(e){return Kr(e,e.examples)}function oy(e,t){const n=t?.word||e.kanji,s=V(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${K(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${K(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function ly(){const e=Pt(),t=Z(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{F(s.id).state!=="New"&&n.add(s.kanji)}),{total:a.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:ms(),reviews:e.reduce((s,r)=>s+Number(F(r.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function xl(e){const t=Z(),n=`n5:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":_t(e)?.kanji?.some(r=>t.studiedKanji[r]||t.difficultKanji[r])?"started":"new"}function cy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ms(){return He().filter(t=>xl(t.id)==="completed").length}function Us(e){const t=mn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n5Exercises?.types||[]).map(j=>[j.type,j.title])),r=Object.fromEntries((a.n5Exercises?.types||[]).map(j=>[j.type,j])),o=j=>r[j]||{rewardXp:a.n5Meta?.rewards?.exerciseXp||7,rewardMoon:a.n5Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:Yt({value:c.id,label:K(c)},t.slice(1).map(j=>({value:j.id,label:K(j)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Yt({value:d.kanji,label:d.kanji},t.filter(j=>j.id!==d.id).map(j=>({value:j.kanji,label:j.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Mt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:Yt({value:m.reading,label:m.reading},t.flatMap(j=>Mt(j).map(L=>({value:L.reading,label:L.reading}))).filter(j=>j.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:Yt({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(j=>({value:h({ru:j.ru,en:j.en}),label:h({ru:j.ru,en:j.en})})),1),...o("sentence")});const v=t[3]||t[0],b=Mt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ee(b)}В»?`:`Which word matches "${Ee(b)}"?`,answer:b.word,answerLabel:b.word,kanji:v.kanji,cardId:v.id,options:Yt({value:b.word,label:b.word},t.flatMap(j=>Mt(j).map(L=>({value:L.word,label:L.word}))).filter(j=>j.value!==b.word),2),...o("missing-word")});const C=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")}),l.slice(0,a.n5Exercises?.lessonQuestionCount||6).map(j=>({...j,level:"N5",lessonId:e.id}))}function Yt(e,t,n=0){const s=new Set([String(e.value)]),r=[e];if(t.forEach(c=>{const d=String(c.value||"");!d||s.has(d)||r.length>=4||(s.add(d),r.push(c))}),Pt().forEach(c=>{if(r.length>=4)return;const d={value:c.id,label:c.kanji};s.has(String(d.value))||(s.add(String(d.value)),r.push(d))}),r.length<=1)return r;const l=n%r.length;return[...r.slice(l),...r.slice(0,l)]}function Ep(e){for(const t of He()){const n=Us(t).find(s=>s.id===e);if(n)return n}return null}function In(e,t,n=""){return a.route==="review"&&a.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(a.activeExerciseReviewId||"")===String(t||"")&&(!n||String(a.activeExerciseReviewSource||"")===String(n||""))}function Dr(e,t,n){return In(e,n)?a.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function dy(e,t,n){const s=U(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const r=e.exerciseSrs[String(n.id)]||null;if(r)return ys(r,{level:s,lessonId:n.lessonId||r.lessonId||"",exerciseId:n.id,cardId:n.cardId||r.cardId||"",kanji:n.kanji||r.kanji||"",type:n.type||r.type||"",title:n.title||r.title||null,prompt:n.prompt||r.prompt||"",answer:n.answer||r.answer||"",answerLabel:n.answerLabel||r.answerLabel||""});const o=tr(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function uy(e,t,n,s){if(!e||!n)return;const r=U(t);r&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=ys(s,{level:r,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function Fr(e,t,n,s,r,o={}){const l=U(e);if(!l||!t||!n)return;const c=new Date().toISOString(),d=In(l,n.id);if(d&&a.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:r,checkedAt:c};d?(a.reviewExerciseResults||(a.reviewExerciseResults={}),a.reviewExerciseResults[n.id]=u,a.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const m=se(dy(t,l,n)||tr(l,n.lessonId||"",n.id,n)),f=we(m,r?"good":"again");if(uy(t,l,n,f),Kt(m,f,r?"good":"again"),ve(),r){if(a.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,o.markCompleted?.(c),(o.markStudied||(()=>{}))();const b=Number(o.rewardXp||0),C=Number(o.rewardMoon||0);(b||C)&&H(b,C,o.rewardKey||`exercise:${n.id}`)}}else if(a.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const b=n.answerLabel||n.answer;b&&o.markWordMistake?.(b)}d&&(a.pendingFocus="__scroll-top__"),I(),A(),Ct("textbook exercise post-render effects",()=>{D(r?"answer_correct":"answer_wrong"),Q()})}function Kp(e){const t=U(e?.level||"");return t==="N5"?{xp:Number(a.n5Meta?.rewards?.exerciseXp||7),moon:Number(a.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(a.n4Meta?.rewards?.readingXp||a.n4Meta?.rewards?.exerciseXp||10),moon:Number(a.n4Meta?.rewards?.readingMoon||a.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(a.n3Meta?.rewards?.readingXp||a.n3Meta?.rewards?.exerciseXp||10),moon:Number(a.n3Meta?.rewards?.readingMoon||a.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(a.n2Meta?.rewards?.readingXp||a.n2Meta?.rewards?.exerciseXp||10),moon:Number(a.n2Meta?.rewards?.readingMoon||a.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(a.n1Meta?.rewards?.readingXp||a.n1Meta?.rewards?.exerciseXp||10),moon:Number(a.n1Meta?.rewards?.readingMoon||a.n1Meta?.rewards?.exerciseMoon||1)}}function Dp(e,t,n,s={}){if(!e?.id)return;const r=new Date().toISOString(),o=In(e.level,e.id,"reading"),l=se(Jn(e)||zn(e));if(a.reviewExerciseResults||(a.reviewExerciseResults={}),e.kind==="cloze"){l.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():l.selectedIndices||[],l.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(L=>({kanji:String(L?.kanji||""),reading:String(L?.reading||"")})).filter(L=>L.kanji):l.selectedTiles||[],l.selectedText=String(t||""),l.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():l.wrongIndexes||[],l.completed=!0,l.completedAt=r,l.correct=!!n,l.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:r}},$s(e,l),a.reviewExerciseResults[e.id]=se(l),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1;const b=se(l),C=we(b,n?"good":"again");C.selectedIndices=l.selectedIndices,C.selectedTiles=l.selectedTiles,C.selectedText=l.selectedText,C.wrongIndexes=l.wrongIndexes,C.completed=!0,C.completedAt=r,C.correct=!!n,C.answers=l.answers,$s(e,C),a.reviewExerciseResults[e.id]=se(C),Kt(b,C,n?"good":"again"),ve();const j=Kp(e);n?H(j.xp,j.moon,`reading:${e.id}`):H(Math.max(1,Math.round(j.xp*.35)),0,`reading:${e.id}:again`),o&&(a.pendingFocus="__scroll-top__"),o&&Qi("reading-cloze"),I(),A(),Ct("reading cloze post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Q()});return}const c=e.question||e.questions?.[0]||null,d=String(s.questionKey||c?.id||e.id);if(l.answers||(l.answers={}),l.answers[d])return;if(l.answers[d]={selected:String(t||""),correct:!!n,checkedAt:r},l.completed=!!d&&Object.keys(l.answers).length>=lc(),l.completedAt=l.completed?r:l.completedAt||null,l.correct=l.completed?Object.values(l.answers).every(b=>!!b?.correct):!1,l.selectedText=String(t||""),$s(e,l),a.reviewExerciseResults[e.id]=se(l),n?a.progress.totalCorrect+=1:a.progress.totalWrong+=1,A(),!l.completed){I(),Ct("reading question post-render sound",()=>{D(n?"answer_correct":"answer_wrong")});return}const u=se(l),m=Object.values(l.answers).every(b=>!!b?.correct),f=we(u,m?"good":"again");f.answers=l.answers,f.completed=!0,f.completedAt=r,f.correct=m,f.selectedText=String(t||""),f.wrongQuestions=Object.entries(l.answers).filter(([,b])=>!b?.correct).map(([b])=>b),$s(e,f),a.reviewExerciseResults[e.id]=se(f),Kt(u,f,m?"good":"again"),ve();const v=Kp(e);m?H(v.xp,v.moon,`reading:${e.id}`):H(Math.max(1,Math.round(v.xp*.25)),0,`reading:${e.id}:again`),o&&(a.pendingFocus="__scroll-top__"),o&&Qi("reading-exercise"),I(),A(),Ct("reading exercise post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Q()})}function py(e){const t=Ys();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),r=s===String(n.answer||"");Dp(t.exercise,s,r,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function gy(e){const t=Ys();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=se(Jn(n)||zn(n));if(s.completed||s.selectedIndices?.includes(e))return;const r=Math.max(1,Et(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=r){z(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),$s(n,s),a.activeExerciseReviewSelection=s.selectedIndices.slice(),a.reviewExerciseResults[n.id]=se(s),A(),s.selectedIndices.length>=r){Fp();return}I()}function my(){const e=Ys();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=se(Jn(t)||zn(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),a.activeExerciseReviewSelection=n.selectedIndices.slice(),a.reviewExerciseResults[t.id]=se(n),$s(t,n),A(),I())}function fy(){const e=Ys();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=se(Jn(t)||zn(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],a.activeExerciseReviewSelection=[],a.reviewExerciseResults[t.id]=se(n),$s(t,n),A(),I())}function Fp(){const e=Ys();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=Et(t),s=se(Jn(t)||zn(t)),r=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(r.length<n.length){z(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=r.map(d=>t.tiles?.[d]).filter(Boolean),l=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),c=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);Dp(t,o.map(d=>d.kanji).join(""),l,{selectedIndices:r,selectedTiles:o,wrongIndexes:c})}function hy(){a.activeExerciseReviewTranslationOpen=!a.activeExerciseReviewTranslationOpen,I()}function Ll(e){return Dr("N5",Z(),e)}function vy(e){const t=Ep(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;Op(t,n,s)}function wy(e){const t=Ep(e);if(!t)return;const n=document.getElementById(Up(t.id)),s=n?String(n.value||"").trim():"";Op(t,s,s===t.answer)}function Op(e,t,n){const s=Z();Fr("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||a.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>Gs(e.kanji,e.cardId),markDifficult:()=>Or(e.kanji,e.cardId),markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function by(e,t,n,s){var C;const r=typeof window<"u"?window.scrollX:0,o=typeof window<"u"?window.scrollY:0,l=()=>{Xt(r,o),requestAnimationFrame(()=>{Xt(r,o),requestAnimationFrame(()=>Xt(r,o))}),window.setTimeout(()=>Xt(r,o),120),window.setTimeout(()=>Xt(r,o),320)},c=U(e)||String(e||"").toUpperCase(),d=c==="N5"?_t(t):c==="N4"?Rn(t):c==="N3"?Pn(t):c==="N2"?En(t):c==="N1"?fs(t):null;if(!d)return;const u=tl(c,d),m=u.find(j=>String(j.id)===String(n))||re(n);if(!m)return;const f=gs(c,d,u);if(f.session.answers?.[m.id])return;const v=new Date().toISOString();f.session.answers[m.id]={remembered:!!s,rating:s?"good":"again",answeredAt:v};const b=qc({cards:u,session:f.session,confirmedCompleted:Nl(c,d.id)});f.session.currentIndex=b.currentIndex,f.session.phase=b.phase,f.session.updatedAt=v,b.status==="test-ready"&&((C=f.session).testOpenedAt||(C.testOpenedAt=v)),a.pendingFocus=null,Lt(),l(),A(),wu(`${c} lesson SRS post-render commit`,()=>{const j=s?"good":"again";c==="N5"?Bp(m.id,j,"review"):c==="N4"?Yp(m.id,j,"review"):c==="N3"?dg(m.id,j,"review"):c==="N2"?$g(m.id,j,"review"):c==="N1"&&_g(m.id,j,"review"),l()})}function Bp(e,t,n="review"){const s=re(e);if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=se(F(s.id)),d=we(c,o,l);a.progress.cards[s.id]=d,Kt(c,d,l),ve(),Gs(s.kanji,s.id),Z().srsKanji[s.kanji]=new Date().toISOString(),r?(Or(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`)):Me(t)?(Or(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n5Meta?.rewards?.knowXp||6:a.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`)),Lt(),A(),Ct("N5 SRS post-render effects",()=>{D(Me(t)?"answer_wrong":"answer_correct"),Q()})}function ky(e){const t=re(e);if(!t)return;const n=Z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Gs(t.kanji,t.id),H(8,1,`n5_writing:${t.id}`)),Q(),A(),I()}function yy(e){const t=_t(e);if(!t)return;const n=Z(),s=`n5:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){I();return}const r=mn(t);if(r.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof z=="function"&&z(v);return}const l=Us(t);if(!(l.length>0&&l.every(v=>Ll(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(v);return}ae.add(s),mn(t).forEach(v=>{Gs(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const b=F(v.id);b.state==="New"&&(a.progress.cards[v.id]=we(se(b),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=He().find(v=>v.order===t.order+1)?.id||t.id;const d=ps(),u=d.sessions[n5SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=r.length,d.activeSessionKey=n5SessKey,d.lastUpdatedAt=v}Z(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.completedLessons=a.progress.n5Course.completedLessons||{},a.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),A({immediate:!0}),ms()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],a.progress.unlockedJlptLevels.includes("N5")||a.progress.unlockedJlptLevels.push("N5"),a.progress.unlockedJlptLevels.includes("N4")||a.progress.unlockedJlptLevels.push("N4"));const m=a.n5Meta?.rewards?.lessonCompleteXp||45,f=a.n5Meta?.rewards?.lessonCompleteMoon||6;H(m,f,`n5_lesson:${t.id}`),or("N5",t.id),at({title:`${Ge().lessonComplete}: ${h(t.title)}`,message:Ge().lessonCompleteText,xp:m,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),I()}function Gs(e,t=null){if(!e)return;const n=Z();Es(n,e)}function Or(e,t=null,n=!0){if(e&&(Z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(a.progress.cards[t]=we(se(s),"again"))}}function $y(e){const t=_t(e);t&&(nn("textbook-lesson",{level:"N5",lessonId:t.id}),Z().currentLessonId=t.id,$t("N5",t.id,"n5_lesson_open"),Wt("N5",t,"n5_lesson_open"),Br(t.id))}function jy(){Br("")}function Sy(e=null){e&&(Z().activeReviewMode=e),Br("review")}function Br(e){a.route="textbooks",a.activeTextbookLevel="N5",a.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";lt(t),A(),ce(),At()}function Ny(e="due"){const t=Date.now(),n=Z(),s=Pt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=F(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function zp(){const e=Pt(),t=He(),n=a.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(a.n5FinalTest?.questionCount||24,Math.max(e.length,1)),r=[];for(let o=0;o<s;o+=1){const l=e[o*7%e.length]||e[o%e.length],c=n[o%n.length],d=t.find(u=>u.kanji.includes(l.kanji))||t[0];r.push(Cy(c,l,d,o))}return r.filter(Boolean)}function Cy(e,t,n,s){const o=Mt(t)[0],l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:Yt({value:t.id,label:K(t)},Pt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:Yt({value:o.reading,label:o.reading},Pt().flatMap(c=>Mt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:Yt({value:c,label:c},He().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ee(o),answer:c,answerLabel:c,options:Yt({value:c,label:c},Pt().flatMap(d=>Mt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==c),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:Yt({value:t.kanji,label:t.kanji},Pt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function xy(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Z().finalTest.answers[t]=n,A(),I())}function Jp(e=!1){if(a.finalTestBusy)return;const t=Z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}a.finalTestBusy=!0;try{const n=zp(),s=a.n5FinalTest||{},r=Ge(),o=en(t,n),l=ZS(s),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const x=o.firstMissingId?`#${Vs("n5",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=x,A();return}let u=0;const m=[],f=[];n.forEach(x=>{const J=String(t.answers?.[x.id]||"").trim();J===x.answer?(u+=1,Gs(x.kanji,x.cardId)):(J||f.push(x),m.push({id:x.id,kanji:x.kanji,answer:x.answerLabel,selected:J}),Or(x.kanji,x.cardId))});const v=n.length?Math.round(u/n.length*100):0,b=!!t.completedAt,C=!!t.passed,j=Math.max(0,m.length-f.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(x=>x.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!b){const x=Number(s?.rewards?.completeXp||120),J=Number(s?.rewards?.completeMoon||20);L+=x,y+=J,H(x,J,"n5_final_complete")}if(t.passed&&!C){const x=Number(s?.rewards?.passXp||80),J=Number(s?.rewards?.passMoon||12);L+=x,y+=J,H(x,J,"n5_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,pa("N5",t),Z(),a.progress.n5Course=a.progress.n5Course||{},a.progress.n5Course.finalTest=a.progress.n5Course.finalTest||{},Object.assign(a.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),A({immediate:!0}),a.finalTestModal={kind:"result",level:"N5",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:l,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,I()}}function Ly(){Z().finalTest=Oo().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),I()}function Up(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Ay(e){a.activeTextbookLevel="N4",a.activeJlptLesson="N4";const t=Al();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return By();if(n==="review")return My();if(n==="kanji")return Ky();if(n==="grammar")return Dy();if(n==="reading")return Fy();if(n==="listening")return Oy();const s=Rn(n);return s?(X().currentLessonId=s.id,$t("N4",s.id,"n4_lesson_page"),Wt("N4",s,"n4_lesson_page"),Ry(e,s)):Ty(e)}function Ty(e){const t=Uy(),n=xe(),s=pt(),r=Jy(),o=a.n4Meta||{},l=h(o.principle||{});return`
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
              <a class="btn primary" href="#jlpt/n4/${g(r?.id||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${g(r?.id||"n4-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${i(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${i(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${hn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>Iy(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((a.n4Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Js("N4")}
      </section>
    `}function Iy(e){const t=Xp(e.id),n=xe();let s=e.kanji.filter(r=>X().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Gy(t))}</small>
      </a>
    `}function Ry(e,t){const n=xe(),s=zr(t),r=bi(t),o=Xp(t.id),l=gs("N4",t,s);let c=o==="completed";const d=`n4:${t.id}`;ae.has(d)&&(c=!0);const u=c,m=r.filter(G=>Il(G.id)?.correct).length,f=r.length>0&&m===r.length,v=s.filter(G=>X().studiedKanji[G.kanji]).length,b=t.kanji.length,C=v>=b,j=!c&&f&&C,L=t.kanji.filter(G=>X().difficultKanji[G]).join(" · "),y=pt().find(G=>G.order===t.order+1),x=Rt("N4",t.id,"player"),J=Rt("N4",t.id,"test");return`
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
              ${t.grammarFocus.map(G=>`<span class="pill">${i(G)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${m}/${r.length}`,n.correct,M(m,r.length))}
          </div>
        </article>

        ${Mr("N4",t,s,n,{playerId:x,answerAction:"jlpt-lesson-answer",examples:G=>gt(G),sentence:G=>_y(G,t)})}

        ${Py(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(V(G.reading||""))}</span>
                <small>${i(h({ru:G.ru,en:G.en}))}</small>
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
            ${r.map(G=>Gp(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>X().studiedKanji[G.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${r.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${y?`<a class="btn ghost" href="#jlpt/n4/${g(y.id)}" data-action="n4-open-lesson" data-id="${g(y.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function _y(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(xe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Py(e){const t=xe(),n=(e.grammarFocus||[]).map(s=>Tl(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(X().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Gp(e){const t=xe(),n=Il(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&In("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(ng(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Hp(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Hp(e,n)}
      </article>
    `}function Hp(e,t){if(!t)return"";const n=xe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function My(e){const t=xe(),n=X().activeReviewMode||"due",s=o$(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${g(r.id)}">${i(h(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>Ey(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Ey(e,t){const n=xe(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Bt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(gt(e)[0]?.word||e.hiragana||"")} · ${i(gt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Ky(e){const t=xe(),n=qe();return`
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
              <div class="n5-kanji-topline"><span class="pill">${r+1}/170</span><span class="pill">${i(F(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(gt(s)[0]?.word||"")} · ${i(gt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Dy(e){const t=xe();return`
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
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(V(r.reading||""))}</span><small>${i(h({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Fy(e){const t=xe(),n=da("N4","n4_reading_page"),s=sr("N4");return(n||s)&&A(),`
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
          ${a.n4Reading.map(r=>qp(r,"reading")).join("")}
        </div>
      </section>
    `}function Oy(e){const t=xe();return`
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
          ${a.n4Listening.map(n=>qp(n,"listening")).join("")}
        </div>
      </section>
    `}function qp(e,t){const n=xe(),s=t==="reading"?X().completedReading[e.id]:X().completedListening[e.id],r=t==="reading"?X().readingAnswers:X().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n4-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function By(e){const t=xe(),n=a.n4FinalTest||{},s=eg(),r=X().finalTest,o=en(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const m=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==m)&&(r.percent=m),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
            ${Ot("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>zy(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${a.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Ot("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function zy(e,t){const n=X().finalTest.answers?.[e.id],s=!!X().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(xe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function xe(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Al(){a.progress.n4Course=cu(Bo(),a.progress.n4Course||{});const e=pt();!Rn(a.progress.n4Course.currentLessonId)&&e[0]&&(a.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n4Course.completedLessons[s.id]);return!a.progress.n4Course.currentLessonId&&n&&(a.progress.n4Course.currentLessonId=n.id),a.progress.n4Course}function X(){return Al()}function pt(){return a.n4Textbook?.items||[]}function Rn(e){const t=String(e||"");return t&&pt().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function Jy(){return Rn(X().currentLessonId)||pt().find(e=>!X().completedLessons[e.id])||pt()[0]||null}function zr(e){return(e?.kanji||[]).map(t=>Wp(t)).filter(Boolean)}function qe(){const e=new Set;return(a.n4KanjiCatalog||[]).map(t=>Wp(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Wp(e){const t=String(e||""),n=a.n4KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N4")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ua(s,n):s||(n?Ua({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Tl(e){const t=String(e||"");return a.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function gt(e){return Kr(e,e.examples)}function Uy(){const e=qe(),t=X(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(r=>{F(r.id).state!=="New"&&n.add(r.kanji)});const s={...t.completedLessons||{}};for(const r of ae)if(r.startsWith("n4:")){const o=r.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:a.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((r,o)=>r+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Xp(e){const t=X(),n=`n4:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":Rn(e)?.kanji?.some(r=>t.studiedKanji[r]||t.difficultKanji[r])?"started":"new"}function Gy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function bi(e){const t=zr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n4Exercises?.types||[]).map(y=>[y.type,y.title])),r=Object.fromEntries((a.n4Exercises?.types||[]).map(y=>[y.type,y])),o=y=>r[y]||{rewardXp:a.n4Meta?.rewards?.exerciseXp||9,rewardMoon:a.n4Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:tt({value:c.id,label:K(c)},t.slice(1).map(y=>({value:y.id,label:K(y)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:tt({value:d.kanji,label:d.kanji},t.filter(y=>y.id!==d.id).map(y=>({value:y.kanji,label:y.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=gt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:tt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(y=>gt(y).map(x=>({value:x.reading,label:x.reading}))).filter(y=>y.value&&y.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:tt({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),1),...o("sentence")});const v=t[3]||t[0],b=gt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ee(b)}В»?`:`Which word matches "${Ee(b)}"?`,answer:b.word||v.kanji,answerLabel:b.word||v.kanji,kanji:v.kanji,cardId:v.id,options:tt({value:b.word||v.kanji,label:b.word||v.kanji},t.flatMap(y=>gt(y).map(x=>({value:x.word,label:x.word}))).filter(y=>y.value&&y.value!==b.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const j=Tl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:tt({value:j.answer,label:j.answer},j.options.filter(y=>y!==j.answer).map(y=>({value:y,label:y})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:h({ru:L.ru,en:L.en}),answerLabel:h({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:tt({value:h({ru:L.ru,en:L.en}),label:h({ru:L.ru,en:L.en})},n.filter(y=>y.jp!==L.jp).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),2),...o("mini-reading")}),l.slice(0,a.n4Exercises?.lessonQuestionCount||8).map(y=>({...y,level:"N4",lessonId:e.id}))}function tt(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),qe().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function Qp(e){for(const t of pt()){const n=bi(t).find(s=>s.id===e);if(n)return n}return null}function Il(e){return Dr("N4",X(),e)}function Hy(e){const t=Qp(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Vp(t,s,r)}function qy(e){const t=Qp(e);if(!t)return;const n=document.getElementById(ng(t.id)),s=n?String(n.value||"").trim():"";Vp(t,s,s===t.answer)}function Vp(e,t,n){const s=X();Fr("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||a.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>Hs(e.kanji,e.cardId),markDifficult:()=>Jr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function Yp(e,t,n="review"){const s=re(e)||qe().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=se(F(s.id)),d=we(c,o,l);a.progress.cards[s.id]=d,Kt(c,d,l),ve(),Hs(s.kanji,s.id),X().srsKanji[s.kanji]=new Date().toISOString(),r?(Jr(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`)):Me(t)?(Jr(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n4Meta?.rewards?.knowXp||7:a.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`)),Lt(),A(),Ct("N4 SRS post-render effects",()=>{D(Me(t)?"answer_wrong":"answer_correct"),Q()})}function Wy(e){const t=re(e)||qe().find(s=>String(s.id)===String(e));if(!t)return;const n=X();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Hs(t.kanji,t.id),H(9,1,`n4_writing:${t.id}`)),Q(),A(),I()}function Xy(e){const t=Rn(e);if(!t)return;const n=X(),s=`n4:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){I();return}const r=zr(t);if(r.filter(b=>n.studiedKanji[b.kanji]).length<t.kanji.length){const b=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(b);return}const l=bi(t);if(!(l.length>0&&l.every(b=>Il(b.id)?.correct))){const b=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(b);return}ae.add(s),zr(t).forEach(b=>{Hs(b.kanji,b.id),n.srsKanji[b.kanji]=n.srsKanji[b.kanji]||new Date().toISOString();const C=F(b.id);C.state==="New"&&(a.progress.cards[b.id]=we(se(C),"good"))}),(t.grammarFocus||[]).map(b=>Tl(b)).filter(Boolean).forEach(b=>{n.completedGrammar[b.id]=n.completedGrammar[b.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=pt().find(b=>b.order===t.order+1)?.id||t.id;const d=ps(),u=d.sessions[n4SessKey];if(u){const b=new Date().toISOString();u.phase="done",u.completedAt=b,u.updatedAt=b,u.currentIndex=r.length,d.activeSessionKey=n4SessKey,d.lastUpdatedAt=b}X(),Object.keys(n.completedLessons||{}).length>=9&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],a.progress.unlockedJlptLevels.includes("N4")||a.progress.unlockedJlptLevels.push("N4"),a.progress.unlockedJlptLevels.includes("N3")||a.progress.unlockedJlptLevels.push("N3"));const f=a.n4Meta?.rewards?.lessonCompleteXp||65,v=a.n4Meta?.rewards?.lessonCompleteMoon||8;H(f,v,`n4_lesson:${t.id}`),or("N4",t.id),at({title:`${xe().lessonComplete}: ${h(t.title)}`,message:xe().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),I()}function Hs(e,t=null){if(!e)return;const n=X();Es(n,e)}function Jr(e,t=null,n=!0){if(e&&(X().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(a.progress.cards[t]=we(se(s),"again"))}}function Qy(e,t=""){const n=a.n4Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,r=s===n.answer,o=X();o.grammarResults[n.id]={selected:s,correct:r,checkedAt:new Date().toISOString()},r&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),H(a.n4Meta?.rewards?.grammarXp||10,a.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):r||(a.progress.totalWrong+=1,D("answer_wrong")),ve(),Q(),A(),I()}function Vy(e,t="0",n=""){Zp("reading",e,t,n)}function Yy(e,t="0",n=""){Zp("listening",e,t,n)}function Zp(e,t,n="0",s=""){const o=(e==="reading"?a.n4Reading:a.n4Listening).find(b=>b.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=X(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening;if(f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!v[o.id]){v[o.id]=new Date().toISOString();const b=e==="reading"?a.n4Meta?.rewards?.readingXp||35:a.n4Meta?.rewards?.listeningXp||30,C=e==="reading"?a.n4Meta?.rewards?.readingMoon||4:a.n4Meta?.rewards?.listeningMoon||3;H(b,C,`n4_${e}:${o.id}`),a.progress.totalCorrect+=1,D("answer_correct")}else d||(a.progress.totalWrong+=1,D("answer_wrong"));ve(),Q(),A(),I()}function Zy(e){const t=Rn(e);t&&(nn("textbook-lesson",{level:"N4",lessonId:t.id}),X().currentLessonId=t.id,$t("N4",t.id,"n4_lesson_open"),Wt("N4",t,"n4_lesson_open"),_n(t.id))}function e$(){_n("")}function t$(e=null){e&&(X().activeReviewMode=e),_n("review")}function n$(){_n("kanji")}function s$(){_n("grammar")}function r$(){_n("reading")}function a$(){_n("listening")}function i$(){_n("final-test")}function _n(e){a.route="textbooks",a.activeTextbookLevel="N4",a.activeTextbookSubroute=e||null,X().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";lt(t),Q(),A(),ce(),At()}function o$(e="due"){const t=Date.now(),n=X(),s=qe();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=F(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function eg(){const e=qe();if(!e.length)return[];const t=a.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=pt().find(d=>d.kanji.includes(o.kanji))||pt()[0];s.push(l$(l,o,c,r))}return s.filter(Boolean)}function l$(e,t,n,s){const o=gt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:tt({value:t.id,label:K(t)},qe().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:tt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},qe().flatMap(c=>gt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:tt({value:c,label:c},pt().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ee(o),answer:c,answerLabel:c,options:tt({value:c,label:c},qe().flatMap(d=>gt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n4Grammar[s%Math.max(a.n4Grammar.length,1)];if(c)return{id:`n4-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:tt({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n4Reading[s%Math.max(a.n4Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n4-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:tt({value:t.kanji,label:t.kanji},qe().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function c$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(X().finalTest.answers[t]=n,A(),I())}function tg(e=!1){if(a.finalTestBusy)return;const t=X().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}a.finalTestBusy=!0;try{const n=eg(),s=a.n4FinalTest||{},r=xe(),o=en(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const x=o.firstMissingId?`#${Vs("n4",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=x,A();return}let u=0;const m=[],f=[];n.forEach(x=>{const J=String(t.answers?.[x.id]||"").trim();if(J===x.answer){if(u+=1,x.kanji&&Hs(x.kanji,x.cardId),x.grammarId){const G=X();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else J||f.push(x),m.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:J}),x.kanji&&Jr(x.kanji,x.cardId)});const v=n.length?Math.round(u/n.length*100):0,b=!!t.completedAt,C=!!t.passed,j=Math.max(0,m.length-f.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(x=>x.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!b){const x=Number(s?.rewards?.completeXp||180),J=Number(s?.rewards?.completeMoon||35);L+=x,y+=J,H(x,J,"n4_final_complete")}if(t.passed&&!C){const x=Number(s?.rewards?.passXp||90),J=Number(s?.rewards?.passMoon||15);L+=x,y+=J,H(x,J,"n4_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,pa("N4",t),X(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N4",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:l,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,I()}}function d$(){X().finalTest=Bo().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),I()}function ng(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function u$(e){a.activeTextbookLevel="N3",a.activeJlptLesson="N3";const t=_l();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return S$();if(n==="review")return w$();if(n==="kanji")return k$();if(n==="grammar")return y$();if(n==="reading")return $$();if(n==="listening")return j$();const s=Pn(n);return s?(q().currentLessonId=s.id,$t("N3",s.id,"n3_lesson_page"),Wt("N3",s,"n3_lesson_page"),m$(e,s)):p$(e)}function p$(e){const t=x$(),n=$e(),s=mt(),r=C$(),o=a.n3Meta||{},l=h(o.principle||{});return`
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
              <a class="btn primary" href="#jlpt/n3/${g(r?.id||"n3-lesson-1")}" data-action="n3-open-lesson" data-id="${g(r?.id||"n3-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n3-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n3-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n3-grammar">${i(n.grammarN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-reading">${i(n.readingN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-listening">${i(n.listeningN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${hn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>g$(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((a.n3Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Js("N3")}
      </section>
    `}function g$(e){const t=og(e.id),n=$e();let s=e.kanji.filter(r=>q().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(L$(t))}</small>
      </a>
    `}function m$(e,t){const n=$e(),s=Ur(t),r=ki(t),o=og(t.id),l=gs("N3",t,s);let c=o==="completed";const d=`n3:${t.id}`;ae.has(d)&&(c=!0);const u=c,m=r.filter(B=>Ml(B.id)?.correct).length,f=r.length>0&&m===r.length,v=s.filter(B=>q().studiedKanji[B.kanji]).length,b=t.kanji.length,C=v>=b,j=!c&&f&&C,L=t.kanji.filter(B=>q().difficultKanji[B]).join(" · "),y=mt().find(B=>B.order===t.order+1),x=sg(t),J=x?!!q().completedReading[x.id]:!1,G=Rt("N3",t.id,"player"),Cs=Rt("N3",t.id,"test");return`
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
              ${t.grammarFocus.map(B=>`<span class="pill">${i(B)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${m}/${r.length}`,n.correct,M(m,r.length))}
          </div>
        </article>

        ${Mr("N3",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:B=>ft(B),sentence:B=>h$(B,t)})}

        ${v$(t)}

        ${f$(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(B=>`
              <article>
                <strong>${i(B.jp)}</strong>
                <span>${i(V(B.reading||""))}</span>
                <small>${i(h({ru:B.ru,en:B.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Cs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(B=>rg(B)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(B=>q().studiedKanji[B.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${r.length}</span>
              ${x?`<span class="pill">${i(n.miniReadingTitle)}: ${i(J?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${y?`<a class="btn ghost" href="#jlpt/n3/${g(y.id)}" data-action="n3-open-lesson" data-id="${g(y.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function sg(e){return e?.miniReadingId&&a.n3Reading.find(t=>t.id===e.miniReadingId)||null}function f$(e){const t=$e(),n=sg(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Rl(n,"reading")}
      </section>
    `:""}function h$(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i($e().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function v$(e){const t=$e(),n=(e.grammarFocus||[]).map(s=>Pl(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(q().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function rg(e){const t=$e(),n=Ml(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&In("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(mg(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${ag(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${ag(e,n)}
      </article>
    `}function ag(e,t){if(!t)return"";const n=$e(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function w$(e){const t=$e(),n=q().activeReviewMode||"due",s=U$(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${g(r.id)}">${i(h(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>b$(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function b$(e,t){const n=$e(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Bt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(ft(e)[0]?.word||e.hiragana||"")} · ${i(ft(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function k$(e){const t=$e(),n=We();return`
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
              <div class="n5-kanji-topline"><span class="pill">${r+1}/370</span><span class="pill">${i(F(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(ft(s)[0]?.word||"")} · ${i(ft(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function y$(e){const t=$e();return`
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
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(V(r.reading||""))}</span><small>${i(h({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function $$(e){const t=$e(),n=da("N3","n3_reading_page"),s=sr("N3");return(n||s)&&A(),`
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
          ${a.n3Reading.map(r=>Rl(r,"reading")).join("")}
        </div>
      </section>
    `}function j$(e){const t=$e();return`
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
          ${a.n3Listening.map(n=>Rl(n,"listening")).join("")}
        </div>
      </section>
    `}function Rl(e,t){const n=$e(),s=t==="reading"?q().completedReading[e.id]:q().completedListening[e.id],r=t==="reading"?q().readingAnswers:q().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n3-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function S$(e){const t=$e(),n=a.n3FinalTest||{},s=pg(),r=q().finalTest,o=en(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const m=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==m)&&(r.percent=m),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
            ${Ot("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>N$(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Ot("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function N$(e,t){const n=q().finalTest.answers?.[e.id],s=!!q().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i($e().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function $e(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function _l(){a.progress.n3Course=du(zo(),a.progress.n3Course||{});const e=mt();!Pn(a.progress.n3Course.currentLessonId)&&e[0]&&(a.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n3Course.completedLessons[s.id]);return!a.progress.n3Course.currentLessonId&&n&&(a.progress.n3Course.currentLessonId=n.id),a.progress.n3Course}function q(){return _l()}function mt(){return a.n3Textbook?.items||[]}function Pn(e){const t=String(e||"");return t&&mt().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function C$(){return Pn(q().currentLessonId)||mt().find(e=>!q().completedLessons[e.id])||mt()[0]||null}function Ur(e){return(e?.kanji||[]).map(t=>ig(t)).filter(Boolean)}function We(){const e=new Set;return(a.n3KanjiCatalog||[]).map(t=>ig(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function ig(e){const t=String(e||""),n=a.n3KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N3")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ha(s,n):s||(n?Ha({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function Pl(e){const t=String(e||"");return a.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function ft(e){return Kr(e,e.examples)}function x$(){const e=We(),t=q(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(r=>{F(r.id).state!=="New"&&n.add(r.kanji)});const s={...t.completedLessons||{}};for(const r of ae)if(r.startsWith("n3:")){const o=r.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:a.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((r,o)=>r+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function og(e){const t=q(),n=`n3:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":Pn(e)?.kanji?.some(r=>t.studiedKanji[r]||t.difficultKanji[r])?"started":"new"}function L$(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ki(e){const t=Ur(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n3Exercises?.types||[]).map(y=>[y.type,y.title])),r=Object.fromEntries((a.n3Exercises?.types||[]).map(y=>[y.type,y])),o=y=>r[y]||{rewardXp:a.n3Meta?.rewards?.exerciseXp||10,rewardMoon:a.n3Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:nt({value:c.id,label:K(c)},t.slice(1).map(y=>({value:y.id,label:K(y)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:nt({value:d.kanji,label:d.kanji},t.filter(y=>y.id!==d.id).map(y=>({value:y.kanji,label:y.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=ft(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:nt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(y=>ft(y).map(x=>({value:x.reading,label:x.reading}))).filter(y=>y.value&&y.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:nt({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),1),...o("sentence")});const v=t[3]||t[0],b=ft(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ee(b)}В»?`:`Which word matches "${Ee(b)}"?`,answer:b.word||v.kanji,answerLabel:b.word||v.kanji,kanji:v.kanji,cardId:v.id,options:nt({value:b.word||v.kanji,label:b.word||v.kanji},t.flatMap(y=>ft(y).map(x=>({value:x.word,label:x.word}))).filter(y=>y.value&&y.value!==b.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const j=Pl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:nt({value:j.answer,label:j.answer},j.options.filter(y=>y!==j.answer).map(y=>({value:y,label:y})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:h({ru:L.ru,en:L.en}),answerLabel:h({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:nt({value:h({ru:L.ru,en:L.en}),label:h({ru:L.ru,en:L.en})},n.filter(y=>y.jp!==L.jp).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),2),...o("mini-reading")}),l.slice(0,a.n3Exercises?.lessonQuestionCount||8).map(y=>({...y,level:"N3",lessonId:e.id}))}function nt(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),We().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function lg(e){for(const t of mt()){const n=ki(t).find(s=>s.id===e);if(n)return n}return null}function Ml(e){return Dr("N3",q(),e)}function A$(e){const t=lg(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;cg(t,s,r)}function T$(e){const t=lg(e);if(!t)return;const n=document.getElementById(mg(t.id)),s=n?String(n.value||"").trim():"";cg(t,s,s===t.answer)}function cg(e,t,n){const s=q();Fr("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||a.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>qs(e.kanji,e.cardId),markDifficult:()=>Gr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function dg(e,t,n="review"){const s=re(e)||We().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=se(F(s.id)),d=we(c,o,l);a.progress.cards[s.id]=d,Kt(c,d,l),ve(),qs(s.kanji,s.id),q().srsKanji[s.kanji]=new Date().toISOString(),r?(Gr(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`)):Me(t)?(Gr(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n3Meta?.rewards?.knowXp||8:a.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`)),Lt(),A(),Ct("N3 SRS post-render effects",()=>{D(Me(t)?"answer_wrong":"answer_correct"),Q()})}function I$(e){const t=re(e)||We().find(s=>String(s.id)===String(e));if(!t)return;const n=q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},qs(t.kanji,t.id),H(9,1,`n3_writing:${t.id}`)),Q(),A(),I()}function R$(e){const t=Pn(e);if(!t)return;const n=q(),s=`n3:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){I();return}const r=Ur(t);if(r.filter(b=>n.studiedKanji[b.kanji]).length<t.kanji.length){const b=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(b);return}const l=ki(t);if(!(l.length>0&&l.every(b=>Ml(b.id)?.correct))){const b=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(b);return}ae.add(s),Ur(t).forEach(b=>{qs(b.kanji,b.id),n.srsKanji[b.kanji]=n.srsKanji[b.kanji]||new Date().toISOString();const C=F(b.id);C.state==="New"&&(a.progress.cards[b.id]=we(se(C),"good"))}),(t.grammarFocus||[]).map(b=>Pl(b)).filter(Boolean).forEach(b=>{n.completedGrammar[b.id]=n.completedGrammar[b.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=mt().find(b=>b.order===t.order+1)?.id||t.id;const d=ps(),u=d.sessions[n3SessKey];if(u){const b=new Date().toISOString();u.phase="done",u.completedAt=b,u.updatedAt=b,u.currentIndex=r.length,d.activeSessionKey=n3SessKey,d.lastUpdatedAt=b}q(),Object.keys(n.completedLessons||{}).length>=37&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],["N3","N2"].forEach(b=>{a.progress.unlockedJlptLevels.includes(b)||a.progress.unlockedJlptLevels.push(b)}));const f=a.n3Meta?.rewards?.lessonCompleteXp||75,v=a.n3Meta?.rewards?.lessonCompleteMoon||9;H(f,v,`n3_lesson:${t.id}`),or("N3",t.id),at({title:`${$e().lessonComplete}: ${h(t.title)}`,message:$e().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),I()}function qs(e,t=null){if(!e)return;const n=q();Es(n,e)}function Gr(e,t=null,n=!0){if(e&&(q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(a.progress.cards[t]=we(se(s),"again"))}}function _$(e,t=""){const n=a.n3Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,r=s===n.answer,o=q();o.grammarResults[n.id]={selected:s,correct:r,checkedAt:new Date().toISOString()},r&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),H(a.n3Meta?.rewards?.grammarXp||11,a.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):r||(a.progress.totalWrong+=1,D("answer_wrong")),ve(),Q(),A(),I()}function P$(e,t="0",n=""){ug("reading",e,t,n)}function M$(e,t="0",n=""){ug("listening",e,t,n)}function ug(e,t,n="0",s=""){const o=(e==="reading"?a.n3Reading:a.n3Listening).find(j=>j.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=q(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,b=!!v[o.id];f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((j,L)=>f[`${o.id}:${L}`]?.correct);if(d?(a.progress.totalCorrect+=1,D("answer_correct")):(a.progress.totalWrong+=1,D("answer_wrong")),C&&!b){v[o.id]=new Date().toISOString();const j=e==="reading"?a.n3Meta?.rewards?.readingXp||38:a.n3Meta?.rewards?.listeningXp||34,L=e==="reading"?a.n3Meta?.rewards?.readingMoon||4:a.n3Meta?.rewards?.listeningMoon||4;H(j,L,`n3_${e}:${o.id}`)}ve(),Q(),A(),I()}function E$(e){const t=Pn(e);t&&(nn("textbook-lesson",{level:"N3",lessonId:t.id}),q().currentLessonId=t.id,$t("N3",t.id,"n3_lesson_open"),Wt("N3",t,"n3_lesson_open"),Mn(t.id))}function K$(){Mn("")}function D$(e=null){e&&(q().activeReviewMode=e),Mn("review")}function F$(){Mn("kanji")}function O$(){Mn("grammar")}function B$(){Mn("reading")}function z$(){Mn("listening")}function J$(){Mn("final-test")}function Mn(e){a.route="textbooks",a.activeTextbookLevel="N3",a.activeTextbookSubroute=e||null,q().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";lt(t),Q(),A(),ce(),At()}function U$(e="due"){const t=Date.now(),n=q(),s=We();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=F(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function pg(){const e=We();if(!e.length)return[];const t=a.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=mt().find(d=>d.kanji.includes(o.kanji))||mt()[0];s.push(G$(l,o,c,r))}return s.filter(Boolean)}function G$(e,t,n,s){const o=ft(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:nt({value:t.id,label:K(t)},We().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:nt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},We().flatMap(c=>ft(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:nt({value:c,label:c},mt().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ee(o),answer:c,answerLabel:c,options:nt({value:c,label:c},We().flatMap(d=>ft(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n3Grammar[s%Math.max(a.n3Grammar.length,1)];if(c)return{id:`n3-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:nt({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n3Reading[s%Math.max(a.n3Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n3-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:nt({value:t.kanji,label:t.kanji},We().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function H$(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(q().finalTest.answers[t]=n,A(),I())}function gg(e=!1){if(a.finalTestBusy)return;const t=q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}a.finalTestBusy=!0;try{const n=pg(),s=a.n3FinalTest||{},r=$e(),o=en(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const x=o.firstMissingId?`#${Vs("n3",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=x,A();return}let u=0;const m=[],f=[];n.forEach(x=>{const J=String(t.answers?.[x.id]||"").trim();if(J===x.answer){if(u+=1,x.kanji&&qs(x.kanji,x.cardId),x.grammarId){const G=q();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else J||f.push(x),m.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:J}),x.kanji&&Gr(x.kanji,x.cardId)});const v=n.length?Math.round(u/n.length*100):0,b=!!t.completedAt,C=!!t.passed,j=Math.max(0,m.length-f.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(x=>x.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!b){const x=Number(s?.rewards?.completeXp||220),J=Number(s?.rewards?.completeMoon||40);L+=x,y+=J,H(x,J,"n3_final_complete")}if(t.passed&&!C){const x=Number(s?.rewards?.passXp||110),J=Number(s?.rewards?.passMoon||18);L+=x,y+=J,H(x,J,"n3_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,pa("N3",t),q(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N3",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:l,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,I()}}function q$(){q().finalTest=zo().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),I()}function mg(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function W$(e){a.activeTextbookLevel="N2",a.activeJlptLesson="N2";const t=Kl();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return oj();if(n==="review")return tj();if(n==="kanji")return sj();if(n==="grammar")return rj();if(n==="reading")return aj();if(n==="listening")return ij();const s=En(n);return s?(W().currentLessonId=s.id,$t("N2",s.id,"n2_lesson_page"),Wt("N2",s,"n2_lesson_page"),V$(e,s)):X$(e)}function X$(e){const t=dj(),n=je(),s=ht(),r=cj(),o=a.n2Meta||{},l=h(o.principle||{});return`
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
          ${hn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>Q$(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((a.n2Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Js("N2")}
      </section>
    `}function Q$(e){const t=bg(e.id),n=je();let s=e.kanji.filter(r=>W().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(uj(t))}</small>
      </a>
    `}function V$(e,t){const n=je(),s=Hr(t),r=yi(t),o=bg(t.id),l=gs("N2",t,s);let c=o==="completed";const d=`n2:${t.id}`;ae.has(d)&&(c=!0);const u=c,m=r.filter(B=>Fl(B.id)?.correct).length,f=r.length>0&&m===r.length,v=s.filter(B=>W().studiedKanji[B.kanji]).length,b=t.kanji.length,C=v>=b,j=!c&&f&&C,L=t.kanji.filter(B=>W().difficultKanji[B]).join(" · "),y=ht().find(B=>B.order===t.order+1),x=fg(t),J=x?!!W().completedReading[x.id]:!1,G=Rt("N2",t.id,"player"),Cs=Rt("N2",t.id,"test");return`
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
              ${t.grammarFocus.map(B=>`<span class="pill">${i(B)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${m}/${r.length}`,n.correct,M(m,r.length))}
          </div>
        </article>

        ${Mr("N2",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:B=>vt(B),sentence:B=>Z$(B,t)})}

        ${ej(t)}

        ${Y$(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(B=>`
              <article>
                <strong>${i(B.jp)}</strong>
                <span>${i(V(B.reading||""))}</span>
                <small>${i(h({ru:B.ru,en:B.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Cs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(B=>hg(B)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(B=>W().studiedKanji[B.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${r.length}</span>
              ${x?`<span class="pill">${i(n.miniReadingTitle)}: ${i(J?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${y?`<a class="btn ghost" href="#jlpt/n2/${g(y.id)}" data-action="n2-open-lesson" data-id="${g(y.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function fg(e){return e?.miniReadingId&&a.n2Reading.find(t=>t.id===e.miniReadingId)||null}function Y$(e){const t=je(),n=fg(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${El(n,"reading")}
      </section>
    `:""}function Z$(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(je().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function ej(e){const t=je(),n=(e.grammarFocus||[]).map(s=>Dl(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(W().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function hg(e){const t=je(),n=Fl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&In("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Cg(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${vg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${vg(e,n)}
      </article>
    `}function vg(e,t){if(!t)return"";const n=je(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function tj(e){const t=je(),n=W().activeReviewMode||"due",s=xj(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${g(r.id)}">${i(h(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>nj(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function nj(e,t){const n=je(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Bt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(vt(e)[0]?.word||e.hiragana||"")} · ${i(vt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function sj(e){const t=je(),n=Xe();return`
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
              <div class="n5-kanji-topline"><span class="pill">${r+1}/380</span><span class="pill">${i(F(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(vt(s)[0]?.word||"")} · ${i(vt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function rj(e){const t=je();return`
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
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(V(r.reading||""))}</span><small>${i(h({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function aj(e){const t=je(),n=da("N2","n2_reading_page"),s=sr("N2");return(n||s)&&A(),`
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
          ${a.n2Reading.map(r=>El(r,"reading")).join("")}
        </div>
      </section>
    `}function ij(e){const t=je();return`
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
          ${a.n2Listening.map(n=>El(n,"listening")).join("")}
        </div>
      </section>
    `}function El(e,t){const n=je(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],r=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n2-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function oj(e){const t=je(),n=a.n2FinalTest||{},s=Sg(),r=W().finalTest,o=en(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const m=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==m)&&(r.percent=m),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
            ${Ot("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>lj(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Ot("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function lj(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(je().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function je(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Kl(){a.progress.n2Course=uu(Jo(),a.progress.n2Course||{});const e=ht();!En(a.progress.n2Course.currentLessonId)&&e[0]&&(a.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n2Course.completedLessons[s.id]);return!a.progress.n2Course.currentLessonId&&n&&(a.progress.n2Course.currentLessonId=n.id),a.progress.n2Course}function W(){return Kl()}function ht(){return a.n2Textbook?.items||[]}function En(e){const t=String(e||"");return t&&ht().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function cj(){return En(W().currentLessonId)||ht().find(e=>!W().completedLessons[e.id])||ht()[0]||null}function Hr(e){return(e?.kanji||[]).map(t=>wg(t)).filter(Boolean)}function Xe(){const e=new Set;return(a.n2KanjiCatalog||[]).map(t=>wg(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function wg(e){const t=String(e||""),n=a.n2KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N2")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Wa(s,n):s||(n?Wa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Dl(e){const t=String(e||"");return a.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function vt(e){return Kr(e,e.examples)}function dj(){const e=Xe(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(r=>{F(r.id).state!=="New"&&n.add(r.kanji)});const s={...t.completedLessons||{}};for(const r of ae)if(r.startsWith("n2:")){const o=r.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:a.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((r,o)=>r+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function bg(e){const t=W(),n=`n2:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":En(e)?.kanji?.some(r=>t.studiedKanji[r]||t.difficultKanji[r])?"started":"new"}function uj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function yi(e){const t=Hr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n2Exercises?.types||[]).map(y=>[y.type,y.title])),r=Object.fromEntries((a.n2Exercises?.types||[]).map(y=>[y.type,y])),o=y=>r[y]||{rewardXp:a.n2Meta?.rewards?.exerciseXp||11,rewardMoon:a.n2Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:st({value:c.id,label:K(c)},t.slice(1).map(y=>({value:y.id,label:K(y)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:st({value:d.kanji,label:d.kanji},t.filter(y=>y.id!==d.id).map(y=>({value:y.kanji,label:y.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=vt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:st({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(y=>vt(y).map(x=>({value:x.reading,label:x.reading}))).filter(y=>y.value&&y.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:st({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),1),...o("sentence")});const v=t[3]||t[0],b=vt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ee(b)}В»?`:`Which word matches "${Ee(b)}"?`,answer:b.word||v.kanji,answerLabel:b.word||v.kanji,kanji:v.kanji,cardId:v.id,options:st({value:b.word||v.kanji,label:b.word||v.kanji},t.flatMap(y=>vt(y).map(x=>({value:x.word,label:x.word}))).filter(y=>y.value&&y.value!==b.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const j=Dl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:st({value:j.answer,label:j.answer},j.options.filter(y=>y!==j.answer).map(y=>({value:y,label:y})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:h({ru:L.ru,en:L.en}),answerLabel:h({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:st({value:h({ru:L.ru,en:L.en}),label:h({ru:L.ru,en:L.en})},n.filter(y=>y.jp!==L.jp).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),2),...o("mini-reading")}),l.slice(0,a.n2Exercises?.lessonQuestionCount||8).map(y=>({...y,level:"N2",lessonId:e.id}))}function st(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),Xe().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function kg(e){for(const t of ht()){const n=yi(t).find(s=>s.id===e);if(n)return n}return null}function Fl(e){return Dr("N2",W(),e)}function pj(e){const t=kg(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;yg(t,s,r)}function gj(e){const t=kg(e);if(!t)return;const n=document.getElementById(Cg(t.id)),s=n?String(n.value||"").trim():"";yg(t,s,s===t.answer)}function yg(e,t,n){const s=W();Fr("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>Ws(e.kanji,e.cardId),markDifficult:()=>qr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function $g(e,t,n="review"){const s=re(e)||Xe().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=se(F(s.id)),d=we(c,o,l);a.progress.cards[s.id]=d,Kt(c,d,l),ve(),Ws(s.kanji,s.id),W().srsKanji[s.kanji]=new Date().toISOString(),r?(qr(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`)):Me(t)?(qr(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n2Meta?.rewards?.knowXp||9:a.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`)),Lt(),A(),Ct("N2 SRS post-render effects",()=>{D(Me(t)?"answer_wrong":"answer_correct"),Q()})}function mj(e){const t=re(e)||Xe().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ws(t.kanji,t.id),H(9,1,`n2_writing:${t.id}`)),Q(),A(),I()}function fj(e){const t=En(e);if(!t)return;const n=W(),s=`n2:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){I();return}const r=Hr(t);if(r.filter(b=>n.studiedKanji[b.kanji]).length<t.kanji.length){const b=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(b);return}const l=yi(t);if(!(l.length>0&&l.every(b=>Fl(b.id)?.correct))){const b=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(b);return}ae.add(s),Hr(t).forEach(b=>{Ws(b.kanji,b.id),n.srsKanji[b.kanji]=n.srsKanji[b.kanji]||new Date().toISOString();const C=F(b.id);C.state==="New"&&(a.progress.cards[b.id]=we(se(C),"good"))}),(t.grammarFocus||[]).map(b=>Dl(b)).filter(Boolean).forEach(b=>{n.completedGrammar[b.id]=n.completedGrammar[b.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ht().find(b=>b.order===t.order+1)?.id||t.id;const d=ps(),u=d.sessions[n2SessKey];if(u){const b=new Date().toISOString();u.phase="done",u.completedAt=b,u.updatedAt=b,u.currentIndex=r.length,d.activeSessionKey=n2SessKey,d.lastUpdatedAt=b}W(),Object.keys(n.completedLessons||{}).length>=38&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],["N2","N1"].forEach(b=>{a.progress.unlockedJlptLevels.includes(b)||a.progress.unlockedJlptLevels.push(b)}));const f=a.n2Meta?.rewards?.lessonCompleteXp||85,v=a.n2Meta?.rewards?.lessonCompleteMoon||10;H(f,v,`n2_lesson:${t.id}`),or("N2",t.id),at({title:`${je().lessonComplete}: ${h(t.title)}`,message:je().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),I()}function Ws(e,t=null){if(!e)return;const n=W();Es(n,e)}function qr(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(a.progress.cards[t]=we(se(s),"again"))}}function hj(e,t=""){const n=a.n2Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,r=s===n.answer,o=W();o.grammarResults[n.id]={selected:s,correct:r,checkedAt:new Date().toISOString()},r&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),H(a.n2Meta?.rewards?.grammarXp||12,a.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):r||(a.progress.totalWrong+=1,D("answer_wrong")),ve(),Q(),A(),I()}function vj(e,t="0",n=""){jg("reading",e,t,n)}function wj(e,t="0",n=""){jg("listening",e,t,n)}function jg(e,t,n="0",s=""){const o=(e==="reading"?a.n2Reading:a.n2Listening).find(j=>j.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=W(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,b=!!v[o.id];f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((j,L)=>f[`${o.id}:${L}`]?.correct);if(d?(a.progress.totalCorrect+=1,D("answer_correct")):(a.progress.totalWrong+=1,D("answer_wrong")),C&&!b){v[o.id]=new Date().toISOString();const j=e==="reading"?a.n2Meta?.rewards?.readingXp||42:a.n2Meta?.rewards?.listeningXp||38,L=e==="reading"?a.n2Meta?.rewards?.readingMoon||4:a.n2Meta?.rewards?.listeningMoon||4;H(j,L,`n2_${e}:${o.id}`)}ve(),Q(),A(),I()}function bj(e){const t=En(e);t&&(nn("textbook-lesson",{level:"N2",lessonId:t.id}),W().currentLessonId=t.id,$t("N2",t.id,"n2_lesson_open"),Wt("N2",t,"n2_lesson_open"),Kn(t.id))}function kj(){Kn("")}function yj(e=null){e&&(W().activeReviewMode=e),Kn("review")}function $j(){Kn("kanji")}function jj(){Kn("grammar")}function Sj(){Kn("reading")}function Nj(){Kn("listening")}function Cj(){Kn("final-test")}function Kn(e){a.route="textbooks",a.activeTextbookLevel="N2",a.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";lt(t),Q(),A(),ce(),At()}function xj(e="due"){const t=Date.now(),n=W(),s=Xe();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=F(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Sg(){const e=Xe();if(!e.length)return[];const t=a.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=ht().find(d=>d.kanji.includes(o.kanji))||ht()[0];s.push(Lj(l,o,c,r))}return s.filter(Boolean)}function Lj(e,t,n,s){const o=vt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:st({value:t.id,label:K(t)},Xe().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:st({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Xe().flatMap(c=>vt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:st({value:c,label:c},ht().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ee(o),answer:c,answerLabel:c,options:st({value:c,label:c},Xe().flatMap(d=>vt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n2Grammar[s%Math.max(a.n2Grammar.length,1)];if(c)return{id:`n2-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:st({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n2Reading[s%Math.max(a.n2Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n2-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:st({value:t.kanji,label:t.kanji},Xe().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function Aj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,A(),I())}function Ng(e=!1){if(a.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}a.finalTestBusy=!0;try{const n=Sg(),s=a.n2FinalTest||{},r=je(),o=en(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const x=o.firstMissingId?`#${Vs("n2",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=x,A();return}let u=0;const m=[],f=[];n.forEach(x=>{const J=String(t.answers?.[x.id]||"").trim();if(J===x.answer){if(u+=1,x.kanji&&Ws(x.kanji,x.cardId),x.grammarId){const G=W();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else J||f.push(x),m.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:J}),x.kanji&&qr(x.kanji,x.cardId)});const v=n.length?Math.round(u/n.length*100):0,b=!!t.completedAt,C=!!t.passed,j=Math.max(0,m.length-f.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(x=>x.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!b){const x=Number(s?.rewards?.completeXp||220),J=Number(s?.rewards?.completeMoon||40);L+=x,y+=J,H(x,J,"n2_final_complete")}if(t.passed&&!C){const x=Number(s?.rewards?.passXp||110),J=Number(s?.rewards?.passMoon||18);L+=x,y+=J,H(x,J,"n2_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,pa("N2",t),W(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N2",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:l,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,I()}}function Tj(){W().finalTest=Jo().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),I()}function Cg(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Ij(e){a.activeTextbookLevel="N1",a.activeJlptLesson="N1";const t=$i();t.opened||(t.opened=!0,Q({silent:!0}),A());const n=String(a.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Gj();if(n==="review")return Fj();if(n==="kanji")return Bj();if(n==="grammar")return zj();if(n==="reading")return Jj();if(n==="listening")return Uj();const s=fs(n);return s?(ee().currentLessonId=s.id,$t("N1",s.id,"n1_lesson_page"),Wt("N1",s,"n1_lesson_page"),Pj(e,s)):Rj(e)}function Rj(e){const t=Wj(),n=Se(),s=wt(),r=qj(),o=a.n1Meta||{},l=h(o.principle||{});return`
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
          ${hn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(c=>_j(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((a.n1Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Js("N1")}
      </section>
    `}function _j(e){const t=Tg(e.id),n=Se();let s=e.kanji.filter(r=>ee().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(r=>`<b>${i(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${M(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Xj(t))}</small>
      </a>
    `}function Pj(e,t){const n=Se(),s=ji(t),r=Si(t),o=Tg(t.id),l=gs("N1",t,s);let c=o==="completed";const d=`n1:${t.id}`;ae.has(d)&&(c=!0);const u=c,m=r.filter(B=>zl(B.id)?.correct).length,f=r.length>0&&m===r.length,v=s.filter(B=>ee().studiedKanji[B.kanji]).length,b=t.kanji.length,C=v>=b,j=!c&&f&&C,L=t.kanji.filter(B=>ee().difficultKanji[B]).join(" · "),y=wt().find(B=>B.order===t.order+1),x=xg(t),J=x?!!ee().completedReading[x.id]:!1,G=Rt("N1",t.id,"player"),Cs=Rt("N1",t.id,"test");return`
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
              ${t.grammarFocus.map(B=>`<span class="pill">${i(B)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,M(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${m}/${r.length}`,n.correct,M(m,r.length))}
          </div>
        </article>

        ${Mr("N1",t,s,n,{playerId:G,answerAction:"jlpt-lesson-answer",examples:B=>kt(B),sentence:B=>Ej(B,t)})}

        ${Kj(t)}

        ${Mj(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(B=>`
              <article>
                <strong>${i(B.jp)}</strong>
                <span>${i(V(B.reading||""))}</span>
                <small>${i(h({ru:B.ru,en:B.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Cs)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(B=>Dj(B)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(B=>ee().studiedKanji[B.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${r.length}</span>
              ${x?`<span class="pill">${i(n.miniReadingTitle)}: ${i(J?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!j?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n1-complete-lesson" data-id="${g(t.id)}" ${u||!j?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${y?`<a class="btn ghost" href="#jlpt/n1/${g(y.id)}" data-action="n1-open-lesson" data-id="${g(y.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function xg(e){return e?.miniReadingId&&a.n1Reading.find(t=>t.id===e.miniReadingId)||null}function Mj(e){const t=Se(),n=xg(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Ol(n,"reading")}
      </section>
    `:""}function Ej(e,t){const n=t.sentences.find(r=>r.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(r=>n.jp.includes(String(r).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Se().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Kj(e){const t=Se(),n=(e.grammarFocus||[]).map(s=>Bl(s)).filter(Boolean).slice(0,3);return n.length?`
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
    `:""}function Dj(e){const t=Se(),n=zl(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=a.route==="review"&&In("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Kg(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${r?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${r?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Lg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${r?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Lg(e,n)}
      </article>
    `}function Lg(e,t){if(!t)return"";const n=Se(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Fj(e){const t=Se(),n=ee().activeReviewMode||"due",s=uS(n);return`
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
            <button class="btn ${n===r.id?"primary":"ghost"}" type="button" data-action="n1-review" data-mode="${g(r.id)}">${i(h(r.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((r,o)=>Oj(r,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Oj(e,t){const n=Se(),s=F(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Bt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(kt(e)[0]?.word||e.hiragana||"")} · ${i(kt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Bj(e){const t=Se(),n=bt(),s=n.slice(0,160);return`
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
              <div class="n5-kanji-topline"><span class="pill">${o+1}/${n.length}</span><span class="pill">${i(F(r.id).state)}</span></div>
              <div class="n5-big-kanji">${i(r.kanji)}</div>
              <h3>${i(K(r))}</h3>
              <p>${i(kt(r)[0]?.word||"")} · ${i(kt(r)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${g(r.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function zj(e){const t=Se();return`
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
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(r=>`<div class="n5-card-sentence"><strong>${i(r.jp)}</strong><span>${i(V(r.reading||""))}</span><small>${i(h({ru:r.ru,en:r.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(r=>`
                    <button class="btn ${s?.selected===r?s.correct?"success":"warning":"ghost"}" type="button" data-action="n1-grammar-complete" data-id="${g(n.id)}" data-value="${g(r)}">${i(r)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Jj(e){const t=Se(),n=da("N1","n1_reading_page"),s=sr("N1");return(n||s)&&A(),`
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
          ${a.n1Reading.map(r=>Ol(r,"reading")).join("")}
        </div>
      </section>
    `}function Uj(e){const t=Se();return`
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
          ${a.n1Listening.map(n=>Ol(n,"listening")).join("")}
        </div>
      </section>
    `}function Ol(e,t){const n=Se(),s=t==="reading"?ee().completedReading[e.id]:ee().completedListening[e.id],r=t==="reading"?ee().readingAnswers:ee().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
      <article class="n1-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n1-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=r?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n1-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(f=>`<button class="btn ${u?.selected===f.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(f.value)}">${i(h(f.label||f))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Gj(e){const t=Se(),n=a.n1FinalTest||{},s=Mg(),r=ee().finalTest,o=en(r,s),l=o.answered,c=o.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const m=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==m)&&(r.percent=m),r.completedAt||(r.completedAt=new Date().toISOString()),A()}const d=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,u=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
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
            ${Ot("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,f)=>Hj(m,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${a.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Ot("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Hj(e,t){const n=ee().finalTest.answers?.[e.id],s=!!ee().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(r=>{const o=n===r.value;return`<button class="btn ${s&&r.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(r.value)}">${i(r.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Se().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Se(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function $i(){a.progress.n1Course=pu(Uo(),a.progress.n1Course||{});const e=wt();!fs(a.progress.n1Course.currentLessonId)&&e[0]&&(a.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!a.progress.n1Course.completedLessons[s.id]);return!a.progress.n1Course.currentLessonId&&n&&(a.progress.n1Course.currentLessonId=n.id),a.progress.n1Course}function ee(){return $i()}function wt(){return a.n1Textbook?.items||[]}function fs(e){const t=String(e||"");return t&&wt().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function qj(){return fs(ee().currentLessonId)||wt().find(e=>!ee().completedLessons[e.id])||wt()[0]||null}function ji(e){return(e?.kanji||[]).map(t=>Ag(t)).filter(Boolean)}function bt(){const e=new Set;return(a.n1KanjiCatalog||[]).map(t=>Ag(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Ag(e){const t=String(e||""),n=a.n1KanjiCatalog?.find(r=>r.kanji===t)||null,s=a.cards.find(r=>r.kanji===t&&String(r.jlpt||"").toUpperCase()==="N1")||(n?a.cards.find(r=>String(r.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Qa(s,n):s||(n?Qa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[]},n):null)}function Bl(e){const t=String(e||"");return a.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function kt(e){return Kr(e,e.examples)}function Wj(){const e=bt(),t=ee(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(r=>{F(r.id).state!=="New"&&n.add(r.kanji)});const s={...t.completedLessons||{}};for(const r of ae)if(r.startsWith("n1:")){const o=r.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:a.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((r,o)=>r+Number(F(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Tg(e){const t=ee(),n=`n1:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":fs(e)?.kanji?.some(r=>t.studiedKanji[r]||t.difficultKanji[r])?"started":"new"}function Xj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Si(e){const t=ji(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((a.n1Exercises?.types||[]).map(y=>[y.type,y.title])),r=Object.fromEntries((a.n1Exercises?.types||[]).map(y=>[y.type,y])),o=y=>r[y]||{rewardXp:a.n1Meta?.rewards?.exerciseXp||11,rewardMoon:a.n1Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:rt({value:c.id,label:K(c)},t.slice(1).map(y=>({value:y.id,label:K(y)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:rt({value:d.kanji,label:d.kanji},t.filter(y=>y.id!==d.id).map(y=>({value:y.kanji,label:y.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=kt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:rt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(y=>kt(y).map(x=>({value:x.reading,label:x.reading}))).filter(y=>y.value&&y.value!==m.reading),3),...o("reading")});const f=n[0];f&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:f.jp,answer:h({ru:f.ru,en:f.en}),answerLabel:h({ru:f.ru,en:f.en}),kanji:t[0].kanji,cardId:t[0].id,options:rt({value:h({ru:f.ru,en:f.en}),label:h({ru:f.ru,en:f.en})},n.slice(1).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),1),...o("sentence")});const v=t[3]||t[0],b=kt(v)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ee(b)}В»?`:`Which word matches "${Ee(b)}"?`,answer:b.word||v.kanji,answerLabel:b.word||v.kanji,kanji:v.kanji,cardId:v.id,options:rt({value:b.word||v.kanji,label:b.word||v.kanji},t.flatMap(y=>kt(y).map(x=>({value:x.word,label:x.word}))).filter(y=>y.value&&y.value!==b.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const j=Bl(e.grammarFocus?.[0]);j&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(j.question||j.explanation),answer:j.answer,answerLabel:j.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:j.id,options:rt({value:j.answer,label:j.answer},j.options.filter(y=>y!==j.answer).map(y=>({value:y,label:y})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:h({ru:L.ru,en:L.en}),answerLabel:h({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:rt({value:h({ru:L.ru,en:L.en}),label:h({ru:L.ru,en:L.en})},n.filter(y=>y.jp!==L.jp).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),2),...o("mini-reading")}),l.slice(0,a.n1Exercises?.lessonQuestionCount||8).map(y=>({...y,level:"N1",lessonId:e.id}))}function rt(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),bt().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const o=n%r.length;return[...r.slice(o),...r.slice(0,o)]}function Ig(e){for(const t of wt()){const n=Si(t).find(s=>s.id===e);if(n)return n}return null}function zl(e){return Dr("N1",ee(),e)}function Qj(e){const t=Ig(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Rg(t,s,r)}function Vj(e){const t=Ig(e);if(!t)return;const n=document.getElementById(Kg(t.id)),s=n?String(n.value||"").trim():"";Rg(t,s,s===t.answer)}function Rg(e,t,n){const s=ee();Fr("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||a.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||a.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,markStudied:()=>Wr(e.kanji,e.cardId),markDifficult:()=>Ni(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:r=>{s.wordMistakes[r]=Number(s.wordMistakes[r]||0)+1}})}function _g(e,t,n="review"){const s=re(e)||bt().find(u=>String(u.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",o=r?"good":t,l=r?"hard":t,c=se(F(s.id)),d=we(c,o,l);a.progress.cards[s.id]=d,Kt(c,d,l),ve(),Wr(s.kanji,s.id),ee().srsKanji[s.kanji]=new Date().toISOString(),r?(Ni(s.kanji,s.id,!1),a.progress.totalCorrect+=1,H(a.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${s.id}`)):Me(t)?(Ni(s.kanji,s.id),a.progress.totalWrong+=1,H(a.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${s.id}`)):(a.progress.totalCorrect+=1,H(t==="easy"?a.n1Meta?.rewards?.knowXp||9:a.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${s.id}`)),Lt(),A(),Ct("N1 SRS post-render effects",()=>{D(Me(t)?"answer_wrong":"answer_correct"),Q()})}function Yj(e){const t=re(e)||bt().find(s=>String(s.id)===String(e));if(!t)return;const n=ee();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,a.progress.writingPractice.cards[t.id]={completed:Number(a.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Wr(t.kanji,t.id),H(9,1,`n1_writing:${t.id}`)),Q(),A(),I()}function Zj(e){const t=fs(e);if(!t)return;const n=ee(),s=`n1:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){I();return}const r=ji(t);if(r.filter(b=>n.studiedKanji[b.kanji]).length<t.kanji.length){const b=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof z=="function"&&z(b);return}const l=Si(t);if(!(l.length>0&&l.every(b=>zl(b.id)?.correct))){const b=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof z=="function"&&z(b);return}ae.add(s),ji(t).forEach(b=>{Wr(b.kanji,b.id),n.srsKanji[b.kanji]=n.srsKanji[b.kanji]||new Date().toISOString();const C=F(b.id);C.state==="New"&&(a.progress.cards[b.id]=we(se(C),"good"))}),(t.grammarFocus||[]).map(b=>Bl(b)).filter(Boolean).forEach(b=>{n.completedGrammar[b.id]=n.completedGrammar[b.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=wt().find(b=>b.order===t.order+1)?.id||t.id;const d=ps(),u=d.sessions[n1SessKey];if(u){const b=new Date().toISOString();u.phase="done",u.completedAt=b,u.updatedAt=b,u.currentIndex=r.length,d.activeSessionKey=n1SessKey,d.lastUpdatedAt=b}ee(),Object.keys(n.completedLessons||{}).length>=53&&(a.progress.unlockedJlptLevels=a.progress.unlockedJlptLevels||[],["N1","N1"].forEach(b=>{a.progress.unlockedJlptLevels.includes(b)||a.progress.unlockedJlptLevels.push(b)}));const f=a.n1Meta?.rewards?.lessonCompleteXp||85,v=a.n1Meta?.rewards?.lessonCompleteMoon||10;H(f,v,`n1_lesson:${t.id}`),or("N1",t.id),at({title:`${Se().lessonComplete}: ${h(t.title)}`,message:Se().lessonCompleteText,xp:f,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Q(),A(),I()}function Wr(e,t=null){if(!e)return;const n=ee();Es(n,e)}function Ni(e,t=null,n=!0){if(e&&(ee().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=F(t);s.state!=="New"&&(a.progress.cards[t]=we(se(s),"again"))}}function eS(e,t=""){const n=a.n1Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,r=s===n.answer,o=ee();o.grammarResults[n.id]={selected:s,correct:r,checkedAt:new Date().toISOString()},r&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),H(a.n1Meta?.rewards?.grammarXp||12,a.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),a.progress.totalCorrect+=1,D("answer_correct")):r||(a.progress.totalWrong+=1,D("answer_wrong")),ve(),Q(),A(),I()}function tS(e,t="0",n=""){Pg("reading",e,t,n)}function nS(e,t="0",n=""){Pg("listening",e,t,n)}function Pg(e,t,n="0",s=""){const o=(e==="reading"?a.n1Reading:a.n1Listening).find(j=>j.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=ee(),f=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,b=!!v[o.id];f[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((j,L)=>f[`${o.id}:${L}`]?.correct);if(d?(a.progress.totalCorrect+=1,D("answer_correct")):(a.progress.totalWrong+=1,D("answer_wrong")),C&&!b){v[o.id]=new Date().toISOString();const j=e==="reading"?a.n1Meta?.rewards?.readingXp||55:a.n1Meta?.rewards?.listeningXp||50,L=e==="reading"?a.n1Meta?.rewards?.readingMoon||4:a.n1Meta?.rewards?.listeningMoon||4;H(j,L,`n1_${e}:${o.id}`)}ve(),Q(),A(),I()}function sS(e){const t=fs(e);t&&(nn("textbook-lesson",{level:"N1",lessonId:t.id}),ee().currentLessonId=t.id,$t("N1",t.id,"n1_lesson_open"),Wt("N1",t,"n1_lesson_open"),Dn(t.id))}function rS(){Dn("")}function aS(e=null){e&&(ee().activeReviewMode=e),Dn("review")}function iS(){Dn("kanji")}function oS(){Dn("grammar")}function lS(){Dn("reading")}function cS(){Dn("listening")}function dS(){Dn("final-test")}function Dn(e){a.route="textbooks",a.activeTextbookLevel="N1",a.activeTextbookSubroute=e||null,ee().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";lt(t),Q(),A(),ce(),At()}function uS(e="due"){const t=Date.now(),n=ee(),s=bt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const o=F(r.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Mg(){const e=bt();if(!e.length)return[];const t=a.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(a.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let r=0;r<n;r+=1){const o=e[r*11%e.length]||e[r%e.length],l=t[r%t.length],c=wt().find(d=>d.kanji.includes(o.kanji))||wt()[0];s.push(pS(l,o,c,r))}return s.filter(Boolean)}function pS(e,t,n,s){const o=kt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:rt({value:t.id,label:K(t)},bt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:rt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},bt().flatMap(c=>kt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:rt({value:c,label:c},wt().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ee(o),answer:c,answerLabel:c,options:rt({value:c,label:c},bt().flatMap(d=>kt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=a.n1Grammar[s%Math.max(a.n1Grammar.length,1)];if(c)return{id:`n1-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:rt({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=a.n1Reading[s%Math.max(a.n1Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n1-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:rt({value:t.kanji,label:t.kanji},bt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function gS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ee().finalTest.answers[t]=n,A(),I())}function Eg(e=!1){if(a.finalTestBusy)return;const t=ee().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}a.finalTestBusy=!0;try{const n=Mg(),s=a.n1FinalTest||{},r=Se(),o=en(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const x=o.firstMissingId?`#${Vs("n1",o.firstMissingId)}`:null;a.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:x,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},a.pendingFocus=x,A();return}let u=0;const m=[],f=[];n.forEach(x=>{const J=String(t.answers?.[x.id]||"").trim();if(J===x.answer){if(u+=1,x.kanji&&Wr(x.kanji,x.cardId),x.grammarId){const G=ee();G.completedGrammar[x.grammarId]=G.completedGrammar[x.grammarId]||d}}else J||f.push(x),m.push({id:x.id,kanji:x.kanji||"",answer:x.answerLabel,selected:J}),x.kanji&&Ni(x.kanji,x.cardId)});const v=n.length?Math.round(u/n.length*100):0,b=!!t.completedAt,C=!!t.passed,j=Math.max(0,m.length-f.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=l,t.correctAnswers=u,t.incorrectAnswers=j,t.unansweredAnswers=f.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(x=>x.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!b){const x=Number(s?.rewards?.completeXp||220),J=Number(s?.rewards?.completeMoon||40);L+=x,y+=J,H(x,J,"n1_final_complete")}if(t.passed&&!C){const x=Number(s?.rewards?.passXp||110),J=Number(s?.rewards?.passMoon||18);L+=x,y+=J,H(x,J,"n1_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,pa("N1",t),ee(),a.pendingFocus=null,a.finalTestModal={kind:"result",level:"N1",title:t.passed?r.finalPassed:r.finalNeedsReview,message:t.passed?r.finalPassedText:r.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:j,unanswered:f.length,totalQuestions:n.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:l,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:r.repeatMistakes,reviewAllLabel:r.reviewAll},Q(),A()}catch(n){console.error(n),z(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{a.finalTestBusy=!1,I()}}function mS(){ee().finalTest=Uo().finalTest,a.finalTestModal=null,a.finalTestBusy=!1,A(),I()}function Kg(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Dg(e){const t=ar(e.jlpt);if(!t)return"";const n={...Cc(),...Nc()};return`
      <div class="jlpt-practice-grid">
        ${fS(t,n)}
        ${hS(t,n)}
        ${vS(t,n)}
        ${bS(t,n)}
      </div>
    `}function fS(e,t){return e.apps.length?`
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
    `:""}function hS(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${Fg(t.hiragana,n)}
          ${Fg(t.katakana,s)}
        </div>
      </article>
    `}function Fg(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(h(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function vS(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${wS(n)}</strong>
                <small>${i(n.romaji)} · ${i(h(n.meaning))}</small>
                <p>${i(h(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function wS(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function bS(e,t){const n=ir(e);if(!n)return"";const s=Ss(),r=s.selected[n.id]||[],o=!!s.checked[n.id],l=s.results[n.id]||null,c=r.map(m=>n.tiles[m]).filter(Boolean),d=o&&l?.correct,u=o&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(h(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${kS(n,c,u)}</div>
        <p class="label">${i(V(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((m,f)=>{const v=r.includes(f);return`
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
          <button class="btn" type="button" data-action="undo-jlpt-tile" ${!r.length||d?"disabled":""}>${i(t.undo)}</button>
          <button class="btn" type="button" data-action="clear-jlpt-practice" ${!r.length||d?"disabled":""}>${i(t.clear)}</button>
          <button class="btn" type="button" data-action="next-jlpt-practice">${i(t.next)}</button>
        </div>
      </article>
    `}function kS(e,t,n){let s=0;return String(e.sentence||"").split("___").map((r,o,l)=>{if(o===l.length-1)return i(r);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((v,b)=>n.includes(s+b));s+=d;const f=u.length?u.map(v=>`<span>${i(v.kanji)}</span>`).join(""):`<span>${i("в–Ў".repeat(d))}</span>`;return`${i(r)}<span class="sentence-blank ${m?"is-wrong":""}">${f}</span>`}).join("")}function yS(){const e=Qr(zN()),t=o0(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?re(t.card?.id||t.cardId||t.progress?.cardId||""):null;a0(t);const r=t?t.kind==="card"?s?Qg(s):bs():t.kind==="kana"?n0(t,n):m0(t):bs();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${E(p()==="ru"?"Сейчас":"Due now",Fe(),"due")}
              ${E(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${E(p()==="ru"?"Позже":"Learning later",JN(),"learning")}
              ${E(p()==="ru"?"Всего SRS":"Total SRS",UN(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${Hn("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${r}
          ${Wl(s,n)}
        </div>
        ${$S()}
      </section>
    `}function $S(){try{return jS()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),a.progress&&(a.progress.sentencePractice=Go(Ms().sentencePractice,{})),""}}function jS(){const e=Zt(),t=xi(e),n={...Xs(),...Jl()},s=SS(e,n);if(!e.length)return`
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
      `;const r=Gl(t,e);if(!r)return"";const{exercise:o,tiles:l,selectedTiles:c,answerFlat:d,wrongIndexes:u,complete:m,awarded:f}=r,v=new Set(a.progress.sentencePractice.selected),b=a.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${a.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",a.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(CS(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(a.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${Bg(o,c,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(xS(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map((j,L)=>{const y=v.has(L),x=u.includes(a.progress.sentencePractice.selected.indexOf(L));return`
              <button class="sentence-tile ${y?"is-used":""} ${x?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${L}" ${y||m?"disabled":""}>
                <span>${i(j.reading)}</span>
                <strong>${i(j.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i(b.message||n.tip.replace("{count}",d.length))}
          ${m&&!f?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!a.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!a.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function SS(e,t){const n=_e(),s=Za(n.customDraft||{}),r=Array.isArray(n.customSentences)?n.customSentences:[],o=r.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${NS(r,e,t)}
      </details>
    `}function NS(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const r=Ul(s,t),o=!!(r&&Fn(r,t).length>=Math.max(4,Et(r).length)),l=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function CS(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function Xs(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Jl(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function xS(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function Og(e=Zt()){const t=LS(e),n=AS(e),s=Array.isArray(a.sentenceExercises)?a.sentenceExercises:[],r=new Set;return[...t,...n,...s].filter(o=>!o?.id||r.has(o.id)?!1:(r.add(o.id),!0))}function LS(e=Zt()){const t=_e();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>Ul(s,e)).filter(Boolean)}function Ul(e,t=Zt()){return e?.jp?Hl({id:e.id,jlpt:zS(e.jp,t),sentence:e.jp,reading:e.hiragana||Xr(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function Bg(e,t,n){const s=e?.blanks||[],r=String(e?.sentence||"").split("___");let o=0;return r.map((l,c)=>{const d=s[c];if(!d)return i(l);const u=d.answer||[],m=u.map((f,v)=>{const b=o+v,C=t[b],j=n.includes(b);return`<span class="sentence-slot ${C?"is-filled":""} ${j?"is-wrong":""}">${C?i(C.kanji):""}</span>`}).join("");return o+=u.length,`${i(l)}<span class="sentence-blank">${m}</span>`}).join("")}function Gl(e=xi(),t=Zt()){const n=hs(t),s=(Array.isArray(e)?e:[]).filter(C=>C?.id),r=_e();new Set(s.map(C=>C.id)).has(r.activeId)||Ci(ql(s)?.id||null);const l=s.find(C=>C.id===a.progress.sentencePractice.activeId)||s[0];if(!l)return null;const c=Et(l);(!Array.isArray(a.progress.sentencePractice.tileKeys)||!a.progress.sentencePractice.tileKeys.length)&&(a.progress.sentencePractice.tileKeys=Fn(l,n).map(Ti));let d=(Array.isArray(a.progress.sentencePractice.tileKeys)?a.progress.sentencePractice.tileKeys:[]).map(US).filter(Boolean);const u=()=>c.every(C=>d.some(j=>j.kanji===C.kanji));(d.length<Math.max(4,c.length)||!u())&&(d=Fn(l,n),a.progress.sentencePractice.tileKeys=d.map(Ti),a.progress.sentencePractice.selected=[],a.progress.sentencePractice.checked=!1,a.progress.sentencePractice.result=null);const m=Array.isArray(a.progress.sentencePractice.selected)?a.progress.sentencePractice.selected:[];a.progress.sentencePractice.selected=m.filter((C,j,L)=>Number.isInteger(C)&&C>=0&&C<d.length&&L.indexOf(C)===j).slice(0,c.length);const f=a.progress.sentencePractice.selected.map(C=>d[C]).filter(Boolean),v=a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?a.progress.sentencePractice.result.wrongIndexes:[],b=Array.isArray(v)?v.filter(C=>Number.isInteger(C)&&C>=0&&C<c.length):[];return{exercise:l,tiles:d,selectedTiles:f,answerFlat:c,wrongIndexes:b,complete:!!(a.progress.sentencePractice.checked&&a.progress.sentencePractice.result?.correct),awarded:!!a.progress.sentencePractice.completed?.[l.id]}}function _e(){return a.progress.sentencePractice=Go(Ms().sentencePractice,a.progress.sentencePractice||{}),a.progress.sentencePractice}function Ci(e){a.progress.sentencePractice={..._e(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=Og(Zt()).find(n=>n?.id===e);t&&Gg(t)}function hs(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function Zt(){return hs(a.cards).filter(e=>{const t=a.lessons.find(s=>s.id===e.lessonId);if(t&&!Je(t))return!1;const n=F(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||a.progress.lessonCompletions[e.lessonId]})}function xi(e=Zt()){const t=hs(e),n=new Set(t.map(s=>s.kanji));return Og(t).filter(s=>{if(!s?.id)return!1;const r=Et(s);return!r.length||r.some(o=>!n.has(o.kanji))?!1:Fn(s,t).length>=Math.max(4,r.length)})}function Et(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function zg(e){return Et(e).map(t=>t.kanji).join("")}function Fn(e,t){if(!e?.id)return[];const n=hs(t),s=Et(e),r=new Set(s.map(v=>v.kanji)),o=new Set(n.map(v=>v.kanji)),l=new Map;[...e.tiles||[],...s].forEach(v=>{v?.kanji&&v?.reading&&l.set(v.kanji,v.reading)});const c=s.map(v=>({kanji:v.kanji,reading:v.reading||l.get(v.kanji)||fn(v.kanji)})),d=(e.tiles||[]).filter(v=>v?.kanji&&!r.has(v.kanji)&&o.has(v.kanji)).map(v=>({kanji:v.kanji,reading:v.reading||fn(v.kanji)})).filter((v,b,C)=>C.findIndex(j=>j.kanji===v.kanji)===b),u=n.filter(v=>v.kanji&&!r.has(v.kanji)).map(v=>({kanji:v.kanji,reading:l.get(v.kanji)||fn(v.kanji,v)})).filter((v,b,C)=>C.findIndex(j=>j.kanji===v.kanji)===b).sort((v,b)=>Pe(`${e.id}:${v.kanji}`)-Pe(`${e.id}:${b.kanji}`)),m=[...d,...u].filter(v=>!r.has(v.kanji)).filter((v,b,C)=>C.findIndex(j=>j.kanji===v.kanji)===b),f=Math.min(Math.max(6,c.length+2),c.length+m.length);return YS([...c,...m.slice(0,f-c.length)],e.id)}function AS(e){const t=hs(e);if(!t.length)return[];const n=new Set(t.map(l=>l.kanji)),s=new Set,r=[];return t.flatMap(l=>(l.examples||[]).map(c=>({...c,card:l}))).forEach((l,c)=>{const d=Qs(l.word||"");if(!d||s.has(d)||!JS(d)||Ug(d).some(C=>!n.has(C)))return;s.add(d);const u=vs(l.reading||Xr(d)),m=l.translation||d,f=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],v=f[c%f.length],b=Hl({id:`sentence-json-${Pe(`${d}:${v.sentence}`).toString(36)}`,jlpt:l.card?.jlpt||"N5",sentence:v.sentence,reading:v.reading,translationRu:v.translationRu,translationEn:v.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});b&&r.push(b)}),r.slice(0,160)}function TS(){const e=_e(),t={...Xs(),...Jl()},n=Za(IS()||e.customDraft||{}),s=Zt(),r=On(n.jp);if(!r){Li(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(MS(r,o)){Li(t.customDuplicate,"error");return}const c=_e(),d={id:o||`custom_${Date.now().toString(36)}_${Pe(r).toString(36)}`,jp:r,hiragana:vs(On(n.hiragana)||Xr(r)),ru:On(n.ru),en:On(n.en),source:"user"},u=(c.customSentences||[]).findIndex(f=>f.id===d.id);u>=0?c.customSentences[u]=d:c.customSentences=[d,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,Li(o?t.customUpdated:t.customAdded,"success",!1);const m=Ul(d,s);m&&Fn(m,s).length>=Math.max(4,Et(m).length)&&(Ci(m.id),a.progress.sentencePractice.tileKeys=Fn(m,s).map(Ti)),A(),I()}function IS(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function RS(e){const t=_e(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",A(),I())}function _S(e){const t=_e(),n={...Xs(),...Jl()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(r=>r.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(r=>r!==e),t.activeId===e){const r=Zt(),o=ql(xi(r));Ci(o?.id||null)}Li(n.customDeleted,"success",!1),A(),I()}}function PS(){const e=_e();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",A(),I()}function MS(e,t=null){const n=Qs(e);return(_e().customSentences||[]).some(r=>r.id!==t&&Qs(r.jp)===n)?!0:a.sentenceExercises.some(r=>Qs(Jg(r))===n)}function Li(e,t,n=!0){const s=_e();s.customMessage=e,s.customStatus=t,A(),n&&I()}function Hl(e,t,n={}){if(!e||typeof e!="object")return null;const s=hs(t),r=Qs(e.sentence||"");if(!r||!e.id||!s.length)return null;const o=ES(r,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const l=KS(o,r,n);if(!l.length)return null;let c="",d=0;const u=l.map(m=>(c+=r.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:DS(m.text)}));return c+=r.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:c,originalSentence:r,reading:vs(e.reading||Xr(r)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((f,v)=>({kanji:f,reading:m.reading[v]||fn(f)}))),source:e.source||"custom",createdAt:e.createdAt}}function ES(e,t){const n=new Map(hs(t).map(o=>[o.kanji,o])),s=[];let r=null;return Array.from(e).forEach((o,l)=>{if(Ai(o)&&n.has(o)){r||(r={start:l,end:l,text:"",answer:[]}),r.end=l+1,r.text+=o,r.answer.push(o);return}r&&s.push(r),r=null}),r&&s.push(r),s}function KS(e,t,n={}){const s=Number(n.maxBlanks||2),r=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),l=e.filter(m=>m.start>0),c=(o.length?o:l.length?l:e).slice().sort((m,f)=>{const v=f.answer.length-m.answer.length;return v||Math.abs(m.start-t.length/2)-Math.abs(f.start-t.length/2)}),d=[];let u=0;return c.forEach(m=>{d.length>=s||u+m.answer.length>r||(d.push(m),u+=m.answer.length)}),d.sort((m,f)=>m.start-f.start)}function DS(e){const t=Array.from(e),n=FS(e);return n?OS(t,vs(n)):t.map(s=>fn(s))}function FS(e){for(const t of a.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function OS(e,t){const n=Array(e.length).fill("");let s=t;for(let r=e.length-1;r>0;r-=1){const l=BS(e[r]).sort((c,d)=>d.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[r]=l,s=s.slice(0,-l.length))}return n[0]=s||fn(e[0]),n.map((r,o)=>r||fn(e[o]))}function BS(e){const t=a.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>vs(s.trim())).filter(Boolean);return[...new Set(n)]}function Xr(e){return vs(Array.from(e).map(t=>Ai(t)?fn(t):t).join(""))}function zS(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return Ug(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,l)=>n.indexOf(l)-n.indexOf(o))[0]||"N5"}function Qs(e){return String(e||"").replace(/\s+/g,"").trim()}function On(e){return String(e||"").replace(/\s+/g," ").trim()}function Jg(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function JS(e){return Array.from(String(e||"")).some(Ai)}function Ug(e){return Array.from(String(e||"")).filter(Ai)}function Ai(e){return/[㐀-鿿]/u.test(e)}function vs(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function V(e){return vs(String(e||""))}function fn(e,t=a.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function Ti(e){return`${e.kanji}	${e.reading||""}`}function US(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||fn(t)}:null}function GS(e){const t=Gl();if(!t||!Number.isInteger(e))return;const n=Xs(),s=a.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){z(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},A(),I()}}function HS(){const e=_e();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:Xs().removed,wrongIndexes:[]},A(),I())}function qS(){const e=_e();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,A(),I())}function WS(){const e=Gl();if(!e)return;const t=Xs(),n=a.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},A(),I();return}const s=e.answerFlat.map((o,l)=>e.selectedTiles[l]?.kanji===o.kanji?-1:l).filter(o=>o>=0),r=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:r,wrongIndexes:s,message:r?t.correct:t.wrong},r)XS(e.exercise),ye({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),he("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),ha("ok");else{a.progress.totalWrong+=1,a.progress.correctCombo=0,ye({discipline:-.6,curiosity:.2},"sentence_wrong"),he("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=vn();o.mistakes+=1,a.progress.daily[oe()]=o,ha("again")}A(),I()}function XS(e){const t=_e();if(t.completed[e.id])return;const n=a.rewards?.rewards||{},s=n.sentencePracticeXp||Yc.xp,r=n.sentencePracticeCoins||Yc.coins;t.completed[e.id]=new Date().toISOString(),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo);const o=vn();o.reviews+=1,o.minutes=ao((o.minutes||0)+.8,1),a.progress.daily[oe()]=o,H(s,r,`sentence:${e.id}`),ye({trust:.8,curiosity:.7},"sentence_complete"),ve(),ic(),Q()}function QS(){const e=Zt(),t=xi(e);if(!t.length)return;const n=a.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&Gg(s);const r=ql(t,{excludeCurrent:!0,preferUncompleted:!0});r?.id&&(Ci(r.id),a.progress.sentencePractice.tileKeys=Fn(r,e).map(Ti),A(),I())}function ql(e,t={}){const n=(Array.isArray(e)?e:[]).filter(j=>j?.id);if(!n.length)return null;const s=_e(),r=s.activeId,o=new Set(s.recentIds||[]),l=new Set(s.recentAnswers||[]),c=j=>!t.excludeCurrent||n.length===1||j.id!==r,d=j=>!t.preferUncompleted||!s.completed?.[j.id],u=j=>!l.has(zg(j)),m=j=>!o.has(j.id),v=[n.filter(c).filter(d).filter(u).filter(m),n.filter(c).filter(d).filter(u),n.filter(c).filter(u).filter(m),n.filter(c).filter(m),n.filter(c),n].find(j=>j.length)||n,b=v.filter(VS),C=b.length?b:v;return C[Math.floor(Math.random()*C.length)]}function VS(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function Gg(e){if(!e?.id)return;const t=_e(),n=zg(e),s=Array.isArray(t.recentIds)?t.recentIds:[],r=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...r.filter(o=>o!==n)].slice(0,8)}function Pe(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function YS(e,t){return[...e].sort((n,s)=>Pe(`${t}:${n.kanji}:${n.reading}`)-Pe(`${t}:${s.kanji}:${s.reading}`))}function en(e,t=[]){const n=t.filter(r=>String(e?.answers?.[r.id]||"").trim()).length,s=t.filter(r=>!String(e?.answers?.[r.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(r=>r.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function Vs(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function ZS(e){return Number(e?.passingPercent??e?.passThreshold??70)}function e0(){const e=a.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Ot(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const r=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(_("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${hn("eva",n,t?"review":"achievement","reward-mascot")}
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
    `}function Hg(e){const t=cC(e);if(!t&&!oC(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function Ii(e){const t=la(e);return`
      <div class="reading-row reading-split">
        ${qg(e,"onyomi",Gm("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${qg(e,"kunyomi",Gm("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function qg(e,t,n,s,r){const o=Xg(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(V(s)||"—")}</strong>
        <small>${i(r||"—")}</small>
      </div>
    `}function Wg(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${Xg(e,t,n)}
            </dt>
            <dd>${i(V(s||"—"))}</dd>
          </div>
        `}function Xg(e,t,n){return rr(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function Ri(e,t="btn ghost"){const n=wC(e);if(!n)return"";const s=yt(n.jlpt),r=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(r)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(kn(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function Qg(e){if(!e?.id)return bs();xr(e,"study_card");const t=F(e.id),n=a.revealed;YN(e.id);const s=e.lessonTitle||Tc(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${dr(t.state)}
          </div>
          ${Hg(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?K(e):_("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(_("strokes"))} · ${i(Bt(t.dueAt))}</p>
        ${n?r0(e):`
          ${s0(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(_("showAnswer"))}</button>
            ${Ri(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(_("details"))}</button>
          </div>
        `}
      </article>
    `}function t0(e){const t=Math.max(Number(a.reviewSession?.initialSize||e||0),e||0,1),n=le(t-Math.max(Number(e||0),0),0,t),s=Math.min(n+1,t);return p()==="ru"?`Осталось: ${e} · ${s} / ${t}`:`Remaining: ${e} · ${s} / ${t}`}function n0(e,t){const n=Ql(e);if(!n)return bs();const s=n.progress||Be(null),r=er(),o=xp(n.courseSlug),l=Gn().settings.showRomaji;return`
      <article class="study-card kana-srs-card" data-review-card-id="${g(n.cardId)}" data-review-kind="kana">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(o)}</span>
            ${dr(s.state)}
            <span class="pill">${i(t0(t))}</span>
          </div>
          <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(n.kana)}" aria-label="${g(p()==="ru"?"Озвучить знак":"Speak kana")}">🔊</button>
        </div>
        <div class="kanji-focus kana-srs-focus" lang="ja" aria-label="${g(n.kana)}">${i(n.kana)}</div>
        <h2>${i(l&&n.romaji?n.romaji:p()==="ru"?"Вспомни чтение":"Recall the reading")}</h2>
        <p class="label">${i(o)} · ${i(n.strokes?`${n.strokes} ${_("strokes")}`:p()==="ru"?"знак каны":"kana card")} · ${i(Bt(s.dueAt))}</p>
        ${l&&n.romaji?`<p class="kana-srs-reading"><span lang="ja">${i(n.kana)}</span> · ${i(n.romaji)}</p>`:""}
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="forgot">${i(r.forgot)} <small>${i(r.forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="remember">${i(r.remember)} <small>${i(r.rememberHint)}</small></button>
        </div>
      </article>
    `}function s0(e){const t=a.readingCheck.cardId===e.id?a.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function _i(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(V(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(Ee(e))}</small>
      </li>
    `}function r0(e){return`
      <div class="answer-section">
        ${Ii(e)}
        <strong>${i(_("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(_i).join("")}
        </ul>
        <strong>${i(_("apps"))}</strong>
        <p>${i(fa(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${Ri(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(er().forgot)} <small>${i(er().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(er().remember)} <small>${i(iN(e))}</small></button>
        </div>
      </div>
    `}function Wl(e,t){const n=a.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",r=a.route==="review"?Math.max(a.reviewSession?.initialSize||t,1):Math.max(a.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${tN(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${E(_("review"),t,"queue",M(t,r))}
          ${E("Combo",a.progress.correctCombo,`${a.progress.bestCorrectCombo} best`,M(a.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(_("hint"))} · Leya</h3>
          <p>${i(Bi(e.id).hint)}</p>
          <h3>${i(_("mnemonic"))}</h3>
          <p>${i(Bi(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function ws(){a.reviewExerciseResults={},a.activeExerciseReviewId=null,a.activeExerciseReviewLevel="",a.activeExerciseReviewSource="",a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1}function a0(e){if(!e){a.activeCardId=null,ws();return}if(a.reviewQueueLastKind=e.kind,e.kind==="card"){const t=re(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){a.activeCardId=null,ws();return}a.activeCardId!==t.id&&(a.activeCardId=t.id,ws());return}if(e.kind==="kana"){a.activeCardId=null,ws(),a.revealed=!1,it();return}if(e.kind==="exercise"){const t=a.activeExerciseReviewId===e.exerciseId&&a.activeExerciseReviewLevel===e.level&&a.activeExerciseReviewSource===String(e.source||"textbook");a.activeCardId=null,a.activeExerciseReviewId=e.exerciseId,a.activeExerciseReviewLevel=e.level,a.activeExerciseReviewSource=String(e.source||"textbook"),t||(a.reviewExerciseResults={}),t||(a.activeExerciseReviewSelection=[],a.activeExerciseReviewChoice="",a.activeExerciseReviewTranslationOpen=!1)}}function Xl(e,t,n="",s=null,r=null,o="textbook"){const l=U(e);if(!l||!t)return null;if(String(o||"textbook")==="reading"){const v=r||Lm(t,l);if(!v)return null;const b=aa(s||{},v);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(v.sourceId||n||b.lessonId||""),cardId:"",dueAt:b.dueAt?new Date(b.dueAt).getTime():0,progress:b,exercise:v,card:null}}const d=ys(s||{},{level:l,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=r||ac(l,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),f=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:m,cardId:f,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:re(f)||re(d.cardId||"")}}function Ys(){if(!a.activeExerciseReviewId||!a.activeExerciseReviewLevel)return null;const e=a.activeExerciseReviewLevel,t=a.activeExerciseReviewId;if(String(a.activeExerciseReviewSource||"textbook")==="reading"){const o=Lm(t,e),l=o?Jn(o):a.progress.readingExercises?.[t]||null;return Xl(e,t,l?.lessonId||o?.sourceId||"",l,o,"reading")}const r=lN(e)?.exerciseSrs?.[t]||null;return Xl(e,t,r?.lessonId||"",r,null,"textbook")}function Ql(e){if(!e||e.kind!=="kana")return null;const t=wi(e.cardId||e.key||"",e.courseSlug||"");if(!t?.id||!fe(t.slug))return null;const n=It(t.slug),s=Be(e.progress||n[t.id]||null),r=e.character||Cp(t.slug,t.kana)||{};return{...e,kind:"kana",key:t.id,courseSlug:t.slug,cardId:t.id,kana:t.kana,romaji:String(r.romaji||e.romaji||""),strokes:Number(r.strokes||e.strokes||0),progress:s,character:r,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}function Vl(e){return!e||e.kind!=="exercise"?null:Xl(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function i0(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=re(t);if(!n?.id)return null;const s=e.progress||F(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="kana"?Ql(e):e.kind==="exercise"?Vl(e):null}function Qr(e){return(Array.isArray(e)?e:[]).map(i0).filter(Boolean)}function o0(e){const t=Qr(e),n=Ys();if(n&&a.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(l=>l.kind==="exercise"&&l.exerciseId===n.exerciseId&&l.level===n.level))return n;const s=a.activeCardId?t.find(l=>l.kind==="card"&&l.card?.id===a.activeCardId):null;if(s)return s;const r=["card","kana"],o=r.includes(a.reviewQueueLastKind)?["exercise"]:a.reviewQueueLastKind==="exercise"?r:[];if(o.length){const l=t.find(c=>o.includes(c.kind));if(l)return l}return t[0]||n||null}function l0(e,t){const n=U(e);return n==="N5"?Tp(t):n==="N4"?Gp(t):n==="N3"?rg(t):n==="N2"?hg(t):""}function c0(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Yl(){return p()==="ru"?"Перевод":"Translation"}function Vg(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=Jm(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function d0(e){const t=!!a.activeExerciseReviewTranslationOpen,n=e?.reading?V(e.reading):"",s=e?.reading?Vg(e.reading):"",r=h({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Yl())}</button>
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
    `}function u0(e){return a.reviewExerciseResults?.[e.exerciseId]||Jn(e.exercise)||null}function p0(e,t,n,s){const r=String(t?.id||n),o=s?.answers?.[r]||null,l=Array.isArray(t?.options)?t.options:[],c=l.find(u=>String(u.value||"")===String(t?.answer||"")),d=c?h(c.label||c):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(h(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${l.map(u=>{const m=o?.selected===u.value,f=o?.correct&&u.value===t.answer,v=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${f||v?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(r)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(h(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function g0(e){const t=Vl(e);if(!t||!t.exercise)return bs();const n=u0(t),s=!!n?.completed,r=t.progress||Jn(t.exercise),o=c0(t.exercise),l=h(t.exercise.sourceTitle||t.exercise.title||{}),c=Et(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(L=>L?.id),u=t.exercise.kind==="cloze"||!d.length&&c.length>0;if(!u&&!d.length)return bs();const m=u?s?1:Array.isArray(r?.selectedIndices)?r.selectedIndices.length:0:Object.keys(n?.answers||{}).length,f=u?Math.max(1,c.length):Math.max(1,d.length),v=Array.isArray(r?.selectedIndices)?r.selectedIndices:Array.isArray(a.activeExerciseReviewSelection)?a.activeExerciseReviewSelection:[],b=v.map(L=>t.exercise.tiles?.[L]).filter(Boolean),C=Array.isArray(r?.wrongIndexes)?r.wrongIndexes:[],j=d0(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(l||o)}</span>
          <span class="pill">${i(r.state)} · ${i(Bt(r.dueAt))}</span>
          <span class="pill">${i(m)}/${i(f)}</span>
        </div>
        ${j}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${Bg(t.exercise,b,C)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(h({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((L,y)=>{const x=v.includes(y),J=C.includes(y);return`
                <button class="sentence-tile ${x?"is-used":""} ${J?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${y}" ${x||s?"disabled":""}>
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
        `:d.map((L,y)=>p0(t,L,y,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function m0(e){const t=Vl(e);if(!t||!t.exercise)return bs();if(t.source==="reading")return g0(t);const n=!!a.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Bt(t.progress.dueAt))}</span>
        </div>
        ${l0(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function f0(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Ke("eva","lessonComplete"))}</h2>
        <p>${i(e?ma(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(_("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function h0(){const e=a.reviewSession?.results||{},t=Number(e.remember||0),n=Number(e.forgot||0),s=t+n,r=(Array.isArray(e.items)?e.items:[]).filter(o=>o?.dueAt).sort((o,l)=>(Date.parse(o.dueAt)||0)-(Date.parse(l.dueAt)||0)).slice(0,4);return`
      <article class="empty-state review-complete-card">
        <span class="kanji-char">済</span>
        <h2>${i(p()==="ru"?"Повторение завершено":"Review complete")}</h2>
        <p>${i(p()==="ru"?"Карточки закрыты. Вот короткий итог с ближайшими возвращениями.":"Cards are done. Here is a short summary and the nearest returns.")}</p>
        <div class="mini-stat-row">
          ${E(p()==="ru"?"Помню":"Remember",t,`${s}`,M(t,Math.max(1,s)))}
          ${E(p()==="ru"?"Не помню":"Forgot",n,`${s}`,M(n,Math.max(1,s)))}
        </div>
        ${r.length?`<ul class="review-upcoming-list">
          ${r.map(o=>`<li><strong>${i(o.label||o.kind||"")}</strong><span>${i(o.course||"")}</span><small>${i(Bt(o.dueAt))}</small></li>`).join("")}
        </ul>`:""}
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">典 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function bs(){const e=a.reviewSession?.results||{},t=Number(e.remember||0)+Number(e.forgot||0);return a.route==="review"&&Number(a.reviewSession?.initialSize||0)>0&&t>0?h0():`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Ke("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
      </article>
    `}function v0(){const e=GN(),t=Math.max(vr,Number(a.dictionaryVisibleCount||vr)),n=e.slice(0,t),s=n.length<e.length,r=a.cards.filter(u=>!!a.progress.favorites[u.id]).length,o=["all",...new Set(a.cards.map(u=>u.jlpt))],l=["all",...new Set(a.cards.map(u=>oa(u.id).radical).filter(Boolean))],c=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("dictionary"))}</h1>
            <p>${i(c)} · ${e.length}/${a.cards.length}</p>
          </div>
        </div>
        ${w0(r)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(_("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(a.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${ka(u,a.filters.jlpt)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(_("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",_("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${ka(u,a.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(_("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(u=>`<option value="${g(u)}" ${ka(u,a.filters.radical)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(_("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${ka("all",a.filters.favorites)}>${i(_("all"))}</option>
              <option value="yes" ${ka("yes",a.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(b0).join("")||y0()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function w0(e){const t=a.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
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
    `}function b0(e){const t=F(e.id),n=oa(e.id),s=!!a.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${k0(e)}
        <div class="tag-row">
          ${dr(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(_("strokes"))}</span>
          <span class="pill">${i(_("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(_("learnedStatus"))}: ${i(uf(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function k0(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(K(e))}</h3>
          <p>${i(fc(e))}</p>
          <span class="label">${i(Tc(e.lessonId))}</span>
        </span>
      </span>
    `}function y0(){const e=a.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function $0(){const e=a.kanjiPageId||Dx(),t=re(e);if(!t)return a.deferredDataLoaded?Lr(ge("hash","entity-not-found",Kx(),Vn(location.hash).segments)):(Fa({route:"kanji",delay:0,force:!0}),gf());const n=F(t.id),s=oa(t.id),r=!!a.progress.favorites[t.id],o=D0(t,p()),l=j0(t),c=oc(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(_("dictionary"))}</button>
            <h1>${i(l?`${t.kanji} — ${S0(l)}`:t.kanji)}</h1>
            <p>${i(l?N0(l):K(t))}</p>
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
                ${dr(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(_("strokes"))}</span>
                <span class="pill">${i(_("radical"))}: ${i(s.radical||"-")} ${i(h(s.radicalMeaning||{}))}</span>
                ${l?`<span class="pill">Grade ${i(l.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(l.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(K(t))}</h2>
              <p>${i(fa(t))}</p>
              ${Ii(t)}
              ${ec(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${l?C0(l):""}
          ${l?x0(l):""}
          <article class="kanji-profile-card">
            <h2>${i(_("examples"))}</h2>
            <ul class="example-list">${t.examples.map(_i).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${l?L0(l):_0(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("strokeOrder"))}</h2>
            <p class="label">${i(c?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${sa(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${Ri(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("apps"))}</h2>
            <p>${i(fa(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${l?T0(l):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${l?I0(l):""}
        </div>
      </section>
    `}function j0(e){return a.kanjiPageSources?.[e?.kanji]||null}function S0(e){return Yg(e.meanings)[0]||e.literal}function Yg(e){return e?e[p()]||e.ru||e.en||[]:[]}function Zs(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function N0(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function C0(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(Yg(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Zs(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(_("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(_("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Zs(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function x0(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(R0(t))}">
                <b>${Zl(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Zs(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function L0(e){return`
      <ul class="kanji-sentence-list">
        ${A0(e).map(n=>`
          <li>
            <strong>${Zl(n.japanese,e.literal)}</strong>
            <small>${i(Zs(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function A0(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const r=s.japanese||"";if(!r.includes(e.literal)||t.has(r))return!1;t.add(r);const o=r.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(o<3||o>44)}).sort((s,r)=>Number(Zg(r.japanese,n))-Number(Zg(s.japanese,n))).slice(0,8)}function Zg(e,t){return[...t].some(n=>e.includes(n))}function T0(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(Zs(t.title||{}))}</span>
            <strong>${Zl(t.japanese,e.literal)}</strong>
            <small>${i(Zs(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function I0(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((r,o)=>r?`<section><h3>${i(n[o])}</h3><p>${i(r)}</p></section>`:"").join("")}
      </article>
    `}function R0(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Zl(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function _0(e){const t=P0(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${K0(n)}</strong>
            <span>${i(M0(n))}</span>
            <small>${i(E0(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function P0(e){const t=e?.kanji||"";return t?(a.sentenceExercises||[]).filter(n=>{const s=em(n),r=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||r.includes(t)}).slice(0,6):[]}function em(e){return e?.sentence||e?.jp||""}function M0(e){return e?.reading||e?.hiragana||""}function E0(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function K0(e){let t=i(em(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function D0(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${tm(e)}/`}function tm(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),r=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${r}`}function F0(){const e=re(a.activeCardId)||uc()[0]||a.cards[0];e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=le(a.writingStep,0,Math.max(0,Dt(e)-1)));const t=oc(e),n=Dt(e),s=p()==="ru"?"Шаг":"Step",r=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",l=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
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
            ${e?Ii(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(_("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${a.writingStep+1}/${n}</span>
                <span class="label">${i(sa(e)[a.writingStep]||"")}</span>
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
            ${e?O0(e):""}
            <h3>${i(_("hint"))}</h3>
            <p>${i(Bi(e?.id).hint)}</p>
            <h3>${i(_("mnemonic"))}</h3>
            <p>${i(Bi(e?.id).mnemonic)}</p>
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
    `}function O0(e){return`
      <ol class="stroke-list writing-guide-list">
        ${sa(e).map((n,s)=>`
          <li class="${s===a.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function B0(){if(!a.detailCardId)return"";const e=re(a.detailCardId);if(!e)return"";const t=F(e.id),n=oa(e.id),s=!!a.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${dr(t.state)}
              <h2>${i(K(e))}</h2>
              <p>${i(fc(e))} · ${e.strokes} ${i(_("strokes"))}</p>
              <p><span class="pill">${i(_("radical"))}: ${i(n.radical||"-")} ${i(h(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${Ii(e)}
          ${ec(e)}
          <h3>${i(_("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(r=>`<li>${i(r)}</li>`).join("")}</ol>
          <h3>${i(_("examples"))}</h3>
          <ul class="example-list">${e.examples.map(_i).join("")}</ul>
          <h3>${i(_("apps"))}</h3>
          <p>${i(fa(e))}</p>
          <ul class="app-list">${e.apps.map(r=>`<li>${i(r)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(_("favorites"))}</button>
            ${Ri(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function ec(e){const t=hc(e),n=rr(e);return`
      <section class="audio-panel">
        <h3>${i(_("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${z0(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function z0(e,t=rr(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(tc(n))}">
                <span>${i(tc(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function tc(e){return e.kind==="onyomi"?Ji("onyomi"):e.kind==="kunyomi"?Ji("kunyomi"):e.label||"TTS"}function J0(){const e=pc(),t=vn(),n=yn();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("stats"))}</h1>
            <p>${i(_("xp"))} · ${i(_("level"))} · ${i(_("coins"))}</p>
          </div>
          <div class="actions">
            ${Hn("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${i(_("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(_("xp"),`${n.current}/${n.next}`,`${_("level")} ${a.progress.level}`,n.percent)}
          ${E(_("streak"),a.progress.streak.current,`${a.progress.streak.best} best`,M(a.progress.streak.current,30))}
          ${E(_("mastered"),e.mastered,`${e.total}`,M(e.mastered,e.total))}
          ${E(_("successRate"),`${Pm()}%`,`${gc()} reviews`,Pm())}
          ${E(_("errors"),t.mistakes||0,`${a.progress.totalWrong} total`,M(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(_("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${G0()}</article>
          <article class="tool-panel" data-section="shop-panel">${q0()}</article>
          <article class="tool-panel">${rm()}</article>
          <article class="tool-panel">
            <h3>${i(_("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(Ln().badge)}</strong>
                  <small>${i(Ln().hint)}</small>
                </span>
                <span class="pill">${i(Ln().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${Yi()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${Yi()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Zi()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Zi()*100)}%</strong>
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
    `}function ks(){return a.achievements?.length?a.achievements:a.rewards?.achievements||[]}function U0(){return a.achievementCategories?.length?a.achievementCategories:[...new Set(ks().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function nc(e){return h(e.title||e.name||{ru:e.id,en:e.id})}function nm(e){return h(e.description||{})}function sc(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function G0(){return`<h3>${i(_("achievements"))}</h3><div class="achievement-grid compact">${ks().slice(0,8).map(sm).join("")}</div>`}function H0(){const e=ks(),t=zx(),n=e.reduce((s,r)=>({xp:s.xp+(r.rewardXp||0),coins:s.coins+(r.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(_("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${Hn("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${i(_("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(_("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",M(t,e.length))}
          ${E("XP",n.xp,p()==="ru"?"в наградах":"in rewards",M(t,e.length))}
          ${E(_("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",M(t,e.length))}
          ${E(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&mr(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",M(e.filter(s=>s.secret&&mr(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${U0().map(s=>{const r=e.filter(l=>l.category===s.id);if(!r.length)return"";const o=r.filter(l=>mr(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${sc(s.icon)} ${i(h(s.title))}</h2>
                    <p>${o}/${r.length}</p>
                  </div>
                  <span class="pill">${M(o,r.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${r.map(l=>sm(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function sm(e,t=!1){const n=mr(e.id),s=fm(e),r=Math.max(1,Number(e.target||1)),o=M(s,r),l=Math.min(s,r),c=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":nc(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":nm(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${sc(e.icon)}</span>
        <strong>${i(c)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${l}/${r}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(_("coins"))}</small>
      </div>
    `}function q0(){return Qu({closable:!1})}function rm(e={}){const t=e.limit||10,n=(a.progress.transactions||[]).slice(0,t);return`
      <h3>${i(_("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(W0(s))}</strong>
              <small>${i(rx(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function W0(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=ke(n[1]);if(s)return Tt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function X0(){if(!cm())return"";const e=a.rewardModal,t=e.type==="level",n=e.type==="achievement",s=yn(),r=t?`${_("level")} ${a.progress.level} - ${s.current}/${s.next} XP - ${a.progress.moonFragments} ${_("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${sc(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(_("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${hn(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
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
    `}function Q0(){if(!a.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",r=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(Ls),l=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),c=`mailto:${an}?subject=${o}&body=${l}`;return`
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
            <strong>${i(an)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(c)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(r)}</button>
          </div>
        </article>
      </div>
    `}function V0(){const e=a.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=h(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),r=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",l=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${r.map(c=>`<li>${i(c)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${lo}, ${co}.`:`Saved locally: ${lo}, ${co}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(l)}</button>
          </div>
        </article>
      </div>
    `}function Y0(){if(!a.pwaInstallHelpVisible)return"";const e=ur(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",r=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function Z0(){if(Du()||a.pwaInstallHelpVisible||!Pc()||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal)return"";const e=mf(),t=!ts&&ur();return`
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
    `}function eN(){if(Du()||!a.notificationPromptVisible||!no("visible")||a.detailCardId||a.rewardModal||a.finalTestModal||a.contactModal||a.changelogModal||a.pwaInstallHelpVisible||Pc())return"";const e=kf();return`
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
    `}function tN(e,t,n){const s=cr(e),r=Pi(e,t,n),o=lm(Ke(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(r)}" alt="${g(h(s.name))}" />
        <div><strong>${i(h(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function hn(e,t,n,s){const r=cr(e),o=Pi(e,t,n),l=lm(Ke(e,n)),c=`${s||"mascot"}:${e}:${n}:${a.route}:${a.activeTextbookLevel||a.activeJlptLesson||""}`.toLowerCase();return im(c)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(h(r.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(h(r.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${g(c)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${g(c)}" aria-label="${g(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(l)}</span>
        </div>
      </div>
    `}function am(){try{const e=sessionStorage.getItem(ne);return e?JSON.parse(e)||{}:{}}catch{return{}}}function nN(e){try{sessionStorage.setItem(ne,JSON.stringify(e||{}))}catch{}}function im(e){return e?!!am()[e]:!1}function om(e){if(!e)return;const t=am();t[e]=Date.now(),nN(t);const n=ns.get(e);n&&(clearTimeout(n),ns.delete(e)),I()}function sN(){const e=new Set;xo("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||im(n)||(e.add(n),ns.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const r=window.setTimeout(()=>{ns.delete(n),om(n)},s);ns.set(n,r)});for(const[t,n]of ns)e.has(t)||(clearTimeout(n),ns.delete(t))}function Pi(e,t="normal",n="welcome"){if(e==="eva")return zs(Tn(null,rN(t,n)));const s=cr(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function rN(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),r={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return l&&(!n||n==="welcome")?l:r[n]||o[s]||s||"neutral"}function lm(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function aN(e){const t=re(a.activeCardId);if(!t||!Yf[e])return;Cr(t,"srs_rating");const n=se(F(t.id)),s=we(n,e);a.progress.cards[t.id]=s,Kt(n,s,e),ve();const r=Number(a.progress.correctCombo||0),o=Me(e)?"again":"ok";Me(e)?(a.progress.totalWrong+=1,a.progress.correctCombo=0,ye({discipline:-.8,trust:-.2},"answer_again"),he("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:r>0}),z(Ke("eva","wrong"))):(H(a.rewards.rewards.correctXp,a.rewards.rewards.correctCoins,"review_success"),a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),ye({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),he("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:a.progress.correctCombo}),z(Ke("eva","correct")),a.progress.correctCombo>0&&a.progress.correctCombo%5===0&&(H(a.rewards.rewards.comboXp,0,"combo_bonus"),at({title:"Combo",message:Ke("leya","combo"),xp:a.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),a.reviewQueueLastKind="card",Rm("kanji",e,{label:t.kanji,level:t.jlpt,dueAt:s.dueAt,cardId:t.id}),a.revealed=!1,a.activeCardId=null,it(),a.pendingFocus="__scroll-top__",Qi("card"),Ae(),A(),Ct("review card post-render effects",()=>{Ui(),ha(o),Fs(),dN(t.lessonId),ic(),Q()},{scrollTop:!0})}function cm(){return!!(a.rewardModal&&a.route!=="review")}function dm(e,t,n){const s=wi(t,e);if(!s?.id||!fe(s.slug))return;const r=ot(s.slug),o=It(s.slug),l=se(Be(o[s.id]||null)),c=Me(n)?"forgot":"remember",d=Hc(l,c);o[s.id]=d,r.review=o,r.currentRoute="review",r.updatedAt=new Date().toISOString(),Kt(l,d,c),ve({skipAchievements:!0});const u=Number(a.progress.correctCombo||0),m=c==="forgot"?"again":"ok";c==="forgot"?(a.progress.totalWrong+=1,a.progress.correctCombo=0,ye({discipline:-.5,trust:-.1},"kana_answer_again"),he("answer_wrong",{cardId:s.id,kana:s.kana,rating:c,comboLost:u>0},{skipAchievements:!0}),z(Ke("eva","wrong"))):(a.progress.totalCorrect+=1,a.progress.correctCombo+=1,a.progress.bestCorrectCombo=Math.max(a.progress.bestCorrectCombo,a.progress.correctCombo),ye({trust:.25,discipline:.2,curiosity:.1},"kana_answer_remember"),he("answer_correct",{cardId:s.id,kana:s.kana,rating:c,combo:a.progress.correctCombo},{skipAchievements:!0}),z(Ke("eva","correct"))),a.reviewQueueLastKind="kana",Rm("kana",c,{label:s.kana,course:xp(s.slug),dueAt:d.dueAt,cardId:s.id}),a.revealed=!1,a.activeCardId=null,ws(),it(),a.pendingFocus="__scroll-top__",Qi("kana"),Ae(),A(),Ct("kana review post-render effects",()=>{Ui(),ha(m),Fs()},{scrollTop:a.route==="review"})}function er(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function iN(e){const t=er(),n=F(e.id),s=oN(n,"remember"),r=Mv(n,s);return`${t.rememberHint}: ${Ev(_v(r))}`}function oN(e,t){if(Me(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),r=Number(e.correct||0),o=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?r/Math.max(r+o,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||r>=2?"good":"hard":c>=88&&r>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(r/3))?"hard":"good"}function Me(e){return e==="forgot"||e==="again"}function tr(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function ys(e,t={}){const s={...tr(t.level||"",t.lessonId||"",t.exerciseId||"",t),...Be(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=pf(s),Number.isFinite(Number(s.srsStep))?s.srsStep=le(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=el(s),um(s)?s:tr(s.level,s.lessonId,s.exerciseId,s)}function um(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function Vr(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([r,o])=>{s[r]=ys(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function lN(e){const t=U(e);return t==="N5"?Z():t==="N4"?X():t==="N3"?q():t==="N2"?W():t==="N1"?ee():null}function rc(e){const t=U(e);return t==="N5"?He():t==="N4"?pt():t==="N3"?mt():t==="N2"?ht():t==="N1"?wt():[]}function cN(e,t){const n=U(e),s=String(t||"");return!n||!s?null:rc(n).find(r=>r.id===s||r.id===`${n.toLowerCase()}-${s}`||r.id.endsWith(`-${s}`))||null}function pm(e){const t=U(e);return t==="N5"?Us:t==="N4"?bi:t==="N3"?ki:t==="N2"?yi:t==="N1"?Si:null}function ac(e,t,n=""){const s=pm(e),r=U(e),o=String(t||"");if(!s||!r||!o)return null;const l=cN(r,n);if(l){const c=s(l).find(d=>String(d.id)===o);if(c)return c}for(const c of rc(r)){const d=s(c).find(u=>String(u.id)===o);if(d)return d}return null}function Mi(e,t){const n=U(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),r=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return r.forEach(l=>{if(e.exerciseSrs[l])return;const c=ac(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const d=tr(n,c.lessonId||"",c.id,c),u=e.exerciseResults?.[l]||null,m=!!e.completedExercises?.[l],f=we(se(d),m||u?.correct?"good":"again");f.level=n,f.lessonId=String(c.lessonId||f.lessonId||""),f.exerciseId=String(c.id||l||""),f.cardId=String(c.cardId||f.cardId||""),f.kanji=String(c.kanji||f.kanji||""),f.type=String(c.type||f.type||""),f.title=c.title||f.title||null,f.prompt=String(c.prompt||f.prompt||""),f.answer=String(c.answer||f.answer||""),f.answerLabel=String(c.answerLabel||f.answerLabel||""),e.exerciseSrs[l]=f,o=!0}),o}function Ei(e,t){const n=U(t);if(!e||!n)return!1;const s=rc(n),r=pm(n);if(!r?.length&&!r)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=new Map;s.forEach(c=>{(r(c)||[]).forEach(d=>{d?.id&&o.set(String(d.id),{exercise:d,lesson:c})})});let l=!1;return Object.entries(e.exerciseSrs).forEach(([c,d])=>{const u=o.get(String(c));if(!u)return;const{exercise:m,lesson:f}=u,v=ys(d,{level:n,lessonId:f.id,exerciseId:m.id,cardId:m.cardId||"",kanji:m.kanji||"",type:m.type||"",title:m.title||null,prompt:m.prompt||"",answer:m.answer||"",answerLabel:m.answerLabel||""});JSON.stringify(d)!==JSON.stringify(v)&&(e.exerciseSrs[c]=v,l=!0)}),l}function dN(e){if(a.progress.lessonCompletions[e])return;const t=mc(e);if(!(t.length>0&&t.every(o=>F(o.id).state!=="New")))return;const s=a.rewards.rewards.lessonCompleteXp,r=a.rewards.rewards.lessonCompleteCoins;a.progress.lessonCompletions[e]=new Date().toISOString(),or("",e,"legacy-srs"),D("lesson_complete"),H(s,r,"lesson_completion"),ye({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),he("lesson_complete",{lessonId:e,xp:s,coins:r}),at({title:h({ru:"Урок завершён",en:"Lesson complete"}),message:Ke("eva","lessonComplete"),xp:s,coins:r,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),so("lesson_complete")}function ic(){const e=oe(),t=vn();if(t.goalClaimed||t.reviews<a.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=a.rewards.rewards.comboXp,s=a.rewards.rewards.streakCoins;H(n,s,"daily_goal"),at({title:_("dailyGoal"),message:Ke("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),a.progress.daily[e]=t}function uN(){const e=Ki(),t=oe();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,a.progress.appOpens=Number(a.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(a.progress.secrets.nightVisit=!0),gm()}function gm(){const e=a.progress.streak,t=nu(e.pendingReward);if(!t||oe()<t.availableOn)return!1;e.pendingReward=null;const n=a.rewards.rewards.streakCoins;return D("streak_reward"),H(0,n,`streak:${t.milestone}:claim`),at({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),Q(),A(),!0}function pN(e){if(e==="eva"){a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,ye({warmth:.2,curiosity:.1},"eva_click"),z(Ke("eva","welcome")),Q(),A(),I();return}e==="leya"&&z(Ke("leya","combo"))}function mm(){ue(),a.progress.secrets.evaClicks=Number(a.progress.secrets.evaClicks||0)+1,a.evaRuntime||(a.evaRuntime=qt()),a.evaRuntime.clickCount=Number(a.evaRuntime.clickCount||0)+1,he("user_clicked_eva",{clickCount:a.evaRuntime.clickCount}),Q(),D("notification_soft"),A(),I()}function gN(){if(Y.completed)return;Y.completed=!0,a.progress.writingPractice.completed=Number(a.progress.writingPractice.completed||0)+1,Y.cardId&&(a.progress.writingPractice.cards[Y.cardId]=(a.progress.writingPractice.cards[Y.cardId]||0)+1),ye({curiosity:1,discipline:.8,trust:.4},"writing_complete"),he("writing_complete",{cardId:Y.cardId}),pe("writing_complete",{route:"writing",cardId:Y.cardId||"",source:"practice"});const e=Q();A(),e&&I()}function mN(){const e=oe();Ki();const t=fN(),n=Ya(a.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(a.progress.dailyBonusPending=null),a.progress.dailyBonusPending={availableOn:yf(e,1)},A())}function fN(){const e=oe(),t=Ki(),n=Ya(a.progress.dailyBonusPending);if(!n||oe()<n.availableOn||a.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;a.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return hN(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,a.progress.dailyBonuses[e]=new Date().toISOString(),D("daily_bonus"),H(a.rewards.rewards.dailyBonusXp,a.rewards.rewards.dailyBonusCoins,"daily_bonus"),ye({warmth:1,discipline:.8},"daily_bonus"),at({title:_("dailyBonus"),message:Ke("leya","welcome"),xp:a.rewards.rewards.dailyBonusXp,coins:a.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),Q(),Kc(),!0}function Ki(){var t;(t=a.progress).visits||(t.visits={});const e=a.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function hN(e,t){const n=Ki();n.streak=e&&Wn(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=a.progress.streak.lastStudyDate;s!==t&&(a.progress.streak.current=s&&Wn(s,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best||0,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120))}function Q(e={}){if(!ks().length)return 0;const t=!!e.silent;let n=0;return ks().forEach(s=>{if(mr(s.id)||!vN(s))return;n+=1;const r=s.rewardXp||0,o=s.rewardFragments||0;a.progress.achievements[s.id]={unlockedAt:new Date().toISOString(),rewardXp:r,rewardFragments:o},t||at({type:"achievement",title:nc(s),message:nm(s),xp:r,coins:o,icon:s.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),H(r,o,`achievement:${s.id}`,{silent:t})}),n}function vN(e){return fm(e)>=Number(e.target||1)}function fm(e){if(e.kind==="lessonComplete")return Object.keys(a.progress.lessonCompletions).length;if(e.kind==="correct")return a.progress.totalCorrect;if(e.kind==="learned")return pc().learned;if(e.kind==="reviews")return gc();if(e.kind==="streak")return Math.max(a.progress.streak.current||0,a.progress.streak.best||0);if(e.kind==="level")return a.progress.level||1;if(e.kind==="moonFragments")return a.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return a.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(a.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return a.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return a.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return a.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(Z().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return ms();if(e.kind==="n5Writing")return Object.keys(Z().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(Z().srsKanji||{}).length;if(e.kind==="n5FinalPass")return Z().finalTest?.passed?1:0;if(e.kind==="n4Opened")return X().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(X().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(X().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(X().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(X().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(X().writingPractice||{}).length;if(e.kind==="n4FinalPass")return X().finalTest?.passed?1:0;if(e.kind==="n3Opened")return q().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(q().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(q().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(q().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(q().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(q().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(q().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(q().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return q().finalTest?.passed?1:0;if(e.kind==="n2Opened")return W().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(W().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=ut().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Vt(n.id))?1:0}if(e.kind==="jlpt"){const t=a.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>F(n.id).state==="Mastered")?1:0}return 0}function at(e){if(!(e?.type==="achievement"&&a.route==="review"&&Fe()>0)){if(!a.rewardModal){a.rewardModal=e,hm(e);return}if(e.type==="level"){a.rewardQueue.unshift(e);return}a.rewardQueue.push(e)}}function hm(e){if(gx(),e?.type==="achievement"){ga()?D("achievement_unlock"):Yi()&&px();return}if(e?.type==="level"){D("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&D("notification_reward")}function H(e,t,n="reward",s={}){const r=!!s.silent,o=a.progress.level||Xi(a.progress.xp);a.progress.xp+=e,a.progress.moonFragments+=t;const l=wN(n);if(!r&&!l&&e>0&&D("xp_gain"),!r&&!l&&t>0&&D("moon_fragment_gain"),t>0&&(a.progress.totalMoonFragmentsEarned=Number(a.progress.totalMoonFragmentsEarned||0)+t),a.progress.level=Xi(a.progress.xp),(e||t)&&(a.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:a.progress.moonFragments}),a.progress.transactions=a.progress.transactions.slice(0,80)),a.progress.level>o){if(r)return;D("level_up"),he("level_up",{level:a.progress.level,xp:a.progress.xp,moonFragments:a.progress.moonFragments});const c=yn();at({type:"level",title:_("levelUp"),message:`${_("level")} ${a.progress.level} - ${c.current}/${c.next} XP - ${a.progress.moonFragments} ${_("coins")}`,xp:0,coins:0,mascot:a.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:a.progress.level,totalXp:a.progress.xp,moonFragments:a.progress.moonFragments})}}function wN(e){return["learn","review"].includes(a.route)&&["review_success","combo_bonus"].includes(e)}function Kt(e,t,n){const s=vn();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Me(n)&&(s.mistakes+=1),s.minutes=ao(s.reviews*.75+s.learned*1.25,1),a.progress.daily[oe()]=s}function ve(e={}){gm();const t=oe(),n=a.progress.streak.lastStudyDate;if(n===t)return;const s=!!(n&&Wn(n,t)>1&&a.progress.streak.current>0);a.progress.streak.current=n&&Wn(n,t)===1?a.progress.streak.current+1:1,a.progress.streak.lastStudyDate=t,a.progress.streak.best=Math.max(a.progress.streak.best,a.progress.streak.current),a.progress.streakHistory.push({date:t,value:a.progress.streak.current}),a.progress.streakHistory=a.progress.streakHistory.slice(-120),ye(s?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},s?"streak_lost":"study_streak"),s&&z(Ke("eva","streakLoss")),[1,7,30,100].includes(a.progress.streak.current)&&(a.progress.streak.pendingReward={milestone:a.progress.streak.current,availableOn:yf(t,1)}),he("streak_up",{streak:a.progress.streak.current,lost:s},{skipAchievements:!!e.skipAchievements}),A()}function vm(){if(a.route!=="stats")return;if(!window.Chart){wh().then(()=>{a.route==="stats"&&vm()}).catch(r=>console.warn("Chart.js failed to load.",r));return}const e=Mx(10),t=e.map(r=>r.slice(5)),n=lx(),s=cx(n);Yr("activityChart",{type:"bar",data:{labels:t,datasets:[{label:_("learned"),data:e.map(r=>a.progress.daily[r]?.learned||0),backgroundColor:n.green},{label:_("review"),data:e.map(r=>a.progress.daily[r]?.reviews||0),backgroundColor:n.red}]},options:s}),Yr("jlptChart",{type:"bar",data:{labels:Object.keys(Em()),datasets:[{label:_("mastered"),data:Object.values(Em()),backgroundColor:n.yellow}]},options:s}),Yr("streakChart",{type:"line",data:{labels:t,datasets:[{label:_("streak"),data:e.map(r=>a.progress.streakHistory.find(o=>o.date===r)?.value||(a.progress.daily[r]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),Yr("stateChart",{type:"doughnut",data:{labels:Object.keys(Mm()),datasets:[{data:Object.values(Mm()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),Yr("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:_("errors"),data:e.map(r=>a.progress.daily[r]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function Yr(e,t){const n=document.getElementById(e);n&&a.charts.push(new Chart(n,t))}function bN(){const e=Bn();e&&(a.activeCardId=e.id,a.activeLessonId=e.lessonId,a.writingStep=le(a.writingStep,0,Math.max(0,Dt(e)-1)),Y.cardId!==String(e.id)&&kN(e)),yN(),ea(),Di(),ra(Zr(!1)),window.setTimeout(bm,120)}function Bn(){return re(a.activeCardId)||uc()[0]||a.cards[0]||null}function kN(e){Y.cardId=String(e?.id||""),Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Y.completed=!1}function yN(){const e=document.getElementById("practiceCanvas");if(!e)return;nr();const t=r=>{r.pointerType==="mouse"&&r.button!==0||(r.preventDefault(),e.setPointerCapture?.(r.pointerId),Y.drawing=!0,Y.activePointerId=r.pointerId,Y.currentStroke=[wm(e,r)],Y.completed=!1,nr())},n=r=>{if(!Y.drawing||r.pointerId!==Y.activePointerId)return;r.preventDefault();const o=wm(e,r),l=Y.currentStroke[Y.currentStroke.length-1];(!l||xm(l,o)>1.4)&&(Y.currentStroke.push(o),nr())},s=r=>{if(!Y.drawing||r.pointerId!==Y.activePointerId)return;r.preventDefault();const o=$N(Y.currentStroke);o.length&&Y.strokes.push(o),Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,nr(),ra(Zr(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=r=>r.preventDefault()}function wm(e,t){const n=e.getBoundingClientRect();return{x:le((t.clientX-n.left)*(e.width/n.width),0,e.width),y:le((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function $N(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{xm(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function nr(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=Bn();Cm(t,e),n&&CN(t,e,n),Y.strokes.forEach((s,r)=>Nm(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:r===Y.strokes.length-1})),Y.currentStroke.length&&Nm(t,Y.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function jN(){Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.completed=!1,nr(),ra(Zr(!1))}function SN(){Y.strokes.pop(),Y.currentStroke=[],Y.completed=!1,nr(),ra(Zr(!1))}function NN(e=!1){const t=Zr(!0);ra(t),e&&(ha(t.success?"good":"again"),z(t.message),t.success&&gN())}function Zr(e){const t=document.getElementById("practiceCanvas"),n=Bn(),s=Dt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const r=Y.strokes;if(!r.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=le(Math.round(Math.min(r.length,s)/s*100),0,100),l=e?100:o,c=!!(e&&r.length);let d=p()==="ru"?`Черты: ${r.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${r.length}/${s}. Self-check without recognition.`;return!e&&r.length<s?d=p()==="ru"?`Черта ${r.length+1}/${s}: продолжай по образцу.`:`Stroke ${r.length+1}/${s}: keep following the guide.`:!e&&r.length>s?d=p()==="ru"?`Черты: ${r.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${r.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=oc(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:d}}function bm(){const e=document.getElementById("strokeCanvas"),t=Bn();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=Dt(t),s=460,r=performance.now(),o=l=>{const c=l-r,d=le(Math.floor(c/s),0,n-1),u=le((c-d*s)/s,0,1);a.writingStep=d,ea(d,u),Di(),c<n*s?Y.demoAnimationId=requestAnimationFrame(o):(a.writingStep=n-1,ea(a.writingStep,1),Di())};Y.demoAnimationId=requestAnimationFrame(o)}function km(){const e=document.getElementById("strokeCanvas"),t=Bn();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=performance.now(),s=520,r=le(a.writingStep,0,Math.max(0,Dt(t)-1)),o=l=>{const c=le((l-n)/s,0,1);ea(r,c),c<1&&(Y.demoAnimationId=requestAnimationFrame(o))};Y.demoAnimationId=requestAnimationFrame(o)}function ym(e){$m(a.writingStep+e,!1)}function $m(e,t){const n=Bn();n&&(a.writingStep=le(e,0,Math.max(0,Dt(n)-1)),Di(),t?km():ea(a.writingStep,1))}function Di(){const e=Bn();if(!e)return;const t=sa(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${a.writingStep+1}/${Dt(e)}`);const r=document.querySelector(".writing-step-head .label");r&&(r.textContent=t[a.writingStep]||""),xo(".writing-guide-list li").forEach((o,l)=>o.classList.toggle("is-active",l===a.writingStep))}function ea(e=a.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=Bn();if(!n||!s)return;const r=n.getContext("2d");Cm(r,n);const o=ta(s);if(!o){Sm(r,n,s,e);return}jm(r,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function CN(e,t,n){const s=ta(n);if(!s){Sm(e,t,n,a.writingStep);return}jm(e,t,s,{activeIndex:a.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function ta(e){if(!e?.kanji)return null;const t=a.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function oc(e){return!!ta(e)}function Dt(e){const t=ta(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function na(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function jm(e,t,n,s={}){const r=le(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=xN(n,t,s.padding||22),l=na(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=l.guide;n.strokeOrder.forEach((m,f)=>{const v=f<r,b=f===r;f>r&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=b?d:v?c:u,e.lineWidth=(b?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(b?1:v?.86:.24),b&&s.progress<1&&(e.globalAlpha*=.45+le(s.progress,0,1)*.55),b&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&AN(e,m,o,f+1,b))})}function xN(e,t,n=22){const s=LN(e.viewBox),r=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*r)/2-s.x*r,l=(t.height-s.height*r)/2-s.y*r;return{...s,scale:r,x:o,y:l}}function LN(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,r=109,o=109]=t;return{x:n,y:s,width:Math.max(1,r),height:Math.max(1,o)}}function AN(e,t,n,s,r){const o=TN(t.path);if(!o)return;const l=n.x+o.x*n.scale,c=n.y+o.y*n.scale;IN(e,l,c,s,r)}function TN(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function IN(e,t,n,s,r){e.save(),e.fillStyle=r?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,r?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=r?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Sm(e,t,n,s=0){const r=na(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=r.templateOpacity,e.fillStyle=r.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=p()==="ru"?`Шаг ${s+1}/${Dt(n)} · точной схемы пока нет`:`Step ${s+1}/${Dt(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function Nm(e,t,n={}){const s=t.map(PN).filter(Boolean);if(!e||!s.length)return;const r=na();if(e.save(),e.strokeStyle=n.color||r.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=MN(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Cm(e,t){if(!e||!t)return;const n=na();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),RN(e,t)}function RN(e,t){const n=na();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function sa(e){const t=ta(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,r)=>p()==="ru"?s.description_ru||`Штрих ${r+1} по данным KanjiVG`:s.description_en||`Stroke ${r+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:Dt(e)},(s,r)=>n[r]||_N(e,r))}function _N(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function ra(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Y.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function PN(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function MN(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function xm(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function EN(){a.charts.forEach(e=>e.destroy()),a.charts=[]}function KN(e,t){const n=new Date;return a.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const r=a.lessons.find(l=>l.id===s.lessonId);if(r&&!Je(r))return!1;const o=F(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(Oi)}function DN(){const e=new Date;return dc().filter(t=>{const n=F(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(Oi)}function FN(){const e=Date.now(),t=[];return[["N5",Z()],["N4",X()],["N3",q()],["N2",W()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([r,o])=>{const l=ys(o,{level:n,exerciseId:r,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!l.dueAt||!um(l))return;const c=ac(n,r,l.lessonId||"");if(!c)return;const d=String(c?.lessonId||l.lessonId||"");if(!hC(n,d))return;const u=new Date(l.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${r}`,level:String(n||"").toUpperCase(),exerciseId:r,lessonId:d,cardId:String(l.cardId||""),dueAt:u,progress:l})})}),t.sort(ia)}function Fi(){const e=[];return a.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",a.n4Reading],["N3",a.n3Reading],["N2",a.n2Reading],["N1",a.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((r,o)=>{const l={id:String(r.id||`${s.id}:${o}`),prompt:r.prompt||{ru:"",en:""},answer:String(r.answer||""),options:Wh(r.options)};e.push({id:String(r.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:l,questions:[l]})})})}),[...e,...ny()]}function Lm(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return Fi().find(r=>String(r.id||"")===n&&(!s||String(r.level||"").toUpperCase()===s))||Fi().find(r=>String(r.id||"")===n)||null}function Am(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?h(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":Et(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":Et(e).map(n=>n.kanji).join(""))}}function lc(e){return 1}function zn(e){const t=Am(e);return{...tr(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:lc(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function aa(e,t){const n=zn(t),s=ys({...n,...e||{}},Am(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=lc(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(r=>({kanji:String(r?.kanji||""),reading:String(r?.reading||"")})).filter(r=>r.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(r=>String(r)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function Jn(e){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const t=a.progress.readingExercises[String(e.id)]||null;if(t){const r=aa(t,e);return a.progress.readingExercises[String(e.id)]=r,r}const n=zn(e);return a.progress.readingExercises[String(e.id)]=n,n}function $s(e,t){var s;if(!e?.id)return null;(s=a.progress).readingExercises||(s.readingExercises={});const n=aa(t||{},e);return a.progress.readingExercises[String(e.id)]=n,n}function Tm(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function sr(e=""){var r;if(!a.progress)return!1;const t=U(e);(r=a.progress).readingExercises||(r.readingExercises={});const n=new Map(Fi().filter(o=>!t||U(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(a.progress.readingExercises).forEach(([o,l])=>{const c=n.get(String(o));if(!c)return;const d=aa(l,c),u=Tm(d)?d:zn(c);JSON.stringify(l)!==JSON.stringify(u)&&(a.progress.readingExercises[String(o)]=u,s=!0)}),s}function ON(){const e=Date.now();return Fi().map(t=>{if(!vC(t.level))return null;const n=a.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=aa(n,t);if(a.progress.readingExercises[String(t.id)]=s,!Tm(s))return null;const r=s.dueAt?new Date(s.dueAt).getTime():0;return!r||r>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:r,progress:s,exercise:t,card:null}}).filter(Boolean).sort(ia)}function BN(){const e=Date.now();return["hiragana","katakana"].flatMap(t=>{if(!fe(t))return[];const n=It(t),s=Object.entries(n).map(([r,o])=>({cardId:r,...Be(o)}));return Jc(s,e).initial.map(r=>{const o=wi(r.cardId,t);if(!o?.id||o.slug!==t)return null;const l=Cp(t,o.kana);return Ql({kind:"kana",key:o.id,courseSlug:t,cardId:o.id,kana:o.kana,romaji:l?.romaji||"",strokes:l?.strokes||0,character:l,progress:r,dueAt:r.dueAt?Date.parse(r.dueAt):0})}).filter(Boolean)}).sort(ia)}function cc(){const t=[...DN().map(s=>{if(!s?.id)return null;const r=F(s.id);return{kind:"card",key:`card:${s.id}`,card:s,cardId:String(s.id),dueAt:r.dueAt?new Date(r.dueAt).getTime():0,progress:r}}).filter(Boolean),...BN()].sort(ia),n=[...FN(),...ON()].sort(ia);return Qr(Pv(t,n,Zo))}function Im(e=cc()){const t=Object.freeze(Qr(e).map(n=>n.key).filter(Boolean));a.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString(),results:{remember:0,forgot:0,items:[]}}}function zN(){const e=cc();if(a.route!=="review")return e;a.reviewSession||Im(e);const t=new Map(e.map(r=>[r.key,r])),n=Array.isArray(a.reviewSession?.keys)?a.reviewSession.keys:[],s=n.map(r=>t.get(r)).filter(Boolean);return!n.length&&e.length?(Im(e),e):Qr(s)}function Rm(e,t,n={}){if(a.route!=="review"||!a.reviewSession)return;const s=Me(t)?"forgot":"remember",r=a.reviewSession.results||{remember:0,forgot:0,items:[]};r.remember=Number(r.remember||0),r.forgot=Number(r.forgot||0),r[s]+=1,r.items=Array.isArray(r.items)?r.items:[],r.items.push({kind:e,rating:s,label:String(n.label||n.kana||n.kanji||n.cardId||""),course:String(n.course||n.level||""),dueAt:n.dueAt||null}),a.reviewSession.results=r}function JN(){const e=Date.now(),t=dc().filter(s=>{const r=F(s.id),o=r.dueAt?new Date(r.dueAt).getTime():0;return r.state==="Learning"&&o>e}).length,n=_m().filter(s=>{const r=s.dueAt?new Date(s.dueAt).getTime():0;return s.state==="Learning"&&r>e}).length;return t+n}function _m(){return["hiragana","katakana"].flatMap(e=>fe(e)?Object.values(It(e)).map(t=>Be(t)):[])}function UN(){return dc().filter(e=>F(e.id).state!=="New").length+_m().filter(e=>e.state!=="New").length}function Fe(){if(Pa&&Ma!==null)return Ma;const e=cc().length;return Pa&&(Ma=e),e}function ia(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?F(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?F(t.card.id):t.progress,r=ti(n),o=ti(s);if(r!==o)return o-r;if(e.kind!==t.kind){const l=e.kind==="card"||e.kind==="kana",c=t.kind==="card"||t.kind==="kana";return l!==c?l?-1:1:String(e.kind||"").localeCompare(String(t.kind||""))}return e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function dc(){const e=new Set,t=[];return De.forEach(n=>{ef(n).forEach(s=>{const r=String(s?.id||"");!r||e.has(r)||(e.add(r),t.push(s))})}),t.sort(Oi)}function uc(){const e=Px();return a.cards.filter(t=>{const n=a.lessons.find(r=>r.id===t.lessonId);if(n&&!Je(n))return!1;const s=F(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(Oi)}function Oi(e,t){const n=F(e.id),s=F(t.id),r=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(r!==o)return r-o;if(r>0){const l=ti(n),c=ti(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function GN(){const e=a.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return a.cards.filter(t=>{const n=oa(t.id),s=[t.kanji,K(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,fc(t),t.jlpt,Tc(t.lessonId),fa(t),n.radical,h(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(r=>[r.word,r.reading,r.romaji,r.translation,Ee(r)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(a.filters.jlpt==="all"||t.jlpt===a.filters.jlpt)&&(a.filters.radical==="all"||n.radical===a.filters.radical)&&(a.filters.favorites==="all"||!!a.progress.favorites[t.id])&&HN(t.strokes,a.filters.strokes)})}function HN(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function pc(){const e=a.cards.length,t=a.cards.filter(s=>F(s.id).state!=="New").length,n=a.cards.filter(s=>F(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:uc().length,completion:M(n,e)}}function gc(){return Object.values(a.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function qN(){return(a.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Pm(){const e=a.progress.totalCorrect+a.progress.totalWrong;return e?Math.round(a.progress.totalCorrect/e*100):0}function Mm(){const e={New:0,Learning:0,Review:0,Mastered:0};return a.cards.forEach(t=>{e[F(t.id).state]+=1}),e}function Em(){const e={};return a.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),F(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function vn(){const e=oe();return a.progress.daily[e]||(a.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),a.progress.daily[e]}function mc(e){return a.cards.filter(t=>t.lessonId===e)}function WN(){return a.cards.filter(e=>{const t=a.lessons.find(n=>n.id===e.lessonId);return(!t||Je(t))&&F(e.id).state==="New"})}function re(e){const t=String(e||"");return t&&a.cards.find(n=>String(n.id)===t||String(n.kanji||"")===t||tm(n)===t)||null}function XN(e){return re(e)}function QN(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function oa(e){return a.kanjiMeta[String(e)]||{}}function Bi(e){const t=a.kanjiHints[String(e)]||{};return{hint:h(t.hint||{})||Ke("leya","hint"),mnemonic:h(t.mnemonic||{})||""}}function VN(e){e&&(a.progress.favorites[e]?delete a.progress.favorites[e]:a.progress.favorites[e]=new Date().toISOString(),A(),I())}function it(e=null){a.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function YN(e){const t=String(e||"");a.readingCheck.cardId!==t&&it(t)}function Km(){const e=re(a.readingCheck.cardId||a.activeCardId);if(!e)return;xr(e,"reading_check"),Ui();const t=eC(a.readingCheck.value),n=ZN(e),s=t.some(c=>n.normalized.has(c)),r=t.length>0,o=r&&s?"correct":"wrong",l=r?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";a.readingCheck={cardId:e.id,value:a.readingCheck.value,status:o,message:l},D(o==="correct"?"answer_correct":"answer_wrong"),Ae(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function ZN(e){const t=la(e),n=[...Un(t.onyomi.kana),...Un(t.kunyomi.kana),...Un(e.hiragana)].filter(Boolean),s=n.filter((r,o)=>n.indexOf(r)===o);return{normalized:new Set(s.map(Dm).filter(Boolean))}}function eC(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(Dm).filter(Boolean)}function Dm(e){const t=Fm(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return tC(t).trim()}function Fm(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function tC(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=nC(t.slice(-1));continue}t+=n}return t}function nC(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function Om(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=a.n5KanjiCatalog:t==="N4"?n=a.n4KanjiCatalog:t==="N3"?n=a.n3KanjiCatalog:t==="N2"&&(n=a.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const Bm={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},zm={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function la(e){const t=Om(e);if(t&&t.readings){const r=t.readings,o=zi(r.onyomi,r.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),l=zi(r.kunyomi,r.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||l.kana)return{onyomi:o,kunyomi:l}}const n=zi(e?.onyomi,e?.onyomi_romaji),s=zi(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function Un(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function zi(e,t="",n=""){const s=Un(e).length?Un(e):Un(n),r=Un(t),o=s.map((l,c)=>({kana:V(l),romaji:sC(l,r[c])})).filter(l=>l.kana||l.romaji);return{kana:o.map(l=>l.kana).filter(Boolean).join(" / "),romaji:o.map(l=>l.romaji).filter(Boolean).join(" / ")}}function sC(e,t){const n=Jm(e);return n?t&&Um(t)===Um(n)?t:n:t||""}function Jm(e){const t=[...rC(e)];let n="",s=!1;for(let r=0;r<t.length;r+=1){const o=t[r],l=t[r+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=aC(n);u&&(n+=u);continue}let c="";const d=o+l;if(zm[d])c=zm[d],r+=1;else if(Bm[o])c=Bm[o];else if(/[a-zA-Z0-9]/u.test(o))c=o.toLowerCase();else{s=!1;continue}if(s){const u=c.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=c}return n}function rC(e){return Fm(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function aC(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function Um(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function Gm(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Ji(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function fc(e){const t=la(e);return[`${Ji("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Ji("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function hc(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return qm(t)||Hm(e)}function Hm(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=iC(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function qm(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function iC(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function oC(e){return!!(hc(e)||vc(e))}function vc(e){if(!e)return"";const t=la(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function lC(e){const t=la(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function rr(e,t=""){const n=XL(lC(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function cC(e){return rr(e).length>0}function dC(e){return Un(e)[0]||String(e||"").trim()}function wc(){if(a.route!=="learn"&&a.route!=="review")return;const e=560-(Date.now()-wr);if(e>0){window.setTimeout(wc,e);return}const t=re(a.activeCardId);if(!t)return;const n=rr(t).map(o=>`${o.kind}:${o.kana}`).join("|")||vc(t),s=qm(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const r=`${a.route}:${t.id}:${n||s}`;r!==id&&(id=r,Wm(t,{silent:!0}))}function Ui(){Ia+=1,St="idle",Gi(),kc()}function bc(){return Ia+=1,Ia}function Qe(e){return e===Ia}function kc(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Gi(){Ut&&(Ut.pause(),Ut.currentTime=0,Ut=null)}function Wm(e,t={}){const n=bc();let s=null;const r=()=>Qe(n)?(s||(s=Xm(e,{...t,requestId:n})),s):Promise.resolve(!1);return Qm(e,{kind:"cycle",silent:t.silent,fallback:r,requestId:n})?Promise.resolve(!0):r()}function Xm(e,t={}){const n=t.requestId||bc();if(!Qe(n))return Promise.resolve(!1);const s=hc(e);if(!s||(kc(),Gi(),!Qe(n)))return Promise.resolve(!1);St="audio";const r=new Audio(s);return Ut=r,r.preload="auto",r.onended=()=>{Ut===r&&(Ut=null,Qe(n)&&(St="idle"))},r.onerror=()=>{Qe(n)&&(t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:s}))},r.play().then(()=>Qe(n)&&Ut===r).catch(o=>(Qe(n)&&(Ut===r&&(Ut=null,St="idle"),t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:s,error:o})),!1))}function Qm(e,t={}){const n=t.requestId||bc();Gi(),St="tts-pending";let s=null;const r=typeof t.fallback=="function"?()=>Qe(n)?(s||(s=t.fallback({...t,requestId:n})),s):Promise.resolve(!1):null,o=V(t.text||""),l=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${l}`,d=rr(e);let u=null;if(!o){const C=QL(d,od.get(c)??-1,l);u=C.item,od.set(c,C.cursor)}const m=o||u?.kana||dC(vc(e));let f=!1;if(!Lf(m,{onStart:()=>{if(!Qe(n)||St==="audio"){kc();return}f=!0,St="tts",Gi()},onEnd:()=>{Qe(n)&&St==="tts"&&(St="idle")},onError:C=>{!Qe(n)||f||St==="audio"||(t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:C}),r?.())}}))return Qe(n)&&r?.(),!r&&Qe(n)&&(St="idle"),!r&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:Hm(e)}),!1;if(!Qe(n))return!1;const b=t.label||(u?tc(u):"TTS");return t.silent||z(`${e?.kanji||""} ${b}: ${m}`.trim()),!0}function uC(e,t){z(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Je(e){return!!e}function Hi(e){return a.rewards?.lessonUnlocks?.[e?.id]||1}function Vm(e){if(!e||!Je(e))return"locked";const t=mc(e.id);return t.length?!!a.progress.lessonCompletions?.[e.id]||t.every(r=>{const o=F(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(r=>{const o=F(r.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function yc(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function $c(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function pC(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g($c(e))}"></span>`}function gC(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${yc(e)}">${i($c(e))}</span>`}function wn(e){const t=String(e||"").toUpperCase();return a.jlptLessons.find(n=>n.jlpt===t)||null}function Ft(e){const t=String(e||"").toUpperCase();return a.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function ca(e){const t=String(e||"").toLowerCase();return a.kanaCatalog?.courses?.find(n=>n.slug===t)||null}function js(e){const t=String(e||"").toLowerCase();return a.kanaCourses?.[t]||null}function Gn(){return a.progress.kanaCourses=Uc(a.progress.kanaCourses||null),a.progress.kanaCourses}function ot(e){return eA(Gn(),e)}function qi(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim();if(!fe(n)||!s)return;const r=ot(n),o=new Date().toISOString();let l=!1;r.currentRoute!==s&&(r.currentRoute=s,l=!0),r.updatedAt||(r.updatedAt=o,l=!0),l&&A()}function mC(e){const t=String(e||"").toLowerCase(),n=ca(t);if(!n||!fe(t))return Promise.resolve(null);if(a.kanaCourses[t])return Promise.resolve(a.kanaCourses[t]);if(a.kanaCourseLoading[t])return a.kanaCourseLoading[t];a.kanaCourseErrors[t]=null;const s=ze(n.course_file).then(r=>(a.kanaCourses[t]=r,a.kanaCourseLoading[t]=null,r)).catch(r=>{throw a.kanaCourseLoading[t]=null,a.kanaCourseErrors[t]=r,r});return a.kanaCourseLoading[t]=s,s}function bn(e){const t=String(e||"").toUpperCase();return t==="N5"?Z():t==="N4"?X():t==="N3"?q():t==="N2"?W():t==="N1"?ee():null}function fC(e,t,n="open"){const s=U(e),r=String(t||"");if(!s||!r)return!1;const o=bn(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[r])?!1:(o.viewedLessons[r]=new Date().toISOString(),!0)}function hC(e,t){const n=U(e),s=String(t||"");if(!n||!s)return!1;const r=bn(n);return r?!!(r.viewedLessons?.[s]||r.completedLessons?.[s]):!1}function da(e,t="open"){var s;const n=U(e);return!n||((s=a.progress).viewedReadingLevels||(s.viewedReadingLevels={}),a.progress.viewedReadingLevels[n])?!1:(a.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function vC(e){const t=U(e);return t?!!a.progress.viewedReadingLevels?.[t]:!1}function jc(e){const t=Ft(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function Ym(e){const t=String(e||"").toUpperCase(),n=bn(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const r=Ft(t)?.lessonCount||(t==="N5"?10:0);let o=0;if(t==="N5"){o=ms();const l=Object.keys(n.studiedKanji||{}).length;if(o>=10&&l>=80||o>=r)return!0}else if(o=Object.keys(n.completedLessons||{}).length,o>=r)return!0;return!1}function yt(e){const t=String(e||"").toUpperCase();if(De.includes(t)||a.progress.unlockedJlptLevels&&a.progress.unlockedJlptLevels.includes(t))return!0;if(!Ft(t))return t==="N5";const s=jc(t);return s.length?s.every(r=>Ym(r)):!0}function Zm(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function kn(e){const t=jc(e);return t.length?p()==="ru"?`Откроется после завершения ${Zm(t)}.`:`Unlocks after completing ${Zm(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function tn(e){const t=U(e);if(!t)return[];if(t==="N5"&&a.n5Textbook?.items?.length)return a.n5Textbook.items;if(t==="N4"&&a.n4Textbook?.items?.length)return a.n4Textbook.items;if(t==="N3"&&a.n3Textbook?.items?.length)return a.n3Textbook.items;if(t==="N2"&&a.n2Textbook?.items?.length)return a.n2Textbook.items;if(t==="N1"&&a.n1Textbook?.items?.length)return a.n1Textbook.items;const n=Ft(t),s=a.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),r=n?(n.lessonIds||[]).map(d=>a.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(r.map(d=>d.id)),l=s.filter(d=>!o.has(d.id)),c=Math.max(n?n.lessonCount||r.length:s.length,r.length);return[...r,...l].slice(0,c||s.length)}function Sc(e){const t=U(e);if(!t)return"";const n=tn(t);if(!n.length)return"";const s=TC(t);if(s?.lessonId&&Vi(t,s.lessonId))return s.lessonId;const r=bn(t)?.currentLessonId||"";if(r&&Vi(t,r))return r;const o=t==="N5"?Z().completedLessons||{}:t==="N4"?X().completedLessons||{}:t==="N3"?q().completedLessons||{}:t==="N2"?W().completedLessons||{}:a.progress.lessonCompletions||{},l=n.filter(c=>o[c.id]);return l.length?(l.sort((c,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[c.id]||"")||0;return u!==m?u-m:(d.order||0)-(c.order||0)}),l[0]?.id||n[0]?.id||""):n[0]?.id||""}function Wi(e,t=""){const n=U(e);if(!n||!wn(n))return;if(!yt(n)){a.activeTextbookLevel=n,a.activeJlptLesson=n,et("textbooks",null,n),z(kn(n));return}const s=a.route,r=String(t||"")||Sc(n),o=["N5","N4","N3","N2"].includes(n),l=r?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(r)}`:`#textbooks/${encodeURIComponent(n)}`;a.route="textbooks",a.activeTextbookLevel=n,a.activeJlptLesson=n,a.activeTextbookSubroute=r||null,a.kanjiPageId=null,a.detailCardId=null,a.revealed=!1,a.navMenu=null,a.finalTestModal=null,a.finalTestBusy=!1,a.contactModal=!1,a.pendingFocus=!o&&r?`#textbook-lesson-${r}`:null,s!=="eva-room"&&(a.evaRoomShopOpen=!1),r&&$t(n,r,"open_jlpt"),it(),lt(l),cs(),I()}function wC(e){return e?wn(e.jlpt):null}function ar(e){const t=String(e||"").toUpperCase();return a.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Ss(){return a.progress.jlptLessonPractice=gu(Ms().jlptLessonPractice,a.progress.jlptLessonPractice||{}),a.progress.jlptLessonPractice}function ir(e){if(!e?.drills?.length)return null;const t=Ss(),n=t.activeIds[e.jlpt],s=e.drills.find(r=>r.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function bC(e){const t=ar(a.activeJlptLesson),n=ir(t);if(!n||!n.tiles[e])return;const s=Ss(),r=s.selected[n.id]||[],o=n.blanks.flatMap(l=>l.answer||[]).length;r.includes(e)||r.length>=o||(s.selected[n.id]=[...r,e],s.checked[n.id]=!1,s.results[n.id]=null,A(),I())}function kC(){const e=ir(ar(a.activeJlptLesson));if(!e)return;const t=Ss();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,A(),I()}function yC(){const e=ir(ar(a.activeJlptLesson));if(!e)return;const t=Ss();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,A(),I()}function $C(){const e=ir(ar(a.activeJlptLesson));if(!e)return;const t={...Cc(),...Nc()},n=Ss(),s=n.selected[e.id]||[],r=e.blanks.flatMap(c=>c.answer||[]),o=r.reduce((c,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&c.push(u),c},[]),l=s.length===r.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:o,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),H(8,1,`jlpt_practice:${e.id}`),D("answer_correct")):l||D("answer_wrong"),A(),I()}function jC(){var o,l,c,d,u,m;const e=ar(a.activeJlptLesson),t=ir(e);if(!e||!t)return;const n=e.drills.findIndex(f=>f.id===t.id),s=e.drills[(n+1)%e.drills.length],r=Ss();r.activeIds[e.jlpt]=s.id,(o=r.selected)[l=s.id]||(o[l]=[]),(c=r.checked)[d=s.id]||(c[d]=!1),(u=r.results)[m=s.id]||(u[m]=null),A(),I()}function ef(e){const t=String(e||"").toUpperCase();return t?a.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function Nc(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function Cc(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function Xi(e){const t=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=ua(n,t)&&n<100;)s-=ua(n,t),n+=1;return n}function yn(){const e=a.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=a.progress.xp;for(;n>=ua(t,e)&&t<100;)n-=ua(t,e),t+=1;const s=ua(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:M(n,s)}}function ua(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function SC(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:a.progress,customization:a.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${oe()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),pe("progress_export",{route:a.route,source:"manual"}),z(_("export"))}function pe(e,t={},n={}){return mA(e,t,n)}function nn(e="learn",t={}){pe("learning_start",{route:a.route,source:e,...t},{dedupeKey:"learning_start"})}function or(e,t,n="textbook"){const s=U(e),r=String(t||"");pe("lesson_complete",{route:a.route,level:s,lessonId:r,source:n},{dedupeKey:`${s||"legacy"}:${r}`})}function Qi(e="review"){if(a.route!=="review"||Fe()>0)return;const t=a.reviewSession?.startedAt||"current";pe("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function pa(e,t,n="final-test"){const s=U(e);pe("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&pe("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function NC(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&a.rewardModal||null}}function U(e){const t=String(e||"").toUpperCase();return De.includes(t)?t:""}function Ve(e){if(!e||typeof e!="object")return null;const t=U(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function CC(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=U(n),o=Ve({...typeof s=="object"&&s?s:{},level:r||n});r&&o&&(t[r]=o)}),t}function Ns(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=String(n||"").trim();if(r){if(typeof s=="string"&&s.trim()){t[r]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[r]=o;return}s&&(t[r]=new Date().toISOString())}}),t}function Vi(e,t){const n=U(e),s=String(t||"");return!n||!s?!1:tn(n).some(r=>r.id===s)}function xC(e,t){const n=U(e),s=String(t||"");if(!n||!s)return!!n;const r=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return r.has(s)||n!=="N5"&&o.has(s)?!0:tn(n).some(l=>l.id===s)}function LC(e,t){const n=U(e),s=String(t||"");if(!n||!s)return!1;const r=Oa(n);return r==="ready"||r==="error"||r==="incomplete"?!1:/^[A-Za-z0-9_-]+$/.test(s)}function AC(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim().toLowerCase();if(!fe(n))return!1;if(!s)return!0;const r=js(n);if(r)return["review","final","final-test","reference","sources"].includes(s)||r.lessons?.some(c=>c.id===s)||r.reading_practice?.some(c=>c.id===s);const o=ca(n),l=Number(o?.lesson_count||(n==="hiragana"?10:11));if(/^lesson-\d+$/i.test(s)){const c=Number(s.replace(/\D+/g,""));return c>=1&&c<=l}return/^practice-[1-5]$/i.test(s)?!0:["review","final","final-test","reference","sources"].includes(s)}function tf(e){return tn(e)[0]?.id||""}function TC(e=""){const t=U(e);if(t){const r=Ve(a.progress.lastOpenedJlptLessons?.[t]||null)||(Ve(a.progress.lastOpenedJlptLesson||null)?.level===t?Ve(a.progress.lastOpenedJlptLesson||null):null);return r&&Vi(t,r.lessonId)?r:null}const n=[Ve(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(r=>Ve(r)).filter(Boolean)].filter(Boolean);return n.sort((r,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(r.updatedAt||"")||0)),n.find(r=>Vi(r.level,r.lessonId))||null}function IC(e=""){const t=U(e);if(t)return Ve(a.progress.lastOpenedJlptLessons?.[t]||null)||(Ve(a.progress.lastOpenedJlptLesson||null)?.level===t?Ve(a.progress.lastOpenedJlptLesson||null):null);const n=[Ve(a.progress.lastOpenedJlptLesson||null),...Object.values(a.progress.lastOpenedJlptLessons||{}).map(s=>Ve(s)).filter(Boolean)].filter(Boolean);return n.sort((s,r)=>(Date.parse(r.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function RC(e){const t=U(e);if(!t)return"";const n=De.indexOf(t);return n>=0&&n<De.length-1?De[n+1]:""}function $t(e,t,n="open"){var f;const s=U(e),r=String(t||"");if(!s||!r)return null;const o={level:s,lessonId:r,updatedAt:new Date().toISOString(),source:n},l=Ve(a.progress.lastOpenedJlptLessons?.[s]||null),c=Ve(a.progress.lastOpenedJlptLesson||null);(f=a.progress).lastOpenedJlptLessons||(f.lastOpenedJlptLessons={}),a.progress.lastOpenedJlptLessons[s]=o,a.progress.lastOpenedJlptLesson=o;const d=fC(s,r,n),u=bn(s);return u&&u.currentLessonId!==r&&(u.currentLessonId=r),(!l||l.lessonId!==r||l.level!==s||c?.lessonId!==r||c?.level!==s||d)&&A(),o}function Ot(e,t="btn ghost"){const n=U(e),s=RC(n);if(!n||!s)return"";const r=tf(s);if(!r)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(r)}">${i(o)}</button>`}function sn(){return U(a.activeJlptLesson)||U(a.activeTextbookLevel)||U(a.jlptLessons.find(e=>yt(e.jlpt))?.jlpt)||U(a.jlptLessons[0]?.jlpt)||"N5"}function _C(e,t={}){const n=String(e||a.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(U(t.level||a.activeTextbookLevel||sn())||sn())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(U(t.level||a.activeJlptLesson||sn())||sn())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?a.route||"home":n||"home"}function PC(e=a.route,t={}){const n=new URL(location.href);return n.search="",n.hash=_C(e,t),n.href}function MC(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=U(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=p()==="ru",o={textbooks:r?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:r?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:r?"Урок Flash Kanji":"Flash Kanji lesson",srs:r?"Повторение Flash Kanji":"Flash Kanji review",stats:r?"Статистика Flash Kanji":"Flash Kanji stats",achievements:r?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function EC(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=U(t.level||a.activeJlptLesson||a.activeTextbookLevel||""),r=s?Ft(s):null,o=t.lesson||(s?wn(s):null),l=p()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=h(r?.displayTitle||r?.title||{}),d=Number(r?.lessonCount||0),u=Number(r?.kanjiCount||0);return l?`${c||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${c||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const c=h(o?.title||{}),d=h(o?.summary||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?zC(t.reward||a.rewardModal||{}):"Flash Kanji."}function KC(){return p()==="ru"?"Поделиться":"Share"}function Hn(e=a.route,t={}){const n=U(t.level||""),s=String(t.lessonId||t.lesson?.id||""),r=t.label||KC();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${DC()}</span>
        <span>${i(r)}</span>
      </button>
    `}function DC(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function nf(e){return e==="youtube"?`
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
    `}async function FC(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await HC(e.text,e.url,n)?"copy":"failed"}async function OC(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s=t.reward||a.rewardModal||null,r={section:n,title:MC(n,t),text:EC(n,t),url:PC(n,t),files:[]};if(n==="achievement"||s){const o=await JC(s||{});o&&typeof File<"u"&&(r.files=[new File([o],`flash-kanji-achievement-${a.progress.level}.png`,{type:"image/png"})])}return r}async function sf(e=a.route,t={}){const n=String(e||a.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||a.activeJlptLesson||a.activeTextbookLevel||""),pe("share_opened",{route:n,level:U(s.level)||"",source:"share"});const r=await OC(n,s),o=await FC(r,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(pe("share_completed",{route:n,source:r.files?.length?"file":"web-share"}),!0):o==="copy"?(pe("share_link_copied",{route:n,source:"copy"}),pe("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||z(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function BC(){await sf("achievement",{reward:a.rewardModal||{},toastKey:"shareCopied"})}function zC(e={}){const t=_("shareFallback"),n=e.level||a.progress.level,s=yn(),r=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||a.progress.xp,o=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments;return`${t}: ${_("level")} ${n}, ${r} XP, ${o} Moon Fragments.`}async function JC(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const r=s.getContext("2d");if(!r)return null;UC(r,1200,630);const o=e.level||a.progress.level,l=yn(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||a.progress.xp,d=e.type==="level"?a.progress.moonFragments:e.moonFragments||a.progress.moonFragments,u=e.mascot||(a.progress.level%2===0?"leya":"eva"),m=Pi(u,e.mood||"happy",e.dialog||e.type||"achievement"),[f,v]=await Promise.all([rf("assets/logo.webp"),m?rf(m):Promise.resolve(null)]);return f&&af(r,f,58,48,330,116),v&&af(r,v,780,95,330,450),r.fillStyle="#f7f4ee",r.font="900 58px system-ui, sans-serif",r.fillText(_("levelUp"),64,230),r.font="900 110px 'Yu Mincho', serif",r.fillStyle="#ffe15a",r.fillText(`${_("level")} ${o}`,64,340),r.font="800 38px system-ui, sans-serif",r.fillStyle="#f7f4ee",r.fillText(`${c} XP`,70,425),r.fillText(`${d} Moon Fragments`,70,482),r.fillStyle="rgba(255,255,255,0.74)",r.font="700 28px system-ui, sans-serif",r.fillText("Flash Kanji | JLPT Japanese learning",70,558),r.strokeStyle="rgba(255, 225, 90, 0.7)",r.lineWidth=3,r.strokeRect(34,30,1132,570),GC(s)}function UC(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let r=-t;r<t*2;r+=38)e.beginPath(),e.moveTo(r,0),e.lineTo(r+t,n),e.stroke()}function rf(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function af(e,t,n,s,r,o){const l=Math.min(r/t.naturalWidth,o/t.naturalHeight),c=t.naturalWidth*l,d=t.naturalHeight*l;e.drawImage(t,n+(r-c)/2,s+(o-d)/2,c,d)}function GC(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function HC(e,t,n="shareLinkCopied"){const s=await of(`${e}
${t}`);return z(s?_(n):e),s}async function of(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function qC(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());a.progress=tu(Ms(),n.progress||n),Nr(),n.customization&&(a.customization={...Sn(),...n.customization,selected:{...Sn().selected,...n.customization.selected||{}}},_s()),Ps(),lr(),A(),$n(),z(_("import")),I()}catch(n){console.error(n),z("Invalid JSON")}finally{e.target.value=""}}function WC(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=a.progress.settings;a.progress=Ms(),a.progress.settings=e,a.finalTestModal=null,a.finalTestBusy=!1,Nr(),lr(),A(),I()}function XC(){a.progress.settings.theme=a.progress.settings.theme==="dark"?"light":"dark",a.progress.settings.themeManuallySelected=!0,$n(),A(),I()}function QC(){a.progress.settings.language=p()==="ru"?"en":"ru",a.progress.settings.languageAutoDetected=!1,a.progress.settings.languageManuallySelected=!0,A(),I()}function lf(){a.progress.settings.sound=!Nn(a.progress.settings.sound,!0),a.progress.settings.uxSound=a.progress.settings.sound,lr(),xc(),A(),z(a.progress.settings.sound?"в™Є":"Г—")}function VC(){lf()}function ga(){return window.FlashKanjiSound||null}function YC(){try{ga()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function lr(){const e=ga();!e||!a.progress?.settings||(e.setSoundEnabled?.(Nn(a.progress?.settings?.sound,!0)),e.setSoundVolume?.(Zi()))}function Yi(){return Nn(a.progress?.settings?.sound,!0)}function xc(){const e=Ie('[data-action="sound"]');if(!e)return;const t=Nn(a.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=ZC(t)}function ZC(e){return e?`
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
      `}function ex(e){return e?`
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
      `}function tx(){const e=Ie('[data-action="notification-center"]');if(!e)return;const t=a.notificationPrompt||wa(),n=!!(t.docked||a.notificationPromptVisible||no("header")),s=!!a.notificationPromptVisible,r=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",r),e.title=r,e.innerHTML=ex(s)}function Lc(){const e=Ie('[data-action="toggle-header-socials"]');if(!e)return;const t=Ac(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function cf(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),Lc())}function Ac(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Zi(){const e=Number(a.progress?.settings?.uxVolume);return Number.isFinite(e)?le(e,0,1):.75}function nx(e){const t=le(Number(e),0,1);a.progress.settings.uxVolume=t,lr(),A()}function D(e){if(!Yi())return!1;const t=()=>{try{if(!!ga()?.playSound?.(e)){wr=Date.now();return}Rc(String(e))}catch(n){console.warn("UX sound failed.",n),Rc(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function $n(){document.documentElement.dataset.theme=a.progress.settings.theme,document.documentElement.dataset.customTheme=a.customization?.selected?.theme||"theme_default_dark";const e=pn();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",sx(e?.file||"assets/bg/bg_study_hub.webp"));const t=Db();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function sx(e){const t=String(e).replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function _(e){return a.i18n?.ui?.[e]?.[p()]||a.i18n?.ui?.[e]?.ru||e}function p(){return a.progress?.settings?.language||"ru"}function h(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function rx(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function ma(e){return p()==="en"&&a.lessonTranslations[e.id]?.title_en||e.title}function ax(e){return p()==="en"&&a.lessonTranslations[e.id]?.summary_en||e.summary}function Tc(e){const t=a.lessons.find(n=>n.id===e);return t?ma(t):""}function K(e){return Ue(e,p())}function Ue(e,t=p()){if(!e)return"";const n=Om(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||a.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||a.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function fa(e){return p()==="en"?a.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Ee(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=a.vocabulary.find(n=>n.word===e.word||Ic(n.romaji)===Ic(e.romaji));return t?.translation_en?t.translation_en:eh[Ic(e.romaji)]||e.translation||""}function Ic(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function cr(e){return a.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Ke(e,t){const n=e==="eva"?ix(t):"";if(n)return n;const s=cr(e).dialogs?.[t]||cr(e).dialogs?.welcome||{},r=s[p()]||s.ru||[""];return Ye(r)}function ix(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=ox(t),s=[...a.evaAutonomyLines||[],...di()].filter(l=>{const c=h(l?.text||{});if(!c)return!1;const d=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||d.some(f=>n.includes(f))))return!1;const m=df(c);return m.length>=12&&m.length<=132}),r=s.filter(l=>!jo.includes(l.id)),o=Ye(r.length?r:s);return o?(o.id&&(jo=[o.id,...jo.filter(l=>l!==o.id)].slice(0,18)),df(h(o.text||{}))):""}function ox(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function df(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const r of n){const o=`${s} ${r.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function dr(e){const t=uf(e);return`<span class="pill ${t}">${i(Zf[t]||"New")}</span>`}function uf(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function pf(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function lx(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function cx(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function eo(){try{return Ta||(Ta=new(window.AudioContext||window.webkitAudioContext)),Ta.state==="suspended"&&Ta.resume().catch(()=>null),Ta}catch(e){return console.warn("Audio context unavailable.",e),null}}function dx(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function Rc(e){const t=eo();if(!t)return!1;try{const n=dx(e),s=t.currentTime+.01;return n.frequencies.forEach((r,o)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=r;const d=s+n.interval*o;c.gain.setValueAtTime(1e-4,d),c.gain.exponentialRampToValueAtTime(n.peak,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),l.connect(c).connect(t.destination),l.start(d),l.stop(d+n.duration+.02)}),wr=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=Rc;function ux(){const e=()=>{const t=eo();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function ha(e){if(a.progress.settings.sound){if(ga()){D(e==="again"?"answer_wrong":"answer_correct");return}try{const t=eo();if(!t)return;wr=Date.now();const n=t.createOscillator(),s=t.createGain(),r=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.13,r+.015),s.gain.exponentialRampToValueAtTime(1e-4,r+.18),n.connect(s).connect(t.destination),n.start(r),n.stop(r+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function px(){if(a.progress.settings.sound)try{const e=eo();if(!e)return;wr=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="sine",r.frequency.value=n;const l=t+s*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.12,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.24),r.connect(o).connect(e.destination),r.start(l),r.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function gx(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function z(e){const t=Ie("#toast");t.textContent=e,t.hidden=!1,clearTimeout(ld),ld=window.setTimeout(()=>{t.hidden=!0},2400)}function gf(){return`
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
      </section>`}function mx(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function fx(){try{[dt,hr,Aa,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function hx(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function vx(e){try{const t=Number(sessionStorage.getItem(La)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(La,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&fx(),await hx();try{localStorage.removeItem(dt),localStorage.removeItem(hr),localStorage.removeItem(Aa),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(r){console.warn("Boot recovery marker cleanup failed.",r)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function wx(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(hr,`${R}:done`)}catch(r){console.warn("Cannot save PWA cache reset marker.",r)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),r=await navigator.serviceWorker.register(s.href);if(!r||typeof r.update!="function")return;bx(r),await r.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function bx(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function to(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(k)||localStorage.getItem(w);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(k)||localStorage.setItem(k,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function _c(){try{localStorage.setItem(k,JSON.stringify(a.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function kx(e){e.preventDefault(),ts=e,a.progress&&a.i18n&&$x()}async function yx(){if(pe("pwa_install_click",{route:a.route,source:ts?"browser":ur()?"ios":"help"}),va()){Mc();return}if(!ts){a.pwaInstallHelpVisible=!0,Ae();return}const e=ts;ts=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Mc();return}Ec()}catch(t){console.warn("PWA install prompt failed.",t),Ec()}}function va(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function Pc(){const e=a.pwaInstallPrompt||to();if(va()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=a.progress?.visits?.firstVisitDate;return!t||Wn(t,oe())<1?!1:!!ts||ur()}function $x(){Pc()&&(D("notification_soft"),I())}function Mc(){a.pwaInstallPrompt={...to(),...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},a.pwaInstallHelpVisible=!1,_c(),pe("pwa_installed",{route:a.route,source:ur()?"ios":"browser"},{dedupeKey:"appinstalled"}),vf(),a.progress&&a.i18n&&I()}function Ec(){const e=a.pwaInstallPrompt||to(),t=Math.min(Number(e.declineCount||0)+1,5);a.pwaInstallPrompt={...e,declineCount:t,nextShowAt:jx(t),neverShow:t>=5,installed:!1},_c(),I()}function jx(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function Sx(){!va()||a.pwaInstallPrompt.installed||(a.pwaInstallPrompt={...a.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},_c())}function ur(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function mf(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function wa(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(S);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function qn(){try{localStorage.setItem(S,JSON.stringify(a.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function ba(){clearTimeout(fo),fo=0}function Nx(){ba(),a.notificationPromptVisible&&(fo=window.setTimeout(()=>{a.notificationPromptVisible&&ff()},5e3))}function ff(){ba(),!(!a.notificationPromptVisible&&a.notificationPrompt?.docked)&&(a.notificationPromptVisible=!1,a.notificationPrompt={...a.notificationPrompt,docked:!0},qn(),I())}function hf(){return va()||!!a.pwaInstallPrompt?.installed}function no(e="usage"){const t=a.notificationPrompt||wa();return!(!("Notification"in window)||t.neverShow||t.enabled||!hf()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-Co<2*60*1e3)}function so(e="usage"){return no(e)?(a.notificationPromptVisible=!0,a.notificationPrompt={...a.notificationPrompt,docked:!1},qn(),D("notification_soft"),Nx(),I(),!0):("Notification"in window&&Notification.permission==="granted"&&wf(),!1)}function vf(){if(clearTimeout(ud),!hf())return;const e=Math.max(0,2*60*1e3-(Date.now()-Co));ud=window.setTimeout(()=>so("usage"),e)}async function Cx(){if(a.notificationPromptVisible=!1,ba(),!("Notification"in window)){ro();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(a.notificationPrompt.permission=e,a.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){wf(),z(kf().enabled),Ae();return}ro()}catch(e){console.warn("Notification permission failed.",e),ro()}}function wf(){!("Notification"in window)||Notification.permission!=="granted"||(ba(),a.notificationPrompt={...wa(),...a.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:a.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},qn(),Kc())}function ro(){const e=a.notificationPrompt||wa(),t=Math.min(Number(e.declineCount||0)+1,5);a.notificationPromptVisible=!1,ba(),a.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:xx(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},qn(),Ae()}function xx(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function Kc(){!("Notification"in window)||Notification.permission!=="granted"||(a.notificationPrompt.permission="granted",a.notificationPrompt.enabled=!0,qn(),So.forEach(e=>clearTimeout(e)),So.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>bf(e.type,Lx(e.hour,e.minute))),Rx())}function bf(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await Ax(e),bf(e,_x(t,1))},n);So.set(e,s)}function Lx(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function Ax(e){if(!Tx(e))return!1;const t=Ix(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),D(e==="daily_bonus"?"notification_reward":"notification_reminder"),a.notificationPrompt.lastShown[e]=oe(),qn(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function Tx(e){if(!("Notification"in window)||Notification.permission!=="granted"||a.notificationPrompt.lastShown?.[e]===oe())return!1;if(e==="review")return Fe()>0;if(e==="daily_bonus"){const t=Ya(a.progress.dailyBonusPending);return!!a.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=oe()&&!a.progress.dailyBonuses[oe()]}return e==="lesson"?WN().length>0:e==="streak"?(a.progress.streak.current||a.progress.visits?.streak||0)>0:!0}function Ix(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function Rx(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),a.notificationPrompt.periodicSync=!0,qn()}catch{a.notificationPrompt.periodicSync=!1,qn()}}function kf(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function se(e){return{...e,history:[...e.history||[]]}}function _x(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function Px(){const e=new Date;return e.setHours(23,59,59,999),e}function oe(){return Dc(new Date)}function Dc(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Fc(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function Wn(e,t){return Math.round((Fc(t)-Fc(e))/864e5)}function yf(e,t){const n=Fc(e);return n.setDate(n.getDate()+t),Dc(n)}function Mx(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Dc(s)})}function Bt(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const r=Math.ceil(s/24);return p()==="ru"?`через ${r} дн.`:`in ${r} d`}function M(e,t){return t?le(Math.round(e/t*100),0,100):0}function le(e,t,n){return Math.max(t,Math.min(n,e))}function ao(e,t){const n=10**t;return Math.round(e*n)/n}function Ye(e){return e[Math.floor(Math.random()*e.length)]}function Xn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function ka(e,t){return String(e)===String(t)?"selected":""}function Ex(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Cf(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function $f(e="",t=""){const n=String(e||"").trim(),s=fe(n)?n.toLowerCase():n.toUpperCase(),r=String(t||"").trim(),o=s?`#textbooks/${encodeURIComponent(s)}`:"#textbooks/";return r?`${o}/${encodeURIComponent(r)}`:o}function lt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${Ex()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function pr(){const e=Of(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash||e.status==="valid"&&["textbooks","textbook-level","kana-course"].includes(e.kind||"")&&!location.hash?e:Cf(location.pathname||"/")?Vn(location.hash):e.status==="not-found"?e:ge("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function jf(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function gr(e){const t=e.route,n=e.status==="valid"?e.params:{};a.routeMatch=e,a.routeNotFound=e.status==="not-found"?e:null,a.route=t,a.kanjiPageId=t==="kanji"&&n.cardId||null,a.activeTextbookLevel=t==="textbooks"&&(n.level||n.course)||null,a.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,a.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||a.activeJlptLesson,a.activeLearnView=t==="learn"&&n.view||on,a.activeLearnNodeId=t==="learn"&&a.activeLearnView===Jt&&n.targetId||null,a.activeLearnLegacyLessonId=t==="learn"&&a.activeLearnView===ln&&n.targetId||null}function ya(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!XN(t.cardId))return!a.deferredDataLoaded&&QN(t.cardId)?e:ge("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||t.course||"",s=t.subroute||"";if(n&&fe(n))return!ca(n)||s&&!AC(n,s)?ge("hash","entity-not-found",e.raw,e.segments,e.locale):e;if(n&&!Ft(n))return ge("hash","entity-not-found",e.raw,e.segments,e.locale);if(n&&s&&!xC(n,s))return LC(n,s)?e:ge("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!wn(t.level)||e.route==="learn"&&(t.view===Jt&&!os(t.targetId)||t.view===ln&&!a.lessons.some(n=>n.id===t.targetId))?ge("hash","entity-not-found",e.raw,e.segments,e.locale):e}function Kx(){return Vn(location.hash).raw}function Dx(){const e=Vn(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function Fx(){const e=Vn(location.hash);return e.status==="valid"&&e.route==="textbooks"&&(e.params.level||e.params.course)||""}function Ox(){const e=Vn(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function Bx(){const e=Vn(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function zx(){return ks().filter(e=>mr(e.id)).length}function mr(e){const t=a.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
