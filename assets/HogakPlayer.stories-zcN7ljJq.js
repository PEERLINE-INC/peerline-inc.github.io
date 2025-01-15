function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./YouTube-CMA_iHpN.js","./index-uubelm5h.js","./SoundCloud-Cw1hWzpQ.js","./Vimeo-DzjbKAJE.js","./Mux-2qXIgbDv.js","./iframe-BHnpmE3P.js","./Facebook-xBx80PWw.js","./Streamable-CMwL1cu2.js","./Wistia-qA1ufBk1.js","./Twitch-DcH4UkBC.js","./DailyMotion-DUrbZA-z.js","./Mixcloud-BNcB-hR7.js","./Vidyard-CHQ2F0kL.js","./Kaltura-CjoJlY9z.js","./FilePlayer-BD86_D9y.js","./Preview-Bf1b7o6I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as c,S as Zt,u as ke,_ as Gi}from"./inheritsLoose-C5PyBqJG.js";import{r as d,a as Ji,c as zt,g as Qi,R as I}from"./index-uubelm5h.js";import{_ as ne}from"./iframe-BHnpmE3P.js";import{p as eo}from"./index-D3eZ-H7s.js";import"./index-Dei0BBcc.js";var to=function(t,r,i){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(i=r,r={}),r=r||{},i=i||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&no(o,r.attrs),r.text&&(o.text=""+r.text);var s="onload"in o?Vn:ro;s(o,i),o.onload||Vn(o,i),n.appendChild(o)};function no(e,t){for(var r in t)e.setAttribute(r,t[r])}function Vn(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function ro(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var io=function(t){return oo(t)&&!so(t)};function oo(e){return!!e&&typeof e=="object"}function so(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||co(e)}var ao=typeof Symbol=="function"&&Symbol.for,lo=ao?Symbol.for("react.element"):60103;function co(e){return e.$$typeof===lo}function uo(e){return Array.isArray(e)?[]:{}}function Ge(e,t){return t.clone!==!1&&t.isMergeableObject(e)?De(uo(e),e,t):e}function po(e,t,r){return e.concat(t).map(function(i){return Ge(i,r)})}function fo(e,t){if(!t.customMerge)return De;var r=t.customMerge(e);return typeof r=="function"?r:De}function ho(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function An(e){return Object.keys(e).concat(ho(e))}function Cr(e,t){try{return t in e}catch{return!1}}function mo(e,t){return Cr(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function go(e,t,r){var i={};return r.isMergeableObject(e)&&An(e).forEach(function(n){i[n]=Ge(e[n],r)}),An(t).forEach(function(n){mo(e,n)||(Cr(e,n)&&r.isMergeableObject(t[n])?i[n]=fo(n,r)(e[n],t[n],r):i[n]=Ge(t[n],r))}),i}function De(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||po,r.isMergeableObject=r.isMergeableObject||io,r.cloneUnlessOtherwiseSpecified=Ge;var i=Array.isArray(t),n=Array.isArray(e),o=i===n;return o?i?r.arrayMerge(e,t,r):go(e,t,r):Ge(t,r)}De.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(i,n){return De(i,n,r)},{})};var yo=De,br=yo,wo=Object.create,vt=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,Co=Object.getOwnPropertyNames,bo=Object.getPrototypeOf,xo=Object.prototype.hasOwnProperty,So=(e,t)=>{for(var r in t)vt(e,r,{get:t[r],enumerable:!0})},xr=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Co(t))!xo.call(e,n)&&n!==r&&vt(e,n,{get:()=>t[n],enumerable:!(i=vo(t,n))||i.enumerable});return e},yn=(e,t,r)=>(r=e!=null?wo(bo(e)):{},xr(t||!e||!e.__esModule?vt(r,"default",{value:e,enumerable:!0}):r,e)),_o=e=>xr(vt({},"__esModule",{value:!0}),e),Sr={};So(Sr,{callPlayer:()=>No,getConfig:()=>Lo,getSDK:()=>Do,isBlobUrl:()=>Uo,isMediaStream:()=>Bo,lazy:()=>Eo,omit:()=>$o,parseEndTime:()=>Vo,parseStartTime:()=>Io,queryString:()=>zo,randomString:()=>Ao,supportsWebKitPresentationMode:()=>Ho});var Ct=_o(Sr),Po=yn(d),To=yn(to),ko=yn(br);const Eo=e=>Po.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Mo=/[?&#](?:start|t)=([0-9hms]+)/,Oo=/[?&#]end=([0-9hms]+)/,Yt=/(\d+)(h|m|s)/g,Ro=/^\d+$/;function _r(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const i=r[1];if(i.match(Yt))return jo(i);if(Ro.test(i))return parseInt(i)}}function jo(e){let t=0,r=Yt.exec(e);for(;r!==null;){const[,i,n]=r;n==="h"&&(t+=parseInt(i,10)*60*60),n==="m"&&(t+=parseInt(i,10)*60),n==="s"&&(t+=parseInt(i,10)),r=Yt.exec(e)}return t}function Io(e){return _r(e,Mo)}function Vo(e){return _r(e,Oo)}function Ao(){return Math.random().toString(36).substr(2,5)}function zo(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function Dt(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const Me={},Do=function(t,r,i=null,n=()=>!0,o=To.default){const s=Dt(r);return s&&n(s)?Promise.resolve(s):new Promise((a,l)=>{if(Me[t]){Me[t].push({resolve:a,reject:l});return}Me[t]=[{resolve:a,reject:l}];const u=m=>{Me[t].forEach(p=>p.resolve(m))};if(i){const m=window[i];window[i]=function(){m&&m(),u(Dt(r))}}o(t,m=>{m?(Me[t].forEach(p=>p.reject(m)),Me[t]=null):i||u(Dt(r))})})};function Lo(e,t){return(0,ko.default)(t.config,e.config)}function $o(e,...t){const r=[].concat(...t),i={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(i[o]=e[o]);return i}function No(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function Bo(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Uo(e){return/^blob:/.test(e)}function Ho(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var wn=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Ko=Object.getOwnPropertyNames,qo=Object.prototype.hasOwnProperty,Wo=(e,t)=>{for(var r in t)wn(e,r,{get:t[r],enumerable:!0})},Zo=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ko(t))!qo.call(e,n)&&n!==r&&wn(e,n,{get:()=>t[n],enumerable:!(i=Fo(t,n))||i.enumerable});return e},Yo=e=>Zo(wn({},"__esModule",{value:!0}),e),Pr={};Wo(Pr,{AUDIO_EXTENSIONS:()=>vn,DASH_EXTENSIONS:()=>$r,FLV_EXTENSIONS:()=>Nr,HLS_EXTENSIONS:()=>bn,MATCH_URL_DAILYMOTION:()=>Ar,MATCH_URL_FACEBOOK:()=>Mr,MATCH_URL_FACEBOOK_WATCH:()=>Or,MATCH_URL_KALTURA:()=>Lr,MATCH_URL_MIXCLOUD:()=>zr,MATCH_URL_MUX:()=>Er,MATCH_URL_SOUNDCLOUD:()=>Tr,MATCH_URL_STREAMABLE:()=>Rr,MATCH_URL_TWITCH_CHANNEL:()=>Vr,MATCH_URL_TWITCH_VIDEO:()=>Ir,MATCH_URL_VIDYARD:()=>Dr,MATCH_URL_VIMEO:()=>kr,MATCH_URL_WISTIA:()=>jr,MATCH_URL_YOUTUBE:()=>Xt,VIDEO_EXTENSIONS:()=>Cn,canPlay:()=>Go});var Xo=Yo(Pr),zn=Ct;const Xt=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Tr=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,kr=/vimeo\.com\/(?!progressive_redirect).+/,Er=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Mr=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Or=/^https?:\/\/fb\.watch\/.+$/,Rr=/streamable\.com\/([a-z0-9]+)$/,jr=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Ir=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Vr=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Ar=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,zr=/mixcloud\.com\/([^/]+\/[^/]+)/,Dr=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Lr=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,vn=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,Cn=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,bn=/\.(m3u8)($|\?)/i,$r=/\.(mpd)($|\?)/i,Nr=/\.(flv)($|\?)/i,Gt=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&Gt(t)||Gt(t.src))return!0;return!1}return(0,zn.isMediaStream)(e)||(0,zn.isBlobUrl)(e)?!0:vn.test(e)||Cn.test(e)||bn.test(e)||$r.test(e)||Nr.test(e)},Go={youtube:e=>e instanceof Array?e.every(t=>Xt.test(t)):Xt.test(e),soundcloud:e=>Tr.test(e)&&!vn.test(e),vimeo:e=>kr.test(e)&&!Cn.test(e)&&!bn.test(e),mux:e=>Er.test(e),facebook:e=>Mr.test(e)||Or.test(e),streamable:e=>Rr.test(e),wistia:e=>jr.test(e),twitch:e=>Ir.test(e)||Vr.test(e),dailymotion:e=>Ar.test(e),mixcloud:e=>zr.test(e),vidyard:e=>Dr.test(e),kaltura:e=>Lr.test(e),file:Gt};var xn=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,Qo=Object.getOwnPropertyNames,es=Object.prototype.hasOwnProperty,ts=(e,t)=>{for(var r in t)xn(e,r,{get:t[r],enumerable:!0})},ns=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Qo(t))!es.call(e,n)&&n!==r&&xn(e,n,{get:()=>t[n],enumerable:!(i=Jo(t,n))||i.enumerable});return e},rs=e=>ns(xn({},"__esModule",{value:!0}),e),Br={};ts(Br,{default:()=>os});var is=rs(Br),te=Ct,Q=Xo,os=[{key:"youtube",name:"YouTube",canPlay:Q.canPlay.youtube,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./YouTube-CMA_iHpN.js").then(e=>e.Y),__vite__mapDeps([0,1]),import.meta.url))},{key:"soundcloud",name:"SoundCloud",canPlay:Q.canPlay.soundcloud,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./SoundCloud-Cw1hWzpQ.js").then(e=>e.S),__vite__mapDeps([2,1]),import.meta.url))},{key:"vimeo",name:"Vimeo",canPlay:Q.canPlay.vimeo,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Vimeo-DzjbKAJE.js").then(e=>e.V),__vite__mapDeps([3,1]),import.meta.url))},{key:"mux",name:"Mux",canPlay:Q.canPlay.mux,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Mux-2qXIgbDv.js").then(e=>e.M),__vite__mapDeps([4,5,1]),import.meta.url))},{key:"facebook",name:"Facebook",canPlay:Q.canPlay.facebook,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Facebook-xBx80PWw.js").then(e=>e.F),__vite__mapDeps([6,1]),import.meta.url))},{key:"streamable",name:"Streamable",canPlay:Q.canPlay.streamable,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Streamable-CMwL1cu2.js").then(e=>e.S),__vite__mapDeps([7,1]),import.meta.url))},{key:"wistia",name:"Wistia",canPlay:Q.canPlay.wistia,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Wistia-qA1ufBk1.js").then(e=>e.W),__vite__mapDeps([8,1]),import.meta.url))},{key:"twitch",name:"Twitch",canPlay:Q.canPlay.twitch,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Twitch-DcH4UkBC.js").then(e=>e.T),__vite__mapDeps([9,1]),import.meta.url))},{key:"dailymotion",name:"DailyMotion",canPlay:Q.canPlay.dailymotion,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./DailyMotion-DUrbZA-z.js").then(e=>e.D),__vite__mapDeps([10,1]),import.meta.url))},{key:"mixcloud",name:"Mixcloud",canPlay:Q.canPlay.mixcloud,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Mixcloud-BNcB-hR7.js").then(e=>e.M),__vite__mapDeps([11,1]),import.meta.url))},{key:"vidyard",name:"Vidyard",canPlay:Q.canPlay.vidyard,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Vidyard-CHQ2F0kL.js").then(e=>e.V),__vite__mapDeps([12,1]),import.meta.url))},{key:"kaltura",name:"Kaltura",canPlay:Q.canPlay.kaltura,lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./Kaltura-CjoJlY9z.js").then(e=>e.K),__vite__mapDeps([13,1]),import.meta.url))},{key:"file",name:"FilePlayer",canPlay:Q.canPlay.file,canEnablePIP:e=>Q.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,te.supportsWebKitPresentationMode)())&&!Q.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,te.lazy)(()=>ne(()=>import("./FilePlayer-BD86_D9y.js").then(e=>e.F),__vite__mapDeps([14,1]),import.meta.url))}],Dn=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ss(e,t){return!!(e===t||Dn(e)&&Dn(t))}function as(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ss(e[r],t[r]))return!1;return!0}function ls(e,t){t===void 0&&(t=as);var r,i=[],n,o=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&r===this&&t(a,i)||(n=e.apply(this,a),o=!0,r=this,i=a),n}return s}const cs=Object.freeze(Object.defineProperty({__proto__:null,default:ls},Symbol.toStringTag,{value:"Module"})),us=Ji(cs);var ds=typeof Element<"u",ps=typeof Map=="function",fs=typeof Set=="function",hs=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function lt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,i,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(i=r;i--!==0;)if(!lt(e[i],t[i]))return!1;return!0}var o;if(ps&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(i=o.next()).done;)if(!t.has(i.value[0]))return!1;for(o=e.entries();!(i=o.next()).done;)if(!lt(i.value[1],t.get(i.value[0])))return!1;return!0}if(fs&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(i=o.next()).done;)if(!t.has(i.value[0]))return!1;return!0}if(hs&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(i=r;i--!==0;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[i]))return!1;if(ds&&e instanceof Element)return!1;for(i=r;i--!==0;)if(!((n[i]==="_owner"||n[i]==="__v"||n[i]==="__o")&&e.$$typeof)&&!lt(e[n[i]],t[n[i]]))return!1;return!0}return e!==e&&t!==t}var Ur=function(t,r){try{return lt(t,r)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}},ms=Object.create,bt=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,ys=Object.getOwnPropertyNames,ws=Object.getPrototypeOf,vs=Object.prototype.hasOwnProperty,Cs=(e,t)=>{for(var r in t)bt(e,r,{get:t[r],enumerable:!0})},Hr=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ys(t))!vs.call(e,n)&&n!==r&&bt(e,n,{get:()=>t[n],enumerable:!(i=gs(t,n))||i.enumerable});return e},bs=(e,t,r)=>(r=e!=null?ms(ws(e)):{},Hr(t||!e||!e.__esModule?bt(r,"default",{value:e,enumerable:!0}):r,e)),xs=e=>Hr(bt({},"__esModule",{value:!0}),e),Fr={};Cs(Fr,{defaultProps:()=>Ps,propTypes:()=>_s});var Kr=xs(Fr),Ss=bs(eo);const{string:q,bool:ee,number:Oe,array:Lt,oneOfType:Ke,shape:ie,object:G,func:B,node:Ln}=Ss.default,_s={url:Ke([q,Lt,G]),playing:ee,loop:ee,controls:ee,volume:Oe,muted:ee,playbackRate:Oe,width:Ke([q,Oe]),height:Ke([q,Oe]),style:G,progressInterval:Oe,playsinline:ee,pip:ee,stopOnUnmount:ee,light:Ke([ee,q,G]),playIcon:Ln,previewTabIndex:Oe,previewAriaLabel:q,fallback:Ln,oEmbedUrl:q,wrapper:Ke([q,B,ie({render:B.isRequired})]),config:ie({soundcloud:ie({options:G}),youtube:ie({playerVars:G,embedOptions:G,onUnstarted:B}),facebook:ie({appId:q,version:q,playerId:q,attributes:G}),dailymotion:ie({params:G}),vimeo:ie({playerOptions:G,title:q}),mux:ie({attributes:G,version:q}),file:ie({attributes:G,tracks:Lt,forceVideo:ee,forceAudio:ee,forceHLS:ee,forceSafariHLS:ee,forceDisableHls:ee,forceDASH:ee,forceFLV:ee,hlsOptions:G,hlsVersion:q,dashVersion:q,flvVersion:q}),wistia:ie({options:G,playerId:q,customControls:Lt}),mixcloud:ie({options:G}),twitch:ie({options:G,playerId:q}),vidyard:ie({options:G})}),onReady:B,onStart:B,onPlay:B,onPause:B,onBuffer:B,onBufferEnd:B,onEnded:B,onError:B,onDuration:B,onSeek:B,onPlaybackRateChange:B,onPlaybackQualityChange:B,onProgress:B,onClickPreview:B,onEnablePIP:B,onDisablePIP:B},W=()=>{},Ps={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:W},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:W,onStart:W,onPlay:W,onPause:W,onBuffer:W,onBufferEnd:W,onEnded:W,onError:W,onDuration:W,onSeek:W,onPlaybackRateChange:W,onPlaybackQualityChange:W,onProgress:W,onClickPreview:W,onEnablePIP:W,onDisablePIP:W};var Ts=Object.create,et=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Es=Object.getOwnPropertyNames,Ms=Object.getPrototypeOf,Os=Object.prototype.hasOwnProperty,Rs=(e,t,r)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,js=(e,t)=>{for(var r in t)et(e,r,{get:t[r],enumerable:!0})},qr=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Es(t))!Os.call(e,n)&&n!==r&&et(e,n,{get:()=>t[n],enumerable:!(i=ks(t,n))||i.enumerable});return e},Wr=(e,t,r)=>(r=e!=null?Ts(Ms(e)):{},qr(t||!e||!e.__esModule?et(r,"default",{value:e,enumerable:!0}):r,e)),Is=e=>qr(et({},"__esModule",{value:!0}),e),L=(e,t,r)=>(Rs(e,typeof t!="symbol"?t+"":t,r),r),Zr={};js(Zr,{default:()=>xt});var Vs=Is(Zr),$n=Wr(d),As=Wr(Ur),Yr=Kr,zs=Ct;const Ds=5e3;class xt extends $n.Component{constructor(){super(...arguments),L(this,"mounted",!1),L(this,"isReady",!1),L(this,"isPlaying",!1),L(this,"isLoading",!0),L(this,"loadOnReady",null),L(this,"startOnPlay",!0),L(this,"seekOnPlay",null),L(this,"onDurationCalled",!1),L(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),L(this,"getInternalPlayer",t=>this.player?this.player[t]:null),L(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),i=this.getDuration();if(i){const n={playedSeconds:t,played:t/i};r!==null&&(n.loadedSeconds=r,n.loaded=r/i),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),L(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:i,muted:n}=this.props;t(),!n&&i!==null&&this.player.setVolume(i),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),L(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),L(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),L(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:i}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,i())}),L(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),L(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),L(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:i,volume:n,muted:o,playbackRate:s,pip:a,loop:l,activePlayer:u,disableDeferredLoading:m}=this.props;if(!(0,As.default)(t.url,r)){if(this.isLoading&&!u.forceLoad&&!m&&!(0,zs.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&i&&!this.isPlaying&&this.player.play(),t.playing&&!i&&this.isPlaying&&this.player.pause(),!t.pip&&a&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!a&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==s&&this.player.setPlaybackRate&&this.player.setPlaybackRate(s),t.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,i){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Ds));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,i);return}this.player.seekTo(t,i)}render(){const t=this.props.activePlayer;return t?$n.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}L(xt,"displayName","Player");L(xt,"propTypes",Yr.propTypes);L(xt,"defaultProps",Yr.defaultProps);var Ls=Object.create,tt=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,Ns=Object.getOwnPropertyNames,Bs=Object.getPrototypeOf,Us=Object.prototype.hasOwnProperty,Hs=(e,t,r)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fs=(e,t)=>{for(var r in t)tt(e,r,{get:t[r],enumerable:!0})},Xr=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ns(t))!Us.call(e,n)&&n!==r&&tt(e,n,{get:()=>t[n],enumerable:!(i=$s(t,n))||i.enumerable});return e},nt=(e,t,r)=>(r=e!=null?Ls(Bs(e)):{},Xr(t||!e||!e.__esModule?tt(r,"default",{value:e,enumerable:!0}):r,e)),Ks=e=>Xr(tt({},"__esModule",{value:!0}),e),D=(e,t,r)=>(Hs(e,typeof t!="symbol"?t+"":t,r),r),Gr={};Fs(Gr,{createReactPlayer:()=>ea});var qs=Ks(Gr),Ve=nt(d),Ws=nt(br),$t=nt(us),Nn=nt(Ur),We=Kr,Jr=Ct,Zs=nt(Vs);const Ys=(0,Jr.lazy)(()=>ne(()=>import("./Preview-Bf1b7o6I.js").then(e=>e.P),__vite__mapDeps([15,1]),import.meta.url)),Xs=typeof window<"u"&&window.document&&typeof document<"u",Gs=typeof zt<"u"&&zt.window&&zt.window.document,Js=Object.keys(We.propTypes),Qs=Xs||Gs?Ve.Suspense:()=>null,qe=[],ea=(e,t)=>{var r;return r=class extends Ve.Component{constructor(){super(...arguments),D(this,"state",{showPreview:!!this.props.light}),D(this,"references",{wrapper:i=>{this.wrapper=i},player:i=>{this.player=i}}),D(this,"handleClickPreview",i=>{this.setState({showPreview:!1}),this.props.onClickPreview(i)}),D(this,"showPreview",()=>{this.setState({showPreview:!0})}),D(this,"getDuration",()=>this.player?this.player.getDuration():null),D(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),D(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),D(this,"getInternalPlayer",(i="player")=>this.player?this.player.getInternalPlayer(i):null),D(this,"seekTo",(i,n,o)=>{if(!this.player)return null;this.player.seekTo(i,n,o)}),D(this,"handleReady",()=>{this.props.onReady(this)}),D(this,"getActivePlayer",(0,$t.default)(i=>{for(const n of[...qe,...e])if(n.canPlay(i))return n;return t||null})),D(this,"getConfig",(0,$t.default)((i,n)=>{const{config:o}=this.props;return Ws.default.all([We.defaultProps.config,We.defaultProps.config[n]||{},o,o[n]||{}])})),D(this,"getAttributes",(0,$t.default)(i=>(0,Jr.omit)(this.props,Js))),D(this,"renderActivePlayer",i=>{if(!i)return null;const n=this.getActivePlayer(i);if(!n)return null;const o=this.getConfig(i,n.key);return Ve.default.createElement(Zs.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(i,n){return!(0,Nn.default)(this.props,i)||!(0,Nn.default)(this.state,n)}componentDidUpdate(i){const{light:n}=this.props;!i.light&&n&&this.setState({showPreview:!0}),i.light&&!n&&this.setState({showPreview:!1})}renderPreview(i){if(!i)return null;const{light:n,playIcon:o,previewTabIndex:s,oEmbedUrl:a,previewAriaLabel:l}=this.props;return Ve.default.createElement(Ys,{url:i,light:n,playIcon:o,previewTabIndex:s,previewAriaLabel:l,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){const{url:i,style:n,width:o,height:s,fallback:a,wrapper:l}=this.props,{showPreview:u}=this.state,m=this.getAttributes(i),p=typeof l=="string"?this.references.wrapper:void 0;return Ve.default.createElement(l,{ref:p,style:{...n,width:o,height:s},...m},Ve.default.createElement(Qs,{fallback:a},u?this.renderPreview(i):this.renderActivePlayer(i)))}},D(r,"displayName","ReactPlayer"),D(r,"propTypes",We.propTypes),D(r,"defaultProps",We.defaultProps),D(r,"addCustomPlayer",i=>{qe.push(i)}),D(r,"removeCustomPlayers",()=>{qe.length=0}),D(r,"canPlay",i=>{for(const n of[...qe,...e])if(n.canPlay(i))return!0;return!1}),D(r,"canEnablePIP",i=>{for(const n of[...qe,...e])if(n.canEnablePIP&&n.canEnablePIP(i))return!0;return!1}),r};var ta=Object.create,St=Object.defineProperty,na=Object.getOwnPropertyDescriptor,ra=Object.getOwnPropertyNames,ia=Object.getPrototypeOf,oa=Object.prototype.hasOwnProperty,sa=(e,t)=>{for(var r in t)St(e,r,{get:t[r],enumerable:!0})},Qr=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ra(t))!oa.call(e,n)&&n!==r&&St(e,n,{get:()=>t[n],enumerable:!(i=na(t,n))||i.enumerable});return e},aa=(e,t,r)=>(r=e!=null?ta(ia(e)):{},Qr(t||!e||!e.__esModule?St(r,"default",{value:e,enumerable:!0}):r,e)),la=e=>Qr(St({},"__esModule",{value:!0}),e),ei={};sa(ei,{default:()=>pa});var ca=la(ei),Jt=aa(is),ua=qs;const da=Jt.default[Jt.default.length-1];var pa=(0,ua.createReactPlayer)(Jt.default,da);const fa=Qi(ca);var J=function(){return J=Object.assign||function(t){for(var r,i=1,n=arguments.length;i<n;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},J.apply(this,arguments)};function Je(e,t,r){if(r||arguments.length===2)for(var i=0,n=t.length,o;i<n;i++)(o||!(i in t))&&(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}var j="-ms-",Xe="-moz-",R="-webkit-",ti="comm",_t="rule",Sn="decl",ha="@import",ni="@keyframes",ma="@layer",ri=Math.abs,_n=String.fromCharCode,Qt=Object.assign;function ga(e,t){return F(e,0)^45?(((t<<2^F(e,0))<<2^F(e,1))<<2^F(e,2))<<2^F(e,3):0}function ii(e){return e.trim()}function we(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,r){return e.replace(t,r)}function ct(e,t,r){return e.indexOf(t,r)}function F(e,t){return e.charCodeAt(t)|0}function Le(e,t,r){return e.slice(t,r)}function he(e){return e.length}function oi(e){return e.length}function Ze(e,t){return t.push(e),e}function ya(e,t){return e.map(t).join("")}function Bn(e,t){return e.filter(function(r){return!we(r,t)})}var Pt=1,$e=1,si=0,le=0,$=0,He="";function Tt(e,t,r,i,n,o,s,a){return{value:e,root:t,parent:r,type:i,props:n,children:o,line:Pt,column:$e,length:s,return:"",siblings:a}}function be(e,t){return Qt(Tt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Re(e){for(;e.root;)e=be(e.root,{children:[e]});Ze(e,e.siblings)}function wa(){return $}function va(){return $=le>0?F(He,--le):0,$e--,$===10&&($e=1,Pt--),$}function ue(){return $=le<si?F(He,le++):0,$e++,$===10&&($e=1,Pt++),$}function Te(){return F(He,le)}function ut(){return le}function kt(e,t){return Le(He,e,t)}function en(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ca(e){return Pt=$e=1,si=he(He=e),le=0,[]}function ba(e){return He="",e}function Nt(e){return ii(kt(le-1,tn(e===91?e+2:e===40?e+1:e)))}function xa(e){for(;($=Te())&&$<33;)ue();return en(e)>2||en($)>3?"":" "}function Sa(e,t){for(;--t&&ue()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return kt(e,ut()+(t<6&&Te()==32&&ue()==32))}function tn(e){for(;ue();)switch($){case e:return le;case 34:case 39:e!==34&&e!==39&&tn($);break;case 40:e===41&&tn(e);break;case 92:ue();break}return le}function _a(e,t){for(;ue()&&e+$!==57;)if(e+$===84&&Te()===47)break;return"/*"+kt(t,le-1)+"*"+_n(e===47?e:ue())}function Pa(e){for(;!en(Te());)ue();return kt(e,le)}function Ta(e){return ba(dt("",null,null,null,[""],e=Ca(e),0,[0],e))}function dt(e,t,r,i,n,o,s,a,l){for(var u=0,m=0,p=s,h=0,f=0,y=0,b=1,x=1,C=1,k=0,_="",P=n,O=o,M=i,v=_;x;)switch(y=k,k=ue()){case 40:if(y!=108&&F(v,p-1)==58){ct(v+=E(Nt(k),"&","&\f"),"&\f",ri(u?a[u-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:v+=Nt(k);break;case 9:case 10:case 13:case 32:v+=xa(y);break;case 92:v+=Sa(ut()-1,7);continue;case 47:switch(Te()){case 42:case 47:Ze(ka(_a(ue(),ut()),t,r,l),l);break;default:v+="/"}break;case 123*b:a[u++]=he(v)*C;case 125*b:case 59:case 0:switch(k){case 0:case 125:x=0;case 59+m:C==-1&&(v=E(v,/\f/g,"")),f>0&&he(v)-p&&Ze(f>32?Hn(v+";",i,r,p-1,l):Hn(E(v," ","")+";",i,r,p-2,l),l);break;case 59:v+=";";default:if(Ze(M=Un(v,t,r,u,m,n,a,_,P=[],O=[],p,o),o),k===123)if(m===0)dt(v,t,M,M,P,o,p,a,O);else switch(h===99&&F(v,3)===110?100:h){case 100:case 108:case 109:case 115:dt(e,M,M,i&&Ze(Un(e,M,M,0,0,n,a,_,n,P=[],p,O),O),n,O,p,a,i?P:O);break;default:dt(v,M,M,M,[""],O,0,a,O)}}u=m=f=0,b=C=1,_=v="",p=s;break;case 58:p=1+he(v),f=y;default:if(b<1){if(k==123)--b;else if(k==125&&b++==0&&va()==125)continue}switch(v+=_n(k),k*b){case 38:C=m>0?1:(v+="\f",-1);break;case 44:a[u++]=(he(v)-1)*C,C=1;break;case 64:Te()===45&&(v+=Nt(ue())),h=Te(),m=p=he(_=v+=Pa(ut())),k++;break;case 45:y===45&&he(v)==2&&(b=0)}}return o}function Un(e,t,r,i,n,o,s,a,l,u,m,p){for(var h=n-1,f=n===0?o:[""],y=oi(f),b=0,x=0,C=0;b<i;++b)for(var k=0,_=Le(e,h+1,h=ri(x=s[b])),P=e;k<y;++k)(P=ii(x>0?f[k]+" "+_:E(_,/&\f/g,f[k])))&&(l[C++]=P);return Tt(e,t,r,n===0?_t:a,l,u,m,p)}function ka(e,t,r,i){return Tt(e,t,r,ti,_n(wa()),Le(e,2,-2),0,i)}function Hn(e,t,r,i,n){return Tt(e,t,r,Sn,Le(e,0,i),Le(e,i+1,-1),i,n)}function ai(e,t,r){switch(ga(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 4789:return Xe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+Xe+e+j+e+e;case 5936:switch(F(e,t+11)){case 114:return R+e+j+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+j+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+j+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+j+e+e;case 6165:return R+e+j+"flex-"+e+e;case 5187:return R+e+E(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return R+e+j+"flex-item-"+E(e,/flex-|-self/g,"")+(we(e,/flex-|baseline/)?"":j+"grid-row-"+E(e,/flex-|-self/g,""))+e;case 4675:return R+e+j+"flex-line-pack"+E(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+j+E(e,"shrink","negative")+e;case 5292:return R+e+j+E(e,"basis","preferred-size")+e;case 6060:return R+"box-"+E(e,"-grow","")+R+e+j+E(e,"grow","positive")+e;case 4554:return R+E(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4200:if(!we(e,/flex-|baseline/))return j+"grid-column-align"+Le(e,t)+e;break;case 2592:case 3360:return j+E(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(i,n){return t=n,we(i.props,/grid-\w+-end/)})?~ct(e+(r=r[t].value),"span",0)?e:j+E(e,"-start","")+e+j+"grid-row-span:"+(~ct(r,"span",0)?we(r,/\d+/):+we(r,/\d+/)-+we(e,/\d+/))+";":j+E(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(i){return we(i.props,/grid-\w+-start/)})?e:j+E(E(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(he(e)-1-t>6)switch(F(e,t+1)){case 109:if(F(e,t+4)!==45)break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+Xe+(F(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ct(e,"stretch",0)?ai(E(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return E(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,n,o,s,a,l,u){return j+n+":"+o+u+(s?j+n+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(F(e,t+6)===121)return E(e,":",":"+R)+e;break;case 6444:switch(F(e,F(e,14)===45?18:11)){case 120:return E(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+(F(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+j+"$2box$3")+e;case 100:return E(e,":",":"+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(e,"scroll-","scroll-snap-")+e}return e}function ht(e,t){for(var r="",i=0;i<e.length;i++)r+=t(e[i],i,e,t)||"";return r}function Ea(e,t,r,i){switch(e.type){case ma:if(e.children.length)break;case ha:case Sn:return e.return=e.return||e.value;case ti:return"";case ni:return e.return=e.value+"{"+ht(e.children,i)+"}";case _t:if(!he(e.value=e.props.join(",")))return""}return he(r=ht(e.children,i))?e.return=e.value+"{"+r+"}":""}function Ma(e){var t=oi(e);return function(r,i,n,o){for(var s="",a=0;a<t;a++)s+=e[a](r,i,n,o)||"";return s}}function Oa(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ra(e,t,r,i){if(e.length>-1&&!e.return)switch(e.type){case Sn:e.return=ai(e.value,e.length,r);return;case ni:return ht([be(e,{value:E(e.value,"@","@"+R)})],i);case _t:if(e.length)return ya(r=e.props,function(n){switch(we(n,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Re(be(e,{props:[E(n,/:(read-\w+)/,":"+Xe+"$1")]})),Re(be(e,{props:[n]})),Qt(e,{props:Bn(r,i)});break;case"::placeholder":Re(be(e,{props:[E(n,/:(plac\w+)/,":"+R+"input-$1")]})),Re(be(e,{props:[E(n,/:(plac\w+)/,":"+Xe+"$1")]})),Re(be(e,{props:[E(n,/:(plac\w+)/,j+"input-$1")]})),Re(be(e,{props:[n]})),Qt(e,{props:Bn(r,i)});break}return""})}}var ja={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe={},Ne=typeof process<"u"&&oe!==void 0&&(oe.REACT_APP_SC_ATTR||oe.SC_ATTR)||"data-styled",li="active",ci="data-styled-version",Et="6.1.13",Pn=`/*!sc*/
`,mt=typeof window<"u"&&"HTMLElement"in window,Ia=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&oe!==void 0&&oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&oe.REACT_APP_SC_DISABLE_SPEEDY!==""?oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&oe!==void 0&&oe.SC_DISABLE_SPEEDY!==void 0&&oe.SC_DISABLE_SPEEDY!==""&&oe.SC_DISABLE_SPEEDY!=="false"&&oe.SC_DISABLE_SPEEDY),Va={},Mt=Object.freeze([]),Be=Object.freeze({});function ui(e,t,r){return r===void 0&&(r=Be),e.theme!==r.theme&&e.theme||t||r.theme}var di=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Aa=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,za=/(^-|-$)/g;function Fn(e){return e.replace(Aa,"-").replace(za,"")}var Da=/(a)(d)/gi,it=52,Kn=function(e){return String.fromCharCode(e+(e>25?39:97))};function nn(e){var t,r="";for(t=Math.abs(e);t>it;t=t/it|0)r=Kn(t%it)+r;return(Kn(t%it)+r).replace(Da,"$1-$2")}var Bt,pi=5381,Ae=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},fi=function(e){return Ae(pi,e)};function hi(e){return nn(fi(e)>>>0)}function La(e){return e.displayName||e.name||"Component"}function Ut(e){return typeof e=="string"&&!0}var mi=typeof Symbol=="function"&&Symbol.for,gi=mi?Symbol.for("react.memo"):60115,$a=mi?Symbol.for("react.forward_ref"):60112,Na={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ba={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yi={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ua=((Bt={})[$a]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bt[gi]=yi,Bt);function qn(e){return("type"in(t=e)&&t.type.$$typeof)===gi?yi:"$$typeof"in e?Ua[e.$$typeof]:Na;var t}var Ha=Object.defineProperty,Fa=Object.getOwnPropertyNames,Wn=Object.getOwnPropertySymbols,Ka=Object.getOwnPropertyDescriptor,qa=Object.getPrototypeOf,Zn=Object.prototype;function wi(e,t,r){if(typeof t!="string"){if(Zn){var i=qa(t);i&&i!==Zn&&wi(e,i,r)}var n=Fa(t);Wn&&(n=n.concat(Wn(t)));for(var o=qn(e),s=qn(t),a=0;a<n.length;++a){var l=n[a];if(!(l in Ba||r&&r[l]||s&&l in s||o&&l in o)){var u=Ka(t,l);try{Ha(e,l,u)}catch{}}}}return e}function Ue(e){return typeof e=="function"}function Tn(e){return typeof e=="object"&&"styledComponentId"in e}function Pe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function rn(e,t){if(e.length===0)return"";for(var r=e[0],i=1;i<e.length;i++)r+=t?t+e[i]:e[i];return r}function Qe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function on(e,t,r){if(r===void 0&&(r=!1),!r&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=on(e[i],t[i]);else if(Qe(t))for(var i in t)e[i]=on(e[i],t[i]);return e}function kn(e,t){Object.defineProperty(e,"toString",{value:t})}function rt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Wa=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,i=0;i<t;i++)r+=this.groupSizes[i];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var i=this.groupSizes,n=i.length,o=n;t>=o;)if((o<<=1)<0)throw rt(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(a,r[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],i=this.indexOfGroup(t),n=i+r;this.groupSizes[t]=0;for(var o=i;o<n;o++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var i=this.groupSizes[t],n=this.indexOfGroup(t),o=n+i,s=n;s<o;s++)r+="".concat(this.tag.getRule(s)).concat(Pn);return r},e}(),pt=new Map,gt=new Map,ft=1,ot=function(e){if(pt.has(e))return pt.get(e);for(;gt.has(ft);)ft++;var t=ft++;return pt.set(e,t),gt.set(t,e),t},Za=function(e,t){ft=t+1,pt.set(e,t),gt.set(t,e)},Ya="style[".concat(Ne,"][").concat(ci,'="').concat(Et,'"]'),Xa=new RegExp("^".concat(Ne,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ga=function(e,t,r){for(var i,n=r.split(","),o=0,s=n.length;o<s;o++)(i=n[o])&&e.registerName(t,i)},Ja=function(e,t){for(var r,i=((r=t.textContent)!==null&&r!==void 0?r:"").split(Pn),n=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(Xa);if(l){var u=0|parseInt(l[1],10),m=l[2];u!==0&&(Za(m,u),Ga(e,m,l[3]),e.getTag().insertRules(u,n)),n.length=0}else n.push(a)}}},Yn=function(e){for(var t=document.querySelectorAll(Ya),r=0,i=t.length;r<i;r++){var n=t[r];n&&n.getAttribute(Ne)!==li&&(Ja(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function Qa(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vi=function(e){var t=document.head,r=e||t,i=document.createElement("style"),n=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ne,"]")));return l[l.length-1]}(r),o=n!==void 0?n.nextSibling:null;i.setAttribute(Ne,li),i.setAttribute(ci,Et);var s=Qa();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},el=function(){function e(t){this.element=vi(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var i=document.styleSheets,n=0,o=i.length;n<o;n++){var s=i[n];if(s.ownerNode===r)return s}throw rt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),tl=function(){function e(t){this.element=vi(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var i=document.createTextNode(r);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),nl=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xn=mt,rl={isServer:!mt,useCSSOMInjection:!Ia},yt=function(){function e(t,r,i){t===void 0&&(t=Be),r===void 0&&(r={});var n=this;this.options=J(J({},rl),t),this.gs=r,this.names=new Map(i),this.server=!!t.isServer,!this.server&&mt&&Xn&&(Xn=!1,Yn(this)),kn(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(p){var h=function(C){return gt.get(C)}(p);if(h===void 0)return"continue";var f=o.names.get(h),y=s.getGroup(p);if(f===void 0||!f.size||y.length===0)return"continue";var b="".concat(Ne,".g").concat(p,'[id="').concat(h,'"]'),x="";f!==void 0&&f.forEach(function(C){C.length>0&&(x+="".concat(C,","))}),l+="".concat(y).concat(b,'{content:"').concat(x,'"}').concat(Pn)},m=0;m<a;m++)u(m);return l}(n)})}return e.registerId=function(t){return ot(t)},e.prototype.rehydrate=function(){!this.server&&mt&&Yn(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(J(J({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var i=r.useCSSOMInjection,n=r.target;return r.isServer?new nl(n):i?new el(n):new tl(n)}(this.options),new Wa(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ot(t),this.names.has(t))this.names.get(t).add(r);else{var i=new Set;i.add(r),this.names.set(t,i)}},e.prototype.insertRules=function(t,r,i){this.registerName(t,r),this.getTag().insertRules(ot(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ot(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),il=/&/g,ol=/^\s*\/\/.*$/gm;function Ci(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ci(r.children,t)),r})}function sl(e){var t,r,i,n=e===void 0?Be:e,o=n.options,s=o===void 0?Be:o,a=n.plugins,l=a===void 0?Mt:a,u=function(h,f,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):h},m=l.slice();m.push(function(h){h.type===_t&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(il,r).replace(i,u))}),s.prefix&&m.push(Ra),m.push(Ea);var p=function(h,f,y,b){f===void 0&&(f=""),y===void 0&&(y=""),b===void 0&&(b="&"),t=b,r=f,i=new RegExp("\\".concat(r,"\\b"),"g");var x=h.replace(ol,""),C=Ta(y||f?"".concat(y," ").concat(f," { ").concat(x," }"):x);s.namespace&&(C=Ci(C,s.namespace));var k=[];return ht(C,Ma(m.concat(Oa(function(_){return k.push(_)})))),k};return p.hash=l.length?l.reduce(function(h,f){return f.name||rt(15),Ae(h,f.name)},pi).toString():"",p}var al=new yt,sn=sl(),bi=I.createContext({shouldForwardProp:void 0,styleSheet:al,stylis:sn});bi.Consumer;I.createContext(void 0);function an(){return d.useContext(bi)}var ll=function(){function e(t,r){var i=this;this.inject=function(n,o){o===void 0&&(o=sn);var s=i.name+o.hash;n.hasNameForId(i.id,s)||n.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,kn(this,function(){throw rt(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=sn),this.name+t.hash},e}(),cl=function(e){return e>="A"&&e<="Z"};function Gn(e){for(var t="",r=0;r<e.length;r++){var i=e[r];if(r===1&&i==="-"&&e[0]==="-")return e;cl(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var xi=function(e){return e==null||e===!1||e===""},Si=function(e){var t,r,i=[];for(var n in e){var o=e[n];e.hasOwnProperty(n)&&!xi(o)&&(Array.isArray(o)&&o.isCss||Ue(o)?i.push("".concat(Gn(n),":"),o,";"):Qe(o)?i.push.apply(i,Je(Je(["".concat(n," {")],Si(o),!1),["}"],!1)):i.push("".concat(Gn(n),": ").concat((t=n,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ja||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return i};function xe(e,t,r,i){if(xi(e))return[];if(Tn(e))return[".".concat(e.styledComponentId)];if(Ue(e)){if(!Ue(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var n=e(t);return xe(n,t,r,i)}var o;return e instanceof ll?r?(e.inject(r,i),[e.getName(i)]):[e]:Qe(e)?Si(e):Array.isArray(e)?Array.prototype.concat.apply(Mt,e.map(function(s){return xe(s,t,r,i)})):[e.toString()]}function _i(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ue(r)&&!Tn(r))return!1}return!0}var ul=fi(Et),dl=function(){function e(t,r,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&_i(t),this.componentId=r,this.baseHash=Ae(ul,r),this.baseStyle=i,yt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,i){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))n=Pe(n,this.staticRulesId);else{var o=rn(xe(this.rules,t,r,i)),s=nn(Ae(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,a)}n=Pe(n,s),this.staticRulesId=s}else{for(var l=Ae(this.baseHash,i.hash),u="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")u+=p;else if(p){var h=rn(xe(p,t,r,i));l=Ae(l,h+m),u+=h}}if(u){var f=nn(l>>>0);r.hasNameForId(this.componentId,f)||r.insertRules(this.componentId,f,i(u,".".concat(f),void 0,this.componentId)),n=Pe(n,f)}}return n},e}(),En=I.createContext(void 0);En.Consumer;var Ht={};function pl(e,t,r){var i=Tn(e),n=e,o=!Ut(e),s=t.attrs,a=s===void 0?Mt:s,l=t.componentId,u=l===void 0?function(P,O){var M=typeof P!="string"?"sc":Fn(P);Ht[M]=(Ht[M]||0)+1;var v="".concat(M,"-").concat(hi(Et+M+Ht[M]));return O?"".concat(O,"-").concat(v):v}(t.displayName,t.parentComponentId):l,m=t.displayName,p=m===void 0?function(P){return Ut(P)?"styled.".concat(P):"Styled(".concat(La(P),")")}(e):m,h=t.displayName&&t.componentId?"".concat(Fn(t.displayName),"-").concat(t.componentId):t.componentId||u,f=i&&n.attrs?n.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(i&&n.shouldForwardProp){var b=n.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(P,O){return b(P,O)&&x(P,O)}}else y=b}var C=new dl(r,h,i?n.componentStyle:void 0);function k(P,O){return function(M,v,z){var re=M.attrs,ce=M.componentStyle,V=M.defaultProps,Z=M.foldedComponentIds,Y=M.styledComponentId,me=M.target,de=I.useContext(En),N=an(),U=M.shouldForwardProp||N.shouldForwardProp,H=ui(v,de,V)||Be,A=function(pe,fe,g){for(var K,X=J(J({},fe),{className:void 0,theme:g}),w=0;w<pe.length;w+=1){var Ce=Ue(K=pe[w])?K(X):K;for(var ae in Ce)X[ae]=ae==="className"?Pe(X[ae],Ce[ae]):ae==="style"?J(J({},X[ae]),Ce[ae]):Ce[ae]}return fe.className&&(X.className=Pe(X.className,fe.className)),X}(re,v,H),ve=A.as||me,ge={};for(var se in A)A[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&A.theme===H||(se==="forwardedAs"?ge.as=A.forwardedAs:U&&!U(se,ve)||(ge[se]=A[se]));var Ee=function(pe,fe){var g=an(),K=pe.generateAndInjectStyles(fe,g.styleSheet,g.stylis);return K}(ce,A),Se=Pe(Z,Y);return Ee&&(Se+=" "+Ee),A.className&&(Se+=" "+A.className),ge[Ut(ve)&&!di.has(ve)?"class":"className"]=Se,ge.ref=z,d.createElement(ve,ge)}(_,P,O)}k.displayName=p;var _=I.forwardRef(k);return _.attrs=f,_.componentStyle=C,_.displayName=p,_.shouldForwardProp=y,_.foldedComponentIds=i?Pe(n.foldedComponentIds,n.styledComponentId):"",_.styledComponentId=h,_.target=i?n.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=i?function(O){for(var M=[],v=1;v<arguments.length;v++)M[v-1]=arguments[v];for(var z=0,re=M;z<re.length;z++)on(O,re[z],!0);return O}({},n.defaultProps,P):P}}),kn(_,function(){return".".concat(_.styledComponentId)}),o&&wi(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Jn(e,t){for(var r=[e[0]],i=0,n=t.length;i<n;i+=1)r.push(t[i],e[i+1]);return r}var Qn=function(e){return Object.assign(e,{isCss:!0})};function Pi(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ue(e)||Qe(e))return Qn(xe(Jn(Mt,Je([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?xe(i):Qn(xe(Jn(i,t)))}function ln(e,t,r){if(r===void 0&&(r=Be),!t)throw rt(1,t);var i=function(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,Pi.apply(void 0,Je([n],o,!1)))};return i.attrs=function(n){return ln(e,t,J(J({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return ln(e,t,J(J({},r),n))},i}var Ti=function(e){return ln(pl,e)},T=Ti;di.forEach(function(e){T[e]=Ti(e)});var fl=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=_i(t),yt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,i,n){var o=n(rn(xe(this.rules,r,i,n)),""),s=this.componentId+t;i.insertRules(s,s,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,i,n){t>2&&yt.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,r,i,n)},e}();function hl(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=Pi.apply(void 0,Je([e],t,!1)),n="sc-global-".concat(hi(JSON.stringify(i))),o=new fl(i,n),s=function(l){var u=an(),m=I.useContext(En),p=I.useRef(u.styleSheet.allocateGSInstance(n)).current;return u.styleSheet.server&&a(p,l,u.styleSheet,m,u.stylis),I.useLayoutEffect(function(){if(!u.styleSheet.server)return a(p,l,u.styleSheet,m,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,m,u.stylis]),null};function a(l,u,m,p,h){if(o.isStatic)o.renderStyles(l,Va,m,h);else{var f=J(J({},u),{theme:ui(u,p,s.defaultProps)});o.renderStyles(l,f,m,h)}}return I.memo(s)}const er=e=>{let t;const r=new Set,i=(u,m)=>{const p=typeof u=="function"?u(t):u;if(!Object.is(p,t)){const h=t;t=m??(typeof p!="object"||p===null)?p:Object.assign({},t,p),r.forEach(f=>f(t,h))}},n=()=>t,a={setState:i,getState:n,getInitialState:()=>l,subscribe:u=>(r.add(u),()=>r.delete(u))},l=t=e(i,n,a);return a},ml=e=>e?er(e):er,gl=e=>e;function yl(e,t=gl){const r=I.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return I.useDebugValue(r),r}const tr=e=>{const t=ml(e),r=i=>yl(t,i);return Object.assign(r,t),r},Ot=e=>e?tr(e):tr,S=Ot()(e=>({url:"",setUrl:t=>e({url:t}),title:"",setTitle:t=>e({title:t}),pip:!1,setPip:t=>e({pip:t}),isPlay:!1,setIsPlay:t=>e({isPlay:t}),isReady:!1,setIsReady:t=>e({isReady:t}),isSeek:!1,setIsSeek:t=>e({isSeek:t}),duration:0,setDuration:t=>e({duration:t}),played:0,setPlayed:t=>e({played:t}),volume:1,setVolume:t=>e({volume:t}),isFullScreen:!1,setIsFullScreen:t=>e({isFullScreen:t}),isShowMultiView:!1,setIsShowMultiView:t=>e({isShowMultiView:t}),isShowTagView:!1,setIsShowTagView:t=>e({isShowTagView:t}),isShowClipView:!1,setIsShowClipView:t=>e({isShowClipView:t}),backIconType:"arrowLeft",setBackIconType:t=>e({backIconType:t}),skipDirection:null,setSkipDirection:t=>e({skipDirection:t}),isViewThumbMarker:!1,setIsViewThumbMarker:t=>e({isViewThumbMarker:t}),speed:1,setSpeed:t=>e({speed:t}),quality:720,setQuality:t=>e({quality:t})}));function ki(e,[t,r]){return Math.min(r,Math.max(t,e))}function ze(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e==null||e(n),r===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function wl(e,t=[]){let r=[];function i(o,s){const a=d.createContext(s),l=r.length;r=[...r,s];const u=p=>{var C;const{scope:h,children:f,...y}=p,b=((C=h==null?void 0:h[e])==null?void 0:C[l])||a,x=d.useMemo(()=>y,Object.values(y));return c.jsx(b.Provider,{value:x,children:f})};u.displayName=o+"Provider";function m(p,h){var b;const f=((b=h==null?void 0:h[e])==null?void 0:b[l])||a,y=d.useContext(f);if(y)return y;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${o}\``)}return[u,m]}const n=()=>{const o=r.map(s=>d.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return d.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return n.scopeName=e,[i,vl(n,...t)]}function vl(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const i=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:u})=>{const p=l(o)[`__scope${u}`];return{...a,...p}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}function Ei(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...r)=>{var i;return(i=t.current)==null?void 0:i.call(t,...r)},[])}function Cl({prop:e,defaultProp:t,onChange:r=()=>{}}){const[i,n]=bl({defaultProp:t,onChange:r}),o=e!==void 0,s=o?e:i,a=Ei(r),l=d.useCallback(u=>{if(o){const p=typeof u=="function"?u(e):u;p!==e&&a(p)}else n(u)},[o,e,n,a]);return[s,l]}function bl({defaultProp:e,onChange:t}){const r=d.useState(e),[i]=r,n=d.useRef(i),o=Ei(t);return d.useEffect(()=>{n.current!==i&&(o(i),n.current=i)},[i,n,o]),r}var xl=d.createContext(void 0);function Sl(e){const t=d.useContext(xl);return e||t||"ltr"}function _l(e){const t=d.useRef({value:e,previous:e});return d.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Pl=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{};function Tl(e){const[t,r]=d.useState(void 0);return Pl(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const i=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;const o=n[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;r({width:s,height:a})});return i.observe(e,{box:"border-box"}),()=>i.unobserve(e)}else r(void 0)},[e]),t}var kl=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Rt=kl.reduce((e,t)=>{const r=d.forwardRef((i,n)=>{const{asChild:o,...s}=i,a=o?Zt:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(a,{...s,ref:n})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function El(e,t=[]){let r=[];function i(o,s){const a=d.createContext(s),l=r.length;r=[...r,s];function u(p){const{scope:h,children:f,...y}=p,b=(h==null?void 0:h[e][l])||a,x=d.useMemo(()=>y,Object.values(y));return c.jsx(b.Provider,{value:x,children:f})}function m(p,h){const f=(h==null?void 0:h[e][l])||a,y=d.useContext(f);if(y)return y;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,m]}const n=()=>{const o=r.map(s=>d.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return d.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return n.scopeName=e,[i,Ml(n,...t)]}function Ml(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const i=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:u})=>{const p=l(o)[`__scope${u}`];return{...a,...p}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}function Ol(e){const t=e+"CollectionProvider",[r,i]=El(t),[n,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=f=>{const{scope:y,children:b}=f,x=I.useRef(null),C=I.useRef(new Map).current;return c.jsx(n,{scope:y,itemMap:C,collectionRef:x,children:b})};s.displayName=t;const a=e+"CollectionSlot",l=I.forwardRef((f,y)=>{const{scope:b,children:x}=f,C=o(a,b),k=ke(y,C.collectionRef);return c.jsx(Zt,{ref:k,children:x})});l.displayName=a;const u=e+"CollectionItemSlot",m="data-radix-collection-item",p=I.forwardRef((f,y)=>{const{scope:b,children:x,...C}=f,k=I.useRef(null),_=ke(y,k),P=o(u,b);return I.useEffect(()=>(P.itemMap.set(k,{ref:k,...C}),()=>void P.itemMap.delete(k))),c.jsx(Zt,{[m]:"",ref:_,children:x})});p.displayName=u;function h(f){const y=o(e+"CollectionConsumer",f);return I.useCallback(()=>{const x=y.collectionRef.current;if(!x)return[];const C=Array.from(x.querySelectorAll(`[${m}]`));return Array.from(y.itemMap.values()).sort((P,O)=>C.indexOf(P.ref.current)-C.indexOf(O.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:s,Slot:l,ItemSlot:p},h,i]}var Mi=["PageUp","PageDown"],Oi=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Ri={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Fe="Slider",[cn,Rl,jl]=Ol(Fe),[ji,Yc]=wl(Fe,[jl]),[Il,jt]=ji(Fe),Ii=d.forwardRef((e,t)=>{const{name:r,min:i=0,max:n=100,step:o=1,orientation:s="horizontal",disabled:a=!1,minStepsBetweenThumbs:l=0,defaultValue:u=[i],value:m,onValueChange:p=()=>{},onValueCommit:h=()=>{},inverted:f=!1,form:y,...b}=e,x=d.useRef(new Set),C=d.useRef(0),_=s==="horizontal"?Vl:Al,[P=[],O]=Cl({prop:m,defaultProp:u,onChange:V=>{var Y;(Y=[...x.current][C.current])==null||Y.focus(),p(V)}}),M=d.useRef(P);function v(V){const Z=Nl(P,V);ce(V,Z)}function z(V){ce(V,C.current)}function re(){const V=M.current[C.current];P[C.current]!==V&&h(P)}function ce(V,Z,{commit:Y}={commit:!1}){const me=Fl(o),de=Kl(Math.round((V-i)/o)*o+i,me),N=ki(de,[i,n]);O((U=[])=>{const H=Ll(U,N,Z);if(Hl(H,l*o)){C.current=H.indexOf(N);const A=String(H)!==String(U);return A&&Y&&h(H),A?H:U}else return U})}return c.jsx(Il,{scope:e.__scopeSlider,name:r,disabled:a,min:i,max:n,valueIndexToChangeRef:C,thumbs:x.current,values:P,orientation:s,form:y,children:c.jsx(cn.Provider,{scope:e.__scopeSlider,children:c.jsx(cn.Slot,{scope:e.__scopeSlider,children:c.jsx(_,{"aria-disabled":a,"data-disabled":a?"":void 0,...b,ref:t,onPointerDown:ze(b.onPointerDown,()=>{a||(M.current=P)}),min:i,max:n,inverted:f,onSlideStart:a?void 0:v,onSlideMove:a?void 0:z,onSlideEnd:a?void 0:re,onHomeKeyDown:()=>!a&&ce(i,0,{commit:!0}),onEndKeyDown:()=>!a&&ce(n,P.length-1,{commit:!0}),onStepKeyDown:({event:V,direction:Z})=>{if(!a){const de=Mi.includes(V.key)||V.shiftKey&&Oi.includes(V.key)?10:1,N=C.current,U=P[N],H=o*de*Z;ce(U+H,N,{commit:!0})}}})})})})});Ii.displayName=Fe;var[Vi,Ai]=ji(Fe,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Vl=d.forwardRef((e,t)=>{const{min:r,max:i,dir:n,inverted:o,onSlideStart:s,onSlideMove:a,onSlideEnd:l,onStepKeyDown:u,...m}=e,[p,h]=d.useState(null),f=ke(t,_=>h(_)),y=d.useRef(),b=Sl(n),x=b==="ltr",C=x&&!o||!x&&o;function k(_){const P=y.current||p.getBoundingClientRect(),O=[0,P.width],v=Mn(O,C?[r,i]:[i,r]);return y.current=P,v(_-P.left)}return c.jsx(Vi,{scope:e.__scopeSlider,startEdge:C?"left":"right",endEdge:C?"right":"left",direction:C?1:-1,size:"width",children:c.jsx(zi,{dir:b,"data-orientation":"horizontal",...m,ref:f,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:_=>{const P=k(_.clientX);s==null||s(P)},onSlideMove:_=>{const P=k(_.clientX);a==null||a(P)},onSlideEnd:()=>{y.current=void 0,l==null||l()},onStepKeyDown:_=>{const O=Ri[C?"from-left":"from-right"].includes(_.key);u==null||u({event:_,direction:O?-1:1})}})})}),Al=d.forwardRef((e,t)=>{const{min:r,max:i,inverted:n,onSlideStart:o,onSlideMove:s,onSlideEnd:a,onStepKeyDown:l,...u}=e,m=d.useRef(null),p=ke(t,m),h=d.useRef(),f=!n;function y(b){const x=h.current||m.current.getBoundingClientRect(),C=[0,x.height],_=Mn(C,f?[i,r]:[r,i]);return h.current=x,_(b-x.top)}return c.jsx(Vi,{scope:e.__scopeSlider,startEdge:f?"bottom":"top",endEdge:f?"top":"bottom",size:"height",direction:f?1:-1,children:c.jsx(zi,{"data-orientation":"vertical",...u,ref:p,style:{...u.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:b=>{const x=y(b.clientY);o==null||o(x)},onSlideMove:b=>{const x=y(b.clientY);s==null||s(x)},onSlideEnd:()=>{h.current=void 0,a==null||a()},onStepKeyDown:b=>{const C=Ri[f?"from-bottom":"from-top"].includes(b.key);l==null||l({event:b,direction:C?-1:1})}})})}),zi=d.forwardRef((e,t)=>{const{__scopeSlider:r,onSlideStart:i,onSlideMove:n,onSlideEnd:o,onHomeKeyDown:s,onEndKeyDown:a,onStepKeyDown:l,...u}=e,m=jt(Fe,r);return c.jsx(Rt.span,{...u,ref:t,onKeyDown:ze(e.onKeyDown,p=>{p.key==="Home"?(s(p),p.preventDefault()):p.key==="End"?(a(p),p.preventDefault()):Mi.concat(Oi).includes(p.key)&&(l(p),p.preventDefault())}),onPointerDown:ze(e.onPointerDown,p=>{const h=p.target;h.setPointerCapture(p.pointerId),p.preventDefault(),m.thumbs.has(h)?h.focus():i(p)}),onPointerMove:ze(e.onPointerMove,p=>{p.target.hasPointerCapture(p.pointerId)&&n(p)}),onPointerUp:ze(e.onPointerUp,p=>{const h=p.target;h.hasPointerCapture(p.pointerId)&&(h.releasePointerCapture(p.pointerId),o(p))})})}),Di="SliderTrack",Li=d.forwardRef((e,t)=>{const{__scopeSlider:r,...i}=e,n=jt(Di,r);return c.jsx(Rt.span,{"data-disabled":n.disabled?"":void 0,"data-orientation":n.orientation,...i,ref:t})});Li.displayName=Di;var un="SliderRange",$i=d.forwardRef((e,t)=>{const{__scopeSlider:r,...i}=e,n=jt(un,r),o=Ai(un,r),s=d.useRef(null),a=ke(t,s),l=n.values.length,u=n.values.map(h=>Bi(h,n.min,n.max)),m=l>1?Math.min(...u):0,p=100-Math.max(...u);return c.jsx(Rt.span,{"data-orientation":n.orientation,"data-disabled":n.disabled?"":void 0,...i,ref:a,style:{...e.style,[o.startEdge]:m+"%",[o.endEdge]:p+"%"}})});$i.displayName=un;var dn="SliderThumb",Ni=d.forwardRef((e,t)=>{const r=Rl(e.__scopeSlider),[i,n]=d.useState(null),o=ke(t,a=>n(a)),s=d.useMemo(()=>i?r().findIndex(a=>a.ref.current===i):-1,[r,i]);return c.jsx(zl,{...e,ref:o,index:s})}),zl=d.forwardRef((e,t)=>{const{__scopeSlider:r,index:i,name:n,...o}=e,s=jt(dn,r),a=Ai(dn,r),[l,u]=d.useState(null),m=ke(t,k=>u(k)),p=l?s.form||!!l.closest("form"):!0,h=Tl(l),f=s.values[i],y=f===void 0?0:Bi(f,s.min,s.max),b=$l(i,s.values.length),x=h==null?void 0:h[a.size],C=x?Bl(x,y,a.direction):0;return d.useEffect(()=>{if(l)return s.thumbs.add(l),()=>{s.thumbs.delete(l)}},[l,s.thumbs]),c.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[a.startEdge]:`calc(${y}% + ${C}px)`},children:[c.jsx(cn.ItemSlot,{scope:e.__scopeSlider,children:c.jsx(Rt.span,{role:"slider","aria-label":e["aria-label"]||b,"aria-valuemin":s.min,"aria-valuenow":f,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0,...o,ref:m,style:f===void 0?{display:"none"}:e.style,onFocus:ze(e.onFocus,()=>{s.valueIndexToChangeRef.current=i})})}),p&&c.jsx(Dl,{name:n??(s.name?s.name+(s.values.length>1?"[]":""):void 0),form:s.form,value:f},i)]})});Ni.displayName=dn;var Dl=e=>{const{value:t,...r}=e,i=d.useRef(null),n=_l(t);return d.useEffect(()=>{const o=i.current,s=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(s,"value").set;if(n!==t&&l){const u=new Event("input",{bubbles:!0});l.call(o,t),o.dispatchEvent(u)}},[n,t]),c.jsx("input",{style:{display:"none"},...r,ref:i,defaultValue:t})};function Ll(e=[],t,r){const i=[...e];return i[r]=t,i.sort((n,o)=>n-o)}function Bi(e,t,r){const o=100/(r-t)*(e-t);return ki(o,[0,100])}function $l(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Nl(e,t){if(e.length===1)return 0;const r=e.map(n=>Math.abs(n-t)),i=Math.min(...r);return r.indexOf(i)}function Bl(e,t,r){const i=e/2,o=Mn([0,50],[0,i]);return(i-o(t)*r)*r}function Ul(e){return e.slice(0,-1).map((t,r)=>e[r+1]-t)}function Hl(e,t){if(t>0){const r=Ul(e);return Math.min(...r)>=t}return!0}function Mn(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const i=(t[1]-t[0])/(e[1]-e[0]);return t[0]+i*(r-e[0])}}function Fl(e){return(String(e).split(".")[1]||"").length}function Kl(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}var nr=Ii,rr=Li,ir=$i,or=Ni;const On=e=>d.createElement("svg",{width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.15102 5.27857C9.49423 5.63812 9.48098 6.20782 9.12143 6.55102L3.20345 12.2L9.12143 17.849C9.48098 18.1922 9.49423 18.7619 9.15102 19.1214C8.80782 19.481 8.23812 19.4942 7.87857 19.151L1.27857 12.851C1.10066 12.6812 1 12.446 1 12.2C1 11.954 1.10066 11.7188 1.27857 11.549L7.87857 5.24898C8.23812 4.90578 8.80782 4.91902 9.15102 5.27857Z",fill:"white"})),Ui=e=>d.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.74164 5.74164C6.06382 5.41945 6.58618 5.41945 6.90836 5.74164L11 9.83327L15.0916 5.74164C15.4138 5.41945 15.9362 5.41945 16.2584 5.74164C16.5805 6.06382 16.5805 6.58618 16.2584 6.90836L12.1667 11L16.2584 15.0916C16.5805 15.4138 16.5805 15.9362 16.2584 16.2584C15.9362 16.5805 15.4138 16.5805 15.0916 16.2584L11 12.1667L6.90836 16.2584C6.58618 16.5805 6.06382 16.5805 5.74164 16.2584C5.41945 15.9362 5.41945 15.4138 5.74164 15.0916L9.83327 11L5.74164 6.90836C5.41945 6.58618 5.41945 6.06382 5.74164 5.74164Z",fill:"white"})),ql=e=>d.createElement("svg",{width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("circle",{cx:25,cy:25,r:23.7772,stroke:"white",strokeWidth:2.44565}),d.createElement("path",{d:"M35 22.7679C36.3333 23.5377 36.3333 25.4623 35 26.2321L22.25 33.5933C20.9167 34.3631 19.25 33.4008 19.25 31.8612L19.25 17.1388C19.25 15.5992 20.9167 14.6369 22.25 15.4067L35 22.7679Z",fill:"white"})),Wl=e=>d.createElement("svg",{width:50,height:50,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M19.0234 16.3047V33.696M30.98 16.3047V33.696",stroke:"white",strokeWidth:3.26087,strokeLinecap:"round"}),d.createElement("circle",{cx:25,cy:25,r:23.7772,stroke:"white",strokeWidth:2.44565})),sr=e=>d.createElement("svg",{width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M9.86865 3.46303L9.86866 3.46303L9.87106 3.46062C10.1034 3.22632 10.4134 3.09688 10.75 3.09688C11.4369 3.09688 11.9975 3.65745 11.9975 4.34437V16.6556C11.9975 17.3425 11.4369 17.9031 10.75 17.9031C10.418 17.9031 10.1062 17.7745 9.86866 17.537L5.54725 13.2156L5.31293 12.9812H4.98156H3.61328C2.60808 12.9812 1.78828 12.1615 1.78828 11.1562V9.84375C1.78828 8.83855 2.60808 8.01875 3.61328 8.01875H4.98156H5.31293L5.54725 7.78444L9.86865 3.46303Z",stroke:"white",strokeWidth:1.6}),d.createElement("path",{d:"M14.6622 7.05428C14.3898 7.29381 14.3636 7.70725 14.5998 7.97959C15.115 8.56693 15.4201 9.50865 15.4201 10.4996C15.4201 11.4905 15.1117 12.4322 14.5998 13.0196C14.3603 13.2919 14.3898 13.7054 14.6622 13.9449C14.7869 14.0532 14.9411 14.109 15.0953 14.109C15.279 14.109 15.4595 14.0335 15.5908 13.8858C16.3192 13.0524 16.7392 11.8187 16.7392 10.4996C16.7392 9.18053 16.3225 7.94678 15.5908 7.11334C15.3512 6.841 14.9378 6.81147 14.6654 7.051L14.6622 7.05428Z",fill:"white"}),d.createElement("path",{d:"M17.8555 4.79023C17.5996 4.53101 17.1862 4.52773 16.927 4.78367C16.6677 5.03961 16.6645 5.45304 16.9204 5.71226C18.0524 6.8607 18.6988 8.60633 18.6988 10.5029C18.6988 12.3995 18.0491 14.1451 16.9204 15.2935C16.6677 15.5527 16.6677 15.9662 16.927 16.2221C17.0549 16.3468 17.2223 16.4124 17.3863 16.4124C17.5504 16.4124 17.7243 16.3468 17.8523 16.2155C19.2238 14.8243 20.0113 12.744 20.0113 10.5062C20.0113 8.26836 19.2238 6.18804 17.8523 4.79679L17.8555 4.79023Z",fill:"white"})),Hi=e=>d.createElement("svg",{width:20,height:15,viewBox:"0 0 20 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M18.5116 0H4.82414C4.00332 0 3.33578 0.603968 3.33578 1.34627V2.26881H3.15586C2.33543 2.26881 1.6675 2.87243 1.6675 3.61508V4.53797H1.48797C0.667542 4.53797 0 5.14194 0 5.88424V13.6537C0 14.396 0.667542 15 1.48797 15H15.1759C15.9971 15 16.6642 14.396 16.6642 13.6537V12.7301H16.8438C17.6642 12.7301 18.3317 12.1265 18.3317 11.3839V10.4613H18.512C19.3325 10.4613 20 9.85736 20 9.11506V1.34627C20.0004 0.603968 19.3328 0 18.5116 0ZM15.1334 13.6153H1.53006V5.92266H15.1334V13.6153ZM16.8017 11.3461H16.6646V5.88424C16.6646 5.14194 15.9971 4.53797 15.1762 4.53797L3.33616 4.53762V4.09539H3.19833V3.65315H16.8021L16.8017 11.3461ZM18.4699 9.07769H18.3325V3.61543C18.3325 2.87278 17.665 2.26916 16.8445 2.26916H4.86622V1.38469H18.4703L18.4699 9.07769Z",fill:"white"}),d.createElement("path",{d:"M10.193 9.08805L7.95833 7.61568C7.73324 7.46757 7.43557 7.44661 7.18732 7.56049C6.93945 7.67472 6.78309 7.90492 6.78309 8.15677V11.1015C6.78309 11.3537 6.93945 11.5839 7.18732 11.6978C7.29311 11.747 7.40816 11.7708 7.52283 11.7708C7.67649 11.7708 7.82938 11.7271 7.95833 11.6426L10.193 10.1702C10.3837 10.0445 10.4968 9.84258 10.4968 9.62914C10.4968 9.41501 10.3841 9.2138 10.193 9.08805Z",fill:"white"})),Zl=e=>d.createElement("svg",{width:17,height:18,viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("g",{clipPath:"url(#clip0_1202_43523)"},d.createElement("path",{d:"M13.4451 0.683594H11.1177C10.7977 0.683594 10.5359 0.960826 10.5359 1.29967C10.5359 1.6385 10.7977 1.91574 11.1177 1.91574H13.4451C14.4081 1.91574 15.1907 2.74435 15.1907 3.76395V6.22824C15.1907 6.56708 15.4525 6.84431 15.7725 6.84431C16.0925 6.84431 16.3544 6.56708 16.3544 6.22824V3.76395C16.3544 2.06667 15.0481 0.683594 13.4451 0.683594Z",fill:"white"}),d.createElement("path",{d:"M5.88114 16.0854H3.55376C2.5908 16.0854 1.80822 15.2568 1.80822 14.2372V11.7729C1.80822 11.434 1.54639 11.1568 1.22638 11.1568C0.906362 11.1568 0.644531 11.434 0.644531 11.7729V14.2372C0.644531 15.9344 1.95077 17.3175 3.55376 17.3175H5.88114C6.20115 17.3175 6.46298 17.0403 6.46298 16.7015C6.46298 16.3626 6.20115 16.0854 5.88114 16.0854Z",fill:"white"}),d.createElement("path",{d:"M1.22638 6.84431C1.54639 6.84431 1.80822 6.56708 1.80822 6.22824V3.76395C1.80822 2.74435 2.5908 1.91574 3.55376 1.91574H5.88114C6.20115 1.91574 6.46298 1.6385 6.46298 1.29967C6.46298 0.960826 6.20115 0.683594 5.88114 0.683594H3.55376C1.95077 0.683594 0.644531 2.06667 0.644531 3.76395V6.22824C0.644531 6.56708 0.906362 6.84431 1.22638 6.84431Z",fill:"white"}),d.createElement("path",{d:"M15.7725 11.1568C15.4525 11.1568 15.1907 11.434 15.1907 11.7729V14.2372C15.1907 15.2568 14.4081 16.0854 13.4451 16.0854H11.1177C10.7977 16.0854 10.5359 16.3626 10.5359 16.7015C10.5359 17.0403 10.7977 17.3175 11.1177 17.3175H13.4451C15.0481 17.3175 16.3544 15.9344 16.3544 14.2372V11.7729C16.3544 11.434 16.0925 11.1568 15.7725 11.1568Z",fill:"white"}),d.createElement("path",{d:"M13.4451 0.683594H11.1177C10.7977 0.683594 10.5359 0.960826 10.5359 1.29967C10.5359 1.6385 10.7977 1.91574 11.1177 1.91574H13.4451C14.4081 1.91574 15.1907 2.74435 15.1907 3.76395V6.22824C15.1907 6.56708 15.4525 6.84431 15.7725 6.84431C16.0925 6.84431 16.3544 6.56708 16.3544 6.22824V3.76395C16.3544 2.06667 15.0481 0.683594 13.4451 0.683594Z",stroke:"white",strokeWidth:.5}),d.createElement("path",{d:"M5.88114 16.0854H3.55376C2.5908 16.0854 1.80822 15.2568 1.80822 14.2372V11.7729C1.80822 11.434 1.54639 11.1568 1.22638 11.1568C0.906362 11.1568 0.644531 11.434 0.644531 11.7729V14.2372C0.644531 15.9344 1.95077 17.3175 3.55376 17.3175H5.88114C6.20115 17.3175 6.46298 17.0403 6.46298 16.7015C6.46298 16.3626 6.20115 16.0854 5.88114 16.0854Z",stroke:"white",strokeWidth:.5}),d.createElement("path",{d:"M1.22638 6.84431C1.54639 6.84431 1.80822 6.56708 1.80822 6.22824V3.76395C1.80822 2.74435 2.5908 1.91574 3.55376 1.91574H5.88114C6.20115 1.91574 6.46298 1.6385 6.46298 1.29967C6.46298 0.960826 6.20115 0.683594 5.88114 0.683594H3.55376C1.95077 0.683594 0.644531 2.06667 0.644531 3.76395V6.22824C0.644531 6.56708 0.906362 6.84431 1.22638 6.84431Z",stroke:"white",strokeWidth:.5}),d.createElement("path",{d:"M15.7725 11.1568C15.4525 11.1568 15.1907 11.434 15.1907 11.7729V14.2372C15.1907 15.2568 14.4081 16.0854 13.4451 16.0854H11.1177C10.7977 16.0854 10.5359 16.3626 10.5359 16.7015C10.5359 17.0403 10.7977 17.3175 11.1177 17.3175H13.4451C15.0481 17.3175 16.3544 15.9344 16.3544 14.2372V11.7729C16.3544 11.434 16.0925 11.1568 15.7725 11.1568Z",stroke:"white",strokeWidth:.5})),d.createElement("defs",null,d.createElement("clipPath",{id:"clip0_1202_43523"},d.createElement("rect",{width:17,height:18,fill:"white"})))),pn=e=>d.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M5.57184 4.43133C5.34588 4.43133 5.125 4.49834 4.93712 4.62387C4.74924 4.74941 4.60281 4.92783 4.51634 5.13659C4.42987 5.34535 4.40725 5.57506 4.45133 5.79667C4.49541 6.01829 4.60422 6.22185 4.764 6.38163C4.92377 6.5414 5.12734 6.65021 5.34895 6.6943C5.57057 6.73838 5.80028 6.71575 6.00904 6.62928C6.21779 6.54281 6.39622 6.39638 6.52176 6.2085C6.64729 6.02063 6.71429 5.79975 6.71429 5.57379C6.71429 5.27079 6.59393 4.9802 6.37968 4.76595C6.16542 4.5517 5.87484 4.43133 5.57184 4.43133ZM15.9454 8.01865L9.53997 1.60565C9.46881 1.53506 9.3844 1.47922 9.29161 1.44131C9.19881 1.40341 9.09945 1.3842 8.99921 1.38478H2.14446C1.94246 1.38478 1.74874 1.46502 1.6059 1.60786C1.46307 1.75069 1.38283 1.94442 1.38283 2.14642V9.00116C1.38225 9.1014 1.40146 9.20076 1.43936 9.29356C1.47726 9.38636 1.53311 9.47076 1.6037 9.54193L8.0167 15.9473C8.44512 16.3752 9.02587 16.6155 9.63137 16.6155C10.2369 16.6155 10.8176 16.3752 11.246 15.9473L15.9454 11.2861C16.3732 10.8577 16.6136 10.2769 16.6136 9.6714C16.6136 9.0659 16.3732 8.48515 15.9454 8.05673V8.01865ZM14.8714 10.1665L10.1645 14.8658C10.0218 15.0076 9.82878 15.0873 9.62756 15.0873C9.42635 15.0873 9.23331 15.0076 9.09061 14.8658L2.9061 8.68889V2.90806H8.68694L14.8714 9.09256C14.942 9.16373 14.9979 9.24813 15.0358 9.34092C15.0737 9.43372 15.0929 9.53309 15.0923 9.63332C15.0915 9.83313 15.0121 10.0246 14.8714 10.1665Z",fill:"white"})),Yl=e=>d.createElement("svg",{width:13,height:18,viewBox:"0 0 13 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M0 0.999999C0 0.447714 0.447715 0 1 0H12C12.5523 0 13 0.447715 13 1V11.8298C13 12.1234 12.871 12.4022 12.6471 12.5922L6.94573 17.4314C6.56259 17.7566 5.99762 17.747 5.62582 17.4089L0.327199 12.5902C0.118802 12.4007 0 12.1321 0 11.8504V0.999999Z",fill:"white"}),d.createElement("path",{d:"M3 4C3 3.44771 3.44772 3 4 3H9C9.55228 3 10 3.44772 10 4V9.37575C10 9.66397 9.87564 9.93817 9.65881 10.1281L7.06129 12.4028C6.67431 12.7417 6.09335 12.7317 5.71823 12.3797L3.31576 10.1255C3.11429 9.9365 3 9.67255 3 9.39628V4Z",fill:"#FF3838"}),d.createElement("circle",{cx:6.5,cy:7.5,r:5.5,fill:"#FF1111"}),d.createElement("path",{d:"M9.61836 4.38626C7.89973 2.67073 5.10339 2.67073 3.38476 4.38626C1.67396 6.02506 1.67368 8.97416 3.38481 10.6129C5.1034 12.3285 7.89971 12.3285 9.61836 10.6129C11.3292 8.97416 11.3294 6.02496 9.61836 4.38626ZM3.59395 4.5992C4.39556 3.79902 5.4486 3.3989 6.50156 3.3989C6.69297 3.3989 6.88435 3.41251 7.07425 3.43895C7.0299 3.67791 6.96867 3.91562 6.88935 4.15C6.72743 4.05912 6.63908 3.96355 6.63185 3.95525C6.50354 3.80864 6.28119 4.00094 6.40648 4.15078C6.41501 4.16084 6.54298 4.30724 6.78349 4.43328C6.70067 4.6396 6.60473 4.84259 6.4963 5.04114C6.33462 4.95033 6.24639 4.8549 6.23917 4.8466C6.11109 4.69948 5.88844 4.8927 6.01381 5.04213C6.02179 5.05155 6.13405 5.18077 6.34597 5.3007C6.23737 5.4776 6.11864 5.65004 5.99046 5.81736C5.82493 5.72534 5.73501 5.62767 5.72848 5.62014C5.60036 5.47273 5.37793 5.66696 5.50326 5.81582C5.51083 5.82469 5.61172 5.93993 5.80052 6.05352C5.68773 6.18676 5.56937 6.31652 5.44437 6.44133C5.26174 6.31958 5.17253 6.19187 5.1661 6.18235C5.05773 6.02012 4.81219 6.18471 4.91852 6.34824C4.92536 6.35868 5.02308 6.50386 5.22293 6.65076C5.06582 6.79317 4.90308 6.92733 4.73477 7.05133C4.58853 6.89073 4.53289 6.747 4.52896 6.73629C4.50117 6.65865 4.41661 6.61855 4.3393 6.64592C4.13781 6.74378 4.2766 6.94941 4.48849 7.22258C4.32253 7.33272 4.15264 7.43451 3.97908 7.52629C3.89717 7.38821 3.871 7.28216 3.86875 7.27244C3.85075 7.19202 3.77178 7.14095 3.69164 7.15902C3.49332 7.23235 3.58129 7.40033 3.71202 7.6582C3.53818 7.73895 3.36162 7.81054 3.18302 7.87215C3.12619 7.743 3.112 7.64955 3.11091 7.64161C3.10024 7.55988 3.02584 7.50251 2.94498 7.51246C2.7474 7.56983 2.81084 7.71487 2.89841 7.96151C2.74331 8.00547 2.58708 8.04159 2.43029 8.07045C2.40426 7.88282 2.3903 7.6923 2.3903 7.49958C2.3903 6.40407 2.81775 5.37405 3.59395 4.5992ZM2.48257 8.36547C2.67047 8.3309 2.85754 8.28661 3.04293 8.23162C3.13673 8.35197 3.29526 8.59669 3.48927 8.64246C3.62668 8.64719 3.69234 8.45536 3.57986 8.37366C3.48015 8.29651 3.40157 8.21436 3.33931 8.13399C3.52488 8.06763 3.70853 7.9924 3.88891 7.90649C3.98002 8.01159 4.09556 8.11782 4.24372 8.21224C4.26832 8.22797 4.29583 8.23544 4.32298 8.23544C4.46676 8.24071 4.528 8.03327 4.40252 7.9589C4.30741 7.89828 4.2294 7.83213 4.1642 7.76561C4.35047 7.66503 4.53319 7.55498 4.71075 7.43433C4.83038 7.50946 5.09226 7.76554 5.21422 7.55221C5.29311 7.37853 5.06476 7.32622 4.96629 7.25034C5.14786 7.11352 5.32374 6.96665 5.49231 6.80938C5.60298 6.85881 5.73925 6.9128 5.88119 6.93131C5.95029 6.9313 6.01228 6.88242 6.02665 6.81151C6.06084 6.62571 5.83849 6.62917 5.7238 6.58147C5.84798 6.45365 5.96625 6.32156 6.07845 6.18561C6.20031 6.22935 6.34103 6.26312 6.50047 6.27587C6.69481 6.2888 6.7189 5.9958 6.52398 5.97702C6.43346 5.96979 6.35335 5.95269 6.2781 5.93231C6.40133 5.76689 6.51513 5.5964 6.62043 5.42224C6.76012 5.45004 7.12952 5.61993 7.171 5.3647C7.17979 5.15238 6.89733 5.21137 6.77371 5.15449C6.88087 4.95553 6.97594 4.75224 7.05886 4.5458C7.16467 4.5773 7.28631 4.60355 7.4156 4.61134C7.60188 4.61077 7.61526 4.32868 7.42721 4.31205C7.32998 4.3043 7.24442 4.28539 7.16482 4.26271C7.25168 4.00862 7.31891 3.75072 7.36695 3.49125C8.87204 3.77872 10.2233 5.09855 10.5205 6.63372C10.2589 6.68183 9.99884 6.74943 9.74266 6.83685C9.71993 6.7575 9.70097 6.67222 9.69319 6.5753C9.68666 6.49283 9.61466 6.43027 9.53307 6.43802C9.29605 6.47576 9.43415 6.80248 9.46137 6.94182C9.25382 7.02493 9.04945 7.12026 8.84945 7.22777C8.82686 7.14867 8.80801 7.06374 8.80027 6.96723C8.79367 6.88476 8.72246 6.82234 8.64015 6.82995C8.38983 6.87064 8.55352 7.2396 8.58343 7.37961C8.40825 7.48521 8.23678 7.59942 8.07041 7.72308C8.04983 7.64778 8.03257 7.56758 8.0253 7.47689C8.00526 7.27936 7.71709 7.30505 7.72902 7.50105C7.74171 7.65955 7.77529 7.79947 7.81877 7.92082C7.68197 8.03338 7.54907 8.15204 7.42049 8.27666C7.37203 8.16114 7.37498 7.93811 7.19059 7.9723C6.95253 8.0451 7.14757 8.36951 7.1937 8.50639C7.03569 8.67526 6.88815 8.85147 6.75075 9.0334C6.67406 8.93481 6.62103 8.70261 6.44835 8.78382C6.23873 8.9076 6.49149 9.16662 6.56744 9.28747C6.44663 9.46482 6.33638 9.6473 6.23567 9.83333C6.16814 9.76775 6.10093 9.68906 6.03943 9.59291C5.99508 9.52354 5.90311 9.50356 5.83394 9.5482C5.61758 9.70817 6.00077 10.0072 6.09454 10.1085C6.00871 10.2883 5.93351 10.4714 5.86717 10.6564C5.71809 10.5778 5.59232 10.254 5.41522 10.3884C5.20478 10.5746 5.66608 10.8679 5.76908 10.9533C5.71457 11.1368 5.6706 11.3219 5.63618 11.5079C4.8873 11.3481 4.17458 10.9796 3.59395 10.4C3.02655 9.83355 2.64651 9.13049 2.48257 8.36547ZM9.40917 10.4C8.46185 11.3456 7.16348 11.7321 5.92888 11.5602C5.95769 11.405 5.99364 11.2504 6.03734 11.0969C6.28257 11.1852 6.43234 11.2487 6.48727 11.0496C6.47546 10.8347 6.35434 10.9203 6.1277 10.8106C6.18933 10.6329 6.26084 10.4573 6.34152 10.2843C6.55582 10.398 6.63177 10.4153 6.69623 10.4224C6.86979 10.4233 6.89856 10.1642 6.72837 10.1262C6.71993 10.1242 6.61347 10.0984 6.47449 10.0166C6.56638 9.84363 6.66824 9.6743 6.77848 9.50892C7.03073 9.70795 7.12251 9.74282 7.21527 9.75823C7.37861 9.76063 7.42082 9.51982 7.26418 9.46676C7.26179 9.46591 7.11514 9.41227 6.95019 9.26305C7.0746 9.09493 7.20924 8.93238 7.35212 8.77545C7.49991 8.97661 7.64642 9.07495 7.65694 9.08178C7.68184 9.0981 7.70978 9.10586 7.73736 9.10586C7.8789 9.11122 7.94239 8.9068 7.8193 8.83072C7.81068 8.82496 7.68326 8.73658 7.56138 8.55529C7.68674 8.43027 7.81704 8.3119 7.95088 8.19913C8.06518 8.38913 8.18151 8.49062 8.19043 8.49821C8.33865 8.62328 8.5288 8.39646 8.38233 8.26924C8.37518 8.26305 8.27817 8.17421 8.18633 8.01056C8.35439 7.88235 8.52765 7.76362 8.70537 7.65506C8.82585 7.86779 8.95594 7.9805 8.9654 7.98854C8.9932 8.0121 9.02695 8.02359 9.06063 8.02359C9.19277 8.02886 9.26324 7.84429 9.1573 7.75957C9.15022 7.75344 9.05507 7.66633 8.96406 7.50588C9.16345 7.39746 9.36733 7.30153 9.57454 7.21877C9.70104 7.45983 9.84824 7.58804 9.85832 7.59661C9.88611 7.62017 9.91987 7.63166 9.95354 7.63166C10.0853 7.63708 10.1564 7.45225 10.0502 7.36765C10.0431 7.36151 9.94794 7.27435 9.8569 7.1138C10.0929 7.03429 10.3322 6.973 10.5728 6.92871C10.7538 8.19977 10.3222 9.49641 9.40917 10.4Z",fill:"white"}));function fn(e){const{seconds:t}=e;return c.jsx("time",{dateTime:`P${Math.round(t)}S`,style:{color:"white",fontSize:"1.4em",fontVariantNumeric:"tabular-nums"},children:Xl(t)})}function Xl(e){const t=new Date(e*1e3),r=t.getUTCHours(),i=t.getUTCMinutes(),n=ar(t.getUTCSeconds());return r?`${r}:${ar(i)}:${n}`:`${i}:${n}`}function ar(e){return("0"+e).slice(-2)}fn.__docgenInfo={description:"",methods:[],displayName:"PlayTime",props:{seconds:{required:!0,tsType:{name:"number"},description:""}}};const It=Ot()(e=>({multiViewSources:[],setMultiViewSources:t=>e({multiViewSources:t})})),wt=Ot()(e=>({tags:[],setTags:t=>e({tags:t}),tagMenus:[],setTagMenus:t=>e({tagMenus:t})})),Fi=e=>d.createElement("svg",{width:17,height:15,viewBox:"0 0 17 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("g",{clipPath:"url(#clip0_1202_43516)"},d.createElement("path",{d:"M17 3.95768V11.041C17 12.9939 15.4112 14.5827 13.4583 14.5827H11.3333C10.9423 14.5827 10.625 14.2653 10.625 13.8743C10.625 13.4833 10.9423 13.166 11.3333 13.166H13.4583C14.6299 13.166 15.5833 12.2126 15.5833 11.041V3.95768C15.5833 2.7861 14.6299 1.83268 13.4583 1.83268H3.54167C2.57621 1.83268 1.73046 2.48364 1.48608 3.41652C1.38692 3.79477 1.00158 4.02214 0.621208 3.92156C0.242958 3.82239 0.0162917 3.43493 0.116167 3.05668C0.524167 1.50189 1.93233 0.416016 3.54167 0.416016H13.4583C15.4112 0.416016 17 2.00481 17 3.95768ZM1.0625 12.4577C0.476 12.4577 0 12.9337 0 13.5202C0 14.1067 0.476 14.5827 1.0625 14.5827C1.649 14.5827 2.125 14.1067 2.125 13.5202C2.125 12.9337 1.649 12.4577 1.0625 12.4577ZM0.708333 8.91602C0.317333 8.91602 0 9.23335 0 9.62435C0 10.0153 0.317333 10.3327 0.708333 10.3327C2.66121 10.3327 4.25 11.9215 4.25 13.8743C4.25 14.2653 4.56733 14.5827 4.95833 14.5827C5.34933 14.5827 5.66667 14.2653 5.66667 13.8743C5.66667 11.1402 3.4425 8.91602 0.708333 8.91602ZM0.741625 5.37435C0.350625 5.37435 0.0332917 5.69168 0.0332917 6.08268C0.0332917 6.47368 0.350625 6.79102 0.741625 6.79102C4.62896 6.79102 7.79167 9.9686 7.79167 13.8743C7.79167 14.2653 8.109 14.5827 8.5 14.5827C8.891 14.5827 9.20833 14.2653 9.20833 13.8743C9.20833 9.18731 5.41025 5.37435 0.741625 5.37435Z",fill:"white"})),d.createElement("defs",null,d.createElement("clipPath",{id:"clip0_1202_43516"},d.createElement("rect",{width:17,height:15,fill:"white"})))),Gl=e=>d.createElement("svg",{width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M12.4897 1.0791C12.1657 1.0791 11.9036 1.33256 11.9036 1.64577V12.5746C11.9036 14.3897 10.376 15.8667 8.4988 15.8667C6.62155 15.8667 5.09401 14.3897 5.09401 12.5746V3.21129C5.09401 2.06523 6.05781 1.13333 7.2431 1.13333C8.42783 1.13333 9.39163 2.06523 9.39163 3.21129V11.8596C9.39163 12.3134 9.00989 12.6825 8.54058 12.6825C8.07127 12.6825 7.68952 12.3134 7.68952 11.8596V6.82711C7.68952 6.5139 7.42739 6.26045 7.10346 6.26045C6.77952 6.26045 6.51739 6.5139 6.51739 6.82711V11.8596C6.51739 12.9382 7.42511 13.8158 8.54058 13.8158C9.65605 13.8158 10.5638 12.9382 10.5638 11.8596V3.21129C10.5638 1.44046 9.07399 0 7.2431 0C5.41165 0 3.92188 1.44046 3.92188 3.21129V12.5746C3.92188 15.015 5.97482 17 8.4988 17C11.0228 17 13.0757 15.015 13.0757 12.5746V1.64577C13.0757 1.33255 12.8136 1.0791 12.4897 1.0791Z",fill:"white"})),Rn=Ot()(e=>({currentSeconds:0,setCurrentSeconds:t=>e({currentSeconds:t})})),hn=({options:e,defaultValue:t,onChangeValue:r})=>{var p;const[i,n]=d.useState(!1),[o,s]=d.useState(t||""),a=d.useRef(null),l=()=>{n(!i)},u=h=>{s(h.value),n(!1),r&&r(h)};d.useEffect(()=>{const h=f=>{a.current&&!a.current.contains(f.target)&&n(!1)};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[]),d.useEffect(()=>{t&&s(t)},[t]);const m=((p=e.find(h=>h.value===o))==null?void 0:p.label)||t;return c.jsxs(Jl,{ref:a,children:[c.jsx(Ql,{onClick:l,children:m}),c.jsx(ec,{isOpen:i,children:e.map((h,f)=>c.jsxs(tc,{isActive:h.value===o,onClick:()=>u(h),children:[c.jsx("span",{children:h.label}),h.tag&&c.jsx(nc,{children:h.tag})]},f))})]})},Jl=T.div`
  position: relative;
`,Ql=T.button`
  padding: 0;
  background-color: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 1.4em;
  line-height: 1.6em;
  white-space: nowrap;
`,ec=T.ul`
  list-style: none;
  padding: 0.4em;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 6px;
  display: ${e=>e.isOpen?"block":"none"};
  min-width: 4em;
  max-height: 10em;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.3em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 0.4em;
  }
`,tc=T.li`
  padding: 0.2em 0.4em;
  font-size: 1.2em;
  line-height: 1.2em;
  cursor: pointer;
  text-align: center;
  background-color: ${e=>e.isActive?"#fff":"transparent"};
  color: ${e=>e.isActive?"#000":"#fff"};
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
  sup {
    color: ${e=>e.isActive?"#000":"#fff"};
  }
  &:hover {
    background-color: ${e=>e.isActive?"#fff":"rgba(255,255,255,0.7)"};
    color: #000;
    sup {
      color: #000;
    }
  }
  &~li {
    margin-top: 0.4em;
  }
`,nc=T.sup`
  margin-left: 0.4em;
  font-size: 0.6em;
  color: #fff;
`;hn.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChangeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Option) => void",signature:{arguments:[{type:{name:"Option"},name:"value"}],return:{name:"void"}}},description:""}}};function Ki(e){const{playerRef:t,onBack:r,onClickTagButton:i}=e,n=S(w=>w.title),o=S(w=>w.isPlay),s=S(w=>w.setIsPlay),a=S(w=>w.isSeek),l=S(w=>w.setIsSeek),u=S(w=>w.duration),m=S(w=>w.played),p=S(w=>w.setPlayed),h=S(w=>w.volume),f=S(w=>w.setVolume),y=S(w=>w.isFullScreen),b=S(w=>w.setIsFullScreen),x=S(w=>w.setIsShowMultiView),C=It(w=>w.multiViewSources),k=S(w=>w.setIsShowTagView),_=wt(w=>w.tags),P=S(w=>w.isShowClipView),O=S(w=>w.setIsShowClipView),M=Rn(w=>w.setCurrentSeconds),v=S(w=>w.backIconType),z=S(w=>w.isViewThumbMarker),re=S(w=>w.setSpeed),[ce]=d.useState(!1),[V,Z]=d.useState(!1),[Y,me]=d.useState(!1),[de,N]=d.useState(null),U=d.useRef(null),H=S(w=>w.setSkipDirection),A=d.useRef(null);d.useEffect(()=>{const w=()=>{window.matchMedia("(pointer: coarse)").matches?me(!0):me(!1)};return w(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}},[]),d.useEffect(()=>{if(Y&&V&&!a)return A.current&&(clearTimeout(A.current),A.current=null),A.current=setTimeout(()=>{Z(!1)},3e3),()=>{A.current&&(clearTimeout(A.current),A.current=null)}},[V,Y,a]);const ve=()=>{Y||Z(!0)},ge=()=>{Y||Z(!1)},se=w=>{console.log("handleTouchOverlay",w.target,w.currentTarget);const Ce=w.target,ae=w.currentTarget,In=performance.now();if(de&&In-de<300){U.current&&(clearTimeout(U.current),U.current=null);const{offsetX:Vt}=w.nativeEvent,{clientWidth:Xi}=w.currentTarget;if(Vt<Xi/2){if(t.current){const At=t.current.getCurrentTime();t.current.seekTo(At-10,"seconds"),H("left")}}else if(t.current){const At=t.current.getCurrentTime();t.current.seekTo(At+10,"seconds"),H("right")}setTimeout(()=>{H(null)},600),N(null)}else N(In),U.current=setTimeout(()=>{N(null),U.current=null,Ce.classList.contains("controls-wrapper")&&ae.classList.contains("controls-wrapper")&&Z(Vt=>!Vt)},300)},Ee=([w])=>{l(!0),p(w/100)},Se=([w])=>{console.log("handleSeekCommit",w),l(!1),t.current?t.current.seekTo(m):console.warn("playerRef is null, cannot seek")},pe=()=>{console.log("handleSeekMouseUp"),l(!1)},fe=()=>{console.log("handleSeekMouseDown"),l(!0)},g=w=>{t.current?t.current.seekTo(w):console.warn("playerRef is null, cannot seek")},K=()=>{var w;s(!1),M(((w=t.current)==null?void 0:w.getCurrentTime())??0),O(!0)},X=()=>{y||k(!0),i==null||i()};return c.jsx(rc,{className:"controls-wrapper",onMouseEnter:ve,onMouseLeave:ge,onClick:Y?se:void 0,isOverlayVisible:V,children:c.jsxs(ic,{className:"controls-wrapper",isOverlayVisible:V,children:[c.jsxs(oc,{className:"controls-wrapper",children:[c.jsxs(je,{style:{width:"calc(100% - 10em"},className:"controls-wrapper",children:[c.jsx(ye,{onClick:()=>{y&&b(!1),r&&r()},className:"back_btn",children:v==="close"?c.jsx(Ui,{width:"100%",height:"100%"}):c.jsx(On,{width:"100%",height:"100%"})}),c.jsx("div",{className:"video_title",children:n})]}),c.jsxs(je,{gap:16,className:"icon_box",children:[!y&&c.jsx(ye,{className:"tag_btn",onClick:X,children:c.jsx(pn,{})}),c.jsx(ye,{className:"screencast_btn",children:c.jsx(Fi,{})}),C.length&&c.jsx(ye,{onClick:()=>x(!0),className:"multiview_btn",children:c.jsx(Hi,{})})]})]}),c.jsx(pc,{children:c.jsx(je,{children:c.jsxs(ye,{onClick:w=>s(!o),className:"play_btn",children:[o?c.jsx(Wl,{}):c.jsx(ql,{})," "]})})}),c.jsx(sc,{className:"controls-wrapper",children:c.jsx(Ft,{style:{paddingRight:"1em",gap:"1.3em"},className:"icon_box",children:y&&!P&&c.jsxs(c.Fragment,{children:[c.jsx(Ft,{children:c.jsxs(ye,{className:"side_icon side_clip",onClick:K,children:[c.jsx(Gl,{}),c.jsx("p",{className:"side_icon_name",children:"클립"})]})}),c.jsx(Ft,{children:c.jsxs(ye,{className:"side_icon side_tag",onClick:X,children:[c.jsx(pn,{}),c.jsx("p",{className:"side_icon_name",children:"태그"})]})})]})})}),c.jsxs(ac,{isFullScreen:y,children:[c.jsx(lc,{children:c.jsxs(nr,{className:"SliderRoot",style:{width:"100%"},value:[m*100],max:100,step:.1,onMouseDown:fe,onMouseUp:pe,onValueChange:Ee,onValueCommit:Se,children:[c.jsx(rr,{className:"SliderTrack",children:c.jsx(ir,{className:"SliderRange"})}),c.jsx(or,{className:"SliderThumb","aria-label":"Time",children:z&&c.jsx(dc,{children:c.jsx(Yl,{})})}),!z&&_.map((w,Ce)=>{const ae=w.seconds/u*100;return c.jsx(uc,{onClick:()=>g(w.seconds),left:`${ae}%`,children:c.jsx("img",{src:w.iconUrl,style:{width:"100%"}})},Ce)})]})}),c.jsxs(cc,{children:[c.jsxs(je,{children:[c.jsx(fn,{seconds:u*m}),c.jsx("span",{style:{color:"white",fontSize:"1.4em",paddingLeft:"0.5em",paddingRight:"0.5em"},children:" / "}),c.jsx(fn,{seconds:u})]}),c.jsxs(je,{gap:16,className:"icon_box",children:[c.jsx(hn,{onChangeValue:w=>re(Number(w.value)),options:[{label:"2x",value:2},{label:"1.75x",value:1.75},{label:"1.5x",value:1.5},{label:"1.25x",value:1.25},{label:"1x",value:1},{label:"0.5x",value:.5}],defaultValue:1}),c.jsx(hn,{onChangeValue:w=>console.log(w),options:[{label:"1080p",tag:"HD",value:1080},{label:"720p",value:720},{label:"480p",value:480},{label:"360p",value:360},{label:"240p",value:240},{label:"144p",value:144}],defaultValue:720}),c.jsx(je,{children:c.jsxs(fc,{children:[c.jsx(ye,{className:"volume_control_btn",children:ce?c.jsx(sr,{}):c.jsx(sr,{})}),c.jsxs(nr,{className:"SliderRoot",value:[h*100],max:100,step:1,onValueChange:([w])=>f(w/100),children:[c.jsx(rr,{className:"SliderTrack",children:c.jsx(ir,{className:"SliderRange"})}),c.jsx(or,{className:"SliderThumb","aria-label":"Volume"})]})]})}),c.jsx(ye,{className:"full_screen_btn",onClick:()=>b(!y),children:c.jsx(Zl,{})})]})]})]})]})})}const rc=T.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({isOverlayVisible:e})=>e?"rgba(0, 0, 0, 0.6)":"transparent"};
  transition: background-color 0.3s ease;
`,ic=T.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${({isOverlayVisible:e})=>e?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${({isOverlayVisible:e})=>e?"auto":"none"};
`,oc=T.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.2em 1.6em 0 1.6em;/* 241224 수정 */

  /* 241224 추가 */
  .video_title {
    color: #ffffff;
    font-size: 1.3em;
    margin-left: 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
`,sc=T.div`
  display: flex;
  justify-content: flex-end; /* 241224 수정 */
  align-items: center;
  height: 100%;
`,ac=T.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  
  margin-bottom: 0;

  /* iOS Safari 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    ${({isFullScreen:e})=>e&&`
      margin-bottom: 42px;
    `}
  }
`,ye=T.div`
  /* padding: 4px; 241224 삭제 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 241224 아이콘 스타일 추가 */
  &.back_btn {
    width: 1.4em;
    height: 2.4em;
  }
  &.tag_btn {
    width: 1.8em;
    height: 1.8em;
  }
  &.screencast_btn {
    width: 1.7em;
    height: 1.5em;
  }
  &.multiview_btn {
    width: 2em;
    height: 1.5em;
  }
  &.play_btn {
    width: 5em;
    height: 5em;
  }
  &.side_icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
  }
  &.side_icon.side_clip svg {
    width: 1.7em;
    height: 1.7em;
  }
  &.side_icon.side_tag svg {
    width: 2em;
    height: 2em;
  }
  &.play_control_btn {
    width: 1.8em;
    height: 1.8em;
  }
  &.speed_control_btn {
    width: 1.7em;
    height: 1.7em;
  }
  &.volume_control_btn {
    width: 2.2em;
    height: 2.2em;
  }
  &.full_screen_btn {
    width: 1.7em;
    height: 1.8em;
  }


  .side_icon_name {
    font-size: 1.1em;
    line-height: 1.6em;
    color: #ffffff;
    margin: 0;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  /* 250113 추가 */
  @media screen and (min-width: 390px){font-size:10.8334px;}
  @media screen and (min-width: 396px){font-size:11px;}
  @media screen and (min-width: 411px){font-size:11.4166px;}
  @media screen and (min-width: 412px){font-size:11.4444px;}
  /* iphone 6 Plus */
  @media screen and (min-width: 414px){font-size:11.5px;}
  /* iphone 12 Pro Max */
  @media screen and (min-width: 428px){font-size:11.8889px;}
  @media screen and (min-width: 432px){font-size:12px;}
  @media screen and (min-width: 468px){font-size:13px;}
  @media screen and (min-width: 504px){font-size:14px;}
  @media screen and (min-width: 540px){font-size:15px;} 
`,lc=T.div`
  // width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.6em 0 1.6em;
`,cc=T.div`
  display: flex;
  padding: 0 1.6em 1.2em; /* 241224 padding em 단위로 수정 */
  align-items: center;
  justify-content: space-between;
`,je=T.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
  /* 250113 추가 */
  &.icon_box {
        @media screen and (min-width: 390px){font-size:10.8334px;}
        @media screen and (min-width: 396px){font-size:11px;}
        @media screen and (min-width: 411px){font-size:11.4166px;}
        @media screen and (min-width: 412px){font-size:11.4444px;}
        /* iphone 6 Plus */
        @media screen and (min-width: 414px){font-size:11.5px;}
        /* iphone 12 Pro Max */
        @media screen and (min-width: 428px){font-size:11.8889px;}
        @media screen and (min-width: 432px){font-size:12px;}
        @media screen and (min-width: 468px){font-size:13px;}
        @media screen and (min-width: 504px){font-size:14px;}
        @media screen and (min-width: 540px){font-size:15px;} 
    }
`,Ft=T.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
  /* 250113 추가 */
  &.icon_box {
        @media screen and (min-width: 390px){font-size:10.8334px;}
        @media screen and (min-width: 396px){font-size:11px;}
        @media screen and (min-width: 411px){font-size:11.4166px;}
        @media screen and (min-width: 412px){font-size:11.4444px;}
        /* iphone 6 Plus */
        @media screen and (min-width: 414px){font-size:11.5px;}
        /* iphone 12 Pro Max */
        @media screen and (min-width: 428px){font-size:11.8889px;}
        @media screen and (min-width: 432px){font-size:12px;}
        @media screen and (min-width: 468px){font-size:13px;}
        @media screen and (min-width: 504px){font-size:14px;}
        @media screen and (min-width: 540px){font-size:15px;} 
    }
`,uc=T.div`
  width: 2.4em;
  height: 1.8em;
  position: absolute;
  top: -1.6em;
  left: ${e=>e.left};
  transform: translateX(-50%);
  cursor: pointer;
`,dc=T.div`
  z-index: 10;
  width: 2.4em;
  height: 1.8em;
  position: absolute;
  top: -2em;
  cursor: pointer;
`,pc=T.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,fc=T.div`
  display: flex;
  gap: 0;
  .SliderRoot {
    width: 0;
    opacity: 0;
    transition: all 0.3s ease;
  }
  .SliderThumb {
    width: 0;
  }
  &:hover {
    gap: .4em;
    .SliderRoot {
      width: 5em; /* 250113 수정 */
      opacity: 1;
    }
    .SliderThumb {
      width: 1.2em;
    }
  }
`;Ki.__docgenInfo={description:"",methods:[],displayName:"Controls",props:{playerRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<ReactPlayer | null>",elements:[{name:"union",raw:"ReactPlayer | null",elements:[{name:"ReactPlayer"},{name:"null"}]}]},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickTagButton:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const qi=({isShow:e,seekTo:t,getCurrentSeconds:r})=>{const i=S(f=>f.url),n=S(f=>f.setUrl),o=S(f=>f.setIsShowMultiView),s=S(f=>f.isReady),a=S(f=>f.setIsReady),l=It(f=>f.multiViewSources),[u,m]=d.useState(null),p=f=>{const y=r();m(y),a(!1),console.log("handleChangeMultiView",f,y),n(f.url)},h=()=>{u!==null&&(t(u),m(null))};return d.useEffect(()=>{s&&h()},[s]),c.jsxs(hc,{isShow:e,children:[c.jsx(gc,{onClick:()=>o(!1),className:"back_btn",children:c.jsx(On,{style:{transform:"scaleX(-1)"}})}),c.jsx(lr,{gap:12,className:"popover_list",children:l.map((f,y)=>c.jsxs(mc,{gap:8,onClick:()=>p(f),style:{cursor:"pointer"},children:[c.jsxs("div",{style:{position:"relative",width:"6.6em",height:"4.8em"},children:[c.jsx("img",{src:f.thumbnailUrl,alt:"image",style:{width:"100%",height:"100%",display:"block",objectFit:"cover"}}),i===f.url&&c.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"1em"},children:"재생중입니다"})]}),c.jsxs(lr,{gap:4,style:{width:"calc(100% - 7.4em"},children:[c.jsx("div",{style:{fontSize:"1em"},children:f.title}),c.jsx("div",{style:{fontSize:"0.8em",color:"#999"},children:f.description})]})]},y))})]})},hc=T.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 33.33%; /* 화면의 1/3 크기 */
  min-width: 18em;
  background-color: rgba(0, 0, 0, 0.86);
  display: ${e=>e.isShow?"flex":"none"}; /* 상태에 따라 표시/숨김 */
  z-index: 2;
  padding: 1.3em 1.5em;
  flex-direction: column;
  justify-content: flex-start;
  color: white;

  height: 100%; /* 241224 수정 */
  box-sizing: border-box;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  gap: 0.9em;
`,mc=T.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
`,lr=T.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
  
  /* 241224 추가 */
  &.popover_list {
    overflow: hidden;
    overflow-y: auto;
  }
  &.popover_list::-webkit-scrollbar {
    width: 0.3em;
  }
  &.popover_list::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 0.4em;
  }
`,gc=T.div`
  width: 24px;
  /* padding: 4px; */
  cursor: pointer;

  /* 241224 추가 */
  &.back_btn {
    width: 1.4em;
    height: 2.4em;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  /* 250113 추가 */
  @media screen and (min-width: 390px){font-size:10.8334px;}
  @media screen and (min-width: 396px){font-size:11px;}
  @media screen and (min-width: 411px){font-size:11.4166px;}
  @media screen and (min-width: 412px){font-size:11.4444px;}
  /* iphone 6 Plus */
  @media screen and (min-width: 414px){font-size:11.5px;}
  /* iphone 12 Pro Max */
  @media screen and (min-width: 428px){font-size:11.8889px;}
  @media screen and (min-width: 432px){font-size:12px;}
  @media screen and (min-width: 468px){font-size:13px;}
  @media screen and (min-width: 504px){font-size:14px;}
  @media screen and (min-width: 540px){font-size:15px;} 
`;qi.__docgenInfo={description:"",methods:[],displayName:"MultiViewPopover",props:{isShow:{required:!0,tsType:{name:"boolean"},description:""},seekTo:{required:!0,tsType:{name:"signature",type:"function",raw:"(seconds: number) => void",signature:{arguments:[{type:{name:"number"},name:"seconds"}],return:{name:"void"}}},description:""},getCurrentSeconds:{required:!0,tsType:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}}},description:""}}};const Wi=({isShow:e,onAddTagClick:t})=>{const r=S(o=>o.setIsShowTagView),i=wt(o=>o.tagMenus),n=o=>{t&&t({id:o.id,title:o.title,seconds:0})};return c.jsx(yc,{isShow:e,children:c.jsxs(ur,{gap:8,style:{paddingLeft:"1em",height:"100%"},children:[c.jsxs(cr,{style:{justifyContent:"space-between"},children:[c.jsx("div",{style:{fontSize:"1.1em"},children:"태그 추가"}),c.jsx(wc,{onClick:()=>r(!1),className:"close_btn",children:c.jsx(Ui,{})})]}),c.jsx(ur,{gap:12,className:"popover_list",children:(Array.isArray(i)?i:[]).map((o,s)=>c.jsxs(cr,{style:{cursor:"pointer"},onClick:()=>{n(o)},children:[c.jsx(vc,{children:c.jsx("img",{src:o.iconUrl,alt:o.title,style:{width:"100%"}})}),c.jsx("div",{style:{fontSize:"1em"},children:o.title})]},s))})]})})},yc=T.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 33.33%; /* 화면의 1/3 크기 */
  min-width: 14.5em;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${e=>e.isShow?"flex":"none"}; /* 상태에 따라 표시/숨김 */
  z-index: 2;
  padding: 0.8em;
  flex-direction: column;
  justify-content: flex-start;
  color: white;

  height: 100%; /* 241224 수정 */
  box-sizing: border-box;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`,cr=T.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
`,ur=T.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */

  /* 241224 추가 */
  &.popover_list {
    overflow: hidden;
    overflow-y: auto;
  }
  &.popover_list::-webkit-scrollbar {
    width: 0.3em;
  }
  &.popover_list::-webkit-scrollbar-thumb {
    background-color: #808080;
  }
`,wc=T.div`
  width: 24px;
 /*  padding: 4px; */
  cursor: pointer;

  /* 241224 추가 */
  &.close_btn {
    width: 2.2em;
    height: 2.2em;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
  /* 250113 추가 */
  @media screen and (min-width: 390px){font-size:10.8334px;}
  @media screen and (min-width: 396px){font-size:11px;}
  @media screen and (min-width: 411px){font-size:11.4166px;}
  @media screen and (min-width: 412px){font-size:11.4444px;}
  /* iphone 6 Plus */
  @media screen and (min-width: 414px){font-size:11.5px;}
  /* iphone 12 Pro Max */
  @media screen and (min-width: 428px){font-size:11.8889px;}
  @media screen and (min-width: 432px){font-size:12px;}
  @media screen and (min-width: 468px){font-size:13px;}
  @media screen and (min-width: 504px){font-size:14px;}
  @media screen and (min-width: 540px){font-size:15px;} 
`,vc=T.div`
  width: 2.8em;
  height: 2.8em;
  margin-right: 0.8em;
  background-color: white;
  border-radius: 9999px;
  /* padding: 4px; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;Wi.__docgenInfo={description:"",methods:[],displayName:"TagViewPopover",props:{isShow:{required:!0,tsType:{name:"boolean"},description:""},onAddTagClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: OnClickAddTagEventObject) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  id: string | number;\r
  title: string;\r
  seconds: number;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"seconds",value:{name:"number",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Cc=e=>d.createElement("svg",{width:13,height:13,viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("g",{clipPath:"url(#clip0_1182_35757)"},d.createElement("path",{d:"M11.0961 1.90389C8.55758 -0.634639 4.44186 -0.634639 1.90387 1.90394C-0.634639 4.44245 -0.634639 8.55814 1.90397 11.0961C4.44186 13.6346 8.55758 13.6346 11.0961 11.0961C13.6346 8.55814 13.6346 4.44245 11.0961 1.90389ZM10.3301 10.33C8.21463 12.4455 4.78491 12.4455 2.67 10.3301C0.554506 8.21511 0.554506 4.7854 2.66995 2.66995C4.78491 0.55448 8.21463 0.55448 10.3301 2.66995C12.4455 4.78542 12.4455 8.21511 10.3301 10.33Z",fill:"white"}),d.createElement("path",{d:"M9.18105 3.8188C8.96952 3.60727 8.62654 3.60727 8.41501 3.8188L6.49993 5.73389L4.58484 3.8188C4.37331 3.60727 4.03033 3.60727 3.8188 3.8188C3.60727 4.03033 3.60727 4.37331 3.8188 4.58484L5.73389 6.49993L3.81951 8.4143C3.60798 8.62583 3.60798 8.96881 3.81951 9.18034C4.03104 9.39187 4.37402 9.39187 4.58555 9.18034L6.49993 7.26596L8.41486 9.1809C8.62639 9.39243 8.96937 9.39243 9.1809 9.1809C9.39243 8.96937 9.39243 8.62639 9.1809 8.41486L7.26596 6.49993L9.18105 4.58484C9.39258 4.37331 9.39258 4.03036 9.18105 3.8188Z",fill:"white"})),d.createElement("defs",null,d.createElement("clipPath",{id:"clip0_1182_35757"},d.createElement("rect",{width:13,height:13,fill:"white"})))),bc=e=>d.createElement("svg",{width:15,height:17,viewBox:"0 0 15 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M12.1379 11.138C11.9825 11.138 11.8334 11.1998 11.7234 11.3097C11.6135 11.4196 11.5517 11.5687 11.5517 11.7242V14.069C11.5517 14.2245 11.49 14.3736 11.38 14.4835C11.2701 14.5935 11.121 14.6552 10.9655 14.6552H2.75862C2.60315 14.6552 2.45405 14.5935 2.34411 14.4835C2.23417 14.3736 2.17241 14.2245 2.17241 14.069V11.7242C2.17241 11.5687 2.11065 11.4196 2.00072 11.3097C1.89078 11.1998 1.74168 11.138 1.58621 11.138C1.43074 11.138 1.28163 11.1998 1.1717 11.3097C1.06176 11.4196 1 11.5687 1 11.7242V14.069C1 14.5354 1.18528 14.9828 1.51509 15.3126C1.84489 15.6424 2.29221 15.8277 2.75862 15.8277H10.9655C11.4319 15.8277 11.8792 15.6424 12.2091 15.3126C12.5389 14.9828 12.7241 14.5354 12.7241 14.069V11.7242C12.7241 11.5687 12.6624 11.4196 12.5524 11.3097C12.4425 11.1998 12.2934 11.138 12.1379 11.138ZM6.44586 12.1404C6.50161 12.1938 6.56735 12.2356 6.63931 12.2635C6.70948 12.2945 6.78535 12.3105 6.86207 12.3105C6.93879 12.3105 7.01466 12.2945 7.08483 12.2635C7.15679 12.2356 7.22253 12.1938 7.27828 12.1404L9.6231 9.79558C9.73349 9.6852 9.7955 9.53549 9.7955 9.37938C9.7955 9.22327 9.73349 9.07356 9.6231 8.96317C9.51272 8.85279 9.363 8.79077 9.2069 8.79077C9.05079 8.79077 8.90107 8.85279 8.79069 8.96317L7.44828 10.3114V4.68972C7.44828 4.53425 7.38652 4.38515 7.27658 4.27521C7.16664 4.16528 7.01754 4.10352 6.86207 4.10352C6.7066 4.10352 6.55749 4.16528 6.44756 4.27521C6.33762 4.38515 6.27586 4.53425 6.27586 4.68972V10.3114L4.93345 8.96317C4.87879 8.90851 4.8139 8.86516 4.74249 8.83558C4.67108 8.806 4.59454 8.79077 4.51724 8.79077C4.43994 8.79077 4.3634 8.806 4.29199 8.83558C4.22058 8.86516 4.15569 8.90851 4.10103 8.96317C4.04638 9.01783 4.00302 9.08272 3.97344 9.15413C3.94386 9.22554 3.92864 9.30208 3.92864 9.37938C3.92864 9.45667 3.94386 9.53321 3.97344 9.60463C4.00302 9.67604 4.04638 9.74093 4.10103 9.79558L6.44586 12.1404Z",fill:"white"}));function Kt(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function qt(e){return e==null?[]:Array.isArray(e)?e.slice():[e]}function st(e){return e!==null&&e.length===1?e[0]:e.slice()}function at(e){Object.keys(e).forEach(t=>{typeof document<"u"&&document.addEventListener(t,e[t],!1)})}function _e(e,t){return mn(function(r,i){let n=r;return n<=i.min&&(n=i.min),n>=i.max&&(n=i.max),n}(e,t),t)}function mn(e,t){const r=(e-t.min)%t.step;let i=e-r;return 2*Math.abs(r)>=t.step&&(i+=r>0?t.step:-t.step),parseFloat(i.toFixed(5))}let gn=function(e){function t(i){var n;(n=e.call(this,i)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=a=>{a.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=a=>{n.setState({pending:!0});const l=n.getMousePosition(a),u=n.getDiffPosition(l[0]),m=n.getValueFromPosition(u);n.move(m)},n.onTouchMove=a=>{if(a.touches.length>1)return;n.setState({pending:!0});const l=n.getTouchPosition(a);if(n.isScrolling===void 0){const p=l[0]-n.startPosition[0],h=l[1]-n.startPosition[1];n.isScrolling=Math.abs(h)>Math.abs(p)}if(n.isScrolling)return void n.setState({index:-1});const u=n.getDiffPosition(l[0]),m=n.getValueFromPosition(u);n.move(m)},n.onKeyDown=a=>{if(!(a.ctrlKey||a.shiftKey||a.altKey||a.metaKey))switch(n.setState({pending:!0}),a.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":a.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":a.preventDefault(),n.moveUpByStep();break;case"Home":a.preventDefault(),n.move(n.props.min);break;case"End":a.preventDefault(),n.move(n.props.max);break;case"PageDown":a.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":a.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=a=>{if(!n.props.disabled&&a.button!==2){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const l=n.getMousePosition(a);n.forceValueFromPosition(l[0],u=>{n.start(u,l[0]),at(n.getMouseEventMap())})}Kt(a)}},n.onSliderClick=a=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const l=n.getMousePosition(a),u=_e(n.calcValue(n.calcOffsetFromPosition(l[0])),n.props);n.props.onSliderClick(u)}},n.createOnKeyDown=a=>l=>{n.props.disabled||(n.start(a),at(n.getKeyDownEventMap()),Kt(l))},n.createOnMouseDown=a=>l=>{if(n.props.disabled||l.button===2)return;n.setState({pending:!0});const u=n.getMousePosition(l);n.start(a,u[0]),at(n.getMouseEventMap()),Kt(l)},n.createOnTouchStart=a=>l=>{if(n.props.disabled||l.touches.length>1)return;n.setState({pending:!0});const u=n.getTouchPosition(l);n.startPosition=u,n.isScrolling=void 0,n.start(a,u[0]),at(n.getTouchEventMap()),function(m){m.stopPropagation&&m.stopPropagation()}(l)},n.handleResize=()=>{const a=window.setTimeout(()=>{n.pendingResizeTimeouts.shift(),n.resize()},0);n.pendingResizeTimeouts.push(a)},n.renderThumb=(a,l)=>{const u=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+l+" "+(n.state.index===l?n.props.thumbActiveClassName:""),m={ref:h=>{n["thumb"+l]=h},key:n.props.thumbClassName+"-"+l,className:u,style:a,onMouseDown:n.createOnMouseDown(l),onTouchStart:n.createOnTouchStart(l),onFocus:n.createOnKeyDown(l),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[l],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[l]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[l]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},p={index:l,value:st(n.state.value),valueNow:n.state.value[l]};return n.props.ariaValuetext&&(m["aria-valuetext"]=typeof n.props.ariaValuetext=="string"?n.props.ariaValuetext:n.props.ariaValuetext(p)),n.props.renderThumb(m,p)},n.renderTrack=(a,l,u)=>{const m={key:n.props.trackClassName+"-"+a,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+a,style:n.buildTrackStyle(l,n.state.upperBound-u)},p={index:a,value:st(n.state.value)};return n.props.renderTrack(m,p)};let o=qt(i.value);o.length||(o=qt(i.defaultValue)),n.pendingResizeTimeouts=[];const s=[];for(let a=0;a<o.length;a+=1)o[a]=_e(o[a],i),s.push(a);return n.resizeObserver=null,n.resizeElementRef=I.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:o,zIndices:s},n}Gi(t,e);var r=t.prototype;return r.componentDidMount=function(){typeof window<"u"&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(i,n){const o=qt(i.value);return o.length?n.pending?null:{value:o.map(s=>_e(s,i))}:null},r.componentDidUpdate=function(){this.state.upperBound===0&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(i){i&&function(n){Object.keys(n).forEach(o=>{typeof document<"u"&&document.removeEventListener(o,n[o],!1)})}(i),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return st(this.state.value)},r.getClosestIndex=function(i){let n=Number.MAX_VALUE,o=-1;const{value:s}=this.state,a=s.length;for(let l=0;l<a;l+=1){const u=this.calcOffset(s[l]),m=Math.abs(i-u);m<n&&(n=m,o=l)}return o},r.getMousePosition=function(i){return[i["page"+this.axisKey()],i["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(i){const n=i.touches[0];return[n["page"+this.axisKey()],n["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(i){const n=i/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return _e(this.state.startValue+n,this.props)},r.getDiffPosition=function(i){let n=i-this.state.startPosition;return this.props.invert&&(n*=-1),n},r.resize=function(){const{slider:i,thumb0:n}=this;if(!i||!n)return;const o=this.sizeKey(),s=i.getBoundingClientRect(),a=i[o],l=s[this.posMaxKey()],u=s[this.posMinKey()],m=n.getBoundingClientRect()[o.replace("client","").toLowerCase()],p=a-m,h=Math.abs(l-u);this.state.upperBound===p&&this.state.sliderLength===h&&this.state.thumbSize===m||this.setState({upperBound:p,sliderLength:h,thumbSize:m})},r.calcOffset=function(i){const n=this.props.max-this.props.min;return n===0?0:(i-this.props.min)/n*this.state.upperBound},r.calcValue=function(i){return i/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(i){const{slider:n}=this,o=n.getBoundingClientRect(),s=o[this.posMaxKey()],a=o[this.posMinKey()];let l=i-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?s:a));return this.props.invert&&(l=this.state.sliderLength-l),l-=this.state.thumbSize/2,l},r.forceValueFromPosition=function(i,n){const o=this.calcOffsetFromPosition(i),s=this.getClosestIndex(o),a=_e(this.calcValue(o),this.props),l=this.state.value.slice();l[s]=a;for(let u=0;u<l.length-1;u+=1)if(l[u+1]-l[u]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:l},()=>{n(s),this.fireChangeEvent("onChange")})},r.clearPendingResizeTimeouts=function(){do{const i=this.pendingResizeTimeouts.shift();clearTimeout(i)}while(this.pendingResizeTimeouts.length)},r.start=function(i,n){const o=this["thumb"+i];o&&o.focus();const{zIndices:s}=this.state;s.splice(s.indexOf(i),1),s.push(i),this.setState(a=>({startValue:a.value[i],startPosition:n!==void 0?n:a.startPosition,index:i,zIndices:s}))},r.moveUpByStep=function(i){i===void 0&&(i=this.props.step);const n=this.state.value[this.state.index],o=_e(this.props.invert&&this.props.orientation==="horizontal"?n-i:n+i,this.props);this.move(Math.min(o,this.props.max))},r.moveDownByStep=function(i){i===void 0&&(i=this.props.step);const n=this.state.value[this.state.index],o=_e(this.props.invert&&this.props.orientation==="horizontal"?n+i:n-i,this.props);this.move(Math.max(o,this.props.min))},r.move=function(i){const n=this.state.value.slice(),{index:o}=this.state,{length:s}=n,a=n[o];if(i===a)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:l,max:u,min:m,minDistance:p}=this.props;if(!l){if(o>0){const h=n[o-1];i<h+p&&(i=h+p)}if(o<s-1){const h=n[o+1];i>h-p&&(i=h-p)}}n[o]=i,l&&s>1&&(i>a?(this.pushSucceeding(n,p,o),function(h,f,y,b){for(let x=0;x<h;x+=1){const C=b-x*y;f[h-1-x]>C&&(f[h-1-x]=C)}}(s,n,p,u)):i<a&&(this.pushPreceding(n,p,o),function(h,f,y,b){for(let x=0;x<h;x+=1){const C=b+x*y;f[x]<C&&(f[x]=C)}}(s,n,p,m))),this.setState({value:n},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(i,n,o){let s,a;for(s=o,a=i[s]+n;i[s+1]!==null&&a>i[s+1];s+=1,a=i[s]+n)i[s+1]=mn(a,this.props)},r.pushPreceding=function(i,n,o){for(let s=o,a=i[s]-n;i[s-1]!==null&&a<i[s-1];s-=1,a=i[s]-n)i[s-1]=mn(a,this.props)},r.axisKey=function(){return this.props.orientation==="vertical"?"Y":"X"},r.orthogonalAxisKey=function(){return this.props.orientation==="vertical"?"X":"Y"},r.posMinKey=function(){return this.props.orientation==="vertical"?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return this.props.orientation==="vertical"?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return this.props.orientation==="vertical"?"clientHeight":"clientWidth"},r.fireChangeEvent=function(i){this.props[i]&&this.props[i](st(this.state.value),this.state.index)},r.buildThumbStyle=function(i,n){const o={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(n)+1};return o[this.posMinKey()]=i+"px",o},r.buildTrackStyle=function(i,n){const o={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return o[this.posMinKey()]=i,o[this.posMaxKey()]=n,o},r.buildMarkStyle=function(i){var n;return(n={position:"absolute"})[this.posMinKey()]=i,n},r.renderThumbs=function(i){const{length:n}=i,o=[];for(let a=0;a<n;a+=1)o[a]=this.buildThumbStyle(i[a],a);const s=[];for(let a=0;a<n;a+=1)s[a]=this.renderThumb(o[a],a);return s},r.renderTracks=function(i){const n=[],o=i.length-1;n.push(this.renderTrack(0,0,i[0]));for(let s=0;s<o;s+=1)n.push(this.renderTrack(s+1,i[s],i[s+1]));return n.push(this.renderTrack(o+1,i[o],this.state.upperBound)),n},r.renderMarks=function(){let{marks:i}=this.props;const n=this.props.max-this.props.min+1;return typeof i=="boolean"?i=Array.from({length:n}).map((o,s)=>s):typeof i=="number"&&(i=Array.from({length:n}).map((o,s)=>s).filter(o=>o%i==0)),i.map(parseFloat).sort((o,s)=>o-s).map(o=>{const s=this.calcOffset(o),a={key:o,className:this.props.markClassName,style:this.buildMarkStyle(s)};return this.props.renderMark(a)})},r.render=function(){const i=[],{value:n}=this.state,o=n.length;for(let u=0;u<o;u+=1)i[u]=this.calcOffset(n[u],u);const s=this.props.withTracks?this.renderTracks(i):null,a=this.renderThumbs(i),l=this.props.marks?this.renderMarks():null;return I.createElement("div",{ref:u=>{this.slider=u,this.resizeElementRef.current=u},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},s,a,l)},t}(I.Component);gn.displayName="ReactSlider",gn.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>I.createElement("div",e),renderTrack:e=>I.createElement("div",e),renderMark:e=>I.createElement("span",e)};var xc=gn;function dr(e){const t=new Date(e*1e3),r=t.getUTCHours(),i=t.getUTCMinutes(),n=pr(t.getUTCSeconds());return r?`${r}:${pr(i)}:${n}`:`${i}:${n}`}function pr(e){return("0"+e).slice(-2)}function Sc(e,t){let n=e-90,o=e+90;return n<0?(o=Math.min(180,t),n=0):o>t&&(n=Math.max(0,t-180),o=t),console.log("calculateClipRange",{start:n,end:o}),{start:n,end:o}}const Zi=e=>{const{seekTo:t,isShow:r,onChangeClipDuration:i,setValuesRef:n,onSave:o}=e,s=S(v=>v.played),a=S(v=>v.duration),l=S(v=>v.isPlay),u=S(v=>v.setIsPlay),m=S(v=>v.setIsShowClipView),p=S(v=>v.isFullScreen),h=Rn(v=>v.currentSeconds),[f,y]=d.useState([0,30]),[b,x]=d.useState(0),[C,k]=d.useState(180);d.useEffect(()=>{n&&(n.current=v=>{y(v),i([Math.floor(v[0]),Math.floor(v[1])])})},[n,i]),d.useEffect(()=>{console.log("useEffect",{currentSeconds:h,duration:a});const{start:v,end:z}=Sc(h,a),re=(v+z)/2;x(v),k(z),y([re-30,re+30])},[h,a]),d.useEffect(()=>{if(r){const v=f[1]/a;console.log("played",{played:s,clipEndPlayed:v}),s>=v&&u(!1)}},[s]),d.useEffect(()=>{r&&i([Math.floor(f[0]),Math.floor(f[1])])},[r]);const _=()=>{console.log("handleBeforeChange"),u(!1)},P=v=>{console.log("handleAfterChange",v),i([Math.floor(v[0]),Math.floor(v[1])]),y([...v]),t(v[0]/a),u(!0)},O=()=>{m(!1),l||u(!0)},M=()=>{O(),i([Math.floor(f[0]),Math.floor(f[1])]),o==null||o()};return c.jsxs(_c,{isShow:r,children:[c.jsxs(Pc,{children:[c.jsxs(fr,{style:{width:"calc(100% - 10em"},className:"icon_box",children:[c.jsx(Ie,{onClick:O,className:"back_btn",children:c.jsx(On,{width:"100%",height:"100%"})}),c.jsx("div",{className:"video_title"})]}),c.jsxs(fr,{gap:16,className:"icon_box",children:[c.jsx(Ie,{className:"tag_btn",children:c.jsx(pn,{})}),c.jsx(Ie,{className:"screencast_btn",children:c.jsx(Fi,{})}),c.jsx(Ie,{className:"multiview_btn",children:c.jsx(Hi,{})})]})]}),c.jsx(Tc,{children:c.jsx(Wt,{style:{paddingRight:"1em",gap:"1.3em"},className:"icon_box",children:p&&c.jsxs(c.Fragment,{children:[c.jsx(Wt,{children:c.jsxs(Ie,{className:"side_icon side_save",onClick:M,children:[c.jsx(bc,{}),c.jsx("p",{className:"side_icon_name",children:"저장"})]})}),c.jsx(Wt,{children:c.jsxs(Ie,{className:"side_icon side_cancel",onClick:O,children:[c.jsx(Cc,{}),c.jsx("p",{className:"side_icon_name",children:"취소"})]})})]})})}),c.jsx(kc,{isFullScreen:p,children:c.jsx(Ec,{children:c.jsxs(Oc,{children:[[...Array(8)].map((v,z)=>c.jsx(Rc,{url:"https://picsum.photos/seed/picsum/200/300"},z)),c.jsx(jc,{children:c.jsx(xc,{className:"hogak-clip-slider",thumbClassName:"clip-thumb",trackClassName:"clip-track",snapDragDisabled:!0,min:b,max:C,step:.1,value:f,ariaLabel:["클립 시작","클립 종료"],ariaValuetext:v=>`${dr(v.valueNow)}`,renderThumb:(v,z)=>c.jsx(Mc,{...v,children:dr(z.valueNow)}),pearling:!0,minDistance:10,onAfterChange:P,onBeforeChange:_})})]})})})]})},_c=T.div`
    display: ${e=>e.isShow?"flex":"none"}; /* 상태에 따라 표시/숨김 */
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
    background-color: rgba(0,0,0,.6);
`,Pc=T.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.2em 1.6em 0 1.6em;

    .video_title {
    color: #ffffff;
    font-size: 1.3em;
    margin-left: 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    }
`,Tc=T.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`,Ie=T.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.back_btn {
    width: 1.4em;
    height: 2.4em;
    }
    &.tag_btn {
    width: 1.8em;
    height: 1.8em;
    }
    &.screencast_btn {
    width: 1.7em;
    height: 1.5em;
    }
    &.multiview_btn {
    width: 2em;
    height: 1.5em;
    }
    &.play_btn {
    width: 5em;
    height: 5em;
    }
    &.side_icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
    }
    &.side_icon.side_save svg{
        width: 1.4em;
        height: 1.7em;
    }
    &.side_icon.side_cancel svg {
        width: 1.3em;
        height: 1.3em;
    }
    .side_icon_name {
        font-size: 1.1em;
        line-height: 1.6em;
        color: #ffffff;
        margin: 0;
    }
    svg {
        width: 100%;
        height: 100%;
    }
    

`,fr=T.div`
    display: flex;
    align-items: center;
    gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
    /* 250113 추가 */
    &.icon_box {
            @media screen and (min-width: 390px){font-size:10.8334px;}
            @media screen and (min-width: 396px){font-size:11px;}
            @media screen and (min-width: 411px){font-size:11.4166px;}
            @media screen and (min-width: 412px){font-size:11.4444px;}
            /* iphone 6 Plus */
            @media screen and (min-width: 414px){font-size:11.5px;}
            /* iphone 12 Pro Max */
            @media screen and (min-width: 428px){font-size:11.8889px;}
            @media screen and (min-width: 432px){font-size:12px;}
            @media screen and (min-width: 468px){font-size:13px;}
            @media screen and (min-width: 504px){font-size:14px;}
            @media screen and (min-width: 540px){font-size:15px;} 
        }
`,Wt=T.div`
    display: flex;
    flex-direction: column;
    gap: ${e=>e.gap?e.gap*.1:0}em; 
    /* 250113 추가 */
    &.icon_box {
            @media screen and (min-width: 390px){font-size:10.8334px;}
            @media screen and (min-width: 396px){font-size:11px;}
            @media screen and (min-width: 411px){font-size:11.4166px;}
            @media screen and (min-width: 412px){font-size:11.4444px;}
            /* iphone 6 Plus */
            @media screen and (min-width: 414px){font-size:11.5px;}
            /* iphone 12 Pro Max */
            @media screen and (min-width: 428px){font-size:11.8889px;}
            @media screen and (min-width: 432px){font-size:12px;}
            @media screen and (min-width: 468px){font-size:13px;}
            @media screen and (min-width: 504px){font-size:14px;}
            @media screen and (min-width: 540px){font-size:15px;} 
        }
`,kc=T.div`
    background-color: #000;
    width: 100%;
    height: 26%;
    min-height: 5.9em;
    /* 241227 추가 */
    overflow: hidden;
    position: relative;
    box-sizing: border-box;

    margin-bottom: 0;

    /* iOS Safari 전용 스타일 */
    @supports (-webkit-touch-callout: none) {
        ${({isFullScreen:e})=>e&&`
        margin-bottom: 29px;
        `}
    }
`,Ec=T.div`
    height: 55%;
    position: relative;
    top: 20%;
`,Mc=T.div`
    /* 241227 수정 */
    background-color: #81EB47;
    width: 1.2em;
    height: 100%;
    color: white;
    cursor: ew-resize;
    text-indent: -9999px;
`,Oc=T.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1em;
`,Rc=T.div`
    flex: 1;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${e=>e.url});
`,jc=T.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .hogak-clip-slider {
        //241230 추가
        /* 전체화면일 때 */
        height: calc(100% + 0.6em);
        top: -0.3em;
        /* 전체화면 아닐 때 */
        height: calc(100% + 1.4em);
        top: -0.7em;
    }
`;Zi.__docgenInfo={description:"",methods:[],displayName:"ClipViewPopover",props:{seekTo:{required:!0,tsType:{name:"signature",type:"function",raw:"(seconds: number) => void",signature:{arguments:[{type:{name:"number"},name:"seconds"}],return:{name:"void"}}},description:""},onChangeClipDuration:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"data"}],return:{name:"void"}}},description:""},isShow:{required:!0,tsType:{name:"boolean"},description:""},setValuesRef:{required:!1,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<((values: number[]) => void) | null>",elements:[{name:"union",raw:"((values: number[]) => void) | null",elements:[{name:"unknown"},{name:"null"}]}]},description:""},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ic=e=>d.createElement("svg",{width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M1 1L5.70588 5.71429L11 1",stroke:"white",strokeWidth:1.3125,strokeLinecap:"round",strokeLinejoin:"round"})),Vc=e=>d.createElement("svg",{width:6,height:8,viewBox:"0 0 6 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M5.85 3.9134C5.91667 3.95189 5.91667 4.04811 5.85 4.0866L0.15 7.3775C0.0833332 7.41599 1.54777e-07 7.36788 1.58142e-07 7.2909L4.45841e-07 0.709103C4.49206e-07 0.632123 0.0833339 0.584011 0.150001 0.622501L5.85 3.9134Z",fill:"#D9D9D9"})),Yi=({isShow:e,seekTo:t,getCurrentSeconds:r})=>{const i=S(f=>f.url),n=S(f=>f.setUrl),o=S(f=>f.setIsShowMultiView),s=S(f=>f.isReady),a=S(f=>f.setIsReady),l=It(f=>f.multiViewSources),[u,m]=d.useState(null),p=f=>{const y=r();m(y),a(!1),console.log("handleChangeMultiView",f,y),n(f.url)},h=()=>{u!==null&&(t(u),m(null))};return d.useEffect(()=>{s&&h()},[s]),c.jsxs(Ac,{isShow:e,children:[c.jsx(hr,{gap:12,className:"popover_list",children:l.map((f,y)=>c.jsxs(mr,{gap:8,onClick:()=>p(f),style:{cursor:"pointer",width:"20%",height:"calc(100% - 1em)"},children:[c.jsx(mr,{gap:4,children:c.jsx("div",{style:{fontSize:"1em",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.title})}),c.jsxs("div",{style:{position:"relative",aspectRatio:"5 / 3",height:"calc(100% - 1em)"},children:[c.jsx("img",{src:f.thumbnailUrl,alt:"image",style:{width:"100%",height:"100%",display:"block",objectFit:"cover"}}),i===f.url&&c.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"1em",flexDirection:"column",background:"rgba(0,0,0,0.7)"},children:[c.jsx(gr,{className:"playing_icon",children:c.jsx(Vc,{})}),"재생중"]})]})]},y))}),c.jsx(hr,{className:"down_btn_wrap",children:c.jsx(gr,{onClick:()=>o(!1),className:"down_btn",children:c.jsx(Ic,{style:{transform:"scaleX(-1)"}})})})]})},Ac=T.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%; 
  min-width: 18em;
  height: 30%;
  min-height: 6.8em;
  background-color: rgba(0, 0, 0, 0.66);
  display: ${e=>e.isShow?"flex":"none"}; /* 상태에 따라 표시/숨김 */
  z-index: 2;
  padding: 1em 4em 0.4em 1.8em;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  color: white;
  box-sizing: border-box;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  gap: 0.9em;
`,hr=T.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
  &.flex-end {
    justify-content: flex-end;
  }
  &.popover_list {
    overflow: hidden;
    overflow-x: auto;
    padding-bottom: 1em;
    align-items: stretch;
    gap: 0.9em;
    width: 100%;
  }
  &.popover_list::-webkit-scrollbar {
    height: 0.3em;
  }
  &.popover_list::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 0.4em;
  }
  &.down_btn_wrap {
    position: absolute;
    right: 1.7em;
    top: 2em;
  }
`,mr=T.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.gap?e.gap*.1:0}em; /* 241224 gap em 단위 수정 */
`,gr=T.div`
  width: 24px;
  /* padding: 4px; */
  cursor: pointer;

  /* 241224 추가 */
  &.down_btn {
    width: 1.2em;
    height: 0.7em;
  }
  &.playing_icon {
    width: 10%;
    height: auto;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  /* 250113 추가 */
  @media screen and (min-width: 390px){font-size:10.8334px;}
  @media screen and (min-width: 396px){font-size:11px;}
  @media screen and (min-width: 411px){font-size:11.4166px;}
  @media screen and (min-width: 412px){font-size:11.4444px;}
  /* iphone 6 Plus */
  @media screen and (min-width: 414px){font-size:11.5px;}
  /* iphone 12 Pro Max */
  @media screen and (min-width: 428px){font-size:11.8889px;}
  @media screen and (min-width: 432px){font-size:12px;}
  @media screen and (min-width: 468px){font-size:13px;}
  @media screen and (min-width: 504px){font-size:14px;}
  @media screen and (min-width: 540px){font-size:15px;} 
`;Yi.__docgenInfo={description:"",methods:[],displayName:"MultiViewPopoverSmall",props:{isShow:{required:!0,tsType:{name:"boolean"},description:""},seekTo:{required:!0,tsType:{name:"signature",type:"function",raw:"(seconds: number) => void",signature:{arguments:[{type:{name:"number"},name:"seconds"}],return:{name:"void"}}},description:""},getCurrentSeconds:{required:!0,tsType:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}}},description:""}}};const zc=hl`
  html, body, #root {
    font-family: 'Pretendard';
    font-weight: 400;
    letter-spacing: -0.02px;
  }
`,jn=d.forwardRef(function(e,t){const r=S(g=>g.url),i=S(g=>g.setUrl),n=S(g=>g.setTitle),o=S(g=>g.pip),s=S(g=>g.isPlay),a=S(g=>g.isSeek),l=S(g=>g.setIsPlay),u=S(g=>g.setDuration),m=S(g=>g.setPlayed),p=S(g=>g.volume),h=S(g=>g.isShowMultiView),f=It(g=>g.setMultiViewSources),y=S(g=>g.isShowTagView),b=S(g=>g.setIsShowTagView),x=wt(g=>g.setTags),C=wt(g=>g.setTagMenus),k=e.enableDefaultFullscreen??!0,_=S(g=>g.isFullScreen),P=S(g=>g.setIsShowClipView),O=S(g=>g.isShowClipView),M=S(g=>g.setIsReady),v=S(g=>g.setBackIconType),z=S(g=>g.skipDirection),re=S(g=>g.setIsViewThumbMarker),ce=Rn(g=>g.setCurrentSeconds),V=S(g=>g.speed),Z=e.onBack??(()=>{}),Y=e.onClickTagButton??(()=>{}),me=e.onChangeClipDuration??(()=>{}),de=e.onClickClipSave??(()=>{});d.useEffect(()=>{l(e.isPlay??!1),i(e.url)},[e.isPlay,e.url]),d.useEffect(()=>{n(e.title??"")},[e.title]),d.useEffect(()=>{f(e.multiViewSources??[])},[e.multiViewSources]),d.useEffect(()=>{x(e.tags??[])},[e.tags]),d.useEffect(()=>{C(e.tagMenus??[])},[e.tagMenus]),d.useEffect(()=>{v(e.backIconType??"arrowLeft")},[e.backIconType]),d.useEffect(()=>{e.onChangeFullScreen&&e.onChangeFullScreen(_)},[_]),d.useEffect(()=>{console.log(`

██╗  ██╗ ██████╗  ██████╗  █████╗ ██╗  ██╗    ██████╗ ██╗      █████╗ ██╗   ██╗███████╗██████╗ 
██║  ██║██╔═══██╗██╔════╝ ██╔══██╗██║ ██╔╝    ██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗
███████║██║   ██║██║  ███╗███████║█████╔╝     ██████╔╝██║     ███████║ ╚████╔╝ █████╗  ██████╔╝
██╔══██║██║   ██║██║   ██║██╔══██║██╔═██╗     ██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗
██║  ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██╗    ██║     ███████╗██║  ██║   ██║   ███████╗██║  ██║
╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
                                                                                               
    `),console.log("%c Version : 0.4.3","color:red;font-weight:bold;")},[]);const N=d.useRef(null),U=d.useRef(null),H=d.useRef(null),A=()=>{l(!1)},ve=g=>{u(g)},ge=g=>{a||m(g.played)},se=()=>{console.log("onReady"),M(!0)},Ee=()=>{console.log("onStart")},Se=()=>{console.log("onPlay")},pe=g=>{var K;(K=N.current)==null||K.seekTo(g)},fe=()=>{var g;return((g=N.current)==null?void 0:g.getCurrentTime())??0};return d.useImperativeHandle(t,()=>({getCurrentSeconds:()=>{var g;return((g=N.current)==null?void 0:g.getCurrentTime())??0},setClipView:(g,K)=>{var X;if(g){l(!1);let w=((X=N.current)==null?void 0:X.getCurrentTime())??0;K&&(w=K),ce(w),P(!0)}else P(!1),s||l(!0)},setClipValues:g=>{if(g.length!==2||g[0]>=g[1])throw new Error("Invalid clip values");if(typeof g[0]!="number"||typeof g[1]!="number")throw new Error("Invalid clip values type");H.current&&H.current(g)},setTagView:g=>b(g),seekTo:(g,K)=>{var X;if(!["seconds","fraction"].includes(K))throw new Error("Invalid seek type");if(K==="fraction"&&(g<0||g>1))throw new Error("Invalid seek value");(X=N.current)==null||X.seekTo(g,K)},setIsViewThumbMarker:g=>{re(g)},getIsFullScreen:()=>_})),c.jsxs(Lc,{ref:U,width:e.width,height:e.height,children:[c.jsx(zc,{}),c.jsx(Dc,{children:c.jsxs($c,{className:_?"":"video_ratio_wrapper",children:[c.jsx(fa,{width:"100%",height:"100%",ref:N,url:r,className:"hogak-player",playing:s,controls:!1,onEnded:A,onReady:se,onStart:Ee,onPlay:Se,onError:g=>console.error("onError",g),onSeek:g=>console.log("onSeek",g),onDuration:ve,onProgress:ge,volume:p,pip:o,playsinline:!0,playbackRate:V}),_&&c.jsx(qi,{isShow:h,seekTo:pe,getCurrentSeconds:fe}),!_&&c.jsx(Yi,{isShow:h,seekTo:pe,getCurrentSeconds:fe}),c.jsx(Wi,{isShow:y,onAddTagClick:e.onClickAddTag}),c.jsx(Ki,{playerRef:N,onBack:Z,onClickTagButton:Y}),c.jsx(Zi,{seekTo:pe,onChangeClipDuration:me,isShow:O,setValuesRef:H,onSave:de})," ",z&&c.jsx(Nc,{style:{left:z==="left"?"30%":"70%",top:"50%"},children:c.jsx("span",{style:{fontSize:"1.4em"},children:z==="left"?"-10초":"+10초"})})]})})]})}),Dc=T.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  height: 100%;/* 240108 추가 */
`,Lc=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${e=>e.width?`width: ${e.width}px;`:"width: 100%;"}
  ${e=>e.height?`height: ${e.height}px;`:"height: 100%;"}
  
  /* 241224 반응형 font-size 추가 */
  font-size: 5px;
  /* EM rules */
  @media screen and (min-width: 216px){font-size:6px;}
  @media screen and (min-width: 229px){font-size:6.3611px;}
  @media screen and (min-width: 250px){font-size:6.9444px;}
  @media screen and (min-width: 252px){font-size:7px;}
  @media screen and (min-width: 288px){font-size:8px;}
  @media screen and (min-width: 292px){font-size:8.1111px;}
  /* iphone 5 */
  @media screen and (min-width: 320px){font-size:8.8888px;}
  @media screen and (min-width: 324px){font-size:9px;}
  @media screen and (min-width: 360px){font-size:10px;}

  .hogak-player {
    object-fit: cover;
    padding: 0;
    margin: 0;

    /* 241224 추가 */
    font-size: 0;
  }
`,$c=T.div`
  position: relative;
  height: 100%; /* 240108 추가 */

  /* 241224 추가 */
  &.video_ratio_wrapper {
    padding-top: calc((9 / 16) * 100%);
    background: black;

    .hogak-player {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`,Nc=T.div`
  z-index: 10;
  opacity: 1;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 250113 스타일 추가 */
  background-color: rgba(217, 217, 217,.2);
  width: 5em;
  height: 5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 390px){font-size:10.8334px;}
  @media screen and (min-width: 396px){font-size:11px;}
  @media screen and (min-width: 411px){font-size:11.4166px;}
  @media screen and (min-width: 412px){font-size:11.4444px;}
  /* iphone 6 Plus */
  @media screen and (min-width: 414px){font-size:11.5px;}
  /* iphone 12 Pro Max */
  @media screen and (min-width: 428px){font-size:11.8889px;}
  @media screen and (min-width: 432px){font-size:12px;}
  @media screen and (min-width: 468px){font-size:13px;}
  @media screen and (min-width: 504px){font-size:14px;}
  @media screen and (min-width: 540px){font-size:15px;} 
`;jn.__docgenInfo={description:"",methods:[{name:"getCurrentSeconds",docblock:null,modifiers:[],params:[],returns:null},{name:"setClipView",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"boolean"}},{name:"initialCurrentSeconds",optional:!0,type:{name:"number"}}],returns:null},{name:"setClipValues",docblock:null,modifiers:[],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"number"}],raw:"number[]"}}],returns:null},{name:"setTagView",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"boolean"}}],returns:null},{name:"seekTo",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"number"}},{name:"type",optional:!1,type:{name:"union",raw:'"seconds" | "fraction"',elements:[{name:"literal",value:'"seconds"'},{name:"literal",value:'"fraction"'}]}}],returns:null},{name:"setIsViewThumbMarker",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"boolean"}}],returns:null},{name:"getIsFullScreen",docblock:null,modifiers:[],params:[],returns:null}],displayName:"HogakPlayer",props:{title:{required:!1,tsType:{name:"string"},description:""},isPlay:{required:!1,tsType:{name:"boolean"},description:""},setIsPlay:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPlay: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPlay"}],return:{name:"void"}}},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},backIconType:{required:!1,tsType:{name:"union",raw:"'close' | 'arrowLeft'",elements:[{name:"literal",value:"'close'"},{name:"literal",value:"'arrowLeft'"}]},description:""},url:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""},multiViewSources:{required:!1,tsType:{name:"Array",elements:[{name:"MultiViewSource"}],raw:"MultiViewSource[]"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"},description:""},tagMenus:{required:!1,tsType:{name:"Array",elements:[{name:"TagMenuProps"}],raw:"TagMenuProps[]"},description:""},onClickAddTag:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: OnClickAddTagEventObject) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  id: string | number;\r
  title: string;\r
  seconds: number;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"seconds",value:{name:"number",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},onChangeClipDuration:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"data"}],return:{name:"void"}}},description:""},enableDefaultFullscreen:{required:!1,tsType:{name:"boolean"},description:""},onChangeFullScreen:{required:!1,tsType:{name:"signature",type:"function",raw:"(isFullScreen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isFullScreen"}],return:{name:"void"}}},description:""},onClickTagButton:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClickClipSave:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Bc={title:"Components/HogakPlayer",component:jn,parameters:{layout:"centered"},argTypes:{title:{defaultValue:"",description:"표시할 영상 제목입니다.",type:"string"},url:{defaultValue:"",description:"재생할 영상의 URL입니다.",type:"string"},width:{defaultValue:640,description:"플레이어의 너비입니다. 입력하지 않으면 100%로 취급합니다.",control:{type:"number"}},height:{defaultValue:360,description:"플레이어의 높이입니다. 입력하지 않으면 100%로 취급합니다.",control:{type:"number"}},isPlay:{defaultValue:"",description:"영상을 재생할지 여부입니다.",type:"boolean"},multiViewSources:{defaultValue:"",description:"멀티뷰에 표시할 영상 목록입니다.",type:{name:"array",value:{name:"object",value:{thumbnailUrl:{name:"string"},title:{name:"string"},url:{name:"string"}}}}},tags:{defaultValue:"",description:"재생바에 표시할 태그 목록입니다.",type:{name:"array",value:{name:"object",value:{id:{name:"string"},seconds:{name:"number"},title:{name:"string"},iconUrl:{name:"string"}}}}},tagMenus:{defaultValue:"",description:"태그 추가 메뉴에 표시할 데이터입니다.",type:{name:"array",value:{name:"object",value:{id:{name:"string"},title:{name:"string"},iconUrl:{name:"string"}}}}},onBack:{description:"뒤로가기 버튼을 클릭했을 때 호출되는 콜백입니다.",action:"onBack"},backIconType:{defaultValue:"arrowLeft",description:"뒤로가기 버튼의 아이콘 타입입니다. (arrowLeft: 왼쪽 화살표, close: 닫기 아이콘)",type:"string"},onClickAddTag:{description:"태그 추가 버튼 클릭 시 호출되는 콜백입니다.",action:"onClickAddTag"},onChangeClipDuration:{description:"클립의 시작(초)), 종료(초) 값이 변경될 때 호출되는 콜백입니다. (ex: [0, 10])",action:"onChangeClipDuration"},onChangeFullScreen:{description:"전체화면 모드가 변경될 때 호출되는 콜백입니다.",action:"onChangeFullScreen"},enableDefaultFullscreen:{defaultValue:!0,description:"전체화면 기본 기능을 사용할지 여부입니다.",type:"boolean"},onClickTagButton:{description:"태그 버튼 클릭 시 호출되는 콜백입니다. (전체 화면의 태그 버튼 클릭 시에는 호출되지 않습니다)",action:"onClickTagButton"},onClickClipSave:{description:"클립 저장 버튼 클릭 시 호출되는 콜백입니다.",action:"onClickClipSave"}},args:{title:"",url:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",width:void 0,height:void 0,isPlay:!1,setIsPlay:()=>{},onBack:()=>{console.log("onBack")},onClickAddTag:e=>{console.log("onClickAddTag:",e),alert("onClickAddTag")},onChangeClipDuration:e=>{console.log("onChangeClipDuration:",e)},onChangeFullScreen:e=>{console.log("onChangeFullScreen:",e)},onClickTagButton:()=>{console.log("onClickTagButton")},onClickClipSave:()=>{console.log("onClickClipSave")},multiViewSources:[{thumbnailUrl:"https://picsum.photos/seed/picsum/300/200",title:"[멀티VIEW] 1번 카메라",description:"1번 카메라 설명",url:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"},{thumbnailUrl:"https://picsum.photos/seed/picsum2/300/200",title:"[멀티VIEW] 2번 카메라",description:"2번 카메라 설명",url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"}],tags:[{id:"1",seconds:179,title:"02:59 홈런",iconUrl:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"},{id:"2",seconds:306,title:"05:06 홈런",iconUrl:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"},{id:"3",seconds:560,title:"09:20 홈런",iconUrl:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png"}],tagMenus:[{id:"1",title:"홈런",iconUrl:"https://cdn-icons-png.flaticon.com/512/606/606078.png"}],backIconType:"arrowLeft"}},Ye={render:e=>{const t=d.useRef(null),[r,i]=d.useState(!1);return c.jsxs("div",{children:[c.jsx(jn,{...e,ref:t}),c.jsx("button",{onClick:()=>{var n;return console.log("getCurrentSeconds",(n=t.current)==null?void 0:n.getCurrentSeconds())},children:"getCurrentSeconds()"}),c.jsxs("button",{onClick:()=>{var n;i(!r),(n=t.current)==null||n.setClipView(r)},children:["setClipView(",r.toString(),")"]}),c.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.setClipValues([15,50])},children:"setClipValues([15, 50])"}),c.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.seekTo(10,"seconds")},children:'seekTo(10, "seconds")'}),c.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.setIsViewThumbMarker(!0)},children:"setIsViewThumbMarker(true)"}),c.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.setTagView(!0)},children:"setTagView(true)"}),c.jsx("button",{onClick:()=>{var n;return console.log("getIsFullScreen",(n=t.current)==null?void 0:n.getIsFullScreen())},children:"getIsFullScreen()"})]})}};var yr,wr,vr;Ye.parameters={...Ye.parameters,docs:{...(yr=Ye.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  render: args => {
    const playerRef = useRef<{
      getCurrentSeconds: () => number;
      setClipView: (value: boolean) => void;
      setClipValues: (values: number[]) => void;
      seekTo: (value: number, type: "seconds" | "fraction") => void;
      setIsViewThumbMarker: (value: boolean) => void;
      setTagView: (value: boolean) => void;
      getIsFullScreen: () => boolean;
    } | null>(null);
    const [isShowClipView, setIsShowClipView] = useState(false);
    return <div>\r
        <HogakPlayer {...args} ref={playerRef} />\r
        <button onClick={() => console.log('getCurrentSeconds', playerRef.current?.getCurrentSeconds())}>getCurrentSeconds()</button>\r
        <button onClick={() => {
        setIsShowClipView(!isShowClipView);
        playerRef.current?.setClipView(isShowClipView);
      }}>setClipView({isShowClipView.toString()})</button>\r
        <button onClick={() => playerRef.current?.setClipValues([15, 50])}>setClipValues([15, 50])</button>\r
        <button onClick={() => playerRef.current?.seekTo(10, "seconds")}>seekTo(10, "seconds")</button>\r
        <button onClick={() => playerRef.current?.setIsViewThumbMarker(true)}>setIsViewThumbMarker(true)</button>\r
        <button onClick={() => playerRef.current?.setTagView(true)}>setTagView(true)</button>\r
        <button onClick={() => console.log('getIsFullScreen', playerRef.current?.getIsFullScreen())}>getIsFullScreen()</button>\r
      </div>;
  }
}`,...(vr=(wr=Ye.parameters)==null?void 0:wr.docs)==null?void 0:vr.source}}};const Uc=["Basic"],Xc=Object.freeze(Object.defineProperty({__proto__:null,Basic:Ye,__namedExportsOrder:Uc,default:Bc},Symbol.toStringTag,{value:"Module"}));export{Ye as B,Xc as S,Xo as p,Ct as u};
