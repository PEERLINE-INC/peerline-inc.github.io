function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-BMzi68yp.js","./iframe-B1SqPCUV.js","./index-DLdKhJAa.js","./react-18-DAipk-TV.js","./index-DsiYAGLG.js","./index-BkpzLQ9y.js","./extends-CWIDkR1t.js","./index-D8GVpBzL.js","./index-BwIZQ7ER.js","./index-TpcTfkuV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-B1SqPCUV.js";import"../sb-preview/runtime.js";try{let e=typeof window<"u"?window:typeof d<"u"?d:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="c0ad9253-ef04-444b-b9dc-a0e68e542b86",e._sentryDebugIdIdentifier="sentry-dbid-c0ad9253-ef04-444b-b9dc-a0e68e542b86")}catch{}const{global:d}=__STORYBOOK_MODULE_GLOBAL__;var o=Object.entries(d.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,n]=r;return n.excludeFromDocsStories&&(e[t]=!0),e},{}),l={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-BMzi68yp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>o[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{l as parameters};
