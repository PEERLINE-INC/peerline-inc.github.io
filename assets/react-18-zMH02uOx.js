import{R as u,r as a}from"./index-Bp_FPQJ0.js";import"./iframe-D_L-YAj8.js";import{r as c}from"./index-DmkVlqCC.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7afa95e5-3b32-40f1-9a4e-ce1453cd43dc",e._sentryDebugIdIdentifier="sentry-dbid-7afa95e5-3b32-40f1-9a4e-ce1453cd43dc")}catch{}var n={},s=c;n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot;var o=new Map,f=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},p=async(e,t)=>{let r=await i(t);return new Promise(d=>{r.render(u.createElement(f,{callback:()=>d(null)},e))})},g=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},i=async e=>{let t=o.get(e);return t||(t=n.createRoot(e),o.set(e,t)),t};export{p as r,g as u};
