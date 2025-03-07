import{d as M}from"./index-TpcTfkuV.js";try{let r=typeof $<"u"?$:typeof m<"u"?m:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="ec7d1545-bd68-4f03-a968-dfcbafa2ddac",r._sentryDebugIdIdentifier="sentry-dbid-ec7d1545-bd68-4f03-a968-dfcbafa2ddac")}catch{}const{useMemo:y,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__,{global:m}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:l,window:$}=m,x=()=>$.matchMedia("(prefers-reduced-motion: reduce)").matches,O=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let d=e.find(n=>n.name===a);if(d)return d.value;if(a){let n=e.map(o=>o.name).join(", ");B.warn(M`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},h=r=>{(Array.isArray(r)?r:[r]).forEach(S)},S=r=>{var a;let e=l.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=l.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let d=l.createElement("style");d.setAttribute("id",r),d.innerHTML=e,l.head.appendChild(d)}},I=(r,e,a)=>{var n;let d=l.getElementById(r);if(d)d.innerHTML!==e&&(d.innerHTML=e);else{let o=l.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,t=l.getElementById(i);t?(n=t.parentElement)==null||n.insertBefore(o,t):l.head.appendChild(o)}},A=(r,e)=>{var c;let{globals:a,parameters:d}=e,n=(c=a[p])==null?void 0:c.value,o=d[p],i=y(()=>o.disable?"transparent":O(n,o.values,o.default),[o,n]),t=y(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=y(()=>`
      ${s} {
        background: ${i} !important;
        ${x()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return k(()=>{let g=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!t){h(g);return}I(g,u,e.viewMode==="docs"?e.id:null)},[t,u,e]),r()},L=(r,e)=>{var v;let{globals:a,parameters:d}=e,n=d[p].grid,o=((v=a[p])==null?void 0:v.grid)===!0&&n.disable!==!0,{cellAmount:i,cellSize:t,opacity:s}=n,u=e.viewMode==="docs",c=d.layout===void 0||d.layout==="padded"?16:0,g=n.offsetX??(u?20:c),f=n.offsetY??(u?20:c),_=y(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",E=[`${t*i}px ${t*i}px`,`${t*i}px ${t*i}px`,`${t}px ${t}px`,`${t}px ${t}px`].join(", ");return`
      ${b} {
        background-size: ${E} !important;
        background-position: ${g}px ${f}px, ${g}px ${f}px, ${g}px ${f}px, ${g}px ${f}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[t]);return k(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){h(b);return}w(b,_)},[o,_,e]),r()},C=[L,A],D={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},R={[p]:null};export{C as decorators,R as globals,D as parameters};
