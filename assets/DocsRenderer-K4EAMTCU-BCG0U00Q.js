function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-451bd3NQ.js","./index-B_E7Rm5r.js","./index-Dlylp9S-.js","./iframe-VYsYv-QS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as l}from"./iframe-VYsYv-QS.js";import{R as r,r as m}from"./index-Dlylp9S-.js";import{r as p,u as c}from"./react-18-Dhm4Ztj0.js";import{e as u,A as h,H as f,D as E}from"./index-DNToaVAP.js";import"../sb-preview/runtime.js";import"./index-BSa-Fnj6.js";import"./extends-CGe5f_0W.js";import"./index-D8GVpBzL.js";import"./index-Cg6iGESQ.js";import"./index-TpcTfkuV.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4adbb814-1518-4818-9e05-adcf80a037b3",e._sentryDebugIdIdentifier="sentry-dbid-4adbb814-1518-4818-9e05-adcf80a037b3")}catch{}var b={code:u,a:h,...f},y=class extends m.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:r.createElement(r.Fragment,null,t)}},T=class{constructor(){this.render=async(e,t,o)=>{let n={...b,...t==null?void 0:t.components},s=E;return new Promise((a,i)=>{l(()=>import("./index-451bd3NQ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(({MDXProvider:d})=>p(r.createElement(y,{showException:i,key:Math.random()},r.createElement(d,{components:n},r.createElement(s,{context:e,docsParameter:t}))),o)).then(()=>a())})},this.unmount=e=>{c(e)}}};export{T as DocsRenderer,b as defaultComponents};
