try{let e=typeof window<"u"?window:typeof o<"u"?o:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cd2f3f3e-21e1-4b00-989a-0650496ee526",e._sentryDebugIdIdentifier="sentry-dbid-cd2f3f3e-21e1-4b00-989a-0650496ee526")}catch{}const{global:o}=__STORYBOOK_MODULE_GLOBAL__,{addons:a}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:g}=__STORYBOOK_MODULE_CORE_EVENTS__;var h="storybook/highlight",_="storybookHighlight",b=`${h}/add`,f=`${h}/reset`,{document:l}=o,O=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,I=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),i=a.getChannel(),y=e=>{let t=_;s();let n=Array.from(new Set(e.elements)),d=l.createElement("style");d.setAttribute("id",t),d.innerHTML=n.map(r=>`${r}{
          ${O(e.color,e.style)}
         }`).join(" "),l.head.appendChild(d)},s=()=>{var n;let e=_,t=l.getElementById(e);t&&((n=t.parentNode)==null||n.removeChild(t))};i.on(g,s);i.on(f,s);i.on(b,y);export{I as highlightObject,O as highlightStyle};
