import{j as r}from"./inheritsLoose-C5PyBqJG.js";import{useMDXComponents as o}from"./index-FeUjBnvO.js";import{M as s,d as i,C as l}from"./index-B6q-eJHv.js";import{S as a,B as c}from"./HogakPlayer.stories-cPC-uEwp.js";import"./index-uubelm5h.js";import"./iframe-uV3jUZFR.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-B_J8iUie.js";import"./index-EfKdj8Ok.js";import"./index-DrFu-skq.js";import"./index-D3eZ-H7s.js";function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...o(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:a}),`
`,r.jsx(n.h1,{id:"hogakplayer",children:"HogakPlayer"}),`
`,r.jsx(n.hr,{}),`
`,r.jsx(i,{of:c}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,r.jsx(n.h3,{id:"getcurrentseconds",children:r.jsx(n.code,{children:"getCurrentSeconds()"})}),`
`,r.jsx(n.p,{children:"현재 재생 중인 시간을 초 단위로 반환합니다."}),`
`,r.jsx(n.h4,{id:"예시-코드",children:"예시 코드"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ getCurrentSeconds: () => number } | null>(null);\r
\r
  const handleGetCurrentTime = () => {\r
    if (playerRef.current) {\r
      const currentTime = playerRef.current.getCurrentSeconds();\r
      console.log('Current Time:', currentTime);\r
    }\r
  };\r
\r
  return (\r
    <div>\r
      <HogakPlayer\r
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"\r
        ref={playerRef}\r
      />\r
      <button onClick={handleGetCurrentTime}>Get Current Seconds</button>\r
    </div>\r
  );
`})}),`
`,r.jsx(n.h3,{id:"setclipviewisshow-boolean",children:r.jsx(n.code,{children:"setClipView(isShow: boolean)"})}),`
`,r.jsx(n.p,{children:"클립 모드를 설정합니다."}),`
`,r.jsx(n.h4,{id:"예시-코드-1",children:"예시 코드"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ setClipView: (value: boolean) => void } | null>(null);\r
\r
  const handleOnClipView = () => {\r
    if (playerRef.current) {\r
      // 클립 뷰 켜기\r
      playerRef.current.setClipView(true);\r
    }\r
  };\r
\r
  return (\r
    <div>\r
      <HogakPlayer\r
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"\r
        ref={playerRef}\r
      />\r
      <button onClick={handleOnClipView}>클립 켜기</button>\r
    </div>\r
  );
`})}),`
`,r.jsx(n.h2,{id:"props",children:"Props"}),`
`,r.jsx(l,{})]})}function b(e={}){const{wrapper:n}={...o(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(t,{...e})}):t(e)}export{b as default};
