import{j as n}from"./index-BjDsgr9o.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s,d as i,C as c}from"./index-DQahMah5.js";import{S as a,B as l}from"./HogakPlayer.stories-CUCb8VJm.js";import"./index-uubelm5h.js";import"./iframe-DsoHjVf4.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-B_J8iUie.js";import"./index-EfKdj8Ok.js";import"./index-DrFu-skq.js";import"./index-D3eZ-H7s.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:a}),`
`,n.jsx(e.h1,{id:"hogakplayer",children:"HogakPlayer"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(i,{of:l}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"methods",children:"Methods"}),`
`,n.jsx(e.h3,{id:"getcurrentseconds",children:n.jsx(e.code,{children:"getCurrentSeconds()"})}),`
`,n.jsx(e.p,{children:"현재 재생 중인 시간을 초 단위로 반환합니다."}),`
`,n.jsx(e.h4,{id:"예시-코드",children:"예시 코드"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { HogakPlayer } from './HogakPlayer';

const playerRef = useRef<{ getCurrentSeconds: () => number } | null>(null);

  const handleGetCurrentTime = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentSeconds();
      console.log('Current Time:', currentTime);
    }
  };

  return (
    <div>
      <HogakPlayer
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        ref={playerRef}
      />
      <button onClick={handleGetCurrentTime}>Get Current Seconds</button>
    </div>
  );
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{})]})}function k(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{k as default};
