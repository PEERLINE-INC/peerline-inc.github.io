import{j as e}from"./inheritsLoose-Dx3Ufxix.js";import{useMDXComponents as t}from"./index-FeUjBnvO.js";import{M as l,d as a,C as i}from"./index-ky_LV8oi.js";import{S as o,B as c}from"./HogakPlayer.stories-CPfXdcPq.js";import"./index-uubelm5h.js";import"./iframe-Cn6jPqkz.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-B_J8iUie.js";import"./index-EfKdj8Ok.js";import"./index-DrFu-skq.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(r.h1,{id:"hogakplayer",children:"HogakPlayer"}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(a,{of:c}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(r.h3,{id:"getcurrentseconds",children:e.jsx(r.code,{children:"getCurrentSeconds()"})}),`
`,e.jsx(r.p,{children:"현재 재생 중인 시간을 초 단위로 반환합니다."}),`
`,e.jsx(r.h4,{id:"예시-코드",children:"예시 코드"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
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
`,e.jsx(r.h3,{id:"setclipviewisshow-boolean-initialcurrentseconds-number",children:e.jsx(r.code,{children:"setClipView(isShow: boolean, initialCurrentSeconds?: number)"})}),`
`,e.jsxs(r.p,{children:["클립 모드를 설정합니다. ",e.jsx("br",{}),`\r
initialCurrentSeconds 가 제공되지 않으면, 현재 재생 중인 시간을 기준으로 클립 뷰를 설정합니다. `,e.jsx("br",{}),`\r
initialCurrentSeconds 가 제공되면, 해당 시간을 기준으로 클립 뷰를 설정합니다.`]}),`
`,e.jsx(r.h4,{id:"예시-코드-1",children:"예시 코드"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ setClipView: (value: boolean, clipValues?: number[]) => void } | null>(null);\r
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
`,e.jsx(r.h3,{id:"setclipvaluesvalues-number",children:e.jsx(r.code,{children:"setClipValues(values: number[])"})}),`
`,e.jsxs(r.p,{children:["클립 시작 시간과 끝 시간을 설정합니다. ",e.jsx("br",{}),`\r
배열에는 시작 시간과 끝 시간이 들어가며, 시작 시간은 끝 시간보다 작아야 합니다. `,e.jsx("br",{}),`\r
setClipView(true) 이후 호출해야 합니다.`]}),`
`,e.jsx(r.h4,{id:"예시-코드-2",children:"예시 코드"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ setClipValues: (values: number[]) => void } | null>(null);\r
\r
  const handleOnClipValues = () => {\r
    if (playerRef.current) {\r
      // 클립 뷰 켜기\r
      playerRef.current.setClipValues([10, 20]);\r
    }\r
  };\r
\r
  return (\r
    <div>\r
      <HogakPlayer\r
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"\r
        ref={playerRef}\r
      />\r
      <button onClick={handleOnClipValues}>클립 값 설정</button>\r
    </div>\r
  );
`})}),`
`,e.jsx(r.h3,{id:"settagviewisshow-boolean",children:e.jsx(r.code,{children:"setTagView(isShow: boolean)"})}),`
`,e.jsx(r.p,{children:"태그 모드를 설정합니다."}),`
`,e.jsx(r.h4,{id:"예시-코드-3",children:"예시 코드"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ setTagView: (value: boolean) => void } | null>(null);\r
\r
  const handleOnTagView = () => {\r
    if (playerRef.current) {\r
      // 태그 뷰 켜기\r
      playerRef.current.setTagView(true);\r
    }\r
  };\r
\r
  return (\r
    <div>\r
      <HogakPlayer\r
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"\r
        ref={playerRef}\r
      />\r
      <button onClick={handleOnTagView}>태그 뷰 켜기</button>\r
    </div>\r
  );
`})}),`
`,e.jsx(r.h3,{id:"setisviewthumbmarkerisshow-boolean",children:e.jsx(r.code,{children:"setIsViewThumbMarker(isShow: boolean)"})}),`
`,e.jsx(r.p,{children:"재생바에 태그 생성을 위한 마커의 표시 여부를 설정합니다."}),`
`,e.jsx(r.h4,{id:"예시-코드-4",children:"예시 코드"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ setIsViewThumbMarker: (value: boolean) => void } | null>(null);\r
\r
  const handleOnThumbMarker = () => {\r
    if (playerRef.current) {\r
      playerRef.current.setIsViewThumbMarker(true);\r
    }\r
  };
`})}),`
`,e.jsx(r.h3,{id:"seektovalue-number-type-seconds--fraction",children:e.jsx(r.code,{children:'seekTo(value: number, type: "seconds" | "fraction")'})}),`
`,e.jsxs(r.p,{children:["재생 시간을 설정합니다. ",e.jsx("br",{}),`\r
type이 "seconds"이면 초 단위로 설정하고, "fraction"이면 재생 시간의 비율(0 ~ 1 사이)로 설정합니다.`]}),`
`,e.jsx(r.h4,{id:"예시-코드-5",children:"예시 코드"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React, { useRef } from 'react';\r
import { HogakPlayer } from './HogakPlayer';\r
\r
const playerRef = useRef<{ seekTo: (value: number, type: "seconds" | "fraction") => void } | null>(null);\r
\r
  const handleOnSeekTo = () => {\r
    if (playerRef.current) {\r
      playerRef.current.seekTo(10, "seconds");\r
    }\r
  };
`})}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{})]})}function R(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{R as default};
